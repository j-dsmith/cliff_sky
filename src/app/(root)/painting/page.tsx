import ImageGallery from "@/components/Sections/ImageGallery";
import SectionHeader from "@/components/UI/SectionHeader";
import React from "react";
import { Paintings, getPaintings } from "@/../sanity/lib/queries/paintings";

export const metadata = {
  title: "Paintings - Cliff & Sky",
  description: "Paintings by Carey deVictoria-Michel",
};

const Painting = async () => {
  let paintings: Paintings;
  try {
    paintings = await getPaintings();
  } catch (error) {
    paintings = [];
  }

  return <ImageGallery paintings={paintings} />;
};

export default Painting;
