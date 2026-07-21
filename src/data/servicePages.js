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

  /* 03 ─────────────────────────────────────────────────────────────────── */
  {
    slug:               'construction-project-management',
    num:                '03',
    category:           'Capital Projects',
    title:              'Construction & Project Management',
    description:        'Coordinated capital projects and multi-site work delivered through structured planning, professional oversight, and dependable execution.',
    illustrationIndex:  2,
    meta: {
      title:       'Construction & Project Management | IronOak Property Services',
      description: 'IronOak delivers coordinated capital projects and multi-site construction management for commercial and residential properties.',
    },
    related: [1, 5, 6],
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
  },

  /* 04 ─────────────────────────────────────────────────────────────────── */
  {
    slug:               'interior-finishing',
    num:                '04',
    category:           'Interior Finishing',
    title:              'Interior Finishing',
    description:        'Professional finishing work for flooring, carpet replacement, wallcoverings, painting, and complete interior refreshes.',
    illustrationIndex:  3,
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
