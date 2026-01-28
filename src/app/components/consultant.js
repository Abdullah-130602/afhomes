'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Consultant = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Search query:', searchQuery)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-black mb-3"
          >
            Find your consultant
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base text-gray-700 mb-8 max-w-2xl"
          >
            Search our team of 289 property experts to get professional guidance.
          </motion.p>

          {/* Search Bar */}
          {/* <motion.form
            variants={itemVariants}
            onSubmit={handleSearch}
            className="mb-12"
          >
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Name or department"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-black focus:outline-none transition-colors text-gray-700 placeholder-gray-500"
                />
              </div>
              <motion.button
                type="submit"
                className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white transition-colors flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.form> */}

          {/* Form Inputs */}
          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {/* Name Input */}
            <motion.div variants={itemVariants}>
              <label className="block text-xs font-semibold text-gray-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-black focus:outline-none transition-colors text-gray-700 placeholder-gray-500 text-sm"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div variants={itemVariants}>
              <label className="block text-xs font-semibold text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-black focus:outline-none transition-colors text-gray-700 placeholder-gray-500 text-sm"
              />
            </motion.div>

            {/* Phone Input */}
            <motion.div variants={itemVariants}>
              <label className="block text-xs font-semibold text-gray-900 mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+971 XX XXX XXXX"
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-300 focus:border-black focus:outline-none transition-colors text-gray-700 placeholder-gray-500 text-sm"
              />
            </motion.div>
          </motion.form>

          {/* Submit Button */}
          <motion.div
            variants={itemVariants}
            className="mt-4"
          >
            <motion.button
              onClick={handleSubmit}
              className="px-6 py-4 bg-[#00263a] text-white font-semibold rounded-full hover:bg-gray-900 transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Matched with a Consultant
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Consultant
