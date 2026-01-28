"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import whiteLogo from "../../assets/logo.png";
import logoBlack from "../../assets/logoBlack.png";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { Drawer } from "antd"; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
          <Link href="/">
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
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-10 items-center">
          {[
            { name: "Home", href: "/" },
            { name: "Buy", href: "/buy" },
            { name: "Rent", href: "/rent" },
            { name: "Sell", href: "/sell" },
            { name: "Insights", href: "/insights" },
            { name: "Why Us", href: "/why-us" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <motion.span
                  className="font-medium transition-colors tracking-wide cursor-pointer"
                  animate={{
                    color: isScrolled ? "#374151" : "#ffffff",
                  }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                </motion.span>
              </Link>
              </li>
            ),
          )}
        </ul>
        <div className="flex items-center gap-2">
          {/* CTA Button */}
          <motion.button
            className="px-4 sm:px-6 py-2 rounded md:rounded-full font-medium transition-all flex items-center gap-1 sm:gap-2 text-xs sm:text-base whitespace-nowrap"
            animate={{
              backgroundColor: isScrolled ? "#25D366" : "#25D366",
              color: "#ffffff",
              borderColor: isScrolled ? "#000000" : "#ffffff",
            }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <FaWhatsapp />
            <span className="sm:inline">Get in Touch</span>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
            style={{ color: isScrolled ? "#000000" : "#ffffff" }}
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        size={280}
        styles={{
          header: {
            borderBottom: "1px solid #e5e7eb",
          },
        }}
      >
        <div className="flex flex-col gap-4">
          {[
            { name: "Home", href: "/" },
            { name: "Buy", href: "/buy" },
            { name: "Rent", href: "/rent" },
            { name: "Sell", href: "/sell" },
            { name: "Insights", href: "/insights" },
            { name: "Why Us", href: "/why-us" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-800 font-medium hover:text-green-500 transition-colors py-2 border-b border-gray-100"
              onClick={() => setDrawerOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <motion.button
            className="mt-4 px-6 py-2 rounded-full font-medium transition-all flex items-center justify-center gap-2 w-full bg-green-500 text-white hover:bg-green-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDrawerOpen(false)}
          >
            <FaWhatsapp />
            Get Started
          </motion.button>
        </div>
      </Drawer>

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
