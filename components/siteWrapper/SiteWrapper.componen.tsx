import React from "react";

export default function SiteWrapper ({children} : {children: React.ReactNode}) {
  return (
    <div className="w-[80vw] 2xl:w-[40vw] mx-auto pt-[70px]">
        {children}
    </div>
  );
}


