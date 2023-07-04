import Image from "next/image";
import { Painting } from "@/../sanity/lib/queries/paintings";
import { urlForImage } from "@/../sanity/lib/image";
import { Unbounded } from "next/font/google";
import clsx from "clsx";
import Spacer from "@/components/UI/Spacer/Spacer";
import { responsiveImageSizes } from "@/constants/responsiveImageSizes";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["300"] });

type Props = {
  painting: Painting;
};
const ImageCard = ({ painting }: Props) => {
  const year = new Date(painting.year, 0, 1).getFullYear();
  return (
    <div className="">
      <div className="relative aspect-square w-full min-w-[144px] snap-start overflow-hidden rounded-lg">
        <Image
          alt=""
          src={urlForImage(painting.image).url()}
          placeholder="blur"
          blurDataURL={urlForImage(painting.image).url()}
          priority
          sizes={responsiveImageSizes.painting}
          className="object-cover"
          fill={true}
        />
      </div>
      <Spacer height="h-1" />
      <div className="flex items-baseline justify-between">
        <h3 className={clsx("text-lg", unbounded.className)}>
          {painting.title}
        </h3>
        <span>{year}</span>
      </div>
    </div>
  );
};

export default ImageCard;
