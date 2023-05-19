/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ed7016cdcdc92cafa5058dbbc4cd1885"
  },
  {
    "url": "assets/css/0.styles.0e7b46e2.css",
    "revision": "e508e21878c4134d7fdff86796b5e088"
  },
  {
    "url": "assets/img/acc_not_found.5a0a1f74.jpg",
    "revision": "5a0a1f74f63a4c92a97d11416bc35013"
  },
  {
    "url": "assets/img/acc_search.166e686c.jpg",
    "revision": "166e686c58b8dcc7e3ca0f57f8fec8f4"
  },
  {
    "url": "assets/img/add_new_account.8597aa6d.jpg",
    "revision": "8597aa6d98402b3472dc0fe73a4e410b"
  },
  {
    "url": "assets/img/Agile_model.7d8e9005.jpg",
    "revision": "7d8e90057ce5d0f5625db8e88c659ad8"
  },
  {
    "url": "assets/img/all_accounts_get.c7c84d89.jpg",
    "revision": "c7c84d892a53aa2b97d12c03fc14479d"
  },
  {
    "url": "assets/img/check_new_acc.f7bd6b49.jpg",
    "revision": "f7bd6b492a91d52bd887a0e909565411"
  },
  {
    "url": "assets/img/check_update.c9a2a78a.jpg",
    "revision": "c9a2a78a6651aabb56c825f4d73b549d"
  },
  {
    "url": "assets/img/delete_acc.7ef06938.jpg",
    "revision": "7ef069389f0cb25bb0c7f7dfbce1c98c"
  },
  {
    "url": "assets/img/delete_not_existing_acc.8cdf0338.jpg",
    "revision": "8cdf0338b212047cabb2c34bcc05b37e"
  },
  {
    "url": "assets/img/deleted_acc.d6728798.jpg",
    "revision": "d67287987aac46aad6612deab870f6bb"
  },
  {
    "url": "assets/img/furps.f473e42f.jpg",
    "revision": "f473e42f98b1cd0578294e66c598024e"
  },
  {
    "url": "assets/img/just_chill.d62c36e4.png",
    "revision": "d62c36e4b5f6fd320a7718819c8e6265"
  },
  {
    "url": "assets/img/JustChill.f9d8729e.png",
    "revision": "f9d8729ed96fffd024379d2fda417664"
  },
  {
    "url": "assets/img/Kanban.58053b0c.png",
    "revision": "58053b0cac4e76861cebd7d5c4906622"
  },
  {
    "url": "assets/img/post_not_all_data.0dd1ff34.jpg",
    "revision": "0dd1ff34edbdd1719121052995741665"
  },
  {
    "url": "assets/img/Programming_cycle.cb11d0e1.png",
    "revision": "cb11d0e188b0d7e2f93a975de76c0a76"
  },
  {
    "url": "assets/img/scrum.3675a43d.jpg",
    "revision": "3675a43df1ca8df8255db9709436534a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update_not_found_acc.5e4e7563.jpg",
    "revision": "5e4e7563c1090379c33d4d9cd31ccb01"
  },
  {
    "url": "assets/img/update_passw.1f1ff0bd.jpg",
    "revision": "1f1ff0bd2b6ad90c635cb224b5c2a1bc"
  },
  {
    "url": "assets/img/v-model.b05c3d9e.jpg",
    "revision": "b05c3d9e7a7b59a27362aaca5fe67780"
  },
  {
    "url": "assets/img/Waterfall_model.49ef183e.jpg",
    "revision": "49ef183ef8dde0325d231189e54b83cf"
  },
  {
    "url": "assets/js/10.b71a53c4.js",
    "revision": "0cc11d09df9f70010d2607ac3b570cd3"
  },
  {
    "url": "assets/js/11.76d3878e.js",
    "revision": "254c8ddb20f2c2b1da5195ce5d2f7ecc"
  },
  {
    "url": "assets/js/12.9b8c3e7c.js",
    "revision": "8920893354681bf1b6c1da7e46d55459"
  },
  {
    "url": "assets/js/13.bafd2780.js",
    "revision": "f029ef7337b77c835eb64d8216cc04f5"
  },
  {
    "url": "assets/js/14.742efc7a.js",
    "revision": "64b6059ac91248f99aa4b88023183868"
  },
  {
    "url": "assets/js/15.5fb198ba.js",
    "revision": "8e955c10b43655d4a311420a0c85b64b"
  },
  {
    "url": "assets/js/16.edd491f9.js",
    "revision": "0803280540a60ca26e513bfbbc13aa8e"
  },
  {
    "url": "assets/js/17.c26daabb.js",
    "revision": "1edb0c33de3dac6da4e928b9b5bdd138"
  },
  {
    "url": "assets/js/18.e25f09be.js",
    "revision": "c266a7b1da576529c19e0ecc5e75f945"
  },
  {
    "url": "assets/js/19.cc738f8e.js",
    "revision": "d21a241ffa177d9eb4c5235b9092e722"
  },
  {
    "url": "assets/js/2.ada40547.js",
    "revision": "7576a0a52ac688339b6aea6a5d028a3f"
  },
  {
    "url": "assets/js/20.e5fcb9fb.js",
    "revision": "6960120725832ef2efd1728370ba30bb"
  },
  {
    "url": "assets/js/21.b30fbdae.js",
    "revision": "9144d3a967c4e6bdf257052b70ad567d"
  },
  {
    "url": "assets/js/22.007e8a36.js",
    "revision": "d9f43ef0598571a498aa85ef349af69c"
  },
  {
    "url": "assets/js/23.ac9b0422.js",
    "revision": "80e85497a71cf0d3cecae8500d45ed59"
  },
  {
    "url": "assets/js/24.77f2f329.js",
    "revision": "0b33682339fa021012b006bbe052a61d"
  },
  {
    "url": "assets/js/26.e641855d.js",
    "revision": "ff3dcb20b0b67e965586e4426c2a639c"
  },
  {
    "url": "assets/js/3.41818929.js",
    "revision": "171cb393942159f34e631fa37cc3df02"
  },
  {
    "url": "assets/js/4.d869030f.js",
    "revision": "bb45d37920a027a4cc04205303bf9332"
  },
  {
    "url": "assets/js/5.27fb7be2.js",
    "revision": "bc7716818de07edb3c8a7505fde079d6"
  },
  {
    "url": "assets/js/6.f1cec165.js",
    "revision": "d0559bbd300b6be07d7d2b808485692a"
  },
  {
    "url": "assets/js/7.91391a73.js",
    "revision": "9624a7ed9863d5945116526b7e3ef760"
  },
  {
    "url": "assets/js/8.48e1933f.js",
    "revision": "43553aeb85dc321a1457cee07bb6c594"
  },
  {
    "url": "assets/js/9.3bc1b3a4.js",
    "revision": "6ceeadf2e2f13add98d303a3bbe83014"
  },
  {
    "url": "assets/js/app.59e08cfb.js",
    "revision": "07c9f3683fd7202dbd6bff23a86f60e3"
  },
  {
    "url": "conclusion/index.html",
    "revision": "8db9aaad89596af973f470f093af254b"
  },
  {
    "url": "design/index.html",
    "revision": "3662979460771905873b7767d1f3ec78"
  },
  {
    "url": "index.html",
    "revision": "8741855388f20873dacad579d83569c2"
  },
  {
    "url": "intro/index.html",
    "revision": "0f6e487103e68e5eab3b6a11800867a1"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "f020cdd1260ca4c76c566976ef97daca"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "878b3ed3199a14ed314d86bea9b71557"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "c2c69f50fb61cb94bf2a583790d0065f"
  },
  {
    "url": "software/index.html",
    "revision": "f907946de3feaca30e783441e6e9d62f"
  },
  {
    "url": "test/index.html",
    "revision": "86912053756c4dea8907796cc124d503"
  },
  {
    "url": "use cases/index.html",
    "revision": "8150d44a91d45236535f06191c5cae8a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
