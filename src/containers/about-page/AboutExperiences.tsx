import SectionTitle from "@/src/components/ui/section-title";
import Experience from "./Experience";

type AboutExperiencesProps = {
  title: string;
  experiencesList: {
    company: string | null;
    role: string | null;
    date: string | null;
    descriptions: string[];
  }[];
};

/**
 * Renders the about experiences section.
 * @param title The title of the section.
 * @param experiencesList The list of experiences to render.
 * @returns The rendered about experiences section.
 */
function AboutExperiences({ title, experiencesList }: AboutExperiencesProps) {
  return (
    <section id="experiences" className="pt-[5rem] mt-[-5rem]">
      <SectionTitle title={title}></SectionTitle>
      <ul className=" flex flex-col gap-12 mt-8">
        {experiencesList.map((experience, index) => (
          <Experience {...experience} key={index} />
        ))}
      </ul>
    </section>
  );
}

export default AboutExperiences;
