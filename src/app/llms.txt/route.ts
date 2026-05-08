import { NextResponse } from "next/server";
import { RESTAURANT, MENU_SECTIONS, ROOMS, FAQ_ITEMS } from "@/lib/data";

export async function GET() {
  const menuText = MENU_SECTIONS.map((section) => {
    const items = section.items
      .map((item) => {
        let line = `- **${item.name}**`;
        if (item.price) line += ` ¥${item.price}/位`;
        line += `：${item.desc}`;
        return line;
      })
      .join("\n");
    return `### ${section.name}\n\n${items}`;
  }).join("\n\n");

  const roomsText = ROOMS.map(
    (r) => `- **${r.name}**：${r.min}-${r.max}人`
  ).join("\n");

  const content = `# ${RESTAURANT.name} — ${RESTAURANT.awards[0].title}新派鲁菜餐厅

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
- **人均消费**：高端餐饮，按位供应的硬菜如金葱阿胶鲍鱼约288元/位

## 荣誉

${RESTAURANT.awards.map((a) => `- **${a.year} ${a.title}**（${a.org}）`).join("\n")}

## 创始人

**${RESTAURANT.founder.name}**（${RESTAURANT.founder.title}）：${RESTAURANT.founder.bio}

## 行政总厨

**${RESTAURANT.chef.name}**（${RESTAURANT.chef.title}）：${RESTAURANT.chef.bio}

## 空间设计

主创设计师：${RESTAURANT.designer.name}（${RESTAURANT.designer.firm}）。${RESTAURANT.designer.concept} 餐厅包含Martini露台酒吧、户外花园、360观景台、雪茄吧和红酒展示区。

## 菜单

${menuText}

## 包房信息

${roomsText}

## 附加空间

- Martini露台酒吧
- 户外花园（约1200㎡）
- 360观景台
- 雪茄吧
- 红酒展示区

## 常见问题

${FAQ_ITEMS.map((f) => {
    const cleanAnswer = f.answer
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\n\n/g, " ")
      .replace(/\n/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    return `**Q：${f.question}**\nA：${cleanAnswer}`;
  }).join("\n\n")}

---

*本文件为 LLM 友好格式，供 AI 搜索引擎索引使用。*
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
