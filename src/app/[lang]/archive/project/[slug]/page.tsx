import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import SectionTitle from "@/src/components/ui/SectionTitle";
import { client } from "@/sanity/lib/client";
import { Project, Tag } from "@/lib/sanityPropsInterface";
import ProjectListItem from "@/src/components/ui/ProjectListItem";
import ProjectComponent from "@/src/components/ui/ProjectComponent";

interface Params {
  params: {
    slug: string;
  };
}

async function getProject(slug: string) {
  const query = `*[_type == "project" && slug.current == "${slug}"][0] {
    title,
    body,
    slug,
    publishedAt,
    excerpt,
    tags,
  }`;

  return await client.fetch(query);
}

async function page({ params }: Params) {
  const project: Project = await getProject(params.slug);

  return (
    <div>
      <ProjectComponent project={project} />
    </div>
  );
}

export default page;
