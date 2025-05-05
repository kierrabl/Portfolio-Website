function About() {
	return (
		<>
			<section className="min-h-screen flex items-center justify-center px-4 bg-transparent">
				<h1 className="font-nameFont text-6xl md:text-9xl font-bold text-center text-custom-navText">Kierra Blankespoor</h1>
			</section>

			<section id="About" className="py-32 px-4 bg-transparent scroll-mt-32">
				<h2 className="text-4xl font-bold text-center text-custom-navText mb-12">About Me</h2>

				<section className="bg-white border text-custom-navText rounded-lg shadow-lg max-w-3xl mx-auto p-6 space-y-4 leading-relaxed border-gray-300">
					<p>
						Hi! I'm Kierra, a Computer Science student at Carleton University, specializing in Cybersecurity with a minor in Psychology. 
						I am passionate about the intersection of cybersecurity, digital forensics, and software development. With a multidisciplinary mindset, 
						I enjoy tackling challenges that blend technical depth with human-centered thinking.
					</p>
					<p>
						When I'm not busy with school or work, I can be found weightlifting at the gym, out in nature, or exploring the city! 
						On quieter days, I love curling up with my cat and a good show.
					</p>
				</section>
			</section>
		</>
	);
}

export default About;
