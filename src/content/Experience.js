import ExperienceCard from "./ExperienceCard";

const experiences = [
	{
		job: "Vice President of Communications",
		companyAndLocation: "Carleton AI Society, Ottawa ON",
		timeFrame: "November 2024 - Present"
	},
	{
		job: "Teaching Assistant - Discrete Structures I and Intro to Computers for the Arts and Social Sciences",
		companyAndLocation: "Carleton University, Ottawa ON",
		timeFrame: "September 2024 - April 2025",
	},
	{
		job: "Sales Associate",
		companyAndLocation: "Home Depot, Ottawa ON",
		timeFrame: "March 2024 - Present"
	},
	{
		job: "Camp Leader",
		companyAndLocation: "Brick Works Academy, Waterloo ON",
		timeFrame: "July 2023 - August 2023",
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
