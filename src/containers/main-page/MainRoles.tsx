import SectionTitle from "@/src/components/ui/SectionTitle";
import TechIcons from "@/src/components/ui/TechIcon";
import ProjectCard from "@/src/components/ui/ProjectCard";
import Link from "next/link";

type MainRolesProps = {
  roles: {
    title: string;
    description: string;
    techstatement: string;
    techlist: string[];
    projects: string[];
  }[];
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
            <div className=" flex gap-2">
              <div className=" flex items-end">
                <p>{role.techstatement}</p>
              </div>
              {role.techlist?.map((tech) => (
                <TechIcons key={tech} tech={tech} />
              ))}
            </div>
            <div className=" text-[1.5rem] mt-8">Pinned Projects</div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
              {role.projects?.map((project) => (
                <ProjectCard key={project} projectSlug={project} />
              ))}
            </div>
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
