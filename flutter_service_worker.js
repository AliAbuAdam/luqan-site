'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4f912e6d78a40dce688d97737b7aa8dc",
"version.json": "023115fe0c4ac4e89f6bc113a2e28b80",
"index.html": "1d8d70f3e190ba6c31e6316758c9a1ee",
"/": "1d8d70f3e190ba6c31e6316758c9a1ee",
"CNAME": "c2e0879e559141a5284005c821a19563",
"main.dart.js": "485d9c8330345af678a5a3332fe3187b",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"README.md": "63023cac51afab8f3dcc05442faa822c",
"favicon.png": "3b424b9ee5c5ad27e99b6acd94b346e9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8251711174625efd57a745495ce8c854",
".git/ORIG_HEAD": "9068343e8c789a60de28426a9889e8c9",
".git/config": "6baf7c5bca52b1fe47c25faf70edaa8c",
".git/objects/0d/80d328d83b566b53fb0f882bcc15b45cc36459": "37bfbad04e4b757cccaa9984ae5ebd26",
".git/objects/3e/9a436d53473d832fe6ec1e1aa706ec7ad29802": "6eeb7497ad3ed9b07b5669bacee32973",
".git/objects/57/4140d38e26a4bbe491cfbc0fc8dae2ada84ca7": "fc7d1a803af58bb651b948cdc01c4f66",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/6f/32d32dc70c66aca170e028d8fdafcfbd615f1d": "683287ca7a0d4ca047f8a80ffcc5383d",
".git/objects/6f/ee1801d9e45cfad6cb7af643fc052575984de9": "29667f4ea2fd6dbf643e7e93b8da9205",
".git/objects/6f/6afc7dd8876df8879076138d5f2f4448c8f96d": "0cf0139ac2c645a8a5eb2a31d690b28a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/67/2e9e49d2f0c4c8aa44b496beb98f32cb36720e": "8b66be9a4797f8f3922fb5816494c68e",
".git/objects/5f/4557a4b5192896f8a1740b690064112c7ca943": "c7478e8c270748d499ddcf1364129b18",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/33/fb46c84d806b9e834d2fd1028cb6a88ffbda1e": "06640f364c17f3fa5de6774620055164",
".git/objects/33/55e3edf28f81c54592cbc1df3f9572cacb4a04": "1263df150826fc528d31c0099d398a93",
".git/objects/05/534b43693dcb6e9046de97b68d446ca86a90ef": "0203d28ae9dfb7fa310bb6f2f9caa56c",
".git/objects/b2/1dea147e67b05add17433a859cab91dbd7080d": "74cc6768c2407140e2d22f49f195b307",
".git/objects/d9/4ecf4a521972c8bd3f145f2e8de17dc387a6c0": "da20d9e21980e1575d4d915de3d8464d",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d7/ec48f98e5b0e8281dd9883b694095310700074": "3d814ef1e6f70871ba713bffce16897e",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/eead55f023797b4f7039a857e7c7d1c0f2c35b": "23522f77b879b2e5373874943ccb2569",
".git/objects/e2/9b0bcf7f3c0f60d7f274c092beb1d346fa0921": "9ef2be46e3f79e57115df4461e9ee98e",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/093efe165df02a9c7312998a2917df5f681c56": "ddebe452898dca5d54cd46e5d6a99e4f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/97ecc36239c59300cb0d90b13cbcae9bf6a7e8": "bed50be28960247d2c326064b9a8dab2",
".git/objects/c1/4945003f3660cc000e0cff995a7513226a09b0": "0242f68f81c964c66ba0e24dd8a9e64e",
".git/objects/18/e88ad3997bd3c3f38287f8e32b438ca8ee7511": "aadab5dd4a83af85b4a00ad32a4a1fd7",
".git/objects/11/3f7966f286ca4836677af5ebfd0166321e962c": "1bfde4fd9caf81ed13b5a6ef88f74466",
".git/objects/7d/511b71bf5527e46b26a8bb51cda6e24f0b5015": "7f5a604160d62d50467d1d8fd8a9acda",
".git/objects/7c/4c1eeec52ec63184ce76dc826ff1b12cc06e92": "911bb53a432891781f911b20c64a5d77",
".git/objects/16/89bb8d2bcb05a20620500fd414d89aed143b1a": "2f77ee68bfbfef740d4b0a7fc19be9d7",
".git/objects/87/d2162a5f748a780a2d1ce980eea8c71897b4eb": "839d2336e955f4e8d0f9d7dffcc2cb24",
".git/objects/8f/10cb5105de988f997a135e1d2a6fba068911be": "87ed22142573915ef94f77d293230127",
".git/objects/8a/76bc059702ad962bbfc659cafa3a861d834617": "7085709c3925c780e2ea6604c29d118a",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/5d12243e1c289c1ed5617797f54c71ed640860": "3c303bcb84a3e1c1d2eb0fbf4f812b50",
".git/objects/19/49491fe9516a8989f036896a3e154583671459": "c597fc5e3d4267aa11ceba8cade49846",
".git/objects/26/d6531fb307bf495e167183d93cefef5bd745dc": "88a95d791ec540227259cc6d5ea8d996",
".git/objects/21/38d3eae30edca491a9686c041b9f07edeb4731": "8308c0d770244105ca45a63c9e0fa25e",
".git/objects/75/7e2e61ba2b24b94e30a2490103a4eb09c60ff5": "c886352518f96786dff2e89754449a45",
".git/objects/2a/382877c88c5e120831782eb950afd895059d73": "ecad0705c4c50f6d451f9cb5629611b2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/140e6595887762af3a128e788947d5270322c0": "a9c754ceba0d2da5fdd60a821e44ea68",
".git/objects/5d/8d56dbcc45ee2b859f6290de7c76c2e62fcb24": "263678ebc677e6ca7fc9b7e2e6acc82b",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/b8d1342683dd83a4977dc2b138936b41046440": "35dc37ccaecf0adc709873369889c50c",
".git/objects/08/a274cef73866390e1655b85da3b469394bd914": "59e408e80e3603ad6afb854a1db98cb8",
".git/objects/6c/9f69aef7299fdcba2838357657ef9c52125384": "0cb197c04366f41f4d4c8c6e4def1bf6",
".git/objects/52/b8f4edcd552daad699bb6c3dd51a16268302ba": "1a59bb6f149e6e4da08e73bee2e69cec",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/b14c00c35eff5d13dd9ec0cd7ab6f30b5aa364": "a157072790e57df72336854c2f081d85",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/a9/7a3ecc0d63705ce91e57dd826a2e3e81d5cabd": "4d06191d521827bb0a7878ae0788edec",
".git/objects/d2/b81a678c2939ab69fabc97e50500cfd0346319": "4bbba77386e509833f0d790ba41fea8b",
".git/objects/aa/791e5e26e76539f5197affe954ffbde87da6d4": "7ecb0e412059461be2433a511cfbe0bd",
".git/objects/af/37b1b0c94e8a06dfaf93bc3fd6f9415e4c6828": "55912023831b284781925d9dd179dc14",
".git/objects/b7/27d22cedc80ead0cbcc6f8e5e24ea023c76b4a": "61b55dccf1eef2803010eec93884c4d0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/0af7ea45cde4c60dd1b036fdea48cc316837bc": "ef89ba4a7d9351e5524d7620cb32c0f4",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/1ca53861d033e933316ab25d5047e738fe9d94": "4ad850050bb061591d7488a39e576582",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c3/482403d3b6fcd5695803c6014f38fc79a4df50": "359571d281e0d26e72e60d492c7a447a",
".git/objects/e1/8af677e8aae185b9091505e648f9f97f1ed537": "fc957144747f708e1925b552c7fa51d2",
".git/objects/f7/1564e82d8fec9b47d8c0ac46d8849fc655d00d": "44cc2c0879c1e035cc8d406297cc5ef7",
".git/objects/ff/05adf434cc167f380c8aa997fa3b9f1184d558": "c43c53eabed6d401d229b9266fc1b23c",
".git/objects/ff/231d9ea7c4145602e8953c53a2fdfbf84d7367": "202a34d424b65b7950610777ec3f2646",
".git/objects/cb/6d244e7fffe9a3b864f98cfe7a73b5f4d83bcb": "86569539a460121972b54502336d5a40",
".git/objects/83/0f8f0476dcdad350f56bb775839de0f809df4c": "0c091e1a48f4a981a5c1adcbb7e83972",
".git/objects/48/758f250bfe4acb9fe7297a46bf94fae169ea4c": "f77b3c58f0ad8feac392abb82cb6c94f",
".git/objects/1e/727aefc44c39e1197960ea9579a496dc469929": "f822872fb8623c94de480b45c918a3e8",
".git/objects/23/9f7f820cb5ac38b52ca5edabc9ea757c14fee6": "f4b3c82f2df53121851e967fbf3c2dbf",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/85/0af8c995bc71bc8613b3333c91a9943dd5ffac": "ab1b52ffa967f242f45e7a92fd8c8727",
".git/objects/85/29f55e98e879d60208f939d5b2ae83506cf56c": "118d85e28393bbb9aa80354253daec54",
".git/objects/76/060e9448856332e4040bfdf8618b08c8f25f45": "f0d8486cc1a59b90550cfb2790870ebd",
".git/objects/82/2252c8c8235eb86e8104f626bfaa1cbfd5b436": "188477e57496e12ece349b197d4ecd62",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2e/d2d10574401e68249adfc1a9a6ea928bb1f793": "22d9b96f48e4eb6a583691d787ecc505",
".git/objects/2b/c96c5432f3cc79450f107d4ffd45cb6f9d619b": "73cb2fc9dc1b860f9a55edbcc828575a",
".git/objects/13/2ba82a814ebece2adff655169cb6aa911fc567": "b1a8a02dfbe6a3b097d2aa11e07f0968",
".git/objects/14/043566e071ee93e3c1a8dcbb96fd9d7320f511": "a30d4560eb44e5ce7036865bf0110315",
".git/objects/8e/1330fd6e51dc3163d2abfe5082f20bddc066b1": "8d19ea14f7db59cddbedf9ebd9bb35ab",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "38cf51fbca1460d18a4135b83027e5a0",
".git/logs/refs/heads/main": "6b9bdde94700e7b5e7e09933102c45ac",
".git/logs/refs/remotes/origin/HEAD": "85d3f3293d64fc9a1821c74a0c92f8fe",
".git/logs/refs/remotes/origin/main": "7d5a5f15d4cab12445d7917b5e8ed85d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "af3094e31151f6cc9149155d65b10b09",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "af3094e31151f6cc9149155d65b10b09",
".git/index": "b3177d2741ca210ec529b6c2472c2d54",
".git/COMMIT_EDITMSG": "90ddd47fc9dfd1f5474f07d1297f9106",
".git/FETCH_HEAD": "a6c92e402adb296fe3f36eeedd0a4e13",
"assets/AssetManifest.json": "5c3b7cd5c9d793b51a9c96d97d3405e3",
"assets/NOTICES": "69d9da5f1250cf0e4788c505618abfd6",
"assets/FontManifest.json": "18aec6984f9b5ca4da90fa354e5600c6",
"assets/AssetManifest.bin.json": "05808f5b834c09440fcd47a8d675a1b0",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d66a35dd0c8bf7698e022f4436f906c4",
"assets/fonts/MaterialIcons-Regular.otf": "60f480fffbfb3d202c3770ffdb8e6e9b",
"assets/assets/images/svg/luqan-logo.svg": "b5fcb6237b95234629062861fbf4b63a",
"assets/assets/images/svg/google_button.svg": "1793bd41838ba57812dca27fb57c7e68",
"assets/assets/images/svg/tile_icon.svg": "b189ccf18955dd02f7c96255fc4229ea",
"assets/assets/images/svg/logo.svg": "5fdac17db28d015699f8ce4124f075a4",
"assets/assets/images/svg/apple_button.svg": "9883c1f40fd7b2a09268212e1f7002f9",
"assets/assets/images/main/background.png": "2a113c6a64242e0d4fe77c2636c3bb38",
"assets/assets/images/splash_logo.png": "4989b59a1b810fd595ad1203ee00f126",
"assets/assets/fonts/RFDewi-Black.ttf": "afdb68b48c76811ebae99b2274129155",
"assets/assets/fonts/RFDewi-Semibold.ttf": "dc14c330e4912dd595f88ff902978c45",
"assets/assets/fonts/Helvetica-Neue-Regular.ttf": "53154fc364e3b971a9172cfb9955572c",
"assets/assets/fonts/RFDewi-Ultrabold.ttf": "7b074817d769a445b216f78cbaabc456",
"assets/assets/fonts/RFDewi-Regular.ttf": "bfb30c2677ae3236b6f893704c76f019",
"assets/assets/fonts/RFDewi-Thin.ttf": "798b664893954f51075a65edba994968",
"assets/assets/fonts/RFDewi-Bold.ttf": "b68b4f571874a966f4e4c3a01dd90d9e",
"assets/assets/fonts/Helvetica-Neue-Medium.ttf": "7041884185e13c6187390afe25b1e9e7",
"assets/assets/fonts/RFDewi-Ultralight.ttf": "3771adf0ffd66a930da44b0f43d66d5f",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
