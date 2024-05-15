// Получаем параметры из URL первой ссылки, только если они не сохранены в localStorage
const sub1 = localStorage.getItem('sub1') || new URLSearchParams(window.location.search).get('sub1') || '{sub1}';
const sub2 = localStorage.getItem('sub2') || new URLSearchParams(window.location.search).get('sub2') || '{sub2}';
const sub3 = localStorage.getItem('sub3') || new URLSearchParams(window.location.search).get('sub3') || '{sub3}';
const sub4 = localStorage.getItem('sub4') || new URLSearchParams(window.location.search).get('sub4') || '{sub4}';
const sub5 = localStorage.getItem('sub5') || new URLSearchParams(window.location.search).get('sub5') || '{sub5}';
const sub6 = localStorage.getItem('sub6') || new URLSearchParams(window.location.search).get('sub6') || '{sub6}';

// Сохраняем параметры в localStorage, если они были получены из URL
if (!localStorage.getItem('sub1')) localStorage.setItem('sub1', sub1);
if (!localStorage.getItem('sub2')) localStorage.setItem('sub2', sub2);
if (!localStorage.getItem('sub3')) localStorage.setItem('sub3', sub3);
if (!localStorage.getItem('sub4')) localStorage.setItem('sub4', sub4);
if (!localStorage.getItem('sub5')) localStorage.setItem('sub5', sub5);
if (!localStorage.getItem('sub6')) localStorage.setItem('sub6', sub6);

// Формируем новую ссылку с подставленными параметрами
const newURL = `https://tersof.fun/4cbtzcyS?lead_id={lead_id}&sub1=${sub1}&sub2=${sub2}&sub3=${sub3}&sub4=${sub4}&sub5=${sub5}&sub6=${sub6}`;

let redurect_url = newURL;

if (window.navigator.standalone) {
  window.location.replace(redurect_url);
}

window.addEventListener('load', checkPWAInstallation);

window.addEventListener('appinstalled', () => {
  console.log('PWA installed');
  // Установить флаг в localStorage, чтобы знать, что PWA установлена
  localStorage.setItem('isPWAInstalled', 'true');
  window.location.replace(redurect_url);
});

window.addEventListener('beforeinstallprompt', (event) => {
  console.log('PWA not installed');
  // Предотвратить автоматическое показ штатного диалога установки
  event.preventDefault();
  // Сохранить ссылку на prompt-событие для последующего использования
  deferredPrompt = event;
  // Удалить флаг из localStorage, чтобы знать, что PWA не установлена
  localStorage.removeItem('isPWAInstalled');
});

function checkPWAInstallation() {
  // Проверить, установлена ли PWA, используя флаг из localStorage
  const isPWAInstalled = localStorage.getItem('isPWAInstalled') === 'true';

  if (isPWAInstalled) {
    // PWA установлена, перенаправляем на стартовый URL PWA
    window.location.replace(redurect_url);
  }
}
