import ExperienceCard from "./ExperienceCard";

const experiences = [
	{
		job: "Test Automation Intern",
		companyAndLocation: "Ford Motor Company of Canada, Ottawa ON",
		timeFrame: "September 2025 - Present",
	},
	{
		job: "Software and Business Mentor",
		companyAndLocation: "FIRST Robotics - Team 8729 Sparkling H2O, Ottawa ON",
		timeFrame: "September 2025 - Present",
	},
	{
		job: "Vice President of Communications",
		companyAndLocation: "Carleton AI Society, Ottawa ON",
		timeFrame: "September 2024 - October 2025"
	},
	{
		job: "Teaching Assistant - Discrete Structures I and Intro to Computers for the Arts and Social Sciences",
		companyAndLocation: "Carleton University, Ottawa ON",
		timeFrame: "September 2024 - April 2025",
	},
	{
		job: "Lead Administrative Student",
		companyAndLocation: "FIRST Robotics Team - Team DAVE, Waterloo ON",
		timeFrame: "September 2017 - January 2022",
	},
];

function Experience() {
	return (
		<section id="Experience" className="py-32 px-4 bg-transparent scroll-mt-32" style={{ scrollMarginTop: "0px" }}>
			<h2 className="text-5xl font-bold text-center text-white mb-12 font-body">Experience</h2>
			<div className="flex flex-col gap-8 max-w-4xl mx-auto">
				{experiences.map((experience, index) => (
					<ExperienceCard key={index} {...experience} />
				))}
			</div>
		</section>
	);
}

export default Experience;
