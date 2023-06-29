import clsx from "clsx";

type Props = {
  height: string;
  className?: string;
};

const Spacer = ({ height, className }: Props) => {
  return <div className={clsx("w-full", height, className)} />;
};
export default Spacer;
