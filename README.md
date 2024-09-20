# yamen.dev

This repository holds my personal website and blog. It's nothing fancy, just a place to document things I find useful as a future reference for myself, but some content may be useful to others.

## Tech Stack
- [Astro](https://astro.build/)
- TypeScript
- React
- [TinaCMS](https://tina.io/)
- [Giscus](https://giscus.app/)
- Hosted on Github Pages and deployed using Github Actions
- Template provided by [AstroPaper](https://github.com/satnaing/astro-paper)

The website is completely static. Posts are written in Markdown, comments are linked to the discussions of this repo.
TinaCMS has a cloud integration but only pushes Markdown files to this repo on my behalf, and it's the only component that requires setting up [environment variables](https://github.com/YamenSharaf/yamen.dev/blob/main/.env.example).
