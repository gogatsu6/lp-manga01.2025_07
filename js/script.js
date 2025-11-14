// =====================================
// Opening → TOP アニメ発火
// =====================================
document.addEventListener("DOMContentLoaded", () => {

  const cuts = document.querySelectorAll(".top__cuts div");
  const textBox = document.querySelector(".top__text-container");
  const scroll = document.querySelector(".top__scroll");

  if (!cuts.length) return;

  // Openingが8秒なので、その後開始
  const baseDelay = 8000;
  const step = 1100;

  // 3カット順番表示
  cuts.forEach((cut, index) => {
    setTimeout(() => {
      cut.classList.add("is-show");
    }, baseDelay + step * index);
  });

  // cut3 → 約10.2秒 → text（約11.4秒）
  setTimeout(() => {
    textBox.classList.add("is-show");
  }, baseDelay + step * 3);

  // text → scroll（＋2秒）
  setTimeout(() => {
    scroll.classList.add("is-show");
  }, baseDelay + step * 3 + 2000);
  
});
