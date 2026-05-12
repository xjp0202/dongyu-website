/**
 * Generate /public/llms.txt from restaurant data at build time.
 * This replaces the Route Handler (app/llms.txt/route.ts) which
 * is incompatible with `output: "export"`.
 */
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

// Inline the data generation (mirrors src/lib/data.ts)
const RESTAURANT = {
  name: "岽渔",
  alternateName: "崬渔",
  slogan: "新派鲁菜 · 胶东海鲜",
  address: {
    full: "山东省济南市历下区经十路11899号（万象城旁）",
  },
  phone: "0531-8666 7777",
  openingHours: [
    { label: "午餐", time: "11:30-14:00" },
    { label: "晚餐", time: "17:30-21:30" },
  ],
  parking: "专属停车场，免费代客泊车",
  area: "1800㎡",
  rooms: 8,
  cuisine: ["新派鲁菜", "胶东海鲜", "创意融合"],
  awards: [
    { year: "2026", title: "黑珍珠一钻", org: "美团点评" },
    { year: "2025", title: "金梧桐一星", org: "凤凰网" },
    { year: "2024", title: "国家级五钻酒家", org: "商务部" },
  ],
  founder: {
    name: "王太震",
    title: "创始人兼行政总厨",
    bio: "鲁菜泰斗王义均嫡传弟子，山东唯一米其林+黑珍珠双荣誉鲁菜大厨。深耕鲁菜三十余年，以「守正出奇」为理念，在传统鲁菜基础上融合胶东海鲜与时令食材，开创新派鲁菜范式。",
  },
  chef: {
    name: "王太震",
    title: "行政总厨",
    bio: "鲁菜泰斗王义均嫡传弟子，山东唯一米其林+黑珍珠双荣誉鲁菜大厨。深耕鲁菜三十余年，以「守正出奇」为理念，在传统鲁菜基础上融合胶东海鲜与时令食材，开创新派鲁菜范式。",
  },
  designer: {
    name: "梁建国",
    firm: "集美组设计机构",
    concept: "以「泉·石·渔」为设计意象，将济南泉水文化、泰山石韵与海洋元素交织，打造沉浸式东方美学空间。",
  },
};

const MENU_SECTIONS = [
  {
    name: "招牌·硬菜",
    items: [
      { name: "金葱阿胶鲍鱼", price: 288, desc: "选用南非6头鲍，配以东阿阿胶与章丘金葱慢炖48小时。鲍鱼肥厚软糯，胶香与葱香完美交融。列入《济南名菜名录》（T/JNFX002-2023）。", ingredients: "南非6头鲍、东阿阿胶、章丘金葱、老抽、冰糖", method: "慢炖48小时" },
      { name: "葱烧海参（位上）", price: 188, desc: "辽参配章丘大葱，鲁菜经典再诠释。海参Q弹，葱香浓郁，酱汁浓郁挂汁。", ingredients: "辽刺参、章丘大葱、高汤", method: "葱烧、收汁" },
      { name: "九转大肠", price: 168, desc: "传统鲁菜技艺，酸甜苦辣咸五味交融。外焦里嫩，酱汁浓郁。", ingredients: "猪大肠、醋、糖、砂仁、豆蔻", method: "炸、烧、收汁" },
      { name: "葱烧蹄筋", price: 0, desc: "牛蹄筋配金葱慢炖，胶质丰富，软糯弹牙。", ingredients: "牛蹄筋、章丘大葱、高汤", method: "慢炖" },
    ],
  },
  {
    name: "胶东·海鲜",
    items: [
      { name: "清蒸黄花鱼", price: 0, desc: "当日威海渔港直送，清蒸保留本味。鱼肉细嫩，汤汁清甜。", ingredients: "威海黄花鱼、姜片、料酒", method: "清蒸", source: "威海渔港直送，海水活养" },
      { name: "蒜蓉粉丝蒸扇贝", price: 0, desc: "大连獐子岛扇贝，蒜蓉提鲜。扇贝肥美，粉丝吸满海鲜汤汁。", ingredients: "大连扇贝、蒜蓉、粉丝", method: "蒸", source: "大连獐子岛，海水活养" },
      { name: "鲅鱼水饺", price: 88, desc: "胶东手作水饺，鲅鱼肉馅鲜嫩多汁，配海米韭菜提鲜。", ingredients: "鲅鱼肉、海米、韭菜、面粉", method: "手工包制" },
      { name: "海肠炒韭菜", price: 0, desc: "拇指海肠配头刀韭菜，火候精准。海肠脆嫩，韭菜清香。", ingredients: "拇指海肠、头刀韭菜", method: "爆炒", source: "威海渔港直送，海水活养" },
    ],
  },
  {
    name: "鲁味·传承",
    items: [
      { name: "糖醋鲤鱼", price: 128, desc: "黄河鲤鱼，经典糖醋制法。鲤鱼炸至外酥里嫩，糖醋汁酸甜适中。", ingredients: "黄河鲤鱼、醋、糖、酱油", method: "炸、溜" },
      { name: "油爆双脆", price: 158, desc: "鸡胗与猪肚，火候见真章。双脆爽口，镬气十足。", ingredients: "鸡胗、猪肚、笋片", method: "油爆" },
      { name: "一品锅", price: 0, desc: "佛跳墙式鲁菜大盆菜，按位供应。鲍鱼、海参、花胶、瑶柱等名贵食材慢炖。", ingredients: "鲍鱼、海参、花胶、瑶柱、老母鸡高汤", method: "慢炖4小时" },
      { name: "砂锅海胆豆腐", price: 0, desc: "海胆配手作豆腐，砂锅慢炖。豆腐吸满海胆鲜味，口感丝滑。", ingredients: "海胆、手作豆腐、高汤", method: "砂锅慢炖" },
    ],
  },
];

const ROOMS = [
  { name: "听泉", min: 6, max: 8 },
  { name: "观澜", min: 8, max: 12 },
  { name: "揽月", min: 10, max: 16 },
  { name: "凌云", min: 14, max: 20 },
  { name: "望岳", min: 20, max: 30 },
];

const FAQ_ITEMS = [
  { question: "如何预订包间？", answer: "请拨打预订电话 0531-8666 7777，建议提前3天预订。包间设有最低消费。" },
  { question: "餐厅有着装要求吗？", answer: "建议商务休闲或正装出席，以尊享用餐氛围。" },
  { question: "可以自带酒水吗？", answer: "可自带酒水，收取每瓶100元开瓶费。餐厅亦备有精选酒单。" },
  { question: "有停车位吗？", answer: "设有专属停车场，提供免费代客泊车服务。" },
];

// Generate markdown content
const menuText = MENU_SECTIONS.map((section) => {
  const items = section.items
    .map((item) => {
      let line = `- **${item.name}**`;
      if (item.price && item.price > 0) line += ` ¥${item.price}/位`;
      line += `：${item.desc}`;
      if (item.ingredients) line += `\n  - 食材：${item.ingredients}`;
      if (item.method) line += `\n  - 烹饪：${item.method}`;
      if (item.source) line += `\n  - 来源：${item.source}`;
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

writeFileSync(join(publicDir, "llms.txt"), content, "utf-8");
console.log("✓ public/llms.txt generated");
