import React from "react";
import Image from "next/image";

export default function OpenArrow({ open }: { open: boolean }) {
  return (
    <div>
      {open ? (
        <Image
          alt="Arrow indicating that the text-area is open"
          src={"/images/icons/arrowLeft.svg"}
          width="15"
          height="15"
        />
      ) : (
        <Image
          alt="Arrow indicating that the text-area is open"
          src={"/images/icons/arrowDown.svg"}
          width="15"
          height="15"
        />
      )}
    </div>
  );
}
