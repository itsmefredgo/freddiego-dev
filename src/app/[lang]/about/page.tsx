import { Locale } from "@/src/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import SectionTitle from "@/src/components/SectionTitle";

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  const contents = page.about;

  return (
    <div className=" h-[100rem]">
      <section>
        <SectionTitle title={contents.title}></SectionTitle>
        <ul>
          {contents.summaryRoles.map(
            ({ role, description, techstack }, index) => (
              <li key={index}>
                <h2>{role}</h2>
                <p>{description}</p>
                <ul>
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
        <p>{contents.education.education.description}</p>
      </section>
      <section>
        <SectionTitle title={contents.experiences.title}></SectionTitle>
        <ul>
          {contents.experiences.experiencesList.map(
            ({ company, role, date, descriptions }, index) => (
              <li key={index}>
                <h2>
                  {company} - {role}
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
