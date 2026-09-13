/**
 * LOCATION_PAGES — canonical data for each /service-areas/:slug page.
 *
 * These are local-SEO landing pages for cities IronOak already lists in the
 * "Where We Work" area grid (AreasWeServe.jsx) and JSON-LD (SERVICE_AREA_CITIES
 * in config/site.js). Every page reuses the same 5 real services and business
 * process — only the intro copy, area context and FAQ are city-specific.
 *
 * heroImage values reuse existing site photography (generic commercial /
 * residential property imagery already used on service pages) — none of it
 * is presented as depicting a project actually completed in that city.
 */

export const LOCATION_SERVICES = [
  {
    slug: 'property-maintenance-repairs',
    title: 'Property Maintenance & Handyman',
    blurb: 'Routine upkeep, responsive repairs and multi-trade coordination.',
  },
  {
    slug: 'interior-finishing',
    title: 'Interior Finishing',
    blurb: 'Painting, flooring, wallcoverings and common-area refreshes.',
  },
  {
    slug: 'installations-property-systems',
    title: 'Installations & Building Systems',
    blurb: 'CCTV, security cameras, access control and fixture installs.',
  },
  {
    slug: 'exterior-outdoor-improvements',
    title: 'Exterior & Outdoor Improvements',
    blurb: 'Entrances, walkways, lighting and seasonal property care.',
  },
  {
    slug: 'capital-project-management',
    title: 'Capital Projects & Custom Solutions',
    blurb: 'Coordinated capital improvements and multi-site rollout programs.',
  },
]

export const LOCATION_PROPERTY_TYPES = [
  { emoji: '🏠', label: 'Residential Homes' },
  { emoji: '🏢', label: 'Condos & Apartments' },
  { emoji: '🏬', label: 'Commercial Buildings' },
  { emoji: '🏭', label: 'Industrial & Mixed-Use' },
  { emoji: '🏘', label: 'Property Management & Multi-Unit' },
]

// Same four-stage flow described across the site's existing service pages
// (see sections.process in servicePages.js) — kept identical here rather
// than inventing a separate process for location pages.
export const LOCATION_PROCESS = [
  { num: '01', label: 'Request a Quote', body: 'Tell us about the property and the work you need — takes a couple of minutes.' },
  { num: '02', label: 'Property Assessment', body: 'We review the property, the scope and any access or scheduling requirements.' },
  { num: '03', label: 'Scope & Proposal', body: 'You get a clear scope and next steps before any work begins.' },
  { num: '04', label: 'Scheduled Work', body: 'Work is coordinated and completed, with follow-up as needed.' },
]

