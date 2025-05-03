import {HashLink as Link} from "react-router-hash-link";

function Navbar() {
	return <nav className="bg-custom-navBackground flex justify-between items-center px-6 py-4">
		<ul className="flex space-x-6">
			<li>
				<Link class="text-custom-navText font-navFont hover:text-black" to="#About">About</Link>
			</li>
			<li>
				<Link class="text-custom-navText font-navFont hover:text-black" to="#Experience">Experience</Link>
			</li>
			<li>
				<Link class="text-custom-navText font-navFont hover:text-black" to="#Projects">Projects</Link>
			</li>
		</ul>
		<ul className="flex space-x-6">
			<li>
				<a class="text-custom-navText font-navFont hover:text-black" href="https://www.linkedin.com/in/kierra-blankespoor">LinkedIn</a>
			</li>
			<li>
				<a class="text-custom-navText font-navFont hover:text-black" href="https://github.com/kierrabl">GitHub</a>
			</li>
			<li>
				<a class="text-custom-navText font-navFont hover:text-black" href="https://drive.google.com/file/d/1j2Scyxv3o32FTp7Ax34uI9b3jTP_lJ9c/view?usp=sharing">Resume</a>
			</li>
			<li>
				<a class="text-custom-navText font-navFont hover:text-black" href="mailto:kierra.blankespoor@gmail.com">GitHub</a>
			</li>
		</ul>
	</nav>
}

export default Navbar;