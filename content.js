// 擴充詞庫
const dictionary = {
  // 通用描述詞
  "special": "特色",
  "signature": "招牌",
  "house special": "店家特制",
  "chef's special": "主厨推荐",
  "seasonal": "季节限定",
  "popular": "热门",
  "authentic": "正宗",
  "traditional": "传统",
  "homestyle": "家常",
  "premium": "高级",
  "fresh": "新鲜",
  "best seller": "畅销",
  "recommended": "推荐",
  "limited": "限量",
  
  // 烹飪方法
  "steamed": "蒸",
  "grilled": "烤",
  "braised": "焖",
  "boiled": "煮",
  "chili stir-fried": "炝炒",
  "deep-fried": "炸",
  "pan-fried": "煎",
  "roasted": "烧",
  "seared": "煎封",
  "baked": "烤制",
  "raw": "生食",
  "dry-fried": "干煸",
  "twice cooked": "回锅",
  "water boiled": "水煮",
  "chili stir-fried american broccoli": "炝炒美芥兰",
  "chili stir-fried baby bok choy": "炝炒青江菜",
  "chili stir-fried mixed vegetables": "炝炒杂菜",
  "chili stir-fried napa cabbage": "炝炒白菜",
  "chili stir-fried peapod leafs": "炝炒豆苗",
  "chili stir-fried sliced potato": "炝炒土豆丝",
  "chili stir-fried spinach": "炝炒菠菜",
  "chili stir-fried taiwan cabbage": "炝炒包菜",
  
  // 調味料和醬料
  "salt": "盐",
  "pepper": "胡椒",
  "soy sauce": "酱油",
  "chili oil": "红油",
  "wasabi": "芥末",
  "garlic sauce": "蒜蓉酱",
  "spicy mayo": "辣味美乃滋",
  "sweet bean sauce": "甜面酱",
  "black vinegar": "陈醋",
  "oyster sauce": "蚝油",
  "sesame oil": "芝麻油",
  "fish sauce": "鱼露",
  "teriyaki": "照烧",
  "ponzu": "柑橘酱油",
  "miso": "味噌",
  "doubanjiang": "豆瓣酱",
  "hoisin sauce": "海鲜酱",
  "sriracha": "是拉差酱",
  "xo sauce": "XO酱",
  "chili": "辣椒",
  "dried chili": "干辣椒",
  "fresh chili": "青辣椒",
  "chili sauce": "辣酱",

  // 辣度等級
  "non-spicy": "不辣",
  "mild": "小辣",
  "medium spicy": "中辣",
  "spicy": "大辣",
  "extra spicy": "特辣",
  "numbing spicy": "麻辣",
  
  // 基礎食材
  "rice": "米饭",
  "noodles": "面条",
  "egg": "蛋",
  "tofu": "豆腐",
  "garlic": "蒜",
  "ginger": "姜",
  "onion": "洋葱",
  "scallion": "葱",
  "corn": "玉米",
  "mushroom": "蘑菇",
  "potato": "土豆",
  "cabbage": "白菜",
  "carrot": "胡萝卜",
  "celery": "芹菜",
  "bamboo shoots": "竹笋",
  "water chestnuts": "马蹄",
  "bean sprouts": "豆芽",
  
  // 基本詞彙
  "chicken": "鸡肉",
  "beef": "牛肉",
  "pork": "猪肉",
  "fish": "鱼",
  "rice": "米饭",
  "noodle": "面",
  "shrimp": "虾",
  "duck": "鸭",
  "lamb": "羊肉",
  "tofu": "豆腐",
  "egg": "蛋",
  "soup": "汤",
  "sauce": "酱",
  
  // 中式菜品
  "kung pao chicken": "宫保鸡丁",
  "szechuan chicken": "四川鸡丁",
  "mongolian chicken": "蒙古鸡肉",
  "hunan chicken": "湖南鸡丁",
  "black pepper chicken": "黑椒鸡",
  "cashew chicken": "腰果鸡丁",
  "orange chicken": "陈皮鸡",
  "sweet and sour chicken": "糖醋鸡",
  "lemon chicken": "柠檬鸡",
  "chicken with mixed vegetable": "什锦鸡肉",
  "beef with broccoli": "西兰花牛肉",
  "mongolian beef": "蒙古牛肉",
  "pepper steak": "黑椒牛排",
  "ma po tofu": "麻婆豆腐",
  "hot and sour soup": "酸辣汤",
  "wonton soup": "云吞汤",
  "egg drop soup": "蛋花汤",
  "fried rice": "炒饭",
  "lo mein": "捞面",
  "chow mein": "炒面",
  
  // 分類
  "poultry": "家禽",
  "beef & lamb": "牛羊肉",
  "seafood": "海鮮",
  "vegetables": "蔬菜",
  "appetizer": "前菜",
  "soup": "汤类",
  "rice & noodle": "饭面类",
  "chef special": "厨师推荐",

  // 日本料理
  "sushi": "寿司",
  "sashimi": "生鱼片",
  "ramen": "拉面",
  "udon": "乌冬面",
  "tempura": "天妇罗",
  "teriyaki": "照烧",
  "miso": "味增",
  "katsu": "炸猪排",
  "tonkatsu": "猪排",
  "chicken katsu": "鸡排",
  "donburi": "盖饭",
  "gyoza": "饺子",
  "yakitori": "烤鸡串",
  "edamame": "毛豆",
  "california roll": "加州卷",
  "spicy tuna roll": "辣金枪鱼卷",
  "dragon roll": "龙卷",
  "miso soup": "味噌湯",
  
  // 韓國料理
  "bibimbap": "拌饭",
  "kimchi": "泡菜",
  "bulgogi": "韩式烤肉",
  "galbi": "韩式烧肉",
  "japchae": "韩式炒粉丝",
  "tteokbokki": "年糕",
  "korean fried chicken": "韩式炸鸡",
  "sundubu": "嫩豆腐煲",
  "kimchi stew": "泡菜锅",
  "army stew": "部队锅",
  "korean bbq": "韩式烧烤",
  "spicy rice cake": "辣年糕",
  "korean ramen": "韩式拉面",
  
  // 美式快餐
  "hamburger": "汉堡",
  "cheeseburger": "起司汉堡",
  "french fries": "薯条",
  "chicken nuggets": "鸡块",
  "fried chicken": "炸鸡",
  "hot dog": "热狗",
  "pizza": "披萨",
  "sandwich": "三明治",
  "salad": "沙拉",
  "caesar salad": "凯萨沙拉",
  "chicken wings": "鸡翅",
  "buffalo wings": "水牛城辣鸡翅",
  "onion rings": "洋葱圈",
  "milkshake": "奶昔",
  
  // 飲料
  "bubble tea": "珍珠奶茶",
  "milk tea": "奶茶",
  "green tea": "绿茶",
  "black tea": "红茶",
  "oolong tea": "乌龙茶",
  "jasmine tea": "茉莉茶",
  "coffee": "咖啡",
  "americano": "美式咖啡",
  "latte": "拿铁",
  "cappuccino": "卡布奇诺",
  "espresso": "浓缩咖啡",
  "smoothie": "冰沙",
  "juice": "果汁",
  "lemonade": "柠檬汽水",
  "soda": "汽水",
  "boba": "珍珠",
  "taro": "芋头",
  "matcha": "抹茶",
  
  // 甜點
  "ice cream": "冰淇淋",
  "cake": "蛋糕",
  "cheesecake": "起司蛋糕",
  "pudding": "布丁",
  "mochi": "麻糬",
  "tiramisu": "提拉米苏",
  "waffle": "松饼",
  "pancake": "煎饼",
  "cookie": "餅乾",
  "brownie": "布朗尼",

  // 額外的配料和調味料
  "wasabi": "芥末",
  "soy sauce": "醬油",
  "sriracha": "是拉差醬",
  "mayo": "美乃滋",
  "ketchup": "番茄醬",
  "mustard": "芥末醬",
  "ranch": "田園沙拉醬",
  "honey": "蜂蜜",
  "maple syrup": "枫糖浆",

  // 酒類
  // 啤酒類
  "beer": "啤酒",
  "draft beer": "生啤酒",
  "bottled beer": "瓶装啤酒",
  "craft beer": "精酿啤酒",
  "light beer": "清淡啤酒",
  "lager": "拉格啤酒",
  "ale": "艾尔啤酒",
  "stout": "黑啤酒",
  "wheat beer": "小麦啤酒",
  "pilsner": "皮尔森啤酒",
  
  // 葡萄酒類
  "wine": "葡萄酒",
  "red wine": "紅酒",
  "white wine": "白酒",
  "rose wine": "玫瑰酒",
  "sparkling wine": "氣泡酒",
  "champagne": "香檳",
  "pinot noir": "黑皮諾",
  "cabernet": "卡本內",
  "merlot": "梅洛",
  "chardonnay": "夏多內",
  
  // 烈酒類
  "whiskey": "威士忌",
  "scotch": "蘇格蘭威士忌",
  "bourbon": "波本威士忌",
  "vodka": "伏特加",
  "gin": "琴酒",
  "rum": "朗姆酒",
  "tequila": "龍舌蘭",
  "sake": "清酒",
  "soju": "燒酒",
  "brandy": "白蘭地",
  "cognac": "干邑",
  
  // 雞尾酒
  "cocktail": "雞尾酒",
  "martini": "馬丁尼",
  "margarita": "瑪格麗特",
  "mojito": "莫希托",
  "bloody mary": "血腥瑪麗",
  "long island": "長島冰茶",
  "old fashioned": "古典調酒",
  "manhattan": "曼哈頓",
  "daiquiri": "黛綺莉",
  "moscow mule": "莫斯科騾子",
  "negroni": "尼格羅尼",
  "cosmopolitan": "大都會",
  
  // 其他酒類詞彙
  "on the rocks": "加冰",
  "neat": "纯饮",
  "straight up": "直饮",
  "with mixer": "加调和",
  "shaken": "摇制",
  "stirred": "搅拌",
  "blended": "冰沙式",
  "frozen": "冰冻",
  "with soda": "加苏打",
  "with tonic": "加通宁水",
  "with cola": "加可乐",
  "with juice": "加果汁",
  "double": "双份",
  "single": "单份",
  
  // 調酒用語
  "garnish": "装饰物",
  "twist": "柑橘皮",
  "olive": "橄榄",
  "cherry": "樱桃",
  "lime": "青柠",
  "lemon": "柠檬",
  "splash": "少许",
  "dash": "几滴",
  "rim": "杯口",
  "salt rim": "盐边",
  "sugar rim": "糖边",
  
  // 常見配料
  "soda water": "苏打水",
  "tonic water": "通宁水",
  "ginger ale": "姜汁汽水",
  "ginger beer": "姜啤",
  "club soda": "苏打水",
  "sparkling water": "气泡水",
  "cranberry juice": "蔓越莓汁",
  "orange juice": "橙汁",
  "pineapple juice": "菠萝汁",
  "simple syrup": "糖浆",
  "bitters": "苦精",
  "vermouth": "味美思",
  
  // 杯型
  "cocktail glass": "鸡尾酒杯",
  "highball": "高球杯",
  "rocks glass": "威士忌杯",
  "shot glass": "烈酒杯",
  "wine glass": "红酒杯",
  "champagne flute": "香槟杯",
  "beer mug": "啤酒杯",
  "martini glass": "马天尼杯",
  "copper mug": "铜杯",
  
  // 常見描述
  "house": "店家特调",
  "premium": "高级",
  "well": "基本",
  "top shelf": "顶级",
  "craft": "精酿",
  "draft": "生啤",
  "bottle": "瓶装",
  "can": "罐装",
  "import": "进口",
  "domestic": "国产",
  "aged": "陈年",
  "vintage": "年份",
  "reserve": "珍藏",
  
  // 酒精濃度
  "proof": "酒精度",
  "abv": "酒精度",
  "alcohol content": "酒精含量",
  "light": "淡",
  "strong": "烈",
  "non-alcoholic": "无酒精",
  "virgin": "无酒精版",
  
  // 酒吧小食
  "bar snacks": "酒吧小食",
  "nuts": "堅果",
  "chips": "洋芋片",
  "nachos": "墨西哥玉米片",
  "wings": "雞翅",
  "sliders": "迷你漢堡",
  "fries": "薯條",
  "calamari": "炸魷魚",
  "pretzels": "蝴蝶圈餅",
  "popcorn": "爆米花",

  // 壽司卷類
  "roll": "卷",
  "hand roll": "手卷",
  "california roll": "加州卷",
  "spicy tuna roll": "辣金枪鱼卷",
  "dragon roll": "龙卷",
  "rainbow roll": "彩虹卷",
  "philadelphia roll": "费城卷",
  "spider roll": "蜘蛛卷",
  "vegetable roll": "蔬菜卷",
  "avocado roll": "牛油果卷",
  "cucumber roll": "黄瓜卷",
  "salmon roll": "三文鱼卷",
  "eel roll": "鳗鱼卷",
  "tempura roll": "天妇罗卷",
  "dynamite roll": "炸虾卷",
  "alaska roll": "阿拉斯加卷",
  
  // 生魚片類
  "sashimi": "生鱼片",
  "salmon sashimi": "三文鱼生鱼片",
  "tuna sashimi": "金枪鱼生鱼片",
  "yellowtail sashimi": "黄尾鱼生鱼片",
  "hamachi": "黄尾鱼",
  "maguro": "金枪鱼",
  "sake": "三文鱼",
  "unagi": "鳗鱼",
  "tako": "章鱼",
  "ebi": "虾",
  "hotate": "扇贝",
  "ikura": "三文鱼子",
  "tobiko": "飞鱼子",
  "masago": "柳叶鱼子",
  
  // 握壽司類
  "nigiri": "握壽司",
  "salmon nigiri": "鮭魚握壽司",
  "tuna nigiri": "鮪魚握壽司",
  "eel nigiri": "鰻魚握壽司",
  "shrimp nigiri": "蝦握壽司",
  
  // 其他日本料理用語
  "wasabi": "芥末",
  "ginger": "薑片",
  "soy sauce": "醬油",
  "ponzu": "柑橘醬油",
  "spicy mayo": "辣味美乃滋",
  "eel sauce": "鰻魚醬",
  "tempura": "天婦羅",
  "miso": "味噌",
  "seaweed": "海苔",
  "rice": "壽司米",
  "sesame": "芝麻",
  
  // 組合
  "sushi combo": "壽司拼盤",
  "sashimi combo": "生鱼片拼盘",
  "boat": "船盤",
  "party platter": "派對拼盤",
  "chef's special": "主廚特選",
  "omakase": "廚師發辦",
  "combo": "套餐",
  "side dish": "配菜",
  "beverage": "饮品",

  // 日料分類
  "soup & salad": "汤和沙拉",
  "carpaccio": "生鱼片",
  "donburi": "盖饭",
  "ramen": "拉面",
  "poke bowl": "生鱼片盖饭",
  "nigiri": "握寿司",
  "signature rolls": "招牌寿司卷",
  "regular rolls": "普通寿司卷",
  "hand rolls": "手卷",
  "vegetable rolls": "素食寿司卷",
  
  // 常見後綴
  "(lunch)": "（午餐）",
  "(dinner)": "（晚餐）",
  "(per pc)": "（每件）",
  
  // 更多日料分類
  "appetizer": "开胃菜",
  "sashimi": "生鱼片",
  "tempura": "天妇罗",
  "udon": "乌冬面",
  "bento": "便当",
  "combination": "套餐",
  "special rolls": "特色寿司卷",
  "party platter": "派对拼盘",
  "side dishes": "配菜",
  "dessert": "甜点",
  
  // 常見組合
  "lunch special": "午餐特价",
  "dinner special": "晚餐特价",
  "chef's special": "主厨推荐",
  "house special": "店家特选",
  "combo": "套餐",

  // 飲料分類
  "slushies": "冰沙",
  "brew tea": "现泡茶",
  "fruit tea": "水果茶",
  "fresh tea": "鲜茶",
  "yakult": "养乐多",
  "smoothies": "冰沙",
  "coffee": "咖啡",
  "seasonal drinks": "季节限定",
  "signature drinks": "招牌饮品",
  
  // 杯型
  "regular": "正常杯",
  "large": "大杯",
  "medium": "中杯",
  "small": "小杯",
  "extra large": "特大杯",
  
  // 小料
  "toppings": "加料",
  "pearl": "珍珠",
  "grass jelly": "仙草",
  "herbal jelly": "仙草",
  "red bean": "红豆",
  "coconut jelly": "椰果",
  "aloe": "芦荟",
  "crystal boba": "水晶珍珠",
  "brown sugar boba": "黑糖珍珠",
  "tapioca": "木薯粉圆",
  "sago": "西米",
  "cheese foam": "芝士奶盖",
  "cream top": "奶盖",
  
  // 甜度
  "sugar level": "糖度",
  "extra sweet": "全糖",
  "regular sweet": "正常糖",
  "half sweet": "半糖",
  "quarter sweet": "微糖",
  "less sweet": "少糖",
  "no sugar": "无糖",
  "100% sugar": "全糖",
  "70% sugar": "七分糖",
  "50% sugar": "半糖",
  "30% sugar": "三分糖",
  "0% sugar": "无糖",
  
  // 冰度
  "ice level": "冰度",
  "extra ice": "正常冰",
  "regular ice": "正常冰",
  "less ice": "少冰",
  "half ice": "半冰",
  "no ice": "去冰",
  "warm": "温",
  "hot": "热",
  "room temperature": "常温",
  
  // 常見配料
  "black tea": "红茶",
  "green tea": "绿茶",
  "oolong tea": "乌龙茶",
  "jasmine tea": "茉莉茶",
  "earl grey": "伯爵茶",
  "matcha": "抹茶",
  "fresh milk": "鲜奶",
  "whole milk": "全脂奶",
  "oat milk": "燕麦奶",
  "almond milk": "杏仁奶",
  "soy milk": "豆浆",
  
  // 常見描述
  "classic": "经典",
  "premium": "特级",
  "fresh": "新鲜",
  "hand-crafted": "手工",
  "seasonal": "季节限定",
  "recommended": "推荐",
  "best seller": "畅销",
  "new": "新品",

  // 中式前菜
  "appetizers": "前菜",
  "cold dishes": "凉菜",
  "hot appetizers": "热前菜",
  
  // 凉菜
  "cucumber salad": "凉拌黄瓜",
  "seaweed salad": "凉拌海带",
  "spicy beef tendon": "麻辣牛筋",
  "sliced beef and ox tongue": "夫妻肺片",
  "wood ear mushroom": "凉拌木耳",
  "jellyfish": "凉拌海蜇",
  "smoked duck": "烟熏鸭",
  "five spice beef": "五香牛肉",
  "marinated tofu": "卤水豆腐",
  "preserved egg": "皮蛋",
  "century egg": "皮蛋",
  "pickled cucumber": "腌黄瓜",
  "bean curd strips": "凉拌腐竹",
  "spicy chicken feet": "凉拌鸡爪",
  "shredded chicken": "凉拌鸡丝",
  
  // 热前菜
  "spring rolls": "春卷",
  "egg rolls": "蛋卷",
  "scallion pancake": "葱油饼",
  "turnip cake": "萝卜糕",
  "radish cake": "萝卜糕",
  "pan fried dumplings": "锅贴",
  "steamed dumplings": "蒸饺",
  "soup dumplings": "小笼包",
  "crab rangoon": "蟹角",
  "salt and pepper wings": "椒盐鸡翅",
  "lettuce wraps": "生菜包",
  "sesame balls": "芝麻球",
  "crispy tofu": "炸豆腐",
  
  // 点心
  "dim sum": "点心",
  "shumai": "烧卖",
  "har gow": "虾饺",
  "rice noodle roll": "肠粉",
  "BBQ pork bun": "叉烧包",
  "egg tart": "蛋挞",
  "sticky rice in lotus leaf": "糯米鸡",
  "chicken feet": "凤爪",
  "beef tripe": "牛肚",
  
  // 汤类
  "hot and sour soup": "酸辣汤",
  "wonton soup": "云吞汤",
  "egg drop soup": "蛋花汤",
  "west lake beef soup": "西湖牛肉羹",
  "seafood tofu soup": "海鲜豆腐汤",
  "corn soup": "玉米汤",
  
  // 常见配菜
  "pickled vegetables": "咸菜",
  "preserved vegetables": "榨菜",
  "chinese cabbage": "白菜",
  "bamboo shoots": "竹笋",
  "water chestnuts": "马蹄",
  "dried lily flowers": "黄花菜",
  "black fungus": "木耳",
  "dried bean curd": "腐竹",
  "chinese celery": "芹菜",
  "chinese broccoli": "芥兰",
  "bok choy": "白菜",

  // 粵式點心
  "shrimp dumpling": "虾饺",
  "pork dumpling": "烧卖",
  "rice roll": "肠粉",
  "BBQ pork bun": "叉烧包",
  "custard bun": "奶黄包",
  "phoenix claw": "凤爪",
  "beef tendon": "牛筋",
  "beef tripe": "牛肚",
  "turnip cake": "萝卜糕",
  "taro cake": "芋头糕",
  "water chestnut cake": "马蹄糕",
  "egg tart": "蛋挞",
  "mango pudding": "芒果布丁",
  "sesame ball": "煎堆",
  
  // 粵式海鮮
  "lobster": "龙虾",
  "crab": "蟹",
  "abalone": "鲍鱼",
  "sea cucumber": "海参",
  "fish maw": "花胶",
  "geoduck": "象拔蚌",
  "scallop": "带子",
  "dried scallop": "瑶柱",
  "dried oyster": "蚝豉",
  "conch": "海螺",
  "squid": "鱿鱼",
  "clam": "蛤蜊",
  
  // 粵式燒臘
  "roasted duck": "烧鸭",
  "BBQ pork": "叉烧",
  "roasted pork belly": "烧肉",
  "soy sauce chicken": "豉油鸡",
  "white cut chicken": "白切鸡",
  "roasted goose": "烧鹅",
  "preserved sausage": "腊肠",
  "preserved duck": "腊鸭",
  
  // 粵式湯品
  "double-boiled soup": "炖汤",
  "fish maw soup": "花胶汤",
  "black chicken soup": "乌鸡汤",
  "pork bone soup": "猪骨汤",
  "watercress soup": "西洋菜汤",
  "lotus root soup": "莲藕汤",
  "winter melon soup": "冬瓜汤",
  
  // 粵式小炒
  "beef with oyster sauce": "蚝油牛肉",
  "sweet and sour pork": "咕噜肉",
  "salt and pepper tofu": "椒盐豆腐",
  "salt and pepper squid": "椒盐鱿鱼",
  "beef chow fun": "干炒牛河",
  "singapore noodles": "星洲炒米",
  "seafood fried rice": "海鲜炒饭",
  "yang chow fried rice": "扬州炒饭",
  
  // 粵式煲仔菜
  "clay pot rice": "煲仔饭",
  "clay pot chicken": "煲仔鸡",
  "clay pot beef": "煲仔牛肉",
  "clay pot fish head": "煲仔鱼头",
  
  // 粵式特色
  "congee": "粥",
  "preserved egg congee": "皮蛋瘦肉粥",
  "fish belly congee": "鱼片粥",
  "beef congee": "牛肉粥",
  "century egg": "皮蛋",
  "salted egg": "咸蛋",
  "Chinese sausage": "腊肠",
  "dried shrimp": "虾米",
  "dried scallop": "瑶柱",
  "black moss": "发菜",
  "bamboo pith": "竹笙",

  // 活海鮮
  "live seafood": "活海鲜",
  "live fish": "活鱼",
  "live lobster": "活龙虾",
  "live crab": "活蟹",
  "live shrimp": "活虾",
  "live clam": "活蛤",
  "live oyster": "活生蚝",
  "live geoduck": "活象拔蚌",
  "live abalone": "活鲍鱼",
  "live scallop": "活带子",
  "live mussel": "活青口",
  "live razor clam": "活蛏子",
  
  // 海鮮做法
  "steamed with ginger and scallion": "姜葱蒸",
  "steamed with black bean sauce": "豉汁蒸",
  "pan-fried with soy sauce": "豉油煎",
  "braised with oyster sauce": "蚝油焖",
  "salt and pepper style": "椒盐",
  "with XO sauce": "XO酱",
  "in clay pot": "煲仔",
  "in supreme soup": "上汤",
  "sashimi style": "刺身",
  
  // 重量單位
  "per pound": "每磅",
  "market price": "时价",
  "seasonal price": "季节价",
  "half order": "半份",
  "full order": "全份",
  "whole fish": "全条",
  "half fish": "半条",
  
  // 常見描述
  "fresh": "新鲜",
  "live": "活",
  "seasonal": "时令",
  "wild caught": "野生",
  "farm raised": "养殖",
  "premium": "精选",
  "jumbo": "大号",
  "medium": "中号",
  "small": "小号",

  // 麻辣燙
  "mala tang": "麻辣烫",
  "spicy pot": "麻辣烫",
  "choose your ingredients": "自选食材",
  "build your own bowl": "自选食材",
  
  // 食材選擇
  "beef tripe": "牛百叶",
  "beef tendon": "牛筋",
  "beef balls": "牛肉丸",
  "fish balls": "鱼丸",
  "shrimp balls": "虾丸",
  "cuttlefish balls": "墨鱼丸",
  "quail eggs": "鹌鹑蛋",
  "tofu puffs": "豆腐泡",
  "lotus root": "莲藕",
  "potato slices": "土豆片",
  "sweet potato": "红薯",
  "kelp": "海带",
  "enoki mushroom": "金针菇",
  "wood ear": "木耳",
  "rice cake": "年糕",
  "glass noodles": "粉丝",
  "instant noodles": "泡面",
  
  // 乾鍋
  "dry pot": "干锅",
  "dry pot chicken": "干锅鸡",
  "dry pot frog": "干锅牛蛙",
  "dry pot fish": "干锅鱼",
  "dry pot ribs": "干锅排骨",
  "dry pot intestines": "干锅肥肠",
  "dry pot cauliflower": "干锅花菜",
  "dry pot mushroom": "干锅菌菇",
  "dry pot tofu": "干锅豆腐",
  "dry pot crab": "干锅螃蟹",
  "dry pot shrimp": "干锅虾",
  
  // 配料和調味
  "spicy level": "辣度",
  "extra spicy": "特辣",
  "medium spicy": "中辣",
  "mild spicy": "微辣",
  "non spicy": "不辣",
  "numbing": "麻",
  "mala flavor": "麻辣味",
  "garlic sauce": "蒜香",
  "cumin flavor": "孜然味",
  "black pepper": "黑椒味",
  "cilantro": "香菜",
  "green onion": "葱花",
  "sesame paste": "芝麻酱",
  "peanut sauce": "花生酱",
  "chili oil": "红油",
  "vinegar": "醋",
  
  // 常見描述
  "signature": "招牌",
  "house special": "店家特制",
  "spicy pot base": "麻辣汤底",
  "dry pot base": "干锅底料",
  "choose spiciness": "选择辣度",
  "add noodles": "加面",
  "extra sauce": "加汤",
  "extra spice": "加辣",

  // 火鍋鍋底
  "hot pot base": "锅底",
  "split pot": "鸳鸯锅",
  "spicy pot": "麻辣锅",
  "bone broth": "骨汤锅",
  "tomato pot": "番茄锅",
  "mushroom pot": "菌菇锅",
  "herbal pot": "药膳锅",
  "seafood pot": "海鲜锅",
  "kimchi pot": "泡菜锅",
  "sichuan spicy": "川式麻辣",
  "satay pot": "沙茶锅",
  "plain pot": "清汤锅",
  "pickled cabbage pot": "酸菜锅",
  "coconut chicken pot": "椰子鸡锅",
  "beef tallow pot": "牛油锅",
  
  // 火鍋食材
  // 肉類
  "sliced beef": "牛肉片",
  "premium beef": "精选牛肉",
  "wagyu beef": "和牛",
  "lamb slices": "羊肉片",
  "pork belly": "五花肉",
  "chicken slices": "鸡肉片",
  
  // 丸類
  "beef balls": "牛肉丸",
  "fish balls": "鱼丸",
  "shrimp balls": "虾丸",
  "lobster balls": "龙虾丸",
  "cuttlefish balls": "墨鱼丸",
  "beef tendon balls": "牛筋丸",
  "pork balls": "猪肉丸",
  
  // 海鮮類
  "fresh shrimp": "鲜虾",
  "fish fillets": "鱼片",
  "squid": "鱿鱼",
  "mussels": "青口",
  "clams": "蛤蜊",
  "crab": "螃蟹",
  
  // 豆製品
  "tofu": "豆腐",
  "fried tofu": "炸豆腐",
  "tofu skin": "豆皮",
  "frozen tofu": "冻豆腐",
  
  // 蔬菜菇類
  "chinese cabbage": "白菜",
  "spinach": "菠菜",
  "corn": "玉米",
  "mushrooms": "蘑菇",
  "enoki mushrooms": "金针菇",
  "shiitake mushrooms": "香菇",
  "crown daisy": "茼蒿",
  "lettuce": "生菜",
  "watercress": "西洋菜",
  
  // 其他配菜
  "udon": "乌冬面",
  "instant noodles": "泡面",
  "vermicelli": "粉丝",
  "egg dumplings": "蛋饺",
  "frozen dumplings": "速冻饺子",
  "lotus root": "莲藕",
  "potato slices": "土豆片",
  
  // 醬料
  "dipping sauce": "蘸料",
  "sesame sauce": "芝麻酱",
  "peanut sauce": "花生酱",
  "soy sauce": "生抽",
  "chili oil": "辣油",
  "sha cha sauce": "沙茶酱",
  "garlic sauce": "蒜蓉酱",
  "seafood sauce": "海鲜酱",
  
  // 火鍋相關描述
  "spiciness level": "辣度",
  "extra spicy": "特辣",
  "medium spicy": "中辣",
  "mild spicy": "微辣",
  "non-spicy": "不辣",
  "soup base": "汤底",
  "add soup": "加汤",
  "cooking time": "煮多久",
  "well done": "全熟",
  "medium": "七分熟",
  "rare": "五分熟",
  "all you can eat": "自助餐",
  "per person": "每位",
  "minimum order": "最低消费",
  "service time": "用餐时间",

  // 自助餐相關
  "AYCE": "自助餐",
  "all you can eat": "自助餐",
  "buffet": "自助餐",
  "lunch buffet": "午餐自助",
  "dinner buffet": "晚餐自助",
  "weekend buffet": "周末自助",
  "holiday buffet": "节日自助",
  "brunch buffet": "早午自助",
  
  // 時段和價格
  "lunch hours": "午市时间",
  "dinner hours": "晚市时间",
  "weekday lunch": "平日午餐",
  "weekday dinner": "平日晚餐",
  "weekend lunch": "周末午餐",
  "weekend dinner": "周末晚餐",
  "holiday price": "节日价格",
  "regular price": "正常价格",
  "children price": "儿童价格",
  "senior price": "老人价格",
  
  // 用餐規則
  "time limit": "用餐时限",
  "2 hour limit": "2小时限制",
  "90 minutes": "90分钟",
  "per person": "每位",
  "minimum charge": "最低消费",
  "reservation required": "需要预约",
  "walk-in welcome": "欢迎散客",
  
  // 自助餐規則
  "leftovers charged": "剩菜收费",
  "no waste policy": "禁止浪费",
  "no sharing": "禁止分享",
  "no takeout": "禁止打包",
  "drinks included": "包含饮料",
  "drinks extra": "饮料另计",
  "dessert included": "包含甜点",
  "dessert bar": "甜点吧",
  
  // 自助餐檯
  "sushi bar": "寿司台",
  "grill station": "烧烤台",
  "carving station": "切肉台",
  "seafood station": "海鲜台",
  "salad bar": "沙拉吧",
  "hot food station": "热菜台",
  "cold food station": "冷菜台",
  "noodle station": "面食台",
  "dessert station": "甜点台",
  "ice cream station": "冰淇淋台",
  "beverage station": "饮料台",
  
  // 服務相關
  "refill": "续添",
  "self-service": "自助",
  "server assisted": "服务员协助",
  "made to order": "现点现做",
  "fresh made": "新鲜制作",
  "chef special": "厨师特制",
  "seasonal items": "季节限定",
  "while supplies last": "限量供应",
  "rotating menu": "轮换菜单",
  "daily special": "每日特选",

  // 早茶時段
  "dim sum hours": "早茶时间",
  "morning tea": "早茶",
  "yum cha": "饮茶",
  "breakfast": "早市",
  "brunch": "早午市",
  "tea time": "下午茶",
  
  // 點心類
  // 蒸點
  "shrimp dumpling": "虾饺",
  "har gow": "虾饺",
  "siu mai": "烧卖",
  "pork dumpling": "烧卖",
  "spare ribs": "排骨",
  "chicken feet": "凤爪",
  "beef tripe": "牛肚",
  "rice noodle roll": "肠粉",
  "shrimp rice roll": "虾肠粉",
  "beef rice roll": "牛肉肠粉",
  "bbq pork rice roll": "叉烧肠粉",
  "steamed bun": "蒸包",
  "custard bun": "奶黄包",
  "bbq pork bun": "叉烧包",
  "vegetable bun": "菜包",
  "lotus seed bun": "莲蓉包",
  
  // 煎炸點
  "spring roll": "春卷",
  "egg roll": "蛋卷",
  "turnip cake": "萝卜糕",
  "taro cake": "芋头糕",
  "water chestnut cake": "马蹄糕",
  "pan fried dumpling": "锅贴",
  "wu gok": "芋角",
  "taro puff": "芋角",
  "sesame ball": "煎堆",
  "deep fried shrimp dumpling": "炸虾饺",
  
  // 甜點
  "egg tart": "蛋挞",
  "mango pudding": "芒果布丁",
  "tofu pudding": "豆腐花",
  "sweet soup": "糖水",
  "red bean soup": "红豆糖水",
  "mango sago": "杨枝甘露",
  "sweet bun": "糖包",
  "coconut bun": "椰丝包",
  "pineapple bun": "菠萝包",
  
  // 茶類
  "jasmine tea": "茉莉茶",
  "pu-erh tea": "普洱茶",
  "chrysanthemum tea": "菊花茶",
  "oolong tea": "乌龙茶",
  "ti kuan yin": "铁观音",
  "bo lei": "普洱",
  
  // 粥品
  "congee": "粥",
  "century egg congee": "皮蛋瘦肉粥",
  "fish congee": "鱼片粥",
  "beef congee": "牛肉粥",
  "sampan congee": "艇仔粥",
  "preserved egg": "皮蛋",
  
  // 早茶用語
  "tea house": "茶楼",
  "dim sum cart": "点心车",
  "push cart": "推车",
  "order sheet": "点心单",
  "chopsticks": "筷子",
  "tea pot": "茶壶",
  "tea cup": "茶杯",
  "bill": "账单",
  "check": "账单",
  "service charge": "服务费",
  
  // 常見描述
  "steamed": "蒸",
  "pan fried": "煎",
  "deep fried": "炸",
  "baked": "烤",
  "house special": "店家特制",
  "chef recommendation": "厨师推荐",
  "traditional": "传统",
  "homemade": "自制",
  "seasonal": "季节限定",
  "weekend only": "周末限定",

  // 常見啤酒品牌
  "budweiser": "百威",
  "bud light": "百威淡啤",
  "coors light": "科尔斯淡啤",
  "miller lite": "米勒淡啤",
  "heineken": "喜力",
  "corona": "科罗娜",
  "stella artois": "时代",
  "blue moon": "蓝月亮",
  "guinness": "健力士",
  "samuel adams": "山姆亚当斯",
  "michelob ultra": "麦克劳超淡",
  "modelo": "莫德洛",
  "pabst blue ribbon": "蓝带啤酒",
  
  // 汽水類型
  "soft drinks": "汽水",
  "fountain drinks": "机器汽水",
  "canned drinks": "罐装饮料",
  "bottled drinks": "瓶装饮料",
  "mineral water": "矿泉水",
  "flavored water": "风味水",
  
  // 常見汽水品牌
  "coca cola": "可口可乐",
  "coke": "可乐",
  "diet coke": "健怡可乐",
  "coke zero": "零度可乐",
  "pepsi": "百事可乐",
  "diet pepsi": "健怡百事",
  "sprite": "雪碧",
  "7up": "七喜",
  "dr pepper": "胡椒博士",
  "mountain dew": "激浪",
  "fanta": "芬达",
  "root beer": "根汁汽水",
  "ginger ale": "姜汁汽水",
  
  // 容量描述
  "pitcher": "扎啤",
  "pint": "品脱",
  "glass": "杯",
  
  // 其他描述
  "ice cold": "冰镇",
  "on tap": "生啤",
  "imported": "进口",
  "limited edition": "限量版",
  "local brew": "本地精酿",
  "happy hour": "欢乐时光",
  "beer special": "啤酒特价",
  "drink special": "饮品特价",
  "refills": "续杯",
  "free refills": "免费续杯",

  // Seafood Boil 相關
  "seafood boil": "手抓海鲜",
  "cajun style": "卡真风味",
  "louisiana style": "路易斯安那风味",
  "by the pound": "按磅计价",
  
  // 海鮮種類
  "crawfish": "小龙虾",
  "whole crawfish": "整只小龙虾",
  "head-on shrimp": "带头虾",
  "headless shrimp": "去头虾",
  "snow crab legs": "雪蟹腿",
  "king crab legs": "帝王蟹腿",
  "dungeness crab": "珍宝蟹",
  "blue crab": "蓝蟹",
  "green mussels": "青口",
  "black mussels": "黑口",
  "manila clams": "蛤蜊",
  "lobster tail": "龙虾尾",
  "sausage": "香肠",
  "corn": "玉米",
  "potato": "土豆",
  
  // 調味/醬料
  "garlic butter": "蒜蓉黄油",
  "lemon pepper": "柠檬胡椒",
  "cajun": "卡真",
  "old bay": "老湾调料",
  "special sauce": "特制酱料",
  "house sauce": "店家秘制",
  "butter sauce": "黄油酱",
  "original": "原味",
  "extra sauce": "加汤",
  
  // 辣度
  "non spicy": "不辣",
  "mild": "小辣",
  "medium": "中辣",
  "hot": "大辣",
  "extra hot": "特辣",
  "crazy hot": "变态辣",
  
  // 配菜
  "corn on the cob": "玉米棒",
  "red potatoes": "小土豆",
  "sausage": "香肠",
  "boiled eggs": "水煮蛋",
  "garlic bread": "蒜蓉面包",
  
  // 工具
  "bib": "围兜",
  "gloves": "手套",
  "crackers": "蟹钳",
  "seafood tools": "海鲜工具",
  
  // 組合餐
  "combo": "套餐",
  "family combo": "家庭套餐",
  "party size": "派对套餐",
  "add-ons": "额外添加",
  "extra sides": "额外配菜",
  "market price": "时价",
  
  // 烹飪程度
  "well done": "全熟",
  "medium well": "八分熟",
  "medium": "七分熟",
  "juicy": "多汁",
  "shell on": "带壳",
  "peeled": "去壳",

  // 和牛等級
  "wagyu": "和牛",
  "japanese wagyu": "日本和牛",
  "australian wagyu": "澳洲和牛",
  "american wagyu": "美国和牛",
  "kobe beef": "神户牛肉",
  "a5 wagyu": "A5和牛",
  "a4 wagyu": "A4和牛",
  "prime grade": "极品级",
  "grade": "等级",
  "marbling": "油花",
  "marbling score": "油花分数",
  "bms": "油花等级",
  
  // 部位
  "ribeye": "肋眼",
  "striploin": "西冷",
  "tenderloin": "里脊",
  "filet mignon": "菲力",
  "sirloin": "上腰肉",
  "chuck roll": "肩胛肉",
  "short plate": "腹肉",
  "brisket": "胸肉",
  "short rib": "牛小排",
  "tongue": "牛舌",
  "outside skirt": "横隔膜",
  "top blade": "牛肩",
  
  // 重量和切法
  "sliced": "切片",
  "cubed": "切块",
  "diced": "丁块",
  "ground": "绞肉",
  "whole cut": "整块",
  "thin sliced": "薄切",
  "thick cut": "厚切",
  "by the ounce": "按盎司",
  "by weight": "按重量",
  
  // 烹飪方式
  "seared": "煎封",
  "grilled": "烤制",
  "teppanyaki": "铁板烧",
  "shabu shabu": "涮涮锅",
  "sukiyaki": "寿喜烧",
  "yakiniku": "烧肉",
  "tataki": "炙烤",
  "raw": "生食",
  
  // 熟度
  "rare": "三分熟",
  "medium rare": "五分熟",
  "medium": "七分熟",
  "medium well": "八分熟",
  "well done": "全熟",
  
  // 配菜和醬料
  "wasabi": "山葵",
  "soy sauce": "酱油",
  "ponzu": "柑橘酱油",
  "garlic chips": "蒜片",
  "truffle": "松露",
  "sea salt": "海盐",
  "black pepper": "黑胡椒",
  "yuzu kosho": "柚子胡椒",
  
  // 套餐
  "wagyu set": "和牛套餐",
  "omakase": "主厨特选",
  "tasting menu": "品尝套餐",
  "premium set": "高级套餐",
  "lunch set": "午市套餐",
  "dinner set": "晚市套餐",
  
  // 常見描述
  "premium": "顶级",
  "signature": "招牌",
  "seasonal": "季节限定",
  "imported": "进口",
  "authentic": "正宗",
  "certified": "认证",
  "exclusive": "独家",
  "limited": "限量",

  // 基礎壽司卷
  "sushi roll": "寿司卷",
  "hand roll": "手卷",
  "cut roll": "切卷",
  "inside out roll": "反卷",
  "tempura roll": "天妇罗卷",
  "baked roll": "烤制卷",
  "deep fried roll": "炸卷",
  
  // 經典卷物
  "california roll": "加州卷",
  "spicy tuna roll": "辣金枪鱼卷",
  "philadelphia roll": "费城卷",
  "alaska roll": "阿拉斯加卷",
  "rainbow roll": "彩虹卷",
  "dragon roll": "龙卷",
  "spider roll": "蜘蛛卷",
  "tiger roll": "虎纹卷",
  "caterpillar roll": "毛毛虫卷",
  "volcano roll": "火山卷",
  "dynamite roll": "炸弹卷",
  "vegas roll": "拉斯维加斯卷",
  "boston roll": "波士顿卷",
  "seattle roll": "西雅图卷",
  "new york roll": "纽约卷",
  
  // 特色卷物
  "crunch roll": "脆脆卷",
  "lion king roll": "狮王卷",
  "godzilla roll": "哥斯拉卷",
  "ninja roll": "忍者卷",
  "samurai roll": "武士卷",
  "crazy roll": "疯狂卷",
  "sexy roll": "性感卷",
  "red dragon roll": "红龙卷",
  "black dragon roll": "黑龙卷",
  "golden dragon roll": "金龙卷",
  "paradise roll": "天堂卷",
  "sunset roll": "日落卷",
  "sunrise roll": "日出卷",
  
  // 素食卷物
  "vegetable roll": "蔬菜卷",
  "cucumber roll": "黄瓜卷",
  "avocado roll": "牛油果卷",
  "asparagus roll": "芦笋卷",
  "mushroom roll": "蘑菇卷",
  "sweet potato roll": "红薯卷",
  
  // 主要食材
  "salmon": "三文鱼",
  "tuna": "金枪鱼",
  "yellowtail": "黄尾鱼",
  "eel": "鳗鱼",
  "shrimp tempura": "炸虾",
  "soft shell crab": "软壳蟹",
  "spicy scallop": "辣扇贝",
  "lobster": "龙虾",
  
  // 配料
  "cream cheese": "奶油芝士",
  "avocado": "牛油果",
  "cucumber": "黄瓜",
  "tempura flakes": "天妇罗碎",
  "masago": "蟹子",
  "tobiko": "飞鱼子",
  "spicy mayo": "辣味美乃滋",
  "eel sauce": "鳗鱼酱",
  "sriracha": "是拉差酱",
  
  // 烹飪方式
  "tempura fried": "天妇罗炸",
  "deep fried": "油炸",
  "baked": "烤制",
  "torched": "火烤",
  "seared": "煎封",
  
  // 常見描述
  "crunchy": "脆脆的",
  "spicy": "辣味",
  "crispy": "酥脆",
  "fresh": "新鲜",
  "signature": "招牌",
  "house special": "店家特制",
  "chef's special": "主厨特制",
  "best seller": "畅销",

  // 烤串基本類型
  "skewer": "串",
  "yakitori": "烤鸡串",
  "kushiyaki": "烤串",
  "robata": "炉端烧",
  "grilled": "烤制",
  "charcoal grilled": "炭烤",
  
  // 雞肉部位
  "chicken": "鸡肉",
  "chicken thigh": "鸡腿肉",
  "chicken breast": "鸡胸肉",
  "chicken wing": "鸡翅",
  "chicken skin": "鸡皮",
  "chicken heart": "鸡心",
  "chicken liver": "鸡肝",
  "chicken gizzard": "鸡胗",
  "chicken cartilage": "鸡软骨",
  "chicken meatball": "鸡肉丸",
  
  // 豬肉部位
  "pork": "猪肉",
  "pork belly": "五花肉",
  "pork chop": "猪排",
  "pork ribs": "猪排骨",
  "pork intestine": "猪肠",
  "pork tongue": "猪舌",
  "pork liver": "猪肝",
  
  // 牛肉部位
  "beef": "牛肉",
  "ribeye": "肋眼",
  "striploin": "西冷",
  "tenderloin": "里脊",
  "filet mignon": "菲力",
  "sirloin": "上腰肉",
  "chuck roll": "肩胛肉",
  "short plate": "腹肉",
  "brisket": "胸肉",
  "short rib": "牛小排",
  "tongue": "牛舌",
  "beef tripe": "牛肚",
  "beef tendon": "牛筋",
  
  // 海鮮類
  "shrimp": "虾",
  "scallop": "扇贝",
  "squid": "鱿鱼",
  "octopus": "章鱼",
  "fish cake": "鱼饼",
  
  // 蔬菜類
  "mushroom": "蘑菇",
  "shiitake": "香菇",
  "enoki": "金针菇",
  "green pepper": "青椒",
  "asparagus": "芦笋",
  "eggplant": "茄子",
  "garlic": "蒜",
  "onion": "洋葱",
  "cherry tomato": "小番茄",
  "corn": "玉米",
  
  // 調味料
  "salt": "盐",
  "pepper": "胡椒",
  "tare sauce": "烤肉酱",
  "soy sauce": "酱油",
  "spicy": "辣味",
  "garlic sauce": "蒜蓉酱",
  "wasabi": "芥末",
  "miso": "味噌",
  "teriyaki": "照烧",
  
  // 套餐
  "skewer set": "烤串拼盘",
  "mixed set": "混合拼盘",
  "chicken set": "鸡肉拼盘",
  "vegetable set": "蔬菜拼盘",
  "chef's selection": "主厨精选",
  
  // 配菜
  "rice": "米饭",
  "miso soup": "味噌汤",
  "salad": "沙拉",
  "pickled vegetables": "腌菜",
  "edamame": "毛豆",
  
  // 常見描述
  "grilled to order": "现烤",
  "well done": "全熟",
  "medium": "七分熟",
  "rare": "三分熟",
  "extra sauce": "加酱",
  "extra spicy": "加辣",
  "per skewer": "每串",
  "minimum order": "最少点单",
  "popular": "人气",
  "recommended": "推荐",
  "seasonal": "季节限定",

  // 川菜特色
  "sichuan cuisine": "川菜",
  "spicy food": "麻辣菜",
  "numbing spicy": "麻辣",
  "mala": "麻辣",
  "chili oil": "红油",
  "sichuan pepper": "花椒",
  
  // 經典川菜
  "mapo tofu": "麻婆豆腐",
  "kung pao chicken": "宫保鸡丁",
  "twice cooked pork": "回锅肉",
  "fish fragrant eggplant": "鱼香茄子",
  "dan dan noodles": "担担面",
  "water boiled fish": "水煮鱼",
  "water boiled beef": "水煮牛肉",
  "dry pot": "干锅",
  "spicy boiled beef": "毛血旺",
  "fish with pickled vegetables": "酸菜鱼",
  "chongqing chicken": "重庆辣子鸡",
  "sichuan cold noodles": "四川凉面",
  "pork lung soup": "夫妻肺片",
  "spicy rabbit": "麻辣兔",
  "tea smoked duck": "樟茶鸭",
  
  // 常見配菜
  "preserved vegetable": "榨菜",
  "pickled mustard": "芥菜",
  "chinese celery": "芹菜",
  "wood ear mushroom": "木耳",
  "bamboo shoots": "竹笋",
  "green onion": "葱花",
  "garlic": "蒜泥",
  "peanuts": "花生",
  "sesame": "芝麻",
  
  // 調味料
  "doubanjiang": "豆瓣酱",
  "chili bean paste": "豆瓣酱",
  "sichuan pepper oil": "花椒油",
  "chili oil": "辣椒油",
  "black vinegar": "陈醋",
  "sweet bean sauce": "甜面酱",
  "fermented black beans": "豆豉",
  
  // 辣度等級
  "mild": "小辣",
  "medium": "中辣",
  "spicy": "大辣",
  "extra spicy": "特辣",
  "numbing": "麻",
  "non-spicy": "不辣",
  
  // 烹飪方法
  "stir-fried": "炒",
  "braised": "烧",
  "boiled": "煮",
  "steamed": "蒸",
  "dry-fried": "干煸",
  "water boiled": "水煮",
  "twice cooked": "回锅",
  "cold dish": "凉菜",
  
  // 主食
  "rice": "米饭",
  "noodles": "面条",
  "dan dan noodles": "担担面",
  "chongqing noodles": "重庆小面",
  "sweet rice balls": "汤圆",
  "wontons in chili oil": "红油抄手",
  
  // 套餐
  "lunch special": "午市特价",
  "dinner special": "晚市特价",
  "chef's special": "厨师推荐",
  "house special": "店家特色",
  "family style": "合家欢",
  "party size": "宴会份量",
  
  // 常見描述
  "authentic": "正宗",
  "traditional": "传统",
  "homestyle": "家常",
  "signature": "招牌",
  "popular": "热门",
  "seasonal": "季节限定",

  // 肉類部位
  // 雞肉部位
  "chicken thigh": "鸡腿肉",
  "chicken breast": "鸡胸肉",
  "chicken wing": "鸡翅",
  "chicken skin": "鸡皮",
  "chicken heart": "鸡心",
  "chicken liver": "鸡肝",
  "chicken gizzard": "鸡胗",
  "chicken cartilage": "鸡软骨",
  
  // 豬肉部位
  "pork belly": "五花肉",
  "pork chop": "猪排",
  "pork ribs": "猪排骨",
  "pork intestine": "猪肠",
  "pork tongue": "猪舌",
  "pork liver": "猪肝",
  
  // 牛肉部位
  "ribeye": "肋眼",
  "striploin": "西冷",
  "tenderloin": "里脊",
  "filet mignon": "菲力",
  "sirloin": "上腰肉",
  "beef tongue": "牛舌",
  "beef tripe": "牛肚",
  "beef tendon": "牛筋",
  
  // 海鮮
  "live seafood": "活海鲜",
  "lobster": "龙虾",
  "crab": "螃蟹",
  "fish fillet": "鱼片",
  "scallop": "扇贝",
  "oyster": "生蚝",
  "squid": "鱿鱼",
  "octopus": "章鱼",
  "clam": "蛤蜊",
  "mussel": "青口",
  "sea cucumber": "海参",
  "abalone": "鲍鱼",
  
  // 中式特色菜
  "dim sum": "点心",
  "dumpling": "饺子",
  "wonton": "云吞",
  "spring roll": "春卷",
  "fried rice": "炒饭",
  "chow mein": "炒面",
  "mapo tofu": "麻婆豆腐",
  "kung pao chicken": "宫保鸡丁",
  "sweet and sour": "糖醋",
  "hot pot": "火锅",
  
  // 日式料理
  "sushi": "寿司",
  "sashimi": "生鱼片",
  "tempura": "天妇罗",
  "ramen": "拉面",
  "udon": "乌冬面",
  "donburi": "盖饭",
  "yakitori": "烤鸡串",
  "teppanyaki": "铁板烧",
  
  // 韓式料理
  "kimchi": "泡菜",
  "bibimbap": "拌饭",
  "bulgogi": "韩式烤肉",
  "korean bbq": "韩式烧烤",
  "tteokbokki": "年糕",
  
  // 價格和份量
  "small": "小份",
  "medium": "中份",
  "large": "大份",
  "regular": "正常份",
  "extra": "加量",
  "combo": "套餐",
  "set": "套餐",
  "for two": "双人份",
  "family size": "家庭份",
  "market price": "时价",
  "additional": "额外加点",
  
  // 用餐時段
  "breakfast": "早餐",
  "lunch": "午餐",
  "dinner": "晚餐",
  "brunch": "早午餐",
  "happy hour": "欢乐时光",
  "tea time": "下午茶",

  // 海鮮類
  "crab": "螃蟹",
  "fish fillet": "鱼片",
  "scallop": "扇贝",
  "oyster": "生蚝",
  "squid": "鱿鱼",
  "octopus": "章鱼",
  "clam": "蛤蜊",
  "mussel": "青口",
  "sea cucumber": "海参",
  "abalone": "鲍鱼",
  "geoduck": "象拔蚌",
  "fish maw": "花胶",
  "dried scallop": "瑶柱",
  "dried oyster": "蚝豉",
  "conch": "海螺",
  
  // 點心類
  "dim sum": "点心",
  "shrimp dumpling": "虾饺",
  "pork dumpling": "烧卖",
  "rice roll": "肠粉",
  "bbq pork bun": "叉烧包",
  "custard bun": "奶黄包",
  "turnip cake": "萝卜糕",
  "taro cake": "芋头糕",
  "water chestnut cake": "马蹄糕",
  "egg tart": "蛋挞",
  "sesame ball": "煎堆",
  
  // 粥品和麵食
  "congee": "粥",
  "century egg congee": "皮蛋瘦肉粥",
  "fish belly congee": "鱼片粥",
  "beef congee": "牛肉粥",
  "dan dan noodles": "担担面",
  "wonton noodles": "云吞面",
  "beef noodle soup": "牛肉面",
  "chow mein": "炒面",
  "lo mein": "捞面",
  "udon": "乌冬面",
  "ramen": "拉面",
  
  // 燒臘類
  "bbq": "烧烤",
  "roasted duck": "烧鸭",
  "bbq pork": "叉烧",
  "roasted pork belly": "烧肉",
  "soy sauce chicken": "豉油鸡",
  "white cut chicken": "白切鸡",
  "roasted goose": "烧鹅",
  "preserved sausage": "腊肠",
  
  // 飲品類
  "tea": "茶",
  "chinese tea": "中式茶",
  "jasmine tea": "茉莉茶",
  "pu-erh tea": "普洱茶",
  "oolong tea": "乌龙茶",
  "green tea": "绿茶",
  "milk tea": "奶茶",
  "bubble tea": "珍珠奶茶",
  "soda": "汽水",
  "soft drink": "软饮",
  "beer": "啤酒",
  "wine": "葡萄酒",
  "sake": "清酒",
  
  // 甜品類
  "dessert": "甜点",
  "ice cream": "冰淇淋",
  "mango pudding": "芒果布丁",
  "red bean soup": "红豆汤",
  "sweet soup": "糖水",
  "mochi": "麻糬",
  "sweet rice balls": "汤圆",
  "almond jelly": "杏仁豆腐",
  "egg waffle": "蛋仔",
  
  // 用餐服務
  "dine in": "堂食",
  "takeout": "外卖",
  "delivery": "外送",
  "reservation": "预订",
  "minimum order": "最低消费",
  "service charge": "服务费",
  "gratuity": "小费",
  "cash only": "只收现金",
  "credit card": "信用卡",

  // 越南料理
  "vietnamese cuisine": "越南菜",
  "pho": "越南河粉",
  "beef pho": "牛肉河粉",
  "chicken pho": "鸡肉河粉",
  "summer roll": "越南生春卷",
  "banh mi": "越南三明治",
  "vietnamese coffee": "越南咖啡",
  "rice paper": "米纸",
  "vermicelli bowl": "米粉碗",
  "lemongrass chicken": "香茅鸡",
  "vietnamese curry": "越南咖喱",
  
  // 泰國料理
  "thai cuisine": "泰国菜",
  "pad thai": "泰式炒河粉",
  "green curry": "绿咖喱",
  "red curry": "红咖喱",
  "yellow curry": "黄咖喱",
  "tom yum": "冬阴功",
  "papaya salad": "青木瓜沙拉",
  "pad see ew": "泰式炒粿条",
  "basil chicken": "金不换鸡",
  "thai iced tea": "泰式奶茶",
  "mango sticky rice": "芒果糯米饭",
  
  // 馬來西亞料理
  "malaysian cuisine": "马来西亚菜",
  "nasi lemak": "椰浆饭",
  "laksa": "叻沙",
  "curry laksa": "咖喱叻沙",
  "char kway teow": "炒粿条",
  "roti canai": "印度煎饼",
  "rendang": "仁当",
  "bak kut teh": "肉骨茶",
  
  // 新加坡料理
  "singaporean cuisine": "新加坡菜",
  "chili crab": "辣椒蟹",
  "black pepper crab": "黑胡椒蟹",
  "hokkien mee": "福建面",
  "kaya toast": "咖椰吐司",
  
  // 印尼料理
  "indonesian cuisine": "印尼菜",
  "nasi goreng": "印尼炒饭",
  "mie goreng": "印尼炒面",
  "gado gado": "加多加多",
  "beef rendang": "仁当牛肉",
  
  // 東南亞特色配料（僅保留未重複的）
  "lemongrass": "香茅",
  "kaffir lime": "柠檬叶",
  "galangal": "南姜",
  "coconut milk": "椰浆",
  "shrimp paste": "虾酱",
  "palm sugar": "棕榈糖",
  "sambal": "参巴酱",
  
  // 東南亞特色飲品（僅保留未重複的）
  "coconut juice": "椰子水",
  "sugar cane juice": "甘蔗汁",
  "bandung": "班兰饮料",

  // 滷菜類
  "braised": "卤",
  "braised beef tendon": "卤牛筋",
  "braised chicken feet": "卤鸡爪",
  "braised meat platter": "卤味拼盘",
  "braised pig feet": "卤猪脚",
  "braised duck": "卤鸭",
  "braised egg": "卤蛋",
  "braised tofu": "卤豆腐",
  "braised beef": "卤牛肉",
  "braised pork": "卤猪肉",
  "braised intestine": "卤肠",
  "braised tripe": "卤肚",
  "braised platter": "卤味拼盘",
  "braised combo": "卤味拼盘",
  "braised mixed platter": "卤味拼盘",

  // 水煮系列
  "boiled beef in spicy szechuan sauce": "水煮牛肉",
  "boiled chicken in spicy szechuan sauce": "水煮鸡片",
  "boiled frog in spicy szechuan sauce": "水煮牛蛙",
  "boiled lamb in spicy szechuan sauce": "水煮羊肉",
  "boiled live fish in spicy szechuan sauce": "水煮活鱼",
  "boiled pork kidney in spicy szechuan sauce": "水煮腰花",
  "boiled sole fish fillet in spicy szechuan sauce": "水煮鱼片",
  
  // 更多水煮相關組合
  "in spicy szechuan sauce": "水煮",
  "spicy szechuan sauce": "水煮",
  "szechuan style": "四川式",
  "spicy szechuan": "麻辣",

  // 蝦類系列
  "shrimp with vegetable": "时菜虾仁",
  "shrimp with peapod": "雪豆虾仁",
  "shrimp with mushroom": "蘑菇虾仁",
  "shrimp in garlic sauce": "蒜香虾仁",
  "shrimp with broccoli": "芥兰虾仁",
  "cashew shrimp": "腰果虾仁",
  "kung pao shrimp": "宫保虾仁",
  "curry shrimp": "咖喱虾仁",
  "shrimp in lobster sauce": "龙虾汁虾",
  "salt & pepper prawns": "椒盐大虾",
  "sweet & sour prawns": "甜酸大虾",
  "sautéed shrimp": "清炒虾仁",
  "shrimp chop suey": "杂碎虾仁",
  "moo shu shrimp": "木须虾仁",
  "steamed vegetable with shrimp": "清蒸虾菜",

  // 蝦類相關描述
  "in garlic sauce": "蒜香",
  "in lobster sauce": "龙虾汁",
  "salt & pepper": "椒盐",
  "sweet & sour": "甜酸",
  "kung pao style": "宫保",
  "with vegetable": "时菜",
  "with peapod": "雪豆",
  "with mushroom": "蘑菇",
  "with broccoli": "芥兰",
  "chop suey": "杂碎",
  "moo shu": "木须",

  // 蔬菜類
  "bok choy": "白菜",
  "chinese cabbage": "大白菜",
  "napa cabbage": "大白菜",
  "chinese broccoli": "芥兰",
  "gai lan": "芥兰",
  "chinese spinach": "苋菜",
  "water spinach": "空心菜",
  "morning glory": "空心菜",
  "chinese celery": "芹菜",
  "snow pea": "荷兰豆",
  "sugar snap pea": "甜豆",
  "bamboo shoot": "竹笋",
  "bean sprout": "豆芽",
  "chinese mustard green": "芥菜",
  "gai choy": "芥菜",
  "chinese lettuce": "生菜",
  "chinese chive": "韭菜",
  "garlic sprout": "蒜苗",
  "lotus root": "莲藕",
  "winter melon": "冬瓜",
  "bitter melon": "苦瓜",
  "fuzzy melon": "毛瓜",
  "silk squash": "丝瓜",
  "long bean": "长豆",
  "chinese eggplant": "茄子",
  "enoki mushroom": "金针菇",
  "straw mushroom": "草菇",
  "oyster mushroom": "平菇",
  "shiitake mushroom": "香菇",
  "wood ear mushroom": "木耳",
  "white fungus": "银耳",

  // 蔬菜相關烹飪方式
  "stir-fried": "炒",
  "sautéed": "炒",
  "braised": "焖",
  "steamed": "蒸",
  "in garlic sauce": "蒜蓉",
  "in black bean sauce": "豉汁",
  "in oyster sauce": "蚝油",
  "with ginger": "姜汁",
  
  // 常見蔬菜組合
  "mixed vegetables": "什锦菜",
  "chinese mixed vegetables": "炒杂菜",
  "seasonal vegetables": "时令蔬菜",
  "green vegetables": "青菜",
  "leafy vegetables": "叶菜",

  // 宮保系列
  "kung pao beef": "宫保牛肉",
  "kung pao chicken": "宫保鸡丁",
  "kung pao scallop": "宫保带子",
  "kung pao shrimp": "宫保虾",
  "kung pao squid": "宫保鱿鱼",
  "kung pao tofu": "宫保豆腐",
  
  // 宮保相關配料
  "kung pao style": "宫保",
  "kung pao sauce": "宫保酱",
  "peanut": "花生",
  "dried chili": "干辣椒",
  "scallion": "葱",

  // 椒鹽系列
  "salt and pepper": "椒盐",
  "salt and pepper jumbo shrimp no shell": "椒盐大虾",
  "salt and pepper pork ribs": "椒盐排骨",
  "salt and pepper smelt fish": "椒盐多春鱼",
  "salt pepper crispy tofu": "椒盐豆腐",
  "salt pepper fish fillet": "椒盐鱼片",
  "salt pepper scallop": "椒盐带子",
  "salt pepper three delight": "椒盐三鲜",

  // 咸蛋系列
  "salted egg yolk paste": "咸蛋黄酱",
  "salted egg yolk paste diced tender tofu": "咸蛋豆花",
  "salted egg yolk paste eggplant": "咸蛋茄子",
  "salted egg yolk paste fish fillet": "咸蛋鱼片",
  "salted egg yolk paste shrimp": "咸蛋虾仁",
  "salted egg yolk paste sweet corn": "咸蛋玉米粒",
  "salted egg yolk paste tofu": "咸蛋豆腐",

  // 清炒系列
  "sauteed american broccoli": "清炒美芥兰",
  "sauteed baby bok choy": "清炒青江菜",
  "sauteed napa cabbage": "清炒白菜",
  "sauteed peapod leafs": "清炒豆苗",
  "sauteed sliced potato": "清炒土豆丝",
  "sauteed spinach": "清炒菠菜",
  "sauteed three delight": "清炒三鲜",

  // 四川系列
  "szechuan beef": "四川牛肉",
  "szechuan chicken": "四川鸡片",
  "szechuan spicy cold noodle": "四川凉面",
  "szechuan tofu": "四川豆腐",
  "szechuan wonton with peppercorn": "毛椒抄手",

  // 日式料理
  "donburi": "盖饭",
  "donburi (lunch)": "盖饭（午市）",
  "donburi (dinner)": "盖饭（晚市）",
  "chicken karaage don": "炸鸡盖饭",
  "shrimp teriyaki don": "照烧虾盖饭",
  "unagi don": "鳗鱼盖饭",
  "ramen": "拉面",
  "ramen (lunch)": "拉面（午市）",
  "ramen (dinner)": "拉面（晚市）",

  // 生魚片類
  "carpaccio": "生鱼片",
  "carpaccio (lunch)": "生鱼片（午市）",
  "carpaccio (dinner)": "生鱼片（晚市）",
  "salmon carpaccio": "三文鱼生鱼片",
  "white tuna carpaccio": "白金枪鱼生鱼片",
  "yellowtail jalapeno carpaccio": "黄尾鱼青椒生鱼片",

  // 生魚片和海鮮
  "eel": "鳗鱼",
  "egg": "蛋",
  "imitation crab": "蟹棒",
  "mackerel (saba)": "青花鱼",
  "octopus (tako)": "章鱼",
  "red snapper": "红鲷鱼",
  "salmon": "三文鱼",
  "salmon roe": "三文鱼子",
  "scallop": "带子",
  "seared white tuna": "炙烤白金枪鱼",
  "shrimp": "虾",
  "smelt roe": "多春鱼子",
  "smoked salmon": "烟熏三文鱼",
  "spicy kani": "辣蟹棒",
  "spicy salmon": "辣三文鱼",
  
  // 日式料理相關詞彙
  "saba": "青花鱼",
  "tako": "章鱼",
  "kani": "蟹棒",
  "seared": "炙烤",
  "smoked": "烟熏",
  "roe": "鱼子",

  // 壽司卷類
  "aac roll": "牛油果芦笋卷",
  "avocado roll": "牛油果卷",
  "cucumber roll": "黄瓜卷",
  "futo roll": "太卷",
  "oshinko roll": "日式腌菜卷",
  "shitake mushroom roll": "香菇卷",
  "sweet potato roll": "红薯卷",
  "vegetable deluxe roll": "豪华素食卷",

  // 壽司相關食材
  "avocado": "牛油果",
  "cucumber": "黄瓜",
  "oshinko": "日式腌菜",
  "shitake": "香菇",
  "sweet potato": "红薯",
  "futo": "太卷",
  "roll": "卷",
  
  // 數量單位
  "pcs": "件",
  "pieces": "件",
  "4 pcs": "4件",
  "5 pcs": "5件",
  "6 pcs": "6件",

  // 甜點類
  "creme brulee": "焦糖布丁",
  "gelato ice cream": "意式冰淇淋",
  "green tea cheesecake": "抹茶芝士蛋糕",
  "mochi": "麻糬",
  
  // 甜點相關詞彙
  "ice cream": "冰淇淋",
  "gelato": "意式冰淇淋",
  "cheesecake": "芝士蛋糕",
  "green tea": "抹茶",
  "matcha": "抹茶",
  "dessert": "甜点",
  "sweet": "甜",
  "cream": "奶油",
  "chocolate": "巧克力",
  "vanilla": "香草",
  "caramel": "焦糖",

  // 前菜和小吃
  "fried shumai": "炸烧卖",
  "hamachi kama": "黄尾鱼下巴",
  "jalapeno bomb": "墨西哥辣椒炸弹",
  "regular edamame": "普通毛豆",
  "softshell crab": "软壳蟹",
  "spicy garlic edamame": "蒜蓉辣毛豆",
  "steamed gyoza": "蒸饺",
  "steamed shumai": "蒸烧卖",
  "takoyaki": "章鱼烧",
  "tempura appetizer": "天妇罗前菜",
  "truffle fries": "松露薯条",
  "grilled chicken wings": "烤鸡翅",
  "shrimp asparagus yakitori": "虾芦笋烧串"
};

