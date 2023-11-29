import { FC } from "react";
import TableHeadCell from "./TableHeadCell";
import TableItems from "./TableItems";

interface CartItemsTableProps {}

const CartItemsTable: FC<CartItemsTableProps> = ({}) => {
  return (
    <table className="">
      <thead>
        <tr className="border-b">
          <TableHeadCell text="Item" className="w-1/6" />
          <TableHeadCell text="" className="w-2/6" />
          <TableHeadCell text="Quantity" className="w-1/6" />
          <TableHeadCell text="Price" className="w-1/6" />
          <TableHeadCell text="Total" className="w-1/6" />
        </tr>
      </thead>
      <tbody>
        <TableItems />
      </tbody>
    </table>
  );
};

export default CartItemsTable;
