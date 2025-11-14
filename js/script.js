document.addEventListener('DOMContentLoaded', () => {
  const parent = document.querySelector('.drawer-container__scroll');
  const target = document.querySelector('.top_animation_scroll');
  if (!parent || !target) return;

  target.addEventListener('animationend', (e) => {
    if (e.animationName === 'img_3cut') {
      parent.classList.remove('drawer-container__scroll');
      parent.style.overflow = ''; // CSS属性もクリア
      console.log('✅ drawer-container__scroll クラス削除 → スクロール許可！');
    }
  });
});

