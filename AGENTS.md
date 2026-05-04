# Trondheim Fries

Static website ranking French fry spots in Trondheim, Norway. Vanilla HTML/CSS/JS with Leaflet.js map — no build step, no package manager, no framework.

## Cursor Cloud specific instructions

### Running the dev server

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`. A local HTTP server is required because Leaflet.js won't load correctly via `file://` protocol.

### Project structure

- `index.html` — page shell, CDN links (Leaflet, Google Fonts)
- `main.js` — rankings data (`OFFICIAL_RANKINGS` array) and map/list interactivity
- `styles.css` — all styling (no preprocessor)

### Key notes

- **No dependencies to install.** There is no `package.json`, no `node_modules`, no build toolchain.
- **No linter or test framework configured.** The project has no automated tests or lint scripts.
- **All external resources load from CDNs** (unpkg for Leaflet, Google Fonts, OpenStreetMap tiles). Outbound internet is required.
- **Data lives in `main.js`.** Edit the `OFFICIAL_RANKINGS` array to change rankings.
- The main branch may only contain a README; the site code lives on feature branches. Check `git branch -a` to find the active development branch.
