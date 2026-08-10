// Single source of truth for the production site URL — used to build canonical
// links, Open Graph / Twitter URLs, and JSON-LD across every page. Update this
// one value when a custom domain is configured; no other file should hardcode
// the production origin.
export const SITE_URL = 'https://www.ironoakproperties.ca'

// Real, verified business identity — used to build the homepage Organization
// JSON-LD and reused anywhere else that needs it, so it's only entered once.
// Do not add fields here (address, hours, ratings, coordinates, email) that
// haven't been verified — schema.org fields left out are simply omitted, not
// guessed. No business email is published yet (mailbox doesn't exist);
// re-add BUSINESS_EMAIL here once the domain and mailbox are live, then wire
// it back into Footer.jsx, WaysToConnect.jsx, and the Home.jsx JSON-LD.
export const BUSINESS_NAME  = 'IronOak Property Services Inc.'
export const BUSINESS_PHONE = '+1-416-570-9074'
export const BUSINESS_LOGO  = `${SITE_URL}/ironoak-logo.svg`

// Cities named in the visible "Serving Toronto & the Greater Toronto Area"
// copy (AreasWeServe.jsx) — reused as-is for areaServed in JSON-LD so
// structured data matches what's actually stated on the page.
export const SERVICE_AREA_CITIES = [
  'Toronto', 'North York', 'Scarborough', 'Etobicoke',
  'Mississauga', 'Brampton', 'Vaughan', 'Markham',
  'Richmond Hill', 'Oakville', 'Burlington', 'Milton', 'Hamilton',
]
