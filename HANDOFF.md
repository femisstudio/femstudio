# FemStudio Project Handoff Document

**Last Updated**: May 7, 2026 (Photography Page & Footer Refinements Complete)
**Project**: FemStudio - Houston-based Photography and Web Design Studio  
**Status**: Rebuilt after accidental deletion. Reference-style pages implemented with photography gallery enhancements, professional footer rebuild, and FAQ section improvements. Lint and production build pass. GitHub backup is active.

---

## 0. Urgent Takeover Summary

The original project folder was accidentally deleted by Claude with no backup. Codex rebuilt the site from retained project context and local image assets found under `/Users/femi/Desktop/public/images`.

The rebuilt code is present in `/Users/femi/Desktop/femstudio`. Dependencies were installed after network permission was granted, and both lint and production build pass.

GitHub backup is connected:

```bash
origin git@github.com:femisstudio/femstudio.git
branch main
```

Most recent functional code checkpoint before adding the latest owner brief:

```bash
9bd6be8 Update handoff and gallery hover fallback
```

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
- Convert visitors into paying photography and web design clients.

Owner identity and guardrails:

- Owner: John Adeniran.
- John is a UX Designer based in Houston, TX.
- Do not mention John's employer anywhere on the site.
- FemStudio is a real business, founded in 2022.
- Domain: `femsstudio.com`.
- Instagram: `@femstudio__`.

Primary buyers:

- Individuals who need professional headshots for LinkedIn, internships, job applications, or personal branding.
- Small businesses in Houston that need premium websites that look good and support inquiries.

Core conversion principle:

- Every design decision, every line of copy, and every page should help visitors trust FemStudio, understand the offer, see real work, and contact John.

---

## 1A. Latest Owner Rebuild Brief

The latest owner brief says the site should include exactly five public pages:

1. Homepage `/`
2. Photography `/photography`
3. Web Design `/web-design`
4. About `/about`
5. Contact `/contact`

Homepage target:

- Split hero:
  - Left panel: Photography, editorial image, large italic "Photography" heading.
  - Right panel: dark gradient panel, bold Syncopate "WEB DESIGN & STRATEGY".
  - Central vertical gold divider must use the exact text "BRAND PHOTOGRAPHY" and "CUSTOM WEB DESIGN".
- Services section: "THE ARTIFACTS" with 5 service cards, no prices, and "INQUIRE" links to `/contact`.
- Selected Works section: 6 portfolio cards in a 3-column grid.
- Footer with inquiry form.

Photography target:

- Hero: Porsche editorial shot with "Every frame, a story." italic heading.
- Functional filter tabs: ALL, HEADSHOTS, EDITORIAL & BRAND, CELEBRATIONS.
- Masonry grid: 12 portfolio cards.
- Gallery photos start grayscale and return to color on hover.
- Category tag appears on hover.
- Professional Headshots strip: horizontal scroll of 4 portrait cards.
- "READY TO BOOK?" CTA linking to `/contact`.

Web Design target:

- Hero: "WEB DESIGN" in white plus "& STRATEGY" in gold outline, browser mockup on the right.
- Functional filter tabs: ALL, WEB DESIGN, E-COMMERCE, SEO & MARKETING.
- 2-column project grid with these 6 client/project names:
  - The Dirt Way
  - Tarro Law Group
  - Luna Cleanz
  - OC South Coast Cleaning
  - Climtransformlab
  - FemStudio
- Process section: 4 steps with timeline.
- "START YOUR PROJECT" CTA.

About target:

- Hero: "The Story Behind the Lens".
- Founder section with photo of John Adeniran.
- Use the three John story paragraphs from the owner brief. Note: the owner provided them with em dashes, but also said no em dashes in copy. Prefer clean punctuation without em dashes unless John explicitly asks for exact punctuation.
- Stats strip: EST. 2022, HOUSTON TX, 2 SERVICES.
- Values:
  - 01 "Everyone deserves a professional image."
  - 02 "Design should do something."
  - 03 "Craft first, scale second."
- CTA: "READY TO WORK TOGETHER?"

Contact target:

- Hero: "LET'S TALK." in Syncopate.
- Split layout: left contact info, right full form.
- Form fields:
  - First name
  - Last name
  - Email
  - Phone optional
  - Service interest radio: Photography, Web Design, E-Commerce, Both
  - Project details textarea
  - Budget range radio: Under $500, $500-$1500, $1500-$5000, $5000+
