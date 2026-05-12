import { RESTAURANT, SITE_URL } from "@/lib/data";
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

interface NewsArticle {
  title: string;
  date: string;
  source: string;
  sourceLogo?: string;
  summary: string;
  url: string;
  tag: string;
}

const newsArticles: NewsArticle[] = [
  {
    title: "岽渔餐厅荣膺2026黑珍珠一钻，济南餐饮三年再添新荣耀",
    date: "2025-01-27",
    source: "凤凰网山东",
    summary:
      "2026年黑珍珠餐厅指南揭晓，岽渔餐厅成功摘得一钻荣誉，这是自2023年黑珍珠指南在济南开城以来，时隔三年首次新增上榜餐厅。文章深度解读岽渔在烹饪出品、服务环境、传承创新三大维度的表现，以及食材供应链与鲁菜文化自信的独特优势。",
    url: "https://ishare.ifeng.com/c/s/v004h9us2lUo8Ac0OQCOLKBN5TedZcR1ibXceW4AR99Zlyc__",
    tag: "黑珍珠",
  },
  {
    title: "山东5家餐厅入选2026黑珍珠餐厅指南，济南3席青岛2席",
    date: "2025-01-28",
    source: "齐鲁晚报·齐鲁壹点",
    summary:
      "2026黑珍珠餐厅指南发布，全国内地32座城市263家餐厅登榜。山东共5家餐厅入选，其中济南3家、青岛2家。岽渔为新晋上榜餐厅，品牌负责人王启龙与主厨王太震分享了入选感言与品牌理念。",
    url: "https://www.ql1d.com/general/27176506.html",
    tag: "黑珍珠",
  },
  {
    title: '探寻CBD | 济南CBD再摘"黑珍珠一钻"，岽渔餐厅荣耀加冕',
    date: "2025-01-30",
    source: "济南CBD管委会",
    summary:
      "济南CBD管委会官方报道岽渔餐厅荣获2026黑珍珠一钻。文章聚焦岽渔的食材自信与文化自信——雪野湖自有种植基地、4小时冷链保鲜与液氮锁鲜技术、港口直采海鲜鲜活直达，以及齐鲁饮食文化在当代商务核心区的活态传承。",
    url: "https://mp.weixin.qq.com/s/iTLiJZPDtTzUOBJZEYGhyQ",
    tag: "官方报道",
  },
  {
    title: "2025年度橄榄中国·餐厅大奖获奖名单揭晓",
    date: "2025-11-24",
    source: "橄榄画报",
    summary:
      "2025年度橄榄中国·餐厅大奖揭晓，岽渔荣获「年度京鲁菜餐厅」殊荣。该奖项自2009年创办至今已十六周年，以「健康、美味、创新、理性」为评选标准，是中国餐饮行业最具影响力的年度评选之一。",
    url: "https://mp.weixin.qq.com/s/ODJzekw98_f0_yuH8diYFA",
    tag: "年度大奖",
  },
  {
    title: "时隔三年，济南再添黑珍珠餐厅！济南岽渔：用山海鲁味焕新泉城美食名片",
    date: "2025-01-30",
    source: "新黄河",
    summary:
      "2026年黑珍珠餐厅指南揭晓，位于济南CBD核心区的岽渔餐厅成功摘得一钻，这是自2023年黑珍珠在济南开城以来时隔三年首次新增上榜餐厅。主厨王太震接受专访，分享其从部队炊事兵到黑珍珠主厨的二十余年耕耘之路，以及岽渔「守鲁菜之根、创时代之味」的核心理念与「山珍+海味」供应链优势。",
    url: "https://api.jinantimes.com.cn/h5/xhh-app/#/content?catid=39&id=5210614&fx=1",
    tag: "黑珍珠",
  },
];

// 按日期降序排列
const sortedNews = [...newsArticles].sort(
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