export const LOCATION_PAGES = [
  {
    slug: 'toronto',
    city: 'Toronto',
    heroImage: '/services/capital-project-management-hero.jpg',
    heroImageAlt: 'Modern glass office tower against a city skyline',
    heroSupportingLine: 'Downtown Core • Midtown • North York • Etobicoke',
    meta: {
      title: 'Property Services in Toronto | IronOak Property Services Inc.',
      description: 'IronOak provides property maintenance, interior finishing, CCTV installation, exterior improvements and capital project services for commercial, condominium and residential properties in Toronto.',
    },
    intro: [
      "Toronto's property stock ranges from dense downtown condominium towers and mixed-use commercial buildings to older low-rise apartment buildings and retail space in the surrounding neighbourhoods. Property managers and owners across the city are typically balancing tight access windows, resident or tenant schedules, and multiple buildings at once.",
      'IronOak supports property managers, condominium corporations and commercial owners in Toronto with maintenance, finishing, installation and capital project work — coordinated through a single point of contact so work in an occupied building stays organized from first call to completion.',
    ],
    areaNote: "Toronto's mix of high-rise condominiums, commercial towers and older low-rise buildings means property needs vary block by block — from routine building maintenance to larger common-area and capital upgrades.",
    faqs: [
      { q: 'Does IronOak provide property services in Toronto?', a: 'Yes. Toronto is one of the core areas IronOak serves, including downtown, midtown and the surrounding districts.' },
      { q: 'Do you work with condominium corporations and property management companies?', a: 'Yes. IronOak regularly supports condominium corporations, commercial property managers and multi-unit residential buildings across Toronto.' },
      { q: 'Can you coordinate work in an occupied high-rise building?', a: 'Yes. Work is planned around building access, resident or tenant schedules and any building-management requirements.' },
      { q: 'How do I request a quote for a Toronto property?', a: 'Use the Request a Quote form on this page — tell us about the property and the work you need, and our team will follow up with next steps.' },
    ],
  },
  {
    slug: 'mississauga',
    city: 'Mississauga',
    heroImage: '/services/exterior-outdoor-improvements-hero.webp',
    heroImageAlt: 'Illuminated commercial building entrance with landscaped walkway at dusk',
    heroSupportingLine: 'City Centre • Meadowvale • Port Credit • Airport Corridor',
    meta: {
      title: 'Property Services in Mississauga | IronOak Property Services Inc.',
      description: 'IronOak provides property maintenance, interior finishing, CCTV installation, exterior improvements and capital project services for commercial, condominium and industrial properties in Mississauga.',
    },
    intro: [
      "Mississauga's property landscape includes dense condominium clusters around City Centre, established residential neighbourhoods, and a large concentration of business parks, commercial plazas and industrial buildings along the airport corridor. That mix means property owners here are often managing very different building types under one portfolio.",
      'IronOak works with condominium corporations, commercial property managers and industrial property owners across Mississauga, coordinating maintenance, finishing, installations and larger project work so every property in a portfolio is handled to the same standard.',
    ],
    areaNote: "With a large share of business parks, commercial plazas and industrial space alongside its residential and condominium towers, Mississauga properties often call for coordinated support across very different building types.",
    faqs: [
      { q: 'Does IronOak provide property services in Mississauga?', a: 'Yes. Mississauga is one of the core areas IronOak serves, including City Centre, the airport corridor and surrounding neighbourhoods.' },
      { q: 'Do you support industrial and business-park properties?', a: 'Yes. IronOak supports commercial, industrial and mixed-use properties in Mississauga in addition to condominium and residential buildings.' },
      { q: 'Can you manage a portfolio of properties across Mississauga?', a: 'Yes. IronOak can coordinate maintenance and project work across multiple properties under one point of contact.' },
      { q: 'How do I request a quote for a Mississauga property?', a: 'Use the Request a Quote form on this page and our team will follow up to confirm scope and next steps.' },
    ],
  },
  {
    slug: 'brampton',
    city: 'Brampton',
    heroImage: '/services/property-maintenance-repairs-hero.webp',
    heroImageAlt: 'Building maintenance crew cleaning windows on a commercial facade',
    heroSupportingLine: 'Residential Communities • Retail Plazas • Industrial & Logistics',
    meta: {
      title: 'Property Services in Brampton | IronOak Property Services Inc.',
      description: 'IronOak provides property maintenance, interior finishing, CCTV installation, repairs and capital project services for residential, commercial and industrial properties in Brampton.',
    },
    intro: [
      "Brampton has grown quickly, with newer residential subdivisions and townhome communities alongside a significant industrial, warehouse and logistics sector and retail plazas along the main corridors. Property owners here range from individual homeowners to portfolio managers overseeing multiple commercial or industrial sites.",
      'IronOak supports residential, commercial and industrial property owners in Brampton with maintenance, finishing, installations and capital project work, coordinated around each property\'s specific access and operating requirements.',
    ],
    areaNote: "Brampton's newer residential subdivisions sit alongside a large industrial and logistics sector, so property support needs here span everything from townhome communities to warehouse and distribution facilities.",
    faqs: [
      { q: 'Does IronOak provide property services in Brampton?', a: 'Yes. Brampton is one of the core areas IronOak serves, including its residential communities and industrial corridors.' },
      { q: 'Do you support warehouse and industrial properties?', a: 'Yes. IronOak supports industrial, commercial, residential and mixed-use properties in Brampton.' },
      { q: 'Can you handle both repairs and larger renovation work?', a: 'Yes. IronOak coordinates one-time repairs as well as larger finishing and capital-improvement projects.' },
      { q: 'How do I request a quote for a Brampton property?', a: 'Use the Request a Quote form on this page — our team will follow up with next steps once we have the details.' },
    ],
  },
  {
    slug: 'markham',
    city: 'Markham',
    heroImage: '/services/interior-finishing-hero.jpg',
    heroImageAlt: 'Bright commercial office space mid-renovation with flooring materials staged on site',
    heroSupportingLine: 'Corporate Business Parks • Unionville • Newer Residential Developments',
    meta: {
      title: 'Property Services in Markham | IronOak Property Services Inc.',
      description: 'IronOak provides property maintenance, interior finishing, CCTV installation, exterior improvements and capital project services for commercial and residential properties in Markham.',
    },
    intro: [
      "Markham is known for its concentration of corporate offices and business parks alongside newer condominium and townhome developments. Commercial tenants and property managers here often need finish and installation work completed around active offices with minimal disruption.",
      'IronOak supports commercial property managers, corporate landlords and residential property owners in Markham with maintenance, interior finishing, installations and capital project work, scheduled around business hours and occupancy.',
    ],
    areaNote: 'Markham\'s mix of corporate business parks and newer residential developments means property work often needs to be scheduled carefully around active offices and occupied units.',
    faqs: [
      { q: 'Does IronOak provide property services in Markham?', a: 'Yes. Markham is one of the core areas IronOak serves, including its business parks and residential communities.' },
      { q: 'Can work be scheduled around business hours in an occupied office building?', a: 'Yes. IronOak plans installation, finishing and maintenance work around occupancy and business operating hours.' },
      { q: 'Do you support newer condominium and townhome developments?', a: 'Yes. IronOak supports condominium corporations and residential property owners in addition to commercial clients.' },
      { q: 'How do I request a quote for a Markham property?', a: 'Use the Request a Quote form on this page and our team will follow up to confirm scope and timing.' },
    ],
  },
  {
    slug: 'richmond-hill',
    city: 'Richmond Hill',
    heroImage: '/services/installations-property-systems-hero.webp',
    heroImageAlt: 'Modern commercial building entrance with automated glass doors and access-control panel',
    heroSupportingLine: 'Established Residential Neighbourhoods • Mid-Rise Condominiums',
    meta: {
      title: 'Property Services in Richmond Hill | IronOak Property Services Inc.',
      description: 'IronOak provides property maintenance, interior finishing, CCTV installation, exterior improvements and capital project services for residential and condominium properties in Richmond Hill.',
    },
    intro: [
      'Richmond Hill is an established community with a mix of single-family homes, townhomes and mid-rise condominium buildings, plus neighbourhood retail plazas. Property owners here often want a single, reliable contact for both routine upkeep and occasional larger projects.',
      'IronOak supports condominium corporations, residential property owners and neighbourhood commercial properties in Richmond Hill with maintenance, finishing, installations and project work — coordinated from first assessment through completion.',
    ],
    areaNote: 'Richmond Hill\'s established residential neighbourhoods and mid-rise condominium buildings typically call for a mix of routine maintenance and periodic common-area finishing or system upgrades.',
    faqs: [
      { q: 'Does IronOak provide property services in Richmond Hill?', a: 'Yes. Richmond Hill is one of the core areas IronOak serves.' },
      { q: 'Do you support mid-rise condominium buildings?', a: 'Yes. IronOak works with condominium corporations on maintenance, finishing and installation projects in Richmond Hill.' },
      { q: 'Can you support a single-family residential property as well?', a: 'Yes. IronOak supports individual residential homes as well as condominium and commercial properties.' },
      { q: 'How do I request a quote for a Richmond Hill property?', a: 'Use the Request a Quote form on this page — our team will follow up with next steps.' },
    ],
  },
  {
    slug: 'hamilton',
    city: 'Hamilton',
    heroImage: '/services/capital-building-retrofits.webp',
    heroImageAlt: 'Commercial storefront space mid-retrofit with staged materials and freshly finished ceiling',
    heroSupportingLine: 'Downtown Core • Established Commercial & Residential Buildings',
    meta: {
      title: 'Property Services in Hamilton | IronOak Property Services Inc.',
      description: 'IronOak provides property maintenance, repairs, interior finishing, CCTV installation and capital project services for commercial and residential properties in Hamilton.',
    },
    intro: [
      "Hamilton's building stock includes a large share of older commercial and residential properties alongside a growing downtown condominium market. Many of these buildings benefit from more hands-on maintenance and corrective repair work to keep them performing well.",
      'IronOak supports property owners and managers in Hamilton with responsive repairs, planned maintenance, interior finishing and building-system installations — work that\'s common in a city with a mix of heritage and newer construction.',
    ],
    areaNote: "Hamilton's older commercial and residential building stock, alongside its growing condominium market, means property support here often includes both corrective repair work and planned upgrades.",
    faqs: [
      { q: 'Does IronOak provide property services in Hamilton?', a: 'Yes. Hamilton is one of the core areas IronOak serves.' },
      { q: 'Do you work on older commercial and residential buildings?', a: 'Yes. IronOak supports both older building stock and newer developments with maintenance, repairs and finishing work.' },
      { q: 'Can you handle a single repair as well as ongoing maintenance?', a: 'Yes. IronOak coordinates both one-time repair requests and recurring maintenance programs.' },
      { q: 'How do I request a quote for a Hamilton property?', a: 'Use the Request a Quote form on this page and our team will follow up to confirm scope and next steps.' },
    ],
  },
  {
    slug: 'scarborough',
    city: 'Scarborough',
    heroImage: '/services/exterior-entrances-common-areas.jpg',
    heroImageAlt: 'Illuminated glass entrance of a commercial building reflecting the surrounding facade at dusk',
    heroSupportingLine: 'High-Rise Apartments • Retail Plazas • Established Neighbourhoods',
    meta: {
      title: 'Property Services in Scarborough | IronOak Property Services Inc.',
      description: 'IronOak provides property maintenance, interior finishing, CCTV installation, exterior improvements and capital project services for residential and commercial properties in Scarborough.',
    },
    intro: [
      'Scarborough is one of the largest and most diverse parts of Toronto, with a mix of high-rise apartment towers, low-rise retail plazas and established residential neighbourhoods. Property managers here are often coordinating maintenance and upgrades across a wide range of building ages and types.',
      'IronOak supports residential, condominium and commercial property owners in Scarborough with maintenance, finishing, installations and capital project work, coordinated around each building\'s occupancy and access requirements.',
    ],
    areaNote: "Scarborough's mix of high-rise apartment towers, retail plazas and established residential streets means property needs vary widely — from routine building upkeep to common-area and exterior upgrades.",
    faqs: [
      { q: 'Does IronOak provide property services in Scarborough?', a: 'Yes. Scarborough is one of the core areas IronOak serves.' },
      { q: 'Do you support high-rise apartment buildings?', a: 'Yes. IronOak supports high-rise residential and apartment buildings in addition to commercial and retail properties.' },
      { q: 'Can you coordinate exterior and common-area upgrades?', a: 'Yes. IronOak coordinates exterior improvements, common-area finishing and building-system installations.' },
      { q: 'How do I request a quote for a Scarborough property?', a: 'Use the Request a Quote form on this page — our team will follow up with next steps.' },
    ],
  },
  {
    slug: 'vaughan',
    city: 'Vaughan',
    heroImage: '/services/capital-project-management-overview.jpg',
    heroImageAlt: 'Bright contemporary office space mid-renovation with fresh finishes and materials staged by the windows',
    heroSupportingLine: 'Vaughan Metropolitan Centre • Business Parks • Newer Residential Developments',
    meta: {
      title: 'Property Services in Vaughan | IronOak Property Services Inc.',
      description: 'IronOak provides property maintenance, interior finishing, CCTV installation, exterior improvements and capital project services for commercial, industrial and residential properties in Vaughan.',
    },
    intro: [
      "Vaughan has developed rapidly, with large industrial and business-park zones alongside newer residential subdivisions and condominium developments around Vaughan Metropolitan Centre. Property owners here are frequently managing newer buildings that still need consistent, planned upkeep.",
      'IronOak supports commercial, industrial and residential property owners in Vaughan with maintenance, finishing, installations and capital project work — coordinated to keep newer properties performing as intended.',
    ],
    areaNote: "Vaughan's mix of industrial and business-park zones with newer residential and condominium development means property needs here range from warehouse upkeep to common-area finishing in newer buildings.",
    faqs: [
      { q: 'Does IronOak provide property services in Vaughan?', a: 'Yes. Vaughan is one of the core areas IronOak serves.' },
      { q: 'Do you support industrial and business-park properties?', a: 'Yes. IronOak supports industrial and commercial properties in Vaughan in addition to condominium and residential buildings.' },
      { q: 'Can you support a newer building that still needs planned maintenance?', a: 'Yes. IronOak provides planned maintenance programs suited to newer construction as well as older buildings.' },
      { q: 'How do I request a quote for a Vaughan property?', a: 'Use the Request a Quote form on this page and our team will follow up to confirm scope and next steps.' },
    ],
  },
  {
    slug: 'oakville',
    city: 'Oakville',
    heroImage: '/services/interior-finishing-hero.webp',
    heroImageAlt: 'Bright commercial interior space with exposed ceiling and city views mid-renovation',
    heroSupportingLine: 'Established Residential Neighbourhoods • Lakeside Commercial Properties',
    meta: {
      title: 'Property Services in Oakville | IronOak Property Services Inc.',
      description: 'IronOak provides property maintenance, interior finishing, CCTV installation, exterior improvements and capital project services for residential and commercial properties in Oakville.',
    },
    intro: [
      'Oakville is an established residential community along Lake Ontario, with a mix of single-family homes, townhome communities, low-rise condominiums and neighbourhood commercial properties. Property owners here often prioritize finish quality and a tidy, well-presented result.',
      'IronOak supports residential, condominium and commercial property owners in Oakville with maintenance, finishing, installations and project work, coordinated to fit the standard of the property and the neighbourhood around it.',
    ],
    areaNote: "Oakville's established residential neighbourhoods and low-rise condominium buildings tend to call for careful, higher-finish maintenance and upgrade work alongside routine upkeep.",
    faqs: [
      { q: 'Does IronOak provide property services in Oakville?', a: 'Yes. Oakville is one of the core areas IronOak serves.' },
      { q: 'Do you support low-rise condominium buildings?', a: 'Yes. IronOak works with condominium corporations on maintenance, finishing and installation projects in Oakville.' },
      { q: 'Can you support a single residential home as well as a commercial property?', a: 'Yes. IronOak supports residential, condominium and commercial properties in Oakville.' },
      { q: 'How do I request a quote for an Oakville property?', a: 'Use the Request a Quote form on this page — our team will follow up with next steps.' },
    ],
  },
]

export const getLocationBySlug = (slug) => LOCATION_PAGES.find((l) => l.slug === slug)
