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
 * Defines a selection object for querying a service document.
 * @property {string} _id - The ID of the service document.
 * @property {string} title - The title of the service.
 * @property {Array<ContentBlock>} description - An array of content blocks representing a description of the service.
 */
const serviceSelection = {
  _id: q.string(),
  title: q.string(),
  description: q.array(q.contentBlock()),
} satisfies Selection;

/**
 * Represents a query that retrieves the bio and service documents.
 */
const bioQuery = q("", { isArray: false }).grab({
  bio: q("*").filterByType("bio").grab$(bioSelection).slice(0),
  services: q("*").filterByType("service").grab$(serviceSelection),
});

/**
 * Retrieves the bio document.
 * @returns A Promise that resolves to the bio document.
 */
export const getBio = async (): Promise<BioResponse> => {
  return await runQuery(bioQuery);
};

/**
 * Represents a short bio.
 */
export type Bio = TypeFromSelection<typeof bioSelection>;

/**
 * Represents a service.
 */
export type Service = TypeFromSelection<typeof serviceSelection>;

type BioResponse = {
  bio: Bio;
  services: Service[];
};
