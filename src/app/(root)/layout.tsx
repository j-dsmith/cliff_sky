import Footer from "@/components/Common/Footer";
import "@/app/globals.css";
import Header from "@/components/Common/Header/Header";
import clsx from "clsx";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import Preload from "@/components/UI/Preload";
import CartProvider from "@/providers/CartProvider";
import MiniCart from "@/components/Sections/Shop/MiniCart";
import CartButton from "@/components/UI/CartButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Cliff & Sky",
  description: "Art & Design by Carey deVictoria-Michel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={clsx(montserrat.className)}>
          <CartProvider>
            <div className="mx-auto flex h-full max-w-6xl flex-col 5xl:max-w-10xl">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <MiniCart />
              <CartButton />
            </div>
          </CartProvider>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
