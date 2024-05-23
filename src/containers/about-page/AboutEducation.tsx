import SectionTitle from "@/src/components/ui/section-title";

type AboutEducationProps = {
  title: string;
  education: {
    institution: string;
    major: string;
    minor: string;
    GPA: string;
  };
};

/**
 * Renders the education section of the about page.
 * @param title The title of the education section.
 * @param education The education object.
 * @returns The rendered education section.
 */
function AboutEducation({ title, education }: AboutEducationProps) {
  return (
    <section id="education" className="pt-[5rem] mt-[-5rem]">
      <SectionTitle title={title}></SectionTitle>
      <h2>{education.institution}</h2>
      <div className=" flex flex-col md:flex-row">
        <p>{education.major}</p>
        <span className=" hidden md:block">&nbsp;/&nbsp;</span>
        <p>{education.minor}</p>
      </div>
      <div>{education.GPA}</div>
    </section>
  );
}

export default AboutEducation;
