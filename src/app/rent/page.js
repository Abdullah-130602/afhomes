import Layout from "../layout/index";

export const metadata = {
  title: "Rent Properties | AF Homes",
  description: "Discover premium rental properties in Dubai with AF Homes.",
};

export default function RentPage() {
  return (
    <Layout>
      <div className="pt-20 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Rent Your Perfect Home
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover premium rental properties across Dubai
          </p>
          
          {/* Placeholder content - can be expanded */}
          <div className="bg-gray-50 rounded-xl p-8">
            <p className="text-gray-700">
              Looking for a rental property? AF Homes offers a wide range of rental options 
              including apartments, villas, townhouses, and studios. 
              Find the perfect rental property that matches your lifestyle and budget.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
