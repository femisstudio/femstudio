# FemStudio Image Assets

This directory contains all image assets used throughout the FemStudio website. All filenames follow lowercase, hyphenated, keyword-rich naming conventions for SEO, GEO, and AEO discoverability.

## Directory Structure

### `/brand/`
**Purpose:** Logo assets and brand identity elements

**Files:**
- `femstudio-logo-horizontal.png` — Horizontal logo used in headers and navigation
- `femstudio-logo-stacked.png` — Stacked/vertical logo for smaller layouts
- `femstudio-icon.png` — Favicon and social media icon (square)

**Naming Convention:** `femstudio-[type].png`

---

### `/headshots/`
**Purpose:** Professional headshots for LinkedIn, corporate, and professional profiles

**Files:** `professional-headshot-houston-01.jpg` through `professional-headshot-houston-12.jpg`

**Used On:**
- Photography page portfolio gallery (HEADSHOTS filter)
- Homepage hero section
- About page
- Photography hero sections

**Naming Convention:** `professional-headshot-houston-[##].jpg`

**Count:** 12 images

---

### `/editorial/`
**Purpose:** Editorial and brand photography, including commercial and lifestyle imagery

**Files:**
- `porsche-editorial-brand-photography-houston-model-car-hero.jpg` — Hero image for editorials
- `porsche-editorial-houston-photographer-01.jpg` through `-06.jpg` — Editorial collection

**Used On:**
- Photography page portfolio gallery (EDITORIAL & BRAND filter)
- Homepage hero section
- Brand imagery and OG tags

**Naming Convention:** `porsche-editorial-houston-photographer-[##].jpg`

**Count:** 7 images

---

### `/celebrations/`
**Purpose:** Celebration photography including prom, graduation, and milestone events

**Files:**
- `prom-photography-houston-01.jpg` through `-05.jpg` — Prom celebration images
- `graduation-photography-houston-01.jpg` through `-08.jpg` — Graduation celebration images

**Used On:**
- Photography page portfolio gallery (CELEBRATIONS filter)

**Naming Convention:** `[event-type]-photography-houston-[##].jpg`

**Count:** 13 images (5 prom + 8 graduation)

---

### `/portraits/`
**Purpose:** Casual portrait photography and lifestyle portraits

**Files:** `casual-portrait-houston-01.jpg`

**Used On:**
- Photography page portfolio gallery (PORTRAITS filter)

**Naming Convention:** `casual-portrait-houston-[##].jpg`

**Count:** 1 image

---

### `/wedding-guest/`
**Purpose:** Wedding and event guest photography

**Files:** `wedding-guest-photography-houston-01.jpg` through `-16.jpg`

**Used On:**
- Photography page portfolio gallery (EVENTS filter)

**Naming Convention:** `wedding-guest-photography-houston-[##].jpg`

**Count:** 16 images

---

### `/founder/`
**Purpose:** Founder and team photography

**Files:** `john-adeniran-femstudio-founder-houston.jpg`

**Used On:**
- About page founder section

**Naming Convention:** `[name]-femstudio-founder-houston.jpg`

**Count:** 1 image

---

### `/webdesign/`
**Purpose:** Web design portfolio and client showcase screenshots

**Files:**
- `web-design-houston-tarro-law.jpg` — Tarro Law Group website
- `web-design-houston-example.jpg` — Generic web design example

**Used On:**
- Web design page portfolio
- Homepage digital alchemy section

**Naming Convention:** `web-design-houston-[client-name].jpg`

**Count:** 2 images

---

### `/og/`
**Purpose:** Open Graph metadata images for social media sharing

**Files:**
- `og-femstudio.jpg` — Homepage and default OG image
- `og-photography.jpg` — Photography page OG image
- `og-web-design.jpg` — Web design page OG image
- `og-about.jpg` — About page OG image

**Used On:** Meta tags for social media sharing (Twitter, Facebook, LinkedIn)

**Naming Convention:** `og-[page-name].jpg`

**Count:** 4 images

---

## Naming Conventions

All files follow this pattern:

- **Lowercase only** — no capital letters
- **Hyphenated** — words separated by hyphens, not underscores
- **Keyword-rich** — includes service type (headshot, photography, design) and location (Houston, TX)
- **Numbered sequentially** — when multiple images in a series, use zero-padded numbers (01, 02, ..., 12)

### Examples:
- ✅ `professional-headshot-houston-01.jpg`
- ✅ `prom-photography-houston-03.jpg`
- ✅ `wedding-guest-photography-houston-12.jpg`
- ❌ `IMG_1234.jpg` (not descriptive)
- ❌ `Headshot_01.jpg` (capital letters and underscore)

---

## Image Optimization Requirements

All images in the codebase are optimized using Next.js `Image` component:

- **quality={85}** — Balanced quality for web
- **fill** prop — Responsive sizing
- **sizes attribute** — Responsive image loading
- **priority** — Only on above-the-fold hero images
- **Lazy loading** — Default on all other images
- **Descriptive alt text** — Includes service keywords and location

---

## Portfolio Gallery Structure

The photography gallery (PhotographyGallery.tsx) organizes all portfolio images by category with filter tabs:

| Filter | Count | Images |
|--------|-------|--------|
| ALL | 48 | All images below |
| HEADSHOTS | 12 | professional-headshot-houston-01 through -12 |
| EDITORIAL & BRAND | 6 | porsche-editorial-houston-photographer-01 through -06 |
| CELEBRATIONS | 13 | Prom and graduation images |
| PORTRAITS | 1 | casual-portrait-houston-01 |
| EVENTS | 16 | wedding-guest-photography-houston-01 through -16 |

---

## Adding New Images

When adding new images to the portfolio:

1. **Place in appropriate folder** based on category (headshots, editorial, celebrations, etc.)
2. **Name following convention** — `[category]-houston-[##].jpg`
3. **Update portfolio component** — Add entry to `portfolioItems` array in PhotographyGallery.tsx
4. **Update codebase references** — Search for any hardcoded paths and update them
5. **Test responsive loading** — Verify images load correctly on mobile, tablet, and desktop
6. **Verify image quality** — Confirm quality={85} looks good at all breakpoints

---

## File Format & Size

- **Format:** JPG for photography, PNG for logos
- **Compression:** All images optimized for web (no uncompressed originals)
- **Maximum dimensions:** 2000px width (Next.js will resize as needed)
- **OG images:** 1200x630px (OpenGraph standard)

---

## Last Updated

May 7, 2026

## Contact

For questions about image organization or adding new portfolio images, contact the FemStudio development team.
