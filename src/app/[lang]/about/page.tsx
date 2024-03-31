import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import SectionTitle from "@/src/components/SectionTitle";

import { TracingBeam } from "@/src/components/ui/tracing-beam";

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  const contents = page.about;

  return (
    <div className=" h-[auto] flex flex-col gap-20 font-normal">
      <section>
        <SectionTitle title={contents.title}></SectionTitle>
        <ul className=" flex flex-col gap-16 pt-4">
          {contents.summaryRoles.map(
            ({ role, description, techstack }, index) => (
              <li key={index} className=" ">
                <h2 className=" py-2 text-xl">{role}</h2>
                <p className=" text-sm leading-[1.75rem] py-2">{description}</p>
                <ul className=" pt-2 flex flex-row gap-4">
                  {techstack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </section>
      <section>
        <SectionTitle title={contents.education.title}></SectionTitle>
        <h2>{contents.education.education.institution}</h2>
        <div className=" flex flex-col md:flex-row">
          <p>{contents.education.education.major}</p>
          <span className=" hidden md:block">&nbsp;/&nbsp;</span>
          <p>{contents.education.education.minor}</p>
        </div>
        <p>GPA: 4.15</p>
      </section>
      <section>
        <SectionTitle title={contents.experiences.title}></SectionTitle>
        <ul>
          {contents.experiences.experiencesList.map(
            ({ company, role, date, descriptions }, index) => (
              <li key={index}>
                <h2 className=" flex flex-col md:flex-row">
                  <span>{company}</span>
                  <span className=" hidden md:block">&nbsp;-&nbsp;</span>
                  <span className=" before:content-['-_']">{role}</span>
                </h2>
                <p>{date}</p>
                <ul>
                  {descriptions.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  );
}
