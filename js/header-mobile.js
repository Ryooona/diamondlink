// header-mobile.js
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const overlay = document.getElementById('overlay');
  const menuLinks = document.querySelectorAll('.nav-menu a');

  if (hamburger && navMenu && overlay) {
    // ハンバーガー押したとき
    hamburger.addEventListener('click', function() {
      navMenu.classList.add('show');
      overlay.classList.add('show');
    });

    // オーバーレイ押したとき
    overlay.addEventListener('click', function() {
      navMenu.classList.remove('show');
      overlay.classList.remove('show');
    });

    // メニュー内のリンク押したときも閉じる
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('show');
        overlay.classList.remove('show');
      });
    });
  }
});
