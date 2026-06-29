import SectionHeading from '../SectionHeading/SectionHeading.jsx'

const AreasWeServe = () => (
  <section className="relative w-full bg-ink-950">
    {/* desktop/tablet: original combined map + copy graphic, untouched */}
    <img
      src="/images/areas-we-serve.png"
      alt="Areas IronOak Property Services serves across the GTA: Peel, York, Durham, Halton, and the City of Toronto"
      className="hidden w-full sm:block"
    />

    {/* mobile: the baked-in heading/paragraph reads too small full-bleed, so we crop to
        just the map (which fills the frame edge-to-edge) and render the copy as real HTML */}
    <div className="block sm:hidden">
      <img
        src="/images/areas-we-serve-map.png"
        alt="Map of the GTA regions IronOak serves: Peel, York, Durham, Halton, and the City of Toronto"
        className="block w-full"
      />
      <div className="px-6 py-14">
        <SectionHeading
          label="Service Area"
          title="Areas We Serve"
          description="Serving Toronto, Peel, York, Durham, and Halton, IronOak provides dependable property care for residential buildings, commercial spaces, and everyday maintenance needs across the GTA."
          theme="dark"
        />
      </div>
    </div>
  </section>
)

export default AreasWeServe
