import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Experience from "./Experience"
import Projects from "./Projects"

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<About />
			<Experience />
			<Projects />
		</BrowserRouter>
	);
}

export default App;
