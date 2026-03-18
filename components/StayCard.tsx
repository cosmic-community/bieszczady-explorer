import Link from 'next/link'
import { Stay } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface StayCardProps {
  stay: Stay
}

export default function StayCard({ stay }: StayCardProps) {
  const image = stay.metadata?.featured_image
  const stayType = getMetafieldValue(stay.metadata?.stay_type)
  const priceRange = getMetafieldValue(stay.metadata?.price_range)

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-earth-100">
      {image?.imgix_url && (
        <img
          src={`${image.imgix_url}?w=1200&h=700&fit=crop&auto=format,compress`}
          alt={stay.title}
          width={600}
          height={350}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold">{stay.title}</h3>
        <div className="flex flex-wrap gap-3 text-sm text-slate-600">
          {stayType && (
            <span className="rounded-full bg-forest-100 px-3 py-1 text-forest-700">
              {stayType}
            </span>
          )}
          {priceRange && (
            <span className="rounded-full bg-earth-100 px-3 py-1 text-earth-700">
              {priceRange}
            </span>
          )}
        </div>
        <p className="text-sm text-slate-600">{stay.metadata?.description}</p>
        <div className="flex items-center gap-4">
          <Link
            href={`/stays/${stay.slug}`}
            className="text-sm font-semibold text-forest-600"
          >
            View stay →
          </Link>
          {stay.metadata?.booking_url && (
            <a
              href={stay.metadata.booking_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-earth-700 underline"
            >
              Book now
            </a>
          )}
        </div>
      </div>
    </article>
  )
}