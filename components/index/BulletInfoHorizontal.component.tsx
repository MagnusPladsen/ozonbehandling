import React from "react";
import Image from "next/image";
import CheckMarkIcon from "/public/images/icons/checkMark.png";

export default function BulletInfoHorizontal() {
  return (
    <>
      <div className="py-20">
        <div className="flex flex-row justify-evenly ">
          <div className="flex flex-col gap-10">
            <div className="flex justify-center ">
              <Image
                src="/images/icons/garanti.svg"
                alt="Checkmark icon"
                width={100}
                height={100}
              />
            </div>
            <p className="">Fornøydhetsgaranti</p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex justify-center ">
              <Image
                src="/images/icons/raskt.svg"
                alt="Checkmark icon"
                width={100}
                height={100}
              />
            </div>
            <p className="">Raskt, trygt og effektivt</p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex justify-center ">
              <Image
                src="/images/icons/miljø.svg"
                alt="Checkmark icon"
                width={100}
                height={100}
              />
            </div>
            <p className="">Miljøvennlig og kjemikalie fritt</p>
          </div>
        </div>
      </div>
      {/* <div className="bg-primary w-full mx-auto h-[2px]"></div> */}
    </>
  );
}
