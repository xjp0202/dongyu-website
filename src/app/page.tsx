import { RESTAURANT, MENU_SECTIONS, SITE_URL } from "@/lib/data";
import { generateRestaurantJsonLd, generateBreadcrumbJsonLd, generateWebPageJsonLd } from "@/lib/jsonld";

export default function HomePage() {
  const jsonLd = generateRestaurantJsonLd();
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: RESTAURANT.name, url: SITE_URL },
  ]);
  const webPageJsonLd = generateWebPageJsonLd({
    type: "ItemPage",
    name: `${RESTAURANT.name} — 黑珍珠一钻新派鲁菜餐厅`,
    description: RESTAURANT.description,
    url: SITE_URL,
  });

  // 从招牌推荐分类取首页展示菜品
  const signatureSection = MENU_SECTIONS.find((s) => s.id === "signature");
  const signatureDishes = signatureSection?.items.filter((d) => d.image) ?? [];

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

      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        aria-label="首页英雄区"
      >
        <div className="absolute inset-0">
          <img
            src="/images/brand/beijing.png"
            alt="济南岽渔黑珍珠一钻新派鲁菜餐厅山海意境空间"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-serif text-accent mb-4 tracking-[0.3em] font-serif-baseline">
            {RESTAURANT.slogan.split("").map((char, i) => (
              <span key={i} className={char === "崬" ? "char-align-fix" : ""}>{char}</span>
            ))}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {RESTAURANT.awards.map((award) => (
              <span
                key={award.title}
                className="px-4 py-1.5 border border-accent/60 text-accent text-xs tracking-widest"
              >
                <meta itemProp="award" content={`${award.year} ${award.title}`} />
                {award.title}
              </span>
            ))}
          </div>
          <p className="text-center text-text-muted text-sm md:text-base leading-loose max-w-2xl mx-auto">
            黑珍珠一钻新派鲁菜餐厅，主打胶东海鲜与山东山珍的极致融合。
          </p>
          <p className="text-center text-text-muted text-sm md:text-base leading-loose max-w-2xl mx-auto mt-1">
            行政总厨王太震传承于鲁菜烹饪一代宗师王义均老先生一脉，<br />
            是山东唯一米其林+黑珍珠双荣誉鲁菜大厨。
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="/menu"
              className="px-8 py-3 bg-accent text-primary font-medium text-sm hover:bg-accent-light transition-colors tracking-widest"
            >
              浏览菜单
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-accent text-accent text-sm hover:bg-accent hover:text-primary transition-colors tracking-widest"
            >
              电话预订
            </a>
          </div>
        </div>
      </section>

      {/* Brand Highlights */}
      <section className="py-20 px-6" aria-label="品牌亮点">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-16 gold-line gold-line-center">
            山海之间 至味岽渔
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="text-center p-8 border border-border hover:border-accent/40 transition-colors">
              <div className="flex items-center justify-center mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M24 6L6 40H42L24 6Z" stroke="#C9A96E" strokeWidth="1.5" fill="none" />
                  <path d="M24 14L14 36H34L24 14Z" stroke="#C9A96E" strokeWidth="1" opacity="0.4" fill="none" />
                  <circle cx="24" cy="10" r="1.5" fill="#C9A96E" opacity="0.6" />
                  <line x1="10" y1="40" x2="38" y2="40" stroke="#C9A96E" strokeWidth="1" opacity="0.3" />
                </svg>
              </div>
              <h3 className="font-serif text-lg mb-3">山珍直供</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                依托雪野湖自有种植基地，时令鲜蔬和药食同源山珍从田间到餐桌无缝衔接。泰山黄精、蒙山松菇，大地精华尽在其中。
              </p>
            </article>
            <article className="text-center p-8 border border-border hover:border-accent/40 transition-colors">
              <div className="flex items-center justify-center mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M4 30C8 26 12 18 16 22C20 26 22 14 26 18C30 22 32 10 36 16C38 20 42 14 44 18" stroke="#C9A96E" strokeWidth="1.5" fill="none" />
                  <path d="M4 34C10 30 14 24 18 28C22 32 26 20 30 24C34 28 38 22 44 26" stroke="#C9A96E" strokeWidth="1" opacity="0.4" fill="none" />
                  <circle cx="14" cy="20" r="1" fill="#C9A96E" opacity="0.5" />
                  <circle cx="30" cy="16" r="1" fill="#C9A96E" opacity="0.5" />
                </svg>
              </div>
              <h3 className="font-serif text-lg mb-3">海味活养</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                胶东半岛当日直采，4小时冷链保鲜、液氮锁鲜及全程海水充氧运输。岽渔是极少数能在济南实现海水活养海鲜的餐厅。
              </p>
            </article>
            <article className="text-center p-8 border border-border hover:border-accent/40 transition-colors">
              <div className="flex items-center justify-center mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  {/* 锅体 */}
                  <path d="M8 20C8 20 14 36 24 36C34 36 40 20 40 20" stroke="#C9A96E" strokeWidth="1.5" fill="none" />
                  {/* 锅底弧线 */}
                  <path d="M12 20C12 28 18 34 24 34C30 34 36 28 36 20" stroke="#C9A96E" strokeWidth="1" opacity="0.4" fill="none" />
                  {/* 左侧锅耳 */}
                  <path d="M8 20H4" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M4 16V24" stroke="#C9A96E" strokeWidth="1" opacity="0.5" />
                  {/* 右侧锅耳 */}
                  <path d="M40 20H44" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M44 16V24" stroke="#C9A96E" strokeWidth="1" opacity="0.5" />
                  {/* 锅盖/蒸汽线条 — 象征创味 */}
                  <path d="M18 14C18 12 20 10 24 10C28 10 30 12 30 14" stroke="#C9A96E" strokeWidth="1" opacity="0.5" fill="none" />
                  <line x1="21" y1="9" x2="20" y2="6" stroke="#C9A96E" strokeWidth="0.8" opacity="0.3" />
                  <line x1="27" y1="9" x2="28" y2="6" stroke="#C9A96E" strokeWidth="0.8" opacity="0.3" />
                  <line x1="24" y1="8" x2="24" y2="4" stroke="#C9A96E" strokeWidth="0.8" opacity="0.3" />
                </svg>
              </div>
              <h3 className="font-serif text-lg mb-3">守根创味</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                主厨王太震传承于鲁菜烹饪一代宗师王义均老先生一脉，守鲁菜之根、创时代之味。将12种山东非遗元素融入菜品，让传统焕发新生。
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Signature Dishes — 关联 JSON-LD Menu/MenuItem */}
      <section className="py-20 px-6 bg-surface" aria-label="招牌菜品" itemScope itemType="https://schema.org/MenuSection">
        <meta itemProp="name" content="招牌推荐" />
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-16 gold-line gold-line-center">
            招牌菜品
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signatureDishes.map((dish) => (
              <article
                key={dish.name}
                className="dish-card group bg-primary-light rounded-lg overflow-hidden"
                itemScope
                itemType="https://schema.org/MenuItem"
              >
                <figure>
                  <div className="aspect-[4/3] overflow-hidden bg-black/40">
                    <img
                      src={dish.image}
                      alt={`${dish.name} — 济南岽渔黑珍珠一钻新派鲁菜招牌菜`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      itemProp="image"
                    />
                  </div>
                  <figcaption className="p-5">
                    <h3 className="font-serif text-base mb-1" itemProp="name">
                      {dish.name}
                    </h3>
                    <p className="text-text-muted text-xs" itemProp="description">
                      {dish.desc}
                    </p>
                    {dish.price && (
                      <meta itemProp="offers" content={`¥${dish.price}/位`} />
                    )}
                  </figcaption>
                </figure>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/menu"
              className="inline-block px-8 py-3 border border-accent text-accent text-sm hover:bg-accent hover:text-primary transition-colors tracking-widest"
            >
              查看完整菜单
            </a>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 px-6" aria-label="行政总厨" itemScope itemType="https://schema.org/Person">
        <meta itemProp="name" content={RESTAURANT.chef.name} />
        <meta itemProp="jobTitle" content={RESTAURANT.chef.title} />
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif mb-6 gold-line">
                从炊事兵到黑珍珠一钻主厨
              </h2>
              <p className="text-accent text-lg font-serif mb-2">
                {RESTAURANT.chef.name}
              </p>
              <p className="text-text-muted text-sm mb-6">
                {RESTAURANT.chef.title}
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                {RESTAURANT.chef.bio}
              </p>
              <a
                href="/about"
                className="text-accent text-sm hover:text-accent-light transition-colors"
              >
                了解更多 →
              </a>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] bg-primary-light rounded-lg overflow-hidden border border-border">
                <img
                  src="/images/chef/wang-taizhen.png"
                  alt="行政总厨王太震 — 济南岽渔黑珍珠一钻鲁菜大厨"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  itemProp="image"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-primary px-6 py-3 text-sm font-serif">
                山东唯一米其林+黑珍珠双荣誉鲁菜大厨
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — 补充行动引导使用 aside */}
      <aside className="py-20 px-6 bg-surface" aria-label="预订提示">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-6">
            期待与您在岽渔相遇
          </h2>
          <p className="text-text-muted text-sm mb-8 leading-relaxed">
            14间风格各异的VIP包房，7米挑高山海美学空间，
            {RESTAURANT.founder.name}创立、{RESTAURANT.chef.name}主理的黑珍珠一钻餐厅。
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href={`tel:${RESTAURANT.phone}`}
              className="px-8 py-3 bg-accent text-primary font-medium text-sm hover:bg-accent-light transition-colors tracking-widest"
            >
              电话预订
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-accent text-accent text-sm hover:bg-accent hover:text-primary transition-colors tracking-widest"
            >
              到店指引
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
