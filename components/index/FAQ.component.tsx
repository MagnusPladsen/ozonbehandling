import React from "react";
import DefaultButton from "../buttons/DefaultButton.component";
import BulletInfo from "./BulletInfo.component";
import { AnimatePresence, motion } from "framer-motion";
import OpenArrow from "../icons/OpenArrow.component";
import TextBox from "../textBox/TextBox.component";

export default function FAQ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Function;
}) {
  const questionStyling = "font-bold text-xl underline underline-offset-2 pb-1 ";
  return (
    <TextBox
      open={open}
      setOpen={setOpen}
      header={"Ofte stilte spørsmål"}
      component="faq"
    >
      <div className="">
        <p className={`${questionStyling} `}>Er ozon farlig?</p>
        <p className={`pb-8`}>
          Ozon er skadelig å puste inn. Derfor er det viktig å forlate området,
          lukk alle dører og vinduer før maskinen begynner å jobbe. Vi fjerner
          også folk, dyr og planter fra behandlingsområdet.
        </p>

        <p className={`${questionStyling} `}>Hva må jeg gjøre?</p>
        <p className={`pb-8`}>
          Det eneste du som kunde må gjøre er å booke en time med oss. Vi tar
          resten av jobben. Vi kommer til deg, setter opp maskinen og fjerner
          alt som kan være i fare for ozon.
        </p>

        <p className={`${questionStyling} `}>Hva skjer med planter og dyr?</p>
        <p className={`pb-8`}>
          Ozongassen er brutt ned etter 1 time og er ikke lengre farlig for
          friske mennesker. Da kan man gå inn og starte utlufting, deretter er
          det trygt for alle etter 3 timer (gravide, lungesykdom, nedsatt
          immunforsvar etc)
        </p>
      </div>
    </TextBox>
  );
}
