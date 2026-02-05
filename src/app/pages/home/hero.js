"use client";

import React from "react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero.jpg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden pt-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage.src})`,
      }}
    >
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">
          {/* Main Heading */}
          <motion.h1
            className="text-3xl md:text-7xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Find Your Dream <span className="text-white">Property</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl"
            variants={itemVariants}
          >
            Discover premium real estate properties in your desired location.
            Your perfect home awaits.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.button
              className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg text-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px rgba(0, 0, 0, 0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Browse Properties
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg text-lg hover:bg-white hover:text-gray-900 transition-colors"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Contact Agent
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
            variants={itemVariants}
          >
            {[
              { number: "10K+", label: "Properties" },
              { number: "5K+", label: "Happy Clients" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-2xl sm:text-2xl md:text-3xl font-bold text-white">
                  {stat.number}
                </p>
                <p className="text-gray-200 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