- Success message should be exactly: "Message received. We will be in touch within 24 hours."
- FAQ strip with 3 questions at bottom.
- Footer.

Important conflict note:

- The owner brief asks for budget ranges on the contact form, but also says no pricing shown anywhere on the site. Treat these as lead qualification ranges, not service pricing. Keep them only on the contact form unless John says otherwise.

---

## 1B. Known Gaps Against Latest Owner Brief

These are not necessarily bugs, but they are the next things Claude should audit before editing:

- Current GitHub remote is `git@github.com:femisstudio/femstudio.git`, while the latest owner brief says `femisstudio/Femstudio-website`. Do not change the remote without confirming which repo John wants as canonical.
- Current app image folders use direct paths like `/images/editorial/`, while the latest owner brief mentions `/images/portfolio/photography/` and `/images/portfolio/web/`. Earlier cleanup made the direct folders canonical. Do not move images again unless John confirms the new structure.
- Current homepage center divider uses stats and mood text, not the exact owner-required "BRAND PHOTOGRAPHY" and "CUSTOM WEB DESIGN".
- Current homepage has a "DIGITAL ALCHEMY" process section, not the requested "THE ARTIFACTS" services section and 6-card Selected Works section.
- Current photography hero has the Porsche image first, then the "Every frame, a story." heading in the green intro section. Latest owner target asks for the heading on the hero.
- Current photography service page intentionally removed visible FAQ content to match a prior reference design. Latest SEO/GEO brief says service pages should include FAQ content.
- Current contact page uses "Start with a few details." as the visible `h1`, not "LET'S TALK."
- Current contact form uses a service select and a freeform budget input, not the requested radio groups.
- Current contact success message is "Inquiry sent. We will be in touch soon." unless overridden by the API response. Latest owner brief requests exact success text.
- Current shared Header/Footer exist, but several reference-style pages use custom per-page headers and footers. Decide whether to consolidate only after visual QA.

---

## 2. Current Rebuilt Files

Core config:

- `package.json`
- `tsconfig.json`
- `next.config.ts` — Includes image qualities [75, 85, 90] for Next.js Image component
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
- `app/privacy/page.tsx` — Placeholder privacy policy page
- `app/terms/page.tsx` — Placeholder terms of service page
- `app/api/contact/route.ts`

Components:

- `components/layout/Header.tsx` — Uses FemStudio logo image from `public/images/brand/femstudio-logo-horizontal.png`
- `components/layout/Footer.tsx` — Professional four-column footer with Brand, Navigate, Services, and Contact columns; includes social icons, footer links, and bottom copyright bar
- `components/sections/HomeSplitHero.tsx` — Split hero for homepage
- `components/sections/DigitalAlchemy.tsx` — Process section for homepage
- `components/sections/HeroSplitDivider.tsx` — Alternative split hero with central divider
- `components/sections/PhotographyHero.tsx` — Editorial photo hero (can be replaced)
- `components/sections/HeadshotGrid.tsx` — Mosaic-style grid with 19 headshots and centered logo tile
- `components/sections/PhotographyGallery.tsx` — Filter tabs and grid gallery for photography portfolio
- `components/sections/HeadshotsHighlight.tsx` — Horizontal scrolling headshots showcase
- `components/sections/PhotographyBookingCTA.tsx` — "Ready to Book?" call-to-action
- `components/sections/ContactForm.tsx`
- `components/sections/WebDesignShowcase.tsx`

Image documentation:

- `public/images/README.md`
- `public/images/og/README.md`

Git is initialized locally on branch `main`.

Recent local backup commits include:

