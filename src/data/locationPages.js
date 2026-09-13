/**
 * LOCATION_PAGES — canonical data for each /service-areas/:slug page.
 *
 * These are local SEO landing pages for cities IronOak already lists in the
 * "Where We Work" area grid (AreasWeServe.jsx) and JSON-LD (SERVICE_AREA_CITIES
 * in config/site.js). Service, property type, process and FAQ content is
 * shared across every page (same real offering everywhere) and sourced from
 * the confirmed detail already published on the real service pages in
 * servicePages.js. Only the intro copy, area emphasis and one FAQ answer are
 * city specific, and none of it invents local offices, projects or claims.
 *
 * Style note: no hyphens or dashes appear in any visible copy below by
 * design (see LocationPage.jsx for the same rule in markup strings).
 *
 * heroImage values reuse existing site photography (the same generic hero
 * images already used on the matching /services/:slug pages) — none of it
 * is presented as depicting a project actually completed in that city.
 */

export const LOCATION_SERVICES = [
  {
    slug: 'property-maintenance-repairs',
    title: 'Property Maintenance and Handyman',
    summary: 'Routine upkeep and responsive repairs for buildings that need to keep functioning day to day.',
    body: "This service covers the ongoing care a property needs to stay in good working order, along with repairs when something breaks or wears out. It typically includes building repairs, plumbing and leak detection, electrical and lighting work, mechanical service, cleaning, and general handyman tasks. It suits property owners and managers who want a single team to call whether the issue is a leaking pipe, a broken fixture, or a routine inspection that turns up a short list of small jobs. Work is scheduled around occupants and access requirements rather than treated as a disruption to the property.",
    includes: ['Building repairs and general handyman work', 'Plumbing and leak detection', 'Electrical and lighting service', 'Commercial and window cleaning', 'Gutter cleaning and light landscaping'],
    image: '/services/property-maintenance-repairs-hero.webp',
    imageAlt: 'Building maintenance crew cleaning windows on a commercial facade',
  },
  {
    slug: 'interior-finishing',
    title: 'Interior Finishing',
    summary: 'Painting, flooring and finish work that refreshes interiors without shutting a property down.',
    body: "Interior finishing covers the surfaces people see every day, including painting, drywall repair, wallcovering, flooring, carpet and trim work. It addresses worn or dated common areas, damaged walls and flooring, and finishes that no longer match or hold up to daily use. Property managers typically request this service ahead of a lease turnover, alongside a broader upgrade, or simply because a lobby, corridor or unit needs a refresh. Work can be phased corridor by corridor or floor by floor so occupied areas stay usable while the rest of the building is completed.",
    includes: ['Interior painting and drywall repair', 'Wallcovering installation and replacement', 'Carpet and flooring programs', 'Trim and finish carpentry', 'Lighting and fixture upgrades tied to the finish work'],
    image: '/services/interior-finishing-hero.jpg',
    imageAlt: 'Bright commercial office space mid renovation with flooring materials staged on site',
  },
  {
    slug: 'installations-property-systems',
    title: 'Installations and Building Systems',
    summary: 'CCTV, access control and fixture installation for properties that need reliable systems in place.',
    body: "This service covers the installation of security cameras, access control and entry systems, lighting, fixtures and other building equipment. It suits properties without adequate camera coverage, buildings upgrading from an older system, or owners who want managed entry for a garage, lobby or restricted area. Camera systems are scoped around the property's layout and coverage needs, from a small residential setup to long range coverage for a warehouse or parking area, and every installation is tested and configured before handover.",
    includes: ['4K security camera systems', 'Long range and perimeter camera coverage', 'Access control and entry systems', 'Interior and exterior lighting upgrades', 'Fixture and equipment installation'],
    image: '/services/installations-property-systems-hero.webp',
    imageAlt: 'Modern commercial building entrance with automated glass doors and an access control panel',
  },
  {
    slug: 'exterior-outdoor-improvements',
    title: 'Exterior and Outdoor Improvements',
    summary: 'Entrances, walkways, lighting and seasonal upkeep that protect a property from the outside in.',
    body: "Exterior work covers everything from entrances and walkways to exterior lighting, power washing and seasonal cleanup. It addresses safety issues like uneven or damaged walkways, a tired or poorly lit entrance, or a parking garage that needs a proper clean. Many properties pair this with a seasonal program, spring and fall cleanup, gutter cleaning, and leaf and debris removal, so the exterior is looked after all year round rather than only when something needs fixing.",
    includes: ['Entrance and common area improvements', 'Exterior lighting and fixtures', 'Walkway, garage and power washing', 'Spring and fall property cleanup', 'Gutter cleaning and grounds upkeep'],
    image: '/services/exterior-outdoor-improvements-hero.webp',
    imageAlt: 'Illuminated commercial building entrance with a landscaped walkway at dusk',
  },
  {
    slug: 'capital-project-management',
    title: 'Capital Projects and Custom Solutions',
    summary: 'Larger improvements and multi site programs managed under one coordinated plan.',
    body: "Capital projects cover larger scoped work such as lighting rollouts, flooring and wallcovering replacement, CCTV and access control installation across a portfolio, common area upgrades, and custom carpentry or millwork. This service suits owners planning a bigger upgrade or a program that needs to be repeated consistently across several buildings. IronOak typically completes a pilot location first, confirms the approved standard, then coordinates the same scope, schedule and quality across the remaining properties.",
    includes: ['Multi site upgrade and rollout programs', 'Capital improvement and retrofit projects', 'Carpentry and custom millwork', 'Coordinated procurement and trade management', 'Planning through to completion and final review'],
    image: '/services/capital-project-management-hero.jpg',
    imageAlt: 'Modern glass office tower against a city skyline',
  },
]

