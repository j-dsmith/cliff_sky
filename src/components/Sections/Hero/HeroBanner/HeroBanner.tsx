import clsx from "clsx";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["200", "500"] });

const HeroBanner = () => {
  const h1BaseClass = clsx(["text-8xl"], unbounded.className);
  return (
    <div className={h1BaseClass}>
      <h1 className="font-medium">Cliff</h1>
      <h1 className="font-extralight">& Sky</h1>
    </div>
  );
};
export default HeroBanner;
