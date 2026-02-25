// --------------------------------------------------
// Service Worker – キャッシュファースト戦略
// オフラインでもアプリを表示できるようにする
// --------------------------------------------------

const CACHE_NAME = 'recipe-app-v3';

// キャッシュ対象のファイル一覧
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './css/style.css',
    './js/app.js',
    './js/recipes.js',
    './js/youtube.js',
    './manifest.json',
    // ※ アイコン画像を追加したら、ここにもパスを追加してください
    // './images/icon-192.png',
    // './images/icon-512.png',
];

// -----------------------------------------------
// install: 初回インストール時にアセットをキャッシュ
// -----------------------------------------------
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    // 待機中の古い SW を即座に置き換える
    self.skipWaiting();
});

// -----------------------------------------------
// activate: 古いキャッシュを削除
// -----------------------------------------------
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
    // ページを即座に制御する
    self.clients.claim();
});

// -----------------------------------------------
// fetch: キャッシュ優先、なければネットワーク
// -----------------------------------------------
self.addEventListener('fetch', (event) => {
    // Google Fonts 等の外部リソースはネットワーク優先
    if (!event.request.url.startsWith(self.location.origin)) {
        event.respondWith(
            fetch(event.request).catch(() => caches.match(event.request))
        );
        return;
    }

    // ローカルリソースはキャッシュ優先
    event.respondWith(
        caches.match(event.request).then((cached) => {
            return cached || fetch(event.request).then((response) => {
                // レスポンスをキャッシュに追加
                const copy = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
                return response;
            });
        })
    );
});
