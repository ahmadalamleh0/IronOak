/**
 * SERVICE_PAGES — canonical data for each dedicated service page.
 *
 * illustrationIndex maps to ILLUSTRATION_COMPONENTS[n] from ServicesIllustrations.
 * related is an array of 3 sibling indices (0-based) shown at the bottom of each page.
 * sections holds the editable placeholder copy for each content block.
 */
export const SERVICE_PAGES = [
  /* 01 ─────────────────────────────────────────────────────────────────── */
  {
    slug:               'property-maintenance-repairs',
    num:                '01',
    category:           'Property Maintenance',
    title:              'Property Maintenance & Handyman',
    description:        'Responsive repairs, planned maintenance, and coordinated property support for commercial, condominium, hospitality, and multi-site properties.',
    illustrationIndex:  0,
    meta: {
      title:       'Commercial Property Maintenance Toronto & GTA | IronOak',
      description: 'Commercial property maintenance, repairs, plumbing, electrical, cleaning and ongoing building support across Toronto, Mississauga and the GTA.',
    },
    related: [2, 3, 4],
    sections: {
      overview:    'Our property maintenance and repair services are designed to keep your property performing at its best year-round. We manage everything from routine upkeep to responsive repairs — providing a single point of contact across all trades. A full breakdown of our service scope is being prepared.',
      includes: [
        'Routine inspections & responsive repairs',
        'Preventative maintenance scheduling',
        'Emergency response coordination',
        'Multi-trade service management',
      ],
      properties:  'We support residential buildings, commercial properties, and condominium corporations across the Greater Toronto Area.',
      process:     ['Assessment', 'Scope Planning', 'Coordination', 'Completion & Follow-up'],
      faq: [
        { q: 'What types of properties do you service?',        a: 'We work with residential buildings, commercial properties, and condominium corporations across the GTA. Contact us with your property details for a tailored discussion.' },
        { q: 'How quickly can you respond to repair requests?', a: 'Response times are matched to the urgency of the request. Reach out directly and we will outline timelines based on your specific situation.' },
      ],
    },

    /* richContent — same premium template used across the site, with copy and
       a unique "Approach Note" section adapted for maintenance & repair work. */
    richContent: {
      heroImage:            '/services/property-maintenance-repairs-hero.webp',
      heroImageAlt:         'Building maintenance crew cleaning windows on a commercial facade with a city skyline in the background',
      heroOverlayLight:     true,
      heroHeading:          ['Property Maintenance &', 'Handyman'],
      heroSupportingLine:   'Commercial • Condominium • Hospitality • Multi-Site',

      intro: [
        { label: 'Inspect', body: 'Assess the property, the issue, and the priorities before work begins.' },
        { label: 'Resolve', body: 'Complete repairs and corrective work coordinated around daily operations.' },
        { label: 'Maintain', body: 'Keep the property performing through planned, ongoing upkeep.' },
      ],

      positioning: {
        eyebrow: 'ONGOING PROPERTY MAINTENANCE',
        heading: ['Maintenance Support That', 'Keeps Properties Running'],
        body: 'IronOak provides planned maintenance and responsive repair support across commercial, condominium and hospitality properties. From building repairs, plumbing and leak detection to electrical, mechanical, cleaning and general upkeep, work is coordinated around occupants, access requirements and day-to-day property operations.',
        ctaLabel: 'Explore maintenance services',
        ctaHref: '#rp-typical-h',
      },

      typicalProjects: {
        heading: 'Typical maintenance and repair work',
        wideCards: true,
        groups: [
          { num: '01', title: 'Cleaning & Upkeep', body: 'Ongoing cleaning and upkeep services that help keep shared spaces, exteriors and high-traffic areas presentable and well maintained.', image: '/services/maintenance-cleaning-upkeep.jpg', imageAlt: 'Commercial cleaning cart staged in front of elevators in a building lobby' },
          { num: '02', title: 'Repairs & Handyman Services', body: 'Day-to-day building repairs, handyman work and corrective maintenance handled across active commercial and multi-residential properties.', image: '/services/maintenance-repairs-handyman.jpg', imageAlt: 'Metal ductwork with zone dampers installed in an open commercial ceiling' },
          { num: '03', title: 'Plumbing & Corrective Support', body: 'Plumbing, leak detection and responsive repair support for issues affecting property function and day-to-day operations.', image: '/services/maintenance-plumbing-corrective.jpg', imageAlt: 'Technician servicing commercial plumbing pipes, valves and pressure gauges' },
          { num: '04', title: 'Electrical & Mechanical Support', body: 'Routine electrical, lighting and mechanical service work supporting the day-to-day operation of the property.', image: '/services/maintenance-electrical-mechanical.jpg', imageAlt: 'Technician servicing a commercial electrical control panel while consulting a manual' },
        ],
      },

      serviceList: {
        heading: 'Property Maintenance Scope',
        body:    'A full range of maintenance and property-care services delivered across individual properties, managed portfolios, and multi-site programs.',
        emphasized: true,
        items: [
          'Building Maintenance',
          'Mechanical Services',
          'Electrical & Lighting Services',
          'Plumbing & Leak Detection',
          'Handyman & Property Repairs',
          'Commercial Cleaning',
          'Window Cleaning',
          'Junk Removal',
          'Gutter Cleaning',
          'Light Landscaping',
        ],
      },

      industries: {
        heading: 'Industries We Serve',
        items: ['Retail', 'Construction Sites', 'Industrial Facilities', 'Condos & Apartments', 'Commercial Buildings', 'Hospitality'],
      },

      approachNote: {
        eyebrow: 'How We Support Properties',
        heading: 'From one repair to ongoing property support.',
        body:    'Support can be scoped as a single repair or an ongoing maintenance program, both delivered through the same coordinated approach.',
        items: [
          { label: 'Responsive Work', body: 'Individual repair and corrective needs, coordinated as they arise.' },
          { label: 'Planned Support', body: 'Recurring or scheduled maintenance across one or multiple properties.' },
        ],
      },

      photoBannerAfterBenefits: true,
      photoBanner: {
        heading: 'More than fixing what breaks.',
        body:    'Ongoing maintenance helps identify issues early, coordinate repairs efficiently and keep properties operating as they should.',
        image:    '/services/maintenance-photo-banner.jpg',
        imageAlt: 'Active commercial repair and maintenance work with equipment and ladders in an open building space',
        aspectRatio: '3 / 2',
      },

      faqEyebrow: 'MAINTENANCE QUESTIONS',
      faqIntro:   'Helpful details about responsive repairs, planned upkeep and ongoing property support.',
      faqs: [
        { q: 'Can IronOak handle both one-time repairs and ongoing maintenance?', a: 'Yes. IronOak can coordinate individual repair requests as well as planned or recurring maintenance support for one property or multiple locations.' },
        { q: 'How are maintenance requests assessed and scheduled?', a: 'Each request is reviewed based on the issue, property conditions, access requirements and urgency. IronOak then defines the appropriate scope and coordinates the work around property operations.' },
        { q: 'Can repairs be completed while the property remains occupied?', a: 'In many cases, yes. Work can be phased and scheduled around tenants, residents, guests and operating hours to help limit disruption.' },
      ],

      finalCta: {
        heading:      'Need a repair or ongoing maintenance support?',
        body:         "Tell us about the property and the work you need completed. We'll help you understand the next step.",
        phoneDisplay: '(416) 570-9074',
        phoneHref:    'tel:+14165709074',
      },
    },
  },

  /* 04 (num swapped with Interior Finishing below; array position unchanged to preserve `related` indices) */
  {
    slug:               'capital-project-management',
    num:                '04',
    category:           'Capital Projects',
    title:              'Capital Projects & Custom Solutions',
    description:        'Coordinated capital improvements, multi-site rollout programs and custom property solutions delivered with consistent scope, scheduling and execution.',
    illustrationIndex:  3,
    meta: {
      title:       'Capital Projects & Multi-Site Upgrades Toronto | IronOak',
      description: 'IronOak coordinates capital improvements, multi-site rollout programs, building retrofits, carpentry and millwork across Toronto and the GTA.',
    },
    related: [3, 2, 4],
    sections: {
      overview:    'We manage larger capital-improvement projects, multi-trade scopes, and repeatable rollout programs across multiple stores, buildings or properties — as well as custom and purpose-built requirements that fall outside a standard scope. Full project management service details are being prepared.',
      includes: [
        'Capital project planning & budgeting',
        'Multi-site rollout coordination',
        'Contractor procurement & management',
        'Custom and purpose-built solutions',
      ],
      properties:  'We work with property owners, condominium corporations, commercial operators, and real estate managers on capital and custom programs of varying scale.',
      process:     ['Discovery & Scope', 'Project Planning', 'Construction Execution', 'Completion & Sign-off'],
      faq: [
        { q: 'How do you handle multi-site or phased projects?', a: 'We build structured coordination plans that align timelines across sites and phases. Reach out to discuss your specific program requirements.' },
        { q: 'Do you manage subcontractors directly?',           a: 'Yes. We take responsibility for trade coordination and contractor management throughout the project. Contact us for more information.' },
      ],
    },

    /* richContent — presence of this object switches ServicePage.jsx into the
       premium light-theme master template. Other services fall back to the
       generic `sections` render above until they're migrated the same way. */
    richContent: {
      heroImage:          '/services/capital-project-management-hero.jpg',
      heroImageAlt:       'Looking up at a modern glass office tower with a construction crane reflected in the facade against a blue sky',
      heroHeading:        ['Capital Projects &', 'Custom Solutions'],
      heroSupportingLine: 'Commercial • Condominium • Hospitality • Multi-Site',

      intro: [
        { label: 'Scope',      body: 'Define the locations, requirements, standards, access conditions, and completion expectations before work begins.' },
        { label: 'Coordinate', body: 'Organize trades, materials, schedules, site contacts, and operational requirements through one structured plan.' },
        { label: 'Deliver',    body: 'Manage execution, progress communication, quality review, deficiencies, and final closeout.' },
      ],

      positioning: {
        eyebrow: 'CAPITAL PROJECT DELIVERY',
        heading: ['Coordinated Projects Across', 'Properties, Trades and Locations'],
        body: 'IronOak coordinates capital improvements, multi-trade scopes and multi-site upgrade programs from planning through completion. Interior finishing, CCTV, lighting, exterior improvements, flooring, millwork and other project requirements can be managed under one coordinated scope, helping property teams maintain consistent standards, schedules and communication across every location.',
        ctaLabel: 'Explore capital project delivery',
        ctaHref: '#rp-typical-h',
      },

      overview: {
        eyebrow:    'Capital Project Delivery',
        heading:    'Planned around the property, the people, and the operation.',
        paragraphs: [
          'Every capital project begins with understanding the property, the required outcome, and how the work fits around ongoing operations.',
          'IronOak helps coordinate the project from initial site review and scope development through scheduling, execution, progress reporting, and closeout.',
        ],
        image:    '/services/capital-project-management-overview.jpg',
        imageAlt: 'Bright contemporary office space mid-renovation with new furniture, fresh finishes and materials staged by the windows',
      },

      typicalProjects: {
        heading: 'Typical capital and custom project work',
        wideCards: true,
        groups: [
          { num: '01', title: 'Multi-Site Upgrade Programs', body: 'Coordinated improvements delivered across multiple stores, buildings or properties with consistent scopes, schedules and quality standards.', image: '/services/capital-project-multi-site.jpg', imageAlt: 'Aerial view of a multi-tenant commercial plaza with coordinated brick facade and signage' },
          { num: '02', title: 'Capital Improvement Projects', body: 'Larger property upgrades involving multiple trades, phases and service areas managed under one coordinated project.', image: '/services/capital-improvement-projects.webp', imageAlt: 'Large multi-trade commercial renovation in progress with exposed structural elements, millwork stations and project drawings' },
          { num: '03', title: 'Carpentry & Millwork', body: 'Custom millwork, built-ins, finish carpentry and purpose-built features developed around the property’s specific requirements.', image: '/services/capital-project-commercial-interior.jpg', imageAlt: 'Freshly finished hotel corridor with new carpet, trim and guest room doors' },
          { num: '04', title: 'Building Retrofits & Reconfigurations', body: 'Existing spaces, systems and property features upgraded or reconfigured to meet new operational, functional or building requirements.', image: '/services/capital-building-retrofits.webp', imageAlt: 'Commercial storefront space mid-retrofit with protected glass, staged materials and freshly finished ceiling and walls' },
        ],
      },

      serviceList: {
        heading: 'One coordinated program. Multiple types of work.',
        body:    'A single capital or custom project can span several types of work, coordinated under one plan and one point of contact.',
        items: [
          'Lighting and fixture rollout programs',
          'Flooring, carpet and wallcovering replacements',
          'CCTV and access-control installations',
          'Exterior and entrance improvements',
          'Common-area upgrade programs',
          'Carpentry and custom millwork',
          'Multi-building property improvements',
          'Branded or purpose-built installations',
        ],
      },

      industries: {
        heading: 'Industries We Serve',
        items: ['Retail', 'Construction Sites', 'Industrial Facilities', 'Condos & Apartments', 'Commercial Buildings', 'Hospitality'],
      },

      processSteps: {
        heading: 'Pilot once. Roll out consistently.',
        body:    'IronOak can complete an initial location, establish the approved scope and standards, then coordinate the same improvement program across an entire portfolio.',
        dark:    true,
        steps: [
          { num: '01', label: 'Pilot Location' },
          { num: '02', label: 'Approve the Standard' },
          { num: '03', label: 'Coordinate the Rollout' },
          { num: '04', label: 'Deliver Across Locations' },
        ],
      },

      relatedArticleSlug: 'how-to-plan-a-multi-site-property-upgrade',

      faqEyebrow: 'CAPITAL & CUSTOM PROJECT QUESTIONS',
      faqIntro:   'Helpful information about multi-site rollout programs, custom project scope and coordinated delivery.',
      faqs: [
        { q: 'Can IronOak manage the same improvement program across multiple locations?', a: 'Yes. IronOak can coordinate repeatable scopes, schedules, trades and quality standards across multi-site property portfolios.' },
        { q: 'How is a custom or one-off project priced?', a: 'Custom projects are scoped and priced individually based on your specific requirements. Contact us to start with a conversation.' },
        { q: 'What does IronOak manage from planning through completion?', a: 'Depending on the project, IronOak can support scope development, scheduling, trade coordination, execution oversight, progress communication and final closeout.' },
      ],

      finalCta: {
        heading:      'Planning a capital project or a custom scope?',
        body:         "Tell us about the property, the locations, and the work you need completed. We'll help you understand the next step.",
        phoneDisplay: '(416) 570-9074',
        phoneHref:    'tel:+14165709074',
      },
    },
  },

  /* 03 (num swapped with Capital Projects above; array position unchanged to preserve `related` indices) */
  {
    slug:               'interior-finishing',
    num:                '03',
    category:           'Interior Finishing',
    title:              'Interior Finishing',
    description:        'Professional finishing work for flooring, carpet replacement, wallcoverings, painting, and complete interior refreshes.',
    illustrationIndex:  2,
    meta: {
      title:       'Commercial Interior Finishing Toronto & GTA | IronOak',
      description: 'Commercial interior finishing including painting, flooring, tile, drywall, wallcoverings and common-area upgrades across Toronto and the GTA.',
    },
    related: [0, 3, 1],
    sections: {
      overview:    'Our interior finishing work covers everything from fresh paint and new flooring to full wallcovering installations and custom surface finishes. We deliver clean, consistent results that elevate the appearance and feel of any property interior. Detailed content is being prepared.',
      includes: [
        'Flooring installation & replacement',
        'Carpet supply and installation',
        'Painting & decorative wallcoverings',
        'Custom interior surface finishes',
      ],
      properties:  'We complete interior finishing work in residential condominiums, commercial offices, hospitality properties, and multi-unit residential buildings.',
      process:     ['Site Assessment', 'Material Selection', 'Installation', 'Quality Review'],
      faq: [
        { q: 'Can you match existing finishes in an occupied building?', a: 'Yes — we take care to match existing finishes and coordinate work to limit disruption. Share your project details and we will discuss the best approach.' },
        { q: 'Do you supply materials as well as labour?',               a: 'We can supply materials or work with your preferred suppliers. Contact us to discuss your project scope.' },
      ],
    },

    /* richContent — same premium template used across the site, with copy and
       a unique visual-split "Overview" section adapted for finish materials. */
    richContent: {
      heroImage:            '/services/interior-finishing-hero.webp',
      heroImageAlt:         'Bright commercial office space mid-renovation with exposed ceiling, city views and flooring materials staged on site',
      heroOverlayLight:     true,
      heroHeading:          ['Interior', 'Finishing'],
      heroSupportingLine:   'Commercial • Condominium • Hospitality • Multi-Site',

      intro: [
        { label: 'Prepare', body: 'Assess surfaces, materials, and access conditions before work begins.' },
        { label: 'Finish',  body: 'Complete finish work to spec, coordinated around occupancy and operations.' },
        { label: 'Refine',  body: 'Review, touch up, and confirm a consistent, polished result.' },
      ],

      positioning: {
        eyebrow: 'INTERIOR FINISHING & SURFACE UPGRADES',
        heading: ['Interior Finishes Built', 'for Active Properties'],
        body: 'IronOak coordinates painting, drywall repairs, wallcoverings, flooring, tile and carpet replacement for commercial, condominium and hospitality properties. Work can be phased around occupied corridors, lobbies, common areas and operating schedules, helping property teams refresh worn interiors while maintaining consistent finishes across the space.',
        watermarkLg: true,
        ctaLabel: 'Explore interior finishing',
        ctaHref: '#rp-typical-h',
      },

      typicalProjects: {
        heading: 'Typical interior finishing work',
        wideCards: true,
        centerLastOdd: true,
        groups: [
          { num: '01', title: 'Walls & Surface Finishes', body: 'Painting, wallcoverings and surface improvements that refresh and protect active interiors.', image: '/services/interior-walls-surfaces.webp', imageAlt: 'Patterned commercial vinyl wallcovering behind a bar counter with stools' },
          { num: '02', title: 'Flooring & Carpet', body: 'Flooring and carpet replacement planned around access, occupancy and operating schedules.', image: '/services/interior-flooring-carpet.jpg', imageAlt: 'Patterned carpet installation in an elegant hotel guest-room corridor' },
          { num: '03', title: 'Common-Area Refreshes', body: 'Coordinated finish upgrades for corridors, lobbies, shared spaces and guest-facing environments.', image: '/services/interior-common-area-refreshes.webp', imageAlt: 'Premium commercial washroom with marble vanities and backlit mirrors' },
          { num: '04', title: 'Painting & Finishing', body: 'Professional painting and finishing work that refreshes interiors, improves presentation and supports long-term property upkeep.', image: '/services/interior-painting-finishing.jpg', imageAlt: 'Commercial office painting work in progress with ladder and supplies staged on protective floor covering' },
          { num: '05', title: 'Lighting & Fixture Upgrades', body: 'Interior lighting and fixture upgrades coordinated with finish improvements to refresh the appearance and functionality of shared spaces.', image: '/services/interior-lighting-fixtures.jpg', imageAlt: 'Condominium corridor with recessed downlights and cove wall lighting along a textured plaster wall' },
        ],
      },

      serviceList: {
        heading: 'Interior finishing scope',
        body:    'Coordinated finishing support for individual properties, managed portfolios, and multi-site programs.',
        items: [
          'Interior painting',
          'Wallcovering installation and replacement',
          'Carpet and flooring programs',
          'Drywall repair and preparation',
          'Trim and finish carpentry',
          'Ceiling and surface improvements',
          'Corridor and lobby refreshes',
          'Multi-floor and multi-site finish programs',
        ],
      },

      industries: {
        heading: 'Industries We Serve',
        beforeServiceList: true,
        items: ['Retail', 'Construction Sites', 'Industrial Facilities', 'Condos & Apartments', 'Commercial Buildings', 'Hospitality'],
      },

      overviewAfterBenefits: true,
      overview: {
        eyebrow:    'Materials & Finishes',
        heading:    'Built for appearance. Selected for everyday use.',
        paragraphs: [
          'Finish choices need to balance design intent with durability, maintenance, and the realities of a high-traffic property.',
          'IronOak helps select and install finishes that hold up to daily use without compromising on appearance.',
        ],
        image:    '/services/interior-materials-finishes.jpg',
        imageAlt: 'Elegant hotel guest-room corridor with rich wood paneling, integrated lighting and premium carpet',
      },

      benefits: {
        heading: 'Why coordinated finishing matters',
        items: [
          { title: 'One Point of Contact', body: 'Clear communication through one accountable lead for every project.' },
          { title: 'Minimal Disruption',    body: 'Work scheduled around occupancy, access, and daily operations.' },
          { title: 'Consistent Standards',  body: 'Materials and finishing quality aligned across every space.' },
          { title: 'Durable Results',       body: 'Finishes selected to perform under everyday, high-traffic use.' },
        ],
      },

      faqEyebrow: 'INTERIOR FINISHING QUESTIONS',
      faqIntro:   'Answers about finish selection, occupied-property work and coordinated interior upgrades.',
      faqs: [
        { q: 'Can interior finishing work be phased around an occupied property?', a: 'Yes. Painting, flooring, drywall and finish work can be planned in stages around access, operating hours and occupied areas.' },
        { q: 'Does IronOak help choose finishes suited to high-traffic spaces?', a: 'IronOak can help coordinate finish options based on appearance, durability, maintenance requirements and the way the space is used.' },
        { q: 'Can painting, drywall and flooring be managed as one scope?', a: 'Yes. Related interior trades can be coordinated under one defined project scope to maintain consistency and simplify communication.' },
      ],

      finalCta: {
        heading:      'Planning an interior finishing project?',
        body:         "Tell us about the property and the finishes you have in mind. We'll help you understand the next step.",
        phoneDisplay: '(416) 570-9074',
        phoneHref:    'tel:+14165709074',
      },
    },
  },

  /* 05 ─────────────────────────────────────────────────────────────────── */
  {
    slug:               'installations-property-systems',
    num:                '05',
    category:           'Property Systems',
    title:              'Installations & Building Systems',
    description:        'Clean, dependable installation of CCTV systems, retrofit lighting, fixtures, equipment, and essential property upgrades.',
    illustrationIndex:  4,
    meta: {
      title:       'CCTV & Security System Installation Toronto | IronOak',
      description: 'Professional CCTV, 4K security camera, camera system and access-control installation for commercial properties across Toronto and the GTA.',
    },
    related: [0, 4, 1],
    sections: {
      overview:    'We handle the clean installation of security systems, lighting upgrades, fixtures, and essential property equipment. Our team coordinates all work to minimise disruption and ensure every installation meets the required standard. Full service details are being prepared.',
      includes: [
        'CCTV & security system installation',
        'Retrofit and upgrade lighting',
        'Fixture and equipment installation',
        'Property technology integration',
      ],
      properties:  'We complete installation work for commercial properties, condominium corporations, residential buildings, and mixed-use developments.',
      process:     ['Property Audit', 'System Design', 'Installation', 'Testing & Handover'],
      faq: [
        { q: 'Do you work with specific security system brands?',  a: 'We work with a range of trusted systems and can advise based on your property type and requirements. Contact us to start the conversation.' },
        { q: 'Can you upgrade lighting across multiple floors?',   a: 'Yes. We coordinate multi-floor and multi-phase lighting projects. Reach out with your scope and we will outline the process.' },
      ],
    },

    /* richContent — same premium template used by Capital Projects & Project
       Management, with copy and a unique "Approach Note" section adapted for
       installation work. */
    richContent: {
      heroImage:          '/services/installations-property-systems-hero.webp',
      heroVideo:          '/services/installations-hero.mp4',
      heroImageAlt:       'Elevated view of a modern glass building entrance with automated pedestrian doors',
      heroOverlayLight:   true,
      heroHeading:        ['Installations &', 'Building Systems'],
      heroSupportingLine: 'Commercial • Condominium • Hospitality • Multi-Site',

      positioning: {
        early:    true,
        eyebrow:  'COMMERCIAL SECURITY & CCTV',
        heading:  ['Commercial Security & CCTV Systems'],
        body:     'IronOak installs high-definition CCTV and 4K security camera systems for commercial properties, condominiums, construction sites and large facilities. From long-range perimeter coverage to access-control integration, every system is professionally positioned, configured and tested around the property’s layout and security requirements.',
        ctaLabel: 'Explore CCTV solutions',
        ctaHref:  '#rp-cctv-h',
      },

      typicalProjects: {
        heading: 'Typical installation & systems work',
        wideCards: true,
        centerLastOdd: true,
        groups: [
          { num: '01', title: 'Security Camera Systems', body: 'Coordinated camera and security installations for commercial and multi-residential properties.', image: '/services/installations-security-cctv.webp', imageAlt: 'Dome security camera mounted on the ceiling of a modern hotel lobby corridor' },
          { num: '02', title: 'Long-Range Security Camera Systems', body: 'Warehouses, parking lots, stadiums and other large perimeters require broader security coverage. IronOak installs long-range camera systems designed to capture clear, detailed footage across larger areas.', image: '/services/installations-long-range-cameras.jpg', imageAlt: 'Two long-range security cameras mounted on the exterior wall of a commercial building' },
          { num: '03', title: 'Access Control & Entry Systems', body: 'Entry, intercom and access-control installations designed for secure, reliable day-to-day property operations.', image: '/services/installations-access-control.webp', imageAlt: 'Modern commercial building entrance with automated glass doors and an access-control panel' },
        ],
      },

      capabilities: {
        eyebrow: 'SYSTEM CAPABILITIES',
        heading: 'Security & system solutions',
        body:    'CCTV, camera systems and access-control support built around how your property actually operates.',
        items: [
          { image: '/services/icon-ai-video-monitoring.png',   title: '4K Security Camera Systems',           body: 'High-resolution camera systems designed for clear coverage across commercial and multi-residential properties.' },
          { image: '/services/icon-remote-surveillance.png',   title: 'Camera Placement & System Configuration', body: 'Professional camera positioning, system setup and configuration designed around the property and its security requirements.' },
          { image: '/services/icon-managed-access-control.png', title: 'Managed Access Control',               body: 'Secure, seamless access management for entry points and controlled areas.' },
          { image: '/services/icon-inspection-compliance.png', title: 'Security System Support & Maintenance', body: 'Ongoing installation-related support, troubleshooting and system adjustments to keep security systems running reliably.' },
        ],
      },

      industries: {
        heading: 'Industries We Serve',
        items: ['Retail', 'Construction Sites', 'Industrial Facilities', 'Condos & Apartments', 'Commercial Buildings', 'Hospitality'],
      },

      overview: {
        eyebrow:    'Property Systems Installation',
        heading:    'Installed to standard. Planned around the property.',
        paragraphs: [
          'Every installation begins with understanding the property, the systems involved, and how the work fits around daily operations.',
          'IronOak coordinates access, scheduling, and trades from initial assessment through testing, commissioning, and handover.',
        ],
        image:    '/services/installations-overview.jpg',
        imageAlt: 'Smart security camera with AI analytics overlay in a modern office corridor',
        imagePosition: '25% center',
      },

      faqEyebrow: 'INSTALLATION QUESTIONS',
      faqIntro:   'Details about system types, occupied-building scheduling, and testing before handover.',
      faqs: [
        { q: 'What types of systems can IronOak install?', a: 'CCTV and security systems, interior and exterior lighting, fixtures, property hardware, access-related installations, and related building systems and equipment.' },
        { q: 'Can installations be scheduled around occupied buildings?', a: 'Yes. Installation work is planned around occupancy, access conditions, and daily operations to minimize disruption.' },
        { q: 'Are installed systems tested before handover?', a: 'Yes. Systems are tested and commissioned, with documentation provided at handover.' },
      ],

      cctvPackages: {
        eyebrow:  'CCTV & Security Cameras',
        heading:  '4K security camera solutions for Toronto homes and businesses',
        body:     'IronOak provides tailored CCTV and security camera solutions, scoped around your site’s layout, coverage needs and operational requirements.',
        includesTitle: 'Every System Includes',
        includes: [
          'Private, secure system — no cloud dependency',
          'Easy access on Windows, Mac, Android and iOS',
          'Smart alerts when line-crossing detection is triggered',
          'Professional installation included',
          'Lifetime technical support',
        ],
      },

      finalCta: {
        heading:      'Planning an installation or upgrade?',
        body:         "Tell us about the property and the systems you need installed. We'll help you understand the next step.",
        phoneDisplay: '(416) 570-9074',
        phoneHref:    'tel:+14165709074',
      },
    },
  },

  /* 06 ─────────────────────────────────────────────────────────────────── */
  {
    slug:               'exterior-outdoor-improvements',
    num:                '06',
    category:           'Exterior Improvements',
    title:              'Exterior & Outdoor Improvements',
    description:        'Exterior upgrades and outdoor property improvements designed to improve function, appearance, and long-term value.',
    illustrationIndex:  5,
    meta: {
      title:       'Commercial Exterior Improvements Toronto & GTA | IronOak',
      description: 'Commercial exterior improvements, entrances, walkways, power washing and seasonal property services across Toronto and the GTA.',
    },
    related: [0, 3, 1],
    sections: {
      overview:    'We manage exterior improvement work that enhances the appearance, function, and long-term value of a property. From façade upgrades and pathway work to outdoor lighting and landscaping coordination, we handle the scope professionally from start to finish. Detailed service content is being prepared.',
      includes: [
        'Exterior cladding & façade improvements',
        'Parking area and pathway upgrades',
        'Exterior lighting installation',
        'Landscaping coordination',
      ],
      properties:  'Our exterior work covers commercial buildings, condominium complexes, residential properties, and mixed-use developments across the Greater Toronto Area.',
      process:     ['Site Assessment', 'Improvement Scope', 'Works Execution', 'Final Review'],
      faq: [
        { q: 'Can you coordinate exterior work during winter months?', a: 'We plan exterior work around seasonal conditions and can advise on timing based on your specific scope. Contact us to discuss.' },
        { q: 'Do you handle permits for exterior improvements?',       a: 'We can assist with permit coordination where required. Reach out with your project details for more information.' },
      ],
    },

    /* richContent — same premium template used by Capital Projects & Project
       Management, with copy and a unique "Photo Banner" section adapted for
       exterior work. */
    richContent: {
      heroImage:          '/services/exterior-outdoor-improvements-hero.webp',
      heroImageDesktop:   '/services/exterior-outdoor-improvements-hero-desktop.avif',
      heroImageAlt:       'Modern office building entrance at night with an illuminated glass canopy and landscaped walkway',
      heroHeading:        ['Exterior &', 'Outdoor Improvements'],
      heroSupportingLine: 'Commercial • Condominium • Hospitality • Multi-Site',

      intro: [
        { label: 'Evaluate', body: 'Review the property exterior, condition, and priorities before scoping the work.' },
        { label: 'Improve',  body: 'Complete exterior upgrades and repairs coordinated around property operations.' },
        { label: 'Protect',  body: 'Deliver lasting results that protect the property’s appearance and long-term value.' },
      ],

      positioning: {
        eyebrow: 'EXTERIOR PROPERTY IMPROVEMENTS',
        heading: ['Exterior Work That Protects', 'and Improves the Property'],
        body: 'IronOak handles exterior repairs and improvement work across entrances, walkways, common areas and building surroundings. Services can include exterior lighting and fixtures, power washing, access-area improvements, seasonal upkeep and corrective repairs, coordinated around active properties to improve safety, presentation and long-term condition.',
        ctaLabel: 'Explore exterior services',
        ctaHref: '#rp-typical-h',
      },

      typicalProjects: {
        heading: 'Typical exterior improvement work',
        wideCards: true,
        groups: [
          { num: '01', title: 'Entrances & Common Areas', body: 'Improvements to high-traffic exterior areas that shape the first impression of the property.', image: '/services/exterior-entrances-common-areas.jpg', imageAlt: 'Illuminated glass entrance of a modern commercial building at dusk, reflecting the surrounding facade' },
          { num: '02', title: 'Exterior Lighting & Features', body: 'Coordinated upgrades to lighting, fixtures and property elements.', image: '/services/exterior-lighting-features.jpg', imageAlt: 'LED wall lighting illuminating a commercial building entrance and facade at night' },
          { num: '03', title: 'Walkways & Access Areas', body: 'Upgrades to exterior paths, access points and surrounding surfaces that improve safety, usability and presentation.', image: '/services/exterior-walkways-access-areas.jpg', imageAlt: 'Covered walkway through a landscaped courtyard with brick archways' },
          { num: '04', title: 'Garage & Exterior Power Washing', body: 'Professional cleaning of parking garages, exterior surfaces, walkways and high-use property areas.', image: '/services/exterior-garage-power-washing.jpg', imageAlt: 'Ride-on scrubber cleaning the concrete floor of a commercial parking garage' },
        ],
      },

      serviceList: {
        heading: 'Exterior & outdoor services',
        body:    'Coordinated exterior improvement support for individual properties, managed portfolios, and multi-site programs.',
        items: [
          'Entrance and common-area improvements',
          'Exterior lighting installation',
          'Walkway and property feature upgrades',
          'Exterior repairs and finishing',
          'Site enhancement programs',
          'Building exterior improvements',
          'Coordinated multi-site exterior programs',
          'Exterior fixture replacement',
        ],
      },

      industries: {
        heading: 'Industries We Serve',
        items: ['Retail', 'Construction Sites', 'Industrial Facilities', 'Condos & Apartments', 'Commercial Buildings', 'Hospitality'],
      },

      photoBanner: {
        heading: 'Seasonal property care, planned around the year.',
        body:    'IronOak provides seasonal upkeep that helps managed properties stay clean, presentable and prepared as conditions change throughout the year.',
        sideBySide: true,
        list: [
          'Spring & fall property cleanup',
          'Gutter cleaning',
          'Leaf and debris removal',
          'Light landscaping & grounds upkeep',
          'Seasonal exterior cleanup',
          'Property preparation between seasons',
        ],
        image:    '/services/exterior-seasonal-services.avif',
        imageAlt: 'Collage of a tree across four seasons, from bare winter branches to autumn leaves',
        aspectRatio: '4 / 3',
        maxWidth:    '640px',
      },

      benefits: {
        heading: 'Why coordinated exterior work matters',
        items: [
          { title: 'One Point of Contact',    body: 'Clear communication through one accountable lead for every project.' },
          { title: 'Condition-First Planning', body: 'Work scoped around property condition, priorities, and access.' },
          { title: 'Consistent Standards',    body: 'Materials and finishing quality aligned across every site.' },
          { title: 'Lasting Results',         body: 'Work delivered to protect appearance, function, and value over time.' },
        ],
      },

      faqEyebrow: 'EXTERIOR QUESTIONS',
      faqIntro:   'Answers about exterior scope, seasonal timing, and working around an active property.',
      faqs: [
        { q: 'What exterior work does IronOak handle?', a: 'Entrance and common-area improvements, exterior lighting, walkways and property features, exterior repairs, finishing, and coordinated site enhancement programs.' },
        { q: 'Can exterior work be scheduled around seasonal conditions?', a: 'Yes. Exterior work is planned around seasonal and site conditions, with timing discussed based on your specific scope.' },
        { q: 'Can you work around an active, occupied property?', a: 'Yes. Exterior work is planned around access, daily operations, and property use to minimize disruption.' },
      ],

      finalCta: {
        heading:      'Planning an exterior improvement project?',
        body:         "Tell us about the property and the exterior work you have in mind. We'll help you understand the next step.",
        phoneDisplay: '(416) 570-9074',
        phoneHref:    'tel:+14165709074',
      },
    },
  },

]
