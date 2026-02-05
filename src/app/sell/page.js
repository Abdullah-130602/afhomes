import Layout from "../layout/index";

export const metadata = {
  title: "Sell Your Property in Dubai | A&F Homes",
  description:
    "Sell your apartment or villa in Dubai with A&F Homes. Professional valuation, marketing and negotiation to achieve the best market price.",
  keywords: [
    "sell property Dubai",
    "list my property Dubai",
    "real estate valuation Dubai",
  ],
  alternates: {
    canonical: "https://www.afhomes.ae/sell",
  },
};

export default function SellPage() {
  return (
    <Layout>
      <div className="pt-20 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Sell Your Property
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Get the best value for your property with A&F Homes expert guidance
          </p>
          
          {/* Placeholder content - can be expanded */}
          <div className="bg-gray-50 rounded-xl p-8">
            <p className="text-gray-700">
              Ready to sell your property? A&F Homes provides expert guidance to help you achieve 
              the best market value. Our experienced team handles all aspects of the selling process, 
              from property valuation to closing the deal.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
