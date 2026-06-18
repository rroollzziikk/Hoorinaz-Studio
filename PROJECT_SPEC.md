# Hoorinaz Studio — Website Build Spec

> A spec written to be dropped into Cursor as the project's source of truth.
> Paste this whole file into your repo as `PROJECT_SPEC.md` and reference it in your Cursor prompts.

---

## 1. Goal

Build a website for **Hoorinaz** (brand: `@hoorinaz.art`), a handcraft & design studio in Halifax, NS, Canada. The site is part **portfolio**, part **shop front**, and part **class/workshop platform** — modeled on the all-in-one teaching tool Ubindi, but tailored to a single artist's brand.

Hoorinaz's work, in her own priority order:

1. **Design** — including fashion / clothing design, plus the design side of leather goods, wood painting, and jewelry. Show both *design* (sketches, concepts) and *execution* (finished pieces).
2. **Products** — physical handcrafted goods, sold through an existing **Etsy** shop.
3. **Classes & workshops** — both **online** and **in-person**, with **registration** and **online payment**.

The site must also connect to **Instagram** and **Facebook**, link out to **Etsy**, and be **easy to extend** later.

---

## 2. What we borrow from Ubindi (module breakdown)

Ubindi is really 8 independent modules. We only need a few for v1; the rest are clean add-ons later.

| Module | Ubindi behavior | Use in v1? |
|---|---|---|
| Payments | Stripe; payment can be required / optional / donation | ✅ Yes (Stripe Checkout) |
| Classes + booking + attendance | Students sign up on a schedule; auto confirmation + reminder emails; capacity limits; attendance | ✅ Yes (registration + capacity + confirmation email) |
| On-demand videos | Library of recordings gated by payment/pass; YouTube/Vimeo embed | ⏳ Phase 2 |
| Passes & memberships | Punch-card passes (credits + expiry) and recurring subscriptions | ⏳ Phase 2 |
| Client management | Tags/groups, stats, group email, student notes | ✅ Light version (student list in admin) |
| Website integration | Embeddable widgets | ❌ Not needed — this *is* the website |
| Waivers | Sign terms before access | ⏳ Phase 2 (optional checkbox at checkout in v1) |
| Referral program | Class credits for referrals | ⏳ Phase 3 |

**Key pattern to copy from Ubindi for online classes:** when a student pays, they get a confirmation, and for online sessions a "magic link" that takes them to the Zoom/Meet session — they never see the raw meeting URL, so it can't be shared. In v1 a simpler version is fine: store the meeting link, reveal it only to paid registrants inside their dashboard + reminder email.

---

## 3. Tech stack (Cursor-friendly)

Chosen so Cursor can scaffold and extend it with minimal friction.

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui (Radix-based components)
- **Database / ORM:** PostgreSQL + Prisma (local via Docker in dev, Amazon RDS in production)
- **Auth:** NextAuth (email/password or magic link), with our own `role` column on the user table — no third-party auth platform
- **Payments:** Stripe — Checkout Sessions + webhooks (supports CAD; works in Canada)
- **Transactional email:** Amazon SES (confirmations, reminders)
- **Hosting:** AWS Amplify Hosting (frontend + server functions), connected to GitHub
- **Images:** Amazon S3 + CloudFront, or just `/public` for the portfolio in v1

Why this stack: it's a plain Next.js + Postgres app with no managed-backend platform in the loop, so every piece (auth, DB, storage, email, hosting) is a real AWS skill rather than a black box — that's an explicit goal of `hoorinaz-roadmap.md`, which this spec is meant to match exactly. The tradeoff vs. an all-in-one platform like Supabase is that authorization checks (who can read/write what) must be written by hand in a data-access layer instead of coming for free as database-level Row Level Security — see section 5. Stripe is the same processor Ubindi uses, so the Canada/CAD path is proven.

---

## 4. Site structure (pages)

```
/                      Home — hero, featured work, what Hoorinaz does (3 pillars)
/work                  Portfolio — filter by category (fashion, leather, wood, jewelry)
/work/[slug]           Single project — design + finished pieces, gallery, Etsy link
/shop                  Shop — curated featured products → links out to Etsy
/workshops             All workshops (online + in-person), filterable
/workshops/[slug]      Single workshop — details, price, date, capacity, "Register" button
/about                 About Hoorinaz + the studio + Arezoo Store / Agricola St context
/contact               Contact form + social links (Instagram, Facebook)

# Auth-gated
/login  /signup        NextAuth
/dashboard             Student: my workshops (upcoming/past), my videos (phase 2), passes
/admin                 Owner-only: create/edit workshops, view registrations, manage portfolio
```

