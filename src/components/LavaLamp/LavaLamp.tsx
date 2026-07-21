import type { CSSProperties } from "react";
import "./LavaLamp.scss";

// Seeded PRNG (mulberry32). The bubbles need random-looking but *stable*
// values: this island is `client:load`, so it renders on the server and then
// hydrates, and Math.random() would produce different markup on each side.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const random = mulberry32(0x5eed);

// The reference pen uses 128; each bubble here sits in an SVG-filtered layer
// that repaints a full viewport width every frame, so the count stays low.
const BUBBLE_COUNT = 32;

// Positions are stratified rather than uniformly random: one bubble per slice
// of the width, jittered inside its own slice. Pure Math.random() at this count
// visibly clumps, leaving bald patches along the surface.
const BUBBLES = Array.from({ length: BUBBLE_COUNT }, (_, index) => {
  const slice = 110 / BUBBLE_COUNT;
  return {
    size: (2 + random() * 4).toFixed(2),
    distance: (6 + random() * 5).toFixed(2),
    position: (-5 + slice * (index + random())).toFixed(2),
    time: (2.6 + random() * 2.4).toFixed(2),
    delay: (-1 * (2 + random() * 2)).toFixed(2),
  };
});

export default function LavaLamp() {
  return (
    <div className="lava-lamp">
      <div className="lava-lamp__goo-layer">
        <div className="lava-lamp__blob lava-lamp__blob--1" />
        <div className="lava-lamp__blob lava-lamp__blob--2" />
        <div className="lava-lamp__blob lava-lamp__blob--3" />
        <div className="lava-lamp__blob lava-lamp__blob--4" />
        <div className="lava-lamp__blob lava-lamp__blob--5" />
        <div className="lava-lamp__blob lava-lamp__blob--6" />
        <div className="lava-lamp__blob lava-lamp__blob--7" />
        <div className="lava-lamp__edge lava-lamp__edge--top" />
      </div>

      {/* Pooled liquid at the foot of the hero. The bubbles start buried inside
          it and rise out through its surface. This sits in its own filtered
          layer rather than in __goo-layer: #goo ends with an feBlend that paints
          the sharp source back over the merged result, which is fine for the
          large drifting blobs but would leave these reading as separate hard
          circles instead of one liquid. */}
      <div className="lava-lamp__surface">
        {BUBBLES.map((bubble, index) => (
          <span
            key={index}
            className="lava-lamp__bubble"
            style={
              {
                "--size": `${bubble.size}rem`,
                "--distance": `${bubble.distance}rem`,
                "--position": `${bubble.position}%`,
                "--time": `${bubble.time}s`,
                "--delay": `${bubble.delay}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <svg
        className="lava-lamp__svg"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>

          {/* Same technique, no feBlend: the merged result is the only output,
              which is what makes the bubbles fuse into the surface. */}
          <filter id="goo-surface">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
