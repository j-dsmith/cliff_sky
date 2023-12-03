import { type SchemaTypeDefinition } from "sanity";
import project from "./schemas/project";
import bio from "./schemas/bio";
import painting from "./schemas/painting";
import service from "./schemas/service";
import product from "./schemas/product";
import order from "./schemas/order";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, bio, order, painting, product, service],
};
