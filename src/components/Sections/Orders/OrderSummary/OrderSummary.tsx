import stripe from "@/utils/stripe";
import { cn } from "@/utils/utils";
import { Unbounded } from "next/font/google";
import { FC, Suspense } from "react";
import Spacer from "@/components/UI/Spacer/Spacer";
import { fetchOrCreateNewOrderFromSession } from "@/utils/orders";
import ShippingInformation from "./ShippingInformation";
import SummaryIcon from "./SummaryIcon";
import SummaryItems, { SummaryItemSkeletonLoader } from "./SummaryItems";
import { LineItemSchema, SessionSchema } from "../config";

const unbounded = Unbounded({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

type OrderSummaryProps = {
  sessionId: string;
};

const OrderSummary: FC<OrderSummaryProps> = async ({ sessionId }) => {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["shipping_options.shipping_rate"],
  });

  const validatedSession = SessionSchema.parse(session);

  const order = await fetchOrCreateNewOrderFromSession(sessionId);

  if (!validatedSession) return null;

  return (
    <div className="flex flex-1 flex-col justify-center gap-4 3xs:gap-8">
      <div className="">
        <h2 className={cn("text-4xl font-medium", unbounded.className)}>
          Summary
        </h2>

        {order ? (
          <p className="text-sm font-medium text-gray-500">
            Order: #{order.orderId}
          </p>
        ) : null}
      </div>
      <div className="flex flex-col gap-4">
        <SummaryIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </SummaryIcon>
        <SummaryItems sessionId={sessionId} />
      </div>

      <div className="flex flex-col gap-4">
        <SummaryIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-truck"
          >
            <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
            <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
            <circle cx="7" cy="18" r="2" />
            <path d="M15 18H9" />
            <circle cx="17" cy="18" r="2" />
          </svg>
        </SummaryIcon>

        <ShippingInformation
          shippingDetails={validatedSession.shipping_details}
          shippingOptions={validatedSession.shipping_options}
          customerDetails={validatedSession.customer_details}
        />
      </div>
    </div>
  );
};

export default OrderSummary;
