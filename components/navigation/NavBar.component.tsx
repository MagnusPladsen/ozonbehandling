import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

export default function NavBar({
  dropdownOpen,
  setdropdownOpen,
}: {
  dropdownOpen: boolean;
  setdropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const active = "underline underline-offset-8 opacity-100";

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      setShow(true);
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
        setdropdownOpen(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <AnimatePresence initial={false}>
        {show ? (
          <motion.div
            //animate upwards on exit

            animate={{ y: 0 }}
            initial={{ y: -100 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.2 }}
            className="w-full bg-primary fixed py-[30px] font-header px-[10vw] lg:px-[40px] xl:px-[80px] z-20 shadow-md"
          >
            <div className=" lg:flex lg:align-middle justify-between">
              <div className="flex justify-between lg:justify-start items-center lg:gap-5 z-30">
                <Link href="/">
                  <div className="">
                    <Image
                      src="/favicon.svg"
                      alt="Ozonbehandling"
                      width={35}
                      height={35}
                      className=""
                    />
                  </div>
                </Link>
                <Link href="/">
                  <motion.h1
                    whileHover={{ opacity: 0.5 }}
                    transition={{ duration: 0.1 }}
                    className="text-white text-xl lg:text-2xl hover:cursor-pointer "
                  >
                    Ozonbehandling
                  </motion.h1>
                </Link>
                <div
                  className="lg:hidden"
                  onClick={() =>
                    dropdownOpen
                      ? setdropdownOpen(false)
                      : setdropdownOpen(true)
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
              <div className="hidden z-10 lg:flex align-middle">
                <div className="mx-auto text-white font-header text-lg font-bold flex flex-row gap-[80px]">
                  <Link href="/">
                    <motion.p
                      whileHover={{
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.1 }}
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
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.1 }}
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
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.1 }}
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
                        scale: 1.2,
                      }}
                      transition={{ duration: 0.1 }}
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
            <AnimatePresence initial={false}>
              {dropdownOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto", overflow: "hidden" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="lg:hidden bg-primary w-full h-full font-header z-10 mt-10 mx-auto"
                >
                  <div className="flex justify-between">
                    <div className="mx-auto text-center text-white font-header text-xl font-bold">
                      <Link href="/">
                        <p
                          className={`py-10 ${
                            router.pathname === "/" ? active : ""
                          }`}
                        >
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
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
