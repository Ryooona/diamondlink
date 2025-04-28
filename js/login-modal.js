document.addEventListener('DOMContentLoaded', function() {
  // ログインモーダル関係
  const loginModal = document.getElementById('login-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const loginLink = document.getElementById('login-link'); // 「こちらからログイン」リンク
  const closeButton = loginModal ? loginModal.querySelector('.close-button') : null;

  if (!loginModal) return; // モーダル本体がなかったら何もしない

  // リンクをクリック → モーダルを表示
  if (loginLink) {
    loginLink.addEventListener('click', function(event) {
      event.preventDefault();
      loginModal.style.display = 'block';
    });
  }

  // ×ボタンをクリック → モーダルを非表示
  if (closeButton) {
    closeButton.addEventListener('click', function() {
      loginModal.style.display = 'none';
    });
  }

  // モーダルの外側クリック → モーダルを非表示
  window.addEventListener('click', function(event) {
    if (event.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });
});
