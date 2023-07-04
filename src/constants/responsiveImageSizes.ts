export type ImageBannerRole =
  | "hero"
  | "projectThumbnail"
  | "contact"
  | "painting";

export const responsiveImageSizes = {
  hero: "(min-width: 320px) 288px, (min-width: 375px) 343px, (min-width: 425px) 393px, (min-width: 768px) 720px, (min-width: 1024px) 976px, (min-width: 1440px) 1088px",
  projectThumbnail:
    "(min-width: 320px) 144px, (min-width: 768px) 162px, (min-width: 1024px) 216px, (min-width: 1440px) 248px",
  contact:
    "(min-width: 320px) 288px, (min-width: 375px) 343px, (min-width: 425px) 393px, (min-width: 768px) 344px, (min-width: 1024px) 456px, (min-width: 1440px) 520px",
  painting:
    "(min-width: 320px) 288px, (min-width: 375px) 343px, (min-width: 425px) 393px, (min-width: 768px) 348px, (min-width: 1024px) 464px, (min-width: 1440px) 342px",
} as const;
