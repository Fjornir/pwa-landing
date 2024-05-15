export const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('../public/sw.js', { scope: '/' });
        console.log('Service Worker зарегистрирован:', registration);
        return registration
      } catch (error) {
        console.error('Ошибка при регистрации Service Worker:', error);
      }
    }
  };