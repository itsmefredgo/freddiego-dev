import Link from "next/link";
import { Project } from "@/sanity/sanityPropsInterface";

interface Props {
  project: Project;
}

function ProjectListItem({ project }: Props) {
  return (
    <div className=" bg-subBackground p-4 rounded-lg duration-300">
      <Link
        href={`/archive/project/${project.slug.current}`}
        className=" flex flex-col gap-2"
      >
        <div>
          <h1 className=" text-[1.5rem]">{project?.title}</h1>
          {project?.publishedAt && (
            <p className=" text-[0.75rem]">
              {new Date(project?.publishedAt).toDateString()}
            </p>
          )}
        </div>
        <div>{project.excerpt && <p>Abstract: {project?.excerpt}</p>}</div>
      </Link>
    </div>
  );
}

export default ProjectListItem;
