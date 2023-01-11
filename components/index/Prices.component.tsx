import React from "react";
import DefaultButton from "../buttons/DefaultButton.component";
import BulletInfo from "./BulletInfo.component";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import OpenArrow from "../icons/OpenArrow.component";
import TextBox from "../textBox/TextBox.component";

export default function Prices({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Function;
}) {
  const prices = [
    "0-50 kvm - 5 000 kr",
    "51-100 kvm - 6 000 kr",
    "101-150 kvm - 8 000 kr",
    "151-200 kvm - 10 000 kr",
    "201-250 kvm - 12 500 kr",
  ];
  return (
    <TextBox open={open} setOpen={setOpen} header="Priser" component="prices">
      <div className="flex flex-col gap-1">
        {prices.map((price, index) => (
          <p key={index} className="">
            {price}
          </p>
        ))}
      </div>
      <p className="mt-8 mb-1">Bobil/vogn/båt - 3500</p>
      <p className="">Personbil/ suv - 3000</p>
      <motion.p 
      whileHover={{ opacity: 0.5, x: 20 }}
      transition={{ duration: 0.2 }}
      className="text-lg mt-16 underline font-bold">Les mer</motion.p>
    </TextBox>
  );
}
