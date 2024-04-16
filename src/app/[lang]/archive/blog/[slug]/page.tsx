import { client } from "@/lib/client";
import { Blog } from "@/sanity/sanityPropsInterface";
import BlogComponent from "@/src/containers/archive-page/BlogComponent";

interface Params {
  params: {
    slug: string;
  };
}

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

async function page({ params }: Params) {
  const blog: Blog = await getBlogs(params.slug);

  return (
    <div>
      <BlogComponent blog={blog} />
    </div>
  );
}

export default page;
