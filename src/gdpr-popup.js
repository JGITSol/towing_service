// Minimal GDPR consent popup with language support
(function () {
  let lang = (localStorage.getItem('siteLang') || document.documentElement.lang || 'pl').toLowerCase();
  if (!['pl','en','ua','by','ru'].includes(lang)) lang = 'pl';
  const legalLinks = {
    pl: '/legal-info.html?lang=pl',
    en: '/legal-info.html?lang=en',
    ua: '/legal-info.html?lang=ua',
    by: '/legal-info.html?lang=by',
    ru: '/legal-info.html?lang=ru'
  };
  const messages = {
    pl: 'Ta strona używa plików cookies. Szczegóły w naszej <a href="' + legalLinks.pl + '" target="_blank">Polityce Prywatności</a>.',
    en: 'This website uses cookies. See details in our <a href="' + legalLinks.en + '" target="_blank">Privacy Policy</a>.',
    ua: 'Цей сайт використовує файли cookie. Деталі у нашій <a href="' + legalLinks.ua + '" target="_blank">Політиці конфіденційності</a>.',
    by: 'Гэты сайт выкарыстоўвае cookie. Падрабязнасці ў нашай <a href="' + legalLinks.by + '" target="_blank">Палітыцы прыватнасці</a>.',
    ru: 'Этот сайт использует файлы cookie. Подробнее в нашей <a href="' + legalLinks.ru + '" target="_blank">Политике конфиденциальности</a>.'
  };
  if (localStorage.getItem('gdpr_acknowledged')) return;
  const popup = document.createElement('div');
  popup.id = 'gdpr-popup';
  popup.innerHTML = `<span>${messages[lang] || messages.pl}</span><button id="gdpr-ok">OK</button>`;
  document.body.appendChild(popup);
  document.getElementById('gdpr-ok').onclick = function () {
    localStorage.setItem('gdpr_acknowledged', '1');
    popup.remove();
  };
})();