- `9bd6be8` - `Update handoff and gallery hover fallback`
- `9ebeca7` - `Add photography gallery hover interactions`
- `82540da` - `Convert photography page to reference layout`
- `f43a162` - `Convert web design page to reference layout`
- `cea3bca` - `Convert homepage to interactive reference design`
- `9f0eeb0` - `Convert about page to reference design`
- `ff91e5a` - `Harden launch readiness`
- `f0cdc2a` - `Polish responsive design and clean assets`
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
- Do not mention John's employer.
- No AI-generated images.
- No unattributed client logos.
- No false claims, fake reviews, fake awards, testimonials, or inflated authority claims.
- No superlatives like "best" or "fastest" in visible copy.
- No pricing numbers in service copy.
- No pricing packages on the site. Budget range inputs on the contact form are lead qualification only if used.
- No em dashes in visible site copy.
- No AI-sounding language.
- No "500+ headshots" anywhere on the site.
- No "150+ websites" anywhere on the site.
- Real stats only: 50+ headshots, 5-6 client websites, EST. 2022.
- No Zone Entertainment event photos. These are not FemStudio portfolio assets.
- Homepage hero divider must say "BRAND PHOTOGRAPHY" and "CUSTOM WEB DESIGN" if following the latest owner brief.
- Copy should sell outcomes, not deliverables.

---

## 6. Brand System

Colors:

- Dark Green: `#0a1f19`
- Forest: `#0f2d24`
- Light Green: `#1a4336`
- Cream: `#fcfbf7`
- Gold: `#c9a227`

Design direction:

- Editorial, premium, warm, clean.
- Serif headings.
- Small uppercase tracking for labels.
- Real imagery should lead the experience.
- No fake awards, fake client logos, or inflated claims.

---

## 7. Page Status

Homepage `/`

- Uses the reference-style split hero with interactive photography and web design panels.
- Photography side uses local portrait imagery. Web design side uses animated digital styling.
- Uses real stats only: 50+ headshots and 5-6 client websites.
- Includes process, footer inquiry form, metadata, and structured data.

About `/about`

- Founder page for John Adeniran.
- Uses the reference-style about layout with hero, founder story, stats strip, values, CTA, and footer inquiry form.
- Uses Next.js `Image` for founder image with local asset only.
- Includes metadata and Person JSON-LD.

Photography `/photography`

- Uses a 3x3 grid hero section with professional headshot images.
- Hero grid uses 9 professional headshot images in a responsive square grid with FemStudio logo in center tile.
- Images use `object-cover` with `object-position: center top` to keep faces in frame.
- All images display at full brightness by default; dark overlay only appears on hover.
- Images start in grayscale by default and transition to full color on hover (interactive effect preserved).
- Text section below grid includes eyebrow label (gold, tracking-widest), headline "Headshots that look like leadership." (serif), subheading about Houston-based photography, CTA buttons, and stats.
- Header: Dark background with light text navigation (sans-serif font, tracking-widest).
- Uses `components/sections/PhotographyGallery.tsx` with functional filter tabs (4 total: ALL, HEADSHOTS, EDITORIAL & BRAND, CELEBRATIONS).
- Gallery images are clickable to open fullscreen modal viewer with dark background.
- Removed "VIEW" overlay text from gallery images.
- Added cream background FAQ section with:
  - Section heading: text-5xl desktop, text-4xl mobile
  - Question text: text-lg Syncopate with tracking-normal
  - Answer text: text-lg Cormorant Garamond at 70% opacity
  - Each FAQ row: py-8 padding
  - Gold top border separating from dark CTA section
  - First FAQ item open by default
- CTA section: "Ready to look the part?" with $175 pricing (no special styling on price).
- Includes Service JSON-LD and FAQPage JSON-LD.
- Professional footer with four-column layout (Brand, Navigate, Services, Contact) plus bottom bar.

Web Design `/web-design`

- Uses the reference-style web design layout with browser-frame hero, interactive category filters, project cards, process section, CTA, and footer inquiry form.
- Uses `components/sections/WebDesignShowcase.tsx` for client-side filter interactions.
- Includes Houston-focused metadata, Service JSON-LD, FAQPage JSON-LD, and visible FAQ content.
- Current web design assets are limited approved local screenshots and should be reviewed for launch quality.

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

Latest owner brief conflict:

- The owner brief mentions `public/images/portfolio/photography/` and `public/images/portfolio/web/`.
- Current working repo and current code use the direct folder structure above.
- Before moving or renaming images, confirm with John which structure should be canonical going forward.

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

Headshots (19 total):

- `public/images/headshots/professional-headshot-houston-01.jpg` through `professional-headshot-houston-19.jpg`
- Used in `HeadshotGrid.tsx` mosaic layout (all 19 in grid + centered logo tile)
- Used in `HeadshotsHighlight.tsx` horizontal scroll section (4-image showcase)

