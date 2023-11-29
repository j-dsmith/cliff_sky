import clsx from "clsx";
import { FC } from "react";

interface TableHeadCellProps {
  text: string;
  className?: string;
}

const TableHeadCell: FC<TableHeadCellProps> = ({ text, className }) => {
  return (
    <th
      className={clsx(
        "pb-4 text-left text-sm font-semibold text-stone-600",
        className
      )}
    >
      {text}
    </th>
  );
};

export default TableHeadCell;
