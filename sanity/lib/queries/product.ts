import {
  q,
  sanityImage,
  type TypeFromSelection,
  type Selection,
  InferType,
} from "groqd";

import { runQuery } from "./helpers";
import { ArrayElementType } from "@/types/ArrayElementType";

/**
 * Represents a selection of fields for a product.
 */
const productSelection = {
  title: q.string(),
  description: q.array(q.contentBlock()),
  price: q.number(),
  sizes: q.array(q.string()),
  color: q.string(),
  _id: q.string(),
  images: sanityImage("images", { isList: true }),
  category: q.string(),
} satisfies Selection;

const categoriesSelection = {
  category: q.string(),
} satisfies Selection;

const categoriesQuery = q("*", { isArray: true })
  .filterByType("product")
  .grab$(categoriesSelection);

/**
 * Query for all products.
 */
const productsQuery = q("*", { isArray: true })
  .filterByType("product")
  .grab$(productSelection);

/**
 * Retrieve all categories handler
 */
export const getCategories = async (): Promise<Categories | null> => {
  try {
    const categoriesResult = await runQuery(categoriesQuery);
    // create set of results to remove duplicates
    // then create an array from the result
    const categoriesSet = new Set(
      categoriesResult.map((category) => category.category)
    );
    return Array.from(categoriesSet);
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Retrieve all products handler
 */
export const getProducts = async (): Promise<Products | null> => {
  try {
    return await runQuery(productsQuery);
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Get a single product by id.
 */
export const getOneProduct = async (id: string): Promise<Product | null> => {
  const productQuery = q("*")
    .filter(`_id == '${id}'`)
    .slice(0)
    .grab$(productSelection);

  try {
    return runQuery(productQuery);
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Represents a single project category.
 */
export type Category = TypeFromSelection<typeof categoriesSelection>;
/**
 * Represents a collection of project categories.
 */
export type Categories = string[];

/**
 * Represents a single project.
 */
export type Product = TypeFromSelection<typeof productSelection>;

/**
 * Represents a collection of projects.
 */
export type Products = Product[];

/**
 * Represents a single project image.
 */
export type ProductImage = ArrayElementType<
  InferType<(typeof productSelection)["images"]>
>;

/**
 * Represents a collection of project images.
 */
export type ProductImages = ProductImage[];
