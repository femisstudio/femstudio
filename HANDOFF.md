# FemStudio Project Handoff Document

**Last Updated**: May 6, 2026  
**Project**: FemStudio - Houston-based Photography and Web Design Studio  
**Status**: Rebuilt after accidental deletion. Dependencies installed. Lint and production build pass.

---

## 0. Urgent Takeover Summary

The original project folder was accidentally deleted by Claude with no backup. Codex rebuilt the site from retained project context and local image assets found under `/Users/femi/Desktop/public/images`.

The rebuilt code is present in `/Users/femi/Desktop/femstudio`. Dependencies were installed after network permission was granted, and both lint and production build pass.

Verified commands:

```bash
npm install
npm run lint
npm run build
```

Important: do not read, print, edit, or expose `.env` or `.env.local`.

---

## 1. What This Website Is

FemStudio is a professional photography and web design studio based in Houston, TX, founded by John Adeniran.

Services shown on the site:

- Professional headshots for LinkedIn, corporate profiles, internships, and personal branding
- Editorial and brand photography
- Celebration and milestone photography
- Custom web design for Houston businesses and creatives

Primary business goal:

- Help FemStudio appear credible for people searching for photographers, headshots, brand photography, and web design in Houston.
- Support Google search, image search, and AI answer engines with clean metadata, structured data, semantic HTML, canonical URLs, and descriptive image alt text.

---

## 2. Current Rebuilt Files

Core config:

- `package.json`
- `tsconfig.json`
- `next.config.ts`
- `postcss.config.mjs`
- `eslint.config.mjs`
- `.gitignore`
- `AGENTS.md`
- `CLAUDE.md`
- `REVIEW_CHECKPOINT.md`
- `HANDOFF.md`

App Router:

- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`
- `app/robots.ts`
- `app/sitemap.ts`
- `app/icon.png`
- `app/apple-icon.png`
- `app/about/page.tsx`
- `app/photography/page.tsx`
- `app/web-design/page.tsx`
- `app/contact/page.tsx`
- `app/api/contact/route.ts`

Components:

- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`
- `components/sections/ContactForm.tsx`
- `components/sections/PhotographyContent.tsx`

Image documentation:

- `public/images/README.md`
- `public/images/og/README.md`

Git is initialized locally on branch `main`.

Recent local backup commits include:

- `104d4e7` - `Rebuild FemStudio baseline`
- `59f0aab` - `Verify build and polish design`

---

## 3. Dependency Status

`package.json` currently uses:

- `next`: `16.2.4`
- `react`: `19.2.4`
- `react-dom`: `19.2.4`
- `resend`
- FontAwesome packages
- Tailwind CSS v4 tooling
- ESLint 9
- TypeScript

Dependency command:

```bash
npm install
```

Result:

- Initial attempt failed with `ENOTFOUND registry.npmjs.org` due sandbox network/DNS restrictions.
- Second attempt with network permission succeeded.
- `package-lock.json` was generated.
- `node_modules/` is present locally and ignored by Git.

Verification commands now pass:

```bash
npm run build
npm run lint
```

---

## 4. Next.js Rule

This project has `AGENTS.md` with an important rule:

```md
This is NOT the Next.js you know
This version has breaking changes. Read the relevant guide in node_modules/next/dist/docs/ before writing any code.
```

`node_modules` is currently installed locally, so future agents can read those docs before editing.

---

## 5. Content Rules That Must Not Be Violated

- Professional yet approachable tone.
- Benefit-driven messaging, including "headshots that open doors".
- Always use Houston or Houston TX naturally in location context.
- Founder name: John Adeniran.
- Contact info: `info@femsstudio.com`, `+1 (281) 818-3726`.
- No AI-generated images.
- No unattributed client logos.
- No false claims, fake awards, or inflated authority claims.
- No superlatives like "best" or "fastest" in visible copy.
- No pricing numbers in service copy.
- No "500+ headshots" anywhere on the site.
- No "150+ websites" anywhere on the site.
- Real stats only: 50+ headshots, 5-6 client websites, EST. 2022.
- No Zone Entertainment event photos. These are not FemStudio portfolio assets.

---

## 6. Brand System

Colors:

- Dark Green: `#0F2D24`
- Forest: `#1A4336`
- Cream: `#F5F1E8`
- Gold: `#C9A227`

Design direction:

- Editorial, premium, warm, clean.
- Serif headings.
- Small uppercase tracking for labels.
- Real imagery should lead the experience.
- No fake awards, fake client logos, or inflated claims.

