"use client";

import React from "react";
import { motion } from "framer-motion";

const Mortgage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-gray-600 font-medium mb-2 text-sm"
            >
              Find your perfect mortgage
            </motion.p>

            {/* Main Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-black mb-4 leading-tight"
            >
              Your home-buying journey should be smooth and stress-free
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base text-gray-700 mb-6 leading-relaxed max-w-lg"
            >
              Speak to our in-house mortgage team today and get access the best
              rates in the UAE.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.button
                className="px-6 py-2.5 bg-[#00263a] text-white font-semibold rounded-full text-sm"
                whileHover={{ scale: 1.05, backgroundColor: "#1f2937" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Speak to the team
              </motion.button>
              {/* <motion.button
                className="px-6 py-2.5 border-2 border-black text-black font-semibold rounded-full text-sm hover:bg-black hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                Speak to the team
              </motion.button> */}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-56 md:h-72 rounded-xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=700&fit=crop"
              alt="Luxury home interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mortgage;
