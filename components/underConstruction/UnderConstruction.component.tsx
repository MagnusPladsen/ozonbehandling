import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <Link href="/" >
      <div className="w-screen h-screen bg-primary pt-80 hover:cursor-pointer">
        <div className="flex w-fit mx-auto place-items-center">
          <Image src="/favicon.svg" alt="Ozonbehandling" width={50} height={50} />
          <p className=" text-2xl lg:text-5xl 3xl:text-6xl mx-auto text-white pl-5">
          Ozonbehandling.no
          </p>
        </div>

        <h1 className="text-xs lg:text-md 3xl:text-lg pt-20 lg:pt-5 3xl:pt-10 mx-auto w-fit text-white text-center">
          Denne siden er fortsatt under utvikling.<br/><br/>
          <span className="underline underline-offset-4">TRYKK</span> for å gå tilbake til forsiden.
        </h1>
      </div>
    </Link>
  );
}
