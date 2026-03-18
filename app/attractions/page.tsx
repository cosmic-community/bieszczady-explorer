import SectionHeading from '@/components/SectionHeading'
import AttractionCard from '@/components/AttractionCard'
import { getAttractions } from '@/lib/cosmic'
import { Attraction } from '@/types'

export default async function AttractionsPage() {
  const attractions = await getAttractions()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="Top Attractions"
        description="Explore culture, scenic viewpoints, and family-friendly destinations."
      />
      {attractions.length === 0 ? (
        <p className="text-slate-600">No attractions available yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {attractions.map((attraction: Attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} />
          ))}
        </div>
      )}
    </div>
  )
}