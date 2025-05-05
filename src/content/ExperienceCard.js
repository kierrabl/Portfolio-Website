function ExperienceCard({ job, companyAndLocation, timeFrame }) {
	return (
		<div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white bg-opacity-70">
			<h3 className="text-xl font-bold font-navFont text-custom-navText mb-2">{job}</h3>
			<p className="text-gray-600 font-navFont font-semibold text-sm italic">{companyAndLocation}</p>
			<p className="text-gray-500 text-sm font-navFont font-semibold italic">{timeFrame}</p>
		</div>
	);
}

export default ExperienceCard;
