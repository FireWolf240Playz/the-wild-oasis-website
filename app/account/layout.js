"use client";

import useWindowWidth from "@/useWindowWidth";
import SideNavigation from "../_components/SideNavigation";
import NavButton from "../_components/NavButton";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout({ children }) {
  const width = useWindowWidth();
  const [showNav, setShowNav] = useState(false);

  const handleShow = () => {
    setShowNav((prevShowNav) => !prevShowNav);
  };

  return (
    <div className="relative grid grid-cols-[16rem_1fr] h-full gap-12 max-800:grid-cols-1">
      <NavButton
        givenClassName="absolute top-0 right-4 "
        onClick={handleShow}
      />
      <div
        className={`transition-all duration-500 ${
          width <= 800 ? "hidden" : "block"
        }`}
      >
        <SideNavigation />
      </div>
      <div className="py-1 flex-1">{children}</div>

      {/* NavButton for smaller screens */}
      {width <= 800 && (
        <>
          <AnimatePresence>
            {showNav && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", duration: 0.5 }}
                className="fixed inset-0 z-40 bg-primary-900 bg-opacity-75 backdrop-blur-sm"
              >
                <SideNavigation showNav={showNav} handleClose={handleShow} />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
