'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "2afa5e8ef5a9ddbf658ca15938c610fb",
"assets/AssetManifest.smcbin": "2fe41220bbf32926e5bc702c70624719",
"assets/assets/images/11.png": "cfc9bf6e90a7ce6574db82dde9f4ab11",
"assets/assets/images/22.png": "33ac6af1ee6fbce414d480afde658c87",
"assets/assets/images/33.png": "358dfd62b96786269914aad1552f5af1",
"assets/assets/images/44.png": "5e820cc1b9abcf03d8a9c2f767ce3607",
"assets/assets/images/55.png": "d6fe7ab6252d00c309ec3175ce87c824",
"assets/assets/images/66.png": "2f2810ef91e2b6d76cd1091a9ea84ec7",
"assets/assets/images/angi.png": "7457cdc68dc8dd676e69e7f18ccb4740",
"assets/assets/images/angi2.png": "a4326804533789f1c148e6367e6f026e",
"assets/assets/images/bootstrap.png": "a1498693bafb7baa04dae40ba737da33",
"assets/assets/images/bottomCurveMobile.png": "f24f2ee055d1bf50764055dab9d79694",
"assets/assets/images/c.png": "d0785a0e8de530eaf7bc1d23d3a795fb",
"assets/assets/images/cpp.png": "b2607e4ab34dd85bbe64a923825e0323",
"assets/assets/images/css.png": "cf362a14d0d9b842cc0dddc260414fcb",
"assets/assets/images/curvedBg.svg": "924046a2da75d0b82f69e51eb6184aab",
"assets/assets/images/design.png": "451b058fae269763b90c57c2b4e21c21",
"assets/assets/images/development.png": "8bd73fd5ad992966453b9763fb48ab8f",
"assets/assets/images/divider.png": "767560b6ce13eab3aefa3e5ae7bfb4f7",
"assets/assets/images/fb.svg": "81bf79e7b83ffd4ee3a50b0274db61ca",
"assets/assets/images/figma.png": "9e54e5a50cfab9cf3a187ed2817849ce",
"assets/assets/images/git.png": "9a7ae60f03511617b08b2fbf51b4687a",
"assets/assets/images/html.png": "15bc314174b526b4c9070414a5daa503",
"assets/assets/images/image7.png": "07ed68b82e1792454b28a11fa71ede9a",
"assets/assets/images/in.svg": "2413cad0d92cf85be124b46ede9477de",
"assets/assets/images/insta.svg": "c6ec7ea81d5b081282a8bb8b912c166b",
"assets/assets/images/ITB.png": "cbafb078cab2aa924cac39f4148618d5",
"assets/assets/images/javascript.png": "e75f77c299ffe466293032684a27eee9",
"assets/assets/images/js.png": "c76750f9b07fb662754f5530ef778fe3",
"assets/assets/images/logo%25201.png": "2220f79026cbf0e29ef88e6cc623086e",
"assets/assets/images/Logo%2520ITB.png": "6c10aeee45af83b7270fabdc73c2b14d",
"assets/assets/images/logoWhite.png": "36ca721b8fe7accd636fe5a296965670",
"assets/assets/images/mail.svg": "5ea3ad3212c779d66e53e862872691db",
"assets/assets/images/maintenance.png": "670d1d75858f3e76a8f09e5ac9de58b2",
"assets/assets/images/mongo.png": "883c0856f77eac7bd57f7ee3c9b4b331",
"assets/assets/images/mountains.png": "4c5bac110ce3dc2052d1b8c47c81698a",
"assets/assets/images/mysql.png": "cc90b040fb0c99ad41d565b82cd2f476",
"assets/assets/images/Project-3.png": "5e820cc1b9abcf03d8a9c2f767ce3607",
"assets/assets/images/react.png": "916753961fb8e5a0dde85bb6de68c8ff",
"assets/assets/images/sass.png": "40c6f40c51dcc27a84dd238e532e321f",
"assets/assets/images/top.png": "8742df483ad0cb2ea00ca66d26a2ec27",
"assets/assets/images/ts.png": "1ed164fd38f36b03e8bdb4d428ca9e81",
"assets/assets/images/Vector-1.png": "d234b391b1eee366f46ff2ae23f94af1",
"assets/assets/images/Vector-1w.png": "d366de341ed01cc54f4f2ca432cac3d7",
"assets/assets/images/Vector-2.png": "610c15a5c8efac6e9376805dd88ad3f6",
"assets/assets/images/Vector-2w.png": "b527ba11b68b9488157fd5d5dbac4552",
"assets/assets/images/Vector.png": "a2312c3f555dd4ef79b5baa21cfd5beb",
"assets/assets/images/Vectorw.png": "c0c2f989253168298f5066b0c1c95308",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0869ea7f720d5fa4196c0918eedb183b",
"assets/NOTICES": "07c6a03285502cc9ae2bd826ba975544",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e74ec6d112b10bb6c2646d156035167e",
"/": "e74ec6d112b10bb6c2646d156035167e",
"main.dart.js": "47ae19fafbd24d550a1a68abde3bd594",
"manifest.json": "9489fd5631ba1e20b033acee24aa6a18",
"version.json": "fb8d4678888024cd5f83d8522bb3a722"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
