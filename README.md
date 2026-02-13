# Jo Ann Walczak — Personal Website

A modern, static one-page site for author Jo Ann Walczak. Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Readers can learn about Jo Ann, browse books, visit the blog, and connect on social media.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). To build for production:

```bash
npm run build
npm run preview
```

## Where to change content

- **Bio** — [`src/components/About.astro`](src/components/About.astro).
- **Books** — [`src/components/Books.astro`](src/components/Books.astro). Add or edit entries; set `coverUrl` to an image in `public/` (e.g. `/walk-on-layton-cover.jpg`) to replace the placeholder cover.
- **Blog** — [`src/components/Blog.astro`](src/components/Blog.astro) (`blogUrl`).
- **Connect** — [`src/components/Connect.astro`](src/components/Connect.astro) (`socialLinks`).

## Deploy

The site is static. Build with `npm run build` and deploy the `dist/` folder to any static host (e.g. [Netlify](https://netlify.com), [Vercel](https://vercel.com), or [GitHub Pages](https://pages.github.com)).
