import SectionHeader from "@/components/UI/SectionHeader";
import React from "react";
import ImageGrid from "./ImageGrid/ImageGrid";
import { Paintings } from "@/../sanity/lib/queries/paintings";
import Spacer from "@/components/UI/Spacer/Spacer";

type Props = {
  paintings: Paintings;
};

const ImageGallery = ({ paintings }: Props) => {
  return (
    <section className="mx-auto max-w-8xl flex-1 px-4 py-20 3xs:px-2 xs:px-4 md:px-6 lg:px-8 2xl:px-16">
      <SectionHeader textSegments={{ top: "Painting", bottom: "& Artwork" }} />
      <Spacer height="h-6" />
      <ImageGrid paintings={paintings} />
    </section>
  );
};

export default ImageGallery;
