// Carpenter guide. Practice questions are original study aids, not official Red Seal exam questions.

const carpQ = (() => {
  let n = 0;
  return (q, right, wrong, explain) => {
    const pos = (n * 3 + (n >> 2)) % 4;
    n += 1;
    const options = wrong.slice();
    options.splice(pos, 0, right);
    return { q, options, answer: pos, explain };
  };
})();

const carpYt = (s) => "https://www.youtube.com/results?search_query=" + s;
const carpNote = "Professional-grade tools that hold up on site. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.";

registerTrade({
  introVideo: { id: "k1245RVG_-4", title: "Intro video: Carpenter" },
  id: "carpenter",
  store: "carpenter",
  title: "Carpenter",
  name: "Carpenter",
  short: "carpentry",
  category: "Construction · Wood framing · Formwork · Finish",
  summary: "Carpenters lay out, cut, assemble, and install wood and other materials to build frames, forms, stairs, roofs, and finishes for homes, commercial buildings, and industrial projects.",
  work: "Carpenters read drawings, lay out and build structures such as floors, walls, roofs, stairs, concrete forms, and interior finish. Work is physical and mostly on active sites, outdoors in all seasons. The trade ranges from residential framing to commercial formwork and interior systems.",
  duration: "Usually 3–4 years (Job Bank), varies by province",
  union: "United Brotherhood of Carpenters and provincial carpenters' locals",
  unionUrl: "https://www.carpenters.org/",
  profileUrl: "https://red-seal.ca/eng/trades/carpenter.shtml",
  durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/6388/ca",
  jobSearch: "carpenter apprentice",
  journeySearch: "carpenter",
  aliases: "framer framing finish carpenter formwork form carpenter stairs roofing rough carpenter millwork woodworker builder construction",
  tools: ["Tape measure and speed square", "Framing hammer and chalk line", "Level (600 mm and 1.2 m)", "Circular saw and cordless drill", "Utility knife and layout pencils", "CSA boots, hard hat, eye and ear protection"],
  insight: {
    skills: ["Reading drawings and laying out", "Accurate measuring and cutting", "Framing math: slopes, stairs, squaring", "Working safely at heights"],
    hazards: ["Falls: use guardrails or fall arrest as the plan requires", "Saw kickback: support work and keep guards working", "Nail guns: keep fingers off the trigger and never bypass safeties", "Dust and noise: wear respirator and hearing protection"],
    settings: ["Residential and commercial framing crews", "Concrete formwork contractors", "Finish, trim, and renovation companies", "Union and non-union construction sites"]
  },
  toolGroups: [
    {
      title: "Day-one tools, buy once and buy well",
      note: carpNote,
      items: [
        { name: "Stanley FatMax or Milwaukee 7.5 m (25 ft) tape measure", why: "A stiff, wide blade stands out far and reads clearly in metric and imperial. You will use it all day.", search: "Stanley FatMax Milwaukee 25 ft tape measure metric" },
        { name: "Swanson or Empire 7 in rafter speed square", why: "Layout of square cuts, 45° lines, and rafter angles. Aluminum with clear stamped markings lasts.", search: "Swanson 7 inch speed square rafter" },
        { name: "Estwing or Stiletto 20 to 22 oz framing hammer", why: "A balanced, milled-face or smooth-face hammer for framing and pulling nails, with a shock-reducing grip.", search: "Estwing 22 oz framing hammer" },
        { name: "Irwin Strait-Line chalk line reel", why: "Sharp straight lines over long distances for layout, sheathing, and cutting. Keep spare chalk handy.", search: "Irwin Strait-Line chalk reel" },
        { name: "Stabila or Empire 600 mm and 1200 mm box levels", why: "Accurate, impact-resistant vials for plumbing walls and levelling floors. Check accuracy by flipping the level.", search: "Stabila 24 inch 48 inch box level" },
        { name: "Utility knife with spare blades", why: "Scoring sheet goods, trimming shims, and opening materials. A fresh blade is a safer blade.", search: "Olfa Milwaukee utility knife retractable blades" },
        { name: "Flat carpenter pencils and a fine-tip marker", why: "Flat pencils do not roll off a plate and give a visible line on rough lumber.", search: "carpenter pencils Markal paint marker" },
        { name: "Nail apron or tool belt and suspenders", why: "Keeps hammer, tape, and fasteners in reach and spreads weight off your hips.", search: "Occidental Leather nail bag tool belt suspenders" },
        { name: "CSA-approved safety boots, hard hat, safety glasses, hearing protection, and gloves", why: "Look for the CSA Z195 green triangle on boots, Z94.1 on hard hats, Z94.3 on eye protection, and Z94.2 on hearing protection. Comfortable gear is gear you will wear.", search: "CSA safety boots green triangle Z94.1 hard hat Z94.3 safety glasses earmuffs" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites and which battery platform your crew uses.",
      items: [
        { name: "Milwaukee, DeWalt, or Makita 18V cordless circular saw (6-1/2 in or 7-1/4 in)", why: "Cuts framing lumber and sheathing without a cord. Match the battery to your drill and impact driver.", search: "18V cordless circular saw 7-1/4 inch Milwaukee DeWalt Makita" },
        { name: "18V drill and impact driver combo", why: "Drilling, driving structural screws, and fastening hangers. Buy spare batteries.", search: "18V drill impact driver combo kit" },
        { name: "Cordless framing nailer (or pneumatic) with air compressor, if employer does not supply", why: "Speeds framing and sheathing. Training on safe nail gun use comes first.", search: "Milwaukee cordless framing nailer 21 degree" },
        { name: "Sliding or fixed compound mitre saw (10 in or 12 in)", why: "Accurate crosscuts and angles for trim and framing. Often shared on site, but useful to own.", search: "12 inch sliding compound mitre saw DeWalt Makita" },
        { name: "Framing square and rafter table (Stanley or Swanson)", why: "A steel square for stair stringers, rafters, and checking corners.", search: "steel framing square 24 inch rafter table" },
        { name: "Cat's paw, flat bar, and wonder-bar style pry bars", why: "Pulling nails and prying framing apart without wrecking the rest of the assembly.", search: "Stanley FuBar Estwing pry bar cat's paw" },
        { name: "Wood chisels (6, 12, 19, 25 mm) and a block plane", why: "Fitting hinges, trimming doors, and tuning joints on finish work.", search: "Narex Irwin wood chisel set block plane Stanley" },
        { name: "Combination square and sliding bevel", why: "Marking square lines and copying angles for stairs, roofs, and trim.", search: "Starrett Empire combination square sliding bevel" },
        { name: "Heavy-duty tool bag or tool box with tote", why: "Keeps hand tools organized and dry on site.", search: "Veto Pro Pac tool bag Milwaukee Packout" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying.",
      items: [
        { name: "Self-levelling rotary laser or line laser (Bosch, Leica, DeWalt)", why: "Sets levels for floors, forms, and footings quickly. Usually company-supplied.", search: "Bosch rotary laser level DeWalt line laser" },
        { name: "Builder's level or transit with tripod and rod", why: "Shooting grades and elevations on larger projects, common on formwork.", search: "automatic builders level tripod grade rod" },
        { name: "Track saw and guide rail", why: "Straight, clean sheet-good cuts for cabinets, stair parts, and finish work.", search: "Makita Festool track saw guide rail" },
        { name: "Router with straight and roundover bits", why: "Trimming laminate, cutting hinge mortises, and edge profiles in finish work.", search: "Bosch Makita router combo kit roundover bit set" },
        { name: "Full-body harness and shock-absorbing lanyard (CSA Z259.10)", why: "Normally supplied by the employer. Fall protection training must come before use.", search: "3M DBI-SALA full body harness CSA Z259.10" },
        { name: "Moisture meter for lumber and sheathing", why: "Checks that framing is dry enough to be closed in. Pin-type meters are common.", search: "Wagner Extech pin moisture meter lumber" },
        { name: "Pneumatic or cordless finish and brad nailers", why: "Trim, casing, and baseboard installation without hammer marks.", search: "finish nailer 16 gauge brad nailer 18 gauge" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for drawings, framing math, and code study. Check with your school and exam body about calculator rules before you buy.",
      items: [
        { name: "Mechanical pencil (0.5 mm) with HB and 2H leads", why: "Fine lines for sketching framing layouts and stairs.", search: "Pentel GraphGear 0.5mm mechanical pencil HB 2H lead" },
        { name: "Scientific calculator (Casio fx-991 or TI-30XS), ideally with a fraction function", why: "Trig for roof pitch and stairs, plus feet-inches-fractions conversions.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Construction Master or similar feet-inch-fraction calculator", why: "Speeds up stair, rafter, and takeoff math. Check whether your school allows it.", search: "Calculated Industries Construction Master Pro" },
        { name: "Architect's scale and engineer's scale", why: "Reading plans at 1/4 in = 1 ft and metric scales like 1:50 and 1:100.", search: "architect scale ruler metric imperial triangular" },
        { name: "Drafting triangles, protractor, and 12 in steel ruler", why: "Clean lines for roof, stair, and wall section sketches.", search: "Staedtler drafting triangle set protractor" },
        { name: "National Building Code of Canada or your provincial building code", why: "Part 9 houses and small buildings is the one you will use most. Confirm which edition your province uses.", search: "National Building Code of Canada book" },
        { name: "Field notebook (Rite in the Rain) and graph paper", why: "Weatherproof notes, measurements, and sketches that survive site conditions.", search: "Rite in the Rain field notebook graph paper" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic for Red Seal exam review.", search: "binder dividers highlighters" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work, the Carpenter trade profile, and how to prepare.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Codes Canada (National Building Code)", desc: "The model national code that provincial building codes are based on.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Plain-language safety sheets on ladders, noise, dust, and manual handling.", url: "https://www.ccohs.ca/" },
        { name: "Canadian Wood Council", desc: "Wood design and building information, including CSA O86 wood design.", url: "https://cwc.ca/" },
        { name: "Canadian Home Builders' Association", desc: "Residential construction industry information and resources.", url: "https://www.chba.ca/" },
        { name: "United Brotherhood of Carpenters", desc: "Union carpenter training and apprenticeship information.", url: "https://www.carpenters.org/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local codes.",
      items: [
        { name: "Wall framing basics", desc: "Plates, studs, headers, and layout of a framed wall.", url: carpYt("wall+framing+basics+carpenter+headers+king+jack+studs") },
        { name: "Roof framing and rafter layout", desc: "Pitch, birdsmouth, and common rafter cuts.", url: carpYt("roof+framing+common+rafter+layout+birdsmouth") },
        { name: "Stair stringer layout", desc: "Rise, run, and stringer layout with a framing square.", url: carpYt("stair+stringer+layout+rise+run+framing+square") },
        { name: "Framing square tricks", desc: "Using the framing square and speed square for angles and layout.", url: carpYt("speed+square+framing+square+carpentry+layout") },
        { name: "Concrete formwork basics", desc: "Wall and footing forms, bracing, and form ties.", url: carpYt("concrete+formwork+basics+wall+forms+bracing") },
        { name: "Window and door installation", desc: "Flashing, shimming, and plumbing a window or door.", url: carpYt("window+installation+flashing+carpenter+shimming") },
        { name: "Nail gun safety", desc: "Safe use of framing nailers and avoiding accidental discharge.", url: carpYt("nail+gun+safety+framing+construction") },
        { name: "Fall protection on construction sites", desc: "Harness inspection, anchors, and guardrails.", url: carpYt("fall+protection+construction+harness+anchor+canada") }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for carpentry yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: carpenter apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: carpYt("carpenter+apprentice+podcast") }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: framing and building science talk", desc: "Wall assemblies, air barriers, and moisture in houses.", url: carpYt("building+science+podcast+wall+assembly+air+barrier") },
        { name: "YouTube: carpentry tips and stories (audio)", desc: "Job-site lessons and problem solving from working carpenters.", url: carpYt("carpenter+podcast+tips+stories+framing") },
        { name: "YouTube: concrete forming talk", desc: "Formwork planning, safety, and stripping, to listen to while commuting.", url: carpYt("concrete+forming+carpenter+podcast") }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, estimating, and leadership.",
      items: [
        { name: "YouTube: Red Seal carpenter exam prep (talk-through)", desc: "Study talks you can listen to while commuting.", url: carpYt("Red+Seal+carpenter+exam+preparation") },
        { name: "YouTube: construction estimating and running a crew podcast", desc: "Takeoffs, scheduling, and leading a framing or finishing crew.", url: carpYt("construction+estimating+carpentry+business+podcast") },
        { name: "YouTube: mentoring apprentices on site", desc: "Leadership and training skills for new journeypersons.", url: carpYt("skilled+trades+leadership+mentoring+apprentices+podcast") }
      ]
    }
  ],
  practiceBank: {
    1: [
      carpQ("What does the green triangle on CSA-approved safety boots indicate?", "A puncture-resistant sole", ["Electrical shock resistance", "Waterproof construction", "A slip-resistant tread"], "The green triangle marks Grade 1 sole puncture protection under CSA Z195 for nails and similar hazards."),
      carpQ("What are the actual dimensions of nominal 2x4 framing lumber?", "About 38 x 89 mm", ["50 x 100 mm", "45 x 90 mm", "25 x 75 mm"], "Dressed softwood lumber is smaller than its nominal name: 1-1/2 x 3-1/2 in, or about 38 x 89 mm."),
      carpQ("A standard 4 x 8 ft sheet of plywood or OSB is about:", "1220 x 2440 mm", ["1000 x 2000 mm", "1200 x 2400 mm (exactly 4 x 8 in)", "1500 x 3000 mm"], "A 4 x 8 ft panel is 1219 x 2438 mm, commonly listed as 1220 x 2440 mm."),
      carpQ("Using the 3-4-5 method, a triangle with sides of 900 mm and 1200 mm is square when the diagonal measures:", "1500 mm", ["1400 mm", "2100 mm", "1300 mm"], "900² + 1200² = 2,250,000, and the square root is 1500 mm."),
      carpQ("How many sections does a WHMIS 2015 Safety Data Sheet (SDS) have?", "16", ["8", "12", "20"], "WHMIS SDSs follow a 16-section format. Check section 4 for first aid and section 8 for exposure controls and PPE."),
      carpQ("What is the best way to avoid saw kickback with a circular saw?", "Support the work so the cut stays open and the blade does not bind", ["Cut with a dull blade so the saw runs slower through the wood", "Remove the lower guard for better visibility of the line", "Force the saw through faster so the blade does not stall"], "Binding or pinching the blade causes kickback. Support both sides and keep the guard working."),
      carpQ("Why does the hook on a tape measure slide slightly?", "To compensate for the thickness of the hook on inside and outside measurements", ["To allow the tape to lock in place when it is extended", "Because the rivets are worn out and the hook needs replacing", "To make the tape retract faster into the case after a measurement"], "The loose rivets let the hook move by its own thickness so readings stay accurate."),
      carpQ("What is the usual ladder rule for a safe angle?", "The base is 1 m out for every 4 m of height (4:1)", ["The base is directly under the top so the ladder is vertical", "The base is 1 m out for every 1 m of height", "Any angle is fine if the feet are tied off at the bottom"], "A 4:1 angle balances stability and slip risk. Also extend the ladder about 1 m above a landing and tie it off."),
      carpQ("In most Canadian jurisdictions, the occupational noise limit for an 8-hour day is about:", "85 dBA", ["65 dBA, about the level of normal speech", "105 dBA, about the level of a loud power tool", "120 dBA, about the threshold of pain"], "85 dBA is the common 8-hour exposure limit. Wear hearing protection around saws, compressors, and nailers."),
      carpQ("On a hard hat marked Class E, the electrical rating means it was tested to:", "20,000 volts", ["2,200 volts, the rating of a Class G hat", "No electrical rating, as that applies to Class C only", "600 volts, the rating for typical building wire"], "CSA Z94.1 Class E is 20,000 V, Class G is 2,200 V, and Class C gives no electrical protection."),
      carpQ("A wall frame is checked for square by:", "Measuring both diagonals and confirming they are equal", ["Measuring one diagonal only and comparing it to the wall length", "Checking that studs are 400 mm apart along the plate", "Using a plumb bob on the top plate at each corner"], "A rectangle has equal diagonals only when its corners are square."),
      carpQ("Stud spacing of 16 in on centre is expressed in metric as:", "400 mm on centre", ["300 mm on centre (about 12 in)", "450 mm on centre (about 18 in)", "600 mm on centre (about 24 in)"], "Canadian metric framing layouts use 400 mm and 600 mm o.c. in place of 16 in and 24 in."),
      carpQ("To lift a heavy bundle of lumber safely, you should:", "Keep the load close, bend your knees, and get help when needed", ["Twist at the waist while lifting so you can turn toward the stack", "Lift with a rounded back and straight arms to save time on each lift", "Carry it on one shoulder above head height"], "Lifting close to the body with a neutral spine reduces back strain."),
      carpQ("A fall arrest lanyard should be attached to:", "An anchor point rated and approved for fall arrest", ["A guardrail that is nailed to the deck edge", "A temporary extension cord run overhead", "A plywood sheet edge at the roof perimeter"], "Only an approved anchor point, designed for fall arrest loads, will hold. Guardrails and cords will not."),
      carpQ("Which standard covers fall arrest harnesses in Canada?", "CSA Z259 series", ["CSA Z94.2 (hearing protection devices)", "CSA O86 (engineering design in wood)", "CSA A23.1 (concrete materials and methods)"], "The CSA Z259 series covers fall arrest equipment. Z94.2 is hearing protection, O86 wood design, and A23.1 concrete."),
      carpQ("Before using an extension cord on site, you should:", "Check that it is undamaged, rated for the tool, and a grounded type", ["Remove the ground pin to fit the outlet if it is a two-prong plug", "Run it through a doorway and close the door on it to keep it out of the way", "Splice damaged sections with tape to get through the day"], "Damaged or ungrounded cords are an electrocution and fire risk.")
    ],
    2: [
      carpQ("When installing floor joists, which way should the natural crown face?", "Up", ["Down, so the load pushes it flat", "Sideways, so it lies along the wall", "It does not matter, since the subfloor straightens it"], "Crown up lets the load flatten the joist over time instead of increasing the sag."),
      carpQ("In a framed wall opening, what carries the end of the header down to the plate?", "Jack (trimmer) studs", ["Cripple studs above and below the opening", "Blocking between the studs", "Sill plates at the bottom of the opening"], "Jack studs sit beside the king studs and support the header ends."),
      carpQ("A rough opening is made larger than the door or window unit so that you can:", "Plumb, level, shim, and insulate the unit", ["Avoid using a header since the unit carries the load above it", "Hide structural defects behind the trim of the unit", "Skip flashing since the gap is filled with insulation"], "The gap lets the unit be set square and shimmed. Check the manufacturer's recommended rough opening."),
      carpQ("A 6:12 roof pitch is closest to an angle of:", "26.6°", ["22.5°, close to a 5:12 pitch", "45°, which is a 12:12 pitch", "30°, which is about a 7:12 pitch"], "The angle is arctan(6/12) = 26.57°."),
      carpQ("A common rafter has a run of 3 m on a 12:12 roof. About how long is the rafter along the slope?", "4.24 m", ["3.00 m, which is the run itself", "3.50 m, a rough guess for a 12:12 roof", "6.00 m, double the run"], "At 12:12 the length factor is 1.414, so 3 m x 1.414 = 4.243 m, before ridge and tail allowances."),
      carpQ("The birdsmouth on a rafter is:", "A notch that sits on the top plate", ["The tail cut at the eave end of the rafter", "The ridge cut where the rafters meet the ridge board", "The collar tie joint near the top of the rafter"], "It combines a plumb cut and a level seat cut so the rafter bears on the plate."),
      carpQ("About how much gap is left at the edges of subfloor panels for expansion?", "About 3 mm (1/8 in)", ["No gap at all, so the panels butt tightly", "About 25 mm, as for a wide expansion joint", "About 13 mm (1/2 in)"], "Panels swell with moisture, so a small gap prevents buckling."),
      carpQ("Subfloor panels should be laid with the strength axis:", "Perpendicular to the joists, with end joints staggered", ["Parallel to the joists, with end joints staggered", "At 45° to the joists, with end joints staggered", "Random, with all joints lined up on the same joist"], "The panel's strong direction spans across supports, and staggered joints avoid a continuous weak line."),
      carpQ("A flight of stairs has a total rise of 2700 mm and 15 equal risers. Each riser is:", "180 mm", ["150 mm, from dividing by 18 risers", "190 mm, from dividing by about 14 risers", "200 mm, from dividing by 13.5 risers"], "2700 mm / 15 = 180 mm. There is always one fewer tread than risers in a straight flight."),
      carpQ("How many board feet are in a nominal 2 x 6 x 12 ft piece?", "12", ["6, from using the width of the piece only", "10, from counting only the length in metres", "24, from forgetting to divide by 12"], "Board feet = thickness (in) x width (in) x length (ft) / 12 = 2 x 6 x 12 / 12 = 12."),
      carpQ("A lumber stamp reading S-DRY means the wood was:", "Surfaced at 19% moisture content or less", ["Surfaced green, with no drying before planing", "Dried to exactly 12% in a kiln before shipping", "Treated with preservative to resist decay"], "S-Dry lumber has a maximum moisture content of 19% when surfaced."),
      carpQ("A rule of thumb for nail length is to choose a nail about:", "Three times the thickness of the piece being fastened", ["Equal to the thickness of the piece being fastened", "Twice as long as the board is wide", "The shortest nail available so it does not split the wood"], "A nail about three times the board thickness gives roughly two-thirds penetration into the second member."),
      carpQ("Wood in direct contact with a concrete foundation or slab should be:", "Preservative-treated or separated by a damp-proof barrier or sill gasket", ["Painted only, with two coats of an oil-based primer", "Left bare, since dry wood does not rot", "Wrapped in building paper only, with the edges left open"], "Moisture wicking from concrete can cause rot, so isolate or use treated wood."),
      carpQ("Form release agent is applied to concrete forms to:", "Let the forms strip cleanly and reduce surface damage", ["Speed up curing so the forms can come off sooner", "Make the concrete stronger at the surface", "Seal the form against water leaking through the joints"], "Without it, concrete can bond to the form face and damage the surface when stripped."),
      carpQ("Scaffolds must be erected, altered, and dismantled by or under:", "A competent, trained person following the manufacturer and CSA S269.2", ["Any available worker who has been on site the longest", "The first person on site who has used a scaffold before", "The material supplier only, with no site supervision"], "Training and the designer's instructions are required for safe scaffolds."),
      carpQ("A plumb bob or a level is used to check that a wall is:", "Vertical", ["Horizontal, which is checked with a level only", "Warped, which is checked with a straightedge", "Square to a diagonal, which needs a tape"], "Plumb means exactly vertical, following gravity."),
      carpQ("The wood shrinks the most as it dries:", "Around the growth rings (tangentially)", ["Along the length of the board, from end to end", "Equally in all directions, as wood is uniform", "Only at the knots, where the grain is dense"], "Tangential shrinkage is largest, then radial, with very little along the length.")
    ],
    3: [
      carpQ("The purpose of an air barrier in a wall assembly is to:", "Limit uncontrolled air leakage through the assembly", ["Carry structural loads from the roof to the walls", "Replace the insulation in the wall assembly", "Support the siding and hold up the exterior finish"], "Air leakage moves heat and moisture. The air barrier must be continuous and well sealed."),
      carpQ("In a cold Canadian climate, the vapour barrier is normally placed:", "On the warm (interior) side of the insulation", ["On the exterior of the sheathing, facing the cladding", "Between the studs and sheathing only, on the cold side", "Wherever is easiest for the crew during framing"], "Placing it on the warm side limits moisture moving into the wall in winter."),
      carpQ("Polyethylene sheet used as a vapour barrier in typical house walls is commonly at least:", "0.15 mm (6 mil)", ["0.015 mm (0.6 mil), like a thin film", "1.5 mm (60 mil), like a roofing membrane", "5 mm (200 mil), like a rubber mat"], "0.15 mm polyethylene is the common minimum. Confirm with your code."),
      carpQ("When installing flashing and building paper, laps should be:", "Shingle-fashion, with the upper layer over the lower", ["Lower layer over the upper, so water runs into the laps", "Butted with no overlap so the sheets lie flat", "Taped on the outside only, with the upper edge left open"], "Upper-over-lower laps shed water outward."),
      carpQ("Self-adhering ice and water membrane at roof eaves is used to:", "Protect against ice damming and wind-driven water", ["Hold the shingles on during high winds and heavy rain", "Replace the roof deck at the eaves", "Ventilate the attic through the eave soffit"], "It seals around nails and resists water backing up under shingles."),
      carpQ("Thermal bridging in a wood-framed wall is mostly caused by:", "Studs and plates conducting more heat than the insulation", ["Too much insulation packed into the stud cavity", "Having a vapour barrier on the warm side", "Using sheathing on the exterior of the studs"], "Framing members carry heat more easily than insulation does. Continuous exterior insulation reduces the effect."),
      carpQ("An insulation value of R-20 is approximately:", "RSI 3.5", ["RSI 20, the same number as the R value", "RSI 1.1, which is about R-6", "RSI 0.35, which is about R-2"], "RSI = R / 5.678, so R-20 is about RSI 3.5."),
      carpQ("Fireblocking in wood-framed walls is installed to:", "Slow fire spreading through concealed spaces", ["Support the drywall at the edges and corners", "Provide an air barrier across the wall", "Prevent wood shrinkage in the top plate"], "Blocking at required locations limits vertical and horizontal spread through cavities."),
      carpQ("Openings in a residential guard are generally limited so that:", "A 100 mm sphere cannot pass through", ["A 25 mm sphere cannot pass through", "A 300 mm sphere cannot pass through", "A person's arm cannot reach through the opening"], "Guard openings are sized to protect children. Confirm the exact requirement in your code."),
      carpQ("Which cut on a floor joist is the most damaging?", "A notch in the bottom edge near mid-span", ["A joist hanger nailed as specified at the end of the joist", "A bead of subfloor adhesive along the top edge", "Bridging installed between joists at mid-span"], "The bottom edge is in tension at mid-span, so notching there greatly reduces strength."),
      carpQ("When cutting holes in engineered I-joists you should:", "Follow the manufacturer's hole chart and never cut the flanges", ["Cut anywhere you need as long as the hole is round", "Notch the flanges to fit pipe or duct runs", "Drill holes in the bearing area to pass a wire"], "I-joist webs can be penetrated only within listed sizes and locations."),
      carpQ("On a 1:50 drawing, a 40 mm line represents:", "2000 mm", ["400 mm, from multiplying by 10", "4000 mm, from multiplying by 100", "90 mm, from adding 50 to the length"], "1:50 means 1 unit on paper equals 50 units in real life: 40 x 50 = 2000 mm."),
      carpQ("A deck ledger attached to a house should be:", "Flashed and fastened with the bolts or screws required by the code", ["Nailed with common nails only, in a single row", "Left unflashed so the water can drain behind it", "Attached only to the siding, with long nails"], "Ledger failures are a major cause of deck collapses. Use approved fasteners and flashing."),
      carpQ("A detail drawing is used to show:", "A small area enlarged to show construction", ["The whole site with property lines and grades", "A list of materials only, with quantities", "The schedule of doors and windows"], "Details show how components connect, such as a window head or footing."),
      carpQ("Wall bracing and sheathing help a house resist:", "Racking from wind and seismic loads", ["Foundation settlement only, under uneven soil", "Heat loss through the wall assembly", "Plumbing noise through the walls"], "Sheathing nailed properly provides shear resistance."),
      carpQ("A header over a wide opening transfers the load to:", "The jack studs, then to the foundation", ["Only the sheathing on the outside of the wall", "The drywall on the inside of the wall", "The siding and the exterior trim"], "Loads travel in a continuous path from header to jack studs to supporting framing to foundation."),
      carpQ("When fastening pressure-treated lumber outdoors, you should use:", "Fasteners rated for treated wood, such as hot-dip galvanized or stainless", ["Plain bright steel nails, since they are cheaper", "Electroplated drywall screws, which resist corrosion indoors", "Staples only, driven with a pneumatic stapler"], "Modern preservatives are corrosive to unprotected steel."),
      carpQ("What does a stud finder or a magnet help locate in a finished wall?", "Framing members or fasteners behind the surface", ["Water pipes by flow, from the sound of the water", "Air leaks around the windows", "Wall colour behind the paint layer"], "They help locate studs for fastening cabinets or fixtures, but still check for hidden services.")
    ],
    4: [
      carpQ("Before cutting or notching a roof truss member, you should:", "Never alter it without approval from the truss engineer or manufacturer", ["Cut it if it is in the way, as long as you add a nailed scab", "Drill any size hole that is needed to pass a pipe or wire", "Remove the web to fit a duct, then nail a board across it"], "Trusses are engineered. Alterations can cause failure."),
      carpQ("The unit run of a hip or valley rafter for each 12 in of common run is about:", "16.97 in", ["12 in, the same as the common run", "14.14 in, the unit length of a 12:12 common rafter", "20.78 in, a figure from a steeper pitch"], "Hip rafters run on the diagonal of a square: 12 x 1.414 = 16.97 in."),
      carpQ("A common rafter has a run of 4 m and a rise of 3 m. Its length along the slope is:", "5 m", ["3.5 m, the average of the run and rise", "7 m, the sum of the run and rise", "4.5 m, a rough guess from the run"], "√(4² + 3²) = 5 m. This is a 3-4-5 triangle."),
      carpQ("A 6 m x 8 m floor needs panels measuring 1220 x 2440 mm. Without waste, how many whole sheets must be ordered?", "17", ["16, from rounding the exact count down", "15, using 3.2 m² per sheet", "20, adding a waste allowance"], "48 m² / 2.977 m² = 16.1 sheets, so 17 whole sheets are the minimum before waste."),
      carpQ("To lay out a building accurately, batter boards and strings are squared by:", "Matching diagonals and checking with a 3-4-5 or laser", ["Eyeballing the corners from the opposite end of the site", "Matching only the long sides of the layout", "Using the roof pitch to find the building angle"], "Equal diagonals confirm square, and a level or laser checks elevations."),
      carpQ("Before enclosing wall cavities, framing lumber should be at about:", "19% moisture content or less", ["30% moisture content, as it comes from the mill", "50% moisture content, as in freshly cut logs", "Fully saturated, as after a heavy rain"], "Closing in wet lumber can trap moisture and cause mould or shrinkage problems."),
      carpQ("Which CSA standard covers engineering design in wood?", "CSA O86", ["CSA Z94.3 (eye and face protectors)", "CSA G30.18 (steel reinforcing bars)", "CSA A23.1 (concrete materials and methods)"], "O86 is the wood design standard. G30.18 covers reinforcing bar."),
      carpQ("Which CSA standard covers concrete formwork?", "CSA S269.3", ["CSA S269.2 (access scaffolding)", "CSA Z195 (protective footwear)", "CSA O141 (softwood lumber)"], "S269.3 is for concrete formwork. S269.2 covers scaffolding."),
      carpQ("Concrete formwork is stripped when:", "The concrete has gained the strength set by the specification or engineer", ["The next day, always, regardless of the weather or mix", "When the forms look dry on the outside", "As soon as the crew has time to move on to the next pour"], "Stripping early can cause collapse or damage. Follow the specified strength and reshoring rules."),
      carpQ("Deflection limits for floors are often expressed as span divided by:", "360 (L/360)", ["10 (L/10), a very loose limit", "50 (L/50), a limit for rough sheds", "2000 (L/2000), a limit for precision machinery"], "L/360 is a common live load deflection limit. Check the code or engineering design."),
      carpQ("A Job Hazard Analysis (JHA) is used to:", "Identify hazards and controls before starting a task", ["Order the materials needed for the task from the supplier", "Pay workers for the hours spent on the task", "Schedule inspections of the finished work"], "A JHA lists steps, hazards, and controls so the crew can work safely."),
      carpQ("In every Canadian jurisdiction, workers have which three basic rights?", "To know, to participate, and to refuse unsafe work", ["To be paid weekly, to strike, and to retire", "To choose their tools, hours, and pay", "To inspect, sue, and appeal"], "These rights underpin the Internal Responsibility System. Your province sets the process."),
      carpQ("Footings must be placed:", "Below the frost depth, on undisturbed or properly compacted soil", ["Anywhere on topsoil that has been raked level and is free of stones", "On frozen ground, since it is solid", "On loose backfill that has been raked flat"], "Frost heave or settlement damages the structure. Frost depth varies by region."),
      carpQ("A framing inspection is normally done:", "After framing and rough services are in, before insulation and drywall cover the work", ["After the building is painted and the finishes are all complete", "Only after occupancy, when the owner moves in", "Before the footing is poured, when the forms are placed"], "Inspectors need to see the structure before it is concealed."),
      carpQ("A request for information (RFI) on a project is used to:", "Clarify unclear or conflicting drawings and specifications", ["Order more nails and sheathing for the next task", "Report an injury to the supervisor", "Close the contract and release the holdback"], "RFIs resolve questions with the designer before work proceeds."),
      carpQ("Temporary bracing of trusses during installation must follow:", "The truss manufacturer's or engineer's bracing instructions", ["Whatever scrap lumber is handy, nailed on at the ends", "Nothing, because sheathing holds them", "The crew foreman's memory of past jobs only"], "Unbraced trusses can topple in domino fashion."),
      carpQ("Post-pour, reshoring under a concrete slab is removed:", "According to the engineer's reshoring plan", ["At the end of the shift, once the slab is walkable", "When the forms are loose enough to shake", "Never, since reshores stay in permanently"], "Loads are transferred gradually as the slab gains strength."),
      carpQ("A load path in a building describes:", "How loads travel from the roof down to the foundation and soil", ["The route materials take to the site from the supplier", "The path of electrical wiring from the panel to the outlets", "The schedule of inspections from footing to occupancy"], "Keeping a continuous load path avoids weak points, such as unsupported point loads.")
    ]
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS, fall protection, working at heights, and site orientation; requirements vary)", "Prepare a resume and contact carpenters' union locals, framing and formwork contractors, and residential builders", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: foundations", items: ["Learn site safety, PPE, ladders, and hand and power tool use", "Practice measuring, layout, and square cuts", "Learn basic wall framing, subfloors, and sheathing", "Complete your first technical training block", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: framing and layout", items: ["Frame walls, floors, and roofs from drawings", "Learn rafter and stair layout with a framing square", "Learn formwork basics for footings and walls", "Learn the National Building Code Part 9 layout or your provincial code"] },
    { title: "Year 3: envelope, finish, and forming", items: ["Install windows, doors, flashing, and air and vapour barriers", "Learn insulation, siding, and roofing details", "Build stairs and guards to code", "Learn commercial formwork, scaffolds, and hoisting basics"] },
    { title: "Year 4 and beyond: advanced", items: ["Lead small crews and plan work from drawings", "Learn estimating, takeoffs, and scheduling", "Work through engineered products, trusses, and complex layout", "Mentor first-year apprentices and use the Red Seal standard to find gaps in your experience"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["Air barrier", "A continuous layer that limits air leakage through a wall or roof."],
    ["Backing (blocking)", "Framing added inside a wall to support fasteners or trim."],
    ["Birdsmouth", "A notch in a rafter where it sits on the top plate."],
    ["Bracing", "Temporary or permanent members that keep a structure square and stable."],
    ["Bridging", "Short members between joists that help spread loads."],
    ["Cripple stud", "A short stud above or below a window opening."],
    ["Crown", "The slight natural curve of a piece of lumber."],
    ["Dimension lumber", "Framing lumber sold by nominal sizes such as 2x4."],
    ["Fireblocking", "Blocking that slows fire spread through concealed spaces."],
    ["Flashing", "Thin material that sheds water at joints and openings."],
    ["Footing", "The concrete base that spreads building loads to the soil."],
    ["Form tie", "A fastener that holds concrete wall forms together."],
    ["Header", "A beam over an opening that carries loads to the sides."],
    ["Joist", "A horizontal member that supports a floor or ceiling."],
    ["King stud", "A full-height stud beside an opening that supports the jack stud."],
    ["LVL", "Laminated veneer lumber, an engineered beam material."],
    ["Pitch", "The slope of a roof, expressed as rise over 12 in or as an angle."],
    ["Plumb", "Exactly vertical."],
    ["Rafter", "A sloping member that supports the roof deck."],
    ["Rise and run", "Vertical and horizontal distances used in stairs and roofs."],
    ["Rough opening", "The framed opening for a window or door."],
    ["RSI", "Metric thermal resistance value, equal to R divided by 5.678."],
    ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
    ["Sheathing", "Panels such as plywood or OSB fastened to framing."],
    ["Sill plate", "The wood plate fastened to the foundation."],
    ["Stringer", "The sloped member that supports stair treads."],
    ["Top plate", "The horizontal member on top of the studs in a wall."],
    ["Truss", "An engineered assembly of members forming a roof or floor support."],
    ["Vapour barrier", "A layer that limits moisture movement, normally on the warm side."],
    ["WHMIS", "Canada's workplace hazardous materials information system."]
  ],
  cards: [
    { front: "Actual size of a nominal 2x4", back: "About 38 x 89 mm (1-1/2 x 3-1/2 in)" },
    { front: "3-4-5 square check", back: "Sides 3 and 4 give a 5 diagonal when the corner is square" },
    { front: "Length factor of a 12:12 common rafter", back: "1.414 times the run" },
    { front: "Board feet formula", back: "Thickness (in) x width (in) x length (ft) / 12" },
    { front: "Riser height from total rise", back: "Total rise / number of risers" },
    { front: "Which way does lumber crown go on joists?", back: "Up" },
    { front: "Placement of the vapour barrier in cold climates", back: "Warm (interior) side of the insulation" },
    { front: "R-value to RSI", back: "RSI = R / 5.678" },
    { front: "Standard 4 x 8 ft panel in metric", back: "About 1220 x 2440 mm" },
    { front: "Typical stud spacings in metric", back: "400 mm or 600 mm on centre" }
  ],
  jobsIntro: "Look for union carpenters' locals and signatory contractors, residential framing and renovation companies, formwork and commercial contractors, interior finishing companies, and maintenance departments.",
  tips: ["Bring a short resume, your safety tickets, and ID.", "Show interest in math, drawings, and working outdoors.", "Visit job sites, shops, and halls in person when you can, and follow up.", "Ask what tools you need and what the employer supplies."],
  forumTopics: ["Starting out", "Framing and layout", "Concrete forming and scaffolds", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
  reference: [
    {
      title: "Key formulas",
      list: [
        "Pythagorean theorem: c² = a² + b² (rafter length = √(run² + rise²))",
        "Common rafter length = run x length factor (12:12 pitch factor is 1.414)",
        "Riser height = total rise ÷ number of risers; treads = risers − 1 in a straight flight",
        "Board feet = thickness (in) x width (in) x length (ft) ÷ 12",
        "Area of a rectangle = length x width; panels needed = floor area ÷ 2.98 m², plus waste",
        "Scale: real length = drawing length x scale factor (1:50 means x 50)"
      ]
    },
    {
      title: "Conversions",
      list: [
        "1 in = 25.4 mm, and 1 ft = 304.8 mm",
        "16 in o.c. is about 400 mm, and 24 in o.c. is about 600 mm",
        "1 m = 3.281 ft, and 1 m² = 10.764 ft²",
        "1 m³ = 1.308 yd³ (cubic yards of concrete)",
        "RSI = R ÷ 5.678",
        "1 kg ≈ 2.205 lb"
      ]
    },
    {
      title: "Actual sizes of dimension lumber",
      table: {
        head: ["Nominal", "Actual (in)", "Actual (mm)"],
        rows: [["2x4", "1-1/2 x 3-1/2", "38 x 89"], ["2x6", "1-1/2 x 5-1/2", "38 x 140"], ["2x8", "1-1/2 x 7-1/4", "38 x 184"], ["2x10", "1-1/2 x 9-1/4", "38 x 235"], ["2x12", "1-1/2 x 11-1/4", "38 x 286"]]
      },
      note: "Sizes are for dressed softwood lumber. Engineered lumber, such as LVL and I-joists, has its own dimensions."
    },
    {
      title: "Rafter length per 12 in of run, and roof angle",
      table: {
        head: ["Pitch", "Angle", "Common rafter per 12 in of run", "Factor"],
        rows: [["3:12", "14.0°", "12.37 in", "1.031"], ["4:12", "18.4°", "12.65 in", "1.054"], ["6:12", "26.6°", "13.42 in", "1.118"], ["8:12", "33.7°", "14.42 in", "1.202"], ["12:12", "45.0°", "16.97 in", "1.414"]]
      },
      note: "Factor x run gives the rafter length along the slope. Deduct for half the ridge thickness and add tail length as needed."
    },
    {
      title: "Which fastener or standard?",
      list: [
        "<strong>CSA O86:</strong> engineering design in wood.",
        "<strong>CSA O121, O151, and O325:</strong> Douglas fir plywood, Canadian softwood plywood, and construction sheathing.",
        "<strong>CSA S269.1, S269.2, and S269.3:</strong> falsework, scaffolding, and concrete formwork.",
        "<strong>CSA Z259 series:</strong> fall arrest equipment. <strong>CSA Z195:</strong> protective footwear. <strong>CSA Z94.1:</strong> hard hats.",
        "<strong>National Building Code of Canada Part 9:</strong> housing and small buildings. Your province may amend it.",
        "<strong>Treated lumber:</strong> use hot-dip galvanized or stainless fasteners and hardware rated for it."
      ],
      note: "Penny sizes: 8d is 2-1/2 in (64 mm), 10d is 3 in (76 mm), and 16d is 3-1/2 in (89 mm). Check the code for required nail sizes and spacing."
    },
    {
      title: "Stair layout checklist",
      list: [
        "Measure the total rise from finished floor to finished floor, then divide by a trial riser height.",
        "Round to a whole number of risers and recalculate the exact riser height.",
        "Keep every riser and tread within the code's variation limits in the same flight.",
        "Set headroom, guard height, handrail, and landing requirements from the code, not from memory.",
        "Allow for the thickness of floor finishes at the top and bottom of the stringer."
      ],
      note: "Limits for riser height, tread depth, and headroom differ by building type and code edition. Confirm them with your provincial code."
    }
  ]
});
