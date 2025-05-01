function ExperienceCard({job, companyAndLocation, timeFrame}) {
	return(
		<div className="experienceCard">
			<h3>{job}</h3>
			<p>{companyAndLocation}</p>
			<p>{timeFrame}</p>
		</div>
	);
}

export default ExperienceCard