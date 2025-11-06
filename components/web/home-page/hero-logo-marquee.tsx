import React from "react";
import WaveLine from "./hero-wave-line";
import { CompanyLogosMarquee } from "./hero-marquee";

export default function HeroLogoMarquee() {
  return (
    <div className="absolute bottom-0 left-0">
      <WaveLine color="#fff" className="fill-white" height={120} />
      <div className="absolute bottom-0 left-0 max-w-[800px] overflow-hidden">
        <CompanyLogosMarquee />
      </div>
    </div>
  );
}