export const LOCATION_PROPERTY_TYPES = [
  { emoji: '🏠', label: 'Residential Homes', body: 'Repairs, finishing and general upkeep for single family homes.' },
  { emoji: '🏢', label: 'Condos and Apartments', body: 'Common area maintenance, amenity upkeep and coordinated access for building wide work.' },
  { emoji: '🏬', label: 'Commercial Buildings', body: 'Tenant ready spaces, common area finishing and building system upkeep.' },
  { emoji: '🏭', label: 'Industrial and Mixed Use', body: 'Warehouse and facility maintenance, exterior and dock area upkeep, and larger installations.' },
  { emoji: '🏘', label: 'Property Management and Multi Unit', body: 'Portfolio wide coordination across several properties under one point of contact.' },
]

// Same four stage flow described across the site's existing service pages
// (see sections.process in servicePages.js), reused here rather than a
// separate process invented for location pages.
export const LOCATION_PROCESS = [
  { num: '01', label: 'Request a Quote', body: 'Tell us about the property and the work you need. It takes a couple of minutes.' },
  { num: '02', label: 'Property Assessment', body: 'We review the property, the scope, and any access or scheduling requirements.' },
  { num: '03', label: 'Scope and Proposal', body: 'You get a clear scope and next steps before any work begins.' },
  { num: '04', label: 'Scheduled Work', body: 'Work is coordinated and completed, with follow up as needed.' },
]

export const MAINTENANCE_VS_PROJECTS = {
  heading: 'Ongoing Maintenance or a Single Project',
  intro: 'IronOak supports two different kinds of requests, and many clients move between them over time depending on what the property needs.',
  columns: [
    {
      title: 'Ongoing Maintenance',
      body: 'A recurring arrangement where IronOak provides scheduled upkeep, preventative inspections and responsive support over time. This suits condominium corporations, commercial property managers and portfolio owners who want consistent care across one or several buildings without arranging a separate call every time something comes up.',
    },
    {
      title: 'Individual Projects',
      body: 'A defined piece of work with a clear scope, start and finish, such as a repair, an installation, a finishing project or a capital improvement. This suits a specific issue, a one off upgrade, or a project that does not need an ongoing arrangement once it is complete.',
    },
  ],
  closing: 'There is no need to decide in advance. A single repair can grow into an ongoing maintenance plan, and a maintenance client can still request a standalone project whenever one comes up.',
}

