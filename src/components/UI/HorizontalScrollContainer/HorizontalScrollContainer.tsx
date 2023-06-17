import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className: string;
};

const HorizontalScrollContainer = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(
        "flex w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain",
        className
      )}
    >
      {children}
    </div>
  );
};
export default HorizontalScrollContainer;
