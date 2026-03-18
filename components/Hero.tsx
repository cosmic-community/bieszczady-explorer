export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest-900">
      <img
        src="https://imgix.cosmicjs.com/977dd730-2318-11f1-8e73-95937fcad31d-photo-1500530855697-b586d89ba3ee-1773872394021.jpg?w=2000&h=1200&fit=crop&auto=format,compress"
        alt="Bieszczady mountains"
        width={1600}
        height={900}
        className="h-[420px] w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-6xl px-4 text-white space-y-4">
          <p className="text-sm uppercase tracking-widest text-earth-200">
            Bieszczady, Poland
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">
            Discover Poland’s wild mountain paradise
          </h1>
          <p className="max-w-2xl text-lg text-earth-100">
            Find the best hiking trails, local attractions, and cozy
            accommodations. Book your stay easily through recommended hotels and
            guesthouses.
          </p>
        </div>
      </div>
    </section>
  )
}