import Layout from "../layout/index";

export const metadata = {
  title: "Buy Properties | AF Homes",
  description: "Find your dream property with AF Homes. Browse our exclusive listings in Dubai.",
};

export default function BuyPage() {
  return (
    <Layout>
      <div className="pt-20 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Buy Your Dream Property
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore our exclusive collection of premium properties across Dubai
          </p>
          
          {/* Placeholder content - can be expanded */}
          <div className="bg-gray-50 rounded-xl p-8">
            <p className="text-gray-700">
              Browse through our carefully curated selection of buy properties. 
              Whether you're looking for a luxury apartment, spacious villa, or investment opportunity, 
              AF Homes has the perfect property for you.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
