// =====================================
// TOPの高さを実寸に合わせて補正（iOS対策）
// =====================================
document.addEventListener("DOMContentLoaded", () => {
  const topSection = document.querySelector(".top");
  if (!topSection) return;

  const setHeight = () => {
    topSection.style.height = `${window.innerHeight}px`;
  };

  setHeight();
  window.addEventListener("resize", setHeight);
});

// =====================================
// Opening → TOP アニメ発火
// =====================================
document.addEventListener("DOMContentLoaded", () => {

  const cuts = document.querySelectorAll(".top__cuts div");
  const textBox = document.querySelector(".top__text-container");
  const scroll = document.querySelector(".top__scroll");

  if (!cuts.length) return;

  // Openingが 8秒 なので、その後開始
  const baseDelay = 8000; // 8秒
  const step = 1100;      // cut1→cut2→cut3 の間隔（1.1秒）

  // -------------------------------------
  // 3カット順に表示
  // -------------------------------------
  cuts.forEach((cut, index) => {
    setTimeout(() => {
      cut.classList.add("is-show");
    }, baseDelay + step * index);
  });

  // cut3 の後 → テキスト表示
  setTimeout(() => {
    textBox.classList.add("is-show");
  }, baseDelay + step * 3);

  // テキスト表示 → scroll は2秒後
  setTimeout(() => {
    scroll.classList.add("is-show");
  }, baseDelay + step * 3 + 2000);

});
