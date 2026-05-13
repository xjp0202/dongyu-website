import { RESTAURANT, SITE_URL, NEWS_ARTICLES } from "@/lib/data";
import {
  generateBreadcrumbJsonLd,
  generateWebPageJsonLd,
} from "@/lib/jsonld";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "新闻动态",
  description:
    "济南岽渔媒体报道与新闻动态。黑珍珠一钻新派鲁菜餐厅，媒体视角下的岽渔故事。",
  alternates: {
    canonical: `${SITE_URL}/news`,
  },
  openGraph: {
    title: "新闻动态 — 媒体报道与品牌故事",
    description:
      "济南岽渔媒体报道与新闻动态。黑珍珠一钻新派鲁菜餐厅，媒体视角下的岽渔故事。",
    url: `${SITE_URL}/news`,
    images: [{ url: "/images/brand/beijing.png", width: 1486, height: 780 }],
  },
};

// 按日期降序排列
const sortedNews = [...NEWS_ARTICLES].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

// 生成 NewsArticle JSON-LD
function generateNewsJsonLd() {
  return sortedNews.map((article) => ({
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: article.source,
    },
    publisher: {
      "@type": "Organization",
      name: article.source,
    },
    description: article.summary,
    url: article.url,
    mainEntityOfPage: article.url,
  }));
}

export default function NewsPage() {
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: RESTAURANT.name, url: SITE_URL },
    { name: "新闻动态", url: `${SITE_URL}/news` },
  ]);
  const webPageJsonLd = generateWebPageJsonLd({
    name: "新闻动态",
    description:
      "济南岽渔媒体报道与新闻动态。黑珍珠一钻新派鲁菜餐厅，媒体视角下的岽渔故事。",
    url: `${SITE_URL}/news`,
  });
  const newsJsonLd = generateNewsJsonLd();

  return (
    <>
      {/* JSON-LD */}
      {newsJsonLd.map((jsonLd, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <Breadcrumb items={[{ name: "新闻动态", url: `${SITE_URL}/news` }]} />

      {/* Hero */}
      <section
        className="relative py-24 px-6 overflow-hidden"
        aria-label="新闻动态"
      >
        <div className="absolute inset-0">
          <img
            src="/images/brand/beijing.png"
            alt="济南岽渔新闻动态"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-serif mb-4">新闻动态</h1>
          <p className="text-accent tracking-[0.3em] text-lg font-serif">
            媒体聚焦 岽渔之声
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="py-20 px-6" aria-label="媒体报道">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif mb-12 gold-line">
            媒体报道
          </h2>
          <div className="space-y-8">
            {sortedNews.map((article, i) => (
              <article
                key={i}
                className="group p-8 border border-border/50 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="px-3 py-0.5 border border-accent/40 text-accent text-[11px] tracking-wider">
                    {article.tag}
                  </span>
                  <span className="text-text-muted text-xs">
                    {article.source}
                  </span>
                  <time
                    className="text-text-muted text-xs ml-auto"
                    dateTime={article.date}
                  >
                    {article.date}
                  </time>
                </div>
                <h3 className="font-serif text-lg mb-3 group-hover:text-accent transition-colors leading-relaxed">
                  {article.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-5">
                  {article.summary}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent text-sm hover:text-accent-light transition-colors"
                >
                  阅读全文
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <aside className="py-20 px-6 bg-surface" aria-label="了解更多">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">
            期待与您在岽渔相遇
          </h2>
          <p className="text-text-muted text-sm mb-8 leading-relaxed">
            黑珍珠一钻新派鲁菜，胶东海鲜与山东山珍的极致融合。
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href={`tel:${RESTAURANT.phone}`}
              className="px-8 py-3 bg-accent text-primary font-medium text-sm hover:bg-accent-light transition-colors tracking-widest"
            >
              电话预订
            </a>
            <a
              href="/about"
              className="px-8 py-3 border border-accent text-accent text-sm hover:bg-accent hover:text-primary transition-colors tracking-widest"
            >
              了解岽渔
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
