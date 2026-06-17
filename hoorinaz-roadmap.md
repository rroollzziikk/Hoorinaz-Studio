# Hoorinaz Studio — Build & Deploy Roadmap

A step-by-step path from "nothing" to "live on a .ca domain on AWS."
Goal: learn Cursor + Claude + AWS along the way. Do the stages in order. Don't skip ahead.

Pairs with `PROJECT_SPEC.md` (the project's source of truth). Keep both in the repo.

---

## The path at a glance

| Stage | You end up with | New skill |
|---|---|---|
| 1 | Site running on `localhost:3000` | Cursor, Next.js |
| 2 | A real database with your tables | Postgres, Prisma |
| 3 | Workshop registration + Stripe test payment works locally | Stripe, server logic |
| 4 | Same site running on AWS | RDS, S3, SES, Amplify, IAM |
| 5 | Live on `hoorinaz.ca` with HTTPS | Route 53, ACM, DNS |
| 6+ | "Khafan" — Claude content assistant, more AWS | FastAPI, Lambda |

Cost reality: AWS free tier + a ~$15–20/year `.ca` domain covers almost everything for the first year. Set a billing alarm in Stage 4 so there are no surprises.

---

## Stage 1 — Get the site running locally

**Prereqs:** install Node.js (LTS), Git, and Cursor. Make a GitHub account.

In an empty folder, open Cursor and paste this prompt:

```
I'm building a website called "Hoorinaz Studio" — a handcraft & design studio
(fashion/clothing design, textile design, painting on wood, leather jewelry and
leather goods, plus interior design and styling). It also runs online and in-person
art workshops with paid registration.

Scaffold a fresh project with this exact stack:
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui

Create these pages with simple placeholder content for now (no database yet):
- /            Home: hero + three pillars (Design, Shop, Workshops)
- /work        Portfolio grid, filterable by category
                (fashion, textile, wood, leather-jewelry, leather-goods, interior, styling)
- /work/[slug] Single project page
- /shop        Grid of products that link out to Etsy
- /workshops   List of workshops (online + in-person)
- /workshops/[slug]  Single workshop with a "Register" button (does nothing yet)
- /about       About the studio
- /contact     Contact form + Instagram and Facebook links

Use a clean, warm, handcrafted look. Make it responsive and mobile-friendly.
After scaffolding, tell me the exact commands to install dependencies and run it locally.
```

Then run the commands Cursor gives you (usually `npm install` then `npm run dev`) and open `http://localhost:3000`. When it looks right, push it to a new GitHub repo — you'll need that repo in Stage 4.

✅ **Done when:** the site loads locally and you can click between all the pages.

---

## Stage 2 — Add a real database (local)

We use Postgres locally so it matches AWS RDS later (same database engine = no surprises).

**2a. Run Postgres locally with Docker** (you know Linux/RHCE, so Docker is easy):

```bash
docker run --name hoorinaz-db -e POSTGRES_PASSWORD=devpass \
  -e POSTGRES_DB=hoorinaz -p 5432:5432 -d postgres:16
```

**2b. Ask Cursor to wire up Prisma** (the ORM — it turns your tables into TypeScript you can call):

```
Add Prisma to the project. Create a schema based on the tables in PROJECT_SPEC.md
section 5 (profiles, portfolio_items, workshops, registrations). Use this local
connection string in .env:
DATABASE_URL="postgresql://postgres:devpass@localhost:5432/hoorinaz"
Then generate the first migration, and create a seed script with 3 sample workshops
and 6 sample portfolio items so I have data to look at.
```

**2c. Run the migration and seed** (Cursor will give exact commands, roughly):

```bash
npx prisma migrate dev --name init
npx prisma db seed
npx prisma studio   # opens a GUI to view/edit your data
```

**2d.** Ask Cursor to make `/workshops` and `/work` read from the database instead of placeholders.

✅ **Done when:** the workshops you see on the site come from the database (edit one in Prisma Studio, refresh, see it change).

---

## Stage 3 — Make registration + payment work (still local)

```
Implement the workshop registration flow from PROJECT_SPEC.md section 6:
- Add Supabase-free auth using NextAuth (email/password) OR a simple email magic link.
- On the workshop page, "Register" creates a Stripe Checkout Session in CAD.
- Add a Stripe webhook route that marks the registration as paid.
- After paying, the workshop shows under /dashboard ("My workshops").
Use Stripe TEST keys. Tell me where to put STRIPE_SECRET_KEY and
STRIPE_WEBHOOK_SECRET, and how to run `stripe listen` to test the webhook locally.
```

Test with Stripe's test card `4242 4242 4242 4242`, any future expiry, any CVC.

✅ **Done when:** you can sign up, "pay" with the test card, and see the workshop in your dashboard.

> This is the end of the "learn Cursor + the app" part. Everything below is the AWS part.

---

## Stage 4 — Deploy to AWS

Do these in order. This is your core AWS learning.

**4a. Account safety first** (5 minutes, saves you from bills):
- Create an AWS account. Turn on MFA for the root user, then stop using root.
- Create an IAM user for yourself with admin access; log in as that from now on.
- Go to Billing → Budgets → create a $10/month budget alarm.

**4b. Database → Amazon RDS:**
- Create a PostgreSQL instance, class `db.t4g.micro` (free-tier eligible).
- Save the endpoint, username, password → this becomes your production `DATABASE_URL`.
- In its security group, allow inbound Postgres (5432) only from where your app runs.

**4c. Images → Amazon S3 + CloudFront:**
- Create an S3 bucket for portfolio/workshop images.
- Put a CloudFront distribution in front of it (this is your CDN + HTTPS for images).

**4d. Email → Amazon SES:**
- Verify your sending domain/email.
- Note: new SES accounts start in "sandbox" (can only email verified addresses).
  Request production access before launch so confirmation emails reach real customers.

**4e. Deploy the app → AWS Amplify Hosting:**
- Connect Amplify to your GitHub repo. It builds and hosts the Next.js app automatically on every push.
- Add environment variables in Amplify: `DATABASE_URL` (the RDS one), Stripe LIVE keys,
  SES credentials, auth secret.
- Run `npx prisma migrate deploy` against RDS so production has your tables.

> Why Amplify: it's the gentlest way to host a Next.js app on AWS while still using
> the real AWS console, IAM, RDS, S3, and SES. Later, for deeper AWS skills, you can
> re-deploy the same app on ECS/Fargate or EC2 — the app code won't change.

✅ **Done when:** the Amplify URL (something like `main.xxxx.amplifyapp.com`) shows your live site, reading from RDS.

---

## Stage 5 — Domain in Canada (.ca) + go live

**5a. Register the domain in Route 53:**
- Route 53 → Registered domains → Register. Search `hoorinaz.ca` (or your choice).
- `.ca` is supported by Route 53. You'll fill a CIRA "Canadian Presence" category —
  pick "Canadian citizen" or "Permanent Resident" / your applicable status.
- This auto-creates a hosted zone for DNS.

**5b. HTTPS certificate → AWS Certificate Manager (ACM):**
- Request a free public certificate for `hoorinaz.ca` and `www.hoorinaz.ca`.
- Validate it via DNS (ACM adds a record to your Route 53 zone automatically).

**5c. Point the domain at the app:**
- In Amplify → Domain management → add `hoorinaz.ca`. Amplify wires the Route 53 records for you.

✅ **Done when:** `https://hoorinaz.ca` loads your site with a padlock (valid HTTPS).

---

## Stage 6+ — Level up ("khafan")

Tackle these one at a time, only after Stage 5 is solid:

- **Content assistant (Claude):** a small **Python / FastAPI** service with one endpoint:
  upload a photo or video of a piece → it calls the Claude API → returns a ready Instagram
  caption + story text + hashtags, in English and Persian. Deploy it as an **AWS Lambda**
  (or a container on App Runner). This is where your Java background helps conceptually and
  you pick up Python + serverless AWS.
- **On-demand video library** (gated by payment) — Spec Phase 2.
- **Passes & memberships** with recurring billing — Spec Phase 2.
- **Bilingual UI** (English + Persian) for the Halifax Persian-speaking community.

---

## When you get stuck

At any step, paste the error into Cursor with: *"I'm at Stage X of hoorinaz-roadmap.md.
Here's the error: [...]. What's the fix?"* — give it the roadmap + spec as context and it
can almost always unblock you.
