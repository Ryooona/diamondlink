document.addEventListener('DOMContentLoaded', function() {
  // ヘッダー読み込み
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    fetch('/diamondlink/html/header-pc.html')
      .then(res => res.text())
      .then(html => {
        headerPlaceholder.innerHTML = html;
        // 必要ならここにPC専用のJSを書く
      })
      .catch(error => console.error('ヘッダーの読み込みエラー:', error));
  }

  // フッター読み込み
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    fetch('/diamondlink/html/footer.html')
      .then(res => res.text())
      .then(html => {
        footerPlaceholder.innerHTML = html;
      })
      .catch(error => console.error('フッターの読み込みエラー:', error));
  }
});
