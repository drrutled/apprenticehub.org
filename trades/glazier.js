// Glazier content: tools, learning media, practice tests, roadmap, and reference.
// Practice questions are original study aids, not official Red Seal exam questions.

(() => {
  const bank = (rows) => rows.map(([q, c, d, explain], i) => {
    const answer = (i * 3 + rows.length + 3) % 4;
    const options = d.slice();
    options.splice(answer, 0, c);
    return { q, options, answer, explain };
  });

  const toolGroups = [
    {
      title: "Day-one tools, buy once and buy well",
      note: "Professional-grade tools that hold their edge and accuracy for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
      items: [
        { name: "Toyo or Fletcher carbide wheel glass cutter", why: "A sharp, well-oiled wheel scores clean lines for a controlled break. Keep a spare wheel.", search: "Toyo Fletcher glass cutter carbide wheel" },
        { name: "Glass running pliers and breaking pliers", why: "Run and snap a score cleanly and nibble small pieces from edges.", search: "glass running pliers breaking pliers Fletcher" },
        { name: "Suction cups (Wood's Powr-Grip or similar), with vacuum indicator", why: "Lift and place glass safely. Check the vacuum indicator every time and respect the rated load.", search: "Wood's Powr-Grip suction cup glass lifter" },
        { name: "Stanley or Milwaukee tape measure (25 ft / 7.5 m)", why: "Accurate field measurement of openings and glass sizes is where good glazing starts.", search: "Stanley FatMax tape measure 7.5m 25ft" },
        { name: "Cut-resistant gloves and sleeves", why: "Glass edges cut through ordinary gloves. Pick a high cut-level pair that still gives grip.", search: "cut resistant gloves sleeves glass handling level A5" },
        { name: "Safety glasses with side shields and CSA-approved safety boots", why: "Flying chips and dropped glass. Comfortable, rated gear is what you will wear.", search: "safety glasses side shields CSA safety boots" },
        { name: "Dripless caulking gun", why: "Controlled sealant application with no mess at the end of the stroke.", search: "Newborn Albion dripless caulking gun" },
        { name: "Utility knife with spare blades and a glazing knife", why: "Trim tape and gaskets and tool sealant joints cleanly.", search: "Olfa utility knife glazing knife putty knife" },
        { name: "Torpedo level and 4 ft level", why: "Check that frames and glass are plumb and level.", search: "Milwaukee torpedo level 4 foot level" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
      items: [
        { name: "Glass carrier or A-frame cart", why: "Moves glass on edge and reduces strain. Often shared at the shop or truck.", search: "glass A-frame cart glazier dolly" },
        { name: "Setting block and shim assortment", why: "Support glass weight in the frame and set clearances correctly.", search: "glazing setting blocks shims assortment" },
        { name: "Cordless drill and impact driver (Milwaukee M18 or Makita 18V)", why: "Fastening frames and hardware. Pick a battery platform and stay with it.", search: "Milwaukee M18 drill impact driver combo" },
        { name: "Pry bar and glazing bead tool", why: "Remove glazing beads and old glass without damaging frames.", search: "glazing bead removal tool pry bar" },
        { name: "Marking tools: grease pencil and glass marker", why: "Mark glass for cutting without scratching the surface.", search: "glass marking pencil grease pencil" },
        { name: "Solvent wipes and sealant tooling kit", why: "Clean surfaces and shape joints. Use solvents rated by the sealant maker.", search: "sealant tooling kit isopropyl alcohol wipes" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying.",
      items: [
        { name: "Vacuum lifter (multi-cup or crane-mounted)", why: "Hoists heavy glass. Operation and inspection require training. Normally company-supplied.", search: "vacuum glass lifter glazing" },
        { name: "Glass drill bits (diamond) and glass drilling kit", why: "Drilling annealed glass for hardware. Tempered glass cannot be drilled after tempering.", search: "diamond glass drill bits kit" },
        { name: "Full-body harness and lanyard", why: "Usually supplied by the employer. Fall protection training comes first.", search: "3M DBI-SALA full body harness CSA" },
        { name: "Laser level and layout tools", why: "Layout of curtain wall and storefront lines. Usually a crew tool.", search: "green cross line laser level" },
        { name: "Glass edge grinder or hand edge tool", why: "Seaming and smoothing edges in the shop. Wet-grind and protect against dust.", search: "glass edge grinder seaming stone" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for drawings, math, and code study. Check with your school and your exam body about calculator rules before you buy.",
      items: [
        { name: "Mechanical pencil (0.5 mm), such as Pentel GraphGear 1000", why: "Fine lines for shop drawings, details, and notes.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm" },
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Glass area, weight, and sizing calculations.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Graph paper pads", why: "Sketch elevations, openings, and sections to scale.", search: "graph paper pad 8.5x11" },
        { name: "Architect's and engineer's scales", why: "Read elevations and details at scale.", search: "architect scale engineer scale ruler" },
        { name: "Triangles, protractor, and a 12 in steel ruler", why: "Clean lines for angles and glass layouts.", search: "Staedtler drafting triangle set protractor" },
        { name: "Field notebook (Rite in the Rain)", why: "Record opening sizes and diagonals. Weatherproof paper survives rain.", search: "Rite in the Rain field notebook" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic for Red Seal review.", search: "binder dividers highlighters" }
      ]
    }
  ];

  const mediaGroups = [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare. Search for the Glazier trade page.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Codes Canada (National Building Code)", desc: "The model national code that provincial building codes are based on.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
        { name: "CSA Group", desc: "Publisher of the CSA A440 window standards and the CSA A440.4 installation standard.", url: "https://www.csagroup.org/" },
        { name: "International Union of Painters and Allied Trades (IUPAT)", desc: "Union glazier training and apprenticeship information.", url: "https://www.iupat.org/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Plain-language safety information on handling, lifting, and falls.", url: "https://www.ccohs.ca/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local codes.",
      items: [
        { name: "How to cut glass", desc: "Scoring, running, and breaking a clean line.", url: "https://www.youtube.com/results?search_query=how+to+cut+glass+glass+cutter+score+and+snap" },
        { name: "Glazier storefront installation", desc: "Storefront framing, glass setting, and gaskets.", url: "https://www.youtube.com/results?search_query=glazier+storefront+installation+aluminum+glass" },
        { name: "Curtain wall installation", desc: "Stick and unitized curtain wall systems.", url: "https://www.youtube.com/results?search_query=curtain+wall+installation+unitized+stick+glazier" },
        { name: "Insulating glass units explained", desc: "Spacers, seals, gas fills, and low-e coatings.", url: "https://www.youtube.com/results?search_query=insulating+glass+unit+IGU+low-e+argon+explained" },
        { name: "Tempered vs laminated glass", desc: "How safety glass is made and how it breaks.", url: "https://www.youtube.com/results?search_query=tempered+vs+laminated+glass+safety+glazing" },
        { name: "Glass handling and suction cups", desc: "Lifting, carrying, and vacuum lifters safely.", url: "https://www.youtube.com/results?search_query=glass+handling+suction+cups+vacuum+lifter+glazier+safety" },
        { name: "Sealant and caulking technique", desc: "Backer rod, joint depth, and tooling silicone.", url: "https://www.youtube.com/results?search_query=silicone+sealant+joint+backer+rod+tooling+technique" },
        { name: "Window installation basics", desc: "Flashing, shimming, and sealing a window in a rough opening.", url: "https://www.youtube.com/results?search_query=window+installation+flashing+shim+rough+opening" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for glazing yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: glazier apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=glazier+apprentice+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: glazing industry podcast (listen-along)", desc: "Talks on glass, framing systems, and the building envelope.", url: "https://www.youtube.com/results?search_query=glazing+industry+podcast+glass+glazier" },
        { name: "YouTube: building envelope and curtain wall talks", desc: "Air, water, and thermal performance of glazed walls.", url: "https://www.youtube.com/results?search_query=building+envelope+curtain+wall+glazing+podcast" },
        { name: "YouTube: glazier tips and stories (audio)", desc: "Job-site lessons and troubleshooting stories.", url: "https://www.youtube.com/results?search_query=glazier+podcast+tips+stories" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, business, and leadership.",
      items: [
        { name: "YouTube: Red Seal glazier exam prep (talk-through)", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+glazier+exam+preparation" },
        { name: "YouTube: glazing estimating and business podcast", desc: "Takeoffs, pricing, and running a glazing company.", url: "https://www.youtube.com/results?search_query=glazing+contractor+estimating+business+podcast" },
        { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
      ]
    }
  ];

  const practiceBank = {
    1: bank([
      ["When annealed (regular) glass breaks, it typically forms:", "Large, sharp shards", ["Small blunt cubes", "Fine powder", "No pieces"], "Annealed glass is a laceration hazard when broken, so handle it with care and PPE."],
      ["Tempered glass, when broken, normally fractures into:", "Small, relatively blunt pieces", ["Long sharp spears", "Two halves", "One large piece"], "Tempering makes it safer on breakage, and it cannot be cut afterward."],
      ["Which tool is used to score glass for a controlled break?", "Carbide wheel glass cutter", ["Hacksaw", "Chisel", "Pipe wrench"], "Score once with firm, even pressure and break along the line."],
      ["Before lifting a lite with suction cups you should:", "Check the vacuum indicator and the cups' rated load", ["Skip the check", "Add water to the cups", "Lift over people"], "A cup that has lost vacuum can drop the glass."],
      ["Which PPE helps most against cut injuries from glass edges?", "Cut-resistant gloves and sleeves", ["Ear plugs", "Knee pads", "A dust mask"], "Choose a high cut level that still lets you hold the glass."],
      ["Glass thickness of 6 mm weighs about:", "15 kg per square metre", ["1.5 kg per m²", "50 kg per m²", "150 kg per m²"], "Glass weighs about 2.5 kg per m² per mm of thickness."],
      ["Glass should be carried and stored:", "On its edge, in an upright position", ["Flat on a pile", "On its corner", "Leaning over a person"], "Flat glass carried horizontally is hard to control and breaks easily."],
      ["1/4 inch glass is about:", "6 mm", ["1 mm", "3 mm", "10 mm"], "1/4 in = 6.35 mm, so 6 mm glass is the metric equivalent."],
      ["The purpose of a setting block is to:", "Support the glass weight in the frame", ["Fasten the stop", "Colour the glass", "Seal the edge"], "Blocks keep glass off the metal and set its position."],
      ["Why clean the frame and glass before applying sealant?", "Dirt and oils prevent proper adhesion", ["Sealant sticks better to dirt", "It makes sealant clear", "It cools the glass"], "Use cleaners approved by the sealant manufacturer."],
      ["Information on hazards and first aid for a solvent or sealant is found on the:", "Safety Data Sheet (SDS)", ["Tape measure", "Glass label only", "Invoice"], "The SDS is part of WHMIS."],
      ["A lite 1.2 m x 2.0 m has an area of:", "2.4 m²", ["3.2 m²", "1.2 m²", "4.0 m²"], "Area = length x width."],
      ["A 2.4 m² lite of 6 mm glass weighs about:", "36 kg", ["3.6 kg", "14 kg", "90 kg"], "2.4 m² x 15 kg/m² = 36 kg."],
      ["When scoring glass you should:", "Score once in one continuous pass and not go back over the line", ["Score several times", "Score back and forth", "Score only a short part"], "Re-scoring damages the wheel and gives a bad break."],
      ["Patio door glass and glass near floors are commonly required to be:", "Safety glazing, such as tempered or laminated", ["Plain annealed glass", "Any glass", "Only painted glass"], "The building code lists hazardous locations. Safety glazing is covered by CAN/CGSB-12.1."],
      ["Which footwear is appropriate for a glazier?", "CSA-approved safety boots", ["Sandals", "Soft slippers", "Smooth dress shoes"], "Heavy lites and sharp edges are foot hazards."]
    ]),
    2: bank([
      ["An insulating glass unit (IGU) is made of:", "Two or more lites separated by a spacer around a sealed air or gas space", ["One thick glass plate", "Glass laminated with plastic", "Tempered glass only"], "Seals keep moisture out of the airspace."],
      ["A low-e coating is used to:", "Reduce heat transfer by reflecting long-wave heat radiation", ["Make the glass thicker", "Add colour only", "Replace the spacer"], "It improves insulation and can reduce solar heat gain."],
      ["Argon is commonly used in IGUs because it:", "Conducts less heat than air", ["Is flammable", "Is heavier than steel", "Makes glass stronger"], "It is an inert gas and reduces heat transfer across the cavity."],
      ["Laminated glass holds together when broken because of:", "An interlayer bonded between the lites", ["Heat treatment", "Spacer tape", "Surface hardening"], "A PVB or similar interlayer keeps broken pieces in place."],
      ["Tempered glass:", "Cannot be cut or drilled after tempering", ["Can be cut with a hand cutter", "Is weaker than annealed", "Is only for small lites"], "Cut, drill, and edge the glass before it is tempered."],
      ["Setting blocks for a lite are normally placed:", "At the quarter points of the width of the bottom edge", ["At the corners only", "At the centre only", "On the top edge"], "Follow the glass and frame manufacturer for placement and length."],
      ["Weep holes in the frame of a glazing pocket:", "Let water that gets in drain out", ["Let in air", "Hold the sealant", "Hold the shims"], "Do not seal them shut, and keep them clear."],
      ["Dry glazing refers to:", "Holding glass with pre-formed gaskets or tape instead of wet sealant", ["Glass in a dry room", "Using no frame", "Heating glass"], "Wet glazing uses sealant to hold or seal the glass."],
      ["A thermal break in an aluminum frame is used to:", "Reduce heat conduction through the frame", ["Add strength", "Cut the glass", "Hold the sealant"], "A break of low-conductivity material separates the interior and exterior metal."],
      ["A storefront system is generally:", "Aluminum framing installed between the floor and ceiling or structure, holding glass", ["A hung curtain wall only", "A door only", "A window with no frame"], "Storefront is usually one storey, and curtain wall spans past floors."],
      ["Glass is set with edge clearance so that it:", "Does not touch the metal and can expand or the building can move", ["Falls out easily", "Is always loose", "Looks better only"], "Contact with metal can cause stress breakage."],
      ["A frame and glass should be installed:", "Plumb, level, and square, with shims at the right locations", ["With random shims", "Out of plumb for drainage", "With no checking"], "Misaligned frames cause binding, leaks, and breakage."],
      ["Face glazing refers to:", "Applying a sealant bead on the exterior to hold and seal the glass", ["A glass coating", "A hanging method", "A tool"], "Back bedding is sealant at the back stop."],
      ["Which layer of an IGU stops moisture from entering the airspace?", "The edge seal", ["The lite thickness", "The coating", "The frame colour"], "A failed seal causes fogging between lites."],
      ["Safety glazing is typically identified by:", "A permanent mark, such as an etched label, showing the standard", ["A paper sticker only", "No mark", "A sticker on the box"], "Check labels before installing in hazardous locations."],
      ["A common unit for glass thickness in Canada is:", "Millimetres, with common sizes of 3, 4, 5, 6, 8, 10, and 12 mm", ["Pounds", "Gauge", "Degrees"], "Imperial sizes such as 1/4 in are still used."]
    ]),
    3: bank([
      ["A curtain wall is best described as:", "A non-load-bearing exterior wall that carries its own weight and wind load to the structure", ["A load-bearing brick wall", "A window only", "An interior partition"], "It hangs off the building structure."],
      ["A unitized curtain wall is:", "Built from factory-assembled units that are hoisted and attached to the structure", ["Built piece by piece on site", "Built from wood", "A temporary system"], "Stick systems are assembled from individual members on site."],
      ["Structural silicone glazing:", "Bonds the glass to the frame with structural silicone sealant", ["Uses screws only", "Uses no sealant", "Cannot carry wind loads"], "Bond quality depends on clean surfaces and the sealant maker's testing."],
      ["Thermal stress breakage is typically caused by:", "A temperature difference between the glass centre and its edges", ["Too much cleaning", "A low-e coating alone", "Blue paint"], "Edge damage and partial shading increase the risk."],
      ["Nickel sulphide inclusions can cause:", "Spontaneous breakage of tempered glass", ["Foggy glass", "Easier cutting", "Better strength"], "Heat soak testing helps reduce this risk."],
      ["A lower U-value on a window means:", "Less heat flows through it, so better insulation", ["More heat flows through", "More light", "More weight"], "U-value is a measure of heat transfer."],
      ["Solar heat gain coefficient (SHGC) is:", "The fraction of solar heat that passes through the glazing", ["The glass weight", "The frame size", "The sound rating"], "A lower SHGC blocks more solar heat."],
      ["Visible transmittance (VT) is:", "The fraction of visible light that passes through the glazing", ["The heat flow", "The air leakage", "The glass weight"], "A higher VT lets in more daylight."],
      ["Which CSA standard covers installation of windows, doors, and skylights?", "CSA A440.4", ["CSA Z259.10", "CSA A123.1", "CSA B52"], "CSA A440 covers windows, and A440.4 is the installation standard."],
      ["Air and water control at a rough opening requires:", "Continuity of the air barrier and flashing, sealed to the frame", ["Gaps for ventilation", "Paint only", "Nothing"], "Leaks usually occur at transitions and corners."],
      ["Compared with glass, aluminum expands:", "More for the same temperature change", ["Less", "The same", "Not at all"], "Joints and clearances account for the difference."],
      ["Fire-rated glazing must be:", "Labelled and installed in a frame that is part of the tested and listed assembly", ["Any glass in any frame", "Painted", "Sealed with silicone only"], "Substitution can void the rating."],
      ["The size and thickness of a lite exposed to wind are determined by:", "Design wind load, size, and glass type from the engineered design or code", ["The installer's guess", "The weather that day", "The brand of tape"], "Do not substitute thinner glass for the design."],
      ["Before hoisting a lite with a vacuum lifter, you should:", "Test the vacuum, check the rated load, and clear the area below", ["Skip checks", "Stand under the load", "Exceed the load rating"], "Follow the lifter's manual and your employer's procedure."],
      ["Sealant joints for movement are typically designed with a width to depth ratio of about:", "2 to 1", ["10 to 1", "1 to 10", "1 to 5"], "Backer rod controls depth and prevents three-sided adhesion."],
      ["Slotted anchors on curtain wall brackets are used to:", "Allow for thermal and structural movement", ["Make installation faster only", "Hide the bolts", "Hold sealant"], "They accommodate building movement and expansion."]
    ]),
    4: bank([
      ["Condensation or fogging inside an IGU indicates:", "A failed edge seal, and the unit should be replaced", ["Dirty glass outside", "A coating", "A good seal"], "Cleaning the outside will not fix it."],
      ["When investigating field glass breakage, you should first check:", "The break pattern, edge damage, bite, setting blocks, and thermal conditions", ["Only the paint", "Nothing", "Only the weather forecast"], "The break origin and pattern help find the cause."],
      ["An IGU of two 6 mm lites with an area of 1.5 m² weighs about (glass only):", "45 kg", ["22 kg", "15 kg", "90 kg"], "Two lites is 12 mm of glass, 12 x 2.5 = 30 kg/m², and 30 x 1.5 = 45 kg."],
      ["An 8 mm lite measuring 1.2 m x 2.1 m weighs about:", "50 kg", ["25 kg", "10 kg", "100 kg"], "2.52 m² x 8 mm x 2.5 kg/m²/mm = 50.4 kg."],
      ["A storefront leaks at the sill. What should you check?", "Sill flashing, end dams, weeps, and sealant continuity", ["Only the glass thickness", "Only the paint", "The door handle"], "Blocked weeps and missing end dams are common causes."],
      ["Visible strain patterns in tempered glass seen with polarized sunglasses are:", "A normal characteristic of the process", ["A defect in all cases", "Dirt", "A coating failure"], "Specifications address acceptable visual quality."],
      ["Condensation at the edge of an IGU in cold weather can be reduced by:", "Warm-edge spacers and good frame thermal performance", ["Using thinner glass", "Removing the spacer", "Using more sealant"], "Edge temperature affects condensation."],
      ["Glazing work in high winds should be:", "Stopped when wind exceeds employer or manufacturer limits", ["Continued always", "Done faster", "Done without a lifter"], "Large lites act as sails."],
      ["Which of these is a risk of using incompatible sealants or gaskets?", "Staining, loss of adhesion, or damage to IGU seals", ["Improved bond", "Lower cost", "No effect"], "Check compatibility data from the manufacturers."],
      ["Which of these is normally a location where safety glazing is required?", "Doors, sidelights near doors, and glass near tubs and showers", ["Upper walls with no hazard", "Interior shelving only", "Roof skylights only"], "The code defines hazardous locations."],
      ["Glass bite is:", "The amount of glass edge held in the frame or stop", ["The glass colour", "The weight", "The coating"], "Insufficient bite risks the glass coming out."],
      ["Before ordering glass, you should:", "Measure the opening, compare diagonals, and account for bite and clearances", ["Guess the sizes", "Order oversize and cut later", "Use the drawing only without checking"], "Diagonals show if the opening is out of square."],
      ["The purpose of a field water test (spray rack) on a glazed wall is to:", "Check for water leaks in the installed system", ["Wash the glass", "Test the glass strength", "Colour the sealant"], "Testing finds leaks before finishes cover them."],
      ["Where drawings and the existing opening conflict, you should:", "Ask for clarification in writing before cutting or ordering glass", ["Guess", "Cut glass to the drawing anyway", "Ignore the drawing"], "Custom glass cannot be reworked easily."],
      ["Sealant should be tooled:", "Within its skin time, with masking tape for neat lines", ["After full cure", "Never", "With soapy fingers only"], "Tool promptly and remove tape before the sealant skins."],
      ["The best control for a hazard like heavy glass lifting is:", "Mechanical aids and team lifts, planned before the lift", ["Lifting alone", "Trying harder", "Using your back"], "Engineering controls rank above PPE and training alone."]
    ])
  };

  const roadmapSteps = [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS, fall protection, and site orientation; requirements vary)", "Prepare a resume and apply to union locals (such as IUPAT) and glazing contractors", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: foundations and glass handling", items: ["Learn shop and site safety, PPE, and glass handling", "Learn glass types and how to cut, carry, and store glass", "Use suction cups and glass carts safely", "Complete your first technical training block", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: framing and glazing methods", items: ["Install glass in wood, vinyl, and aluminum frames", "Learn dry glazing, wet glazing, and setting blocks", "Install storefronts, doors, and mirrors", "Read shop drawings and take field measurements"] },
    { title: "Year 3: curtain wall and building envelope", items: ["Learn stick and unitized curtain wall systems", "Learn air, water, and thermal performance of glazing", "Seal joints, backer rod, and flashing details", "Learn hoisting equipment and rigging basics"] },
    { title: "Year 4 and beyond: advanced work", items: ["Estimate and plan glazing projects and sequencing", "Troubleshoot leaks, fogged units, and breakage", "Mentor first-year apprentices", "Use the Red Seal standard to find gaps in your experience"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ];

  const glossary = [
    ["Annealed glass", "Regular glass that has been slowly cooled and breaks into sharp shards."],
    ["Argon", "An inert gas used to fill the space in many insulating glass units."],
    ["Back bedding", "Sealant applied on the stop or frame behind the glass."],
    ["Bite", "The depth of glass edge held by the frame or stop."],
    ["Curtain wall", "A non-load-bearing exterior wall that hangs from the building structure."],
    ["Daylight opening", "The visible glass area inside the frame."],
    ["Dry glazing", "Holding glass using gaskets or tape instead of liquid sealants."],
    ["Edge clearance", "The gap between glass edge and frame."],
    ["Face glazing", "Sealant applied to the outside face of the glass."],
    ["Glazing bead", "A strip that holds glass in the frame."],
    ["Heat-strengthened glass", "Glass heat treated to be stronger than annealed but less than tempered."],
    ["IGU", "Insulating glass unit, two or more lites separated by a sealed space."],
    ["Interlayer", "A plastic layer such as PVB bonded between lites of laminated glass."],
    ["Laminated glass", "Glass bonded to a plastic interlayer, which holds when broken."],
    ["Lite", "A single pane of glass."],
    ["Low-e coating", "A thin coating that reduces heat transfer."],
    ["Mullion", "A vertical framing member between glass units."],
    ["Muntin", "A bar that divides panes within a sash."],
    ["Setting block", "A block that supports the weight of the glass in the frame."],
    ["SHGC", "Solar heat gain coefficient, the fraction of solar heat admitted."],
    ["Spacer", "The material that separates lites in an IGU."],
    ["Storefront", "An aluminum framing system for ground-floor glass walls and doors."],
    ["Structural silicone", "A sealant used to bond glass to the frame structurally."],
    ["Tempered glass", "Heat-treated safety glass that breaks into small pieces."],
    ["Thermal break", "Low-conductivity material between inner and outer frame metal."],
    ["Thermal stress", "Stress from temperature differences across a lite."],
    ["U-value", "A measure of heat transfer, where lower means better insulation."],
    ["Unitized wall", "A curtain wall built from factory-assembled units."],
    ["Vacuum lifter", "A device that lifts glass using suction."],
    ["VT", "Visible transmittance, the fraction of visible light that passes through."],
    ["Weep hole", "A small opening that drains water from a frame."]
  ];

  registerTrade({
    id: "glazier",
    store: "glazier",
    title: "Glazier",
    name: "Glazier",
    short: "glazing",
    category: "Construction · Building envelope · Glass",
    summary: "Glaziers cut, handle, and install glass in windows, storefronts, curtain walls, and mirrors, combining careful measuring, safe lifting, and weather-tight sealing in every installation.",
    work: "Glaziers measure openings, cut or order glass, and install it in frames, doors, storefronts, and curtain wall systems. Work involves heavy and fragile materials, lifting equipment, sealants, and working at heights. Precise measurements and clean sealing keep the building dry, efficient, and safe.",
    duration: "Usually about 3 years (varies by province)",
    union: "International Union of Painters and Allied Trades (IUPAT)",
    unionUrl: "https://www.iupat.org/",
    jobSearch: "glazier apprentice",
    journeySearch: "glazier",
    aliases: "glass installer window storefront curtain wall mirror glazing auto glass commercial glass",
    tools: ["Glass cutter and pliers", "Suction cups", "Cut-resistant gloves", "Tape measure and levels", "Caulking gun", "Safety glasses and boots"],
    insight: {
      skills: ["Accurate measuring", "Safe handling of heavy, fragile glass", "Sealant and gasket technique", "Teamwork and communication"],
      hazards: ["Cuts from glass edges: wear cut-resistant PPE", "Heavy lifts: use cups, carts, and team lifts", "Falls from heights: use fall protection", "Solvents and sealants: read the SDS and ventilate"],
      settings: ["Commercial storefronts", "Curtain wall and high-rise", "Residential windows and showers", "Glass shops and service work"]
    },
    toolGroups,
    mediaGroups,
    practiceBank,
    roadmapSteps,
    glossary,
    cards: [
      { front: "Glass weight", back: "About 2.5 kg per m² for each millimetre of thickness (6 mm is about 15 kg/m²)" },
      { front: "Annealed vs tempered breakage", back: "Annealed breaks into sharp shards. Tempered breaks into small, blunt pieces and cannot be cut." },
      { front: "Laminated glass", back: "Glass bonded to an interlayer, which holds the pieces together when broken." },
      { front: "IGU", back: "Insulating glass unit, two or more lites with a sealed airspace." },
      { front: "Setting block position", back: "Usually at the quarter points of the bottom edge, per manufacturer." },
      { front: "U-value", back: "Heat transfer rate. Lower means better insulation." },
      { front: "SHGC", back: "Fraction of solar heat admitted. Lower blocks more." },
      { front: "Sealant joint ratio", back: "Width to depth of about 2 to 1, with backer rod." },
      { front: "CSA A440.4", back: "Standard for installation of windows, doors, and skylights." },
      { front: "Glass handling", back: "Carry on edge, check vacuum indicators, and wear cut-resistant PPE." }
    ],
    jobsIntro: "Look for commercial glazing contractors, window and door companies, glass shops, curtain wall installers, residential glass and shower companies, and union locals.",
    tips: ["Bring a short resume, your safety tickets, and ID.", "Show you are careful, safe, and comfortable with heavy lifting.", "Visit glazing shops and contractors in person when you can, and follow up.", "Ask what tools and PPE you need and what the employer supplies."],
    forumTopics: ["Starting out", "Glass types and handling", "Storefront and curtain wall", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference: [
      {
        title: "Glass types and how they behave",
        table: {
          head: ["Type", "How it breaks", "Key points"],
          rows: [
            ["Annealed", "Large, sharp shards", "Can be cut and drilled. Not a safety glazing on its own."],
            ["Heat-strengthened", "Large pieces, tends to stay in the frame", "Stronger than annealed. Cannot be cut after treatment."],
            ["Tempered", "Small, relatively blunt pieces", "Safety glazing. Cut, drill, and edge before tempering."],
            ["Laminated", "Cracks but stays bonded to the interlayer", "Safety, security, and sound control uses."],
            ["Insulating (IGU)", "Depends on the lites used", "Sealed airspace, low-e coatings, gas fills."]
          ]
        }
      },
      {
        title: "Weight and area quick facts",
        list: [
          "<strong>Glass density:</strong> about 2.5 kg per m² per mm of thickness (6 mm is about 15 kg/m², 10 mm is about 25 kg/m²).",
          "<strong>Imperial:</strong> 1/4 in glass is about 3.3 lb per ft².",
          "<strong>Area:</strong> length x width. 1.2 m x 2.0 m = 2.4 m².",
          "<strong>Example:</strong> 6 mm lite, 2.4 m² x 15 = 36 kg. An IGU of two 6 mm lites at 1.5 m² is about 45 kg of glass.",
          "<strong>Conversions:</strong> 1 in = 25.4 mm. 1/8 in is about 3 mm, 1/4 in about 6 mm, 3/8 in about 10 mm, 1/2 in about 12 mm."
        ]
      },
      {
        title: "Performance ratings",
        table: {
          head: ["Term", "Measures", "Better means"],
          rows: [
            ["U-value", "Heat transfer through the glazing", "Lower"],
            ["SHGC", "Fraction of solar heat admitted", "Depends on climate, lower for cooling"],
            ["VT", "Fraction of visible light admitted", "Higher for more daylight"],
            ["Air leakage", "Air through the assembly", "Lower"]
          ]
        },
        note: "Ratings come from the manufacturer's tested data. Confirm what the project specification requires."
      },
      {
        title: "Glazing methods and details",
        list: [
          "<strong>Setting blocks:</strong> at the bottom edge, typically at the quarter points, of material compatible with the sealant.",
          "<strong>Edge clearance and bite:</strong> keep glass from touching metal, and hold enough bite per the manufacturer.",
          "<strong>Dry glazing:</strong> pre-formed gaskets or tape. <strong>Wet glazing:</strong> sealant bead.",
          "<strong>Weeps:</strong> keep open and clear so water drains from the glazing pocket.",
          "<strong>Sealant joints:</strong> clean, prime if specified, backer rod, 2 to 1 width to depth, and tool within skin time.",
          "<strong>Compatibility:</strong> check sealants, gaskets, and tapes against each other and the IGU edge seal."
        ],
        note: "Installation of windows, doors, and skylights is covered by CSA A440.4. Safety glazing is covered by CAN/CGSB-12.1. Confirm editions and local code adoption."
      },
      {
        title: "Glass handling and safety",
        list: [
          "Carry and store glass on its edge, never flat in a stack unless on proper racks.",
          "Check suction cup vacuum indicators every lift, and respect rated loads.",
          "Wear cut-resistant gloves and sleeves, safety glasses, and CSA-approved safety boots.",
          "Keep the area below overhead glass work clear, and stop in high wind.",
          "Read the SDS for cleaners, primers, and sealants, and ventilate.",
          "Use fall protection where regulations require."
        ],
        note: "Fall protection heights and hoisting rules differ by province, so confirm with your provincial occupational health and safety regulations."
      }
    ]
  });
})();
