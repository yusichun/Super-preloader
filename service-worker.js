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
    "revision": "2b0728e61271f6ca34dac20cc866e2a6"
  },
  {
    "url": "assets/css/0.styles.a5636e7a.css",
    "revision": "47ad92bb4e1910bf8a121d88f708f9f2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.71be828d.js",
    "revision": "093eedeb69737e1fa45b27d7db7c0ca3"
  },
  {
    "url": "assets/js/11.e816ae5c.js",
    "revision": "15b230a780cfee86ae8027d05692928e"
  },
  {
    "url": "assets/js/12.6c7ff04f.js",
    "revision": "ad6704f3dd6396c22160384de864a0f2"
  },
  {
    "url": "assets/js/13.ce91a2c2.js",
    "revision": "9b2c0862c5e96594eec8948bd314c1a9"
  },
  {
    "url": "assets/js/14.b4a98b28.js",
    "revision": "6cae60e1371f89fbc1232de40cc484e0"
  },
  {
    "url": "assets/js/15.2d9d4300.js",
    "revision": "04da3fa6d6cd9703535153b28e1d4e25"
  },
  {
    "url": "assets/js/16.01628fe5.js",
    "revision": "75ff7750a068e08310acd36959fae959"
  },
  {
    "url": "assets/js/17.1bd24753.js",
    "revision": "9ce1900962be94dde2d54119234619d2"
  },
  {
    "url": "assets/js/18.c23a224e.js",
    "revision": "a31fc85200443cf2faf9caa0b5ce31aa"
  },
  {
    "url": "assets/js/19.0e63e505.js",
    "revision": "b9bc10b99d2629467dfba05f0c09978e"
  },
  {
    "url": "assets/js/2.cc2f5afb.js",
    "revision": "0deb0e4b3085f7e6802bafc056610ee2"
  },
  {
    "url": "assets/js/20.a16aea1c.js",
    "revision": "55dc247961f93b76ab3d76f7255b5806"
  },
  {
    "url": "assets/js/3.66ae63e9.js",
    "revision": "16240fa4969a41682ae2d20f5b793a31"
  },
  {
    "url": "assets/js/4.7116040e.js",
    "revision": "a8dabba7705b71a60d1d88474014c8ca"
  },
  {
    "url": "assets/js/5.ad056de0.js",
    "revision": "a844d2119bf41742609998dd4f030a06"
  },
  {
    "url": "assets/js/6.b34f0915.js",
    "revision": "827e3c5c0e9fd36173da20408e16ac77"
  },
  {
    "url": "assets/js/7.99163ad9.js",
    "revision": "9e7352b2a5f20677cfeccc3bc6684263"
  },
  {
    "url": "assets/js/8.21727ca4.js",
    "revision": "3f5c0c5e0d6209f78d6390c379935838"
  },
  {
    "url": "assets/js/9.ffa140b3.js",
    "revision": "79dc77df0c6a97b9df5d5f2ebb8ab272"
  },
  {
    "url": "assets/js/app.3b7d527c.js",
    "revision": "ba584d7a22a59f3b09573e44eef7821d"
  },
  {
    "url": "compatibility.html",
    "revision": "edccbdcd2f019569f82caa17230fa555"
  },
  {
    "url": "database.html",
    "revision": "19934698d9765d42a34953de6c459ce1"
  },
  {
    "url": "develop.html",
    "revision": "a696c3f969beea641c6c3072efd24b50"
  },
  {
    "url": "en/compatibility.html",
    "revision": "64bf5018085c2d8e9856e8484c28688f"
  },
  {
    "url": "en/database.html",
    "revision": "dc5dc42e3de9da8df03d90ee83520064"
  },
  {
    "url": "en/example.html",
    "revision": "16a7b7aa074343b1dda38b09455e6379"
  },
  {
    "url": "en/faq.html",
    "revision": "21a9db44e6f0c19b8eca9f26d01b3653"
  },
  {
    "url": "en/index.html",
    "revision": "e55390b7dd1befac68956516a9af042b"
  },
  {
    "url": "en/siterule.html",
    "revision": "572ea28a44e849daaf3c60dca6bad6c5"
  },
  {
    "url": "example.html",
    "revision": "aedfe0c40f9850af8ae6ba18fc9854fa"
  },
  {
    "url": "faq.html",
    "revision": "833e5bca341b60b50c5c36704b86f1dc"
  },
  {
    "url": "image/example/baidu.png",
    "revision": "4402e5935ca77f66e70f6c2f315af694"
  },
  {
    "url": "image/example/google.png",
    "revision": "11613e2fec311e270ac9003dbd1da54e"
  },
  {
    "url": "image/example/hhmm.png",
    "revision": "e4bda310ad173720a7088fba64e22549"
  },
  {
    "url": "image/example/xkcd.png",
    "revision": "603585728294aa3713aa8c088ed0996d"
  },
  {
    "url": "index.html",
    "revision": "7cda5a6417e46ddae52503cc73cc9e24"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "a7967656926d4e8743dbd074c2b1f8f1"
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
