import SectionHeading from '@/components/SectionHeading'
import TrailCard from '@/components/TrailCard'
import { getTrails } from '@/lib/cosmic'
import { Trail } from '@/types'

export default async function TrailsPage() {
  const trails = await getTrails()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="Hiking Trails"
        description="From gentle ridges to challenging peaks, find your perfect route."
      />
      {trails.length === 0 ? (
        <p className="text-slate-600">No trails available yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {trails.map((trail: Trail) => (
            <TrailCard key={trail.id} trail={trail} />
          ))}
        </div>
      )}
    </div>
  )
}