import { useEffect } from "react";

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
  /* Deep links (/#work shared in an application) land on the hero otherwise:
     the browser resolves the hash before React has mounted the sections, finds
     nothing, and gives up. Re-run the scroll once the DOM exists. */
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    const jump = () =>
      target.scrollIntoView({ behavior: "auto", block: "start" });
    requestAnimationFrame(() => requestAnimationFrame(jump));
  }, []);

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
