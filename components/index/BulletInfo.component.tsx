import React from "react";
import Image from "next/image";
import CheckMarkIcon from "/public/images/icons/checkMark.png";

export default function BulletInfo() {
  return (
    <div className="py-16">
      <div className="flex flex-col gap-8 content-center">
        <div className="flex gap-5 align-center">
          <div className="">
            <Image
              src={CheckMarkIcon}
              alt="Checkmark icon"
              width={30}
              height={30}
            />
          </div>
          <p className="">Vi tar oss av tilkoblingen, sikkert og trygt</p>
        </div>

        <div className="flex gap-5 align-center">
          <div className="">
            <Image
              src={CheckMarkIcon}
              alt="Checkmark icon"
              width={30}
              height={30}
            />
          </div>

          <p className="">
            Vi sørger for at ozonen blir utluftet i henhold til
            miljødirektoratets retningslinjer.
          </p>
        </div>
      </div>
    </div>
  );
}
