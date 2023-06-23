import { type SchemaTypeDefinition } from "sanity";
import project from "./schemas/project";
import bio from "./schemas/bio";
import painting from "./schemas/painting";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, bio, painting],
};
