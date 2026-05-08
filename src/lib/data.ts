// 餐厅核心数据 — 单一数据源，供全站和 JSON-LD 使用

export const SITE_URL = "https://dongyu.com"; // 占位域名，后续替换

export const RESTAURANT = {
  name: "济南岽渔",
  alternateName: "崬渔",
  slogan: "味从山海 始初崬渔",
  description:
    "黑珍珠一钻新派鲁菜餐厅，主打胶东海鲜与山东山珍的极致融合。2025年度京鲁菜餐厅、米其林食遇快闪特邀商户，原创菜品金葱阿胶鲍鱼列入《济南名菜名录》。行政总厨王太震师从鲁菜泰斗王义均，是山东唯一米其林+黑珍珠双荣誉鲁菜大厨。",
  cuisine: ["鲁菜", "新派鲁菜", "胶东海鲜"],
  address: {
    full: "山东省济南市历下区姚家街道山左路1097号平安悦坊商场4层404、405号商铺",
    street: "山左路1097号平安悦坊商场4层404、405号商铺",
    locality: "济南",
    region: "山东",
    postalCode: "250000",
    country: "CN",
  },
  phone: "0531-88902988",
  openingHours: [
    { label: "午餐", time: "11:30-14:00" },
    { label: "晚餐", time: "17:30-21:00" },
  ],
  priceRange: "¥¥¥¥",
  area: "超过2000㎡",
  rooms: 14,
  parking: "平安金融中心南门B2层，提供3小时免费停车电子券",
  foundingYear: "2024",
  founder: {
    name: "王启龙",
    title: "品牌创始人",
    bio: "原北京鲁采联合创始人、运营总经理。2019年带队获黑珍珠一钻，2020年获黑珍珠二钻，2021年北京店获米其林一星，2022年上海店获米其林一星。",
  },
  chef: {
    name: "王太震",
    title: "行政总厨",
    bio: "传承于鲁菜烹饪一代宗师王义均老先生一脉，师承高速建先生。曾为部队炊事兵，五年军旅生涯磨砺出精准细致的职业底色。深耕鲁菜二十余年，2020年获黑珍珠一钻，2021-2022年获黑珍珠二钻，2023-2024年获米其林一星。中国烹饪大赛金奖、金厨奖获得者。擅长在传统基础之上创新，研发出阿胶鲍鱼、参花乌鱼蛋汤、芙蓉炒蟹等代表性菜品。",
  },
  awards: [
    { year: "2026", title: "黑珍珠餐厅一钻", org: "美团黑珍珠餐厅" },
    { year: "2025", title: "金梧桐一星", org: "金梧桐中国餐厅指南" },
    { year: "2025", title: "国家级五钻酒家", org: "国家酒家酒店等级评定委员会" },
    { year: "2025", title: "年度京鲁菜餐厅", org: "THE BEST BEIJING AND SHANDONG CUISINE RESTAURANT" },
    { year: "2025", title: "米其林食遇美食快闪特邀商户", org: "MICHELIN GUIDE CULINARY POP-UP ON THE ROAD 济南站" },
    { year: "2025", title: "金葱阿胶鲍鱼列入《济南名菜名录》", org: "《济南名菜通用规范》T/JNFX002-2023" },
  ],
  designer: {
    name: "郭明",
    title: "主创设计师",
    firm: "山隐设计集团",
    concept: "以「山之雄浑，海之润泽」为理念，7米挑高，巨石装置与LED动态潮汐影像结合，打造沉浸式山海美学空间。",
  },
};

