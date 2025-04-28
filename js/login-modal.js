// login-modal.js

function setupLoginModal() {
  const loginModal = document.getElementById('login-modal');
  const signupModal = document.getElementById('signup-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const loginLink = document.getElementById('login-link');
  const signupLink = document.getElementById('signup-link');
  const loginCloseButton = loginModal ? loginModal.querySelector('.close-button') : null;
  const signupCloseButton = signupModal ? signupModal.querySelector('.close-button') : null;

  if (!modalOverlay) return;

  // 共通：モーダルを開く関数
  function openModal(modal) {
    if (!modal) return;
    modalOverlay.classList.add('show');
    modalOverlay.style.display = 'block';
    modal.style.display = 'flex';
    modalOverlay.style.opacity = 0;
    modal.style.opacity = 0;
    setTimeout(() => {
      modalOverlay.style.opacity = 1;
      modal.style.opacity = 1;
      modalOverlay.style.transition = 'opacity 0.3s';
      modal.style.transition = 'opacity 0.3s, transform 0.3s';
    }, 10);
  }

  // 共通：モーダルを閉じる関数
  function closeModal() {
    [loginModal, signupModal].forEach(modal => {
      if (modal) {
        modal.style.opacity = 0;
      }
    });
    modalOverlay.style.opacity = 0;
    modalOverlay.classList.remove('show');
    setTimeout(() => {
      [loginModal, signupModal].forEach(modal => {
        if (modal) {
          modal.style.display = 'none';
        }
      });
      modalOverlay.style.display = 'none';
    }, 300);
  }

  // ログインボタン押したら開く
  if (loginLink && loginModal) {
    loginLink.addEventListener('click', function(event) {
      event.preventDefault();
      openModal(loginModal);
    });
  }

  // サインアップボタン押したら開く
  if (signupLink && signupModal) {
    signupLink.addEventListener('click', function(event) {
      event.preventDefault();
      openModal(signupModal);
    });
  }

  // 閉じるボタン
  if (loginCloseButton) {
    loginCloseButton.addEventListener('click', closeModal);
  }
  if (signupCloseButton) {
    signupCloseButton.addEventListener('click', closeModal);
  }

  // オーバーレイをクリックしたら閉じる
  modalOverlay.addEventListener('click', closeModal);
}

// グローバル公開
window.setupLoginModal = setupLoginModal;
