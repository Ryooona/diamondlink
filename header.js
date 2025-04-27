document.addEventListener('DOMContentLoaded', function() {
  // メニューとオーバーレイを取得
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const overlay = document.getElementById('overlay');

  // ハンバーガーメニューをクリックしたら
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('show'); // メニュー開閉
    overlay.classList.toggle('show'); // 背景ぼかし開閉
  });

  // オーバーレイをクリックしたら
  overlay.addEventListener('click', function() {
    navMenu.classList.remove('show'); // メニュー閉じる
    overlay.classList.remove('show'); // 背景ぼかし閉じる
  });

 document.addEventListener('DOMContentLoaded', function() {
  const isLoggedIn = false;
  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('overlay');

  // メニュー中身を作成
  navMenu.innerHTML = `
    <a href="#">メニューを閉じる</a>
    <a href="/diamondlink/login.html">ログイン</a>
    <a href="/diamondlink/signup.html">登録</a>
    <a href="#">トーナメント検索</a>
    <a href="#">ポーカースポット情報</a>
    <a href="#">スペイディーポーカー</a>
    <a href="#">インタビュー</a>
    <a href="#">コラム</a>
    <a href="#">プレイヤーズカード</a>
  `;

  // ハンバーガー押したら開く
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('show');
    overlay.classList.toggle('show');
  });

  // オーバーレイ押したら閉じる
  overlay.addEventListener('click', function() {
    navMenu.classList.remove('show');
    overlay.classList.remove('show');
  });
});
