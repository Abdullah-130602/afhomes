"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const LayoutHero = ({ title, description, subTitle, heroBg }) => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, -80]);

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-[70vh] min-h-[500px] overflow-hidden flex items-center justify-center"
      >
        {/* Parallax Background */}
        <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
          <img
            src={heroBg?.src || heroBg}
            alt="A&F Real Estate Office"
            className="w-full h-[120%] object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70 pointer-events-none" />
        </motion.div>
        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-2 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <motion.span
            className="inline-block text-white mb-2 text-sm font-medium tracking-widest uppercase text-accent"
            variants={itemVariants}
          >
            {subTitle}
          </motion.span>

          <motion.h1
            className="font-serif text-4xl text-white sm:text-3xl md:text-6xl font-bold text-primary-foreground leading-tight"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          <div className="flex justify-center mt-4">
            <motion.span
              className="block h-1 w-32 md:w-40 bg-accent rounded-full origin-left"
              //   variants={underlineVariants}
            />
          </div>

          <motion.p
            className="mt-0 text-slate-300 text-base sm:text-lg md:text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default LayoutHero;
