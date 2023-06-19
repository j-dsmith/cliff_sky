import clsx from "clsx";

type Props = {
  height: string;
};

const Spacer = ({ height }: Props) => {
  return <div className={clsx("w-full", height)} />;
};
export default Spacer;
