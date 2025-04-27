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

  // メニュー中身を作成（仮ログイン判定）
  const isLoggedIn = false;
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
});
