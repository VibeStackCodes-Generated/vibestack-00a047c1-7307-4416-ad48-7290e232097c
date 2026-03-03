import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const galleryItems = [
  {
    title: 'Saltwind Dunes',
    location: 'Atacama Desert, Chile',
    year: '2025',
    src: 'https://img.vibestack.site/s/desert dunes golden light/600/800',
  },
  {
    title: 'Harbor Stories',
    location: 'Porto, Portugal',
    year: '2024',
    src: 'https://img.vibestack.site/s/port city dusk boats/600/520',
  },
  {
    title: 'Rainroom',
    location: 'Kyoto, Japan',
    year: '2024',
    src: 'https://img.vibestack.site/s/kyoto alley rain night/600/760',
  },
  {
    title: 'Matte Horizon',
    location: 'Namib Coast, Namibia',
    year: '2023',
    src: 'https://img.vibestack.site/s/coastal fog shoreline minimal/600/560',
  },
  {
    title: 'Quiet Riot',
    location: 'Brooklyn, NY',
    year: '2025',
    src: 'https://img.vibestack.site/s/street portrait cinematic light/600/740',
  },
  {
    title: 'Cathedral Light',
    location: 'Seville, Spain',
    year: '2023',
    src: 'https://img.vibestack.site/s/old cathedral interior sunlight/600/820',
  },
  {
    title: 'Blue Hour Sprint',
    location: 'Reykjavík, Iceland',
    year: '2024',
    src: 'https://img.vibestack.site/s/iceland street blue hour/600/600',
  },
  {
    title: 'Sandstone Echoes',
    location: 'Moab, Utah',
    year: '2025',
    src: 'https://img.vibestack.site/s/sandstone canyon warm tones/600/700',
  },
  {
    title: 'Silk Route',
    location: 'Marrakesh, Morocco',
    year: '2023',
    src: 'https://img.vibestack.site/s/marrakesh market colors/600/640',
  },
  {
    title: 'Studio 18',
    location: 'Paris, France',
    year: '2024',
    src: 'https://img.vibestack.site/s/editorial portrait studio lighting/600/780',
  },
  {
    title: 'Tidal Lines',
    location: 'Big Sur, California',
    year: '2025',
    src: 'https://img.vibestack.site/s/big sur coast aerial/600/520',
  },
  {
    title: 'Afterglow',
    location: 'Santorini, Greece',
    year: '2023',
    src: 'https://img.vibestack.site/s/santorini sunset terrace/600/720',
  },
]

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Elara Lane</p>
            <p className="text-lg font-semibold">Photography</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a className="transition hover:text-foreground" href="#gallery">
              Gallery
            </a>
            <a className="transition hover:text-foreground" href="#about">
              About
            </a>
            <a className="transition hover:text-foreground" href="#contact">
              Contact
            </a>
          </nav>
          <Button className="hidden md:inline-flex" size="sm">
            Book a session
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <img
          src="https://img.vibestack.site/s/misty mountain sunrise cinematic/1600/900"
          alt="Misty mountains at sunrise"
          loading="eager"
          className="h-[70vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-16">
            <div className="max-w-xl space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Travel · Editorial · Portrait
              </p>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Visual stories shaped by light, texture, and honest human moments.
              </h1>
              <p className="text-base text-muted-foreground md:text-lg">
                Based in New York, Elara documents campaigns and quiet travel narratives across
                five continents. Her work appears in Kinfolk, National Geographic Traveler, and
                Monocle.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button>View gallery</Button>
                <Button variant="outline">Download portfolio</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              label: 'Projects completed',
              value: '164',
              note: 'Editorial + commercial commissions',
            },
            {
              label: 'Publications',
              value: '37',
              note: 'Features in global print & digital',
            },
            {
              label: 'Countries documented',
              value: '28',
              note: 'Portraits, landscapes, and culture',
            },
          ].map((stat) => (
            <Card key={stat.label} className="border-border/60 bg-card/80 p-6 shadow-sm">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.note}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Selected work</p>
            <h2 className="text-3xl font-semibold">Masonry gallery</h2>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {['All', 'Travel', 'Portrait', 'Editorial', 'Architecture'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/70 px-3 py-1 transition hover:bg-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <Separator className="my-6" />
        <div className="masonry columns-1 md:columns-2 lg:columns-3">
          {galleryItems.map((item) => (
            <div key={item.title} className="masonry-item mb-6">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-auto w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-sm">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.location}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">About Elara</p>
            <h2 className="text-3xl font-semibold">A documentary approach with editorial polish.</h2>
            <p className="text-base text-muted-foreground">
              Elara Lane is a photographer and visual storyteller specializing in travel,
              hospitality, and intimate portraiture. Her work blends cinematic lighting with
              candid gestures, resulting in images that feel both elevated and human.
            </p>
            <p className="text-base text-muted-foreground">
              She collaborates with creative teams to shape full visual systems, from moodboards
              to final delivery. Clients include Aman Resorts, Airbnb Luxe, and Delta Sky.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline">Download press kit</Button>
              <Button>Start a project</Button>
            </div>
          </div>
          <div className="rounded-3xl bg-card/80 p-6 shadow-sm">
            <img
              src="https://img.vibestack.site/s/photographer headshot studio lighting/600/700"
              alt="Elara Lane headshot"
              loading="lazy"
              className="h-80 w-full rounded-2xl object-cover"
            />
            <div className="mt-5 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Base</span>
                <span className="font-medium text-foreground">New York City</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Availability</span>
                <span className="font-medium text-foreground">Worldwide, 2026 bookings open</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Representation</span>
                <span className="font-medium text-foreground">North & South America</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-16 pt-6">
        <div className="grid gap-6 rounded-3xl border border-border/70 bg-card/80 p-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Get in touch</p>
            <h3 className="text-2xl font-semibold">Let's craft your next visual narrative.</h3>
            <p className="text-sm text-muted-foreground">
              Share a brief, timeline, and location. Elara responds within two business days with
              next steps and availability.
            </p>
            <Button>Contact studio</Button>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Representation</p>
            <div>
              <p className="font-semibold text-foreground">Harbor & Co. Agency</p>
              <p>madeline@harborco.com</p>
              <p>+1 (212) 555-0189</p>
            </div>
            <Separator />
            <div>
              <p className="font-semibold text-foreground">Direct bookings</p>
              <p>hello@elarlane.photo</p>
              <p>@elaralane on Instagram</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 Elara Lane Photography</p>
          <p>Portfolio · Licensing · Studio notes</p>
        </div>
      </footer>
    </div>
  )
}

export default Index