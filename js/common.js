document.addEventListener('DOMContentLoaded', function() {
  // ▼ フェードイン処理
  const faders = document.querySelectorAll('.fade-in-section');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // ▼ モーダル＋オーバーレイ共通制御
  const loginLink = document.getElementById('login-link');
  const loginModal = document.getElementById('login-modal');

  // オーバーレイ生成
  let overlay = document.createElement('div');
  overlay.id = 'modal-overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.background = 'rgba(0,0,0,0.5)';
  overlay.style.zIndex = '998';
  overlay.style.display = 'none';
  document.body.appendChild(overlay);

  if (loginLink && loginModal) {
    const closeModal = loginModal.querySelector('.close-button');

    loginLink.addEventListener('click', function(e) {
      e.preventDefault();
      overlay.style.display = 'block';
      loginModal.style.display = 'flex';
      loginModal.style.opacity = 0;
      setTimeout(() => {
        loginModal.style.opacity = 1;
        loginModal.style.transition = 'opacity 0.3s';
      }, 10);
    });

    function closeModalFunc() {
      loginModal.style.opacity = 0;
      overlay.style.opacity = 0;
      setTimeout(() => {
        loginModal.style.display = 'none';
        overlay.style.display = 'none';
      }, 300);
    }

    closeModal.addEventListener('click', closeModalFunc);
    overlay.addEventListener('click', closeModalFunc);
  }
});
