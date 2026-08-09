import { publication } from "../data/profile";
import { Reveal } from "./motion";
import Counter from "./effects/Counter";
import { ArrowIcon } from "./icons/Icons";

export default function Research() {
  return (
    <section className="section section--band" id="research">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">03 — Research</span>
          <h2 className="section-title">
            Peer-reviewed <em>work.</em>
          </h2>
        </Reveal>

        <Reveal className="pub">
          <span className="pub__badge">◆ {publication.badge}</span>
          <h3 className="pub__title">{publication.title}</h3>
          <p className="pub__meta">{publication.meta}</p>

          {publication.stats?.length > 0 && (
            <div className="pub__stats">
              {publication.stats.map((s) => (
                <div className="metric" key={s.label}>
                  <div className="metric__value">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="metric__label">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          <a
            className="link-arrow pub__cta"
            href={publication.url}
            target="_blank"
            rel="noreferrer"
          >
            Read on IEEE Xplore <ArrowIcon />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
