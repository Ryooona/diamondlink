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

        // 🌟 ヘッダー読み込み後にモーダル初期化！
        if (typeof setupLoginModal === 'function') {
          setupLoginModal();
        }
      })
      .catch(error => console.error('ヘッダーの読み込みエラー:', error));
  }

  loadHeader(); // 最初だけ

  if (footerPlaceholder) {
    fetch('/diamondlink/html/footer.html')
      .then(res => res.text())
      .then(html => {
        footerPlaceholder.innerHTML = html;
      })
      .catch(error => console.error('フッターの読み込みエラー:', error));
  }
});
