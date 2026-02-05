import Layout from "../../layout/index";
import { notFound } from "next/navigation";
import { blogPosts } from "../data";
import LayoutHero from "../../components/hero";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// In newer Next.js / React versions, `params` is a Promise and must be awaited
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | A&F Homes Dubai`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.afhomes.ae/insights/${post.slug}`,
    },
  };
}

// Same here – unwrap `params` before accessing its properties
export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      {/* Match hero placement with Why Us / Contact: hero sits directly under transparent navbar */}
      <main>
        {/* Hero using the same image as the listing card */}
        <LayoutHero
          title={post.title}
          subTitle={post.category}
          description={post.heroHighlight || post.excerpt}
          heroBg={post.image}
        />

        {/* Body */}
        <section className="bg-slate-50 py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">
            {/* Breadcrumb + meta */}
            <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs md:text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <a
                  href="/insights"
                  className="inline-flex items-center gap-1 font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <span className="text-lg leading-none">←</span>
                  <span>Back to insights</span>
                </a>
                <span className="hidden md:inline-block">/</span>
                <span className="line-clamp-1 md:max-w-xs">
                  {post.title}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="bg-white border border-slate-100/80 px-5 py-7 md:px-10 md:py-10">
              <article className="prose prose-slate max-w-none">
                {post.sections.map((section) => (
                  <section key={section.heading} className="mb-8 md:mb-10">
                    <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                      {section.heading}
                    </h2>
                    {section.body.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-base leading-relaxed text-slate-700"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}

                {post.tags && post.tags.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3 justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span>Share:</span>
                      <button className="px-2 py-1 rounded-full border border-slate-200 hover:border-slate-400 hover:text-slate-700 transition-colors">
                        Copy link
                      </button>
                    </div>
                  </div>
                )}
              </article>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}


