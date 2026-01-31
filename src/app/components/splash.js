"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import blackLogo from "../../assets/logoBlack.png";

const Splash = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if this is the first load
    const hasVisited = localStorage.getItem("hasVisitedBefore");

    if (hasVisited) {
      // Show splash for 3 seconds on reload
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      // First load - show splash for 3 seconds
      localStorage.setItem("hasVisitedBefore", "true");
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6 px-6">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut", type: "spring", stiffness: 100 }}
            >
              <Image
                src={blackLogo}
                alt="AF Homes"
                width={160}
                height={60}
                priority
                className="h-20 w-auto"
              />
            </motion.div>

            {/* Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="text-center text-sm md:text-lg font-semibold text-slate-700"
            >
              Your Trusted Partner In Real Estate Excellence
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Splash;
