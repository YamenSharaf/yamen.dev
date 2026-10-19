# yamen.dev

This repository holds my personal website and blog. It's nothing fancy, just a place to document things I find useful as a future reference for myself, but some content may be useful to others.

## Tech Stack

- [Astro](https://astro.build/) 7, fully static, no UI framework
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Pagefind](https://pagefind.app/) for search
- [Giscus](https://giscus.app/) for comments, linked to the discussions of this repo
- [Umami](https://umami.is/) for privacy-friendly analytics
- Template based on [AstroPaper](https://github.com/satnaing/astro-paper)
- Hosted on GitHub Pages and deployed using GitHub Actions; every branch also gets a Cloudflare Pages preview

## Writing

Posts are Markdown files in `src/content/posts/`. Callouts use GitHub's alert syntax (`> [!WARNING]`), and a `## Table of contents` heading generates a collapsible ToC.

## Development

Requires Node.js 24 (see `.node-version`).

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # type check, build, and index search
```
