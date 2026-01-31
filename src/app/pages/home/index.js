import React from "react";
import Mortgage from "@/app/components/mortgage";
import FeaturedProperties from "@/app/components/featured-properties";
import Consultant from "@/app/components/consultant";
import News from "@/app/components/news";
import Testimonials from "@/app/components/testimonials";
import Hero from "@/app/components/hero";
import FAQ from "@/app/components/faq";
import Partners from "@/app/components/partners";

const index = () => {
  return (
    <div>
      <Hero />
      {/* Mortgage Section */}
      <Mortgage />
      {/* Featured Properties Section */}
      <FeaturedProperties />
      {/* Partners Section */}
      <Partners />
      {/* Consultant Section */}
      <Consultant />
      {/* Testimonials Section */}
      <Testimonials />
      {/* News & Insights Section */}
      <News />
      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default index;
