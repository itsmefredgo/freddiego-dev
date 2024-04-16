import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/public/dictionary";
import { client } from "@/lib/client";

import SectionTitle from "@/src/components/ui/section-title";
import { Project, Blog } from "@/sanity/sanityPropsInterface";
import { ProjectHoverEffect } from "@/src/containers/archive-page/ProjectListHover";
import { BlogHoverEffect } from "@/src/containers/archive-page/BlogListHover";
import ProjectCard from "@/src/components/ui/project-card";

async function getProjects() {
  const query = `*[_type == "project"] | order(publishedAt desc) {
    title,
    slug,
  }`;

  return await client.fetch(query);
}

async function getBlogs() {
  const query = `*[_type == "blog"] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    excerpt,
    body,
  }`;

  return await client.fetch(query);
}

export default async function Archive({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  const projects: Project[] = await getProjects();
  const blogs: Blog[] = await getBlogs();

  return (
    <div className=" h-[auto] flex flex-col gap-20 font-normal">
      <section id="projects" className="pt-[5rem] mt-[-5rem]">
        <SectionTitle title="Projects" />
        {/* <ProjectHoverEffect projects={projects} /> */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug.current}
              projectSlug={project.slug.current}
            />
          ))}
        </div>
        {/* <ProjectCard projectSlug={projects} /> */}
      </section>
      <section id="blogs" className="pt-[5rem] mt-[-5rem]">
        <SectionTitle title="Blogs" />
        <BlogHoverEffect blogs={blogs} />
      </section>
    </div>
  );
}
