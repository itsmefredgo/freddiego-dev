import SectionTitle from "@/src/components/ui/SectionTitle";
import TechIcons from "@/src/components/ui/TechIcon";
import ProjectCard from "@/src/components/ui/ProjectCard";

type MainRolesProps = {};

function MainRoles({}: MainRolesProps) {
	const techlist = [
		"Nextjs",
		"JavaScript",
		"TypeScript",
		"HTML",
		"CSS",
		"Python"
	];

	const contents = {
		roles: [
			{
				title: "Engineer",
				description:
					"I am a dedicated Software Engineer/Full-stack Developer. ",
				techlist: [
					"Next.js",
					"JavaScript",
					"TypeScript",
					"HTML",
					"CSS",
					"Python"
				],
				projects: ["notifyall", "notifyall"]
			},
			{
				title: "Data Scientist",
				description: "I am a dedicated Data Scientist. ",
				techlist: [
					"Next.js",
					"JavaScript",
					"TypeScript",
					"HTML",
					"CSS",
					"Python"
				],
				projects: ["notifyall", "notifyall"]
			}
		]
	};

	return (
		<section className=" w-full bg-transparent flex flex-col gap-12 px-2">
			{contents.roles.map((role) => (
				<div key={role.title}>
					<SectionTitle title={role.title} />
					<div className=" flex flex-col gap-4 ">
						<div>
							<p>{role.description}</p>
						</div>
						<div className=" flex">
							{role.techlist?.map((tech) => (
								<TechIcons key={tech} tech={tech} />
							))}
						</div>
						<div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
							{role.projects?.map((project) => (
								<ProjectCard key={project} projectSlug={project} />
							))}
						</div>
					</div>
				</div>
			))}
		</section>
	);
}

export default MainRoles;
