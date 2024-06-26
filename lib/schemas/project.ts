import { Rule } from "sanity";
import { defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
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
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [{ type: "text", name: "alt", title: "Alt" }],
    },
    {
      title: "techstack",
      name: "techstack",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tech" }] }],
    },
    {
      name: "github",
      title: "GitHub Link",
      type: "string",
    },
    {
      name: "demo",
      title: "Demo Link",
      type: "string",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule: Rule) => Rule.max(200).error("Max 200 characters."),
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
        {
          type: "code",
        },
      ],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
  ],
});
