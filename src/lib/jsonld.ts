import { RESTAURANT, SITE_URL, MENU_SECTIONS, FAQ_ITEMS } from "./data";

// 首页 JSON-LD: Restaurant + LocalBusiness
export function generateRestaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    name: RESTAURANT.name,
    alternateName: RESTAURANT.alternateName,
    description: RESTAURANT.description,
    url: SITE_URL,
    telephone: RESTAURANT.phone,
    priceRange: RESTAURANT.priceRange,
    servesCuisine: RESTAURANT.cuisine,
    foundingDate: RESTAURANT.foundingYear,
    acceptsReservations: true,
    address: {
      "@type": "PostalAddress",
      streetAddress: RESTAURANT.address.street,
      addressLocality: RESTAURANT.address.locality,
      addressRegion: RESTAURANT.address.region,
      postalCode: RESTAURANT.address.postalCode,
      addressCountry: RESTAURANT.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.658",
      longitude: "117.028",
    },
    openingHoursSpecification: RESTAURANT.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      description: h.label,
      opens: h.time.split("-")[0],
      closes: h.time.split("-")[1],
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1108",
      bestRating: "5",
    },
    starRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    award: RESTAURANT.awards.map((a) => `${a.year} ${a.title}`),
    founder: {
      "@type": "Person",
      name: RESTAURANT.founder.name,
      jobTitle: RESTAURANT.founder.title,
    },
    employee: {
      "@type": "Person",
      name: RESTAURANT.chef.name,
      jobTitle: RESTAURANT.chef.title,
    },
    hasMenu: {
      "@type": "Menu",
      "@id": `${SITE_URL}/menu#menu`,
    },
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/brand/beijing.png`,
      width: 1486,
      height: 780,
    },
    photo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/space/hall.png`,
      width: 800,
      height: 600,
    },
    potentialAction: {
      "@type": "ReserveAction",
      name: "电话预订",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `tel:${RESTAURANT.phone}`,
        actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
      },
      result: {
        "@type": "Reservation",
        name: "济南岽渔预订",
      },
    },
  };
}

// 菜单页 JSON-LD: Menu + MenuItem
export function generateMenuJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "岽渔菜单",
    description: "济南岽渔黑珍珠一钻新派鲁菜餐厅菜单",
    url: `${SITE_URL}/menu`,
    hasMenuSection: MENU_SECTIONS.map((section) => ({
      "@type": "MenuSection",
      name: section.name,
      description: section.description,
      hasMenuItem: section.items.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.desc,
        ...(item.price && {
          offers: {
            "@type": "Offer",
            price: item.price,
            priceCurrency: "CNY",
          },
        }),
        ...(item.image && { image: `${SITE_URL}${item.image}` }),
      })),
    })),
  };
}

// 评价页 JSON-LD: Review + AggregateRating
export function generateReviewsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: RESTAURANT.name,
    url: SITE_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1108",
      bestRating: "5",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "匿名用户" },
        datePublished: "2026-04-18",
        reviewBody:
          "结婚纪念日选在了崬渔，果然没有让人失望。几乎没有踩雷的菜品，每道菜的出品水准都相当高，不愧是黑珍珠。特别幸运吃到了黄鱼饭，口味比肩新荣记，价格却很亲民，性价比超高！服务贴心周到又有分寸，客人感冒了还会给提供姜汤和雪梨。第一次做客崬渔就被狠狠圈粉了。",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "匿名用户" },
        datePublished: "2026-04-17",
        reviewBody:
          "老派鲁菜给人的印象是「黑糊儿、黏糊儿和咸糊儿」，再看看崬渔做的这现代派鲁菜，吸收了老派鲁菜的精华，又将鲁菜做得如此精致细腻。金葱阿胶鲍鱼包裹鲍鱼的这层胶质酱汁做得好绝，明明是鲜鲍，却跟干鲍如出一辙。整体食材优中选优，是去了一次会想两次的餐厅。",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "大脸小" },
        datePublished: "2026-03-20",
        reviewBody:
          "刷到岽渔开业一年就黑珍珠了特地来品尝。位置就在CBD，灯光柔和氛围感拉满。螺丝椒鲍鱼特别入味，烧杂鱼就是鲁菜的咸鲜本味，烤羊排特别软糯。服务细致还会讲解菜品典故，主厨还过来询问对菜品的意见，宴请小聚都超合适。",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "阿咩CH3CH2OH" },
        datePublished: "2026-04-29",
        reviewBody:
          "问本地吃货朋友只吃一顿本地菜吃什么，他们强推了这家。砂锅辣味牛腱好Q弹，莲子烩莱芜黑猪肚莲子选得太好了非常鲜甜，葱烧花胶肚Q糯鲜甜。糖水玫瑰山楂太太太清爽了！",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "ywywy" },
        datePublished: "2026-04-06",
        reviewBody:
          "特意预约了黑珍珠餐厅，美团488双人餐非常值。煎饼卷大葱的调味丰富，煎饼皮能吃到麦香。凉拌芹菜非常惊艳，先腌制后凉拌配上海鲜足够清爽！葱烧帝王螺吃起来是螺的软糯及葱的清香。一餐下来实在满足，下回去山东还会选择。",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
  };
}

// 面包屑导航 JSON-LD: BreadcrumbList
export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// 网站 JSON-LD: WebSite（全局注入，声明站点整体身份）
export function generateWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: RESTAURANT.name,
    alternateName: RESTAURANT.alternateName,
    url: SITE_URL,
    description: RESTAURANT.description,
    inLanguage: "zh-CN",
    publisher: {
      "@type": "Organization",
      name: RESTAURANT.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/brand/logo.png`,
      },
    },
  };
}

// 组织 JSON-LD: Organization（全局注入）
export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: RESTAURANT.name,
    alternateName: RESTAURANT.alternateName,
    url: SITE_URL,
    logo: `${SITE_URL}/images/brand/logo.png`,
    description: RESTAURANT.description,
    telephone: RESTAURANT.phone,
    foundingDate: RESTAURANT.foundingYear,
    address: {
      "@type": "PostalAddress",
      streetAddress: RESTAURANT.address.street,
      addressLocality: RESTAURANT.address.locality,
      addressRegion: RESTAURANT.address.region,
      postalCode: RESTAURANT.address.postalCode,
      addressCountry: RESTAURANT.address.country,
    },
    founder: {
      "@type": "Person",
      name: RESTAURANT.founder.name,
      jobTitle: RESTAURANT.founder.title,
    },
    sameAs: [],
  };
}

// 页面 JSON-L-D: WebPage / ItemPage / AboutPage 等
export function generateWebPageJsonLd(options: {
  type?: string;
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": options.type || "WebPage",
    name: options.name,
    description: options.description,
    url: options.url,
    dateModified: new Date().toISOString().split("T")[0],
    isPartOf: {
      "@type": "WebSite",
      name: RESTAURANT.name,
      url: SITE_URL,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: RESTAURANT.name,
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: options.name,
          item: options.url,
        },
      ],
    },
  };
}

// FAQ页 JSON-LD: FAQPage
// answer 中的 **加粗** 和 \n 标记需清理为纯文本，符合 Schema.org 规范
function stripMarkup(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1") // 去掉 **加粗** 标记
    .replace(/\n\n/g, " ") // 段落合并
    .replace(/\n/g, " ") // 换行合并
    .replace(/\s+/g, " ") // 多空格合并
    .trim();
}

export function generateFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripMarkup(item.answer),
      },
    })),
  };
}
