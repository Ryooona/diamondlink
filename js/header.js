document.addEventListener('DOMContentLoaded', function() {
  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (headerPlaceholder) {
    fetch('/diamondlink/html/header.html')
      .then(res => res.text())
      .then(html => {
        headerPlaceholder.innerHTML = html;

        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const overlay = document.getElementById('overlay');
        const loginModal = document.getElementById('login-modal');

        const menuHTML = `
          <a href="#" class="menu-close">メニューを閉じる</a>
          <a href="#" id="open-login-modal">ログイン</a>
          <a href="/diamondlink/html/signup.html">アカウント作成</a>
          <a href="#">チームを探す</a>
          <a href="#">チームを登録する</a>
        `;
        navMenu.innerHTML = menuHTML;

        const openLoginModalButton = document.getElementById('open-login-modal');
        const closeMenuButton = document.querySelector('.menu-close');

        hamburger.addEventListener('click', function() {
          navMenu.classList.add('show');
          overlay.classList.add('show');
        });

        openLoginModalButton.addEventListener('click', function(e) {
          e.preventDefault();
          loginModal.classList.add('show');
          overlay.classList.add('show');
          navMenu.classList.remove('show');
        });

        closeMenuButton.addEventListener('click', function(e) {
          e.preventDefault();
          navMenu.classList.remove('show');
          overlay.classList.remove('show');
        });

        overlay.addEventListener('click', function() {
          loginModal.classList.remove('show');
          navMenu.classList.remove('show');
          overlay.classList.remove('show');
        });
      });
  }

  if (footerPlaceholder) {
    fetch('/diamondlink/html/footer.html')
      .then(res => res.text())
      .then(html => {
        footerPlaceholder.innerHTML = html;
      });
  }
});
