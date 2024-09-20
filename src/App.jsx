import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
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
        </div>
      </main>
    </>
  );
}

export default App;
