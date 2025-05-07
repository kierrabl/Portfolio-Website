function ExperienceCard({ job, companyAndLocation, timeFrame }) {
	return (
		<div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white bg-opacity-70">
			<h3 className="text-xl font-bold font-body text-custom-text mb-2">{job}</h3>
			<p className="text-gray-600 font-body font-semibold text-sm italic">{companyAndLocation}</p>
			<p className="text-gray-500 text-sm font-body font-semibold italic">{timeFrame}</p>
		</div>
	);
}

export default ExperienceCard;
