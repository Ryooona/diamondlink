document.addEventListener('DOMContentLoaded', function() {
  // ヘッダー読み込み
  fetch('/diamondlink/header.html') // 必要なヘッダー部分を読み込み
    .then(res => res.text())
    .then(html => {
      document.getElementById('header-placeholder').innerHTML = html;
    });
  
  // ここは他のスクリプトに影響を与えないように変更なし
});
