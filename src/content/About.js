function About() {
	return (
		<>
			<section className="min-h-screen flex items-center justify-center px-4 bg-transparent">
				<h1 className="font-orbitron text-5xl md:text-8xl font-bold text-center text-white">Kierra Blankespoor</h1>
			</section>

			<section id="About" className="py-32 px-4 bg-transparent scroll-mt-32">
				<h2 className="text-5xl font-body font-bold text-center text-white mb-12">About Me</h2>

				<section className="bg-white border text-custom-text rounded-lg shadow-lg max-w-4xl mx-auto p-8 space-y-4 leading-relaxed border-gray-300 text-lg bg-opacity-70">
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
