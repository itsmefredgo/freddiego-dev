import { client } from "@/lib/client";
import { Project } from "@/sanity/sanityPropsInterface";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/lib/image";
import { CardBody, CardContainer, CardItem } from "@/src/components/ui/3d-card";
import TechIcon from "@/src/components/ui/TechIcon";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

type ProjectCardProps = {
  projectSlug: string;
};

async function getProjectCardData(projectSlug: string) {
  const query = `*[_type == "project" && slug.current == "${projectSlug}"][0] 
    {title, slug, publishedAt, thumbnail, github, demo, excerpt, techlist[] }`;
  return await client.fetch(query);
}

export default async function ProjectCard({ projectSlug }: ProjectCardProps) {
  const projectData: Project = await getProjectCardData(projectSlug);
  return (
    <CardContainer>
      <CardBody className=" flex flex-col sm:flex-row lg:flex-col bg-subBackground gap-4 p-4 rounded-md">
        <CardItem
          translateZ={37.5}
          className=" flex flex-1 h-12 tiny:h-auto w-auto"
        >
          <PortableText
            value={projectData.thumbnail}
            components={myPortableTextComponents}
          />
        </CardItem>
        <div className="flex flex-col gap-2 flex-1 justify-between">
          <CardItem translateZ={50} className=" flex flex-col gap-4">
            <Link
              href={`/archive/project/${projectData.slug.current}`}
              className=" text-primary text-[1.5rem] hover:text-secondary"
            >
              {projectData.title}
            </Link>
            <div className=" text-subtext text-sm">
              {new Date(projectData?.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div className=" flex flex-wrap gap-2">
              {projectData.techlist.map((tech: string) => (
                <TechIcon key={tech} tech={tech} />
              ))}
              ...
            </div>
            <div className=" text-sm h-[5rem]">{projectData.excerpt}</div>
          </CardItem>
          <CardItem
            translateZ={25}
            className=" flex justify-between w-full text-primary"
          >
            <div className=" flex flex-row gap-2">
              <a
                href={projectData.github}
                target="_blank"
                className=" hover:text-secondary"
                aria-label="Github link to project"
              >
                <FaGithubSquare className=" h-[1.5rem] w-[1.5rem] " />
              </a>
              <a
                href={projectData.demo}
                className="flex items-center justify-center pb-[3px] hover:text-secondary"
                aria-label="Link to the proejct demo"
              >
                <FaExternalLinkAlt className=" h-[1.3rem] w-[1.3rem] " />
              </a>
            </div>
            <div className=" flex items-end">
              <Link
                href={`/archive/project/${projectData.slug.current}`}
                className=" text-[0.75rem] border-b border-primary hover:border-secondary hover:text-secondary"
                aria-label="Link to the project details page"
              >
                Read about it
              </Link>
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: "15rem",
        }}
      >
        <Image
          src={urlForImage(value)}
          alt="Post"
          fill
          className="rounded-lg mb-4 object-cover"
        />
      </div>
    ),
  },
};
