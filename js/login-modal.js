// login-modal.js
document.addEventListener('DOMContentLoaded', function() {
  const loginModal = document.getElementById('login-modal');
  const openLoginModalBtn = document.getElementById('open-login-modal');
  const closeLoginModalBtn = document.getElementById('close-login-modal');

  // 開くボタンを押したとき
  if (openLoginModalBtn) {
    openLoginModalBtn.addEventListener('click', function() {
      loginModal.classList.add('show');
    });
  }

  // 閉じるボタンを押したとき
  if (closeLoginModalBtn) {
    closeLoginModalBtn.addEventListener('click', function() {
      loginModal.classList.remove('show');
    });
  }

  // モーダルの外側をクリックしたら閉じる（おまけ機能）
  window.addEventListener('click', function(event) {
    if (event.target === loginModal) {
      loginModal.classList.remove('show');
    }
  });
});
