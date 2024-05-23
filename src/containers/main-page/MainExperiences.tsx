import SectionTitle from "@/src/components/ui/section-title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import Link from "next/link";

type MainExperiencesProps = {
  experiences: {
    company: string | null;
    role: string | null;
    date: string | null;
    descriptions: string[];
    links: {
      about: boolean;
      projects: boolean;
      contact: boolean;
    };
  }[];
};

/**
 * Renders the experiences section of the main page.
 * @param experiences The list of experiences.
 * @returns The rendered experiences section.
 */
function MainExperiences({ experiences }: MainExperiencesProps) {
  return (
    <section className=" w-full bg-transparent rounded-3xl z-10">
      <SectionTitle title="Experiences" />
      <Accordion type="single" collapsible>
        {experiences?.map((experience, index) => (
          <AccordionItem value={`item-${index}`} key={`item-${index}`}>
            <AccordionTrigger>
              <div className="flex flex-col items-start" id="hello">
                <div className=" items-start flex flex-col sm:flex-row">
                  <span>{experience.role}</span>
                  {experience.role && experience.company && (
                    <span className="hidden sm:block">&nbsp;-&nbsp;</span>
                  )}
                  <span>{experience.company}</span>
                </div>
                <div className=" text-sm">{experience.date}</div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className=" flex flex-col gap-2 mr-6">
                {experience.descriptions.map((description, index) => (
                  <p key={index}>{description}</p>
                ))}

                <div className=" flex justify-between text-primary underline">
                  {experience.links.about && (
                    <Link href={"/about"} className=" hover:text-secondary">
                      Who is freddiego?
                    </Link>
                  )}
                  {experience.links.projects && (
                    <Link
                      href={"/archive#projects"}
                      className="flex justify-end text-primary 
                      hover:text-secondary"
                    >
                      View projects
                    </Link>
                  )}
                  {experience.links.contact && (
                    <a
                      href="/#contact"
                      className=" hover:text-secondary"
                      aria-label="Contact freddiego?"
                    >
                      Contact freddiego?
                    </a>
                  )}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default MainExperiences;
