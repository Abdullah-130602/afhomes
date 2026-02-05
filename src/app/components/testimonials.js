"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Arjun Sood",
      date: "25 January 2026",
      rating: 5,
      text: "Nivine is very knowledgeable about the real estate market of Dubai and a thorough professional. I really liked the fact that she never tried to push a product to me and acted as a true advisor, guiding me as I was settling in the city.",
    },
    {
      id: 2,
      name: "Aniket Bakshi",
      date: "24 January 2026",
      rating: 5,
      text: "Very good and professional company Alpa from sales provided a smooth experience for onboarding and great customer service",
    },
    {
      id: 3,
      name: "Fadi Ghosaini",
      date: "22 January 2026",
      rating: 5,
      text: "Excellent service from Haus & Haus. Aly was particularly good at understanding our needs and at utilising her colleagues; Elliot, to find the right property for us. Very pleasant and professional experience from Aly and her colleague Elliot.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      date: "20 January 2026",
      rating: 5,
      text: "Outstanding experience from start to finish. The team was extremely responsive and helpful throughout the entire process. Highly recommend!",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="py-20 md:py-20 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Client testimonials
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Hear from our satisfied clients who have experienced exceptional
            service with haus & haus:{" "}
            <a
              href="#"
              className="underline font-semibold text-black hover:text-gray-700"
            >
              More Reviews
            </a>
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  {/* Name and Date */}
                  <h3 className="text-lg font-bold text-black mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {testimonial.date}
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar
                        key={i}
                        size={16}
                        className="fill-[#00263a] text-[#00263a]"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {testimonial.text}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevSlide}
              className="p-3 rounded-full bg-[#00263a] text-white hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="p-3 rounded-full bg-[#00263a] text-white hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaChevronRight size={20} />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-black" : "bg-gray-300"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
