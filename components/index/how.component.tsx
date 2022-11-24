import React from "react";
import DefaultButton from "../buttons/DefaultButton.component";
import BulletInfo from "./BulletInfo.component";

export default function How() {
  const paragraphStyling = "";
  return (
    <div className="pb-[120px]">
      <h2 className="font-header font-extrabold text-2xl text-center lg:text-4xl pb-16">
        Hvordan?
      </h2>
      <div className="text-left flex flex-col gap-5 font-text text-lg">
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
        <div className="py-16 flex flex-col gap-10">
          <p className="font-text font-bold text-lg text-center">
            Ta kontakt så finner vi en løsning tilpasset deg og dine behov!
          </p>
          <div className="w-fit mx-auto">
            <DefaultButton
              link="/kontakt"
              text="Kontakt oss"
              onClick={() => {}}
              className=""
            />
          </div>
        </div>
      </div>
      <p className="font-text pt-20 text-center font-light text-sm">
        *Tilbudet gjelder 1 gratis demo hos overnattingssteder, større
        utleievirksomheter og kjøretøyforhandlere
      </p>
    </div>
  );
}
