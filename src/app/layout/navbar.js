"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import whiteLogo from "../../assets/logo.png";
import logoBlack from "../../assets/logoBlack.png";
import { FaWhatsapp, FaBars } from "react-icons/fa";
import { Drawer } from "antd";
import { MdHome, MdOutlineSell } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { TbHeartHandshake } from "react-icons/tb";
import { CgInsights } from "react-icons/cg";
import { LuUserSearch } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";

const underlineVariants = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1 },
};

const SCROLL_THRESHOLD = 50; // change this to control when navbar switches

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // pathname kept for potential active-link logic or future needs
  const pathname = usePathname() ?? "";

  // Transparent when at top of the page (applies to all routes)
  const isTransparent = !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    // Set initial scroll state (in case page loads scrolled)
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", icon: <MdHome size={20} /> },
    { name: "Buy", href: "/buy", icon: <TbHeartHandshake size={20} /> },
    { name: "Rent", href: "/rent", icon: <MdOutlineSell size={20} /> },
    { name: "Sell", href: "/sell", icon: <BiDollarCircle size={20} /> },
    { name: "Insights", href: "/insights", icon: <CgInsights size={20} /> },
    { name: "Why Us", href: "/why-us", icon: <LuUserSearch size={20} /> },
    { name: "Contact", href: "/contact", icon: <IoCallOutline size={20} /> },
  ];

  // animated background color
  const navBg = isTransparent ? "rgba(0, 0, 0, 0)" : "#00263a";
  // keep text white for both transparent (over hero image) and dark-blue states
  const textColor = "#ffffff";
  // choose white logo by default (works over hero & dark-blue). If you later switch
  // to a light bg, swap to logoBlack accordingly.
  const logoToUse = whiteLogo;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-9999 w-full"
      animate={{ backgroundColor: navBg }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold flex items-center"
          animate={{ color: textColor }}
          transition={{ duration: 0.25 }}
        >
          <Link href="/">
            <div className="inline-block">
              <Image
                src={logoToUse}
                alt="A&F Homes"
                width={112}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              className="relative"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <Link href={item.href}>
                <div className="inline-block relative pb-1">
                  <motion.span
                    className="font-light tracking-wide cursor-pointer"
                    animate={{ color: textColor }}
                    transition={{ duration: 0.25 }}
                  >
                    {item.name}
                  </motion.span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Right actions: CTA (desktop) + Mobile menu button */}
        <div className="flex items-center gap-3">
          {/* CTA (visible on md+) */}
          <div className="hidden md:flex items-center gap-2">
            <motion.a
              href="https://wa.me/your-number"
              className="px-4 py-2 rounded-md font-medium transition-all flex items-center gap-2 text-sm whitespace-nowrap"
              animate={{
                backgroundColor: "#ffffff",
                color: "#075E54",
              }}
              transition={{ duration: 0.25 }}
              whileHover={{ scale: 1.03 }}
            >
              <FaWhatsapp />
              <span>Get in Touch</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Open menu"
            style={{ color: textColor }}
          >
            <FaBars size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <Drawer
        title={
          <div className="flex items-center">
            <Image src={logoBlack} alt="A&F Homes" className="h-10 w-auto" />
          </div>
        }
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        size={280}
        // antd v4 used `styles` differently; if you encounter issues remove `styles` or adapt.
        styles={{
          header: {
            borderBottom: "1px solid #e5e7eb",
          },
        }}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <p
                className="text-black font-normal py-2 border-b border-gray-100 flex items-center gap-3"
                onClick={() => setDrawerOpen(false)}
                style={{ color: "#000" }}
              >
                {item.icon}
                <span>{item.name}</span>
              </p>
            </Link>
          ))}
          <motion.button
            className="mt-4 px-6 py-2 rounded-md font-medium transition-all flex items-center justify-center gap-2 w-full bg-green-500 text-white hover:bg-green-600 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setDrawerOpen(false)}
          >
            <FaWhatsapp />
            Get Started
          </motion.button>
        </div>
      </Drawer>

      {/* hairline removed to eliminate thin cyan line */}
    </motion.nav>
  );
};

export default Navbar;