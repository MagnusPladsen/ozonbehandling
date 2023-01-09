import React from "react";
import Image from "next/image";
import CheckMarkIcon from "/public/images/icons/checkMark.png";

const text = [
  "Vi tar oss av tilkoblingen, sikkert og trygt",
  "Vi sørger for at ozonen blir utluftet i henhold til miljødirektoratets retningslinjer",
  "Fornøydhetsgaranti! Vi kommer tilbake og gjør jobben om du er ikke er fornøyd",
];

export default function BulletInfo() {
  return (
    <div className="py-8">
      <div className="flex flex-col gap-8 content-center ">
        {text.map((text) => (
          <div key={text} className="flex gap-5 align-center w-full  ">
            <div className="flex items-center w-[10vw] lg:w-[5vw]">
              <Image
                src={CheckMarkIcon}
                alt="Checkmark icon"
                width={25}
                height={25}
              />
            </div>
            <p className="w-[80vw]">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
