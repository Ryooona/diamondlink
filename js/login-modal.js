function setupLoginModal() {
  const loginModal = document.getElementById('login-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const openLoginModalBtn = document.getElementById('open-login-modal');
  const closeLoginModalBtn = document.getElementById('close-login-modal');

  if (!loginModal || !modalOverlay) return; // モーダル本体とオーバーレイがなかったら何もしない

  // モーダルを開く
  if (openLoginModalBtn) {
    openLoginModalBtn.addEventListener('click', function() {
      loginModal.classList.add('show');
      modalOverlay.classList.add('show');
    });
  }

  // モーダルを閉じる（閉じるボタン）
  if (closeLoginModalBtn) {
    closeLoginModalBtn.addEventListener('click', function() {
      loginModal.classList.remove('show');
      modalOverlay.classList.remove('show');
    });
  }

  // モーダルを閉じる（オーバーレイを押したとき）
  modalOverlay.addEventListener('click', function() {
    loginModal.classList.remove('show');
    modalOverlay.classList.remove('show');
  });
}

// ページが読み込まれたら setupLoginModal を実行
document.addEventListener('DOMContentLoaded', function() {
  setupLoginModal();
});
