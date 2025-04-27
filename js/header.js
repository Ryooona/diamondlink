document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const overlay = document.getElementById('overlay');
  const loginModal = document.getElementById('login-modal');

  // メニュー中身を作成
const menuHTML = `
  <a href="#" class="menu-close">メニューを閉じる</a>
  <a href="#" id="open-login-modal">ログイン</a>
  <a href="/diamondlink/html/signup.html">アカウント作成</a>
  <a href="#">チームを探す</a>
  <a href="#">チームを登録する</a>
`;
navMenu.innerHTML = menuHTML;

  // ▼ここから、メニュー作成が終わったあとにボタンを取得する！
  const openLoginModalButton = document.getElementById('open-login-modal');
  const closeMenuButton = document.querySelector('.menu-close');

  // ハンバーガーメニューをクリック
  hamburger.addEventListener('click', function() {
  navMenu.classList.add('show');
  overlay.classList.add('show');
});

  // 「ログイン」リンクをクリック → モーダル表示
  openLoginModalButton.addEventListener('click', function(e) {
    e.preventDefault();
    loginModal.classList.add('show');
    overlay.classList.add('show');
    navMenu.classList.remove('show');
  });

  // 「メニューを閉じる」リンクをクリック → メニューを閉じる
  closeMenuButton.addEventListener('click', function(e) {
    e.preventDefault();
    navMenu.classList.remove('show');
    overlay.classList.remove('show');
  });

  // オーバーレイをクリック → 全部閉じる
  overlay.addEventListener('click', function() {
  loginModal.classList.remove('show');
  navMenu.classList.remove('show');
  overlay.classList.remove('show');
});
