import Link from "next/link";
import { motion } from "framer-motion";
import NavButton from "./NavButton";

function MenuOverlay({ links, className, navBarOpen, toggleNavBar }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-primary-900 bg-opacity-75 backdrop-blur-sm z-10"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="absolute top-4 right-4">
        <NavButton navBarOpen={navBarOpen} onClick={toggleNavBar} />
      </div>
      <ul className="flex flex-col py-4 items-center text-2xl gap-5">
        {links.map((link) => (
          <li key={link.title} className="mb-4">
            <Link href={link.href} className={className} onClick={toggleNavBar}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default MenuOverlay;
