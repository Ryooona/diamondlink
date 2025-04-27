// header-loader.js
document.addEventListener('DOMContentLoaded', function() {
  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  function loadHeader() {
    if (!headerPlaceholder) return;

    const isMobile = window.innerWidth <= 768;
    const headerFile = isMobile
      ? '/diamondlink/html/header-mobile.html'
      : '/diamondlink/html/header-pc.html';

    fetch(headerFile)
      .then(res => res.text())
      .then(html => {
        headerPlaceholder.innerHTML = html;

        // 🌟 ヘッダーを読み込んだあとに login-modal.js を動かす！
        const script = document.createElement('script');
        script.src = '/diamondlink/js/login-modal.js';
        document.body.appendChild(script);
      });
  }

  loadHeader();

  window.addEventListener('resize', function() {
    loadHeader();
  });

  if (footerPlaceholder) {
    fetch('/diamondlink/html/footer.html')
      .then(res => res.text())
      .then(html => {
        footerPlaceholder.innerHTML = html;
      });
  }
});
