import TechIcon from "@/src/components/ui/tech-icon";

type TechIconListProps = {
  techIcons: string[];
};

/**
 * Renders a list of tech icons.
 * @param techIcons The list of tech icon names in strings to render.
 * @returns The rendered list of tech icons.
 */
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
