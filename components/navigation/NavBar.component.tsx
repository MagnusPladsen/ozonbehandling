import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const active = "underline underline-offset-8";
  return (
    <>
      <div className="w-full bg-primary h-[70px] font-header px-[20px] pt-4 drop-shadow-sm">
        <div className="flex justify-between opacity-100">
          <div className="">
            <Image
              src="/favicon.svg"
              alt="OzonMaskinen"
              width={35}
              height={35}
            />
          </div>
          <h1 className="text-white text-3xl">OzonMaskinen</h1>
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
      </div>
      {isOpen && (
        <div className="w-screen absolute bg-primary h-full font-header px-[20px] pt-10">
          <div className="flex justify-between pb-10">
            <div className="mx-auto text-center text-white font-header text-xl font-bold">
              <Link href="/">
                <p className={`py-10 ${router.pathname === "/" ? active : "opacity-70"}`}>Hjem</p>
              </Link>
              <Link href="/bedrift">
                <p className={`py-10 opacity-70 ${router.pathname === "/bedrift" ? active : "opacity-70"}`}>Bedrift</p>
              </Link>
              <Link href="/kontakt">
                <p className={`py-10 opacity-70 ${router.pathname === "/kontakt" ? active : "opacity-70"}`}>Kontakt</p>
              </Link>
              <Link href="/om-oss">
                <p className={`py-10 opacity-70 ${router.pathname === "/om-oss" ? active : "opacity-70"}`}>Om oss</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
