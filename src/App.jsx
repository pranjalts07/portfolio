import Grain from "./components/effects/Grain";
import Cursor from "./components/effects/Cursor";
import ScrollProgress from "./components/effects/ScrollProgress";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Impact from "./components/Impact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Grain />
      <Cursor />
      <ScrollProgress />
      <Nav />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Impact />
        <Experience />
        <Projects />
        <Research />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
