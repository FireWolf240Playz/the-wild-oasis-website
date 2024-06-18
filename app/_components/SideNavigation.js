"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavButton from "./NavButton";
import useWindowWidth from "@/useWindowWidth";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation({ showNav, handleClose }) {
  const pathname = usePathname();
  const width = useWindowWidth();
  return (
    <>
      {width < 800 ? (
        <NavButton
          onClick={handleClose}
          navBarOpen={showNav}
          className="absolute top-4 right-4 z-50"
        />
      ) : null}
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
              pathname === link.href ? "bg-primary-900" : ""
            }`}
            onClick={handleClose}
          >
            {link.icon}
            <span>{link.name}</span>
          </Link>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </>
  );
}

export default SideNavigation;
