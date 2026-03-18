// app/attractions/[slug]/page.tsx
import { getAttractionBySlug, getMetafieldValue } from '@/lib/cosmic'
import Link from 'next/link'

export default async function AttractionDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const attraction = await getAttractionBySlug(slug)

  if (!attraction) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-slate-600">Attraction not found.</p>
        <Link className="text-forest-600 underline" href="/attractions">
          Back to attractions
        </Link>
      </div>
    )
  }

  const image = attraction.metadata?.featured_image
  const category = getMetafieldValue(attraction.metadata?.category)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 space-y-8">
      <Link className="text-forest-600 underline" href="/attractions">
        ← Back to attractions
      </Link>
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">{attraction.title}</h1>
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
      </div>
      {image?.imgix_url && (
        <img
          src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
          alt={attraction.title}
          width={800}
          height={450}
          className="w-full rounded-2xl object-cover"
        />
      )}
      {attraction.metadata?.short_description && (
        <p className="whitespace-pre-line text-slate-700">
          {attraction.metadata.short_description}
        </p>
      )}
    </div>
  )
}