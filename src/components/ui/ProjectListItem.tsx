import Link from "next/link";
import { Project } from "@/lib/sanityPropsInterface";

interface Props {
  project: Project;
}

function ProjectListItem({ project }: Props) {
  return (
    <div>
      <Link href={`/archive/project/${project.slug.current}`}>
        {project.title}
      </Link>
    </div>
  );
}

export default ProjectListItem;
