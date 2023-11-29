import CartItemsTable from "@/components/Sections/Cart/CartItemsTable";
import CartSummary from "@/components/Sections/Cart/CartSummary";
import { FC } from "react";

const CartPage: FC = ({}) => {
  return (
    <section className="px-8">
      <div className="flex gap-20 pt-20">
        <div className="flex flex-1 basis-2/3 flex-col gap-8">
          <h1 className="text-4xl font-semibold">Cart</h1>
          <CartItemsTable />
        </div>
        <CartSummary />
      </div>
    </section>
  );
};

export default CartPage;
