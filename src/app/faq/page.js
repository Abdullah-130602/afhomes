import FAQClient from "./FAQClient";

export const metadata = {
  title: "Dubai Real Estate FAQ | A&F Homes",
  description:
    "Find quick answers to common questions about buying, selling, renting and investing in Dubai property with A&F Homes.",
  keywords: [
    "Dubai real estate FAQ",
    "A&F Homes questions",
    "buy property Dubai help",
    "sell property Dubai help",
  ],
  alternates: {
    canonical: "https://www.afhomes.ae/faq",
  },
};

export default function FAQPage() {
  return <FAQClient />;
}


