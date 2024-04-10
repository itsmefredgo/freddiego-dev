import { Separator } from "@/src/components/ui/separator";
import { CiMapPin } from "react-icons/ci";
import SectionTitle from "@/src/components/ui/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";

type MainExperiencesProps = {};

function MainExperiences({}: MainExperiencesProps) {
  return (
    <section className=" w-full bg-transparent rounded-3xl z-10">
      <SectionTitle title="Experiences" />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex flex-col items-start">
              <div className=" items-start flex flex-col sm:flex-row">
                <span>Web Developer</span>
                <span className="hidden sm:block">&nbsp;-&nbsp;</span>
                <span>St. Joseph's Children's Centre</span>
              </div>
              <div className=" text-sm">Dec 2022 - Dec 2023</div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            Revitalized and updated the organization's website, on WordPress &
            PHP, to ensure accurate and current information. Addressed prior
            site neglect, resolving issues promptly and ensuring the site now
            provides up-to-date information. Resolved issues with email
            inquiries resulting in clients in interest sending emails via a form
            easily.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <div className="flex flex-col items-start">
              <div>Freelance Web Developer</div>
              <div className=" text-sm">Jan 2024 - Mar 2024</div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className=" flex flex-col gap-8 mr-6">
              <p>
                Designed and developed a website for a client to showcase their
                products and services. The website was built using Next.js and
                deployed on Vercel. The website is responsive and accessible on
                mobile and desktop devices.
              </p>
              <Link
                href={"/archive#projects"}
                className="flex justify-end text-primary"
              >
                View projects
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <div className="flex flex-col items-start">
              <div>Now where?</div>
              <div className=" text-sm">Feb 2024 - Present</div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className=" flex flex-col gap-8 mr-6">
              <p>
                I'm currently seeking opportunities to to dive into the world of
                software engineering as a developer. With practical experience
                in web development gained through volunteering and freelancing
                projects, I'm eager to transition into a full-time role where I
                can apply and further develop my skills.
              </p>
              <p>
                If you're on the lookout for a dedicated developer to join your
                team or know of any opportunities, I'd appreciate the chance to
                connect and explore potential possibilities!
              </p>
              <div className=" flex justify-between text-primary underline">
                <a href="/#contact">Contact freddiego?</a>
                <Link href={"/about"}>Who is freddiego?</Link>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default MainExperiences;
