import SectionTitle from "@/src/components/ui/section-title";
import Experience from "./Experience";

type AboutExperiencesProps = {
  title: string;
  experiencesList: {
    company: string;
    role: string;
    date: string;
    descriptions: string[];
  }[];
};

function AboutExperiences({ title, experiencesList }: AboutExperiencesProps) {
  return (
    <section id="experiences" className="pt-[5rem] mt-[-5rem]">
      <SectionTitle title={title}></SectionTitle>
      <ul>
        {experiencesList.map((experience, index) => (
          <Experience {...experience} key={index} />
        ))}
      </ul>
    </section>
  );
}

export default AboutExperiences;
