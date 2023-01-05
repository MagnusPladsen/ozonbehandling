import { AnimatePresence, motion } from "framer-motion";
import BulletInfo from "./BulletInfo.component";

export default function HowInfo({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Function;
}) {
  const paragraphStyling = "";
  return (
    <div
      className={`py-[60px] ${open ? "" : " bg-primary text-white"} `}
      onClick={() => setOpen("howInfo")}
    >
      <h2
        className={`font-header font-extrabold text-2xl text-center lg:text-4xl ${
          open ? "text-primary" : "text-white"
        }`}
      >
        Hvordan?
      </h2>
      <AnimatePresence initial={false}
    >
      {open ? (
        <motion.div
        initial={{ display: "none", height: 0 }}
        animate={{ display: "block", height: "auto", marginTop: 40 }}
        exit={{ display: "none", height: 0 }}
        transition={{ duration: 0.3 }}
          className={`text-left flex flex-col gap-5 font-text   w-[60vw] mx-auto`}
        >
            <p className={paragraphStyling}>
              En <span className="font-bold">ozongenerator</span> bryter ned all
              organisk materiale uten bruk av kjemikalier. Dette vil si at
              kilden til lukten blir molekylert oppløst og brutt ned vil hjelp
              av ozon.
            </p>
            <p className={paragraphStyling}>
              Derfor er dette eneste metoden for permajent fjerning av blant
              annet røyklukt, matlukt, innestengt lukt etc.
            </p>
            <p className={paragraphStyling}>
              Kraftig behandling vil i tillegg eliminere skadedyr, bakterier og
              overflatemugg. Prosessen kan gjennomføres i bolig, utleieenheter
              og kjøretøy.
            </p>
            <BulletInfo />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
