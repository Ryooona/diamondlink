// header-mobile.js
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuBtn = document.getElementById('close-menu');
  const menuOverlay = document.getElementById('menu-overlay');

  if (hamburger && mobileMenu && closeMenuBtn && menuOverlay) {

    // ハンバーガー押したらメニュー開く
    hamburger.addEventListener('click', function() {
      mobileMenu.classList.add('show');
      menuOverlay.classList.add('show');
    });

    // 閉じるボタン押したら閉じる
    closeMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.remove('show');
      menuOverlay.classList.remove('show');
    });

    // オーバーレイ押したら閉じる
    menuOverlay.addEventListener('click', function() {
      mobileMenu.classList.remove('show');
      menuOverlay.classList.remove('show');
    });
  }
});
