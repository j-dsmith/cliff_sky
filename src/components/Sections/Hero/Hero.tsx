import HeroBanner from "./HeroBanner/HeroBanner";
import heroImg from "@/../public/images/joshua-tree-hero.png";
import ImageBanner from "@/components/UI/ImageBanner/ImageBanner";

const Hero = () => {
  return (
    <section className="flex h-[calc(100vh-80px)] flex-col gap-6 px-4 pb-4 pt-20">
      <HeroBanner />
      <ImageBanner src={heroImg} className="h-full" />
    </section>
  );
};
export default Hero;
