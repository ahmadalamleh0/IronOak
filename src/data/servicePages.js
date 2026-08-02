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
    description:        'Reliable repairs, preventative maintenance, and ongoing property support to keep residential, commercial, and condominium spaces performing at their best.',
    illustrationIndex:  0,
    meta: {
      title:       'Property Maintenance & Repairs | IronOak Property Services',
      description: 'Explore property maintenance and repair solutions from IronOak for residential, commercial, and condominium properties.',
    },
    related: [1, 3, 4],
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
  },

  /* 02 ─────────────────────────────────────────────────────────────────── */
  {
    slug:               'renovations-remodeling',
    num:                '02',
    category:           'Renovations',
    title:              'Renovations & Remodeling',
    description:        'Thoughtfully managed renovation work for suites, guest rooms, interior upgrades, and property improvement projects of every scale.',
    illustrationIndex:  1,
    meta: {
      title:       'Renovations & Remodeling | IronOak Property Services',
      description: 'IronOak manages renovation and remodeling projects for suites, guest rooms, and property interiors of every scale.',
    },
    related: [2, 3, 6],
    sections: {
      overview:    'We manage renovation and remodeling work with a focus on quality, coordination, and minimal disruption to property operations. From single-suite refreshes to full-floor remodels, we handle planning and execution from start to finish. Detailed service content is being prepared.',
      includes: [
        'Suite and unit renovations',
        'Common area and lobby upgrades',
        'Full interior remodeling',
        'Guest room and hospitality retrofits',
      ],
      properties:  'Our renovation work spans residential condominiums, boutique hotels, commercial office spaces, and multi-unit residential buildings.',
      process:     ['Consultation', 'Scope & Design Brief', 'Construction Management', 'Project Handover'],
      faq: [
        { q: 'Do you handle both design and construction?',    a: 'We coordinate the full renovation process and can work alongside your design team or connect you with our preferred partners. Get in touch to discuss your project.' },
        { q: 'Can you manage occupied-building renovations?',  a: 'Yes. We plan all work to minimize disruption for residents and tenants. Details depend on the specific project scope — contact us to discuss your situation.' },
      ],
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
    related: [4, 3, 1],
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
        groups: [
          { num: '01', title: 'Commercial Interior Programs', body: 'Interior upgrades delivered with coordinated trades, finishes and minimal operational disruption.', image: '/services/capital-project-commercial-interior.jpg', imageAlt: 'Freshly finished hotel corridor with new carpet and guest room doors' },
          { num: '02', title: 'Condominium & Hospitality Improvements', body: 'Hallway, common-area and guest-facing improvements planned around occupied properties.', image: '/services/capital-project-condo-hospitality.webp', imageAlt: 'Renovated hotel corridor with wood-paneled walls and patterned carpet' },
          { num: '03', title: 'Multi-Site Upgrades', body: 'Lighting retrofits, CCTV programs, fixture installations, equipment upgrades, and consistent work delivered across multiple locations.', image: '/services/capital-project-multi-site.jpg', imageAlt: 'Aerial view of a multi-tenant commercial plaza with coordinated brick facade and signage' },
        ],
      },

      relatedArticleSlug: 'how-to-plan-a-multi-site-property-upgrade',

      faqs: [
        { q: 'What qualifies as a capital project?', a: 'A capital project generally refers to a planned property improvement, replacement, retrofit, or renovation that extends beyond routine day-to-day maintenance. The exact scope depends on the property, objectives, and work involved.' },
        { q: 'Can IronOak coordinate projects across multiple locations?', a: 'Multi-location work can be planned around shared standards, individual site conditions, scheduling, site contacts, phased execution, progress communication, and final closeout.' },
        { q: 'Can the work be scheduled around active operations?', a: 'Depending on the project, scheduling and phasing can be developed around residents, customers, employees, guests, building access, deliveries, and other operational requirements.' },
        { q: 'What types of upgrades can be combined into one project?', a: 'A coordinated project may include lighting, CCTV, flooring, carpet, wallcoverings, painting, fixtures, equipment, and related interior or property improvements.' },
        { q: 'How does the quoting process begin?', a: 'The process begins with an initial conversation about the property, locations, desired outcome, timeline, and available information. A site review may be recommended depending on the project.' },
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
    related: [0, 1, 4],
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
  },

  /* 05 ─────────────────────────────────────────────────────────────────── */
  {
    slug:               'installations-property-systems',
    num:                '05',
    category:           'Property Systems',
    title:              'Installations & Property Systems',
    description:        'Clean, dependable installation of CCTV systems, retrofit lighting, fixtures, equipment, and essential property upgrades.',
    illustrationIndex:  4,
    meta: {
      title:       'Installations & Property Systems | IronOak Property Services',
      description: 'IronOak installs CCTV systems, retrofit lighting, fixtures, and property systems for commercial and residential properties.',
    },
    related: [0, 5, 6],
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
      heroImage:          null,
      heroImageAlt:       'Technician installing property systems equipment in a commercial building',
      heroHeading:        ['Installations &', 'Property Systems'],
      heroSupportingLine: 'Commercial • Condominium • Hospitality • Multi-Site',

      intro: [
        { label: 'Assess',    body: 'Review the property, existing systems, access conditions, and installation requirements before work begins.' },
        { label: 'Install',   body: 'Complete installation work to spec, coordinated around building access, trades, and operational schedules.' },
        { label: 'Integrate', body: 'Test, commission, and hand over each system with clear documentation and support.' },
      ],

      positioning: {
        heading: ['New systems.', 'Zero disruption.'],
        body: 'From CCTV and lighting to property hardware and equipment, IronOak plans and installs system upgrades around occupied buildings, active operations, and everyday property use.',
      },

      typicalProjects: {
        heading: 'Typical installation & systems work',
        groups: [
          { num: '01', title: 'Security & CCTV Systems', body: 'Coordinated camera and security installations for commercial and multi-residential properties.', image: null, imageAlt: 'Security camera installed in a commercial building hallway' },
          { num: '02', title: 'Lighting & Fixture Upgrades', body: 'Interior and exterior fixture replacements and upgrade programs planned around property operations.', image: null, imageAlt: 'Technician upgrading a commercial lighting fixture' },
          { num: '03', title: 'Property Equipment & Systems', body: 'Installation and replacement of building equipment, hardware and operational systems.', image: null, imageAlt: 'Building equipment and systems installed in a commercial property' },
        ],
      },

      serviceList: {
        heading: 'Installation & systems services',
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
        image:    null,
        imageAlt: 'Technician installing a security camera in a commercial hallway ceiling',
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

      faqs: [
        { q: 'What types of systems can IronOak install?', a: 'CCTV and security systems, interior and exterior lighting, fixtures, property hardware, access-related installations, and related building systems and equipment.' },
        { q: 'Can installations be scheduled around occupied buildings?', a: 'Yes. Installation work is planned around occupancy, access conditions, and daily operations to minimize disruption.' },
        { q: 'Do you coordinate installations across multiple properties?', a: 'Yes. Multi-location installation programs can be planned with consistent standards, scheduling, and site coordination.' },
        { q: 'Are installed systems tested before handover?', a: 'Yes. Systems are tested and commissioned, with documentation provided at handover.' },
        { q: 'How does the process begin?', a: 'The process begins with a conversation about the property, the systems involved, and your timeline. A site assessment may be recommended depending on scope.' },
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
    related: [0, 4, 6],
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
      heroImage:          null,
      heroImageAlt:       'Exterior entrance of a modern commercial building',
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
        groups: [
          { num: '01', title: 'Entrances & Common Areas', body: 'Improvements to high-traffic exterior areas that shape the first impression of the property.', image: null, imageAlt: 'Renovated commercial building entrance' },
          { num: '02', title: 'Exterior Lighting & Features', body: 'Coordinated upgrades to lighting, fixtures and property elements.', image: null, imageAlt: 'Exterior lighting fixture installed on a commercial building' },
          { num: '03', title: 'Site & Building Improvements', body: 'Exterior repairs and enhancement work planned around active properties.', image: null, imageAlt: 'Exterior repair and improvement work on a commercial property' },
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

      overview: {
        eyebrow:    'Exterior Improvement Delivery',
        heading:    'Planned around the property, not just the season.',
        paragraphs: [
          'Every exterior project begins with understanding the property, its condition, and how the work fits around ongoing operations.',
          'IronOak coordinates scheduling, trades, and site conditions from initial review through completion and final review.',
        ],
        image:    null,
        imageAlt: 'Exterior improvement work in progress on a commercial building',
      },

      photoBanner: {
        heading: 'The first thing people see.',
        body:    'Entrances, walkways, and exterior condition shape how a property is perceived before anyone steps inside. Exterior work is planned to protect that impression.',
        image:    null,
        imageAlt: 'Wide exterior view of a well-maintained commercial property entrance',
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

      faqs: [
        { q: 'What exterior work does IronOak handle?', a: 'Entrance and common-area improvements, exterior lighting, walkways and property features, exterior repairs, finishing, and coordinated site enhancement programs.' },
        { q: 'Can exterior work be scheduled around seasonal conditions?', a: 'Yes. Exterior work is planned around seasonal and site conditions, with timing discussed based on your specific scope.' },
        { q: 'Do you coordinate exterior programs across multiple properties?', a: 'Yes. Multi-site exterior improvement programs can be planned with consistent standards and coordinated scheduling.' },
        { q: 'Can you work around an active, occupied property?', a: 'Yes. Exterior work is planned around access, daily operations, and property use to minimize disruption.' },
        { q: 'How does the process begin?', a: 'The process begins with a conversation about the property, its exterior condition, and your priorities. A site review may be recommended depending on scope.' },
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
    related: [2, 1, 5],
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
  },
]
