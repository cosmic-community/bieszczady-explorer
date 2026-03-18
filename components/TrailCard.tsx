import Link from 'next/link'
import { Trail } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface TrailCardProps {
  trail: Trail
}

export default function TrailCard({ trail }: TrailCardProps) {
  const image = trail.metadata?.featured_image
  const difficulty = getMetafieldValue(trail.metadata?.difficulty)

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-earth-100">
      {image?.imgix_url && (
        <img
          src={`${image.imgix_url}?w=1200&h=700&fit=crop&auto=format,compress`}
          alt={trail.title}
          width={600}
          height={350}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold">{trail.title}</h3>
        <div className="flex flex-wrap gap-3 text-sm text-slate-600">
          {difficulty && (
            <span className="rounded-full bg-forest-100 px-3 py-1 text-forest-700">
              {difficulty}
            </span>
          )}
          {trail.metadata?.distance_km !== undefined && (
            <span>{trail.metadata.distance_km} km</span>
          )}
          {trail.metadata?.duration && <span>{trail.metadata.duration}</span>}
        </div>
        <Link
          href={`/trails/${trail.slug}`}
          className="text-sm font-semibold text-forest-600"
        >
          View trail details →
        </Link>
      </div>
    </article>
  )
}