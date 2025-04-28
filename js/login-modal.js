// login-modal.js
function setupLoginModal() {
  const loginModal = document.getElementById('login-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const openLoginModalBtn = document.getElementById('open-login-modal');
  const closeLoginModalBtn = document.getElementById('close-login-modal');

  if (!loginModal || !modalOverlay) return; // モーダル自体がなかったら終了

  // 開く
  if (openLoginModalBtn) {
    openLoginModalBtn.addEventListener('click', function() {
      loginModal.classList.add('show');
      modalOverlay.classList.add('show');
    });
  }

  // 閉じる
  if (closeLoginModalBtn) {
    closeLoginModalBtn.addEventListener('click', function() {
      loginModal.classList.remove('show');
      modalOverlay.classList.remove('show');
    });
  }

  // オーバーレイ押しても閉じる
  modalOverlay.addEventListener('click', function() {
    loginModal.classList.remove('show');
    modalOverlay.classList.remove('show');
  });
}
