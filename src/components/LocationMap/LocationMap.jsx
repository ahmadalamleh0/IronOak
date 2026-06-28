const ADDRESS = '2233 Argentia Rd, Unit 302, Mississauga, Ontario, L5N 2X7'
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`

const LocationMap = () => (
  <section className="relative bg-ink-950 py-24 sm:py-28">
    <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
      <h2 className="text-gold-engraved font-script text-center text-6xl leading-none sm:text-7xl">
        location
      </h2>

      <div className="mt-10 overflow-hidden rounded-md border border-gold-400/15">
        <iframe
          title="IronOak Property Services Inc. location map"
          src={MAP_EMBED_SRC}
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[420px] w-full grayscale-[15%] invert-[92%] contrast-[1.05] hue-rotate-180 sm:h-[520px]"
        />
      </div>
    </div>
  </section>
)

export default LocationMap
