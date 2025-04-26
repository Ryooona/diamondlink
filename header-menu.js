// header-menu.js

document.addEventListener('DOMContentLoaded', function() {
  const isLoggedIn = false; // ログイン判定（今は仮でfalse）

  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');

  if (!navMenu || !hamburger) {
    return; // navMenuかhamburgerが存在しないときは何もしない
  }

  navMenu.innerHTML = isLoggedIn
    ? `
      <a href="/diamondlink/index.html">ホーム</a>
      <a href="/diamondlink/teams.html">チーム検索</a>
      <a href="/diamondlink/logout.html">ログアウト</a>
      <div class="user-button">
        <img src="/diamondlink/images/user-icon.png" class="user-icon"> ユーザー名
      </div>
    `
    : `
      <a href="/diamondlink/index.html">ホーム</a>
      <a href="/diamondlink/teams.html">チーム検索</a>
      <a href="/diamondlink/login.html">ログイン</a>
      <a href="/diamondlink/signup.html" class="signup-button">新規会員登録</a>
    `;

  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('show');
  });
});