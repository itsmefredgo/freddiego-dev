"use client";

import Link from "next/link";
import { Project } from "@/lib/sanityPropsInterface";
import SectionTitle from "./SectionTitle";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useEffect } from "react";
const BlockContent = require("@sanity/block-content-to-react");
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useState } from "react";

interface Props {
  project: Project;
}

function ProjectComponent({ project }: Props) {
  // const [theme, setTheme] = useState<string | null>(null);
  // useEffect(() => {
  //   setTheme(localStorage.getItem("theme"));
  // }, []);
  return (
    <article className="">
      <SectionTitle title={project?.title} />
      <div className=" [&>*]:my-8">
        <h2>{new Date(project?.publishedAt).toDateString()}</h2>
        <p>{project?.excerpt}</p>
        <div className={`${portableTextStyles} `}>
          <PortableText
            value={project?.body}
            components={myPortableTextComponents}
          />
        </div>
      </div>
      <code>Some code</code>
    </article>
  );
}

export default ProjectComponent;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlForImage(value)} alt="Post" width={700} height={700} />
    ),
    code: ({ value }: any) => (
      <div className="my-2" id="code">
        <SyntaxHighlighter
          language={value.language}
          style={oneDark}
          PreTag="div"
        >
          {value.code}
        </SyntaxHighlighter>
      </div>
    ),
  },
};

const portableTextStyles = `
[&>*]:my-8
[&>h2]:text-[2rem]
[&>h3]:text-[1.5rem]
[&>*]:glowpink


`;
