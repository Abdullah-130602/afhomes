import Layout from "../../layout/index";
import { notFound } from "next/navigation";
import { blogPosts } from "../data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | AF Homes Dubai`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.afhomes.ae/insights/${post.slug}`,
    },
  };
}

export default function BlogDetailPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <main className="pt-20 bg-white">
        {/* Hero / header */}
        <section className="bg-slate-950 text-white">
          <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-4">
              {post.category}
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-sm md:text-base text-slate-300 mb-4 max-w-2xl">
              {post.heroHighlight || post.excerpt}
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-slate-400">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </section>

        {/* Featured image */}
        <section className="bg-black">
          <div className="max-w-5xl mx-auto px-6">
            <div className="relative -mt-10 md:-mt-14 mb-10 overflow-hidden rounded-2xl border border-slate-800 shadow-xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="bg-white pb-16 md:pb-24">
          <article className="max-w-3xl mx-auto px-6 prose prose-slate max-w-none">
            {post.sections.map((section) => (
              <section key={section.heading} className="mb-8 md:mb-10">
                <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
                  {section.heading}
                </h2>
                {section.body.map((paragraph, idx) => (
                  <p key={idx} className="text-base leading-relaxed text-slate-700">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        </section>
      </main>
    </Layout>
  );
}


