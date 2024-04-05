import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import SectionTitle from "@/src/components/ui/SectionTitle";
import { client } from "@/sanity/lib/client";
import { Project, Tag } from "@/lib/sanityPropsInterface";
import ProjectListItem from "@/src/components/ui/ProjectListItem";

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
      <SectionTitle title="Archives" />
      <section>
        <SectionTitle title="Projects" />
        <div className=" flex flex-col gap-8">
          {projects?.length > 0 &&
            projects?.map((project: Project) => (
              <ProjectListItem project={project} key={project.slug.current} />
            ))}
        </div>
      </section>
    </div>
  );
}
