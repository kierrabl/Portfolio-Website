import ProjectCard from "./ProjectCard";

const projects = [
	{
		title: "Book Club",
		description:
			"A front-end web application built with a focus on dynamic interaction and user engagement. It allows book club members to create logins, search for books, and write reviews which other users can view.",
		languages: "JavaScript, CSS, HTML, Google Books API",
		link: "https://github.com/kierrabl/Book-Club",
	},
	{
		title: "This Portfolio Website",
		description: "A personal portfolio to showcase my projects and experience.",
		languages: "React, JavaScript, HTML, CSS, Tailwind CSS",
		link: "https://github.com/kierrabl/Portfolio-Website",
	},
];

function Projects() {
	return (
		<section id="Projects" className="py-16 px-4 bg-white">
			<h2 className="text-4xl font-bold text-center text-custom-navText mb-12">Projects</h2>
			<div className="flex flex-col gap-8 max-w-4xl mx-auto">
				{projects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</section>
	);
}

export default Projects;
