'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "377ad60d660aa7d316534a8bd57399ee",
".git/config": "985bbb0ec0ad4331725245dab4b97893",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "321668a57d8c99e852a331b5e1680496",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a9ba77622419351568dcae2363a5b7cd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9101c665e9d2cd79d5b7c1cee1ee93ae",
".git/logs/refs/heads/master": "9101c665e9d2cd79d5b7c1cee1ee93ae",
".git/logs/refs/remotes/origin/master": "d16f2849b80c6db7ab82149e94c5f039",
".git/objects/03/1095007eaeaa12a604d94bf5ee8d8a4795a995": "410c79e1230708009f607ac42fc893a8",
".git/objects/12/a597b662593e7ec9b356f67c2d3cc399895db8": "95312f57ad71a0ed9847b798a73008fb",
".git/objects/16/9b9c0e72f6204f05435ed92747fcdb78f69055": "2a1c19271ad2c976268da461ee22b310",
".git/objects/1b/f8eae40df3f4d0a3f9be8b511f9f221f239119": "285c4df73d7fd51c963f23830be3a8d4",
".git/objects/20/f9a9b218ffdb3eb717b8ddd05ca3d28bfc25b2": "f6580dc0affba8d9d15b077296b1a5d3",
".git/objects/27/077637adf974f25a9aef846d78b508bc57a04f": "6cfff780c497048e14e4a42341136112",
".git/objects/28/f24af265b47f95b28e360100aff8e0c468a1e3": "f54f978c2e4b8ebab48accf9e7c42453",
".git/objects/30/805c208e12be07b8f5a7a7661c60a7f44c00f6": "244fb4ee885ee05f0c767ef037939e25",
".git/objects/3c/8d637f85a794f2872ea0ee5dde34fe02a99c40": "f2d1524460ecfd3f3042db43967ce97f",
".git/objects/41/d0e434d7b409fff0f1355706c131b4cf5da826": "6bf2ca6b517dd5073fcba408f01f1d4c",
".git/objects/45/d3536ddfcad04013de062da99b6bb17f43900f": "76f4d732cf36f9ed9d89fa80588d7cb7",
".git/objects/45/e9166b4a0f05c74bd2c7a7a620587f3df00cfb": "96b4a32335cd8d85db600af9acef01be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/50/c2321c82d89a295473b21be656fb2061516831": "8c30e429f092a320daa5078ea1cbe105",
".git/objects/54/35fa7fff51dc5cc492fdd453434f6a9dda927a": "26e46a794a4fbc003ce8596051ce2c76",
".git/objects/56/a6046d5adfc4030a9bf739f684b016b16256d0": "deeb3e750b8f0b724b32c5fd3a8339f2",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5b/f9391f0ff569556ab49de386bf006b3ff78f01": "36678d513240ab0b3aa065ef004d3373",
".git/objects/5c/d2a78b0e6a895e0686c7cf9954b5b16f835054": "ea3fa42b06475cd0b043f8b5cba3ce85",
".git/objects/5f/17eb552f14be72b6da97ba45308eb7dae9e91a": "e2d020b666ffa088937aaa42a2bbc47c",
".git/objects/60/7d1bfa9ee5e918a5a96580d690955a187163f5": "881b4a5302613cc837eacdfa046689e9",
".git/objects/61/cddbbec391652d34a22bdcd638f5f66acb9716": "cc4f2886fa973614d7fa8cdfe5d8e2a6",
".git/objects/73/00a6b224acb04223b38d8d2aab478787ee922b": "bb8d05b8a79484ec30f02e5d25601504",
".git/objects/74/dac8e70dcb9050f9215962378cdc26a65cb331": "d2598d3ae6f633202bde9c1129e13302",
".git/objects/78/ce39b27387c63af2c31d064eca2561e38b15ff": "b25c91028f729899deb8cd7615c3938d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/79563786db26deac5a6d18d3b6ae19a91db84b": "4ccefef839b03e46ea1a4b42a961c5f1",
".git/objects/83/228f5870923238426e12876c5118184a139dee": "2eddb0feadf25409e74abe979f3fac74",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/05f5bf016c29d855d81b8ab9b2b9080cc1f762": "47b2bbf858a38760ed84f2f41227831e",
".git/objects/8f/83c2b959319330a9081e486595e0fa8c5542ce": "5dacac4e50eb0ec4461075ddcf5da512",
".git/objects/92/01e2d7aa8d47fc6e2bd85ee1da3987db05b111": "83922737dc319f2a3c418391800ea7ef",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/93/2f869060e491fca60208706d8439627fe75bcb": "0caba311a2ca526b9b1a3666fd32e6a2",
".git/objects/93/90065d8f54f28abcdc358a649216107cf53468": "1b3f1f1f2e8605733a8499a1b19fb5f5",
".git/objects/94/e0f92d07e64c6f3c95df44d76b3d82e3b10503": "f7d409e2fc898d5ffb1bc93d21570199",
".git/objects/98/907cac1395139c089694b51cb43800a20b6b13": "800487f1969d79c5d66539a6a8369ab5",
".git/objects/9b/0ab12bec159f0e080f7a9a14bac93dfb9a6e6c": "b649ceb6ebef4661db693a4efe24c7c1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/eaae277f81844d71a529f5bbcb4cdf7378aa40": "9f0eb7b2ac1c4c180528f88111752153",
".git/objects/a4/85adb2ac47e5bb2f4b9a7d9e4d301b529bbb84": "8f12760643f49b64840c7a7db642b61d",
".git/objects/a8/53f36a02ec5a298794f841e3da09a954ef3601": "e22f873debed747d647a2c45997fc2ac",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/4fef0c4c63424956a15cc94c5755f6d9924c23": "0c0d031538fe5e7e3fccc9cb6be6248f",
".git/objects/ad/24db6edc17dbd7957e00a3687a667cf84a361c": "e6e45c76f53e6ddedfde17fd26825f6a",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b5/295bbe3606153c5d2de21a1c54a6a1a2df886d": "79a75db01b7824a0243f2efd095ee0ca",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/297b50948d38bbfc1461507006f3daa6a46960": "05864cc94ec69be8ba3364ab2ea93284",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/a726963914822f2083c8537e5aefecf9ed141c": "722596d253212c25ac1268a24cdc3e4f",
".git/objects/c3/d461e788b59f6a25699d0c4601030ff08c55e5": "ccfceadc3687b1993465bd25167d870d",
".git/objects/c4/a6118df6408fb3b565c1a6ef5a1a311a03f1b4": "db96ca9dc65e7e71bb8276c495b4f122",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/b41e7307de265fa199eb5abd40c5943884fe05": "535b98daf7890c24d1493979fff23fd7",
".git/objects/d3/2d78f7dfb12b7eecfec8279b0fe4df9fb65059": "9a80e69d3404d19f2d714aa4b39b42a3",
".git/objects/d4/7962e06ef21f92458fc8d34cf7d7dc43d9378a": "671df115a18dd7b9770fdf80d6156d47",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/47745083970e94ad9961c7a6894b83ab322147": "17f0c5728eadd4a69318d6a824af5ff2",
".git/objects/dc/cc197836d80cfa80b24c554eda22f29c59c4d4": "4dba0e89eb353d6c9897b7c20b9fee05",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e3/ce6afe31d23bb6236c897ca10f223179322cc6": "e8465bb137c29192d891c79b11a4a945",
".git/objects/e3/dd6894a7841dd7281ffbfcb51242edbc923f68": "ecac0ab7b24c078a48ce0e9a28cfced4",
".git/objects/e5/628d9c3863d842c668465ed432f0265cbc81cc": "108d4f9f57dd75bd230990e92a67f6a1",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/f9d348cae151740575866861c6fe80a2a008d2": "dbbda4f48fad0a0067d6e13a46a59cad",
".git/objects/ea/c695e7aac58c4dd53cae2cf01b609631ff2c66": "1511f84ec78faa22b78a89f73fdbdea1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/400dd67d15d2215a9ec14013c32dd6fada6994": "a0f8cb587c165f71625a7ec748e173a8",
".git/objects/ec/73d64c0e2008c076715de164057784d4225ab6": "796c510ab0a6359b2ca64fac50483422",
".git/objects/ec/c30ee0f7f1b80aee328b550c0a111b83667638": "95ed105de23e869e260d47f14bf97d7f",
".git/objects/ed/cad50b6b4f936a9f3b63b65ff4dcc161a9ca9d": "6ecf890ebb4f5e09cde0c6349e9253e9",
".git/objects/f1/9c4f17a1185277df4e58c45a5de5983e9ea608": "9ba0780bc42c5e44134377703876208f",
".git/objects/fc/62ae2f140bee8f705e823d09c6853ffa6bc071": "2630e0ff83dc464e0bdef87b030cf1d1",
".git/objects/fd/5df25e03bacdc32d1f11a6ec70eb99307d8cfc": "f46a8cd7b06a26fb2c4b5c3f379c4a8c",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/pack/pack-e6e28a2a177c4ec1213f891b87b56bfe7ec50707.idx": "2dc04fd51614a5caef83c60f441b27b3",
".git/objects/pack/pack-e6e28a2a177c4ec1213f891b87b56bfe7ec50707.pack": "e840694b975b9f94e26d8e1c5b0cb6a3",
".git/ORIG_HEAD": "7915183c654ac2c46be7eb36b8647868",
".git/refs/heads/master": "7915183c654ac2c46be7eb36b8647868",
".git/refs/remotes/origin/master": "94356c4ef95f4083b401311ee19128fc",
"assets/AssetManifest.json": "76ab2bf82b69def60eb05d240e47f5aa",
"assets/assets/images/base_menu.png": "77ad891760c0bcd2e466376adc3cdc6a",
"assets/assets/images/cplus_icon.png": "be29acba9510c9d44fceb97f61da7eb5",
"assets/assets/images/csharp_icon.png": "0e18550bb7c9827e878e1b7711775c79",
"assets/assets/images/house_layout.png": "d368f39588b1ccf3473f668ae6de0485",
"assets/assets/images/house_look.png": "83c6303f7e69a6d5ba9e72ad3e3574e8",
"assets/assets/images/linkedin_logo.png": "86fd3c61e3770c0b9ce8e1d16712a2dd",
"assets/assets/images/menu_choice.png": "ce9a98b3580eba0dadf665b51e6d94a9",
"assets/assets/images/menu_choice2.png": "aea13fe2868dc7d7fa1c99ec48191a05",
"assets/assets/images/neon_rift/enemy_types_1.jpg": "16801ac822f1eb7625d3666dbf3e5a09",
"assets/assets/images/neon_rift/enemy_types_2.jpg": "3eeedb4aef525e6fe093d0105108854e",
"assets/assets/images/neon_rift/gameplay_1.jpg": "4433a56ca9eaddce1b37acac1bfedd94",
"assets/assets/images/neon_rift/gameplay_2.jpg": "91fcb47c8d7dd095e5079444b6e1a681",
"assets/assets/images/neon_rift/level_preparation.jpg": "b952cdec6b67bad2c56b0dba1c7b0a11",
"assets/assets/images/neon_rift/level_preparation_see_card_info.jpg": "61095670f639a53be8d7f40f55dda561",
"assets/assets/images/neon_rift/tower_effects_1.jpg": "a09e0a96686eb592c5125b06df4930cb",
"assets/assets/images/neon_rift/tower_effects_2.jpg": "9aa0d51c86577f35c161cb765c625ff8",
"assets/assets/images/neon_rift/tower_placement.jpg": "1898cd5a883a2ddd71d6755d72ee42a0",
"assets/assets/images/neon_rift/tower_placement_2.jpg": "54c74f503ba4f4a734c1f09e81b8c7f0",
"assets/assets/images/neon_rift/tutorial_1.jpg": "264ce21922b7c11b9a19ef20a0c30aa7",
"assets/assets/images/neon_rift/tutorial_2.jpg": "4b56898653fde055624d21288c6c1b6c",
"assets/assets/images/neon_rift_cover_photo.png": "b1f3231228e087ef1e28b272b6c82aad",
"assets/assets/images/pricing_info.png": "a521d38b3d67990f69642546ae3d0f9b",
"assets/assets/images/rasmus.jpg": "2bb53d356b6c9be2ab2c472a115f8031",
"assets/assets/images/react_icon.png": "f03b826161b558721a0d6fb865055e37",
"assets/assets/images/redux_icon.png": "c3a168c31a1cfe07acf8f9d1a284df91",
"assets/assets/images/slot_games/slot_screen.png": "c6a405f65f8e81c99a708ffb1cb9ec7f",
"assets/assets/images/threejs_icon.png": "c5d0ea61012284eb0e9a06cb54680c1a",
"assets/assets/images/tutorial1.png": "e1ff3eda5bb493ba06aeba0bf62ca3aa",
"assets/assets/images/tutorial2.png": "7b4dbe96f0ab742d85f588ea0cb67fc9",
"assets/assets/images/typescript_icon.png": "1dff57b1b7d92dffab650a96d2f04efe",
"assets/assets/images/unity_icon.png": "bcbbeb5b467a3f4f22a1e66985804357",
"assets/assets/images/unreal_engine_icon_grey.png": "47b940de2cb9d1b33296ca0e33e69ff3",
"assets/assets/images/vr_escape/env_1.png": "db2aff89e886b13cbd049bad39aa8f8e",
"assets/assets/images/vr_escape/env_2.png": "4baa460b93359b125c69226813bb4b75",
"assets/assets/images/vr_escape/env_3.png": "51f7cc4197f53d194c890d9ec563c9f6",
"assets/assets/images/vr_escape/env_4.png": "9c9d81ad93ce12d3869e701e6b7b8e5a",
"assets/assets/images/vr_escape_room_cover.png": "34a586fe6e2ef181d8a829a4b479d50b",
"assets/assets/images/webgl_logo.png": "a0bb36fc4dc8322f539851d89760d0f1",
"assets/assets/images/wg2_cover.jpg": "2e8bed68edbf8be555180bd0395ae816",
"assets/assets/videos/mixed_reality.mov": "1a368058bab7b65ae7ecdb93fd69b8c2",
"assets/assets/videos/NeonRiftTD_trailer.mp4": "2df2e158862556926a1e7e357246954a",
"assets/assets/videos/VRE_Teaser.mp4": "ae971715512a5cce4f790ec1583c7487",
"assets/assets/videos/VrHousingVideo.mp4": "797c74ded9580f6924c8e37c69568736",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "e7cc16c6d513780a7efeb3cba28e85a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "2ad5fabd6a36a6deff087b8edfd0c1f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "73721a55afd104f0a0901a9239bb79c2",
"/": "73721a55afd104f0a0901a9239bb79c2",
"main.dart.js": "6d2471ff3b6c561dfc3955bb09f1c3d2",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
