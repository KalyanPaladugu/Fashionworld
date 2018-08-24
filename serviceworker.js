//
// self.addEventListener('install', function(e) {
//  e.waitUntil(
//    caches.open('static').then(function(cache) {
//      return cache.addAll();
//    })
//  );
// });
//
// self.addEventListener('activate', function () {
//  console.log('serviceWorker Activated');
// });
//
//
//
// self.addEventListener('fetch', function(event) {
//
// console.log(event.request.url);
//
// event.respondWith(
//
// caches.match(event.request).then(function(response) {
//
// return response || fetch(event.request);
//
// })
//
// );
//
// });


self.addEventListener('install', function(event) {
  console.log('ServiceWorker Installed');
  event.waitUntil(
    caches.open('static')
    .then(function(cache) {

      cache.addAll(['/.',
        'index.html',
        'selection.html',
        'resource/data.json',
        'js/index.js',
        'js/main.js',
        'css/styles.css',
        'css/selection.css',
        'images/Blue Jeans.jpeg',
        'images/Casual Burlywood Shirt.jpeg',
        'images/Casual Black Shirt.jpeg',
        'images/Casual Gray Blue Shirt.jpeg',
        'images/Casual Pink Shirt.jpeg',
        'images/Formal Blue Voilet Shirt .jpeg',
        'images/Formal Pale Shirt.jpeg',
        'images/Formal Slate Shirt.jpeg',
        'images/Formal Tropical Voilet Shirt.jpeg',
        'images/MediumSlateBlue Jeans.jpeg',
        'images/Navy Jeans.jpeg',
        'images/Slate Gray Jeans.jpeg'
      ]);
    })
  );
});


self.addEventListener('activate', function() {
  console.log('ServiceWorker is Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(res) {
      if (res) {
        return res;
      } else {
        return fetch(event.request);
      }
    })
  );
});
