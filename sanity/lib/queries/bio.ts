import { q, type TypeFromSelection, type Selection } from "groqd";
import { runQuery } from "./helpers";

/**
 * Defines a selection object for querying a bio document.
 * @property {string} _id - The ID of the bio document.
 * @property {string} name - The name of the person the bio is about.
 * @property {Array<ContentBlock>} bioShort - An array of content blocks representing a short bio.
 */
const bioSelection = {
  _id: q.string(),
  bio_short: q.array(q.contentBlock()),
  bio_long: q.array(q.contentBlock()),
} satisfies Selection;

/**
 * Represents a query that retrieves the bio and service documents.
 */
const bioQuery = q("*", { isArray: false })
  .filterByType("bio")
  .grab$(bioSelection)
  .slice(0);
/**
 * Retrieves the bio document.
 * @returns A Promise that resolves to the bio document.
 */
export const getBio = async (): Promise<Bio> => {
  return await runQuery(bioQuery);
};

/**
 * Represents a short bio.
 */
export type Bio = TypeFromSelection<typeof bioSelection>;
