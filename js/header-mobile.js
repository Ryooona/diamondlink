document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const overlay = document.getElementById('overlay');
  const closeMenuBtn = document.getElementById('close-menu');
  const menuLinks = document.querySelectorAll('.nav-menu a');

  if (hamburger && navMenu && overlay && closeMenuBtn) {
    // ハンバーガー押したら開く
    hamburger.addEventListener('click', function() {
      navMenu.classList.add('show');
      overlay.classList.add('show');
    });

    // 閉じるボタン押したら閉じる
    closeMenuBtn.addEventListener('click', function() {
      navMenu.classList.remove('show');
      overlay.classList.remove('show');
    });

    // オーバーレイ押したら閉じる
    overlay.addEventListener('click', function() {
      navMenu.classList.remove('show');
      overlay.classList.remove('show');
    });

    // メニュー内リンクを押しても閉じる
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('show');
        overlay.classList.remove('show');
      });
    });
  }
});
