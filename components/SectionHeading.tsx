import Link from 'next/link'

interface SectionHeadingProps {
  title: string
  description: string
  href?: string
  linkLabel?: string
}

export default function SectionHeading({
  title,
  description,
  href,
  linkLabel
}: SectionHeadingProps) {
  return (
    <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
        <p className="text-slate-600">{description}</p>
      </div>
      {href && linkLabel && (
        <Link className="text-sm font-semibold text-forest-600" href={href}>
          {linkLabel}
        </Link>
      )}
    </div>
  )
}