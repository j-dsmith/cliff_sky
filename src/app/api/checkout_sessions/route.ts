import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
// import {CartItem} from "@/types/type";
import stripe from "@/utils/stripe";

export async function POST(req: NextRequest, res: NextResponse) {
  const headersList = headers();
  const { cartDetails } = await req.json();

  console.log(cartDetails, "cartDetails --------------------------------");
  const cartDetailsArray: any = Object.values(cartDetails) as any;

  const lineItems = cartDetailsArray.map((item: any) => {
    return {
      price_data: {
        currency: item.currency,
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
      adjustable_quantity: {
        enabled: true,
        minimum: 1,
        maximum: 10,
      },
    };
  });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${headersList.get("origin")}/order-success`,
      cancel_url: `${headersList.get("origin")}/order-cancelled`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Error creating checkout session" });
  }
}
