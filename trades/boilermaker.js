// Boilermaker content: tools, learning media, practice tests, roadmap, and reference.
// Practice questions are original study aids, not official Red Seal exam questions.

const bmTl = (a) => a.map(([name, why, search]) => ({ name, why, search }));
const bmMd = (a) => a.map(([name, desc, url]) => ({ name, desc, url }));
// Each row is [question, correct answer, [3 wrong answers], explanation]; the correct position rotates.
const bmQs = (a) => a.map(([q, c, w, explain], i) => {
  const answer = (i * 3 + 2) % 4;
  const options = w.slice();
  options.splice(answer, 0, c);
  return { q, options, answer, explain };
});
const bmYt = (s) => `https://www.youtube.com/results?search_query=${s}`;
const bmNote = "Professional-grade tools that hold up to daily use. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.";

registerTrade({
  id: "boilermaker",
  store: "boilermaker",
  title: "Boilermaker",
  name: "Boilermaker",
  short: "boilermaking",
  category: "Construction · Industrial · Pressure Equipment",
  summary: "Boilermakers fabricate, erect, repair, and maintain boilers, pressure vessels, tanks, stacks, and heavy plate structures in power, pulp, refinery, and industrial plants.",
  work: "Boilermakers lay out and fit heavy plate and tube, rig and hoist large components, and weld, bolt, and test pressure equipment. Much of the work is on industrial sites during shutdowns and outages, often at heights and in confined spaces, so travel and long shifts are common.",
  duration: "Usually about 3 to 4 years, varies by province",
  union: "International Brotherhood of Boilermakers",
  unionUrl: "https://www.boilermakers.org/",
  jobSearch: "boilermaker apprentice",
  journeySearch: "boilermaker",
  aliases: "boiler pressure vessel tank stack heat exchanger shutdown outage turnaround rigging plate fitter industrial",
  tools: ["Hard hat, safety glasses, and CSA safety boots", "Fitter's tape, framing square, and soapstone", "Spud wrench and drift pins", "Tube expander (employer supplied)", "Angle grinder and flap discs", "Full-body harness and lanyard"],
  insight: {
    skills: ["Spatial thinking and layout math", "Comfort with heights, heat, and confined spaces", "Teamwork on rigging and lifts", "Willingness to travel for shutdown work"],
    hazards: ["Confined spaces: permits, atmospheric testing, and a standby person", "Suspended loads: stay clear and follow signals", "Heights: fall protection and scaffold inspection", "Hot work and fumes: permits, fire watch, and respirators"],
    settings: ["Power generation and utility plants", "Refineries, petrochemical, and oil sands facilities", "Pulp, paper, and mining operations", "Fabrication shops and tank erection crews"]
  },
  toolGroups: [
    {
      title: "Day-one tools, buy once and buy well",
      note: bmNote,
      items: bmTl([
        ["CSA hard hat with chin strap option", "Required on nearly every industrial site. Choose a type with a suspension that works under a welding helmet or cap.", "CSA Z94.1 hard hat Type 2 MSA Honeywell"],
        ["CSA safety glasses and goggles", "Grinding, chipping, and slag in confined spaces are constant eye hazards.", "CSA safety glasses goggles anti fog"],
        ["CSA Grade 1 safety boots with metatarsal protection", "Heavy plate and slag demand solid boots with a sole that tolerates hot surfaces.", "CSA safety boots metatarsal Red Wing"],
        ["Cut-resistant and leather work gloves", "Plate edges and rigging hardware cut hands quickly.", "Mechanix cut resistant gloves leather rigger gloves"],
        ["Ear plugs and earmuffs", "Chipping, grinding, and air tools are loud and constant.", "3M earmuffs foam ear plugs"],
        ["Tape measure (8 m or 25 ft) and framing square", "Layout and fit-up of plate depends on accurate measurements.", "Stanley FatMax tape measure framing square"],
        ["Soapstone, paint markers, and a centre punch", "Mark plate, bevel lines, and hole centres that survive heat and handling.", "soapstone holder Markal paint marker centre punch"],
        ["Adjustable wrench and combination wrench set", "Bolting flanges and manway covers needs correct-fit wrenches.", "Crescent adjustable wrench combination wrench set metric imperial"],
        ["Flame-resistant coveralls or work clothes", "Hot work and slag demand FR clothing. Check your site rules for the required rating.", "flame resistant coveralls FR work clothes"]
      ])
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
      items: bmTl([
        ["Spud wrench and bull pins", "Align bolt holes in plate and flanges, and tighten structural and flange bolts.", "spud wrench ironworker bull pin drift pin"],
        ["Ratchet wrench set with long extensions", "Faster bolting of flange and manway covers in tight spaces.", "ratchet wrench set metric imperial extensions"],
        ["Chipping hammer and wire brushes", "Weld cleaning between passes and prior to inspection.", "chipping hammer wire brush welding"],
        ["Angle grinder (4.5 in) and flap discs", "Bevelling, weld cleaning, and removing temporary attachments.", "Milwaukee 4.5 inch angle grinder flap discs"],
        ["Welding helmet, gloves, and welding pliers", "Boilermakers weld as well as fit. Keep your own PPE in good condition.", "auto darkening welding helmet leather welding gloves"],
        ["Level, plumb bob, and chalk line", "Check plumb and level of vertical vessels and tank shells.", "magnetic level plumb bob chalk line"],
        ["Torpedo level and magnetic square", "Quick checks while fitting nozzles and attachments.", "magnetic level torpedo welding magnet square"]
      ])
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying.",
      items: bmTl([
        ["Full-body harness and shock-absorbing lanyard (CSA Z259)", "Usually supplied by the employer. Fall protection training comes first.", "3M DBI-SALA full body harness CSA lanyard"],
        ["Tube expander set", "Rolls boiler tubes tight in tube sheets and headers. Usually company supplied and calibrated.", "boiler tube expander tube roller"],
        ["Torque wrench set and bolt tensioning tools", "Flange gasket seating needs controlled bolt loading as per the procedure.", "torque wrench set click type 3/4 drive"],
        ["Come-alongs, chain falls, and rigging hardware", "Employer-supplied rigging should be inspected and tagged. Learn the working load limits.", "chain fall come along rigging shackle"],
        ["Four-gas monitor", "Usually employer supplied for confined spaces. Learn bump test and calibration rules.", "four gas monitor confined space"],
        ["Supplied-air or half-face respirator", "Grinding, refractory work, and coatings in confined spaces need the correct respirator and fit test.", "3M half face respirator P100"]
      ])
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for drawings, math, and code study. Check with your school and your exam body about calculator rules before you buy.",
      items: bmTl([
        ["Scientific calculator (Casio fx-991 or TI-30XS)", "Trig for layout and cone or cylinder development.", "Casio fx-991 Texas Instruments TI-30XS MultiView"],
        ["Mechanical pencil (0.5 mm) and spare leads", "Clean lines for layout sketches and notes on drawings.", "Pentel GraphGear mechanical pencil 0.5mm leads"],
        ["Drafting compass and dividers", "Radial layout and transferring measurements in development drawings.", "drafting compass dividers set"],
        ["Protractor and drafting triangles", "Bevel angles and offsets.", "protractor drafting triangle set"],
        ["Steel ruler and engineer's scale", "Read scaled drawings in metric and imperial.", "engineer scale steel ruler metric"],
        ["Field notebook (Rite in the Rain)", "Weatherproof notes for measurements, procedures, and lift details.", "Rite in the Rain field notebook"],
        ["Binder, dividers, and highlighters", "Organize notes by topic for Red Seal exam review.", "binder dividers highlighters"],
        ["Rigging handbook or pressure equipment textbook", "Check with your school for the recommended edition.", "rigging handbook"]
      ])
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: bmMd([
        ["Red Seal exam preparation", "How Red Seal exams work and how to prepare.", "https://red-seal.ca/eng/welcome.shtml"],
        ["International Brotherhood of Boilermakers", "Union apprenticeship and training information.", "https://www.boilermakers.org/"],
        ["CSA Group", "Publisher of the B51 boiler, pressure vessel, and pressure piping code and the W-series welding standards.", "https://www.csagroup.org/"],
        ["ASME", "Publisher of the Boiler and Pressure Vessel Code.", "https://www.asme.org/"],
        ["Codes Canada", "Model national codes that provincial codes are based on.", "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada"]
      ])
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and applicable codes.",
      items: bmMd([
        ["How a power boiler works", "Steam drum, waterwalls, superheater, and economizer.", bmYt("how+a+power+boiler+works+steam+drum+superheater+economizer")],
        ["Boiler tube expanding", "Rolling tubes into tube sheets and drums.", bmYt("boiler+tube+rolling+expanding+boilermaker")],
        ["Rigging and sling angles", "How angle changes the load on each sling leg.", bmYt("rigging+sling+angles+tension+explained")],
        ["Plate rolling and layout", "Forming cylinders and developing patterns.", bmYt("boilermaker+plate+rolling+layout+cylinder")],
        ["Storage tank erection", "Jacking and conventional shell erection.", bmYt("storage+tank+erection+jacking+method+shell+courses")],
        ["Confined space entry basics", "Atmospheric testing, permits, and rescue planning.", bmYt("confined+space+entry+atmospheric+testing+attendant")],
        ["Hydrostatic testing of pressure vessels", "Why water is used and how tests are controlled.", bmYt("hydrostatic+test+pressure+vessel+procedure")],
        ["Refractory installation", "Brick and castable linings in boilers and furnaces.", bmYt("refractory+installation+boiler+castable+brick")]
      ])
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for boilermaking yourself.",
      items: bmMd([
        ["Skills Ontario Trades Tech Talk Podcast", "Careers, apprenticeships, and getting started in the skilled trades.", "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/"],
        ["TradeMasters Podcast (Canada)", "Skilled trades careers, licensing, and exam topics.", "https://www.tmws.ca/podcasts"],
        ["YouTube: boilermaker apprentice podcast (audio-only listening)", "Open the results and press play with the screen off, or use a background-play option.", bmYt("boilermaker+apprentice+podcast")]
      ])
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: bmMd([
        ["YouTube: boilermaker career talk (audio)", "Working boilermakers talk about shutdowns, travel, and the work.", bmYt("boilermaker+career+podcast+shutdown+outage")],
        ["YouTube: industrial rigging and lifting talks", "Lift planning, signals, and load handling.", bmYt("industrial+rigging+lifting+podcast+lift+planning")],
        ["YouTube: pressure vessel and boiler code explained", "Design pressure, testing, and inspection concepts.", bmYt("pressure+vessel+boiler+code+explained+ASME")]
      ])
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, planning, and leadership.",
      items: bmMd([
        ["YouTube: Red Seal boilermaker exam prep (talk-through)", "Study talks you can listen to while commuting.", bmYt("Red+Seal+boilermaker+exam+preparation")],
        ["YouTube: turnaround and shutdown planning", "Scheduling, scope, and coordination of outages.", bmYt("plant+turnaround+shutdown+planning+podcast")],
        ["YouTube: leading a crew and mentoring apprentices", "Leadership and training skills for new journeypersons.", bmYt("skilled+trades+leadership+mentoring+apprentices+podcast")]
      ])
    }
  ],
  practiceBank: {
    1: bmQs([
      ["A boiler's basic purpose is to:", "Heat water or another fluid, often making steam, under pressure", ["Cool process liquids", "Store dry bulk solids", "Filter air in buildings"], "Boilers transfer heat from fuel or process heat to water under pressure."],
      ["In a water tube boiler, water flows:", "Inside the tubes while hot gases pass outside", ["Outside the tubes while gases flow inside", "Only in the stack", "Only in the fuel line"], "In a fire tube boiler the hot gases are inside the tubes instead."],
      ["The usual acceptable oxygen range in a confined space is about:", "19.5% to 23%", ["10% to 15%", "25% to 35%", "Any level above 5%"], "Below about 19.5% is oxygen deficient, and above about 23% is oxygen enriched. Always follow your jurisdiction and permit."],
      ["A shackle pin must be:", "Fully seated or threaded in and never replaced with a bolt", ["Replaced with any bolt on hand", "Left loose so it can spin", "Backed out half a turn"], "A bolt is not rated as a shackle pin and may fail."],
      ["The circumference of a vessel 2 m in diameter is about:", "6.28 m", ["3.14 m", "4.00 m", "12.57 m"], "C = π × D = 3.1416 × 2 = 6.28 m."],
      ["A tag line is used to:", "Control rotation of a suspended load from a safe distance", ["Support the full load", "Replace the sling", "Measure the load"], "Never stand under a load, and keep hands clear of lines under tension."],
      ["Lockout and tagout is used to:", "Keep energy sources isolated while work is done", ["Mark where tools are stored", "Record lunch breaks", "Order spare parts"], "Each worker applies a personal lock so equipment cannot be energized."],
      ["Hot work such as welding or grinding near combustibles requires:", "A hot work permit and often a fire watch", ["No special steps", "Only a hard hat", "Only a radio"], "Plants control ignition sources carefully, especially in confined spaces and near flammables."],
      ["500 kg is about how many pounds?", "1100 lb", ["227 lb", "500 lb", "2200 lb"], "1 kg = 2.2046 lb, so 500 kg is about 1102 lb."],
      ["A drift pin (bull pin) is used to:", "Align bolt holes in plates and flanges", ["Cut plate", "Measure thickness", "Weld bevels"], "The tapered shank pulls holes into line so bolts can be installed."],
      ["Where do you find the hazards and first-aid steps for a coating or solvent?", "The Safety Data Sheet (SDS)", ["The invoice", "The shift schedule", "The crane chart"], "WHMIS requires the SDS to describe hazards and handling."],
      ["A steel plate 10 mm thick has a mass of about how many kg per square metre?", "78.5 kg", ["7.85 kg", "785 kg", "39 kg"], "Steel is about 7.85 kg per square metre per millimetre of thickness."],
      ["A full-body harness must be connected to:", "An approved anchor point rated for fall arrest", ["A pipe, if it looks sturdy", "A handrail", "Another worker's belt"], "Anchors must be designed for fall arrest loads. Use CSA Z259 equipment per training."],
      ["Which item lists a sling's working load limit?", "The sling tag or marking", ["The hard hat", "The crane's fuel tank", "The scaffold plank"], "Never use a sling with a missing or unreadable tag."],
      ["A scaffold should be used only after:", "It has been inspected and tagged as safe", ["It is wet", "It is partly built", "It is loaded for a test"], "A competent person checks the scaffold before each shift per your site rules."],
      ["Soapstone is used because:", "Its marks survive heat and are visible on steel", ["It cuts plate", "It cools welds", "It cleans bevels"], "Normal pencil and marker lines may burn off in hot work."]
    ]),
    2: bmQs([
      ["A two-leg sling with legs 30° from horizontal lifts 2000 kg. The tension in each leg is about:", "2000 kg", ["1000 kg", "1155 kg", "4000 kg"], "Tension = W ÷ (2 × sin 30°) = 2000 ÷ (2 × 0.5) = 2000 kg. Low sling angles greatly increase leg tension."],
      ["Why is water normally used for pressure testing vessels instead of air?", "Water is nearly incompressible, so far less energy is stored", ["Water is stronger", "Air is more expensive", "Water has no weight"], "A failure under pneumatic pressure can release huge energy."],
      ["A safety valve on a boiler is set to open at or below:", "The maximum allowable working pressure", ["Atmospheric pressure", "Twice the MAWP", "Zero gauge pressure"], "The valve protects the boiler from overpressure."],
      ["Flange bolts are commonly tightened in:", "A star or crisscross pattern in stages", ["Order around the circle", "Any random order", "One bolt fully first"], "A cross pattern compresses the gasket evenly."],
      ["The developed length of a rolled plate shell is based on:", "The diameter to the mid-thickness of the plate", ["The inside diameter only", "The outside diameter only", "The nozzle size"], "The neutral axis at mid-thickness keeps the length close to true."],
      ["What does a Canadian Registration Number (CRN) identify?", "A registered pressure equipment design", ["A welder", "A shipment of steel", "A crane"], "Designs are registered with provincial authorities so equipment can be installed."],
      ["Which ASME code section covers welding and brazing qualifications?", "Section IX", ["Section I", "Section V", "Section VIII only"], "Section I covers power boilers, V covers examination, and VIII covers pressure vessels."],
      ["Rolling boiler tubes into tube sheets is done to:", "Expand the tube so it seals and grips the hole", ["Cut the tube", "Cool the tube", "Increase wall thickness"], "A tube expander cold-works the tube against the hole to form a tight joint."],
      ["An economizer in a boiler:", "Heats feedwater using flue gas", ["Cools steam", "Burns fuel", "Collects ash only"], "It recovers heat and improves efficiency."],
      ["A superheater:", "Heats steam above its saturation temperature", ["Reduces pressure", "Condenses steam", "Cleans feedwater"], "Superheated steam improves efficiency and reduces moisture in turbines."],
      ["The steam drum of a boiler is where:", "Steam is separated from water", ["Fuel is stored", "Ash is cooled", "Feedwater is made"], "Internals such as separators remove moisture from steam."],
      ["Natural circulation in a water tube boiler works because:", "Hot water and steam are less dense than cooler water", ["Pumps are always used", "Gravity does not matter", "Water expands to fill a tube"], "Downcomers carry cooler denser water down and risers carry the mixture up."],
      ["Refractory lining in a boiler or furnace is used to:", "Insulate and protect steel from high temperature", ["Add strength to the plate", "Make the unit lighter", "Increase heat loss"], "It withstands high temperatures and reduces heat transfer to the casing."],
      ["Before entering a vessel, process lines are usually isolated by:", "Blinds or blanks and locks, not just closed valves", ["Closing a valve only", "Painting the valve", "Hanging a sign only"], "Positive isolation ensures no leak-through of energy or product."],
      ["A mobile crane's load chart shows that capacity:", "Decreases as the radius increases", ["Increases as the radius increases", "Is independent of radius", "Depends only on hook weight"], "The longer the reach, the lower the permitted load."]
    ]),
    3: bmQs([
      ["The developed length for a shell with a mean diameter of 2000 mm is about:", "6283 mm", ["3142 mm", "4000 mm", "12 566 mm"], "π × 2000 = 6283 mm."],
      ["A steel plate 12 mm thick, 2 m by 6 m has a mass of about:", "1130 kg", ["565 kg", "942 kg", "2260 kg"], "12 mm × 7.85 = 94.2 kg/m², and 12 m² × 94.2 = 1130 kg."],
      ["API 650 is a standard for:", "Welded steel tanks for oil storage", ["Boiler tube ratings", "Crane operation", "Scaffolds"], "API 650 covers design and construction of aboveground atmospheric storage tanks."],
      ["In the jacking method of tank erection:", "The top course is built first and lifted as lower courses are added", ["The bottom course is built last", "Cranes are never used", "The roof is built after the foundation sets"], "Jacks lift the assembled shell while the next course is added below."],
      ["A cylindrical tank 3 m in diameter and 6 m high holds about:", "42.4 m³", ["18.8 m³", "56.5 m³", "84.8 m³"], "π × 1.5² × 6 = 42.4 m³."],
      ["Pneumatic testing is treated with much more caution because:", "Compressed gas stores large energy and can release it violently", ["Air is expensive", "Air weighs less", "Gauges do not work"], "A hydrostatic test is generally preferred where practical."],
      ["A confined space attendant:", "Stays outside, monitors the entrants, and keeps communication", ["Enters to help weld", "Supervises the crane", "Leaves once entry starts"], "The attendant must be able to summon rescue and must not enter."],
      ["As ASME B16.5 flange class numbers increase (150, 300, 600), the pressure rating:", "Generally increases", ["Decreases", "Stays identical", "Applies only to gaskets"], "Higher classes are made for higher pressure at a given temperature."],
      ["A refractory dry-out is:", "A slow, controlled heating to remove water from new lining", ["Quick cooling", "Painting the lining", "Adding more water"], "Heating too fast can turn trapped water to steam and damage the lining."],
      ["For a stable lift, the hook should be:", "Directly above the load's centre of gravity", ["Beside the load", "Below the load", "At the heaviest corner"], "If the hook is not above the centre of gravity, the load will tilt."],
      ["A spreader beam in a lift is used to:", "Keep sling legs more vertical and reduce horizontal squeeze on the load", ["Increase load weight", "Replace tag lines", "Lengthen the crane boom"], "It controls forces on the load and lowers sling tension."],
      ["Overrolling a boiler tube can:", "Thin and work-harden the tube, causing leaks or cracks", ["Make it stronger in all cases", "Improve sealing always", "Reduce heat transfer"], "Expansion must stop at the specified amount."],
      ["Which instrument is best for checking elevation and levelness across a large tank base?", "Optical level or laser level", ["Tape measure", "Soapstone", "Chalk line"], "Over large distances only an optical or laser instrument stays accurate."],
      ["Longitudinal seams in a shell are typically staggered between courses to:", "Avoid a continuous weak line and concentrated stress", ["Save plate", "Reduce paint", "Make testing easier"], "Code and standards require seam offsets, so check your drawing."],
      ["Before hot work inside a vessel that held flammable liquid, you must:", "Clean, isolate, and test the atmosphere to the permit requirements", ["Weld immediately", "Open one hatch only", "Add water to the floor"], "Residues and vapours can ignite or release toxic gases."],
      ["Radiographic testing of vessel welds is mainly used to:", "Find internal weld defects", ["Measure bolt torque", "Check surface paint", "Test hardness"], "Radiography reveals porosity, slag, and lack of fusion."]
    ]),
    4: bmQs([
      ["Before welding repairs on a boiler pressure part, you need:", "An approved repair procedure and any authorization required by the provincial authority", ["Only a welder's word", "A new tool bag", "Nothing if it is small"], "Repairs and alterations to pressure equipment are regulated."],
      ["MDMT on a pressure vessel nameplate stands for:", "Minimum design metal temperature", ["Maximum design material thickness", "Mean design test", "Minimum diameter metal tolerance"], "It sets the lowest temperature at which the vessel may carry its design load."],
      ["Thermal expansion of large boilers is handled by:", "Sliding supports and expansion allowances", ["Rigid anchors everywhere", "Ignoring growth", "Heavier plate only"], "Boilers grow as they heat, and supports must allow that movement."],
      ["In turnaround planning, the critical path is:", "The longest chain of dependent tasks that sets the minimum duration", ["The shortest task list", "The cheapest items", "The safety meeting schedule"], "Delays to critical path tasks delay the whole outage."],
      ["A test pressure gauge dial range is commonly specified in ASME VIII as about:", "1.5 to 4 times the intended test pressure", ["Equal to the test pressure", "10 times the test pressure", "Half the test pressure"], "A gauge that is too low or too high a range is not accurate or safe."],
      ["A critical lift normally requires:", "A written lift plan reviewed by competent persons", ["A verbal agreement only", "No crane chart", "Just an extra tag line"], "Heavy, complex lifts and those near hazards need planning."],
      ["Group lockout is used when:", "Many workers are protected by one controlled lock and tag system", ["One person works alone", "There is no energy source", "The equipment is already scrap"], "Each worker still adds a personal lock to the group box."],
      ["API 653 covers:", "Inspection, repair, alteration, and reconstruction of aboveground storage tanks", ["Boiler water treatment", "Crane signals", "Hot tapping a pipeline"], "It is used once a tank has been placed in service."],
      ["Dissolved oxygen in boiler water is a problem because it:", "Causes pitting corrosion of metal", ["Raises steam quality", "Reduces scale", "Improves heat transfer"], "Deaerators and chemical treatment remove oxygen."],
      ["Creep in superheater tubes is:", "Slow deformation under stress at high temperature over time", ["Fast cracking when cold", "Wear from friction", "Rust under paint"], "Long service at high temperature uses up tube life."],
      ["LEL stands for:", "Lower explosive limit", ["Lowest exposure level", "Limited energy level", "Lowest electrical load"], "Below the LEL, a gas and air mix is too lean to burn, so entry is normally allowed only at readings well below it."],
      ["A relief valve must have a capacity that is:", "At least the maximum possible rate of steam or pressure generation", ["Equal to half the output", "Based on the paint colour", "Unrelated to the boiler"], "Otherwise the pressure could keep rising during an upset."],
      ["For a shell, out-of-roundness is typically checked with:", "A template or strike board and measurements at specified locations", ["The soapstone", "A tape measure only once", "Guessing"], "The code limits allowable out-of-roundness."],
      ["A WPS, PQR, and WPQ together show that:", "A procedure is qualified and the welder is qualified to use it", ["Steel is rust free", "A tank is full", "A boiler is stable"], "ASME IX uses these records to control weld quality."],
      ["After a hydrostatic test, you should:", "Drain and dry as specified and check for leaks and deformation", ["Leave it full forever", "Stand on top to relax", "Add pressure again"], "Draining may need venting to avoid vacuum damage, and test records are retained."],
      ["Hot tapping or cutting on an in-service line is allowed only:", "With a specific engineered procedure and approvals", ["Whenever a crew is ready", "If it is a Friday", "If the valve looks fine"], "Live-line work has serious fire, explosion, and release hazards."]
    ])
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get safety training employers ask for (commonly WHMIS, fall protection, confined space awareness, and site orientation; requirements vary)", "Contact the Boilermakers union or industrial contractors about sponsorship, and be ready to travel", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: safety, rigging, and basics", items: ["Learn site safety, hot work, confined space, and lockout procedures", "Learn rigging basics, signals, and hardware inspection", "Use hand tools and grinders safely and practise reading drawings", "Learn basic layout and fit-up", "Complete your first technical training block"] },
    { title: "Year 2: layout and fabrication", items: ["Develop patterns for cylinders and cones", "Learn plate rolling, forming, and fit-up of shells", "Learn flange and gasket installation", "Support welding crews and begin your own welding practice"] },
    { title: "Year 3: boilers and tanks", items: ["Learn boiler components, tube installation, and refractory", "Participate in tank erection and shell fit-up", "Learn hydrostatic testing and documentation", "Work in confined spaces under supervision with the right permits"] },
    { title: "Year 4 and beyond: advanced", items: ["Read code requirements from CSA B51 and ASME for the work you do", "Plan and lead lifts with the lift plan and signals", "Troubleshoot fit-up, alignment, and repair problems", "Mentor first-year apprentices and use the Red Seal standard to find gaps"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Ask your employer about the welding tickets or pressure welder certification you may need on top"] }
  ],
  glossary: [
    ["Blind (blank)", "A solid plate bolted between flanges to isolate a line or vessel."],
    ["Boiler", "A closed vessel that heats water or other fluid, often to make steam."],
    ["Bull pin", "A tapered steel pin used to align bolt holes."],
    ["Castable refractory", "A heat-resistant concrete-like lining poured or gunned into place."],
    ["Confined space", "A space with limited entry or exit and not designed for continuous occupancy, with possible atmospheric hazards."],
    ["Course", "One horizontal ring of plates in a tank shell."],
    ["CRN", "Canadian Registration Number identifying a registered pressure equipment design."],
    ["Deaerator", "A device that removes dissolved gases, especially oxygen, from feedwater."],
    ["Downcomer", "A tube that carries cooler water down from the steam drum."],
    ["Drum", "A cylindrical vessel in a boiler that holds water and steam."],
    ["Economizer", "A heat exchanger that preheats feedwater using flue gas."],
    ["Feedwater", "Water supplied to a boiler to replace steam produced."],
    ["Fit-up", "Positioning and securing parts before welding."],
    ["Header", "A large pipe or box that collects or distributes fluid among tubes."],
    ["Hydrostatic test", "A pressure test using water to prove strength and find leaks."],
    ["Jacking method", "Tank erection by building the top course first and lifting it as lower courses are added."],
    ["Lift plan", "A written plan for a lift including loads, equipment, and rigging."],
    ["MAWP", "Maximum allowable working pressure of a vessel or boiler."],
    ["Manway", "An opening large enough for a person to enter a vessel."],
    ["Nozzle", "A pipe connection welded to a vessel or boiler."],
    ["Refractory", "Heat-resistant material used to line furnaces and boilers."],
    ["Riser", "A tube that carries a steam and water mixture upward."],
    ["Safety valve", "A valve that opens automatically to relieve overpressure."],
    ["Shackle", "A U-shaped rigging connector with a pin."],
    ["Sling angle", "The angle between a sling leg and the horizontal."],
    ["Spreader beam", "A rigging beam that keeps sling legs more vertical."],
    ["Superheater", "A section of the boiler that raises steam temperature above saturation."],
    ["Tube sheet", "A plate drilled to hold the ends of tubes."],
    ["Turnaround", "A planned shutdown for inspection, maintenance, and repair of a plant."],
    ["Waterwall", "Boiler tubes forming the furnace walls that absorb radiant heat."]
  ],
  cards: [
    { front: "Circumference of a circle", back: "C = π × D" },
    { front: "Steel plate mass", back: "7.85 kg per square metre per millimetre of thickness" },
    { front: "Sling leg tension, two legs", back: "Load ÷ (2 × sin of angle from horizontal)" },
    { front: "Cylinder volume", back: "π × r² × h" },
    { front: "Acceptable oxygen range in confined spaces", back: "About 19.5% to 23% (follow your jurisdiction)" },
    { front: "Why hydro test and not pneumatic?", back: "Water stores little energy because it is nearly incompressible." },
    { front: "What does CRN stand for?", back: "Canadian Registration Number for pressure equipment designs" },
    { front: "ASME Section IX covers:", back: "Welding and brazing qualifications" },
    { front: "Water tube boiler", back: "Water inside the tubes, hot gases outside" }
  ],
  jobsIntro: "Look for industrial construction and maintenance contractors, boiler and pressure vessel shops, tank builders, power utilities, and the Boilermakers union. Many jobs are on outages, so be ready to travel.",
  tips: ["Bring a short resume, your safety tickets, and ID.", "Show you are willing to travel, work shifts, and work at heights.", "Contact union locals and industrial contractors directly, and follow up.", "Ask what PPE and tools you must bring and what the employer supplies."],
  forumTopics: ["Starting out", "Rigging and lifting", "Tanks, vessels, and boilers", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
  reference: [
    {
      title: "Sling leg tension factors",
      intro: "For a two-leg sling, each leg carries load ÷ 2 ÷ sin(angle from horizontal). The table gives the factor to multiply by half the load.",
      table: {
        head: ["Angle from horizontal", "Factor", "Per-leg tension for a 1000 kg load"],
        rows: [["90°", "1.000", "500 kg"], ["60°", "1.155", "577 kg"], ["45°", "1.414", "707 kg"], ["30°", "2.000", "1000 kg"]]
      },
      note: "Avoid sling angles below 45° where possible, and confirm your site rules and rigging chart."
    },
    {
      title: "Key formulas",
      list: ["Circumference = π × D. Example: 2 m diameter gives about 6.28 m.", "Cylinder volume = π × r² × h. Example: 3 m diameter, 6 m high gives about 42.4 m³.", "Steel plate mass = 7.85 kg per square metre per millimetre of thickness.", "Developed length of a rolled shell uses the mean diameter (diameter to mid-thickness).", "Hydrostatic head: 1 m of water is about 9.81 kPa.", "1 kg = 2.2046 lb and 1 in = 25.4 mm."]
    },
    {
      title: "Boiler components in order of flow (typical power boiler)",
      list: ["Feedwater passes through the economizer and enters the steam drum.", "Downcomers carry water to the lower headers and waterwall tubes.", "Waterwall risers carry steam and water back to the drum.", "The steam drum separates steam from water.", "Saturated steam goes through the superheater and then out to the turbine or process.", "Flue gas passes through superheater, reheater, economizer, and air preheater before the stack."],
      note: "Layouts differ by boiler type. Use your plant's drawings."
    },
    {
      title: "Flange classes and bolting",
      table: {
        head: ["Item", "Notes"],
        rows: [["ASME B16.5 classes", "150, 300, 600, 900, 1500, and 2500"], ["Tightening pattern", "Star or crisscross, in stages, and a final circular pass"], ["Gasket", "Match type and material to service as specified"], ["Bolt lubricant", "Use what the procedure specifies, since it affects torque"]]
      },
      note: "Follow your site's flange management procedure."
    },
    {
      title: "Codes and standards pointers",
      list: ["CSA B51: boiler, pressure vessel, and pressure piping code.", "ASME BPVC: Section I power boilers, Section IV heating boilers, Section V examination, Section VIII pressure vessels, Section IX welding qualifications.", "ASME B31.1 power piping and B31.3 process piping.", "API 650 new tanks and API 653 inspection and repair of tanks.", "CSA W59 and W47.1 for welded steel, and CSA Z259 for fall protection equipment.", "Provincial pressure equipment safety authorities, such as ABSA in Alberta, TSSA in Ontario, and Technical Safety BC, regulate registration and inspection."],
      note: "Always confirm which editions your province has adopted."
    },
    {
      title: "Confined space entry checklist",
      list: ["Valid entry permit and defined hazards.", "Positive isolation of energy and process lines, with locks applied.", "Atmospheric testing: oxygen first, then combustible gas, then toxic gas, before and during entry.", "Ventilation as required, lighting, and electrical protection suitable for the space.", "Trained attendant outside, a communication plan, and a rescue plan ready before anyone enters.", "Exit counted and permit closed when work is complete."]
    }
  ]
});
