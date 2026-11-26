// Ironworker (Structural/Ornamental) guide. Practice questions are original study aids, not official Red Seal exam questions.

const steelBank = (rows) => rows.map(([q, ok, bad, explain], i) => {
  const answer = (i * 3 + 2) % 4;
  const options = [...bad];
  options.splice(answer, 0, ok);
  return { q, options, answer, explain };
});

registerTrade({
  id: "ironworker-structural",
  store: "ironworker-structural",
  title: "Ironworker (Structural/Ornamental)",
  name: "Ironworker (Structural/Ornamental)",
  short: "structural ironwork",
  category: "Construction · Structural Steel · Metalwork",
  summary: "Erect, bolt, weld, and rig structural steel frames, then install the stairs, railings, and architectural metalwork that finish buildings, bridges, and industrial plants.",
  work: "Structural and ornamental ironworkers unload, sort, and hoist steel, connect beams and columns, plumb and align the frame, then bolt and weld it. They also install steel deck, stairs, handrails, guards, and ornamental metal. Work is often at height, outdoors, and as part of a tight crew with crane operators and riggers.",
  duration: "Usually about 3 years, varies by province",
  union: "Iron Workers (Ironworkers) union",
  unionUrl: "https://www.ironworkers.org/",
  jobSearch: "structural ironworker apprentice",
  journeySearch: "structural ornamental ironworker",
  aliases: "iron worker steel erector connector rigger bolt-up welder structural steel ornamental metal stairs railings deck",
  tools: [
    "Spud wrench and ratchet with impact sockets",
    "Bull pin and drift pin set",
    "Beam clamps and tag line",
    "Tape measure and levels",
    "Full-body harness with energy-absorbing lanyard",
    "Hard hat, safety glasses, and CSA boots"
  ],
  insight: {
    skills: [
      "Comfort with heights and physical work",
      "Spatial thinking and reading structural drawings",
      "Balance, coordination, and trust in a crew",
      "Basic math for alignment, angles, and loads"
    ],
    hazards: [
      "Falls from steel: 100 percent fall protection planning and tie-off",
      "Dropped objects: tie off tools and use debris netting",
      "Rigging and hoisting: stay clear of suspended loads",
      "Hot work and welding: permits, fire watch, and fume control"
    ],
    settings: [
      "High-rise and commercial building frames",
      "Bridges and infrastructure",
      "Industrial and energy plants",
      "Fabrication shops and ornamental metal contractors"
    ]
  },
  toolGroups: [
    {
      title: "Day-one tools, buy once and buy well",
      note: "Professional-grade tools that hold up at height. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first, and tie off every tool used at height.",
      items: [
        { name: "Spud wrench (7/8 in to 1-1/8 in)", why: "Tapered handle to align holes, ratchet end to snug bolts. The signature tool of the trade.", search: "ironworker spud wrench 15/16 1-1/8 Klein" },
        { name: "Bull pins and drift pins", why: "Pull steel into alignment so bolts go in without damaging threads. Choose hardened pins with sized tapers.", search: "ironworker bull pin drift pin set" },
        { name: "Klein ironworker bolt bag and tool belt", why: "Carries bolts, nuts, and washers safely and keeps your hands free on the beam.", search: "Klein ironworker bolt bag tool belt" },
        { name: "Tool lanyards and wrist or belt tethers", why: "Keep tools attached so they can't fall. Dropped objects are a serious hazard at height.", search: "tool tether lanyard 3M DBI-SALA" },
        { name: "Milwaukee or Stanley FatMax tape measure (7.5 m / 25 ft)", why: "Wide, stiff blade for plumbing columns, layout, and checking connection dimensions.", search: "Stanley FatMax 7.5 m 25 ft tape measure metric" },
        { name: "Torpedo level and plumb bob", why: "Checks column and beam alignment, a core task of plumbing up the frame.", search: "Milwaukee magnetic torpedo level plumb bob" },
        { name: "Cut-resistant gloves", why: "Steel edges, burrs, and slings wear out gloves quickly. Pick pairs with grip and cut protection.", search: "cut resistant work gloves Mechanix Youngstown leather" },
        { name: "CSA safety boots with metatarsal protection and a slip-resistant sole", why: "Narrow beam walking, dropped steel, and winter conditions demand stable, protective boots.", search: "CSA safety boots metatarsal slip resistant sole waterproof" },
        { name: "Hard hat with chin strap and safety glasses", why: "At height a chin strap keeps your hard hat on. Grinding and welding spark protection matter too.", search: "hard hat chin strap CSA Z94.1 safety glasses" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson or foreman what holds up on your sites.",
      items: [
        { name: "Impact wrench and impact sockets (Milwaukee M18 or Makita)", why: "Tighten high-strength bolts quickly. Sites usually require calibrated equipment for pretension, so follow the foreman.", search: "Milwaukee M18 FUEL high torque impact wrench 1/2 impact sockets" },
        { name: "Ratcheting end wrench set", why: "Fast bolting on beam connections and bracing.", search: "ratcheting wrench set metric SAE Gearwrench" },
        { name: "Spirit level (900 mm) and magnetic square", why: "Check plumb and square when aligning and welding.", search: "Stabila level 36 inch magnetic square" },
        { name: "Chalk line and soapstone or paint markers", why: "Mark layout and match marks on steel, even on dusty or rusty surfaces.", search: "chalk line soapstone Markal paint marker" },
        { name: "Welding helmet and leathers (if your path includes welding)", why: "Welding is a core skill for structural and ornamental work. A good auto-darkening helmet helps.", search: "auto darkening welding helmet Miller Lincoln leather jacket" },
        { name: "Cold-weather layers and rain gear", why: "High, exposed steel is cold and windy. Work-ready layers keep you safe and focused.", search: "insulated work jacket base layer rain gear" },
        { name: "Lunch kit and thermos", why: "Long exposed days on a deck call for steady fuel and hot drinks.", search: "insulated lunch box thermos construction" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying.",
      items: [
        { name: "Full-body harness and shock-absorbing lanyard (CSA Z259.10, Z259.11)", why: "Supplied by the employer in most cases. Fall protection training is required before use.", search: "CSA Z259.10 full body harness shock absorbing lanyard" },
        { name: "Self-retracting lifeline and horizontal lifeline kit", why: "Used for connecting on steel and decks. Usually site-specific, so ask before buying.", search: "self retracting lifeline horizontal lifeline beam" },
        { name: "Torque wrench and bolt tension equipment", why: "Verify bolt pretension as required by the connection and the inspection plan.", search: "calibrated torque wrench structural bolt tension" },
        { name: "Rigging hardware: shackles, slings, and spreader bars", why: "Employer-owned and inspected. Know how to inspect and read rated capacity tags.", search: "rigging shackles slings rated capacity" },
        { name: "Oxy-fuel cutting torch kit", why: "Cutting and heating steel. Only with proper training, permits, and fire watch.", search: "oxy acetylene cutting torch kit Victor Harris" },
        { name: "Stud welder or deck fastening tools", why: "Used for shear studs and deck. Usually employer-supplied and specific to the project.", search: "shear stud welding deck fastener powder actuated" },
        { name: "Radios and hand signal card", why: "Crew communication with the crane operator. Know standard hoisting hand signals.", search: "construction two way radio crane hand signal card" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for drawings, math, and standards. Check with your school and exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Trig for angles, offsets, bolt layouts, and sling tension. Confirm exam rules.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Engineer's scale and architect's scale", why: "Reading structural and shop drawings at multiple scales.", search: "engineer scale architect scale ruler set" },
        { name: "Mechanical pencil (0.5 mm) and spare leads", why: "Neat sketches of connections and weld symbols.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm leads" },
        { name: "Triangles, protractor, and steel ruler", why: "Draw accurate angles and layout for connection sketches.", search: "Staedtler drafting triangle set protractor steel ruler" },
        { name: "Steel Construction Handbook or CISC resources (if recommended by your school)", why: "Understand shape designations, properties, and connection details. Check what your instructors require.", search: "Handbook of Steel Construction CISC" },
        { name: "Welding symbol reference card", why: "Quickly review weld symbols while reading drawings.", search: "AWS welding symbols reference chart" },
        { name: "Field notebook and binder with dividers", why: "Organize notes by year and topic, helpful for Red Seal exam review.", search: "Rite in the Rain notebook binder dividers" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare, including trade standards.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Codes Canada", desc: "The National Building Code of Canada and related model codes.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
        { name: "Iron Workers (Ironworkers) union", desc: "Union training and apprenticeship information.", url: "https://www.ironworkers.org/" },
        { name: "Canadian Institute of Steel Construction (CISC)", desc: "Steel design, fabrication, and erection resources in Canada.", url: "https://www.cisc-icca.ca/" },
        { name: "CSA Group", desc: "Publisher of S16, W59, W47.1, and Z259 standards.", url: "https://www.csagroup.org/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Fact sheets on fall protection, rigging, and WHMIS.", url: "https://www.ccohs.ca/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local codes.",
      items: [
        { name: "Structural steel erection basics", desc: "How frames are erected, plumbed, and bolted.", url: "https://www.youtube.com/results?search_query=structural+steel+erection+ironworker+basics" },
        { name: "High-strength bolting and pretension", desc: "Snug-tight, turn-of-nut, and tension control bolts.", url: "https://www.youtube.com/results?search_query=structural+bolting+turn+of+nut+tension+control+bolts" },
        { name: "Reading structural steel drawings", desc: "Erection drawings, framing plans, and connection details.", url: "https://www.youtube.com/results?search_query=reading+structural+steel+drawings+connections" },
        { name: "Rigging and slings for steel", desc: "Sling angles, shackles, and hitches for loads.", url: "https://www.youtube.com/results?search_query=rigging+slings+shackles+sling+angle+steel+erection" },
        { name: "Steel deck installation", desc: "Placing, fastening, and safety for decking.", url: "https://www.youtube.com/results?search_query=steel+deck+installation+ironworker+shear+studs" },
        { name: "Fall protection for ironworkers", desc: "Connecting, tie-off, and fall arrest systems.", url: "https://www.youtube.com/results?search_query=ironworker+fall+protection+connectors+steel+erection" },
        { name: "Ornamental stairs and railings", desc: "Fabricating and installing stairs, handrails, and guards.", url: "https://www.youtube.com/results?search_query=ornamental+iron+stair+railing+fabrication+installation" },
        { name: "Welding symbols explained", desc: "Reading fillet and groove weld symbols.", url: "https://www.youtube.com/results?search_query=welding+symbols+explained+fillet+groove" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for ironwork yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: ironworker apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=ironworker+apprentice+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: structural ironworker stories and tips (audio)", desc: "Lessons and stories from connectors and erectors.", url: "https://www.youtube.com/results?search_query=structural+ironworker+podcast+connector+stories" },
        { name: "YouTube: steel erection safety talk (audio)", desc: "Fall protection and rigging safety talks.", url: "https://www.youtube.com/results?search_query=steel+erection+safety+talk+podcast" },
        { name: "YouTube: welding and fabrication podcast", desc: "Talks on welding quality and fabrication practices.", url: "https://www.youtube.com/results?search_query=welding+fabrication+podcast+structural+steel" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, planning, and leadership.",
      items: [
        { name: "YouTube: Red Seal ironworker exam prep (talk-through)", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+ironworker+exam+preparation" },
        { name: "YouTube: construction leadership and foreman podcast", desc: "Planning crews, communication, and productivity.", url: "https://www.youtube.com/results?search_query=construction+foreman+leadership+podcast" },
        { name: "YouTube: crane and rigging safety podcast", desc: "Lift planning, signals, and rigging decisions.", url: "https://www.youtube.com/results?search_query=crane+rigging+lift+planning+podcast" }
      ]
    }
  ],
  practiceBank: {
    1: steelBank([
      ["What does a full-body harness do in a fall arrest system?", "Spreads fall forces across the body and holds you after a fall", ["Lets you work at height without needing any anchor point or lanyard connection at all", "Replaces the need for a hard hat on the deck", "Keeps tools and materials from falling off the structure"], "A harness is only one part of the system. It also needs an anchor and an energy-absorbing connector."],
      ["Which CSA standard covers full-body harnesses?", "CSA Z259.10", ["CSA S16, the steel design standard", "CSA W59, the welded steel construction standard", "CSA A23.1, the concrete materials standard"], "CSA Z259.10 covers full-body harnesses."],
      ["Why tie off tools at height?", "To prevent dropped objects from injuring workers below", ["To make tools heavier", "To look professional when the inspector visits the site", "To avoid inspections by keeping gear off the deck"], "Dropped objects are a serious hazard. Tethers prevent them."],
      ["A spud wrench is used mainly to:", "Align bolt holes and tighten bolts in steel connections", ["Cut pipe and conduit cleanly to length on the beam", "Measure and mark steel members accurately before they are lifted to the deck", "Weld beams together at the connection points"], "The tapered handle aligns holes and the ratchet end tightens bolts."],
      ["Which tool pulls two steel members into alignment so bolts can be inserted?", "Bull pin or drift pin", ["A hacksaw with a fine-tooth blade for trimming bolts", "A level checked on the top flange of the beam", "A tape measure hooked on the end of the beam"], "Pins align holes and are placed before bolts."],
      ["How many millimetres are in one inch?", "25.4", ["2.54", "10", "254"], "1 in = 25.4 mm exactly."],
      ["Steel members are normally identified in a designation such as W310x39. The 39 refers to:", "Mass in kilograms per metre", ["Length in feet", "Number of bolts needed at each end connection", "Yield strength of the steel in megapascals"], "W310x39 has a nominal depth of 310 mm and a mass of about 39 kg per metre."],
      ["Where should you look for hazards of a product such as an anti-seize or paint?", "Safety Data Sheet (SDS)", ["The drawing title block on the erection drawings", "The delivery ticket that came with the material", "The bolt tag attached to the keg"], "SDS describe hazards and first aid for hazardous products."],
      ["The person who guides a crane operator with signals is called:", "A signaller", ["An inspector", "A welder", "A surveyor"], "Only a designated signaller or rigger gives signals."],
      ["If you are not sure about a hoisting hand signal you should:", "Stop the lift and clarify", ["Guess based on what the rest of the crew is doing", "Wave your arms to get the operator's attention and carry on", "Walk away from the area and let the signaller sort it out"], "Unclear signals are a major cause of incidents. Stop and clarify."],
      ["Never stand:", "Under a suspended load", ["Beside a tag line", "In a designated safe area", "Behind a barrier"], "A failure or swing can cause fatal injuries."],
      ["Which of these is a safe way to climb a ladder?", "Three points of contact", ["Carry loads in both hands", "Stand on the top rung", "Skip the inspection"], "Use three points of contact and carry tools on a belt or hoist them."],
      ["Spark protection and eye protection are required when:", "Grinding, cutting, or welding steel", ["Reading erection drawings in the site trailer", "Walking on level ground between work areas", "Marking steel with chalk or paint stick"], "Hot sparks and particles cause eye and skin injuries."],
      ["Structural steel in Canada commonly meets which grade standard family?", "CSA G40.20/G40.21", ["CSA A23.1, which covers concrete materials", "CSA Z259, which covers fall protection equipment", "CSA B51, which covers boiler and pressure vessels"], "G40.20/G40.21 covers structural steel, such as 350W."],
      ["What is a connector's main role?", "Make the first connections to hold steel in place during erection", ["Operate the crane and signal the loads from the ground to the deck crew", "Design the frame and approve changes on site", "Inspect the concrete foundations before steel arrives"], "Connectors place and temporarily bolt members so the frame is stable."],
      ["The density of steel is about:", "7 850 kg/m³", ["1 000 kg/m³", "2 400 kg/m³", "270 kg/m³"], "Steel is about 7 850 kg per cubic metre."],
      ["Which PPE is baseline for steel erection?", "Hard hat, safety glasses, gloves, CSA boots, and fall protection", ["Baseball cap and sandals for comfort in hot weather", "Sunglasses only, since the deck is open to sunlight and glare is the main risk", "Dress shoes with a leather glove, since the work is considered light duty"], "Baseline PPE protects head, eyes, hands, and feet, with fall protection at height."]
    ]),
    2: steelBank([
      ["A snug-tight bolt condition is described as:", "The tightness reached by a few impacts of an impact wrench or the full effort of a worker with an ordinary spud wrench", ["Maximum possible torque the wrench can deliver", "Finger tight with no wrench used at all", "Hammered into place with a sledge until it stops"], "Snug-tight is the baseline before any further pretensioning."],
      ["Turn-of-nut pretensioning involves:", "Snugging the bolt, then turning the nut a specified amount", ["Hammering the bolt with a sledge until it seats fully in the hole and cannot be turned", "Welding the nut", "Using lubricant only and tightening by feel"], "The required rotation depends on the bolt length. Follow the specification."],
      ["A tension control (twist-off) bolt is tightened until:", "The spline end shears off at a set tension", ["The nut loosens", "The bolt head is painted to show it was checked", "The bolt turns by hand once the washer is seated"], "The spline breaks at the designed torque, showing that the bolt has reached tension."],
      ["Bolts in a slip-critical connection need:", "Pretension, and faying surfaces prepared as specified", ["Lubricant on the faying surfaces only", "No tightening at all, as the friction needed comes from welding the plies together", "Welding on every bolt to lock the connection"], "Slip-critical connections rely on friction between plies."],
      ["Which bolt specification is common for high-strength structural bolts?", "ASTM A325 and A490", ["ASTM A307 only, which is a low-strength machine bolt", "Wood screws with washers and a coarse thread", "Sheet metal screws with a hex washer head"], "A325 and A490 are common high-strength structural bolts."],
      ["Column plumbing means:", "Adjusting columns so they are vertical within tolerance", ["Painting columns to match the finish schedule", "Cutting columns to length at the shop bench", "Cutting columns to length at the shop bench before they ship to site"], "Plumbing up the frame sets alignment before final bolting and welding."],
      ["Base plates are normally levelled using:", "Shims or levelling nuts on anchor bolts, then grouted", ["Wood blocks and wedges left under the plate permanently", "Bare concrete alone with no shims or nuts", "Heat applied to the plate until it sits flat"], "Levelling devices set the elevation. Grout is placed after alignment."],
      ["The load rating tag on a sling shows:", "The working load limit for specific hitch and angle", ["The sling price paid by the contractor and the date it was purchased", "The colour code of the sling stitching only", "The manufacturer's address and phone number only, for warranty claims"], "Rigging must be selected using the rated capacity for the hitch."],
      ["A tag line is used to:", "Control the swing and rotation of a suspended load", ["Measure the length of a beam before lifting", "Lift a load directly from the ground to the deck without using a crane", "Hold a ladder steady for a worker at height"], "Tag lines let workers control loads from a safe distance."],
      ["What is the formula for tension in one leg of a two-leg sling?", "Load ÷ (2 × sin of the angle from horizontal)", ["Load × 2, regardless of the angle the legs make with the horizontal", "Load ÷ 10 for any sling and angle", "Load + the angle in degrees, regardless of the sling length"], "Lower angles increase tension per leg."],
      ["Sling tension per leg compared with vertical share at 45° from horizontal:", "About 1.414 times", ["0.5 times", "4 times, since the legs are at 45 degrees", "1.0 times, as angle has no effect on the legs"], "1 ÷ sin 45° ≈ 1.414."],
      ["Shear studs on steel beams in composite construction:", "Connect the slab to the beam so they act together", ["Lift the beam into position by hooking the studs to the crane block", "Align bolt holes during the connection", "Level the columns on the base plates before the grout is poured"], "Studs transfer shear between the concrete and the steel."],
      ["Steel deck is fastened with:", "Puddle welds, screws, or powder-actuated fasteners as specified", ["Duct tape across each of the sheet laps", "Tie wire wrapped around every flute and twisted tight against the beam", "Nails only, driven through the flutes into the beam"], "The specification sets the fastener type and pattern."],
      ["A welding symbol's arrow points to:", "The joint to be welded", ["The weld size only, never the location", "The weld inspector who signs off the work", "The material price on the purchase order"], "The arrow side links the symbol to the joint."],
      ["A fillet weld is:", "A triangular-section weld at an inside corner or lap", ["A hole in steel that is drilled or punched for a bolt to pass through", "A hole punched through steel plate for a bolt", "A protective coating applied after fabrication"], "Fillet welds join members at an angle."],
      ["Hot work permits are used to:", "Control fire risk from welding, cutting, and grinding", ["Order steel and consumables from the supplier before the job starts", "Log crew hours for payroll at the end of the week", "Increase the pay rate for crews doing dangerous work at height"], "Permits and fire watch prevent fires."],
      ["Erection drawings show:", "The location and mark of each steel member", ["Wages and overtime for each crew member", "Weather forecasts for the week of erection", "Tool prices and rental rates for the project"], "Piece marks link drawings to shop-marked steel."]
    ]),
    3: steelBank([
      ["Plumbing up a frame is normally done:", "After the initial bolting, before final tightening and welding", ["After paint has been applied to the frame", "Never, since the frame is always plumb as fabricated", "Only at night when the wind is calm and the crane is idle for the shift"], "Alignment is set while connections can still be adjusted."],
      ["CSA S16 covers:", "Design of steel structures", ["Concrete mix design and placement", "Fall arrest harness testing and labelling", "Boiler and pressure vessel design"], "S16 is the Canadian steel design standard."],
      ["CSA W59 covers:", "Welded steel construction (metal arc welding)", ["Scaffolding and temporary access platforms used during erection", "Rebar welding only, as used in reinforced concrete work", "Pressure piping and vessel welding"], "W59 sets requirements for welded structural steel."],
      ["CSA W47.1 covers:", "Certification of companies for fusion welding of steel", ["Bolt tightening and inspection methods for structural connections", "Rebar sizes and bending tolerances for reinforced concrete", "Harness testing and certification"], "Welding companies must be certified to this standard when required."],
      ["For a bolted connection with high-strength bolts, tension is verified by:", "Method specified, such as turn-of-nut, calibrated wrench, or tension control", ["Look and feel of the wrench as the bolt tightens up under load", "Sound of the wrench as it clicks off", "Paint colour on the bolt head after the tightening is complete"], "Use the method in the project specification and inspection plan."],
      ["Direct tension indicator washers show tension through:", "Compressed protrusions that flatten as the bolt tightens", ["Colour change of the washer as load builds", "A change in the sound of the wrench as the bolt reaches full tension", "A smell of burning lubricant at the bolt"], "A feeler gauge checks the gaps."],
      ["Lifting a beam by two choker hitches with a spreader bar helps to:", "Reduce inward force on the beam and keep the load stable", ["Speed up welding by holding the beam level while the tack welds cool", "Make the beam heavier for better stability", "Remove the need for slings altogether by hooking directly to the beam"], "Spreader bars keep sling legs near vertical."],
      ["A beam with a mass of 2 400 kg is lifted by two slings each at 60° from horizontal. Tension per sling is about:", "1 386 kg", ["1 200 kg", "2 400 kg", "2 771 kg"], "Each leg carries 2 400 ÷ (2 × 0.866) ≈ 1 386 kg."],
      ["A shackle pin should be:", "Fully engaged with its rated capacity and the correct pin", ["Replaced with a standard bolt of the same diameter", "Left loose so it can be removed quickly when the load is landed on the deck", "Drilled out so a cotter pin can pass through it"], "Use the shackle as designed, with the pin fully engaged."],
      ["Steel members stored on site should be:", "Supported off the ground and blocked to avoid distortion and water", ["Stacked directly in mud close to the work area", "Left in a loose pile at the site entrance", "Hung from the crane between lifts so it is ready for the next piece"], "Proper storage protects steel from damage and corrosion."],
      ["Faying surfaces are:", "The contact surfaces between connected plies", ["The top surface of a beam where the deck is placed", "A paint colour for primer-coated steel", "A weld type used on stiffener plates"], "Their condition matters in slip-critical joints."],
      ["Which connection type depends on friction between plies to prevent slip?", "Slip-critical", ["Snug-tight bearing", "Simple bearing", "Pin joint"], "Slip-critical joints are pretensioned and have prepared surfaces."],
      ["Bracing installed during erection is mainly to:", "Keep the structure stable until the permanent connections are complete", ["Decorate the frame with a protective coating", "Hold temporary lights and power cords", "Mark the schedule for the next crew and the order of lifts on site"], "Temporary bracing prevents collapse during erection."],
      ["Stair stringers are:", "The sloped members that support the treads", ["The handrail that you grip on the stairs", "The vertical posts that hold up the handrail", "The risers between the treads on each step"], "Stringers carry the treads and form the stair's sloped frame."],
      ["Guards (guardrails) are intended to:", "Prevent people from falling from an edge", ["Hold tools", "Supply power to the tools on each level", "Lift materials safely to the upper floors"], "The National Building Code sets guard heights and requirements. Check your code."],
      ["Which test is used to check weld quality without damaging it?", "Visual inspection, magnetic particle, dye penetrant, or ultrasonic testing", ["Hammer test only, listening for a ring", "Weight test by loading the joint beyond its design capacity to see if it holds", "Bending test of every weld on the project"], "Non-destructive testing includes visual, MT, PT, and UT."],
      ["A weld symbol with a circle at the elbow of the reference line means:", "Weld all around", ["Spot weld at each of the marked locations", "Weld to be removed after erection", "Bolt added at each of the marked locations"], "The circle indicates a weld all around the joint."]
    ]),
    4: steelBank([
      ["Before a critical lift, a lift plan should include:", "Load weight, rigging, crane capacity, radius, and exclusion zones", ["Only the weather forecast for the day of the lift", "Only the weight of the load being lifted, taken from the shop ticket", "Lunch breaks and crew rotation for the lift"], "A lift plan covers loads, equipment, hazards, and communication."],
      ["Before a lift, you should verify the load weight from:", "Drawings, shop tickets, or calculation, not guesswork", ["Guesses from the crew based on similar beams", "The colour of the paint on the member", "Experience of the operator from similar lifts done earlier in the year"], "Unknown weights cause overloads."],
      ["What does a fall protection plan for steel erection include?", "Anchor points, tie-off methods, rescue procedure, and training", ["Colours of hard hats assigned to each trade on the structure", "Lunch breaks and shift schedules for the crew", "Only a first aid kit kept at the site trailer"], "A plan includes rescue. Hanging in a harness is dangerous."],
      ["Suspension trauma risk means:", "Prompt rescue after a fall is essential", ["Falls are safe if you are wearing a harness", "No rescue is needed if the worker is conscious", "It affects the crane's hoist line only"], "Prolonged hanging in a harness can be life-threatening."],
      ["A beam is out of alignment after bolting. The correct action is:", "Report to the foreman and follow the engineer's direction before changes", ["Cut the bolt holes larger on your own to make the member fit the connection", "Weld it as is to save time on the schedule", "Ignore it if the beam still carries the load it was designed for"], "Field modifications to connections need engineering approval."],
      ["When welding on galvanized steel, you should:", "Provide ventilation and fume control", ["Weld in a closed room to keep the wind off", "Skip respiratory PPE if the weld is short", "Use no cleaning or fume extraction at all"], "Zinc fumes can cause metal fume fever."],
      ["Welding procedures are written in:", "A welding procedure specification (WPS)", ["A tool list issued by the site storeroom", "A timesheet submitted at the end of each shift", "A delivery ticket signed by the receiver"], "The WPS defines how a weld is made."],
      ["A column base is out of level and anchor bolts are off position. You should:", "Stop and report for engineering resolution", ["Bend the bolts back into place with heat from a torch", "Cut them off and drill new holes in the plate", "Leave it and carry on with the erection"], "Anchor bolt problems affect load transfer."],
      ["Two cranes sharing one lift require:", "A detailed lift plan and a designated person in charge", ["No plan, as long as both operators are experienced", "Casual agreement between the two operators on the radio", "Quick signals between the two operators"], "Multi-crane lifts need engineered plans."],
      ["Which factor reduces a sling's working load limit?", "A smaller angle from horizontal, damage, and certain hitch types", ["A longer sling with a different colour code", "A bigger tag attached to the eye of the sling, which has no effect on capacity", "A clean sling with all its tags legible"], "Angle and condition both matter."],
      ["Calculate: a beam of W250x33 that is 9 m long has a mass of about:", "297 kg", ["33 kg", "2 970 kg", "29.7 kg"], "33 kg/m × 9 m = 297 kg."],
      ["A 12 m length of W310x39 has a mass of about:", "468 kg", ["39 kg", "4 680 kg", "3 900 kg"], "39 × 12 = 468 kg."],
      ["Ornamental ironwork often uses stainless steel or aluminum. To avoid contamination of stainless:", "Use dedicated tools and avoid contact with carbon steel debris", ["Use any wire brush that is handy in the truck, since all brushes are the same", "Grind carbon steel right beside it to save time", "Skip cleaning after the welds have cooled, since stainless does not rust"], "Carbon steel particles cause rust staining."],
      ["Guards on stairs and platforms are checked against:", "The applicable building code and drawings", ["Personal opinion of the most experienced worker", "A colour chart supplied by the paint vendor", "The brand of tool used to install them"], "Heights and load requirements come from code and design."],
      ["A critical task for a foreman before erection each day:", "Hold a pre-job hazard assessment and review the plan", ["Skip meetings to get the first pick started sooner than planned", "Count bolts only and skip the hazard review", "Start without checks if the weather is good"], "Daily planning identifies hazards and tasks."],
      ["Documentation for bolt tightening typically records:", "Bolt lots, tightening method, and inspections", ["Crew lunch times and break schedules for the whole shift on site", "Weather conditions only", "Tool brand and serial number only, for the equipment log"], "Records support quality and traceability."],
      ["Most provinces require training before using a suspended access or hoisting tool because:", "It reduces risk and is required by regulation", ["It is optional everywhere in the country, so training is a personal choice", "It makes tools lighter to carry", "It increases speed on every job so crews finish ahead of schedule"], "Regulations differ by province, so check yours."]
    ])
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety tickets employers ask for (commonly WHMIS, fall protection, and site orientation; requirements vary)", "Contact ironworker union locals and structural steel contractors, and prepare a short resume", "Register your apprenticeship once you have a sponsor and log your hours from day one"] },
    { title: "Year 1: safety and fundamentals", items: ["Learn fall protection, PPE, and site safety", "Learn steel shapes, bolts, and basic hand tools", "Assist with unloading, sorting, and rigging", "Complete your first technical training block", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: connecting and bolting", items: ["Read erection drawings and piece marks", "Bolt up connections and use drift pins and spud wrenches", "Learn snug-tight and pretension methods", "Learn basic welding symbols and joint types"] },
    { title: "Year 3: plumbing up, deck, and ornamental", items: ["Plumb and align frames to tolerance", "Install steel deck and studs", "Fabricate and install stairs, railings, and guards", "Develop rigging and signalling skills"] },
    { title: "Year 4 and beyond: lift planning and leadership", items: ["Plan sequences and lifts, including sling calculations", "Learn to coordinate with crane operators and engineers", "Mentor first-year apprentices", "Prepare for foreman or lead hand roles"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal standard and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["Anchor bolt", "A bolt cast in concrete that secures a column base plate."],
    ["Base plate", "A steel plate at the bottom of a column that distributes load into the foundation."],
    ["Beam clamp", "A device that attaches to a beam flange as an anchor or lifting point."],
    ["Bolt-up", "The stage of installing and tightening the bolts in connections."],
    ["Bracing", "Members that keep a frame stable and resist lateral forces."],
    ["Bull pin", "A tapered steel pin used to pull holes into alignment."],
    ["Camber", "A built-in upward curve in a beam that offsets deflection."],
    ["Column", "A vertical member that carries load to the foundation."],
    ["Connector", "An ironworker who makes the initial connections of beams to columns."],
    ["Deck", "Corrugated steel sheet that forms floors and roofs."],
    ["Drift pin", "A tapered pin used to align bolt holes."],
    ["Erection drawing", "A drawing that shows where each piece goes."],
    ["Faying surface", "The contact surface between two plies in a connection."],
    ["Fillet weld", "A triangular weld that joins surfaces at an angle."],
    ["Flange", "The wide horizontal part of a W-shape."],
    ["Girder", "A large beam that supports other beams."],
    ["Grout", "A cement or non-shrink material placed under base plates."],
    ["Guard", "A barrier at an edge or open side to prevent falls."],
    ["Joist", "A light framing member that supports deck or floor."],
    ["Lanyard", "A cord with an energy absorber that links a harness to an anchor."],
    ["Piece mark", "A unique identifier on a steel member that matches the drawing."],
    ["Plumbing up", "Aligning columns and frame to vertical and level."],
    ["Pretension", "The specified tension in a high-strength bolt."],
    ["Rigging", "The slings, shackles, and hardware used to lift loads."],
    ["Shackle", "A U-shaped fitting with a pin that joins rigging components."],
    ["Shear stud", "A welded stud that connects steel to concrete in composite construction."],
    ["Slip-critical", "A connection that relies on friction to prevent slip."],
    ["Snug-tight", "The tightness of a bolt after a few impacts of an impact wrench."],
    ["Spud wrench", "An ironworker's wrench with a tapered handle and a box or open end."],
    ["Tag line", "A rope used to control a suspended load."],
    ["Web", "The vertical plate between the flanges of a W-shape."],
    ["Working load limit (WLL)", "The maximum load rigging is rated to carry in a given configuration."]
  ],
  cards: [
    { front: "Steel density", back: "About 7 850 kg/m³" },
    { front: "W310x39 designation", back: "Nominal depth 310 mm, about 39 kg per metre" },
    { front: "Sling tension per leg (two legs)", back: "Load ÷ (2 × sin of the angle from horizontal)" },
    { front: "Sling angle multipliers", back: "60° is 1.155, 45° is 1.414, 30° is 2.0 times the vertical share" },
    { front: "CSA Z259.10", back: "Full-body harnesses" },
    { front: "CSA S16", back: "Design of steel structures" },
    { front: "CSA W59", back: "Welded steel construction" },
    { front: "Snug-tight", back: "A few impacts of an impact wrench, or full effort with a spud wrench" },
    { front: "Never stand", back: "Under a suspended load" },
    { front: "Inches to millimetres", back: "1 in = 25.4 mm" }
  ],
  jobsIntro: "Look for structural steel erectors, fabrication shops, ornamental metal contractors, bridge and industrial builders, and ironworker union locals.",
  tips: [
    "Bring a short resume, your safety tickets (such as fall protection), and ID.",
    "Show comfort with heights, teamwork, and physically demanding work.",
    "Visit contractors and union halls in person when you can, and follow up.",
    "Ask what tools and PPE you need and what the employer supplies."
  ],
  forumTopics: ["Starting out", "Bolting, welding, and connections", "Rigging and hoisting", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
  reference: [
    {
      title: "Sling angle multipliers",
      intro: "Tension per leg of a two-leg sling = load ÷ (2 × sin of the angle from horizontal). Compare with a vertical lift where each leg carries half the load.",
      table: {
        head: ["Angle from horizontal", "Multiplier on the vertical share per leg", "Example, 1 000 kg load"],
        rows: [["90°", "1.000", "500 kg per leg"], ["60°", "1.155", "577 kg per leg"], ["45°", "1.414", "707 kg per leg"], ["30°", "2.000", "1 000 kg per leg"]]
      },
      note: "Avoid sling angles below 45° where possible. Always stay under the working load limit."
    },
    {
      title: "Steel shape designations and mass",
      list: [
        "W310x39: wide flange, nominal depth 310 mm, mass about 39 kg per metre.",
        "HSS: hollow structural section, such as HSS 152x152x9.5 (square, 152 mm sides, 9.5 mm wall).",
        "Mass = kg per metre × length. A 9 m W250x33 weighs about 297 kg.",
        "Density of steel is about 7 850 kg/m³.",
        "1 kg ≈ 2.205 lb, 1 m = 3.281 ft, 1 in = 25.4 mm."
      ]
    },
    {
      title: "Bolting pretension methods",
      table: {
        head: ["Method", "How it works", "Check"],
        rows: [
          ["Snug-tight", "A few impacts of an impact wrench or full effort with a spud wrench", "Visual and fit-up inspection"],
          ["Turn-of-nut", "Snug first, then turn the nut a specified amount based on bolt length", "Match marks"],
          ["Calibrated wrench", "Tighten to a set torque with a calibrated wrench", "Daily calibration check"],
          ["Tension control bolt", "Spline end shears at the design tension", "Spline sheared off"],
          ["Direct tension indicator", "Washer protrusions compress as the bolt tightens", "Feeler gauge gap"]
        ]
      },
      note: "Use the method in the project specification and the applicable standard."
    },
    {
      title: "Standards to know",
      list: [
        "CSA S16 Design of steel structures.",
        "CSA W59 Welded steel construction (metal arc welding).",
        "CSA W47.1 Certification of companies for fusion welding of steel.",
        "CSA G40.20/G40.21 General requirements for rolled or welded structural quality steel, and structural quality steel.",
        "CSA Z259.10 Full body harnesses, with other Z259 standards covering lanyards and connectors.",
        "National Building Code of Canada and provincial codes for guards, stairs, and railings."
      ]
    },
    {
      title: "Crew and lift communication",
      list: [
        "Only one designated person signals a crane operator at a time. Anyone can give an emergency stop.",
        "Know standard hand signals and radio protocols before you work around lifts.",
        "Use a tag line and stay out from under suspended loads.",
        "Inspect slings, shackles, and hooks before use and remove damaged items from service.",
        "Review the lift plan and exclusion zones before the lift starts."
      ]
    },
    {
      title: "Weld symbol basics",
      list: [
        "The arrow points to the joint. Symbols below the reference line apply to the arrow side, and above apply to the other side.",
        "A triangle is a fillet weld, and its size is written to the left of the triangle.",
        "A circle at the bend of the reference line means weld all around.",
        "A flag at the bend means field weld.",
        "The tail may hold the welding procedure specification or other notes."
      ]
    }
  ]
});
