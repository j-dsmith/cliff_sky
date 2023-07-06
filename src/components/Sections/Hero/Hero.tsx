import HeroBanner from "./HeroBanner/HeroBanner";
import heroImg from "@/../public/images/joshua_tree_hero.png";
import ImageBanner from "@/components/UI/ImageBanner";

const Hero = () => {
  return (
    <section className="flex min-h-[calc(100vh-80px)] flex-col gap-6 px-4 pb-4 pt-16 md:px-6 md:pb-6 lg:px-8">
      <HeroBanner textSegments={{ top: "Cliff", bottom: "& Sky" }} />
      <ImageBanner
        role="hero"
        delay={2}
        blurDataURL="/images/joshua_tree_hero.png"
        priority={true}
        src={heroImg}
        className="flex-1"
      />
    </section>
  );
};
export default Hero;
