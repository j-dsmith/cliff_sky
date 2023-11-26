"use client";

import React, { FC } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

type CartProviderProps = {
  children: React.ReactNode;
};

const CartProvider: FC<CartProviderProps> = ({ children }) => {
  return (
    <USCProvider
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY || ""}
      currency={"USD"}
      shouldPersist={true}
    >
      {children}
    </USCProvider>
  );
};

export default CartProvider;
