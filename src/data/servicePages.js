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
    title:              'Property Maintenance & Repairs',
    description:        'Responsive repairs, planned maintenance, and coordinated property support for commercial, condominium, hospitality, and multi-site properties.',
    illustrationIndex:  0,
    meta: {
      title:       'Property Maintenance & Repairs | IronOak Property Services',
      description: 'IronOak provides responsive repairs and planned maintenance for commercial, condominium, hospitality, and multi-site properties.',
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
      heroImage:            '/services/property-maintenance-repairs-hero.jpeg',
      heroImageAlt:         'Interior building repair work with exposed ceiling framing and drywall in a commercial property',
      heroOverlayLight:     true,
      heroHeading:          ['Property Maintenance &', 'Repairs'],
      heroSupportingLine:   'Commercial • Condominium • Hospitality • Multi-Site',
      animatedIntro:        true,

      intro: [
        { label: 'Inspect', body: 'Assess the property, the issue, and the priorities before work begins.' },
        { label: 'Resolve', body: 'Complete repairs and corrective work coordinated around daily operations.' },
        { label: 'Maintain', body: 'Keep the property performing through planned, ongoing upkeep.' },
      ],

      positioning: {
        heading: ['Keeping properties', 'operational, presentable and ready.'],
        body: 'IronOak handles both immediate repair needs and planned maintenance work, coordinating around occupants, access, and daily property operations.',
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
    title:              'Capital Projects & Project Management',
    description:        'Structured planning, multi-trade coordination, and dependable delivery for commercial, condominium, hospitality, and multi-site property improvements.',
    illustrationIndex:  3,
    meta: {
      title:       'Capital Projects & Project Management | IronOak',
      description: 'IronOak coordinates capital improvements, multi-site rollouts, lighting retrofits, CCTV installations, interior upgrades, and common-area projects for commercial and condominium properties.',
    },
    related: [3, 2, 4],
    sections: {
      overview:    'We manage construction and capital improvement projects with a structured approach — from initial planning through to final delivery. Our team provides professional oversight at every stage, keeping multi-trade projects on schedule and within scope. Full project management service details are being prepared.',
      includes: [
        'Capital project planning & budgeting',
        'Multi-site construction coordination',
        'Contractor procurement & management',
        'Progress reporting & client communication',
      ],
      properties:  'We work with property owners, condominium corporations, commercial operators, and real estate managers on capital programs of varying scale.',
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
      heroHeading:        ['Capital Projects &', 'Project Management'],
      heroSupportingLine: 'Commercial • Condominium • Hospitality • Multi-Site',

      intro: [
        { label: 'Scope',      body: 'Define the locations, requirements, standards, access conditions, and completion expectations before work begins.' },
        { label: 'Coordinate', body: 'Organize trades, materials, schedules, site contacts, and operational requirements through one structured plan.' },
        { label: 'Deliver',    body: 'Manage execution, progress communication, quality review, deficiencies, and final closeout.' },
      ],

      positioning: {
        heading: ['Complex property upgrades.', 'One coordinated approach.'],
        body: 'Capital projects can involve multiple locations, trades, schedules, stakeholders, and operational constraints. IronOak brings those moving parts together through clear planning, consistent standards, and dependable execution.',
      },

      overview: {
        eyebrow:    'Capital Project Delivery',
        heading:    'Planned around the property, the people, and the operation.',
        paragraphs: [
          'Every capital project begins with understanding the property, the required outcome, and how the work fits around ongoing operations.',
          'IronOak helps coordinate the project from initial site review and scope development through scheduling, execution, progress reporting, and closeout.',
        ],
        image:    '/services/capital-project-management-overview.jpg',
        imageAlt: 'Illuminated commercial and residential towers along a marina at night, reflecting the scale of coordinated capital projects',
      },

      serviceList: {
        heading: 'Capital project services',
        body:    'Flexible project support for individual properties, managed portfolios, and multi-location programs.',
        items: [
          'Lighting retrofit programs',
          'CCTV and security-system installations',
          'Carpet and flooring replacement',
          'Wallcovering replacement',
          'Painting and interior refreshes',
          'Condominium common-area upgrades',
          'Guest-room and suite renovations',
          'Fixture and equipment installation',
          'Commercial property improvements',
          'Multi-site project rollouts',
          'Deficiency and turnover programs',
          'Trade and schedule coordination',
        ],
      },

      benefits: {
        heading: 'Why coordinated project delivery matters',
        items: [
          { title: 'One Point of Contact',   body: 'Clear communication through one accountable project lead.' },
          { title: 'Consistent Standards',   body: 'Aligned materials, installation expectations, and finishing quality across locations.' },
          { title: 'Phased Execution',       body: 'Work organized around access requirements, occupancy, and operational priorities.' },
          { title: 'Clear Closeout',         body: 'Progress tracking, deficiency review, documentation, and final sign-off.' },
        ],
      },

      typicalProjects: {
        heading: 'Typical capital projects',
        wideCards: true,
        groups: [
          { num: '01', title: 'Commercial Interior Programs', body: 'Interior upgrades delivered with coordinated trades, finishes and minimal operational disruption.', image: '/services/capital-project-commercial-interior.jpg', imageAlt: 'Freshly finished hotel corridor with new carpet and guest room doors' },
          { num: '02', title: 'Condominium & Hospitality Improvements', body: 'Hallway, common-area and guest-facing improvements planned around occupied properties.', image: '/services/capital-project-condo-hospitality.webp', imageAlt: 'Renovated hotel corridor with wood-paneled walls and patterned carpet' },
          { num: '03', title: 'Multi-Site Upgrades', body: 'Lighting retrofits, CCTV programs, fixture installations, equipment upgrades, and consistent work delivered across multiple locations.', image: '/services/capital-project-multi-site.jpg', imageAlt: 'Aerial view of a multi-tenant commercial plaza with coordinated brick facade and signage' },
        ],
      },

      relatedArticleSlug: 'how-to-plan-a-multi-site-property-upgrade',

      faqEyebrow: 'CAPITAL PROJECT QUESTIONS',
      faqIntro:   'Helpful information about project coordination, occupied properties and multi-site delivery.',
      faqs: [
        { q: 'Can IronOak manage the same improvement program across multiple locations?', a: 'Yes. IronOak can coordinate repeatable scopes, schedules, trades and quality standards across multi-site property portfolios.' },
        { q: 'How do you reduce disruption during a capital project?', a: 'Projects are planned around access, occupancy and operating requirements, with phased execution used where appropriate to keep the property functioning.' },
        { q: 'What does IronOak manage from planning through completion?', a: 'Depending on the project, IronOak can support scope development, scheduling, trade coordination, execution oversight, progress communication and final closeout.' },
      ],

      finalCta: {
        heading:      'Planning a capital project?',
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
      title:       'Interior Finishing | IronOak Property Services',
      description: 'IronOak provides professional interior finishing services including flooring, painting, wallcoverings, and complete interior refreshes.',
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
      heroImageAlt:         'Commercial interior surface and wall finishing work in progress',
      heroOverlayLight:     true,
      heroHeading:          ['Interior', 'Finishing'],
      heroSupportingLine:   'Commercial • Condominium • Hospitality • Multi-Site',

      intro: [
        { label: 'Prepare', body: 'Assess surfaces, materials, and access conditions before work begins.' },
        { label: 'Finish',  body: 'Complete finish work to spec, coordinated around occupancy and operations.' },
        { label: 'Refine',  body: 'Review, touch up, and confirm a consistent, polished result.' },
      ],

      positioning: {
        heading: ['Finishes that improve', 'how a property looks, feels and performs.'],
        body: 'IronOak delivers durable, polished interior finishes coordinated around occupied properties, consistent standards, and everyday use.',
        watermarkLg: true,
      },

      typicalProjects: {
        heading: 'Typical interior finishing work',
        wideCards: true,
        groups: [
          { num: '01', title: 'Walls & Surface Finishes', body: 'Painting, wallcoverings and surface improvements that refresh and protect active interiors.', image: '/services/interior-walls-surfaces.webp', imageAlt: 'Patterned commercial vinyl wallcovering behind a bar counter with stools' },
          { num: '02', title: 'Flooring & Carpet', body: 'Flooring and carpet replacement planned around access, occupancy and operating schedules.', image: '/services/interior-flooring-carpet.jpg', imageAlt: 'Patterned carpet installation in an elegant hotel guest-room corridor' },
          { num: '03', title: 'Common-Area Refreshes', body: 'Coordinated finish upgrades for corridors, lobbies, shared spaces and guest-facing environments.', image: '/services/interior-common-area-refreshes.webp', imageAlt: 'Premium commercial washroom with marble vanities and backlit mirrors' },
          { num: '04', title: 'Painting & Finishing', body: 'Professional painting and finishing work that refreshes interiors, improves presentation and supports long-term property upkeep.', image: '/services/interior-painting-finishing.jpg', imageAlt: 'Commercial office painting work in progress with ladder and supplies staged on protective floor covering' },
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
      title:       'Installations & Building Systems | IronOak Property Services',
      description: 'IronOak installs CCTV systems, retrofit lighting, fixtures, and property systems for commercial and residential properties.',
    },
    related: [0, 4, 5],
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
      heroImageAlt:       'Elevated view of a modern glass building entrance with automated pedestrian doors',
      heroOverlayLight:   true,
      heroHeading:        ['Installations &', 'Building Systems'],
      heroSupportingLine: 'Commercial • Condominium • Hospitality • Multi-Site',

      intro: [
        { label: 'Assess',    body: 'Review the property, existing systems, access conditions, and installation requirements before work begins.' },
        { label: 'Install',   body: 'Complete installation work to spec, coordinated around building access, trades, and operational schedules.' },
        { label: 'Integrate', body: 'Test, commission, and hand over each system with clear documentation and support.' },
      ],

      positioning: {
        heading: ['Upgrades planned around your operation.'],
        body: 'From CCTV and lighting to property hardware and equipment, IronOak plans and installs system upgrades around occupied buildings, active operations, and everyday property use.',
      },

      typicalProjects: {
        heading: 'Typical installation & systems work',
        wideCards: true,
        groups: [
          { num: '01', title: 'Security & CCTV Systems', body: 'Coordinated camera and security installations for commercial and multi-residential properties.', image: '/services/installations-security-cctv.webp', imageAlt: 'Dome security camera mounted on the ceiling of a modern hotel lobby corridor' },
          { num: '02', title: 'Lighting & Fixture Upgrades', body: 'Interior and exterior fixture replacements and upgrade programs planned around property operations.', image: '/services/installations-lighting-fixtures.jpg', imageAlt: 'Condominium corridor with recessed downlights and cove wall lighting along a textured plaster wall' },
          { num: '03', title: 'Access Control & Entry Systems', body: 'Entry, intercom and access-control installations designed for secure, reliable day-to-day property operations.', image: '/services/installations-access-control.png', imageAlt: 'Modern commercial building entrance with automated glass doors and an access-control panel' },
        ],
      },

      serviceList: {
        heading: 'Installation & systems scope',
        body:    'Coordinated installation support for individual properties, managed portfolios, and multi-location programs.',
        items: [
          'CCTV and security system installation',
          'Access control and entry systems',
          'Interior and exterior lighting upgrades',
          'Fixture replacement programs',
          'Property equipment installation',
          'Building hardware upgrades',
          'Interior building systems',
          'Access-related installations',
          'Replacement and upgrade programs',
          'Multi-location installation rollouts',
        ],
      },

      overview: {
        eyebrow:    'Property Systems Installation',
        heading:    'Installed to standard. Planned around the property.',
        paragraphs: [
          'Every installation begins with understanding the property, the systems involved, and how the work fits around daily operations.',
          'IronOak coordinates access, scheduling, and trades from initial assessment through testing, commissioning, and handover.',
        ],
        image:    '/services/installations-overview.jpg',
        imageAlt: 'Elegant condominium elevator lobby with marble walls and flooring',
      },

      approachNote: {
        eyebrow: 'How We Install',
        heading: 'Planned around the building, not just the system.',
        body:    'Every installation is scheduled around occupancy, access, and daily operations, so the work gets done without getting in the way.',
        items: [
          { label: 'Scheduled Access',    body: 'Work planned around occupied hours and building access.' },
          { label: 'Clear Communication', body: 'Tenants, staff, and site contacts kept informed throughout.' },
          { label: 'Tested & Documented', body: 'Every system commissioned and handed over with documentation.' },
        ],
      },

      benefits: {
        heading: 'Why coordinated installation matters',
        items: [
          { title: 'One Point of Contact', body: 'Clear communication through one accountable lead for every installation.' },
          { title: 'Minimal Disruption',    body: 'Work scheduled around occupancy, access, and daily operations.' },
          { title: 'Consistent Standards',  body: 'Installation quality and materials aligned across every location.' },
          { title: 'Tested & Handed Over',  body: 'Every system commissioned, documented, and confirmed before closeout.' },
        ],
      },

      faqEyebrow: 'INSTALLATION QUESTIONS',
      faqIntro:   'Details about system types, occupied-building scheduling, and testing before handover.',
      faqs: [
        { q: 'What types of systems can IronOak install?', a: 'CCTV and security systems, interior and exterior lighting, fixtures, property hardware, access-related installations, and related building systems and equipment.' },
        { q: 'Can installations be scheduled around occupied buildings?', a: 'Yes. Installation work is planned around occupancy, access conditions, and daily operations to minimize disruption.' },
        { q: 'Are installed systems tested before handover?', a: 'Yes. Systems are tested and commissioned, with documentation provided at handover.' },
      ],

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
      title:       'Exterior & Outdoor Improvements | IronOak Property Services',
      description: 'IronOak handles exterior upgrades, façade work, parking improvements, and outdoor property enhancements for lasting value.',
    },
    related: [0, 3, 5],
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
      heroImageAlt:       'Close-up of an architectural wall light fixture on a stone building facade beside a landscaped entrance',
      heroHeading:        ['Exterior &', 'Outdoor Improvements'],
      heroSupportingLine: 'Commercial • Condominium • Hospitality • Multi-Site',

      intro: [
        { label: 'Evaluate', body: 'Review the property exterior, condition, and priorities before scoping the work.' },
        { label: 'Improve',  body: 'Complete exterior upgrades and repairs coordinated around property operations.' },
        { label: 'Protect',  body: 'Deliver lasting results that protect the property’s appearance and long-term value.' },
      ],

      positioning: {
        heading: ['First impressions.', 'Lasting condition.'],
        body: 'The exterior of a property shapes how it is experienced long before anyone steps inside. IronOak plans and delivers exterior improvements that protect appearance, function, and long-term value.',
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

  /* 07 ─────────────────────────────────────────────────────────────────── */
  {
    slug:               'specialty-custom-projects',
    num:                '07',
    category:           'Custom Projects',
    title:              'Specialty & Custom Projects',
    description:        'Custom-scoped solutions for unique commercial, condominium, multi-site, and operational property requirements.',
    illustrationIndex:  6,
    meta: {
      title:       'Specialty & Custom Projects | IronOak Property Services',
      description: 'IronOak delivers custom-scoped property solutions for unique commercial, condominium, and multi-site operational requirements.',
    },
    related: [1, 4, 3],
    sections: {
      overview:    'When a project doesn\'t fit a standard scope, we build a custom solution. Our team handles unusual project types, bespoke property requirements, and multi-faceted work that requires careful scoping and professional coordination. Full details are being prepared — contact us to discuss your specific situation.',
      includes: [
        'Bespoke project scoping & planning',
        'Multi-site operational coordination',
        'Custom commercial and condominium work',
        'Unique or non-standard property solutions',
      ],
      properties:  'We take on custom work for commercial operators, condominium corporations, institutional clients, and multi-property owners with specific or complex requirements.',
      process:     ['Briefing', 'Custom Solution Design', 'Coordinated Execution', 'Delivery & Review'],
      faq: [
        { q: 'What makes a project a "specialty" project?',       a: 'Specialty projects fall outside standard service scopes — unique property types, complex coordination requirements, or bespoke client needs. If you\'re not sure whether your project fits, reach out and we\'ll discuss.' },
        { q: 'How do you price custom project work?',             a: 'Custom projects are scoped and priced individually based on your specific requirements. Contact us and we\'ll start with a conversation about what you need.' },
      ],
    },

    /* richContent — same premium template used across the site, with copy and
       a unique light "Process Chain" section adapted for custom project scoping. */
    richContent: {
      heroImage:            '/services/specialty-custom-projects-hero.jpg',
      heroImageAlt:         'Custom wood-slat feature wall enclosure with an illuminated doorway leading to a bathroom',
      heroHeading:          ['Specialty &', 'Custom Projects'],
      heroSupportingLine:   'Commercial • Condominium • Hospitality • Multi-Site',

      intro: [
        { label: 'Explore',  body: 'Understand the property, the idea, and the intended outcome.' },
        { label: 'Develop',  body: 'Shape an unusual requirement into a defined, workable project scope.' },
        { label: 'Deliver',  body: 'Coordinate trades and execution through to completion.' },
      ],

      positioning: {
        heading: ['When the project', 'does not fit a standard category.'],
        body: 'IronOak helps owners and managers turn unusual requirements into a defined, coordinated, and deliverable project.',
      },

      typicalProjects: {
        heading: 'Typical specialty and custom work',
        wideCards: true,
        groups: [
          { num: '01', title: 'Custom Property Features', body: 'Purpose-built features and improvements developed around the property’s specific needs.', image: '/services/specialty-custom-features.jpg', imageAlt: 'Custom bronze-toned elevator interior with integrated linear lighting' },
          { num: '02', title: 'Carpentry & Millwork', body: 'Custom millwork, built-ins, wood features and finish carpentry developed around the property’s specific requirements.', image: '/services/specialty-carpentry-millwork.avif', imageAlt: 'Custom wood slat wall with built-in millwork and integrated lighting' },
          { num: '03', title: 'One-Off Improvement Projects', body: 'Unique repair, upgrade or installation projects requiring a flexible and coordinated approach.', image: '/services/specialty-one-off-improvements.jpg', imageAlt: 'Curved wood-slat feature wall in a commercial corridor with glass partitions' },
        ],
      },

      serviceList: {
        heading: 'Specialty project scope',
        body:    'Custom-scoped project support for individual properties, managed portfolios, and unique operational requirements.',
        items: [
          'Custom property features',
          'Bespoke installations',
          'Branded environmental improvements',
          'Unique finish and fixture packages',
          'Pilot projects and prototypes',
          'One-off building enhancements',
          'Unusual repair or replacement needs',
          'Multi-trade custom project coordination',
        ],
      },

      processSteps: {
        heading: 'From an unusual request to a workable plan.',
        steps: [
          { num: '01', label: 'Understand the need' },
          { num: '02', label: 'Define the scope' },
          { num: '03', label: 'Coordinate the solution' },
          { num: '04', label: 'Complete the work' },
        ],
      },

      faqEyebrow: 'SPECIALTY PROJECT QUESTIONS',
      faqIntro:   'Answers about project scope, custom pricing, and how unusual requirements get defined.',
      faqs: [
        { q: 'What counts as a "specialty" project?', a: 'Specialty projects fall outside standard service scopes — unique property features, bespoke installations, or requirements that do not fit a standard category. If you are not sure whether your project fits, reach out and we will discuss.' },
        { q: 'Can you help define the scope of an unusual request?', a: 'Yes. IronOak helps shape an unusual requirement into a defined, coordinated project scope before work begins.' },
        { q: 'How is a custom project priced?', a: 'Custom projects are scoped and priced individually based on your specific requirements. Contact us to start with a conversation.' },
      ],

      finalCta: {
        heading:      'Have a project that does not fit a standard category?',
        body:         "Tell us about the property and the idea you have in mind. We'll help you understand the next step.",
        phoneDisplay: '(416) 570-9074',
        phoneHref:    'tel:+14165709074',
      },
    },
  },
]
