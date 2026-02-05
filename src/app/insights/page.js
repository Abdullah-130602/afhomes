import Layout from "../layout/index";
import Link from "next/link";
import { blogPosts } from "./data";

export const metadata = {
  title: "Dubai Real Estate Insights & Market News | AF Homes",
  description:
    "Browse expert articles on the Dubai property market, community guides and investor tips from the AF Homes team.",
  keywords: [
    "Dubai real estate insights",
    "Dubai property market trends",
    "Dubai property blog",
    "real estate tips Dubai",
  ],
  alternates: {
    canonical: "https://www.afhomes.ae/insights",
  },
};

export default function InsightsPage() {
  return (
    <Layout>
      <main className="pt-20 bg-white">
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <header className="mb-10 md:mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-3">
              Insights & Guides
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Dubai real estate insights
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl">
              Market updates, community deep dives and practical advice to help
              you make confident property decisions in Dubai.
            </p>
          </header>

          {/* Blog cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-gray-50 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col flex-1 px-5 py-5 md:px-6 md:py-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-600 mb-2">
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-[11px] uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-slate-500 mb-4">{post.date}</p>
                  <div className="mt-auto">
                    <Link
                      href={`/insights/${post.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-black hover:text-slate-700 transition-colors"
                    >
                      Read article
                      <span className="ml-1 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
