import { education } from "../data/profile";
import { Reveal } from "./motion";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">— Education</span>
        </Reveal>

        <div>
          {education.map((e, i) => (
            <Reveal className="edu-item" key={e.school} delay={i * 0.05}>
              <div className="edu-item__years">{e.years}</div>
              <div>
                <div className="edu-item__school">{e.school}</div>
                <div className="edu-item__degree">{e.degree}</div>
                {e.note && <div className="edu-item__note">{e.note}</div>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
