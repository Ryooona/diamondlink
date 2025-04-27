document.addEventListener('DOMContentLoaded', function() {
  // ヘッダーを読み込む
  fetch('/diamondlink/html/header.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('header-placeholder').innerHTML = html;
    })
    .catch(error => console.error('ヘッダーの読み込みに失敗しました:', error));

  // フッターを読み込む
  fetch('/diamondlink/html/footer.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('footer-placeholder').innerHTML = html;
    })
    .catch(error => console.error('フッターの読み込みに失敗しました:', error));
});
