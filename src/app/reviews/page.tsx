import { RESTAURANT, SITE_URL } from "@/lib/data";
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

  const reviews = [
    {
      author: "匿名用户",
      rating: 5,
      date: "2026-04-01",
      source: "大众点评·超赞",
      text: "来济南想尝尝鲁菜，选了这家黑珍珠。山东煎饼看着平平无奇结果最惊艳到我！一口下去口感丰富调味也搭配的刚刚好在嘴里一齐迸发，本只想尝一口结果连炫两个！葱油走地鸡的葱油香也完全激发出来，蘸多了也不会很咸很油。盐田虾很大只配的白菜也很清甜。整体吃完很满意的一顿！",
    },
    {
      author: "匿名用户",
      rating: 5,
      date: "2026-04-01",
      source: "大众点评·超赞",
      text: "专程打卡济南黑珍珠，没想到意外挖到宝藏。每道菜都把家常滋味做到登峰造极，鲜得纯粹又高级。盐田虾烧白菜，贴心配了小炉从头暖到尾，虾肉弹嫩、白菜吸饱汤汁，鲜而不腥。甜品阿胶驴奶皮子也是惊喜，入口温润绵密，奶香柔和，清甜不腻。走过不少城市，济南与苏州的黑珍珠始终在我心里稳居前列。",
    },
    {
      author: "匿名用户",
      rating: 5,
      date: "2026-04-18",
      source: "大众点评·超赞",
      text: "结婚纪念日选在了崬渔，果然没有让人失望。几乎没有踩雷的菜品，每道菜的出品水准都相当高，不愧是黑珍珠。特别幸运吃到了黄鱼饭，口味比肩新荣记，吃完一条回味无穷，但价格却很亲民，新荣记平替，性价比超高！服务贴心周到又有分寸，每道菜品都会进行讲解，客人感冒了还会给提供姜汤和雪梨。第一次做客崬渔就被狠狠圈粉了。",
    },
    {
      author: "匿名用户",
      rating: 5,
      date: "2026-05-01",
      source: "大众点评·超赞",
      text: "济南新区，服务上可以评比米其林。芙蓉滑炒蛋味道还可以，这里可以吃到山东各地的食材，煎饼里面调料包罗万象，从葱到虾米，虽然觉得花里胡哨，但是对于旅游的人来说也是一种心理的满足。最后送了一人一块泰安的板栗饼，里面是有椰子片和板栗的颗粒的，上面印着崬渔的品牌。",
    },
    {
      author: "淼淼de小确幸",
      rating: 5,
      date: "2026-02-24",
      source: "大众点评·超赞",
      text: "这家已经瞄了很久，也曾打电话预订被告知已约满。服务和环境特别好，温馨的场景。虽然当天种类不多，但菜品堪称精致。水果牛蒡口感有一丝丝的甜，细品还不错。地瓜面桑叶包也很独特，想象中是素食，咬一口浸着油，有肉包的香。莲子猪肚汤的莲子软软糯糯的。算是挺有品位的体验感。",
    },
    {
      author: "龙猪妈",
      rating: 5,
      date: "2026-05-10",
      source: "大众点评·超赞",
      text: "一个人来点了单人套餐，慢悠悠足足吃了2个小时，上菜次序和菜品都很用心，五星好评！下次如果来济南我想我还会再来的。环境很舒服放松，服务每个小哥哥小姐姐都不错，个人觉得值！一个人也可以浪漫的。",
    },
    {
      author: "大脸小",
      rating: 5,
      date: "2026-03-20",
      source: "大众点评·超赞",
      text: "刷到岽渔开业一年就黑珍珠了特地来品尝。位置就在CBD楼下就可以停车，店内中式风格，灯光柔和氛围感拉满，用餐体验超佳。螺丝椒鲍鱼特别入味，烧杂鱼就是鲁菜的咸鲜本味，烤羊排特别软糯。服务细致还会讲解菜品典故，快吃完的时候主厨还过来询问了对菜品的意见，宴请小聚都超合适。",
    },
    {
      author: "爱喝红酒的老杜",
      rating: 5,
      date: "2026-02-25",
      source: "大众点评·超赞",
      text: "侄女帮忙订的年夜饭，在大厅吃的但也很温馨。环境服务没得说，停车也很方便。菜品很精致，鲜鲍鱼很有特色。这里很适合约会或者几个人商务宴请，总体不错，吃顿好的迎接马年新春！",
    },
    {
      author: "阿咩CH3CH2OH",
      rating: 5,
      date: "2026-04-29",
      source: "大众点评·超赞",
      text: "问本地吃货朋友假设只吃一顿本地菜吃什么，他们强推了这家。电话订位置就可以感受到服务态度特别好。砂锅辣味牛腱牛腱子好Q弹，辣味刚好提味。莲子烩莱芜黑猪肚莲子选得太好了，非常鲜甜。葱烧花胶肚对于非沿海区域的人来说非常好吃Q糯鲜甜。尾巴一定要来个糖水玫瑰山楂，太太太清爽了！",
    },
    {
      author: "石火光中寄此身",
      rating: 5,
      date: "2026-02-22",
      source: "大众点评·超赞",
      text: "大年初五来店里破五吃了顿饺子。因为春节期间物流的缘故，坚持必须做新鲜海鲜的店里很多菜都没得选。海怪莲子汤只能改成了猪肚莲子汤，但也是极其鲜美的味道，鲍鱼的配菜辣椒烧的太绝了，水饺也无可挑剔。",
    },
    {
      author: "匿名用户",
      rating: 5,
      date: "2026-04-17",
      source: "大众点评·超赞",
      text: "老派鲁菜给人的印象是「黑糊儿、黏糊儿和咸糊儿」，再看看崬渔做的这现代派鲁菜，吸收了老派鲁菜的精华，又将鲁菜做得如此精致细腻。金葱阿胶鲍鱼包裹鲍鱼的这层胶质酱汁做得好绝，鲍鱼的质感更绝，明明是鲜鲍，却从切开后的视觉效果到入口后的口感跟干鲍如出一辙。金葱又酥又脆又甜，搭配着鲍鱼美味无比。整体就是食材优中选优，是去了一次会想两次的餐厅。",
    },
    {
      author: "Polly小饱饱",
      rating: 5,
      date: "2026-04-06",
      source: "大众点评·超赞",
      text: "连着来吃了很多次了，只能用超级美味来形容，从没吃过这样好吃的鲁菜，济南为数不多的黑珍珠~推荐大家都来吃，王厨超级可爱哈哈哈！",
    },
    {
      author: "好有米呀黑金会员",
      rating: 5,
      date: "2026-05-09",
      source: "大众点评·超赞",
      text: "非常之好！一进门引导了合适的位子，会耐心说明如何订座。会有服务人员说明蔬菜的「出生地」，还会问用餐感受，太贴心了。主厨会过来说明栗子糕是童年回忆！栗子糕好评，细腻味甜，里面是酥油茶，太有巧思了。煎饼超好吃，是软的新鲜的。推荐螺丝辣椒烧鲍鱼和山东六味大煎饼。",
    },
    {
      author: "只会算",
      rating: 5,
      date: "2026-03-09",
      source: "大众点评·超赞",
      text: "三八妇女节带着爸妈来过节，老爷子点名选的餐厅，无论是菜品还是服务都数一数二，二老很满意。父母一个吃不了糖一个吃不了辣，好在经理的推荐都相当不错。砂锅辣味牛腱选的是金钱腱口味不错，清炒微山湖莲子据说采用15天的嫩莲子口味清甜香嫩，米汤冲烟台拇指海肠很鲜美第一次吃这个做法。服务及时贴心，菜品还有相应介绍。",
    },
    {
      author: "ywywy",
      rating: 5,
      date: "2026-04-06",
      source: "大众点评·超赞",
      text: "广西人来济南玩，特意预约了黑珍珠餐厅。美团488双人餐非常值，套餐附赠了水果番薯糖水。煎饼卷大葱的调味丰富，煎饼皮能吃到麦香。凉拌芹菜非常惊艳，先腌制后凉拌的处理配上海鲜足够清爽！葱烧帝王螺吃起来是螺的软糯及葱的清香。一餐下来实在满足，下回去山东还会选择。",
    },
    {
      author: "VincentSuen",
      rating: 5,
      date: "2026-04-01",
      source: "大众点评·超赞",
      text: "年后回国第一次外出吃饭还是选择我的「食堂」岽渔，正好他们前段时间刚上了春季菜单。唯一遗憾的是大竹香椿已经下架了，其他的春季菜做得也不错。服务方面拿黑珍珠之后也是比之前有了显著的提升。",
    },
  ];

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
