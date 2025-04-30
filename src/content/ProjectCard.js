function ProjectCard({title, description, link}) {
	return(
		<div className="projectCard">
			<h3>{title}</h3>
			<p>{description}</p>
			<p>{link}</p>
		</div>
	);
}

export default ProjectCard