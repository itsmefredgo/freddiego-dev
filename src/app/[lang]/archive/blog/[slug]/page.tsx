import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import SectionTitle from "@/src/components/ui/SectionTitle";
import { client } from "@/sanity/lib/client";
import { Blog } from "@/lib/sanityPropsInterface";
import ProjectListItem from "@/src/containers/archive-page/ProjectListItem";
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
