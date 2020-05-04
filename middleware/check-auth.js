export default function(context) {
  console.log("[Middleware] Check Auth");
 // if (process.client) { // localStore property exist only in Client, its a browser attribute
                        // middlewares will be called server-side once (on the first request to the Nuxt app or 
                        //when page refreshes) and client-side when navigating to further routes
    context.store.dispatch("initAuth",context.req);
 //}
}
