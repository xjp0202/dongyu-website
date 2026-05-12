/**
 * GET /llms.txt — AI 爬虫友好的网站内容摘要
 * 使用 Route Handler 动态输出，确保 UTF-8 Content-Type 正确
 */
import { NextRequest, NextResponse } from "next/server";
import { RESTAURANT, SITE_URL, MENU_SECTIONS, FAQ_ITEMS, ROOMS } from "@/lib/data";

function generateLite(): string {
  const menuText = MENU_SECTIONS.map((section) => {
    const items = section.items
      .map((item) => {
        let line = `- **${item.name}**`;
        if (item.price && item.price > 0) line += ` ¥${item.price}/位`;
        line += `：${item.desc}`;
        if (item.ingredients) line += `\n  - 食材：${item.ingredients}`;
        return line;
      })
      .join("\n");
    return `### ${section.name}\n${items}`;
  }).join("\n\n");

  const roomsText = ROOMS.map(
    (r) => `- **${r.name}**：${r.min}-${r.max}人`
  ).join("\n");

  const faqText = FAQ_ITEMS.map(
    (f) => `**Q：${f.question}**\nA：${f.answer.replace(/\n\n/g, " ").replace(/\n/g, " ").replace(/\*\*([^*]+)\*\*/g, "$1")}`
  ).join("\n\n");

  return `# ${RESTAURANT.name} — ${RESTAURANT.awards[0].title}新派鲁菜餐厅

> ${RESTAURANT.slogan}

## 基本信息

- **品牌名**：${RESTAURANT.name}（${RESTAURANT.alternateName}）
- **地址**：${RESTAURANT.address.full}
- **预订电话**：${RESTAURANT.phone}
- **营业时间**：午餐 ${RESTAURANT.openingHours[0].time} / 晚餐 ${RESTAURANT.openingHours[1].time}
- **停车**：${RESTAURANT.parking}
- **面积**：${RESTAURANT.area}
- **包间**：${RESTAURANT.rooms}间风格各异VIP包房
- **菜系**：${RESTAURANT.cuisine.join("、")}

## 荣誉

${RESTAURANT.awards.map((a) => `- **${a.year} ${a.title}**`).join("\n")}

## 创始人

**${RESTAURANT.founder.name}**：${RESTAURANT.founder.bio}

## 行政总厨

**${RESTAURANT.chef.name}**：${RESTAURANT.chef.bio}

## 菜单精选

${menuText}

*完整菜单请见 [llms-full.txt](${SITE_URL}/llms-full.txt)*

## 包房信息

${roomsText}

## 常见问题

${faqText}

---
*本文件为 LLM 友好格式，供 AI 搜索引擎索引使用。*
`;
}

export function GET(request: NextRequest) {
  const content = generateLite();
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
