import BulletInfo from "./BulletInfo.component";

export default function HowInfo() {
  const paragraphStyling = "";
  return (
    <div className="pb-[160px]">
      <h2 className="font-header font-extrabold text-center text-4xl pb-16">
        Hvordan?
      </h2>
      <div className="text-left flex flex-col gap-5 font-text text-xl ">
        <p className={paragraphStyling}>
          En <span className="font-bold">ozongenerator</span> bryter ned all
          organisk materiale uten bruk av kjemikalier. Dette vil si at kilden til lukten blir molekylert oppløst og brutt ned
          vil hjelp av ozon.
        </p>
        <p className={paragraphStyling}>
          Derfor er dette eneste metoden for permajent fjerning av blant annet
          røyklukt, matlukt, innestengt lukt etc.
        </p>
        <p className={paragraphStyling}>
          Kraftig behandling vil i tillegg eliminere skadedyr, bakterier og
          overflatemugg.
          Prosessen kan gjennomføres i bolig, utleieenheter og kjøretøy.
        </p>
        <BulletInfo />
      </div>
    </div>
  );
}
