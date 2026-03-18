'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 text-center space-y-4">
      <h2 className="text-2xl font-semibold">Something went wrong</h2>
      <p className="text-slate-600">
        Please try again. If the problem persists, refresh the page.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-full bg-forest-600 px-4 py-2 text-white hover:bg-forest-700 transition"
      >
        Try again
      </button>
    </div>
  )
}