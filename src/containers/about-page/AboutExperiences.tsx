import SectionTitle from "@/src/components/ui/SectionTitle";
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
    <section>
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
