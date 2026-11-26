// Heavy Equipment Operator (Excavator) guide. Practice questions are original study aids, not official Red Seal exam questions.

const exSeq = [1, 3, 0, 2, 2, 0, 3, 1, 0, 1, 3, 2, 3, 1, 2, 0, 2, 0, 1, 3];
const exBank = (rows, off) => rows.map(([q, right, wrong, explain], i) => {
  const pos = exSeq[(i + off) % exSeq.length];
  const options = [...wrong];
  options.splice(pos, 0, right);
  return { q, options, answer: pos, explain };
});

registerTrade({
  id: "heo-excavator",
  store: "heo-excavator",
  title: "Heavy Equipment Operator (Excavator)",
  name: "Heavy Equipment Operator (Excavator)",
  short: "excavator operation",
  category: "Heavy Equipment · Excavation · Utilities",
  summary: "Excavator operators dig trenches, basements, and ditches, load trucks, lay pipe, and shape ground to grade with hydraulic tracked or wheeled machines.",
  work: "You work outdoors on utility, building, road, and site-servicing projects. The job combines precise digging to depth and slope with lifting pipe, loading trucks, and backfilling, all while managing buried services, overhead lines, trench safety, and people working close to the machine.",
  duration: "Usually 2–3 years of hours-based training, varies by province",
  union: "International Union of Operating Engineers (IUOE)",
  unionUrl: "https://www.iuoe.org/",
  jobSearch: "excavator operator apprentice",
  journeySearch: "excavator operator",
  aliases: "excavator hoe trackhoe digger trench pipeline utility operator heavy equipment operator excavator red seal backhoe",
  tools: ["CSA Grade 1 safety boots", "Hard hat, glasses, hearing protection", "Hi-vis gear and work gloves", "Hand level and grade rod", "Locate flags and marking paint", "Field notebook and daily logbook"],
  insight: {
    skills: ["Digging to depth, slope, and grade", "Reading drawings, locates, and benchmarks", "Trench safety and safe lifting", "Truck loading and swing control"],
    hazards: ["Trench collapse: slope, shore, or use a box, and never stand in unprotected trenches", "Contact with buried or overhead utilities: locate first, hand dig near marks", "Swing and tail-swing strikes: barricade and keep people clear", "Unstable ground and overloading: check load charts and ground conditions"],
    settings: ["Municipal water, sewer, and storm projects", "Residential and commercial foundations", "Pipelines and utility right-of-way", "Quarries, demolition, and site development"]
  },
  toolGroups: [
    {
      title: "Day-one gear, buy once and buy well",
      note: "Professional-grade PPE and small kit built for mud, cold, and long shifts. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
      items: [
        { name: "CSA Grade 1 waterproof safety boots with a metatarsal option", why: "Trenches, rocks, and pipe all put feet at risk. Waterproof boots with good traction on clay are essential.", search: "CSA Grade 1 waterproof safety boots Red Wing Terra Kodiak" },
        { name: "CSA Z94.1 hard hat with chin strap", why: "Required outside the cab near trenches and traffic. A chin strap stops it falling into a trench when you bend.", search: "CSA Z94.1 hard hat Type 1 chin strap Bullard MSA" },
        { name: "Safety glasses (CSA Z94.3), clear and tinted", why: "Flying spoil, dust, and glare all matter. Anti-fog helps in cold weather.", search: "CSA Z94.3 safety glasses anti fog tinted Uvex" },
        { name: "Hearing protection: earmuffs and plugs", why: "Hydraulic hammer and engine noise accumulate across a shift. Having both options helps.", search: "3M Peltor earmuffs earplugs CSA Class A" },
        { name: "Hi-vis jacket or vest (CSA Z96 Class 2 or 3)", why: "Truck drivers, spotters, and pipe crews need to see you whenever you leave the cab.", search: "CSA Z96 class 2 hi vis jacket reflective" },
        { name: "Insulated and cut-resistant gloves", why: "Hands touch chain, pipe, and cold steel. Keep two or three pairs for different tasks.", search: "Mechanix insulated work gloves cut resistant" },
        { name: "Waterproof rain jacket, pants, and rubber over-boots", why: "Trench and wet-weather work requires dry gear to keep you alert and safe.", search: "hi vis rain suit rubber overboots work" },
        { name: "Headlamp and flashlight", why: "Dawn and dusk inspections, and checking under the machine and the trench bottom.", search: "Petzl headlamp rechargeable Streamlight work flashlight" },
        { name: "Thermos, insulated lunch cooler, and water bottle", why: "Long, remote shifts with little shelter. Hydration and food matter for concentration.", search: "insulated lunch cooler thermos jobsite water bottle" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your operator and foreman what holds up on your sites.",
      items: [
        { name: "Grease gun and extra grease cartridges", why: "Excavators have many pivot points to grease daily. Quality guns reduce mess and wasted grease.", search: "Lincoln lever grease gun 14 oz Milwaukee grease gun" },
        { name: "Round-point shovel and a spade for hand digging near utilities", why: "Hand digging around marked utilities and cleaning pipe bedding or trench bottoms.", search: "fiberglass round point shovel trenching spade" },
        { name: "Hand level and 7.5 m (25 ft) tape", why: "Checking depth, pipe invert, and distance from a benchmark or offset stake.", search: "Stanley FatMax tape 25 ft Johnson hand level" },
        { name: "Grade rod (metric and imperial) and a 2 m folding rule", why: "Reading elevation at a laser or level. Learn to read it fast and read it right.", search: "5m grade rod metric builders leveling rod folding ruler" },
        { name: "Marking paint, flags, and lumber crayon", why: "Mark spoil piles, utility offsets, and hazards. Match the locate colour code used on your site.", search: "Markal inverted marking paint utility flags" },
        { name: "Pocket tape, clipboard, and daily log notebook", why: "Record depths, locates, daily hours, and inspection results.", search: "Rite in the Rain clipboard notebook" },
        { name: "Lifting sling and shackle knowledge pack (rigging reference card)", why: "Pipe laying means rigging. A pocket reference supports your training; employers supply the rated gear.", search: "rigging hitch reference card sling angle pocket guide" },
        { name: "Cold-weather layers: base layers, balaclava, boot insoles", why: "Winter dig seasons are long in Canada. Warm operators make fewer mistakes.", search: "merino base layer balaclava winter boot insoles" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the employer or tied to a specific job. Ask before buying.",
      items: [
        { name: "Full-body harness and lanyard (CSA Z259)", why: "For work from trailers, towers, or when securing equipment. Training comes first, and the employer normally supplies it.", search: "CSA Z259 full body harness lanyard" },
        { name: "Respirator (half-mask with P100 or N95)", why: "Silica dust, concrete cutting, and contaminated soil call for the right respiratory protection and fit testing.", search: "3M half mask respirator P100 filters N95" },
        { name: "Pipe laser or rotating laser receiver", why: "Used for pipe grade and depth control. Usually owned by the contractor.", search: "pipe laser rotating laser receiver construction" },
        { name: "Two-way radio or headset", why: "Spotter and crew communication on busy sites. Typically company-issued.", search: "Motorola two way radio jobsite waterproof" },
        { name: "Portable gas detector for confined or contaminated trenches", why: "Trenches can collect gases. The employer supplies and calibrates the right detector for your hazards.", search: "4 gas detector confined space personal monitor" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for trench math, drawings, and hydraulic systems. Check with your school and exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Volumes, slopes, trigonometry, and production calculations.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Engineer's scale (metric) and 30 cm ruler", why: "Reading site plans, profiles, and sections.", search: "engineer scale metric triangular ruler 30 cm" },
        { name: "Mechanical pencils (0.5 mm) and vinyl erasers", why: "Neat trench cross-section sketches and exam work.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm" },
        { name: "Graph paper pad", why: "Draw trench profiles, slope triangles, and cut-and-fill sections.", search: "graph paper pad 5mm grid" },
        { name: "Highlighters and binder dividers", why: "Organize notes on hydraulics, trench safety, and code by topic.", search: "highlighters binder dividers tabs" },
        { name: "Rite in the Rain notebook", why: "Weatherproof logs for measurements and daily notes.", search: "Rite in the Rain field notebook" },
        { name: "Printed or offline copy of your province's excavation and trenching rules", why: "Trench depth, sloping, and spoil rules differ by province and show up in school and on exams. Use your own province's current text.", search: "occupational health and safety construction regulations excavation trenching Canada" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare, plus trade profiles.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "International Union of Operating Engineers (IUOE)", desc: "Operator training and apprenticeship information.", url: "https://www.iuoe.org/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Safety fact sheets on excavation, WHMIS, and hazards.", url: "https://www.ccohs.ca/" },
        { name: "Infrastructure Health & Safety Association (IHSA)", desc: "Ontario construction safety training and trenching resources.", url: "https://www.ihsa.ca/" },
        { name: "WorkSafeBC", desc: "BC excavation, shoring, and mobile equipment guides.", url: "https://www.worksafebc.com/" },
        { name: "CSA Group", desc: "Standards publisher for PPE and machinery standards.", url: "https://www.csagroup.org/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your operator's manual, training materials, and provincial regulations.",
      items: [
        { name: "Excavator controls for beginners", desc: "Joystick patterns, swing, boom, stick, and bucket movements.", url: "https://www.youtube.com/results?search_query=excavator+controls+beginner+tutorial" },
        { name: "Excavator daily inspection", desc: "Walk-around checks, greasing points, and fluids.", url: "https://www.youtube.com/results?search_query=excavator+daily+walk+around+inspection" },
        { name: "Trench safety: sloping, shoring, and trench boxes", desc: "Protective systems and why they matter.", url: "https://www.youtube.com/results?search_query=trench+safety+sloping+shoring+trench+box" },
        { name: "Digging a trench to grade", desc: "Setting depth and slope using lasers and grade rods.", url: "https://www.youtube.com/results?search_query=excavator+digging+trench+to+grade+laser" },
        { name: "Loading trucks with an excavator", desc: "Positioning, swing, and loading technique.", url: "https://www.youtube.com/results?search_query=excavator+loading+trucks+technique" },
        { name: "Laying pipe with an excavator", desc: "Rigging, lifting, and placing pipe in a trench.", url: "https://www.youtube.com/results?search_query=excavator+laying+pipe+trench+rigging" },
        { name: "Excavator stability and lifting", desc: "Load charts, stability, and lifting points.", url: "https://www.youtube.com/results?search_query=excavator+lifting+capacity+stability+load+chart" },
        { name: "Utility locating and hydrovac excavation", desc: "Locates, daylighting, and avoiding strikes.", url: "https://www.youtube.com/results?search_query=utility+locates+hydrovac+daylighting+excavation+safety" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for excavator work yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: excavator operator career podcast", desc: "Open the results and listen with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=excavator+operator+career+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: excavator operator tips (listen-along)", desc: "Operators discussing technique, efficiency, and trenching habits.", url: "https://www.youtube.com/results?search_query=excavator+operator+tips+podcast" },
        { name: "YouTube: utility contractor and site servicing podcast", desc: "Water, sewer, and storm installation talk.", url: "https://www.youtube.com/results?search_query=utility+contractor+underground+construction+podcast" },
        { name: "YouTube: trench safety talks", desc: "Cave-in lessons and protective system discussions.", url: "https://www.youtube.com/results?search_query=trench+safety+toolbox+talk+podcast" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "For planning, productivity, and leadership as you move toward the Red Seal and a lead hand role.",
      items: [
        { name: "YouTube: heavy civil estimating and production podcast", desc: "Production rates, cycle times, and job planning.", url: "https://www.youtube.com/results?search_query=heavy+civil+construction+estimating+production+podcast" },
        { name: "YouTube: construction safety leadership podcast", desc: "Hazard assessment, due diligence, and supervision.", url: "https://www.youtube.com/results?search_query=construction+safety+leadership+podcast" },
        { name: "YouTube: Red Seal exam study tips (heavy equipment)", desc: "Preparing for trade exams and managing test anxiety.", url: "https://www.youtube.com/results?search_query=red+seal+exam+study+tips+heavy+equipment+operator" }
      ]
    }
  ],
  practiceBank: {
    1: exBank([
      ["Which document describes a product's hazards and first-aid measures?", "Safety Data Sheet (SDS)", ["Bill of lading", "Load chart", "Locate ticket"], "WHMIS requires SDSs for hazardous products such as fuel, hydraulic oil, and cleaners."],
      ["On an excavator, the part that connects the boom to the bucket is called the:", "Stick (dipper arm)", ["Counterweight", "Swing bearing", "Idler"], "The boom attaches to the upper structure and the stick attaches to the boom end. The bucket attaches to the stick."],
      ["The counterweight at the rear of the excavator:", "Balances the machine when digging and lifting", ["Stores fuel", "Increases bucket size", "Drives the tracks"], "Tail swing of the counterweight is also a strike hazard, so keep people clear."],
      ["Before swinging the upper structure you should:", "Check that no one is in the swing or tail-swing area", ["Honk and swing immediately", "Look only at the bucket", "Swing in the dark to save time"], "Both the bucket side and the counterweight side sweep an area. Use barricades and a spotter."],
      ["Before digging anywhere on a site you must:", "Have underground utility locates completed", ["Dig a test hole with the bucket teeth", "Call after you hit something", "Rely on memory of the last job"], "All provinces require locates before ground disturbance. Follow the marks and any hand-dig rules."],
      ["Which fluid powers the boom, stick, and bucket movements?", "Hydraulic oil", ["Engine coolant", "Diesel exhaust fluid", "Gear oil only"], "Hydraulic pumps send pressurized oil to cylinders and motors."],
      ["Before leaving the seat you should:", "Lower the bucket to the ground, raise the safety lock lever, and shut down", ["Leave the bucket suspended", "Leave the engine on and controls unlocked", "Park next to a trench edge"], "The hydraulic lock lever prevents accidental movement if a control is bumped."],
      ["Which protective systems are used in trenches?", "Sloping, shoring, or a trench box", ["Warning tape only", "A bigger bucket", "A hard hat only"], "Regulations require cave-in protection beyond a set depth that varies by province."],
      ["A trench 1.5 m deep is about how many feet?", "4.9 ft", ["2.5 ft", "6.1 ft", "3.3 ft"], "1 m = 3.281 ft, so 1.5 m ≈ 4.9 ft."],
      ["A diesel fuel fire is classified as:", "Class B", ["Class A", "Class C", "Class D"], "Class B means flammable liquids."],
      ["Spoil piles (excavated material) must be:", "Kept back from the trench edge as regulations require", ["Piled right at the edge to save time", "Used as a walkway", "Placed on top of utility marks"], "Spoil near the edge adds load to the wall and can fall in."],
      ["With a quick coupler, before digging you should:", "Confirm the bucket is fully locked and the safety pin or lock is engaged", ["Assume it is locked", "Shake the bucket by travelling fast", "Remove the pin to see inside"], "A bucket that releases during work is a crush hazard."],
      ["Seat belts in an excavator cab are:", "Required whenever the machine is operating", ["Optional on level ground", "Only needed on highways", "Needed only for trench work"], "The ROPS or cab only protects you if you stay in the seat."],
      ["A Red Seal endorsement shows:", "You met a national standard recognized across participating provinces and territories", ["You are exempt from site rules", "You own the excavator", "You are an engineer"], "Red Seal supports mobility for journeypersons."],
      ["A hydraulic hose leaks a fine spray. You should:", "Shut down, relieve pressure, and have it repaired. Never use your hand to find leaks", ["Wrap it with tape and keep working", "Feel for the leak with a glove", "Increase the engine speed"], "Fluid injection injuries need immediate medical care."]
    ], 0),
    2: exBank([
      ["The four basic parts of an excavator dig cycle are:", "Dig, swing loaded, dump, swing empty", ["Idle, drive, park, stop", "Grease, fuel, wash, test", "Lift, pin, lock, unload"], "Shortening the swing and keeping a smooth rhythm improves production."],
      ["For best undercarriage life and control, you normally travel with:", "The drive sprockets at the rear and the idlers leading", ["The drive sprockets at the front", "Tracks loose", "The boom out sideways"], "This keeps the short, tight side of the track at the rear. Check your manual for how to identify the sprockets."],
      ["Which attachment gives the best result for finish grading a slope or ditch bottom?", "Smooth-edge ditching or grading bucket", ["Hydraulic hammer", "Rock bucket with long teeth", "Auger"], "A wide, smooth bucket leaves a flat finished surface."],
      ["A sewer pipe laid at 1% grade over 30 m drops:", "0.30 m", ["0.03 m", "3.0 m", "0.10 m"], "1% means 1 m of fall per 100 m. 30 m × 0.01 = 0.30 m."],
      ["In a trench with 1:1 sloped sides, the trench is 3 m deep and 1 m wide at the bottom. How wide is it at the top?", "7 m", ["4 m", "5 m", "10 m"], "Each side adds 3 m (1:1 over 3 m depth), so 1 + 3 + 3 = 7 m."],
      ["When loading a truck, it is safest to:", "Swing the bucket in view and never over the cab", ["Swing over the cab to save time", "Load the truck while the driver is outside", "Drop material from a height"], "Loading over the cab risks falling rock and crushing. Position so the driver sees you."],
      ["When using a hydraulic hammer you should:", "Avoid blank firing and prying with the tool", ["Use it to pull logs", "Run it without pressure", "Hammer while swinging the boom"], "Blank firing and prying damage the tool and the machine."],
      ["Lifting capacity of an excavator is generally lowest:", "Over the side of the tracks", ["Over the front or rear of the tracks", "With the bucket at its lowest", "With the boom raised vertically"], "Stability is greatest over the end of the tracks. Always use the chart for your machine and configuration."],
      ["What is the main purpose of a thumb attachment?", "Grabbing and handling rock, logs, and debris", ["Measuring depth", "Increasing digging depth", "Cooling hydraulic oil"], "A thumb works with the bucket like a hand."],
      ["Backfilling around a pipe should usually be done:", "In compacted lifts using suitable material as specified", ["In a single deep layer", "With frozen clumps", "With large boulders against the pipe"], "Lifts allow compaction and protect the pipe from point loads."],
      ["Track sag is checked:", "As described in the operator's manual, with the machine on firm ground", ["Only after the track falls off", "By driving at full speed", "With the engine off and tracks in a trench"], "Tension specifications differ by machine."],
      ["What does a machine's swing brake do?", "Holds the upper structure in position when parked", ["Slows the engine", "Releases the boom", "Locks the tracks"], "Swing brakes keep the upper structure from rotating when not commanded."],
      ["Colour of paint used by locate services for sewer lines in the North American uniform colour code is:", "Green", ["Red", "Blue", "Orange"], "Red is electric, yellow gas or oil, orange communications, blue potable water, green sewer and drain."],
      ["The best place to dump spoil that you will need for backfill is:", "A safe distance from the trench, kept clear of locates and drainage", ["Directly on top of a gas line mark", "At the trench edge", "In the roadway"], "Plan spoil placement before you dig."],
      ["Before walking in front of a track machine, make sure the operator:", "Has seen you and acknowledged you", ["Is looking at the bucket only", "Is wearing hearing protection", "Has the radio turned up"], "Eye contact and a clear signal avoid misunderstandings."]
    ], 4),
    3: exBank([
      ["Why must soil type be classified before working in a trench?", "It determines the slope angle or protective system required", ["It changes the bucket colour", "It sets fuel use", "It affects hydraulic pressure"], "Weaker soils need flatter slopes or stronger shoring. Classification is made as the regulation requires."],
      ["Previously disturbed or backfilled soil is treated as:", "Weaker and more likely to collapse", ["Stronger than natural soil", "Unaffected by water", "Always safe to dig vertically"], "Disturbed ground has lost its natural bond."],
      ["Boom cylinder load-holding (check) valves exist to:", "Prevent the boom from dropping if a hose fails", ["Increase engine speed", "Cool the oil", "Count hours"], "They are essential for safe lifting. Lifting without them can be prohibited."],
      ["A 1.0 m³ bucket with a 90% fill makes 120 cycles per hour on a 50-minute hour. Production is about:", "90 m³ per hour", ["108 m³", "120 m³", "72 m³"], "1.0 × 0.9 × 120 × (50 ÷ 60) = 90 m³ per hour (loose)."],
      ["Each bucket pass carries 1.5 m³ loose. A truck holds 12 m³. How many passes fill it?", "8", ["6", "10", "12"], "12 ÷ 1.5 = 8."],
      ["If you strike a natural gas line, you should:", "Stop, shut down if safe, evacuate, and call 911 and the utility", ["Restart the engine to move away", "Cover the leak with soil", "Check by smell and keep working"], "An engine is an ignition source. Move upwind and follow your emergency plan."],
      ["The load chart for an excavator lift is based on:", "Radius, height, and configuration, with rated lifting points used", ["Bucket colour", "Length of the shift", "Fuel level only"], "The manufacturer's chart and rigging weights determine safe loads."],
      ["Vibration from nearby traffic or equipment can:", "Reduce trench wall stability", ["Strengthen the walls", "Have no effect", "Dry the soil"], "Surcharge and vibration raise cave-in risk."],
      ["Daylighting a utility means:", "Exposing it by careful excavation, often by hand or vacuum, to confirm location", ["Digging only at noon", "Wrapping it in plastic", "Moving it by machine"], "Positive identification prevents strikes."],
      ["A rotating laser on a tripod and a receiver on the stick helps you:", "Dig to a precise elevation", ["Tune the engine", "Measure oil pressure", "Rotate the cab"], "The receiver shows above or below grade."],
      ["Pipe invert elevation is:", "The elevation of the bottom inside of the pipe", ["The outside top of the pipe", "The lid elevation", "The trench width"], "Pipe grade is set by inverts at each manhole or structure."],
      ["Water in a trench must be:", "Controlled by pumping or dewatering as needed", ["Ignored", "Left to freeze overnight", "Pushed under the shoring"], "Water weakens walls and floors and affects bedding."],
      ["Which hazard is greatest when swinging near an overhead power line?", "Contact leading to electrocution or arcing", ["Dust", "Wind noise", "Sun glare"], "Overhead line clearance requirements depend on voltage and province."],
      ["A site-specific lift plan is most likely needed when:", "Loads are heavy, awkward, or near limits, or people are exposed", ["The sun is out", "The bucket is empty", "No lifts are planned"], "Planning identifies chart limits, rigging, and exclusion zones."],
      ["When working on a slope with an excavator, it is best to:", "Travel straight and keep the bucket low, within slope limits", ["Cross at an angle at speed", "Swing uphill with the load high", "Remove the seat belt"], "Keep the centre of gravity low and follow the manual."]
    ], 9),
    4: exBank([
      ["A cylinder with 0.010 m² of piston area at 20 MPa produces about:", "200 kN", ["20 kN", "2 kN", "2,000 kN"], "Force = pressure × area = 20,000,000 Pa × 0.010 m² = 200,000 N."],
      ["A trench is 60 m long, 1.2 m wide, and 2.0 m deep. With 25% swell, the loose volume is about:", "180 m³", ["144 m³", "120 m³", "225 m³"], "Bank = 60 × 1.2 × 2.0 = 144 m³. Loose = 144 × 1.25 = 180 m³."],
      ["How many 12 m³ truck loads are needed for 180 m³ loose?", "15", ["12", "18", "20"], "180 ÷ 12 = 15."],
      ["All hydraulic functions on an excavator are slow. The most likely cause is:", "A problem in the common supply such as low oil, worn pump, or relief setting", ["A worn bucket tooth", "A cracked mirror", "A stuck seat"], "Shared supply faults affect all functions. A single slow function points to that circuit."],
      ["Production is generally highest when:", "Dig depth is moderate relative to maximum and swing angle is small", ["Digging at maximum depth", "Swinging 180° every cycle", "Working with a dull bucket"], "Short cycles come from short swings and efficient depth."],
      ["The purpose of regular oil sampling is to:", "Trend wear metals and contaminants to plan maintenance", ["Change oil colour", "Save paint", "Avoid daily checks"], "Lab results show wear patterns before failure."],
      ["Diesel exhaust fluid (DEF) is used in SCR systems to:", "Reduce nitrogen oxide emissions", ["Cool the engine", "Lubricate tracks", "Increase hydraulic pressure"], "An empty DEF tank can cause engine derate on many machines. Follow the manual."],
      ["A site has a gas main, overhead lines, and a school nearby. The right step before digging is:", "A written hazard assessment with a plan for clearances, locates, and traffic", ["Start quickly to finish early", "Rely on a coworker's memory", "Ignore overhead lines"], "Hazard assessment is a legal duty and good practice."],
      ["If the engine stalls with the boom raised, you should:", "Follow the manual's emergency lowering procedure and keep people clear", ["Climb under the bucket", "Cut a hose to lower it", "Leave it and walk away without telling anyone"], "Manuals describe safe lowering using accumulator pressure or manual valves."],
      ["Moving a machine on a trailer requires confirming:", "Weight, width, height, and permits for the route", ["The bucket's colour", "The fuel price", "The radio channel"], "Overweight or oversize loads are regulated and often require permits."],
      ["When laying pipe with an excavator, a pipe weighing close to the machine's chart limit should:", "Be lifted only if the chart and rigging allow it with a safety margin, otherwise use a different machine", ["Be lifted quickly", "Be lifted with the bucket fully extended", "Be lifted while travelling"], "Never exceed chart limits. Use the rated lifting point and rigging."],
      ["A competent worker for trench protection is generally someone who:", "Is trained and experienced to identify hazards and has authority to correct them", ["Owns a truck", "Is the youngest on site", "Has the loudest voice"], "Regulations define competence by knowledge and authority."],
      ["A 3 m deep trench is cut with 1:1 side slopes and a 1 m bottom width. The cross-section area is:", "12 m²", ["7 m²", "21 m²", "9 m²"], "Top width 7 m. Area = (1 + 7) ÷ 2 × 3 = 12 m²."],
      ["Which describes due diligence?", "Taking all reasonable precautions to protect worker safety", ["Doing whatever is fastest", "Relying on luck", "Waiting for an accident"], "Due diligence is a core concept in Canadian OHS law."],
      ["Overheating hydraulic oil is most often caused by:", "A plugged cooler, low oil, or a continuous relief condition", ["A new bucket", "A tight shoe lace", "Cool weather"], "Heat builds when flow is forced through relief or when cooling is restricted."],
      ["Why use a spotter when swinging in a congested site?", "To cover blind spots and coordinate with people and vehicles", ["Because the machine is light", "To save fuel", "To avoid the seat belt"], "Spotters reduce strike risk where you cannot see."]
    ], 14)
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS, first aid, fall protection, and ground disturbance awareness; requirements vary)", "Apply to utility, site, and road contractors and union locals such as IUOE", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: safe basics", items: ["Learn PPE, machine mounting, lockout, and spotter signals", "Do daily walk-arounds and greasing", "Practise controls, travel, and digging in open areas with supervision", "Learn locate marks and ground disturbance rules", "Build your personal kit (see Buying tools)"] },
    { title: "Year 2: trenching and loading", items: ["Dig trenches to depth and slope", "Learn sloping, shoring, and trench boxes", "Load trucks and manage spoil placement", "Backfill and compact in lifts"] },
    { title: "Year 3: pipe, lifting, and grade control", items: ["Place pipe with rigging and use load charts", "Work with lasers and grade rods, and learn machine control", "Handle dewatering, bedding, and restoration", "Work around live traffic and utilities"] },
    { title: "Year 4 and beyond: planning and leadership", items: ["Plan production, truck cycles, and sequences", "Diagnose hydraulic and engine issues and report them clearly", "Lead hazard assessments and mentor apprentices", "Use the Red Seal standard to find gaps in your experience"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check federal completion grant and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["Backfill", "Material used to refill an excavation."],
    ["Bank volume", "Volume of material in place before it is dug."],
    ["Bedding", "Material placed under and around a pipe to support it."],
    ["Boom", "The first section of the arm, hinged to the upper structure."],
    ["Bucket", "The digging attachment at the end of the stick."],
    ["Counterweight", "Weight at the rear of the upper structure that balances the load."],
    ["Daylighting", "Exposing a buried utility to confirm its position."],
    ["Dewatering", "Removing water from an excavation."],
    ["Dig cycle", "Dig, swing loaded, dump, and swing empty."],
    ["Hydraulic hammer", "A breaker attachment that chisels rock or concrete."],
    ["Invert", "The elevation of the inside bottom of a pipe."],
    ["Load chart", "A manufacturer's table of lifting capacity at set radii and heights."],
    ["Locate", "Marking of underground utilities by utility owners or locators."],
    ["Pilot controls", "Joysticks that send low-pressure signals to hydraulic valves."],
    ["Quick coupler", "A device that lets the operator change attachments from the cab."],
    ["Radius", "Horizontal distance from the swing centre to the load or bucket."],
    ["Relief valve", "A valve that limits hydraulic pressure."],
    ["Shoring", "A system that supports trench walls."],
    ["Sloping", "Cutting trench walls back at an angle to prevent collapse."],
    ["Spoil", "Material removed from an excavation."],
    ["Stick", "The second section of the arm, between boom and bucket."],
    ["Surcharge", "Extra load near a trench edge, such as spoil or equipment."],
    ["Swing bearing", "The large bearing that lets the upper structure rotate."],
    ["Tail swing", "The area swept by the rear of the upper structure when rotating."],
    ["Thumb", "An attachment that grips material against the bucket."],
    ["Trench box", "A rigid shield that protects workers in a trench."],
    ["Undercarriage", "Tracks, rollers, idlers, and sprockets."],
    ["Upper structure", "The rotating portion containing cab, engine, and counterweight."]
  ],
  cards: [
    { front: "Dig cycle", back: "Dig, swing loaded, dump, swing empty." },
    { front: "Trench protection options", back: "Sloping, shoring, or trench box." },
    { front: "1 m in feet", back: "3.281 ft." },
    { front: "Pipe grade 1%", back: "10 mm of fall per metre." },
    { front: "Locate colour for sewer", back: "Green." },
    { front: "Hydraulic force", back: "Force = pressure × area." },
    { front: "Safety lock lever", back: "Raise it before leaving the seat." },
    { front: "Gas line strike response", back: "Stop, shut down if safe, evacuate, and call 911 and the utility." },
    { front: "Lift capacity over the side", back: "Generally lowest. Use the chart." },
    { front: "Top width of a sloped trench", back: "Bottom width + 2 × (depth × horizontal ratio)." }
  ],
  jobsIntro: "Look for apprentice and operator roles with utility and site-servicing contractors, general contractors, municipalities, pipeline companies, and quarry or demolition operations. Many jobs ask for a valid driver's licence, ground disturbance training, and flexibility for seasonal or out-of-town work.",
  tips: [
    "Treat every locate mark as the minimum information. Confirm by hand or vacuum digging where required.",
    "Plan where the spoil, trucks, and pipe will go before the first bucket.",
    "Get a second opinion on any lift that feels close to the chart limits.",
    "Keep your hours logbook current and signed by your sponsor."
  ],
  forumTopics: [
    "Starting out as an excavator operator",
    "Red Seal and exam prep",
    "Tools and gear",
    "Province and code questions",
    "Trench safety and soil classification",
    "Grade control, lasers, and machine control"
  ],
  reference: [
    {
      title: "Key formulas",
      list: ["Trench volume (bank) = length × width × depth", "Trench with sloped sides: top width = bottom width + 2 × depth × horizontal ratio", "Trapezoid cross-section area = (bottom width + top width) ÷ 2 × depth", "Loose volume = bank volume × (1 + swell)", "Hydraulic force = pressure × area", "Production = bucket volume × fill factor × cycles per hour × efficiency", "Pipe fall = length × slope (1% over 30 m is 0.30 m)"]
    },
    {
      title: "Conversions",
      list: ["1 m = 3.281 ft and 1 in = 25.4 mm", "1 m³ ≈ 1.308 yd³", "1 MPa = 1,000 kPa ≈ 145 psi", "1 tonne = 1,000 kg ≈ 2,204.6 lb", "1 L ≈ 0.264 US gal", "1 kN ≈ 101.97 kgf ≈ 225 lbf"]
    },
    {
      title: "Common pipe grades",
      table: { head: ["Grade", "Fall per metre", "Fall over 30 m"], rows: [["0.5%", "5 mm", "150 mm"], ["1%", "10 mm", "300 mm"], ["2%", "20 mm", "600 mm"], ["5%", "50 mm", "1.5 m"]] },
      note: "Minimum grades come from your project specifications and local standards."
    },
    {
      title: "Uniform utility locate colours (North America)",
      table: { head: ["Colour", "Meaning"], rows: [["Red", "Electric power lines and cables"], ["Yellow", "Gas, oil, steam, petroleum"], ["Orange", "Communication, alarm, signal"], ["Blue", "Potable water"], ["Green", "Sewer and drain"], ["Purple", "Reclaimed water"], ["Pink", "Temporary survey markings"], ["White", "Proposed excavation"]] },
      note: "Always confirm the marking practices and tolerance zones of your own province."
    },
    {
      title: "Sloped trench sizes (1:1 sides, 1 m bottom width)",
      table: { head: ["Depth", "Top width", "Cross-section area"], rows: [["1.5 m", "4.0 m", "3.75 m²"], ["2.0 m", "5.0 m", "6.0 m²"], ["3.0 m", "7.0 m", "12.0 m²"]] },
      note: "Slope angles and maximum depths depend on soil classification and the regulation in your province."
    },
    {
      title: "Daily walk-around checklist",
      list: ["Engine oil, coolant, hydraulic oil, fuel, and DEF levels", "Hoses, fittings, and cylinders for leaks or damage", "Bucket teeth, cutting edge, and quick coupler lock", "Tracks, rollers, sprockets, and idlers", "Swing area clear, guards, lights, mirrors, camera, and alarm working", "Seat belt, safety lock lever, and fire extinguisher", "Grease boom, stick, and bucket pivots as scheduled", "Record defects in the logbook and report them"]
    },
    {
      title: "Standards and regulation pointers",
      list: ["Your provincial OHS regulation covers excavation, shoring, spoil, and mobile equipment", "Provincial one-call or locate services must be called before ground disturbance", "CSA standards cover PPE: Z94.1 hard hats, Z94.3 eye protection, Z94.2 hearing, Z96 high-visibility garments", "WHMIS and SDS apply to fuel, oil, and cleaners", "Operator's manual and load chart set machine limits"],
      note: "Rules vary by province. Use your own jurisdiction's current text."
    }
  ]
});
