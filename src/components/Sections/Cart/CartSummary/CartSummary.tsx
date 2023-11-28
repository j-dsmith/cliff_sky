import { FC } from "react";

interface CartSummaryProps {}

const CartSummary: FC<CartSummaryProps> = ({}) => {
  return (
    <div className="flex flex-col pt-20">
      <h1 className="text-4xl font-semibold">Cart</h1>
    </div>
  );
};

export default CartSummary;
