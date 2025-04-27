// header.js

document.addEventListener('DOMContentLoaded', function() {
  const isLoggedIn = false; // ← 仮でfalse。あとで本物に変えられる！

  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('overlay');

  // メニュー中身を作成
  if (isLoggedIn) {
    navMenu.innerHTML = `
      <a href="/diamondlink/index.html">ホーム</a>
      <a href="/diamondlink/teams.html">チーム検索</a>
      <a href="/diamondlink/logout.html">ログアウト</a>
      <div class="user-button">
        <img src="/diamondlink/images/user-icon.png" alt="ユーザーアイコン" class="user-icon"> ユーザー名
      </div>
    `;
  } else {
    navMenu.innerHTML = `
      <a href="/diamondlink/index.html">ホーム</a>
      <a href="/diamondlink/teams.html">チーム検索</a>
      <a href="/diamondlink/login.html">ログイン</a>
      <a href="/diamondlink/signup.html" class="signup-button">新規会員登録</a>
    `;
  }

  // ハンバーガーをクリックしたとき
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('show');
    overlay.classList.toggle('show');
  });

  // オーバーレイをクリックしたとき
  overlay.addEventListener('click', function() {
    navMenu.classList.remove('show');
    overlay.classList.remove('show');
  });
});
