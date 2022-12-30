import React from "react";
import DefaultButton from "../buttons/DefaultButton.component";
import BulletInfo from "./BulletInfo.component";

export default function Prices() {
  const questionStyling = "font-bold text-lg underline";
  return (
    <div className="pb-[160px]">
      <h2 className="font-header font-extrabold text-2xl text-center lg:text-4xl pb-16">
        Priser
      </h2>
      <div className="text-left flex flex-col gap-5 font-text ">
        <p className={`${questionStyling}`}>
          Våre tilbud:
        </p>
        <p className={``}>
          Våre tilbud:
        </p>

      </div>
    </div>
  );
}