// 初始化翻譯開關狀態
let isTranslationEnabled = true;

// 從 storage 中獲取保存的狀態
chrome.storage.sync.get(['isEnabled'], function(result) {
  isTranslationEnabled = result.isEnabled !== false;
});

// 創建 tooltip 元素
const tooltip = document.createElement('div');
tooltip.className = 'menu-translator-tooltip';
document.body.appendChild(tooltip);

// 監聽來自 popup 的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggleTranslation') {
    isTranslationEnabled = request.isEnabled;
    if (!isTranslationEnabled) {
      tooltip.style.display = 'none';
    }
    // 添加回應
    sendResponse({success: true});
    return true; // 表示會異步發送回應
  }
});

// 模糊匹配函數
function findBestMatch(text) {
  text = text.toLowerCase().trim();
  
  // 移除括號和數字的處理
  const cleanText = text.replace(/\([^)]*\)/g, '').trim(); // 移除括號內容
  const basicText = cleanText.replace(/\d+\s*(pcs|pieces?)?/g, '').trim(); // 移除數字和 pcs
  
  // 1. 精確匹配
  if (dictionary[basicText]) {
    return dictionary[basicText];
  }
  
  // 2. 組合詞匹配
  const combinedWords = [
    // 基本烹飪方式
    ["stir fried", "炒"],
    ["braised", "卤"],
    ["steamed", "蒸"],
    
    // 基本食材
    ["beef", "牛肉"],
    ["chicken", "鸡肉"],
    ["pork", "猪肉"],
    ["shrimp", "虾"],
    
    // 調味和配料
    ["with garlic", "蒜蓉"],
    ["with ginger", "姜汁"],
    ["in black bean sauce", "豉汁"],
    
    // 蔬菜
    ["bok choy", "白菜"],
    ["broccoli", "西兰花"],
    ["mushroom", "蘑菇"],
    
    // 海鮮基本詞
    ["salmon", "三文鱼"],
    ["tuna", "金枪鱼"],
    ["eel", "鳗鱼"],
    ["octopus", "章鱼"],
    ["scallop", "带子"],
    ["shrimp", "虾"],
    
    // 調味方式
    ["spicy", "辣"],
    ["seared", "炙烤"],
    ["smoked", "烟熏"],
    
    // 魚子相關
    ["roe", "鱼子"],
    ["fish egg", "鱼子"],
    
    // 壽司基本食材
    ["avocado", "牛油果"],
    ["cucumber", "黄瓜"],
    ["sweet potato", "红薯"],
    ["mushroom", "蘑菇"],
    ["vegetable", "素食"],
    
    // 壽司相關詞彙
    ["roll", "卷"],
    ["deluxe", "豪华"],
    
    // 甜點相關
    ["green tea", "抹茶"],
    ["ice cream", "冰淇淋"],
    ["cheese cake", "芝士蛋糕"],
    ["cream", "奶油"],
    ["sweet", "甜"],
    
    // 烹飪方式
    ["fried", "炸"],
    ["steamed", "蒸"],
    ["grilled", "烤"],
    
    // 食材
    ["chicken wings", "鸡翅"],
    ["softshell crab", "软壳蟹"],
    ["asparagus", "芦笋"],
    
    // 調味
    ["spicy garlic", "蒜蓉辣"],
    ["truffle", "松露"]
  ];
  
  // 先嘗試完整短語匹配
  const words = basicText.split(/\s+/);
  for (let i = words.length; i > 1; i--) {
    for (let j = 0; j <= words.length - i; j++) {
      const phrase = words.slice(j, j + i).join(' ');
      if (dictionary[phrase]) {
        const before = words.slice(0, j).join(' ');
        const after = words.slice(j + i).join(' ');
        const translation = dictionary[phrase];
        return (before + ' ' + translation + ' ' + after).trim();
      }
    }
  }
  
  // 然後嘗試組合詞匹配
  for (const [eng, chi] of combinedWords) {
    if (basicText.includes(eng)) {
      // 保留原始的數字和單位
      const numMatch = text.match(/(\d+)\s*(pcs|pieces?)?/);
      const numStr = numMatch ? numMatch[0] : '';
      return `${chi}${numStr ? ` ${numStr}` : ''}`;
    }
  }

  // 3. 單詞匹配
  const translations = words.map(word => {
    if (dictionary[word]) {
      return dictionary[word];
    }
    if (word.endsWith('s') && dictionary[word.slice(0, -1)]) {
      return dictionary[word.slice(0, -1)];
    }
    return word;
  });
  
  // 如果有任何中文翻譯，返回組合結果
  if (translations.some(t => /[\u4e00-\u9fa5]/.test(t))) {
    const baseTranslation = translations.join('');
    // 保留原始的數字和單位
    const numMatch = text.match(/(\d+)\s*(pcs|pieces?)?/);
    const numStr = numMatch ? numMatch[0] : '';
    return `${baseTranslation}${numStr ? ` ${numStr}` : ''}`;
  }
  
  return null;
}

