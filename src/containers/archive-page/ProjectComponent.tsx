import Image from "next/image";
import { urlForImage } from "@/lib/image";
import { PortableText } from "@portabletext/react";

const BlockContent = require("@sanity/block-content-to-react");
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import Link from "next/link";
import ProjectTitle from "./ProjectTitle";
import { Project } from "@/sanity/sanityPropsInterface";
import { TbArrowBackUp } from "react-icons/tb";

import github from "@/public/assets/techicons/GitHub.svg";
import { FollowerPointerCard } from "@/src/components/ui/following-pointer";

interface Props {
  project: Project;
}

function ProjectComponent({ project }: Props) {
  return (
    <article className=" ">
      <div className=" flex justify-between">
        <ProjectTitle title={project?.title} />
        <Link
          href={"/archive#projects"}
          className=" text-primary relative flex flex-col justify-end"
        >
          <FollowerPointerCard title="Back to Projects">
            <TbArrowBackUp className=" text-[2rem] w-[2rem] mt-2 hover:mt-0 duration-150" />
          </FollowerPointerCard>
        </Link>
      </div>
      <div className=" flex">
        <p>
          {new Date(project?.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        {project?.github && (
          <>
            <span className=" mx-2">&#x2022;</span>
            <a href={`https://` + project?.github} target="_blank">
              <div className=" pt-[1px]">
                <Image
                  src={github}
                  alt="Github Link"
                  width={22}
                  height={22}
                  className="customSvgColour"
                />
              </div>
            </a>
          </>
        )}
        {project?.demo && (
          <>
            <span className=" mx-2">&#x2022;</span>
            <a
              href={project.demo}
              className="underline font-extrabold glow1 text-primary"
              target="_blank"
            >
              Demo
            </a>
          </>
        )}
      </div>

      <div className=" [&>*]:my-0">
        <div className={`${portableTextStyles} `}>
          <PortableText
            value={project?.body}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </article>
  );
}

export default ProjectComponent;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlForImage(value)} alt="Post" width={1500} height={700} />
    ),
    code: ({ value }: any) => (
      <div className="my-2">
        <SyntaxHighlighter
          language={value.language}
          style={oneDark}
          showLineNumbers
          wrapLines
          wrapLongLines={true}
          className="[&>*>*]:flex [&>*>*]:flex-wrap [&>*>*]:ml-[2rem]"
          lineNumberStyle={{
            minWidth: "2rem",
            paddingRight: "1rem",
            marginLeft: "-2rem",
            userSelect: "none",
          }}
          useInlineStyles
        >
          {value.code}
        </SyntaxHighlighter>
      </div>
    ),
  },
};
const portableTextStyles = `
[&>*]:my-4
[&>h1]:text-[1.5rem]
[&>h2]:text-[1.25rem]
glow5

`;
