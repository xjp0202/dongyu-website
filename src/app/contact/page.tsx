import { RESTAURANT, ROOMS, SITE_URL } from "@/lib/data";
import { generateRestaurantJsonLd, generateBreadcrumbJsonLd, generateWebPageJsonLd } from "@/lib/jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系与预订",
  description:
    "济南岽渔餐厅地址、电话、包房预订、停车指引。位于济南CBD平安金融中心悦坊商场4层，电话0531-88902988。",
  alternates: {
    canonical: "https://dongyu.com/contact",
  },
  openGraph: {
    title: "联系与预订 — 济南岽渔",
    description:
      "济南岽渔餐厅地址、电话、包房预订、停车指引。位于济南CBD平安金融中心悦坊商场4层，电话0531-88902988。",
    url: "https://dongyu.com/contact",
    images: [{ url: "/images/space/hall.png", width: 800, height: 600 }],
  },
};

export default function ContactPage() {
  const jsonLd = generateRestaurantJsonLd();
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: RESTAURANT.name, url: SITE_URL },
    { name: "联系与预订", url: `${SITE_URL}/contact` },
  ]);
  const webPageJsonLd = generateWebPageJsonLd({
    name: "联系与预订",
    description: "济南岽渔餐厅地址、电话、包房预订、停车指引。位于济南CBD平安金融中心悦坊商场4层，电话0531-88902988。",
    url: `${SITE_URL}/contact`,
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
        aria-label="联系岽渔"
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
          <h1 className="text-3xl md:text-5xl font-serif mb-4">
            联系与预订
          </h1>
          <p className="text-accent tracking-[0.3em] text-lg font-serif">
            期待与您相遇
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-6" aria-label="联系方式" itemScope itemType="https://schema.org/Restaurant">
        <meta itemProp="name" content={RESTAURANT.name} />
        <meta itemProp="telephone" content={RESTAURANT.phone} />
        <meta itemProp="servesCuisine" content={RESTAURANT.cuisine.join("、")} />
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Contact Details */}
            <div>
              <h2 className="text-2xl font-serif mb-8 gold-line">
                餐厅信息
              </h2>
              <address className="not-italic space-y-6" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <meta itemProp="addressCountry" content={RESTAURANT.address.country} />
                <meta itemProp="addressRegion" content={RESTAURANT.address.region} />
                <meta itemProp="addressLocality" content={RESTAURANT.address.locality} />
                <meta itemProp="postalCode" content={RESTAURANT.address.postalCode} />
                <div>
                  <h3 className="text-accent text-sm mb-1 tracking-widest">
                    地址
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed" itemProp="streetAddress">
                    {RESTAURANT.address.full}
                  </p>
                </div>
                <div>
                  <h3 className="text-accent text-sm mb-1 tracking-widest">
                    预订电话
                  </h3>
                  <a
                    href={`tel:${RESTAURANT.phone}`}
                    className="text-text text-2xl font-serif hover:text-accent transition-colors"
                  >
                    {RESTAURANT.phone}
                  </a>
                </div>
                <div>
                  <h3 className="text-accent text-sm mb-1 tracking-widest">
                    营业时间
                  </h3>
                  <div className="text-text-muted text-sm space-y-1">
                    {RESTAURANT.openingHours.map((h) => (
                      <p key={h.label}>
                        <time>{h.label}</time> {h.time}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-accent text-sm mb-1 tracking-widest">
                    在线预订
                  </h3>
                  <p className="text-text-muted text-sm mb-3">
                    关注微信公众号「济南岽渔」或美团搜索「岽渔」在线预订
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={`tel:${RESTAURANT.phone}`}
                      className="px-6 py-2.5 bg-accent text-primary text-sm hover:bg-accent-light transition-colors"
                    >
                      电话预订
                    </a>
                  </div>
                </div>
              </address>
            </div>

            {/* Right: Map / Space Image */}
            <div>
              <h2 className="text-2xl font-serif mb-8 gold-line">
                空间概览
              </h2>
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-border">
                <img
                  src="/images/space/hall.png"
                  alt="岽渔大厅空间"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-text-muted text-xs mt-3 text-center">
                岽渔餐厅 · 山海美学空间 · 超过2000㎡
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parking Guide — 辅助信息使用 aside */}
      <aside className="py-20 px-6 bg-surface" aria-label="停车指引">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-serif mb-8 gold-line">停车指引</h2>
          <div className="p-8 border border-border">
            <div className="space-y-4 text-text-muted text-sm leading-relaxed">
              <p>
                <strong className="text-text">停车信息：</strong>
                驾驶车辆至平安金融中心南门，由南门西侧进入地下停车库行至B2层左拐直走。
              </p>
              <p>
                <strong className="text-accent">提供3小时免费停车电子券</strong>
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-accent text-sm mb-3 tracking-widest">
                温馨提示
              </p>
              <ol className="text-text-muted text-sm space-y-2 list-decimal list-inside">
                <li>
                  为了您与所有贵宾共享优雅用餐环境，敬请贵宾穿著合适服饰
                </li>
                <li>
                  如有小童用餐，避免小童独行奔跑，请在家长的带领安全前行，共同维护安静优雅的用餐氛围
                </li>
              </ol>
            </div>
          </div>
        </div>
      </aside>

      {/* Private Rooms */}
      <section className="py-20 px-6" aria-label="包房信息">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-serif mb-3 gold-line">
            14间VIP包房
          </h2>
          <p className="text-text-muted text-sm mb-10">
            风格各异的私密空间，从4人小聚到20人宴请
          </p>
          <table className="w-full border-collapse">
            <caption className="sr-only">岽渔VIP包房一览</caption>
            <thead>
              <tr className="border-b border-accent/30">
                <th className="py-3 px-4 text-left font-serif text-sm text-accent tracking-widest">包房名称</th>
                <th className="py-3 px-4 text-left font-serif text-sm text-accent tracking-widest">容纳人数</th>
              </tr>
            </thead>
            <tbody>
              {ROOMS.map((room) => (
                <tr
                  key={room.name}
                  className="border-b border-border/50 hover:bg-accent/5 transition-colors"
                >
                  <td className="py-3 px-4 font-serif text-sm">{room.name}</td>
                  <td className="py-3 px-4 text-text-muted text-sm">
                    {room.min}–{room.max}人
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Space Features */}
      <section className="py-20 px-6 bg-surface" aria-label="空间特色">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-serif mb-12 gold-line">
            空间特色
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Martini露台酒吧",
                desc: "360观景台，济南CBD天际线尽收眼底",
              },
              {
                name: "户外花园",
                desc: "1200㎡城市绿洲，自然与建筑交融",
              },
              {
                name: "雪茄吧·红酒区",
                desc: "餐后专属社交空间，雪茄与红酒的优雅对白",
              },
            ].map((s) => (
              <article
                key={s.name}
                className="p-6 border border-border hover:border-accent/30 transition-colors"
              >
                <h3 className="font-serif text-base mb-2">{s.name}</h3>
                <p className="text-text-muted text-sm">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
