function ProjectCard({ title, description, languages, link }) {
	return (
		<div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white bg-opacity-70">
			<h3 className="text-xl font-bold font-navFont text-custom-navText mb-2">{title}</h3>
			<p className="text-gray-600 font-semibold font-navFont text-sm italic mb-2">{description}</p>
			<p className="text-gray-500 font-semibold font-navFont text-sm italic mb-2">{languages}</p>
			<div className="flex justify-center mt-4">
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block bg-custom-navText text-custom-navBackground font-bold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-gray-800"
				>
					View Project
				</a>
			</div>
		</div>
	);
}

export default ProjectCard;
