import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/ Projects"
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white font-sans">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
