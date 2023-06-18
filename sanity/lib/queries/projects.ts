import {
  makeSafeQueryRunner,
  q,
  sanityImage,
  type TypeFromSelection,
  type Selection,
  InferType,
} from "groqd";
import { client } from "../client";
import { ArrayElementType } from "@/types/ArrayElementType";

/**
 * A safe query runner that executes a given query using the Sanity client's fetch method.
 * @param query - The query to execute.
 * @returns The result of the executed query.
 */
const runQuery = makeSafeQueryRunner((query) => client.fetch(query));

const projectSelection = {
  title: q.string(),
  description: q.array(q.contentBlock()),

  _id: q.string(),
  images: sanityImage("images", { isList: true }),
} satisfies Selection;

const projectsQuery = q("*", { isArray: true })
  .filterByType("project")
  .grab$(projectSelection);

/**
 * Retrieves all projects.
 * @returns A Promise that resolves to an array of projects.
 */
export const getProjects = async (): Promise<Projects> => {
  return await runQuery(projectsQuery);
};

/**
 * Retrieves a single project by its ID.
 * @param id - The ID of the project to retrieve.
 * @returns A Promise that resolves to the retrieved project.
 */
export const getProject = async (id: string): Promise<Project> => {
  const projectQuery = q("*")
    .filter(`_id == '${id}'`)
    .slice(0)
    .grab$(projectSelection);

  return await runQuery(projectQuery);
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
