type SectionTitleProps = {
  title: string;
};

function SectionTitle({ title }: SectionTitleProps) {
  return <h1 className=" text-2xl font-bold">{title}</h1>;
}

export default SectionTitle;
