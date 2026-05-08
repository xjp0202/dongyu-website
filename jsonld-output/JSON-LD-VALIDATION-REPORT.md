# 岽渔官网 JSON-LD 验证报告

## 1. 构建验证

| 项目 | 状态 |
|------|------|
| `npm run build` | ✅ 通过 (Next.js 16.2.5 Turbopack) |
| TypeScript 编译 | ✅ 无错误 |
| 静态页面生成 | ✅ 12/12 页面生成成功 |

## 2. 各页面 JSON-LD 注入状态

| 页面 | Organization | WebSite | 页面专属 JSON-LD | BreadcrumbList | WebPage | Canonical |
|------|:---:|:---:|------|:---:|:---:|:---:|
| `/` (首页) | ✅ 全局 | ✅ 全局 | Restaurant+LocalBusiness | ✅ | ItemPage ✅ | ✅ |
| `/about` | ✅ 全局 | ✅ 全局 | Restaurant+LocalBusiness | ✅ | AboutPage ✅ | ✅ |
| `/menu` | ✅ 全局 | ✅ 全局 | Menu+MenuItem | ✅ | WebPage ✅ | ✅ |
| `/reviews` | ✅ 全局 | ✅ 全局 | Restaurant+Review(5条)+AggregateRating | ✅ | WebPage ✅ | ✅ |
| `/faq` | ✅ 全局 | ✅ 全局 | FAQPage(10个Q&A) | ✅ | FAQPage ✅ | ✅ |
| `/contact` | ✅ 全局 | ✅ 全局 | Restaurant+LocalBusiness | ✅ | WebPage ✅ | ✅ |

## 3. 结构化数据详细验证

### 3.1 Restaurant JSON-LD（首页/about/contact）
- ✅ `@type: ["Restaurant", "LocalBusiness"]` 双类型
- ✅ `name` / `alternateName` / `description` / `url` / `telephone`
- ✅ `priceRange: "¥¥¥¥"`
- ✅ `servesCuisine: ["鲁菜", "新派鲁菜", "胶东海鲜"]`
- ✅ `foundingDate: "2024"` / `acceptsReservations: true`
- ✅ `address` → `PostalAddress` 完整（streetAddress/addressLocality/addressRegion/postalCode/addressCountry）
- ✅ `geo` → `GeoCoordinates` (latitude: "36.658", longitude: "117.028")
- ✅ `openingHoursSpecification` → 2个 `OpeningHoursSpecification`（午餐/晚餐，7天）
- ✅ `aggregateRating` → `AggregateRating` (ratingValue: "4.8", reviewCount: "326", bestRating: "5")
- ✅ `award` → 数组格式（6个奖项）
- ✅ `founder` → `Person` (name: "王启龙", jobTitle: "品牌创始人")
- ✅ `employee` → `Person` (name: "王太震", jobTitle: "行政总厨")
- ✅ `hasMenu` → `Menu` (@id: "https://dongyu.com/menu#menu")
- ✅ `image` → `ImageObject` (url/width/height)
- ✅ `photo` → `ImageObject` (url/width/height)

### 3.2 Menu JSON-LD（/menu）
- ✅ `@type: "Menu"` + `hasMenuSection` 完整
- ✅ 每个 `MenuSection` 包含 `hasMenuItem`
- ✅ `MenuItem` 包含 name/description/offers/image

### 3.3 Reviews JSON-LD（/reviews）
- ✅ `@type: "Restaurant"` + `aggregateRating` + `review` 数组
- ✅ 5条评价，每条包含 author/datePublished/reviewBody/reviewRating
- ✅ `AggregateRating` (ratingValue: "4.8", reviewCount: "326", bestRating: "5")

### 3.4 FAQ JSON-LD（/faq）
- ✅ `@type: "FAQPage"` + `mainEntity` 数组
- ✅ 10个 Question + Answer 对
- ✅ `stripMarkup()` 清理了 **加粗** 和换行标记

### 3.5 Organization JSON-LD（全局）
- ✅ `@type: "Organization"` + name/alternateName/url/logo/description/telephone/foundingDate/address/founder/sameAs

### 3.6 WebSite JSON-LD（全局）
- ✅ `@type: "WebSite"` + name/alternateName/url/description/inLanguage:"zh-CN"/publisher

### 3.7 WebPage JSON-LD（每页）
- ✅ 每页 `dateModified: "YYYY-MM-DD"` 格式
- ✅ 首页 `@type: "ItemPage"` / 关于页 `AboutPage` / FAQ页 `FAQPage`
- ✅ `isPartOf` → WebSite 引用
- ✅ 内嵌 `breadcrumb` → BreadcrumbList

## 4. Microdata 验证

| 位置 | 标注 | 状态 |
|------|------|:---:|
| 首页 Hero awards | `<meta itemProp="award">` | ✅ |
| 首页主厨照 | `itemProp="image"` | ✅ |
| 关于页创始人 | `itemScope itemType="Person"` | ✅ |
| 关于页主厨照 | `itemProp="image"` | ✅ |
| 关于页主厨荣誉 | `itemProp="award"` (8条) | ✅ |
| 评价页 AggregateRating | `itemScope itemType="AggregateRating"` | ✅ |
| 评价页每条 Review | `itemScope itemType="Review"` | ✅ |
| 联系页 Restaurant 容器 | `itemScope itemType="Restaurant"` | ✅ |
| 联系页 PostalAddress | `itemProp="address" itemScope` | ✅ |
| FAQ页 FAQPage | `itemScope itemType="FAQPage"` | ✅ |
| FAQ页 Question/Answer | `itemProp="mainEntity"` / `itemProp="acceptedAnswer"` | ✅ |

## 5. Google Rich Results Test 验证指南

### 方式一：在线验证（需要部署后）
1. 访问 https://search.google.com/test/rich-results
2. 输入已部署的页面 URL
3. 点击「测试 URL」

### 方式二：代码片段验证（本地即可）
1. 访问 https://search.google.com/test/rich-results
2. 切换到「CODE」标签
3. 复制 `/jsonld-output/` 目录下对应页面的 JSON-LD 内容
4. 粘贴并点击「测试代码」

### 重点验证项
- 首页：Restaurant 富媒体搜索结果
- /menu：Menu 富媒体搜索结果
- /reviews：Review 富媒体搜索结果
- /faq：FAQ 富媒体搜索结果（最容易出 Rich Results）

## 6. JSON-LD 提取文件位置

```
dongyu-website/jsonld-output/
├── jsonld-homepage.json    # 首页 5 个 JSON-LD Block
├── jsonld-about.json       # 关于页 5 个 JSON-LD Block
├── jsonld-menu.json        # 菜单页 5 个 JSON-LD Block
├── jsonld-reviews.json     # 评价页 5 个 JSON-LD Block
├── jsonld-faq.json         # FAQ页 5 个 JSON-LD Block
└── jsonld-contact.json     # 联系页 5 个 JSON-LD Block
```
