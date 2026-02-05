"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'A&F Homes just landed in Peninsula, Downtown Dubai',
      date: '2 mins | Jan 14, 2026',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=300&fit=crop',
      category: 'News',
    },
    {
      id: 2,
      title: 'Community planning that shapes long term value - Behind The Bricks (Episode 1)',
      date: 'Jan 09, 2026',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      category: 'Insights',
    },
    {
      id: 3,
      title: 'Top schools in Dubai: where to live for the best education',
      date: 'Dec 31, 2025',
      image: 'https://images.pexels.com/photos/4019754/pexels-photo-4019754.jpeg',
      category: 'Guide',
    },
    {
      id: 4,
      title: "How to maximise rental income in Dubai's competitive market",
      date: 'Dec 22, 2025',
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&h=300&fit=crop',
      category: 'Guide',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex justify-between items-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            News &amp; Insights
          </h2>
          <motion.div whileHover={{ x: 5 }}>
            <Link
              href="/insights"
              className="text-black font-semibold text-sm tracking-widest uppercase hover:text-gray-600 transition-colors"
            >
              Go to all insights
            </Link>
          </motion.div>
        </motion.div>

        {/* News Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {newsArticles.map((article) => (
            <motion.div
              key={article.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 h-48 bg-gray-200">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <motion.h3
                className="text-sm font-medium text-black mb-2 leading-tight group-hover:text-gray-700 transition-colors line-clamp-2"
                whileHover={{ x: 5 }}
              >
                {article.title}
              </motion.h3>

              <p className="text-xs text-gray-600">{article.date}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default News
