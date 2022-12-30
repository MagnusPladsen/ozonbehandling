import React from "react";

export default function SiteWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={` mx-auto w-[80vw] md:w-[60vw] flex flex-col pt-[160px]`}
    >
      {children}
    </div>
  );
}
