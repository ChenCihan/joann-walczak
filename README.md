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
- **Books** — [`src/components/Books.astro`](src/components/Books.astro). Add or edit entries; set `coverUrl` to an image in `public/` (e.g. `/walk-on-layton-cover.jpg`) if you prefer a local book cover.
- **Blog** — [`src/components/Blog.astro`](src/components/Blog.astro) (`blogUrl`).
- **Connect** — [`src/components/Connect.astro`](src/components/Connect.astro) (`socialLinks`).

## Images

- **Book cover** — Uses Amazon’s cover image; if it doesn’t load (e.g. hotlink block), the site falls back to `public/placeholder-book.svg`. To use your own file, set `coverUrl` in `Books.astro` to e.g. `/walk-on-layton-cover.jpg` and add that file to `public/`.
- **Author photo** — The About section uses a photo from The Times-Tribune (Jan 2025). To use your own image, set `authorPhotoUrl` in `About.astro` to a path in `public/` (e.g. `/joann-walczak.jpg`) and add the file.

## Deploy

The site is static. Build with `npm run build` and deploy the `dist/` folder to any static host (e.g. [Netlify](https://netlify.com), [Vercel](https://vercel.com), or [GitHub Pages](https://pages.github.com)).
