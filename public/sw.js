self.addEventListener('install', (event) => {
    event.waitUntil(
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.navigate('/pwa.html');
        });
      })
    );
  });

self.addEventListener('activate', event => {
    console.log('[SW]: activate')
})