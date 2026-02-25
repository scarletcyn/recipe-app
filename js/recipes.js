const RECIPES = [
    {
        id: "chicken_teriyaki", name: "鶏の照り焼き", category: "主菜", mainIngredient: "鶏肉",
        tags: ["鶏肉", "醤油", "みりん"], time: 20, difficulty: "簡単", servings: 2, image: "🍗",
        ingredients: [{ name: "鶏もも肉", amount: "1枚(300g)" }, { name: "醤油", amount: "大さじ2" }, { name: "みりん", amount: "大さじ2" }, { name: "酒", amount: "大さじ1" }, { name: "砂糖", amount: "大さじ1" }, { name: "サラダ油", amount: "少々" }],
        steps: ["鶏もも肉の余分な脂を取り除き、厚い部分に切り込みを入れる", "フライパンにサラダ油を熱し、皮目を下にして中火で焼く", "皮がパリッとしたら裏返し、蓋をして5分蒸し焼きにする", "醤油・みりん・酒・砂糖を混ぜたタレを加え、とろみがつくまで煮絡める", "食べやすい大きさに切り、タレをかけて盛り付ける"],
        youtubeQuery: "鶏の照り焼き リュウジ"
    },
    {
        id: "pork_ginger", name: "豚の生姜焼き", category: "主菜", mainIngredient: "豚肉",
        tags: ["豚肉", "生姜", "玉ねぎ"], time: 15, difficulty: "簡単", servings: 2, image: "🥩",
        ingredients: [{ name: "豚ロース薄切り", amount: "200g" }, { name: "玉ねぎ", amount: "1/2個" }, { name: "生姜", amount: "1かけ" }, { name: "醤油", amount: "大さじ2" }, { name: "みりん", amount: "大さじ1" }, { name: "酒", amount: "大さじ1" }, { name: "サラダ油", amount: "少々" }],
        steps: ["豚肉に軽く塩こしょうをし、玉ねぎを薄切りにする", "生姜をすりおろし、醤油・みりん・酒と合わせてタレを作る", "フライパンにサラダ油を熱し、玉ねぎを炒めてしんなりさせる", "豚肉を加えて色が変わるまで炒める", "タレを回しかけ、全体に絡めながら炒め合わせる"],
        youtubeQuery: "豚の生姜焼き リュウジ"
    },
    {
        id: "salmon_shioyake", name: "鮭の塩焼き", category: "主菜", mainIngredient: "鮭",
        tags: ["鮭", "魚"], time: 15, difficulty: "簡単", servings: 2, image: "🐟",
        ingredients: [{ name: "鮭の切り身", amount: "2切れ" }, { name: "塩", amount: "少々" }, { name: "大根おろし", amount: "適量" }, { name: "レモン", amount: "1/4個" }],
        steps: ["鮭に塩を振り、10分ほど置いて水気を拭き取る", "魚焼きグリルを予熱し、中火で両面をこんがり焼く（片面5分ずつ）", "皿に盛り、大根おろしとレモンを添える"],
        youtubeQuery: "鮭の塩焼き 簡単"
    },
    {
        id: "mapo_tofu", name: "麻婆豆腐", category: "主菜", mainIngredient: "豆腐",
        tags: ["豆腐", "ひき肉", "中華"], time: 20, difficulty: "普通", servings: 2, image: "🥘",
        ingredients: [{ name: "絹豆腐", amount: "1丁(300g)" }, { name: "豚ひき肉", amount: "100g" }, { name: "長ねぎ", amount: "1/2本" }, { name: "にんにく", amount: "1かけ" }, { name: "生姜", amount: "1かけ" }, { name: "豆板醤", amount: "小さじ1" }, { name: "甜面醤", amount: "大さじ1" }, { name: "醤油", amount: "大さじ1" }, { name: "鶏がらスープ", amount: "100ml" }, { name: "片栗粉", amount: "大さじ1" }, { name: "ごま油", amount: "少々" }],
        steps: ["豆腐を2cm角に切り、熱湯で2分茹でて水切りする", "長ねぎ・にんにく・生姜をみじん切りにする", "フライパンにごま油を熱し、にんにく・生姜・豆板醤を炒めて香りを出す", "ひき肉を加えてポロポロになるまで炒める", "甜面醤・醤油・鶏がらスープを加えて煮立てる", "豆腐を加え、2〜3分煮る", "水溶き片栗粉を回し入れてとろみをつけ、長ねぎを散らす"],
        youtubeQuery: "麻婆豆腐 リュウジ"
    },
    {
        id: "nikujaga", name: "肉じゃが", category: "主菜", mainIngredient: "じゃがいも",
        tags: ["じゃがいも", "牛肉", "にんじん", "玉ねぎ"], time: 40, difficulty: "普通", servings: 3, image: "🥔",
        ingredients: [{ name: "牛薄切り肉", amount: "200g" }, { name: "じゃがいも", amount: "3個" }, { name: "にんじん", amount: "1本" }, { name: "玉ねぎ", amount: "1個" }, { name: "しらたき", amount: "1袋" }, { name: "醤油", amount: "大さじ3" }, { name: "みりん", amount: "大さじ2" }, { name: "砂糖", amount: "大さじ1.5" }, { name: "だし汁", amount: "300ml" }, { name: "サラダ油", amount: "少々" }],
        steps: ["じゃがいもは皮をむいて4等分、にんじんは乱切り、玉ねぎはくし切りにする", "鍋にサラダ油を熱し、牛肉を炒めて色が変わったら野菜を加えて炒める", "だし汁を加え、煮立ったらアクを取り、砂糖・みりん・醤油を加える", "しらたきを加え、落し蓋をして中弱火で20分煮る", "じゃがいもに竹串がすっと通れば完成"],
        youtubeQuery: "肉じゃが 基本"
    },
    {
        id: "karaage", name: "鶏の唐揚げ", category: "主菜", mainIngredient: "鶏肉",
        tags: ["鶏肉", "揚げ物"], time: 30, difficulty: "普通", servings: 2, image: "🍗",
        ingredients: [{ name: "鶏もも肉", amount: "300g" }, { name: "醤油", amount: "大さじ2" }, { name: "酒", amount: "大さじ1" }, { name: "にんにく", amount: "1かけ" }, { name: "生姜", amount: "1かけ" }, { name: "片栗粉", amount: "適量" }, { name: "揚げ油", amount: "適量" }],
        steps: ["鶏肉を一口大に切る", "醤油・酒・すりおろしにんにく・生姜を混ぜ、鶏肉を15分漬ける", "汁気を切った鶏肉に片栗粉をまぶす", "170℃の油で4〜5分揚げ、一度取り出す", "180℃に上げてもう一度1分揚げて二度揚げにする"],
        youtubeQuery: "唐揚げ リュウジ"
    },
    {
        id: "saba_miso", name: "鯖の味噌煮", category: "主菜", mainIngredient: "鯖",
        tags: ["鯖", "魚", "味噌"], time: 25, difficulty: "普通", servings: 2, image: "🐟",
        ingredients: [{ name: "鯖の切り身", amount: "2切れ" }, { name: "味噌", amount: "大さじ2" }, { name: "砂糖", amount: "大さじ1.5" }, { name: "みりん", amount: "大さじ2" }, { name: "酒", amount: "大さじ2" }, { name: "生姜", amount: "1かけ" }, { name: "水", amount: "150ml" }],
        steps: ["鯖の皮に十字の切り込みを入れ、熱湯をかけて臭みを取る", "鍋に水・酒・みりん・砂糖・薄切り生姜を入れて煮立てる", "鯖を入れ、落し蓋をして中弱火で10分煮る", "味噌を溶き入れ、さらに5分煮詰める"],
        youtubeQuery: "鯖の味噌煮 リュウジ"
    },
    {
        id: "oyakodon", name: "親子丼", category: "ご飯もの", mainIngredient: "鶏肉",
        tags: ["鶏肉", "卵", "丼"], time: 20, difficulty: "簡単", servings: 2, image: "🍚",
        ingredients: [{ name: "鶏もも肉", amount: "150g" }, { name: "卵", amount: "3個" }, { name: "玉ねぎ", amount: "1/2個" }, { name: "醤油", amount: "大さじ2" }, { name: "みりん", amount: "大さじ2" }, { name: "だし汁", amount: "100ml" }, { name: "ご飯", amount: "2杯分" }, { name: "三つ葉", amount: "適量" }],
        steps: ["鶏肉を一口大に切り、玉ねぎを薄切りにする", "小さめのフライパンにだし汁・醤油・みりんを入れて煮立てる", "玉ねぎを加えてしんなりするまで煮る", "鶏肉を加え、火が通るまで3〜4分煮る", "溶き卵の2/3を回しかけ、半熟になったら残りの卵を加える", "蓋をして30秒蒸らし、ご飯にのせて三つ葉を飾る"],
        youtubeQuery: "親子丼 リュウジ"
    },
    {
        id: "curry_rice", name: "カレーライス", category: "ご飯もの", mainIngredient: "じゃがいも",
        tags: ["じゃがいも", "にんじん", "玉ねぎ", "牛肉", "カレー"], time: 50, difficulty: "簡単", servings: 4, image: "🍛",
        ingredients: [{ name: "牛肉(または豚肉)", amount: "300g" }, { name: "じゃがいも", amount: "2個" }, { name: "にんじん", amount: "1本" }, { name: "玉ねぎ", amount: "2個" }, { name: "カレールー", amount: "1/2箱" }, { name: "水", amount: "700ml" }, { name: "サラダ油", amount: "少々" }, { name: "ご飯", amount: "4杯分" }],
        steps: ["野菜を一口大に切り、玉ねぎは薄切りにする", "鍋にサラダ油を熱し、肉と野菜を炒める", "水を加え、沸騰したらアクを取り20分煮る", "火を止めてルーを割り入れ、溶かす", "弱火で10分煮込み、とろみがついたら完成"],
        youtubeQuery: "カレーライス 本格 簡単"
    },
    {
        id: "gyoza", name: "焼き餃子", category: "主菜", mainIngredient: "豚肉",
        tags: ["豚肉", "キャベツ", "ひき肉"], time: 40, difficulty: "普通", servings: 3, image: "🥟",
        ingredients: [{ name: "豚ひき肉", amount: "200g" }, { name: "キャベツ", amount: "1/4個" }, { name: "ニラ", amount: "1/2束" }, { name: "にんにく", amount: "1かけ" }, { name: "生姜", amount: "1かけ" }, { name: "醤油", amount: "大さじ1" }, { name: "ごま油", amount: "大さじ1" }, { name: "餃子の皮", amount: "30枚" }, { name: "サラダ油", amount: "少々" }, { name: "水", amount: "50ml" }],
        steps: ["キャベツをみじん切りにし塩もみして水気を絞る。ニラもみじん切りにする", "ひき肉に調味料と野菜を加え、粘りが出るまで混ぜる", "餃子の皮で包む", "フライパンにサラダ油を熱し、餃子を並べて中火で焼く", "底に焼き色がついたら水を加え蓋をして蒸し焼き5分", "蓋を外し水気を飛ばしてパリッと仕上げる"],
        youtubeQuery: "餃子 リュウジ"
    },
    {
        id: "miso_soup", name: "味噌汁", category: "汁物", mainIngredient: "豆腐",
        tags: ["豆腐", "わかめ", "味噌"], time: 10, difficulty: "簡単", servings: 2, image: "🥣",
        ingredients: [{ name: "豆腐", amount: "1/2丁" }, { name: "わかめ", amount: "適量" }, { name: "だし汁", amount: "400ml" }, { name: "味噌", amount: "大さじ2" }, { name: "長ねぎ", amount: "少々" }],
        steps: ["だし汁を鍋で温める", "豆腐をさいの目に切って加える", "わかめを加え、煮立つ直前に火を止める", "味噌を溶き入れ、ねぎを散らす"],
        youtubeQuery: "味噌汁 基本"
    },
    {
        id: "tonkatsu", name: "とんかつ", category: "主菜", mainIngredient: "豚肉",
        tags: ["豚肉", "揚げ物", "パン粉"], time: 30, difficulty: "普通", servings: 2, image: "🥩",
        ingredients: [{ name: "豚ロース厚切り", amount: "2枚" }, { name: "塩こしょう", amount: "少々" }, { name: "小麦粉", amount: "適量" }, { name: "卵", amount: "1個" }, { name: "パン粉", amount: "適量" }, { name: "揚げ油", amount: "適量" }, { name: "キャベツ", amount: "適量" }, { name: "とんかつソース", amount: "適量" }],
        steps: ["豚肉の筋を切り、塩こしょうを振る", "小麦粉→溶き卵→パン粉の順に衣をつける", "170℃の油で5〜6分じっくり揚げる", "油を切って2分休ませてから切り分ける", "千切りキャベツとソースを添える"],
        youtubeQuery: "とんかつ 揚げ方 コツ"
    },
    {
        id: "chahan", name: "チャーハン", category: "ご飯もの", mainIngredient: "卵",
        tags: ["卵", "ご飯", "長ねぎ"], time: 10, difficulty: "簡単", servings: 1, image: "🍳",
        ingredients: [{ name: "ご飯", amount: "1杯分(200g)" }, { name: "卵", amount: "2個" }, { name: "長ねぎ", amount: "1/3本" }, { name: "チャーシュー(ハム)", amount: "50g" }, { name: "醤油", amount: "小さじ2" }, { name: "塩こしょう", amount: "少々" }, { name: "サラダ油", amount: "大さじ1" }, { name: "ごま油", amount: "少々" }],
        steps: ["長ねぎとチャーシューを細かく刻む", "フライパンにサラダ油を強火で熱し、溶き卵を入れて即ご飯を加える", "卵がご飯に絡むように手早く炒める", "チャーシュー・ねぎを加え、鍋肌から醤油を入れて香ばしく仕上げる", "塩こしょうで味を整え、仕上げにごま油を回しかける"],
        youtubeQuery: "チャーハン リュウジ パラパラ"
    },
    {
        id: "kinpira_gobo", name: "きんぴらごぼう", category: "副菜", mainIngredient: "ごぼう",
        tags: ["ごぼう", "にんじん"], time: 15, difficulty: "簡単", servings: 2, image: "🥕",
        ingredients: [{ name: "ごぼう", amount: "1本" }, { name: "にんじん", amount: "1/2本" }, { name: "醤油", amount: "大さじ1.5" }, { name: "みりん", amount: "大さじ1" }, { name: "砂糖", amount: "小さじ1" }, { name: "ごま油", amount: "大さじ1" }, { name: "唐辛子", amount: "1本" }, { name: "白ごま", amount: "適量" }],
        steps: ["ごぼうをささがきにして水にさらす。にんじんを細切りにする", "フライパンにごま油と唐辛子を入れて弱火で香りを出す", "ごぼうとにんじんを加え、中火で2〜3分炒める", "醤油・みりん・砂糖を加え、汁気がなくなるまで炒め煮にする", "白ごまを振りかける"],
        youtubeQuery: "きんぴらごぼう 基本"
    },
    {
        id: "hamburg", name: "ハンバーグ", category: "主菜", mainIngredient: "ひき肉",
        tags: ["ひき肉", "牛肉", "豚肉", "玉ねぎ"], time: 35, difficulty: "普通", servings: 2, image: "🍔",
        ingredients: [{ name: "合いびき肉", amount: "300g" }, { name: "玉ねぎ", amount: "1/2個" }, { name: "パン粉", amount: "大さじ3" }, { name: "牛乳", amount: "大さじ2" }, { name: "卵", amount: "1個" }, { name: "塩こしょう", amount: "少々" }, { name: "ナツメグ", amount: "少々" }, { name: "ケチャップ", amount: "大さじ3" }, { name: "ウスターソース", amount: "大さじ2" }, { name: "バター", amount: "10g" }],
        steps: ["玉ねぎをみじん切りにし、バターで炒めて冷ます", "パン粉を牛乳に浸す", "ひき肉に塩を加えてよく練り、玉ねぎ・パン粉・卵・調味料を混ぜる", "小判型に成形し、中央をくぼませる", "フライパンで両面に焼き色をつけ、蓋をして弱火で8分蒸し焼き", "ケチャップとウスターソースでソースを作り、かける"],
        youtubeQuery: "ハンバーグ リュウジ"
    },
    {
        id: "tamagoyaki", name: "卵焼き", category: "副菜", mainIngredient: "卵",
        tags: ["卵"], time: 10, difficulty: "簡単", servings: 2, image: "🥚",
        ingredients: [{ name: "卵", amount: "3個" }, { name: "だし汁", amount: "大さじ2" }, { name: "砂糖", amount: "大さじ1" }, { name: "醤油", amount: "小さじ1/2" }, { name: "塩", amount: "少々" }, { name: "サラダ油", amount: "少々" }],
        steps: ["卵を溶き、だし汁・砂糖・醤油・塩を加えて混ぜる", "卵焼き器にサラダ油を薄く引いて中火で温める", "卵液の1/3を流し入れ、半熟のうちに奥から手前に巻く", "残りの卵液を2回に分けて流し入れ、同様に巻く", "形を整えて冷ましてから切り分ける"],
        youtubeQuery: "卵焼き ふわふわ コツ"
    },
    {
        id: "butadon", name: "豚丼", category: "ご飯もの", mainIngredient: "豚肉",
        tags: ["豚肉", "丼", "玉ねぎ"], time: 15, difficulty: "簡単", servings: 2, image: "🍚",
        ingredients: [{ name: "豚バラ薄切り", amount: "200g" }, { name: "玉ねぎ", amount: "1/2個" }, { name: "醤油", amount: "大さじ2" }, { name: "みりん", amount: "大さじ2" }, { name: "酒", amount: "大さじ1" }, { name: "砂糖", amount: "大さじ1" }, { name: "ご飯", amount: "2杯分" }, { name: "紅しょうが", amount: "適量" }],
        steps: ["豚バラを食べやすい長さに切り、玉ねぎを薄切りにする", "フライパンで豚肉を炒め、色が変わったら玉ねぎを加える", "醤油・みりん・酒・砂糖を加え、汁気が少なくなるまで煮絡める", "ご飯にのせ、紅しょうがを添える"],
        youtubeQuery: "豚丼 簡単 リュウジ"
    },
    {
        id: "niku_dofu", name: "肉豆腐", category: "主菜", mainIngredient: "豆腐",
        tags: ["豆腐", "牛肉", "長ねぎ"], time: 25, difficulty: "簡単", servings: 2, image: "🥘",
        ingredients: [{ name: "木綿豆腐", amount: "1丁" }, { name: "牛薄切り肉", amount: "150g" }, { name: "長ねぎ", amount: "1本" }, { name: "醤油", amount: "大さじ2" }, { name: "みりん", amount: "大さじ2" }, { name: "砂糖", amount: "大さじ1" }, { name: "だし汁", amount: "200ml" }],
        steps: ["豆腐を6等分に切り、長ねぎを斜め切りにする", "鍋にだし汁と調味料を入れて煮立てる", "牛肉をほぐしながら加え、アクを取る", "豆腐と長ねぎを加え、落し蓋をして15分煮る"],
        youtubeQuery: "肉豆腐 簡単"
    },
    {
        id: "yasai_itame", name: "野菜炒め", category: "主菜", mainIngredient: "キャベツ",
        tags: ["キャベツ", "にんじん", "もやし", "豚肉"], time: 10, difficulty: "簡単", servings: 2, image: "🥬",
        ingredients: [{ name: "豚バラ薄切り", amount: "100g" }, { name: "キャベツ", amount: "1/4個" }, { name: "にんじん", amount: "1/2本" }, { name: "もやし", amount: "1袋" }, { name: "ピーマン", amount: "2個" }, { name: "塩こしょう", amount: "少々" }, { name: "醤油", amount: "大さじ1" }, { name: "オイスターソース", amount: "大さじ1" }, { name: "サラダ油", amount: "大さじ1" }],
        steps: ["野菜を食べやすい大きさに切る", "フライパンにサラダ油を強火で熱し、豚肉を炒める", "にんじんなど硬い野菜から順に加えて炒める", "キャベツ・もやし・ピーマンを加えてさっと炒める", "醤油・オイスターソース・塩こしょうで味付けして完成"],
        youtubeQuery: "野菜炒め シャキシャキ コツ"
    },
    {
        id: "salmon_munier", name: "鮭のムニエル", category: "主菜", mainIngredient: "鮭",
        tags: ["鮭", "魚", "バター"], time: 20, difficulty: "簡単", servings: 2, image: "🐟",
        ingredients: [{ name: "鮭の切り身", amount: "2切れ" }, { name: "塩こしょう", amount: "少々" }, { name: "小麦粉", amount: "適量" }, { name: "バター", amount: "20g" }, { name: "レモン", amount: "1/4個" }, { name: "パセリ", amount: "適量" }],
        steps: ["鮭に塩こしょうを振り、小麦粉を薄くまぶす", "フライパンにバター半量を溶かし、鮭を入れて中火で焼く", "焼き色がついたら裏返し、残りのバターを加えて焼く", "レモンを絞り、パセリを散らす"],
        youtubeQuery: "鮭のムニエル 簡単"
    },
    {
        id: "horenso_ohitashi", name: "ほうれん草のおひたし", category: "副菜", mainIngredient: "ほうれん草",
        tags: ["ほうれん草", "かつお節"], time: 10, difficulty: "簡単", servings: 2, image: "🥬",
        ingredients: [{ name: "ほうれん草", amount: "1束" }, { name: "だし汁", amount: "大さじ3" }, { name: "醤油", amount: "大さじ1" }, { name: "かつお節", amount: "適量" }],
        steps: ["たっぷりの湯でほうれん草を30秒茹でる", "冷水に取り、しっかり水気を絞る", "3cm幅に切り、だし汁と醤油を和える", "器に盛り、かつお節をのせる"],
        youtubeQuery: "ほうれん草のおひたし 基本"
    },
    {
        id: "katsudon", name: "カツ丼", category: "ご飯もの", mainIngredient: "豚肉",
        tags: ["豚肉", "卵", "丼", "揚げ物"], time: 30, difficulty: "普通", servings: 2, image: "🍚",
        ingredients: [{ name: "とんかつ(惣菜可)", amount: "1枚" }, { name: "卵", amount: "2個" }, { name: "玉ねぎ", amount: "1/2個" }, { name: "醤油", amount: "大さじ2" }, { name: "みりん", amount: "大さじ2" }, { name: "だし汁", amount: "100ml" }, { name: "砂糖", amount: "小さじ2" }, { name: "ご飯", amount: "2杯分" }, { name: "三つ葉", amount: "適量" }],
        steps: ["玉ねぎを薄切りにし、とんかつを一口大に切る", "小さめのフライパンにだし汁・醤油・みりん・砂糖を煮立て、玉ねぎを加えてしんなりさせる", "とんかつを並べ入れる", "溶き卵を回しかけ、半熟で火を止める", "ご飯にのせ、三つ葉を飾る"],
        youtubeQuery: "カツ丼 リュウジ"
    },
    {
        id: "potato_salad", name: "ポテトサラダ", category: "副菜", mainIngredient: "じゃがいも",
        tags: ["じゃがいも", "きゅうり", "ハム"], time: 25, difficulty: "簡単", servings: 3, image: "🥗",
        ingredients: [{ name: "じゃがいも", amount: "3個" }, { name: "きゅうり", amount: "1本" }, { name: "ハム", amount: "3枚" }, { name: "にんじん", amount: "1/3本" }, { name: "マヨネーズ", amount: "大さじ3" }, { name: "酢", amount: "小さじ1" }, { name: "塩こしょう", amount: "少々" }],
        steps: ["じゃがいもを茹でて熱いうちに潰し、酢を混ぜる", "きゅうりを薄切りにして塩もみし水気を絞る", "にんじんを薄切りにして茹でる。ハムを短冊切りにする", "すべてをマヨネーズで和え、塩こしょうで調味する"],
        youtubeQuery: "ポテトサラダ リュウジ"
    },
    {
        id: "ebi_chili", name: "エビチリ", category: "主菜", mainIngredient: "海老",
        tags: ["海老", "中華", "チリソース"], time: 20, difficulty: "普通", servings: 2, image: "🦐",
        ingredients: [{ name: "むきエビ", amount: "200g" }, { name: "長ねぎ", amount: "1/2本" }, { name: "にんにく", amount: "1かけ" }, { name: "生姜", amount: "1かけ" }, { name: "豆板醤", amount: "小さじ1" }, { name: "ケチャップ", amount: "大さじ3" }, { name: "鶏がらスープ", amount: "50ml" }, { name: "砂糖", amount: "小さじ1" }, { name: "片栗粉", amount: "大さじ1" }, { name: "ごま油", amount: "適量" }, { name: "卵", amount: "1個" }],
        steps: ["エビに塩・片栗粉で下処理し、水洗い後水気を拭く", "長ねぎ・にんにく・生姜をみじん切りにする", "フライパンにごま油を熱し、にんにく・生姜・豆板醤を炒める", "エビを加えて色が変わるまで炒める", "ケチャップ・スープ・砂糖を加え、とろみがついたら溶き卵を回しかける", "ねぎを加えてさっと混ぜる"],
        youtubeQuery: "エビチリ リュウジ"
    },
    {
        id: "hijiki_nimono", name: "ひじきの煮物", category: "副菜", mainIngredient: "ひじき",
        tags: ["ひじき", "にんじん", "油揚げ"], time: 25, difficulty: "簡単", servings: 3, image: "🥣",
        ingredients: [{ name: "乾燥ひじき", amount: "20g" }, { name: "にんじん", amount: "1/3本" }, { name: "油揚げ", amount: "1枚" }, { name: "大豆(水煮)", amount: "50g" }, { name: "醤油", amount: "大さじ2" }, { name: "みりん", amount: "大さじ1" }, { name: "砂糖", amount: "大さじ1" }, { name: "だし汁", amount: "200ml" }, { name: "サラダ油", amount: "少々" }],
        steps: ["ひじきを水で戻し、水気を切る", "にんじん・油揚げを細切りにする", "鍋にサラダ油を熱し、ひじき・にんじん・油揚げを炒める", "だし汁と調味料を加え、大豆も入れて落し蓋をし中弱火で15分煮る", "汁気がほぼなくなれば完成"],
        youtubeQuery: "ひじきの煮物 基本"
    },
    {
        id: "nasu_dengaku", name: "なすの味噌田楽", category: "副菜", mainIngredient: "なす",
        tags: ["なす", "味噌"], time: 15, difficulty: "簡単", servings: 2, image: "🍆",
        ingredients: [{ name: "なす", amount: "2本" }, { name: "味噌", amount: "大さじ2" }, { name: "砂糖", amount: "大さじ1" }, { name: "みりん", amount: "大さじ1" }, { name: "サラダ油", amount: "大さじ2" }, { name: "白ごま", amount: "少々" }],
        steps: ["なすを縦半分に切り、皮に格子状の切り込みを入れる", "フライパンにサラダ油を熱し、なすを断面から焼いて両面を焼く", "味噌・砂糖・みりんを混ぜた田楽味噌を塗る", "白ごまを散らす"],
        youtubeQuery: "なす 味噌田楽 簡単"
    },
    {
        id: "omurice", name: "オムライス", category: "ご飯もの", mainIngredient: "卵",
        tags: ["卵", "鶏肉", "ケチャップ", "ご飯"], time: 20, difficulty: "普通", servings: 1, image: "🍳",
        ingredients: [{ name: "ご飯", amount: "1杯分" }, { name: "鶏もも肉", amount: "50g" }, { name: "玉ねぎ", amount: "1/4個" }, { name: "ケチャップ", amount: "大さじ3" }, { name: "卵", amount: "3個" }, { name: "牛乳", amount: "大さじ1" }, { name: "塩こしょう", amount: "少々" }, { name: "バター", amount: "15g" }],
        steps: ["鶏肉と玉ねぎをさいの目に切る", "フライパンでバター半量を溶かし、鶏肉と玉ねぎを炒める", "ご飯を加え、ケチャップで味付けしてチキンライスを作り皿に盛る", "卵に牛乳・塩こしょうを混ぜ、バターを溶かしたフライパンで半熟のオムレツを作る", "チキンライスの上にのせ、ケチャップをかける"],
        youtubeQuery: "オムライス リュウジ ふわとろ"
    },
    {
        id: "tonjiru", name: "豚汁", category: "汁物", mainIngredient: "豚肉",
        tags: ["豚肉", "大根", "にんじん", "味噌"], time: 30, difficulty: "簡単", servings: 4, image: "🥣",
        ingredients: [{ name: "豚バラ薄切り", amount: "150g" }, { name: "大根", amount: "1/4本" }, { name: "にんじん", amount: "1/2本" }, { name: "ごぼう", amount: "1/2本" }, { name: "こんにゃく", amount: "1/2枚" }, { name: "長ねぎ", amount: "1本" }, { name: "味噌", amount: "大さじ3" }, { name: "だし汁", amount: "800ml" }, { name: "ごま油", amount: "大さじ1" }],
        steps: ["野菜を食べやすい大きさに切る。ごぼうはささがきにして水にさらす", "鍋にごま油を熱し、豚肉を炒める", "野菜とこんにゃくを加えて炒め、だし汁を注ぐ", "アクを取りながら野菜が柔らかくなるまで15分煮る", "火を止めて味噌を溶き入れ、ねぎを散らす"],
        youtubeQuery: "豚汁 リュウジ"
    },
    {
        id: "daikon_nimono", name: "大根の煮物", category: "副菜", mainIngredient: "大根",
        tags: ["大根", "和食"], time: 40, difficulty: "簡単", servings: 3, image: "🥣",
        ingredients: [{ name: "大根", amount: "1/2本" }, { name: "だし汁", amount: "500ml" }, { name: "醤油", amount: "大さじ2" }, { name: "みりん", amount: "大さじ2" }, { name: "砂糖", amount: "大さじ1" }, { name: "油揚げ", amount: "1枚" }],
        steps: ["大根を2cm厚さの輪切りにし、皮をむいて面取りする", "鍋にだし汁と大根を入れ、柔らかくなるまで20分煮る", "調味料と油揚げを加え、さらに15分煮含める", "火を止めて冷ましながら味を染み込ませる"],
        youtubeQuery: "大根の煮物 しみしみ"
    },
    {
        id: "yakisoba", name: "焼きそば", category: "ご飯もの", mainIngredient: "豚肉",
        tags: ["豚肉", "キャベツ", "麺"], time: 15, difficulty: "簡単", servings: 2, image: "🍜",
        ingredients: [{ name: "焼きそば麺", amount: "2玉" }, { name: "豚バラ薄切り", amount: "100g" }, { name: "キャベツ", amount: "1/4個" }, { name: "にんじん", amount: "1/3本" }, { name: "もやし", amount: "1/2袋" }, { name: "付属のソース", amount: "2袋" }, { name: "サラダ油", amount: "大さじ1" }, { name: "青のり", amount: "適量" }, { name: "紅しょうが", amount: "適量" }],
        steps: ["キャベツをざく切り、にんじんを短冊切り、豚肉を食べやすく切る", "フライパンにサラダ油を熱し、豚肉を炒める", "野菜を加えてさっと炒める", "麺をほぐしながら加え、水を少々振りかけて蒸し焼きにする", "ソースを加えて全体に絡め、青のりと紅しょうがを添える"],
        youtubeQuery: "焼きそば リュウジ"
    },
    {
        id: "buri_teriyaki", name: "ぶりの照り焼き", category: "主菜", mainIngredient: "ぶり",
        tags: ["ぶり", "魚", "醤油"], time: 20, difficulty: "簡単", servings: 2, image: "🐟",
        ingredients: [{ name: "ぶりの切り身", amount: "2切れ" }, { name: "醤油", amount: "大さじ2" }, { name: "みりん", amount: "大さじ2" }, { name: "酒", amount: "大さじ1" }, { name: "砂糖", amount: "大さじ1/2" }, { name: "サラダ油", amount: "少々" }],
        steps: ["ぶりに塩を振り10分置き、水気を拭く", "フライパンにサラダ油を熱し、ぶりを中火で両面焼く", "余分な脂を拭き取り、合わせた調味料を加える", "タレを煮詰めながら両面に絡める"],
        youtubeQuery: "ぶりの照り焼き リュウジ"
    },
    {
        id: "kakitama_soup", name: "かきたま汁", category: "汁物", mainIngredient: "卵",
        tags: ["卵", "汁物", "和食"], time: 10, difficulty: "簡単", servings: 2, image: "🥣",
        ingredients: [{ name: "卵", amount: "1個" }, { name: "だし汁", amount: "400ml" }, { name: "醤油", amount: "小さじ1" }, { name: "塩", amount: "少々" }, { name: "片栗粉", amount: "小さじ1" }, { name: "三つ葉", amount: "適量" }],
        steps: ["だし汁を温め、醤油と塩で味付けする", "水溶き片栗粉でうすくとろみをつける", "火を弱め、溶き卵を細く流し入れる", "ふわっとしたら火を止め、三つ葉を添える"],
        youtubeQuery: "かきたま汁 ふわふわ"
    },
    {
        id: "chicken_nanban", name: "チキン南蛮", category: "主菜", mainIngredient: "鶏肉",
        tags: ["鶏肉", "揚げ物", "タルタルソース"], time: 30, difficulty: "普通", servings: 2, image: "🍗",
        ingredients: [{ name: "鶏むね肉", amount: "1枚(300g)" }, { name: "卵", amount: "2個" }, { name: "小麦粉", amount: "適量" }, { name: "酢", amount: "大さじ3" }, { name: "醤油", amount: "大さじ2" }, { name: "砂糖", amount: "大さじ2" }, { name: "玉ねぎ", amount: "1/4個" }, { name: "マヨネーズ", amount: "大さじ3" }, { name: "ピクルス(きゅうり)", amount: "少々" }, { name: "揚げ油", amount: "適量" }],
        steps: ["鶏むね肉をそぎ切りにし、塩こしょうして小麦粉をまぶす", "溶き卵にくぐらせ170℃で揚げる", "酢・醤油・砂糖を混ぜた甘酢ダレに揚げたてを漬ける", "ゆで卵・みじん切り玉ねぎ・マヨネーズでタルタルソースを作る", "甘酢チキンにタルタルソースをかける"],
        youtubeQuery: "チキン南蛮 リュウジ"
    },
    {
        id: "sunomono", name: "きゅうりとわかめの酢の物", category: "副菜", mainIngredient: "きゅうり",
        tags: ["きゅうり", "わかめ", "酢"], time: 10, difficulty: "簡単", servings: 2, image: "🥒",
        ingredients: [{ name: "きゅうり", amount: "1本" }, { name: "乾燥わかめ", amount: "5g" }, { name: "酢", amount: "大さじ2" }, { name: "砂糖", amount: "大さじ1" }, { name: "醤油", amount: "小さじ1" }, { name: "塩", amount: "少々" }, { name: "白ごま", amount: "適量" }],
        steps: ["きゅうりを薄切りにし塩もみして水気を絞る", "わかめを水で戻し、食べやすい大きさに切る", "酢・砂糖・醤油で合わせ酢を作る", "きゅうりとわかめを合わせ酢で和え、白ごまを振る"],
        youtubeQuery: "きゅうり 酢の物 基本"
    },
    {
        id: "nikumaki", name: "アスパラの肉巻き", category: "主菜", mainIngredient: "豚肉",
        tags: ["豚肉", "アスパラガス"], time: 15, difficulty: "簡単", servings: 2, image: "🥩",
        ingredients: [{ name: "豚バラ薄切り", amount: "8枚" }, { name: "アスパラガス", amount: "8本" }, { name: "塩こしょう", amount: "少々" }, { name: "醤油", amount: "大さじ1" }, { name: "みりん", amount: "大さじ1" }, { name: "サラダ油", amount: "少々" }],
        steps: ["アスパラは根元を切り落とし下半分の皮をむく", "豚肉をアスパラに巻きつけ、塩こしょうを振る", "フライパンにサラダ油を熱し、巻き終わりを下にして焼く", "転がしながら全体に焼き色をつける", "醤油とみりんを加えて絡める"],
        youtubeQuery: "アスパラ 肉巻き 簡単"
    },
    {
        id: "corn_soup", name: "コーンスープ", category: "汁物", mainIngredient: "とうもろこし",
        tags: ["とうもろこし", "牛乳", "スープ"], time: 15, difficulty: "簡単", servings: 2, image: "🌽",
        ingredients: [{ name: "コーンクリーム缶", amount: "1缶(190g)" }, { name: "牛乳", amount: "200ml" }, { name: "コンソメ", amount: "小さじ1" }, { name: "塩こしょう", amount: "少々" }, { name: "バター", amount: "5g" }, { name: "パセリ", amount: "少々" }],
        steps: ["鍋にコーンクリーム缶と牛乳を入れて混ぜる", "コンソメを加え、弱火で温める", "塩こしょうで味を整える", "器に注ぎ、バターとパセリをのせる"],
        youtubeQuery: "コーンスープ 簡単 濃厚"
    },
    {
        id: "teriyaki_salmon", name: "サーモンの照り焼き", category: "主菜", mainIngredient: "鮭",
        tags: ["鮭", "魚", "照り焼き"], time: 15, difficulty: "簡単", servings: 2, image: "🐟",
        ingredients: [{ name: "サーモン切り身", amount: "2切れ" }, { name: "醤油", amount: "大さじ1.5" }, { name: "みりん", amount: "大さじ1.5" }, { name: "酒", amount: "大さじ1" }, { name: "砂糖", amount: "小さじ1" }, { name: "サラダ油", amount: "少々" }],
        steps: ["サーモンに軽く塩を振り5分置く", "フライパンにサラダ油を熱し両面焼く", "調味料を合わせて加え、煮絡める", "照りが出たら器に盛る"],
        youtubeQuery: "サーモン照り焼き 簡単"
    },
    {
        id: "goya_chanpuru", name: "ゴーヤチャンプルー", category: "主菜", mainIngredient: "ゴーヤ",
        tags: ["ゴーヤ", "豆腐", "豚肉", "卵"], time: 20, difficulty: "普通", servings: 2, image: "🥬",
        ingredients: [{ name: "ゴーヤ", amount: "1/2本" }, { name: "木綿豆腐", amount: "1/2丁" }, { name: "豚バラ薄切り", amount: "100g" }, { name: "卵", amount: "2個" }, { name: "かつお節", amount: "適量" }, { name: "醤油", amount: "大さじ1" }, { name: "塩", amount: "少々" }, { name: "ごま油", amount: "大さじ1" }],
        steps: ["ゴーヤを薄切りにし塩もみして苦味を和らげる", "豆腐を水切りし手でちぎる", "フライパンにごま油を熱し、豆腐を焼き目がつくまで焼いて取り出す", "豚肉を炒め、ゴーヤを加えてさっと炒める", "豆腐を戻し、醤油で味付けして溶き卵を回しかける", "かつお節を振りかける"],
        youtubeQuery: "ゴーヤチャンプルー リュウジ"
    },
    {
        id: "tuna_mayo_don", name: "ツナマヨ丼", category: "ご飯もの", mainIngredient: "ツナ",
        tags: ["ツナ", "卵", "丼"], time: 5, difficulty: "簡単", servings: 1, image: "🍚",
        ingredients: [{ name: "ツナ缶", amount: "1缶" }, { name: "マヨネーズ", amount: "大さじ1" }, { name: "醤油", amount: "小さじ1" }, { name: "ご飯", amount: "1杯分" }, { name: "卵黄", amount: "1個" }, { name: "刻みのり", amount: "適量" }, { name: "ねぎ", amount: "少々" }],
        steps: ["ツナの油を軽く切り、マヨネーズと醤油で和える", "ご飯の上にのせる", "卵黄をのせ、刻みのりとねぎを散らす"],
        youtubeQuery: "ツナマヨ丼 リュウジ"
    },
    {
        id: "shogayaki_don", name: "回鍋肉", category: "主菜", mainIngredient: "豚肉",
        tags: ["豚肉", "キャベツ", "中華", "ピーマン"], time: 15, difficulty: "普通", servings: 2, image: "🥬",
        ingredients: [{ name: "豚バラ薄切り", amount: "200g" }, { name: "キャベツ", amount: "1/4個" }, { name: "ピーマン", amount: "2個" }, { name: "長ねぎ", amount: "1/2本" }, { name: "甜面醤", amount: "大さじ1.5" }, { name: "豆板醤", amount: "小さじ1" }, { name: "醤油", amount: "大さじ1" }, { name: "酒", amount: "大さじ1" }, { name: "砂糖", amount: "小さじ1" }, { name: "ごま油", amount: "大さじ1" }],
        steps: ["キャベツをざく切り、ピーマンは一口大、長ねぎは斜め切りにする", "豚肉を食べやすい大きさに切る", "フライパンにごま油を熱し豚肉を炒める", "野菜を加えて強火でさっと炒める", "合わせ調味料（甜面醤・豆板醤・醤油・酒・砂糖）を加え、手早く絡める"],
        youtubeQuery: "回鍋肉 リュウジ"
    },
    {
        id: "niku_udon", name: "肉うどん", category: "ご飯もの", mainIngredient: "牛肉",
        tags: ["牛肉", "うどん", "麺"], time: 20, difficulty: "簡単", servings: 2, image: "🍜",
        ingredients: [{ name: "うどん", amount: "2玉" }, { name: "牛薄切り肉", amount: "150g" }, { name: "長ねぎ", amount: "1本" }, { name: "醤油", amount: "大さじ2" }, { name: "みりん", amount: "大さじ1" }, { name: "砂糖", amount: "小さじ2" }, { name: "だし汁", amount: "600ml" }],
        steps: ["だし汁を温め、醤油・みりんで味付けする", "牛肉に砂糖と醤油少々で下味をつけ、フライパンでさっと炒める", "うどんを茹でて器に盛り、つゆを注ぐ", "牛肉と斜め切りの長ねぎをのせる"],
        youtubeQuery: "肉うどん 簡単"
    },
    {
        id: "tori_nanban_udon", name: "鶏天うどん", category: "ご飯もの", mainIngredient: "鶏肉",
        tags: ["鶏肉", "うどん", "麺", "揚げ物"], time: 25, difficulty: "普通", servings: 2, image: "🍜",
        ingredients: [{ name: "うどん", amount: "2玉" }, { name: "鶏むね肉", amount: "200g" }, { name: "天ぷら粉", amount: "適量" }, { name: "だし汁", amount: "600ml" }, { name: "醤油", amount: "大さじ2" }, { name: "みりん", amount: "大さじ1" }, { name: "揚げ油", amount: "適量" }],
        steps: ["鶏むね肉をそぎ切りにし塩こしょうで下味をつける", "天ぷら粉を水で溶き、鶏肉をくぐらせて170℃で揚げる", "だし汁・醤油・みりんでつゆを作る", "うどんを茹でて器に盛り、つゆと鶏天をのせる"],
        youtubeQuery: "鶏天うどん クラシル"
    },
    {
        id: "naporitan", name: "ナポリタン", category: "ご飯もの", mainIngredient: "豚肉",
        tags: ["豚肉", "ピーマン", "玉ねぎ", "麺"], time: 15, difficulty: "簡単", servings: 2, image: "🍝",
        ingredients: [{ name: "スパゲッティ", amount: "200g" }, { name: "ウインナー", amount: "4本" }, { name: "玉ねぎ", amount: "1/2個" }, { name: "ピーマン", amount: "2個" }, { name: "マッシュルーム", amount: "4個" }, { name: "ケチャップ", amount: "大さじ5" }, { name: "バター", amount: "15g" }, { name: "塩こしょう", amount: "少々" }],
        steps: ["パスタを茹でる（表示より1分短く）", "ウインナーを斜め切り、玉ねぎを薄切り、ピーマンを細切りにする", "フライパンにバターを溶かし、具材を炒める", "パスタとケチャップを加え、強火で炒め合わせる", "塩こしょうで味を整える"],
        youtubeQuery: "ナポリタン リュウジ"
    },
    {
        id: "peperoncino", name: "ペペロンチーノ", category: "ご飯もの", mainIngredient: "にんにく",
        tags: ["にんにく", "唐辛子", "麺"], time: 15, difficulty: "簡単", servings: 1, image: "🍝",
        ingredients: [{ name: "スパゲッティ", amount: "100g" }, { name: "にんにく", amount: "2かけ" }, { name: "唐辛子", amount: "1本" }, { name: "オリーブオイル", amount: "大さじ3" }, { name: "塩", amount: "適量" }, { name: "パセリ", amount: "少々" }],
        steps: ["パスタを塩多めの湯で茹でる", "フライパンにオリーブオイル・薄切りにんにく・唐辛子を入れ弱火で加熱", "にんにくがきつね色になったらパスタの茹で汁をお玉1杯加える", "茹で上がったパスタを加え、トングで混ぜて乳化させる", "パセリを散らす"],
        youtubeQuery: "ペペロンチーノ リュウジ"
    },
    {
        id: "cream_pasta", name: "きのこクリームパスタ", category: "ご飯もの", mainIngredient: "きのこ",
        tags: ["きのこ", "牛乳", "麺"], time: 20, difficulty: "普通", servings: 2, image: "🍝",
        ingredients: [{ name: "スパゲッティ", amount: "200g" }, { name: "しめじ", amount: "1パック" }, { name: "エリンギ", amount: "1パック" }, { name: "ベーコン", amount: "2枚" }, { name: "牛乳", amount: "200ml" }, { name: "生クリーム", amount: "100ml" }, { name: "コンソメ", amount: "小さじ1" }, { name: "バター", amount: "15g" }, { name: "塩こしょう", amount: "少々" }, { name: "粉チーズ", amount: "適量" }],
        steps: ["きのこをほぐし、ベーコンを短冊切りにする", "フライパンにバターを溶かし、ベーコンときのこを炒める", "牛乳・生クリーム・コンソメを加えて軽く煮る", "茹でたパスタを加え、塩こしょうで調味", "粉チーズをかける"],
        youtubeQuery: "きのこクリームパスタ クラシル"
    },
    {
        id: "hayashi_rice", name: "ハヤシライス", category: "ご飯もの", mainIngredient: "牛肉",
        tags: ["牛肉", "玉ねぎ", "トマト"], time: 35, difficulty: "普通", servings: 3, image: "🍛",
        ingredients: [{ name: "牛薄切り肉", amount: "250g" }, { name: "玉ねぎ", amount: "2個" }, { name: "マッシュルーム", amount: "6個" }, { name: "トマト缶", amount: "1/2缶" }, { name: "デミグラスソース缶", amount: "1缶" }, { name: "赤ワイン", amount: "50ml" }, { name: "バター", amount: "20g" }, { name: "ケチャップ", amount: "大さじ1" }, { name: "ご飯", amount: "3杯分" }],
        steps: ["玉ねぎを薄切りにする", "鍋にバターを溶かし、玉ねぎをあめ色になるまで炒める", "牛肉を加えて炒め、赤ワインを注いでアルコールを飛ばす", "トマト缶・デミグラスソース・ケチャップを加え15分煮込む", "ご飯にかける"],
        youtubeQuery: "ハヤシライス 簡単"
    },
    {
        id: "kabocha_nimono", name: "かぼちゃの煮物", category: "副菜", mainIngredient: "かぼちゃ",
        tags: ["かぼちゃ", "和食"], time: 25, difficulty: "簡単", servings: 3, image: "🎃",
        ingredients: [{ name: "かぼちゃ", amount: "1/4個" }, { name: "だし汁", amount: "200ml" }, { name: "醤油", amount: "大さじ1.5" }, { name: "みりん", amount: "大さじ1.5" }, { name: "砂糖", amount: "大さじ1" }],
        steps: ["かぼちゃを一口大に切り、皮を所々むく", "鍋にだし汁と調味料を入れて煮立てる", "かぼちゃを皮を下にして並べ、落し蓋をして中弱火で15分煮る", "竹串がすっと通れば完成"],
        youtubeQuery: "かぼちゃの煮物 クラシル"
    },
    {
        id: "satsumaimo_butter", name: "さつまいものバター焼き", category: "副菜", mainIngredient: "さつまいも",
        tags: ["さつまいも"], time: 15, difficulty: "簡単", servings: 2, image: "🍠",
        ingredients: [{ name: "さつまいも", amount: "1本" }, { name: "バター", amount: "20g" }, { name: "砂糖", amount: "大さじ1" }, { name: "醤油", amount: "小さじ1" }],
        steps: ["さつまいもを1cm厚の輪切りにし、水にさらす", "フライパンにバターを溶かし、さつまいもを並べて蓋をし弱火で片面5分ずつ焼く", "砂糖と醤油を加えて絡める"],
        youtubeQuery: "さつまいも バター焼き 簡単"
    },
    {
        id: "broccoli_garlic", name: "ブロッコリーのガーリック炒め", category: "副菜", mainIngredient: "ブロッコリー",
        tags: ["ブロッコリー", "にんにく"], time: 10, difficulty: "簡単", servings: 2, image: "🥦",
        ingredients: [{ name: "ブロッコリー", amount: "1株" }, { name: "にんにく", amount: "2かけ" }, { name: "オリーブオイル", amount: "大さじ2" }, { name: "塩", amount: "少々" }, { name: "唐辛子", amount: "1/2本" }],
        steps: ["ブロッコリーを小房に分け、塩茹でして水気を切る", "フライパンにオリーブオイル・薄切りにんにく・唐辛子を弱火で加熱", "にんにくが色づいたらブロッコリーを加えて強火でさっと炒める", "塩で味を整える"],
        youtubeQuery: "ブロッコリー にんにく炒め"
    },
    {
        id: "tomato_caprese", name: "トマトとモッツァレラのカプレーゼ", category: "副菜", mainIngredient: "トマト",
        tags: ["トマト", "チーズ"], time: 5, difficulty: "簡単", servings: 2, image: "🍅",
        ingredients: [{ name: "トマト", amount: "2個" }, { name: "モッツァレラチーズ", amount: "1個" }, { name: "バジル", amount: "適量" }, { name: "オリーブオイル", amount: "大さじ2" }, { name: "塩", amount: "少々" }, { name: "黒こしょう", amount: "少々" }],
        steps: ["トマトとモッツァレラチーズを5mm厚にスライスする", "交互に並べ、バジルの葉を散らす", "オリーブオイルをかけ、塩と黒こしょうを振る"],
        youtubeQuery: "カプレーゼ 簡単"
    },
    {
        id: "hakusai_cream_ni", name: "白菜のクリーム煮", category: "主菜", mainIngredient: "白菜",
        tags: ["白菜", "鶏肉", "牛乳"], time: 25, difficulty: "普通", servings: 2, image: "🥬",
        ingredients: [{ name: "白菜", amount: "1/4個" }, { name: "鶏もも肉", amount: "150g" }, { name: "牛乳", amount: "200ml" }, { name: "コンソメ", amount: "小さじ1" }, { name: "バター", amount: "15g" }, { name: "小麦粉", amount: "大さじ1" }, { name: "塩こしょう", amount: "少々" }],
        steps: ["白菜をざく切り、鶏肉を一口大に切る", "フライパンにバターを溶かし鶏肉を炒め、小麦粉を振り入れる", "白菜を加えてしんなりするまで炒める", "牛乳とコンソメを加え、とろみがつくまで10分煮る", "塩こしょうで調味する"],
        youtubeQuery: "白菜 クリーム煮 クラシル"
    },
    {
        id: "piiman_stuffed", name: "ピーマンの肉詰め", category: "主菜", mainIngredient: "ひき肉",
        tags: ["ひき肉", "ピーマン"], time: 25, difficulty: "普通", servings: 2, image: "🫑",
        ingredients: [{ name: "ピーマン", amount: "6個" }, { name: "合いびき肉", amount: "200g" }, { name: "玉ねぎ", amount: "1/4個" }, { name: "パン粉", amount: "大さじ2" }, { name: "卵", amount: "1/2個" }, { name: "塩こしょう", amount: "少々" }, { name: "小麦粉", amount: "適量" }, { name: "ケチャップ", amount: "大さじ2" }, { name: "ウスターソース", amount: "大さじ1" }],
        steps: ["ピーマンを半分に切り種を取り、内側に小麦粉を薄くまぶす", "ひき肉・みじん切り玉ねぎ・パン粉・卵・塩こしょうを練り混ぜる", "ピーマンに肉だねを詰める", "フライパンに油を熱し肉側を下にして焼き、蓋をして蒸し焼き8分", "ケチャップとソースを混ぜてかける"],
        youtubeQuery: "ピーマンの肉詰め リュウジ"
    },
    {
        id: "tamanegi_soup", name: "オニオンスープ", category: "汁物", mainIngredient: "玉ねぎ",
        tags: ["玉ねぎ", "スープ", "チーズ"], time: 30, difficulty: "普通", servings: 2, image: "🧅",
        ingredients: [{ name: "玉ねぎ", amount: "2個" }, { name: "バター", amount: "20g" }, { name: "コンソメ", amount: "小さじ2" }, { name: "水", amount: "400ml" }, { name: "塩こしょう", amount: "少々" }, { name: "フランスパン", amount: "2切れ" }, { name: "とろけるチーズ", amount: "適量" }],
        steps: ["玉ねぎを薄切りにする", "鍋にバターを溶かし、弱火で玉ねぎをあめ色になるまで20分炒める", "水とコンソメを加えて10分煮る", "耐熱カップに注ぎ、パンとチーズをのせてトースターで焦げ目をつける"],
        youtubeQuery: "オニオンスープ 本格"
    },
    {
        id: "taco_rice", name: "タコライス", category: "ご飯もの", mainIngredient: "ひき肉",
        tags: ["ひき肉", "トマト", "レタス"], time: 15, difficulty: "簡単", servings: 2, image: "🌮",
        ingredients: [{ name: "合いびき肉", amount: "200g" }, { name: "レタス", amount: "3枚" }, { name: "トマト", amount: "1個" }, { name: "とろけるチーズ", amount: "適量" }, { name: "ケチャップ", amount: "大さじ2" }, { name: "ウスターソース", amount: "大さじ1" }, { name: "カレー粉", amount: "小さじ1" }, { name: "にんにく", amount: "1かけ" }, { name: "ご飯", amount: "2杯分" }],
        steps: ["にんにくをみじん切りにし、トマトを角切り、レタスをちぎる", "フライパンでにんにくとひき肉を炒める", "ケチャップ・ウスターソース・カレー粉で味付けする", "ご飯の上にレタス・タコミート・トマト・チーズをのせる"],
        youtubeQuery: "タコライス リュウジ"
    },
    {
        id: "negi_shio_buta", name: "ねぎ塩豚", category: "主菜", mainIngredient: "豚肉",
        tags: ["豚肉", "長ねぎ"], time: 15, difficulty: "簡単", servings: 2, image: "🥩",
        ingredients: [{ name: "豚バラ薄切り", amount: "200g" }, { name: "長ねぎ", amount: "1本" }, { name: "にんにく", amount: "1かけ" }, { name: "ごま油", amount: "大さじ1" }, { name: "レモン汁", amount: "大さじ1" }, { name: "塩", amount: "小さじ1/2" }, { name: "黒こしょう", amount: "適量" }],
        steps: ["長ねぎをみじん切りにし、ごま油・レモン汁・塩・すりおろしにんにくで塩だれを作る", "豚肉に塩こしょうを振る", "フライパンで豚肉をカリッと焼く", "塩だれをたっぷりかけてさっと絡める"],
        youtubeQuery: "ねぎ塩豚 リュウジ"
    },
    {
        id: "aji_fry", name: "アジフライ", category: "主菜", mainIngredient: "アジ",
        tags: ["アジ", "魚", "揚げ物"], time: 25, difficulty: "普通", servings: 2, image: "🐟",
        ingredients: [{ name: "アジ(開き)", amount: "4枚" }, { name: "塩こしょう", amount: "少々" }, { name: "小麦粉", amount: "適量" }, { name: "卵", amount: "1個" }, { name: "パン粉", amount: "適量" }, { name: "揚げ油", amount: "適量" }, { name: "タルタルソース", amount: "適量" }, { name: "レモン", amount: "1/4個" }],
        steps: ["アジに塩こしょうを振る", "小麦粉→溶き卵→パン粉の順に衣をつける", "170℃の油で3〜4分こんがり揚げる", "タルタルソースとレモンを添える"],
        youtubeQuery: "アジフライ サクサク コツ"
    },
    {
        id: "tofu_steak", name: "豆腐ステーキ", category: "主菜", mainIngredient: "豆腐",
        tags: ["豆腐", "にんにく"], time: 15, difficulty: "簡単", servings: 2, image: "🧈",
        ingredients: [{ name: "木綿豆腐", amount: "1丁" }, { name: "にんにく", amount: "1かけ" }, { name: "バター", amount: "15g" }, { name: "醤油", amount: "大さじ1.5" }, { name: "みりん", amount: "大さじ1" }, { name: "片栗粉", amount: "適量" }, { name: "大葉", amount: "3枚" }],
        steps: ["豆腐をしっかり水切りし、厚さ半分に切る", "片栗粉を薄くまぶす", "フライパンにバターとスライスにんにくを入れて弱火で香りを出す", "豆腐を入れて両面こんがり焼く", "醤油とみりんを加えて絡め、大葉をのせる"],
        youtubeQuery: "豆腐ステーキ リュウジ"
    },
    {
        id: "chicken_katsu_curry", name: "チキンカツカレー", category: "ご飯もの", mainIngredient: "鶏肉",
        tags: ["鶏肉", "カレー", "揚げ物"], time: 40, difficulty: "普通", servings: 2, image: "🍛",
        ingredients: [{ name: "鶏むね肉", amount: "1枚" }, { name: "カレー(残り物可)", amount: "2人分" }, { name: "小麦粉", amount: "適量" }, { name: "卵", amount: "1個" }, { name: "パン粉", amount: "適量" }, { name: "揚げ油", amount: "適量" }, { name: "ご飯", amount: "2杯分" }],
        steps: ["鶏むね肉を開いて厚さを均一にし、塩こしょうする", "小麦粉→卵→パン粉の順に衣をつける", "170℃で5〜6分揚げ、2分休ませてから切る", "ご飯にカレーをかけ、チキンカツをのせる"],
        youtubeQuery: "チキンカツカレー 簡単"
    },
    {
        id: "beef_stew", name: "ビーフシチュー", category: "主菜", mainIngredient: "牛肉",
        tags: ["牛肉", "にんじん", "じゃがいも"], time: 60, difficulty: "本格", servings: 4, image: "🍲",
        ingredients: [{ name: "牛すね肉(カレー用)", amount: "400g" }, { name: "じゃがいも", amount: "2個" }, { name: "にんじん", amount: "1本" }, { name: "玉ねぎ", amount: "1個" }, { name: "デミグラスソース缶", amount: "1缶" }, { name: "赤ワイン", amount: "100ml" }, { name: "水", amount: "400ml" }, { name: "バター", amount: "15g" }, { name: "ケチャップ", amount: "大さじ1" }, { name: "塩こしょう", amount: "少々" }],
        steps: ["牛肉に塩こしょうを振り、バターで表面を焼き付ける", "ワインを加えてアルコールを飛ばす", "水と野菜を加え、アクを取りながら弱火で40分煮込む", "デミグラスソースとケチャップを加えて15分煮る", "塩こしょうで味を整える"],
        youtubeQuery: "ビーフシチュー 本格 簡単"
    },
    {
        id: "soboro_don", name: "三色そぼろ丼", category: "ご飯もの", mainIngredient: "ひき肉",
        tags: ["ひき肉", "卵", "丼"], time: 15, difficulty: "簡単", servings: 2, image: "🍚",
        ingredients: [{ name: "鶏ひき肉", amount: "150g" }, { name: "卵", amount: "2個" }, { name: "絹さや", amount: "6枚" }, { name: "醤油", amount: "大さじ1.5" }, { name: "みりん", amount: "大さじ1" }, { name: "砂糖", amount: "大さじ1" }, { name: "生姜", amount: "少々" }, { name: "ご飯", amount: "2杯分" }],
        steps: ["フライパンにひき肉と調味料を入れ、菜箸4本でポロポロに炒り煮する", "卵に砂糖少々を混ぜ、別のフライパンで菜箸を使って炒り卵を作る", "絹さやを茹でて斜め切りにする", "ご飯の上に3色を並べて盛り付ける"],
        youtubeQuery: "三色そぼろ丼 クラシル"
    },
    {
        id: "oyster_sauce_beef", name: "牛肉とブロッコリーのオイスター炒め", category: "主菜", mainIngredient: "牛肉",
        tags: ["牛肉", "ブロッコリー", "中華"], time: 15, difficulty: "簡単", servings: 2, image: "🥦",
        ingredients: [{ name: "牛こま切れ肉", amount: "200g" }, { name: "ブロッコリー", amount: "1株" }, { name: "にんにく", amount: "1かけ" }, { name: "オイスターソース", amount: "大さじ1.5" }, { name: "醤油", amount: "大さじ1/2" }, { name: "酒", amount: "大さじ1" }, { name: "片栗粉", amount: "小さじ1" }, { name: "ごま油", amount: "大さじ1" }],
        steps: ["ブロッコリーを小房に分け、塩茹でする", "牛肉に酒と片栗粉で下味をつける", "フライパンにごま油とにんにくを熱し、牛肉を炒める", "ブロッコリーを加え、オイスターソースと醤油で味付けする"],
        youtubeQuery: "牛肉 ブロッコリー オイスターソース"
    },
    {
        id: "wafu_pasta", name: "和風きのこパスタ", category: "ご飯もの", mainIngredient: "きのこ",
        tags: ["きのこ", "麺"], time: 15, difficulty: "簡単", servings: 1, image: "🍝",
        ingredients: [{ name: "スパゲッティ", amount: "100g" }, { name: "しめじ", amount: "1/2パック" }, { name: "まいたけ", amount: "1/2パック" }, { name: "ベーコン", amount: "1枚" }, { name: "にんにく", amount: "1かけ" }, { name: "醤油", amount: "大さじ1" }, { name: "バター", amount: "10g" }, { name: "大葉", amount: "3枚" }, { name: "刻みのり", amount: "適量" }],
        steps: ["パスタを茹でる", "フライパンにバターでにんにくを炒め、ベーコンときのこを加える", "パスタと茹で汁少々を加え、醤油で仕上げる", "大葉と刻みのりをのせる"],
        youtubeQuery: "和風パスタ きのこ リュウジ"
    },
    {
        id: "chikuzen_ni", name: "筑前煮", category: "主菜", mainIngredient: "鶏肉",
        tags: ["鶏肉", "にんじん", "ごぼう", "和食"], time: 40, difficulty: "普通", servings: 4, image: "🥘",
        ingredients: [{ name: "鶏もも肉", amount: "250g" }, { name: "にんじん", amount: "1本" }, { name: "ごぼう", amount: "1/2本" }, { name: "れんこん", amount: "1節" }, { name: "こんにゃく", amount: "1/2枚" }, { name: "干ししいたけ", amount: "4枚" }, { name: "醤油", amount: "大さじ2.5" }, { name: "みりん", amount: "大さじ2" }, { name: "砂糖", amount: "大さじ1" }, { name: "だし汁", amount: "300ml" }, { name: "ごま油", amount: "大さじ1" }],
        steps: ["野菜を乱切りにし、ごぼうとれんこんは酢水にさらす", "鍋にごま油を熱し、鶏肉を炒めて色が変わったら野菜を加える", "だし汁と調味料を加え、落し蓋をして中弱火で25分煮る", "汁気が少なくなるまで煮詰める"],
        youtubeQuery: "筑前煮 基本"
    },
    {
        id: "subuta", name: "酢豚", category: "主菜", mainIngredient: "豚肉",
        tags: ["豚肉", "ピーマン", "中華"], time: 30, difficulty: "普通", servings: 2, image: "🥘",
        ingredients: [{ name: "豚こま切れ肉", amount: "200g" }, { name: "玉ねぎ", amount: "1/2個" }, { name: "にんじん", amount: "1/3本" }, { name: "ピーマン", amount: "2個" }, { name: "酢", amount: "大さじ3" }, { name: "砂糖", amount: "大さじ2" }, { name: "醤油", amount: "大さじ1.5" }, { name: "ケチャップ", amount: "大さじ2" }, { name: "片栗粉", amount: "大さじ2" }, { name: "サラダ油", amount: "適量" }],
        steps: ["豚肉に片栗粉をまぶし丸めて、170℃で揚げ焼きにする", "野菜を乱切りにし、さっと炒める", "酢・砂糖・醤油・ケチャップ・水を混ぜた甘酢ソースを作る", "肉と野菜を合わせ、甘酢ソースを加えてとろみがつくまで絡める"],
        youtubeQuery: "酢豚 リュウジ"
    },
    {
        id: "mabo_nasu", name: "麻婆なす", category: "主菜", mainIngredient: "なす",
        tags: ["なす", "ひき肉", "中華"], time: 20, difficulty: "普通", servings: 2, image: "🍆",
        ingredients: [{ name: "なす", amount: "3本" }, { name: "豚ひき肉", amount: "100g" }, { name: "長ねぎ", amount: "1/3本" }, { name: "にんにく", amount: "1かけ" }, { name: "生姜", amount: "1かけ" }, { name: "豆板醤", amount: "小さじ1" }, { name: "甜面醤", amount: "大さじ1" }, { name: "醤油", amount: "大さじ1" }, { name: "鶏がらスープ", amount: "100ml" }, { name: "片栗粉", amount: "小さじ2" }, { name: "ごま油", amount: "大さじ2" }],
        steps: ["なすを乱切りにし、多めの油で素揚げして取り出す", "フライパンにごま油を熱し、にんにく・生姜・豆板醤を炒める", "ひき肉を加えてポロポロに炒める", "甜面醤・醤油・スープを加え、なすを戻す", "水溶き片栗粉でとろみをつけ、ねぎを散らす"],
        youtubeQuery: "麻婆なす リュウジ"
    },
    {
        id: "salmon_cream_gratin", name: "鮭とほうれん草のグラタン", category: "主菜", mainIngredient: "鮭",
        tags: ["鮭", "ほうれん草", "牛乳", "チーズ"], time: 35, difficulty: "普通", servings: 2, image: "🧀",
        ingredients: [{ name: "鮭の切り身", amount: "1切れ" }, { name: "ほうれん草", amount: "1/2束" }, { name: "玉ねぎ", amount: "1/2個" }, { name: "バター", amount: "20g" }, { name: "小麦粉", amount: "大さじ2" }, { name: "牛乳", amount: "300ml" }, { name: "コンソメ", amount: "小さじ1" }, { name: "塩こしょう", amount: "少々" }, { name: "とろけるチーズ", amount: "適量" }],
        steps: ["鮭を一口大に切り塩こしょうしてソテーする。ほうれん草を茹でて切る", "フライパンにバターで薄切り玉ねぎを炒め、小麦粉を振り入れる", "牛乳を少しずつ加えてホワイトソースを作り、コンソメで味付け", "耐熱皿に鮭・ほうれん草・ソースを入れチーズをのせる", "200℃のオーブンで15分焼く"],
        youtubeQuery: "鮭 グラタン クラシル"
    },
    {
        id: "tamago_don", name: "たまご丼", category: "ご飯もの", mainIngredient: "卵",
        tags: ["卵", "丼", "玉ねぎ"], time: 10, difficulty: "簡単", servings: 1, image: "🍚",
        ingredients: [{ name: "卵", amount: "2個" }, { name: "玉ねぎ", amount: "1/4個" }, { name: "だし汁", amount: "80ml" }, { name: "醤油", amount: "大さじ1" }, { name: "みりん", amount: "大さじ1" }, { name: "砂糖", amount: "小さじ1" }, { name: "ご飯", amount: "1杯分" }, { name: "三つ葉", amount: "少々" }],
        steps: ["玉ねぎを薄切りにする", "小さめのフライパンにだし汁・醤油・みりん・砂糖を煮立てる", "玉ねぎを加えてしんなりさせる", "溶き卵を2回に分けて流し入れ、半熟で火を止める", "ご飯にのせて三つ葉を添える"],
        youtubeQuery: "たまご丼 簡単 ふわとろ"
    },
    {
        id: "wafu_hamburg", name: "和風おろしハンバーグ", category: "主菜", mainIngredient: "ひき肉",
        tags: ["ひき肉", "大根", "和食"], time: 35, difficulty: "普通", servings: 2, image: "🍔",
        ingredients: [{ name: "合いびき肉", amount: "300g" }, { name: "玉ねぎ", amount: "1/2個" }, { name: "パン粉", amount: "大さじ3" }, { name: "牛乳", amount: "大さじ2" }, { name: "卵", amount: "1個" }, { name: "塩こしょう", amount: "少々" }, { name: "大根おろし", amount: "適量" }, { name: "ポン酢", amount: "大さじ3" }, { name: "大葉", amount: "3枚" }],
        steps: ["通常のハンバーグと同様にタネを作り焼く", "大根をすりおろして水気を軽く切る", "焼き上がったハンバーグに大根おろしをのせる", "ポン酢をかけ、大葉を添える"],
        youtubeQuery: "和風ハンバーグ おろし リュウジ"
    },
    {
        id: "nikomi_udon", name: "煮込みうどん", category: "ご飯もの", mainIngredient: "鶏肉",
        tags: ["鶏肉", "うどん", "麺", "白菜"], time: 25, difficulty: "簡単", servings: 2, image: "🍜",
        ingredients: [{ name: "うどん", amount: "2玉" }, { name: "鶏もも肉", amount: "100g" }, { name: "白菜", amount: "2枚" }, { name: "にんじん", amount: "1/3本" }, { name: "長ねぎ", amount: "1/2本" }, { name: "だし汁", amount: "700ml" }, { name: "醤油", amount: "大さじ2" }, { name: "みりん", amount: "大さじ1" }, { name: "卵", amount: "2個" }],
        steps: ["鶏肉を一口大に切り、野菜を食べやすく切る", "鍋にだし汁を沸かし、鶏肉と野菜を加えて煮る", "醤油・みりんで味付けし、うどんを加えて5分煮込む", "卵を割り入れ、蓋をして好みの硬さに火を通す"],
        youtubeQuery: "煮込みうどん 簡単"
    },
    {
        id: "tori_chashu", name: "鶏チャーシュー", category: "主菜", mainIngredient: "鶏肉",
        tags: ["鶏肉", "醤油"], time: 30, difficulty: "簡単", servings: 3, image: "🍗",
        ingredients: [{ name: "鶏もも肉", amount: "2枚" }, { name: "醤油", amount: "大さじ3" }, { name: "みりん", amount: "大さじ3" }, { name: "酒", amount: "大さじ2" }, { name: "砂糖", amount: "大さじ1" }, { name: "にんにく", amount: "1かけ" }, { name: "生姜", amount: "1かけ" }],
        steps: ["鶏肉を巻いてタコ糸で縛る", "フライパンで表面を焼き付ける", "醤油・みりん・酒・砂糖・にんにく・生姜を加え蓋をして弱火で20分煮る", "途中で裏返してまんべんなく味をしみ込ませる", "冷めてから切り分ける"],
        youtubeQuery: "鶏チャーシュー リュウジ"
    },
    {
        id: "buta_kimchi", name: "豚キムチ", category: "主菜", mainIngredient: "豚肉",
        tags: ["豚肉", "キムチ"], time: 10, difficulty: "簡単", servings: 2, image: "🥩",
        ingredients: [{ name: "豚バラ薄切り", amount: "200g" }, { name: "キムチ", amount: "150g" }, { name: "にら", amount: "1/2束" }, { name: "ごま油", amount: "大さじ1" }, { name: "醤油", amount: "小さじ1" }, { name: "砂糖", amount: "小さじ1/2" }],
        steps: ["豚肉を食べやすい大きさに切り、にらを3cm幅に切る", "フライパンにごま油を熱し豚肉を炒める", "キムチを加えてさっと炒める", "にらを加え醤油と砂糖で味を整える"],
        youtubeQuery: "豚キムチ リュウジ"
    },
    {
        id: "chinjarosu", name: "青椒肉絲", category: "主菜", mainIngredient: "豚肉",
        tags: ["豚肉", "ピーマン", "中華"], time: 15, difficulty: "普通", servings: 2, image: "🫑",
        ingredients: [{ name: "豚もも薄切り", amount: "200g" }, { name: "ピーマン", amount: "4個" }, { name: "たけのこ水煮", amount: "100g" }, { name: "醤油", amount: "大さじ1" }, { name: "オイスターソース", amount: "大さじ1" }, { name: "酒", amount: "大さじ1" }, { name: "片栗粉", amount: "小さじ1" }, { name: "ごま油", amount: "大さじ1" }],
        steps: ["豚肉・ピーマン・たけのこを細切りにする", "豚肉に酒と片栗粉で下味をつける", "フライパンにごま油を熱し豚肉を炒める", "野菜を加えて強火でさっと炒める", "醤油とオイスターソースで味付けする"],
        youtubeQuery: "青椒肉絲 リュウジ"
    },
    {
        id: "nikumiso", name: "肉味噌", category: "副菜", mainIngredient: "ひき肉",
        tags: ["ひき肉", "味噌"], time: 10, difficulty: "簡単", servings: 4, image: "🥩",
        ingredients: [{ name: "豚ひき肉", amount: "200g" }, { name: "味噌", amount: "大さじ2" }, { name: "みりん", amount: "大さじ1" }, { name: "砂糖", amount: "大さじ1" }, { name: "醤油", amount: "小さじ1" }, { name: "生姜", amount: "1かけ" }, { name: "ごま油", amount: "大さじ1" }],
        steps: ["フライパンにごま油を熱し、すりおろし生姜とひき肉を炒める", "ポロポロになったら味噌・みりん・砂糖・醤油を加える", "汁気が飛ぶまで炒め煮する", "ご飯・豆腐・野菜スティックなどに添える"],
        youtubeQuery: "肉味噌 リュウジ"
    },
    {
        id: "shio_nikujaga", name: "塩肉じゃが", category: "主菜", mainIngredient: "じゃがいも",
        tags: ["じゃがいも", "豚肉", "にんにく"], time: 30, difficulty: "簡単", servings: 2, image: "🥔",
        ingredients: [{ name: "豚バラ薄切り", amount: "150g" }, { name: "じゃがいも", amount: "3個" }, { name: "玉ねぎ", amount: "1個" }, { name: "にんにく", amount: "1かけ" }, { name: "鶏がらスープの素", amount: "小さじ2" }, { name: "塩", amount: "小さじ1/2" }, { name: "ごま油", amount: "大さじ1" }, { name: "水", amount: "300ml" }, { name: "黒こしょう", amount: "適量" }],
        steps: ["じゃがいもを4等分、玉ねぎをくし切りにする", "鍋にごま油とにんにくを熱し、豚肉を炒める", "野菜を加え水と鶏がらスープの素で煮る", "じゃがいもが柔らかくなったら塩と黒こしょうで調味する"],
        youtubeQuery: "塩肉じゃが リュウジ"
    },
    {
        id: "kabu_asazuke", name: "カブの浅漬け", category: "副菜", mainIngredient: "かぶ",
        tags: ["かぶ", "和食"], time: 10, difficulty: "簡単", servings: 2, image: "🥬",
        ingredients: [{ name: "かぶ", amount: "2個" }, { name: "かぶの葉", amount: "適量" }, { name: "塩", amount: "小さじ1" }, { name: "昆布", amount: "5cm" }, { name: "酢", amount: "小さじ1" }, { name: "唐辛子", amount: "少々" }],
        steps: ["かぶを薄いくし切りにし、葉は3cmに切る", "塩を振ってもみ、昆布と唐辛子を加える", "ポリ袋に入れて空気を抜き、冷蔵庫で30分以上置く", "水気を絞って酢をかけて盛り付ける"],
        youtubeQuery: "カブの浅漬け 簡単"
    },
    {
        id: "moyashi_namul", name: "もやしナムル", category: "副菜", mainIngredient: "もやし",
        tags: ["もやし", "ごま油"], time: 5, difficulty: "簡単", servings: 2, image: "🥬",
        ingredients: [{ name: "もやし", amount: "1袋" }, { name: "ごま油", amount: "大さじ1" }, { name: "鶏がらスープの素", amount: "小さじ1/2" }, { name: "塩", amount: "少々" }, { name: "にんにく", amount: "少々" }, { name: "白ごま", amount: "適量" }],
        steps: ["もやしを沸騰した湯で1分茹で、ざるにあげる", "熱いうちにごま油・鶏がらスープの素・塩・すりおろしにんにくで和える", "白ごまを振る"],
        youtubeQuery: "もやしナムル 簡単"
    },
    {
        id: "chikuwa_isobe", name: "ちくわの磯辺揚げ", category: "副菜", mainIngredient: "ちくわ",
        tags: ["ちくわ", "揚げ物"], time: 10, difficulty: "簡単", servings: 2, image: "🧈",
        ingredients: [{ name: "ちくわ", amount: "4本" }, { name: "天ぷら粉", amount: "大さじ3" }, { name: "水", amount: "大さじ2" }, { name: "青のり", amount: "大さじ1" }, { name: "揚げ油", amount: "適量" }],
        steps: ["ちくわを斜め半分に切る", "天ぷら粉・水・青のりを混ぜて衣を作る", "ちくわに衣をつけて170℃で2〜3分揚げる"],
        youtubeQuery: "ちくわ磯辺揚げ 簡単"
    },
    {
        id: "tori_soboro_renkon", name: "鶏そぼろれんこん", category: "副菜", mainIngredient: "鶏肉",
        tags: ["鶏肉", "ひき肉", "和食"], time: 15, difficulty: "簡単", servings: 2, image: "🥘",
        ingredients: [{ name: "鶏ひき肉", amount: "150g" }, { name: "れんこん", amount: "1節" }, { name: "醤油", amount: "大さじ1.5" }, { name: "みりん", amount: "大さじ1" }, { name: "砂糖", amount: "小さじ1" }, { name: "ごま油", amount: "大さじ1" }],
        steps: ["れんこんを粗みじん切りにする", "フライパンにごま油を熱し鶏ひき肉を炒める", "れんこんを加えてさっと炒める", "醤油・みりん・砂糖を加え汁気がなくなるまで炒め煮する"],
        youtubeQuery: "鶏そぼろれんこん クラシル"
    },
    {
        id: "mille_feuille_nabe", name: "豚と白菜のミルフィーユ鍋", category: "主菜", mainIngredient: "豚肉",
        tags: ["豚肉", "白菜"], time: 25, difficulty: "簡単", servings: 2, image: "🍲",
        ingredients: [{ name: "豚バラ薄切り", amount: "200g" }, { name: "白菜", amount: "1/4個" }, { name: "だし汁", amount: "300ml" }, { name: "酒", amount: "大さじ2" }, { name: "塩", amount: "小さじ1/2" }, { name: "ポン酢", amount: "適量" }],
        steps: ["白菜と豚肉を交互に重ね、5cm幅に切る", "鍋に断面が見えるように敷き詰める", "だし汁と酒を注ぎ蓋をして中火で15分煮る", "ポン酢をつけて食べる"],
        youtubeQuery: "ミルフィーユ鍋 クラシル"
    },
    {
        id: "tori_mayo", name: "鶏マヨ", category: "主菜", mainIngredient: "鶏肉",
        tags: ["鶏肉", "マヨネーズ", "中華"], time: 15, difficulty: "簡単", servings: 2, image: "🍗",
        ingredients: [{ name: "鶏むね肉", amount: "1枚(300g)" }, { name: "片栗粉", amount: "適量" }, { name: "マヨネーズ", amount: "大さじ3" }, { name: "ケチャップ", amount: "大さじ1" }, { name: "砂糖", amount: "小さじ1" }, { name: "レモン汁", amount: "小さじ1" }, { name: "サラダ油", amount: "大さじ2" }],
        steps: ["鶏むね肉をそぎ切りにし、片栗粉をまぶす", "フライパンに油を熱しカリッと焼く", "マヨネーズ・ケチャップ・砂糖・レモン汁を混ぜたソースで和える"],
        youtubeQuery: "鶏マヨ リュウジ"
    },
    {
        id: "tebasaki_sappari", name: "手羽元のさっぱり煮", category: "主菜", mainIngredient: "鶏肉",
        tags: ["鶏肉", "酢", "和食"], time: 35, difficulty: "簡単", servings: 3, image: "🍗",
        ingredients: [{ name: "手羽元", amount: "8本" }, { name: "酢", amount: "100ml" }, { name: "醤油", amount: "大さじ3" }, { name: "砂糖", amount: "大さじ3" }, { name: "水", amount: "100ml" }, { name: "にんにく", amount: "1かけ" }, { name: "生姜", amount: "1かけ" }, { name: "ゆで卵", amount: "2個" }],
        steps: ["鍋に全ての調味料と水を入れて煮立てる", "手羽元を加え、落し蓋をして中弱火で25分煮る", "ゆで卵を加え、さらに5分煮る", "汁気が半分になるまで煮詰める"],
        youtubeQuery: "手羽元 さっぱり煮"
    },
    {
        id: "nasu_nibitashi", name: "なすの煮浸し", category: "副菜", mainIngredient: "なす",
        tags: ["なす", "和食"], time: 15, difficulty: "簡単", servings: 2, image: "🍆",
        ingredients: [{ name: "なす", amount: "3本" }, { name: "だし汁", amount: "200ml" }, { name: "醤油", amount: "大さじ1.5" }, { name: "みりん", amount: "大さじ1" }, { name: "砂糖", amount: "小さじ1" }, { name: "サラダ油", amount: "大さじ3" }, { name: "生姜", amount: "少々" }, { name: "大葉", amount: "2枚" }],
        steps: ["なすに切り込みを入れ、油で揚げ焼きにする", "だし汁・醤油・みりん・砂糖・おろし生姜を合わせた浸し汁を作る", "熱いなすを浸し汁に漬ける", "冷蔵庫で冷やしても美味しい。大葉を添える"],
        youtubeQuery: "なすの煮浸し リュウジ"
    },
    {
        id: "butakoma_amazu", name: "豚こまボールの甘酢あん", category: "主菜", mainIngredient: "豚肉",
        tags: ["豚肉", "酢"], time: 20, difficulty: "普通", servings: 2, image: "🥩",
        ingredients: [{ name: "豚こま切れ肉", amount: "250g" }, { name: "塩こしょう", amount: "少々" }, { name: "片栗粉", amount: "大さじ2" }, { name: "酢", amount: "大さじ2" }, { name: "醤油", amount: "大さじ1.5" }, { name: "砂糖", amount: "大さじ2" }, { name: "ケチャップ", amount: "大さじ1" }, { name: "水", amount: "50ml" }, { name: "揚げ油", amount: "適量" }],
        steps: ["豚肉に塩こしょうと片栗粉をまぶし、丸めてボール状にする", "170℃の油で4〜5分揚げる", "鍋に酢・醤油・砂糖・ケチャップ・水を煮立てる", "揚げた肉団子を加えて絡める"],
        youtubeQuery: "豚こまボール 甘酢"
    },
    {
        id: "cheese_dakkalbi", name: "チーズタッカルビ", category: "主菜", mainIngredient: "鶏肉",
        tags: ["鶏肉", "キャベツ", "チーズ"], time: 25, difficulty: "普通", servings: 2, image: "🧀",
        ingredients: [{ name: "鶏もも肉", amount: "300g" }, { name: "キャベツ", amount: "1/4個" }, { name: "玉ねぎ", amount: "1/2個" }, { name: "さつまいも", amount: "1/2本" }, { name: "コチュジャン", amount: "大さじ2" }, { name: "醤油", amount: "大さじ1" }, { name: "みりん", amount: "大さじ1" }, { name: "にんにく", amount: "1かけ" }, { name: "とろけるチーズ", amount: "150g" }, { name: "ごま油", amount: "大さじ1" }],
        steps: ["鶏肉を一口大に切り、コチュジャン・醤油・みりん・にんにくで15分漬ける", "フライパンにごま油を熱し、鶏肉と野菜を炒める", "蓋をして10分蒸し焼きにする", "中央にチーズをのせて蓋をし、溶けたら完成"],
        youtubeQuery: "チーズタッカルビ リュウジ"
    },
    {
        id: "hakusai_kasane", name: "白菜と豚肉の重ね蒸し", category: "主菜", mainIngredient: "白菜",
        tags: ["白菜", "豚肉"], time: 20, difficulty: "簡単", servings: 2, image: "🥬",
        ingredients: [{ name: "白菜", amount: "1/4個" }, { name: "豚バラ薄切り", amount: "200g" }, { name: "酒", amount: "大さじ2" }, { name: "塩こしょう", amount: "少々" }, { name: "ポン酢", amount: "適量" }, { name: "ねぎ", amount: "少々" }],
        steps: ["白菜の葉の間に豚肉を挟みながら重ねる", "5cm幅に切り、鍋に断面を上にして敷き詰める", "酒と塩こしょうを振り、蓋をして弱火で15分蒸す", "ポン酢とねぎを添える"],
        youtubeQuery: "白菜 豚肉 重ね蒸し"
    },
    {
        id: "renkon_kinpira", name: "れんこんのきんぴら", category: "副菜", mainIngredient: "れんこん",
        tags: ["和食"], time: 10, difficulty: "簡単", servings: 2, image: "🥕",
        ingredients: [{ name: "れんこん", amount: "1節(200g)" }, { name: "醤油", amount: "大さじ1" }, { name: "みりん", amount: "大さじ1" }, { name: "砂糖", amount: "小さじ1" }, { name: "ごま油", amount: "大さじ1" }, { name: "唐辛子", amount: "少々" }, { name: "白ごま", amount: "適量" }],
        steps: ["れんこんを薄切りにし、酢水にさらす", "フライパンにごま油と唐辛子を熱する", "れんこんを加えて中火で炒める", "醤油・みりん・砂糖を加え汁気がなくなるまで炒める", "白ごまを振る"],
        youtubeQuery: "れんこんきんぴら 簡単"
    },
    {
        id: "tomyo_tamago", name: "豆苗の卵炒め", category: "副菜", mainIngredient: "卵",
        tags: ["卵", "豆苗"], time: 5, difficulty: "簡単", servings: 2, image: "🥬",
        ingredients: [{ name: "豆苗", amount: "1パック" }, { name: "卵", amount: "2個" }, { name: "鶏がらスープの素", amount: "小さじ1/2" }, { name: "塩こしょう", amount: "少々" }, { name: "ごま油", amount: "大さじ1" }],
        steps: ["豆苗を根元から切り半分の長さに切る", "卵を溶いて鶏がらスープの素と塩こしょうを混ぜる", "フライパンにごま油を熱し卵を半熟に炒めて取り出す", "同じフライパンで豆苗をさっと炒め、卵を戻して合わせる"],
        youtubeQuery: "豆苗 卵炒め 簡単"
    },
    {
        id: "konnyaku_pirikara", name: "こんにゃくのピリ辛炒め", category: "副菜", mainIngredient: "こんにゃく",
        tags: ["こんにゃく", "和食"], time: 10, difficulty: "簡単", servings: 2, image: "🥘",
        ingredients: [{ name: "こんにゃく", amount: "1枚" }, { name: "醤油", amount: "大さじ1.5" }, { name: "みりん", amount: "大さじ1" }, { name: "砂糖", amount: "小さじ1" }, { name: "唐辛子", amount: "1本" }, { name: "ごま油", amount: "大さじ1" }, { name: "かつお節", amount: "適量" }],
        steps: ["こんにゃくをスプーンで一口大にちぎり下茹でする", "フライパンにごま油を熱し水気を切ったこんにゃくを炒める", "パチパチ音がしたら醤油・みりん・砂糖・唐辛子を加える", "汁気がなくなるまで炒め、かつお節を振る"],
        youtubeQuery: "こんにゃく ピリ辛 簡単"
    },
    {
        id: "komatuna_tuna", name: "小松菜とツナの炒め物", category: "副菜", mainIngredient: "小松菜",
        tags: ["小松菜", "ツナ"], time: 8, difficulty: "簡単", servings: 2, image: "🥬",
        ingredients: [{ name: "小松菜", amount: "1束" }, { name: "ツナ缶", amount: "1缶" }, { name: "醤油", amount: "大さじ1" }, { name: "みりん", amount: "小さじ1" }, { name: "ごま油", amount: "大さじ1" }, { name: "白ごま", amount: "適量" }],
        steps: ["小松菜を3cm長さに切る", "フライパンにごま油を熱し小松菜の茎を炒める", "葉とツナ(油ごと)を加えてさっと炒める", "醤油とみりんで味付けし白ごまを振る"],
        youtubeQuery: "小松菜 ツナ 炒め"
    },
    {
        id: "enoki_bacon", name: "えのきベーコン巻き", category: "副菜", mainIngredient: "きのこ",
        tags: ["えのき", "きのこ"], time: 10, difficulty: "簡単", servings: 2, image: "🥓",
        ingredients: [{ name: "えのき", amount: "1袋" }, { name: "ベーコン", amount: "4枚" }, { name: "醤油", amount: "小さじ1" }, { name: "黒こしょう", amount: "適量" }, { name: "サラダ油", amount: "少々" }],
        steps: ["えのきを4等分に分け、ベーコンで巻いて爪楊枝で留める", "フライパンにサラダ油を熱し巻き終わりを下にして焼く", "転がしながら全体に焼き色をつける", "醤油を回しかけ黒こしょうを振る"],
        youtubeQuery: "えのきベーコン巻き 簡単"
    },
    {
        id: "sasami_umeshiso", name: "ささみの梅しそ焼き", category: "主菜", mainIngredient: "鶏肉",
        tags: ["鶏肉", "梅", "大葉"], time: 15, difficulty: "簡単", servings: 2, image: "🍗",
        ingredients: [{ name: "鶏ささみ", amount: "4本" }, { name: "梅干し", amount: "2個" }, { name: "大葉", amount: "4枚" }, { name: "酒", amount: "大さじ1" }, { name: "塩こしょう", amount: "少々" }, { name: "サラダ油", amount: "大さじ1" }],
        steps: ["ささみの筋を取り、観音開きにする", "叩いた梅と大葉をのせて巻く", "塩こしょうを振り、フライパンで焼く", "酒を振って蓋をし蒸し焼き5分"],
        youtubeQuery: "ささみ 梅しそ クラシル"
    },
    {
        id: "sunagimo_garlic", name: "砂肝のガーリック炒め", category: "主菜", mainIngredient: "鶏肉",
        tags: ["鶏肉", "にんにく"], time: 15, difficulty: "普通", servings: 2, image: "🍗",
        ingredients: [{ name: "砂肝", amount: "200g" }, { name: "にんにく", amount: "2かけ" }, { name: "長ねぎ", amount: "1/2本" }, { name: "塩", amount: "小さじ1/2" }, { name: "黒こしょう", amount: "適量" }, { name: "ごま油", amount: "大さじ1" }, { name: "レモン汁", amount: "少々" }],
        steps: ["砂肝の白い部分を取り除き、薄切りにする", "フライパンにごま油とスライスにんにくを弱火で加熱", "砂肝を加え中火で炒める", "斜め切りのねぎを加え、塩・黒こしょう・レモン汁で味付け"],
        youtubeQuery: "砂肝 ガーリック炒め"
    },
    {
        id: "nagaimo_butter", name: "長芋のバター醤油焼き", category: "副菜", mainIngredient: "長芋",
        tags: ["長芋", "バター"], time: 10, difficulty: "簡単", servings: 2, image: "🧈",
        ingredients: [{ name: "長芋", amount: "15cm" }, { name: "バター", amount: "15g" }, { name: "醤油", amount: "大さじ1" }, { name: "青のり", amount: "少々" }],
        steps: ["長芋を1cm厚の輪切りにする", "フライパンにバターを溶かし長芋を並べる", "両面にこんがり焼き色をつける", "醤油を回しかけ青のりを振る"],
        youtubeQuery: "長芋 バター醤油 簡単"
    },
    {
        id: "moyashi_chanpuru", name: "もやしチャンプルー", category: "主菜", mainIngredient: "もやし",
        tags: ["もやし", "卵", "豚肉"], time: 10, difficulty: "簡単", servings: 2, image: "🥬",
        ingredients: [{ name: "もやし", amount: "1袋" }, { name: "豚こま切れ肉", amount: "100g" }, { name: "卵", amount: "2個" }, { name: "にら", amount: "1/3束" }, { name: "かつお節", amount: "適量" }, { name: "醤油", amount: "大さじ1" }, { name: "塩こしょう", amount: "少々" }, { name: "ごま油", amount: "大さじ1" }],
        steps: ["フライパンにごま油を熱し豚肉を炒める", "もやしとにらを加えて強火でさっと炒める", "醤油と塩こしょうで味付けし、溶き卵を回しかける", "かつお節を振る"],
        youtubeQuery: "もやしチャンプルー 簡単"
    },
    {
        id: "buta_ponzu_mushi", name: "豚肉ともやしのポン酢蒸し", category: "主菜", mainIngredient: "豚肉",
        tags: ["豚肉", "もやし"], time: 10, difficulty: "簡単", servings: 2, image: "🥩",
        ingredients: [{ name: "豚バラ薄切り", amount: "200g" }, { name: "もやし", amount: "1袋" }, { name: "酒", amount: "大さじ2" }, { name: "塩こしょう", amount: "少々" }, { name: "ポン酢", amount: "適量" }, { name: "ねぎ", amount: "少々" }],
        steps: ["耐熱皿にもやしを敷き、豚肉を広げてのせる", "塩こしょうと酒を振る", "ラップをしてレンジ600Wで6分加熱", "ポン酢とねぎをかける"],
        youtubeQuery: "豚肉 もやし レンジ 簡単"
    },
    {
        id: "kinoko_hoil", name: "きのこのホイル焼き", category: "副菜", mainIngredient: "きのこ",
        tags: ["きのこ", "バター"], time: 15, difficulty: "簡単", servings: 2, image: "🍄",
        ingredients: [{ name: "しめじ", amount: "1パック" }, { name: "エリンギ", amount: "1パック" }, { name: "まいたけ", amount: "1パック" }, { name: "バター", amount: "15g" }, { name: "醤油", amount: "大さじ1" }, { name: "レモン汁", amount: "少々" }, { name: "パセリ", amount: "少々" }],
        steps: ["きのこをほぐして食べやすくする", "アルミホイルにきのこを並べバターをのせる", "ホイルを包んでトースターで10分焼く", "醤油とレモン汁をかけ、パセリを散らす"],
        youtubeQuery: "きのこ ホイル焼き 簡単"
    },
    {
        id: "niku_dofu_itame", name: "豚肉と厚揚げのオイスター炒め", category: "主菜", mainIngredient: "豚肉",
        tags: ["豚肉", "豆腐"], time: 15, difficulty: "簡単", servings: 2, image: "🥩",
        ingredients: [{ name: "豚こま切れ肉", amount: "150g" }, { name: "厚揚げ", amount: "1枚" }, { name: "ピーマン", amount: "2個" }, { name: "オイスターソース", amount: "大さじ1" }, { name: "醤油", amount: "大さじ1/2" }, { name: "酒", amount: "大さじ1" }, { name: "ごま油", amount: "大さじ1" }],
        steps: ["厚揚げを一口大に切り、ピーマンを乱切りにする", "フライパンにごま油を熱し豚肉を炒める", "厚揚げとピーマンを加えて炒める", "オイスターソース・醤油・酒で味付けする"],
        youtubeQuery: "豚肉 厚揚げ 炒め"
    },
    {
        id: "tori_teriyaki_tsukune", name: "鶏つくね", category: "主菜", mainIngredient: "鶏肉",
        tags: ["鶏肉", "ひき肉"], time: 20, difficulty: "普通", servings: 2, image: "🍗",
        ingredients: [{ name: "鶏ひき肉", amount: "250g" }, { name: "長ねぎ", amount: "1/3本" }, { name: "卵黄", amount: "1個" }, { name: "片栗粉", amount: "大さじ1" }, { name: "塩", amount: "少々" }, { name: "醤油", amount: "大さじ2" }, { name: "みりん", amount: "大さじ2" }, { name: "砂糖", amount: "大さじ1" }, { name: "サラダ油", amount: "少々" }],
        steps: ["ひき肉にみじん切りねぎ・片栗粉・塩を加えて練り混ぜる", "小判型に成形する", "フライパンに油を熱し両面焼く", "醤油・みりん・砂糖を加えて照り焼きに仕上げる", "卵黄をつけて食べる"],
        youtubeQuery: "鶏つくね 照り焼き リュウジ"
    },
    {
        id: "daikon_steak", name: "大根ステーキ", category: "副菜", mainIngredient: "大根",
        tags: ["大根", "バター", "和食"], time: 25, difficulty: "簡単", servings: 2, image: "🥣",
        ingredients: [{ name: "大根", amount: "1/3本" }, { name: "バター", amount: "15g" }, { name: "醤油", amount: "大さじ1.5" }, { name: "みりん", amount: "大さじ1" }, { name: "かつお節", amount: "適量" }, { name: "ねぎ", amount: "少々" }],
        steps: ["大根を2cm厚の輪切りにし、両面に格子状の切り込みを入れる", "耐熱皿に並べラップをしてレンジ600Wで5分加熱する", "フライパンにバターを溶かし両面をこんがり焼く", "醤油とみりんを加えて絡める", "かつお節とねぎをのせる"],
        youtubeQuery: "大根ステーキ リュウジ"
    },
    {
        id: "kimpira_ninjin", name: "にんじんしりしり", category: "副菜", mainIngredient: "にんじん",
        tags: ["にんじん", "卵"], time: 10, difficulty: "簡単", servings: 2, image: "🥕",
        ingredients: [{ name: "にんじん", amount: "1本" }, { name: "卵", amount: "1個" }, { name: "ツナ缶", amount: "1/2缶" }, { name: "醤油", amount: "小さじ1" }, { name: "みりん", amount: "小さじ1" }, { name: "ごま油", amount: "大さじ1" }, { name: "白ごま", amount: "適量" }],
        steps: ["にんじんを細い千切りにする", "フライパンにごま油を熱しにんじんを炒める", "しんなりしたらツナと調味料を加える", "溶き卵を回しかけさっと炒め合わせる", "白ごまを振る"],
        youtubeQuery: "にんじんしりしり 簡単"
    }
];

const INGREDIENT_CATEGORIES = {
    "肉類": ["鶏肉", "豚肉", "牛肉", "ひき肉"],
    "魚介類": ["鮭", "鯖", "ぶり", "海老", "ツナ", "アジ"],
    "野菜": ["じゃがいも", "キャベツ", "ほうれん草", "なす", "大根", "にんじん", "ごぼう", "きゅうり", "ゴーヤ", "アスパラガス", "もやし", "とうもろこし", "ピーマン", "玉ねぎ", "長ねぎ", "白菜", "ブロッコリー", "トマト", "かぼちゃ", "さつまいも", "小松菜", "れんこん", "長芋"],
    "その他": ["豆腐", "卵", "ひじき", "きのこ", "こんにゃく", "ちくわ", "かぶ"]
};

