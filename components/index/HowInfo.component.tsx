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
      </p>
      <BulletInfo />
    </TextBox>
  );
}
