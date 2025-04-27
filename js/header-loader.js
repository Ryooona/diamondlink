// header-loader.js
document.addEventListener('DOMContentLoaded', function() {
  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  function loadHeader() {
    if (!headerPlaceholder) return;

    const isMobile = window.innerWidth <= 768; // モバイル判定
    const headerFile = isMobile
      ? '/diamondlink/html/header-mobile.html' // モバイル用ヘッダー
      : '/diamondlink/html/header-pc.html';    // PC用ヘッダー

    fetch(headerFile)
      .then(res => res.text())
      .then(html => {
        headerPlaceholder.innerHTML = html;
      });
  }

  // 最初に一回読み込み
  loadHeader();

  // ウィンドウサイズ変更時にもヘッダーを切り替える
  window.addEventListener('resize', function() {
    loadHeader();
  });

  // フッター読み込み（これは固定）
  if (footerPlaceholder) {
    fetch('/diamondlink/html/footer.html')
      .then(res => res.text())
      .then(html => {
        footerPlaceholder.innerHTML = html;
      });
  }
});
