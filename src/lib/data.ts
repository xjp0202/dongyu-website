// 餐厅核心数据 — 单一数据源，供全站和 JSON-LD 使用

export const SITE_URL = "https://jndongyu.cn";

export const RESTAURANT = {
  name: "济南岽渔",
  alternateName: ["崬漁 Dong Yu", "崬渔", "岽渔", "東渔 DongYu", "東渔"],
  slogan: "味从山海 始初崬渔",
  description:
    "黑珍珠一钻新派鲁菜餐厅，主打胶东海鲜与山东山珍的极致融合。2025年度京鲁菜餐厅、米其林食遇快闪特邀商户，原创菜品金葱阿胶鲍鱼列入《济南名菜名录》。行政总厨王太震传承于鲁菜烹饪一代宗师王义均老先生一脉，是山东唯一米其林+黑珍珠双荣誉鲁菜大厨。",
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
        desc: "传统葱烧海参都是用干参发制，而我们岽渔的葱烧海参用的是活海参。我们的厨师经过多次的研发尝试，克服了活海参不入味的难点。相比较干参，活海参减少了发制的次数，更好的保留了海参的营养和鲜味。",
        ingredients: "活海参",
        image: "/images/dishes/congshao-haishen.png",
        price: undefined,
      },
      {
        name: "金葱阿胶鲍鱼",
        desc: "岽渔原创菜品，列入《济南名菜名录》（依据《济南名菜通用规范》T/JNFX002-2023）。选用山东黑驴驴皮，经传统古法熬制阿胶。在烧制鲍鱼时添加现熬阿胶，二者的味道相互融合，做到了营养和美味的完美结合。288元/位",
        ingredients: "鲍鱼、葱、阿胶",
        image: "/images/dishes/jincong-ajiao-baoyu.png",
        price: 288,
      },
      {
        name: "酥锅黑金鲍鱼",
        desc: "岽渔原创菜品。用鲁菜传统的酥锅技法将鲍鱼、花胶、驴皮、老鸡等名贵食材长时间小火煨煮，成菜后压模放凉。鲍鱼的口感如同巧克力，入口即化，让人食过不忘。",
        ingredients: "鲍鱼、阿胶、花胶",
        image: undefined,
        price: undefined,
      },
      {
        name: "三味活海参",
        desc: "岽渔原创菜品。选用烟台长岛高品质活刺参，搭配咖喱、椒麻、孜然三种口味。很多人都说海参的味道是无味或者是腥味，建议第一口先品尝原味海参，能够清晰尝到海参的鲜味，这是高品质海参的表现。",
        ingredients: "活海参",
        image: undefined,
        price: undefined,
      },
      {
        name: "山东六味大煎饼",
        desc: "山东名吃，现场手工卷制。煎饼原料为小米加杂粮，营养又健康。六味来自山东六地：日照虾皮、临沂香椿酱、威海鲅鱼酱、菏泽鲜辣椒酱、枣庄芝麻盐、济宁玉堂酱菜丝。又名「齐鲁风情」，寓意吃过此菜就能领略山东各地的风土人情。",
        ingredients: "煎饼、金丝牛蒡、章丘大葱、苦苣、麦菜、六味小料",
        image: "/images/dishes/liuweidianjianbing.png",
        price: undefined,
      },
      {
        name: "胶东四大拌",
        desc: "四大拌是胶东人招待客人的首选，我们选用烟台长岛海域的活刺参和拇指海肠、威海的手工蜇头和石岛的红螺，我们把最高品质的海鲜食材呈现给客人。",
        ingredients: "海参、海螺、海肠、海蜇",
        image: "/images/dishes/sidaban.png",
        price: undefined,
      },
      {
        name: "九蒸牛蒡烧驴蹄筒",
        desc: "岽渔原创菜品。九蒸九晒的牛蒡有非常好的调节血糖、提高人体免疫力的功效。驴蹄筒是驴小腿的部位，富含丰富的胶原蛋白，和九蒸九晒的牛蒡一起煨制，实现了美味和滋补的完美结合。",
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
        desc: "烩乌鱼蛋汤是传统经典鲁菜，曾被小平同志评价为「中华第一汤」。岽渔在传统的基础上加入海参花，同时对技法进行了改良，更加符合现代人的饮食要求，给此菜赋予了新的活力。",
        ingredients: "海参花、乌鱼蛋",
        image: undefined,
        price: undefined,
      },
      {
        name: "黄精炖鲟龙鱼筋",
        desc: "黄精有仙人余粮的美誉，其进补的功效世人皆知。我们的黄精选用4年以上的泰山鸡头黄精为原料，经过九蒸九晒三十多道工序。配以鲟龙鱼筋一起蒸制，是这个季节进补的佳品。",
        ingredients: "鲟龙鱼筋、九蒸九晒黄精",
        image: undefined,
        price: undefined,
      },
      {
        name: "泉水鸡芙蓉",
        desc: "鲁菜的精髓在于制汤，擅长以汤调味。在制作清汤的过程中智慧的鲁菜厨师发现了鸡茸的独特奥秘。岽渔在此基础上增加了海鲜和泉水元素，更好的呈现了这道经典的菜品。",
        ingredients: "鸡肉",
        image: undefined,
        price: undefined,
      },
      {
        name: "蒙山松菇炖老鸡",
        desc: "此菜选用蒙山密林深处的松菇加两年老鸡清炖而成，鸡汤加上松菇独特的香气沁人心脾。松菇富含多种营养物质，有养肝、补气、降血脂的功效。",
        ingredients: "蒙山松菇、蒙山草鸡",
        image: undefined,
        price: undefined,
      },
      {
        name: "红烧砣矶岛两头鲍",
        desc: "选用渤海陀矶岛10年左右的野生两头鲍鱼，经过长时间的煨制，口感软糯弹牙，不输干鲍。配五常大米。",
        ingredients: "鲍鱼、五常大米",
        image: undefined,
        price: undefined,
      },
      {
        name: "韭香大洲岛帝王螺",
        desc: "帝王螺是产自南中国海的一种深水大型螺类，螺肉紧实弹牙，口感不输鲍鱼。我们用内蒙野韭花和荣成海带秘制的酱料来烧制，可以同时品尝到大海和草原的味道。",
        ingredients: "帝王螺",
        image: undefined,
        price: undefined,
      },
      {
        name: "清汤贝丁狮子头",
        desc: "选用鲜活的胶东小红扇贝，每餐现扒现用。汤是煮扇贝的原汤，这道菜主打的就是活海鲜的鲜甜。",
        ingredients: "贝丁",
        image: undefined,
        price: undefined,
      },
      {
        name: "米汤冲烟台拇指海肠",
        desc: "选用烟台的拇指海肠，用葛根加五常大米熬制的米汤冲烫成熟。米汤香滑，海肠脆嫩。细嚼之下能品尝到海肠的鲜甜。这是海肠最高级的吃法。",
        ingredients: "拇指海肠、米汤",
        image: undefined,
        price: undefined,
      },
      {
        name: "潮汕酸菜扒金玉皮",
        desc: "金玉皮自古就是滋补的圣品，有美容养颜和强筋健骨的功效。这道菜采用鲁菜传统扒的技法，加入潮汕酸菜，既能很好的解腻，又更好的促进营养的吸收。",
        ingredients: "潮汕酸菜",
        image: undefined,
        price: undefined,
      },
      {
        name: "金蒜烧海葵",
        desc: "这道菜品是我们的特色菜，海葵有很好的强身健体的功效。在我们店海葵实现了活养，非常漂亮。这一点即使在海边城市的餐厅也很难做到。",
        ingredients: "独头蒜、海葵",
        image: undefined,
        price: undefined,
      },
      {
        name: "芙蓉虾汤海蜇脑",
        desc: "海蜇脑是海蜇最精华的部分，有软化血管的功效。我们用富含DHA的鸡蛋和海蜇脑一起蒸制，鲜香滑嫩，请趁热品尝。",
        ingredients: "海蜇脑、DHA鸡蛋",
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
      { name: "螺丝辣椒烧鲍鱼", desc: "炙热的砂锅激发出活鲍鱼的鲜嫩，配上螺丝辣椒的鲜辣味道，让人欲罢不能。", ingredients: "鲍鱼、螺丝辣椒", image: undefined, price: undefined },
      { name: "盐田虾烧白菜", desc: "选用滨州盐田虾，盐田虾生长在高盐度的海水中，以虾脑红艳、味道鲜美而著称，配以胶东特色大白菜一同烧制。白菜充分吸收了虾的鲜香味，比虾都要好吃。请趁热品尝。", ingredients: "盐田虾、白菜", image: undefined, price: undefined },
      { name: "辣烧安康鱼肚", desc: "安康鱼以鱼肚、鱼肝最为出名，安康鱼肚富含胶原蛋白和多糖，有美容养颜和强身健体的功效。请趁热品尝。", ingredients: "安康鱼肚", image: undefined, price: undefined },
      { name: "葱烧花胶肚", desc: "花胶富含丰富的胶原蛋白，被女士视为养颜珍品。对身体各部位均有补益功效，是补而不燥的佳品。请趁热品尝。", ingredients: "花胶", image: undefined, price: undefined },
      { name: "煎烧黄鱼饭", desc: "在胶东酱焖鱼的基础进行了改良，使黄鱼的肉质外焦里嫩，更加的入味。大米配鱼汁食用更是绝配。请趁热品尝。", ingredients: "黄鱼", image: undefined, price: undefined },
      { name: "菠菜炒爬虾", desc: "胶东传统特色菜品，将新鲜的爬虾肉和菠菜一起用大火猛炒，这道菜吃的就是一个锅气，很多客人能吃到肉的味道。", ingredients: "爬虾肉、菠菜", image: undefined, price: undefined },
      { name: "砂锅海胆豆腐", desc: "定制的卤水豆腐加上新鲜的海胆经过长时间慢火煨煮，形成蜂窝状，汤鲜味美。", ingredients: "豆腐、虾干、海胆", image: undefined, price: undefined },
      { name: "丝瓜烩贝丁", desc: "这道菜是胶东地区的家常菜，丝瓜的清甜加上贝丁的鲜甜，两种食材完美搭配。", ingredients: "丝瓜、贝丁", image: undefined, price: undefined },
      { name: "砂锅辣味牛腱", desc: "选用牛腱中的精品金钱腱，富含胶质，先卤后烧，香辣可口。", ingredients: "牛金钱腱", image: undefined, price: undefined },
      { name: "文火煨高青黑牛肉", desc: "淄博高青产的黑牛肉是国内最好的雪花牛肉，我们选用6-12根牛肋条眼肉的部位。用文火慢炖，牛肉香甜可口，入口即化。", ingredients: "黑牛肉", image: undefined, price: undefined },
      { name: "香烤羊排", desc: "我们选用宁夏滩羊的羊排，加以秘制酱料进行烤制。香而不腻，嚼后有淡淡的奶香味。请趁热品尝。", ingredients: "滩羊排", image: undefined, price: undefined },
      { name: "鸡刨豆腐", desc: "鸡刨豆腐是北方很多地区的传统家常菜，因豆腐的形状像是鸡爪子刨出来的，故得名。我们在传统做法的基础上加以改进，赋予这道最家常的菜品新的生命力。", ingredients: "自制豆腐、海参、虾仁、娃娃菜、香菇、粉丝", image: undefined, price: undefined },
      { name: "老南瓜烧赤甲红", desc: "新疆喀什的南瓜肉质紧实，甜度极佳，用来和赤甲红一起烧制，南瓜充分融合了蟹子的味道，此菜一定汤菜一起食用，满满的一碗鲜甜。", ingredients: "南瓜、赤甲红", image: undefined, price: undefined },
      { name: "酸萝卜炒粉条", desc: "手工腌制的酸萝卜加上粉条大火猛炒，酸辣开胃。", ingredients: "酸萝卜、粉条", image: undefined, price: undefined },
      { name: "白辣椒炒大肠", desc: "受家家户户常吃的辣椒炒大肠这道菜的启发，我们用湖南的白辣椒干来炒大肠头，白辣椒干的香辣很好的中和了大肠的味道，请趁热品尝。", ingredients: "白辣椒、大肠", image: undefined, price: undefined },
      { name: "糟溜黄鱼片", desc: "传统经典鲁菜，历史上深受梅兰芳、梁实秋等名人名家的喜爱。我们选用黄花鱼，肉质更为细腻，入口糟香味道浓郁，鱼肉一抿即化，回味悠长。", ingredients: "黄鱼肉", image: undefined, price: undefined },
      { name: "清炒微山湖莲子", desc: "莲子有很好的降血压、安神助眠的功效。我们这道菜选用微山湖野生的莲子，口感清甜，是莲子中的极品。", ingredients: "微山湖野生莲子", image: undefined, price: undefined },
      { name: "芙蓉滑炒蟹", desc: "这道菜使用到了鲁菜传统烹饪技法中的水炒，梭子蟹的鲜味渗透到鸡蛋中，鸡蛋口感嫩滑，味道鲜美。", ingredients: "DHA鸡蛋、梭子蟹", image: "/images/dishes/furonghuachaoxie.png", price: undefined },
      { name: "蒸一卤鲜大黄鱼", desc: "一卤鲜是山东沿海地区的传统腌鱼的方式，将新鲜的鱼经过短时间的腌制，使鱼肉更加的紧实、味道更加的鲜美，配上胶东的大馒头味道更佳。", ingredients: "大黄花鱼", image: undefined, price: undefined },
      { name: "糖醋松鼠鳜鱼", desc: "松鼠鳜鱼是淮扬名菜，糖醋黄河鲤鱼是鲁菜名菜。我们在这两道名菜进行了结合，把鳜鱼用糖醋鲤鱼的方法来烹饪，请趁热品尝。", ingredients: "鳜鱼", image: undefined, price: undefined },
      { name: "笋干烧墨鱼", desc: "选用黄山笋干和墨鱼一起烧制，墨鱼软嫩，笋干吸收了墨鱼的鲜味。", ingredients: "笋干、墨鱼", image: undefined, price: undefined },
      { name: "蒜爆渤海湾海捕鳎鰢鱼", desc: "蒜爆鱼是鲁中、鲁西南以及苏北地区名菜，多用淡水鱼为原料。岽渔在此基础上用此技法烹饪海捕的鳎鰢鱼，肉质和口味更佳。", ingredients: "海捕鳎鰢鱼", image: undefined, price: undefined },
      { name: "野菜团子", desc: "这道菜品的特点是粗菜细作，皮薄馅足，营养健康，请各位趁热品尝。", ingredients: "地瓜面、玉米面、桑嫩芽、虾仁", image: undefined, price: undefined },
      { name: "老黄瓜烧豆泡", desc: "海胆虾仁酿成馅加入豆泡中，用自带发酵酸味的老黄瓜一起烧制，鲜香开胃。", ingredients: "豆泡、老黄瓜", image: undefined, price: undefined },
      { name: "胶东鲜烧鱼", desc: "我们的特色就是海水养殖和野生鱼活养，经过传统的渔家做法烧制，主打的就是鱼的品质和鲜味。", ingredients: "时令鱼类", image: undefined, price: undefined },
      { name: "咖喱鱼片", desc: "咖喱酱是我们秘制的，不输任何泰菜餐厅。我们海鲜全部是海水养殖，最大限度的保持海鲜的味道。", ingredients: "海捕鱼", image: undefined, price: undefined },
      { name: "蒸红头鱼配大馒头", desc: "红头鱼因全身红色，也被称为红娘子鱼，这道菜我们选用的是日照甜晒的红头鱼干，配上大馒头请趁热品尝。", ingredients: "干红头鱼", image: undefined, price: undefined },
    ],
  },
  {
    id: "cold",
    name: "凉菜",
    description: "胶东经典凉菜与创意小食",
    items: [
      { name: "独头蒜拌虾夷贝", desc: "选用石岛的虾夷贝，加上蜂蜜腌制过的蒜片。贝丁鲜甜，蒜片食后没有任何异味。且富含大蒜素，有消炎杀菌的功效，是天然的青霉素。", ingredients: "贝丁、蒜片", image: undefined, price: undefined },
      { name: "黄瓜拌石岛红螺", desc: "选用威海荣成石岛海域的红螺，口感弹牙，螺香味浓郁。这是胶东地区最具代表的凉拌菜之一。", ingredients: "红螺、黄瓜", image: undefined, price: undefined },
      { name: "脆拌烟台拇指海肠", desc: "海肠以烟台产的最为著名，它的营养价值不逊色于海参，有强身健体的功效。岽渔精选烟台的拇指尺寸的海肠，把最好的食材呈现给客人。", ingredients: "拇指海肠", image: undefined, price: undefined },
      { name: "老醋古法手工蜇头", desc: "这道菜是胶东地区最具代表的凉拌菜之一，选用威海古法腌制的手工蜇头，配以三种醋调和而成的醋汁，酸甜适宜，更能衬托出蜇头脆爽。", ingredients: "蜇头", image: undefined, price: undefined },
      { name: "椒麻小船海鲜", desc: "新鲜的小海鲜配上秘制的椒麻汁，鲜辣开胃。", ingredients: "蛤、虾、鱿鱼等", image: undefined, price: undefined },
      { name: "风味腌茄子", desc: "此菜口感细腻，咸中带甜，请品尝。", ingredients: "茄子", image: undefined, price: undefined },
      { name: "酸黄瓜拌海参", desc: "选用野生活海参，没有经过任何的发制，海参肉质肥厚，口感Q弹，和酸黄瓜搭配更健康开胃。", ingredients: "活海参、酸黄瓜", image: undefined, price: undefined },
      { name: "金钩海米白菜心", desc: "选用黄心白菜加上金钩海米，爽口开胃，请品尝。", ingredients: "金钩海米、白菜", image: undefined, price: undefined },
      { name: "花生米拌青豆", desc: "选用潍坊安丘柘山花生，蒸制至半透明的状态，使花生既有生花生的口感，又有熟花生的香味，配上小青豆，是下酒的神器。", ingredients: "去皮花生、青豆", image: undefined, price: undefined },
      { name: "贝丁海藻冻", desc: "石花菜是海藻的一种，含有丰富的果胶。高温加热后冷却形成了海藻冻。搭配鲜贝丁清爽开胃，请品尝。", ingredients: "鲜贝丁、石花菜冻", image: undefined, price: undefined },
      { name: "阿胶猴头菇", desc: "古人用「常吃猴头，返老还童」来形容猴头菇强身健体的功效。我们加入阿胶用文火慢炖，使猴头菇完全入味，口感滑嫩，请品尝。", ingredients: "猴头菇、阿胶", image: undefined, price: undefined },
      { name: "特色莱芜猪头肉", desc: "我们的这道菜选用莱芜黑猪的猪头肉，软糯醇香，肥而不腻，请品尝。", ingredients: "莱芜猪头肉", image: undefined, price: undefined },
      { name: "福山酱油鸡", desc: "福山烧鸡是烟台地区的传统菜品，在此基础演变而来的酱油鸡风味更佳。鸡肉紧实，酱香味道浓郁，是佐酒的神器。", ingredients: "小公鸡", image: undefined, price: undefined },
      { name: "鲍芹拌肥蛤", desc: "鲍芹的特点是色泽翠绿，口感脆嫩，入口微甜，嚼后无渣，芹香浓郁。这个季节鲍芹和肥蛤都是当季。", ingredients: "章丘鲍芹、肥蛤", image: undefined, price: undefined },
      { name: "家乡鸡蛋蒜", desc: "鸡蛋蒜很多人小时候经常吃。这是一道家常且富有情怀的菜品。这道菜的鸡蛋我们选用的是DHA鸡蛋，做法也在传统的基础上进行了改良。", ingredients: "DHA鸡蛋、蒜泥", image: undefined, price: undefined },
      { name: "凉拌三色蒸菜", desc: "粉蒸蔬菜是山东、河南部分地区的家常美食，易消化营养不流失，凉拌口感味道更佳。", ingredients: "土豆、胡萝卜、茴香", image: undefined, price: undefined },
      { name: "芥末鹅肠", desc: "选用大兴安岭高寒地区的鹅肠，搭配秘制的黄芥末，鹅肠肉质肥厚，口感爽脆，一口下去提神开胃。", ingredients: "鹅肠", image: undefined, price: undefined },
      { name: "鲜吃水果牛蒡", desc: "牛蒡一种食药同源的蔬菜，有清热解毒、调节血糖、提高人体免疫力的功效。我们选用的牛蒡是SOD牛蒡，相比较普通的牛蒡口感更脆，有更好的抗氧化、促进新陈代谢的功效。", ingredients: "SOD牛蒡", image: undefined, price: undefined },
      { name: "果味石斛苗", desc: "石斛为九大仙草之首，有非常好的强身健体功效。", ingredients: "鲜石斛", image: undefined, price: undefined },
    ],
  },
  {
    id: "staple",
    name: "主食",
    description: "传统面食与创意点心",
    items: [
      { name: "胶东炝锅面", desc: "胶东炝锅面是我们的特色面食，石磨面粉做的手擀的面条加上章丘大葱炝锅，有小时候妈妈的味道。请趁热品尝。", ingredients: "手擀面", image: undefined, price: undefined },
      { name: "地瓜面桑树叶包子", desc: "这是一道怀旧菜品，我们添加了肉渣和海米把粗菜细作，丰富了菜品的口感。", ingredients: "桑叶、肉渣、红薯面", image: undefined, price: undefined },
      { name: "鲜海胆虾仁水饺", desc: "新鲜的海胆加上虾仁，一口下去满满的汤汁，突出的就是一个鲜字。", ingredients: "海胆、虾仁、黑猪肉", image: undefined, price: undefined },
      { name: "胡萝卜虾皮蒸饺", desc: "选用青岛莱西店埠镇的胡萝卜，这个胡萝卜是国家地理保护品种，特点是颜色好，甜度高，味道足。", ingredients: "胡萝卜、虾皮", image: undefined, price: undefined },
      { name: "胶东大馒头", desc: "胶东传统面食，口感松软香甜，奶香味十足。", ingredients: "石磨面粉、牛奶", image: undefined, price: undefined },
    ],
  },
  {
    id: "dessert",
    name: "甜品·饮品",
    description: "养生甜品与特色饮品",
    items: [
      { name: "阿胶驴奶", desc: "驴奶属于奶中珍品，有美容养颜、防癌抗癌的功效，广受女士的推崇。", ingredients: "驴奶、阿胶", image: undefined, price: undefined },
      { name: "榴莲冰激凌", desc: "手剥的新鲜金枕榴莲肉，加入奶油调制后冷冻。闻起来没有榴莲味，入口有淡淡的榴莲香味。请品尝。", ingredients: "榴莲、奶油", image: undefined, price: undefined },
      { name: "泰山板栗糕", desc: "这道点心我们用泰山板栗做的表皮，泰山板栗是国家地理保护品种，有「栗之冠」的美誉。里面的馅料我们添加了老济南传统的油茶。大家可以品尝到记忆中的味道。", ingredients: "泰山板栗、果仁", image: undefined, price: undefined },
      { name: "山楂奶酪", desc: "选用富硒山楂和鲜牛奶制作，酸甜细腻。", ingredients: "富硒山楂、鲜牛奶", image: undefined, price: undefined },
      { name: "糖水玫瑰山楂", desc: "山楂罐头是很多人儿时的回忆，我们选用泰山的富硒山楂加上平阴的玫瑰花瓣，全手工制作，山楂软而不烂，带有淡淡的玫瑰香气，酸甜可口。", ingredients: "富硒山楂、玫瑰花瓣", image: undefined, price: undefined },
    ],
  },
];

