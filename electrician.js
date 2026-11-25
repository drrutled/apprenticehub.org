// Construction Electrician content: tools, learning media, practice tests, roadmap, and reference.
// Practice questions are original study aids, not official Red Seal exam questions.

const electricianSections = plumbingSections.map((s) => ({ ...s }));

const electricianToolGroups = [
  {
    title: "Day-one tools, buy once and buy well",
    note: "Professional-grade tools that stay accurate and safe for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
    items: [
      { name: "Klein or Wiha insulated screwdriver set (1000 V rated)", why: "Tested, insulated tools add protection against accidental contact and have tips that grip screws without slipping.", search: "Klein Wiha insulated screwdriver set 1000V" },
      { name: "Klein or Knipex lineman's and side-cutting pliers", why: "Forged, hardened jaws grip and cut copper cleanly for years.", search: "Klein Knipex lineman pliers side cutters" },
      { name: "Klein or Ideal wire strippers (10-20 AWG)", why: "Clean, consistent stripping without nicking conductors. Good strippers also crimp and cut small bolts.", search: "Klein Ideal wire stripper 10-20 AWG" },
      { name: "Fluke or Klein digital multimeter (CAT III or higher)", why: "A properly rated meter is a safety device. Look for a CAT rating suited to the work and a trusted brand.", search: "Fluke 117 Klein digital multimeter CAT III" },
      { name: "Non-contact voltage tester and a two-pole voltage tester", why: "Always test and prove before you touch. A two-pole tester gives a definite reading.", search: "Fluke Klein non-contact voltage tester two pole tester" },
      { name: "Milwaukee or Stanley tape measure (25 ft)", why: "Wide, stiff blade and a durable hook for accurate rough-in layouts.", search: "Milwaukee Stanley FatMax tape measure 25 ft" },
      { name: "Torpedo level and a stud finder", why: "Plumb and level boxes and conduit runs. A magnetic level frees a hand.", search: "Milwaukee torpedo level stud finder" },
      { name: "Utility knife and cable ripper", why: "Strip cable sheath safely without damaging the conductors beneath.", search: "Klein utility knife cable ripper" },
      { name: "Insulated or rated gloves (as required), safety glasses, and CSA safety boots", why: "Electrical-rated PPE and CSA-approved boots protect you. Fit and comfort matter because you will wear them all day.", search: "CSA electrical hazard safety boots Red Wing safety glasses" }
    ]
  },
  {
    title: "Build up in first and second year",
    note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
    items: [
      { name: "Milwaukee M18 FUEL or Makita 18V drill and impact driver", why: "Reliable power for drilling studs, joists, and fastening. Choose one battery platform and stay with it.", search: "Milwaukee M18 FUEL drill impact driver combo" },
      { name: "Fish tape and a wire-pulling kit", why: "Fish wire through conduit and walls. Steel and fibreglass tapes each have their uses.", search: "Klein fish tape fiberglass steel Greenlee" },
      { name: "Greenlee or Klein conduit bender (1/2 in and 3/4 in EMT)", why: "A good bender gives accurate bends that hold their angle.", search: "Greenlee Klein EMT conduit bender 1/2 3/4" },
      { name: "Hole saws and spade bits for wood", why: "Cleaner holes through framing for cable runs. Quality bits last much longer.", search: "Milwaukee hole saw kit Irwin spade bits" },
      { name: "Torque screwdriver", why: "Terminals need the correct torque. A torque tool gives repeatable results.", search: "Wiha Klein torque screwdriver electrical" },
      { name: "Cordless reciprocating saw (Milwaukee Sawzall)", why: "Cutting through framing and old work. Buy quality blades too.", search: "Milwaukee M18 Sawzall reciprocating saw" },
      { name: "Hacksaw, reamer, and a pipe or conduit cutter", why: "Cutting and reaming EMT without leaving sharp edges.", search: "Klein conduit reamer EMT cutter hacksaw" },
      { name: "Heavy-duty tool bag or pouch", why: "Keeps daily tools together, protected, and easy to carry up ladders.", search: "Veto Pro Pac tool pouch bag electrician" }
    ]
  },
  {
    title: "Later and specialized",
    note: "Often supplied by the shop or employer. Ask before buying.",
    items: [
      { name: "Clamp meter (Fluke or Klein)", why: "Measures current without breaking the circuit. Useful for troubleshooting.", search: "Fluke Klein clamp meter CAT III" },
      { name: "Insulation resistance tester (Megger or Fluke)", why: "Checks the condition of insulation on motors and cables. Often company-supplied.", search: "Megger Fluke insulation resistance tester" },
      { name: "Circuit tracer and receptacle tester", why: "Identify circuits and check wiring faults and GFCI operation.", search: "Klein receptacle tester circuit breaker finder" },
      { name: "Thermal imaging camera", why: "Spot hot connections and overloaded gear. Usually a company tool.", search: "Fluke FLIR thermal imaging camera electrician" },
      { name: "Hydraulic knockout set and a ratchet cutter", why: "Cutting large holes in enclosures and cable. Generally supplied.", search: "Greenlee knockout punch set ratchet cable cutter" },
      { name: "Full-body harness and lanyard", why: "Usually supplied by the employer. Fall protection training comes first.", search: "3M DBI-SALA full body harness CSA" }
    ]
  },
  {
    title: "School supplies for technical training",
    note: "What helps in the classroom for circuit math, drawings, and code study. Check with your school and your exam body about calculator rules before you buy.",
    items: [
      { name: "Mechanical pencil (0.5 mm), such as Pentel GraphGear 1000 or Rotring 600", why: "Consistent fine lines for schematics, panel schedules, and notes. A metal body and retractable tip hold up in a tool bag.", search: "Pentel GraphGear 1000 Rotring 600 mechanical pencil 0.5mm" },
      { name: "Spare 0.5 mm leads (HB and 2H) and quality erasers", why: "2H gives fine, crisp drafting lines; HB is better for notes. A vinyl eraser keeps drawings clean.", search: "Pentel 0.5mm HB 2H lead refills vinyl eraser" },
      { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Ohm's law, trig, and power calculations. Check your school's calculator rules.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
      { name: "Canadian Electrical Code (CSA C22.1), plus your provincial amendments", why: "You will refer to the code constantly in school and on the exam. Check which edition your province uses.", search: "Canadian Electrical Code C22.1 book" },
      { name: "Electrical symbol and circuit drawing template", why: "Neat schematics and floor plan symbols for assignments.", search: "electrical symbols drafting template stencil" },
      { name: "Architect's and engineer's scales", why: "Reading drawings at scale, such as 1:50 and 1/4 in = 1 ft.", search: "architect scale engineer scale ruler" },
      { name: "Graph paper and a field notebook (Rite in the Rain)", why: "Sketching layouts and recording readings. Weatherproof paper survives job sites.", search: "Rite in the Rain field notebook graph paper" },
      { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic, which also helps Red Seal exam review.", search: "binder dividers highlighters" },
      { name: "Fine-tip permanent markers and wire labels", why: "Labelling circuits and conductors cleanly.", search: "Sharpie fine point wire marker labels" },
      { name: "Flash drive or a notes app, plus a tablet or laptop (optional)", why: "Storing drawings, codes, and study notes if your school allows it.", search: "USB flash drive 64GB" }
    ]
  }
];

const electricianMediaGroups = [
  {
    title: "Official and standards resources",
    items: [
      { name: "Red Seal Construction Electrician trade page", desc: "Occupational standard, exam information, and preparation guidance.", url: "https://red-seal.ca/eng/trades/constelectric/overview.shtml" },
      { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare.", url: "https://red-seal.ca/eng/welcome.shtml" },
      { name: "CSA Group: Canadian Electrical Code", desc: "Publisher of the CSA C22.1 Canadian Electrical Code.", url: "https://www.csagroup.org/" },
      { name: "IBEW apprenticeship information", desc: "Union electrician training and apprenticeship information.", url: "https://joinibew.ca/apprenticeships/" },
      { name: "Electrical Safety Authority (Ontario)", desc: "Ontario electrical safety information, permits, and inspections.", url: "https://esasafe.com/" }
    ]
  },
  {
    title: "Video searches",
    note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and the electrical code.",
    items: [
      { name: "Ohm's law and basic circuits", desc: "Voltage, current, resistance, and power explained.", url: "https://www.youtube.com/results?search_query=ohms+law+electrician+apprentice+basics" },
      { name: "Series and parallel circuits", desc: "How circuit layout affects current and voltage.", url: "https://www.youtube.com/results?search_query=series+parallel+circuits+electrician+apprentice" },
      { name: "EMT conduit bending", desc: "Offsets, 90 degree bends, and saddles.", url: "https://www.youtube.com/results?search_query=EMT+conduit+bending+offset+90+stub+up" },
      { name: "Three-way and four-way switch wiring", desc: "Switching a light from several locations.", url: "https://www.youtube.com/results?search_query=three+way+four+way+switch+wiring+explained" },
      { name: "Using a multimeter safely", desc: "Test-before-touch and correct meter use.", url: "https://www.youtube.com/results?search_query=how+to+use+a+multimeter+safely+electrician" },
      { name: "Three-phase power basics", desc: "Understanding wye and delta systems.", url: "https://www.youtube.com/results?search_query=three+phase+power+basics+wye+delta+electrician" },
      { name: "Motor control and starters", desc: "Contactors, overloads, and basic control circuits.", url: "https://www.youtube.com/results?search_query=motor+control+contactor+overload+electrician" }
    ]
  },
  {
    title: "Audio, beginner (pre-apprentice and year 1)",
    note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for electrical work yourself.",
    items: [
      { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
      { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
      { name: "YouTube: electrician apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=electrician+apprentice+podcast" }
    ]
  },
  {
    title: "Audio, intermediate (years 2-3)",
    note: "Trade-knowledge talk that builds on what you do on the job.",
    items: [
      { name: "Electrician podcast directory (Feedspot)", desc: "A ranked list of electrician podcasts. Pick shows on code, troubleshooting, and installation.", url: "https://podcast.feedspot.com/electrician_podcasts/" },
      { name: "YouTube: electrical code explained (listen-along)", desc: "Talks on code rules you can hear while commuting.", url: "https://www.youtube.com/results?search_query=electrical+code+explained+podcast+electrician" },
      { name: "YouTube: electrician troubleshooting stories (audio)", desc: "Job-site lessons and troubleshooting from working electricians.", url: "https://www.youtube.com/results?search_query=electrician+troubleshooting+podcast+stories" }
    ]
  },
  {
    title: "Audio, advanced (year 4 to journeyperson)",
    note: "Exam prep, business, and leadership.",
    items: [
      { name: "YouTube: Red Seal electrician exam prep (talk-through)", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+construction+electrician+exam+preparation" },
      { name: "YouTube: electrical business and estimating podcast", desc: "Pricing, running jobs, and growing an electrical business.", url: "https://www.youtube.com/results?search_query=electrical+contractor+business+estimating+podcast" },
      { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
    ]
  }
];

const electricianPracticeBank = {
  1: [
    { q: "Ohm's law states that voltage equals:", options: ["Current × resistance", "Current ÷ resistance", "Power × time", "Resistance ÷ current"], answer: 0, explain: "V = I × R." },
    { q: "A 12 V source is connected across a 4 Ω resistor. The current is:", options: ["3 A", "8 A", "16 A", "48 A"], answer: 0, explain: "I = V ÷ R = 12 ÷ 4 = 3 A." },
    { q: "Power in watts is found using:", options: ["P = V × I", "P = V ÷ I", "P = I ÷ R", "P = R ÷ V"], answer: 0, explain: "A 120 V circuit drawing 10 A uses 1200 W." },
    { q: "In a series circuit, the current is:", options: ["The same through every component", "Highest at the first component", "Zero", "Split equally"], answer: 0, explain: "There is only one path, so current is the same everywhere." },
    { q: "In a parallel circuit, the voltage across each branch is:", options: ["The same", "Divided equally", "Zero", "Always lower"], answer: 0, explain: "Each branch connects across the same two points." },
    { q: "Before working on a circuit you should:", options: ["Lock out, then test and prove it dead with a rated tester", "Assume the breaker is off", "Use a screwdriver to check", "Wear rubber boots only"], answer: 0, explain: "Lockout, test, and prove with a meter you checked on a known source." },
    { q: "In Canada, which conductor colour is normally used for a grounded neutral?", options: ["White", "Black", "Red", "Blue"], answer: 0, explain: "White is the neutral. Black and red are typically ungrounded (hot) conductors, and green or bare is for grounding." },
    { q: "With AWG sizes, a smaller number means the conductor is:", options: ["Larger", "Smaller", "Aluminum", "Insulated"], answer: 0, explain: "12 AWG is thicker than 14 AWG." },
    { q: "A GFCI protects against:", options: ["Ground faults that could cause shock", "Over-voltage only", "Low voltage", "Motor overload"], answer: 0, explain: "It trips quickly when current leaks to ground." },
    { q: "A circuit breaker protects:", options: ["The conductor and circuit from overcurrent", "Against high resistance", "Against light bulbs burning out", "Meters"], answer: 0, explain: "It opens the circuit when current exceeds its rating." },
    { q: "How many millimetres are in one inch?", options: ["2.54", "10", "25.4", "254"], answer: 2, explain: "1 in = 25.4 mm exactly." },
    { q: "Where would you find the hazards and first-aid measures for a product?", options: ["Safety Data Sheet (SDS)", "Panel schedule", "Single-line diagram", "Tape measure"], answer: 0, explain: "The SDS describes hazards, handling, and first aid." },
    { q: "EMT stands for:", options: ["Electrical metallic tubing", "Electric motor terminal", "Emergency main transfer", "Extra-multi tube"], answer: 0, explain: "EMT is thin-wall conduit." },
    { q: "The Canadian Electrical Code is published by:", options: ["CSA Group as C22.1", "The Red Seal", "A tool maker", "WHMIS"], answer: 0, explain: "Your province adopts it with local amendments." },
    { q: "Typical nominal residential supply in Canada is:", options: ["120/240 V", "12 V", "600 V only", "5 V"], answer: 0, explain: "Single-phase 120/240 V is typical for homes." },
    { q: "Which ladder material is preferred for electrical work?", options: ["Fibreglass", "Aluminum", "Steel", "Wet wood"], answer: 0, explain: "Non-conductive fibreglass reduces shock risk." },
    { q: "The unit of resistance is the:", options: ["Ohm", "Volt", "Ampere", "Watt"], answer: 0, explain: "Volts measure potential, amperes current, and watts power." },
    { q: "A wire connector (wire nut) is used to:", options: ["Splice conductors together", "Ground a panel", "Cut cable", "Test voltage"], answer: 0, explain: "Use the correct size and rating for the conductors." }
  ],
  2: [
    { q: "Voltage drop increases with:", options: ["Longer runs and higher current", "Shorter runs", "Lower current", "Larger conductors"], answer: 0, explain: "Longer, smaller, heavily loaded conductors drop more voltage." },
    { q: "A three-way switch arrangement is used to control a light from:", options: ["Two locations", "One location", "Three outlets", "A panel only"], answer: 0, explain: "Three-way switches work in pairs." },
    { q: "Bonding in an electrical system:", options: ["Connects metal parts to keep them at the same potential and provide a fault path", "Adds voltage", "Stores charge", "Reduces current"], answer: 0, explain: "A solid bond helps breakers trip during a fault." },
    { q: "Typical overcurrent protection for 14 AWG copper in a residential circuit is:", options: ["15 A", "30 A", "60 A", "5 A"], answer: 0, explain: "12 AWG is commonly 20 A. Confirm with the code." },
    { q: "Box fill rules are meant to:", options: ["Prevent overcrowding that causes heat and damage", "Reduce cost", "Colour code wires", "Add ground"], answer: 0, explain: "Boxes must have enough volume for the conductors and devices." },
    { q: "An AFCI protects against:", options: ["Arc faults that can start fires", "Water leaks", "Low voltage", "Motor stall"], answer: 0, explain: "It detects dangerous arcing in wiring." },
    { q: "Conduit fill limits exist to:", options: ["Prevent overheating and allow wires to be pulled", "Lower cost", "Colour code", "Add ground"], answer: 0, explain: "Too many conductors overheat and are hard to pull." },
    { q: "The kilowatt-hour is a unit of:", options: ["Energy", "Power", "Voltage", "Resistance"], answer: 0, explain: "Utilities bill energy in kWh." },
    { q: "A transformer changes AC voltage using:", options: ["Electromagnetic induction", "Friction", "Heat", "Capacitance"], answer: 0, explain: "It transfers energy between windings." },
    { q: "A fish tape is used to:", options: ["Pull wire through conduit or walls", "Measure voltage", "Strip cable", "Bend EMT"], answer: 0, explain: "You attach the conductors and pull them through." },
    { q: "Hot (ungrounded) conductors on a standard receptacle connect to the:", options: ["Brass (gold) terminal", "Silver terminal", "Green screw", "Either"], answer: 0, explain: "Neutral goes to the silver terminal, and ground to the green screw." },
    { q: "To measure current with a standard multimeter you place the meter:", options: ["In series with the load", "In parallel with the load", "Across the source", "Next to the wire"], answer: 0, explain: "Voltage is measured in parallel, current in series (or with a clamp meter)." },
    { q: "Continuity testing should be done with the circuit:", options: ["De-energized", "Energized", "Overloaded", "Grounded to a pipe"], answer: 0, explain: "Continuity tests use the meter's own small current." },
    { q: "Two 120 V hot conductors on opposite phases of a 120/240 V system give:", options: ["240 V between them", "0 V", "480 V", "60 V"], answer: 0, explain: "Opposite legs add to 240 V." },
    { q: "A conductor's allowable current (ampacity) depends on:", options: ["Size, insulation temperature rating, and installation conditions", "Colour only", "Length only", "Brand"], answer: 0, explain: "Use the code tables and correction factors." },
    { q: "A single-pole switch interrupts the:", options: ["Hot (ungrounded) conductor", "Neutral", "Ground", "Bond"], answer: 0, explain: "Switching the neutral is unsafe." },
    { q: "Junction boxes should be:", options: ["Accessible and properly covered", "Buried in walls", "Painted shut", "Left uncovered"], answer: 0, explain: "Access allows future inspection and repair." },
    { q: "Terminal screws should be tightened:", options: ["To the manufacturer's specified torque", "As tight as possible", "Finger tight", "With pliers"], answer: 0, explain: "Loose or over-tight connections can overheat or fail." }
  ],
  3: [
    { q: "In a three-phase system, the phases are separated by:", options: ["120 electrical degrees", "90 degrees", "180 degrees", "0 degrees"], answer: 0, explain: "Evenly spaced phases give smooth power delivery." },
    { q: "A motor overload relay protects the motor from:", options: ["Sustained overcurrent", "Lightning", "Voltage sags only", "Over-speed"], answer: 0, explain: "It trips when heat builds from long overloads." },
    { q: "The secondary voltage of a transformer is the primary voltage times:", options: ["Secondary turns ÷ primary turns", "Primary turns ÷ secondary turns", "Current", "Frequency"], answer: 0, explain: "A step-down transformer has fewer secondary turns." },
    { q: "Power factor is the ratio of:", options: ["Real power to apparent power", "Voltage to current", "Resistance to reactance", "Amps to volts"], answer: 0, explain: "A low power factor means more current for the same real work." },
    { q: "A variable frequency drive (VFD) controls motor speed by varying:", options: ["Frequency (and voltage)", "Only the resistance", "Phase colour", "Ground"], answer: 0, explain: "Changing frequency changes synchronous speed." },
    { q: "Emergency lighting units generally contain:", options: ["A battery for backup", "A generator", "A transformer only", "A fuse only"], answer: 0, explain: "They keep exit routes lit during a power failure." },
    { q: "A grounding electrode connects the system to:", options: ["The earth", "A water heater only", "The neutral bus only", "The roof"], answer: 0, explain: "It helps stabilize voltage and dissipate surges." },
    { q: "A load calculation is used to determine:", options: ["Service and feeder size", "Paint colour", "Switch type", "Conduit colour"], answer: 0, explain: "It ensures the service can handle the connected load." },
    { q: "For arc flash safety, the best approach is to:", options: ["De-energize equipment whenever possible and use appropriate PPE", "Work live for speed", "Remove PPE", "Ignore labels"], answer: 0, explain: "Following the safe work procedures reduces risk." },
    { q: "An insulation resistance tester (megger) checks:", options: ["The condition of insulation", "Voltage drop", "Power factor", "Frequency"], answer: 0, explain: "Low readings suggest damaged or wet insulation." },
    { q: "Available fault current matters because:", options: ["Equipment must be rated to interrupt it", "It sets wire colour", "It controls lighting", "It changes frequency"], answer: 0, explain: "Under-rated breakers can fail dangerously during a fault." },
    { q: "In a balanced three-phase wye system, the neutral current is about:", options: ["Zero", "Equal to line current", "Double", "Infinite"], answer: 0, explain: "Balanced currents cancel in the neutral." },
    { q: "A cable tray is used to:", options: ["Support cables over longer runs", "Bend conduit", "Test voltage", "Hold fuses"], answer: 0, explain: "It is common in commercial and industrial buildings." },
    { q: "A relay is:", options: ["A switch operated by a small control current", "A type of fuse", "A transformer", "A battery"], answer: 0, explain: "It lets a small signal control a larger load." },
    { q: "Control circuits often operate at:", options: ["Low voltage such as 24 V", "Any random voltage", "600 V only", "DC only"], answer: 0, explain: "Low voltage control is safer and easier to wire." },
    { q: "Where conduit runs span a building expansion joint, you may need:", options: ["An expansion fitting", "A tighter clamp", "A larger box", "A fuse"], answer: 0, explain: "Fittings allow for movement without damaging the raceway." },
    { q: "Labelling circuits and panels clearly helps:", options: ["Safe maintenance and troubleshooting", "Nothing", "Increase voltage", "Lower cost of wire"], answer: 0, explain: "Accurate directories prevent mistakes." },
    { q: "A contactor differs from a relay mainly because it:", options: ["Switches larger power loads", "Is only for DC", "Measures voltage", "Is a transformer"], answer: 0, explain: "Contactors are built for motor and heavy loads." }
  ],
  4: [
    { q: "Selective coordination means:", options: ["Only the device nearest the fault trips", "All breakers trip together", "No protection", "Equal sizes"], answer: 0, explain: "It limits outages to the affected circuit." },
    { q: "In hazardous locations you must use equipment that is:", options: ["Approved for the class and division or zone", "Any standard equipment", "Painted yellow", "Plastic only"], answer: 0, explain: "Sparks can ignite flammable atmospheres." },
    { q: "Commissioning an electrical system means:", options: ["Verifying it performs as designed", "Painting it", "Ordering materials", "Estimating cost"], answer: 0, explain: "Commissioning verifies and documents performance." },
    { q: "A material takeoff is:", options: ["A list of quantities taken from drawings for estimating", "Removing old wire", "A shipping label", "A tool inventory"], answer: 0, explain: "It supports pricing and ordering." },
    { q: "A Request for Information (RFI) is used to:", options: ["Clarify unclear drawings or specifications before work", "Order tools", "Report injuries", "Close a project"], answer: 0, explain: "RFIs resolve ambiguity with the designer or general contractor." },
    { q: "As-built drawings record:", options: ["The actual installed conditions", "Original design only", "Cost estimates", "Schedules"], answer: 0, explain: "They document changes made during construction." },
    { q: "Lumens measure:", options: ["Light output", "Power use", "Voltage", "Heat"], answer: 0, explain: "Watts show energy use. Lumens show the amount of light." },
    { q: "Solar photovoltaic systems:", options: ["Have DC hazards and specific code requirements", "Are the same as lighting circuits", "Need no protection", "Only produce AC"], answer: 0, explain: "PV arrays can be energized whenever the sun shines." },
    { q: "EV charging equipment is generally treated as:", options: ["A continuous load that must be sized accordingly", "A tiny load", "A lighting load", "An unrated load"], answer: 0, explain: "Confirm the sizing rules in the current code." },
    { q: "Electrical work normally requires:", options: ["A permit and inspection by the authority having jurisdiction", "Nothing", "Only a neighbour's approval", "A tool license"], answer: 0, explain: "Rules differ by province, so check with your authority." },
    { q: "Harmonic currents from non-linear loads can:", options: ["Overheat neutrals and transformers", "Lower voltage", "Increase light output", "Reduce resistance"], answer: 0, explain: "Electronic loads create harmonics." },
    { q: "Balancing loads across phases helps:", options: ["Reduce neutral current and equipment stress", "Raise voltage", "Skip protection", "Increase fault current"], answer: 0, explain: "Even loading improves efficiency." },
    { q: "A transfer switch on a standby generator:", options: ["Prevents backfeed to the utility", "Boosts voltage", "Measures current", "Replaces the breaker"], answer: 0, explain: "Backfeed can seriously injure line workers." },
    { q: "A thermal imaging camera is used to:", options: ["Find hot connections and overloaded equipment", "Measure voltage", "Bend conduit", "Strip wire"], answer: 0, explain: "Hot spots indicate loose or overloaded parts." },
    { q: "Where cables pass through a fire-rated wall or floor they must be:", options: ["Sealed with approved firestopping", "Left open", "Taped", "Bundled tightly"], answer: 0, explain: "Firestopping restores the rating of the assembly." },
    { q: "Lockout of a group of workers uses:", options: ["A group lock box so each person applies a personal lock", "One lock for everyone", "No locks", "Tape only"], answer: 0, explain: "Each worker is protected by their own lock." },
    { q: "Labour units in estimating are:", options: ["Standard times for installing items", "Wage rates", "Tool prices", "Voltage levels"], answer: 0, explain: "They help predict job hours." },
    { q: "A ground-fault circuit interrupter and an arc-fault breaker differ because:", options: ["One senses leakage to ground and the other senses arcing", "They are identical", "One is only for DC", "Neither trips"], answer: 0, explain: "They detect different hazards." }
  ]
};

const electricianRoadmap = [
  { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS, fall protection, and site orientation; requirements vary)", "Prepare a resume and apply to union locals (such as IBEW) and employers", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
  { title: "Year 1: foundations", items: ["Learn electrical safety, PPE, and lockout/tagout", "Learn Ohm's law and basic circuits", "Practise wiring receptacles, switches, and lighting", "Complete your first technical training block", "Build your core tool kit (see Buying tools)"] },
  { title: "Year 2: wiring methods", items: ["Learn conduit bending and cable installation", "Read and sketch electrical drawings", "Learn the Canadian Electrical Code layout", "Install panels, boxes, and branch circuits under supervision"] },
  { title: "Year 3: systems and motors", items: ["Learn three-phase power, transformers, and motor controls", "Troubleshoot circuits with a multimeter", "Perform load calculations", "Test and document your work"] },
  { title: "Year 4 and beyond: advanced", items: ["Handle commercial and industrial installations", "Learn estimating, takeoffs, and coordination", "Mentor first-year apprentices", "Use the Red Seal standard to find gaps in your experience"] },
  { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
];

const electricianGlossary = [
  ["Ampacity", "The most current a conductor can carry continuously within its limits."],
  ["AWG", "American Wire Gauge. A smaller number means a larger conductor."],
  ["Bonding", "Connecting metal parts so they stay at the same potential."],
  ["Branch circuit", "The wiring between the final breaker and the outlets."],
  ["CEC", "Canadian Electrical Code, CSA C22.1."],
  ["Conduit", "A tube that protects and routes electrical wiring."],
  ["Continuity", "A complete path for current."],
  ["EMT", "Electrical metallic tubing, a thin-wall conduit."],
  ["Feeder", "Conductors that supply power from the service to a panel."],
  ["GFCI", "Ground-fault circuit interrupter, a shock-protection device."],
  ["AFCI", "Arc-fault circuit interrupter, a fire-protection device."],
  ["Grounding", "Connecting the system to the earth."],
  ["Lockout/tagout", "Locking and tagging energy sources off before servicing."],
  ["Neutral", "The grounded conductor that carries return current."],
  ["Ohm", "The unit of electrical resistance."],
  ["Overcurrent", "Current above a conductor's or equipment's rating."],
  ["Panelboard", "A cabinet containing breakers that distribute power."],
  ["Receptacle", "An outlet where equipment is plugged in."],
  ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
  ["Transformer", "A device that changes AC voltage levels."],
  ["VFD", "Variable frequency drive for motor speed control."],
  ["WHMIS", "Canada's workplace hazardous materials information system."]
];

const awgTable = [["14", "1.63", "15 A"], ["12", "2.05", "20 A"], ["10", "2.59", "30 A"], ["8", "3.26", "40 A"]];

function electricianReference() {
  return `
    <section class="content-block"><h2>Reference sheet</h2><p>Quick study aids. Always confirm values against your drawings, specifications, manufacturer data, and the Canadian Electrical Code.</p></section>
    <section class="content-block"><h2>Key formulas</h2>
      <ul class="check-list plain">
        <li>Ohm's law: V = I × R, I = V ÷ R, R = V ÷ I</li>
        <li>Power: P = V × I, and P = I² × R</li>
        <li>Series: R total = R1 + R2 + R3, and current is the same everywhere</li>
        <li>Parallel: 1/R total = 1/R1 + 1/R2 + 1/R3, and voltage is the same across each branch</li>
        <li>Three-phase power (balanced): P = √3 × V line × I line × power factor</li>
        <li>Energy: kWh = kW × hours</li>
      </ul></section>
    <section class="content-block"><h2>Conversions</h2>
      <ul class="check-list plain">
        <li>1 in = 25.4 mm, and 1 ft = 304.8 mm</li>
        <li>1 kW = 1000 W, and 1 hp ≈ 746 W</li>
        <li>1 kVA = 1000 VA</li>
        <li>1 mm² ≈ 1973 circular mils</li>
      </ul></section>
    <section class="content-block"><h2>Common copper conductor sizes (approximate)</h2>
      <table class="ref-table"><thead><tr><th>AWG</th><th>Diameter (mm)</th><th>Typical residential breaker</th></tr></thead><tbody>${awgTable.map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</tbody></table>
      <p class="fine-print">Allowable current depends on insulation rating, number of conductors, and conditions. Always use the Canadian Electrical Code tables.</p></section>
    <section class="content-block"><h2>Conduit offset multipliers</h2>
      <table class="ref-table"><thead><tr><th>Bend angle</th><th>Distance between bends ÷ offset</th></tr></thead><tbody>
        <tr><td>10°</td><td>5.76</td></tr><tr><td>22-1/2°</td><td>2.613</td></tr><tr><td>30°</td><td>2.000</td></tr><tr><td>45°</td><td>1.414</td></tr>
      </tbody></table>
      <p class="fine-print">Use the bender's marks and take-up values for your size of conduit.</p></section>
    <section class="content-block"><h2>Conductor colours (typical Canadian practice)</h2>
      <ul class="check-list plain">
        <li><strong>White:</strong> grounded neutral.</li>
        <li><strong>Black, red, blue:</strong> ungrounded (hot) conductors.</li>
        <li><strong>Green or bare:</strong> grounding conductor.</li>
        <li>Check the code for exceptions, such as re-identified conductors.</li>
      </ul></section>
    <section class="content-block"><h2>Glossary</h2>
      <dl class="glossary">${electricianGlossary.map(([t, d]) => `<dt>${t}</dt><dd>${d}</dd>`).join("")}</dl></section>`;
}

tradePacks.electrician = {
  id: "electrician", store: "elec", name: "Construction Electrician", short: "electrician",
  sections: electricianSections,
  toolGroups: electricianToolGroups,
  mediaGroups: electricianMediaGroups,
  practiceBank: electricianPracticeBank,
  roadmapSteps: electricianRoadmap,
  glossary: electricianGlossary,
  reference: electricianReference,
  cards: [
    { front: "Ohm's law", back: "V = I × R" },
    { front: "Power formula", back: "P = V × I" },
    { front: "Series circuit: what stays the same?", back: "Current." },
    { front: "Parallel circuit: what stays the same?", back: "Voltage." },
    { front: "Inches to millimetres", back: "1 in = 25.4 mm" },
    { front: "Neutral conductor colour", back: "White." },
    { front: "Typical breaker for 14 AWG and 12 AWG copper (residential)", back: "15 A and 20 A." },
    { front: "Before touching a circuit", back: "Lock out, test, and prove dead with a rated tester." },
    { front: "45° conduit offset multiplier", back: "1.414" }
  ],
  jobsIntro: "Look for union and signatory electrical contractors, residential and commercial firms, industrial and maintenance departments, and utility contractors.",
  tips: ["Bring a short resume, your safety tickets, and ID.", "Show interest in math, problem solving, and careful, safe work.", "Visit shops and halls in person when you can, and follow up.", "Ask what tools you need and what the employer supplies."],
  jobLinks: (province, q) => [
    ["Job Bank: electrician apprentice", `Search openings in ${province}.`, `${nationalResources.jobBank}${q("electrician apprentice " + province)}`],
    ["Job Bank: construction electrician", `Search journeyperson openings in ${province}.`, `${nationalResources.jobBank}${q("construction electrician " + province)}`],
    ["Indeed Canada: electrician apprentice", "Search a large job board.", `https://ca.indeed.com/jobs?q=${q("electrician apprentice")}&l=${q(province)}`],
    ["IBEW apprenticeships", "Union training and how to apply.", "https://joinibew.ca/apprenticeships/"],
    ["Canada's Building Trades Unions", "Find unions and apprenticeship paths.", nationalResources.buildingTrades],
    ["Find your local apprenticeship authority", "Confirm registration and find approved employers.", nationalResources.provinces]
  ],
  forumTopics: ["Starting out", "Wiring and code questions", "Motors and controls", "Red Seal and exam prep", "Tools and gear", "Province and jurisdiction"]
};
