import { experience } from "../data/profile";
import { Reveal } from "./motion";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">01 — Experience</span>
          <h2 className="section-title">
            Where I've <em>shipped.</em>
          </h2>
        </Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal className="tl-item" key={job.company} delay={i * 0.04}>
              <div className="tl-item__aside">
                <div className="tl-item__period">{job.period}</div>
                <div className="tl-item__where">{job.where}</div>
              </div>
              <div>
                <h3 className="tl-item__role">
                  {job.role} <span className="tl-item__co">— {job.company}</span>
                </h3>
                <p className="tl-item__blurb">{job.blurb}</p>
                <ul className="tl-item__list">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
