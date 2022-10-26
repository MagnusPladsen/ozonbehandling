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
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
          className=""
        >
          <a className="hover:cursor-pointer py-4 px-10 rounded bg-primary font-bold text-white ">
            {text}
          </a>
        </motion.div>
      </Link>
    </>
  );
}
