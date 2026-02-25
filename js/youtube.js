const YOUTUBE_CHANNELS = [
    { name: "リュウジのバズレシピ", query: "リュウジ", icon: "🔥" },
    { name: "クラシル", query: "クラシル", icon: "🍳" },
    { name: "DELISH KITCHEN", query: "デリッシュキッチン", icon: "🥘" },
];

function buildYoutubeSearchUrl(recipeName, channelQuery) {
    const q = encodeURIComponent(recipeName + " " + (channelQuery || "レシピ"));
    return "https://www.youtube.com/results?search_query=" + q;
}

function buildYoutubeLinks(recipe) {
    const links = [];
    // メインのクエリ（レシピに設定されたもの）
    links.push({
        label: "🔍 「" + recipe.youtubeQuery + "」で検索",
        url: buildYoutubeSearchUrl(recipe.youtubeQuery, ""),
        primary: true
    });
    // チャンネル別
    YOUTUBE_CHANNELS.forEach(ch => {
        links.push({
            label: ch.icon + " " + ch.name,
            url: buildYoutubeSearchUrl(recipe.name, ch.query),
            primary: false
        });
    });
    return links;
}
