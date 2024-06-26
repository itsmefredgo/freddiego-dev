import { client } from "@/lib/client";
import { Project, Tech } from "@/sanity/sanityPropsInterface";

import SectionTitle from "@/src/components/ui/section-title";
import TechIcons from "@/src/components/ui/tech-icon";
import Link from "next/link";
import PinnedProject from "@/src/components/ui/pinned-project";

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
  title: string;
  slug: string;
  techlist: Tech[];
  pinnedProjects: Project[];
};

/**
 * Return details of the occupation.
 * @param slug The slug of the occupation.
 * @param techstatement The tech statement of the occupation.
 * @returns details of the occupation.
 */
async function OccupationDetails({ slug, techstatement }: Occupation) {
  /**
   * Get the occupation details from the database.
   * @returns The occupation details.
   */
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
          slug,
          thumbnail,
        }
      }`;
    return await client.fetch(query);
  }

  // Get the occupation details.
  const occupationDetail: SanityOccupation = await getOccupationDetail();

  // return null if occupationDetail is null
  if (!occupationDetail) return null;

  return (
    <>
      <div className=" flex gap-2">
        <div className=" flex flex-wrap gap-2">
          <div className=" flex items-center">
            <p>{techstatement}</p>
          </div>
          <div className=" flex flex-wrap gap-2 items-center">
            &#123;
            {occupationDetail?.techlist?.map((tech) => (
              <TechIcons key={tech.slug.current} tech={tech.name} />
            ))}
            &#125; &#183;&#183;&#183;
          </div>
        </div>
      </div>
      <div className=" text-[1.5rem] my-4">Pinned Projects</div>
      <div className=" grid grid-cols-1 border-t-2 border-subBackground">
        {occupationDetail?.pinnedProjects.map((project) => (
          <PinnedProject
            key={project.slug.current}
            projectSlug={project.slug.current}
          />
        ))}
      </div>
    </>
  );
}

/**
 * Renders the main roles section of the about page.
 * @param roles The roles to render.
 * @returns The rendered main roles section.
 */
function MainRoles({ roles }: MainRolesProps) {
  return (
    <section className=" w-full bg-transparent flex flex-col gap-40 px-2">
      {roles?.map((role) => (
        <div key={role.title}>
          <Link
            href={`/about#${role.slug}`}
            className=" text-primary hover:text-secondary"
          >
            <SectionTitle title={role.title} />
          </Link>
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
}

export default MainRoles;
