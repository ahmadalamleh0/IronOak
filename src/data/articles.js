/**
 * ARTICLES — centralized data source for the Insights system.
 *
 * Consumed by:
 *   - src/pages/InsightsPage.jsx   (index grid — renders every article)
 *   - src/pages/ArticlePage.jsx    (reusable template — renders one article by slug)
 *   - src/components/BlogPreview/BlogPreview.jsx (homepage preview — renders `featured` articles)
 *
 * Paragraph format:
 *   Each paragraph is an array of "runs". A run is either a plain string or
 *   { text, to } for an inline internal link. This keeps body copy data-driven
 *   (a CMS could serialize the same shape) without embedding HTML/markdown.
 *
 * Adding a new article: append an object below with the same shape and it will
 * automatically appear on /insights. Set `featured: true` (up to 3) to also
 * surface it in the homepage preview.
 */

export const ARTICLES = [
  /* ── 01 ──────────────────────────────────────────────────────────────── */
  {
    slug: 'how-to-plan-a-multi-site-property-upgrade',
    category: 'Capital Projects',
    title: 'How to Plan a Multi-Site Property Upgrade Without Disrupting Operations',
    shortTitle: 'How to Plan a Multi-Site Property Upgrade',
    excerpt:
      'A practical framework for coordinating upgrades across multiple properties while maintaining consistency, communication, and day-to-day operations.',
    metaTitle: 'How to Plan a Multi-Site Property Upgrade | IronOak',
    metaDescription:
      'Learn how to plan lighting retrofits, security installations, interior upgrades, and other property improvements across multiple locations while reducing disruption.',
    publishedDate: '2026-07-21',
    modifiedDate: '2026-07-21',
    readingTime: '8 min read',
    author: 'IronOak Property Services',
    featuredImage: '/insights/multi-site-property-upgrade.jpg',
    featuredImageAlt:
      'Condominium and commercial towers across a city skyline at dusk, representing coordinated property upgrades across multiple locations',
    featured: true,

    introduction: [
      [
        'Upgrading a single property is largely a matter of scope, budget, and scheduling. Upgrading the same type of work across several properties introduces a different kind of problem: every additional location multiplies the number of stakeholders, access windows, site conditions, and small decisions that need to stay consistent. A lighting retrofit that takes two weeks at one site can take two months across ten sites if it is not planned as one coordinated project rather than ten separate ones.',
      ],
      [
        'This is the situation many retail operators, condominium portfolios, commercial landlords, and hospitality groups face when planning improvements such as retrofit lighting, CCTV installation, or interior refreshes across a portfolio. The work itself may be familiar. What is harder is keeping quality, materials, and communication consistent from the first site to the last, while the properties keep operating around the project.',
      ],
      [
        'The framework below outlines how a ',
        { text: 'multi-site project coordination', to: '/services/construction-project-management' },
        ' approach differs from a single renovation, and what to plan for before work begins at the first location.',
      ],
    ],

    sections: [
      {
        heading: 'Start With One Clearly Defined Project Scope',
        paragraphs: [
          [
            'Before any site visits or scheduling conversations, it helps to write down exactly what this project is — and, just as importantly, what it is not. A scope document for a multi-site upgrade should cover the overall goal, the list of locations involved, the work that is included, the work that is explicitly excluded, the materials and finish standards being used, and what "complete" looks like at each site.',
          ],
          [
            'This matters more across multiple properties than it does for one, because small ambiguities compound. If "replace lobby lighting" is not defined clearly, one site may end up with a different fixture, colour temperature, or mounting height than another. A single, clearly written scope becomes the reference point every site manager and trade can be measured against, and it gives you a fair way to evaluate change requests if a specific location genuinely needs something different.',
          ],
          [
            'It is also worth noting up front where sites are expected to differ. Not every location will have identical ceiling heights, electrical capacity, or layouts, and the scope should acknowledge that some site-specific adjustment is normal rather than a deviation from plan.',
          ],
        ],
      },
      {
        heading: 'Survey Every Location Before Final Scheduling',
        paragraphs: [
          [
            'A scope document tells you what you want to do. A site survey tells you what is actually possible at each location. Before committing to a final schedule or ordering materials in bulk, every site should be assessed individually for the conditions that affect the work.',
          ],
          [
            'That typically includes physical measurements, access points and loading areas, parking or delivery restrictions, building or property-management rules about work hours and noise, existing electrical or security infrastructure, and whether the space is occupied during business hours or after them. Two locations that look identical on paper can still require different approaches once you see how deliveries reach the building or how narrow a service corridor is.',
          ],
          [
            'Surveys are also where you catch the differences that would otherwise surface mid-project — a site with older wiring that needs a different installation approach, or a location where the loading dock is only accessible for a two-hour window each morning. Finding this before scheduling is far less disruptive than finding it once the crew has already arrived.',
          ],
        ],
      },
      {
        heading: 'Create a Repeatable Standard',
        paragraphs: [
          [
            'Consistency is one of the main reasons to treat a multi-site upgrade as one coordinated project rather than a series of unrelated jobs. That means locking in the same materials, the same installation methods, and the same finishing standards across every site, with clear documentation that trades and site contacts can refer back to.',
          ],
          [
            'A short quality-control checklist — confirming fixture placement, finish quality, cleanup, and functional testing — gives every site the same bar to clear before it is marked complete. This is particularly important for a brand or property portfolio where tenants, guests, or residents may visit more than one location and would notice inconsistency.',
          ],
          [
            'Having a documented standard also makes it easier to onboard additional trades or crews partway through a large rollout without quality drifting between the first site and the last.',
          ],
        ],
      },
      {
        heading: 'Choose the Right Rollout Strategy',
        paragraphs: [
          [
            'Once the scope and standard are set, the next decision is how work actually moves from site to site. A pilot location — one representative property completed first — is a useful way to confirm that the scope, materials, and installation approach work as intended before committing to the full portfolio.',
          ],
          [
            'From there, a phased rollout (grouping sites by region, priority, or availability) is usually easier to manage than trying to run every location in parallel, particularly when the same trades and materials are moving between sites. Off-hour or overnight work can reduce disruption at occupied properties, though it typically affects labour cost and should be weighed against the benefit at each location.',
          ],
          [
            'Sequential execution — one site at a time, or in small batches — gives you more control and easier problem-solving, since lessons learned at an early site can be applied to later ones. Running everything in parallel can compress the overall timeline but leaves less room to adjust the approach mid-project.',
          ],
        ],
      },
      {
        heading: 'Plan Around Occupants and Operations',
        paragraphs: [
          [
            'Every property involved in the upgrade almost certainly has customers, employees, residents, or tenants who are not part of the project but will be affected by it. Reducing that disruption starts with clear communication — notices in advance, realistic timelines, and a consistent point of contact for questions at each site.',
          ],
          [
            'Practical measures matter as much as the notice itself: clearly marked work zones, protected walkways, managed noise and dust, and scheduling around the times a space is busiest. A retail unit may prefer work before opening hours; a condominium hallway may be more flexible mid-morning on a weekday. These details are usually specific to each property, which is another reason the site survey step matters.',
          ],
        ],
      },
      {
        heading: 'Use One Point of Accountability',
        paragraphs: [
          [
            'Multi-site projects involve a lot of moving parts — scheduling, trades, materials, individual site contacts, and progress reporting. Coordinating all of that through a single point of accountability, rather than leaving each site to manage its own version of the project, keeps the work aligned with the original scope and standard.',
          ],
          [
            'A single point of contact also makes issue resolution faster. If a problem comes up at one site — a material delay, an access conflict, a scheduling change — it can be addressed with the full context of the project, rather than in isolation from what is happening elsewhere in the portfolio.',
          ],
        ],
      },
      {
        heading: 'Track Progress and Close Out Every Site Properly',
        paragraphs: [
          [
            'Consistent progress updates across every location help you see, in one place, which sites are complete, which are in progress, and which are still scheduled. Photo documentation at each stage supports this and gives you a clear record if a question comes up later about what was done and when.',
          ],
          [
            'Closing out each site properly — rather than considering the whole project done once most locations are finished — matters just as much as starting well. That includes a deficiency list for anything that needs correction, a final inspection against the original scope and quality checklist, a formal site sign-off, and any warranty or maintenance information the property manager should keep on file.',
          ],
        ],
      },
      {
        heading: 'Common Multi-Site Upgrades',
        paragraphs: [
          [
            'The framework above applies to most portfolio-wide improvement projects, including retrofit lighting, ',
            { text: 'CCTV and access-control installation', to: '/services/installations-property-systems' },
            ', ',
            { text: 'carpet and wallcovering replacement', to: '/services/interior-finishing' },
            ', general interior refreshes, fixture replacement, guest-room or suite renovations, and exterior improvements such as signage, entrances, or landscaping.',
          ],
          [
            'What these projects have in common is that the individual work is often straightforward — the complexity comes from repeating it consistently, on schedule, across locations that each have their own conditions and occupants to work around.',
          ],
        ],
        list: [
          'Retrofit lighting',
          'CCTV and access-control installation',
          'Carpet replacement',
          'Wallcovering replacement',
          'Interior refreshes',
          'Fixture installation',
          'Guest-room or suite renovation',
          'Exterior improvements',
        ],
      },
    ],

    conclusion: [
      [
        'A multi-site property upgrade succeeds or struggles based on planning decisions made before the first tool is picked up: a clearly defined scope, a survey of every location, a repeatable standard, a rollout strategy suited to the properties involved, and one point of accountability tying it all together. None of this removes the day-to-day complexity of working across a portfolio, but it does turn that complexity into something that can be managed and communicated clearly — to trades, to site contacts, and to the people who use the properties every day.',
      ],
      [
        'IronOak coordinates capital projects and multi-site work across residential, condominium, commercial, and hospitality properties, managing scheduling, trades, and site communication from a single point of contact.',
      ],
    ],

    relatedServices: [
      { label: 'Construction & Project Management', slug: 'construction-project-management' },
      { label: 'Installations & Property Systems', slug: 'installations-property-systems' },
      { label: 'Interior Finishing', slug: 'interior-finishing' },
    ],
    relatedArticleSlugs: [
      'preventative-maintenance-checklist-for-condominiums',
      'when-to-replace-commercial-carpet-and-wallcoverings',
    ],
    finalCta: {
      heading: 'Planning a property project?',
      body: "Tell IronOak what your property needs and we'll help you understand the next step.",
      buttonLabel: 'Request a Quote',
    },
  },

  /* ── 02 ──────────────────────────────────────────────────────────────── */
  {
    slug: 'preventative-maintenance-checklist-for-condominiums',
    category: 'Condominium Maintenance',
    title: 'A Preventative Maintenance Checklist for Condominium Properties',
    shortTitle: 'Condominium Preventative Maintenance Checklist',
    excerpt:
      'A practical checklist for keeping condominium common areas, building finishes, fixtures, and property systems in dependable condition.',
    metaTitle: 'Condominium Preventative Maintenance Checklist | IronOak',
    metaDescription:
      'Use this practical condominium maintenance checklist to identify recurring property needs, reduce unexpected repairs, and plan improvements more effectively.',
    publishedDate: '2026-07-21',
    modifiedDate: '2026-07-21',
    readingTime: '9 min read',
    author: 'IronOak Property Services',
    featuredImage: '/images/property-condos.jpg',
    featuredImageAlt:
      'Condominium towers and landscaped common areas along a waterfront property at sunset',
    featured: true,

    introduction: [
      [
        'Condominium buildings age unevenly. Some components fail on a predictable schedule, while others hold up quietly for years and then need attention all at once. A structured approach to ',
        { text: 'preventative maintenance', to: '/services/property-maintenance-repairs' },
        ' helps boards, property managers, and building operators catch small issues before they become larger repairs, budget more accurately for the work ahead, and keep common areas presentable for residents, owners, and prospective buyers alike.',
      ],
      [
        'The checklist below is organized the way most condominium properties are — by area and by system — so it can be used as a running reference rather than a one-time exercise. It is not a substitute for professional inspection where structural, electrical, life-safety, or code-compliance questions are involved; those items should always be assessed by an appropriately qualified professional.',
      ],
    ],

    sections: [
      {
        heading: 'How to Use This Checklist',
        paragraphs: [
          [
            'Preventative maintenance works best as a rhythm rather than a single event. Many of the items below are suited to a monthly walk-through, others make more sense as a seasonal check tied to weather changes, and some — particularly anything involving structure, electrical systems, or building envelope — are better handled as an annual review by a qualified professional rather than a visual check by staff.',
          ],
          [
            'Whatever schedule you settle on, the most useful habit is documenting what you find, assigning responsibility for each item, and separating urgent issues from planned ones. A cracked tile is rarely an emergency; a flickering light over a fire exit sign might be. Prioritizing this way keeps the list actionable instead of overwhelming.',
          ],
        ],
      },
      {
        heading: 'Entrances, Lobbies, and Common Areas',
        paragraphs: [
          [
            'These are the spaces owners, residents, and visitors see first, so wear here tends to stand out quickly. On a routine walk-through, check entrance doors and hardware for smooth operation, look for damage or wear on walls and wallcoverings, and note any flooring or carpet that is fraying, staining, or lifting at the seams.',
          ],
          [
            'Lighting, signage, and fixtures are worth a quick visual check as well — burnt-out bulbs and dated signage are easy to miss day to day but noticeable to anyone visiting occasionally. Any accessibility concerns, such as door hardware that no longer operates smoothly or uneven transitions in flooring, should be flagged and referred to an appropriately qualified professional rather than addressed informally.',
          ],
        ],
        list: [
          'Entrance doors and hardware',
          'Walls and wallcoverings',
          'Flooring and carpet condition',
          'Lighting fixtures and bulbs',
          'Signage',
          'Common-area fixtures',
          'Visible damage and wear',
          'Accessibility concerns (refer to a qualified professional)',
        ],
      },
      {
        heading: 'Hallways and Shared Interior Spaces',
        paragraphs: [
          [
            'Hallways see continuous traffic and tend to show wear gradually rather than all at once, which makes them easy to overlook until the condition is significant. Regular checks should include carpet condition, scuffed or damaged baseboards, paint and wallcovering wear (especially around corners and door frames), and any ceiling staining that could point to a moisture issue above.',
          ],
          [
            'Lighting levels and door frame condition are also worth tracking over time, along with the condition of any common-area furniture or fixtures in shared spaces. None of these items are urgent individually, but tracking them consistently is what reveals whether a hallway needs isolated repairs or is approaching the point where a full refurbishment makes more sense.',
          ],
        ],
        list: [
          'Carpet condition',
          'Baseboards',
          'Paint and wallcoverings',
          'Ceiling staining or damage',
          'Lighting levels',
          'Door frames',
          'Common-area furniture or fixtures',
        ],
      },
      {
        heading: 'Building Exterior and Site Areas',
        paragraphs: [
          [
            'Exterior conditions change with the seasons, so this is an area worth checking more frequently than interior common spaces. A visual review should include visible façade damage, condition of walkways and entrances, fencing, and exterior lighting.',
          ],
          [
            'Drainage is worth observing after heavy rain — pooling water near entrances or foundations is useful information even if the underlying cause needs a professional assessment. Seasonal cleanup, such as clearing debris or preparing planting areas, is a lower-stakes task that keeps the property looking cared for between larger projects.',
          ],
          [
            'Any concerns involving structure, electrical systems, drainage design, or safety should be assessed by an appropriately qualified professional rather than diagnosed informally during a routine walk-through.',
          ],
        ],
        list: [
          'Visible façade damage',
          'Walkways',
          'Entrances',
          'Fencing',
          'Exterior lighting',
          'Drainage observations',
          'Seasonal property cleanup',
        ],
      },
      {
        heading: 'Lighting, Security, and Property Systems',
        paragraphs: [
          [
            'Property systems tend to fail quietly — a camera that stops recording or a light that burns out in a low-traffic stairwell can go unnoticed for longer than almost anything else on this list. A periodic check of failed or flickering lighting, outdated fixtures, CCTV camera visibility and physical condition, and access-control hardware helps catch these gaps before they become a bigger issue.',
          ],
          [
            'Common-area equipment, such as intercoms or automatic doors, is worth including in the same review. Where repeated small failures point to aging infrastructure rather than isolated faults, that is often a sign to start planning a broader retrofit rather than continuing with one-off repairs.',
          ],
        ],
        list: [
          'Failed or flickering lighting',
          'Outdated fixtures',
          'CCTV camera visibility',
          'Damaged cameras',
          'Access-control hardware',
          'Common-area equipment',
          'Opportunities for planned retrofits',
        ],
      },
      {
        heading: 'Suites, Turnovers, and Deficiency Work',
        paragraphs: [
          [
            'Unit turnovers are a natural checkpoint for identifying maintenance needs that would otherwise be hard to access. Common turnover work includes drywall repair, painting, flooring repair or replacement, door and hardware adjustment, and fixture replacement, along with a final cleaning before the unit is shown or occupied again.',
          ],
          [
            'Documenting deficiencies found during turnover — even minor ones — builds a useful record over time. A pattern of similar issues across multiple units, such as the same fixture failing repeatedly, is often more informative than the condition of any single unit on its own.',
          ],
        ],
      },
      {
        heading: 'Seasonal Maintenance Planning',
        paragraphs: [
          [
            'Different seasons bring different priorities. Spring is a natural time to assess winter wear on exteriors and walkways and to plan any landscaping or common-area refresh. Summer allows for exterior work that benefits from warmer, drier conditions.',
          ],
          [
            'Fall is typically about preparing the property for colder weather — checking exterior lighting ahead of shorter days, and reviewing drainage before snow and ice become a factor. Winter maintenance is often more about monitoring than active project work, watching for issues that only appear under cold-weather conditions and flagging anything that needs a professional assessment rather than attempting technical fixes in difficult conditions.',
          ],
        ],
      },
      {
        heading: 'Documenting and Prioritizing Maintenance',
        paragraphs: [
          [
            'A simple, consistent record is more valuable than a perfect one. For each item identified, it helps to note the location, a description of the issue, a photograph, the date it was observed, a priority level, who is responsible for follow-up, and its current status.',
          ],
          [
            'Over time, this record becomes a useful planning tool on its own — it shows which areas of the property need attention most often, supports budget conversations with the board, and gives new property management staff a clear picture of the building\'s condition without having to start from scratch.',
          ],
        ],
        list: [
          'Location',
          'Description of the issue',
          'Photograph',
          'Date observed',
          'Priority level',
          'Assigned party',
          'Completion status',
        ],
      },
      {
        heading: 'When Maintenance Becomes a Capital Project',
        paragraphs: [
          [
            'At a certain point, repeated repairs in the same area are a signal rather than a coincidence. If the same section of hallway carpet keeps needing patches, or the same lighting circuit keeps failing, that pattern often points toward a larger project — a lighting retrofit, hallway refurbishment, ',
            { text: 'carpet or wallcovering replacement', to: '/services/interior-finishing' },
            ', a CCTV system upgrade, or a broader common-area renovation.',
          ],
          [
            'Recognizing that shift early, rather than continuing to fund small repairs indefinitely, is often the more cost-effective path, and it is a conversation worth having with a ',
            { text: 'construction and project management', to: '/services/construction-project-management' },
            ' partner once the pattern becomes clear.',
          ],
        ],
      },
    ],

    conclusion: [
      [
        'A dependable maintenance routine is less about any single inspection and more about consistency — checking the same areas on a regular schedule, documenting what is found, and knowing when an issue has moved from routine repair into planned project territory. Structural, electrical, and safety-related findings should always be directed to an appropriately qualified professional.',
      ],
      [
        'IronOak supports condominium boards and property managers with ongoing maintenance, responsive repairs, and the capital project work that follows when a building is ready for a larger upgrade.',
      ],
    ],

    relatedServices: [
      { label: 'Property Maintenance & Repairs', slug: 'property-maintenance-repairs' },
      { label: 'Construction & Project Management', slug: 'construction-project-management' },
      { label: 'Installations & Property Systems', slug: 'installations-property-systems' },
    ],
    relatedArticleSlugs: [
      'how-to-plan-a-multi-site-property-upgrade',
      'when-to-replace-commercial-carpet-and-wallcoverings',
    ],
    finalCta: {
      heading: 'Planning a property project?',
      body: "Tell IronOak what your property needs and we'll help you understand the next step.",
      buttonLabel: 'Request a Quote',
    },
  },

  /* ── 03 ──────────────────────────────────────────────────────────────── */
  {
    slug: 'when-to-replace-commercial-carpet-and-wallcoverings',
    category: 'Interior Finishing',
    title: 'When High-Traffic Buildings Should Replace Carpet and Wallcoverings',
    shortTitle: 'When to Replace Carpet and Wallcoverings',
    excerpt:
      'Learn how to recognize wear, compare repair with replacement, and plan interior upgrades in busy condominiums, hotels, offices, and commercial buildings.',
    metaTitle: 'When to Replace Commercial Carpet and Wallcoverings | IronOak',
    metaDescription:
      'Learn the signs that commercial carpet and wallcoverings may need replacement and how to plan interior finishing work with less operational disruption.',
    publishedDate: '2026-07-21',
    modifiedDate: '2026-07-21',
    readingTime: '8 min read',
    author: 'IronOak Property Services',
    featuredImage: '/insights/commercial-carpet-wallcoverings.jpg',
    featuredImageAlt:
      'A building hallway corridor with wood-panelled walls and carpeted flooring typical of high-traffic commercial and condominium buildings',
    featured: true,

    introduction: [
      [
        'In a busy building, floors and walls absorb more daily wear than almost any other finish. Carpet and wallcoverings in a condominium hallway, hotel corridor, or office lobby are seen by more people, more often, than nearly anything else in the property — which means their condition has an outsized effect on how the whole building is perceived, even when everything else is well maintained.',
      ],
      [
        'The challenge for property managers is timing: replacing finishes too early wastes budget, while waiting too long means living with an appearance and maintenance burden that keeps getting worse. This guide walks through the signs worth watching for, how to weigh repair against replacement, and how to plan the work itself with less disruption to the people using the building every day.',
      ],
    ],

    sections: [
      {
        heading: 'Signs Carpet May Be Near the End of Its Useful Life',
        paragraphs: [
          [
            'Carpet wear is usually gradual, which is part of why it is easy to underestimate until it is pointed out directly. Permanent staining that no longer responds to cleaning, visible traffic lanes worn into high-use paths, fraying at edges and seams, and rippling or bunching in the underlay are all signs that the material itself — not just its surface — has started to break down.',
          ],
          [
            'Loose seams and uneven wear across a hallway (patches that look newer next to patches that look much older) often point to piecemeal repairs over time rather than one consistent installation. If the same sections keep needing attention, that repetition is itself useful information. Any odour or moisture concerns should be investigated by an appropriately qualified professional, since they can point to issues beneath the surface that a visual inspection will not reveal.',
          ],
        ],
        list: [
          'Permanent staining',
          'Visible traffic lanes',
          'Fraying',
          'Loose seams',
          'Rippling',
          'Uneven wear',
          'Recurring repair needs',
          'Odour or moisture concerns (refer to a qualified professional)',
        ],
      },
      {
        heading: 'Signs Wallcoverings May Need Replacement',
        paragraphs: [
          [
            'Wallcoverings tend to fail at the seams first — peeling or lifting edges, visible seam lines, and bubbling where adhesive has let go are usually the earliest signs. Tears, gouges, and discolouration (particularly from sunlight exposure or repeated cleaning) follow as the material ages.',
          ],
          [
            'Repeated patching is a useful indicator here as well. A single patch is a minor repair; needing to patch the same wall several times over a year or two usually means the surrounding material is also nearing the end of its serviceable life, even if it looks acceptable at a glance. Damage concentrated in high-contact areas — near door frames, elevator lobbies, or furniture lines — often ages faster than the rest of the wall and may need attention before the surrounding area does.',
          ],
        ],
        list: [
          'Peeling seams',
          'Bubbling',
          'Tears',
          'Discolouration',
          'Repeated patching',
          'Outdated appearance',
          'Damage concentrated in high-contact areas',
        ],
      },
      {
        heading: 'Repair, Partial Replacement, or Full Replacement?',
        paragraphs: [
          [
            'Not every worn area calls for a full replacement, and there is no single rule that applies to every building. The right approach depends on several factors working together: how much of the area is affected, whether matching material is still available, the age of the existing finish, how consistent the space needs to look across a larger area, how often repairs have already been needed, and whether a larger renovation is already planned.',
          ],
          [
            'A small, isolated repair can be the right call in a building with a newer overall finish. In an older building where repairs are becoming frequent, or where the original material is no longer available to match, full replacement is often the more practical long-term decision — but this is genuinely a case-by-case judgment rather than a fixed interval to plan around.',
          ],
        ],
      },
      {
        heading: 'Plan Around Traffic and Building Operations',
        paragraphs: [
          [
            'Interior finishing work in an occupied building needs to work around the people using it, not the other way around. Phasing the work by floor or zone is usually more manageable than attempting an entire building at once, and off-hour scheduling can reduce the impact on residents, tenants, or guests where it is practical.',
          ],
          [
            'Advance notice matters as much as the schedule itself — residents and tenants generally adapt well to disruption they were told about in advance. Temporary alternate routes, careful coordination of material deliveries, and attention to noise, odour, and daily cleanup all help protect the experience of people still using the building while work is underway.',
          ],
        ],
      },
      {
        heading: 'Choose Materials for the Actual Environment',
        paragraphs: [
          [
            'The right material for a quiet office corridor is not necessarily the right material for a hotel lobby or a condominium entrance with heavy foot traffic. Traffic level is the starting point, but cleanability, durability, appearance, and long-term maintenance needs all factor into the decision, along with how the building itself is used day to day.',
          ],
          [
            'It is also worth checking how easily a material can be matched or replaced in the future — a finish that looks right today but is difficult to source again can create the same patchwork problem down the line. Manufacturer selection should be based on a genuine fit for the space and any confirmed supplier relationships, rather than a general recommendation.',
          ],
        ],
      },
      {
        heading: 'Coordinate Related Interior Work',
        paragraphs: [
          [
            'Carpet and wallcovering replacement is rarely worth doing in isolation if other nearby finishes are due for attention around the same time. Painting, baseboards, door frames, lighting, signage, minor drywall repair, and fixture replacement are commonly coordinated alongside flooring and wall finishing work, since much of the disruption — access, scheduling, protecting occupied areas — is shared across all of it.',
          ],
          [
            'Bundling this work with a broader ',
            { text: 'renovation or remodeling', to: '/services/renovations-remodeling' },
            ' project, where one is already planned, is usually more efficient than scheduling each finish separately over time.',
          ],
        ],
      },
      {
        heading: 'Create a Consistent Finish Across Multiple Areas',
        paragraphs: [
          [
            'In buildings with several hallways, floors, or common areas, consistency is often as important as the material choice itself. Sample approval before ordering, a mock-up area to confirm the look in real lighting conditions, and clear colour and installation standards all help avoid mismatches between sections completed at different times.',
          ],
          [
            'A deficiency inspection at the end of each phase, along with straightforward documentation of what was installed and where, makes it easier to maintain that consistency if additional areas are finished later — which is common in ',
            { text: 'multi-site or phased property work', to: '/services/construction-project-management' },
            '.',
          ],
        ],
      },
    ],

    conclusion: [
      [
        'Recognizing wear early, weighing repair against replacement honestly, and planning the work around the people who use the building every day are the main factors that separate a smooth interior finishing project from a disruptive one. Good planning can improve consistency and reduce interruption, though outcomes will always depend on the specific building, material, and scope involved.',
      ],
      [
        'IronOak plans and delivers interior finishing work — flooring, carpet, wallcoverings, and painting — for condominiums, hospitality properties, and commercial buildings, coordinating around occupied spaces from start to finish.',
      ],
    ],

    relatedServices: [
      { label: 'Interior Finishing', slug: 'interior-finishing' },
      { label: 'Renovations & Remodeling', slug: 'renovations-remodeling' },
      { label: 'Construction & Project Management', slug: 'construction-project-management' },
    ],
    relatedArticleSlugs: [
      'preventative-maintenance-checklist-for-condominiums',
      'how-to-plan-a-multi-site-property-upgrade',
    ],
    finalCta: {
      heading: 'Planning a property project?',
      body: "Tell IronOak what your property needs and we'll help you understand the next step.",
      buttonLabel: 'Request a Quote',
    },
  },
]

export const getArticleBySlug = (slug) => ARTICLES.find((a) => a.slug === slug)

export const getFeaturedArticles = (count = 3) =>
  ARTICLES.filter((a) => a.featured).slice(0, count)

export const getRelatedArticles = (article) =>
  (article.relatedArticleSlugs || [])
    .map((slug) => getArticleBySlug(slug))
    .filter(Boolean)
