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
    description:        'Repairs, routine upkeep, and scheduled maintenance for commercial buildings, condominiums, and hospitality properties across Toronto and the GTA.',
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
      heroHeading:          ['Property Maintenance &', 'Repairs'],
      heroSupportingLine:   'Commercial • Condominium • Hospitality • Multi-Site',

      intro: [
        { label: 'Inspect', body: 'Check the issue and identify what needs attention.' },
        { label: 'Repair', body: 'Plan and complete the work around building access and daily use.' },
        { label: 'Maintain', body: 'Arrange regular upkeep to catch problems early.' },
      ],

      positioning: {
        eyebrow: 'ONGOING PROPERTY MAINTENANCE',
        heading: ['Day-to-day care for your property'],
        body: "We handle building repairs, cleaning, plumbing, electrical and mechanical maintenance. Whether you have a repair that needs attention or a list of recurring jobs, we organise the work around your building's schedule and the people using it.",
        ctaLabel: 'View maintenance services',
        ctaHref: '#rp-typical-h',
      },

      typicalProjects: {
        heading: 'Typical maintenance and repair work',
        wideCards: true,
        groups: [
          { num: '01', title: 'Cleaning & Upkeep', body: 'Cleaning for shared spaces, building exteriors, and busy areas that need regular attention.', image: '/services/maintenance-cleaning-upkeep.jpg', imageAlt: 'Commercial cleaning cart staged in front of elevators in a building lobby' },
          { num: '02', title: 'Repairs & Handyman Services', body: 'Everyday repairs and smaller maintenance jobs in commercial and multi-residential buildings.', image: '/services/maintenance-repairs-handyman.jpg', imageAlt: 'Metal ductwork with zone dampers installed in an open commercial ceiling' },
          { num: '03', title: 'Plumbing & Leak Detection', body: 'Find leaks and arrange plumbing repairs to address problems affecting the building.', image: '/services/maintenance-plumbing-repair.jpg', imageAlt: 'Technician using a wrench and voltage tester to service copper plumbing pipes and valves' },
          { num: '04', title: 'Electrical & Mechanical Maintenance', body: 'Routine maintenance and repairs for lighting, electrical, and mechanical systems.', image: '/services/maintenance-electrical-mechanical.jpg', imageAlt: 'Technician servicing a commercial electrical control panel while consulting a manual' },
        ],
      },

      serviceList: {
        heading: 'Maintenance services',
        body:    'Book work for a single property or arrange maintenance across several locations.',
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
        heading: 'Properties We Work On',
        items: ['Retail', 'Construction Sites', 'Industrial Facilities', 'Condos & Apartments', 'Commercial Buildings', 'Hospitality'],
      },

      approachNote: {
        eyebrow: 'How We Support Properties',
        heading: 'One-time repairs or regular maintenance',
        body:    'Get help with a specific job or arrange scheduled visits for ongoing upkeep.',
        items: [
          { label: 'One-time repairs', body: 'Tell us what needs fixing so we can review the work and arrange a suitable time.' },
          { label: 'Scheduled maintenance', body: 'Plan recurring maintenance for one building or several properties.' },
        ],
      },

      photoBannerAfterBenefits: true,
      photoBanner: {
        heading: 'Catch small problems early',
        body:    'Regular checks help identify wear, leaks, and other maintenance issues before they lead to more extensive repairs.',
        image:    '/services/maintenance-photo-banner.jpg',
        imageAlt: 'Active commercial repair and maintenance work with equipment and ladders in an open building space',
        aspectRatio: '3 / 2',
      },

      faqEyebrow: 'MAINTENANCE QUESTIONS',
      faqIntro:   'Common questions about booking repairs and arranging regular maintenance.',
      faqs: [
        { q: 'Can I book a one-time repair?', a: 'Yes. We handle individual repair jobs as well as recurring maintenance for one property or multiple locations.' },
        { q: 'How do you assess and schedule the work?', a: "We review the issue, its urgency, and access to the building. We then confirm what needs doing and arrange the work around the property's schedule." },
        { q: 'Can you work in an occupied building?', a: "Often, yes. Depending on the job, we can schedule work around residents, tenants, guests, and operating hours. We'll discuss access and any expected disruption before starting." },
      ],

      finalCta: {
        heading:      'What needs taking care of?',
        body:         'Send us the property location and a brief description of the work you need.',
        buttonLabel:  'Discuss the Work',
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
      description: 'We coordinate capital improvements, multi-site rollout programs, building retrofits, carpentry and millwork across Toronto and the GTA.',
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
        body: 'We coordinate capital improvements, multi-trade scopes and multi-site upgrade programs from planning through completion. Interior finishing, CCTV, lighting, exterior improvements, flooring, millwork and other project requirements can be managed under one coordinated scope, helping property teams maintain consistent standards, schedules and communication across every location.',
        ctaLabel: 'Explore capital project delivery',
        ctaHref: '#rp-typical-h',
      },

      overview: {
        eyebrow:    'Capital Project Delivery',
        heading:    'Planned around the property, the people, and the operation.',
        paragraphs: [
          'Every capital project begins with understanding the property, the required outcome, and how the work fits around ongoing operations.',
          'We help coordinate the project from initial site review and scope development through scheduling, execution, progress reporting, and closeout.',
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
        body:    'We can complete an initial location, establish the approved scope and standards, then coordinate the same improvement program across an entire portfolio.',
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
        { q: 'Can you manage the same improvement program across multiple locations?', a: 'Yes. We can coordinate repeatable scopes, schedules, trades and quality standards across multi-site property portfolios.' },
        { q: 'How is a custom or one-off project priced?', a: 'Custom projects are scoped and priced individually based on your specific requirements. Contact us to start with a conversation.' },
        { q: 'What do you manage from planning through completion?', a: 'Depending on the project, we can support scope development, scheduling, trade coordination, execution oversight, progress communication and final closeout.' },
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
    description:        'Painting, flooring, carpet, wallcoverings, and interior repairs for commercial buildings, condominiums, and hospitality properties.',
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
        { label: 'Prepare', body: 'We check the surfaces, agree on materials, and arrange access before starting.' },
        { label: 'Finish',  body: 'We complete the work in an order that suits the building and its occupants.' },
        { label: 'Check',   body: 'We inspect the finished work and complete any touch-ups.' },
      ],

      positioning: {
        eyebrow: 'INTERIOR FINISHING & SURFACE UPGRADES',
        heading: ['Interior updates for busy buildings'],
        body: "We repair drywall, paint interiors, replace flooring and carpet, and install tile and wallcoverings. For occupied buildings, we can work in stages through corridors, lobbies, and shared spaces, with access and working hours agreed in advance.",
        watermarkLg: true,
        ctaLabel: 'Explore interior finishing',
        ctaHref: '#rp-typical-h',
      },

      typicalProjects: {
        heading: 'Typical interior finishing work',
        wideCards: true,
        centerLastOdd: true,
        groups: [
          { num: '01', title: 'Walls & Wallcoverings', body: 'Wallcovering installation and surface repairs for worn or damaged interior walls.', image: '/services/interior-walls-surfaces.webp', imageAlt: 'Patterned commercial vinyl wallcovering behind a bar counter with stools' },
          { num: '02', title: 'Flooring & Carpet', body: 'New flooring and carpet, with replacement work scheduled around the areas people need to use.', image: '/services/interior-flooring-carpet.jpg', imageAlt: 'Patterned carpet installation in an elegant hotel guest-room corridor' },
          { num: '03', title: 'Common-Area Updates', body: 'Updates to corridors, lobbies, washrooms, and other spaces residents, staff, and guests use every day.', image: '/services/interior-common-area-refreshes.webp', imageAlt: 'Premium commercial washroom with marble vanities and backlit mirrors' },
          { num: '04', title: 'Painting & Finishing', body: 'Surface preparation, painting, and touch-ups for walls, ceilings, and trim.', image: '/services/interior-painting-finishing.jpg', imageAlt: 'Commercial office painting work in progress with ladder and supplies staged on protective floor covering' },
          { num: '05', title: 'Lighting & Fixture Upgrades', body: 'Replace dated lighting and fixtures alongside other interior work.', image: '/services/interior-lighting-fixtures.jpg', imageAlt: 'Condominium corridor with recessed downlights and cove wall lighting along a textured plaster wall' },
        ],
      },

      serviceList: {
        heading: 'Interior finishing services',
        body:    'From a single room to several floors or locations, we can plan the work as one project.',
        items: [
          'Interior painting',
          'Wallcovering installation and replacement',
          'Carpet and flooring replacement',
          'Drywall repair and preparation',
          'Trim and finish carpentry',
          'Ceiling and surface improvements',
          'Corridor and lobby refreshes',
          'Interior finishing across multiple floors or locations',
        ],
      },

      industries: {
        heading: 'Properties We Work On',
        beforeServiceList: true,
        items: ['Retail', 'Construction Sites', 'Industrial Facilities', 'Condos & Apartments', 'Commercial Buildings', 'Hospitality'],
      },

      overviewAfterBenefits: true,
      overview: {
        eyebrow:    'Materials & Finishes',
        heading:    'Finishes suited to everyday use',
        paragraphs: [
          'Busy hallways and shared spaces need materials that are practical to clean and maintain. We help you choose finishes based on appearance, foot traffic, and how the space is used.',
        ],
        image:    '/services/interior-materials-finishes.jpg',
        imageAlt: 'Elegant hotel guest-room corridor with rich wood paneling, integrated lighting and premium carpet',
      },

      benefits: {
        heading: 'How we manage the work',
        items: [
          { title: 'One Point of Contact',       body: 'Speak with one person about the schedule, progress, and any questions.' },
          { title: 'Work Around Occupants',       body: 'We agree on access and working hours before starting.' },
          { title: 'Consistent Finishes',         body: 'We plan materials and finishes together so adjoining areas look consistent.' },
          { title: 'Practical Material Choices',  body: 'We consider wear, cleaning, and maintenance when choosing finishes.' },
        ],
      },

      faqEyebrow: 'INTERIOR FINISHING QUESTIONS',
      faqIntro:   'Questions about materials, scheduling, and working in occupied buildings.',
      faqs: [
        { q: 'Can you work while the building is occupied?', a: 'Yes. We can complete work in stages, with access and working hours agreed around the people using the building.' },
        { q: 'Can you help us choose materials?', a: 'Yes. We can help compare finishes based on appearance, durability, cleaning needs, and the amount of daily use.' },
        { q: 'Can you handle painting, drywall, and flooring together?', a: "Yes. We can organise these as one project, so you don't have to arrange each part separately." },
      ],

      finalCta: {
        heading:      'Planning an interior update?',
        body:         "Tell us which areas need work and what you'd like to change.",
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
    description:        'Installation of security cameras, access-control systems, lighting, fixtures, and building equipment.',
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
        heading:  ['CCTV & Security Camera Installation'],
        body:     'We install HD and 4K camera systems for commercial buildings, condominiums, construction sites, and larger facilities. We plan camera positions around the areas you need to monitor, then configure and test the system.',
        ctaLabel: 'View CCTV options',
        ctaHref:  '#rp-cctv-h',
      },

      typicalProjects: {
        heading: 'Typical installation & systems work',
        wideCards: true,
        centerLastOdd: true,
        groups: [
          { num: '01', title: 'Security Camera Systems', body: 'Camera installation and setup for commercial and multi-residential buildings.', image: '/services/installations-security-cctv.webp', imageAlt: 'Dome security camera mounted on the ceiling of a modern hotel lobby corridor' },
          { num: '02', title: 'Long-Range Camera Systems', body: 'Camera systems for larger areas such as warehouses, parking lots, and site perimeters. We assess distances and coverage needs when planning the installation.', image: '/services/installations-long-range-cameras.jpg', imageAlt: 'Two long-range security cameras mounted on the exterior wall of a commercial building' },
          { num: '03', title: 'Access Control & Entry Systems', body: 'Installation of access-control, intercom, and entry systems for building entrances and restricted areas.', image: '/services/installations-access-control.webp', imageAlt: 'Modern commercial building entrance with automated glass doors and an access-control panel' },
        ],
      },

      capabilities: {
        heading: 'Camera and access-control services',
        body:    'We handle installation, setup, and adjustments to suit your building.',
        items: [
          { image: '/services/icon-ai-video-monitoring.png',   title: '4K Camera Systems',           body: 'High-resolution cameras for monitoring entrances, shared spaces, and other selected areas.' },
          { image: '/services/icon-remote-surveillance.png',   title: 'Camera Placement & Setup', body: 'We position cameras for the agreed coverage areas and configure the system.' },
          { image: '/services/icon-managed-access-control.png', title: 'Access Control',               body: 'Manage entry to the building and areas with restricted access.' },
          { image: '/services/icon-inspection-compliance.png', title: 'System Support & Maintenance', body: 'Help with troubleshooting, system adjustments, and maintenance after installation.' },
        ],
      },

      industries: {
        heading: 'Properties We Work On',
        items: ['Retail', 'Construction Sites', 'Industrial Facilities', 'Condos & Apartments', 'Commercial Buildings', 'Hospitality'],
      },

      overview: {
        eyebrow:    'Property Systems Installation',
        heading:    'From site review to system handover',
        paragraphs: [
          'We review the building layout, existing equipment, and installation requirements. We then arrange access, complete the installation, and test the system before handover.',
        ],
        image:    '/services/installations-overview.jpg',
        imageAlt: 'Smart security camera with AI analytics overlay in a modern office corridor',
        imagePosition: '25% center',
      },

      faqEyebrow: 'INSTALLATION QUESTIONS',
      faqIntro:   'Questions about installation, scheduling, and testing.',
      faqs: [
        { q: 'What can you install?', a: 'We install CCTV, access-control systems, lighting, fixtures, property hardware, and related building equipment. Contact us with the equipment or upgrade you have in mind.' },
        { q: 'Can you work in an occupied building?', a: 'Yes. We arrange installation around building access and working hours, and discuss any expected disruption before starting.' },
        { q: 'Do you test the systems before handover?', a: 'Yes. We test and commission installed systems and provide the handover documentation.' },
      ],

      cctvPackages: {
        eyebrow:  'CCTV & Security Cameras',
        heading:  '4K Security Camera Systems',
        body:     'We plan your camera system around the building layout and the areas you need to monitor.',
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
        heading:      'Need a system installed or upgraded?',
        body:         'Tell us about the property, any existing equipment, and what you need installed.',
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
    description:        'Repairs and improvements for building entrances, walkways, exterior lighting, and outdoor shared spaces.',
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
        { label: 'Assess',   body: 'We check the condition of the area and agree on what needs doing.' },
        { label: 'Plan',     body: 'We arrange the work around weather, access, and building use.' },
        { label: 'Complete', body: 'We finish the work and check it against the agreed requirements.' },
      ],

      positioning: {
        eyebrow: 'EXTERIOR PROPERTY IMPROVEMENTS',
        heading: ['Take care of the outside of your building'],
        body: 'We repair and improve entrances, walkways, lighting, and shared outdoor areas. We also handle power washing and seasonal cleanup, with work scheduled around access to the building and the people using it.',
        ctaLabel: 'Explore exterior services',
        ctaHref: '#rp-typical-h',
      },

      typicalProjects: {
        heading: 'Typical exterior improvement work',
        wideCards: true,
        groups: [
          { num: '01', title: 'Entrances & Common Areas', body: 'Repairs and updates to building entrances and shared outdoor spaces.', image: '/services/exterior-entrances-common-areas.jpg', imageAlt: 'Illuminated glass entrance of a modern commercial building at dusk, reflecting the surrounding facade' },
          { num: '02', title: 'Exterior Lighting & Fixtures', body: 'Install or replace lighting and fixtures around entrances, paths, and building exteriors.', image: '/services/exterior-lighting-features.jpg', imageAlt: 'LED wall lighting illuminating a commercial building entrance and facade at night' },
          { num: '03', title: 'Walkways & Access Areas', body: 'Repair and improve paths, access points, and surrounding surfaces.', image: '/services/exterior-walkways-access-areas.jpg', imageAlt: 'Covered walkway through a landscaped courtyard with brick archways' },
          { num: '04', title: 'Garage & Exterior Power Washing', body: 'Clean parking garages, walkways, and exterior surfaces.', image: '/services/exterior-garage-power-washing.jpg', imageAlt: 'Ride-on scrubber cleaning the concrete floor of a commercial parking garage' },
        ],
      },

      serviceList: {
        heading: 'Exterior & outdoor services',
        body:    'Arrange a specific exterior job or plan improvements across several properties.',
        items: [
          'Entrance and common-area improvements',
          'Exterior lighting installation',
          'Walkway and property feature upgrades',
          'Exterior repairs and finishing',
          'Outdoor area improvements',
          'Building exterior improvements',
          'Exterior work across multiple properties',
          'Exterior fixture replacement',
        ],
      },

      industries: {
        heading: 'Properties We Work On',
        items: ['Retail', 'Construction Sites', 'Industrial Facilities', 'Condos & Apartments', 'Commercial Buildings', 'Hospitality'],
      },

      photoBanner: {
        heading: 'Seasonal cleanup and upkeep',
        body:    'We handle spring and fall cleanup, gutter cleaning, leaf and debris removal, and light grounds maintenance.',
        sideBySide: true,
        list: [
          'Spring and fall property cleanup',
          'Gutter cleaning',
          'Leaf and debris removal',
          'Light grounds maintenance',
        ],
        image:    '/services/exterior-seasonal-services.avif',
        imageAlt: 'Collage of a tree across four seasons, from bare winter branches to autumn leaves',
        aspectRatio: '4 / 3',
        maxWidth:    '640px',
      },

      benefits: {
        heading: 'How we plan exterior work',
        items: [
          { title: 'One Point of Contact',        body: 'Speak with one person about the work and schedule.' },
          { title: 'Priorities Agreed First',     body: 'We review the condition of the property and agree on what needs attention.' },
          { title: 'Consistent Across Locations', body: 'For multiple properties, we agree on materials and finishes before work starts.' },
          { title: 'Weather and Access',          body: 'We plan around seasonal conditions and the entrances and paths people need to use.' },
        ],
      },

      faqEyebrow: 'EXTERIOR QUESTIONS',
      faqIntro:   'Questions about exterior work, weather, and building access.',
      faqs: [
        { q: 'What exterior work do you handle?', a: 'We handle entrance and walkway improvements, exterior lighting, repairs, finishing, power washing, and seasonal upkeep.' },
        { q: 'Does the weather affect scheduling?', a: "Yes. Timing depends on the job and the conditions it needs. We'll discuss suitable timing when reviewing the work." },
        { q: 'Can the building stay in use during the work?', a: 'Often, yes. We plan around building access and discuss any temporary restrictions before starting.' },
      ],

      finalCta: {
        heading:      'What needs attention outside?',
        body:         'Tell us about the property and the repairs or improvements you have in mind.',
        phoneDisplay: '(416) 570-9074',
        phoneHref:    'tel:+14165709074',
      },
    },
  },

]
