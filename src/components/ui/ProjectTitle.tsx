type ProjectTitleProps = {
  title: string;
};

function ProjectTitle({ title }: ProjectTitleProps) {
  return <h1 className=" glow10 text-3xl font-bold pt-1">{title}</h1>;
}

export default ProjectTitle;
