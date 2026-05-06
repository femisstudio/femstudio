# Review Checkpoint

This checkpoint was recreated after the FemStudio project folder was accidentally deleted.

## Files Rebuilt

- `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`
- `app/layout.tsx`, `app/page.tsx`, `app/about/page.tsx`, `app/photography/page.tsx`, `app/web-design/page.tsx`, `app/contact/page.tsx`
- `app/api/contact/route.ts`
- `app/robots.ts`, `app/sitemap.ts`
- `components/layout/Header.tsx`, `components/layout/Footer.tsx`
- `components/sections/ContactForm.tsx`, `components/sections/PhotographyContent.tsx`
- `public/images/**`
- `HANDOFF.md`, `CLAUDE.md`, `AGENTS.md`

## What Each Area Does

- Layout: global metadata, business schema, website schema, app shell styles.
- Header: logo navigation and mobile menu.
- Footer: contact details, quick inquiry form, footer navigation.
- Contact API: validates, sanitizes, checks spam signals, and sends through Resend.
- Photography page: hero, portfolio filtering, headshots, FAQ, structured data.
- Web design page: service content, process, FAQ, structured data.
- About page: founder story and Person schema.
- Contact page: inquiry form and FAQ schema.

## Build Status

Build still needs to be run after dependency installation.

## Known Missing or Weak Areas

- OG images were recreated quickly and should be refined visually.
- Web design imagery uses an available local screenshot during recovery.
- Visual QA is still needed on real browser widths.

## Security-Sensitive Areas to Review

- `app/api/contact/route.ts`
- Resend sender domain and reply-to behavior
- Field length limits and anti-spam checks
- No `.env` or secrets committed

## Claude Review Checklist

- [ ] Read `HANDOFF.md`.
- [ ] Run `npm install` if needed.
- [ ] Run `npm run build`.
- [ ] Confirm no TypeScript errors.
- [ ] Confirm all images load.
- [ ] Confirm `/photography` hero shows model and car.
- [ ] Confirm each page has one `h1`.
- [ ] Confirm every public page has `main id="main-content"`.
- [ ] Confirm no inflated stats or prohibited content rules.
- [ ] Confirm contact form response shape matches client forms.

## Assumptions and Risks

- The rebuild is based on retained conversation context, not an exact git restore.
- Some visual details may differ from the deleted implementation.
- Real production email still requires Resend and Vercel setup.
