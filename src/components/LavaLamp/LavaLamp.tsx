import "./LavaLamp.scss";

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
        <div className="lava-lamp__edge lava-lamp__edge--bottom" />
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
        </defs>
      </svg>
    </div>
  );
}
