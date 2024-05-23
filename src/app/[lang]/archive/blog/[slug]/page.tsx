import { client } from "@/lib/client";

import { Blog } from "@/sanity/sanityPropsInterface";
import BlogComponent from "@/src/containers/archive-page/BlogComponent";

interface Params {
  params: {
    slug: string;
  };
}

/**
 * Fetches the blog data from sanity.
 * @param slug The slug of the blog to fetch.
 * @returns A Promise that resolves to the blog data.
 */
async function getBlogs(slug: string) {
  const query = `*[_type == "blog" && slug.current == "${slug}"][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    body,
  }`;

  return await client.fetch(query, { slug });
}

/**
 * Renders the blog page.
 * @param params The slug of the blog to render.
 * @returns The rendered blog page.
 */
async function BlogPage({ params }: Params) {
  const blog: Blog = await getBlogs(params.slug);

  // If the blog does not exist, return null.
  if (!blog) return null;

  return (
    <div>
      <BlogComponent blog={blog} />
    </div>
  );
}

export default BlogPage;
