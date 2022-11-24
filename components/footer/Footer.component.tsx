import React from "react";

export default function Footer() {
  return (
    <div className="bg-primary py-20 text-white font-header flex lg:flex-row flex-col gap-6 lg:gap-0 justify-around">
      <div className="pb-5 mx-auto">
        <p className="text-xl pb-4">JS Solutions</p>
        <div className="flex gap-4">
          <p className="w-24">Tlf:</p>
          <p className="">973 06 141</p>
        </div>
        <div className="flex gap-4">
          <p className="w-24">Addresse:</p>

          <p>Nymosvingen 2</p>
        </div>
        <div className="flex gap-4">
          <p className="w-24">Postnr:</p>

          <p>2609 Lillehammer</p>
        </div>
      </div>
      <div className="mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1927.2002186658897!2d10.460828616650957!3d61.116544482319576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466a8805be7d6379%3A0x42c3eff6a4ec1c59!2sNymosvingen%202%2C%202609%20Lillehammer!5e0!3m2!1sno!2sno!4v1666896435554!5m2!1sno!2sno"
          width="300"
          height="200"
        />
      </div>
    </div>
  );
}
