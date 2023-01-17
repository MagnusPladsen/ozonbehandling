import React from "react";
import DefaultButton from "../buttons/DefaultButton.component";

export default function AboutUs({ header }: { header: string }) {
  const paragraphStyling = "";
  return (
    <div className="py-[20vh] px-[10vw] lg:px-[30vw] 3xl:px-[40vw]">
      <h2 className="font-header font-extrabold text-left  text-2xl lg:text-4xl pb-8">
        {header}
      </h2>
      <div className="text-left flex flex-col gap-2 font-text">
        <p className={`${paragraphStyling} mb-4`}>
          <span className="font-bold">Ozonbehandling</span> spesialiserer seg på
          fjerning av vond lukt i lokaler, bolig & kjøretøy. Ozonbehandling
          leverer skreddersydde løsninger utfra ditt behov.
        </p>
        <p className={`${paragraphStyling} mb-4`}>
          Vi tilbyr et bredt spekter av behandlinger, som fjerning av røyklukt,
          dyrelukt og andre uvedkommende lukter.
        </p>
        <p className={`${paragraphStyling}`}>
          Bedriften benytter seg av miljøvennlige og kjemikaliefrie produkter i
          sin behandling. Bedriften er opptatt av kvalitet, tillitt og
          effektivitet.
        </p>
        <div className="py-16 flex flex-col gap-10">
          <p className="font-text font-bold text-lg text-center">
            Ta kontakt for et uforpliktende tilbud eller andre henvendelser.
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
    </div>
  );
}
