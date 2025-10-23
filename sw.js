self.addEventListener('fetch',function(event)){
    if(/\.jpg$/.test(event.requet.url)) {
        event.respondWith(
            new Response('<p>Respuesta positiva desde tu service worker UwU!</p>',{
                header:{'Content-Type':'text/html'}
            } )
    }
}
