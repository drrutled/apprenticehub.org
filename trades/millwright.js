// Industrial Mechanic (Millwright) guide. Practice questions are original study aids, not official Red Seal exam questions.

(() => {
  const pattern = [0, 2, 1, 3, 0, 2, 3, 1, 0, 3, 1, 2, 3, 0, 1];
  const bank = (rows) => rows.map(([q, right, wrong, explain], i) => {
    const pos = pattern[i % pattern.length];
    const options = wrong.slice();
    options.splice(pos, 0, right);
    return { q, options, answer: pos, explain };
  });
  const yt = (s) => `https://www.youtube.com/results?search_query=${s}`;

  registerTrade({
  introVideo: { id: "nzf-nP69aeg", title: "Intro video: Millwright" },
    id: "millwright",
    store: "millwright",
    title: "Industrial Mechanic (Millwright)",
    name: "Industrial Mechanic (Millwright)",
    short: "millwright work",
    category: "Mechanical · Industrial · Maintenance",
    summary: "Industrial mechanics, or millwrights, install, align, maintain, and repair industrial machinery such as pumps, gearboxes, conveyors, compressors, and turbines in plants, mills, and mines.",
    work: "You move, level, and align heavy equipment, then keep it running through lubrication, inspection, and repair. The work uses precision measurement, rigging, hydraulics, and some welding and fabrication. Shutdowns, outages, and call-outs are common, and the job often means working in tight spaces and with heavy components.",
    duration: "Usually 3–4 years (Job Bank), varies by province",
    union: "Millwright locals and building trades unions (varies by province)",
    unionUrl: undefined,
    profileUrl: "https://red-seal.ca/eng/trades/indust-mech-mill.shtml",
    durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/14719/ca",
    jobSearch: "millwright apprentice",
    journeySearch: "millwright industrial mechanic",
    aliases: "millwright industrial mechanic red seal 433a machinery installer maintenance mechanic pump gearbox conveyor shaft alignment rigging",
    tools: ["Combination wrench and socket sets (metric and imperial)", "Dial indicator with magnetic base", "Feeler gauges and a precision straightedge", "Micrometer and calipers", "Torque wrench", "CSA-approved PPE and lockout kit"],
    insight: {
      skills: ["Mechanical aptitude and precision", "Strong math, including trigonometry and ratios", "Physical strength and stamina", "Planning, patience, and problem solving"],
      hazards: ["Stored energy and moving parts: lockout, block, and bleed all energy sources", "Rigging and lifting: inspect gear, know the load, and keep clear of suspended loads", "Confined spaces and heights: permits, rescue plans, and fall protection", "Noise, dust, and hot work: hearing and respiratory protection, fire watch"],
      settings: ["Manufacturing and processing plants", "Mines, mills, and smelters", "Power generation and pulp and paper", "Contractors and plant maintenance departments"]
    },
    toolGroups: [
      {
        title: "Day-one tools, buy once and buy well",
        note: "Professional-grade tools that hold their edge and accuracy for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
        items: [
          { name: "Combination wrench set, metric and SAE (Wera, Snap-on, Williams, or similar)", why: "Industrial machines use both systems. Quality wrenches fit snugly and do not round fasteners.", search: "Williams combination wrench set SAE metric professional" },
          { name: "Socket set, 3/8 in and 1/2 in drive, metric and SAE", why: "The daily workhorse for bolts and flange work. Include deep sockets and extensions.", search: "Gearwrench Williams socket set 3/8 1/2 drive SAE metric deep" },
          { name: "Allen (hex) key set, metric and SAE, long arm and ball end", why: "Set screws, couplings, and guards. Many machine components use hex socket screws.", search: "Wera Bondhus hex key set metric SAE long arm" },
          { name: "Adjustable wrenches (8 in, 12 in) and pipe wrench (14 in)", why: "For odd-size nuts and pipe fittings on lube and hydraulic lines.", search: "Crescent adjustable wrench 12 inch RIDGID 14 inch pipe wrench" },
          { name: "Dead-blow hammer and ball-peen hammer", why: "A dead-blow strikes without bouncing. A ball-peen is used for fitting and peening.", search: "Estwing dead blow hammer ball peen hammer" },
          { name: "Pry bars and punch and chisel set", why: "Moving components and removing pins and dowels. Dress mushroomed heads.", search: "Stanley pry bar set punch chisel set" },
          { name: "Steel tape measure (8 m or 25 ft) and machinist's rule", why: "Reliable measurement for layout and clearances.", search: "Stanley FatMax tape measure 25 ft Starrett machinist rule 6 inch" },
          { name: "Cut-resistant gloves and quality work gloves", why: "Sharp edges, grease, and heavy parts. Protect your hands.", search: "Mechanix cut resistant work gloves" },
          { name: "CSA-approved safety boots, safety glasses, hearing protection, and hard hat", why: "Plant sites require full PPE. Comfortable, rated gear is what you will wear all shift.", search: "CSA green patch safety boots safety glasses earplugs hard hat" }
        ]
      },
      {
        title: "Build up in first and second year",
        note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your site.",
        items: [
          { name: "Torque wrenches (1/2 in click type, in N·m and ft-lb)", why: "Flange and machinery bolts have torque values. Correct torque is critical for joint integrity.", search: "Tekton CDI torque wrench 1/2 inch drive click N.m ft-lb" },
          { name: "Dial indicator with magnetic base and a set of feeler gauges", why: "The basic alignment and soft-foot measurement tools.", search: "Starrett Mitutoyo dial indicator magnetic base feeler gauge set" },
          { name: "Machinist's precision straightedge and a precision level", why: "Checking flatness, sheave alignment, and equipment levelling.", search: "Starrett precision straight edge machinist level 12 inch" },
          { name: "Digital calipers and 0-25 mm or 0-1 in micrometer", why: "Measuring shafts, bores, and bearing fits.", search: "Mitutoyo digital caliper micrometer 0-1 inch" },
          { name: "Bearing and gear puller set", why: "Removing bearings, gears, and sheaves without damaging them.", search: "OTC Posi Lock gear puller set bearing puller" },
          { name: "Cordless impact wrench and drill (one battery platform)", why: "Speeds up fastener work. Pick a platform to match your crew.", search: "Milwaukee M18 FUEL impact wrench drill combo" },
          { name: "Snap-ring pliers, internal and external", why: "Retaining rings on shafts and housings.", search: "Knipex snap ring pliers internal external set" },
          { name: "Heavy-duty tool bag or rolling tool box", why: "Keeps tools organized and protected on shutdowns.", search: "Veto Pro Pac tool bag rolling tool box" }
        ]
      },
      {
        title: "Later and specialized",
        note: "Often supplied by the employer or the shop, or required only for specific tasks. Ask before buying.",
        items: [
          { name: "Laser shaft alignment system", why: "Fast, precise alignment of coupled machines. Normally a company tool.", search: "laser shaft alignment tool Easy-Laser Fluke Pruftechnik" },
          { name: "Induction bearing heater", why: "Heats bearings evenly for mounting without an open flame. Normally a shop tool.", search: "induction bearing heater SKF" },
          { name: "Hydraulic torque wrench or bolt tensioner", why: "For large flange and machinery bolting. Company equipment.", search: "hydraulic torque wrench bolt tensioner" },
          { name: "Chain hoist, come-along, and rigging hardware", why: "Employer-supplied and inspected rigging gear. Training and certification come first.", search: "chain hoist lever hoist come along shackles slings" },
          { name: "Vibration analyzer or pen", why: "Condition monitoring of rotating equipment. Usually supplied by a reliability group.", search: "vibration meter analyzer machinery" },
          { name: "Full-body harness and lanyard", why: "Usually supplied by the employer. Fall protection training comes first.", search: "3M DBI-SALA full body harness CSA" },
          { name: "Oxy-fuel cutting outfit or portable welder", why: "Hot work on site. Normally company equipment, with proper training and permits.", search: "oxy acetylene cutting torch kit Victor portable welder" }
        ]
      },
      {
        title: "School supplies for technical training",
        note: "What helps in the classroom for math, drawings, and mechanical study. Check with your school and exam body about calculator rules before you buy.",
        items: [
          { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Gear ratios, trig for rigging angles, and unit conversions. Know it before test day.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
          { name: "Machinery's Handbook or a similar reference", why: "A classic reference for fits, threads, and formulas. Check your school's required edition.", search: "Machinery's Handbook" },
          { name: "Millwright or industrial mechanic textbook", why: "Covers rigging, alignment, lubrication, and equipment at an apprentice level.", search: "millwright industrial mechanic textbook apprentice" },
          { name: "Mechanical pencil (0.5 mm) and erasers", why: "Clean sketches and layout drawings.", search: "Pentel GraphGear mechanical pencil 0.5mm eraser" },
          { name: "Graph paper, 12 in steel ruler, and a protractor", why: "Drawings, layout, and rigging angle sketches.", search: "graph paper pad steel ruler protractor" },
          { name: "Engineering and architect's scales", why: "Reading mechanical drawings at scale.", search: "engineer scale architect scale ruler" },
          { name: "Field notebook (Rite in the Rain)", why: "Record alignment readings, torque values, and nameplate data.", search: "Rite in the Rain field notebook" },
          { name: "Binder, dividers, and highlighters", why: "Organize notes and manuals by year.", search: "binder dividers highlighters" }
        ]
      }
    ],
    mediaGroups: [
      {
        title: "Official and standards resources",
        items: [
          { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare.", url: "https://red-seal.ca/eng/welcome.shtml" },
          { name: "Codes Canada", desc: "National model codes and links to code information.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
          { name: "CSA Group", desc: "Standards publisher, including machine guarding (Z432) and hazardous energy control (Z460).", url: "https://www.csagroup.org/" },
          { name: "ApprenticeSearch", desc: "Find apprenticeship opportunities and information across Canada.", url: "https://www.apprenticesearch.com/" },
          { name: "SkilledTradesBC", desc: "British Columbia's trades training authority, with information on trades and standards.", url: "https://skilledtradesbc.ca/" }
        ]
      },
      {
        title: "Video searches",
        note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials, manufacturer data, and local regulations.",
        items: [
          { name: "Millwright career overview", desc: "What millwrights do and how the apprenticeship works.", url: yt("millwright+career+overview+apprenticeship+industrial+mechanic") },
          { name: "Shaft alignment basics", desc: "Parallel and angular misalignment and how to correct it.", url: yt("shaft+alignment+basics+parallel+angular+misalignment") },
          { name: "Soft foot explained", desc: "Checking and correcting soft foot.", url: yt("soft+foot+machinery+alignment+explained") },
          { name: "Rigging and sling angles", desc: "Sling angle, load limits, and hitches.", url: yt("rigging+sling+angles+working+load+limit+hitches") },
          { name: "Bearing installation and lubrication", desc: "Mounting methods, fits, and greasing practice.", url: yt("bearing+installation+lubrication+best+practices") },
          { name: "Centrifugal pump basics", desc: "How pumps work and common failure causes.", url: yt("centrifugal+pump+basics+cavitation+mechanical+seal") },
          { name: "Hydraulic system basics", desc: "Pumps, valves, cylinders, and safety.", url: yt("hydraulic+system+basics+pump+valve+cylinder") },
          { name: "V-belt and chain drive maintenance", desc: "Alignment, tension, and wear checks.", url: yt("v+belt+chain+drive+alignment+tension+maintenance") }
        ]
      },
      {
        title: "Audio, beginner (pre-apprentice and year 1)",
        note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for millwright work yourself.",
        items: [
          { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
          { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
          { name: "YouTube: millwright apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: yt("millwright+apprentice+podcast") }
        ]
      },
      {
        title: "Audio, intermediate (years 2-3)",
        note: "Trade-knowledge talk that builds on what you do on the job.",
        items: [
          { name: "YouTube: maintenance and reliability podcast", desc: "Plant maintenance, lubrication, and reliability talks.", url: yt("maintenance+and+reliability+podcast+industrial") },
          { name: "YouTube: millwright stories and tips (audio)", desc: "Job-site lessons from working millwrights.", url: yt("millwright+podcast+tips+stories") },
          { name: "YouTube: vibration analysis and condition monitoring talks", desc: "How technicians diagnose machinery problems.", url: yt("vibration+analysis+condition+monitoring+podcast") }
        ]
      },
      {
        title: "Audio, advanced (year 4 to journeyperson)",
        note: "Exam prep, planning, and leadership.",
        items: [
          { name: "YouTube: Red Seal millwright exam prep", desc: "Study talks you can listen to while commuting.", url: yt("Red+Seal+millwright+industrial+mechanic+exam+preparation") },
          { name: "YouTube: shutdown and turnaround planning podcast", desc: "Planning and executing plant shutdowns.", url: yt("plant+shutdown+turnaround+planning+maintenance+podcast") },
          { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: yt("skilled+trades+leadership+mentoring+apprentices+podcast") }
        ]
      }
    ],
    practiceBank: {
      1: bank([
        ["Before working on a conveyor, what is the right approach to hazardous energy?", "Isolate, lock out, release or block stored energy, and verify before starting",["Turn off the start button, tell the operator, and begin work on the belt", "Ask the operator to stand by the stop button while you work on the drive", "Hang a danger tag on the switch and begin work, with no lock applied, as long as the supervisor has signed the tag"], "Lockout must control all hazardous energy, including stored energy, and verification proves it."],
        ["Which standard in Canada covers the control of hazardous energy by lockout?", "CSA Z460", ["CSA C22.1", "CSA Z94.1", "CSA B52"], "CSA Z460 is the control of hazardous energy standard. CSA Z432 covers machine guarding."],
        ["A grade 8.8 or 10.9 marking on a bolt head indicates:", "The metric strength class of the bolt",["The thread pitch and the number of threads per inch on the shank", "The overall length of the bolt measured in millimetres", "The type of coating or plating applied to the bolt"], "Metric property classes such as 8.8, 10.9, and 12.9 indicate strength."],
        ["How many radial lines are on the head of an SAE Grade 8 bolt?", "6", ["3", "4", "None"], "Grade 5 has 3 radial lines and Grade 8 has 6."],
        ["Tightening a flange with several bolts is best done:", "In a cross or star pattern, in stages, up to the specified torque",["In a circle around the flange, fully tight, one bolt at a time", "Only the top bolts first, then the lower ones until the gasket seats", "Using the longest wrench available to pull each bolt as tight as possible"], "Cross-pattern tightening in stages gives even gasket compression."],
        ["One foot-pound of torque is approximately how many newton-metres?", "1.356 N·m", ["0.74 N·m", "13.6 N·m", "9.8 N·m"], "1 ft·lb = 1.356 N·m."],
        ["The conversion of 1 inch to millimetres is:", "25.4 mm", ["2.54 mm", "10 mm", "12.7 mm"], "One inch is exactly 25.4 mm."],
        ["What is the main purpose of a feeler gauge in millwright work?", "To measure small gaps such as soft foot or coupling gaps",["To measure rotating speed of a shaft or coupling during a run", "To tighten small bolts to the correct torque on a coupling guard or a bearing cap", "To check air or oil pressure in a line, using the thickness of the blade as a scale"], "Feeler gauges measure small clearances."],
        ["Pulley (sheave) speed: a 150 mm driver at 1750 rpm turns a 300 mm driven pulley. The driven speed is:", "875 rpm", ["3500 rpm", "1750 rpm", "437 rpm"], "N2 = N1 x D1 / D2 = 1750 x 150 / 300 = 875 rpm."],
        ["Which chain size has a pitch of 1/2 inch?", "ANSI No. 40", ["ANSI No. 60", "ANSI No. 80", "ANSI No. 100"], "ANSI chain's first digit(s) gives pitch in eighths of an inch, so No. 40 is 1/2 in. No. 60 is 3/4 in and No. 80 is 1 in."],
        ["A key and keyway on a shaft are used to:", "Transmit torque between the shaft and a hub, such as a coupling or sheave",["Seal the shaft against oil leaks where it passes through the housing or bearing cap", "Cool the bearing by carrying heat away from the shaft journal and into the hub", "Measure shaft runout and coupling offset during alignment, using the key as a reference"], "The key locks the hub to the shaft in rotation."],
        ["Why should you never use compressed air to blow dust off your clothing or skin?", "It can force particles or air into the skin and eyes and cause serious injury",["It only wastes compressed air and money, with no real risk of injury to the person", "It makes loud noise that can damage hearing, but it causes no other harm", "It dries out the skin and leaves it cracked and irritated, which is the only concern"], "Compressed air can cause injection injuries and eye injuries."],
        ["Which of these gives information about a chemical's hazards and handling in a Canadian workplace?", "A safety data sheet (SDS) under WHMIS",["A torque chart listing fastener sizes and tightening values", "A crane load chart listing capacities by boom radius", "A bearing catalogue listing sizes and load ratings"], "WHMIS uses labels and SDSs."],
        ["A shop dial indicator is most commonly used to measure:", "Small displacements such as shaft runout and alignment offsets",["Temperature of a bearing housing or gearbox casing, read at the surface of the metal", "Pressure of oil in a lubrication line or a hydraulic circuit during operation", "Flow rate of fluid through a pump discharge pipe, using the plunger travel"], "Dial indicators read small movement."],
        ["A hydraulic fluid leak from a pinhole in a pressurized hose should be checked using:", "A piece of cardboard or wood, not your bare hand, after shutting down and releasing pressure",["Your bare hand held near the hose while the pump runs, to feel the spray from the leak", "A rag held over the leak while the pump keeps running at full operating pressure", "Nothing special, since a pinhole leak is too small to cause any real harm to skin"], "Injection injuries from high-pressure fluid can be severe and need immediate medical attention."]
      ]),
      2: bank([
        ["A sling with two legs at 60 degrees from horizontal lifts a 2000 kg load. The tension in each leg is about:", "1155 kg-force", ["1000 kg-force", "577 kg-force", "2000 kg-force"], "Tension = W / (2 x sin 60) = 2000 / 1.732 = 1155. Lower sling angles raise the tension."],
        ["Lower sling angles measured from the horizontal:", "Increase the tension in each leg", ["Decrease the tension", "Have no effect", "Only affect the weight of the load"], "The flatter the angle, the greater the leg tension."],
        ["Soft foot is:", "A condition where a machine foot does not sit flat and the frame distorts when bolts are tightened",["A rubber or neoprene pad fitted under a machine foot to absorb vibration from the motor", "A flexible type of coupling that tolerates large misalignment between the two shafts", "A lubricant applied under the feet to let the machine slide into position on the base"], "Soft foot should be corrected before alignment, typically by shimming."],
        ["Which pair of misalignments are present in coupled shafts?", "Parallel (offset) and angular",["Radial and thermal, measured on the shaft and the housing", "Axial and rotational only, with no offset or angle involved", "Static and dynamic only, measured with the machine stopped"], "Real misalignment is usually a combination of both."],
        ["The first step in a typical alignment job is to:", "Check for soft foot, runout, and pipe strain, then rough-align",["Final align with the coupling bolts tight, then check for soft foot", "Shim the feet randomly until the readings look close enough", "Paint the base and mark the footprint before moving the machine"], "Foundation, soft foot, and strain issues must be corrected first."],
        ["Gear ratio equals:", "Driven gear teeth divided by driver gear teeth",["Driver gear teeth divided by driven gear teeth", "The sum of the driver and driven gear teeth", "The difference between driven and driver gear teeth"], "Ratio = driven / driver, so a 60-tooth gear driven by a 20-tooth pinion gives 3:1."],
        ["A 25:1 gearbox with a 1750 rpm input has an output speed of:", "70 rpm", ["43,750 rpm", "700 rpm", "7 rpm"], "1750 / 25 = 70 rpm."],
        ["Which lubricant grade of grease is most common for general bearing use?", "NLGI Grade 2", ["NLGI Grade 000", "NLGI Grade 6", "A solid film only"], "NLGI 2 is the common general-purpose consistency. Always follow the manufacturer's specification."],
        ["Over-greasing a bearing commonly causes:", "Overheating and seal damage from churning and pressure",["Lower bearing temperature because the extra grease carries heat away", "Longer bearing life because the cavity is always completely full", "Better sealing, with no risk to the bearing or seals"], "Too much grease increases temperature and can damage seals."],
        ["A hydraulic cylinder has a 50 cm2 piston area with 10 MPa of pressure. The push force is:", "50 kN", ["5 kN", "500 kN", "0.5 kN"], "50 cm2 = 0.005 m2. F = 10,000,000 Pa x 0.005 m2 = 50,000 N."],
        ["Which fluid is used to pre-charge a hydraulic accumulator?", "Nitrogen", ["Oxygen", "Air from a compressor", "Acetylene"], "Use nitrogen only. Oxygen or air with oil can cause explosion or dieseling."],
        ["On a centrifugal pump, doubling the speed (affinity laws) results in the flow being:", "Doubled", ["Halved", "Quadrupled", "Unchanged"], "Flow is proportional to speed. Head is proportional to speed squared and power to speed cubed."],
        ["Cavitation in a pump is caused by:", "Vapour bubbles forming when suction pressure drops too low and then collapsing",["Overlubrication of the pump bearings, which heats the shaft and the impeller hub", "Too much suction pressure forcing fluid hard into the impeller eye and the casing", "Cold weather thickening the fluid and slowing the pump down, with no vapour involved"], "Insufficient NPSH available causes vapour bubbles that collapse and damage the impeller."],
        ["When replacing V-belts on a multi-belt drive, you should:", "Replace the full matched set and check sheave alignment and wear",["Replace only the broken belt and leave the older ones in service", "Mix old and new belts so the wear is spread across the drive", "Remove the guard permanently so belts can be checked each shift"], "Mixed belts carry load unevenly and wear quickly."],
        ["What does a spring-loaded relief valve protect a hydraulic system from?", "Overpressure", ["Low flow only", "High temperature only", "Contamination"], "The relief valve opens at its set pressure to protect components."]
      ]),
      3: bank([
        ["A basket hitch with two vertical legs on a sling generally has what capacity compared with a vertical hitch of the same sling?", "Up to double, depending on the sling angle and bend radius",["Half the capacity, because the sling is bent around the load", "No change in capacity in any case, whatever the hitch type", "Zero, since a basket hitch is never allowed on a sling"], "A basket hitch uses both legs, but angle and diameter ratios reduce capacity, so follow the rated tag."],
        ["A choker hitch on a sling generally results in:", "A reduced rated capacity compared with a vertical hitch",["A higher rated capacity because the sling grips the load tighter", "The same rated capacity in all cases, since the sling is unchanged", "No effect on strength, as long as the sling has a tag"], "Chokers reduce capacity because the sling is bent and the angle changes."],
        ["Which vibration pattern commonly indicates unbalance?", "A strong peak at 1x running speed, mainly radial",["High peaks at many non-integer multiples of running speed", "No peak at all, because unbalance is a static condition", "A peak at 10x running speed only, mainly in the axial direction"], "Unbalance shows at one times running speed."],
        ["High axial vibration with strong 1x and 2x peaks often suggests:", "Shaft misalignment", ["Perfect balance", "Good lubrication only", "Cavitation only"], "Misalignment often shows axial 1x and 2x. Confirm with other tests."],
        ["For a given coupling, the permissible misalignment tolerance generally:", "Gets tighter as shaft speed increases",["Gets looser as speed increases, because the coupling absorbs more", "Is the same for every speed, as it depends on coupling size only", "Does not matter if the coupling is a flexible type"], "Higher speeds need tighter alignment, and the coupling manufacturer's data is the source."],
        ["Thermal growth compensation in alignment is applied to:", "Offset the machines cold so they align when at operating temperature",["Reduce vibration to zero once the machines are running at their normal speed", "Replace the coupling so that no misalignment can occur while the machine is hot", "Prevent leaks at the seals and gaskets when the machines heat up to normal temperature"], "Machines grow as they heat, so cold targets account for that."],
        ["A bearing that fails early with a pattern of fluting on the raceway often points to:", "Electrical discharge through the bearing, such as from a VFD",["Overgreasing of the bearing, which always shows fluting in the raceway", "Cold weather thickening the grease and starving the rollers", "A loose guard transmitting vibration into the bearing housing"], "Stray electrical current can cause fluting. Shaft grounding or insulated bearings help."],
        ["When mounting a bearing with an interference fit on a shaft, you should:", "Heat it evenly with an induction heater to the manufacturer's limit, or use an approved press",["Hammer on the outer race with a brass drift to drive it onto the shaft, working around evenly", "Heat it with an open torch until it glows so it slides on easily and cools into place", "Use grease on the shaft and bore to make the bearing slip into place by hand pressure"], "Even, controlled heating or a proper press prevents damage. Never strike the outer ring to force the inner ring."],
        ["Why is a mechanical seal installed with a clean, undamaged face and correct compression?", "The lapped faces form the seal and are easily damaged",["The faces are decorative and only the gland needs to be tight", "It lowers the pump speed and reduces the load on the motor", "It reduces pump flow so the seal runs cooler at the same speed"], "Seal faces are precision-lapped and sensitive to contamination."],
        ["ISO VG 68 means that an oil has:", "A nominal viscosity of about 68 mm2/s (cSt) at 40 degrees C",["A density of 68 kg/m3 at 15 degrees C for the oil", "A flash point of 68 degrees C, the temperature it ignites", "A pour point of 68 degrees C, below which the oil stops flowing"], "ISO viscosity grades are based on kinematic viscosity at 40 degrees C."],
        ["Reverse-dial indicator alignment uses:", "Two dial indicators read on each shaft to calculate offset and angularity",["Only a feeler gauge on the coupling faces, with no dial indicators used at any point", "A laser system at all times, with no mechanical indicators allowed on either shaft", "A straightedge laid across the coupling halves and read by eye, with a feeler gauge for the gap"], "It is a precise method for coupled shafts."],
        ["Shimming the feet of a motor while correcting alignment should use:", "Clean, flat, precut stainless steel shims with the fewest possible pieces",["Cardboard or paper shims cut to size, which compress and settle over time", "Any scrap metal that is close to the thickness needed", "A stack of eight or more thin pieces, to fine-tune each foot"], "Too many shims or soft materials compress and cause shifts."],
        ["A reciprocating or air compressor's relief valve is used to:", "Prevent pressure from exceeding a safe limit",["Increase the flow of air delivered to the tank", "Reduce the noise of the compressor while it runs", "Cool the air before it enters the receiver tank"], "Relief valves protect the equipment and people."],
        ["In an oxy-acetylene system, the acetylene regulator working pressure should not exceed:", "15 psi (about 103 kPa)", ["50 psi", "100 psi", "500 psi"], "Acetylene becomes unstable above about 15 psi."],
        ["A gearbox shows metal particles in the oil on a routine sample. The best action is to:", "Investigate, check the wear pattern, and plan repair or follow-up sampling",["Ignore it, since a little metal in the oil is normal for every gearbox and needs no action", "Drain and refill with new oil without any testing or inspection of the gears", "Increase the load so the gears wear in and the particles clear out of the oil on their own"], "Oil analysis is used to find wear early."]
      ]),
      4: bank([
        ["A written shutdown plan for major maintenance should include:", "Scope, sequence, labour, rigging plan, permits, spare parts, and a restart plan",["Only the start date and the names of the crew assigned to each part of the job", "A verbal agreement between the supervisor and the crew leads about who does what", "No formal documentation, to save planning time and let the crew start the outage sooner"], "Planning reduces risk and delays."],
        ["The L10 bearing life is the number of revolutions that:", "90% of identical bearings will reach or exceed under the stated conditions",["All bearings in the batch will reach or exceed under the stated conditions without failing", "Only ten percent of identical bearings reach before they fail under the stated conditions", "A single bearing fails at exactly that number of revolutions, no sooner and no later in service"], "L10 is the basic rating life at 90% reliability."],
        ["Torque in N·m for a 15 kW motor at 1500 rpm is about:", "95.5 N·m", ["15 N·m", "955 N·m", "9.55 N·m"], "T = 9550 x kW / rpm = 9550 x 15 / 1500 = 95.5."],
        ["A critical lift is generally one where:", "The load, conditions, or consequences require a detailed lift plan and additional controls",["The load is under 10 kg and handled by one person with a hand hoist inside the shop", "Nobody is nearby and the lift is done outside normal work hours, so the risk is low", "The crane is new and has not yet been through a full commissioning check by the maker"], "Critical lifts need engineered plans and supervision as set by site rules."],
        ["In root-cause failure analysis, a repeated bearing failure at the same position suggests:", "Investigating alignment, lubrication, fit, load, and contamination, not only replacing the bearing",["Using a larger bearing only, since the old one was clearly too small for the duty", "Ignoring the history, since each failure is a separate event with a new and unrelated cause", "Adding more grease every time, because poor lubrication is always the cause of repeat failures"], "Repeated failures point to a root cause."],
        ["Which tool best checks the flatness and levelness of a base for precision machinery?", "A precision machinist level and straightedge or an optical or laser level",["A carpenter's level only, set on the base in two directions and read to the nearest bubble line", "A tape measure run along the edges and diagonals of the plate to confirm its size and square", "A feeler gauge only, slid under the edges of the plate to find any gap with the concrete"], "Foundations need precision measurement."],
        ["Grouting a machine base is intended to:", "Fill the gap between baseplate and foundation to support the load and transfer vibration",["Paint the plate so it is protected from rust and wear while the machine is running", "Provide a lubricant film between the baseplate and the concrete so the base can slide on it", "Reduce the temperature of the baseplate and of the machine above it during long operation"], "Grout, such as epoxy, provides full contact."],
        ["A coupling guard that is missing must be:", "Reinstalled before the equipment is started, as per machine guarding rules (such as CSA Z432)",["Left off if the machine is quiet and runs without any noticeable vibration or heat", "Replaced by tape or a rope barrier until the next planned shutdown, with a warning sign posted", "Skipped on night shift, when fewer people are working in the area around the machine"], "Guards protect workers from moving parts."],
        ["For a pump with high vibration at vane-pass frequency, which cause is plausible?", "Hydraulic issues such as clearance problems or flow conditions at the impeller",["Poor grounding of the motor frame that lets stray current pass through the bearings", "A loose or damaged coupling guard that rattles at the same frequency as the impeller", "Low humidity in the plant that dries out the bearing grease and leaves the housing too stiff"], "Vane-pass frequency equals the number of vanes times running speed. Check impeller clearances and flow."],
        ["When planning a precision alignment, which document is the best source for tolerances?", "The equipment or coupling manufacturer's specifications and site standards",["A general website found by searching for the coupling name, which may not match your model", "The memory of the oldest worker on the crew, who has aligned similar couplings before", "The shipping label on the crate that the equipment arrived in, which lists weight and size"], "Follow manufacturer and site standards."],
        ["A planned maintenance program differs from run-to-failure because it:", "Schedules inspection and servicing to prevent failures and unplanned downtime",["Does nothing until a failure happens, then repairs the machine and returns it to service", "Is always more expensive and gives no improvement in reliability or uptime for the plant", "Ignores records and relies on the operator's feel for the equipment to decide when to service it"], "Planned and condition-based maintenance reduce unplanned breakdowns."],
        ["Which condition-monitoring technique detects a hot bearing or electrical connection without contact?", "Infrared thermography",["A feeler gauge slid between the bearing cap and the housing", "A dial indicator mounted on a magnetic base beside the housing", "An oil dipstick checked by hand after the machine has been stopped"], "Thermography shows temperature differences."],
        ["A rigging plan for lifting a 5 tonne pump should include:", "Load weight and centre of gravity, rigging gear ratings, sling angles, path, and communication signals",["Only the colour and brand of the slings that are available in the crib at the time", "A guess at the weight based on size, since the nameplate is rarely accurate on old pumps", "No signals, since the operator can see the whole path and the crew can follow behind the load"], "Know the weight and capacity before the lift."],
        ["What is the effect of a bent shaft on a rotating machine?", "Vibration at running speed and possible bearing and seal damage",["Lower vibration at running speed, as the bend balances the rotor", "Longer bearing and seal life, because the load is spread unevenly", "No effect on the machine as long as the shaft still turns freely"], "A bent shaft behaves like unbalance."],
        ["After overhauling a gearbox, the best practice before returning to service is:", "Verify oil level and type, alignment, guards, and perform a controlled run-in with monitoring",["Start at full load immediately to prove that the repair is sound and the gearbox is tight", "Skip the alignment check, since the housing was not moved during the overhaul of the gears", "Remove the breather so that pressure cannot build up inside the case during the run-in period"], "Checks and run-in prevent early failures."]
      ])
    },
    roadmapSteps: [
      { title: "Before you start", items: ["Confirm the trade fits you: mechanical aptitude, math, and physical work.", "Take math, physics, and shop courses if you can.", "Find an employer sponsor in a plant, mine, mill, or with a contractor.", "Gather safety tickets such as WHMIS, fall protection, and first aid, and register as an apprentice with your provincial authority."] },
      { title: "Year 1: Safety, hand tools, and fundamentals", items: ["Lockout, rigging awareness, and workplace safety.", "Hand and power tools, precision measurement, and fasteners.", "Blueprint reading and shop math.", "Lubrication basics, bearings, and drives."] },
      { title: "Year 2: Drives, pumps, and alignment", items: ["Belts, chains, gears, and couplings.", "Pumps, seals, and compressors.", "Shaft alignment and soft foot.", "Rigging and hoisting under supervision."] },
      { title: "Year 3: Hydraulics, installation, and condition monitoring", items: ["Hydraulic and pneumatic systems.", "Machinery installation, levelling, and grouting.", "Vibration, oil analysis, and thermography.", "Welding and fabrication for repairs."] },
      { title: "Year 4 and beyond: Planning, troubleshooting, and leadership", items: ["Shutdown planning and execution.", "Root-cause analysis and advanced troubleshooting.", "Precision alignment and critical lift planning.", "Mentoring apprentices and leading crews."] },
      { title: "Certification", items: ["Complete in-school and on-the-job hours required by your province.", "Write the Red Seal exam (Industrial Mechanic (Millwright)) after your apprenticeship, according to your province's process.", "Study with the occupational standard and practice tests.", "Keep your certificate and tickets current, and plan for continued learning."] }
    ],
    glossary: [
      ["Alignment", "Positioning coupled machine shafts so their centrelines are collinear within tolerance."],
      ["Backlash", "Clearance between mating gear teeth."],
      ["Baseplate", "A rigid plate or frame that supports a machine and is fixed to the foundation."],
      ["Bearing", "A component that supports and guides a rotating shaft with low friction."],
      ["Cavitation", "Formation and collapse of vapour bubbles in a liquid, damaging pumps."],
      ["Coupling", "A device that connects two shafts to transmit torque."],
      ["Dial indicator", "A precision gauge that measures small displacement."],
      ["Dowel", "A precision pin that locates parts in a fixed position."],
      ["Feeler gauge", "A set of thin metal blades for measuring small gaps."],
      ["Grout", "A material poured under a baseplate to provide full support."],
      ["Interference fit", "A fit in which the shaft is slightly larger than the bore, requiring force or heat to assemble."],
      ["Keyway", "A slot in a shaft or hub that holds a key."],
      ["Lockout", "Applying a lock to an energy-isolating device to prevent unexpected energization."],
      ["Mechanical seal", "A seal with a rotating and a stationary face that controls leakage along a shaft."],
      ["NPSH", "Net positive suction head: a measure of pressure above vapour pressure at a pump suction."],
      ["Parallel misalignment", "Offset between shaft centrelines that remain parallel."],
      ["Angular misalignment", "The angle between shaft centrelines."],
      ["Pillow block", "A housing that supports a bearing."],
      ["Pitch", "The distance between corresponding points of adjacent chain links or gear or thread teeth."],
      ["Preload", "An intentional load applied to a bearing or fastener to remove clearance."],
      ["Rigging", "Equipment and methods used to lift and move loads."],
      ["Runout", "The amount a rotating shaft or face wobbles from true."],
      ["Shim", "A thin spacer used to adjust height or clearance."],
      ["Sheave", "A grooved pulley for belts or ropes."],
      ["Soft foot", "A machine foot that does not sit flat, causing frame distortion when tightened."],
      ["Sling angle", "The angle between a sling leg and the horizontal, affecting leg tension."],
      ["Tolerance", "The permitted variation in a dimension or measurement."],
      ["Working load limit (WLL)", "The maximum load that rigging equipment is rated to carry in service."]
    ],
    cards: [
      { front: "Lockout principle", back: "Isolate, lock and tag, release or block all stored energy, and verify before work." },
      { front: "Sling leg tension", back: "T = W / (2 x sin of angle from horizontal) for two legs. Lower angles increase tension." },
      { front: "Pulley speed relationship", back: "N1 x D1 = N2 x D2. A smaller driven pulley turns faster." },
      { front: "Gear ratio", back: "Driven teeth divided by driver teeth. Output speed equals input speed divided by the ratio." },
      { front: "Torque from power", back: "T (N·m) = 9550 x kW / rpm. T (ft·lb) = 5252 x hp / rpm." },
      { front: "Pump affinity laws", back: "Flow varies with speed, head with speed squared, power with speed cubed." },
      { front: "Soft foot", back: "A machine foot that does not sit flat. Check and fix before final alignment." },
      { front: "Unbalance vibration signature", back: "Strong peak at 1x running speed, mainly radial." },
      { front: "Fastener torque order", back: "Tighten flange and cover bolts in a cross pattern and in stages." },
      { front: "Hydraulic force", back: "F = P x A. 10 MPa on 50 cm2 gives 50 kN." }
    ],
    jobsIntro: "Look for manufacturing plants, mines and mills, pulp and paper, power generation, industrial contractors, and equipment service shops.",
    tips: ["Bring a short resume, your safety tickets, and ID.", "Show interest in machinery, math, and problem solving.", "Visit plants, shops, and training centres when you can, and follow up.", "Ask what tools and PPE you need and what the employer supplies."],
    forumTopics: ["Starting out", "Alignment and bearings", "Rigging and hydraulics", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference: [
      {
        title: "Key formulas",
        list: ["Pulley speed: N<sub>2</sub> = N<sub>1</sub> x D<sub>1</sub> / D<sub>2</sub>.", "Gear ratio = driven teeth / driver teeth.", "Torque (N·m) = 9550 x kW / rpm. Torque (ft·lb) = 5252 x hp / rpm.", "Hydraulic force F = P x A.", "Two-leg sling tension T = W / (2 x sin of the angle from horizontal).", "1 hp = 0.746 kW."]
      },
      {
        title: "Conversions",
        table: { head: ["Quantity", "Conversion"], rows: [["1 in", "25.4 mm"], ["1 ft·lb", "1.356 N·m"], ["1 psi", "6.895 kPa"], ["1 MPa", "145 psi (approx.)"], ["1 kW", "1.341 hp"], ["1 kg", "2.205 lb"]] }
      },
      {
        title: "Sling angle effect on leg tension (two legs)",
        intro: "Tension in each leg as a multiple of the load weight, with the angle measured from the horizontal.",
        table: { head: ["Angle from horizontal", "Tension multiplier per leg"], rows: [["90 degrees", "0.50"], ["60 degrees", "0.577"], ["45 degrees", "0.707"], ["30 degrees", "1.00"]] },
        note: "Never exceed the working load limit on the sling tag. Avoid angles below 45 degrees unless the lift plan allows."
      },
      {
        title: "Bolt marking and ANSI chain pitch",
        table: { head: ["Item", "Detail"], rows: [["SAE Grade 5 head marking", "3 radial lines"], ["SAE Grade 8 head marking", "6 radial lines"], ["Metric property classes", "8.8, 10.9, 12.9"], ["ANSI No. 40 chain", "1/2 in pitch"], ["ANSI No. 60 chain", "3/4 in pitch"], ["ANSI No. 80 chain", "1 in pitch"]] },
        note: "Use the torque specification for the exact fastener, lubricated or dry, as stated by the manufacturer."
      },
      {
        title: "Pump affinity laws",
        list: ["Flow is proportional to speed: Q2 / Q1 = N2 / N1.", "Head is proportional to speed squared.", "Power is proportional to speed cubed.", "Doubling speed gives double flow, four times the head, and eight times the power."]
      },
      {
        title: "Standards and Canadian pointers",
        list: ["CSA Z460: control of hazardous energy (lockout).", "CSA Z432: safeguarding of machinery.", "Provincial occupational health and safety regulations govern rigging, lifting, confined spaces, and fall protection.", "Use the manufacturer's data for alignment tolerances, torque, and lubrication.", "Hot work needs permits and fire watch under site and provincial rules."]
      }
    ]
  });
})();
