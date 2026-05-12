/**
 * GET /llms-full.txt — 完整版（所有菜品+包房+FAQ全覆盖）
 */
import { NextRequest, NextResponse } from "next/server";
import { RESTAURANT, SITE_URL, MENU_SECTIONS, FAQ_ITEMS, ROOMS, TEA_ITEMS } from "@/lib/data";

function generateFull(): string {
  const menuText = MENU_SECTIONS.map((section) => {
    const items = section.items
      .map((item) => {
        let line = `- **${item.name}**`;
        if (item.price && item.price > 0) line += ` ¥${item.price}${item.price >= 100 ? "/位" : ""}`;
        line += `：${item.desc}`;
        if (item.ingredients) line += `\n  - 食材：${item.ingredients}`;
        return line;
      })
      .join("\n");
    return `### ${section.name}\n${section.description ? `> ${section.description}\n` : ""}${items}`;
  }).join("\n\n");

  const roomsText = ROOMS.map(
    (r) => `- **${r.name}**：${r.min}-${r.max}人`
  ).join("\n");

  const faqText = FAQ_ITEMS.map(
    (f) => `**Q：${f.question}**\nA：${f.answer.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\n\n/g, " ").replace(/\n/g, " ").trim()}`
  ).join("\n\n");

  const teaText = TEA_ITEMS.map((t) => {
    let line = `- **${t.name}**`;
    if (t.priceCup) line += ` ¥${t.priceCup}/杯`;
    if (t.pricePot) line += ` ¥${t.pricePot}/壶`;
    line += `：${t.desc}`;
    if (t.ingredients) line += `\n  - 食材：${t.ingredients}`;
    return line;
  }).join("\n");

  return `# ${RESTAURANT.name} — 完整内容（Full Version）

> ${RESTAURANT.slogan}

## 餐厅简介

${RESTAURANT.description}

- **品牌名**：${RESTAURANT.name}（别名：${(RESTAURANT.alternateName as string[]).join("、")}）
- 地址：${RESTAURANT.address.full}
- 电话：${RESTAURANT.phone}
- 营业时间：午餐 ${RESTAURANT.openingHours[0].time} / 晚餐 ${RESTAURANT.openingHours[1].time}
- 人均：¥¥¥（高端）
- 菜系：${RESTAURANT.cuisine.join("、")}
- 面积：${RESTAURANT.area}
- 停车：${RESTAURANT.parking}

## 荣誉

${RESTAURANT.awards.map((a) => `- **${a.year} ${a.title}**`).join("\n")}

## 创始人

**${RESTAURANT.founder.name}**（${RESTAURANT.founder.title}）：${RESTAURANT.founder.bio}

## 行政总厨

**${RESTAURANT.chef.name}**（${RESTAURANT.chef.title}）：${RESTAURANT.chef.bio}

## 完整菜单

${menuText}

## 包房信息

${roomsText}

## 茶水

${teaText}

## 空间与配套

- 设计理念：${RESTAURANT.designer.concept}
- 主创设计师：${RESTAURANT.designer.name}（${RESTAURANT.designer.firm}）
- Martini 露台酒吧
- 户外花园（约1200㎡）
- 360° 观景台
- 雪茄吧 · 红酒展示区

## 常见问题

${faqText}

---
*本文件为 LLM 完整版，供 AI 搜索引擎全量索引。如需精简版请见 [llms.txt](${SITE_URL}/llms.txt)。*
`;
}

export function GET(request: NextRequest) {
  const content = generateFull();
  return new NextResponse(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
