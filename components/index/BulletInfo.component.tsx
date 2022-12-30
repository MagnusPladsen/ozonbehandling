import React from "react";
import Image from "next/image";
import CheckMarkIcon from "/public/images/icons/checkMark.png";

export default function BulletInfo() {
  return (
    <div className="py-8">
      <div className="flex flex-col gap-8 content-center ">
        <div className="flex gap-5 align-center w-full  ">
          <div className="flex items-center w-[10vw] lg:w-[5vw] xl:w-[2vw]">
            <Image
              src={CheckMarkIcon}
              alt="Checkmark icon"
              width={20}
              height={20}
            />
          </div>
          <p className="w-[80vw]">
            Vi tar oss av tilkoblingen, sikkert og trygt
          </p>
        </div>

        <div className="flex gap-5 align-center w-full ">
          <div className="flex items-center w-[10vw] lg:w-[5vw] xl:w-[2vw]">
            <Image
              src={CheckMarkIcon}
              alt="Checkmark icon"
              width={20}
              height={20}
            />
          </div>
          <p className="w-[80vw]">
            Vi sørger for at ozonen blir utluftet i henhold til
            miljødirektoratets retningslinjer
          </p>
        </div>

        <div className="flex gap-5 align-center w-full ">
          <div className="flex items-center w-[10vw] lg:w-[5vw] xl:w-[2vw]">
            <Image
              src={CheckMarkIcon}
              alt="Checkmark icon"
              width={20}
              height={20}
            />
          </div>
          <p className="w-[80vw]">
            <span className="font-bold">Fornøydhetsgaranti!</span> Vi kommer tilbake og gjør jobben om du er ikke er fornøyd
          </p>
        </div>
      </div>
    </div>
  );
}
