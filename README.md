# andreicraciunoiu.com

Personal site of Andrei Craciunoiu. Next.js 16 (App Router, Cache Components) and Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things live

- `src/config/site.ts`: all hand-written copy (intro links, apps, numbers, posts, story, testimonials).
- `src/components/sections/`: one component per card on the page.
- `src/lib/`: live data, cached for an hour:
  - `appstore.ts`: App Store ratings and icons (iTunes Lookup API).
  - `letterboxd.ts`: latest films from the Letterboxd RSS feed.
  - `literal.ts`: current reads from Literal's GraphQL API.

No API keys or environment variables are needed.
