const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

let viewW, viewH;

function resizeCanvas() {
  const container = document.getElementById("game-world");
  viewW = container.clientWidth;
  viewH = container.clientHeight;
  canvas.width = viewW;
  canvas.height = viewH;
  ctx.imageSmoothingEnabled = false;
}

const player = {
  col: 17, row: 8,
  x: 17 * TILE_SIZE, y: 8 * TILE_SIZE,
  dir: "down", walking: false, speed: 2.5,
};

const camera = { x: 0, y: 0 };

function updateCamera() {
  camera.x = player.x + TILE_SIZE / 2 - viewW / 2;
  camera.y = player.y + TILE_SIZE / 2 - viewH / 2;
  camera.x = Math.max(0, Math.min(MAP_COLS * TILE_SIZE - viewW, camera.x));
  camera.y = Math.max(0, Math.min(MAP_ROWS * TILE_SIZE - viewH, camera.y));
}

const keys = {};
window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
  if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)) e.preventDefault();
});
window.addEventListener("keyup", (e) => { keys[e.key] = false; });

let playerSprites, treeSprite, waterTile, bridgeTile;
const buildingSprites = {};

function initSprites() {
  playerSprites = makePlayerSprites();
  treeSprite = makeTreeSprite();
  waterTile = makeWaterTile();
  bridgeTile = makeBridgeTile();
}

const TILE_COLORS = { 0:"#4a8c5c", 1:"#c4a882", 2:"#6b6b7b", 7:"#3d7a4e", 9:"#d4c4a0" };

const SHOP_STYLES = {
  "baklandet-basket":     { c1:"#c47e28", c2:"#8b5a3c", roof:"#e94560", label:"FRIES" },
  "solsiden-shoestring":  { c1:"#2d7a3a", c2:"#6b4423", roof:"#4ecca3", label:"FRIES" },
  "midtbyen-munch":       { c1:"#e5a84a", c2:"#c47e28", roof:"#f5c542", label:"MUNCH" },
  "ila-iron-skillet":     { c1:"#5c4033", c2:"#3d2b1f", roof:"#8b5a3c", label:"ILA" },
  "lade-long-fries":      { c1:"#7ec8e3", c2:"#0f3460", roof:"#4ecca3", label:"LADE" },
  "moholt-crisp-corner":  { c1:"#e94560", c2:"#7a1522", roof:"#e94560", label:"CRISP" },
  "nedre-elvehavn-nugget":{ c1:"#6b6b7b", c2:"#3d3d4d", roof:"#7ec8e3", label:"NUGGET" },
  "tiller-turbo-fries":   { c1:"#f5c542", c2:"#c47e28", roof:"#e94560", label:"TURBO" },
};

function getShopSprite(id) {
  if (!buildingSprites[id]) {
    const s = SHOP_STYLES[id] || SHOP_STYLES["baklandet-basket"];
    buildingSprites[id] = makeBuildingSprite(s.c1, s.c2, s.roof, s.label);
  }
  return buildingSprites[id];
}

function drawTile(col, row) {
  const type = getTile(col, row);
  const sx = col * TILE_SIZE - camera.x;
  const sy = row * TILE_SIZE - camera.y;
  if (sx > viewW || sy > viewH || sx + TILE_SIZE < 0 || sy + TILE_SIZE < 0) return;

  switch (type) {
    case 6: ctx.drawImage(waterTile, sx, sy, TILE_SIZE, TILE_SIZE); break;
    case 8: ctx.drawImage(bridgeTile, sx, sy, TILE_SIZE, TILE_SIZE); break;
    case 5:
      ctx.fillStyle = TILE_COLORS[7];
      ctx.fillRect(sx, sy, TILE_SIZE, TILE_SIZE);
      ctx.drawImage(treeSprite, sx, sy, TILE_SIZE, TILE_SIZE);
      break;
    case 3: {
      ctx.fillStyle = TILE_COLORS[7];
      ctx.fillRect(sx, sy, TILE_SIZE, TILE_SIZE);
      const shop = getShopAt(col, row);
      if (shop) {
        const sprite = getShopSprite(shop.id);
        ctx.drawImage(sprite, sx - 16, sy - 32, 64, 64);
      }
      break;
    }
    case 4:
      ctx.fillStyle = "#3d3d5c";
      ctx.fillRect(sx, sy, TILE_SIZE, TILE_SIZE);
      ctx.fillStyle = "#2d2d4c";
      ctx.fillRect(sx + 2, sy + 2, TILE_SIZE - 4, TILE_SIZE - 4);
      ctx.fillStyle = "#7ec8e3";
      ctx.fillRect(sx + 8, sy + 8, 6, 6);
      ctx.fillRect(sx + 18, sy + 8, 6, 6);
      break;
    case 2:
      ctx.fillStyle = TILE_COLORS[2];
      ctx.fillRect(sx, sy, TILE_SIZE, TILE_SIZE);
      ctx.fillStyle = "#585868";
      ctx.fillRect(sx, sy + 15, TILE_SIZE, 2);
      break;
    default:
      ctx.fillStyle = TILE_COLORS[type] || TILE_COLORS[7];
      ctx.fillRect(sx, sy, TILE_SIZE, TILE_SIZE);
  }
}

