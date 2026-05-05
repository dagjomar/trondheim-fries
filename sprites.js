/**
 * Pixel art sprite generator.
 * Draws sprites to offscreen canvases so we can blit them fast.
 */

function createCanvas(w, h) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  return c;
}

function drawPixels(ctx, data, size, ox, oy) {
  data.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      const c = row[x];
      if (c === ".") continue;
      ctx.fillStyle = c;
      ctx.fillRect(ox + x * size, oy + y * size, size, size);
    }
  });
}

function makePlayerSprites() {
  const P = "#2c1810";
  const S = "#f5c542";
  const H = "#8b5a3c";
  const F = "#f0c4a0";
  const B = "#1a1a2e";
  const T = "#e94560";
  const _ = ".";

  const frames = {
    down: [
      [_,_,_,_,_,H,H,H,H,H,_,_,_,_,_,_],
      [_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_],
      [_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_],
      [_,_,_,F,F,F,F,F,F,F,F,F,_,_,_,_],
      [_,_,_,F,P,F,F,F,F,P,F,F,_,_,_,_],
      [_,_,_,F,F,F,F,F,F,F,F,F,_,_,_,_],
      [_,_,_,F,F,F,P,P,F,F,F,F,_,_,_,_],
      [_,_,_,_,S,S,S,S,S,S,S,_,_,_,_,_],
      [_,_,_,S,S,S,S,S,S,S,S,S,_,_,_,_],
      [_,_,_,S,S,S,S,S,S,S,S,S,_,_,_,_],
      [_,_,_,S,S,S,S,S,S,S,S,S,_,_,_,_],
      [_,_,_,_,T,T,T,_,T,T,T,_,_,_,_,_],
      [_,_,_,_,T,T,T,_,T,T,T,_,_,_,_,_],
      [_,_,_,_,T,T,T,_,T,T,T,_,_,_,_,_],
      [_,_,_,_,B,B,B,_,B,B,B,_,_,_,_,_],
      [_,_,_,_,B,B,B,_,B,B,B,_,_,_,_,_],
    ],
    up: [
      [_,_,_,_,_,H,H,H,H,H,_,_,_,_,_,_],
      [_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_],
      [_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_],
      [_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_],
      [_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_],
      [_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_],
      [_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_],
      [_,_,_,_,S,S,S,S,S,S,S,_,_,_,_,_],
      [_,_,_,S,S,S,S,S,S,S,S,S,_,_,_,_],
      [_,_,_,S,S,S,S,S,S,S,S,S,_,_,_,_],
      [_,_,_,S,S,S,S,S,S,S,S,S,_,_,_,_],
      [_,_,_,_,T,T,T,_,T,T,T,_,_,_,_,_],
      [_,_,_,_,T,T,T,_,T,T,T,_,_,_,_,_],
      [_,_,_,_,T,T,T,_,T,T,T,_,_,_,_,_],
      [_,_,_,_,B,B,B,_,B,B,B,_,_,_,_,_],
      [_,_,_,_,B,B,B,_,B,B,B,_,_,_,_,_],
    ],
    left: [
      [_,_,_,_,H,H,H,H,H,_,_,_,_,_,_,_],
      [_,_,_,H,H,H,H,H,H,_,_,_,_,_,_,_],
      [_,_,_,H,H,H,H,H,H,_,_,_,_,_,_,_],
      [_,_,F,F,F,F,F,F,_,_,_,_,_,_,_,_],
      [_,_,F,P,F,F,F,F,_,_,_,_,_,_,_,_],
      [_,_,F,F,F,F,F,F,_,_,_,_,_,_,_,_],
      [_,_,F,F,P,P,F,_,_,_,_,_,_,_,_,_],
      [_,_,_,S,S,S,S,S,_,_,_,_,_,_,_,_],
      [_,_,S,S,S,S,S,S,_,_,_,_,_,_,_,_],
      [_,_,S,S,S,S,S,S,_,_,_,_,_,_,_,_],
      [_,_,S,S,S,S,S,S,_,_,_,_,_,_,_,_],
      [_,_,_,T,T,T,T,_,_,_,_,_,_,_,_,_],
      [_,_,_,T,T,T,T,_,_,_,_,_,_,_,_,_],
      [_,_,_,T,T,T,T,_,_,_,_,_,_,_,_,_],
      [_,_,_,B,B,B,B,_,_,_,_,_,_,_,_,_],
      [_,_,_,B,B,B,B,_,_,_,_,_,_,_,_,_],
    ],
    right: [
      [_,_,_,_,_,_,_,H,H,H,H,H,_,_,_,_],
      [_,_,_,_,_,_,_,H,H,H,H,H,H,_,_,_],
      [_,_,_,_,_,_,_,H,H,H,H,H,H,_,_,_],
      [_,_,_,_,_,_,_,_,F,F,F,F,F,F,_,_],
      [_,_,_,_,_,_,_,_,F,F,F,F,P,F,_,_],
      [_,_,_,_,_,_,_,_,F,F,F,F,F,F,_,_],
      [_,_,_,_,_,_,_,_,_,F,P,P,F,F,_,_],
      [_,_,_,_,_,_,_,S,S,S,S,S,_,_,_,_],
      [_,_,_,_,_,_,_,S,S,S,S,S,S,_,_,_],
      [_,_,_,_,_,_,_,S,S,S,S,S,S,_,_,_],
      [_,_,_,_,_,_,_,S,S,S,S,S,S,_,_,_],
      [_,_,_,_,_,_,_,_,T,T,T,T,_,_,_,_],
      [_,_,_,_,_,_,_,_,T,T,T,T,_,_,_,_],
      [_,_,_,_,_,_,_,_,T,T,T,T,_,_,_,_],
      [_,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_],
      [_,_,_,_,_,_,_,_,B,B,B,B,_,_,_,_],
    ],
    down_walk1: [
      [_,_,_,_,_,H,H,H,H,H,_,_,_,_,_,_],
      [_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_],
      [_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_],
      [_,_,_,F,F,F,F,F,F,F,F,F,_,_,_,_],
      [_,_,_,F,P,F,F,F,F,P,F,F,_,_,_,_],
      [_,_,_,F,F,F,F,F,F,F,F,F,_,_,_,_],
      [_,_,_,F,F,F,P,P,F,F,F,F,_,_,_,_],
      [_,_,_,_,S,S,S,S,S,S,S,_,_,_,_,_],
      [_,_,_,S,S,S,S,S,S,S,S,S,_,_,_,_],
      [_,_,_,S,S,S,S,S,S,S,S,S,_,_,_,_],
      [_,_,_,S,S,S,S,S,S,S,S,S,_,_,_,_],
      [_,_,_,_,T,T,T,T,T,T,_,_,_,_,_,_],
      [_,_,_,T,T,T,_,_,_,T,T,_,_,_,_,_],
      [_,_,T,T,_,_,_,_,_,_,T,T,_,_,_,_],
      [_,_,B,B,_,_,_,_,_,_,B,B,_,_,_,_],
      [_,B,B,_,_,_,_,_,_,_,_,B,B,_,_,_],
    ],
    down_walk2: [
      [_,_,_,_,_,H,H,H,H,H,_,_,_,_,_,_],
      [_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_],
      [_,_,_,_,H,H,H,H,H,H,H,_,_,_,_,_],
      [_,_,_,F,F,F,F,F,F,F,F,F,_,_,_,_],
      [_,_,_,F,P,F,F,F,F,P,F,F,_,_,_,_],
      [_,_,_,F,F,F,F,F,F,F,F,F,_,_,_,_],
      [_,_,_,F,F,F,P,P,F,F,F,F,_,_,_,_],
      [_,_,_,_,S,S,S,S,S,S,S,_,_,_,_,_],
      [_,_,_,S,S,S,S,S,S,S,S,S,_,_,_,_],
      [_,_,_,S,S,S,S,S,S,S,S,S,_,_,_,_],
      [_,_,_,S,S,S,S,S,S,S,S,S,_,_,_,_],
      [_,_,_,_,_,T,T,T,T,T,T,_,_,_,_,_],
      [_,_,_,_,T,T,_,_,_,T,T,T,_,_,_,_],
      [_,_,_,T,T,_,_,_,_,_,_,T,T,_,_,_],
      [_,_,_,B,B,_,_,_,_,_,_,B,B,_,_,_],
      [_,_,B,B,_,_,_,_,_,_,_,_,B,B,_,_],
    ],
  };

  const sprites = {};
  const px = 2;
  for (const [name, data] of Object.entries(frames)) {
    const c = createCanvas(16 * px, 16 * px);
    const cCtx = c.getContext("2d");
    drawPixels(cCtx, data, px, 0, 0);
    sprites[name] = c;
  }
  return sprites;
}

