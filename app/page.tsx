import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import TrailCard from '@/components/TrailCard'
import AttractionCard from '@/components/AttractionCard'
import StayCard from '@/components/StayCard'
import { getAttractions, getStays, getTrails } from '@/lib/cosmic'
import { Attraction, Stay, Trail } from '@/types'

export default async function HomePage() {
  const [trails, attractions, stays] = await Promise.all([
    getTrails(),
    getAttractions(),
    getStays()
  ])

  const featuredTrails = trails.slice(0, 2)
  const featuredAttractions = attractions.slice(0, 2)
  const featuredStays = stays.slice(0, 2)

  return (
    <div>
      <Hero />
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-16">
        <section>
          <SectionHeading
            title="Signature Trails"
            description="Plan a hike with sweeping ridgelines and iconic meadows."
            href="/trails"
            linkLabel="View all trails"
          />
          {featuredTrails.length === 0 ? (
            <p className="text-slate-600">No trails available yet.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {featuredTrails.map((trail: Trail) => (
                <TrailCard key={trail.id} trail={trail} />
              ))}
            </div>
          )}
        </section>

        <section>
          <SectionHeading
            title="Local Attractions"
            description="Discover nature wonders, heritage routes, and family-friendly stops."
            href="/attractions"
            linkLabel="View all attractions"
          />
          {featuredAttractions.length === 0 ? (
            <p className="text-slate-600">No attractions available yet.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {featuredAttractions.map((attraction: Attraction) => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
          )}
        </section>

        <section>
          <SectionHeading
            title="Cozy Stays"
            description="Book hotels, guesthouses, lodges, and cabins curated for every budget."
            href="/stays"
            linkLabel="Browse stays"
          />
          {featuredStays.length === 0 ? (
            <p className="text-slate-600">No stays available yet.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {featuredStays.map((stay: Stay) => (
                <StayCard key={stay.id} stay={stay} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}