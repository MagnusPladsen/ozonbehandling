import React from "react";
import DefaultButton from "../buttons/DefaultButton.component";
import BulletInfo from "../index/BulletInfo.component";

export default function CompanyComponent({ header }: { header: string }) {
  const paragraphStyling = "";
  return (
    <div className="py-[80px] px-[10vw] lg:px-[30vw] 3xl:px-[40vw]">
      <h2 className="font-header font-extrabold text-left  text-2xl lg:text-4xl pb-8">
        {header}
      </h2>
      <div className="text-left flex flex-col gap-2 font-text">
        <p className={paragraphStyling}>
          En <span className="font-bold">ozongenerator</span> dreper all
          organisk materiale uten bruk av kjemikalier.
        </p>
        <p className={paragraphStyling}>
          Derfor er dette den mest effektive metoden for å fjerne blant annet
          røyklukt og matlukt.
        </p>
        <p className={paragraphStyling}>
          Prosessen kan gjøres i hotellrom, boliger, hytter eller kjøretøy.
        </p>
        <BulletInfo />
        <div className="py-16 flex flex-col gap-10">
          <p className="font-text font-bold text-lg text-center">
            Vi tilbyr også skreddersydde pakker til deres behov. <br /> Ta
            kontakt for et uforpliktende tilbud eller andre henvendelser.
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
      <p className="font-text lg:pt-20 text-center font-light text-sm">
        * Tilbudet gjelder 1 gratis demo hos overnattingssteder, større
        utleievirksomheter og kjøretøyforhandlere
      </p>
    </div>
  );
}
