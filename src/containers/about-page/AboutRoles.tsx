import SectionTitle from "@/src/components/ui/section-title";
import Role from "./Role";

type AboutRolesProps = {
  title: string;
  summaryRoles: any[];
};

/**
 * Renders the roles section of the about page.
 * @param title The title of the roles section.
 * @param summaryRoles The summary of the roles as roles objects.
 * @returns The rendered roles section.
 */
function AboutRoles({ title, summaryRoles }: AboutRolesProps) {
  return (
    <section id="roles" className="pt-[5rem] mt-[-5rem]">
      <SectionTitle title={title}></SectionTitle>
      <ul className=" flex flex-col gap-16 pt-4">
        {summaryRoles.map((summaryRole, index: number) => (
          <Role {...summaryRole} key={index} />
        ))}
      </ul>
    </section>
  );
}

export default AboutRoles;
