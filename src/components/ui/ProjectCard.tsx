import { client } from "@/sanity/lib/client";
import { project } from "@/sanity/lib/schemas/project";
import { Project, Tag } from "@/lib/sanityPropsInterface";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

type ProjectCardProps = {
  projectSlug: string;
};

async function getProjectCardData(projectSlug: string) {
  const query = `*[_type == "project" && slug.current == "${projectSlug}"][0] 
    {title, slug, publishedAt, thumbnail, github, demo, excerpt }`;
  return await client.fetch(query);
}

export default async function ProjectCard({ projectSlug }: ProjectCardProps) {
  const projectData: Project = await getProjectCardData(projectSlug);

  return (
    <>
      <CardContainer>
        <CardBody className=" flex flex-col sm:flex-row lg:flex-col bg-subBackground gap-4 p-4 rounded-md">
          <CardItem
            translateZ={50}
            className=" flex flex-1 h-12 tiny:h-auto w-auto border border-[red]"
          >
            <PortableText
              value={projectData.thumbnail}
              components={myPortableTextComponents}
            />
          </CardItem>
          <CardItem translateZ={50} className="flex flex-col gap-2 flex-1">
            <div>{projectData.title}</div>
            <div>
              {new Date(projectData?.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div>
              <a href={projectData.github}>Git</a>
              <a href={projectData.demo}>Demo</a>
            </div>
            <div className=" text-sm">{projectData.excerpt}</div>
          </CardItem>
          {/* <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={"google.com"}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div> */}
        </CardBody>
      </CardContainer>
      {/* <div
        className=" flex flex-col tiny:flex-row lg:flex-col
    		bg-subBackground gap-4 p-4 rounded-md"
      >
        <div className=" flex flex-1 min-h-[15rem]">
          <PortableText
            value={projectData.thumbnail}
            components={myPortableTextComponents}
          />
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <div>{projectData.title}</div>
          <div>
            {new Date(projectData?.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <div>
            <a href={projectData.github}>Git</a>
            <a href={projectData.demo}>Demo</a>
          </div>
          <div className=" text-sm">{projectData.excerpt}</div>
        </div>
      </div> */}
    </>
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
          layout="fill"
          objectFit="cover"
          className="rounded-lg mb-4 "
        />
      </div>
    ),
  },
};
