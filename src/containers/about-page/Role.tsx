import TechIconList from "./TechIconList";

interface SummaryRole {
  role: string;
  slug: string;
  description: string;
  techstack: { category: string; techList: string[] }[];
}

function Role({ role, description, techstack, slug }: SummaryRole) {
  return (
    <li key={role} id={slug}>
      <h2 className=" glow10 py-2 text-xl">{role}</h2>
      <p className=" text-sm leading-[1.75rem] py-2">{description}</p>
      <ul className=" pt-2 flex flex-wrap  lg:justify-between gap-4 w-full h-auto justify-wrap">
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
