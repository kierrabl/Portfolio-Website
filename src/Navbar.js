import {HashLink as Link} from "react-router-hash-link";

function Navbar() {
	return <nav className="nav">
		<ul>
			<li className="about">
				<Link to="#About">About</Link>
			</li>
			<li className="experience">
				<Link to="#Experience">Experience</Link>
			</li>
			<li className="projects">
				<Link to="#Projects">Projects</Link>
			</li>
		</ul>
	</nav>
}

export default Navbar;