import {
  q,
  sanityImage,
  type TypeFromSelection,
  type Selection,
  InferType,
} from "groqd";
import { ArrayElementType } from "@/types/ArrayElementType";
import { runQuery } from "./helpers";

/**
 * Represents a selection of fields for a project.
 * @property {string} title - The title of the project.
 * @property {Array<ContentBlock>} description - The description of the project, represented as an array of content blocks.
 * @property {string} _id - The ID of the project.
 * @property {ProjectImages} images - The images associated with the project, represented as an array of project images.
 */
const projectSelection = {
  title: q.string(),
  description: q.array(q.contentBlock()),
  _id: q.string(),
  images: sanityImage("images", { isList: true }),
} satisfies Selection;

/**
 * Represents a query that retrieves all projects.
 */
const projectsQuery = q("*", { isArray: true })
  .filterByType("project")
  .grab$(projectSelection);

/**
 * Retrieves all projects.
 * @returns A Promise that resolves to an array of projects.
 */
export const getProjects = async (): Promise<Projects | null> => {
  try {
    return await runQuery(projectsQuery);
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * Retrieves a single project by its ID.
 * @param id - The ID of the project to retrieve.
 * @returns A Promise that resolves to the retrieved project.
 */
export const getProject = async (id: string): Promise<Project | null> => {
  const projectQuery = q("*")
    .filter(`_id == '${id}'`)
    .slice(0)
    .grab$(projectSelection);

  try {
    return await runQuery(projectQuery);
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Represents a collection of projects.
 */
export type Projects = Project[];

/**
 * Represents a single project.
 */
export type Project = TypeFromSelection<typeof projectSelection>;

/**
 * Represents a single project image.
 */
export type ProjectImage = ArrayElementType<
  InferType<(typeof projectSelection)["images"]>
>;

/**
 * Represents a collection of project images.
 */
export type ProjectImages = ProjectImage[];
