import React from "react";
import Image from "next/image";
import CheckMarkIcon from "/public/images/icons/checkMark.png";

export default function BulletInfo() {
  return (
    <div className=" pb-10 w-[80vw] 2xl:w-[40vw] mx-auto pt-10">
      {/* <h2 className="font-header font-extrabold text-2xl text-center pb-5">
        Informasjon
      </h2> */}
      <div className="flex flex-col gap-8 content-center">
        <div className="">
          <div className="inline pr-2">
            <Image
              src={CheckMarkIcon}
              alt="Checkmark icon"
              width={30}
              height={30}
            />
          </div>
          <p className="inline">
            Vi tar oss av tilkoblingen, sikkert og trygt
          </p>
        </div>

        <div className="">
          <div className="inline pr-2">
            <Image
              src={CheckMarkIcon}
              alt="Checkmark icon"
              width={30}
              height={30}
            />
          </div>

          <p className="inline">
            Vi sørger for at ozonen blir utluftet i henhold til
            miljødirektoratets retningslinjer.
          </p>
        </div>
      </div>
    </div>
  );
}
