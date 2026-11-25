// Plumbing content: tools, learning media, practice tests, roadmap, and reference.
// Practice questions are original study aids, not official Red Seal exam questions.

const plumbingSections = [
  { id: "overview", label: "Overview" },
  { id: "roadmap", label: "Roadmap" },
  { id: "tools", label: "Buying tools" },
  { id: "learn", label: "Videos & audio" },
  { id: "practice", label: "Practice tests" },
  { id: "reference", label: "Reference" },
  { id: "flashcards", label: "Flashcards" },
  { id: "progress", label: "My progress" },
  { id: "jobs", label: "Jobs" },
  { id: "forum", label: "Forum" },
  { id: "rules", label: "Rules & privacy" }
];

const plumbingToolGroups = [
  {
    title: "Day-one tools, buy once and buy well",
    note: "Professional-grade tools that hold their edge and accuracy for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
    items: [
      { name: "RIDGID 14 in and 18 in pipe wrenches", why: "Hardened, replaceable jaws and a forged hook grip round pipe without slipping. The workhorse of the trade.", search: "RIDGID 14 inch 18 inch pipe wrench" },
      { name: "Knipex Cobra or Channellock tongue-and-groove pliers", why: "Push-button or precision-ground jaws grip nuts and fittings in tight spaces without rounding them.", search: "Knipex Cobra pliers Channellock tongue and groove" },
      { name: "Crescent or Knipex adjustable wrenches (8 in and 12 in)", why: "Tight-tolerance jaws that don't spread under load, for supply connections and unions.", search: "Knipex Crescent adjustable wrench 8 inch 12 inch" },
      { name: "RIDGID or Reed copper tubing cutter (1/4 to 1-1/8 in)", why: "Square, burr-light cuts on copper. Quality wheels and a solid roller frame last for years.", search: "RIDGID 15 tubing cutter copper Reed" },
      { name: "Milwaukee or Stanley FatMax tape measure (25 ft)", why: "Wide, stiff blade and a durable hook for accurate takeoffs and rough-in measurements.", search: "Milwaukee Stanley FatMax tape measure 25 ft" },
      { name: "Milwaukee or Stanley torpedo level", why: "Magnetic, accurate vials for setting grade on drains and checking plumb on fixtures.", search: "Milwaukee torpedo level magnetic 9 inch" },
      { name: "Klein or Wera screwdriver set with hex keys", why: "Precision tips that don't cam out on faucet, trim, and fixture screws.", search: "Klein Wera screwdriver set hex key set" },
      { name: "Lenox or Milwaukee hacksaw and quality blades", why: "A rigid frame and bi-metal blades cut steel, copper, and plastic cleanly.", search: "Lenox Milwaukee hacksaw bi-metal blades" },
      { name: "Cut-resistant gloves, safety glasses, and CSA-approved safety boots", why: "Sharp pipe edges, hot copper, and wet floors. Comfortable, rated protection is what you will actually wear.", search: "Mechanix cut resistant gloves CSA safety boots Red Wing Blundstone" }
    ]
  },
  {
    title: "Build up in first and second year",
    note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
    items: [
      { name: "Milwaukee M18 FUEL or Makita 18V drill and impact driver", why: "Reliable power for fastening, boring, and hanger work. Choose one battery platform and stay with it.", search: "Milwaukee M18 FUEL drill impact driver combo" },
      { name: "Milwaukee M12 ProPEX expansion tool or equivalent", why: "Fast, consistent expansion PEX connections. Pick the system your employer uses.", search: "Milwaukee M12 ProPEX expansion tool" },
      { name: "PEX crimp or cinch tool with go/no-go gauge", why: "A quality tool and a gauge give joints you can verify and trust.", search: "PEX crimp tool go no-go gauge Apollo Milwaukee" },
      { name: "Deburring and reaming tool", why: "Removes burrs inside cut pipe so flow stays smooth and joints seal well.", search: "RIDGID reamer deburring tool pipe" },
      { name: "Turbotorch or Bernzomatic soldering torch kit", why: "A reliable ignition and a consistent flame make clean sweated copper joints.", search: "Turbotorch Bernzomatic soldering torch kit propane MAP-Pro" },
      { name: "Basin wrench and closet auger", why: "Reach nuts behind sinks and clear toilets without damaging porcelain.", search: "RIDGID basin wrench closet auger" },
      { name: "Milwaukee Sawzall or Makita cordless reciprocating saw", why: "Cutting pipe, framing, and cast iron in renovations. Buy quality blades too.", search: "Milwaukee M18 Sawzall reciprocating saw" },
      { name: "Heavy-duty tool bag or bucket organizer", why: "Keeps daily tools together, protected, and easy to carry.", search: "Veto Pro Pac tool bag bucket organizer" }
    ]
  },
  {
    title: "Later and specialized",
    note: "Often supplied by the shop or employer. Ask before buying.",
    items: [
      { name: "RIDGID ProPress or Milwaukee press tool", why: "Flameless copper and stainless joints in seconds. Normally company-supplied.", search: "RIDGID ProPress Milwaukee press tool copper" },
      { name: "RIDGID drain machine and cable set", why: "Clears stoppages in main and branch drains. Usually a shop or company tool.", search: "RIDGID K-45 drain machine cable" },
      { name: "Drain inspection camera (RIDGID SeeSnake or Milwaukee M-Spector)", why: "See inside the pipe to find breaks, roots, and belly sections.", search: "RIDGID SeeSnake Milwaukee M-Spector inspection camera" },
      { name: "RIDGID pipe threader and dies", why: "Cutting threads on steel pipe for industrial and commercial jobs.", search: "RIDGID 300 pipe threader dies" },
      { name: "Test gauges and a pressure test kit", why: "Pressure and leak testing is a core inspection step. Choose accurate, calibrated gauges.", search: "plumbing pressure test gauge kit" },
      { name: "Full-body harness and lanyard", why: "Usually supplied by the employer. Fall protection training comes first.", search: "3M DBI-SALA full body harness CSA" }
    ]
  },
  {
    title: "School supplies for technical training",
    note: "What helps in the classroom for drawings, math, and code study. Check with your school and your exam body about calculator rules before you buy.",
    items: [
      { name: "Mechanical pencil (0.5 mm), such as Pentel GraphGear 1000 or Rotring 600", why: "Consistent fine lines for isometrics, riser diagrams, and notes. A metal body and retractable tip hold up in a tool bag.", search: "Pentel GraphGear 1000 Rotring 600 mechanical pencil 0.5mm" },
      { name: "Spare 0.5 mm leads (HB and 2H) and quality erasers", why: "2H gives fine, crisp drafting lines; HB is better for notes. A vinyl eraser keeps drawings clean.", search: "Pentel 0.5mm HB 2H lead refills vinyl eraser" },
      { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Trig for offsets, fractions, volumes, and flow conversions.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
      { name: "Isometric graph paper pad", why: "Practise isometric drawings of pipe runs at a 30° angle, a core plumbing skill.", search: "isometric graph paper pad" },
      { name: "Architect's and engineer's scales", why: "Reading plumbing drawings at scale, such as 1/4 in = 1 ft.", search: "architect scale engineer scale ruler" },
      { name: "Triangles, protractor, and a 12 in steel ruler", why: "Clean 30°, 45°, and 60° lines for offsets and risers.", search: "Staedtler drafting triangle set protractor" },
      { name: "Plumbing code book (National Plumbing Code of Canada or your provincial code)", why: "You will refer to the code constantly in school and on the exam. Check which edition your province uses.", search: "National Plumbing Code of Canada book" },
      { name: "Field notebook (Rite in the Rain) and graph paper", why: "Sketching rough-ins and recording measurements. Weatherproof paper survives job sites.", search: "Rite in the Rain field notebook graph paper" },
      { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic, which also helps Red Seal exam review.", search: "binder dividers highlighters" },
      { name: "Fine-tip permanent markers", why: "Marking pipe, labelling lines, and layout on framing.", search: "Sharpie fine point Markal paint marker" }
    ]
  }
];

const plumbingMediaGroups = [
  {
    title: "Official and standards resources",
    items: [
      { name: "Red Seal Plumber trade profile", desc: "Occupational standard, exam information, and preparation guidance.", url: "https://red-seal.ca/_conf/assets/custom/docms/plumber/tp-current-eng.pdf" },
      { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare.", url: "https://red-seal.ca/eng/welcome.shtml" },
      { name: "Codes Canada (National Plumbing Code)", desc: "The model national code that provincial plumbing codes are based on.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
      { name: "UA Canada", desc: "Union plumber and pipefitter training and apprenticeship information.", url: "https://www.uacanada.ca/" },
      { name: "Canadian Institute of Plumbing & Heating (CIPH)", desc: "Industry information, standards, and resources.", url: "https://www.ciph.com/" }
    ]
  },
  {
    title: "Video searches",
    note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local codes.",
    items: [
      { name: "Drain, waste and vent (DWV) basics", desc: "How drains, traps, and vents work together.", url: "https://www.youtube.com/results?search_query=plumbing+drain+waste+vent+DWV+basics" },
      { name: "Plumbing isometric drawing", desc: "Drawing and reading isometrics of pipe runs.", url: "https://www.youtube.com/results?search_query=plumbing+isometric+drawing+tutorial" },
      { name: "Soldering copper pipe", desc: "Cleaning, fluxing, heating, and soldering a clean joint.", url: "https://www.youtube.com/results?search_query=how+to+solder+copper+pipe+properly" },
      { name: "PEX installation", desc: "Crimp, cinch, and expansion fitting methods.", url: "https://www.youtube.com/results?search_query=PEX+plumbing+installation+crimp+expansion" },
      { name: "Pipe offsets and plumbing math", desc: "Calculating travel and offsets with 45 degree fittings.", url: "https://www.youtube.com/results?search_query=plumbing+offset+math+45+degree+travel" },
      { name: "Water heater installation", desc: "Tank and tankless water heater basics and safety devices.", url: "https://www.youtube.com/results?search_query=water+heater+installation+plumber+relief+valve" },
      { name: "Backflow prevention", desc: "Cross connections and backflow preventers.", url: "https://www.youtube.com/results?search_query=backflow+prevention+cross+connection+plumbing" }
    ]
  },
  {
    title: "Audio, beginner (pre-apprentice and year 1)",
    note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for plumbing yourself.",
    items: [
      { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
      { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
      { name: "YouTube: plumbing apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=plumbing+apprentice+podcast" }
    ]
  },
  {
    title: "Audio, intermediate (years 2-3)",
    note: "Trade-knowledge talk that builds on what you do on the job.",
    items: [
      { name: "Plumbing podcast directory (Feedspot)", desc: "A ranked list of plumbing podcasts. Pick shows on installation, code, and service work.", url: "https://podcast.feedspot.com/plumbing_podcasts/" },
      { name: "YouTube: plumbing code explained (listen-along)", desc: "Talks on drainage, venting, and code rules to hear while commuting.", url: "https://www.youtube.com/results?search_query=plumbing+code+explained+drainage+venting" },
      { name: "YouTube: plumber tips and stories (audio)", desc: "Job-site lessons and troubleshooting stories from working plumbers.", url: "https://www.youtube.com/results?search_query=plumber+podcast+tips+stories" }
    ]
  },
  {
    title: "Audio, advanced (year 4 to journeyperson)",
    note: "Exam prep, business, and leadership.",
    items: [
      { name: "YouTube: Red Seal plumber exam prep (talk-through)", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+plumber+exam+preparation" },
      { name: "YouTube: plumbing business and estimating podcast", desc: "Pricing, running jobs, and growing a plumbing business.", url: "https://www.youtube.com/results?search_query=plumbing+business+estimating+podcast" },
      { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
    ]
  }
];

const plumbingPracticeBank = {
  1: [
    { q: "Which tool cuts copper tubing cleanly with little burr?", options: ["Hacksaw", "Tubing cutter", "Cold chisel", "Reciprocating saw"], answer: 1, explain: "A tubing cutter makes a square cut. Ream the inside afterward to remove the burr." },
    { q: "Why do you ream the inside of a cut copper tube?", options: ["To make it shiny", "To remove the burr that restricts flow", "To lengthen the pipe", "To thin the wall"], answer: 1, explain: "A burr disturbs flow and can erode the pipe over time." },
    { q: "Solder used on potable water pipe must be:", options: ["Lead-free", "Any available type", "Tin-lead", "Acid core"], answer: 0, explain: "Lead-free solder protects drinking water. Use flux approved for potable systems." },
    { q: "What does PEX stand for?", options: ["Plastic extruded pipe", "Cross-linked polyethylene", "Pressure-rated expansion", "Polyethylene extrusion"], answer: 1, explain: "PEX is cross-linked polyethylene, a flexible supply pipe." },
    { q: "Which of these is a common drain, waste and vent (DWV) pipe material?", options: ["Type K copper only", "ABS", "PEX", "Black iron gas pipe"], answer: 1, explain: "ABS and PVC DWV pipe are common for drains and vents where the code allows." },
    { q: "How many millimetres are in one inch?", options: ["2.54", "10", "25.4", "254"], answer: 2, explain: "1 in = 25.4 mm exactly." },
    { q: "A right triangle has legs of 6 and 8. The hypotenuse is:", options: ["10", "12", "14", "100"], answer: 0, explain: "6² + 8² = 100, and the square root of 100 is 10." },
    { q: "Where would you find the hazards and first-aid measures for a product like pipe cement?", options: ["Invoice", "Safety Data Sheet (SDS)", "Drawing title block", "Tape measure"], answer: 1, explain: "The SDS describes hazards, handling, and first aid." },
    { q: "Before soldering near wood framing you should:", options: ["Use a heat shield and have a fire extinguisher ready", "Soak the wood in oil", "Work faster", "Turn up the torch"], answer: 0, explain: "Heat shields and a fire watch prevent hidden fires inside walls." },
    { q: "Lockout/tagout is used to:", options: ["Mark tools", "Keep energy sources off while servicing equipment", "Label pipes", "Order parts"], answer: 1, explain: "It prevents accidental start-up or release of energy." },
    { q: "A pipe wrench should be used on:", options: ["Chrome fixtures", "Round pipe and fittings that can tolerate the teeth", "Polished nuts", "Soft plastic fittings"], answer: 1, explain: "Pipe wrench teeth bite and mark, so avoid finished surfaces." },
    { q: "Red and blue PEX colours usually indicate:", options: ["Red hot, blue cold", "Red cold, blue hot", "Red drain, blue vent", "Nothing"], answer: 0, explain: "Colour coding helps identify hot and cold, but always confirm the pipe rating." },
    { q: "1 psi is about how many kPa?", options: ["0.69", "6.9", "69", "690"], answer: 1, explain: "1 psi ≈ 6.895 kPa." },
    { q: "When working on a ladder you should:", options: ["Maintain three points of contact", "Stand on the top step", "Carry loads in both hands", "Lean sideways"], answer: 0, explain: "Three points of contact reduces fall risk." },
    { q: "The travel of a 45° offset is about the offset distance times:", options: ["1.0", "1.414", "2.0", "0.707"], answer: 1, explain: "Travel = offset ÷ sin 45° ≈ offset × 1.414." },
    { q: "Plumbing tape or sealant on tapered pipe threads is used to:", options: ["Seal the threads", "Make threading easier on plastic only", "Add strength", "Colour code the joint"], answer: 0, explain: "Thread sealant fills small gaps in tapered threads. Use a product rated for the pipe material and service." },
    { q: "Which wrench should you use to turn a polished chrome fixture nut?", options: ["Pipe wrench", "Adjustable or basin wrench", "Locking pliers", "Hammer"], answer: 1, explain: "Smooth-jawed wrenches protect finishes that pipe wrench teeth would mark." },
    { q: "Why is flux applied to copper before soldering?", options: ["To cool the pipe", "To clean the metal and help solder flow", "To seal threads", "To colour the joint"], answer: 1, explain: "Flux prevents oxidation and draws solder into the joint." },
    { q: "Which PPE protects your eyes when cutting or reaming pipe?", options: ["Safety glasses", "Ear plugs", "Hard hat only", "Knee pads"], answer: 0, explain: "Chips, sparks, and debris are common. Wear eye protection." }
  ],
  2: [
    { q: "The main purpose of a trap is to:", options: ["Increase flow", "Hold a water seal that blocks sewer gas", "Filter water", "Cool waste"], answer: 1, explain: "The water seal stops sewer gases from entering the building." },
    { q: "A vent mainly:", options: ["Protects trap seals and lets air in and out of the system", "Heats the drain", "Adds water pressure", "Stores waste"], answer: 0, explain: "Venting equalizes pressure so waste flows and trap seals aren't pulled out." },
    { q: "A common minimum slope for a small horizontal drain (75 mm or less) is:", options: ["1 in 50 (about 1/4 in per foot)", "1 in 5", "No slope", "1 in 500"], answer: 0, explain: "Confirm the exact minimum slope in your provincial code." },
    { q: "Why is an S-trap generally not permitted?", options: ["It can siphon and lose its seal", "It is too expensive", "It looks bad", "It restricts hot water"], answer: 0, explain: "Without proper venting, an S-trap can siphon itself dry." },
    { q: "A fixture unit is:", options: ["A measure of load a fixture places on the system", "A kind of faucet", "A pipe size", "A tool"], answer: 0, explain: "Fixture units help size drains, vents, and supply pipes." },
    { q: "A cleanout provides:", options: ["Access for clearing blockages", "A vent opening", "A fixture connection", "A pressure release"], answer: 0, explain: "Cleanouts let you rod or camera a drain." },
    { q: "Isometric drawings show pipe runs using lines at:", options: ["30° from horizontal", "10° from horizontal", "60° from vertical only", "No fixed angle"], answer: 0, explain: "Isometric drawing uses 30° axes plus vertical." },
    { q: "On a 1/4 in = 1 ft scale drawing, 1 in on the drawing is:", options: ["1 ft", "2 ft", "4 ft", "12 ft"], answer: 2, explain: "1/4 in is 1 ft, so 1 in is 4 ft." },
    { q: "A backflow preventer protects:", options: ["Potable water from contamination", "Drains from freezing", "Pumps from noise", "Vents from rain"], answer: 0, explain: "It stops contaminated water flowing back into the clean supply." },
    { q: "A dielectric union is used to:", options: ["Join dissimilar metals and reduce galvanic corrosion", "Join PVC pipe", "Vent a drain", "Reduce pressure"], answer: 0, explain: "It isolates metals such as copper and steel." },
    { q: "A water hammer arrestor:", options: ["Absorbs pressure shock when valves close quickly", "Heats water", "Filters sediment", "Measures flow"], answer: 0, explain: "It cushions the shock wave from quick-closing valves." },
    { q: "When solvent-welding ABS or PVC you should:", options: ["Clean and dry the pipe, apply cement, and push and twist the joint together", "Heat the joint with a torch", "Use thread tape", "Apply grease"], answer: 0, explain: "Use the correct cement for the plastic and hold the joint briefly." },
    { q: "A toilet (water closet) drain is typically at least:", options: ["25 mm (1 in)", "50 mm (2 in)", "75 mm (3 in)", "20 mm (3/4 in)"], answer: 2, explain: "Confirm exact sizes with your code." },
    { q: "A building drain carries waste to:", options: ["The building sewer", "The roof vent", "The water heater", "The meter"], answer: 0, explain: "The building drain connects to the building sewer outside the foundation." },
    { q: "To prevent a pipe from sagging and keep its slope, you:", options: ["Support it at the required intervals", "Bury it without support", "Tape it to a stud", "Use extra solder"], answer: 0, explain: "Hangers and supports hold grade and alignment." },
    { q: "A wet vent is a pipe that:", options: ["Carries waste and also serves as a vent for a fixture", "Carries only water supply", "Is used for storm water only", "Must be copper"], answer: 0, explain: "Wet venting is allowed only in the arrangements your code permits." },
    { q: "Trap seal loss from evaporation is most likely in a:", options: ["Rarely used floor drain", "Kitchen sink", "Bathtub in daily use", "Washing machine standpipe in use"], answer: 0, explain: "Unused traps dry out. Floor drains may need trap primers." },
    { q: "Which fitting is used for a change from horizontal to vertical in a drain?", options: ["Long-sweep or combination fitting", "Tight 90° elbow only", "Union", "Coupling"], answer: 0, explain: "Sweeping fittings keep flow smooth and reduce stoppages." }
  ],
  3: [
    { q: "A temperature and pressure relief valve on a water heater:", options: ["Relieves excess temperature or pressure", "Controls flow", "Filters water", "Adds pressure"], answer: 0, explain: "It protects the tank from over-pressure and over-temperature." },
    { q: "A relief valve's discharge pipe should never be:", options: ["Plugged or valved off", "Copper", "Directed to a safe location", "Supported"], answer: 0, explain: "Blocking it defeats the safety device." },
    { q: "Storing hot water at about 60 °C and delivering it at no more than about 49 °C helps to:", options: ["Reduce Legionella risk and scalding", "Save space", "Reduce pressure", "Make water cold"], answer: 0, explain: "Storage temperature controls bacteria, and tempering valves limit scalding at the tap." },
    { q: "A thermostatic mixing valve:", options: ["Blends hot and cold water to a set temperature", "Measures flow", "Removes air", "Raises pressure"], answer: 0, explain: "It keeps outlet temperature steady and safer." },
    { q: "An anode rod in a tank water heater:", options: ["Sacrifices itself to slow tank corrosion", "Heats the water", "Reduces pressure", "Filters minerals"], answer: 0, explain: "The anode corrodes first, protecting the steel tank." },
    { q: "1 m of water column is about:", options: ["1 kPa", "9.8 kPa", "98 kPa", "980 kPa"], answer: 1, explain: "Water pressure is about 9.81 kPa per metre of head." },
    { q: "A pressure reducing valve is typically required when supply pressure exceeds about:", options: ["100 kPa", "300 kPa", "550 kPa (80 psi)", "1000 kPa"], answer: 2, explain: "Confirm the exact limit in your code." },
    { q: "An expansion tank on a closed water or hydronic system:", options: ["Absorbs the volume increase as water heats", "Stores drinking water", "Adds pressure", "Filters water"], answer: 0, explain: "It protects the system from over-pressure as water expands." },
    { q: "A cross connection is:", options: ["A link between potable water and a possible contaminant source", "A pipe fitting", "A type of valve", "A drain trap"], answer: 0, explain: "Cross connections must be protected with proper devices or air gaps." },
    { q: "A hydrostatic (water) test is used to:", options: ["Find leaks before pipes are concealed", "Warm the pipes", "Set pipe grade", "Clean the system"], answer: 0, explain: "Testing before closing walls avoids costly repairs." },
    { q: "Pipes that pass through a fire-rated wall or floor must be:", options: ["Sealed with approved firestopping", "Left open", "Painted red", "Insulated only"], answer: 0, explain: "Firestopping restores the fire rating of the assembly." },
    { q: "Compared with copper, plastic pipe expands:", options: ["More per degree of temperature change", "Less", "The same", "Not at all"], answer: 0, explain: "Allow for thermal movement in plastic runs." },
    { q: "A sump pump discharge typically includes a check valve to:", options: ["Stop water flowing back into the pit", "Increase flow", "Vent the pit", "Filter water"], answer: 0, explain: "The check valve prevents the pump from cycling on returning water." },
    { q: "A dishwasher air gap or high loop is used to:", options: ["Prevent drain water siphoning back into the dishwasher", "Heat water", "Vent the sink", "Quiet the pump"], answer: 0, explain: "It protects against backflow from the drain." },
    { q: "Rough-in refers to:", options: ["Installing piping before walls and fixtures are finished", "Finishing and trim work", "Painting", "Cleaning"], answer: 0, explain: "Rough-in is the stage before the walls close and fixtures are set." },
    { q: "Flow rate is commonly measured in:", options: ["Litres per minute or US gpm", "Kilopascals", "Degrees", "Watts"], answer: 0, explain: "Pressure is kPa or psi, while flow is volume per time." },
    { q: "Hydronic (hot water) heating systems circulate water using:", options: ["A circulator pump", "A drain pump", "Gravity only", "A vent"], answer: 0, explain: "Circulators move heated water through radiators or in-floor loops." },
    { q: "A tempering or mixing valve is installed mainly to:", options: ["Prevent scalding at fixtures", "Increase flow", "Reduce drain size", "Add air"], answer: 0, explain: "It limits outlet temperature for safety." }
  ],
  4: [
    { q: "Water supply pipes are sized using:", options: ["Fixture units or flow demand and available pressure", "Pipe colour", "Wall thickness only", "The tool in use"], answer: 0, explain: "Sizing considers demand, pressure, and length of run." },
    { q: "New potable water piping should be:", options: ["Flushed and disinfected as required", "Left dry", "Painted", "Filled with antifreeze"], answer: 0, explain: "Disinfection and flushing protect water quality before use." },
    { q: "A reduced pressure (RP) backflow assembly is used where the hazard is:", options: ["High", "None", "Aesthetic only", "Temperature related"], answer: 0, explain: "RP assemblies protect against high-hazard cross connections." },
    { q: "Testable backflow devices are generally:", options: ["Tested by a certified tester as required locally", "Never tested", "Tested by the homeowner", "Replaced weekly"], answer: 0, explain: "Check local rules for testing frequency." },
    { q: "Medical gas piping generally requires:", options: ["Additional specialized qualification and certification", "No special training", "Only a drill", "Only solder"], answer: 0, explain: "Medical gas installers need specific certification." },
    { q: "Storm and sanitary drainage are:", options: ["Kept separate where required by code", "Always combined", "Never needed", "The same pipe"], answer: 0, explain: "Many municipalities require separate systems." },
    { q: "A grease interceptor is used to:", options: ["Separate and trap grease before it enters the sewer", "Heat water", "Add chlorine", "Reduce pressure"], answer: 0, explain: "It protects drains from grease buildup." },
    { q: "A drop of how many mm over a 10 m run gives a 1 in 50 slope?", options: ["20 mm", "100 mm", "200 mm", "500 mm"], answer: 2, explain: "10 m ÷ 50 = 0.2 m = 200 mm." },
    { q: "Storm drain sizing is based mainly on:", options: ["Rainfall intensity and roof area", "Pipe colour", "Water pressure", "Fixture count"], answer: 0, explain: "Design rainfall and drained area determine flow." },
    { q: "Before entering a confined space you should:", options: ["Follow the permit and test the atmosphere", "Hold your breath", "Send a coworker alone", "Skip the paperwork"], answer: 0, explain: "Confined spaces can have toxic gas or low oxygen." },
    { q: "Commissioning a system means:", options: ["Verifying it performs as designed", "Painting it", "Ordering materials", "Estimating cost"], answer: 0, explain: "Commissioning verifies and documents performance." },
    { q: "A material takeoff is:", options: ["A list of quantities taken from drawings for estimating", "Removing old pipe", "A shipping label", "A tool inventory"], answer: 0, explain: "It supports pricing and ordering." },
    { q: "A Request for Information (RFI) is used to:", options: ["Clarify unclear drawings or specifications before work", "Order tools", "Report injuries", "Close a project"], answer: 0, explain: "RFIs resolve ambiguity with the designer or general contractor." },
    { q: "As-built drawings record:", options: ["The actual installed conditions", "Original design only", "Cost estimates", "Schedules"], answer: 0, explain: "They document changes made during construction." },
    { q: "Toilets sold in Canada typically flush at about:", options: ["4.8 to 6 L per flush", "13 L per flush", "20 L per flush", "1 L per flush"], answer: 0, explain: "Modern high-efficiency toilets use about 4.8 to 6 L." },
    { q: "Which document lists the products, finishes, and installation requirements for a project?", options: ["Specifications", "Invoice", "Timesheet", "Tool list"], answer: 0, explain: "Specifications work with drawings to define the work." },
    { q: "Before backfilling a trench with new pipe, you should:", options: ["Inspect and test as required, then bed the pipe properly", "Cover it quickly", "Paint the pipe", "Remove the supports"], answer: 0, explain: "Proper bedding and inspection prevent later failures." },
    { q: "An interceptor or separator for oil and sand is used to:", options: ["Keep oil and solids from entering the sewer", "Warm the water", "Vent the drain", "Boost pressure"], answer: 0, explain: "They are common in garages and car washes." }
  ]
};

const plumbingRoadmap = [
  { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS, fall protection, and site orientation; requirements vary)", "Prepare a resume and apply to union locals (such as UA) and employers", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
  { title: "Year 1: foundations", items: ["Learn shop and site safety, PPE, and lockout/tagout", "Master measuring, cutting, and joining copper, PEX, and plastic pipe", "Learn basic soldering and thread-sealing", "Complete your first technical training block", "Build your core tool kit (see Buying tools)"] },
  { title: "Year 2: drainage and venting", items: ["Learn drain, waste, and vent systems, slopes, and trap rules", "Read and sketch isometric drawings", "Install fixtures and make rough-in connections", "Learn the National Plumbing Code or your provincial code layout"] },
  { title: "Year 3: water systems and heating", items: ["Install and test water heaters and their safety devices", "Learn backflow prevention and cross-connection control", "Size water supply and drainage from drawings", "Pressure test and document your work"] },
  { title: "Year 4 and beyond: advanced", items: ["Handle commercial and industrial installations", "Learn estimating, takeoffs, and coordination", "Mentor first-year apprentices", "Use the Red Seal standard to find gaps in your experience"] },
  { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
];

const plumbingGlossary = [
  ["ABS", "Acrylonitrile butadiene styrene, a black plastic drain pipe."],
  ["Backflow", "Reversed flow of water into the clean supply."],
  ["Branch", "A drain pipe that connects fixtures to the main stack."],
  ["Building drain", "The lowest horizontal drain inside the building."],
  ["Cleanout", "A fitting that gives access to clear a drain."],
  ["Cross connection", "A link between clean water and a possible contaminant."],
  ["DWV", "Drain, waste, and vent: the system that removes wastewater."],
  ["Fixture unit", "A measure of the load a fixture puts on the system."],
  ["Flux", "A chemical that cleans metal so solder flows into a joint."],
  ["Grade", "The slope of a drain, such as 1/4 in per foot."],
  ["Hydrostatic test", "A test using water pressure to check for leaks."],
  ["Isometric", "A drawing that shows pipe runs in three dimensions at 30° axes."],
  ["Lockout/tagout", "Locking and tagging energy sources off before servicing."],
  ["Offset", "A change in the direction of a pipe run to avoid an obstacle."],
  ["P-trap", "A U-shaped trap that holds a water seal."],
  ["PEX", "Cross-linked polyethylene, a flexible supply pipe."],
  ["Potable", "Safe to drink."],
  ["Rough-in", "Pipe installation before walls close and fixtures are set."],
  ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
  ["Stack", "A vertical pipe that carries waste or vent air through floors."],
  ["Vent", "A pipe that admits air to protect trap seals and aid flow."],
  ["WHMIS", "Canada's workplace hazardous materials information system."]
];

const copperSizes = [["1/2", "5/8", "15.9"], ["3/4", "7/8", "22.2"], ["1", "1-1/8", "28.6"], ["1-1/4", "1-3/8", "34.9"], ["1-1/2", "1-5/8", "41.3"], ["2", "2-1/8", "54.0"]];

function plumbingReference() {
  return `
    <section class="content-block"><h2>Reference sheet</h2><p>Quick study aids. Always confirm values against your drawings, specifications, manufacturer data, and local codes.</p></section>
    <section class="content-block"><h2>Key formulas</h2>
      <ul class="check-list plain">
        <li>Travel of an offset = offset ÷ sin (fitting angle). A 45° fitting is offset × 1.414</li>
        <li>Drop over a run = run × slope (1 in 50 over 10 m is 200 mm)</li>
        <li>Circle area: A = π × r², circumference: C = π × d</li>
        <li>Right triangle: c² = a² + b²</li>
        <li>Volume of pipe: V = π × r² × length</li>
        <li>Scale: real length = drawing length × scale (1/4 in = 1 ft means × 48)</li>
      </ul></section>
    <section class="content-block"><h2>Conversions</h2>
      <ul class="check-list plain">
        <li>1 in = 25.4 mm, and 1 ft = 304.8 mm</li>
        <li>1 psi ≈ 6.895 kPa, and 1 m of water head ≈ 9.81 kPa</li>
        <li>1 ft of water head ≈ 0.433 psi</li>
        <li>1 US gallon ≈ 3.785 L, and 1 Imperial gallon ≈ 4.546 L</li>
        <li>1 US gpm ≈ 3.785 L/min</li>
      </ul></section>
    <section class="content-block"><h2>Copper tube sizes (nominal to actual outside diameter)</h2>
      <table class="ref-table"><thead><tr><th>Nominal (in)</th><th>OD (in)</th><th>OD (mm)</th></tr></thead><tbody>${copperSizes.map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</tbody></table>
      <p class="fine-print">Copper water tube outside diameter is the nominal size plus 1/8 in. Wall thickness depends on the type (K, L, M).</p></section>
    <section class="content-block"><h2>Offset travel multipliers</h2>
      <table class="ref-table"><thead><tr><th>Fitting angle</th><th>Travel ÷ offset</th></tr></thead><tbody>
        <tr><td>11-1/4°</td><td>5.126</td></tr><tr><td>22-1/2°</td><td>2.613</td></tr><tr><td>30°</td><td>2.000</td></tr><tr><td>45°</td><td>1.414</td></tr><tr><td>60°</td><td>1.155</td></tr>
      </tbody></table>
      <p class="fine-print">Subtract the fitting allowances when cutting pipe.</p></section>
    <section class="content-block"><h2>Which joining method?</h2>
      <ul class="check-list plain">
        <li><strong>Soldered (sweat):</strong> copper water supply, with lead-free solder.</li>
        <li><strong>Brazed:</strong> copper where higher strength or temperature is needed.</li>
        <li><strong>Crimp, cinch, or expansion:</strong> PEX supply, matched to the fitting system.</li>
        <li><strong>Solvent cement:</strong> ABS and PVC, using the correct cement.</li>
        <li><strong>Mechanical couplings:</strong> cast iron and some transitions, per code.</li>
      </ul></section>
    <section class="content-block"><h2>Glossary</h2>
      <dl class="glossary">${plumbingGlossary.map(([t, d]) => `<dt>${t}</dt><dd>${d}</dd>`).join("")}</dl></section>`;
}

tradePacks.plumbing = {
  id: "plumbing", store: "plumb", name: "Plumbing", short: "plumbing",
  sections: plumbingSections,
  toolGroups: plumbingToolGroups,
  mediaGroups: plumbingMediaGroups,
  practiceBank: plumbingPracticeBank,
  roadmapSteps: plumbingRoadmap,
  glossary: plumbingGlossary,
  reference: plumbingReference,
  cards: [
    { front: "Travel of a 45° offset", back: "Offset × 1.414" },
    { front: "Drop over a 10 m run at 1 in 50", back: "200 mm" },
    { front: "Inches to millimetres", back: "1 in = 25.4 mm" },
    { front: "PSI to kPa", back: "1 psi ≈ 6.895 kPa" },
    { front: "Pressure of 1 m of water head", back: "About 9.81 kPa" },
    { front: "Copper tube OD vs nominal size", back: "OD = nominal + 1/8 in" },
    { front: "Isometric drawing angle", back: "30° from horizontal" },
    { front: "Purpose of a trap", back: "Holds a water seal that blocks sewer gas." },
    { front: "Purpose of a vent", back: "Protects trap seals and lets air in and out of the system." }
  ],
  jobsIntro: "Look for union and signatory mechanical contractors, residential and service plumbing companies, commercial and industrial contractors, and maintenance departments.",
  tips: ["Bring a short resume, your safety tickets, and ID.", "Show interest in math, problem solving, and working with your hands.", "Visit shops and halls in person when you can, and follow up.", "Ask what tools you need and what the employer supplies."],
  jobLinks: (province, q) => [
    ["Job Bank: plumber apprentice", `Search openings in ${province}.`, `${nationalResources.jobBank}${q("plumber apprentice " + province)}`],
    ["Job Bank: plumber", `Search journeyperson openings in ${province}.`, `${nationalResources.jobBank}${q("plumber " + province)}`],
    ["Indeed Canada: plumber apprentice", "Search a large job board.", `https://ca.indeed.com/jobs?q=${q("plumber apprentice")}&l=${q(province)}`],
    ["UA Canada", "Union training and how to apply.", "https://www.uacanada.ca/"],
    ["Canada's Building Trades Unions", "Find unions and apprenticeship paths.", nationalResources.buildingTrades],
    ["Find your local apprenticeship authority", "Confirm registration and find approved employers.", nationalResources.provinces]
  ],
  forumTopics: ["Starting out", "Drainage, waste and vent", "Water supply and fixtures", "Red Seal and exam prep", "Tools and gear", "Province and code questions"]
};
