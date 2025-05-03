function ExperienceCard({ job, companyAndLocation, timeFrame }) {
	return (
		<div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
			<h3 className="text-xl font-semibold text-custom-navText mb-2">{job}</h3>
			<p className="text-gray-600 text-sm italic">{companyAndLocation}</p>
			<p className="text-gray-500 text-sm italic">{timeFrame}</p>
		</div>
	);
}

export default ExperienceCard;
