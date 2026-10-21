// Ставит тему до отрисовки, чтобы не было вспышки. Вынесено в файл: CSP запрещает inline-скрипты.
try {
  var t = localStorage.getItem('zp-theme');
  if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
} catch (e) {}
// Защита от встраивания в чужой сайт (кликджекинг): хостинг не умеет отдавать frame-ancestors.
if (window.top !== window.self) {
  document.documentElement.style.display = 'none';
  try {
    window.top.location.replace(window.location.href);
  } catch (e) {}
}
