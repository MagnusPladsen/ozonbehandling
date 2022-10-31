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
      <div className="w-full fixed bg-primary h-[70px] font-header px-[20px] pt-4 drop-shadow-sm lg:flex justify-between z-20">
        <div
          className="flex justify-between lg:justify-start lg:gap-4 lg:pl-8"
        >
          <div className="">
            <Image
              src="/favicon.svg"
              alt="OzonMaskinen"
              width={35}
              height={35}
            />
          </div>
          <Link href="/">
            <h1
              className="text-white text-3xl hover:cursor-pointer "
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
        <div className="hidden z-10 lg:flex justify-between pr-7">
          <div className="mx-auto text-center text-white font-header text-lg font-bold flex flex-row gap-14 pt-2">
            <Link href="/">
              <motion.p
                whileHover={{
                  scale: 1.1,
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                className={`opacity-100 hover:cursor-pointer  ${
                  router.pathname === "/" ? active : "opacity-50"
                }`}
              >
                Hjem
              </motion.p>
            </Link>
            <Link href="/bedrift">
              <motion.p
                whileHover={{
                  scale: 1.1,
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                className={` opacity-100 hover:cursor-pointer ${
                  router.pathname === "/bedrift" ? active : "opacity-50"
                }`}
              >
                Bedrift
              </motion.p>
            </Link>
            <Link href="/kontakt">
              <motion.p
                whileHover={{
                  scale: 1.1,
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                className={` opacity-100 hover:cursor-pointer ${
                  router.pathname === "/kontakt" ? active : "opacity-50"
                }`}
              >
                Kontakt
              </motion.p>
            </Link>
            <Link href="/om-oss">
              <motion.p
                whileHover={{
                  scale: 1.1,
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                className={`opacity-100 hover:cursor-pointer ${
                  router.pathname === "/om-oss" ? active : "opacity-50"
                }`}
              >
                Om oss
              </motion.p>
            </Link>
          </div>
        </div>
      </div>

      {/* DROPDOWN */}
      {isOpen && (
        <div className="lg:hidden fixed w-screen bg-primary h-full font-header z-10 px-[20px] pt-32">
          <div className="flex justify-between pb-10">
            <div className="mx-auto text-center text-white font-header text-xl font-bold">
              <Link href="/">
                <p
                  className={`py-10 ${
                    router.pathname === "/" ? active : "opacity-50"
                  }`}
                >
                  Hjem
                </p>
              </Link>
              <Link href="/bedrift">
                <div
                  className={`py-10  ${
                    router.pathname === "/bedrift" ? active : "opacity-50"
                  }`}
                >
                  Bedrift
                </div>
              </Link>
              <Link href="/kontakt">
                <p
                  className={`py-10 ${
                    router.pathname === "/kontakt" ? active : "opacity-50"
                  }`}
                >
                  Kontakt
                </p>
              </Link>
              <Link href="/om-oss">
                <p
                  className={`py-10 ${
                    router.pathname === "/om-oss" ? active : "opacity-50"
                  }`}
                >
                  Om oss
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
