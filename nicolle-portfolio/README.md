# Nicolle — Virtual Assistant Portfolio

A premium dark-luxury portfolio website built with TanStack Start, React 19, Vite 7, and Tailwind CSS v4.

## Run locally (VS Code)

```bash
# Install dependencies (use bun — fastest)
bun install
# OR with npm
npm install

# Start the dev server
bun run dev
# OR
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
bun run build
bun run start   # preview the production build
```

## Deploy to Netlify

This project ships with a `netlify.toml` already configured.

1. Push the project to a GitHub/GitLab repo.
2. In Netlify, click **Add new site → Import an existing project**.
3. Pick the repo. Netlify will read `netlify.toml` automatically.
4. Click **Deploy**.

Alternatively, drag-and-drop the `dist/` folder into Netlify after running `bun run build`.

## Project structure

- `src/routes/` — file-based routes (TanStack Router)
- `src/components/` — UI components (Nav, PreviewProvider, VideoCard, etc.)
- `src/data/portfolio.ts` — portfolio content (experience, services, tools, videos, certificates)
- `src/styles.css` — design tokens & Tailwind theme
- `public/videos/` — portfolio reels
- `public/portfolio/` — preview images
- `public/documents/` — resume PDF
- `src/assets/` — bundled images (profile, hero)

## Updating content

Edit `src/data/portfolio.ts` to add/remove experience entries, tools, videos, sheets, certificates.
