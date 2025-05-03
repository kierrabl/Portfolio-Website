function ProjectCard({ title, description, languages, link }) {
	return (
		<div className="bg-custom-navBackground text-custom-navText border border-gray-300 rounded-2xl shadow-md p-6 max-w-sm w-full text-center space-y-4">
			<h3 className="text-2xl font-semibold">{title}</h3>
			<p className="text-base leading-relaxed">{description}</p>
			<p className="italic text-sm">{languages}</p>
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-block bg-custom-navText text-custom-navBackground font-bold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-800"
			>
				View Project
			</a>
		</div>
	);
}

export default ProjectCard;
