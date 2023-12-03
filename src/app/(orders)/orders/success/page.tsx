import OrderSummary from "@/components/Sections/Orders/OrderSummary";
import SuccessAnimation from "@/components/Sections/Orders/SuccessAnimation";
import logo from "@/../public/C&S_logo_mustard.svg";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

type OrderSuccessPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const OrderSuccessPage: FC<OrderSuccessPageProps> = async ({
  searchParams,
}) => {
  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="h-20 px-4 pt-4 md:px-6 md:pt-6 lg:px-8 lg:pt-8">
        <Link href="/">
          <div className="drop-shadow-sm">
            <Image src={logo} height={40} width={40} alt="logo" priority />
          </div>
        </Link>
      </div>
      <section className="grid-cols-1 pb-6 pt-16 3xs:grid 3xs:gap-y-16 3xs:px-4 3xs:pt-12 xs:px-5 md:px-8 lg:flex lg:max-h-[calc(100%-80px)]">
        <OrderSummary sessionId={searchParams["session_id"] as string} />
        <SuccessAnimation />
      </section>
    </div>
  );
};

export default OrderSuccessPage;
