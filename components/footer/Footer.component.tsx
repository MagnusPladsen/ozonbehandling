import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-primary py-20 text-white font-header flex lg:flex-row flex-col gap-8 lg:gap-[10vw] justify-center mx-auto">
      <div className="pb-5 w-[80vw] lg:w-[25vw] 3xl:w-[10vw] lg:flex lg:flex-col lg:gap-2 mx-auto xl:m-0">
        <div className="flex gap-7">
          <div className="">
            <Image
              src="/favicon.svg"
              alt="Ozonbehandling"
              width={35}
              height={35}
              className=""
            />
          </div>
          <p className="text-2xl">Kontaktinformasjon:</p>
          {/*  <p className="text-2xl">Ozonbehandling</p> */}
        </div>

        <div className="bg-white w-full mx-auto h-[2px] my-3"></div>
        <div className="flex justify-between pt-8 lg:pt-0">
          <p className="">Tlf:</p>
          <p className="">973 06 141</p>
        </div>
        <div className="flex justify-between">
          <p className="">Addresse:</p>

          <p>Nymosvingen 2</p>
        </div>
        <div className="flex justify-between">
          <p className="">Postnr:</p>

          <p>2609 Lillehammer</p>
        </div>
        <div className="flex justify-between">
          <p className="">Epost:</p>

          <a href="mailto:kontakt@ozonbehandling.no">
            <p className="hover:underline hover:cursor-pointer">
              kontakt@ozonbehandling.no
            </p>
          </a>
        </div>
      </div>
      <div className="relative w-[80vw] lg:w-[25vw] 3xl:w-[10vw] mx-auto xl:m-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1927.2002186658897!2d10.460828616650957!3d61.116544482319576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466a8805be7d6379%3A0x42c3eff6a4ec1c59!2sNymosvingen%202%2C%202609%20Lillehammer!5e0!3m2!1sno!2sno!4v1666896435554!5m2!1sno!2sno"
          /*          width="300"
          height="200" */
          className="self-center w-full h-[200px]"
        />
      </div>
    </div>
  );
}
