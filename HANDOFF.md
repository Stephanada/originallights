# Original Lights Handoff

## Current State

- Date: 2026-06-28
- Repository: https://github.com/Stephanada/originallights.git
- Branch: `main`
- Current pushed commit: `576c911`
- Latest local milestone snapshot: `milestones/site-milestone-20260628-201452`

## Infrastructure

- GitHub repository initialized and live on `main`.
- Cloudflare proxy and custom domain `originallightsproductions.com` configured.
- Google Workspace MX, SPF, and DMARC DNS records configured via Cloudflare.
- `.gitignore` in place for `.DS_Store` and `.venv/`.

## Pages

### `index.html` — Home
- Campaign-style Saint Evans landing page.
- Cinematic Editorial Minimal layout: poster hero, awards ticker, media links, full footer.
- Interactions: scroll reveal, title word reveal, poster parallax, grain overlay, award auto-scroll ticker, link wipe underlines, nav cursor dot, pulsing kicker.
- Hero image served as WebP (`SaintEvans-poster-comingsoon-1.webp`, 137 KB) with PNG fallback.

### `film.html` — Film
- Poster hero with awards section (rendered from `credits-data.js`), film gallery, credits block, full footer.
- Matches homepage design system.

### `music.html` — Music Videos
- Hero with music video still, channel/links section, gallery, credits block, full footer.
- Clarified as video direction work, not music production services.

## Shared Data

- `credits-data.js` — `window.OLP_AWARDS` and `window.OLP_CREDITS`
- `credits-render.js` — `window.renderOlpCredits(targetId, options)`

## Notable Assets

- `SaintEvans-poster-comingsoon-1.webp` — compressed hero (137 KB)
- `SaintEvans-poster-comingsoon-1.png` — original fallback (2.3 MB)
- `OL-flat-logo-grey.svg` — site logo/favicon
- `OriginalLights-logo.png` — Apple touch icon
- `IMDB Images/` — gallery images for film and music video sections

## Design System

- Fonts: Cormorant Garamond (display/headings) + Space Grotesk (UI/body)
- Background: near-black `#06070a` with subtle warm/cool radial gradients
- Accent: `#d6a15f` warm gold
- Muted: `#9ba8be`
- Sections separated by `1px` border lines, no rounded card stacks

## Rollback / Recovery

| Snapshot | State |
|---|---|
| `milestones/site-milestone-20260628-174603` | Pre-redesign bento layout |
| `milestones/site-milestone-20260628-180646` | First editorial redesign |
| `milestones/site-milestone-20260628-201452` | Current — cinematic minimal + footer + animations |

To recover: copy files from the desired milestone folder back to the workspace root.

## Recommended Next Steps

1. Compress gallery images in `IMDB Images/` to WebP (currently JPEGs, unoptimised).
2. Add a contact form or booking link if production inquiries need a structured intake.
3. Add Google Analytics or Cloudflare Web Analytics for traffic visibility.
4. Consider a dedicated Saint Evans press/EPK page as the feature gets closer to release.

## Notes For Resuming Work

- Content data is in `credits-data.js` — edit there to update credits and awards site-wide.
- Milestone snapshots are local only; they are committed to git but are not deployed assets.
- Cloudflare caches aggressively; purge the cache after any content change that needs to appear immediately.