import { RESTAURANT, SITE_URL } from "@/lib/data";
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
    </>
  );
}
