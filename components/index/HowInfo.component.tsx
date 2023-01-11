import { AnimatePresence, motion } from "framer-motion";
import BulletInfo from "./BulletInfo.component";
import OpenArrow from "../icons/OpenArrow.component";
import TextBox from "../textBox/TextBox.component";

export default function HowInfo({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Function;
}) {
  const paragraphStyling = "mb-3";
  return (
    <TextBox open={open} setOpen={setOpen} header="Hvordan" component="how">
      <p className={paragraphStyling}>
        <span className="font-bold">Ozonbehandling</span> er en effektiv metode
        for å desinfisere luft og fjerne dårlig lukt fordi ozon er et kraftig
        oxidasjonsmiddel. Ozon kan ødelegge mikroorganismer som bakterier, virus
        og sopp, samt fjerne forurensninger som lukt eller kjemikalier. Dette
        kan bidra til å forbedre luftkvaliteten og redusere risikoen for
        luftveisinfeksjoner.
      </p>
      <p className={paragraphStyling}>
        I <span className="font-bold">kjøretøy</span> og{" "}
        <span className="font-bold">boliger</span> vil ozonbehandling permanent fjerne dårlig lukt eller fuktighet som kan oppstå fra
        matlaging, røyking, eller dyr. Ozonbehandling kan også hjelpe til å
        redusere mengden av allergen og mikrober som kan bygge opp og skape
        helseproblemer.
      </p>
      <p className={paragraphStyling}>
        En annen fordel ved ozonbehandling er at det er en{" "}
        <span className="font-bold">non-invasiv</span> og{" "}
        <span className="font-bold">ikke-kjemisk</span> metode for å desinfisere
        luft. Det trenger ikke å bruke kjemikalier eller skadelige løsninger som
        kan skade mennesker og miljø.
      </p>
      {/*   <p className={paragraphStyling}>
        En <span className="font-bold">ozongenerator</span> bryter ned all
        organisk materiale uten bruk av kjemikalier. Dette vil si at kilden til
        lukten blir molekylert oppløst og brutt ned vil hjelp av ozon.
      </p>
      <p className={paragraphStyling}>
        Derfor er dette eneste metoden for permanent fjerning av blant annet
        røyklukt, matlukt, innestengt lukt etc.
      </p>
      <p className={paragraphStyling}>
        Kraftig behandling vil i tillegg eliminere skadedyr, bakterier og
        overflatemugg. Prosessen kan gjennomføres i bolig, utleieenheter og
        kjøretøy.
      </p> */}
      {/*       <BulletInfo /> */}
    </TextBox>
  );
}
