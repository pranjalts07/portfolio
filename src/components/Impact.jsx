import { impactStats } from "../data/profile";
import { Reveal, Stack, StackItem } from "./motion";
import Counter from "./effects/Counter";

export default function Impact() {
  return (
    <section className="section section--band" id="impact">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">— By the numbers</span>
          <h2 className="section-title">
            Measured, not <em>hand-waved.</em>
          </h2>
        </Reveal>

        <Stack className="impact" amount={0.3}>
          {impactStats.map((s) => (
            <StackItem className="stat" key={s.label}>
              <div className="stat__value">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="stat__label">{s.label}</div>
            </StackItem>
          ))}
        </Stack>
      </div>
    </section>
  );
}
