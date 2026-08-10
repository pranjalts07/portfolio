import { motion } from "framer-motion";
import { profile, heroLines } from "../data/profile";
import { ArrowIcon, GitHubIcon } from "./icons/Icons";

const lineWrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};
const lineUp = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};
const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: d, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__aurora" aria-hidden="true" />
      <div className="container container--wide hero__inner">
        {/* top meta line */}
        <motion.div
          className="hero__meta-top"
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0.9}
        >
          <span>{profile.role} · Portfolio 2026</span>
          <span className="hero__avail">
            <span className="hero__dot" /> {profile.status}
          </span>
          <span>{profile.location}</span>
        </motion.div>

        {/* name (left) + intro block (right) */}
        <div className="hero__main">
          <motion.h1
            className="hero__name"
            variants={lineWrap}
            initial="hidden"
            animate="show"
          >
            {heroLines.map((line, i) => (
              <span className="line" key={line}>
                <motion.span variants={lineUp}>
                  {i === heroLines.length - 1 ? <em>{line}.</em> : line}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.div
            className="hero__side"
            variants={fade}
            initial="hidden"
            animate="show"
            custom={0.75}
          >
            <p className="hero__tag">
              I build <b>machine learning systems</b> that hold up outside the
              notebook — RAG pipelines, computer-vision inspection, and churn
              models that rank by revenue at risk.
            </p>

            <div className="hero__facts">
              <div>
                <span>Degree</span>
                <b>MS Statistics · CSU East Bay</b>
              </div>
              <div>
                <span>Focus</span>
                <b>ML · NLP · Vision</b>
              </div>
              <div>
                <span>Authorization</span>
                <b>{profile.authorization}</b>
              </div>
              <div>
                <span>Credential</span>
                <b>IEEE-Published</b>
              </div>
            </div>

            <div className="hero__cta">
              <a
                className="btn btn--primary"
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Résumé <ArrowIcon />
              </a>
              <a
                className="btn btn--outline"
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon size={16} /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
