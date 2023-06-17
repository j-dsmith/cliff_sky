import clsx from "clsx";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["400"] });

const HeroBanner = () => {
  const h1Class = clsx(["text-8xl"], unbounded.className);
  return (
    <div className="">
      <h1 className={h1Class}>Cliff</h1>
      <h1 className={h1Class}>& Sky</h1>
    </div>
  );
};
export default HeroBanner;
