import HeroBanner from "./HeroBanner/HeroBanner";
import heroImg from "@/../public/images/joshua-tree-hero.png";
import ImageBanner from "@/components/UI/ImageBanner";

const Hero = () => {
  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col gap-6 px-4 pb-4 pt-20 md:px-6 md:pb-6">
      <HeroBanner textSegments={{ top: "Cliff", bottom: "& Sky" }} />
      <ImageBanner
        priority={true}
        src={heroImg}
        className="flex-1 md:min-h-[400px]"
      />
    </section>
  );
};
export default Hero;
