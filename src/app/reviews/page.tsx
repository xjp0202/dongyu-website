import { RESTAURANT, SITE_URL, REVIEW_ITEMS } from "@/lib/data";
import { generateReviewsJsonLd, generateBreadcrumbJsonLd, generateWebPageJsonLd } from "@/lib/jsonld";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "荣誉与评价",
  description:
    "济南岽渔荣获2026黑珍珠一钻、2025金梧桐一星、国家级五钻酒家等荣誉。食客真实评价，新派鲁菜标杆。",
  alternates: {
    canonical: `${SITE_URL}/reviews`,
  },
  openGraph: {
    title: "荣誉与评价 — 黑珍珠一钻新派鲁菜",
    description:
      "济南岽渔荣获2026黑珍珠一钻、2025金梧桐一星、国家级五钻酒家等荣誉。食客真实评价，新派鲁菜标杆。",
    url: `${SITE_URL}/reviews`,
    images: [{ url: "/images/brand/beijing.png", width: 1486, height: 780 }],
  },
};

export default function ReviewsPage() {
  const jsonLd = generateReviewsJsonLd();
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: RESTAURANT.name, url: SITE_URL },
    { name: "荣誉与评价", url: `${SITE_URL}/reviews` },
  ]);
  const webPageJsonLd = generateWebPageJsonLd({
    name: "荣誉与评价",
    description: "济南岽渔荣获2026黑珍珠一钻、2025金梧桐一星、国家级五钻酒家等荣誉。食客真实评价，新派鲁菜标杆。",
    url: `${SITE_URL}/reviews`,
  });

  const honors = [
    {
      year: "2026",
      title: "黑珍珠餐厅一钻",
      org: "美团黑珍珠餐厅",
      desc: "中国餐饮界的「米其林」，一钻代表「聚会必吃」",
    },
    {
      year: "2025",
      title: "金梧桐一星",
      org: "金梧桐中国餐厅指南",
      desc: "中国餐饮行业权威评价体系",
    },
    {
      year: "2025",
      title: "国家级五钻酒家",
      org: "国家酒家酒店等级评定委员会",
      desc: "国家行业标准最高等级认证",
    },
    {
      year: "2025",
      title: "年度京鲁菜餐厅",
      org: "THE BEST BEIJING AND SHANDONG CUISINE RESTAURANT",
      desc: "京鲁菜领域年度最佳餐厅荣誉",
    },
    {
      year: "2025",
      title: "米其林食遇美食快闪特邀商户",
      org: "MICHELIN GUIDE CULINARY POP-UP ON THE ROAD 济南站",
      desc: "米其林指南官方活动特邀参与餐厅",
    },
    {
      year: "2025",
      title: "金葱阿胶鲍鱼\n列入《济南名菜名录》",
      org: "《济南名菜通用规范》T/JNFX002-2023",
      desc: "岽渔原创菜品获官方名菜认证",
    },
  ];

  const chefHonors = [
    { year: "2025", title: "金葱阿胶鲍鱼\n列入《济南名菜名录》", detail: "依据《济南名菜通用规范》T/JNFX002-2023" },
    { year: "2025", title: "年度京鲁菜餐厅", detail: "THE BEST BEIJING AND SHANDONG CUISINE RESTAURANT" },
    { year: "2025", title: "米其林食遇美食快闪特邀商户", detail: "MICHELIN GUIDE CULINARY POP-UP ON THE ROAD 济南站" },
    { year: "2024", title: "米其林一星", detail: "岽渔行政总厨王太震主理" },
    { year: "2023", title: "米其林一星", detail: "鲁菜品牌米其林星级" },
    { year: "2022", title: "黑珍珠二钻", detail: "从一钻升至二钻" },
    { year: "2021", title: "黑珍珠二钻", detail: "品质鲁菜持续获认可" },
    { year: "2020", title: "黑珍珠一钻", detail: "首次获评黑珍珠餐厅" },
    { year: "-", title: "中国烹饪大赛金奖", detail: "" },
    { year: "-", title: "中国烹饪厨师节金厨奖", detail: "" },
  ];

  const reviews = REVIEW_ITEMS;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <Breadcrumb items={[{ name: "荣誉与评价", url: `${SITE_URL}/reviews` }]} />

      {/* Hero */}
      <section
        className="relative py-24 px-6 overflow-hidden"
        aria-label="荣誉与评价"
      >
        <div className="absolute inset-0">
          <img
            src="/images/brand/beijing.png"
            alt="济南岽渔黑珍珠一钻新派鲁菜餐厅荣誉展示"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-serif mb-4">
            荣誉与评价
          </h1>
          <p className="text-accent tracking-[0.3em] text-lg font-serif">
            至臻品质 口碑为证
          </p>
        </div>
      </section>

      {/* Official Honors */}
      <section className="py-20 px-6" aria-label="官方荣誉">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-serif mb-12 gold-line">
            官方荣誉
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {honors.map((h) => (
              <article
                key={h.title}
                className="text-center p-8 border border-accent/30 bg-accent/5"
              >
                <p className="text-accent text-4xl font-serif mb-2">
                  {h.year}
                </p>
                <h3 className="font-serif text-lg mb-2 whitespace-pre-line">{h.title}</h3>
                <p className="text-text-muted text-xs mb-2">{h.org}</p>
                <p className="text-text-muted text-xs">{h.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Honors Timeline */}
      <section className="py-20 px-6 bg-surface" aria-label="主厨荣誉">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif mb-12 gold-line">
            主厨荣誉轨迹
          </h2>
          <p className="text-accent font-serif text-lg mb-8">
            {RESTAURANT.chef.name} — {RESTAURANT.chef.title}
          </p>
          <div className="space-y-6">
            {chefHonors.map((h, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-20 text-right shrink-0">
                  <span className="text-accent font-serif">{h.year}</span>
                </div>
                <div className="w-px bg-border self-stretch relative">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent" />
                </div>
                <div className="pb-6">
                  <h3 className="font-serif text-sm whitespace-pre-line">{h.title}</h3>
                  {h.detail && (
                    <p className="text-text-muted text-xs mt-1">{h.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dianping Reviews */}
      <section className="py-20 px-6 bg-surface" aria-label="食客评价" itemScope itemType="https://schema.org/Restaurant">
        <meta itemProp="name" content={RESTAURANT.name} />
        <meta itemProp="url" content={SITE_URL} />
        <div className="mx-auto max-w-4xl" itemScope itemType="https://schema.org/AggregateRating" itemProp="aggregateRating">
          <meta itemProp="ratingValue" content="4.9" />
          <meta itemProp="reviewCount" content="1108" />
          <meta itemProp="bestRating" content="5" />
          <h2 className="text-2xl md:text-3xl font-serif mb-12 gold-line">
            食客评价
          </h2>
          <div className="space-y-6">
            {reviews.map((r, i) => (
              <article
                key={i}
                className="p-6 border border-border/50 hover:border-accent/20 transition-colors"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-serif text-sm" itemProp="author" itemScope itemType="https://schema.org/Person">
                      <meta itemProp="name" content={r.author} />
                      {r.author}
                    </span>
                    <span className="text-accent text-xs" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content={String(r.rating)} />
                      <meta itemProp="bestRating" content="5" />
                      {"★".repeat(r.rating)}
                      {"☆".repeat(5 - r.rating)}
                    </span>
                    {r.source && (
                      <span className="text-text-muted text-[10px] border border-border/50 px-2 py-0.5">
                        {r.source}
                      </span>
                    )}
                  </div>
                  <time className="text-text-muted text-xs" itemProp="datePublished">{r.date}</time>
                </div>
                <p className="text-text-muted text-sm leading-relaxed" itemProp="reviewBody">
                  {r.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
