import { techStack } from "../data/profile";
import { Reveal, Stack, StackItem } from "./motion";

export default function TechStack() {
  return (
    <section className="section section--tint" id="tech">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">01 — Toolkit</span>
          <h2 className="section-title">The stack I reach for.</h2>
          <p className="section-intro">
            Languages and systems I use to take ideas from prototype to
            production.
          </p>
        </Reveal>

        <Stack className="tech-grid" amount={0.15}>
          {techStack.map((group) => (
            <StackItem key={group.label} className="tech-card">
              <div className="tech-card__label">{group.label}</div>
              <div className="tech-chips">
                {group.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            </StackItem>
          ))}
        </Stack>
      </div>
    </section>
  );
}
