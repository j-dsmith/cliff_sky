import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  className?: string;
};

const ImageBanner = ({ src, className }: Props) => {
  return (
    <div
      className={clsx(
        "relative w-full self-end overflow-hidden rounded-3xl",
        className
      )}
    >
      <Image src={src} fill alt="hero" className="object-cover" />
    </div>
  );
};
export default ImageBanner;
