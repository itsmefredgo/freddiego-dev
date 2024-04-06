import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { client } from "@/sanity/lib/client";

import SectionTitle from "@/src/components/ui/SectionTitle";
import ProjectListItem from "@/src/containers/archive-page/ProjectListItem";
import { Project } from "@/lib/sanityPropsInterface";

async function getProjects() {
  const query = `*[_type == "project"] | order(publishedAt desc) {
    title,
    slug,
    publishedAt,
    excerpt,
    tags,
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

  return (
    <div className=" h-[auto] flex flex-col gap-20 font-normal">
      <section>
        <SectionTitle title="Projects" />
        <div className=" flex flex-col gap-4">
          {projects?.length > 0 &&
            projects?.map((project: Project) => (
              <ProjectListItem project={project} key={project.slug.current} />
            ))}
        </div>
      </section>
      <section>
        <SectionTitle title="Blogs" />
        <h1>To be added...</h1>
      </section>
    </div>
  );
}
