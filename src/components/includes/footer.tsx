import { Locale } from "@/src/i18n.config";
import Image from "next/image";

import LinkForLanguage from "@/src/components/ui/lang-direct-link";
import CopyEmail from "@/src/components/ui/copy-email";
import { LinkedInSVG, GitHubSVG } from "@/src/components/ui/footer-connect-svg";

import freddiego from "@/public/assets/images/freddiego.svg";
import { CgFileDocument } from "react-icons/cg";

/**
 * Renders the footer section of the website.
 * @param lang The language to render the footer in.
 * @returns The rendered footer section.
 */
function Footer({ lang }: { lang: Locale }) {
  return (
    <footer className="bg-subBackground duration-300">
      <section id="contact">
        <div className={` text-text ${footerDivWidth}`}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 ">
            <div className=" md:col-span-3">
              <div className="flex justify-center sm:justify-start">
                <LinkForLanguage href={`/`} lang={lang} key={""}>
                  <div className=" h-[25px] w-auto">
                    <Image
                      src={freddiego}
                      alt="Freddiego"
                      className=" h-full w-full customSvgColour"
                    />
                  </div>
                </LinkForLanguage>
              </div>
              <p
                className="mt-6 text-center font-medium leading-relaxed
              sm:max-w-xs sm:text-left"
              >
                Get in touch
              </p>
              <ul
                className="mt-6 pl-4 md:pl-0 flex flex-row items-center 
                md:items-start justify-center gap-6 sm:justify-start md:gap-4"
              >
                <li className=" flex flex-col gap-4">
                  <div className=" h-fit">
                    <a
                      href="https://www.linkedin.com/in/fred-go"
                      rel="noreferrer"
                      target="_blank"
                      className=" text-primary transition hover:text-secondary 
                      h-fit flex"
                    >
                      <LinkedInSVG />
                    </a>
                  </div>
                  <div className=" h-fit">
                    <a
                      href="https://github.com/itsmefredgo"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <GitHubSVG />
                    </a>
                  </div>
                </li>
                <li className=" flex flex-col gap-4">
                  <div className=" flex items-center h-full ">
                    <a
                      className="text-primary flex hover:underline items-end 
                      h-[1.9rem] hover:text-secondary"
                      href="https://itsmefredgo.github.io/freddie-resume/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="sr-only">Resume</span>
                      <CgFileDocument className=" h-[1.8rem] w-[1.8rem] " />
                      <p className="text-[0.75rem] ml-2 ">My Resume</p>
                    </a>
                  </div>
                  <div className=" flex items-center h-full ">
                    <CopyEmail></CopyEmail>
                  </div>
                </li>
              </ul>
            </div>

            <div
              className="grid grid-cols-1 gap-8 sm:grid-cols-4 md:grid-cols-2 
              md:col-span-2"
            >
              {footerPageLinks.map((page) => (
                <div className="text-center sm:text-left" key={page.Title[0]}>
                  <p
                    className="text-lg font-medium hover:text-secondary 
                    hover:font-bold"
                  >
                    <LinkForLanguage href={page.Title[1]} lang={lang}>
                      {page.Title[0]}
                    </LinkForLanguage>
                  </p>

                  <ul className="mt-8 space-y-4 text-sm">
                    {page.Link.map(([title, href]) => (
                      <li
                        key={title}
                        className="text-subtext hover:text-secondary 
                        hover:font-bold"
                      >
                        <LinkForLanguage href={href} lang={lang}>
                          {title}
                        </LinkForLanguage>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 border-t border-text text-subtext pt-6">
            <div
              className="text-center sm:flex sm:justify-between 
              sm:text-left"
            >
              <p className="text-sm">
                <span className="block sm:inline">All rights reserved.</span>
              </p>
              <p className="mt-4 text-sm sm:order-first sm:mt-0">
                &copy; 2024 freddiego.dev
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

// Links to put in the footer
const footerPageLinks = [
  {
    Title: ["About", "/about"],
    Link: [
      ["Roles", "/about#roles"],
      ["Education", "/about#education"],
      ["Experiences", "/about#experiences"],
    ],
  },
  {
    Title: ["Archive", "/archive"],
    Link: [
      ["Projects", "/archive#projects"],
      ["Blogs", "/archive#blogs"],
    ],
  },
];

const footerDivWidth = `
sm:px-[min(calc((100%-36rem)/2),4rem)] 
md:px-[min(calc((100%-40rem)/2),8rem)]
lg:px-[min(calc((100%-48rem)/2),10rem)]
xl:px-[calc((100%-60rem)/2)]
px-4 pb-8 pt-16 lg:px-8 lg:pt-24 
`;
