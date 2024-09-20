import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import style from "./styles/main.module.css";

function App() {
  return (
    <>
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
