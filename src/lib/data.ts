export const categories = [
  "fashion",
  "textile",
  "wood",
  "leather-jewelry",
  "leather-goods",
  "interior",
  "styling",
] as const;

export type Category = (typeof categories)[number];

export const categoryLabel: Record<Category, string> = {
  fashion: "Fashion",
  textile: "Textile",
  wood: "Wood",
  "leather-jewelry": "Leather Jewelry",
  "leather-goods": "Leather Goods",
  interior: "Interior",
  styling: "Styling",
};

/* ───────────── Portfolio (the studio's body of work) ───────────── */
export const portfolioItems: {
  slug: string;
  title: string;
  category: Category;
  description: string;
  year?: string;
}[] = [
  { slug: "silk-wrap-coat", title: "Silk Wrap Coat", category: "fashion", description: "A hand-draped silk coat with raw-edge seams and a quiet, sculptural fall.", year: "2025" },
  { slug: "hand-loomed-runner", title: "Hand-Loomed Table Runner", category: "textile", description: "Naturally dyed cotton, woven on a floor loom over four slow afternoons.", year: "2025" },
  { slug: "painted-jewelry-box", title: "Painted Jewelry Box", category: "wood", description: "Reclaimed wood box, hand-painted with floral motifs in egg tempera.", year: "2024" },
  { slug: "engraved-leather-cuff", title: "Engraved Leather Cuff", category: "leather-jewelry", description: "Vegetable-tanned leather, hand engraved and finished with a beeswax burnish.", year: "2025" },
  { slug: "tooled-leather-tote", title: "Tooled Leather Tote", category: "leather-goods", description: "Full-grain leather tote, hand-tooled with a pattern drawn from Persian tilework.", year: "2024" },
  { slug: "warm-minimalist-living-room", title: "Warm Minimalist Living Room", category: "interior", description: "A styling project balancing texture, warmth, and the late-afternoon light.", year: "2024" },
];

/* ───────────── Shop (real pieces for sale) ───────────── */
export type Product = {
  slug: string;
  title: string;
  category: Category;
  price: number;            // CAD
  currency?: string;
  image: string;
  description: string;
  details?: string[];
  etsyUrl?: string;
  soldOut?: boolean;
  comingSoon?: boolean;     // true while we wait on a product photo
};

export const products: Product[] = [
  {
    slug: "coral-bloom-earrings",
    title: "Coral Bloom Earrings",
    category: "leather-jewelry",
    price: 35,
    currency: "CAD",
    image: "/shop/coral-bloom.png",
    comingSoon: true,
    description:
      "Hand-cut red leather flowers on coral beads, finished with a small silver butterfly that catches the light when you move.",
    details: [
      "Genuine leather, hand-cut and sealed",
      "Coral & glass beads · nickel-free hooks",
      "Approx. 6 cm drop · feather-light",
      "One of a small batch — slight variations are part of the make",
    ],
    etsyUrl: "https://www.etsy.com",
  },
  {
    slug: "lotus-on-ink-earrings",
    title: "Lotus on Ink Earrings",
    category: "leather-jewelry",
    price: 42,
    currency: "CAD",
    image: "/shop/lotus-on-ink.png",
    description:
      "Black leather half-moons holding rose-pink petals — arranged like a quiet lotus opening at first light.",
    details: [
      "Genuine leather, hand-cut and layered",
      "Sterling-tone hooks · nickel-free",
      "Approx. 5 cm drop",
      "Limited edition of 12",
    ],
    etsyUrl: "https://www.etsy.com",
  },
  {
    slug: "copper-mandala-earrings",
    title: "Copper Mandala Earrings",
    category: "leather-jewelry",
    price: 48,
    currency: "CAD",
    image: "/shop/copper-mandala.png",
    description:
      "Antiqued copper mandalas cradling a vermillion leather disc — a small, warm sun for the everyday.",
    details: [
      "Antiqued copper alloy frame",
      "Hand-set leather centre, edge-painted",
      "Approx. 4 cm diameter",
      "Statement piece — pairs well with a quiet outfit",
    ],
    etsyUrl: "https://www.etsy.com",
  },
];

/* ───────────── Workshops ───────────── */
export const workshops: {
  slug: string;
  title: string;
  mode: "online" | "in-person";
  description: string;
  duration?: string;
  price?: string;
}[] = [
  { slug: "intro-to-leather-tooling", title: "Intro to Leather Tooling", mode: "in-person", description: "A hands-on half-day workshop covering the fundamentals of leather tooling — patterning, beveling, and finishing.", duration: "4 hours", price: "$120" },
  { slug: "natural-dye-textiles", title: "Natural Dye Textiles", mode: "online", description: "Dye fabric using plants and natural pigments from your own kitchen. Materials list provided.", duration: "3 sessions × 90 min", price: "$95" },
  { slug: "wood-painting-fundamentals", title: "Wood Painting Fundamentals", mode: "online", description: "Brush technique, surface prep, and composition for painting motifs on reclaimed wood.", duration: "2 sessions × 2 hours", price: "$80" },
];
