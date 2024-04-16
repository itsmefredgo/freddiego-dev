import { client } from "@/lib/client";
import { Project } from "@/sanity/sanityPropsInterface";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/lib/image";
import CategoryCard from "@/src/components/ui/category-card";
import TechIcon from "./tech-icon";
import Link from "next/link";

type PinnedProjectProps = {
  projectSlug: string;
};

async function PinnedProject({ projectSlug }: PinnedProjectProps) {
  async function getProjectCardData(projectSlug: string) {
    const query = `*[_type == "project" && slug.current == "${projectSlug}"][0] 
      {title, slug, techlist, thumbnail, github, demo, excerpt, 
        "techstack": techstack[]->{
          name,
          slug,
        },"categories": categories[]->{
          name,
          slug,
        }, }`;
    return await client.fetch(query);
  }

  const projectData: Project = await getProjectCardData(projectSlug);

  return (
    <div
      className="  flex flex-col lg:flex-row gap-8 hover:bg-subBackground 
      rounded-2xl py-4 px-2 duration-200"
    >
      <div
        className=" w-full h-[20rem] lg:h-auto 
        lg:flex-1 "
      >
        <Link href={`/archive/project/${projectData.slug.current}`}>
          <PortableText
            value={projectData?.thumbnail}
            components={myPortableTextComponents}
          />
        </Link>
      </div>
      <div
        className=" min-h-[10rem] lg:min-h-[20rem] flex flex-col gap-2
        lg:flex-1 justify-start lg:justify-between"
      >
        <div className=" flex flex-col gap-2">
          <h1 className=" text-[1.5rem] text-primary hover:text-secondary ">
            <Link href={`/archive/project/${projectData.slug.current}`}>
              {projectData.title}
            </Link>
          </h1>
          <div className=" flex flex-wrap gap-2">
            {projectData.categories?.map((category) => (
              <CategoryCard
                categorySlug={category.name}
                key={category.slug.current}
              />
            ))}
          </div>
          <div className=" flex flex-wrap gap-2">
            {projectData.techstack?.map((tech) => (
              <TechIcon tech={tech.name} key={tech.name} />
            ))}
          </div>
          <div>
            <p>{projectData.excerpt}</p>
          </div>
        </div>
        <div className=" flex text-primary hover:text-secondary">
          <Link href={`/archive/project/${projectData.slug.current}`}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PinnedProject;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className=" relative w-full h-full hover:scale-105 duration-200">
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
