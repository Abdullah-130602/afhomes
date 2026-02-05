'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

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

  const footerLinks = {
    Company: ['About Us', 'Blog'],
    Services: ['Buy Property', 'Sell Property', 'Rent Property', 'Off-Plan'],
    Support: ['Contact Us', 'FAQ', 'Properties', 'Legal'],
    Legal: ['Privacy Policy', 'Terms & Conditions', 'Cookie Policy'],
  }

  // Central map of label → route so all columns can share correct links
  const linkRoutes = {
    'About Us': '/why-us',
    Blog: '/insights',
    'Buy Property': '/buy',
    'Sell Property': '/sell',
    'Rent Property': '/rent',
    'Off-Plan': '/off-plan',
    'Contact Us': '/contact',
    FAQ: '/faq',
    Properties: '/properties',
    Legal: '/legal',
    'Privacy Policy': '/privacy-policy',
    'Terms & Conditions': '/terms-of-service',
    'Cookie Policy': '/cookie-policy',
  }

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/afhomes.ae', icon: <FaFacebook /> },
    { name: 'Instagram', href: 'https://www.instagram.com/afhomes.ae', icon: <FaInstagram /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/afhomesae', icon: <FaLinkedin /> },
    { name: 'WhatsApp', href: 'https://wa.me/+971544548731', icon: <FaWhatsapp /> },
  ]
    

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 text-white">A&F Homes</h3>
            <p className="text-gray-400 mb-6">
              Your trusted partner in finding the perfect property in Dubai and across the UAE.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map((column, colIndex) => (
            <motion.div key={colIndex} variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-white">{column[0]}</h4>
              <ul className="space-y-2">
                {column[1].map((link, linkIndex) => {
                  const href = linkRoutes[link]

                  if (href) {
                    return (
                      <li key={linkIndex}>
                        <Link
                          href={href}
                          className="text-gray-400 hover:text-gray-300 transition-colors"
                        >
                          {link}
                        </Link>
                      </li>
                    )
                  }

                  // Fallback placeholder link
                  return (
                    <li key={linkIndex}>
                      <motion.a
                        href="#"
                        className="text-gray-400 hover:text-gray-300 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {link}
                      </motion.a>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="bg-gray-800 rounded-lg p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-300">
                Get the latest property listings and real estate insights delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <motion.button
                className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pb-16 border-b border-gray-800"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Phone */}
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Call Us</h4>
              <p className="text-gray-400">+971 54 454 8731</p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Email Us</h4>
              <p className="text-gray-400">admin@afhomes.ae</p>
              <p className="text-gray-400">arsalan@afhomes.ae</p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div variants={itemVariants} className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Visit Us</h4>
              <p className="text-gray-400">Al Wasl Building, Workspace Downtown, Office 47, Sheikh Zayed Road, Dubai, UAE</p>
              <p className="text-gray-400 text-xs">Available Monday to Saturday (10:00 AM - 7:00 PM)</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} A&F Homes. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
