import { client } from "@/lib/client";
import { Project } from "@/sanity/sanityPropsInterface";

import ProjectComponent from "@/src/containers/archive-page/ProjectComponent";

interface Params {
  params: {
    slug: string;
  };
}

/**
 * Fetches the project data from sanity.
 * @param slug The slug of the project to fetch.
 * @returns A Promise that resolves to the project data.
 */
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

/**
 * Renders the project page.
 * @param params The slug of the project to render.
 * @returns The rendered project page.
 */
async function ProjectPage({ params }: Params) {
  const project: Project = await getProject(params.slug);

  // If the project does not exist, return null.
  if (!project) return null;

  return (
    <div>
      <ProjectComponent project={project} />
    </div>
  );
}

export default ProjectPage;
