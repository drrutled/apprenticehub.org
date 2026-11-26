// Lather (Interior Systems Mechanic) content. Practice questions are original study aids, not official Red Seal exam questions.
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
    id: "lather-interior-systems",
    store: "lather-interior-systems",
    title: "Lather (Interior Systems Mechanic)",
    name: "Lather (Interior Systems Mechanic)",
    short: "lathing and interior systems",
    category: "Interior Systems · Framing · Construction",
    summary: "Lathers and interior systems mechanics lay out and install steel stud framing, suspended ceilings, gypsum board, and related interior systems that form the walls and ceilings of modern buildings.",
    work: "You lay out partitions from drawings, cut and fasten steel track and studs, hang ceiling grids, and install boards and acoustic products. The work is precise, physical, and often overhead, and it depends on accurate layout, fire and sound details, and good coordination with other trades.",
    duration: "Usually 3–4 years (Job Bank), varies by province",
    union: "United Brotherhood of Carpenters",
    unionUrl: "https://www.carpenters.org/",
    profileUrl: "https://red-seal.ca/eng/trades/lather-int-sys-mech.shtml",
    durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/297461/ca",
    jobSearch: "interior systems mechanic apprentice",
    journeySearch: "lather interior systems mechanic",
    aliases: "lather lathing interior systems steel stud framing metal stud drywall installer drywaller suspended ceiling acoustic ceiling t-bar partition framer",
    tools: ["Tape measure, chalk line, and laser", "Aviation snips (left, right, straight)", "Screw gun with magazine", "Level and plumb bob", "Stud crimper and utility knife", "Safety glasses, gloves, CSA boots"],
    insight: {
      skills: ["Accurate layout from drawings", "Cutting and fastening light-gauge steel", "Reading wall and ceiling details", "Working safely overhead and from lifts"],
      hazards: ["Sharp steel edges: wear cut-resistant gloves and sleeves", "Overhead work and falls: use inspected scaffolds and lifts with training", "Powder-actuated tools: only trained, certified users", "Dust from cutting board and concrete: use controls and a fitted respirator"],
      settings: ["Commercial and institutional buildings", "Condos and high-rise interiors", "Fire-rated and acoustic assemblies", "Suspended ceiling grid and ceiling tile"]
    },
    toolGroups: [
      {
        title: "Day-one tools, buy once and buy well",
        note: "Professional-grade tools that hold up on site. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
        items: [
          { name: "Aviation snips (left, right, and straight cut)", why: "Colour-coded handles: red cuts left, green cuts right, yellow cuts straight. They cut track, stud flanges, and ceiling wire cleanly.", search: "Malco Wiss aviation snips red green yellow set" },
          { name: "Tape measure (25 ft / 7.5 m) with metric markings", why: "A wide, stiff blade holds out for layout and measuring partitions and ceilings.", search: "Milwaukee Stanley FatMax tape measure 25 ft metric" },
          { name: "Chalk line and chalk (blue and red)", why: "Snaps layout lines on slabs and ceilings. A sturdy case and clean line stay accurate.", search: "Milwaukee Irwin chalk line reel blue chalk" },
          { name: "Magnetic torpedo level and 4 ft level", why: "Magnetic levels clamp on studs and track and keep partitions plumb.", search: "Milwaukee Stabila magnetic level 48 inch torpedo" },
          { name: "Plumb bob", why: "Transfers points from the ceiling to the floor for layout.", search: "steel plumb bob 16 oz" },
          { name: "Stud crimper or lock-forming pliers", why: "Fastens stud to track in a pinch without screws on some jobs.", search: "Malco stud crimper drywall framing" },
          { name: "Utility knife and extra blades", why: "Cuts board, tape, and sound batts. Change blades often.", search: "Milwaukee Stanley utility knife retractable" },
          { name: "Safety glasses, cut-resistant gloves, hard hat, and CSA-approved safety boots", why: "Steel framing edges are sharp and overhead work drops debris. Comfortable PPE is the PPE you will wear.", search: "cut resistant gloves CSA safety boots safety glasses hard hat" }
        ]
      },
      {
        title: "Build up in first and second year",
        note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
        items: [
          { name: "Cordless screw gun and collated screw attachment", why: "Fast, depth-set fastening of board and studs. Pick one battery platform and stay with it.", search: "Dewalt Milwaukee drywall screw gun collated attachment" },
          { name: "Cordless drill and impact driver", why: "Drilling for anchors and driving self-drilling screws.", search: "Milwaukee M18 FUEL drill impact driver combo" },
          { name: "Cordless rotary laser or cross-line laser", why: "Quickly sets ceiling heights and wall lines. Confirm what the employer supplies.", search: "Bosch DeWalt cross line laser green" },
          { name: "Drywall T-square (48 in) and rasp", why: "Mark and trim board accurately.", search: "drywall T square 48 inch aluminum rasp" },
          { name: "Hole saw, jab saw, and rotary cutout tool", why: "Cut openings for boxes and fixtures cleanly.", search: "drywall jab saw rotary cutout tool" },
          { name: "Cordless shears or nibbler", why: "Cuts track and studs fast, but still use snips for details.", search: "Milwaukee cordless metal shears nibbler" },
          { name: "Hammer drill and concrete bits", why: "Anchor track and angle into concrete.", search: "Hilti Milwaukee hammer drill SDS plus bits" },
          { name: "Heavy-duty tool pouch and belt", why: "Keeps fasteners and tools at hand while on a ladder or lift.", search: "Occidental Leather tool pouch belt" }
        ]
      },
      {
        title: "Later and specialized",
        note: "Often supplied by the shop or employer. Ask before buying.",
        items: [
          { name: "Powder-actuated tool (Hilti or Ramset)", why: "Fastens track into concrete or steel. Only trained, certified users may operate; employers supply them.", search: "Hilti Ramset powder actuated tool" },
          { name: "Board lift or panel hoist", why: "Raises ceiling board safely. Usually a company tool.", search: "drywall panel hoist ceiling lift" },
          { name: "Scaffold or mobile work platform", why: "Employer-provided and inspected. Training comes first.", search: "mobile scaffold tower CSA" },
          { name: "Ceiling grid cutting tools and wire twisting tool", why: "Cut and tie T-bar and hanger wire cleanly.", search: "ceiling grid shears hanger wire tying tool" },
          { name: "Full-body harness and lanyard", why: "Usually supplied by the employer. Fall protection training comes first.", search: "3M DBI-SALA full body harness CSA" }
        ]
      },
      {
        title: "School supplies for technical training",
        note: "What helps in the classroom for drawings, math, and code study. Check with your school about calculator rules before you buy.",
        items: [
          { name: "Mechanical pencil (0.5 mm)", why: "Consistent fine lines for layout drawings and notes.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm" },
          { name: "Scientific calculator", why: "Trig, fractions, and area calculations for takeoffs.", search: "Casio fx-991 scientific calculator" },
          { name: "Architect's scale ruler", why: "Reading plans at 1:50, 1:100, and imperial scales.", search: "architect scale ruler metric imperial" },
          { name: "Triangle set and protractor", why: "Draw angles for bulkheads and layout.", search: "Staedtler triangle set protractor" },
          { name: "Field notebook (Rite in the Rain)", why: "Record layout dimensions and notes on wet or dusty sites.", search: "Rite in the Rain field notebook" },
          { name: "National Building Code of Canada (Division B) or provincial code", why: "Fire resistance and sound provisions for assemblies. Check which edition your province uses.", search: "National Building Code of Canada" },
          { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic for exam review.", search: "binder dividers highlighters" }
        ]
      }
    ],
    mediaGroups: [
      {
        title: "Official and standards resources",
        items: [
          { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare.", url: "https://red-seal.ca/eng/welcome.shtml" },
          { name: "Codes Canada (National Building Code)", desc: "The model code that provincial building codes are based on, including fire and sound provisions.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
          { name: "United Brotherhood of Carpenters", desc: "Union training and apprenticeship information for carpentry and interior systems.", url: "https://www.carpenters.org/" },
          { name: "Gypsum Association", desc: "Technical documents on gypsum board and assemblies.", url: "https://www.gypsum.org/" },
          { name: "Association of the Wall and Ceiling Industry (AWCI)", desc: "Industry information and technical resources for wall and ceiling trades.", url: "https://www.awci.org/" }
        ]
      },
      {
        title: "Video searches",
        note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local codes.",
        items: [
          { name: "Metal stud framing basics", desc: "Layout, track, and stud installation.", url: yt("metal+stud+framing+basics+track+and+stud") },
          { name: "Suspended ceiling grid installation", desc: "Wall angle, main runners, cross tees, and hangers.", url: yt("suspended+ceiling+grid+installation+t-bar") },
          { name: "Layout with a chalk line and laser", desc: "Laying out partitions from drawings.", url: yt("partition+layout+laser+chalk+line+steel+stud") },
          { name: "Deflection track head of wall", desc: "Allowing for slab movement above a partition.", url: yt("deflection+track+head+of+wall+steel+stud") },
          { name: "Fire-rated partition assemblies", desc: "How rated walls are built and sealed.", url: yt("fire+rated+wall+assembly+drywall+firestop") },
          { name: "Acoustic and sound-rated walls", desc: "STC and details that improve sound isolation.", url: yt("soundproof+wall+assembly+STC+rating+resilient+channel") },
          { name: "Metal lath and stucco", desc: "Installing lath for plaster and stucco.", url: yt("metal+lath+installation+stucco+plaster") },
          { name: "Powder-actuated tool safety", desc: "Safe use and training basics.", url: yt("powder+actuated+tool+safety+training") }
        ]
      },
      {
        title: "Audio, beginner (pre-apprentice and year 1)",
        note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for interior systems yourself.",
        items: [
          { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
          { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
          { name: "YouTube: interior systems mechanic apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: yt("interior+systems+mechanic+apprentice+podcast") }
        ]
      },
      {
        title: "Audio, intermediate (years 2-3)",
        note: "Trade-knowledge talk that builds on what you do on the job.",
        items: [
          { name: "YouTube: steel stud framing talk (listen-along)", desc: "Framing and layout tips to hear while commuting.", url: yt("steel+stud+framing+tips+podcast") },
          { name: "YouTube: commercial interiors and ceilings podcast", desc: "Ceiling systems, coordination, and quality.", url: yt("commercial+interiors+ceiling+systems+podcast") },
          { name: "YouTube: carpenters union training talk", desc: "Training and career talks from union trades.", url: yt("carpenters+union+apprenticeship+interior+systems+podcast") }
        ]
      },
      {
        title: "Audio, advanced (year 4 to journeyperson)",
        note: "Exam prep, business, and leadership.",
        items: [
          { name: "YouTube: Red Seal lather interior systems mechanic exam prep", desc: "Study talks you can listen to while commuting.", url: yt("Red+Seal+lather+interior+systems+mechanic+exam+preparation") },
          { name: "YouTube: construction estimating and takeoff podcast", desc: "Takeoffs, pricing, and planning interior work.", url: yt("construction+estimating+takeoff+podcast") },
          { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: yt("skilled+trades+leadership+mentoring+apprentices+podcast") }
        ]
      }
    ],
    practiceBank: {
      1: Q(1, [
        ["Aviation snips with green handles are designed to cut:", "To the right", "To the left", "Only straight", "Only wire", "Red cuts left, green cuts right, and yellow cuts straight."],
        ["What is the common spacing of steel studs in partitions?", "400 mm or 600 mm on centre", "100 mm on centre, as used for blocking runs", "2400 mm on centre, matching the board width", "1000 mm on centre, as used for ceiling furring", "400 mm (16 in) and 600 mm (24 in) match board width and design."],
        ["The U-shaped member at the floor and ceiling that receives studs is called:", "Track", "Furring", "Cross tee", "Corner bead", "Studs fit into track and are fastened to it."],
        ["Which tool snaps a straight layout line on a floor or ceiling?", "Chalk line", "Utility knife", "Level only", "Screw gun", "A chalk line marks long, straight layout lines."],
        ["Who may operate a powder-actuated tool?", "A trained and certified user", "Any apprentice without training", "Anyone with a hard hat", "The first person on site", "Provincial rules and manufacturers require training and certification."],
        ["Why wear cut-resistant gloves on framing work?", "Steel studs and track have sharp edges", "To keep your hands warm in cold unheated buildings only", "To get a better grip on a level and a tape in wet conditions", "To prevent drywall dust from getting into your lungs", "Cut edges on light-gauge steel cause lacerations."],
        ["Which screw is typically used to fasten board to light-gauge steel studs?", "Self-drilling Type S bugle-head screw", "A coarse-thread wood deck screw driven with a hammer drill", "A common nail driven through the board into the stud flange", "A lag screw with a hex head for heavy framing", "Type S screws are made for light-gauge steel."],
        ["8 ft is about how many millimetres?", "2438 mm", "2000 mm", "2800 mm", "1829 mm", "8 × 304.8 = 2438.4 mm, rounded to 2440 mm."],
        ["What does hanger wire do in a suspended ceiling?", "Suspends the grid from the structure above", "Holds up the floor slab above the work area", "Cuts the ceiling tile to fit around the light fixtures", "Seals the joints between the grid and the wall angle", "Hanger wire carries the grid weight to the structure."],
        ["In a suspended grid, which parts span between main runners?", "Cross tees", "Wall angle", "Hold-down clips only", "Studs", "Cross tees lock into main runners to make the grid pattern."],
        ["What is wall angle used for?", "Supports the perimeter edge of the ceiling grid", "Starts a steel stud wall at the floor as the bottom track", "Stops a door from swinging into the wall", "Holds up a hanger wire at the structure above", "It is the trim fastened to the wall at ceiling height."],
        ["Plumb means:", "Truly vertical", "Truly horizontal", "At 45 degrees", "Straight but at any angle", "Plumb is vertical. Level is horizontal."],
        ["Why do you wear eye protection when cutting studs?", "Metal chips and sharp pieces can fly", "To see better in bright daylight and reduce glare", "To make the cut straighter by keeping the saw in view", "It is only for show and has no real safety purpose", "Eye injuries are common when cutting and drilling overhead."],
        ["Which is a safe way to use a ladder?", "Keep three points of contact and set it at a 4:1 angle", "Stand on the top step to reach the highest part of the work", "Lean it against a wet wall when the floor is clear", "Let a helper hold two ladders together to span a gap", "A 4:1 ratio means 1 m out for every 4 m up."],
        ["Where do you find hazard information about a product used on site?", "The Safety Data Sheet (SDS)", "The tape measure markings on the blade", "The level vial and the bubble", "The grid lines on the drawing sheet", "WHMIS requires an SDS for hazardous products."]
      ]),
      2: Q(2, [
        ["What is the purpose of deflection track?", "Allows the structure above to move without loading the studs", "Holds up the ceiling so the hanger wire can be removed", "Cuts sound passing through the wall to the next room", "Replaces hanger wire", "Slotted track at the head lets studs slide as the slab deflects."],
        ["Resilient channel is used to:", "Decouple board from framing to improve sound isolation", "Make the wall stiffer so that it carries more load", "Hold insulation in the stud cavity so it does not sag", "Hang the ceiling from the structure above the room", "Flexible mounting reduces sound transfer."],
        ["Common suspended ceiling grid module sizes are:", "600 × 600 mm and 600 × 1200 mm", "300 × 300 mm, the same as a standard floor tile", "900 × 900 mm, used for exterior soffit panels", "2400 × 1200 mm, the size of a full sheet of board", "Metric modules match 2 ft × 2 ft and 2 ft × 4 ft tiles."],
        ["Fasteners in board should be kept about how far from the board edge?", "At least about 10 mm (3/8 in)", "At the very edge so the board is held down firmly", "50 mm from the edge, where the board is thickest", "100 mm from the edge, where the stud is centred", "Fasteners too close to the edge break out the paper."],
        ["On a double layer of board, joints are typically:", "Staggered between layers", "Aligned in both layers", "Taped only in the second layer", "Left open", "Staggering joints reduces cracking and sound and fire leaks."],
        ["How do you check if a corner is square using a 3-4-5 triangle?", "Measure 3 and 4 along the legs; the diagonal should be 5", "Measure 3 and 3 along the legs and check for equal sides", "Measure 5 and 5 along the legs and check the diagonal", "Check only with a level and skip the tape measure", "The 3-4-5 rule uses the Pythagorean theorem."],
        ["What is a header in a framed door opening?", "A horizontal member over the opening", "The track at the floor", "The door itself, hung from the frame", "A kind of screw used to hold the track in place", "Headers carry the load above the opening and the jack studs support it."],
        ["Metal lath used for plaster is most commonly:", "Expanded metal lath", "Wood lath nailed across the studs with gaps between", "Plastic mesh only, which is used for stucco", "Gypsum board with a paper face and a hard core", "Expanded metal gives a key for plaster."],
        ["Why use a laser for layout?", "Accurate lines over long distances and heights", "It cuts studs to length with a beam of light", "It replaces the drawings so none are needed on site", "It is cheaper than a tape in all cases", "Lasers speed accurate layout and ceiling levelling."],
        ["Which statement about lower gauge numbers of steel is correct?", "Lower gauge number means thicker steel", "Lower gauge number means thinner steel", "Gauge does not relate to thickness", "Gauge measures width", "Gauge numbers run inversely to thickness."],
        ["Why snap a line on the floor before installing track?", "Locates the wall and guides track installation", "To mark where paint goes after the board is hung", "To measure the ceiling height at each corner of the room", "To record the date the layout was completed", "Floor and ceiling lines locate the partition."],
        ["Why stop screws just below the paper face?", "Overdriving tears the paper and weakens holding", "Screws must be driven proud so the mud will cover them", "It makes the board lighter and easier to handle", "It keeps dust down while the board is being cut", "Properly set screws hold the board with unbroken paper."],
        ["A rated partition is generally built:", "To the underside of the deck above", "Only to the suspended ceiling, and not above it", "Only halfway up so the wall is easy to move later", "Without track, using only the studs and board", "Rated partitions are continued up to the deck unless a listed design says otherwise."],
        ["What does a 'plenum' space above a ceiling usually contain?", "Ducts, pipes, wiring, and sprinklers", "Only paint and other finishing supplies stored by the trades", "Fresh concrete poured on the metal deck above", "Tile samples that are kept for the next phase of work", "Services run in the ceiling space, so coordination matters."],
        ["Why fasten stud to track at both ends?", "Keeps studs in position and plumb", "To avoid cutting studs to length on the site", "To weld them together at the track after plumbing", "Only for appearance, as the studs do not move anyway", "Fasteners hold the stud in track until board is installed."]
      ]),
      3: Q(3, [
        ["A shaft wall assembly is generally used for:", "Elevator and stair shafts with fire ratings", "Interior closets and small storage rooms", "Suspended ceilings in office areas", "Exterior stucco walls on the outer face of a building", "Shaft wall can be built from one side using special core board."],
        ["Why fire-stop the head-of-wall joint?", "To keep fire and smoke from passing through the gap", "To hold up the wall so it can carry load", "To insulate the room against heat loss in winter", "To avoid having to cut the track to length on site", "Head-of-wall gaps at deflection tracks must be sealed with listed products."],
        ["Adding mineral wool in a stud cavity generally:", "Improves sound isolation", "Reduces the fire rating of the wall because it adds weight", "Has no effect on sound, only on temperature", "Stops water from passing through the wall from one side", "Absorbent fill reduces sound transmission."],
        ["Seismic splay wires in a suspended ceiling:", "Restrain the grid from moving sideways", "Hold up the tiles in the grid so they do not sag", "Replace the hanger wires over the whole area", "Seal fire gaps around the pipes that pass through", "Lateral bracing is required where the building code or design calls for it."],
        ["A non-load-bearing steel stud wall is designed to:", "Carry its own weight and lateral loads, not building loads", "Support the roof and the floors above as a bearing wall", "Hold up floors and the structure above the room", "Hold up a crane, a hoist, or other heavy equipment", "Non-structural framing is not allowed to carry building loads."],
        ["Why add blocking or backing in a wall before board goes up?", "To support heavy items such as cabinets and grab bars", "To make the wall lighter by taking out the studs", "To add fire rating to the whole wall assembly", "To avoid using screws when hanging the board", "Board alone cannot support heavy loads."],
        ["On cold-side walls in most Canadian heated buildings, the vapour barrier goes:", "On the warm side of the insulation", "On the cold side of the insulation, near the cladding", "Outside the cladding where it can be seen", "Nowhere, because the board is the only barrier", "Warm moist air must not reach cold surfaces, so the barrier faces the heated side."],
        ["NRC (noise reduction coefficient) of a ceiling tile measures:", "Sound absorption on a scale of 0 to 1", "Fire resistance on a scale of 0 to 1 hours", "Weight in kilograms per square metre", "Ceiling height in metres from the floor", "A higher NRC means more sound absorbed in the room."],
        ["CAC (ceiling attenuation class) relates to:", "Sound blocked between rooms through the ceiling", "Colour matching of tiles in a room", "Fire spread through the ceiling space", "Load capacity of the grid and the hangers", "CAC rates ceilings that sound can travel through."],
        ["How are radius walls built?", "With kerfed or slotted track that bends to the curve", "With wider studs only, bent by hand into a curve", "With welded joints between the track pieces", "With solid concrete poured in the track on site", "Slotted track follows the curve and is fastened to the layout."],
        ["How many 600 × 600 mm tiles are needed for a 6 m × 9 m room?", "150", "90 tiles, found by dividing 54 by 0.6", "120 tiles, found by dividing 54 by 0.45", "180 tiles, found by dividing 54 by 0.3", "54 m² ÷ 0.36 m² = 150 tiles. Add for cuts."],
        ["Where do you find wall types and ratings on drawings?", "In the partition type legend or schedule", "In the title block only, at the bottom right", "On the cover page of the drawing set", "In the electrical panel schedule", "Partition types list studs, boards, and ratings."],
        ["Why use a laser to transfer offset lines to the ceiling?", "Accurate alignment of track above with the floor line", "To cut studs on the ceiling track from above", "To check the wire gauge of the hanger wire", "To weigh the board before it is lifted", "Offsets reduce errors in layout."],
        ["Which tool installs the screws that hold stud to track in a hurry?", "Screw gun with a magazine", "A sledgehammer driven against the studs from the side", "A hand saw used to cut the screws to length", "A wet saw used to cut the track at the floor", "Collated screws speed up fastening."],
        ["The purpose of a control joint in a long partition or ceiling is:", "To relieve stress and prevent cracking", "To add sound transmission so the rooms are quieter", "To hold up the wall at the top and bottom", "To match the paint colour across the joint", "Control joints are placed per the design to reduce cracking."]
      ]),
      4: Q(4, [
        ["Why must a fire-rated wall follow the listed design exactly?", "The rating applies only to the tested and listed assembly", "Any assembly gives the same rating if it has the same thickness", "The rating depends on the paint applied to the surface", "Inspectors do not check it, so any variation is fine", "Listed designs specify board, studs, fasteners, and sealants."],
        ["You find suspect asbestos-containing material in an old ceiling. You should:", "Stop work and report it for testing and proper handling", "Remove it with a scraper and bag it for disposal", "Sweep it up quickly before anyone is exposed", "Cover it with new board and carry on with the work", "Asbestos work follows strict provincial rules."],
        ["How many 400 mm on-centre studs are needed for a 6 m straight wall, counting both ends?", "16", "15", "14", "12", "6000 ÷ 400 = 15 spaces, plus 1 = 16 studs. Add extra for openings."],
        ["Before closing in a wall with board, you should confirm:", "Service rough-in is inspected, firestopping and blocking are done", "Only that paint is on hand for the finishers", "That the ceiling is painted before the walls are closed in", "That the floors are sealed and the carpet has been ordered", "Boards cover services, so inspections and blocking come first."],
        ["Heavy fixtures and mechanical equipment in a ceiling should be:", "Supported independently from the structure", "Hung from the ceiling grid with extra hanger wire", "Rested on the tiles with a board to spread the weight", "Taped to wall angle at the perimeter of the room", "Grid is not designed for concentrated loads."],
        ["Which substrates are generally unsuitable for powder-actuated fasteners?", "Brittle materials such as cast iron, glazed tile, and hollow block", "Normal concrete of suitable thickness and strength", "Structural steel of suitable thickness", "Wood sleepers laid on a concrete slab", "Brittle or hardened materials can shatter."],
        ["A wall is bowed after studs are installed. A common cause is:", "Studs installed with inconsistent crown direction or poor track alignment", "Using the correct screws at the proper spacing", "Too many fasteners at each stud and track connection", "Level used correctly during the layout of the track", "Check straightness before closing and keep crown direction consistent."],
        ["For sound control, outlet boxes in an STC-rated wall should be:", "Sealed and not placed back-to-back", "Placed back-to-back in the same stud space", "Left open so the wiring can be seen by the inspector", "Cut oversized so the box can be moved later", "Penetrations and flanking paths reduce performance."],
        ["Why must a lift or scaffold operator be trained?", "Provincial rules require competence for safe use", "It is optional if the worker has used one before", "Only for the first week on a new site", "Only on weekends when the site is quiet", "Employers must ensure workers are trained for equipment."],
        ["How can you check that a framed opening is square?", "Measure both diagonals; they should be equal", "Measure one side of the opening only", "Use a tape across the top only, from stud to stud", "Check by eye only, from the doorway", "Equal diagonals indicate a rectangle."],
        ["What do splay wires add to a ceiling system?", "Lateral seismic restraint", "Fire rating, because the wires are steel", "Acoustic absorption, because they damp the grid", "Extra tile support, because they hold up the tiles", "They tie the grid to the structure at an angle."],
        ["Where fire-rated board is required for a rated ceiling, the grid:", "Must follow the listed design, including hold-down clips if specified", "Can be omitted if the board is thick enough", "Can be of any type as long as the tiles fit", "Is chosen by the painter based on the colour", "Listings may specify grid, tile, and clips."],
        ["Sequencing: why should overhead MEP work be coordinated before ceilings close?", "To avoid rework, clashes, and missed inspections", "To reduce the number of studs needed on the job", "To speed up the painting and the finishing work only", "It is not important, as the trades sort it out later", "Coordination reduces cost and delay."],
        ["600 mm is closest to what imperial dimension?", "24 in", "18 in", "30 in", "36 in", "600 ÷ 25.4 = 23.6 in, which is the 2 ft module."],
        ["The role of the interior systems mechanic's layout lines is to:", "Locate partitions accurately from the drawings", "Paint the walls so that the finish colours are known", "Mark the electrical panels and the conduit routes", "Weigh the materials and record the quantities needed", "Accurate layout keeps all later work in the right place."]
      ])
    },
    roadmapSteps: [
      { title: "Before you start", items: ["Confirm entry requirements and the trade's status in your province with your apprenticeship authority", "Get safety training employers ask for (commonly WHMIS, working at heights, and site orientation; requirements vary)", "Apply to union training centres (such as the Carpenters) and interior systems contractors", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
      { title: "Year 1: foundations", items: ["Learn site safety, PPE, ladders, and scaffolds", "Learn steel stud and track, fasteners, and tools", "Practise measuring, cutting, and basic layout", "Learn to hang board and set up ceiling grid", "Complete your first technical training block"] },
      { title: "Year 2: framing and ceilings", items: ["Lay out partitions from drawings with chalk line and laser", "Frame openings, bulkheads, and ceiling suspension systems", "Install board correctly and learn fastener rules", "Learn basics of sound and fire details"] },
      { title: "Year 3: assemblies and details", items: ["Build rated partitions and shaft walls to listed designs", "Install deflection track and firestopping", "Frame curved walls and install lath and plaster systems", "Learn seismic bracing and acoustic details"] },
      { title: "Year 4 and beyond: advanced", items: ["Plan and sequence work with other trades", "Estimate materials and troubleshoot layout errors", "Review asbestos, silica, and fall protection rules", "Mentor first-year apprentices"] },
      { title: "Certification", items: ["Confirm hours and school requirements with your authority", "Review the Red Seal trade profile if your province offers the exam and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
    ],
    glossary: [
      ["Acoustic ceiling tile", "A ceiling panel that absorbs sound."],
      ["Backing", "Added support behind board for fixtures and heavy items."],
      ["Bulkhead", "A lowered section of ceiling that hides services."],
      ["CAC", "Ceiling attenuation class, a rating of sound blocked through a ceiling."],
      ["Chalk line", "A string coated with chalk that snaps a straight line."],
      ["Control joint", "A break in the finish that relieves stress and cracking."],
      ["Cross tee", "A grid member that spans between main runners."],
      ["Deflection track", "Slotted track at a partition head that allows structure movement."],
      ["Firestop", "A listed material or system that seals openings against fire and smoke."],
      ["Furring channel", "A metal channel fastened to a wall or ceiling to hold board."],
      ["Gauge", "A number describing sheet steel thickness. A lower number is thicker."],
      ["Hanger wire", "Wire that suspends a ceiling grid from the structure above."],
      ["Header", "A horizontal framing member over an opening."],
      ["Jack stud", "A stud under a header that supports it."],
      ["Lath", "A base of metal or other material that plaster keys into."],
      ["Level", "Horizontal. Also the tool that shows it."],
      ["Main runner", "A primary grid member carried by hanger wires."],
      ["NRC", "Noise reduction coefficient, a measure of sound absorption."],
      ["Plenum", "The space above a ceiling that holds services."],
      ["Plumb", "Vertical."],
      ["Resilient channel", "A flexible channel that reduces sound transfer."],
      ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
      ["Shaft wall", "A fire-rated wall system built from one side for shafts."],
      ["STC", "Sound transmission class, a rating of airborne sound blocked by a wall."],
      ["Stud", "A vertical framing member placed between floor and ceiling track."],
      ["Track", "A U-shaped member at the top and bottom of a stud wall."],
      ["Wall angle", "Perimeter trim that supports the edge of a ceiling grid."],
      ["WHMIS", "Canada's workplace hazardous materials information system."]
    ],
    cards: [
      { front: "Common stud spacings", back: "400 mm (16 in) or 600 mm (24 in) on centre" },
      { front: "Snip handle colours", back: "Red cuts left, green cuts right, yellow cuts straight." },
      { front: "Purpose of deflection track", back: "Lets the structure above move without loading the studs." },
      { front: "Plumb versus level", back: "Plumb is vertical. Level is horizontal." },
      { front: "3-4-5 rule", back: "A triangle with sides 3, 4, and 5 has a right angle." },
      { front: "Ceiling grid module (metric)", back: "600 × 600 mm or 600 × 1200 mm" },
      { front: "Lower gauge number means", back: "Thicker steel" },
      { front: "Who may use a powder-actuated tool?", back: "Only trained and certified users." },
      { front: "Where does a rated wall go?", back: "To the underside of the deck above, unless a listed design says otherwise." }
    ],
    jobsIntro: "Look for interior systems and drywall contractors, union and signatory carpentry contractors, ceiling and acoustic specialists, general contractors, and commercial renovation firms.",
    tips: ["Bring a short resume, your safety tickets, and ID.", "Show you can follow drawings and are comfortable working at heights with training.", "Visit shops and union training centres in person when you can, and follow up.", "Ask what tools you need and what the employer supplies."],
    forumTopics: ["Starting out", "Steel stud and ceiling layout", "Fire and sound assemblies", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference: [
      {
        title: "Steel stud thickness (approximate)",
        intro: "Gauge numbers run opposite to thickness: a lower gauge number is thicker. Mil designation is thousandths of an inch.",
        table: {
          head: ["Gauge", "Mil", "Approx. thickness (mm)"],
          rows: [["25", "18", "0.46"], ["22", "27", "0.69"], ["20", "33", "0.84"], ["18", "43", "1.09"]]
        },
        note: "Values are design thicknesses. Always check the manufacturer's data and the drawings."
      },
      {
        title: "Layout and geometry",
        list: [
          "Stud count = wall length ÷ spacing + 1, plus extra for openings and corners",
          "Right triangle: c² = a² + b². A 3-4-5 triangle gives a right angle",
          "Square check: both diagonals are equal in a rectangle",
          "Area = length × width. A 1200 × 2400 mm sheet covers 2.88 m²",
          "Ceiling tiles needed = room area ÷ tile area, plus an allowance for cuts"
        ]
      },
      {
        title: "Conversions",
        list: [
          "1 in = 25.4 mm, and 1 ft = 304.8 mm",
          "8 ft = 2438 mm, and 4 ft = 1219 mm (the 1200 mm sheet width)",
          "16 in is about 406 mm, and 24 in is about 610 mm",
          "1 m² ≈ 10.76 sq ft",
          "Ladder angle: 1 m out for every 4 m of height (4:1)"
        ]
      },
      {
        title: "Ceiling grid parts",
        table: {
          head: ["Part", "Job"],
          rows: [
            ["Hanger wire", "Suspends the grid from the structure"],
            ["Main runner", "Primary support carried by hangers"],
            ["Cross tee", "Spans between main runners to form the module"],
            ["Wall angle", "Perimeter trim for the grid edge"],
            ["Splay wire", "Lateral restraint where required for seismic design"]
          ]
        },
        note: "Grid spacing and hanger layout come from the specification and the manufacturer's installation instructions."
      },
      {
        title: "Wall performance terms",
        list: [
          "STC: airborne sound reduction of a wall or floor. Higher is better",
          "NRC: sound absorption of a surface from 0 to 1",
          "CAC: sound blocked through a ceiling between rooms",
          "Fire-resistance rating: time in hours an assembly passes a standard test, such as CAN/ULC-S101",
          "Flanking paths (gaps, ducts, back-to-back boxes) reduce the performance of the wall"
        ]
      },
      {
        title: "Standards and code pointers",
        list: [
          "National Building Code of Canada: fire resistance, sound transmission, and fire stopping provisions",
          "CAN/ULC-S101: fire endurance tests of building construction and materials",
          "CSA A82.31 (gypsum board application) and A82.30 (furring, lathing, plastering). Confirm current editions",
          "ASTM C645 (non-structural steel framing members) and C754 (installation of steel framing) are commonly referenced",
          "Provincial regulations cover powder-actuated tool training, fall protection, and asbestos"
        ],
        note: "Your province may call up different editions. Confirm with your instructor and authority."
      }
    ]
  });
}
