import { FC } from "react";
import { LineItemSchema, LineItems } from "../../config";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import stripe from "@/utils/stripe";

type SummaryItemsProps = {
  sessionId: string;
};

const SummaryItems: FC<SummaryItemsProps> = async ({ sessionId }) => {
  const lineItems = await stripe.checkout.sessions.listLineItems(sessionId, {
    expand: ["data.price.product"],
  });

  const validatedLineItems = lineItems.data.map((item) =>
    LineItemSchema.parse(item)
  );

  const renderLineItems = () => {
    const key = uuidv4();
    return validatedLineItems.map(
      ({
        price: {
          product: { metadata, name },
        },
        quantity,
      }) => (
        <li key={key}>
          <div className="grid h-16 w-full grid-cols-[64px_1fr] gap-4 3xs:h-[72px] 3xs:grid-cols-[72px_1fr]">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl shadow-md">
              <Image
                src={metadata?.imageUrl || ""}
                fill
                alt=""
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-1 text-xs 3xs:gap-0.5">
              <p className="text-sm font-medium leading-tight 3xs:text-xs">
                {name}
              </p>
              <p className=" text-gray-800">
                Size: <span className="uppercase">{metadata?.size}</span>
              </p>
              <p className="text-gray-800">Quantity: {quantity}</p>
            </div>
          </div>
        </li>
      )
    );
  };
  return (
    <ul className="flex flex-1 flex-col gap-4 overflow-scroll rounded-2xl border p-4">
      {renderLineItems()}
    </ul>
  );
};

export const SummaryItemSkeletonLoader = () => {
  return (
    <ul className="flex-1">
      <li>
        <div className="grid h-16 w-full grid-cols-[64px_1fr] gap-4">
          <div className="relative aspect-square w-full animate-pulse overflow-hidden rounded-xl bg-gray-200 " />
          <div className="flex flex-col gap-1 text-xs">
            <div className="h-4 w-1/2 animate-pulse bg-gray-200"></div>
            <div className="h-4 w-16 animate-pulse bg-gray-200"></div>
            <div className="h-4 w-16 animate-pulse bg-gray-200"></div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default SummaryItems;
