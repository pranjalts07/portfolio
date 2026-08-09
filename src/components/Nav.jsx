import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/profile";
import { MenuIcon, CloseIcon } from "./icons/Icons";

const links = [
  { href: "#about", label: "About", idx: "00" },
  { href: "#experience", label: "Experience", idx: "01" },
  { href: "#work", label: "Work", idx: "02" },
  { href: "#research", label: "Research", idx: "03" },
  { href: "#contact", label: "Contact", idx: "04" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="nav__inner">
          <a href="#top" className="nav__logo">
            Pranjal<b>.</b>
          </a>

          <ul className="nav__links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>
                  <span className="idx">{l.idx}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="nav__toggle"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              className="nav__toggle drawer__close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.06 }}
              >
                <span className="idx">{l.idx}</span>
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
