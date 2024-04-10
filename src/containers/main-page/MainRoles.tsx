import SectionTitle from "@/src/components/ui/SectionTitle";
import TechIcons from "@/src/components/ui/TechIcon";
import ProjectCard from "@/src/components/ui/ProjectCard";

type MainRolesProps = {
  roles: {
    title: string;
    description: string;
    techlist: string[];
    projects: string[];
  }[];
};

function MainRoles({ roles }: MainRolesProps) {
  return (
    <section className=" w-full bg-transparent flex flex-col gap-12 px-2">
      {roles?.map((role) => (
        <div key={role.title}>
          <SectionTitle title={role.title} />
          <div className=" flex flex-col gap-4 ">
            <div>
              <p>{role.description}</p>
            </div>
            <div className=" flex">
              {role.techlist?.map((tech) => (
                <TechIcons key={tech} tech={tech} />
              ))}
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
              {role.projects?.map((project) => (
                <ProjectCard key={project} projectSlug={project} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default MainRoles;
