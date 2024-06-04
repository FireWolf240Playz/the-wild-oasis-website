"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import useWindowWidth from "@/useWindowWidth";

function Logo() {
  const widht = useWindowWidth();

  return (
    <Link href="/" className="flex items-center gap-4 z-10 max-600:gap-1">
      <Image
        src={logo}
        quality={100}
        alt="The Wild Oasis logo"
        className="w-[60px] h-[60px] max-600:w-6 max-600:h-6"
      />

      {widht > 400 ? (
        <span className="text-xl font-semibold text-primary-100 max-600:text-sm whitespace-nowrap max-400:text-[8px] max-400:font-thin">
          The Wild Oasis
        </span>
      ) : (
        ""
      )}
    </Link>
  );
}

export default Logo;