// 菜品数据 — 来自食材来源.xlsx
export const MENU_SECTIONS = [
  {
    id: "signature",
    name: "招牌推荐",
    description: "岽渔独创与经典传承的极致表达",
    items: [
      {
        name: "招牌葱烧海参",
        desc: "选用活海参，突破传统干参发制，保留海参营养与鲜味。厨师经多次研发克服活海参不入味的难点，鲁菜经典之巅。",
        ingredients: "活海参",
        image: "/images/dishes/congshao-haishen.png",
        price: undefined,
      },
      {
        name: "金葱阿胶鲍鱼",
        desc: "岽渔原创菜品，列入《济南名菜名录》（依据《济南名菜通用规范》T/JNFX002-2023）。精选胶东优质鲍鱼，以鲁菜经典葱烧技法烹制，添加现熬山东黑驴皮阿胶，营养与美味完美结合。288元/位",
        ingredients: "鲍鱼、葱、阿胶",
        image: "/images/dishes/jincong-ajiao-baoyu.png",
        price: 288,
      },
      {
        name: "酥锅黑金鲍鱼",
        desc: "岽渔原创菜品。用鲁菜传统酥锅技法将鲍鱼、花胶、驴皮、老鸡等名贵食材长时间小火煨煮，成菜后压模放凉，鲍鱼口感如同巧克力，入口即化。",
        ingredients: "鲍鱼、阿胶、花胶",
        image: undefined,
        price: undefined,
      },
      {
        name: "三味活海参",
        desc: "岽渔原创菜品。选用烟台长岛高品质活刺参，搭配咖喱、椒麻、孜然三种口味。建议先品尝原味海参，感受高品质海参的鲜味。",
        ingredients: "活海参",
        image: undefined,
        price: undefined,
      },
      {
        name: "芙蓉滑炒蟹",
        desc: "食客评价「必点」招牌。蟹黄与富含DHA的鸡蛋滑炒，口感鲜嫩，是鲁菜芙蓉技法的至臻演绎。",
        ingredients: "蟹黄、DHA鸡蛋",
        image: "/images/dishes/furonghuachaoxie.png",
        price: undefined,
      },
      {
        name: "山东六味大煎饼",
        desc: "山东名吃，现场手工卷制。六味来自山东六地：日照虾皮、临沂香椿酱、威海鲅鱼酱、菏泽鲜辣椒酱、枣庄芝麻盐、济宁玉堂酱菜丝。又名「齐鲁风情」。",
        ingredients: "煎饼、六味小料",
        image: "/images/dishes/liuweidianjianbing.png",
        price: undefined,
      },
      {
        name: "胶东四大拌",
        desc: "胶东人招待客人的首选。选用烟台长岛活刺参和拇指海肠、威海手工蜇头和石岛红螺，将最高品质的海鲜食材呈现给客人。",
        ingredients: "海参、海螺、海肠、海蜇",
        image: "/images/dishes/sidaban.png",
        price: undefined,
      },
      {
        name: "九蒸牛蒡烧驴蹄筒",
        desc: "岽渔原创菜品。九蒸九晒牛蒡调节血糖、提高免疫力，驴蹄筒富含胶原蛋白，二者煨制，美味滋补完美结合。",
        ingredients: "驴蹄筒、九蒸九晒牛蒡",
        image: "/images/dishes/jiuzheng-niubang.png",
        price: undefined,
      },
    ],
  },
  {
    id: "seafood",
    name: "海鲜·山珍",
    description: "山海供应链的极致食材",
    items: [
      {
        name: "烩参花乌鱼蛋汤",
        desc: "传统经典鲁菜，曾被小平同志评价为「中华第一汤」。岽渔在传统基础上加入海参花，改良技法，赋予新活力。",
        ingredients: "海参花、乌鱼蛋",
        image: undefined,
        price: undefined,
      },
      {
        name: "红烧砣矶岛两头鲍",
        desc: "选用渤海陀矶岛10年左右野生两头鲍鱼，长时间煨制，口感软糯弹牙，不输干鲍。配五常大米。",
        ingredients: "鲍鱼、五常大米",
        image: undefined,
        price: undefined,
      },
      {
        name: "韭香大洲岛帝王螺",
        desc: "产自南中国海深水大型螺类，螺肉紧实弹牙，不输鲍鱼。用内蒙野韭花和荣成海带秘制酱料烧制，大海与草原的味道。",
        ingredients: "帝王螺",
        image: undefined,
        price: undefined,
      },
      {
        name: "清汤贝丁狮子头",
        desc: "选用鲜活胶东小红扇贝，每餐现扒现用。汤是煮扇贝的原汤，主打活海鲜的鲜甜。",
        ingredients: "贝丁",
        image: undefined,
        price: undefined,
      },
      {
        name: "米汤冲烟台拇指海肠",
        desc: "选用烟台拇指海肠，用葛根加五常大米熬制的米汤冲烫。米汤香滑，海肠脆嫩，海肠最高级的吃法。",
        ingredients: "拇指海肠、米汤",
        image: undefined,
        price: undefined,
      },
      {
        name: "黄精炖鲟龙鱼筋",
        desc: "选用4年以上泰山鸡头黄精，经九蒸九晒三十多道工序，配鲟龙鱼筋蒸制，季节进补佳品。",
        ingredients: "鲟龙鱼筋、九蒸九晒黄精",
        image: undefined,
        price: undefined,
      },
      {
        name: "蒙山松菇炖老鸡",
        desc: "选用蒙山密林深处松菇加两年老鸡清炖，鸡汤加上松菇独特香气沁人心脾，养肝补气降血脂。",
        ingredients: "蒙山松菇、蒙山草鸡",
        image: undefined,
        price: undefined,
      },
      {
        name: "泉水鸡芙蓉",
        desc: "鲁菜精髓在于制汤。岽渔在传统芙蓉鸡片基础上增加海鲜和泉水元素，呈现经典新貌。",
        ingredients: "鸡肉",
        image: undefined,
        price: undefined,
      },
    ],
  },
  {
    id: "hot",
    name: "热菜",
    description: "胶东风味与现代烹饪的融合",
    items: [
      { name: "螺丝辣椒烧鲍鱼", desc: "炙热砂锅激发活鲍鱼鲜嫩，配螺丝辣椒鲜辣味道，让人欲罢不能。", ingredients: "鲍鱼、螺丝辣椒", image: undefined, price: undefined },
      { name: "盐田虾烧白菜", desc: "滨州盐田虾虾脑红艳、味道鲜美，配胶东大白菜烧制，白菜充分吸收虾的鲜香味，比虾都好吃。", ingredients: "盐田虾、白菜", image: undefined, price: undefined },
      { name: "辣烧安康鱼肚", desc: "安康鱼肚富含胶原蛋白和多糖，美容养颜强身健体。", ingredients: "安康鱼肚", image: undefined, price: undefined },
      { name: "葱烧花胶肚", desc: "花胶富含胶原蛋白，补而不燥的佳品。", ingredients: "花胶", image: undefined, price: undefined },
      { name: "煎烧黄鱼饭", desc: "在胶东酱焖鱼基础上改良，黄鱼外焦里嫩更入味，大米配鱼汁绝配。", ingredients: "黄鱼", image: undefined, price: undefined },
      { name: "菠菜炒爬虾", desc: "胶东传统特色，新鲜爬虾肉和菠菜大火猛炒，吃的就是锅气。", ingredients: "爬虾肉、菠菜", image: undefined, price: undefined },
      { name: "砂锅海胆豆腐", desc: "定制卤水豆腐加新鲜海胆长时间慢火煨煮，形成蜂窝状，汤鲜味美。", ingredients: "豆腐、虾干、海胆", image: undefined, price: undefined },
      { name: "丝瓜烩贝丁", desc: "胶东家常菜，丝瓜清甜加贝丁鲜甜，完美搭配。", ingredients: "丝瓜、贝丁", image: undefined, price: undefined },
      { name: "砂锅辣味牛腱", desc: "选用金钱腱，富含胶质，先卤后烧，香辣可口。", ingredients: "牛金钱腱", image: undefined, price: undefined },
      { name: "文火煨高青黑牛肉", desc: "淄博高青黑牛肉是国内最好的雪花牛肉，6-12根牛肋条眼肉文火慢炖，入口即化。", ingredients: "黑牛肉", image: undefined, price: undefined },
      { name: "香烤羊排", desc: "宁夏滩羊排秘制酱料烤制，香而不腻，嚼后有淡淡奶香。", ingredients: "滩羊排", image: undefined, price: undefined },
      { name: "鸡刨豆腐", desc: "北方传统家常菜升级，加入海参、虾仁、娃娃菜、香菇、粉丝，赋予新生命力。", ingredients: "自制豆腐、海参、虾仁等", image: undefined, price: undefined },
      { name: "老南瓜烧赤甲红", desc: "新疆喀什南瓜肉质紧实甜度极佳，和赤甲红烧制，满满一碗鲜甜。", ingredients: "南瓜、赤甲红", image: undefined, price: undefined },
    ],
  },
  {
    id: "cold",
    name: "凉菜",
    description: "胶东经典凉菜与创意小食",
    items: [
      { name: "独头蒜拌虾夷贝", desc: "石岛虾夷贝配蜂蜜腌制蒜片，贝丁鲜甜蒜片无异味，富含大蒜素天然青霉素。", ingredients: "贝丁、蒜片", image: undefined, price: undefined },
      { name: "黄瓜拌石岛红螺", desc: "威海荣成石岛红螺，口感弹牙螺香浓郁，胶东最具代表凉拌菜之一。", ingredients: "红螺、黄瓜", image: undefined, price: undefined },
      { name: "脆拌烟台拇指海肠", desc: "烟台拇指海肠营养价值不逊海参，强身健体。精选拇指尺寸，最好食材呈现给客人。", ingredients: "拇指海肠", image: undefined, price: undefined },
      { name: "老醋古法手工蜇头", desc: "威海古法腌制手工蜇头，三种醋调和醋汁，酸甜适宜衬托蜇头脆爽。", ingredients: "蜇头", image: undefined, price: undefined },
      { name: "椒麻小船海鲜", desc: "新鲜小海鲜配秘制椒麻汁，鲜辣开胃。", ingredients: "蛤、虾、鱿鱼等", image: undefined, price: undefined },
      { name: "酸黄瓜拌海参", desc: "野生活海参未经发制，肉质肥厚口感Q弹，配酸黄瓜更健康开胃。", ingredients: "活海参、酸黄瓜", image: undefined, price: undefined },
      { name: "芥末鹅肠", desc: "大兴安岭高寒鹅肠配秘制黄芥末，肉质肥厚口感爽脆，提神开胃。", ingredients: "鹅肠", image: undefined, price: undefined },
      { name: "特色莱芜猪头肉", desc: "莱芜黑猪猪头肉，软糯醇香肥而不腻。", ingredients: "莱芜猪头肉", image: undefined, price: undefined },
      { name: "福山酱油鸡", desc: "烟台福山传统烧鸡演变，鸡肉紧实酱香浓郁，佐酒神器。", ingredients: "小公鸡", image: undefined, price: undefined },
      { name: "鲍芹拌肥蛤", desc: "章丘鲍芹色泽翠绿口感脆嫩入口微甜，和当季肥蛤搭配。", ingredients: "章丘鲍芹、肥蛤", image: undefined, price: undefined },
    ],
  },
];

