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

export const portfolioItems: {
  slug: string;
  title: string;
  category: Category;
  description: string;
}[] = [
  { slug: "silk-wrap-coat", title: "Silk Wrap Coat", category: "fashion", description: "A hand-draped silk coat with raw-edge seams." },
  { slug: "hand-loomed-runner", title: "Hand-Loomed Table Runner", category: "textile", description: "Naturally dyed cotton runner, woven on a floor loom." },
  { slug: "painted-jewelry-box", title: "Painted Jewelry Box", category: "wood", description: "Reclaimed wood box with hand-painted floral motifs." },
  { slug: "engraved-leather-cuff", title: "Engraved Leather Cuff", category: "leather-jewelry", description: "Vegetable-tanned leather cuff with hand engraving." },
  { slug: "tooled-leather-tote", title: "Tooled Leather Tote", category: "leather-goods", description: "Full-grain leather tote with hand-tooled detailing." },
  { slug: "warm-minimalist-living-room", title: "Warm Minimalist Living Room", category: "interior", description: "A styling project balancing texture and natural light." },
];

export const workshops: {
  slug: string;
  title: string;
  mode: "online" | "in-person";
  description: string;
}[] = [
  { slug: "intro-to-leather-tooling", title: "Intro to Leather Tooling", mode: "in-person", description: "A hands-on half-day workshop covering the basics of leather tooling." },
  { slug: "natural-dye-textiles", title: "Natural Dye Textiles", mode: "online", description: "Learn to dye fabric using plants and natural pigments, from home." },
  { slug: "wood-painting-fundamentals", title: "Wood Painting Fundamentals", mode: "online", description: "Brush technique and composition for painting on wood." },
];
