import { FC } from "react";

type SummaryIconProps = {
  children: React.ReactNode;
};

const SummaryIcon: FC<SummaryIconProps> = ({ children }) => {
  return (
    <div className="grid h-11 min-h-[44px] w-11 min-w-[44px] place-items-center rounded-full bg-black text-white shadow-md">
      {children}
    </div>
  );
};

export default SummaryIcon;
