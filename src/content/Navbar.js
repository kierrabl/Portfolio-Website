import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Menu, X } from "lucide-react";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="fixed top-0 left-0 w-full bg-custom-navBackground bg-opacity-60 z-50 px-6 py-4">
			<div className="flex justify-between items-center">

				<button className="md:hidden text-white" onClick={toggleMenu}>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>

				<div className="hidden md:flex justify-between w-full items-center">
					<ul className="flex space-x-6">
						<li><Link className="text-white font-body text-lg font-bold hover:text-gray-300" to="#About">About</Link></li>
						<li><Link className="text-white font-body text-lg font-bold hover:text-gray-300" to="#Experience">Experience</Link></li>
						<li><Link className="text-white font-body text-lg font-bold hover:text-gray-300" to="#Projects">Projects</Link></li>
					</ul>
					<ul className="flex space-x-6">
						<li><a className="text-white font-body text-lg font-bold hover:text-gray-300" href="https://www.linkedin.com/in/kierra-blankespoor">LinkedIn</a></li>
						<li><a className="text-white font-body text-lg font-bold hover:text-gray-300" href="https://github.com/kierrabl">GitHub</a></li>
						<li><a className="text-white font-body text-lg font-bold hover:text-gray-300" href="https://drive.google.com/file/d/1tmJEtU0Wnd_SgO-oRWpW_aSoMsTsm51D/view?usp=sharing">Resume</a></li>
						<li><a className="text-white font-body text-lg font-bold hover:text-gray-300" href="mailto:kierra.blankespoor@gmail.com">Email</a></li>
					</ul>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden mt-4 space-y-4">
					<ul className="flex flex-col space-y-2">
						<li><Link className="text-white text-lg font-bold" to="#About" onClick={toggleMenu}>About</Link></li>
						<li><Link className="text-white text-lg font-bold" to="#Experience" onClick={toggleMenu}>Experience</Link></li>
						<li><Link className="text-white text-lg font-bold" to="#Projects" onClick={toggleMenu}>Projects</Link></li>
					</ul>
					<ul className="flex flex-col space-y-2 pt-2 border-t border-white">
						<li><a className="text-white text-lg font-bold" href="https://www.linkedin.com/in/kierra-blankespoor">LinkedIn</a></li>
						<li><a className="text-white text-lg font-bold" href="https://github.com/kierrabl">GitHub</a></li>
						<li><a className="text-white text-lg font-bold" href="https://drive.google.com/file/d/1epGq9Fx83UHeT4pJzLk8kdI1sS_m8wLq/view?usp=sharing">Resume</a></li>
						<li><a className="text-white text-lg font-bold" href="mailto:kierra.blankespoor@gmail.com">Email</a></li>
					</ul>
				</div>
			)}
		</nav>
	);
}

export default Navbar;