---

## 7. Page Status

Homepage `/`

- Uses two visual panels for photography and web design.
- Includes service previews, selected work, CTA, metadata, and structured data.

About `/about`

- Founder page for John Adeniran.
- Uses Next.js `Image` for founder image with a gradient fallback underneath.
- Includes metadata and Person JSON-LD.

Photography `/photography`

- Hero uses a Porsche editorial image intended to show both model and car.
- Uses a client filter component for portfolio categories.
- Includes visible FAQ content and FAQPage JSON-LD.
- Includes Service JSON-LD.
- The hero crop was adjusted so desktop uses the wide Porsche hero image without cropping away the model or car. Mobile still needs visual QA because very narrow screens cannot show the full horizontal scene without tradeoffs.

Web Design `/web-design`

- Houston-focused web design service page.
- Includes service breakdown, process, FAQ, Service JSON-LD, FAQPage JSON-LD, and full metadata.
- Uses restored web design screenshot assets, but these should be reviewed for launch quality.

Contact `/contact`

- Server Component page with full metadata and FAQPage JSON-LD.
- Uses `components/sections/ContactForm.tsx`.
- Has `main id="main-content"` and one `h1`.

Contact API `/api/contact`

- Validates `name`, `email`, and `details` or `message`.
- Allows optional `service`, `phone`, and `budget`.
- Sanitizes text fields by stripping HTML tags and limiting field lengths.
- Uses `process.env.RESEND_API_KEY`.
- Sends inquiries to `info@femsstudio.com` through Resend.
- Includes anti-spam checks for extremely fast and oversized submissions.
- Does not intentionally change the expected response shape for Footer or Contact forms.

Security review note:

- The API strips tags from submitted fields and escapes values before placing them into the email HTML.
- The in-memory anti-spam/rate-limit approach is simple and may not work consistently across serverless instances.

---

## 8. Canonical Image Folder Structure

Use these folders only:

```text
public/images/
├── editorial/
├── headshots/
├── celebrations/
├── founder/
├── webdesign/
├── brand/
└── og/
```

Do not recreate these old paths inside the project:

```text
public/images/portfolio/photography/
public/images/portfolio/web/
```

Those were external source-folder paths from the older local asset set, not the canonical app paths.

---

## 9. Current Image Assets

Brand:

- `public/images/brand/femstudio-logo-horizontal.png`
- `public/images/brand/femstudio-logo-stacked.png`
- `public/images/brand/femstudio-icon.png`

Founder:

- `public/images/founder/john-adeniran-femstudio-houston-photographer.jpg`

Editorial:

- `public/images/editorial/porsche-editorial-brand-photography-houston-model-car-hero.jpg`
- `public/images/editorial/porsche-editorial-houston-photographer-01.jpg`
- `public/images/editorial/porsche-editorial-houston-photographer-02.jpg`
- `public/images/editorial/porsche-editorial-houston-photographer-03.jpg`
- `public/images/editorial/porsche-editorial-houston-photographer-04.jpg`

Headshots:

- `public/images/headshots/professional-headshot-houston-01.jpg`
- `public/images/headshots/professional-headshot-houston-02.jpg`
- `public/images/headshots/professional-headshot-houston-03.jpg`
- `public/images/headshots/professional-headshot-houston-04.jpg`

Celebrations:

- `public/images/celebrations/prom-photography-houston-01.jpg`
- `public/images/celebrations/prom-photography-houston-02.jpg`
- `public/images/celebrations/graduation-photography-houston-01.jpg`
- `public/images/celebrations/graduation-photography-houston-02.jpg`

Web design:

- `public/images/webdesign/client-website-example.jpg`
- `public/images/webdesign/tarro-law-group-website-design.jpg`

Open Graph:

- `public/images/og/og-femstudio.jpg`
- `public/images/og/og-about.jpg`
- `public/images/og/og-photography.jpg`
- `public/images/og/og-web-design.jpg`

Recovery cleanup:

- Unused recovery source images were removed after confirming app code did not reference them.
- App code uses canonical `/images/...` paths only.

---

## 10. SEO and AI Discovery Notes

The rebuild includes:

