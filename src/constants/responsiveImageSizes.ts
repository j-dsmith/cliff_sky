export type ImageBannerRole =
  | "hero"
  | "projectThumbnail"
  | "contact"
  | "painting";

export const responsiveImageSizes = {
  hero: "100vw",
  projectThumbnail: "33vw",
  contact: "50vw",
  painting: "33vw",
} as const;
