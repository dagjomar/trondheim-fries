# Trondheim Fries

Official-style rankings of French fries in Trondheim: static site with map and list.

## Preview

From the repo root:

```bash
python3 -m http.server 8080
```

Open http://localhost:8080 — a local server avoids browser restrictions on loading Leaflet from `file://` in some setups.

## Edit rankings

Change the `OFFICIAL_RANKINGS` array in `main.js` (name, area, blurb, `lat`, `lng`, `rank`).