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
        title: "Overview",
        body: [
            "This website uses cookies to improve the user experience and track website traffic.",
        ],
    },
    {
        title: "1. What are cookies?",
        body: [
            "Cookies are text files that are stored on your device when you visit a website.",
        ],
    },
    {
        title: "2. Types of cookies we use",
        body: [
            "Essential cookies: Necessary for the website to function.",
            "Analytics cookies: Help us understand how you use the website.",
            "Marketing cookies: Used for advertising and remarketing.",
        ],
    },
    {
        title: "3. Third‑party cookies",
        body: [
            "We might use third-party tools such as Google Analytics or Meta Pixel to analyze traffic and marketing performance.",
        ],
    },
    {
        title: "4. Managing cookies",
        body: [
            "You can adjust your cookie preferences via your browser settings. If you disable cookies, it might impair website functionality.",
        ],
    },
];

const CookiePolicyClient = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Layout>
            <main className="min-h-screen bg-background">
                <LayoutHero
                    title="Cookie Policy"
                    subTitle="How A&F Homes uses cookies"
                    description="Understand how cookies are used on the A&F Homes website for essential functionality, analytics and marketing."
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
                        <motion.div
                            variants={itemVariants}
                            className="border-b border-slate-200 px-6 md:px-10 pt-8 pb-6"
                        >
                            <p className="text-sm font-medium tracking-wide text-slate-500 uppercase">
                                Effective for A&F Homes Real Estate Dubai
                            </p>
                            <p className="mt-2 text-sm text-slate-500">
                                Last updated 25 January {currentYear}
                            </p>
                        </motion.div>

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

export default CookiePolicyClient;


