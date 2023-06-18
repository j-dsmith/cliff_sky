import { Unbounded } from "next/font/google";
import HeroBanner from "./HeroBanner/HeroBanner";
import HeroImg from "./HeroImg/HeroImg";
import clsx from "clsx";

const Hero = () => {
  return (
    <section className="flex h-[calc(100vh-80px)] flex-col gap-6 px-4 pb-4 pt-20">
      <HeroBanner />
      <HeroImg />
    </section>
  );
};
export default Hero;
