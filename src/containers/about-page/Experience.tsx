type ExperienceProps = {
  company: string | null;
  role: string | null;
  date: string | null;
  descriptions: string[];
};

function Experience({ company, role, date, descriptions }: ExperienceProps) {
  return (
    <li className=" flex flex-col gap-2">
      <div className=" flex flex-col md:flex-row ">
        <span>{company}</span>
        {company && role && (
          <span className=" hidden md:block">&nbsp;-&nbsp;</span>
        )}
        <span className=" ">{role}</span>
      </div>
      <span>{date}</span>
      <ul>
        {descriptions.map((description, index) => (
          <li key={index} className=" list-disc ml-5">
            {description}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Experience;
