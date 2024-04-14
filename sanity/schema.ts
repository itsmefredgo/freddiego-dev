import { type SchemaTypeDefinition } from "sanity";
import { project } from "../lib/schemas/project";
import { category } from "../lib/schemas/tag";
import { blog } from "../lib/schemas/blog";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, category, blog],
};
