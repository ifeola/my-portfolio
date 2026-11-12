import Grid from "./components/Grid";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import { useReveal } from "./hooks/useReveal";
import style from "./styles/main.module.css";

function App() {
	useReveal();

	return (
		<>
			<a className="skip-link" href="#main">
				Skip to content
			</a>

			<Grid />
			<Header />

			<main id="main" className={style.main} tabIndex={-1}>
				<div className={style.divider}>
					<Hero />
					<Projects />
					<About />
					<Skills />
					<Contact />
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
