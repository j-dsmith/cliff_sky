import { type Selection, q, TypeFromSelection } from "groqd";
import { runQuery } from "./helpers";

const orderSelection = {
  _id: q.string().optional(),
  orderId: q.string(),
  sessionId: q.string(),
} satisfies Selection;

export const getOneOrderBySessionId = async (
  sessionId: string
): Promise<Order | null> => {
  const orderQuery = q("*", { isArray: false })
    .filter(`sessionId == '${sessionId.trim()}'`)
    .grab$(orderSelection)
    .slice(0)
    .nullable();
  try {
    return await runQuery(orderQuery);
  } catch (err) {
    console.error(err);
    return null;
  }
};

export type Order = TypeFromSelection<typeof orderSelection>;
