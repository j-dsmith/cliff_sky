import SectionHeader from "@/components/UI/SectionHeader";
import React from "react";
import ImageGrid from "./ImageGrid/ImageGrid";
import { Paintings } from "@/../sanity/lib/queries/paintings";

type Props = {
  paintings: Paintings;
};

const ImageGallery = ({ paintings }: Props) => {
  return (
    <section className="max-w-8xl mx-auto flex-1 px-6 pt-20 md:px-8 lg:px-12">
      <SectionHeader textSegments={{ top: "Painting", bottom: "& Artwork" }} />
      <ImageGrid paintings={paintings} />
    </section>
  );
};

export default ImageGallery;
