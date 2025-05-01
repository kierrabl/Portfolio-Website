import ProjectCard from "./ProjectCard";

const projects = [
	{
		title: "Book Club",
		description: "A front-end web application built with a focus on dynamic interaction and user engagement. It allows book club members to create logins, search for books, and write reviews which other users can view.",
		languages: "JavaScript, CSS, HTML, Google Books API",
		link: "https://github.com/kierrabl/Book-Club",
	},

	{
		title: "This Portfolio Website",
		description: "Project 2 description",
		languages: "React, JavaScript, HTML, CSS",
		link: "https://github.com/kierrabl/Portfolio-Website",
	},
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