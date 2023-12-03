import { z } from "zod";

export const ShippingOptionsSchema = z.array(
  z.object({
    shipping_amount: z.number(),
    shipping_rate: z.object({
      display_name: z.string(),
      delivery_estimate: z.object({
        maximum: z.object({
          unit: z.string(),
          value: z.number(),
        }),
        minimum: z.object({
          unit: z.string(),
          value: z.number(),
        }),
      }),
      fixed_amount: z.object({
        amount: z.number(),
        currency: z.string(),
      }),
    }),
  })
);

export const ShippingAddressSchema = z.object({
  line1: z.string(),
  line2: z.string().nullable(),
  city: z.string(),
  state: z.string(),
  postal_code: z.string(),
  country: z.string(),
});

export const ShippingDetailsSchema = z.object({
  address: ShippingAddressSchema,
  name: z.string(),
});

export const CustomerDetailsSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export const SessionSchema = z.object({
  id: z.string(),
  amount_total: z.number(),
  customer_details: CustomerDetailsSchema,
  shipping_details: ShippingDetailsSchema,
  shipping_options: ShippingOptionsSchema,
});

export const ProductSchema = z.object({
  name: z.string().nullable(),
  metadata: z
    .object({
      imageUrl: z.string(),
      size: z.string(),
    })
    .nullable(),
});

export const LineItemSchema = z.object({
  amount_total: z.number(),
  amount_subtotal: z.number(),
  description: z.string(),
  price: z.object({
    product: ProductSchema,
  }),
  quantity: z.number(),
});

export type LineItems = z.infer<typeof LineItemSchema>;
export type LineItemProductDetails = z.infer<typeof ProductSchema>;
export type ShippingAddress = z.infer<typeof ShippingAddressSchema>;
export type CustomerDetails = z.infer<typeof CustomerDetailsSchema>;
export type ShippingDetails = z.infer<typeof ShippingDetailsSchema>;
export type ShippingOptions = z.infer<typeof ShippingOptionsSchema>;
