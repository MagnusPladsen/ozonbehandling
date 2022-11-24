import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const active = "underline underline-offset-8 opacity-100";
  return (
    <>
      <div className="w-full absolute pt-[60px] font-header px-[80px] lg:flex justify-between z-20">
        <div
          className="flex justify-between lg:justify-start items-center lg:gap-10"
        >
          <Link href="/">
            <Image
              src="/favicon.svg"
              alt="OzonMaskinen"
              width={75}
              height={75}
            />
          </Link>
          <Link href="/">
            <h1
              className="text-white text-4xl hover:cursor-pointer "
            >
              OzonMaskinen
            </h1>
          </Link>
          <div
            className="lg:hidden"
            onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
          >
            <Image
              src="/images/icons/hamburger.svg"
              alt="Hamburger icon"
              width={40}
              height={40}
            />
          </div>
        </div>

        {/* DESKTOP NAV MENU */}
        <div className="hidden z-10 lg:flex justify-between pt-[25px]">
          <div className="mx-auto text-center text-white font-header text-lg font-bold flex flex-row gap-[80px]">
            <Link href="/">
              <motion.p
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                className={`hover:cursor-pointer  ${
                  router.pathname === "/" ? active : ""
                }`}
              >
                Hjem
              </motion.p>
            </Link>
            <Link href="/bedrift">
              <motion.p
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                className={`hover:cursor-pointer ${
                  router.pathname === "/bedrift" ? active : ""
                }`}
              >
                Bedrift
              </motion.p>
            </Link>
            <Link href="/kontakt">
              <motion.p
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                className={`hover:cursor-pointer ${
                  router.pathname === "/kontakt" ? active : ""
                }`}
              >
                Kontakt
              </motion.p>
            </Link>
            <Link href="/om-oss">
              <motion.p
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                className={`hover:cursor-pointer ${
                  router.pathname === "/om-oss" ? active : ""
                }`}
              >
                Om oss
              </motion.p>
            </Link>
          </div>
        </div>
      </div>

      {/* DROPDOWN */}
    </>
  );
}
