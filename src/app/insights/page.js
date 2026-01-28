import Layout from "../layout/index";

export const metadata = {
  title: "Insights | AF Homes",
  description: "Stay informed with the latest real estate insights, market trends, and investment tips from AF Homes.",
};

export default function InsightsPage() {
  return (
    <Layout>
      <div className="pt-20 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Real Estate Insights
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Stay informed with market trends, expert tips, and investment insights
          </p>
          
          {/* Placeholder content - can be expanded */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 h-40 rounded-lg mb-4"></div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Market Insight {i}
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover valuable insights about the Dubai real estate market and investment opportunities.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
