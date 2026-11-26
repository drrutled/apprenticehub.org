// Heavy Equipment Operator (Dozer) guide. Practice questions are original study aids, not official Red Seal exam questions.

const dozerSeq = [2, 0, 3, 1, 1, 3, 0, 2, 3, 2, 0, 1, 2, 0, 3, 1, 0, 3, 1, 2];
const dozerBank = (rows, off) => rows.map(([q, right, wrong, explain], i) => {
  const pos = dozerSeq[(i + off) % dozerSeq.length];
  const options = [...wrong];
  options.splice(pos, 0, right);
  return { q, options, answer: pos, explain };
});

const dozerPpeNote = "Professional-grade PPE and small kit that hold up to mud, dust, and vibration. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.";

registerTrade({
  id: "heo-dozer",
  store: "heo-dozer",
  title: "Heavy Equipment Operator (Dozer)",
  name: "Heavy Equipment Operator (Dozer)",
  short: "dozer operation",
  category: "Heavy Equipment · Earthmoving · Construction",
  summary: "Dozer operators push, spread, rip, and grade earth and rock with tracked machines to build roads, pads, pits, and landfills to design grade.",
  work: "You work outdoors in all weather, often at the centre of a site's earthmoving. Days involve stripping topsoil, building roads and pads, pushing material, ripping hard ground, and finishing to stakes or GPS grade. The work demands steady hands, spatial judgment, daily machine checks, and constant awareness of people, slopes, and buried or overhead services.",
  duration: "Usually 1–2 years (Job Bank), varies by province",
  union: "International Union of Operating Engineers (IUOE)",
  unionUrl: "https://www.iuoe.org/",
  profileUrl: "https://red-seal.ca/eng/trades/heo-dozer.shtml",
  durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/15029/22420",
  jobSearch: "dozer operator apprentice",
  journeySearch: "dozer operator",
  aliases: "bulldozer cat caterpillar d6 d8 track tractor crawler earthmoving grader operator heavy equipment operator dozer red seal",
  tools: ["CSA Grade 1 safety boots", "Hard hat, glasses, hearing protection", "Hi-vis clothing and gloves", "Grease gun and shovel", "Grade rod and hand level", "Logbook and inspection sheets"],
  insight: {
    skills: ["Blade control and grade feel", "Reading stakes, plans, and slopes", "Daily inspection and undercarriage care", "Spotter and radio communication"],
    hazards: ["Rollover on slopes: stay within limits and wear the seat belt", "Struck-by and backover: use spotters and check blind areas", "Hydraulic fluid injection: never feel for leaks by hand", "Buried and overhead utilities: locate first, keep clear"],
    settings: ["Road and subdivision construction", "Mines, quarries, and pits", "Landfills and waste sites", "Forestry, pipeline, and oil and gas right-of-way"]
  },
  toolGroups: [
    {
      title: "Day-one gear, buy once and buy well",
      note: dozerPpeNote,
      items: [
        { name: "CSA Grade 1 safety boots (green triangle, puncture-resistant sole), waterproof", why: "Steel or composite toe and a puncture-resistant plate protect you around tracks and rock. Ankle support matters on uneven ground and track steps.", search: "CSA Grade 1 safety boots waterproof Red Wing Blundstone Timberland PRO" },
        { name: "CSA Z94.1 hard hat with chin strap and winter liner", why: "Needed whenever you leave the cab. A chin strap keeps it on in wind and when you bend under equipment.", search: "CSA Z94.1 hard hat Type 1 Class E MSA V-Gard chin strap" },
        { name: "Safety glasses (CSA Z94.3) with anti-fog coating", why: "Dust and flying debris are constant. Clear and tinted pairs let you handle changing light.", search: "CSA Z94.3 safety glasses anti fog Uvex Pyramex" },
        { name: "Hearing protection: earmuffs and foam plugs", why: "Diesel engines and rock work are loud over a long shift. Keep both types handy for cab and ground work.", search: "3M Peltor earmuffs foam earplugs CSA Z94.2" },
        { name: "High-visibility vest or jacket (CSA Z96, Class 2 or 3)", why: "Spotters and other operators must see you when you walk the machine. Class depends on site rules.", search: "CSA Z96 hi vis vest class 2 reflective jacket" },
        { name: "Work gloves, cut-resistant and insulated pairs", why: "Greasing, handling cutting edges, and cold-weather work are hard on hands.", search: "Mechanix work gloves insulated winter cut resistant" },
        { name: "Rain gear and insulated bibs", why: "You are outside for pre-trip checks and fuelling in all weather. Dry layers keep you alert.", search: "rain suit hi vis insulated bib overalls Carhartt" },
        { name: "Headlamp and rechargeable flashlight", why: "Pre-start inspections at dawn or dusk, and checking under the machine.", search: "Petzl headlamp rechargeable Streamlight flashlight" },
        { name: "Insulated lunch cooler, water bottle, and thermos", why: "Long shifts far from services. Hydration and steady energy help you stay focused.", search: "insulated lunch cooler thermos water bottle jobsite" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your operator and your foreman what holds up on your sites.",
      items: [
        { name: "Manual or pneumatic grease gun and extra cartridges", why: "Daily greasing of pivot points is part of the walk-around. A smooth gun with a good coupler wastes less grease.", search: "Lincoln grease gun lever 14 oz heavy duty" },
        { name: "Round-point shovel with fibreglass handle", why: "Clearing debris from the undercarriage, checking cutting edges, and digging around stakes.", search: "fiberglass handle round point shovel Bully Tools" },
        { name: "Hand level or line level and a 7.5 m (25 ft) tape", why: "Quick checks of grade, depth, and distance when a stake or rover is not at hand.", search: "Stanley FatMax tape measure 25 ft Johnson hand level" },
        { name: "Grade rod, metric and imperial graduated", why: "Used with a level to read elevation differences on the ground. Learn to read it fast.", search: "builders grade rod 5m metric survey leveling rod" },
        { name: "Marking paint and lumber crayons", why: "Mark stakes, hazards, and cut or fill notes where the grade crew asks.", search: "Markal marking paint can lumber crayon" },
        { name: "Tire gauge, fluid sampler, and funnel set", why: "For support vehicles and for checking fluids cleanly when servicing is part of your duties.", search: "tire pressure gauge oil funnel set heavy duty" },
        { name: "Cold-weather kit: balaclava, thermal base layers, boot warmers", why: "Prairie, northern, and winter work is common. Warm operators make fewer mistakes.", search: "merino base layer balaclava boot insoles winter work" },
        { name: "Seat cushion and lumbar support for the cab", why: "Whole-body vibration and long shifts are hard on your back. Ask before modifying a company machine.", search: "heavy equipment seat cushion lumbar support" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the employer or tied to a specific job. Ask before buying.",
      items: [
        { name: "Respirator (N95 or half-mask with filters)", why: "Silica dust, diesel, and landfill gases require the correct respiratory protection and fit-testing. The employer supplies what the hazard assessment calls for.", search: "3M half mask respirator P100 N95 fit test" },
        { name: "Two-way radio or headset compatible with site channels", why: "Spotter communication and haul coordination. Usually company-issued.", search: "Motorola two way radio jobsite waterproof" },
        { name: "Full-body harness and lanyard (CSA Z259)", why: "For work from trailers, tarping, and roof or ramp tasks. Training comes first, and the employer normally supplies it.", search: "CSA Z259 full body harness lanyard 3M DBI-SALA" },
        { name: "Portable first aid kit and fire extinguisher (cab-rated)", why: "Know where the machine kit is. Personal kits help on remote sites.", search: "CSA Type 2 first aid kit ABC fire extinguisher vehicle" },
        { name: "Wheel chocks and a spill kit for fuelling and support vehicles", why: "Used with service trucks and when fuelling on site. Employers normally supply them.", search: "rubber wheel chocks portable spill kit" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for slope math, drawings, and equipment systems. Check with your school and exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Slopes, volumes, swell factors, and production calculations.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Engineer's scale and 30 cm ruler", why: "Reading site plans and cross-sections at scale.", search: "engineer scale ruler 12 inch triangular metric" },
        { name: "Mechanical pencils (0.5 mm) and a vinyl eraser", why: "Notes, quick sketches of cuts and fills, and exam work.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm" },
        { name: "Graph paper pad and a clinometer", why: "Plotting cross-sections and practising slope percentages. A clinometer helps you read real slopes.", search: "graph paper pad clinometer slope" },
        { name: "Highlighters and tabbed dividers", why: "Mark your operator's manual study notes and school binders by topic.", search: "highlighters binder dividers tabs" },
        { name: "Rite in the Rain notebook", why: "Weatherproof notes on site for daily logs and hour records.", search: "Rite in the Rain field notebook" },
        { name: "Study copy of your province's OHS regulation (printed or saved offline)", why: "Excavation, equipment, and traffic rules appear in school and on the Red Seal exam. Always use your own province's current text.", search: "occupational health and safety regulations construction book Canada" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare, plus trade profiles.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "International Union of Operating Engineers (IUOE)", desc: "Union operator training and apprenticeship information.", url: "https://www.iuoe.org/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Plain-language safety fact sheets, WHMIS, and hazard information.", url: "https://www.ccohs.ca/" },
        { name: "Infrastructure Health & Safety Association (IHSA)", desc: "Ontario construction safety training and heavy equipment resources.", url: "https://www.ihsa.ca/" },
        { name: "WorkSafeBC", desc: "BC regulations and guides, including excavation and mobile equipment safety.", url: "https://www.worksafebc.com/" },
        { name: "CSA Group", desc: "Standards publisher for PPE and machine safety standards used in Canada.", url: "https://www.csagroup.org/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your operator's manual, training materials, and provincial regulations.",
      items: [
        { name: "Bulldozer basics for beginners", desc: "Controls, blade movement, and how a dozer works.", url: "https://www.youtube.com/results?search_query=bulldozer+operator+basics+beginner+controls" },
        { name: "Dozer walk-around inspection", desc: "Daily pre-start checks, leaks, and undercarriage points.", url: "https://www.youtube.com/results?search_query=dozer+daily+walk+around+inspection" },
        { name: "Dozer blade types and uses", desc: "Straight, universal, semi-U, and angle blades compared.", url: "https://www.youtube.com/results?search_query=dozer+blade+types+straight+universal+semi+U+angle" },
        { name: "Slot dozing and pushing technique", desc: "Building efficient pushes and reducing spillage.", url: "https://www.youtube.com/results?search_query=slot+dozing+technique+bulldozer+pushing" },
        { name: "Dozer undercarriage wear and track tension", desc: "Sprockets, rollers, links, and how tension affects wear.", url: "https://www.youtube.com/results?search_query=dozer+undercarriage+wear+track+tension" },
        { name: "Finish grading with a dozer", desc: "Feathering the blade and cutting to a surface.", url: "https://www.youtube.com/results?search_query=dozer+finish+grading+technique" },
        { name: "GPS machine control on dozers", desc: "How 3D machine control guides the blade to a design surface.", url: "https://www.youtube.com/results?search_query=dozer+3D+GPS+machine+control+explained" },
        { name: "Ripping hard ground with a dozer", desc: "Ripper shanks, patterns, and when to rip.", url: "https://www.youtube.com/results?search_query=dozer+ripping+hard+ground+technique" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for dozer work yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: heavy equipment operator career podcast", desc: "Open the results and listen with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=heavy+equipment+operator+career+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: dozer operator tips (listen-along)", desc: "Operators describing pushing, grading, and efficiency habits.", url: "https://www.youtube.com/results?search_query=dozer+operator+tips+podcast" },
        { name: "YouTube: earthmoving and site grading talks", desc: "Cut and fill, haul planning, and grade control discussions.", url: "https://www.youtube.com/results?search_query=earthmoving+site+grading+podcast" },
        { name: "YouTube: heavy equipment safety talks", desc: "Rollover, backover, and spotter lessons to hear on the commute.", url: "https://www.youtube.com/results?search_query=heavy+equipment+safety+talk+podcast" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "For planning, productivity, and leadership as you move toward the Red Seal and a lead hand role.",
      items: [
        { name: "YouTube: construction productivity and estimating podcast", desc: "Production rates, cycle times, and job planning.", url: "https://www.youtube.com/results?search_query=construction+earthwork+estimating+productivity+podcast" },
        { name: "YouTube: construction foreman and leadership podcast", desc: "Crew leadership and communication on civil sites.", url: "https://www.youtube.com/results?search_query=construction+foreman+leadership+podcast" },
        { name: "YouTube: Red Seal exam study tips (heavy equipment)", desc: "Preparing for trade exams and managing test anxiety.", url: "https://www.youtube.com/results?search_query=red+seal+exam+study+tips+heavy+equipment+operator" }
      ]
    }
  ],
  practiceBank: {
    1: dozerBank([
      ["What does WHMIS stand for?", "Workplace Hazardous Materials Information System", ["Worksite Heavy Machinery Inspection Standard Program for dozer operators", "Workers' Hazard and Material Incident Summary", "Workplace Heavy Materials Identification System"], "WHMIS covers labels, safety data sheets, and training for hazardous products such as fuel, grease, and coolant."],
      ["When climbing onto or off a dozer you should:", "Face the machine and keep three points of contact", ["Jump down from the track to save time and keep the cab clear", "Carry tools in both hands", "Step onto the track edge and turn around to face the cab as you climb"], "Three points of contact and facing the machine reduce slips and falls."],
      ["The main purpose of a pre-start walk-around is to:", "Find leaks, damage, missing guards, and low fluids before work", ["Warm up the tracks and the final drives before the first push", "Make the machine look clean and presentable for the site supervisor", "Replace the operator's manual"], "Daily inspection finds defects before they become failures or injuries."],
      ["What does ROPS stand for?", "Rollover protective structure", ["Rear operator protection system", "Rotating output power shaft", "Reverse operation prevention signal"], "A ROPS frame or cab protects you only if you are belted in the seat."],
      ["Which component of the dozer does the actual pushing of material at the front?", "Blade", ["Final drive", "Idler", "Equalizer bar"], "The blade, with its cutting edge and end bits, cuts and pushes material."],
      ["The component that engages the track bushings to drive the track is the:", "Sprocket", ["Idler", "Carrier roller", "Track shoe"], "The drive sprocket meshes with the track bushings. Idlers guide and tension the track."],
      ["You suspect a hydraulic hose is leaking under pressure. How should you check it?", "With a piece of cardboard or wood, after the machine is shut down and the pressure relieved", ["Run your bare hand along the hose while the machine idles to feel for oil spray", "Use a rag held tightly around the hose while running", "Wait for the leak to stop on its own"], "High-pressure fluid can inject through skin and is a medical emergency."],
      ["Before leaving the cab at the end of a shift you should:", "Lower the blade and ripper to the ground, set the parking brake or lock, and shut down", ["Leave the blade raised off the ground for the next operator so it is ready to push", "Leave the engine idling for security", "Park on the steepest nearby slope"], "A lowered blade and secured controls prevent drifting and unauthorized use."],
      ["A 2:1 slope means:", "2 units horizontal for every 1 unit vertical", ["2 units vertical for every 1 unit of horizontal run along the ground", "A 2% grade, which rises 2 m over every 100 m of horizontal distance", "A 45° angle"], "Slopes are written horizontal to vertical. A 2:1 slope is 50% or about 26.6°."],
      ["1 cubic metre is about how many cubic yards?", "1.31", ["0.76", "3.28", "1.00"], "1 m³ ≈ 1.308 yd³. The 3.28 is the number of feet in a metre."],
      ["A diesel fuel fire is classified as:", "Class B", ["Class A", "Class C", "Class D"], "Class B is flammable liquids. Know the location and rating of the machine's extinguisher."],
      ["Before reversing a dozer you should:", "Check behind you and use a spotter where sight lines are blocked", ["Rely only on the backup alarm to warn workers who are behind the dozer", "Back up quickly to clear the area", "Honk once and go"], "Backup alarms do not guarantee people hear or react. Verify clear."],
      ["A tracked dozer turns by:", "Changing the relative speed or drive of the two tracks", ["Turning front wheels like a truck, with the tracks following behind", "Tilting the blade", "Moving the idlers sideways so the tracks steer the machine around"], "Steering systems vary the track drive, either by clutches and brakes or hydrostatic drive."],
      ["A Red Seal endorsement shows that:", "You met a national standard recognized across participating provinces and territories", ["You may skip site-specific safety training on any employer's job", "You own a machine", "Your employer pays higher taxes"], "Red Seal supports mobility for certified journeypersons."],
      ["Why should you check engine coolant only when the engine is cool?", "Hot pressurized coolant can scald", ["Coolant gives wrong readings when warm", "The cap seizes when cool", "It is only a company policy"], "Releasing a hot radiator cap can cause severe burns."]
    ], 0),
    2: dozerBank([
      ["Which blade has side wings to carry large volumes of loose material over longer pushes?", "Universal (U) blade", ["Straight (S) blade, a flat blade with no side wings for fine work", "Angle blade, which swivels to cast material off to one side", "Ripper shank"], "A U blade holds a bigger load and suits stockpile and long push work. A straight blade suits hard digging and finish."],
      ["An angle blade is especially useful for:", "Side-casting material, such as backfilling a ditch or working sidehill", ["Carrying the largest possible load in a straight push over a long haul", "Replacing a ripper", "Compacting asphalt"], "Angling the blade casts material to one side as the machine moves forward."],
      ["Slot dozing means:", "Cutting a slot between windrows or berms so the blade load spills less", ["Dozing only at night, when the ground is cooler and the work is quieter", "Using a ripper only to break the ground and never the blade to push", "Leaving the blade raised while pushing"], "The berms on either side hold material in front of the blade."],
      ["Tracks that are adjusted too tight will:", "Wear pins, bushings, and sprockets faster and waste power", ["Last longer because the track holds firmly to the sprockets", "Reduce fuel use because the machine rolls more freely on the track", "Fix idler alignment"], "Excess tension raises load on all undercarriage parts. Follow the manual's sag specification."],
      ["A dozer exerts 196 kN of force on the ground through 4.0 m² of track contact area. Ground pressure is about:", "49 kPa", ["4.9 kPa", "98 kPa", "784 kPa"], "Ground pressure = force ÷ area. 196 kN ÷ 4.0 m² = 49 kPa."],
      ["Low-ground-pressure (LGP) dozers use wider tracks to:", "Spread weight and work on soft ground", ["Increase blade size so the dozer can push a bigger volume", "Improve fuel use only, with no change to how it works on soft ground", "Reduce noise"], "Wider shoes lower ground pressure for swamp, mud, or peat."],
      ["1,000 m³ of bank material with 25% swell becomes about how many loose cubic metres?", "1,250", ["800", "1,025", "750"], "Loose = bank × (1 + swell) = 1,000 × 1.25 = 1,250 m³."],
      ["A 1 m rise over a 20 m run is what percent grade?", "5%", ["2%", "20%", "0.5%"], "Grade % = rise ÷ run × 100 = 1 ÷ 20 × 100 = 5%."],
      ["While ripping, before you turn the dozer you should:", "Raise the ripper out of the ground", ["Keep it down for traction so the dozer can pivot while it turns", "Reverse fast out of the cut with the ripper still dragging in the ground", "Drop the blade first"], "Turning with a buried shank risks bending it and damaging the machine."],
      ["Why does dozing downhill increase production?", "Gravity helps push the load, so you carry more per pass", ["The blade effectively gets bigger as the machine tilts forward", "The tracks turn slower", "Less material is pushed each pass, but the cycle times are shorter"], "Dozers carry bigger loads and cycle faster on a favourable slope when it is safe to do so."],
      ["Working two dozers side by side on a push is meant to:", "Reduce spillage and move more material per pass", ["Replace a spotter, since two operators can watch each other's work", "Prevent undercarriage wear, since the load is shared by both machines", "Skip the daily inspection"], "Blades close together keep material from escaping at the sides. It needs good communication."],
      ["The safest general travel on a steep slope with a dozer is:", "Straight up or down within the manufacturer's slope limits, rather than across", ["Sideways at full speed so the machine does not lose momentum", "With the blade raised high", "With the seat belt off for quick exit"], "Side slopes raise rollover risk. Follow your operator's manual limits and site rules."],
      ["The cutting edge and end bits on a blade are:", "Replaceable wear parts that protect the moldboard", ["Part of the engine's cooling system that wears slowly over time", "Measured in kilopascals", "Always welded permanently"], "They wear down and are replaced before the blade itself is damaged."],
      ["Why clean mud and rock packed in the undercarriage?", "Packing increases wear and can damage components or freeze in winter", ["It makes the dozer noticeably faster by reducing the machine weight", "It is purely cosmetic", "It reduces blade size"], "Packed material loads rollers, sprockets, and links."],
      ["The 'float' setting on a dozer blade control lets the blade:", "Follow the ground contour under its own weight", ["Lift automatically whenever the machine meets resistance in the ground", "Dig deeper in hard ground", "Lock at one height so the blade cannot move up or down at all"], "Float is used for light spreading or backdragging. Know your machine's controls."]
    ], 5),
    3: dozerBank([
      ["A grade stake marked C 0.45 usually means:", "Cut 0.45 m from the reference point to reach design grade", ["Fill 0.45 m of material above the reference point to reach design grade", "Compact the top 0.45 m of the layer to reach design density", "Offset 0.45 m to the east"], "C means cut and F means fill. Confirm the stake's reference point with the grade crew."],
      ["In GNSS 3D machine control for a dozer, blade movement is guided by:", "A digital design surface, GNSS position, and blade sensors", ["The operator's lunch break and the shift schedule on the job site", "Paper maps only", "Engine oil pressure and coolant temperature from the dash gauges"], "The system compares the blade edge to the design model and adjusts or advises."],
      ["Fill is placed in thin lifts mainly so that:", "Compaction equipment can reach the specified density throughout", ["The fill looks smoother and more even to the grade checker", "Fewer stakes are needed", "It saves fuel"], "Thick lifts leave loose layers that settle later."],
      ["A road crown is built to:", "Shed water to the sides", ["Reduce blade wear by letting the blade sit flat on the surface", "Increase swell", "Store water in the centre of the road so it soaks in slowly"], "Crossfall and crown keep water from soaking the base."],
      ["When push-loading a scraper you should:", "Contact the push block smoothly and match speed", ["Hit it hard to start loading faster and shorten the cycle time", "Stay far away", "Pull the scraper instead"], "Smooth contact avoids damage and keeps the pair cooperating."],
      ["A dozer carries 6 m³ loose per trip, makes 40 trips per hour, and works a 50-minute hour. Production is about:", "200 m³ per hour loose", ["240 m³ per hour loose, counting a full 60-minute hour", "160 m³ per hour loose, assuming only 4 m³ in each load", "120 m³"], "6 × 40 × (50 ÷ 60) = 200 m³ per hour loose volume."],
      ["A dozer travels at 3.6 km/h. About how long to travel 60 m?", "1 minute", ["0.6 minute", "1.7 minutes", "3.6 minutes"], "3.6 km/h = 60 m per minute."],
      ["When pushing material over an edge, the safest approach is to:", "Use a berm, stay back from the crest, and use a spotter", ["Drive the tracks right to the edge so the load drops cleanly over it", "Work fast with no spotter", "Push at an angle to the crest at speed"], "Crest failure can roll a machine. Edge protection and communication matter."],
      ["Which blasted or broken material usually swells the most?", "Blasted rock", ["Dry sand", "Loose topsoil", "Compacted gravel"], "Rock breaks into voids that increase volume substantially."],
      ["A raised dozer blade slowly drifts down. The most likely cause is:", "Internal leakage in a cylinder or control valve", ["Too much track tension, which pulls the blade frame down slowly", "A dirty windshield", "A full fuel tank"], "Internal leakage lets the cylinder bleed down. Have it diagnosed by a technician."],
      ["Track pitch measurements are used to check:", "Undercarriage wear or stretch", ["Engine horsepower and the amount of power reaching the drive", "Battery state of charge", "Blade lift speed"], "Measuring across links shows wear and when parts need replacing."],
      ["Working near a watercourse, you should:", "Follow permits and sediment control, and keep setbacks", ["Push material into the water so the bank stays level with the shore", "Ignore silt fence on dry days, since erosion only happens in rain", "Fuel next to the bank"], "Erosion and sediment control protect fish habitat and are regulated."],
      ["Why is a grade check done with a rover, laser, or string line during finishing?", "To confirm the surface matches design before the layer is covered", ["To warm the hydraulic oil so the blade controls respond more smoothly", "To avoid the daily inspection", "To measure ground pressure"], "Checking while the machine is still there avoids rework."],
      ["Before pushing material across an area with possible buried gas lines, you must:", "Have locates completed and respect marked tolerance zones", ["Probe with the blade in shallow passes until you see a pipe or marker", "Assume the site is clear", "Ask the neighbour"], "Locate services are mandatory in all provinces before ground disturbance. Rules on hand digging zones vary."],
      ["Ripping frozen ground, you can expect:", "Higher power and wear, so use proper shanks and pace", ["Lower fuel use, since frozen ground is firm and easy for the tracks", "No wear on tips", "The need to carry a larger blade"], "Frozen or hard ground raises load on the ripper and drive train."]
    ], 11),
    4: dozerBank([
      ["Grade resistance is roughly how much per 1% of grade?", "10 kg per tonne of machine weight", ["1 kg per tonne of machine weight for each 1% of grade", "100 kg per tonne of machine weight for each 1% of grade", "No effect"], "Climbing 1% adds about 10 kg of resistance per tonne of weight."],
      ["10,000 bank m³ of cut with 20% swell must be hauled as about:", "12,000 loose m³", ["8,000 loose m³, after the bank soil has been compacted", "10,200", "9,000"], "Loose = 10,000 × 1.20 = 12,000 m³."],
      ["Soil shrinks 10% from bank to compacted fill. To make 9,000 compacted m³ you need about:", "10,000 bank m³", ["8,100", "9,900 bank m³, from adding 10% of the compacted amount", "9,010"], "Bank volume = compacted volume ÷ (1 − shrinkage) = 9,000 ÷ 0.90 = 10,000."],
      ["Blue smoke from a diesel exhaust generally indicates:", "Burning lubricating oil", ["Normal operation, since a healthy diesel engine always burns slightly blue", "Excess air", "Water in the fuel only"], "Blue smoke points to oil burning. Black suggests excess fuel or restricted air."],
      ["At high altitude an engine without compensation:", "Makes less power because there is less oxygen", ["Makes more power, since thinner air gives less resistance to the pistons", "Has no change", "Needs more coolant only"], "Thin air reduces combustion. Turbocharged engines are less affected."],
      ["On wet clay, a dozer's pull is often limited by:", "Traction rather than engine power", ["Blade size", "Seat comfort and how well the cab suspension absorbs bumps", "Fuel cap type"], "Slippery ground limits usable pull to the traction available."],
      ["Whole-body vibration risk can be reduced by:", "Adjusting the seat properly and reducing speed on rough ground", ["Sitting higher in the cab so the seat takes less of the shock", "Driving faster over bumps so the machine spends less time on them", "Removing the seat belt"], "Seat suspension setup, speed, and maintaining haul roads all help."],
      ["Which describes the three basic worker rights under Canadian occupational health and safety law?", "Right to know, right to participate, right to refuse unsafe work", ["Right to strike, right to pay, right to overtime", "Right to inspect, right to fire, right to bid", "Right to rest, right to travel, right to quit"], "Details differ by jurisdiction, but these three rights are common."],
      ["Before loading a dozer on a trailer, confirm that:", "Machine weight and dimensions fit the trailer, route, and permits", ["The blade is the same colour as the trailer so it is easy to match", "The tracks are new", "The fuel tank is empty"], "Overweight or oversize loads need rated equipment and proper permits."],
      ["A mass-haul diagram helps planners:", "Balance cut and fill and see haul distances", ["Order fuel and parts for the machines on the next phase", "Schedule lunches", "Measure engine noise"], "Mass-haul diagrams show where material is surplus or short."],
      ["A dozer catches fire. What is your first priority?", "Shut down if safe, get out, and alert others", ["Drive it away from the site and the other machines before shutting down", "Fight the fire alone with water", "Stay inside to protect it and wait for the crew to bring extinguishers"], "Your safety comes first. Use the extinguisher only if trained and the fire is small."],
      ["Excessive idling is discouraged because it:", "Wastes fuel and increases engine wear and emissions", ["Cools the engine too much and washes the oil off the cylinder walls", "Improves track life", "Reduces hydraulic oil"], "Many employers and municipalities set idling limits."],
      ["Which slope is steeper?", "1.5:1", ["2:1", "3:1, because the larger number means a steeper face", "4:1"], "A smaller horizontal run per unit of vertical means a steeper slope."],
      ["Which element should be reviewed before work begins near a deep cut and unstable soil?", "A hazard assessment and engineered or regulated slope controls", ["Only the radio channel and the call-in times for the day", "Only the fuel level", "The warranty"], "Slope stability and excavation limits are set by regulation and engineering."],
      ["Which factor most affects how heavy a dozer's blade load should be?", "Blade type, material, slope, and traction", ["Colour of the machine and the logo on the cab doors", "Radio brand", "The company logo"], "Overloading wastes fuel and strains the drive train. Efficient loads are matched to conditions."],
      ["A lead operator's key job on a site with several machines is to:", "Maintain clear traffic plans, communication, and spotters", ["Remove all signs once the crew knows where the machines are working", "Operate faster than others", "Keep logs only for fuel and ignore the traffic and the spotters"], "Machine-to-machine and worker interaction are among the biggest hazards on earthmoving sites."]
    ], 3)
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS, first aid, fall protection, and site orientation; requirements vary)", "Apply to employers, contractors, and union locals such as IUOE", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: foundations and safe operation", items: ["Learn PPE, machine mounting, spotter signals, and lockout", "Do daily walk-around inspections and basic greasing", "Practise basic blade control and pushing with supervision", "Learn site layout, stakes, and traffic rules", "Build your personal kit (see Buying tools)"] },
    { title: "Year 2: pushing, spreading, and ripping", items: ["Learn blade types, slot dozing, and efficient push patterns", "Spread and level fill in lifts", "Learn ripping and working on slopes", "Understand undercarriage wear and track tension"] },
    { title: "Year 3: grading and machine control", items: ["Work to stakes, slope, and crown", "Learn GNSS and 3D machine control basics", "Work with scrapers, haul trucks, and compaction crews", "Handle environmental controls and winter work"] },
    { title: "Year 4 and beyond: planning and leadership", items: ["Plan cut and fill, haul, and production", "Diagnose common machine problems and report them", "Mentor new apprentices and help with hazard assessments", "Use the Red Seal standard to find gaps in your experience"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check federal completion grant and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["Angle blade", "A blade that can be angled left or right to side-cast material."],
    ["Bank volume", "Volume of material in its natural, undisturbed state."],
    ["Berm", "A raised ridge of material used as a barrier or to guide material."],
    ["Blade tilt", "Raising or lowering one corner of the blade."],
    ["Carrier roller", "A small roller on top of the track frame that supports the track."],
    ["Cut", "Removing material to reach a lower design elevation."],
    ["Cutting edge", "The replaceable steel at the bottom of the blade."],
    ["Drawbar pull", "The usable pulling force a tracked machine can apply."],
    ["End bit", "A replaceable wear piece on the side ends of the blade."],
    ["Fill", "Placing material to reach a higher design elevation."],
    ["Final drive", "The gear set that turns the sprocket and drives the track."],
    ["Float", "A blade control setting that lets the blade follow the ground."],
    ["GNSS", "Global navigation satellite system, such as GPS, used for machine control."],
    ["Grade", "The slope of a surface, or a design elevation."],
    ["Grouser", "A raised bar on a track shoe that improves traction."],
    ["Idler", "The front wheel that guides and tensions the track."],
    ["Loose volume", "Volume of material after excavation, which is larger than bank volume."],
    ["Moldboard", "The curved steel plate that forms the face of the blade."],
    ["Ripper", "A rear attachment with shanks that break up hard material."],
    ["ROPS", "Rollover protective structure that protects the operator."],
    ["Semi-U blade", "A blade combining straight-blade penetration with some carrying ability."],
    ["Slot dozing", "Pushing in a slot with berms on each side to reduce spillage."],
    ["Spotter", "A person who guides the operator and watches the work area."],
    ["Sprocket", "The toothed drive wheel that engages the track."],
    ["Stake", "A marker showing a grade point, offset, or cut and fill."],
    ["Swell", "Increase in volume when material is excavated."],
    ["Track shoe", "The plate that contacts the ground on a track link."],
    ["Windrow", "A long ridge of material left by the blade."]
  ],
  cards: [
    { front: "Slope 2:1", back: "2 horizontal to 1 vertical, 50% grade, about 26.6°." },
    { front: "Swell formula", back: "Loose volume = bank volume × (1 + swell)." },
    { front: "Grade percent", back: "Rise ÷ run × 100." },
    { front: "Ground pressure", back: "Force ÷ contact area, in kPa." },
    { front: "U blade vs S blade", back: "U carries large loads of loose material; S is for general and hard digging and finishing." },
    { front: "Safe mounting", back: "Face the machine and keep three points of contact." },
    { front: "Hydraulic leak check", back: "Never use your hand. Use cardboard after pressure is relieved." },
    { front: "Grade resistance", back: "About 10 kg per tonne per 1% grade." },
    { front: "Before leaving the cab", back: "Blade and ripper down, brake set, controls locked, engine off." },
    { front: "Right to refuse", back: "Workers may refuse work they reasonably believe is unsafe, following their province's process." }
  ],
  jobsIntro: "Look for apprentice and operator-in-training roles with road builders, site-servicing contractors, mines and quarries, landfills, forestry, and pipeline companies. Many roles also need a valid driver's licence and ability to work away from home.",
  tips: [
    "Do the walk-around every day, even when the last operator did it.",
    "Be smooth with the controls: grade quality comes from small, steady inputs.",
    "Ask your foreman or trainer why a stake or grade is set the way it is.",
    "Keep your hours logbook current and signed by your sponsor."
  ],
  forumTopics: [
    "Starting out as a dozer operator",
    "Red Seal and exam prep",
    "Tools and gear",
    "Province and code questions",
    "Blade control and finish grading",
    "Machine control (GNSS) and grade checking"
  ],
  reference: [
    {
      title: "Conversions",
      list: ["1 in = 25.4 mm and 1 ft = 0.3048 m", "1 m³ ≈ 1.308 yd³ and 1 yd³ ≈ 0.7646 m³", "1 tonne = 1,000 kg ≈ 2,204.6 lb", "1 kPa ≈ 0.145 psi and 1 psi ≈ 6.895 kPa", "1 km/h ≈ 16.7 m/min ≈ 0.621 mph", "1 kW ≈ 1.341 hp"]
    },
    {
      title: "Slope conversions",
      intro: "Slopes are written as horizontal to vertical. Grade percent is rise over run times 100.",
      table: { head: ["Ratio (H:V)", "Percent grade", "Angle"], rows: [["1:1", "100%", "45.0°"], ["2:1", "50%", "26.6°"], ["3:1", "33.3%", "18.4°"], ["4:1", "25%", "14.0°"], ["10:1", "10%", "5.7°"], ["20:1", "5%", "2.9°"]] },
      note: "Always confirm maximum working slopes in your operator's manual and your site rules."
    },
    {
      title: "Swell and load factor",
      intro: "Load factor = 1 ÷ (1 + swell). Use it to convert loose volume back to bank volume. The swell values below are examples for practice, not material data.",
      table: { head: ["Swell", "Load factor", "1,000 bank m³ becomes (loose m³)"], rows: [["10%", "0.909", "1,100"], ["20%", "0.833", "1,200"], ["30%", "0.769", "1,300"], ["40%", "0.714", "1,400"]] },
      note: "Shrinkage after compaction is a separate factor: bank volume = compacted volume ÷ (1 − shrinkage)."
    },
    {
      title: "Dozer blade types",
      table: { head: ["Blade", "Strengths", "Typical use"], rows: [["Straight (S)", "Good penetration, precise control", "Hard digging, finish grading, general dozing"], ["Universal (U)", "Large carrying capacity with side wings", "Long pushes of loose material, stockpiles"], ["Semi-U (SU)", "Balance of penetration and carrying", "General production dozing"], ["Angle (A)", "Side-casts material", "Ditching, backfilling, sidehill work, clearing"], ["PAT (power angle tilt)", "Angle and tilt adjustable from the cab", "Finish work, ditching, varied grading"]] }
    },
    {
      title: "Daily walk-around checklist",
      list: ["Engine oil, coolant, hydraulic oil, and fuel levels", "Hoses, fittings, and cylinders for leaks or damage", "Tracks, sprockets, idlers, and rollers for damage or packing", "Blade cutting edge and end bits for wear", "Guards, ROPS, seat belt, lights, mirrors, camera, and backup alarm", "Fire extinguisher charged and in place", "Grease points done as scheduled", "Report defects to your supervisor and record them in the logbook"]
    },
    {
      title: "Standards and regulation pointers",
      list: ["Your provincial or territorial OHS regulation sets rules for mobile equipment, excavation, traffic control, and locates", "WHMIS applies to fuels, lubricants, coolants, and cleaners; read the SDS", "CSA standards describe PPE such as hard hats (Z94.1), eye protection (Z94.3), hearing protection (Z94.2), and high-visibility garments (Z96)", "Your operator's manual and employer procedures are the final word on machine limits", "Call your province's locate service before ground disturbance"],
      note: "Regulations vary by province. Use your own jurisdiction's current text."
    }
  ]
});
