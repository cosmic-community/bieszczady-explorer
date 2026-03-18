import SectionHeading from '@/components/SectionHeading'
import StayCard from '@/components/StayCard'
import { getStays } from '@/lib/cosmic'
import { Stay } from '@/types'

export default async function StaysPage() {
  const stays = await getStays()

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        title="Places to Stay"
        description="Choose your favorite hotel, guesthouse, lodge, or cabin."
      />
      {stays.length === 0 ? (
        <p className="text-slate-600">No stays available yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {stays.map((stay: Stay) => (
            <StayCard key={stay.id} stay={stay} />
          ))}
        </div>
      )}
    </div>
  )
}