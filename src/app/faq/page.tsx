import { RESTAURANT, FAQ_ITEMS, SITE_URL } from "@/lib/data";
import { generateFaqJsonLd, generateBreadcrumbJsonLd, generateWebPageJsonLd } from "@/lib/jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "常见问题",
  description:
    "济南岽渔常见问题：济南高端鲁菜哪家好？商务宴请推荐？黑珍珠餐厅？高端海鲜？纪念日餐厅？人均消费？预订方式？一站解答。",
  alternates: {
    canonical: "https://dongyu.com/faq",
  },
  openGraph: {
    title: "常见问题 — 济南岽渔黑珍珠一钻新派鲁菜",
    description:
      "济南岽渔常见问题：济南高端鲁菜哪家好？商务宴请推荐？黑珍珠餐厅？高端海鲜？纪念日餐厅？人均消费？预订方式？",
    url: "https://dongyu.com/faq",
    images: [{ url: "/images/brand/beijing.png", width: 1486, height: 780 }],
  },
};

/**
 * 将 answer 文本渲染为结构化 HTML
 * - \n\n 分段 → <p>
 * - **加粗** → <strong>
 * - ｜分隔 → 带间距的内联标签
 */
function renderAnswer(text: string) {
  const paragraphs = text.split("\n\n");

  return paragraphs.map((para, pi) => {
    // 解析加粗和分隔符
    const parts = para.split(/(\*\*[^*]+\*\*)/g);
    const elements = parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="text-accent font-medium">
            {part.slice(2, -2)}
          </strong>
        );
      }
      // 将 ｜ 替换为带间距的分隔
      const segments = part.split("｜");
      return segments.map((seg, si) => (
        <span key={`${i}-${si}`}>
          {si > 0 && <span className="mx-1.5 text-accent/50">·</span>}
          {seg}
        </span>
      ));
    });

    return (
      <p key={pi} className={pi === 0 ? "mb-3" : "mb-2 text-sm"}>
        {elements}
      </p>
    );
  });
}

export default function FaqPage() {
  const jsonLd = generateFaqJsonLd();
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: RESTAURANT.name, url: SITE_URL },
    { name: "常见问题", url: `${SITE_URL}/faq` },
  ]);
  const webPageJsonLd = generateWebPageJsonLd({
    type: "FAQPage",
    name: "常见问题",
    description: "济南岽渔常见问题：济南高端鲁菜哪家好？商务宴请推荐？黑珍珠餐厅？高端海鲜？纪念日餐厅？人均消费？预订方式？",
    url: `${SITE_URL}/faq`,
  });

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

      {/* Hero */}
      <section
        className="relative py-24 px-6 overflow-hidden"
        aria-label="常见问题"
      >
        <div className="absolute inset-0">
          <img
            src="/images/brand/beijing.png"
            alt="岽渔餐厅"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-serif mb-4">常见问题</h1>
          <p className="text-accent tracking-[0.3em] text-lg font-serif">
            关于岽渔，您想了解的都在这里
          </p>
        </div>
      </section>

      {/* FAQ List — 全部直接展示，不用折叠 */}
      <section
        className="py-20 px-6"
        aria-label="问答列表"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="mx-auto max-w-4xl">
          {FAQ_ITEMS.map((item, i) => (
            <article
              key={i}
              className="border-b border-border/50 last:border-b-0 py-8 first:pt-0"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              {/* 问题标题 — 编号+问句 */}
              <h2
                className="font-serif text-base md:text-lg mb-4 flex items-start gap-3"
                itemProp="name"
              >
                <span className="text-accent font-mono text-sm mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item.question}</span>
              </h2>

              {/* 回答内容 — 直接展示，结构化分段 */}
              <div
                className="pl-8 md:pl-9 text-text-muted leading-relaxed"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">{renderAnswer(item.answer)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <aside className="py-20 px-6 bg-surface" aria-label="预订引导">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            还有其他问题？
          </h2>
          <p className="text-text-muted text-sm mb-8 leading-relaxed">
            欢迎致电{RESTAURANT.name}，我们随时为您解答。
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href={`tel:${RESTAURANT.phone}`}
              className="px-8 py-3 bg-accent text-primary font-medium text-sm hover:bg-accent-light transition-colors tracking-widest"
            >
              电话咨询
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-accent text-accent text-sm hover:bg-accent hover:text-primary transition-colors tracking-widest"
            >
              联系我们
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
