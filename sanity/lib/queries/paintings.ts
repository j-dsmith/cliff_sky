import { q, type Selection, sanityImage, TypeFromSelection } from "groqd";
import { runQuery } from "./helpers";

/**
 * Represents a selection of fields for a painting.
 * @property {string} title - The title of the painting.
 * @property {number} year - The year the painting was created.
 * @property {string} description - The description of the painting.
 * @property {string} _id - The ID of the painting.
 * @property {PaintingImage} image - The image associated with the painting.
 */
const paintingSelection = {
  _id: q.string(),
  title: q.string(),
  year: q.number(),
  description: q.string(),
  image: sanityImage("image", { isList: false }),
} satisfies Selection;

/**
 * Represents a query that retrieves all paintings.
 */
const paintingsQuery = q("*", { isArray: true })
  .filterByType("paintings")
  .grab$(paintingSelection);

export const getPaintings = async (): Promise<Paintings> => {
  try {
    const res = await runQuery(paintingsQuery);
    console.log(res);
    return res;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch paintings");
  }
};

/**
 * Represents a collection of paintings.
 */
export type Paintings = Painting[];

/**
 * Represents a single painting.
 */
export type Painting = TypeFromSelection<typeof paintingSelection>;
