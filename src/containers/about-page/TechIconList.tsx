import TechIcon from "@/src/components/ui/TechIcon";

type TechIconListProps = {
  techIcons: string[];
};

function TechIconList(props: TechIconListProps) {
  const { techIcons } = props;
  return (
    <ul className="flex flex-row gap-2 justify-start flex-wrap">
      {techIcons.map((iconName, index: number) => (
        <li key={index}>
          <TechIcon tech={iconName} />
        </li>
      ))}
    </ul>
  );
}

export default TechIconList;