export const QUOTE_CHECKLIST = {
  heading: 'What to Include When You Request a Quote',
  intro: 'The more detail IronOak has up front, the faster a property assessment and quote can be prepared.',
  items: [
    { label: 'Property type and size', body: 'Whether it is a house, a condominium unit, a commercial building, or a multi unit portfolio, and roughly how large the space or job is.' },
    { label: 'The work you need or the problem you are seeing', body: 'A short description of what is happening or what you would like done is enough to get started.' },
    { label: 'Timeline', body: 'Whether the work is urgent, needed within a set window, or flexible.' },
    { label: 'Access and scheduling', body: 'Building access requirements, tenant or resident occupancy, parking, and hours when work can take place.' },
    { label: 'Ongoing or one time', body: 'Whether you are looking for a single repair or project, or an ongoing maintenance arrangement.' },
    { label: 'Contact details', body: 'Your name, phone number and the property address so the team can follow up with next steps.' },
  ],
}

// Shared, substantial FAQ content that applies the same way everywhere.
// Each page adds one final, genuinely local question (see LOCATION_PAGES).
export const LOCATION_FAQS_SHARED = [
  {
    q: 'What does a property assessment involve?',
    a: 'IronOak reviews the property, the issue or scope you have described, and any access or scheduling requirements before confirming a plan. Smaller repairs can often be assessed from the details you provide, while larger or less defined scopes may involve a site visit. Either way, you receive a clear scope and next steps before any work begins, so there are no surprises once work is scheduled.',
  },
  {
    q: 'Can work be coordinated around tenants, residents or business hours?',
    a: 'Yes. Maintenance, finishing and installation work is routinely planned around occupancy, access windows and daily operations. This might mean phasing a finishing project corridor by corridor, scheduling noisier work outside business hours, or coordinating access with a superintendent or building manager. Mention any occupancy or access constraints when you request a quote so they can be built into the plan from the start.',
  },
  {
    q: 'Do you handle both a single repair and a larger renovation or project?',
    a: 'Yes. IronOak coordinates one time repairs as well as larger finishing, installation and capital improvement projects, and a property can move between the two as needs change. Requesting a single repair does not commit you to an ongoing arrangement, and an ongoing maintenance client can still request a standalone project whenever one comes up.',
  },
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
    heroIntro: "Toronto's property stock ranges from dense downtown condominium towers and mixed use commercial buildings to older low rise apartment buildings and retail space in the surrounding neighbourhoods. Property managers and owners across the city are typically balancing tight access windows, resident or tenant schedules, and several buildings at once.",
    overview: 'IronOak supports property managers, condominium corporations and commercial owners with maintenance, finishing, installation and capital project work, coordinated through a single point of contact so work in an occupied building stays organized from the first call through to completion.',
    areaNote: "Toronto's mix of high rise condominiums, commercial towers and older low rise buildings means property needs vary block by block, from routine building maintenance to larger common area and capital upgrades.",
    localFaq: {
      q: 'Does IronOak provide these services in Toronto?',
      a: 'Yes. Toronto is one of the areas IronOak actively serves, including the downtown core, midtown and the surrounding districts, alongside the rest of the GTA. Request a quote with your property details and the team will confirm availability and next steps.',
    },
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
    heroIntro: "Mississauga's property landscape includes dense condominium clusters around City Centre, established residential neighbourhoods, and a large concentration of business parks, commercial plazas and industrial buildings along the airport corridor.",
    overview: 'IronOak works with condominium corporations, commercial property managers and industrial property owners, coordinating maintenance, finishing, installations and larger project work so every property in a portfolio is handled to the same standard.',
    areaNote: 'With a large share of business parks, commercial plazas and industrial space alongside its residential and condominium towers, properties here often call for coordinated support across several very different building types.',
    localFaq: {
      q: 'Does IronOak provide these services in Mississauga?',
      a: 'Yes. Mississauga is one of the areas IronOak actively serves, including City Centre, the airport corridor and the surrounding neighbourhoods. Request a quote with your property details and the team will confirm availability and next steps.',
    },
  },
  {
    slug: 'brampton',
    city: 'Brampton',
    heroImage: '/services/property-maintenance-repairs-hero.webp',
    heroImageAlt: 'Building maintenance crew cleaning windows on a commercial facade',
    heroSupportingLine: 'Residential Communities • Retail Plazas • Industrial and Logistics',
    meta: {
      title: 'Property Services in Brampton | IronOak Property Services Inc.',
      description: 'IronOak provides property maintenance, interior finishing, CCTV installation, repairs and capital project services for residential, commercial and industrial properties in Brampton.',
    },
    heroIntro: 'Brampton has grown quickly, with newer residential subdivisions and townhome communities alongside a significant industrial, warehouse and logistics sector, plus retail plazas along the main corridors.',
    overview: "IronOak supports residential, commercial and industrial property owners with maintenance, finishing, installations and capital project work, coordinated around each property's specific access and operating requirements.",
    areaNote: "Brampton's newer residential subdivisions sit alongside a large industrial and logistics sector, so property support here spans everything from townhome communities to warehouse and distribution facilities.",
    localFaq: {
      q: 'Does IronOak provide these services in Brampton?',
      a: 'Yes. Brampton is one of the areas IronOak actively serves, including its residential communities and industrial corridors. Request a quote with your property details and the team will confirm availability and next steps.',
    },
  },
  {
    slug: 'markham',
    city: 'Markham',
    heroImage: '/services/interior-finishing-hero.jpg',
    heroImageAlt: 'Bright commercial office space mid renovation with flooring materials staged on site',
    heroSupportingLine: 'Corporate Business Parks • Unionville • Newer Residential Developments',
    meta: {
      title: 'Property Services in Markham | IronOak Property Services Inc.',
      description: 'IronOak provides property maintenance, interior finishing, CCTV installation, exterior improvements and capital project services for commercial and residential properties in Markham.',
    },
    heroIntro: 'Markham is known for its concentration of corporate offices and business parks alongside newer condominium and townhome developments, with commercial tenants and property managers often needing finish and installation work completed around active offices.',
    overview: 'IronOak supports commercial property managers, corporate landlords and residential property owners with maintenance, interior finishing, installations and capital project work, scheduled around business hours and occupancy.',
    areaNote: "Markham's mix of corporate business parks and newer residential developments means property work often needs to be scheduled carefully around active offices and occupied units.",
    localFaq: {
      q: 'Does IronOak provide these services in Markham?',
      a: 'Yes. Markham is one of the areas IronOak actively serves, including its business parks and residential communities. Request a quote with your property details and the team will confirm availability and next steps.',
    },
  },
  {
    slug: 'richmond-hill',
    city: 'Richmond Hill',
    heroImage: '/services/installations-property-systems-hero.webp',
    heroImageAlt: 'Modern commercial building entrance with automated glass doors and an access control panel',
    heroSupportingLine: 'Established Residential Neighbourhoods • Mid Rise Condominiums',
    meta: {
      title: 'Property Services in Richmond Hill | IronOak Property Services Inc.',
      description: 'IronOak provides property maintenance, interior finishing, CCTV installation, exterior improvements and capital project services for residential and condominium properties in Richmond Hill.',
    },
    heroIntro: 'Richmond Hill is an established community with a mix of single family homes, townhomes and mid rise condominium buildings, plus neighbourhood retail plazas.',
    overview: 'IronOak supports condominium corporations, residential property owners and neighbourhood commercial properties with maintenance, finishing, installations and project work, coordinated from the first assessment through to completion.',
    areaNote: "Richmond Hill's established neighbourhoods and mid rise condominium buildings typically call for a mix of routine maintenance and periodic common area finishing or system upgrades.",
    localFaq: {
      q: 'Does IronOak provide these services in Richmond Hill?',
      a: 'Yes. Richmond Hill is one of the areas IronOak actively serves. Request a quote with your property details and the team will confirm availability and next steps.',
    },
  },
  {
    slug: 'hamilton',
    city: 'Hamilton',
    heroImage: '/services/capital-building-retrofits.webp',
    heroImageAlt: 'Commercial storefront space mid retrofit with staged materials and a freshly finished ceiling',
    heroSupportingLine: 'Downtown Core • Established Commercial and Residential Buildings',
    meta: {
      title: 'Property Services in Hamilton | IronOak Property Services Inc.',
      description: 'IronOak provides property maintenance, repairs, interior finishing, CCTV installation and capital project services for commercial and residential properties in Hamilton.',
    },
    heroIntro: "Hamilton's building stock includes a large share of older commercial and residential properties alongside a growing downtown condominium market, and many of these buildings benefit from more attentive maintenance and corrective repair work to keep them performing well.",
    overview: 'IronOak supports property owners and managers with responsive repairs, planned maintenance, interior finishing and building system installations, work that suits a city with a mix of heritage and newer construction.',
    areaNote: "Hamilton's older commercial and residential building stock, alongside its growing condominium market, means property support here often includes both corrective repair work and planned upgrades.",
    localFaq: {
      q: 'Does IronOak provide these services in Hamilton?',
      a: 'Yes. Hamilton is one of the areas IronOak actively serves. Request a quote with your property details and the team will confirm availability and next steps.',
    },
  },
  {
    slug: 'scarborough',
    city: 'Scarborough',
    heroImage: '/services/exterior-entrances-common-areas.jpg',
    heroImageAlt: 'Illuminated glass entrance of a commercial building reflecting the surrounding facade at dusk',
    heroSupportingLine: 'High Rise Apartments • Retail Plazas • Established Neighbourhoods',
    meta: {
      title: 'Property Services in Scarborough | IronOak Property Services Inc.',
      description: 'IronOak provides property maintenance, interior finishing, CCTV installation, exterior improvements and capital project services for residential and commercial properties in Scarborough.',
    },
    heroIntro: 'Scarborough is one of the largest and most diverse parts of Toronto, with a mix of high rise apartment towers, low rise retail plazas and established residential neighbourhoods.',
    overview: "IronOak supports residential, condominium and commercial property owners with maintenance, finishing, installations and capital project work, coordinated around each building's occupancy and access requirements.",
    areaNote: "Scarborough's mix of high rise apartment towers, retail plazas and established residential streets means property needs vary widely, from routine building upkeep to common area and exterior upgrades.",
    localFaq: {
      q: 'Does IronOak provide these services in Scarborough?',
      a: 'Yes. Scarborough is one of the areas IronOak actively serves. Request a quote with your property details and the team will confirm availability and next steps.',
    },
  },
  {
    slug: 'vaughan',
    city: 'Vaughan',
    heroImage: '/services/capital-project-management-overview.jpg',
    heroImageAlt: 'Bright contemporary office space mid renovation with fresh finishes and materials staged by the windows',
    heroSupportingLine: 'Vaughan Metropolitan Centre • Business Parks • Newer Residential Developments',
    meta: {
      title: 'Property Services in Vaughan | IronOak Property Services Inc.',
      description: 'IronOak provides property maintenance, interior finishing, CCTV installation, exterior improvements and capital project services for commercial, industrial and residential properties in Vaughan.',
    },
    heroIntro: 'Vaughan has developed rapidly, with large industrial and business park zones alongside newer residential subdivisions and condominium developments around Vaughan Metropolitan Centre.',
    overview: 'IronOak supports commercial, industrial and residential property owners with maintenance, finishing, installations and capital project work, coordinated to keep newer properties performing as intended.',
    areaNote: "Vaughan's mix of industrial and business park zones with newer residential and condominium development means property needs range from warehouse upkeep to common area finishing in newer buildings.",
    localFaq: {
      q: 'Does IronOak provide these services in Vaughan?',
      a: 'Yes. Vaughan is one of the areas IronOak actively serves. Request a quote with your property details and the team will confirm availability and next steps.',
    },
  },
  {
    slug: 'oakville',
    city: 'Oakville',
    heroImage: '/services/interior-finishing-hero.webp',
    heroImageAlt: 'Bright commercial interior space with an exposed ceiling and city views mid renovation',
    heroSupportingLine: 'Established Residential Neighbourhoods • Lakeside Commercial Properties',
    meta: {
      title: 'Property Services in Oakville | IronOak Property Services Inc.',
      description: 'IronOak provides property maintenance, interior finishing, CCTV installation, exterior improvements and capital project services for residential and commercial properties in Oakville.',
    },
    heroIntro: 'Oakville is an established residential community along Lake Ontario, with a mix of single family homes, townhome communities, low rise condominiums and neighbourhood commercial properties.',
    overview: 'IronOak supports residential, condominium and commercial property owners with maintenance, finishing, installations and project work, coordinated to fit the standard of the property and the surrounding neighbourhood.',
    areaNote: "Oakville's established neighbourhoods and low rise condominium buildings tend to call for careful, higher finish maintenance and upgrade work alongside routine upkeep.",
    localFaq: {
      q: 'Does IronOak provide these services in Oakville?',
      a: 'Yes. Oakville is one of the areas IronOak actively serves. Request a quote with your property details and the team will confirm availability and next steps.',
    },
  },
]

export const getLocationBySlug = (slug) => LOCATION_PAGES.find((l) => l.slug === slug)
