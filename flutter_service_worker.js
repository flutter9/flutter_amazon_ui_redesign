'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "50217e178b333fd0a7bab0a7f7b484b3",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/crushingit.jpg": "554fec42580e03ef2b1019a3d4f4a9cd",
"/assets/assets/images/thirddoor.jpg": "2466f9579c3260ec4e1582d62484180f",
"/assets/assets/images/mxmaster.jpg": "0c9778bd0ce84e27e5b2fc2bdd6a6864",
"/assets/assets/images/blueyeti.jpg": "55b1bbcc3c325fb184a7c2275484d89f",
"/assets/assets/images/samsung_gear_vr.jpg": "a76fcc1824b8a2eadd39bba4a0427ff9",
"/assets/assets/images/unfu*kyourself.jpg": "b91f847a962f43448e624157db22b251",
"/assets/assets/images/keyboard.jpg": "b2b500fbcfcb2c68b71d4f07fdc43f59",
"/assets/assets/images/gear_vr.jpg": "26f774eb0e279cd86efd9f1abca5e8e7",
"/assets/assets/images/powerofhabit.jpg": "4c22a35893ef611e1b00675f4a2b6f43",
"/assets/assets/images/jbl.jpg": "2145ff6058d114e719180f5ccd956efe",
"/assets/assets/images/macbookpro.jpg": "66c2101cd267dfca5e3d437e187983c8",
"/assets/assets/images/amazon_logo.jpg": "6be52bcef85c6c470a75ba255b7e7097",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "6386544d18be98759ed72997ede3686d",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "04f1126d0b1c97c43a3b8032188dab13",
"/web/index.html": "e6e25ef07ab061f3396db68372e4cc59"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
