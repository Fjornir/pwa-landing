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

const newURL = `https://tersof.fun/4cbtzcyS?lead_id={lead_id}&sub1=${sub1}&sub2=${sub2}&sub3=${sub3}&sub4=${sub4}&sub5=${sub5}&sub6=${sub6}`;

window.location.href = newURL