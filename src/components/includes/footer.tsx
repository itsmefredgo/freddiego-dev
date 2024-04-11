import { Locale } from "@/src/i18n.config";
import Image from "next/image";
import HeaderLink from "../ui/HeaderLink";
import freddiego from "@/public/assets/images/freddiego.svg";
import CopyEmail from "../ui/CopyEmail";
import { CgFileDocument } from "react-icons/cg";

function Footer({ lang }: { lang: Locale }) {
  return (
    <footer className="bg-subBackground duration-300">
      <section id="contact">
        <div className={` text-text ${footerDivWidth}`}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 ">
            <div className=" md:col-span-3">
              <div className="flex justify-center sm:justify-start">
                <HeaderLink href={`/`} lang={lang} key={""}>
                  <div className=" h-[25px] w-auto">
                    <Image
                      src={freddiego}
                      alt="Freddiego"
                      className=" h-full w-full customSvgColour"
                    />
                  </div>
                </HeaderLink>
              </div>
              <p
                className="mt-6 text-center font-medium leading-relaxed
              sm:max-w-xs sm:text-left"
              >
                Get in touch
              </p>
              <ul className="mt-6 pl-4 md:pl-0 flex flex-row items-center md:items-start justify-center gap-6 sm:justify-start md:gap-4">
                <div className=" flex flex-col gap-6">
                  <li className=" h-fit">
                    <a
                      href="https://www.linkedin.com/in/fred-go"
                      rel="noreferrer"
                      target="_blank"
                      className=" text-primary transition hover:text-secondary h-fit flex"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-8 w-8 fill-primary hover:fill-secondary "
                        viewBox="0 0 30 30"
                        aria-hidden="true"
                      >
                        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                      </svg>
                    </a>
                  </li>
                  <li className=" h-fit">
                    <a
                      href="https://github.com/itsmefredgo"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg
                        className="h-8 w-8 fill-primary hover:fill-secondary"
                        viewBox="0 0 30 30"
                        aria-hidden="true"
                      >
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                      </svg>
                    </a>
                  </li>
                </div>
                <div className=" flex flex-col gap-6">
                  <li className=" flex items-center h-full ">
                    <a
                      className="text-primary flex hover:underline items-end h-[1.9rem] hover:text-secondary"
                      href="https://itsmefredgo.github.io/freddie-resume/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="sr-only">Resume</span>
                      <CgFileDocument className=" h-[1.8rem] w-[1.8rem] " />
                      <p className="text-[0.75rem] ml-2 ">My Resume</p>
                    </a>
                  </li>
                  <li className=" flex items-center h-full ">
                    <CopyEmail></CopyEmail>
                  </li>
                </div>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 md:grid-cols-2 md:col-span-2">
              {footerPageLinks.map((page) => (
                <div className="text-center sm:text-left" key={page.Title[0]}>
                  <p className="text-lg font-medium hover:text-secondary hover:font-bold">
                    <HeaderLink href={page.Title[1]} lang={lang}>
                      {page.Title[0]}
                    </HeaderLink>
                  </p>

                  <ul className="mt-8 space-y-4 text-sm">
                    {page.Link.map(([title, href]) => (
                      <li
                        key={title}
                        className="text-subtext hover:text-secondary hover:font-bold"
                      >
                        <HeaderLink href={href} lang={lang}>
                          {title}
                        </HeaderLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 border-t border-text text-subtext pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
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
