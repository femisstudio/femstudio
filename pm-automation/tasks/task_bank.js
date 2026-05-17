// ============================================================
// FEMSTUDIO TASK BANK
// Edit this file to update weekly priorities
// Phase 1 = Weeks 1-2 | Phase 2 = Weeks 3-4
// ============================================================

var TASK_BANK = {

  phase1: [
    {
      title: "FemStudio — Set up Google Search Console",
      desc: "Go to search.google.com/search-console → add femsstudio.com → verify via Cloudflare DNS → submit sitemap.xml",
      duration: 30,
      day: 1
    },
    {
      title: "FemStudio — Fix homepage meta title",
      desc: "Open VS Code → update app/page.tsx metadata → title: FemStudio | Brand Photographer & Web Designer in Houston TX → push to Vercel",
      duration: 15,
      day: 1
    },
    {
      title: "FemStudio — Create Google Business Profile",
      desc: "business.google.com → create profile → category: Photographer → Houston service area → upload 5+ photos → keyword-rich description",
      duration: 60,
      day: 2
    },
    {
      title: "FemStudio — Add JSON-LD LocalBusiness schema",
      desc: "Ask Claude Code to generate JSON-LD block → inject into layout.tsx → push to Vercel → validate at schema.org/validator",
      duration: 30,
      day: 2
    },
    {
      title: "FemStudio — Install Google Analytics 4",
      desc: "Create GA4 property → get measurement ID → add gtag script to layout.tsx via next/script → verify data is flowing",
      duration: 30,
      day: 3
    },
    {
      title: "FemStudio — Build custom 404 page",
      desc: "Create app/not-found.tsx → branded page with links back to home and photography → push to Vercel",
      duration: 15,
      day: 3
    },
    {
      title: "FemStudio — Remove dead old URLs in Search Console",
      desc: "Remove /author/rwsolar /digital-marketing /services /contact-us from GSC URL removal tool",
      duration: 15,
      day: 4
    },
    {
      title: "FemStudio — Optimize all page meta descriptions",
      desc: "Review all 7 pages → rewrite meta descriptions targeting Houston photography and web design keywords → push to Vercel",
      duration: 60,
      day: 4
    },
    {
      title: "FemStudio — First Google Search Console check",
      desc: "Open GSC → check crawl errors → check coverage report → check sitemap indexing → note any issues",
      duration: 30,
      day: 5
    },
    {
      title: "FemStudio — Weekly review and next week planning",
      desc: "Open Claude FemStudio project → type FemStudio weekly review → log completed tasks → get next week top 3 priorities",
      duration: 20,
      day: 5
    }
  ],

  phase2: [
    {
      title: "FemStudio — Optimize Photography page for Houston SEO",
      desc: "Rewrite photography page copy → include: brand photographer Houston, headshot photographer Houston TX, Houston neighborhoods",
      duration: 60,
      day: 1
    },
    {
      title: "FemStudio — Optimize Web Design page for Houston SEO",
      desc: "Rewrite web design page copy → include: web designer Houston, custom web design Houston TX, small business websites Houston",
      duration: 60,
      day: 2
    },
    {
      title: "FemStudio — Reach out to 5 past clients for Google reviews",
      desc: "Text or DM 5 past headshot clients → ask for a Google review → include your direct GBP review link",
      duration: 45,
      day: 2
    },
    {
      title: "FemStudio — Add service areas to Google Business Profile",
      desc: "Open GBP dashboard → add: Houston, Katy, Sugar Land, The Woodlands, Pearland, Bellaire → update business description",
      duration: 20,
      day: 3
    },
    {
      title: "FemStudio — Upload 10 new photos to GBP",
      desc: "Upload 10 portfolio photos → include headshots and brand sessions → add captions with Houston keywords",
      duration: 30,
      day: 3
    },
    {
      title: "FemStudio — Review first GA4 data report",
      desc: "Open GA4 → review top pages, traffic sources, time on page, contact form events → note what needs attention",
      duration: 20,
      day: 4
    },
    {
      title: "FemStudio — Add Photographer schema to Photography page",
      desc: "Ask Claude Code to add Photographer + LocalBusiness schema to photography page → push to Vercel → validate",
      duration: 30,
      day: 4
    },
    {
      title: "FemStudio — Research competitor backlinks",
      desc: "Use Ubersuggest free → check where top 3 Houston headshot photographers get backlinks → note directories to list on",
      duration: 45,
      day: 5
    },
    {
      title: "FemStudio — Submit to 3 Houston business directories",
      desc: "Submit femsstudio.com to: Yelp Houston, Thumbtack, Bark.com → consistent name address phone across all",
      duration: 45,
      day: 5
    },
    {
      title: "FemStudio — Weekly review and next week planning",
      desc: "Open Claude FemStudio project → type FemStudio weekly review → log completed → get next week top 3 priorities",
      duration: 20,
      day: 5
    }
  ]
};
