"use client";

import Layout from "../layout/index";
import React from "react";
import { motion } from "framer-motion";
import team1 from "@/assets/team/1.jpg";
import team2 from "@/assets/team/2.jpg";
import { Divider } from "antd";
import Partners from "../components/partners";
import Testimonials from "../components/testimonials";
import LayoutHero from "../components/hero";
import heroBg from "@/assets/whyusHero.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const WhyUsClient = () => {
  const items = [
    {
      value: "10+",
      title: "Decades of expertise",
      description:
        "Years of expertise in the real estate market, providing top‑tier service to every client.",
    },
    {
      value: "1.5k",
      title: "Successful projects",
      description:
        "Helping clients find their dream homes across numerous successful projects.",
    },
    {
      value: "2k",
      title: "Apartments sold",
      description:
        "2K apartments sold — a testament to our commitment and consistent delivery.",
    },
  ];

  return (
    <Layout>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <LayoutHero
          title="Why Choose AF Homes"
          subTitle="Dubai Real Estate Experts"
          description="We combine deep Dubai market knowledge with transparent advice, helping buyers, sellers and investors make confident property decisions."
          heroBg={heroBg}
        />

        {/* About Section */}
        <section className="relative py-20 px-4 md:px-0">
          <div className="max-w-7xl mx-auto section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                className="order-2 lg:order-1"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.span
                  className="inline-block mb-3 text-sm font-medium tracking-widest uppercase text-accent"
                  variants={itemVariants}
                >
                  Our Story
                </motion.span>

                <motion.h2
                  variants={itemVariants}
                  className="text-2xl md:text-3xl font-bold text-foreground leading-tight"
                >
                  About AF Homes
                </motion.h2>

                <motion.p
                  className="mt-6 text-muted-foreground text-base leading-relaxed max-w-xl"
                  variants={itemVariants}
                >
                  We believe property decisions should feel clear and
                  straightforward. With years in the Dubai real estate market, we
                  support first-time buyers, seasoned investors and sellers with
                  the same care and attention.
                </motion.p>

                <motion.p
                  className="mt-4 text-muted-foreground leading-relaxed max-w-xl"
                  variants={itemVariants}
                >
                  From community insights to full transaction support, our team
                  is focused on long‑term relationships, not one‑off deals.
                </motion.p>
              </motion.div>

              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={team1.src ?? team1}
                    alt="AF Homes real estate advisors in Dubai"
                    className="w-full h-auto rounded-lg image-shadow"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Divider */}
        <div className="mx-4 sm:mx-10 lg:mx-40 -my-10">
          <Divider />
        </div>
        {/* statistics */}
        <section aria-label="AF Homes company statistics" className="py-20 bg-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-semibold text-foreground text-center mb-2">
                Realtors you can count on
              </h2>
              <p className="text-base text-center text-slate-600 max-w-2xl mx-auto mb-4">
                At AF Homes, our goal is to open doors in Dubai&apos;s most
                sought‑after communities while protecting your long‑term
                interests.
              </p>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
              {items.map((item, idx) => (
                <article
                  key={idx}
                  className="relative overflow-hidden rounded-2xl p-8 md:p-10 backdrop-blur-sm shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  aria-labelledby={`stat-${idx}-title`}
                >
                  {/* Soft overlay */}
                  <div className="absolute inset-0 pointer-events-none rounded-2xl">
                    <div className="absolute inset-0 bg-white rounded-2xl" />
                    <div
                      className="absolute -top-12 -left-16 w-72 h-72 bg-gradient-to-br from-white/20 via-white/10 to-transparent opacity-40 rotate-25 rounded-full"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="relative z-10">
                    <h4
                      id={`stat-${idx}-title`}
                      className="font-serif text-2xl md:text-5xl font-bold text-[#006aa2] leading-none"
                    >
                      {item.value}
                    </h4>

                    <p className="mt-5 text-base text-gray-600 max-w-prose leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div
                    className="absolute left-0 top-6 bottom-6 w-0.5 bg-cyan-400/60 rounded-sm pointer-events-none"
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>
        {/* Mission Section */}
        <section className="relative py-20 bg-section-alt0">
          <div className="max-w-7xl mx-auto section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={team2.src ?? team2}
                    alt="Luxury property interior in Dubai"
                    className="w-full h-auto rounded-lg image-shadow"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.span
                  className="inline-block mb-3 text-sm font-medium tracking-widest uppercase text-accent"
                  variants={itemVariants}
                >
                  Our Purpose
                </motion.span>

                <motion.h2
                  variants={itemVariants}
                  className="text-2xl md:text-3xl font-bold text-foreground leading-tight"
                >
                  Helping people find better homes
                </motion.h2>

                <motion.p
                  className="mt-6 text-muted-foreground text-base leading-relaxed max-w-xl"
                  variants={itemVariants}
                >
                  We focus on matching clients with communities and properties
                  that suit their lifestyle, budget and long‑term plans.
                </motion.p>

                <motion.p
                  className="mt-4 text-muted-foreground leading-relaxed max-w-xl"
                  variants={itemVariants}
                >
                  Whether you&apos;re relocating to Dubai or scaling your
                  investment portfolio, AF Homes gives you the clarity to move
                  forward with confidence.
                </motion.p>

                <motion.div
                  className="mt-10 flex flex-wrap gap-4"
                  variants={itemVariants}
                >
                  <a href="/contact" className="btn-primary">
                    Contact us
                  </a>
                  <a href="/insights" className="btn-secondary">
                    Read our insights
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Divider */}
        <div className="mx-4 sm:mx-10 lg:mx-40 -my-10">
          <Divider />
        </div>
        {/* Partners */}
        <Partners />
        {/* testimonials */}
        <Testimonials />
      </main>
    </Layout>
  );
};

export default WhyUsClient;