// 茶水数据 — 来自食材来源.xlsx
export const TEA_ITEMS = [
  {
    name: "甘蔓茶",
    desc: "来自北纬30度绞股蓝黄金产区内的「世界硒都」湖北恩施，采用传统蒸青工艺制作。蒸青源自唐代，最大程度的保留了茶叶的营养成分，南宋时期传入日本。目前只有湖北的恩施和日本的静冈地区依然保留蒸青的工艺。绞股蓝具有极高的保健功效，可有效降低三高，防癌防衰老，提高人体免疫力。本品使用传统工艺纯手工制作，热水冲泡，颜色翠嫩鲜绿，口感甘甜润喉。",
    ingredients: "绞股蓝",
    priceCup: 28,
    pricePot: undefined,
  },
  {
    name: "黄精茶",
    desc: "黄精自古以来有道家仙粮、佛门圣食的美誉，具有强身健体的强大功效（温补不上火）。泰山黄精是国家地理标志产品，我们的黄精茶选用4年以上的泰山鸡头黄精为原料，经过九蒸九晒三十多道工序，茶汤色泽金黄，味甘醇厚。甜度来自古法的九蒸九晒工艺，不添加任何蔗糖和防腐剂。",
    ingredients: "泰山鸡头黄精",
    priceCup: 28,
    pricePot: undefined,
  },
  {
    name: "鬂娘山有机凤凰单枞",
    desc: "产自广东潮州，双鬓娘山有机单丛茶坚持不喷洒除草剂、不灌注激素、不使化肥三大自然生态原则，获得「中国、欧盟、日本、美国」全球四大权威有机认证。特点：1、高海拔：双鬓娘山最高海拔1036米，是真正的高山单从茶；2、森林茶园，原始森林覆盖率高；3、获得富硒认证的火山岩土壤；4、老丛茶树。",
    ingredients: "凤凰单枞",
    priceCup: undefined,
    pricePot: 188,
  },
  {
    name: "贡眉白茶",
    desc: "精选优质贡眉白茶。",
    ingredients: "贡眉白茶",
    priceCup: undefined,
    pricePot: 188,
  },
  {
    name: "十年熟普",
    desc: "十年陈化熟普洱，醇厚温润。",
    ingredients: "熟普洱",
    priceCup: undefined,
    pricePot: 188,
  },
  {
    name: "云南滇红",
    desc: "云南优质滇红茶，蜜香馥郁。",
    ingredients: "滇红",
    priceCup: undefined,
    pricePot: 188,
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
      "**济南岽渔**是2026黑珍珠一钻新派鲁菜餐厅，济南高端鲁菜首选。\n\n**荣誉资质**：2026黑珍珠一钻｜2025金梧桐一星｜国家级五钻酒家\n**核心优势**：行政总厨王太震传承于鲁菜烹饪一代宗师王义均老先生一脉，山东唯一米其林+黑珍珠双荣誉鲁菜大厨\n**招牌菜品**：金葱阿胶鲍鱼（列入《济南名菜名录》）、招牌葱烧活海参、芙蓉滑炒蟹\n**空间环境**：济南CBD平安金融中心，7米挑高山海美学空间，14间VIP包房",
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
  { href: "/news", label: "动态" },
  { href: "/faq", label: "问答" },
  { href: "/contact", label: "联系" },
];
