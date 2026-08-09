import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/* Counts up to `value` the first time it scrolls into view.
   Preserves decimals (e.g. 0.2) and respects reduced-motion. */
export default function Counter({ value, prefix = "", suffix = "", duration = 1.4 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  const decimals = String(value).includes(".")
    ? String(value).split(".")[1].length
    : 0;

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const shown = decimals
    ? display.toFixed(decimals)
    : Math.round(display).toLocaleString("en-US");

  return (
    <span ref={ref}>
      {prefix}
      {shown}
      {suffix && <span className="unit">{suffix}</span>}
    </span>
  );
}
