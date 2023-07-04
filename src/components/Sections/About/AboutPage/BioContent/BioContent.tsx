import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const BioContent = ({ children }: Props) => {
  return <div className="flex flex-col gap-6">{children}</div>;
};
export default BioContent;
