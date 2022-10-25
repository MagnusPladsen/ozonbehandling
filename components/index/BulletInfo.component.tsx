import React from "react";
import Image from "next/image";
import CheckMarkIcon from "../public/images/icons/checkMark.svg";
/* import heroImage from "../public/images/hero.png"; */

export default function BulletInfo() {
  return (
    <div className="pt-10 pb-10 w-[80vw] mx-auto py-20">
      <div className="">
        {/* <Image 
        src={CheckMarkIcon} /> */}
        <p className="">Vi tar oss av tilkoblingen, sikkert og trygt</p>
      </div>

      <li>
        Vi sørger for at ozonen blir utluftet i henhold til miljødirektoratets
        retningslinjer.
      </li>
    </div>
  );
}
