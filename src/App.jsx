import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { BlogPage } from "./pages/BlogPage";
import { ProjectDetail } from "./components/ProjectDetail";

export const App = () => {
	return (
		<>
			<Navbar />

			<Routes>
				<Route>
					<Route path="/" element={<HomePage />} />
					<Route path="/services" element={<ServicesPage />} />
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/projects/:slug" element={<ProjectDetail />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/blog" element={<BlogPage />} />
				</Route>
			</Routes>
		</>
	);
};
