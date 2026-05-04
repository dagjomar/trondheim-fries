const TRONDHEIM_CENTER = [63.4305, 10.3951];
const DEFAULT_ZOOM = 13;
const DETAIL_ZOOM = 15;

let mainMap = null;
let peekMap = null;
const markersById = new Map();
let activeId = null;

function getReview(entry) {
  return getLanguage() === "no" ? entry.reviewNo : entry.reviewEn;
}

function createMarkerIcon(entry, isActive) {
  const cls = isActive ? "game-marker game-marker--active" : "game-marker";
  const html = `<div class="${cls}"><span class="game-marker__rank">${entry.rank}</span><span class="game-marker__fry"></span></div>`;
  return L.divIcon({
    className: "game-marker-wrap",
    html,
    iconSize: [32, 44],
    iconAnchor: [16, 44],
    popupAnchor: [0, -40],
  });
}

function initPeekMap() {
  const el = document.getElementById("map-peek");
  if (!el) return;
  peekMap = L.map(el, {
    scrollWheelZoom: false,
    zoomControl: false,
    dragging: false,
    attributionControl: false,
    doubleClickZoom: false,
  }).setView(TRONDHEIM_CENTER, 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(peekMap);

  OFFICIAL_RANKINGS.forEach((entry) => {
    const icon = createMarkerIcon(entry, false);
    L.marker([entry.lat, entry.lng], { icon }).addTo(peekMap);
  });
}

function initMainMap() {
  const el = document.getElementById("map");
  mainMap = L.map(el, {
    scrollWheelZoom: false,
    zoomControl: false,
  }).setView(TRONDHEIM_CENTER, DEFAULT_ZOOM);

  L.control.zoom({ position: "bottomright" }).addTo(mainMap);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
  }).addTo(mainMap);

  OFFICIAL_RANKINGS.forEach((entry) => {
    const icon = createMarkerIcon(entry, false);
    const marker = L.marker([entry.lat, entry.lng], { icon }).addTo(mainMap);
    marker.on("click", () => showReview(entry.id));
    markersById.set(entry.id, marker);
  });
}

function updateMarkers() {
  OFFICIAL_RANKINGS.forEach((entry) => {
    const marker = markersById.get(entry.id);
    if (marker) {
      marker.setIcon(createMarkerIcon(entry, entry.id === activeId));
    }
  });
}

function renderList() {
  const body = document.getElementById("panel-body");
  const sorted = [...OFFICIAL_RANKINGS].sort((a, b) => a.rank - b.rank);

  let html = '<ul class="station-list">';
  sorted.forEach((entry) => {
    const stars = "★".repeat(Math.round(entry.rating / 2)) +
                  "☆".repeat(5 - Math.round(entry.rating / 2));
    html += `
      <li class="station-item pixel-border" data-id="${entry.id}">
        <span class="station-item__rank">#${entry.rank}</span>
        <div class="station-item__info">
          <h3 class="station-item__name">${entry.name}</h3>
          <p class="station-item__area">${entry.area}</p>
        </div>
        <div class="station-item__score">
          <span class="station-item__rating">${entry.rating}</span>
          <span class="station-item__stars">${stars}</span>
        </div>
      </li>`;
  });
  html += "</ul>";
  body.innerHTML = html;

  body.querySelectorAll(".station-item").forEach((el) => {
    el.addEventListener("click", () => showReview(el.dataset.id));
  });
}

function showReview(id) {
  const entry = OFFICIAL_RANKINGS.find((e) => e.id === id);
  if (!entry) return;

  activeId = id;
  updateMarkers();

  mainMap.setView([entry.lat, entry.lng], DETAIL_ZOOM, { animate: true });

  const body = document.getElementById("panel-body");
  const review = getReview(entry);
  const scores = entry.scores;

  body.innerHTML = `
    <div class="review-panel">
      <button class="review-back pixel-border" id="back-btn">
        <span data-i18n="reviewBack">${t("reviewBack")}</span>
      </button>
      <div class="review-header">
        <span class="review-rank pixel-border">#${entry.rank}</span>
        <div>
          <h3 class="review-name">${entry.name}</h3>
          <p class="review-area">${entry.area}</p>
        </div>
      </div>
      <div class="review-score-big">
        <span class="review-score-big__number">${entry.rating}</span>
        <span class="review-score-big__label">/10</span>
      </div>
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

  document.getElementById("back-btn").addEventListener("click", () => {
    activeId = null;
    updateMarkers();
    mainMap.setView(TRONDHEIM_CENTER, DEFAULT_ZOOM, { animate: true });
    renderList();
  });
}

function initGameScreen() {
  document.getElementById("title-screen").classList.add("is-hidden");
  document.getElementById("game-screen").classList.add("is-visible");

  setTimeout(() => {
    mainMap.invalidateSize();
  }, 300);
}

function initLangSwitcher() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
      document.querySelectorAll(".lang-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      if (activeId) {
        showReview(activeId);
      } else {
        renderList();
      }
    });
  });
  document.querySelector('.lang-btn[data-lang="no"]')?.classList.add("is-active");
}

// Init
setLanguage("no");
initPeekMap();
initMainMap();
renderList();
initLangSwitcher();

document.getElementById("start-btn").addEventListener("click", initGameScreen);

document.getElementById("station-count").textContent = OFFICIAL_RANKINGS.length;

window.addEventListener("resize", () => {
  if (mainMap) mainMap.invalidateSize();
  if (peekMap) peekMap.invalidateSize();
});
