'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9d022c88f1dc9419f7f1bec3b7575a9b",
"assets/AssetManifest.bin.json": "07ecd56b5b31774a75d66caf8c67a849",
"assets/AssetManifest.json": "cfd1df607d1ce9ec7bf1f520da4c6a21",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b720665f22015d1e7637dc0270a3bb7f",
"assets/images/base_menu.png": "77ad891760c0bcd2e466376adc3cdc6a",
"assets/images/cover-academic-platform.png": "1059cc275d76f3354019b69036300235",
"assets/images/cplus_icon.png": "be29acba9510c9d44fceb97f61da7eb5",
"assets/images/csharp_icon.png": "0e18550bb7c9827e878e1b7711775c79",
"assets/images/house_layout.png": "d368f39588b1ccf3473f668ae6de0485",
"assets/images/house_look.png": "83c6303f7e69a6d5ba9e72ad3e3574e8",
"assets/images/linkedin_logo.png": "86fd3c61e3770c0b9ce8e1d16712a2dd",
"assets/images/menu_choice.png": "ce9a98b3580eba0dadf665b51e6d94a9",
"assets/images/menu_choice2.png": "aea13fe2868dc7d7fa1c99ec48191a05",
"assets/images/mongodb.svg": "c2a864c96dbfc449ec45dd7ac4438628",
"assets/images/neon_rift/enemy_types_1.jpg": "16801ac822f1eb7625d3666dbf3e5a09",
"assets/images/neon_rift/enemy_types_2.jpg": "3eeedb4aef525e6fe093d0105108854e",
"assets/images/neon_rift/gameplay_1.jpg": "4433a56ca9eaddce1b37acac1bfedd94",
"assets/images/neon_rift/gameplay_2.jpg": "91fcb47c8d7dd095e5079444b6e1a681",
"assets/images/neon_rift/level_preparation.jpg": "b952cdec6b67bad2c56b0dba1c7b0a11",
"assets/images/neon_rift/level_preparation_see_card_info.jpg": "61095670f639a53be8d7f40f55dda561",
"assets/images/neon_rift/tower_effects_1.jpg": "a09e0a96686eb592c5125b06df4930cb",
"assets/images/neon_rift/tower_effects_2.jpg": "9aa0d51c86577f35c161cb765c625ff8",
"assets/images/neon_rift/tower_placement.jpg": "1898cd5a883a2ddd71d6755d72ee42a0",
"assets/images/neon_rift/tower_placement_2.jpg": "54c74f503ba4f4a734c1f09e81b8c7f0",
"assets/images/neon_rift/tutorial_1.jpg": "264ce21922b7c11b9a19ef20a0c30aa7",
"assets/images/neon_rift/tutorial_2.jpg": "4b56898653fde055624d21288c6c1b6c",
"assets/images/neon_rift_cover_photo.png": "b1f3231228e087ef1e28b272b6c82aad",
"assets/images/nodejs.svg": "b337a2fb0b1289e6757e632dc766ff6b",
"assets/images/pricing_info.png": "a521d38b3d67990f69642546ae3d0f9b",
"assets/images/rasmus.jpg": "2bb53d356b6c9be2ab2c472a115f8031",
"assets/images/react_icon.png": "f03b826161b558721a0d6fb865055e37",
"assets/images/redux_icon.png": "c3a168c31a1cfe07acf8f9d1a284df91",
"assets/images/slot_games/slot_screen.png": "c6a405f65f8e81c99a708ffb1cb9ec7f",
"assets/images/threejs_icon.png": "c5d0ea61012284eb0e9a06cb54680c1a",
"assets/images/tutorial1.png": "e1ff3eda5bb493ba06aeba0bf62ca3aa",
"assets/images/tutorial2.png": "7b4dbe96f0ab742d85f588ea0cb67fc9",
"assets/images/typescript_icon.png": "1dff57b1b7d92dffab650a96d2f04efe",
"assets/images/unity_icon.png": "bcbbeb5b467a3f4f22a1e66985804357",
"assets/images/unreal_engine_icon_grey.png": "47b940de2cb9d1b33296ca0e33e69ff3",
"assets/images/vr_escape/env_1.png": "db2aff89e886b13cbd049bad39aa8f8e",
"assets/images/vr_escape/env_2.png": "4baa460b93359b125c69226813bb4b75",
"assets/images/vr_escape/env_3.png": "51f7cc4197f53d194c890d9ec563c9f6",
"assets/images/vr_escape/env_4.png": "9c9d81ad93ce12d3869e701e6b7b8e5a",
"assets/images/vr_escape_room_cover.png": "34a586fe6e2ef181d8a829a4b479d50b",
"assets/images/webgl_logo.png": "a0bb36fc4dc8322f539851d89760d0f1",
"assets/images/wg2_cover.jpg": "2e8bed68edbf8be555180bd0395ae816",
"assets/NOTICES": "eff16a40bcb776de71f4f8f8bdb71f1d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/videos/mixed_reality.mov": "1a368058bab7b65ae7ecdb93fd69b8c2",
"assets/videos/NeonRiftTD_trailer.mp4": "2df2e158862556926a1e7e357246954a",
"assets/videos/VRE_Teaser.mp4": "ae971715512a5cce4f790ec1583c7487",
"assets/videos/VrHousingVideo.mp4": "797c74ded9580f6924c8e37c69568736",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "fc00d29112d2ff34dcd6cdbbbcab3758",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8ccdcb9ced32ef70573cb48899b61750",
"/": "8ccdcb9ced32ef70573cb48899b61750",
"main.dart.js": "ec7f061ca03444d47951509b63824d4b",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
