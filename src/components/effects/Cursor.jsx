import { useEffect, useRef } from "react";

/* Custom cursor: a precise dot + a lagging ring that grows over
   interactive elements. Desktop/fine-pointer only, and fully
   disabled for touch or reduced-motion (handled in CSS + guard). */
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    document.body.classList.add("has-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const isInteractive = (el) =>
      el.closest &&
      el.closest('a, button, [role="button"], input, textarea, .project__visual');

    const onOver = (e) => {
      if (ring.current && isInteractive(e.target)) {
        ring.current.classList.add("is-hover");
      }
    };
    const onOut = (e) => {
      if (ring.current && isInteractive(e.target)) {
        ring.current.classList.remove("is-hover");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onOut, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
