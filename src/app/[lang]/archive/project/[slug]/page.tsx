import { client } from "@/lib/client";
import { Project } from "@/sanity/sanityPropsInterface";
import ProjectComponent from "@/src/containers/archive-page/ProjectComponent";

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
    github,
    demo,
    publishedAt,
    excerpt,
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
