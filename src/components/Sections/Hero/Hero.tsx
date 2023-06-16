import HeroBanner from "./HeroBanner/HeroBanner";
import HeroImg from "./HeroImg/HeroImg";

const Hero = () => {
  return (
    <section className="flex h-[calc(100vh-80px)] w-full flex-col gap-4 pb-4 pt-20">
      <HeroBanner />
      <HeroImg />
    </section>
  );
};
export default Hero;
