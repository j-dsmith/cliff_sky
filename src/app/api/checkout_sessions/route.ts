import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import stripe from "@/utils/stripe";

export async function POST(req: NextRequest, res: NextResponse) {
  const headersList = headers();
  const { cartDetails } = await req.json();

  const cartDetailsArray: any = Object.values(cartDetails) as any;

  const lineItems = cartDetailsArray.map((item: any) => {
    return {
      price_data: {
        currency: item.currency,
        product_data: {
          name: item.name,
          images: [item.image],
          metadata: {
            imageUrl: item.image,
            size: item.size,
          },
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
      shipping_address_collection: {
        allowed_countries: ["US"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "usd",
            },
            display_name: "Free shipping",
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 5,
              },
              maximum: {
                unit: "business_day",
                value: 7,
              },
            },
          },
        },
      ],
      success_url: `${headersList.get(
        "origin"
      )}/orders/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${headersList.get("origin")}/order-cancelled`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Error creating checkout session" });
  }
}
