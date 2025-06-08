self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("listening-room-cache-v1").then((cache) => {
      return cache.addAll([
        "listening-room.html",
        "style.css",
        "script.js",
        "manifest.json",
        "background1.jpg",
        "background2.jpg",
        "background3.jpg",
        "whispered-promise.mp3",
        "whispered-promise-vo.mp3",
        "unspoken-storm.mp3",
        "unspoken-storm-vo.mp3",
        "always-somehow.mp3",
        "always-somehow-vo.mp3",
        "Jerailian_House_Transparent.png",
        "icon-192.png",
        "icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
