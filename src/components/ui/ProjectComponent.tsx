import Link from "next/link";
import { Project } from "@/lib/sanityPropsInterface";
import SectionTitle from "./SectionTitle";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

interface Props {
  project: Project;
}

function ProjectComponent({ project }: Props) {
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
    </article>
  );
}

export default ProjectComponent;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlForImage(value)} alt="Post" width={700} height={700} />
    ),
  },
};

const portableTextStyles = `
[&>*]:my-8


`;
