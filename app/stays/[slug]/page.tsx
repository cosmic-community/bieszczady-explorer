// app/stays/[slug]/page.tsx
import { getMetafieldValue, getStayBySlug } from '@/lib/cosmic'
import Link from 'next/link'

export default async function StayDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const stay = await getStayBySlug(slug)

  if (!stay) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-slate-600">Stay not found.</p>
        <Link className="text-forest-600 underline" href="/stays">
          Back to stays
        </Link>
      </div>
    )
  }

  const image = stay.metadata?.featured_image
  const stayType = getMetafieldValue(stay.metadata?.stay_type)
  const priceRange = getMetafieldValue(stay.metadata?.price_range)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 space-y-8">
      <Link className="text-forest-600 underline" href="/stays">
        ← Back to stays
      </Link>
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">{stay.title}</h1>
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
      </div>
      {image?.imgix_url && (
        <img
          src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
          alt={stay.title}
          width={800}
          height={450}
          className="w-full rounded-2xl object-cover"
        />
      )}
      {stay.metadata?.description && (
        <p className="whitespace-pre-line text-slate-700">
          {stay.metadata.description}
        </p>
      )}
      {stay.metadata?.booking_url && (
        <a
          href={stay.metadata.booking_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-forest-600 px-5 py-2 text-sm font-semibold text-white hover:bg-forest-700 transition"
        >
          Book this stay
        </a>
      )}
    </div>
  )
}