function makeBuildingSprite(color1, color2, roofColor, label) {
  const W = 64, H = 64;
  const c = createCanvas(W, H);
  const cCtx = c.getContext("2d");
  cCtx.fillStyle = roofColor;
  cCtx.fillRect(0, 0, W, 20);
  cCtx.fillStyle = color1;
  cCtx.fillRect(2, 20, W - 4, H - 22);
  cCtx.fillStyle = "#7ec8e3";
  cCtx.fillRect(8, 28, 16, 12);
  cCtx.fillRect(W - 24, 28, 16, 12);
  cCtx.fillStyle = "rgba(255,255,255,0.3)";
  cCtx.fillRect(8, 28, 8, 6);
  cCtx.fillRect(W - 24, 28, 8, 6);
  cCtx.fillStyle = color2;
  cCtx.fillRect(W / 2 - 7, 36, 14, H - 38);
  cCtx.fillStyle = "#f5c542";
  cCtx.fillRect(W / 2 + 3, 48, 2, 2);
  cCtx.strokeStyle = "#0a0a14";
  cCtx.lineWidth = 2;
  cCtx.strokeRect(1, 1, W - 2, H - 2);
  if (label) {
    cCtx.fillStyle = "#0a0a14";
    cCtx.fillRect(W / 2 - 22, 4, 44, 12);
    cCtx.fillStyle = "#f5c542";
    cCtx.font = "bold 8px monospace";
    cCtx.textAlign = "center";
    cCtx.fillText(label, W / 2, 13);
  }
  return c;
}

