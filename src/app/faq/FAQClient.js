"use client";

import Layout from "../layout/index";
import LayoutHero from "../components/hero";
import FAQ from "../components/faq";
import heroBg from "@/assets/contact.jpg";

const FAQClient = () => {
  return (
    <Layout>
      <main>
        <LayoutHero
          title="Frequently Asked Questions"
          subTitle="Help & Support"
          description="Answers to common questions about buying, selling, renting and investing in Dubai property with A&F Homes."
          heroBg={heroBg}
        />
        <FAQ />
      </main>
    </Layout>
  );
};

export default FAQClient;