---

## 5. Data model (Postgres tables, via Prisma)

```sql
-- users (NextAuth's standard User/Account/Session/VerificationToken tables,
-- extended with our own fields below via the Prisma schema)
users               (id uuid PK, full_name text, email text unique,
                     role text default 'student',   -- 'student' | 'admin'
                     avatar_url text, created_at timestamptz default now())

-- portfolio
portfolio_items     (id uuid PK, title text, slug text unique,
                     category text,                 -- 'fashion' | 'leather' | 'wood' | 'jewelry'
                     kind text,                     -- 'design' | 'finished'
                     description text, images text[],
                     etsy_url text, featured bool default false,
                     created_at timestamptz default now())

-- workshops / classes
workshops           (id uuid PK, title text, slug text unique, description text,
                     category text,                 -- 'fashion' | 'leather' | 'wood' | 'jewelry'
                     format text,                   -- 'online' | 'in_person'
                     cover_image text,
                     price_cents int, currency text default 'CAD',
                     capacity int, location text,   -- address for in_person
                     meeting_link text,             -- Zoom/Meet for online (revealed to paid only)
                     starts_at timestamptz, ends_at timestamptz,
                     status text default 'draft',   -- 'draft' | 'published'
                     created_at timestamptz default now())

-- registrations (one per student per workshop)
registrations       (id uuid PK, workshop_id uuid ref workshops, user_id uuid ref users,
                     status text default 'pending', -- 'pending' | 'paid' | 'cancelled'
                     stripe_session_id text, amount_cents int,
                     waiver_accepted bool default false,
                     created_at timestamptz default now(),
                     unique(workshop_id, user_id))

-- PHASE 2
videos              (id uuid PK, title text, description text,
                     provider text, video_id text,  -- 'youtube' | 'vimeo'
                     thumbnail text, price_cents int, access text) -- 'free' | 'paid'
video_access        (id uuid PK, user_id uuid, video_id uuid, granted_at timestamptz)
```

**Capacity rule:** a workshop is full when `count(registrations where status='paid') >= capacity`. Enforce this in the registration server action *before* creating the Stripe session, and re-check on the webhook to avoid overbooking.

**Authorization (no database-level RLS on plain Postgres/RDS):** every query that touches `registrations`, `workshops`, or `portfolio_items` must go through a shared data-access layer that takes the authenticated session and enforces the rule explicitly — students may only read their own `registrations`; only `role='admin'` may write `workshops` / `portfolio_items`. Because there's no RLS safety net here, this has to be enforced in code on every route/server action, not bolted on later — it's the most common thing Cursor forgets when there's no database-level backstop.

---

## 6. Core flows

### Workshop registration + payment (the heart of v1)
1. Visitor opens `/workshops/[slug]`, clicks **Register**.
2. If not logged in → send to `/login` and back.
3. Server action checks capacity → creates a Stripe **Checkout Session** (mode `payment`, currency CAD) → redirects to Stripe.
4. Stripe **webhook** (`checkout.session.completed`) marks the matching `registration` as `paid`.
5. Webhook triggers a **confirmation email** (Amazon SES). For online workshops it includes how/when to join (link revealed in dashboard); for in-person it includes the address + what to bring.
6. The workshop now appears under **My workshops** in `/dashboard`.

### Student dashboard `/dashboard`
- Upcoming workshops (with join link / address shown only here)
- Past workshops
- (Phase 2) My videos, my passes

### Admin `/admin`
- Create / edit / publish workshops
- See the registrant list per workshop (name, email, paid status)
- Add / edit portfolio items
- (Phase 2) upload videos, create passes

### Shop
- v1: a curated grid of `featured` products that link out to the **Etsy** listing — no inventory, no shipping logic on our side. Keep it simple; Etsy already handles payments + fulfillment for goods.
- A clear "See full shop on Etsy" button.

