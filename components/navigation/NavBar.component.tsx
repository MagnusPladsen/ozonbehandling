import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function NavBar({
  dropdownOpen,
  setdropdownOpen,
}: {
  dropdownOpen: boolean;
  setdropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const active = "underline underline-offset-8 opacity-100";
  return (
    <>
      <div className="w-full fixed lg:absolute pt-[10vw] lg:pt-[60px] font-header px-[10vw] lg:px-[80px] lg:flex justify-between z-20">
        <div className="flex justify-between lg:justify-start items-center lg:gap-10">
          <Link href="/">
            <div className="">
              <div className="hidden">
              <Image
                src="/favicon.svg"
                alt="OzonMaskinen"
                width={75}
                height={75}
                className=" "
              />
              </div>
              <Image
                src="/favicon.svg"
                alt="OzonMaskinen"
                width={35}
                height={35}
                className="block lg:hidden"
              />
            </div>
          </Link>
          <Link href="/">
            <h1 className="text-white text-xl lg:text-4xl hover:cursor-pointer ">
              OzonMaskinen
            </h1>
          </Link>
          <div
            className="lg:hidden"
            onClick={() =>
              dropdownOpen ? setdropdownOpen(false) : setdropdownOpen(true)
            }
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
      {dropdownOpen && (
        <div className="lg:hidden bg-primary fixed w-screen h-full font-header z-10 px-[20px] pt-32">
          <div className="flex justify-between pb-10">
            <div className="mx-auto text-center text-white font-header text-xl font-bold">
              <Link href="/">
                <p className={`py-10 ${router.pathname === "/" ? active : ""}`}>
                  Hjem
                </p>
              </Link>
              <Link href="/bedrift">
                <div
                  className={`py-10  ${
                    router.pathname === "/bedrift" ? active : ""
                  }`}
                >
                  Bedrift
                </div>
              </Link>
              <Link href="/kontakt">
                <p
                  className={`py-10 ${
                    router.pathname === "/kontakt" ? active : ""
                  }`}
                >
                  Kontakt
                </p>
              </Link>
              <Link href="/om-oss">
                <p
                  className={`py-10 ${
                    router.pathname === "/om-oss" ? active : ""
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
