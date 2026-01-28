"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import whiteLogo from "../../assets/logo.png";
import logoBlack from "../../assets/logoBlack.png";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 w-full"
      animate={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 0.9)"
          : "rgba(0, 0, 0, 0.0)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold"
          animate={{
            color: isScrolled ? "#000000" : "#ffffff",
          }}
          transition={{ duration: 0.3 }}
        >
          {isScrolled ? (
            <Image
              src={logoBlack}
              alt="AF Homes"
              width={112}
              height={40}
              className="h-10 w-auto"
            />
          ) : (
            <Image
              src={whiteLogo}
              alt="AF Homes"
              width={112}
              height={40}
              className="h-10 w-auto"
            />
          )}
        </motion.div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-10 items-center">
          {["Home", "Buy", "Rent", "Sell", "Insights", "Why Us", "Contact"].map(
            (item) => (
              <li key={item}>
                <motion.a
                  href="#"
                  className="font-medium transition-colors tracking-wide"
                  animate={{
                    color: isScrolled ? "#374151" : "#ffffff",
                  }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.a>
              </li>
            ),
          )}
        </ul>

        {/* CTA Button */}
        <motion.button
          className="px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2"
          animate={{
            backgroundColor: isScrolled ? "#25D366" : "#25D366",
            color: "#ffffff",
            borderColor: isScrolled ? "#000000" : "#ffffff",
          }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <FaWhatsapp />
          Get Started
        </motion.button>
      </div>

      {/* Shadow effect when scrolled */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.nav>
  );
};

export default Navbar;
