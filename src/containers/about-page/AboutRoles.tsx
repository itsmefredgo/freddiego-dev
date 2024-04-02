import SectionTitle from "@/src/components/ui/SectionTitle";
import Role from "./Role";

type AboutRolesProps = {
  title: string;
  summaryRoles: any[];
};

function AboutRoles({ title, summaryRoles }: AboutRolesProps) {
  return (
    <section>
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
