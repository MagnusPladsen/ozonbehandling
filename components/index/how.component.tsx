import React from "react";
import DefaultButton from "../buttons/DefaultButton.component";
import BulletInfo from "./BulletInfo.component";


export default function How() {
  const paragraphStyling = "font-text pt-5 w-[80vw] 2xl:w-[40vw] text-lg mx-auto";
  return (
    <div className="pt-10 pb-10 ">
      <h2 className="font-header font-extrabold text-2xl text-center lg:py-8 lg:text-3xl">
        Hvordan?
      </h2>
      <div className="">
        <p className={paragraphStyling}>
          En <span className="font-bold">ozongenerator</span> dreper all
          organisk materiale uten bruk av kjemikalier.
        </p>
        <p className={paragraphStyling}>
          Derfor er dette den mest effektive metoden for å fjerne blant annet
          røyklukt og matlukt.
        </p>
        <p className={paragraphStyling}>
          Prosessen kan gjøres i hotellrom, studentboliger hytter eller
          kjøretøy.
        </p>
        <BulletInfo />
        <div className="w-[80vw] mx-auto text-center py-28">
          <p className="font-text font-bold pb-10 text-lg mx-auto">
            Ta kontakt så finner vi en løsning tilpasset deg og dine behov!
          </p>
          <DefaultButton text="Kontakt oss" onClick={() => {}} />
        </div>
      </div>
      <p className="font-text pt-20 w-[80vw] 2xl:w-[40vw] font-light text-sm mx-auto">
        *Tilbudet gjelder 1 gratis demo hos overnattingssteder, større
        utleievirksomheter og kjøretøyforhandlere
      </p>
    </div>
  );
}
