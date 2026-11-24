const blocks = [
  {
    heading: 'Professional headshots in Houston, TX',
    body: 'Your headshot is usually the first thing a recruiter, client, or new hire sees. It should look like you on a good day, not a stiff passport photo. We photograph individual headshots for LinkedIn, speaker bios, and websites, plus corporate and team sessions with one consistent look across your whole company.',
  },
  {
    heading: 'Brand photographer in Houston for founders and small businesses',
    body: 'Headshots show who you are. Brand photos show what you do. We capture you at work, your space, your product, and the small details that make your business feel like yours. You leave with a library of images for your website, social media, and pitch decks instead of relying on stock photos.',
  },
  {
    heading: 'Wedding and celebration photography',
    body: 'We also photograph weddings, graduations, proms, and other milestones across Houston. The approach is the same: relaxed, guided, and focused on real moments you will want to keep.',
  },
  {
    heading: 'Where we shoot in Houston',
    body: 'Sessions happen on location across Houston, including Downtown, Midtown, the Heights, Montrose, the Galleria, and the Energy Corridor. We also travel to Katy, Sugar Land, The Woodlands, Pearland, and Bellaire.',
  },
]

export default function PhotographyIntro() {
  return (
    <section className="w-full bg-cream px-6 py-20 md:px-12 md:py-28" aria-label="About FemStudio photography in Houston">
      <div className="mx-auto max-w-7xl">
        <p className="max-w-3xl font-serif text-xl leading-relaxed text-forest/80 md:text-2xl">
          FemStudio is a headshot photographer in Houston, TX. Since 2022 we&apos;ve photographed 50+ professionals, from new LinkedIn profiles to full company About pages. Sessions are relaxed and guided. We help with posture, expression, and wardrobe, then keep shooting until you see a frame you actually want to use.
        </p>
        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-14">
          {blocks.map((block) => (
            <div key={block.heading}>
              <h2 className="font-serif text-2xl italic leading-snug text-forest">{block.heading}</h2>
              <p className="mt-4 font-sans text-sm leading-relaxed text-forest/70">{block.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
