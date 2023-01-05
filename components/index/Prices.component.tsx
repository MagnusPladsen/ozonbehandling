import React from "react";
import DefaultButton from "../buttons/DefaultButton.component";
import BulletInfo from "./BulletInfo.component";
import { AnimatePresence, motion } from "framer-motion";

export default function Prices({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Function;
}) {
  const questionStyling = "font-bold text-lg underline";
  return (
    <div
      className={`py-[60px] ${open ? "" : " bg-primary text-white"} `}
      onClick={() => setOpen("prices")}
    >
      <h2
        className={`font-header font-extrabold text-2xl text-center lg:text-4xl ${
          open ? "text-primary" : "text-white"
        }`}
      >
        Priser
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
          <p className={`${questionStyling}`}>Våre tilbud:</p>
          <p className={``}></p>
        </motion.div>
      ): null}
      </AnimatePresence>
    </div>
  );
}
