document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (!hamburger || !navMenu) return; // ハンバーガーまたはナビメニューがない場合は処理を終了

  // ハンバーガーメニューのクリック時の動作
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('show'); // メニューを開いたり閉じたり
  });
});
