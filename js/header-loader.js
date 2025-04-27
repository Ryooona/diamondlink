// header-loader.js
document.addEventListener('DOMContentLoaded', function() {
  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (headerPlaceholder) {
    const isMobile = window.innerWidth <= 768; // スマホ判定（幅768px以下）

    const headerFile = isMobile
      ? '/diamondlink/html/header-mobile.html' // モバイル版ヘッダー
      : '/diamondlink/html/header-pc.html';    // PC版ヘッダー

    fetch(headerFile)
      .then(res => res.text())
      .then(html => {
        headerPlaceholder.innerHTML = html;
      });
  }

  if (footerPlaceholder) {
    fetch('/diamondlink/html/footer.html')
      .then(res => res.text())
      .then(html => {
        footerPlaceholder.innerHTML = html;
      });
  }
});
