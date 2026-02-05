"use client";

import LayoutHero from "../components/hero";
import Layout from "../layout/index";
import heroBg from "@/assets/contact.jpg";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Testimonials from "../components/testimonials";
import Consultant from "../components/consultant";
import { Divider } from "antd";

const Map = dynamic(() => import("./MapClient"), {
  ssr: false,
});

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

export default function ContactClient() {
  return (
    <Layout>
      <LayoutHero
        title="Contact A&F Homes"
        subTitle="Talk to a Dubai Property Expert"
        description="Speak directly with our specialist team about buying, selling or renting property in Dubai. We respond quickly on phone, email and WhatsApp."
        heroBg={heroBg}
      />
      {/* Contact details + form */}
      <div className="py-16 md:py-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto section-padding"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Get in touch with A&F Homes
            </h1>
            <p className="text-base text-gray-600 mb-12">
              Have a question about a property, valuation or the Dubai market?
              Share your details and our team will contact you shortly.
            </p>
            {/* Contact Information and Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-semibold text-black mb-6">
                  Contact information
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Phone</h4>
                    <p className="text-gray-600">+971 XX XXX XXXX</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Email</h4>
                    <p className="text-gray-600">info@afhomes.ae</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">
                      Office address
                    </h4>
                    <p className="text-gray-600">Dubai, UAE</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">WhatsApp</h4>
                    <p className="text-gray-600">+971 XX XXX XXXX</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 rounded-xl p-8">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-black mb-2">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none"
                      rows={5}
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-colors"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* Divider */}
      <div className="mx-4 sm:mx-10 lg:mx-40">
        <Divider />
      </div>
      {/* Map Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <motion.div
          className="max-w-7xl mx-auto px-4 md:px-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Map />
        </motion.div>
      </section>
      {/* Testimonials */}
      <div className="mt-12 md:mt-16">
        <Testimonials />
      </div>
      {/* Consultant CTA */}
      <section className="bg-white">
        <Consultant />
      </section>
    </Layout>
  );
}


