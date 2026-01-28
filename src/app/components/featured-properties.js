"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  MdCall,
  MdMail,
  MdOutlineBedroomChild,
  MdWhatsapp,
} from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { LuMapPinCheckInside } from "react-icons/lu";
import { PiMapPinSimpleArea } from "react-icons/pi";

const FeaturedProperties = () => {
  const [activeTab, setActiveTab] = useState("sale");
  const [swiperRef, setSwiperRef] = useState(null);

  const properties = {
    sale: [
      {
        id: 1,
        title: "2 bedroom apartment for sale",
        price: "AED 8,000,000",
        location: "Six Senses Residences, Dubai Marina, Dubai",
        bedrooms: 2,
        bathrooms: 3,
        sqft: null,
        image:
          "https://safe-crystal-32e0edb7ea.media.strapiapp.com/8_converted_ac587e714b.webp",
      },
      {
        id: 2,
        title: "3 bedroom townhouse for sale",
        price: "AED 2,325,000",
        location: "Diamond Views 3, Jumeirah Village Circle, Dubai",
        bedrooms: 3,
        bathrooms: 3,
        sqft: null,
        image:
          "https://safe-crystal-32e0edb7ea.media.strapiapp.com/3_converted_df2e40a0b7.webp",
      },
      {
        id: 3,
        title: "1 bedroom apartment for sale",
        price: "AED 1,100,000",
        location: "Dubai Star, Jumeirah Lake Towers, Dubai",
        bedrooms: 1,
        bathrooms: 2,
        sqft: "737",
        image:
          "https://safe-crystal-32e0edb7ea.media.strapiapp.com/22_converted_3f337d95bb.webp",
      },
      {
        id: 4,
        title: "4 bedroom villa for sale",
        price: "AED 5,500,000",
        location: "Emirates Living, Dubai",
        bedrooms: 4,
        bathrooms: 4,
        sqft: "3,500",
        image:
          "https://safe-crystal-32e0edb7ea.media.strapiapp.com/10_10f12df648.jpg",
      },
    ],
    rent: [
      {
        id: 5,
        title: "1 bedroom apartment for rent",
        price: "AED 3,500/month",
        location: "Downtown Dubai, Dubai",
        bedrooms: 1,
        bathrooms: 1,
        sqft: "600",
        image:
          "https://safe-crystal-32e0edb7ea.media.strapiapp.com/4_e0cf626d29.jpg",
      },
      {
        id: 6,
        title: "2 bedroom apartment for rent",
        price: "AED 5,000/month",
        location: "Dubai Marina, Dubai",
        bedrooms: 2,
        bathrooms: 2,
        sqft: "1,100",
        image:
          "https://safe-crystal-32e0edb7ea.media.strapiapp.com/29_db13dbc3d1.jpg",
      },
    ],
    offplan: [
      {
        id: 7,
        title: "2 bedroom off-plan apartment",
        price: "From AED 1,200,000",
        location: "Azura, Dubai Marina, Dubai",
        bedrooms: 2,
        bathrooms: 2,
        sqft: "1,050",
        image:
          "https://safe-crystal-32e0edb7ea.media.strapiapp.com/6_df3f059786.jpg",
      },
      {
        id: 8,
        title: "3 bedroom off-plan townhouse",
        price: "From AED 1,900,000",
        location: "Ava, Jumeirah Village Circle, Dubai",
        bedrooms: 3,
        bathrooms: 3,
        sqft: "1,750",
        image:
          "https://safe-crystal-32e0edb7ea.media.strapiapp.com/Palm_Central_Exteriors_1_7610232155.jpg",
      },
    ],
  };

  const tabs = [
    { id: "sale", label: "For Sale" },
    { id: "rent", label: "For Rent" },
    { id: "offplan", label: "Off Plan" },
  ];

  const currentProperties = properties[activeTab];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">
            Featured properties in Dubai
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
            Browse all our luxurious properties with stunning views and
            world-class amenities in Dubai. Backed by years of experience in
            real estate Dubai, our team makes it simple to find a home that fits
            your lifestyle. Trust our expert real estate agents in Dubai and
            discover why we are among the most reliable real estate companies in
            Dubai.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex gap-8 mb-12 border-b border-gray-200"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 font-semibold text-lg transition-all relative ${
                activeTab === tab.id
                  ? "text-black"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#00263a]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Swiper
            ref={setSwiperRef}
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {currentProperties.map((property) => (
              <SwiperSlide key={property.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gray-300 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    {/* Title */}
                    <h3 className="text-md font-bold text-black mb-2 line-clamp-2">
                      {property.title}
                    </h3>

                    {/* Price */}
                    <p className="text-xl font-bold text-[#00263a] mb-4">
                      {property.price}
                    </p>

                    {/* Location */}
                    <div className="flex items-start gap-2 text-gray-600 text-sm mb-6">
                      <LuMapPinCheckInside />
                      <span className="flex-1">{property.location}</span>
                    </div>

                    {/* Property Details */}
                    <div className="flex gap-6 text-gray-600 text-sm mb-6 pb-6 border-b border-gray-200">
                      <div className="flex items-center gap-1">
                        <MdOutlineBedroomChild />
                        <span>{property.bedrooms} bedrooms</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <LuBath />
                        <span>{property.bathrooms} bathrooms</span>
                      </div>
                      {property.sqft && (
                        <div className="flex items-center gap-1">
                          <PiMapPinSimpleArea className="text-sm" />
                          <span>{property.sqft} sq.ft</span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 justify-evenly">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 text-xs text-black font-medium bg-gray-200 p-2 rounded-md hover:text-gray-700 transition-colors"
                      >
                        <MdCall />
                        Call
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 text-xs text-black font-medium bg-gray-200 p-2 rounded-md hover:text-gray-700 transition-colors"
                      >
                        <MdMail />
                        Email
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 text-xs text-black font-medium bg-gray-200 p-2 rounded-md hover:text-gray-700 transition-colors"
                      >
                        <MdWhatsapp />
                        Whatsapp
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom absolute left-0 top-1/3 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom absolute right-0 top-1/3 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
