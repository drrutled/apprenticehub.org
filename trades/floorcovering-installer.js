// Floorcovering Installer content. Practice questions are original study aids, not official Red Seal exam questions.
{
  // Rows: [question, correct answer, wrong, wrong, wrong, explanation]. The correct option is placed at a rotating position.
  const Q = (y, rows) => rows.map(([q, c, a, b, d, e], i) => {
    const p = (i * 3 + y) % 4;
    const o = [a, b, d];
    o.splice(p, 0, c);
    return { q, options: o, answer: p, explain: e };
  });
  const yt = (s) => "https://www.youtube.com/results?search_query=" + s;

  registerTrade({
    id: "floorcovering-installer",
    store: "floorcovering-installer",
    title: "Floorcovering Installer",
    name: "Floorcovering Installer",
    short: "floorcovering installation",
    category: "Interior Finishing · Flooring · Construction",
    summary: "Floorcovering installers prepare subfloors and install carpet, resilient sheet and tile, laminate, and hardwood so floors are flat, secure, and finished to a high standard.",
    work: "You check and prepare the subfloor, plan the layout, and install carpet, vinyl, laminate, wood, and other floor products with adhesives and mechanical methods. The work is hard on knees and backs, and it depends on moisture testing, accurate cutting, and clean seams.",
    duration: "Usually 2–3 years (Job Bank), varies by province",
    union: "International Union of Painters and Allied Trades (IUPAT)",
    unionUrl: "https://www.iupat.org/",
    profileUrl: "https://red-seal.ca/eng/trades/floorcover-install.shtml",
    durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/21553/ca",
    jobSearch: "floor covering installer apprentice",
    journeySearch: "floor covering installer",
    aliases: "flooring installer carpet installer vinyl installer hardwood floor laminate floorcovering floor layer resilient flooring lvt tile installer",
    tools: ["Knee pads and knee kicker", "Utility knife with hook blades", "Adhesive trowels (U, V, square notch)", "Seam roller and 45 kg floor roller", "Tape measure and straightedge", "Dust mask, safety glasses, CSA boots"],
    insight: {
      skills: ["Reading subfloors and moisture", "Accurate layout and cutting", "Matching patterns and seams", "Using adhesives and tools correctly"],
      hazards: ["Knee and back strain: use pads and lift with help", "Adhesive and solvent vapours: ventilate and remove ignition sources", "Old flooring and adhesive may contain asbestos: test first", "Dust from grinding concrete: use controls and a fitted respirator"],
      settings: ["Residential new builds and renovations", "Commercial offices, retail, and schools", "Healthcare, education, and institutional flooring", "Specialty flooring and sports surfaces"]
    },
    toolGroups: [
      {
        title: "Day-one tools, buy once and buy well",
        note: "Professional-grade tools that hold up on site. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
        items: [
          { name: "Gel or hard-shell knee pads", why: "You spend the day on your knees. Good pads protect the joints and make long days possible.", search: "Crain Professional Flooring knee pads gel hard shell" },
          { name: "Utility knife with hook blades and straight blades", why: "Hook blades slice sheet goods and carpet backing safely. Change blades often for clean cuts.", search: "Olfa Stanley hook blade utility knife flooring" },
          { name: "Notched adhesive trowels (U, V, and square notch)", why: "The notch controls how much adhesive goes down. Use what the manufacturer specifies.", search: "flooring adhesive trowel U notch V notch square notch set" },
          { name: "Tape measure (25 ft / 7.5 m) and chalk line", why: "Accurate measurement and straight layout lines matter on every job.", search: "Milwaukee Stanley FatMax tape measure 25 ft metric chalk line" },
          { name: "Steel straightedge (1.2 m / 4 ft) and 600 mm T-square", why: "Cutting and checking straight lines on sheet goods and tile.", search: "aluminum straightedge 48 inch flooring T square" },
          { name: "Hand seam roller and J-roller", why: "Press seams and edges so adhesive transfers and bonds.", search: "flooring seam roller J roller" },
          { name: "Carpenter's pencil, scribe, and permanent markers", why: "Mark cuts and layout on varied surfaces.", search: "carpenter pencil flooring scribe marker" },
          { name: "Safety glasses, gloves, dust mask, and CSA-approved safety boots", why: "Cuts, dust, and slippery floors. Comfortable PPE is the PPE you will wear.", search: "safety glasses cut resistant gloves CSA safety boots dust mask" }
        ]
      },
      {
        title: "Build up in first and second year",
        note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
        items: [
          { name: "Carpet knee kicker", why: "Stretches carpet onto tack strips on small areas and stairs.", search: "Roberts carpet knee kicker" },
          { name: "Carpet tuck tool and stair tool", why: "Tucks carpet edges into the gap at walls and stairs.", search: "carpet tucker stair tool wall trimmer" },
          { name: "Seaming iron and carpet seaming tape", why: "Joins broadloom seams with hot-melt tape. Learn heat control and technique.", search: "carpet seaming iron hot melt tape" },
          { name: "Carpet cutter and side cutter", why: "Cuts carpet edges tight to the wall.", search: "carpet side cutter wall trimmer" },
          { name: "Floor scraper and heat gun", why: "Remove old adhesive and flooring. Test for asbestos before removing old resilient flooring.", search: "floor scraper long handle heat gun" },
          { name: "Flooring nailer or stapler (for hardwood)", why: "Nail-down hardwood needs the right nailer, cleats, and air supply.", search: "Bostitch Powernail flooring nailer stapler" },
          { name: "Pull bar, tapping block, and spacers", why: "Closes tight joints on click and tongue-and-groove floors.", search: "flooring installation kit pull bar tapping block spacers" },
          { name: "Moisture meter", why: "Check wood and subfloor moisture before installing.", search: "pin moisture meter wood flooring" }
        ]
      },
      {
        title: "Later and specialized",
        note: "Often supplied by the shop or employer. Ask before buying.",
        items: [
          { name: "Power carpet stretcher", why: "Stretches broadloom to the correct tension. Usually a company tool.", search: "Roberts power carpet stretcher" },
          { name: "Heat welder and welding rods (for sheet vinyl)", why: "Fuses seams in sheet goods. Usually company-supplied; learn temperature control.", search: "Leister heat welder vinyl welding rod groover" },
          { name: "45 kg (100 lb) 3-section floor roller", why: "Rolls resilient sheet and tile flat. Often company-supplied.", search: "100 lb three section floor roller flooring" },
          { name: "Concrete moisture test kits (calcium chloride and in-situ RH)", why: "Moisture testing is a core step. Follow the standard and the manufacturer's limits.", search: "concrete moisture test kit calcium chloride relative humidity probe" },
          { name: "Dust-controlled concrete grinder with HEPA vacuum", why: "Surface preparation of concrete creates silica dust. Training and controls required.", search: "concrete floor grinder HEPA vacuum dust shroud" }
        ]
      },
      {
        title: "School supplies for technical training",
        note: "What helps in the classroom for drawings, math, and code study. Check with your school about calculator rules before you buy.",
        items: [
          { name: "Mechanical pencil (0.5 mm)", why: "Consistent fine lines for layout drawings and notes.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm" },
          { name: "Scientific calculator", why: "Areas, waste factors, and material conversions.", search: "Casio fx-991 scientific calculator" },
          { name: "Architect's scale ruler", why: "Reading plans at 1:50, 1:100, and imperial scales.", search: "architect scale ruler metric imperial" },
          { name: "Graph paper pad", why: "Sketch layouts and rooms to scale.", search: "graph paper pad 8.5x11 quad ruled" },
          { name: "Field notebook (Rite in the Rain)", why: "Record moisture readings, room dimensions, and batch numbers.", search: "Rite in the Rain field notebook" },
          { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic for exam review.", search: "binder dividers highlighters" },
          { name: "Fine-tip permanent markers", why: "Mark layout and label rolls and boxes.", search: "Sharpie fine point permanent marker" }
        ]
      }
    ],
    mediaGroups: [
      {
        title: "Official and standards resources",
        items: [
          { name: "Red Seal and trades information", desc: "How Red Seal works. Check whether your province designates this trade.", url: "https://red-seal.ca/eng/welcome.shtml" },
          { name: "Codes Canada (National Building Code)", desc: "The model code that provincial building codes are based on.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
          { name: "IUPAT", desc: "Union training and apprenticeship information including floor covering.", url: "https://www.iupat.org/" },
          { name: "National Wood Flooring Association (NWFA)", desc: "Installation guidelines and training for wood flooring.", url: "https://www.nwfa.org/" },
          { name: "Resilient Floor Covering Institute (RFCI)", desc: "Technical information on resilient flooring.", url: "https://www.rfci.com/" }
        ]
      },
      {
        title: "Video searches",
        note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and manufacturer instructions.",
        items: [
          { name: "Subfloor preparation for flooring", desc: "Cleaning, levelling, and checking subfloors.", url: yt("subfloor+preparation+flooring+installation+concrete+leveling") },
          { name: "Carpet installation with a power stretcher", desc: "Tack strip, pad, stretching, and trimming.", url: yt("carpet+installation+power+stretcher+knee+kicker") },
          { name: "Carpet seaming", desc: "Cutting and seaming broadloom with a seaming iron.", url: yt("carpet+seaming+iron+tape+how+to+seam") },
          { name: "Luxury vinyl plank installation", desc: "Layout, cutting, and click or glue-down methods.", url: yt("luxury+vinyl+plank+installation+professional") },
          { name: "Hardwood floor installation", desc: "Nail-down hardwood layout and fastening.", url: yt("hardwood+floor+installation+nail+down+professional") },
          { name: "Sheet vinyl heat welding", desc: "Grooving and welding seams in sheet vinyl.", url: yt("sheet+vinyl+heat+welding+seams+groover") },
          { name: "Concrete moisture testing for flooring", desc: "Calcium chloride and in-situ relative humidity tests.", url: yt("concrete+moisture+testing+flooring+relative+humidity+ASTM+F2170") },
          { name: "Floor layout and planning", desc: "Finding centre lines and balancing borders.", url: yt("flooring+layout+centre+line+balance+border+tile") }
        ]
      },
      {
        title: "Audio, beginner (pre-apprentice and year 1)",
        note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for flooring yourself.",
        items: [
          { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
          { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
          { name: "YouTube: flooring installer podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: yt("flooring+installer+podcast") }
        ]
      },
      {
        title: "Audio, intermediate (years 2-3)",
        note: "Trade-knowledge talk that builds on what you do on the job.",
        items: [
          { name: "YouTube: flooring installation tips (audio)", desc: "Troubleshooting and technique talks from working installers.", url: yt("flooring+installation+tips+podcast") },
          { name: "YouTube: hardwood flooring talk", desc: "Moisture, acclimation, and installation methods.", url: yt("hardwood+flooring+moisture+installation+podcast") },
          { name: "YouTube: commercial flooring contractor podcast", desc: "Specifications, scheduling, and quality on larger jobs.", url: yt("commercial+flooring+contractor+podcast") }
        ]
      },
      {
        title: "Audio, advanced (year 4 to journeyperson)",
        note: "Exam prep, business, and leadership.",
        items: [
          { name: "YouTube: floor covering installer certification prep", desc: "Study talks you can listen to while commuting.", url: yt("floor+covering+installer+certification+exam+preparation") },
          { name: "YouTube: flooring business and estimating podcast", desc: "Pricing, estimating, and running a flooring company.", url: yt("flooring+business+estimating+podcast") },
          { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: yt("skilled+trades+leadership+mentoring+apprentices+podcast") }
        ]
      }
    ],
    practiceBank: {
      1: Q(1, [
        ["Where do you find ventilation and fire precautions for a flooring adhesive?", "The Safety Data Sheet (SDS) and product label", "The tape measure and the width label printed on the roll", "The floor plan", "The roll tag", "WHMIS requires an SDS. Solvent-based adhesives may be flammable."],
        ["A subfloor should be ready for installation when it is:", "Clean, dry, flat, and sound", "Wet but flat", "Dusty but dry", "Slightly damp, since moisture helps the adhesive grab the slab", "Dirt, moisture, and unevenness cause failures."],
        ["The notch size on an adhesive trowel controls:", "How much adhesive is spread on the floor", "Color of the adhesive and how long it takes to skin over", "How hard the floor is", "The drying temperature", "Use the notch the manufacturer specifies."],
        ["Tack strip holds:", "Carpet at the perimeter of the room", "Vinyl seams", "Adhesive on the floor of the room in glue-down installations", "Hardwood nails", "Tack strip has pins that grip the carpet backing."],
        ["Which tool stretches carpet for small areas and stairs?", "Knee kicker", "Heat welder", "J-roller", "Moisture meter", "A knee kicker hooks the carpet and moves it onto the tack strip."],
        ["Why change utility knife blades often?", "Dull blades tear and make unsafe, ragged cuts", "To save money on the wear and tear of the utility knife handle", "To make the knife heavier", "It is not important", "A sharp blade needs less force and cuts cleaner."],
        ["Acclimating hardwood means:", "Letting it adjust to the room's moisture and temperature before installing", "Painting it", "Cutting it to length", "Heating it with a torch", "Wood moves as moisture changes. Follow the manufacturer's acclimation rules."],
        ["What is carpet pad (underlay) for?", "Comfort, support, and longer carpet life", "Waterproofing the subfloor against spills and pet accidents", "Fire rating", "Holding adhesive", "Pad cushions the carpet and reduces wear."],
        ["What is the area of a room 4 m by 3 m?", "12 m²", "7 m²", "14 m²", "10 m²", "Area is length × width."],
        ["How many square feet are in a square yard?", "9", "3", "6", "12", "A square yard is 3 ft × 3 ft = 9 sq ft."],
        ["Why leave an expansion gap around a floating floor?", "The floor expands and contracts with moisture and temperature", "To hide the rough wall edge and let the baseboard sit flat", "To save material", "It is for sound only", "Without a gap the floor can buckle."],
        ["Why use a roller on resilient floorcovering?", "To press the material into the adhesive and remove air", "To thin the adhesive so it spreads out evenly under the roll", "To trim edges", "To heat the floor", "Rolling ensures transfer and bond."],
        ["Why use knee pads?", "Kneeling is hard on the joints over a long day", "To keep cuts clean", "To weigh down carpet", "They are required by code for tile only, to protect the floor from your weight", "Protecting knees prevents injury."],
        ["Old vinyl tile and black adhesive in a building from before the 1990s may contain:", "Asbestos", "Only paper", "Gypsum", "Hardwood", "Test before removing or sanding and follow provincial rules."],
        ["Adhesive open time means:", "The time after spreading that it can still bond", "The time the can stays open before the adhesive hardens inside it", "The time to dry fully", "The time between coats", "Placing flooring after open time ends causes poor bond."]
      ]),
      2: Q(2, [
        ["Which test measures relative humidity inside a concrete slab?", "In-situ probes, per ASTM F2170", "A tape measure", "A level", "A pH strip pressed on the surface, since it reads the moisture inside", "ASTM F2170 uses probes placed in the slab. F1869 is the calcium chloride test."],
        ["The calcium chloride test (ASTM F1869) measures:", "Moisture vapour emission rate from the slab surface", "Concrete strength and the load it can carry across the slab", "Floor flatness", "Slab thickness", "MVER is expressed as mass per area per 24 hours."],
        ["Broadloom carpet is commonly made in widths of:", "3.66 m (12 ft) and 4.57 m (15 ft)", "1.2 m and 2.4 m, the same widths as plywood and drywall sheets", "0.9 m", "6 m", "These are common roll widths. Check the product."],
        ["Carpet pile direction should be:", "Kept the same on all pieces", "Mixed to hide seams", "Always against the traffic so the carpet looks darker in hallways", "Random", "Mixed pile directions look like different shades."],
        ["Self-levelling underlayment is used to:", "Fill low spots and flatten the floor", "Seal wood floors before the finish coat goes on", "Hold carpet", "Cut vinyl", "Flatness matters for most floor products."],
        ["Who sets the flatness and moisture limits for a floor product?", "The manufacturer's installation instructions", "The delivery driver", "The painter", "The customer's neighbour or whoever worked on the building last", "Always follow current manufacturer data to keep warranty and performance."],
        ["Cove base is:", "A wall base that runs up from the floor", "A subfloor", "A seam tape used to join two pieces of broadloom", "A kind of adhesive", "It protects the wall and covers the joint."],
        ["For tile layout, why find the centre lines?", "To balance the borders and avoid thin cuts at the edges", "To save adhesive by starting from the centre and working outward", "To mark moisture", "To start at a wall", "Starting at centre gives even cuts on both sides."],
        ["A transition or reducer strip is used:", "Where two floor types or heights meet", "Under carpet pad to keep it from sliding on the subfloor", "In wall corners", "To hold adhesive", "Transitions cover gaps and ramp height changes."],
        ["When is a primer used under adhesive?", "When the manufacturer specifies it for the substrate", "Never", "Only on carpet, to help the tack strip hold the pad", "Always on wood", "Primers control absorption and improve bond on some substrates."],
        ["A floating floor is:", "Not glued or nailed to the subfloor", "Glued to the subfloor along every edge with flooring adhesive", "Nailed to joists", "Installed over water", "Floating floors lock together and sit on the subfloor or underlay."],
        ["Why cut broadloom from the back when possible?", "It protects the face yarns and lets you follow the stitch rows for a straight cut", "It is faster with a blunt knife", "It wears the knife less", "Carpet has no back", "Back cutting avoids damaging the pile."],
        ["Staggering end joints on plank flooring:", "Improves strength and appearance", "Weakens the floor but hides the end joints from view", "Is only for carpet", "Reduces expansion", "Avoid lining up joints in neighbouring rows."],
        ["Telegraphing is:", "Subfloor flaws showing through the floor surface", "Sending a message about the job to the supplier by radio", "Seam sealing", "Moisture testing", "Thin flooring shows bumps and gaps below."],
        ["Why vacuum or sweep the subfloor before installing?", "Dust and debris cause adhesive failure and bumps", "To save time later by loosening the adhesive on the slab", "For colour", "To prevent mould in the roll", "Cleanliness matters for bond."]
      ]),
      3: Q(3, [
        ["Solid hardwood is generally installed:", "Nailed down over a suitable wood subfloor", "Floated over a layer of water to protect the wood from dryness", "Only with adhesive on concrete", "Under carpet", "Follow the manufacturer for moisture and subfloor requirements."],
        ["Engineered wood flooring is:", "Layered, with a wood wear layer on a stable core", "Solid wood only, cut thin and glued in layers", "Plastic only", "Laminate paper", "Cross-layered cores are more dimensionally stable."],
        ["Hardwood should be installed perpendicular to:", "The floor joists, when installed over a joist system", "The walls, so the boards run parallel to the longest room edge", "The doorways", "The windows", "Perpendicular layout improves support unless the subfloor allows otherwise."],
        ["Heat welding sheet vinyl involves:", "Grooving the seam and fusing a welding rod into it", "Using glue only along the seam, with no rod or groove", "Nailing it", "Painting it", "Welded seams are sealed and cleanable."],
        ["Linoleum is made mainly from:", "Linseed oil and natural materials", "Petroleum only, in the same way as other vinyl products", "Glass", "Gypsum", "Linoleum is a natural resilient floor."],
        ["Over radiant heating floors you should:", "Follow the manufacturer's temperature and start-up limits", "Turn heat to maximum so the adhesive cures faster before install", "Ignore the heating", "Use any adhesive", "Excess heat can damage flooring or adhesive."],
        ["Conductive or ESD flooring is used where:", "Static electricity must be controlled", "Sound is a problem between floors in apartment buildings", "Fire rating is needed", "Water is present", "It is used in electronics and hospital spaces."],
        ["Carpet tile can be laid:", "In a monolithic or quarter-turn pattern as specified", "Only in a quarter-turn pattern, whatever the manufacturer says", "Only against traffic", "Only with tack strip", "Follow the arrow direction and specification."],
        ["High alkalinity in concrete moisture can:", "Break down adhesives and cause failure", "Strengthen vinyl and improve how it bonds to the slab", "Help adhesives", "Prevent mould", "Moisture plus alkalinity damages many adhesives."],
        ["In wet areas such as washrooms, sheet vinyl is often used with:", "Welded seams and a coved base", "Open seams", "Tack strip", "Floating installation with the seams left open for drainage", "Sealed seams keep water out."],
        ["Why leave an expansion space at walls for wood floors?", "Wood moves with seasonal humidity", "To save wood by using shorter boards along the wall", "To hide nails", "For wiring", "Trim or base covers the gap."],
        ["Plywood underlayment fasteners should be:", "Spaced as the manufacturer specifies", "Random", "Heads proud", "Glue only", "Proper fastening avoids squeaks and telegraphing."],
        ["Luxury vinyl tile (LVT) installation methods include:", "Glue-down and click-lock floating", "Nail-down only, using staples through the flooring tongue", "Tack strip", "Stretching", "Follow the product data."],
        ["What does racking a hardwood floor mean?", "Laying out several rows loose to stagger end joints", "Stacking boards", "Cleaning the floor and removing old adhesive before the first row", "Nailing the first row", "Racking helps plan the layout before fastening."],
        ["A reducer is used to:", "Ramp from a taller floor to a lower one", "Cut carpet cleanly where it meets a doorway or fireplace", "Hold tack strip", "Seal seams", "Different floor heights need transitions."]
      ]),
      4: Q(4, [
        ["A 3.4 m by 5.0 m room is covered with 3.66 m wide broadloom, no seams. The minimum roll length needed before allowances is:", "5.0 m", "3.66 m", "3.4 m", "8.4 m", "The room fits within the roll width, so the length equals the long dimension. Add an allowance for trimming."],
        ["A 4.2 m × 5.0 m room needs 10% extra for waste. How much material is required?", "23.1 m²", "21 m²", "25.2 m²", "19 m²", "4.2 × 5.0 = 21 m². 21 × 1.10 = 23.1 m²."],
        ["21 m² is about how many square feet?", "226 sq ft", "100 sq ft", "300 sq ft", "75 sq ft", "21 × 10.764 = 226.04 sq ft."],
        ["Cupping of a hardwood floor is typically caused by:", "More moisture on the bottom than on the top", "Too much finish applied on the top of the boards", "Dry subfloor", "Cutting boards too short", "Moisture from below causes edges to rise."],
        ["Gaps appearing between boards in winter are commonly due to:", "Low indoor humidity shrinking the wood", "Too much glue under the boards swelling the subfloor", "Wide boards", "Summer heat", "Seasonal movement is normal within limits."],
        ["Peaking of a floating floor is often caused by:", "Insufficient expansion space at the walls", "Too much underlay", "A level floor that was flattened with underlayment", "Too many spacers", "Floating floors need room to move."],
        ["Carpet wrinkling or rippling usually means:", "It was not stretched properly", "It was over-stretched", "The pad was too thin and too firm for the carpet used", "The adhesive was blue", "Power stretching removes slack."],
        ["Before sanding or removing old adhesive from a building from before the 1990s, you should:", "Test for asbestos and follow provincial rules", "Dry grind it down to the slab, using a vacuum with no filter", "Sweep it dry", "Burn it off", "Old adhesives and tiles may contain asbestos."],
        ["Why record moisture test results?", "They support warranty claims and proof of correct procedure", "They are useless once the floor is down and the job is signed off", "They replace the SDS", "They are for colour", "Documentation protects you and the client."],
        ["Grinding concrete floors can create dust containing:", "Respirable crystalline silica", "Only water", "Oxygen", "Nitrogen", "Use dust control and respiratory protection per provincial rules."],
        ["The best time for flooring in a new building is:", "After wet trades finish and the space is at service temperature and humidity", "Before drywall goes up, so the floor can be finished early", "While concrete is wet", "During a rainstorm", "Stable conditions prevent movement and failures."],
        ["If adhesive is failing on a concrete slab, first suspect:", "Moisture or alkalinity in the slab", "The colour of the floor and how the light hits it", "The tape measure", "The knife blade", "Test the slab and check the manufacturer's limits."],
        ["Bubbling in glued-down vinyl is commonly caused by:", "Trapped air, moisture, or poor adhesive transfer", "Rolling the floor with a heavy roller right after installation", "A clean subfloor", "Cutting with a hook blade", "Check adhesive and subfloor, and roll correctly."],
        ["Which document gives the correct adhesive, trowel, and moisture limits?", "The manufacturer's installation instructions", "A brush label on the trowel or the box of knife blades", "A plumb bob", "A colour chart", "Always use current manufacturer data."],
        ["A seam placed across a doorway:", "Should be avoided because of traffic wear", "Is the best place, because the strip hides the seam well", "Is required", "Is impossible", "Plan seams away from high traffic and under light direction."]
      ])
    },
    roadmapSteps: [
      { title: "Before you start", items: ["Confirm entry requirements and whether the trade is designated in your province with your apprenticeship authority", "Get safety training employers ask for (commonly WHMIS, working at heights, and site orientation; requirements vary)", "Apply to union training centres (such as IUPAT) and flooring contractors", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
      { title: "Year 1: foundations", items: ["Learn site safety, PPE, lifting, and WHMIS", "Learn floor products, adhesives, and tools", "Practise measuring, cutting, and layout", "Learn subfloor checking and preparation basics", "Complete your first technical training block"] },
      { title: "Year 2: carpet and resilient", items: ["Install carpet with tack strip, pad, and stretching", "Seam broadloom and install carpet tile", "Install sheet vinyl and vinyl tile", "Learn moisture testing and floor flatness"] },
      { title: "Year 3: wood and laminate", items: ["Install laminate and floating floors", "Install nail-down and glue-down hardwood", "Learn acclimation, moisture, and expansion rules", "Learn stairs, transitions, and special layouts"] },
      { title: "Year 4 and beyond: advanced", items: ["Troubleshoot adhesive, moisture, and seam failures", "Estimate materials and plan large jobs", "Review asbestos and silica rules", "Mentor first-year apprentices"] },
      { title: "Certification", items: ["Confirm hours and school requirements with your authority", "Check whether your province offers a certificate or Red Seal exam, and review its trade profile", "Use the mock exam on the Practice tests tab", "Check the federal completion bonus and funding pages on the Overview tab"] }
    ],
    glossary: [
      ["Acclimation", "Letting flooring adjust to the room's moisture and temperature before installation."],
      ["Adhesive", "A glue used to bond flooring to the subfloor."],
      ["Broadloom", "Carpet made in wide rolls."],
      ["Calcium chloride test", "A test (ASTM F1869) measuring moisture emission from a concrete slab."],
      ["Cove base", "A wall base that curves up from the floor."],
      ["Cupping", "Board edges higher than the centre due to moisture."],
      ["Expansion gap", "A space left at walls that lets a floor move."],
      ["Flash cove", "Sheet flooring turned up the wall for a sealed base."],
      ["Floating floor", "A floor that is not attached to the subfloor."],
      ["Heat welding", "Fusing vinyl seams with a heated rod."],
      ["Knee kicker", "A tool used to stretch carpet onto tack strip."],
      ["LVT", "Luxury vinyl tile or plank."],
      ["MVER", "Moisture vapour emission rate from a slab."],
      ["Nap", "The direction of pile on carpet."],
      ["Open time", "How long adhesive stays able to bond after spreading."],
      ["Pile", "The raised surface fibres of carpet."],
      ["Reducer", "A transition strip that ramps to a lower floor."],
      ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
      ["Seam sealer", "A product that seals the cut edges of sheet flooring."],
      ["Self-levelling underlayment", "A cement-based or similar liquid that flows flat."],
      ["Subfloor", "The structural base that flooring is installed over."],
      ["Tack strip", "A strip with pins fastened at the walls to hold carpet."],
      ["Telegraphing", "Subfloor flaws showing through the finished floor."],
      ["Transition", "A trim piece where two floors meet."],
      ["Underlay", "A cushion or sound layer beneath flooring."],
      ["WHMIS", "Canada's workplace hazardous materials information system."]
    ],
    cards: [
      { front: "Square feet in a square yard", back: "9" },
      { front: "1 m² in square feet", back: "About 10.76 sq ft" },
      { front: "Common broadloom widths", back: "3.66 m (12 ft) and 4.57 m (15 ft)" },
      { front: "ASTM F2170", back: "In-situ relative humidity probes for concrete slabs" },
      { front: "ASTM F1869", back: "Calcium chloride test for moisture vapour emission" },
      { front: "Purpose of an expansion gap", back: "Lets the floor move with humidity and temperature." },
      { front: "What causes cupping?", back: "More moisture on the bottom of the board than the top." },
      { front: "Before removing old vinyl tile", back: "Test for asbestos and follow provincial rules." },
      { front: "Who sets installation limits?", back: "The manufacturer's current installation instructions" }
    ],
    jobsIntro: "Look for flooring contractors and retailers, union and signatory floor covering contractors, commercial interiors firms, general contractors, and property maintenance departments.",
    tips: ["Bring a short resume, your safety tickets, and ID.", "Show you are careful, tidy, and good at measuring and detail work.", "Visit flooring shops and union training centres in person when you can, and follow up.", "Ask what tools you need and what the employer supplies."],
    forumTopics: ["Starting out", "Subfloor prep and moisture", "Carpet, resilient, and wood installs", "Certification and exam prep", "Tools and gear", "Province and code questions"],
    reference: [
      {
        title: "Area and takeoff formulas",
        list: [
          "Room area = length × width. Irregular rooms: split into rectangles and add",
          "Material needed = area × (1 + waste allowance). 10% waste is × 1.10",
          "Roll goods: check the roll width, seam locations, and pattern repeat",
          "Tile count = area ÷ area of one tile, plus waste",
          "Perimeter = 2 × (length + width), used for base and trim"
        ]
      },
      {
        title: "Conversions",
        list: [
          "1 in = 25.4 mm, and 1 ft = 304.8 mm",
          "1 m² ≈ 10.764 sq ft, and 1 sq ft ≈ 0.0929 m²",
          "1 sq yd = 9 sq ft ≈ 0.836 m²",
          "1 US gal ≈ 3.785 L",
          "12 ft = 3.66 m, and 15 ft = 4.57 m"
        ]
      },
      {
        title: "Moisture testing methods (concrete)",
        table: {
          head: ["Method", "Standard", "What it measures"],
          rows: [
            ["Calcium chloride", "ASTM F1869", "Moisture vapour emission rate at the surface"],
            ["In-situ probes", "ASTM F2170", "Relative humidity inside the slab"]
          ]
        },
        note: "Acceptable limits come from the flooring and adhesive manufacturer. Record the readings, date, and locations."
      },
      {
        title: "Which method suits which floor?",
        table: {
          head: ["Floor", "Typical method"],
          rows: [
            ["Broadloom carpet", "Stretched over tack strip and pad, seams with hot-melt tape"],
            ["Carpet tile", "Adhesive or releasable adhesive, per manufacturer"],
            ["Sheet vinyl", "Full-spread adhesive, heat welded seams in wet areas"],
            ["Luxury vinyl tile", "Glue-down or click-lock floating"],
            ["Laminate", "Floating, with expansion gap and underlay"],
            ["Solid hardwood", "Nailed to a suitable wood subfloor"],
            ["Engineered wood", "Floating, glue-down, or nail-down per manufacturer"]
          ]
        }
      },
      {
        title: "Common failures and checks",
        list: [
          "Cupping: moisture higher at the bottom of the boards",
          "Peaking of floating floors: expansion gap too small",
          "Adhesive failure: moisture, alkalinity, dirty or poorly prepared slab, or wrong trowel",
          "Telegraphing: uneven or unprepared subfloor under thin flooring",
          "Rippled carpet: insufficient stretching"
        ]
      },
      {
        title: "Standards and safety pointers",
        list: [
          "Always follow the flooring and adhesive manufacturer's current installation instructions",
          "WHMIS and SDS: read the SDS for adhesives, primers, and solvents; remove ignition sources and ventilate",
          "Asbestos: test old resilient flooring and adhesive before disturbing; provincial rules apply",
          "Silica: grinding concrete requires dust control and respiratory protection",
          "National Building Code of Canada and provincial codes may set requirements for slip resistance, fire performance, and accessibility"
        ],
        note: "Requirements differ by province. Confirm with your instructor and authority."
      }
    ]
  });
}
