import { RESTAURANT, SITE_URL } from "@/lib/data";
import { generateRestaurantJsonLd, generateBreadcrumbJsonLd, generateWebPageJsonLd } from "@/lib/jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于岽渔",
  description:
    "济南岽渔品牌故事、创始人王启龙与行政总厨王太震的传奇经历。从鲁菜泰斗王义均一脉传承到黑珍珠一钻新派鲁菜餐厅。",
  alternates: {
    canonical: "https://dongyu.com/about",
  },
  openGraph: {
    title: "关于岽渔 — 品牌故事与传奇主厨",
    description:
      "济南岽渔品牌故事、创始人王启龙与行政总厨王太震的传奇经历。从鲁菜泰斗王义均一脉传承到黑珍珠一钻新派鲁菜餐厅。",
    url: "https://dongyu.com/about",
    images: [{ url: "/images/brand/beijing.png", width: 1486, height: 780 }],
  },
};

export default function AboutPage() {
  const jsonLd = generateRestaurantJsonLd();
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: RESTAURANT.name, url: SITE_URL },
    { name: "关于", url: `${SITE_URL}/about` },
  ]);
  const webPageJsonLd = generateWebPageJsonLd({
    type: "AboutPage",
    name: "关于岽渔",
    description: "济南岽渔品牌故事、创始人王启龙与行政总厨王太震的传奇经历。从鲁菜泰斗王义均一脉传承到黑珍珠一钻新派鲁菜餐厅。",
    url: `${SITE_URL}/about`,
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
        aria-label="关于岽渔"
      >
        <div className="absolute inset-0">
          <img
            src="/images/brand/beijing.png"
            alt="岽渔餐厅"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-serif mb-4">
            关于岽渔
          </h1>
          <p className="text-accent tracking-[0.3em] text-lg font-serif font-serif-baseline">
            {"味从山海 始初崬渔".split("").map((char, i) => (
              <span key={i} className={char === "崬" ? "char-align-fix" : ""}>{char}</span>
            ))}
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-6" aria-label="品牌故事">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif mb-8 gold-line">
            品牌故事
          </h2>
          <div className="space-y-6 text-text-muted leading-relaxed">
            <p>
              「济南岽渔」，有些资料里也写作「崬渔」。它更像一间专注于新派鲁菜的高级餐厅，尤其在展现胶东海鲜的独特魅力上备受认可。
            </p>
            <p>
              岽渔以美食为载体，传播和发扬中国文化为己任。坚持以「探索人类美好体验的更多可能性」为精神指引，从餐饮这个基本点出发，探索无界的味与美。
            </p>
            <p>
              岽渔品牌一直在思考人与餐饮的本质关系，探索可以实现的美好体验。在风味美物的搜寻中，在烹饪技法的创新中，在跨界交流的融合中，我们尝试注入文化属性，提升品味格调和多元体验，完成贴心和舒适的服务，开启和引领美好的生活方式。
            </p>
            <p>
              追逐人类的想象力，感受时代对于体验的推动力。我们期待与用户对于「创新体验」和「探索未来」的期待达成一致，始终追求一种情理之中、意料之外的惊喜。
            </p>
          </div>

          <aside className="mt-12 p-8 border border-accent/30 bg-accent/5">
            <h3 className="text-accent font-serif text-lg mb-4">企业发展目标</h3>
            <ol className="list-decimal list-inside text-text-muted space-y-2">
              <li>打造鲁菜第一品牌</li>
              <li>山东第一家米其林品牌</li>
              <li>成为好客山东、好品山东的对外展示窗口</li>
            </ol>
          </aside>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 px-6 bg-surface" aria-label="创始人" itemScope itemType="https://schema.org/Person">
        <meta itemProp="name" content={RESTAURANT.founder.name} />
        <meta itemProp="jobTitle" content={RESTAURANT.founder.title} />
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif mb-8 gold-line">
            品牌创始人
          </h2>
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
            <div>
              <p className="text-accent text-2xl font-serif">
                {RESTAURANT.founder.name}
              </p>
              <p className="text-text-muted text-sm mt-1">
                {RESTAURANT.founder.title}
              </p>
            </div>
            <div className="text-text-muted leading-relaxed space-y-4">
              <p itemProp="description">{RESTAURANT.founder.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef */}
      <section className="py-20 px-6" aria-label="行政总厨" itemScope itemType="https://schema.org/Person">
        <meta itemProp="name" content={RESTAURANT.chef.name} />
        <meta itemProp="jobTitle" content={RESTAURANT.chef.title} />
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif mb-8 gold-line">
            行政总厨
          </h2>
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
            <div>
              <div className="aspect-[2/3] rounded-lg overflow-hidden border border-border mb-4">
                <img
                  src="/images/chef/wang-taizhen.png"
                  alt="行政总厨王太震 — 济南岽渔黑珍珠一钻鲁菜大厨"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  itemProp="image"
                />
              </div>
              <p className="text-accent text-2xl font-serif">
                {RESTAURANT.chef.name}
              </p>
              <p className="text-text-muted text-sm mt-1">
                {RESTAURANT.chef.title}
              </p>
              <div className="mt-4 space-y-1 text-xs text-text-muted">
                <p itemProp="award">🏛️ 2020 黑珍珠一钻</p>
                <p itemProp="award">🏛️ 2021-2022 黑珍珠二钻</p>
                <p itemProp="award">🏛️ 2023-2024 米其林一星</p>
                <p itemProp="award">🏆 2025 年度京鲁菜餐厅</p>
                <p itemProp="award">🎯 2025 米其林食遇美食快闪特邀商户</p>
                <p itemProp="award">📋 金葱阿胶鲍鱼<br/>列入《济南名菜名录》</p>
                <p itemProp="award">🏅 中国烹饪大赛金奖</p>
                <p itemProp="award">🏅 中国烹饪厨师节金厨奖</p>
              </div>
            </div>
            <div className="text-text-muted leading-relaxed space-y-4">
              <p>{RESTAURANT.chef.bio}</p>
              <p>
                其作品多次在《中国烹饪》《东方美食》《中国大厨》《餐饮世界》《中国食品》等专业杂志刊登。传承于鲁菜烹饪一代宗师王义均老先生一脉，师承高速建先生。基础扎实，思维活跃，尤其擅长在传统基础之上的创新，致力于按不同季节创作出不同的时令菜式，让食客从味蕾中领略到儒家美食的精髓和田园风味的魅力。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eight Techniques */}
      <section className="py-20 px-6 bg-surface" aria-label="岽渔八奇技">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif mb-8 gold-line">
            岽渔八奇技
          </h2>
          <p className="text-text-muted leading-relaxed mb-8">
            鲁菜是八大菜系之首，其瑰宝就是奠定中餐基础的烹饪技法。岽渔将传统烹饪技法中的
            <strong className="text-accent">
              烧、溜、酥、焖、炝、汆、卤、熏
            </strong>
            等技法进行了升级，独创了「岽渔八奇技」。
          </p>
          <p className="text-text-muted leading-relaxed">
            岽渔广泛使用世界各地品质食材，用传统的鲁菜烹饪技法进行烹调，亦借鉴其他菜系的技法和味型对传统鲁菜的味型进行创新，打造一个全新的鲁菜品牌。岽渔研发团队走遍山东的16地市，深挖齐鲁大地的优质食材和饮食文化，从群众中寻找创作灵感。和渔民不经意的闲聊中，把传统葱烧海参的入味难提升到新的高度。受街边驴肉小贩的启发，将阿胶和鲍鱼做到了完美的结合。
          </p>
        </div>
      </section>

      {/* Designer */}
      <section className="py-20 px-6" aria-label="空间设计">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif mb-8 gold-line">
            山海美学空间
          </h2>
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
            <div>
              <p className="text-accent text-2xl font-serif">
                {RESTAURANT.designer.name}
              </p>
              <p className="text-text-muted text-sm mt-1">
                {RESTAURANT.designer.title} · {RESTAURANT.designer.firm}
              </p>
            </div>
            <div className="text-text-muted leading-relaxed">
              <p>{RESTAURANT.designer.concept}</p>
              <p className="mt-4">
                餐厅位于济南CBD核心区平安金融中心悦坊商场4层，整体使用面积超过2000㎡，由室内和户外两部分组成，包含14间风格各异的VIP包房、Martini露台酒吧、户外花园、360观景台、雪茄吧和红酒展示区。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