function makeTreeSprite() {
  const c = createCanvas(32, 32);
  const cCtx = c.getContext("2d");
  cCtx.fillStyle = "#6b4423";
  cCtx.fillRect(13, 20, 6, 12);
  cCtx.fillStyle = "#2d7a3a";
  cCtx.beginPath(); cCtx.arc(16, 14, 12, 0, Math.PI * 2); cCtx.fill();
  cCtx.fillStyle = "#3a9e4f";
  cCtx.beginPath(); cCtx.arc(16, 12, 9, 0, Math.PI * 2); cCtx.fill();
  cCtx.fillStyle = "#4ecca3";
  cCtx.beginPath(); cCtx.arc(16, 10, 5, 0, Math.PI * 2); cCtx.fill();
  return c;
}

function makeWaterTile() {
  const c = createCanvas(32, 32);
  const cCtx = c.getContext("2d");
  cCtx.fillStyle = "#1a3a5c";
  cCtx.fillRect(0, 0, 32, 32);
  cCtx.fillStyle = "#1e4570";
  for (let i = 0; i < 4; i++) {
    cCtx.fillRect(((i * 11 + 3) % 28), i * 8 + 2, 8, 2);
  }
  return c;
}

function makeBridgeTile() {
  const c = createCanvas(32, 32);
  const cCtx = c.getContext("2d");
  cCtx.fillStyle = "#1a3a5c";
  cCtx.fillRect(0, 0, 32, 32);
  cCtx.fillStyle = "#8b6914";
  cCtx.fillRect(4, 0, 24, 32);
  cCtx.fillStyle = "#a07818";
  for (let y = 0; y < 32; y += 8) { cCtx.fillRect(4, y, 24, 4); }
  cCtx.fillStyle = "#6b4423";
  cCtx.fillRect(4, 0, 3, 32);
  cCtx.fillRect(25, 0, 3, 32);
  return c;
}
