import { type SchemaTypeDefinition } from "sanity";
import { project } from "../lib/schemas/project";
import { category } from "../lib/schemas/category";
import { blog } from "../lib/schemas/blog";
import { occupation } from "../lib/schemas/occupation";
import { tech } from "../lib/schemas/tech";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, category, blog, occupation, tech],
};
