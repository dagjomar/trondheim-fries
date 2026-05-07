# Trondheim Fries

Public-facing site for **TRONDHEIM FRIES**: leaderboard-style presentation of the best fries in Trondheim, built with [Astro](https://astro.build/) and deployed to Cloudflare Workers (`wrangler.json`).

## Requirements

- Node.js 22+

## Commands

```bash
yarn install
yarn dev          # local dev server
yarn build        # production build to dist/
yarn deploy       # build + wrangler deploy
```

Blog posts live under `src/content/blog/` as Markdown or MDX (optional; the collection can be empty).
