// Metal Fabricator (Fitter) content: tools, learning media, practice tests, roadmap, and reference.
// Practice questions are original study aids, not official Red Seal exam questions.

const mfTl = (a) => a.map(([name, why, search]) => ({ name, why, search }));
const mfMd = (a) => a.map(([name, desc, url]) => ({ name, desc, url }));
// Each row is [question, correct answer, [3 wrong answers], explanation]; the correct position rotates.
const mfQs = (a) => a.map(([q, c, w, explain], i) => {
  const answer = (i * 3 + 3) % 4;
  const options = w.slice();
  options.splice(answer, 0, c);
  return { q, options, answer, explain };
});
const mfYt = (s) => `https://www.youtube.com/results?search_query=${s}`;
const mfNote = "Professional-grade tools that hold up to daily use. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.";

registerTrade({
  id: "metal-fabricator",
  store: "metal-fabricator",
  title: "Metal Fabricator (Fitter)",
  name: "Metal Fabricator (Fitter)",
  short: "metal fabrication",
  category: "Fabrication · Metal · Shop",
  summary: "Metal fabricators (fitters) lay out, cut, form, and fit up steel and other metal parts from drawings so they can be welded into finished assemblies.",
  work: "Fitters read shop drawings, lay out plate and structural shapes, cut and form the pieces, and fit and tack them into squared assemblies. Most work is in fabrication shops, with some field work, and it demands accuracy, lifting with cranes, and close teamwork with welders.",
  duration: "Usually about 3 to 4 years, varies by province",
  union: "Canadian Institute of Steel Construction",
  unionUrl: "https://www.cisc-icca.ca/",
  jobSearch: "metal fabricator fitter apprentice",
  journeySearch: "metal fabricator fitter",
  aliases: "fitter fabricator layout plate structural steel shop drawings press brake shear welding fit up platework",
  tools: ["Combination square and framing square", "Tape measure, scriber, and soapstone", "Locking clamps and magnets", "Angle grinder with flap discs", "Chipping hammer and centre punch", "CSA safety boots, glasses, and gloves"],
  insight: {
    skills: ["Accurate measuring and layout", "Trigonometry and geometry for patterns", "Reading shop drawings and welding symbols", "Careful planning of sequence and fit-up"],
    hazards: ["Moving and suspended loads: inspect rigging and stay clear", "Grinding and cutting: face shield, guards, and hearing protection", "Hot work and sparks: fire watch and clear combustibles", "Pinch points and sharp edges: gloves and safe handling"],
    settings: ["Structural steel fabrication shops", "Plate and tank fabrication", "Equipment, trailer, and machinery manufacturing", "Industrial and mining maintenance shops"]
  },
  toolGroups: [
    {
      title: "Day-one tools, buy once and buy well",
      note: mfNote,
      items: mfTl([
        ["Tape measure (8 m or 25 ft)", "A wide, stiff blade with a true hook gives dependable measurements. Check against another tape now and then.", "Stanley FatMax Milwaukee tape measure 8m 25 ft"],
        ["Combination square (300 mm / 12 in)", "Checks squares, depth, and mitres on parts. Starrett or Mitutoyo quality is worth it.", "Starrett combination square 12 inch"],
        ["Framing (rafter) square", "Large squares for big parts and checking corner squareness of assemblies.", "Swanson framing square steel"],
        ["Scriber and centre punch", "Fine layout lines and hole centres for drilling and cutting.", "Starrett scriber automatic centre punch"],
        ["Soapstone and paint markers", "Marks that stay visible on mill scale and hot steel.", "soapstone holder Markal paint marker"],
        ["Locking clamps and C-clamps", "Hold parts during fit-up and tacking. Buy quality clamps that do not slip.", "Irwin Vise-Grip welding clamps C-clamp"],
        ["Welding magnets and angle squares", "Hold parts at 45°, 90°, and 135° while you tack.", "welding magnet angle holder 45 90 135"],
        ["Chipping hammer and wire brush", "Clean tacks and welds, and remove slag before inspection.", "chipping hammer wire brush welding"],
        ["CSA safety boots, safety glasses, and leather gloves", "Heavy parts and sparks are constant hazards. Choose CSA approved footwear with metatarsal protection if required.", "CSA safety boots metatarsal safety glasses leather gloves"]
      ])
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up in your shop.",
      items: mfTl([
        ["4.5 in angle grinder (Milwaukee, Makita, or DeWalt)", "Bevelling, cleaning, and trimming. Pick one with a guard and a paddle switch.", "Milwaukee Makita DeWalt 4.5 inch angle grinder"],
        ["Flap discs, cut-off wheels, and grinding wheels", "Match the abrasive to the job and always check the rated speed.", "flap disc 4.5 inch cut off wheel grinding wheel"],
        ["Face shield and hearing protection", "Required for grinding and chipping. Earmuffs and plugs are both useful.", "grinding face shield 3M earmuffs ear plugs"],
        ["Welding helmet and gloves", "Fitters tack weld, so you need your own helmet and FR gloves.", "auto darkening welding helmet leather welding gloves"],
        ["Dividers and trammel points", "Lay out circles, arcs, and radius cuts on plate.", "dividers trammel points layout"],
        ["Digital caliper and protractor", "Check material thickness, hole sizes, and bevel angles.", "digital caliper 150mm protractor bevel"],
        ["Magnetic level and plumb bob", "Check level and plumb of assemblies and frames.", "magnetic torpedo level plumb bob"]
      ])
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying.",
      items: mfTl([
        ["Oxyfuel torch and cutting tips", "Cut and heat carbon steel. Usually shop supplied and maintained.", "Victor Harris oxyfuel cutting torch"],
        ["Plasma cutter", "Cuts any conductive metal, including stainless and aluminum. Usually shop equipment.", "Hypertherm plasma cutter"],
        ["Press brake and ironworker tooling", "Forming, punching, and shearing in the shop. Learn tooling selection and safety.", "press brake tooling ironworker punch die"],
        ["Rigging hardware and lifting clamps", "Employer-supplied and inspected hardware. Learn working load limits.", "plate lifting clamp shackle sling"],
        ["Laser level or transit", "Level and square large assemblies and jig tables.", "laser level construction rotary"],
        ["Fit-up tools for pipe and plate, such as strongbacks and fitting wedges", "Align joints and hold gaps while tacking.", "welding strongback fit up wedge"]
      ])
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for drawings, math, and code study. Check with your school and your exam body about calculator rules before you buy.",
      items: mfTl([
        ["Scientific calculator (Casio fx-991 or TI-30XS)", "Trigonometry for layout, patterns, and bend calculations.", "Casio fx-991 Texas Instruments TI-30XS MultiView"],
        ["Mechanical pencil (0.5 mm) and spare leads", "Fine lines for pattern development and drawing notes.", "Pentel GraphGear mechanical pencil 0.5mm leads"],
        ["Drafting compass and dividers", "Radial and parallel line development.", "drafting compass dividers set"],
        ["Protractor and drafting triangles", "Bevel, bend, and layout angles.", "protractor drafting triangle set"],
        ["Steel ruler and engineer's scale", "Read scaled shop drawings in metric and imperial.", "engineer scale steel ruler metric"],
        ["Graph paper and layout pad", "Practise pattern development and sketching of assemblies.", "graph paper pad drafting"],
        ["Steel construction handbook (CISC)", "Reference for shapes, properties, and tolerances. Check your school's recommended edition.", "CISC handbook of steel construction"],
        ["Binder, dividers, and highlighters", "Organize notes by topic for Red Seal exam review.", "binder dividers highlighters"]
      ])
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: mfMd([
        ["Red Seal exam preparation", "How Red Seal exams work and how to prepare.", "https://red-seal.ca/eng/welcome.shtml"],
        ["Canadian Institute of Steel Construction", "Steel design, fabrication, and standards information for Canadian industry.", "https://www.cisc-icca.ca/"],
        ["CWB Group", "Certification of fabricators and welding standards information.", "https://www.cwbgroup.org/"],
        ["CSA Group", "Publisher of CSA S16, W59, and G40.21.", "https://www.csagroup.org/"],
        ["Codes Canada", "Model national codes that provincial codes are based on.", "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada"]
      ])
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and applicable codes.",
      items: mfMd([
        ["Fabrication layout basics", "Layout from a datum, marking, and checking squareness.", mfYt("metal+fabrication+layout+basics+fitter")],
        ["Reading shop drawings", "Views, dimensions, and notes on fabrication drawings.", mfYt("reading+fabrication+shop+drawings+metal")],
        ["Welding symbols for fitters", "Reference line, arrow side, and groove preparations.", mfYt("welding+symbols+explained+fitter+fabricator")],
        ["Pattern development", "Parallel line and radial line development.", mfYt("pattern+development+parallel+line+radial+line+fabrication")],
        ["Press brake bending", "Bend allowance, tooling, and safety.", mfYt("press+brake+bending+allowance+tooling+tutorial")],
        ["Plasma and oxyfuel cutting", "Cutting steel safely and cleanly.", mfYt("plasma+cutting+oxyfuel+cutting+steel+technique")],
        ["Structural steel fit-up", "Fitting beams, plates, and connections.", mfYt("structural+steel+fabrication+fit+up+beam+connections")],
        ["Distortion control when welding", "Sequence, restraint, and balancing welds.", mfYt("welding+distortion+control+sequence+fabrication")]
      ])
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for metal fabrication yourself.",
      items: mfMd([
        ["Skills Ontario Trades Tech Talk Podcast", "Careers, apprenticeships, and getting started in the skilled trades.", "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/"],
        ["TradeMasters Podcast (Canada)", "Skilled trades careers, licensing, and exam topics.", "https://www.tmws.ca/podcasts"],
        ["YouTube: metal fabricator apprentice podcast (audio-only listening)", "Open the results and press play with the screen off, or use a background-play option.", mfYt("metal+fabricator+apprentice+podcast")]
      ])
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: mfMd([
        ["YouTube: fabrication shop podcast", "Shop talk on layout, process, and quality.", mfYt("fabrication+shop+podcast+fitter+welder")],
        ["YouTube: steel fabrication and erection talks", "How shop and field work connect.", mfYt("structural+steel+fabrication+podcast")],
        ["YouTube: welding and distortion control (listen-along)", "Heat, shrinkage, and fit-up strategies.", mfYt("weld+distortion+shrinkage+fit+up+podcast")]
      ])
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, planning, and leadership.",
      items: mfMd([
        ["YouTube: Red Seal metal fabricator exam prep (talk-through)", "Study talks you can listen to while commuting.", mfYt("Red+Seal+metal+fabricator+fitter+exam+preparation")],
        ["YouTube: fabrication estimating and planning", "Takeoffs, sequences, and shop scheduling.", mfYt("metal+fabrication+estimating+planning+podcast")],
        ["YouTube: leading a crew and mentoring apprentices", "Leadership and training skills for new journeypersons.", mfYt("skilled+trades+leadership+mentoring+apprentices+podcast")]
      ])
    }
  ],
  practiceBank: {
    1: mfQs([
      ["A fitter's main job in an assembly is to:", "Position and secure parts accurately so they can be welded to the drawing", ["Operate the crane only", "Order all the steel", "Inspect finished coating"], "Good fit-up gives the welder a joint that matches the drawing."],
      ["Which tool checks whether a corner is 90°?", "Framing or combination square", ["Tape measure", "Scriber", "Chipping hammer"], "Squares check right angles, and the diagonal check does the same on larger parts."],
      ["A rectangular frame is square when:", "Its two diagonals are equal in length", ["Its sides are all equal", "It has four tack welds", "It is level"], "A parallelogram can have equal opposite sides but unequal diagonals."],
      ["The diagonal of a 1200 mm by 900 mm rectangle is:", "1500 mm", ["1050 mm", "2100 mm", "1800 mm"], "1200² + 900² = 2 250 000, and the square root is 1500."],
      ["A 3-4-5 triangle can be used to:", "Check a right angle", ["Measure thickness", "Cut a bevel", "Weigh steel"], "Sides in the ratio 3:4:5 give a 90° corner, such as 600, 800, 1000 mm."],
      ["Oxyfuel cutting works on:", "Carbon steel by burning (oxidizing) it", ["Aluminum and stainless alike", "Any metal equally", "Plastic only"], "Aluminum and stainless need plasma or other methods."],
      ["2 in is how many millimetres?", "50.8 mm", ["25.4 mm", "48.0 mm", "57.2 mm"], "1 in = 25.4 mm exactly."],
      ["Which PPE should you wear when grinding?", "Safety glasses plus a face shield, with hearing protection", ["Sunglasses only", "No eye protection if quick", "A welding helmet only"], "Sparks and wheel fragments are an eye and face hazard."],
      ["Before using a grinder you should:", "Check the guard and that the wheel's rated speed is at least the grinder speed", ["Remove the guard for access", "Use any wheel on hand", "Use a damaged wheel at low speed"], "An overspeed or cracked wheel can burst."],
      ["A 6 mm steel plate of 1 square metre has a mass of about:", "47.1 kg", ["7.85 kg", "78.5 kg", "471 kg"], "Steel is 7.85 kg per square metre per millimetre, so 6 × 7.85 = 47.1 kg."],
      ["In the designation W310 × 52, the 52 means:", "A mass of 52 kg per metre", ["A depth of 52 mm", "A flange width of 52 mm", "52 holes"], "W310 is a wide-flange beam with a nominal depth of 310 mm."],
      ["An L-shaped steel section is called:", "An angle", ["A channel", "A tee", "A tube"], "Angles have two legs at 90°, and channels have a web and two flanges."],
      ["When working under an overhead crane lift you should:", "Never stand under the load and follow signals", ["Stay under to guide it", "Hold the sling", "Ride on the load"], "Suspended loads can fall, so stay out from under them."],
      ["Where do you find hazards and first-aid steps for a cutting fluid or coating?", "The Safety Data Sheet (SDS)", ["The invoice", "The drawing title block", "The grinder label"], "WHMIS requires an SDS for hazardous products."],
      ["Soapstone is preferred over a pencil for marking steel because:", "Its marks stay visible on mill scale and tolerate heat", ["It cuts steel", "It is stronger", "It prevents rust"], "Soapstone is easy to see on steel and does not burn off quickly."],
      ["Lockout and tagout protects you by:", "Keeping machine energy isolated while you work", ["Keeping tools in order", "Reducing noise", "Cooling steel"], "Never remove another person's lock."]
    ]),
    2: mfQs([
      ["For a 90° bend with an inside radius of 6 mm and 6 mm thickness, the setback (tan 45° × (R + T)) is:", "12 mm", ["6 mm", "9.4 mm", "18 mm"], "Setback = tan(θ/2) × (R + T) = 1 × 12 = 12 mm."],
      ["CSA G40.21 grade 350W steel has a minimum yield strength of about:", "350 MPa", ["250 MPa", "450 MPa", "35 MPa"], "The number is the minimum yield in MPa."],
      ["ASTM A36 steel has a minimum yield strength of:", "250 MPa", ["350 MPa", "500 MPa", "36 MPa"], "A36 is 36 ksi, which is about 250 MPa."],
      ["Hi-lo in fit-up means:", "Misalignment of the surfaces of abutting members", ["A high-low temperature check", "The weld height", "The bolt strength"], "Excessive hi-lo can cause stress and poor weld quality."],
      ["Root opening is:", "The gap between the parts at the root of a joint", ["The size of the weld face", "The shape of the nozzle", "The width of the plate"], "Root opening and root face are set by the procedure and affect penetration."],
      ["A single-V groove with 30° bevels on each side has an included angle of:", "60°", ["30°", "90°", "15°"], "The included angle is the sum of the bevels."],
      ["Camber in a beam is a curve:", "In the plane of the web, that is vertical", ["Out of the web plane sideways", "Along the flange only", "Only in the length"], "Sweep is the sideways curve out of the web plane."],
      ["Weld shrinkage is dealt with by:", "Planning the sequence and allowances so the finished size is correct", ["Ignoring it", "Cutting parts shorter every time", "Welding faster"], "Shrinkage pulls parts together, so balance and sequence matter."],
      ["Radial line development is best for:", "Cones and tapered shapes", ["Rectangular boxes", "Flat plate", "Bolts"], "Radial lines converge at an apex."],
      ["Steel 10 m long warms by 50 °C. Using 12 × 10⁻⁶ per °C, it lengthens by about:", "6 mm", ["60 mm", "0.6 mm", "12 mm"], "12 × 10⁻⁶ × 10 000 mm × 50 = 6 mm."],
      ["A jig or template is used to:", "Make many parts the same and located accurately", ["Cool welds", "Test pressure", "Prevent rust"], "Jigs reduce layout time and error."],
      ["Oxyfuel cutting starts when:", "The preheat flame raises steel to kindling temperature and an oxygen jet is released", ["The steel is melted by acetylene alone", "The torch is held far away", "The gas runs without oxygen"], "The steel burns in the oxygen, and the slag is blown away."],
      ["A weld symbol with the groove on the arrow side means:", "Prepare the groove on the arrow side of the joint", ["Prepare it on the opposite side", "Grind flush", "Weld all around"], "Arrow side is shown below the reference line."],
      ["Bending steel too tightly for its thickness can:", "Crack the outside of the bend", ["Make it thicker", "Soften it", "Reduce its length"], "A minimum bend radius is based on material and thickness."],
      ["Compared with A325 bolts, A490 bolts are:", "Higher strength", ["Lower strength", "Made of aluminum", "Only for wood"], "A490 bolts have higher strength and are not galvanized in general."]
    ]),
    3: mfQs([
      ["An HSS 102 × 102 × 6.4 has a wall thickness of:", "6.4 mm", ["102 mm", "10.2 mm", "64 mm"], "The three numbers are the two outside dimensions and the wall thickness."],
      ["Snug-tight bolting is:", "The tightness reached with a few impacts of an impact wrench or full effort of a person with a spud wrench", ["Zero tightness", "Maximum torque", "Hand-finger tight only"], "Pretensioned bolts go beyond snug-tight with a specified method."],
      ["The turn-of-nut method pretensions a bolt by:", "Rotating the nut a specified amount beyond snug-tight", ["Heating the bolt", "Counting threads only", "Using paint"], "The amount depends on bolt length and the specification."],
      ["Oversize or slotted holes in a connection:", "Need approval and the correct washers", ["May be made anywhere freely", "Are never used", "Are a welder's decision"], "Special holes change how load is transferred."],
      ["For a 90° bend with R = 5 mm, T = 3 mm, K = 0.33, bend allowance = angle (rad) × (R + K × T) is about:", "9.4 mm", ["4.7 mm", "12.6 mm", "18.8 mm"], "1.5708 × (5 + 0.99) = 9.41 mm."],
      ["A W310 × 52 beam 6 m long has a mass of about:", "312 kg", ["52 kg", "620 kg", "31 kg"], "52 kg/m × 6 m = 312 kg."],
      ["A mill test report (MTR) shows:", "Chemical and mechanical properties of a heat of steel", ["The price of steel", "The warehouse location", "The weld procedure"], "It supports traceability to the heat number."],
      ["Stainless steel should be worked with dedicated tools because:", "Carbon steel particles can contaminate it and cause rust spots", ["Stainless is soft", "Carbon steel is heavier", "Tools are different colours"], "Use separate brushes and discs."],
      ["Hollow sections to be hot-dip galvanized need:", "Vent and drain holes so zinc can flow and air can escape", ["No holes at all", "Welding closed completely", "Paint inside"], "Sealed sections can trap air and moisture, which is dangerous in a zinc bath."],
      ["Dimensioning from a common datum reduces:", "Cumulative measurement error", ["Weld length", "Paint cost", "Hole count"], "Chain measuring adds each error."],
      ["A CWB certified fabricator under CSA W47.1 has:", "Demonstrated welding quality control and procedures meeting the standard", ["A free pass on inspection", "No need for qualified welders", "No drawings"], "Certification is a company-wide system."],
      ["Heat straightening works by:", "Heating small areas so thermal expansion restrained by cool metal causes shrinkage", ["Heating the entire part red hot", "Using a hammer only", "Cooling the part in water first"], "Heating patterns such as vees and spots control the movement."],
      ["When a plate weld is made on one side only, the plate tends to:", "Bow toward the weld side", ["Bow away from it", "Stay flat", "Grow longer"], "Weld metal shrinks as it cools."],
      ["Parallel line development is used for:", "Prisms and cylinders with parallel sides", ["Cones", "Spheres only", "Weld symbols"], "Parallel lines keep true length."],
      ["The best way to check a large assembly for squareness is to:", "Compare diagonals and measure from datum lines", ["Look at it from far away", "Use a plumb bob only", "Measure the weight"], "Equal diagonals show a square or rectangle."]
    ]),
    4: mfQs([
      ["When planning an assembly sequence, a good fitter considers:", "Weld access and distortion balance, plus later machining or galvanizing", ["Only the cheapest order", "Only how fast tacks go", "Cosmetic appearance only"], "A poor sequence can trap welders or twist parts."],
      ["Nesting parts on a plate is done to:", "Reduce waste and cutting time", ["Increase weight", "Increase heat input", "Avoid drawing review"], "Efficient nesting cuts material cost."],
      ["If two drawings conflict, you should:", "Stop and request clarification through the proper channel", ["Choose the cheaper option", "Follow your best guess", "Wait until welding is done"], "A written RFI avoids rework."],
      ["CSA S16 is the standard for:", "Design of steel structures", ["Welding safety", "Pipe threads", "Crane maintenance"], "CSA W59 covers welded steel construction, and S16 covers design and fabrication limits."],
      ["Lifting lugs added to a fabrication should be:", "Designed and located by someone qualified and welded to procedure", ["Added anywhere by eye", "Made from scrap", "Left unmarked"], "Lugs carry the full lift, so they must be engineered."],
      ["Punching thick plate can cause:", "Edge cracking or hardened edges, so drilling or sub-punching and reaming may be required", ["Stronger holes", "No issues at any thickness", "Larger holes"], "Limits on punched hole thickness come from the standards."],
      ["After welding, parts no longer fit. A likely cause is:", "Weld shrinkage or distortion from the welding sequence", ["The tape stretched", "The soapstone", "A hot day only"], "Review the sequence and fixture."],
      ["A circle where the arrow meets the reference line of a weld symbol means:", "Weld all around", ["Field weld", "Grind flush", "Inspect"], "A flag means field weld, and a circle means weld all around."],
      ["Traceability of material heat numbers is needed for:", "Code or pressure work and quality records", ["Painting only", "Tool storage", "Shipping weight"], "Records tie finished parts to certified material."],
      ["For a part with its centre of gravity off-centre, the lift should:", "Put the hook above the centre of gravity with suitable rigging", ["Use a single short sling", "Place the hook over the lightest end", "Use a tag line only"], "Otherwise the part will tilt when lifted."],
      ["A first-article inspection is done to:", "Verify the first part meets drawings before running more", ["Save paint", "Delay shipping", "Check crane oil"], "Catching errors early prevents batch rework."],
      ["Hardness around cut edges of thermally cut steel:", "May increase, so surfaces might need grinding for some uses", ["Always decreases", "Stays exactly the same", "Is never a concern"], "Cooling after cutting can produce a hard zone in some steels."],
      ["Shop practices for managing restraint in welding include:", "Using jigs with allowances for shrinkage and releasing clamps as planned", ["Welding with maximum clamps and no allowance", "Ignoring sequence", "Skipping tacks"], "Too much restraint can crack welds, and too little allows distortion."],
      ["Bolt holes should be checked against:", "The drawing and required hole size and location tolerances", ["Your tape measure only", "A friend's memory", "The crane chart"], "Hole position errors cause field problems."],
      ["An engineered change in the field to a shop-made part needs:", "Approval by the responsible engineer and updated documentation", ["No notice", "Only a verbal OK from a labourer", "Hiding the change"], "Changes affect design and records."],
      ["For overall dimensional accuracy, which step comes first?", "Verify the material and drawing revision, then lay out and cut", ["Weld everything", "Paint", "Ship"], "Using the wrong revision wastes time and material."]
    ])
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get safety training employers ask for (commonly WHMIS, fall protection, and site orientation; requirements vary)", "Take shop, math, and drafting courses, and try a metal fabrication pre-apprenticeship if one is offered", "Apply to fabrication shops and register your apprenticeship once you have a sponsor"] },
    { title: "Year 1: shop basics and layout", items: ["Learn shop safety, grinding, hoisting, and hot work rules", "Use measuring and layout tools accurately", "Read basic shop drawings and welding symbols", "Cut with shears, saws, and oxyfuel under supervision", "Complete your first technical training block"] },
    { title: "Year 2: cutting and forming", items: ["Use plasma, press brake, and ironworker equipment", "Develop patterns using parallel line and radial line methods", "Calculate bend allowance and setback", "Learn tack welding and fit-up of simple assemblies"] },
    { title: "Year 3: structural and plate fit-up", items: ["Fit structural shapes and connections", "Fit plate work such as tanks and hoppers", "Control distortion using sequence and fixtures", "Understand bolting, material grades, and mill test reports"] },
    { title: "Year 4 and beyond: advanced", items: ["Plan assembly sequences and use jigs", "Work to CSA S16 and W59 requirements as your shop does", "Troubleshoot dimensional and fit-up problems", "Mentor first-year apprentices and use the Red Seal standard to find gaps"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Ask your employer whether CWB welder tests would add value to your career"] }
  ],
  glossary: [
    ["Angle", "An L-shaped structural steel section."],
    ["Bend allowance", "The length of the neutral axis through a bend, used for flat pattern length."],
    ["Bevel", "An angled edge preparation on a plate or pipe."],
    ["Camber", "A curve in the plane of the web of a beam."],
    ["Channel", "A C-shaped structural section with a web and two flanges."],
    ["Datum", "A reference line or surface from which dimensions are measured."],
    ["Development", "Laying out the flat pattern of a three-dimensional shape."],
    ["Diagonal check", "Comparing diagonals to confirm squareness of a rectangle."],
    ["Fit-up", "Positioning and securing parts before welding."],
    ["Flange", "The wide top or bottom part of a beam, or a flat ring on a pipe."],
    ["Groove angle", "The total angle between the prepared faces of a groove joint."],
    ["Hi-lo", "Misalignment between the surfaces of abutting members."],
    ["HSS", "Hollow structural section, a square, rectangular, or round steel tube."],
    ["Jig", "A fixture that holds parts in position for repeatable assembly."],
    ["Kerf", "The width of material removed by a cut."],
    ["Layout", "Marking cut lines and hole locations on material."],
    ["Mill scale", "The dark iron oxide layer on hot-rolled steel."],
    ["MTR", "Mill test report with chemical and mechanical properties of a heat of steel."],
    ["Nesting", "Arranging parts on a plate to reduce waste."],
    ["Pretension", "Tightening a bolt beyond snug to a specified tension."],
    ["Radial line development", "A pattern method for cones and tapered shapes."],
    ["Root opening", "The gap between parts at the root of a joint."],
    ["Setback", "The distance from the mould line to the bend tangent, tan(θ/2) × (R + T)."],
    ["Shrinkage", "Contraction of weld metal on cooling."],
    ["Snug-tight", "The tightness of a bolt after full effort with a spud wrench or a few impacts."],
    ["Sweep", "A sideways curve in a beam out of the web plane."],
    ["Tack weld", "A short weld that holds parts in position before final welding."],
    ["Web", "The vertical plate connecting the flanges of a beam."],
    ["Wide flange (W) shape", "A beam shape with parallel wide flanges, designated by depth and mass per metre."]
  ],
  cards: [
    { front: "Square check for a rectangle", back: "Equal diagonals" },
    { front: "3-4-5 rule", back: "Sides 3, 4, and 5 form a 90° corner" },
    { front: "Steel plate mass", back: "7.85 kg per m² per mm thickness" },
    { front: "Setback", back: "tan(θ/2) × (R + T)" },
    { front: "Bend allowance", back: "Angle in radians × (R + K × T)" },
    { front: "Linear expansion of steel", back: "About 12 × 10⁻⁶ per °C" },
    { front: "W310 × 52", back: "Wide flange, about 310 mm deep, 52 kg per metre" },
    { front: "G40.21 350W", back: "Minimum yield strength 350 MPa" },
    { front: "Oxyfuel cutting works on", back: "Carbon steel only" }
  ],
  jobsIntro: "Look for structural steel fabricators, plate and tank shops, equipment and trailer manufacturers, mining and industrial shops, and ironworker or boilermaker contractors with shop operations.",
  tips: ["Bring a short resume, your safety tickets, and ID.", "Show any shop class projects or photos of layout work.", "Visit fabrication shops in person and follow up.", "Ask what tools and PPE you must bring and what the shop supplies."],
  forumTopics: ["Starting out", "Layout and pattern development", "Fit-up and distortion control", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
  reference: [
    {
      title: "Key formulas",
      list: ["Diagonal = √(length² + width²). Example: 1200 × 900 gives 1500 mm.", "Plate mass = 7.85 kg per square metre for each millimetre of thickness.", "Setback = tan(θ/2) × (R + T), where θ is the bend angle.", "Bend allowance = θ (radians) × (R + K × T). K is commonly about 0.33 to 0.5 depending on the bend.", "Linear thermal expansion: ΔL = 12 × 10⁻⁶ × L × ΔT for steel.", "Circumference = π × D."]
    },
    {
      title: "Common structural shapes and designations",
      table: {
        head: ["Shape", "Example designation", "Meaning"],
        rows: [["Wide flange", "W310 × 52", "About 310 mm deep, 52 kg per metre"], ["Channel", "C250 × 30", "About 250 mm deep, 30 kg per metre"], ["Angle", "L102 × 102 × 9.5", "Two 102 mm legs, 9.5 mm thick"], ["HSS square", "HSS 102 × 102 × 6.4", "102 mm sides, 6.4 mm wall"], ["Plate", "PL 12 × 200", "12 mm thick, 200 mm wide"]]
      },
      note: "Check your handbook or drawings for exact section properties."
    },
    {
      title: "Plate mass quick table",
      table: {
        head: ["Thickness (mm)", "Mass per square metre (kg)"],
        rows: [["3", "23.6"], ["6", "47.1"], ["10", "78.5"], ["12", "94.2"], ["20", "157"], ["25", "196"]]
      },
      note: "Based on 7.85 kg per square metre per millimetre of thickness."
    },
    {
      title: "Cutting method guide",
      table: {
        head: ["Method", "Cuts", "Notes"],
        rows: [["Oxyfuel", "Carbon steel", "Burns the metal and needs preheat to kindling temperature"], ["Plasma", "Any conductive metal", "Fast and clean, with a heat-affected zone"], ["Shear", "Sheet and plate within capacity", "Straight cuts, with no heat"], ["Band saw or cold saw", "Shapes and bar", "No heat-affected zone on the edge"], ["Punch", "Holes in plate within the machine and standard limits", "Thick plate may need drilling"]]
      }
    },
    {
      title: "Standards pointers",
      list: ["CSA S16: design of steel structures.", "CSA W59: welded steel construction (metal arc welding). CSA W47.1: certification of companies for fusion welding of steel.", "CSA G40.21: structural quality steel, with grades such as 300W and 350W giving minimum yield in MPa.", "CSA W117.2: safety in welding, cutting, and allied processes.", "CISC publishes the Handbook of Steel Construction and the Code of Standard Practice.", "WHMIS and SDS apply to coatings, cutting gases, and solvents."],
      note: "Always confirm the current edition used by your shop and province."
    },
    {
      title: "Fit-up checklist",
      list: ["Confirm drawing revision and material grade.", "Check part sizes, edge preparation, and cleanliness.", "Set root opening, hi-lo, and bevel per the procedure.", "Check square with diagonals and datum measurements.", "Tack to the same quality standard as the finished weld.", "Plan restraint and allow for shrinkage before final welding."]
    }
  ]
});
