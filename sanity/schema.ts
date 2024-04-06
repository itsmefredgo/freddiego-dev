import { type SchemaTypeDefinition } from "sanity";
import { project } from "./lib/schemas/project";
import { tag } from "./lib/schemas/tag";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, tag],
};
