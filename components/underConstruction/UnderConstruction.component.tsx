import React from "react";
import Image from "next/image";

export default function UnderConstruction() {
  return (
    <div className="w-screen h-screen bg-primary pt-80">
      <div className="flex w-fit mx-auto place-items-center">
        <Image src="/favicon.svg" alt="OzonMaskinen" width={50} height={50} />
        <p className=" text-2xl lg:text-5xl 2xl:text-6xl mx-auto text-white pl-5">OzonMaskinen.no</p>
      </div>
        <h1 className="text-xs lg:text-md 2xl:text-lg pt-20 lg:pt-5 2xl:pt-10 mx-auto w-fit text-white ">
          This page is under construction
        </h1>
    </div>
  );
}
