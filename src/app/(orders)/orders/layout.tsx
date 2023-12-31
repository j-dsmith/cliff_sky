import { cn } from "@/utils/utils";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import CartProvider from "@/providers/CartProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function OrdersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(montserrat.className)}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
