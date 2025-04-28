// login-modal.js

function setupLoginModal() {
  const loginModal = document.getElementById('login-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const loginLink = document.getElementById('login-link'); // 「ログイン」ボタン
  const closeButton = loginModal ? loginModal.querySelector('.close-button') : null;

  if (!loginModal || !modalOverlay) return; // どちらか無かったら何もしない

  if (loginLink) {
    loginLink.addEventListener('click', function(event) {
      event.preventDefault();
      modalOverlay.classList.add('show');
      modalOverlay.style.display = 'block';
      loginModal.style.display = 'flex';
      modalOverlay.style.opacity = 0;
      loginModal.style.opacity = 0;
      setTimeout(() => {
        modalOverlay.style.opacity = 1;
        loginModal.style.opacity = 1;
        modalOverlay.style.transition = 'opacity 0.3s';
        loginModal.style.transition = 'opacity 0.3s, transform 0.3s';
      }, 10);
    });
  }

  function closeModalFunc() {
    loginModal.style.opacity = 0;
    modalOverlay.style.opacity = 0;
    modalOverlay.classList.remove('show');
    setTimeout(() => {
      loginModal.style.display = 'none';
      modalOverlay.style.display = 'none';
    }, 300);
  }

  if (closeButton) {
    closeButton.addEventListener('click', closeModalFunc);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModalFunc);
  }
}

// グローバルに公開
window.setupLoginModal = setupLoginModal;
