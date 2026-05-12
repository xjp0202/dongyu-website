import { RESTAURANT, SITE_URL, MENU_SECTIONS, FAQ_ITEMS, ROOMS } from "@/lib/data";
import { generateMenuJsonLd, generateBreadcrumbJsonLd, generateWebPageJsonLd } from "@/lib/jsonld";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "菜单",
  description:
    "济南岽渔完整菜单，招牌葱烧海参、金葱阿胶鲍鱼、芙蓉滑炒蟹等新派鲁菜，胶东海鲜活养直供。",
  alternates: {
    canonical: `${SITE_URL}/menu`,
  },
  openGraph: {
    title: "菜单 — 济南岽渔新派鲁菜",
    description:
      "济南岽渔完整菜单，招牌葱烧海参、金葱阿胶鲍鱼、芙蓉滑炒蟹等新派鲁菜，胶东海鲜活养直供。",
    url: `${SITE_URL}/menu`,
    images: [{ url: "/images/dishes/congshao-haishen.png", width: 800, height: 600 }],
  },
};

/** 菜单页码范围：从第4页开始（跳过封面/目录/引言），到第28页 */
const MENU_START_PAGE = 4;
const MENU_END_PAGE = 28;

export default function MenuPage() {
  const jsonLd = generateMenuJsonLd();
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: RESTAURANT.name, url: SITE_URL },
    { name: "菜单", url: `${SITE_URL}/menu` },
  ]);
  const webPageJsonLd = generateWebPageJsonLd({
    name: "菜单",
    description: "济南岽渔完整菜单，招牌葱烧海参、金葱阿胶鲍鱼、芙蓉滑炒蟹等新派鲁菜，胶东海鲜活养直供。",
    url: `${SITE_URL}/menu`,
  });
  const pages = Array.from(
    { length: MENU_END_PAGE - MENU_START_PAGE + 1 },
    (_, i) => MENU_START_PAGE + i,
  );

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

      <Breadcrumb items={[{ name: "菜单", url: `${SITE_URL}/menu` }]} />

      {/* 电子菜单 — 左右满屏，浅灰色细线分隔 */}
      {pages.map((page, idx) => (
        <section
          key={page}
          className="w-full bg-primary border-b border-gray-300/30"
          aria-label={`岽渔菜单第${page}页`}
        >
          <img
            src={`/images/menu/page_${page}.jpg`}
            alt={`济南岽渔黑珍珠一钻新派鲁菜菜单第${page}页`}
            className="w-full h-auto select-none block"
            loading={idx < 2 ? "eager" : "lazy"}
          />
        </section>
      ))}

      {/* HTML文字菜单 — AI爬虫可直接抓取，无需JS执行 */}
      <section
        className="w-full max-w-4xl mx-auto px-6 py-12 text-left"
        aria-label="岽渔菜品文字菜单"
      >
        <h2 className="text-2xl font-bold text-accent mb-8 font-serif">
          菜品详情
        </h2>
        {MENU_SECTIONS.map((section) => (
          <div key={section.id} className="mb-10">
            <h3 className="text-xl font-bold text-accent/90 mb-4 font-serif border-b border-accent/20 pb-2">
              {section.name}
            </h3>
            <p className="text-sm text-gray-400 mb-4">{section.description}</p>
            <ul className="space-y-4">
              {section.items.map((item) => (
                <li key={item.name} className="border-b border-gray-700/40 pb-3">
                  <h4 className="text-lg font-serif text-white">
                    {item.name}
                    {item.price ? (
                      <span className="text-accent ml-2 text-base">
                        ¥{item.price}{item.price > 100 ? "/位" : ""}
                      </span>
                    ) : null}
                  </h4>
                  <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
                  {item.ingredients ? (
                    <p className="text-xs text-gray-500 mt-1">
                      食材：{item.ingredients}
                    </p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* 结构化数据：包房信息（供AI抓取） */}
      <section
        className="w-full max-w-4xl mx-auto px-6 py-8 text-left"
        aria-label="岽渔包房信息"
      >
        <h2 className="text-2xl font-bold text-accent mb-6 font-serif">
          包房信息
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {ROOMS.map((r) => (
            <li
              key={r.name}
              className="text-sm text-gray-300 border border-gray-700/40 rounded px-3 py-2"
            >
              <span className="text-accent font-serif">{r.name}</span>
              <span className="text-gray-500 ml-2">
                {r.min}-{r.max}人
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
