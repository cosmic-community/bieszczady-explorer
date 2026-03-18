import Link from 'next/link'
import { Attraction } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface AttractionCardProps {
  attraction: Attraction
}

export default function AttractionCard({ attraction }: AttractionCardProps) {
  const image = attraction.metadata?.featured_image
  const category = getMetafieldValue(attraction.metadata?.category)

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-earth-100">
      {image?.imgix_url && (
        <img
          src={`${image.imgix_url}?w=1200&h=700&fit=crop&auto=format,compress`}
          alt={attraction.title}
          width={600}
          height={350}
          className="h-48 w-full object-cover"
        />
      )}
      <div className="space-y-3 p-5">
        <h3 className="text-xl font-semibold">{attraction.title}</h3>
        <div className="flex flex-wrap gap-3 text-sm text-slate-600">
          {category && (
            <span className="rounded-full bg-earth-100 px-3 py-1 text-earth-700">
              {category}
            </span>
          )}
          {attraction.metadata?.location && (
            <span>{attraction.metadata.location}</span>
          )}
        </div>
        <p className="text-sm text-slate-600">
          {attraction.metadata?.short_description}
        </p>
        <Link
          href={`/attractions/${attraction.slug}`}
          className="text-sm font-semibold text-forest-600"
        >
          Explore attraction →
        </Link>
      </div>
    </article>
  )
}