import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import style from "./styles/main.module.css";
import Grid from "./components/Grid";

function App() {
	return (
		<>
			<Grid />
			<Header />
			<main className={style.main}>
				<div className={style.divider}>
					<Hero />
					<About />
					<Projects />
					<Skills />
					<Contact />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
