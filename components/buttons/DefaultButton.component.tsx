import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function DefaultButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <>
      <Link href="/kontakt">
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
            color: "#06283D",
            backgroundColor: "#fff",
            border: "1px solid #06283D",
          }}
          className="hover:cursor-pointer py-4 px-10 rounded bg-primary font-bold text-white "
        >
          {text}
        </motion.button>
      </Link>
    </>
  );
}