Celebrations (includes prom, graduation, wedding guest, and casual portraits):

- `public/images/celebrations/prom-photography-houston-01.jpg` through `prom-photography-houston-05.jpg`
- `public/images/celebrations/graduation-photography-houston-01.jpg` through `graduation-photography-houston-08.jpg`
- `public/images/wedding-guest/wedding-guest-photography-houston-01.jpg` through `wedding-guest-photography-houston-16.jpg` (moved to CELEBRATIONS filter)
- `public/images/casual/casual-portrait-houston-01.jpg` (moved to HEADSHOTS filter)

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
  - Service on `/photography`
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

Target search phrases from the latest owner brief:

- "professional headshots Houston"
- "web designer Houston"
- "headshots for LinkedIn Houston"
- "small business website design Houston"

AI discovery goals:

- Service pages should have natural Houston-focused FAQ content.
- Structured data should stay accurate and should not include fake reviews, ratings, awards, or inflated claims.
- NAP should stay consistent: FemStudio, Houston TX, `info@femsstudio.com`, `+1 (281) 818-3726`.

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

- Test fullscreen image viewer on `/photography` gallery — click images to open fullscreen, X button and outside click to close
- Review filter tab consolidation (4 tabs total) to ensure images appear correctly for each filter
- Review `/photography` gallery grayscale-to-color hover effect on real desktop
- Test that the logo appears in the header on every page and is visible (brightness-0 invert applied to footer logo)
- Confirm all images load from the canonical direct folders
- Test footer four-column layout on mobile vs desktop — should stack on mobile
- Test footer social icons (Instagram, LinkedIn) are clickable and open in new tab
- Test contact form UI validation
- Test `/privacy` and `/terms` placeholder pages link correctly from footer
- Configure `RESEND_API_KEY` in Vercel
- Verify Resend domain records
- Send a real test inquiry and confirm email delivery

Before launch:

- Refine OG images into real designed 1200x630 assets.
- Confirm final image compression and dimensions.
- Check all links.
- Run Lighthouse.
- Validate structured data.
- Submit sitemap to Google Search Console.
- Create or update Google Business Profile.
- Connect the canonical GitHub repository to Vercel.
- Add `RESEND_API_KEY` in Vercel Environment Variables.
- Update DNS when ready:
  - A record: `@` to `76.76.21.21`
  - CNAME: `www` to `cname.vercel-dns.com`

---

## 17. Exact Review Checklist for Claude

1. Read `AGENTS.md`.
2. Read relevant Next.js 16 docs in `node_modules/next/dist/docs/`.
3. Read Section 1A and Section 1B of this file.
4. Run `git status`.
5. Run `git pull origin main`.
6. Confirm the current branch and latest commit.
7. Run `npm run build`.
8. Run `npm run lint`.
9. Open every page locally:
   - `/`
   - `/about`
   - `/photography`
   - `/web-design`
   - `/contact`
10. Confirm the FemStudio logo displays in the header.
11. Confirm no image placeholders are visible where real images should render.
12. Confirm `/photography` hero shows both the model and car.
13. Confirm `/photography` portfolio images start black and white and return to color on hover.
14. Confirm all image paths use:
   - `/images/editorial/`
   - `/images/headshots/`
   - `/images/celebrations/`
   - `/images/founder/`
   - `/images/webdesign/`
   - `/images/brand/`
   - `/images/og/`
15. Search for and remove any accidental old paths:
   - `portfolio/photography`
   - `portfolio/web`
16. Search for forbidden claims:
   - `500+`
   - `150+`
   - `best`
   - `fastest`
   - `Zone Entertainment`
17. Search for em dashes in visible copy and replace them unless John explicitly approves exact punctuation.
18. Review `app/api/contact/route.ts` for serverless rate-limit limitations.
19. Do not touch `.env` or secrets.
20. Do not invent client names, awards, testimonials, reviews, ratings, or inflated numbers.

Useful searches:

```bash
rg "portfolio/photography|portfolio/web|500\\+|150\\+|best|fastest|Zone Entertainment" .
rg "/images/" app components
```

---

## 18. Suggested Claude Kickoff Prompt

