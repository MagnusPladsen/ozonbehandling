import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OpenArrow({
  open,
  className,
}: {
  open: boolean;
  className: string;
}) {
  return (
    <motion.div>
      {!open ? (
        <Image
          alt="Arrow indicating that the text-area is open"
          src={"/images/icons/arrowWhite.svg"}
          width="15"
          height="15"
          className={className}
        />
      ) : (
        <Image
          alt="Arrow indicating that the text-area is closed"
          src={"/images/icons/arrowBlue.svg"}
          width="15"
          height="15"
          className={className}
        />
      )}
    </motion.div>
  );
}