// 修改事件監聽器
document.addEventListener('mouseover', (e) => {
  if (!isTranslationEnabled) return;

  // 檢查是否有子文本節點
  if (e.target.childNodes.length > 0 && 
      Array.from(e.target.childNodes).some(node => 
        node.nodeType === Node.ELEMENT_NODE && 
        node.textContent.trim()
      )) {
    return; // 如果元素包含其他元素節點，則跳過
  }

  // 獲取目標文本
  const text = e.target.textContent?.trim();
  
  // 基本檢查
  if (!text || text.length < 2) return;  // 忽略太短的文本
  if (!/[a-zA-Z]/.test(text)) return;    // 必須包含英文字母
  
  // 忽略特定元素
  if (e.target.tagName === 'INPUT' ||
      e.target.tagName === 'TEXTAREA' ||
      e.target.tagName === 'HTML' ||
      e.target.tagName === 'BODY') return;
      
  // 檢查元素是否為空白區域或背景
  const rect = e.target.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return;
  
  // 忽略特定的無意義文本
  const meaninglessTexts = ['--', '-pt', 'off', 'on', 'pc', 'null', 'undefined'];
  if (meaninglessTexts.includes(text.toLowerCase())) return;

  // 檢查是否為菜品名稱
  if (text.length > 50) return;  // 忽略過長的文本

  const translation = findBestMatch(text);
  if (translation) {
    const rect = e.target.getBoundingClientRect();
    tooltip.textContent = translation;
    tooltip.style.display = 'block';
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.bottom + 5}px`;
  }
});

// 監聽滑鼠離開
document.addEventListener('mouseout', () => {
  tooltip.style.display = 'none';
}); 