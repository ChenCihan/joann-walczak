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

- **Bio** — Edit the `bio` string in [`src/components/About.astro`](src/components/About.astro).
- **Books** — Edit the `books` array in [`src/components/Books.astro`](src/components/Books.astro). Replace placeholder titles, descriptions, `coverUrl` (use images in `public/` or full URLs), and `linkUrl` for each book.
- **Blog** — Set the real blog URL in the `blogUrl` constant in [`src/components/Blog.astro`](src/components/Blog.astro).
- **Social / Connect** — Update the `socialLinks` array in [`src/components/Connect.astro`](src/components/Connect.astro) with real labels and URLs (Twitter/X, Instagram, Goodreads, newsletter, etc.).

Placeholder book cover images use `public/placeholder-book.svg`. Replace with real cover art in `public/` and point `coverUrl` to them (e.g. `/my-book-cover.jpg`).

## Deploy

The site is static. Build with `npm run build` and deploy the `dist/` folder to any static host (e.g. [Netlify](https://netlify.com), [Vercel](https://vercel.com), or [GitHub Pages](https://pages.github.com)).
