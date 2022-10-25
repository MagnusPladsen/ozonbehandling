import React from "react";
import Image from "next/image";
/* import heroImage from "../public/images/hero.png"; */

export default function Hero() {
  const spanStyle = "font-black";

  return (
    <div className="w-full">
      <div className="hero">
        <div className="flex-row pl-6">
          <div className="text-3xl pt-6 pb-[15vh] w-[60vw]">
            <span className={spanStyle}>VOND LUKT</span> fra bolig, hotellrom
            eller kjøretøy?
          </div>
          <div className="text-xl ">
            Vi kommer og fikser! Helt <span className={spanStyle}>GRATIS!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
