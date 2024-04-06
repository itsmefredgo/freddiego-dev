import TechIconList from "./TechIconList";

interface SummaryRole {
  role: string;
  description: string;
  techstack: { category: string; techList: string[] }[];
}

function Role({ role, description, techstack }: SummaryRole) {
  return (
    <li key={role} className=" ">
      <h2 className=" glow10 py-2 text-xl">{role}</h2>
      <p className=" text-sm leading-[1.75rem] py-2">{description}</p>
      <ul className=" pt-2 flex flex-wrap  lg:flex-row gap-4 w-full h-auto justify-between">
        {techstack.map(({ category, techList }, index: number) => (
          <li className={`md:w-[45%] lg:w-auto lg:max-w-[11.5rem]`} key={index}>
            <h3>{category}</h3>
            <TechIconList techIcons={techList} />
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Role;
