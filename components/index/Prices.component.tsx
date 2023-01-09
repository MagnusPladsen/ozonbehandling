import React from "react";
import DefaultButton from "../buttons/DefaultButton.component";
import BulletInfo from "./BulletInfo.component";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import OpenArrow from "../icons/OpenArrow.component";

export default function Prices({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Function;
}) {
  const questionStyling = "font-bold text-lg underline mb-2";
  const text = ["0-50 KVM - 5000", "51-100 KVM - 6000", "101-150 - 8000", "151- 200 KVM - 10000", "201- 250 KVM - 12500", "Bobil/vogn/båt  - 3500", "Personbil/ suv - 3000"]
  return (
    <div
      className={`py-[60px] ${open ? "" : " bg-primary text-white"} `}
      onClick={() => setOpen("prices")}
    >
      <div className="flex justify-between items-center px-[10vw]">
        <h2
          className={`font-header font-extrabold text-2xl text-center lg:text-4xl ${
            open ? "text-primary" : "text-white"
          }`}
        >
          Priser
        </h2>
        <OpenArrow open={open} />
      </div>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ display: "none", height: 0 }}
            animate={{ display: "block", height: "auto", marginTop: 40 }}
            exit={{ display: "none", height: 0 }}
            transition={{ duration: 0.3 }}
            className={`text-left flex flex-col gap-5 font-text w-[80vw] mx-auto`}
          >
            <p className={`${questionStyling}`}>Våre tilbud:</p>
            {text.map((item, index) => (
              <p key={index} className="mb-2">
                - {item}
                </p>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
