// header-loader.js

document.addEventListener('DOMContentLoaded', function() {
  // ヘッダー読み込み
  fetch('/diamondlink/header.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('header-placeholder').innerHTML = html;
    });

  // フッター読み込み
  fetch('/diamondlink/footer.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('footer-placeholder').innerHTML = html;
    });
});
