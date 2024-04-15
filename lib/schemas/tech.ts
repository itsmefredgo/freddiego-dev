import { Rule } from "sanity";
import { defineType } from "sanity";

export const tech = defineType({
  name: "tech",
  title: "Tech",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Tech Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule: Rule) => Rule.required().error("A title is required."),
    },
  ],
});
