type ExperienceProps = {
  company: string;
  role: string;
  date: string;
  descriptions: string[];
};

function Experience({ company, role, date, descriptions }: ExperienceProps) {
  return (
    <li key={company} className=" flex flex-col gap-2">
      <div className=" flex flex-col md:flex-row ">
        <span>{company}</span>
        <span className=" hidden md:block">&nbsp;-&nbsp;</span>
        <span className=" before:content-['-_'] before:md:content-['']">
          {role}
        </span>
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
