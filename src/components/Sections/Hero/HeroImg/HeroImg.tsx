import Image from "next/image";
import hero from "@/../public/images/joshua-tree-hero.png";

const HeroImg = () => {
  return (
    <div className="relative h-[60vh] w-full self-end overflow-hidden rounded-3xl">
      <Image src={hero} fill alt="hero" className="object-cover" />
    </div>
  );
};
export default HeroImg;
