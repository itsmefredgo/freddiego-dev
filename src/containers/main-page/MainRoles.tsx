import SectionTitle from "@/src/components/ui/section-title";
import TechIcons from "@/src/components/ui/tech-icon";
import ProjectCard from "@/src/components/ui/project-card";
import Link from "next/link";
import { client } from "@/lib/client";
import { Project, Tech } from "@/sanity/sanityPropsInterface";

type MainRolesProps = {
  roles: Occupation[];
};

type Occupation = {
  title: string;
  slug: string;
  description: string;
  techstatement: string;
};

type SanityOccupation = {
  slug: string;
  techlist: Tech[];
  pinnedProjects: Project[];
};

function MainRoles({ roles }: MainRolesProps) {
  return (
    <section className=" w-full bg-transparent flex flex-col gap-40 px-2">
      {roles?.map((role) => (
        <div key={role.title}>
          <SectionTitle title={role.title} />
          <div className=" flex flex-col gap-4 ">
            <div>
              <p>{role.description}</p>
            </div>
            <OccupationDetails {...role} />
          </div>
          <div className="py-2 mt-4">
            <Link
              href={"/archive"}
              className="border-b text-primary border-primary hover:border-secondary hover:text-secondary"
            >
              View more projects here
            </Link>
          </div>
        </div>
      ))}
    </section>
  );

  async function OccupationDetails({ slug, techstatement }: Occupation) {
    async function getOccupationDetail() {
      const query = `*[_type == "occupation" && slug.current == "${slug}"][0] {
        title,
        slug,
        "techlist": techlist[]->{
          name,
          slug
        },
        "pinnedProjects": pinnedProjects[]->{
          title,
          slug
        }
      }`;
      return await client.fetch(query);
    }

    const occupationDetail: SanityOccupation = await getOccupationDetail();

    return (
      <>
        <div className=" flex gap-2">
          <div className=" flex items-end">
            <p>{techstatement}</p>
          </div>
          {occupationDetail?.techlist?.map((tech) => (
            <TechIcons key={tech.slug.current} tech={tech.name} />
          ))}
        </div>
        <div className=" text-[1.5rem] mt-8">Pinned Projects</div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
          {occupationDetail?.pinnedProjects.map((project) => (
            <ProjectCard
              key={project.slug.current}
              projectSlug={project.slug.current}
            />
          ))}
        </div>
      </>
    );
  }
}

export default MainRoles;
