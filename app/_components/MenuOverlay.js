import Link from "next/link";
import NavButton from "./NavButton";
import { motion } from "framer-motion";

const variants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

function MenuOverlay({ links, className, toggleNavBar }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-primary-900 bg-opacity-75 backdrop-blur-sm z-10"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <ul className="flex flex-col py-4 items-center text-2xl gap-5">
        {links.map((link, index) => (
          <li key={index} className="mb-4">
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
