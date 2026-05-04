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
    lat: 63.4289,
    lng: 10.4021,
  },
  {
    id: "solsiden-shoestring",
    rank: 2,
    name: "Solsiden Shoestring",
    area: "Solsiden",
    note: "Skinny boys, high heat, dangerous levels of crisp.",
    lat: 63.4302,
    lng: 10.4065,
  },
  {
    id: "midtbyen-munch",
    rank: 3,
    name: "Midtbyen Munch",
    area: "Midtbyen",
    note: "Reliable golden ratio: crispy shell, fluffy cloud inside.",
    lat: 63.4344,
    lng: 10.3951,
  },
  {
    id: "ila-iron-skillet",
    rank: 4,
    name: "Ila Iron Skillet",
    area: "Ila",
    note: "Duck-fat rumours may be true. Either way: worth the walk.",
    lat: 63.4275,
    lng: 10.3758,
  },
  {
    id: "lade-long-fries",
    rank: 5,
    name: "Lade Long Fries",
    area: "Lade",
    note: "Long sticks, sea breeze optional, vinegar highly recommended.",
    lat: 63.4412,
    lng: 10.4418,
  },
];

const listEl = document.getElementById("rank-list");
const mapEl = document.getElementById("map");

const TRONDHEIM_CENTER = [63.4305, 10.3951];
const DEFAULT_ZOOM = 13;

const markersById = new Map();

function buildRankCard(entry) {
  const li = document.createElement("li");
  li.className = "rank-card";
  li.dataset.id = entry.id;
  li.tabIndex = 0;
  li.setAttribute("role", "button");
  li.setAttribute("aria-label", `Rank ${entry.rank}: ${entry.name}`);

  li.innerHTML = `
    <h3 class="rank-card__name"></h3>
    <p class="rank-card__area"></p>
    <p class="rank-card__note"></p>
  `;

  li.querySelector(".rank-card__name").textContent = entry.name;
  li.querySelector(".rank-card__area").textContent = entry.area;
  li.querySelector(".rank-card__note").textContent = entry.note;

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
  const map = L.map(mapEl, { scrollWheelZoom: true }).setView(
    TRONDHEIM_CENTER,
    DEFAULT_ZOOM
  );

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  OFFICIAL_RANKINGS.forEach((entry, i) => {
    const rot = -8 + (i % 5) * 4;
    const html = `<div class="fry-marker" style="--rot:${rot}deg"></div>`;
    const icon = L.divIcon({
      className: "fry-marker-wrap",
      html,
      iconSize: [20, 40],
      iconAnchor: [10, 40],
      popupAnchor: [0, -36],
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

const map = initMap();
initList(map);

requestAnimationFrame(() => {
  map.invalidateSize();
});
window.addEventListener("resize", () => map.invalidateSize());
