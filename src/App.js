import { Route, Routes } from "react-router-dom";

import Notfound from "./pages/404";
import About from "./pages/about";
import Articles from "./pages/articles";
import Contact from "./pages/contact";
import Homepage from "./pages/homepage";
import Projects from "./pages/projects";
import ReadArticle from "./pages/readArticle";

import "./app.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/article/:slug" element={<ReadArticle />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
