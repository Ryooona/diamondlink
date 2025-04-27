document.addEventListener('DOMContentLoaded', function() {
  const isLoggedIn = false;
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const overlay = document.getElementById('overlay');
  const loginModal = document.getElementById('login-modal');

  // メニュー中身を作成
  navMenu.innerHTML = `
    <a href="#">メニューを閉じる</a>
    <a href="#" id="open-login-modal">ログイン</a>
    <a href="/diamondlink/signup.html">アカウント作成</a>
    <a href="#">チームを探す</a>
    <a href="#">チームを登録する</a>
  `;

  // ハンバーガーメニューをクリック
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('show');
    overlay.classList.toggle('show');
  });

  // オーバーレイをクリック
  overlay.addEventListener('click', function() {
    navMenu.classList.remove('show');
    overlay.classList.remove('show');
    loginModal.classList.remove('show'); // モーダルも閉じる
  });

  // 「ログイン」リンクをクリック
  document.addEventListener('click', function(e) {
    if (e.target.id === 'open-login-modal') {
      e.preventDefault();
      loginModal.classList.add('show');
      overlay.classList.add('show');
      navMenu.classList.remove('show'); // メニューは閉じる
    }
  });
});
