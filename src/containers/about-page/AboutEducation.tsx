import SectionTitle from "@/src/components/ui/SectionTitle";

type AboutEducationProps = {
  title: string;
  education: {
    institution: string;
    major: string;
    minor: string;
  };
};

function AboutEducation({ title, education }: AboutEducationProps) {
  return (
    <section>
      <SectionTitle title={title}></SectionTitle>
      <h2>{education.institution}</h2>
      <div className=" flex flex-col md:flex-row">
        <p>{education.major}</p>
        <span className=" hidden md:block">&nbsp;/&nbsp;</span>
        <p>{education.minor}</p>
      </div>
      <p>GPA: 4.15</p>
    </section>
  );
}

export default AboutEducation;
