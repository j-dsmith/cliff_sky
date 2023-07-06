import ImageGallery from "@/components/Sections/ImageGallery";
import SectionHeader from "@/components/UI/SectionHeader";
import React from "react";
import { Paintings, getPaintings } from "@/../sanity/lib/queries/paintings";
import Preload from "@/components/UI/Preload";

export const metadata = {
  title: "Paintings - Cliff & Sky",
  description: "Paintings by Carey deVictoria-Michel",
};

const Painting = async () => {
  const paintings = await getPaintings();

  return (
    <>
      <Preload />
      <ImageGallery paintings={paintings ?? []} />;
    </>
  );
};

export default Painting;
