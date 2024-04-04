import { Rule } from "sanity";

export const post = {
  name: "post",
  Title: "Post",
  type: "document",

  fields: [
    {
      name: "title",
      Title: "Title",
      type: "string",
    },
    {
      name: "slug",
      Title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: Rule) => Rule.required().error("A title is required."),
    },
    {
      name: "publishedAt",
      Title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "excerpt",
      Title: "Excerpt",
      type: "text",
      validation: (Rule: Rule) => Rule.max(200).error("Max 200 characters."),
    },
    {
      name: "body",
      Title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
      ],
    },
    {
        name: "tags",
        Title: "Tags",
        type: "array",
        of: [{ type: "reference", to: [{ type: "tag" }] }],
    }
  ],
};
