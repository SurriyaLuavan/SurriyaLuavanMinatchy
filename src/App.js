import "./styles/App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
