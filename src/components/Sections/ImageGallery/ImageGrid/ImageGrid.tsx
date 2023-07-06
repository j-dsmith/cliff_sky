import Image from "next/image";
import { Paintings } from "@/../sanity/lib/queries/paintings";
import { urlForImage } from "@/../sanity/lib/image";
import ImageCard from "../ImageCard";

type Props = {
  paintings: Paintings;
};

const ImageGrid = ({ paintings }: Props) => {
  const renderPaintings = () => {
    return paintings.map((painting) => (
      <ImageCard key={painting._id} painting={painting} />
    ));
  };
  return (
    <div className="grid w-full gap-x-4 gap-y-4 3xs:grid-cols-auto-xs xs:grid-cols-auto md:gap-x-6 md:gap-y-4 lg:gap-x-8 lg:gap-y-6">
      {renderPaintings()}
    </div>
  );
};

export default ImageGrid;
