# Project Recovery Notes

## Startup Identity

- Startup name: CloudCastle
- Project folder: /Users/joshuadavis/startups/cloudcastle
- Domain: TBD, manual Vercel deploy
- One-line description: Premium automated retail infrastructure and operator command layer for controlled venue machine networks.
- Category: automated retail infrastructure / operator dashboard / venture landing page
- Stage: recovery to demo-ready MVP

## Product Vision

- Target user: venue operators, hospitality groups, machine-network operators, investors
- Core problem: machine networks are fragmented, visually underpowered, and hard to present as scalable infrastructure
- Core solution: premium CloudCastle website plus operator dashboard foundation for venues, machines, revenue, uptime, and rollout logic
- Differentiation: premium venture-grade positioning plus operational command layer, not generic vending
- MVP goal: production-ready multi-page Next.js site with dashboard shell and durable Autobuilder memory
- Long-term vision: operator-grade infrastructure platform for managing machine networks across venues and regions

## Website/App Structure

- Main routes: /, /dashboard, /network, /operators, /launch
- Key components: NavBar, Footer, MetricCard, SectionHeader, premium UI components
- Data/content files: src/data/mock.ts
- API routes: /api/checkout (placeholder), /api/venues, /api/machines (Supabase-backed when configured)
- Auth/database needs: optional later; Supabase only if needed and already safe

## Design Direction

- Visual style: dark cinematic, premium glass, glowing gradients, Noaerth/Oddbotix-inspired, venture-grade
- Tone: confident, infrastructure-focused, investor-ready
- Layout principles: strong hero, polished cards, clear sections, responsive, clean hierarchy
- Brand notes: CloudCastle should feel like a controlled command layer and premium infrastructure company

## What Was Preserved

- Routes: `/`, `/dashboard`, `/network`, `/operators`, `/launch`
- Components: NavBar, Footer, MetricCard, SectionHeader, premium folder (PremiumHero, HeroScene, GlassPanel, ArtworkCard, SignalStrip, SystemSurfaceGrid, SurfaceTile, SystemShowcaseCard, GlowOrb, StatsBand)
- Assets: `public/art/*.svg` dashboard, hero, launch, network artwork
- Technical stack: Next.js 16 App Router, TypeScript, Tailwind v4, pnpm, Supabase client stubs in lib
- CloudCastle branding and infrastructure positioning throughout

## What Was Fixed

- **Critical routing:** A root-level `app/api/checkout` directory caused Next.js to treat `app/` as the App Router root, which meant **all pages under `src/app` were ignored** at build time. The checkout route was moved to `src/app/api/checkout/route.ts` and the root `app/` directory removed so every intended route compiles.
- **Homepage:** Rebuilt to use PremiumHero, SignalStrip, metric cards, surface architecture (SystemSurfaceGrid), system showcase (SystemShowcaseCard), portfolio/network block, and growth flywheel inside glass panels.
- **Public copy:** Removed third-party style name-drops from user-visible marketing strings where inappropriate; kept design direction in internal recovery docs only.
- **package.json:** Renamed package from legacy name to `cloudcastle`.
- **`.gitignore`:** Replaced blanket `.env*` (which ignored `.env.example`) with explicit `.env`, `.env.local`, `.env.*.local`; consolidated ignores per recovery checklist.
- **Metadata:** Extended `src/app/layout.tsx` with Open Graph, Twitter card fields, keywords, robots; optional `NEXT_PUBLIC_SITE_URL` for absolute OG URLs.

## What Was Removed

- Root `app/` tree after relocating checkout API (no other source removed)
- Duplicate/conflicting App Router root (implicit cleanup)

## Current Build Status

- pnpm install: pass (lockfile consistent; reinstall after cleanup removes `node_modules`)
- pnpm lint: pass (`eslint . --ext .ts,.tsx`)
- pnpm typecheck: pass (`tsc --noEmit`)
- pnpm build: pass — routes `/`, `/dashboard`, `/network`, `/operators`, `/launch`, `/api/checkout`, `/api/venues`, `/api/machines`
- Vercel readiness: manual deploy only; set `NEXT_PUBLIC_SITE_URL` before production for best social previews

## Disk Cleanup (2026-05-10)

- Approximate project size before cleanup: **464M** (mostly `node_modules`, then `.next`)
- Approximate size after cleanup: **2.3M** (source, lockfile, git, config, `.vercel` metadata)
- Removed: `node_modules`, `.next`, `.turbo`, `.vercel/cache`, caches, debug logs, duplicate lockfiles if present
- Preserved: all `src/`, `public/`, `pnpm-lock.yaml`, `.env.example`, `.env.local`, recovery and Autobuilder files

## Manual Deploy Command

```bash
cd /Users/joshuadavis/startups/cloudcastle
pnpm install
pnpm build
vercel --prod
```

## Return-Later Commands

```bash
cd /Users/joshuadavis/startups/cloudcastle
pnpm install
pnpm build
```

## Next Best Tasks

1. Wire real venue/machine data only after product surface is stable.
2. Add protected operator auth only when needed.
3. Improve conversion copy for venue/operator outreach.
4. Add case-study style demo data.
5. Add SEO/OpenGraph metadata and social preview assets.

## Autobuilder Guardrails

- Do not use npm.
- Preserve CloudCastle infrastructure positioning.
- Improve premium visuals and product clarity.
- Avoid drift toward generic vending/SaaS templates.
- Do not auto-deploy.
