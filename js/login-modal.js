// login-modal.js
document.addEventListener('DOMContentLoaded', function() {
  const loginModal = document.getElementById('login-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const openLoginModalBtn = document.getElementById('open-login-modal');
  const closeLoginModalBtn = document.getElementById('close-login-modal');

  // 開くボタンを押したとき
  if (openLoginModalBtn) {
    openLoginModalBtn.addEventListener('click', function() {
      loginModal.classList.add('show');
      modalOverlay.classList.add('show'); // オーバーレイも表示
    });
  }

  // 閉じるボタンを押したとき
  if (closeLoginModalBtn) {
    closeLoginModalBtn.addEventListener('click', function() {
      loginModal.classList.remove('show');
      modalOverlay.classList.remove('show'); // オーバーレイも非表示
    });
  }

  // オーバーレイをクリックしたら閉じる
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function() {
      loginModal.classList.remove('show');
      modalOverlay.classList.remove('show');
    });
  }
});
