/**
 * Official rankings — replace with your real venues and coordinates.
 * Coordinates are [lat, lng] in WGS84 (same as Leaflet).
 */
const OFFICIAL_RANKINGS = [
  {
    id: "baklandet-basket",
    rank: 1,
    name: "Baklandet Basket",
    area: "Baklandet",
    note: "Thick cut, double-fried crunch, salt that actually sticks.",
    noteNo: "Tykke kutt, dobbelt-stekt sprøhet, salt som faktisk fester seg.",
    lat: 63.4289,
    lng: 10.4021,
  },
  {
    id: "solsiden-shoestring",
    rank: 2,
    name: "Solsiden Shoestring",
    area: "Solsiden",
    note: "Skinny boys, high heat, dangerous levels of crisp.",
    noteNo: "Tynne pinner, høy varme, farlig sprøhetsgrad.",
    lat: 63.4302,
    lng: 10.4065,
  },
  {
    id: "midtbyen-munch",
    rank: 3,
    name: "Midtbyen Munch",
    area: "Midtbyen",
    note: "Reliable golden ratio: crispy shell, fluffy cloud inside.",
    noteNo: "Pålitelig gyllen ratio: sprøtt skall, luftig sky inni.",
    lat: 63.4344,
    lng: 10.3951,
  },
  {
    id: "ila-iron-skillet",
    rank: 4,
    name: "Ila Iron Skillet",
    area: "Ila",
    note: "Duck-fat rumours may be true. Either way: worth the walk.",
    noteNo: "Ryktene om andefett kan stemme. Uansett: verdt turen.",
    lat: 63.4275,
    lng: 10.3758,
  },
  {
    id: "lade-long-fries",
    rank: 5,
    name: "Lade Long Fries",
    area: "Lade",
    note: "Long sticks, sea breeze optional, vinegar highly recommended.",
    noteNo: "Lange pinner, sjøbris valgfritt, eddik sterkt anbefalt.",
    lat: 63.4412,
    lng: 10.4418,
  },
];

const listEl = document.getElementById("rank-list");
const mapEl = document.getElementById("map");

const TRONDHEIM_CENTER = [63.4305, 10.3951];
const DEFAULT_ZOOM = 13;

const markersById = new Map();

function getNote(entry) {
  return getLanguage() === "no" ? entry.noteNo : entry.note;
}

function buildRankCard(entry) {
  const li = document.createElement("li");
  li.className = "rank-card";
  li.dataset.id = entry.id;
  li.tabIndex = 0;
  li.setAttribute("role", "button");
  li.setAttribute("aria-label", `#${entry.rank}: ${entry.name}`);

  li.innerHTML = `
    <span class="rank-card__rank">${entry.rank}</span>
    <div class="rank-card__body">
      <h3 class="rank-card__name">${entry.name}</h3>
      <p class="rank-card__area">${entry.area}</p>
      <p class="rank-card__note">${getNote(entry)}</p>
    </div>
  `;

  return li;
}

function setActive(id) {
  document.querySelectorAll(".rank-card.is-active").forEach((el) => {
    el.classList.remove("is-active");
  });
  document.querySelectorAll(".fry-marker.is-active").forEach((el) => {
    el.classList.remove("is-active");
  });

  const card = listEl.querySelector(`[data-id="${id}"]`);
  if (card) card.classList.add("is-active");

  const marker = markersById.get(id);
  const iconEl = marker?.getElement?.();
  const inner = iconEl?.querySelector(".fry-marker");
  if (inner) inner.classList.add("is-active");
}

function initMap() {
  const map = L.map(mapEl, {
    scrollWheelZoom: true,
    zoomControl: false,
  }).setView(TRONDHEIM_CENTER, DEFAULT_ZOOM);

  L.control.zoom({ position: "bottomright" }).addTo(map);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  OFFICIAL_RANKINGS.forEach((entry, i) => {
    const rot = -8 + (i % 5) * 4;
    const html = `<div class="fry-marker" data-rank="${entry.rank}" style="--rot:${rot}deg"><span class="fry-marker__rank">${entry.rank}</span></div>`;
    const icon = L.divIcon({
      className: "fry-marker-wrap",
      html,
      iconSize: [24, 48],
      iconAnchor: [12, 48],
      popupAnchor: [0, -44],
    });

    const marker = L.marker([entry.lat, entry.lng], { icon }).addTo(map);
    marker.bindPopup(
      `<strong style="font-family:Chewy,system-ui;font-size:1.1rem">#${entry.rank} ${entry.name}</strong><br/><span style="font-size:0.85rem;opacity:0.85">${entry.area}</span>`
    );
    marker.on("click", () => setActive(entry.id));
    markersById.set(entry.id, marker);
  });

  return map;
}

function initList(map) {
  const sorted = [...OFFICIAL_RANKINGS].sort((a, b) => a.rank - b.rank);

  sorted.forEach((entry) => {
    const li = buildRankCard(entry);
    listEl.appendChild(li);

    const openEntry = () => {
      setActive(entry.id);
      map.setView([entry.lat, entry.lng], 15, { animate: true });
      markersById.get(entry.id)?.openPopup();
    };

    li.addEventListener("click", openEntry);
    li.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openEntry();
      }
    });
  });
}

function rebuildList(map) {
  listEl.innerHTML = "";
  initList(map);
}

function initLangSwitcher(map) {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
      rebuildList(map);
      document.querySelectorAll(".lang-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
    });
  });
  const defaultBtn = document.querySelector('.lang-btn[data-lang="no"]');
  if (defaultBtn) defaultBtn.classList.add("is-active");
}

setLanguage("no");
const map = initMap();
initList(map);
initLangSwitcher(map);

requestAnimationFrame(() => {
  map.invalidateSize();
});
window.addEventListener("resize", () => map.invalidateSize());

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      if (anchor.getAttribute("href") === "#map-section") {
        setTimeout(() => map.invalidateSize(), 400);
      }
    }
  });
});
