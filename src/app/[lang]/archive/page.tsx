import { client } from "@/lib/client";
import { Project, Blog } from "@/sanity/sanityPropsInterface";

import SectionTitle from "@/src/components/ui/section-title";
import ProjectCard from "@/src/components/ui/project-card";
import { BlogsListComponent } from "@/src/containers/archive-page/BlogListHover";

/**
 * Retrieves the list of projects from sanity.
 * @returns A Promise that resolves to an array of Project objects.
 */
async function getProjects(): Promise<Project[]> {
  // Published or completed projects
  const projectsWithPublishedAt = `*[_type == "project" && defined(publishedAt)] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
  }`;
  // Unpublished or incomplete projects
  const projectsWithoutPublishedAt = `*[_type == "project" && !defined(publishedAt)] {
    title,
    slug,
  }`;

  // Fetching both types of projects and returning merged list
  const projects1: Project[] = await client.fetch(`${projectsWithPublishedAt}`);
  const projects2: Project[] = await client.fetch(
    `${projectsWithoutPublishedAt}`
  );
  return projects1.concat(projects2);
}

/**
 * Retrieves the list of blogs from the sanity.
 * @returns {Blogs[]} A Promise that resolves to an array of Blog objects.
 */
async function getBlogs(): Promise<Blog[]> {
  // Fetching all blogs and ordering them by published date
  const query = `*[_type == "blog"] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    excerpt,
    body,
  }`;
  // Returning the fetched blogs
  return await client.fetch(query);
}

/**
 * Renders the Archive page component.
 * @returns The rendered Archive component.
 */
export default async function Archive() {
  const projects: Project[] = await getProjects();
  const blogs: Blog[] = await getBlogs();

  return (
    <div className=" h-[auto] flex flex-col gap-20 font-normal">
      {/* Projects section */}
      <section id="projects" className="pt-[5rem] mt-[-5rem]">
        <SectionTitle title="Projects" />
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug.current}
              projectSlug={project.slug.current}
            />
          ))}
        </div>
      </section>
      {/* Blogs section */}
      <section id="blogs" className="pt-[5rem] mt-[-5rem]">
        <SectionTitle title="Blogs" />
        <BlogsListComponent blogs={blogs} />
      </section>
    </div>
  );
}