### Social
- Instagram + Facebook links in header/footer.
- Optional: an Instagram feed section on the home page. Easiest reliable method is a lightweight embed or a manually curated image grid that links to the profile — avoid fragile scraping of Instagram.

---

## 7. Payments — Canada specifics

- Use **Stripe**, currency **CAD**. Stripe is fully supported in Canada and is the same processor Ubindi uses.
- Hoorinaz needs a Stripe account (business or individual). Connect it via the secret key in env vars — never in client code.
- Store `price_cents` as integers (e.g. `4500` = $45.00 CAD) to avoid float bugs.
- Test with Stripe test mode + card `4242 4242 4242 4242` before going live.
- Required env vars: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`.

---

## 8. Design direction (for `@hoorinaz.art`)

Ground the look in Hoorinaz's actual materials — leather, dye, thread, raw wood, fabric — not a generic "artsy" template. Pull the *real* brand colors from the Instagram `@hoorinaz.art` and override the placeholders below.

**Starting token system (placeholder — replace with real brand values):**

- Color: `--ink #232021` (near-black, like dye), `--linen #EDE6DA` (undyed cloth, base bg), `--tan #B07D52` (vegetable-tanned leather), `--brass #A07A2C` (hardware accent), `--thread #9C3B2E` (stitch-red accent, used sparingly).
- Type — because fashion design is a pillar, lean editorial: a characterful **display** face used large and with restraint for headings, paired with a clean humanist **sans** for body, and a small mono/utility face for prices, dates, and labels. (Avoid the over-used high-contrast-serif + cream + terracotta combo; the leather/thread palette above already pulls you away from it.)
- Signature element: treat the three pillars (Design / Products / Classes) and the portfolio categories as **material swatches** — tactile cards with a stitched or seamed edge — so the navigation itself feels handmade. Use this as *the* memorable device and keep everything else quiet.

Quality floor: responsive to mobile, visible keyboard focus, respect reduced-motion, real alt text on portfolio images.

---

## 9. Build phases

**Phase 1 — MVP (ship this first)**
- Public pages: Home, Work (portfolio + filters), single project, Shop (Etsy links), Workshops list + single, About, Contact.
- NextAuth (signup/login).
- Workshop registration → Stripe Checkout (CAD) → webhook → confirmation email.
- Student dashboard: my workshops + join link/address.
- Minimal admin: create/publish workshops, add portfolio items, view registrants.
- Instagram + Facebook links.

**Phase 2**
- On-demand video library (gated by payment), YouTube/Vimeo embeds.
- Passes & memberships (credits + recurring subscriptions).
- Automated reminder email before each session (cron / scheduled function).
- Proper waivers.
- Instagram feed section.

**Phase 3**
- Referral program (class credits).
- Direct product sales on-site (if she ever wants to move off Etsy).
- Analytics: attendance, revenue, repeat students.
- Bilingual UI (English + Persian) for the Halifax Persian-speaking community.

---

## 10. Starter prompts for Cursor

Run these in order inside Cursor (with this file in the repo):

1. **Scaffold:**
   > "Read PROJECT_SPEC.md. Scaffold a Next.js 15 App Router + TypeScript + Tailwind + shadcn/ui project. Add Prisma with a Postgres connection and set up NextAuth (Prisma adapter) with the auth pages (/login, /signup). Create the database schema from section 5 as a Prisma schema + migration. Don't build features yet."

2. **Public site:**
   > "Build the public pages from section 4 (Home, /work, /work/[slug], /shop, /workshops, /workshops/[slug], /about, /contact) using the design direction in section 8. Use placeholder content. Workshops and portfolio read from Postgres via Prisma."

3. **Registration + payments:**
   > "Implement the workshop registration flow from section 6: capacity check (enforced with a DB-level lock/constraint, not just app logic), Stripe Checkout in CAD, an idempotent webhook handler that marks the registration paid and sends a confirmation email via Amazon SES. Add the student dashboard at /dashboard."

4. **Admin:**
   > "Build the owner-only /admin area: create/edit/publish workshops, manage portfolio items, and list registrants per workshop. Protect it by checking role='admin' in a shared data-access layer (see section 5) on every query and route, not just in the UI."

---

*Built as a starting point. Every section is meant to be edited as Hoorinaz's needs become clearer.*