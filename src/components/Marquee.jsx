import { marquee } from "../data/profile";

/* Infinite horizontal strip. Track is duplicated so the -50%
   keyframe loops seamlessly. Pauses on hover. */
export default function Marquee() {
  const row = [...marquee, ...marquee];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
