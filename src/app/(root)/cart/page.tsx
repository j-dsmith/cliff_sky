import CartItemsList from "@/components/Sections/Cart/CartItemsList";
import CartItemsTable from "@/components/Sections/Cart/CartItemsTable";
import CartSummary from "@/components/Sections/Cart/CartSummary";
import Preload from "@/components/UI/Preload";
import { cn } from "@/utils/utils";
import { Unbounded } from "next/font/google";
import { FC } from "react";

const unbounded = Unbounded({ weight: ["500"], subsets: ["latin"] });

const CartPage: FC = () => {
  return (
    <>
      <Preload />
      <section className="pb-20 3xs:px-2 xs:px-4 md:px-6 lg:px-8 2xl:px-16">
        <div className="grid-cols-1 gap-20 pt-20 3xs:grid lg:flex">
          <div className="flex flex-1 basis-2/3 flex-col gap-8">
            <h1 className={cn("text-4xl font-semibold", unbounded.className)}>
              Shopping Cart
            </h1>
            <CartItemsTable />
            <CartItemsList />
          </div>
          <CartSummary />
        </div>
      </section>
    </>
  );
};

export default CartPage;
