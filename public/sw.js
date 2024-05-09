self.addEventListener('install', event => {
    console.log('[SW]: INSTALL')
})

self.addEventListener('activate', event => {
    console.log('[SW]: activate')
})