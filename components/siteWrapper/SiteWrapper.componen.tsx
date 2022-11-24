import React from "react";

export default function SiteWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={`${className} mx-auto w-[80vw] md:w-[60vw] flex flex-col pt-[120px]`}
    >
      {children}
    </div>
  );
}
