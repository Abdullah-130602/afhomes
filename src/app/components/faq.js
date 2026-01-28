'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqData = [
    {
      question: 'What services does AF Homes provide?',
      answer: 'AF Homes offers end-to-end real estate services including buying, selling, renting, off-plan investments, and property consultancy across the UAE.',
    },
    {
      question: 'Do you specialize in any specific areas?',
      answer: 'Yes. AF Homes specializes in Dubai\'s prime and emerging communities, including luxury apartments, villas, townhouses, and high-ROI investment properties.',
    },
    {
      question: 'Do you deal with off-plan properties?',
      answer: 'Absolutely. AF Homes provides exclusive off-plan projects from trusted UAE developers with flexible payment plans and early-investor benefits.',
    },
    {
      question: 'Can foreigners buy property in Dubai through AF Homes?',
      answer: 'Yes. UAE allows foreign ownership in designated freehold areas. AF Homes guides international buyers through the entire legal and purchase process.',
    },
    {
      question: 'Do you assist with home loans and mortgages?',
      answer: 'Yes. We work with leading UAE banks to help clients get competitive mortgage options and pre-approvals.',
    },
    {
      question: 'Are your services free for buyers?',
      answer: 'Yes. Our services are free for buyers in most cases, as our fees are usually covered by sellers or developers.',
    },
    {
      question: 'How can I schedule a property viewing?',
      answer: 'You can call or WhatsApp us, fill out the contact form on our website, or send us a direct message on social media. Our team will arrange a viewing at your convenience.',
    },
    {
      question: 'Why should I choose AF Homes?',
      answer: '✔ Trusted local expertise • ✔ Transparent process • ✔ Strong developer relationships • ✔ Personalized property matching • ✔ Dedicated after-sales support',
    },
    {
      question: 'Do you help with property management?',
      answer: 'Yes. AF Homes offers property management support, including tenant sourcing, rent collection, and maintenance coordination.',
    },
    {
      question: 'What documents are required to buy a property in Dubai?',
      answer: 'Typically required: Passport copy, Emirates ID (for residents), Proof of funds / mortgage approval. Our team assists you step-by-step.',
    },
    {
      question: 'How can I contact AF Homes?',
      answer: 'Call / WhatsApp us, email us, visit our website, or visit our office in Dubai, UAE. You can customize contact details as needed.',
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
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Everything you need to know about AF Homes services
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqData.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left"
              >
                <motion.div
                  className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-300 rounded-lg p-4 transition-all duration-300"
                  whileHover={{ backgroundColor: '#f3f4f6' }}
                >
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-sm font-medium text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 mt-1"
                    >
                      <svg
                        className="w-6 h-6 text-gray-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gray-100 border border-t-0 border-gray-300 rounded-b-lg p-6 text-gray-700 text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            Didn't find the answer you're looking for?
          </p>
          <motion.button
            className="px-6 py-2 bg-black text-white font-semibold rounded-full text-sm"
            whileHover={{ scale: 1.05, backgroundColor: '#1f2937' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
