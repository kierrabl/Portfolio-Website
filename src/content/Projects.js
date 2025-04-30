import ProjectCard from "./ProjectCard";

const projects = [
	{
		title: "Project 1",
		description: "Project 1 description",
		link: "Project 1 link",
	},

	{
		title: "Project 2",
		description: "Project 2 description",
		link: "Project 2 link",
	},

	{
		title: "Project 3",
		description: "Project 3 description",
		link: "Project 3 link",
	}
]

function Projects() {
	return <section id="Projects" className="projectsSection">
		<h2>Projects</h2>
		{projects.map((project, index) => (
  			<ProjectCard key={index} {...project} />
		))}
	</section>
}

export default Projects;