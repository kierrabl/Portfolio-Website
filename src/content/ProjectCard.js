function ProjectCard({title, description, languages, link}) {
	return(
		<div className="projectCard">
			<h3>{title}</h3>
			<p>{description}</p>
			<p>{languages}</p>
			<a href={link} target="_blank" rel="noopener noreferrer" className="projectButton">View Project</a>
		</div>
	);
}

export default ProjectCard