- Page-level metadata for all public pages.
- Canonical URLs for all public pages.
- Open Graph metadata.
- Twitter metadata.
- `metadataBase` in `app/layout.tsx`.
- `app/robots.ts`.
- `app/sitemap.ts`.
- JSON-LD:
  - LocalBusiness and WebSite in `app/layout.tsx`
  - Person on `/about`
  - Service and FAQPage on `/photography`
  - Service and FAQPage on `/web-design`
  - FAQPage on `/contact`

The site should still be reviewed for:

- One `h1` per page.
- `main id="main-content"` per page.
- Accurate alt text on every meaningful image.
- Natural Houston language without keyword stuffing.
- No fake claims.
- Valid structured data with Google Rich Results Test.
- Real 1200x630 OG images before launch.

SEO reality check:

- No code can guarantee FemStudio shows up first in Google or AI answers.
- The rebuilt site is structured to support discoverability, but ranking also depends on backlinks, Google Business Profile, real reviews, content freshness, domain authority, citations, page speed, and local relevance.

---

## 11. Environment Variables

Required for email:

```bash
RESEND_API_KEY=re_...
```

Rules:

- Never commit `.env` or `.env.local`.
- Never paste API keys into chat.
- Store production secrets in Vercel Environment Variables.
- Verify `femsstudio.com` in Resend before using `noreply@femsstudio.com`.
- Until domain verification, use Resend's safe temporary sender.

---

## 12. Manual Tasks Still Needed

High priority:

- Review `/photography` hero crop on real mobile devices. The page now uses a mobile-specific Porsche image and a desktop-wide Porsche hero image.
- Test that the logo appears in the header on every page.
- Confirm all images load from the canonical direct folders.
- Test contact form UI validation.
- Configure `RESEND_API_KEY` in Vercel.
- Verify Resend domain records.
- Send a real test inquiry and confirm email delivery.

Before launch:

- Refine OG images into real designed 1200x630 assets.
- Confirm final image compression and dimensions.
- Check all links.
- Run Lighthouse.
- Validate structured data.
- Submit sitemap to Google Search Console.
- Create or update Google Business Profile.

---

## 13. Exact Review Checklist for Claude

1. Read `AGENTS.md`.
2. Read relevant Next.js 16 docs in `node_modules/next/dist/docs/`.
3. Run `npm run build`.
4. Run `npm run lint`.
5. Open every page locally:
   - `/`
   - `/about`
   - `/photography`
   - `/web-design`
   - `/contact`
7. Confirm the FemStudio logo displays in the header.
8. Confirm no image placeholders are visible where real images should render.
9. Confirm `/photography` hero shows both the model and car.
10. Confirm all image paths use:
   - `/images/editorial/`
   - `/images/headshots/`
   - `/images/celebrations/`
   - `/images/founder/`
   - `/images/webdesign/`
   - `/images/brand/`
   - `/images/og/`
11. Search for and remove any accidental old paths:
   - `portfolio/photography`
   - `portfolio/web`
12. Search for forbidden claims:
   - `500+`
   - `150+`
   - `best`
   - `fastest`
   - `Zone Entertainment`
13. Review `app/api/contact/route.ts` for serverless rate-limit limitations.
14. Do not touch `.env` or secrets.
15. Do not invent client names, awards, or inflated numbers.

Useful searches:

```bash
rg "portfolio/photography|portfolio/web|500\\+|150\\+|best|fastest|Zone Entertainment" .
rg "/images/" app components
```

---

## 14. Suggested Claude Kickoff Prompt

```text
Read HANDOFF.md first. This project was rebuilt after accidental deletion.

Do not touch .env or secrets.

Read the relevant Next.js 16 docs in node_modules/next/dist/docs per AGENTS.md, then run npm run build and npm run lint.

Fix only issues needed to make the rebuilt FemStudio site work.

Verify:
- Header logo displays
- Images load from canonical direct folders
- Photography hero shows both model and car
- No old portfolio/photography or portfolio/web paths remain
- One h1 per page
- main id="main-content" on public pages
- No forbidden inflated claims
- Contact API still uses process.env.RESEND_API_KEY only

Afterward report files changed, build result, lint result, remaining risks, and manual deployment tasks.
```

---

## 15. Known Risks and Assumptions

- The rebuild is based on retained context, not an original Git backup.
- Dependencies are installed and verified locally.
- Production build passes.
- Lint passes.
- OG images are functional placeholders made from restored photography and should be redesigned before launch.
- Unused recovery source files were removed from `public/images`.
- Web design portfolio assets are limited and should be replaced or expanded with approved client screenshots.
- SEO foundation is present, but search ranking is not guaranteed by metadata alone.
