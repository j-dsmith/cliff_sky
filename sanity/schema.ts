import { type SchemaTypeDefinition } from "sanity";
import project from "./schemas/project";
import bio from "./schemas/bio";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, bio],
};
