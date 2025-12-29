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
	{
		title: "Health and Fitness Club Management System",
		description: "A Java application that helps manage a fitness club by handling member registration, class scheduling, and room management. It uses an SQL database to store member and class information and includes easy-to-use interfaces with input validation to reduce errors.",
		languages: "Java, SQL, JDBC",
		link: "https://github.com/kierrabl/Health-and-Fitness-Club-Management-System"
	}
];

function Projects() {
	return (
		<section id="Projects" className="py-32 px-4 bg-transparent scroll-mt-32">
			<h2 className="text-5xl font-bold text-center text-white mb-12 font-body">Projects</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-8 lg:px-16">
				{projects.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</div>
		</section>
	);
}

export default Projects;
