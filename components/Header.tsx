import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/trails', label: 'Trails' },
  { href: '/attractions', label: 'Attractions' },
  { href: '/stays', label: 'Stays' }
]

export default function Header() {
  return (
    <header className="border-b border-earth-100 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-forest-700">
          Bieszczady Explorer
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-forest-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}