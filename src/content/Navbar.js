import {HashLink as Link} from "react-router-hash-link";

function Navbar() {
	return <nav className="fixed top-0 left-0 w-full bg-custom-navBackground flex justify-between items-center px-6 py-4 z-50 bg-opacity-60">
		<ul className="flex space-x-6">
			<li>
				<Link class="text-white font-navFont text-lg font-bold hover:text-gray-300" to="#About">About</Link>
			</li>
			<li>
				<Link class="text-white font-navFont text-lg font-bold hover:text-gray-300" to="#Experience">Experience</Link>
			</li>
			<li>
				<Link class="text-white font-navFont text-lg font-bold hover:text-gray-300" to="#Projects">Projects</Link>
			</li>
		</ul>
		<ul className="flex space-x-6">
			<li>
				<a class="text-white font-navFont text-lg font-bold hover:text-gray-300" href="https://www.linkedin.com/in/kierra-blankespoor">LinkedIn</a>
			</li>
			<li>
				<a class="text-white font-navFont text-lg font-bold hover:text-gray-300" href="https://github.com/kierrabl">GitHub</a>
			</li>
			<li>
				<a class="text-white font-navFont text-lg font-bold hover:text-gray-300" href="https://drive.google.com/file/d/1j2Scyxv3o32FTp7Ax34uI9b3jTP_lJ9c/view?usp=sharing">Resume</a>
			</li>
			<li>
				<a class="text-white font-navFont text-lg font-bold hover:text-gray-300" href="mailto:kierra.blankespoor@gmail.com">Email</a>
			</li>
		</ul>
	</nav>
}

export default Navbar;