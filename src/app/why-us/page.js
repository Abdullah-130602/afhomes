import Layout from "../layout/index";

export const metadata = {
  title: "Why AF Homes | About Us",
  description: "Discover why AF Homes is your trusted real estate partner in Dubai.",
};

export default function WhyUsPage() {
  return (
    <Layout>
      <div className="pt-20 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Why Choose AF Homes
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Your trusted partner in real estate excellence
          </p>
          
          {/* Placeholder content - can be expanded */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our experienced professionals have deep knowledge of the Dubai real estate market."
              },
              {
                title: "Transparent Process",
                description: "We believe in complete transparency throughout every step of your transaction."
              },
              {
                title: "Strong Relationships",
                description: "Strong partnerships with top developers and industry stakeholders."
              },
              {
                title: "Personalized Service",
                description: "Every client receives customized solutions tailored to their unique needs."
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
