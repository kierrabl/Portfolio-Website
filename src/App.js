import { BrowserRouter } from "react-router-dom";
import Navbar from "./content/Navbar";
import About from "./content/About";
import Experience from "./content/Experience"
import Projects from "./content/Projects"

function App() {
	return (
		<div className="bg-custom-navBackground">
			<BrowserRouter>
				<Navbar />
				<About />
				<Experience />
				<Projects />
			</BrowserRouter>
		</div>
	);
}

export default App;
