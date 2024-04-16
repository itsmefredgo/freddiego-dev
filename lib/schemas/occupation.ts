import { Rule } from "sanity";
import { defineType } from "sanity";

export const occupation = defineType({
  name: "occupation",
  title: "Occupation",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: Rule) => Rule.required().error("A title is required."),
    },
    {
      title: "techlist",
      name: "techlist",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tech" }] }],
    },
    {
      name: "pinnedProjects",
      title: "Pinned Projects",
      type: "array",
      // of: [{ type: "reference", to: [{ type: "project" }] }],
      of: [{ type: "reference", to: [{ type: "project" }], name: "project" }],
    },
  ],
});
