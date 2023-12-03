import { client } from "../../sanity/lib/client";
import { Order } from "../../sanity/lib/queries/order";

export const generateOrderNumber = async (
  sessionId: string
): Promise<string> => {
  let orderNumber: string;
  let existingOrder: Order | null;
  do {
    orderNumber = `CS${createRandomStringNumber()}`;
    existingOrder = await client.fetch(
      `*[_type == "order" && orderNumber == $orderNumber && sessionId == $sessionId][0]`,
      { orderNumber, sessionId }
    );
  } while (existingOrder);
  return orderNumber;
};

/**
 * Creates a new order from a session ID.
 *
 * @param sessionId - The session ID associated with the order.
 * @returns A promise that resolves to the created order, or undefined if an existing order already exists.
 */
export const fetchOrCreateNewOrderFromSession = async (
  sessionId: string
): Promise<Order | undefined> => {
  const groqFilter = `*[_type == "order" && sessionId == $sessionId][0]`;
  const existingOrder = await client.fetch(groqFilter, { sessionId });

  if (existingOrder) return existingOrder;

  console.log("creating new order");

  const order = {
    _type: "order",
    sessionId: sessionId.trim(),
    orderId: await generateOrderNumber(sessionId),
  };

  await client.create(order, { returnDocuments: false });

  return order;
};

const createRandomStringNumber = (): string => {
  return Math.floor(Math.random() * 1e8)
    .toString()
    .padStart(8, "0");
};
