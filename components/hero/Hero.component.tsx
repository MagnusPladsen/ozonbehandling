import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const spanStyle = "font-black";

  return (
    <div className="w-full pt-[70px]">
      <div className="hero">
        <div className="flex-row pl-6 lg:pl-28 ">
          <div className="text-3xl lg:text-5xl 2xl:text-7xl pt-6 lg:pt-32 pb-[22vh] 2xl:pb-[15vh] lg:pb-[5vh] lg:w-[50vw] ">
            <span className={spanStyle}>VOND LUKT</span> fra bolig, hotellrom
            eller kjøretøy?
          </div>
          <div
            className="text-xl lg:text-2xl 2xl:text-4xl"
          >
            Vi kommer og fikser! Helt <span className={spanStyle}>GRATIS!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
