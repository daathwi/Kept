# Kept

Static marketing site for **Kept** , websites for businesses that care.

Built with Next.js App Router as a true static export (`output: "export"`).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Static build

```bash
npm run build
```

Output lands in `out/` , deploy that folder to any static host (S3, Netlify, GitHub Pages, Cloudflare Pages).

```bash
npm start   # serves ./out locally
```

## Project structure

| Path | Purpose |
|------|---------|
| `content/` | Copy, media URLs, seat counts , not in components |
| `components/` | Server Components composing sections |
| `app/` | Routes, layout, metadata, global CSS |
| `next.config.ts` | `output: "export"`, image remote patterns |

## Before go-live

1. Set your WhatsApp number in `content/site.ts`
2. Set `site.url` to your real domain
3. Replace Picsum gallery / portrait URLs with your photography
4. Update seat counts in `content/site.ts` as clients fill

## Practices used

- Static generation by default (no `force-dynamic`)
- Content layer outside components
- Server Components everywhere except `app/error.tsx` (required for reset)
- `next/image` for all images
- `next/font` for Fraunces + IBM Plex
- Segment `loading.tsx` / `error.tsx` conventions
- SEO metadata via `generateMetadata` / route `metadata`
