import { client } from "@/lib/client";
import Image from "next/image";
import { urlForImage } from "@/lib/image";
import { PortableText } from "@portabletext/react";

import { Project, Tech } from "@/sanity/sanityPropsInterface";

import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import { CardBody, CardContainer, CardItem } from "@/src/components/ui/3d-card";
import TechIcon from "@/src/components/ui/tech-icon";
import Link from "next/link";
import CategoryCard from "./category-card";

type ProjectCardProps = {
  projectSlug: string;
};

/**
 * Fetches the project data from sanity.
 * @param projectSlug The slug of the project to fetch.
 * @returns A Promise that resolves to the project data.
 */
async function getProjectCardData(projectSlug: string) {
  // Fetching the specific project data from sanity
  const query = `*[_type == "project" && slug.current == "${projectSlug}"][0] 
      {title, slug, techlist, thumbnail, github, demo, excerpt, publishedAt,
        "techstack": techstack[]->{
          name,
          slug,
        },"categories": categories[]->{
          name,
          slug,
        }, }`;
  return await client.fetch(query);
}

/**
 * Renders the project card component.
 * @param projectSlug The slug of the project to render.
 * @returns The rendered project card component.
 */
export default async function ProjectCard({ projectSlug }: ProjectCardProps) {
  // Fetching the project data
  const projectData: Project = await getProjectCardData(projectSlug);

  return (
    <CardContainer className=" w-full h-full">
      {/* Thumbnail image of the project card */}
      <CardBody
        className=" flex flex-col sm:flex-row lg:flex-col 
        bg-subBackground gap-4 p-4 rounded-md w-full h-full"
      >
        <CardItem
          translateZ={37.5}
          className=" flex-1 flex h-12 tiny:h-auto w-auto"
        >
          <Link
            href={`/archive/project/${projectData?.slug.current}`}
            aria-label="Link to the project details page"
            className=" w-full"
          >
            <PortableText
              value={projectData?.thumbnail}
              components={myPortableTextComponents}
            />
          </Link>
        </CardItem>
        {/* Project details of the project card */}
        <div
          className="flex flex-col gap-2 flex-1 justify-between
          min-h-[18rem] max-h-[40rem]"
        >
          <CardItem translateZ={50} className=" flex flex-col gap-4 w-full">
            <Link
              href={`/archive/project/${projectData?.slug.current}`}
              className=" text-primary text-[1.5rem] hover:text-secondary"
            >
              {projectData?.title}
            </Link>
            <div className=" text-subtext text-sm">
              {projectData.publishedAt ? (
                <>
                  {new Date(projectData?.publishedAt).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}
                </>
              ) : (
                <>On-going</>
              )}
            </div>
            <div className=" flex flex-wrap gap-2">
              {projectData.categories &&
                projectData?.categories?.map((category) => (
                  <CategoryCard
                    key={category.slug.current}
                    categorySlug={category.name}
                  />
                ))}
            </div>
            <div className=" flex flex-wrap gap-2">
              {projectData?.techstack?.map((tech: Tech) => (
                <TechIcon key={tech.slug.current} tech={tech.name} />
              ))}
              ...
            </div>
            <div className=" text-sm h-[5rem]">{projectData?.excerpt}</div>
          </CardItem>
          <CardItem
            translateZ={25}
            className=" flex justify-between w-full text-primary"
          >
            <div className=" flex flex-row gap-2">
              <a
                href={projectData?.github}
                target="_blank"
                className=" hover:text-secondary"
                aria-label="Github link to project"
              >
                <FaGithubSquare className=" h-[1.5rem] w-[1.5rem] " />
              </a>
              <a
                href={projectData?.demo}
                className="flex items-center justify-center pb-[3px] 
                hover:text-secondary"
                aria-label="Link to the proejct demo"
              >
                <FaExternalLinkAlt className=" h-[1.3rem] w-[1.3rem] " />
              </a>
            </div>
            <div className=" flex items-end">
              <Link
                href={`/archive/project/${projectData?.slug.current}`}
                className=" text-[0.75rem] border-b border-primary 
                hover:border-secondary hover:text-secondary"
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

// Custom components for portable text
const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: "20rem",
          maxHeight: "40rem",
          minWidth: "20rem",
          maxWidth: "50rem",
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
