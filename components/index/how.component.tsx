import React from "react";
import DefaultButton from "../buttons/DefaultButton.component";

export default function How() {
  const paragraphStyling = "font-text pt-5 w-[80vw] text-lg mx-auto";
  return (
    <div className="pt-10 pb-10">
      <h1 className="font-header font-extrabold text-2xl text-center">
        Hvordan?
      </h1>
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
        <div className="w-[80vw] mx-auto text-center py-20">
          <p className="font-text font-bold pb-10 text-lg mx-auto">
            Ta kontakt så finner vi en løsning tilpasset deg og dine behov!
          </p>
          <DefaultButton text="Kontakt oss" onClick={() => {}} />
        </div>

        <p className="font-text pt-10 w-[80vw] font-light text-sm mx-auto">
          *Tilbudet gjelder 1 gratis demo hos overnattingssteder, større
          utleievirksomheter og kjøretøyforhandlere
        </p>
      </div>
    </div>
  );
}
