import React from "react";

export default function CompanyHero() {
  const paragraphStyling = "font-text text-lg";
  return (
    <div className={`relative`}>
      <div className="company-hero h-screen">
        <div className="flex flex-col gap-[30px] mx-auto px-[10vw] lg:px-[80px] text-white absolute bottom-[80px]">
          <div className="font-bold text-5xl lg:text-7xl">
          Bedrift
          </div>
          <div className="font-semibold text-xl lg:text-2xl">
          - Vi løser deres problemer med lukt
          </div>
        </div>
      </div>
    </div>
  );
}
