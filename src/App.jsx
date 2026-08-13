import { useLayoutEffect } from "react";

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
     nothing, and gives up. Landing the jump takes more than re-running it once
     — the target keeps moving for a few hundred milliseconds after mount, so we
     hold the position until it stops. */
  useLayoutEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;

    /* Chrome re-applies the offset it remembers for the URL, which lands on top
       of ours. On a deep link the hash decides where we start, not the history. */
    const restoration = history.scrollRestoration;
    history.scrollRestoration = "manual";

    let released = false;
    let stable = 0;
    const giveUp = performance.now() + 1500;

    /* The reader wins the moment they touch the page — a correction that fires
       after they've started scrolling reads as the page fighting them. */
    const release = () => {
      released = true;
    };

    const align = () => {
      if (released) return;
      const target = document.getElementById(id);
      if (!target) return;

      const drift = Math.round(target.getBoundingClientRect().top);
      if (Math.abs(drift) > 1) {
        stable = 0;
        /* "instant", not "auto": html sets scroll-behavior: smooth, so "auto"
           animates the ~4,000px over ~700ms. The web-font swap lands mid-flight
           and moves the target, and a stray trackpad nudge cancels the animation
           outright — both leave the reader short of the section. */
        window.scrollTo({ top: window.scrollY + drift, behavior: "instant" });
      } else if (++stable >= 3) {
        return;
      }
      if (performance.now() < giveUp) setTimeout(align, 50);
    };

    /* setTimeout rather than requestAnimationFrame: a link opened in a
       background tab never gets a frame, so an rAF-gated jump never fires. */
    align();

    /* The font swap is the largest late reflow and on a cold cache it can land
       after the window above closes. */
    document.fonts?.ready.then(align);

    const opts = { passive: true };
    window.addEventListener("wheel", release, opts);
    window.addEventListener("touchstart", release, opts);
    window.addEventListener("keydown", release);

    return () => {
      released = true;
      history.scrollRestoration = restoration;
      window.removeEventListener("wheel", release, opts);
      window.removeEventListener("touchstart", release, opts);
      window.removeEventListener("keydown", release);
    };
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
