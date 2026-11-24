const features = [
  { title: 'Designed for your brand', text: 'Custom layouts built from your goals and content.' },
  { title: 'Mobile responsive', text: 'Designed and tested for phones, tablets, and desktops.' },
  { title: 'Built for local search', text: 'Clear page titles, clean structure, and fast load times.' },
  { title: 'Easy to update', text: 'Add a CMS so your team can edit content without a developer.' },
]

export default function WebDesignIntro() {
  return (
    <section className="bg-darkGreen px-6 py-20 md:px-10 md:py-28" aria-label="Custom web design in Houston">
      <div className="mx-auto max-w-7xl">
        <p className="max-w-3xl font-serif text-xl leading-relaxed text-cream/80 md:text-2xl">
          FemStudio is a web designer in Houston, TX. We build custom websites for small businesses, consultants, and professionals who have outgrown a template. Each project starts with strategy. From there the site is designed around your customers and launched on fast, modern tools.
        </p>

        <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="font-serif text-3xl italic leading-snug text-cream md:text-4xl">Small business websites in Houston</h2>
            <p className="mt-5 font-sans text-sm leading-relaxed text-cream/70">
              Most small businesses don&apos;t need more pages. They need a site that explains what they do in a few seconds and makes it easy to get in touch. That&apos;s what we design for.
            </p>
            <ul className="mt-8 space-y-5">
              {features.map((feature) => (
                <li key={feature.title} className="border-l-2 border-gold pl-4">
                  <p className="font-sans text-xs font-bold uppercase tracking-widest text-gold">{feature.title}</p>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-cream/75">{feature.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-3xl italic leading-snug text-cream md:text-4xl">Why hire a Houston web designer</h2>
            <p className="mt-5 font-sans text-sm leading-relaxed text-cream/70">
              You work directly with the person designing your site, and we can meet in person in Houston or over video. FemStudio also does brand photography, so your new website can launch with real photos of you and your team rather than stock images.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
