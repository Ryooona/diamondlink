// header-mobile.js
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOverlay = document.getElementById('menu-overlay');
  const closeMenuBtn = document.getElementById('close-menu');
  const menuLinks = document.querySelectorAll('.mobile-nav a');

  if (hamburger && mobileMenu && menuOverlay && closeMenuBtn) {
    hamburger.addEventListener('click', function() {
      mobileMenu.classList.add('show');
      menuOverlay.classList.add('show');
    });

    closeMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.remove('show');
      menuOverlay.classList.remove('show');
    });

    menuOverlay.addEventListener('click', function() {
      mobileMenu.classList.remove('show');
      menuOverlay.classList.remove('show');
    });

    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('show');
        menuOverlay.classList.remove('show');
      });
    });
  }
});
hamburger.addEventListener('click', function() {
  console.log('Hamburger clicked'); // これでハンバーガーがクリックされたか確認できる
  mobileMenu.classList.add('show');
  menuOverlay.classList.add('show');
});
