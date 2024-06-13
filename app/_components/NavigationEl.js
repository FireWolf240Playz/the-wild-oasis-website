"use client";
import { useState } from "react";

import Link from "next/link";

import { AnimatePresence } from "framer-motion";

import MenuOverlay from "./MenuOverlay";

import NavButton from "./NavButton";

const links = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Cabins",
    href: "/cabins",
  },
  {
    title: "Login",
    href: "/login",
  },
];

function NavigationEl() {
  const [navBarOpen, setNavbarOpen] = useState(false);
  const toggleNavBar = () => setNavbarOpen((navBar) => !navBar);

  return (
    <>
      <ul className="flex max-600:hidden gap-5">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <div className="max-600:flex hidden items-center px-3 py-2 font-bold">
        <NavButton navBarOpen={navBarOpen} onClick={toggleNavBar} />
      </div>

      <AnimatePresence>
        {navBarOpen && (
          <MenuOverlay
            links={links}
            navBarOpen={navBarOpen}
            toggleNavBar={toggleNavBar}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default NavigationEl;
