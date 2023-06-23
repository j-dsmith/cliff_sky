import Image from "next/image";
import { Paintings } from "@/../sanity/lib/queries/paintings";
import { urlForImage } from "@/../sanity/lib/image";
import ImageCard from "../ImageCard";

type Props = {
  paintings: Paintings;
};

const ImageGrid = ({ paintings }: Props) => {
  const renderPaintings = () => {
    return Array(20)
      .fill(paintings[0])
      .map((painting) => (
        <ImageCard key={painting.image.key} painting={painting} />
      ));
  };
  return (
    <div className="grid w-full grid-cols-auto gap-x-6 gap-y-4 md:gap-x-8 md:gap-y-6 lg:gap-x-12 lg:gap-y-10">
      {renderPaintings()}
    </div>
  );
};

export default ImageGrid;
