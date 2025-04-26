// header.js

document.addEventListener('DOMContentLoaded', function() {
  // ヘッダー読み込み
  fetch('/diamondlink/header.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('header-placeholder').innerHTML = html;

      // 読み込んだあとにハンバーガー開閉設定
      const hamburger = document.getElementById('hamburger');
      const navMenu = document.getElementById('nav-menu');

      hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('show');
      });
    });

  // フッター読み込み
  fetch('/diamondlink/footer.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('footer-placeholder').innerHTML = html;
    });
});
