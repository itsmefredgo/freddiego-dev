import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

const BlockContent = require("@sanity/block-content-to-react");
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import Link from "next/link";
import ProjectTitle from "./ProjectTitle";
import { Blog } from "@/lib/sanityPropsInterface";
import { TbArrowBackUp } from "react-icons/tb";
import { FollowerPointerCard } from "@/src/components/ui/following-pointer";

interface Props {
  blog: Blog;
}

function BlogComponent({ blog }: Props) {
  return (
    <article className=" ">
      <div className=" flex justify-between">
        <ProjectTitle title={blog?.title} />
        <Link href={"/archive#blogs"} className=" text-primary relative">
          <FollowerPointerCard title="Back to Blogs">
            <TbArrowBackUp className=" text-[2rem] w-[2rem] pt-2 hover:pt-0 duration-150" />
          </FollowerPointerCard>
        </Link>
      </div>
      <div className=" flex">
        <p>
          {new Date(blog?.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>

      <div className=" [&>*]:my-0">
        <div className={`${portableTextStyles} `}>
          <PortableText
            value={blog?.body}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </article>
  );
}

export default BlogComponent;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlForImage(value)} alt="Post" width={700} height={700} />
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
