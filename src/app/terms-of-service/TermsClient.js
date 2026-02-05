"use client";

import Layout from "../layout/index";
import LayoutHero from "../components/hero";
import { motion } from "framer-motion";
import heroBg from "@/assets/whyusHero.jpg";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const sections = [
  {
    title: "1. Use of website",
    body: [
      "This website is operated by A&F Homes with the objective to provide real estate properties, services, and related information. All content is provided for general informational purposes only.",
    ],
  },
  {
    title: "2. Property listings & information",
    body: [
      "The accuracy, reliability, or completeness of any information, including real estate properties, services, or related information, is not guaranteed.",

      "The real estate properties, services, or related information provided on this website is subject to change without prior notice. We try our best to ensure that the real estate properties, services, or related information provided is accurate, reliable, and complete.",
    ],
  },
  {
    title: "3. No professional or legal advice",
    body: [
      "The content on this website does not constitute legal, financial, or investment advice. Users are encouraged to conduct their own due diligence and seek independent professional advice before making any real estate decisions.",
    ],
  },
  {
    title: "4. User submissions & contact forms",
    body: [
      "By submitting your details through our contact forms, inquiry forms, or lead forms, you consent to being contacted by A&F Homes via phone, email, WhatsApp, or other communication channels for property‑related assistance and marketing purposes.",
      "You confirm that the information you provide is accurate and complete.",
    ],
  },
  {
    title: "5. Intellectual property",
    body: [
      "All content on this website, including text, images, logos, graphics, and design elements, is the property of A&F Homes or its licensors and is protected by applicable copyright and intellectual property laws.",
      "Unauthorized use, reproduction, or distribution of any content is strictly prohibited.",
    ],
  },
  {
    title: "6. Third‑party links",
    body: [
      "This website may contain links to third‑party websites for additional information or convenience. A&F Homes is not responsible for the content, policies, or practices of any third‑party websites.",
    ],
  },
  {
    title: "7. Limitation of liability",
    body: [
      "A&F Homes shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of or inability to use this website, including reliance on any information provided herein.",
    ],
  },
  {
    title: "8. Privacy",
    body: [
      "Your use of this website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.",
    ],
  },
  {
    title: "9. Modifications to terms",
    body: [
      "We reserve the right to update or modify these Terms & Conditions at any time without prior notice.",
      "Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "10. Governing law",
    body: [
      "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of the United Arab Emirates, without regard to conflict of law principles.",
    ],
  },
  {
    title: "11. Contact us",
    body: [
      "If you have any questions regarding these Terms & Conditions, please contact us through our website or official communication channels.",
    ],
  },
];

const TermsClient = () => {
  return (
    <Layout>
      <main className="min-h-screen bg-background">
        <LayoutHero
          title="Terms & Conditions"
          subTitle="Website use & legal information"
          description="Understand the terms that apply when you use the A&F Homes website, browse property listings or submit your details."
          heroBg={heroBg}
        />

        <section className="py-16 md:py-20 px-4 md:px-0">
          <motion.div
            className="max-w-4xl mx-auto section-padding bg-white/80 rounded-2xl shadow-sm border border-slate-100"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {sections.map((section) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                className="px-6 md:px-10 py-6 md:py-7 border-b border-slate-100 last:border-b-0"
              >
                <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">
                  {section.title}
                </h2>
                <div className="space-y-3 text-sm md:text-base leading-relaxed text-slate-700">
                  {section.body.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </Layout>
  );
};

export default TermsClient;


