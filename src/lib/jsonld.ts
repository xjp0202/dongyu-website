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
      ratingValue: "4.8",
      reviewCount: "326",
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
      ratingValue: "4.8",
      reviewCount: "326",
      bestRating: "5",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "美食爱好者" },
        datePublished: "2025-12-15",
        reviewBody:
          "黑珍珠一钻实至名归，活海参的口感完全颠覆认知，芙蓉滑炒蟹必点！环境山海意境，7米挑高太震撼了。",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "鲁菜达人" },
        datePublished: "2025-11-20",
        reviewBody:
          "在济南CBD能吃到这样的鲁菜，非常惊喜。阿胶鲍鱼的创新做法让人印象深刻，包间服务也很细致。六味大煎饼仪式感十足。",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "商务宴请常客" },
        datePublished: "2025-10-08",
        reviewBody:
          "环境大气，山海意境的空间设计很适合商务接待。菜品精致，客户都非常满意。停车方便，3小时免费。",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "海鲜控" },
        datePublished: "2025-09-12",
        reviewBody:
          "胶东四大拌绝了，活海参和拇指海肠的品质明显比其他店高出一个档次。听说他们家能海水活养海鲜，难怪这么鲜甜。",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "济南土著" },
        datePublished: "2025-08-25",
        reviewBody:
          "作为济南人，终于有一家能代表鲁菜水准的黑珍珠了。九蒸牛蒡烧驴蹄筒很特别，砂锅海胆豆腐暖胃。期待更多创新。",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "4",
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
