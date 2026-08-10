import { useRef } from "react";
import { motion } from "framer-motion";
import { featured, projectsIndex } from "../data/profile";
import { Reveal } from "./motion";
import Counter from "./effects/Counter";
import { GitHubIcon, ExternalIcon, ArrowIcon } from "./icons/Icons";

function Pipeline({ data }) {
  return (
    <div className="pipeline">
      <div className="pipeline__title">{data.title}</div>
      {data.nodes.map((n, i) => (
        <div key={i}>
          <motion.div
            className={`pipe-node ${n.hot ? "is-hot" : ""}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
          >
            <span>{n.label}</span>
            {n.detail && <span className="k">{n.detail}</span>}
          </motion.div>
          {i < data.nodes.length - 1 && <div className="pipe-arrow">↓</div>}
        </div>
      ))}
    </div>
  );
}

function FeaturedProject({ project, index }) {
  const flip = index % 2 === 1;
  const visualRef = useRef(null);

  const onMove = (e) => {
    const el = visualRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <Reveal className={`project ${flip ? "project--flip" : ""}`}>
      <div
        className={`project__visual ${
          project.image ? "project__visual--shot" : ""
        }`}
        ref={visualRef}
        onMouseMove={onMove}
      >
        {/* A screenshot of the live app carries more weight than a diagram of it.
            Projects without a deployment keep the pipeline. */}
        {project.image ? (
          <img
            className="project__shot"
            src={project.image}
            alt={`${project.name} running in the browser`}
            loading="lazy"
            width="1504"
            height="812"
          />
        ) : (
          <Pipeline data={project.pipeline} />
        )}
      </div>

      <div>
        <span className="project__no">{project.no} / Featured</span>
        <div className="project__flag">{project.flag}</div>
        <h3 className="project__name">{project.name}</h3>
        <p className="project__desc">{project.description}</p>

        <div className="project__metrics">
          {project.metrics.map((m) => (
            <div className="metric" key={m.label}>
              <div className="metric__value">
                <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
              </div>
              <div className="metric__label">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="project__tags">
          {project.tags.map((t) => (
            <span className="project__tag" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="project__links">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer">
              <GitHubIcon size={18} /> Source
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer">
              <ExternalIcon size={18} /> Live
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">02 — Selected Work</span>
          <h2 className="section-title">
            Systems I've <em>built.</em>
          </h2>
          <p className="section-intro">
            Four systems where a model met a hard constraint — a latency budget,
            a compute bill, or an answer that had to be right.
          </p>
        </Reveal>

        <div className="projects-grid">
          {featured.map((p, i) => (
            <FeaturedProject key={p.name} project={p} index={i} />
          ))}
        </div>

        {/* compact index */}
        {projectsIndex.length > 0 && (
        <div className="pindex">
          {projectsIndex.map((p) => (
            <Reveal key={p.name}>
              <a
                className="pindex__row"
                href={p.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className="pindex__no">{p.no}</span>
                <span>
                  <span className="pindex__name">{p.name}</span>
                  <span className="pindex__desc">{p.description}</span>
                </span>
                <span className="pindex__tags">{p.tags}</span>
              </a>
            </Reveal>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