```text
Read HANDOFF.md first. This project was rebuilt after accidental deletion.

Do not touch .env or secrets.

Read Section 1A and Section 1B carefully. They contain the latest owner brief and known gaps against the current implementation.

Read the relevant Next.js 16 docs in node_modules/next/dist/docs per AGENTS.md, then run git status, git pull origin main, npm run build, and npm run lint.

Fix only issues needed to align the rebuilt FemStudio site with the latest owner brief and confirmed visual references.

Verify:
- Header logo displays
- Images load from canonical direct folders
- Photography hero shows both model and car
- Photography gallery starts black and white, then returns to color on hover
- Homepage hero divider uses BRAND PHOTOGRAPHY and CUSTOM WEB DESIGN if implementing the latest owner brief
- Contact page uses LET'S TALK. and the requested form structure if implementing the latest owner brief
- No old portfolio/photography or portfolio/web paths remain
- One h1 per page
- main id="main-content" on public pages
- No forbidden inflated claims
- No em dashes in visible site copy unless John explicitly approves exact punctuation
- Contact API still uses process.env.RESEND_API_KEY only

Afterward report files changed, build result, lint result, remaining risks, and manual deployment tasks.
```

---

## 15. Recent Implementation Updates (May 7, 2026)

**Photography Page Refinements:**
- Consolidated gallery filter tabs from 6 to 4: ALL, HEADSHOTS, EDITORIAL & BRAND, CELEBRATIONS
- Moved PORTRAITS category images into HEADSHOTS
- Moved EVENTS category images into CELEBRATIONS
- Removed PORTRAITS and EVENTS tabs completely
- Updated hero grid to display images at full brightness by default
- Set explicit object-position: center top on all hero grid images
- Grayscale-to-color hover effect preserved as designed
- Removed "VIEW" overlay text from gallery images
- Added fullscreen image viewer modal - users click images to open in fullscreen
- Modal closes with X button or by clicking outside the image

**FAQ Section Rebuild:**
- Moved FAQ section out of dark green portfolio section
- Created distinct cream background section with gold top border
- Updated typography:
  - Question text: text-lg Syncopate with tracking-normal
  - Answer text: text-lg Cormorant Garamond at 70% opacity
  - Section heading: text-4xl mobile, text-5xl desktop
  - Each FAQ row: py-8 padding
- First FAQ item opens by default
- Removed extra gap between CTA and FAQ sections

**Footer Rebuild:**
- Replaced entire footer with professional four-column design
- Column 1 - Brand: Logo (h-20 with brightness-0 invert for visibility), description, social icons (Instagram/LinkedIn)
- Column 2 - Navigate: Photography, Web Design, About, Contact links
- Column 3 - Services: Corporate Headshots, Brand Photography, Web Design, Team Sessions, Branding Portraits
- Column 4 - Contact: Email, phone, location, "START A PROJECT" CTA button
- Bottom bar: Copyright, Privacy Policy, and Terms of Service links
- All links properly styled with Cormorant Garamond and Syncopate fonts
- Hover states with gold color transitions
- Full WCAG AA accessibility with focus rings and aria-labels

**New Pages Added:**
- `/privacy` — Placeholder Privacy Policy page
- `/terms` — Placeholder Terms of Service page

**Header Navigation:**
- Updated to use dark background (#0f2d24) on all pages
- Navigation text: sans-serif font (Syncopate) with tracking-widest
- Applied consistently across all pages

**CTA Section Refinement:**
- Removed special styling from $175 price in "Individual headshot sessions start at $175. Team packages available."
- Price now displays as plain text at 70% opacity with rest of sentence

**Recent Commits:**
- 90ee794: Remove hover overlay text, add fullscreen image viewer
- f2801d8: Consolidate filter tabs, fix hero grid brightness, FAQ fonts, price styling, footer visibility
- 3daddb6: Fix FAQ font sizes, rebuild footer with four columns, add placeholder privacy and terms pages
- 4206cf7: Move FAQ to cream background section
- 3daddb6: Move FAQ to cream background section

---

## 16. Known Risks and Assumptions

- The rebuild is based on retained context, not an original Git backup.
- Dependencies are installed and verified locally.
- Production build passes.
- Lint passes.
- OG images are functional placeholders made from restored photography and should be redesigned before launch.
- Unused recovery source files were removed from `public/images`.
- Web design portfolio assets are limited and should be replaced or expanded with approved client screenshots.
- SEO foundation is present, but search ranking is not guaranteed by metadata alone.