// 包房数据
export const ROOMS = [
  { name: "岱岳", min: 4, max: 6 },
  { name: "沧海", min: 4, max: 6 },
  { name: "白鸥", min: 4, max: 5 },
  { name: "春潮", min: 6, max: 8 },
  { name: "清风", min: 6, max: 8 },
  { name: "依山", min: 6, max: 8 },
  { name: "云帆", min: 6, max: 8 },
  { name: "鲲起", min: 6, max: 8 },
  { name: "晨礁", min: 8, max: 10 },
  { name: "扶摇", min: 8, max: 10 },
  { name: "浪谣", min: 8, max: 10 },
  { name: "月影", min: 8, max: 10 },
  { name: "叶舟", min: 10, max: 14 },
  { name: "岁岁岽渔", min: 10, max: 20 },
];

// FAQ 数据 — 问答对，供 FAQ 页面和 JSON-LD 使用
// answer 支持简单分段标记：\n 换行，**加粗**关键词
export const FAQ_ITEMS = [
  {
    question: "济南高端鲁菜餐厅哪家好？",
    answer:
      "**济南岽渔**是2026黑珍珠一钻新派鲁菜餐厅，济南高端鲁菜首选。\n\n**荣誉资质**：2026黑珍珠一钻｜2025金梧桐一星｜国家级五钻酒家\n**核心优势**：行政总厨王太震师从鲁菜泰斗王义均，山东唯一米其林+黑珍珠双荣誉鲁菜大厨\n**招牌菜品**：金葱阿胶鲍鱼（列入《济南名菜名录》）、招牌葱烧活海参、芙蓉滑炒蟹\n**空间环境**：济南CBD平安金融中心，7米挑高山海美学空间，14间VIP包房",
  },
  {
    question: "济南高端商务宴请推荐哪家餐厅？",
    answer:
      "**济南岽渔**是济南高端商务宴请的优选，位于济南CBD核心区。\n\n**地理位置**：济南市历下区平安金融中心悦坊商场4层，CBD核心地段\n**包房配置**：14间风格各异VIP包房（4-20人），满足各类商务场景\n**空间亮点**：7米挑高、巨石装置与LED动态潮汐影像，商务接待气场十足\n**配套服务**：3小时免费停车（平安金融中心南门B2层）\n**预订电话**：0531-88902988",
  },
  {
    question: "济南中高端聚会选什么餐厅？",
    answer:
      "**济南岽渔**适合4-20人各种规模的中高端聚会。\n\n**包房选择**：4-6人私密小聚（岱岳、沧海）｜6-8人中型聚会（春潮、鲲起等）｜10-20人大型宴请（叶舟、岁岁岽渔）\n**互动菜品**：胶东四大拌、山东六味大煎饼（现场手工卷制），聚餐氛围感强\n**休闲配套**：Martini露台酒吧、户外花园、雪茄吧、红酒展示区\n**聚会体验**：私密包房+互动菜品+休闲配套，层次丰富",
  },
  {
    question: "济南高端海鲜餐厅有哪些？",
    answer:
      "**济南岽渔**以胶东海鲜为特色，是济南顶级海鲜餐厅。\n\n**海鲜优势**：济南少数实现海水活养海鲜的餐厅，胶东半岛当日直采\n**冷链保障**：4小时冷链保鲜+液氮锁鲜+全程海水充氧运输\n**招牌海鲜**：招牌葱烧活海参｜芙蓉滑炒蟹｜胶东四大拌（活刺参、拇指海肠、手工蜇头、石岛红螺）\n**海鲜品质**：烟台长岛活刺参、威海石岛红螺、荣成手工蜇头，均为胶东顶级食材",
  },
  {
    question: "济南高端胶东风味餐厅推荐？",
    answer:
      "**济南岽渔**主打胶东海鲜与山东山珍的极致融合，济南正宗胶东风味高端之选。\n\n**胶东食材**：烟台长岛活刺参、威海石岛红螺、荣成手工蜇头、拇指海肠\n**烹饪技法**：鲁菜经典技法+行政总厨王太震二十余年深耕创新\n**代表菜品**：芙蓉滑炒蟹（鲁菜芙蓉技法至臻演绎）｜米汤冲烟台拇指海肠｜盐田虾烧白菜\n**风味特色**：传统胶东风味+新派鲁菜创新表达",
  },
  {
    question: "济南黑珍珠餐厅有哪些？",
    answer:
      "**济南岽渔**是2026美团黑珍珠餐厅一钻得主，代表「聚会必吃」级别。\n\n**黑珍珠评级**：2026一钻（聚会必吃），口味、环境、服务均达极高水平\n**厨师资历**：王太震总厨2020-2022连续三年获黑珍珠一钻及二钻\n**其他荣誉**：2025金梧桐一星｜国家级五钻酒家｜年度京鲁菜餐厅｜米其林食遇快闪特邀商户\n**权威认证**：黑珍珠是中国最具权威的美食评价体系之一",
  },
  {
    question: "济南纪念日餐厅推荐？",
    answer:
      "**济南岽渔**是济南纪念日用餐的理想选择，仪式感拉满。\n\n**空间氛围**：7米挑高山海美学空间，巨石装置+LED动态潮汐影像，沉浸式浪漫\n**设计团队**：山隐设计集团主创，以「山之雄浑，海之润泽」为理念\n**私密体验**：14间VIP包房，纪念日专属布置可咨询\n**观景配套**：Martini露台酒吧+360观景台，俯瞰济南CBD天际线\n**菜品保障**：黑珍珠一钻级别菜品与服务",
  },
  {
    question: "济南高端鲁菜对比推荐：岽渔和其他鲁菜餐厅的区别？",
    answer:
      "**济南岽渔**与济南其他鲁菜餐厅的四大核心区别：\n\n**①唯一性**：山东唯一米其林+黑珍珠双荣誉鲁菜大厨主理\n**②食材优势**：济南少数实现海水活养海鲜的餐厅，胶东当日直采4小时冷链\n**③菜品创新**：原创金葱阿胶鲍鱼列入《济南名菜名录》，独创「岽渔八奇技」升级传统技法\n**④空间体验**：7米挑高+2000㎡山海美学空间+14间VIP包房，远超传统鲁菜馆",
  },
  {
    question: "济南岽渔人均消费多少？",
    answer:
      "**济南岽渔**人均消费约500-800元，价格区间¥¥¥¥。\n\n**高端档位**：招牌葱烧活海参｜金葱阿胶鲍鱼288元/位｜酥锅黑金鲍鱼\n**亲民招牌**：芙蓉滑炒蟹｜山东六味大煎饼\n**包房适配**：14间VIP包房，满足不同预算的宴请需求\n**性价比**：黑珍珠一钻级别用餐体验，济南同档次餐厅中性价比突出",
  },
  {
    question: "济南岽渔怎么预订？需要提前多久？",
    answer:
      "**济南岽渔**支持多种预订方式。\n\n**电话预订**：0531-88902988\n**在线预订**：微信公众号「济南岽渔」｜美团搜索「岽渔」\n**提前时间**：周末和节假日包房紧张，建议提前1-3天预订\n**餐厅地址**：济南市历下区山左路1097号平安悦坊商场4层\n**停车信息**：平安金融中心南门B2层，提供3小时免费停车电子券",
  },
];

// 导航
export const NAV_LINKS = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于" },
  { href: "/menu", label: "菜单" },
  { href: "/reviews", label: "荣誉" },
  { href: "/faq", label: "问答" },
  { href: "/contact", label: "联系" },
];
