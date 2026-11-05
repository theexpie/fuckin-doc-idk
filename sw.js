/* Doc Scramjet service worker. Keep this beside controller.sw.js. */
importScripts("./controller.sw.js");
self.addEventListener("fetch",event=>{
  if(self.$scramjetController&&self.$scramjetController.shouldRoute(event)){
    event.respondWith(self.$scramjetController.route(event));
  }
});