function drawShopLabels() {
  ctx.font = "bold 8px 'Press Start 2P', monospace";
  ctx.textAlign = "center";
  SHOP_LOCATIONS.forEach((shop) => {
    const entry = OFFICIAL_RANKINGS.find((e) => e.id === shop.id);
    if (!entry) return;
    const sx = shop.col * TILE_SIZE - camera.x + TILE_SIZE / 2;
    const sy = shop.row * TILE_SIZE - camera.y - 38;
    if (sx < -100 || sx > viewW + 100 || sy < -50 || sy > viewH + 50) return;
    const name = entry.name;
    const tw = ctx.measureText(name).width + 8;
    ctx.fillStyle = "rgba(10,10,20,0.85)";
    ctx.fillRect(sx - tw / 2, sy - 8, tw, 14);
    ctx.strokeStyle = "#f5c542";
    ctx.lineWidth = 1;
    ctx.strokeRect(sx - tw / 2, sy - 8, tw, 14);
    ctx.fillStyle = "#f5c542";
    ctx.fillText(name, sx, sy + 3);
  });
}

function drawPlayer() {
  let frame = player.dir;
  if (player.walking) {
    const t = Math.floor(Date.now() / 200) % 2;
    if (player.dir === "down") frame = t === 0 ? "down_walk1" : "down_walk2";
  }
  const sprite = playerSprites[frame] || playerSprites["down"];
  ctx.drawImage(sprite, player.x - camera.x, player.y - camera.y, TILE_SIZE, TILE_SIZE);
}

function findNearbyShop(col, row) {
  let closest = null, closestDist = Infinity;
  const px = player.x, py = player.y;
  for (const shop of SHOP_LOCATIONS) {
    const sx = shop.col * TILE_SIZE, sy = shop.row * TILE_SIZE;
    const dx = Math.abs(px - sx), dy = Math.abs(py - sy);
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < TILE_SIZE * 2.5 && dist < closestDist) {
      closest = shop;
      closestDist = dist;
    }
  }
  return closest;
}

function drawInteractionPrompt() {
  const shop = findNearbyShop(player.col, player.row);
  if (!shop) return;
  const py = player.y - camera.y - 12;
  const px = player.x - camera.x + TILE_SIZE / 2;
  ctx.font = "bold 7px 'Press Start 2P', monospace";
  ctx.textAlign = "center";
  const txt = getLanguage() === "no" ? "[ENTER] Gå inn" : "[ENTER] Enter";
  const tw = ctx.measureText(txt).width + 8;
  ctx.fillStyle = "rgba(15,52,96,0.92)";
  ctx.fillRect(px - tw / 2, py - 8, tw, 14);
  ctx.strokeStyle = "#4ecca3";
  ctx.lineWidth = 1;
  ctx.strokeRect(px - tw / 2, py - 8, tw, 14);
  ctx.fillStyle = "#4ecca3";
  ctx.fillText(txt, px, py + 3);
}

function drawHUD() {
  ctx.fillStyle = "rgba(10,10,20,0.6)";
  ctx.fillRect(8, 8, 140, 18);
  ctx.font = "7px 'Press Start 2P', monospace";
  ctx.textAlign = "left";
  ctx.fillStyle = "#a8a8b8";
  ctx.fillText("↑↓←→ WALK   ENTER=ENTER SHOP", 12, 20);
}

let interactionCooldown = 0;
let gamePaused = false;

function update() {
  if (gamePaused) return;
  let dx = 0, dy = 0;
  if (keys["ArrowUp"] || keys["w"]) { dy = -1; player.dir = "up"; }
  else if (keys["ArrowDown"] || keys["s"]) { dy = 1; player.dir = "down"; }
  else if (keys["ArrowLeft"] || keys["a"]) { dx = -1; player.dir = "left"; }
  else if (keys["ArrowRight"] || keys["d"]) { dx = 1; player.dir = "right"; }
  player.walking = dx !== 0 || dy !== 0;
  if (player.walking) {
    const nx = player.x + dx * player.speed;
    const ny = player.y + dy * player.speed;
    const newCol = Math.round(nx / TILE_SIZE);
    const newRow = Math.round(ny / TILE_SIZE);
    if (isWalkable(newCol, newRow)) {
      player.x = nx; player.y = ny;
      player.col = newCol; player.row = newRow;
    }
  }
  if (interactionCooldown > 0) interactionCooldown--;
  if ((keys["Enter"] || keys[" "]) && interactionCooldown === 0) {
    interactionCooldown = 20;
    let shop = findNearbyShop(player.col, player.row);
    if (shop) openShopReview(shop.id);
  }
  updateCamera();
}

function render() {
  ctx.clearRect(0, 0, viewW, viewH);
  const startCol = Math.max(0, Math.floor(camera.x / TILE_SIZE) - 1);
  const startRow = Math.max(0, Math.floor(camera.y / TILE_SIZE) - 1);
  const endCol = Math.min(MAP_COLS, startCol + Math.ceil(viewW / TILE_SIZE) + 3);
  const endRow = Math.min(MAP_ROWS, startRow + Math.ceil(viewH / TILE_SIZE) + 3);
  for (let row = startRow; row < endRow; row++) {
    for (let col = startCol; col < endCol; col++) { drawTile(col, row); }
  }
  drawShopLabels();
  drawPlayer();
  drawInteractionPrompt();
  drawHUD();
}

function gameLoop() { update(); render(); requestAnimationFrame(gameLoop); }

function openShopReview(id) {
  gamePaused = true;
  showReview(id);
}

function closeShopReview() {
  gamePaused = false;
  document.getElementById("review-overlay").classList.remove("is-open");
}

function startGame() {
  resizeCanvas();
  initSprites();
  updateCamera();
  gameLoop();
}

window.addEventListener("resize", resizeCanvas);
