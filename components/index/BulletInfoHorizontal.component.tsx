import React from "react";
import Image from "next/image";
import CheckMarkIcon from "/public/images/icons/checkMark.png";

export default function BulletInfoHorizontal() {
  return (
    <>
      <div className="py-10 bg-primary text-white">
        <div className="flex flex-col gap-20 lg:gap-0 lg:flex-row justify-evenly ">
          <div className="flex flex-col gap-5">
            <div className="flex justify-center ">
              <Image
                src="/images/icons/garanti.svg"
                alt="Checkmark icon"
                width={50}
                height={50}
              />
            </div>
            <p className="mx-auto">Fornøydhetsgaranti</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex justify-center ">
              <Image
                src="/images/icons/raskt.svg"
                alt="Checkmark icon"
                width={50}
                height={50}
              />
            </div>
            <p className="mx-auto">Raskt, trygt og effektivt</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex justify-center ">
              <Image
                src="/images/icons/miljø.svg"
                alt="Checkmark icon"
                width={50}
                height={50}
              />
            </div>
            <p className="mx-auto">Miljøvennlig og kjemikalie fritt</p>
          </div>
        </div>
      </div>
      {/* <div className="bg-primary w-full mx-auto h-[2px]"></div> */}
    </>
  );
}
