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
        <a className="py-4 px-10 rounded bg-primary font-bold text-white ">{text}</a>
      </Link>
    </>
  );
}
