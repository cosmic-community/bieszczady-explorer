// app/trails/[slug]/page.tsx
import { getTrailBySlug, getMetafieldValue } from '@/lib/cosmic'
import { Trail } from '@/types'
import Link from 'next/link'

export default async function TrailDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const trail = await getTrailBySlug(slug)

  if (!trail) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-slate-600">Trail not found.</p>
        <Link className="text-forest-600 underline" href="/trails">
          Back to trails
        </Link>
      </div>
    )
  }

  const image = trail.metadata?.featured_image
  const difficulty = getMetafieldValue(trail.metadata?.difficulty)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 space-y-8">
      <Link className="text-forest-600 underline" href="/trails">
        ← Back to trails
      </Link>
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">{trail.title}</h1>
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
      </div>
      {image?.imgix_url && (
        <img
          src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
          alt={trail.title}
          width={800}
          height={450}
          className="w-full rounded-2xl object-cover"
        />
      )}
      {trail.metadata?.description && (
        <p className="whitespace-pre-line text-slate-700">
          {trail.metadata.description}
        </p>
      )}
    </div>
  )
}