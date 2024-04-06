type SectionTitleProps = {
  title: string;
};

function SectionTitle({ title }: SectionTitleProps) {
  return <h1 className=" glow10 text-3xl font-bold pb-6 pt-1">{title}</h1>;
}

export default SectionTitle;
