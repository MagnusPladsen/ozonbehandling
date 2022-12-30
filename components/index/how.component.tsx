import React from "react";
import DefaultButton from "../buttons/DefaultButton.component";
import BulletInfo from "./BulletInfo.component";

export default function How() {
  const paragraphStyling = "";
  return (
    <div className="pb-[160px]">
      <h2 className="font-header font-extrabold text-center text-4xl pb-16">
        Hvordan?
      </h2>
      <div className="text-left flex flex-col gap-2 font-text ">
        <p className={paragraphStyling}>
          En <span className="font-bold">ozongenerator</span> dreper all
          organisk materiale uten bruk av kjemikalier. 
        </p>
        <p className={paragraphStyling}>
          Derfor er dette den mest effektive metoden for å fjerne blant annet
          røyklukt og matlukt.
        </p>
        <p className={paragraphStyling}>
          Prosessen kan gjøres i hotellrom, studentboliger, hytter eller
          kjøretøy.
        </p>
        <BulletInfo />
      </div>
    </div>
  );
}
