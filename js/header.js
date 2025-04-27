document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const overlay = document.getElementById('overlay');
  const loginModal = document.getElementById('login-modal');
  const openLoginModalButton = document.getElementById('open-login-modal');

  // メニュー中身を作成
  navMenu.innerHTML = `
    <a href="#">メニューを閉じる</a>
    <a href="#" id="open-login-modal">ログイン</a>
    <a href="/diamondlink/html/signup.html">アカウント作成</a>
    <a href="#">チームを探す</a>
    <a href="#">チームを登録する</a>
  `;

  // ハンバーガーメニューをクリック
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('show');
    overlay.classList.toggle('show');
  });

  // オーバーレイをクリック → モーダルとオーバーレイを閉じる
  overlay.addEventListener('click', function() {
    loginModal.classList.remove('show'); // モーダルを非表示にする
    overlay.classList.remove('show'); // オーバーレイを非表示にする
  });

  // 「ログイン」リンクをクリック → モーダル表示
  openLoginModalButton.addEventListener('click', function(e) {
    e.preventDefault();
    loginModal.classList.add('show'); // モーダル表示
    overlay.classList.add('show'); // オーバーレイ表示
    navMenu.classList.remove('show'); // メニューは閉じる
  });
});
