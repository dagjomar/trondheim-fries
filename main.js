function getReview(entry) {
  return getLanguage() === "no" ? entry.reviewNo : entry.reviewEn;
}

function showReview(id) {
  const entry = OFFICIAL_RANKINGS.find((e) => e.id === id);
  if (!entry) return;

  const overlay = document.getElementById("review-overlay");
  const content = document.getElementById("review-content");
  const review = getReview(entry);
  const scores = entry.scores;

  content.innerHTML = `
    <button class="review-close" id="review-close-btn" aria-label="Lukk">✕</button>
    <div class="review-hero-img">
      <img src="${entry.img}" alt="${entry.name}" />
      <div class="review-hero-badge pixel-border">
        <span class="review-hero-badge__rank">#${entry.rank}</span>
        <span class="review-hero-badge__score">${entry.rating}/10</span>
      </div>
    </div>
    <div class="review-body">
      <h3 class="review-name">${entry.name}</h3>
      <p class="review-area">${entry.area}</p>
      <div class="review-bars">
        <div class="bar-row">
          <span class="bar-label">${t("crispLabel")}</span>
          <div class="bar-track"><div class="bar-fill bar-fill--crisp" style="width:${scores.crisp * 10}%"></div></div>
          <span class="bar-value">${scores.crisp}</span>
        </div>
        <div class="bar-row">
          <span class="bar-label">${t("flavorLabel")}</span>
          <div class="bar-track"><div class="bar-fill bar-fill--flavor" style="width:${scores.flavor * 10}%"></div></div>
          <span class="bar-value">${scores.flavor}</span>
        </div>
        <div class="bar-row">
          <span class="bar-label">${t("portionLabel")}</span>
          <div class="bar-track"><div class="bar-fill bar-fill--portion" style="width:${scores.portion * 10}%"></div></div>
          <span class="bar-value">${scores.portion}</span>
        </div>
        <div class="bar-row">
          <span class="bar-label">${t("vibeLabel")}</span>
          <div class="bar-track"><div class="bar-fill bar-fill--vibe" style="width:${scores.vibe * 10}%"></div></div>
          <span class="bar-value">${scores.vibe}</span>
        </div>
      </div>
      <div class="review-text">
        <p>${review}</p>
      </div>
    </div>
  `;

  overlay.classList.add("is-open");
  document.getElementById("review-close-btn").addEventListener("click", closeShopReview);
}

function initGameScreen() {
  document.getElementById("title-screen").classList.add("is-hidden");
  document.getElementById("game-screen").classList.add("is-visible");
  startGame();
}

function initLangSwitcher() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
      document.querySelectorAll(".lang-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    });
  });
  document.querySelector('.lang-btn[data-lang="no"]')?.classList.add("is-active");
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const overlay = document.getElementById("review-overlay");
    if (overlay.classList.contains("is-open")) closeShopReview();
  }
});

setLanguage("no");
initLangSwitcher();
document.getElementById("start-btn").addEventListener("click", initGameScreen);
