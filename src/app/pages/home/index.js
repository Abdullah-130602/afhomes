import React from "react";
import Mortgage from "@/app/components/mortgage";
import FeaturedProperties from "@/app/components/featured-properties";
import Consultant from "@/app/components/consultant";
import News from "@/app/components/news";
import Testimonials from "@/app/components/testimonials";
import Hero from "@/app/pages/home/hero";
import FAQ from "@/app/components/faq";
import Partners from "@/app/components/partners";
import { Divider } from "antd";

const index = () => {
  return (
    <div>
      <Hero />
      {/* Mortgage Section */}
      <Mortgage />
      {/* divider */}
      <div className="mx-4 sm:mx-10 lg:mx-36">
        <Divider />
      </div>
      {/* Featured Properties Section */}
      <FeaturedProperties />
      {/* Partners Section */}
      <Partners />
      {/* Testimonials Section */}
      <Testimonials />
      {/* News & Insights Section */}
      <News />
      {/* FAQ Section */}
      <FAQ />
      {/* Consultant Section */}
      <Consultant />
    </div>
  );
};

export default index;
