// Powerline Technician guide. Practice questions are original study aids, not official Red Seal exam questions.

(() => {
  const pattern = [3, 1, 0, 2, 3, 1, 2, 0, 1, 3, 0, 2, 1, 3, 2];
  const bank = (rows) => rows.map(([q, right, wrong, explain], i) => {
    const pos = pattern[i % pattern.length];
    const options = wrong.slice();
    options.splice(pos, 0, right);
    return { q, options, answer: pos, explain };
  });
  const yt = (s) => `https://www.youtube.com/results?search_query=${s}`;

  registerTrade({
  introVideo: { id: "Nvcd60j9Sfg", title: "Intro video: Powerline Technician" },
    id: "powerline-technician",
    store: "powerline-technician",
    title: "Powerline Technician",
    name: "Powerline Technician",
    short: "powerline work",
    category: "Electrical · Utilities · Outdoor",
    summary: "Powerline technicians build, maintain, and repair overhead and underground electrical distribution and transmission lines that deliver power from generating stations to homes, farms, and industry.",
    work: "You work outdoors in all seasons, climbing poles, working from bucket trucks, and installing conductors, transformers, switches, and underground cable. Storm restoration and call-outs are a regular part of the job, and the work depends on strict switching, grounding, and rubber-glove or hot-stick procedures. Crews work closely together, so communication matters as much as skill.",
    duration: "Usually 3–4 years (Job Bank), varies by province",
    union: "IBEW",
    unionUrl: "https://www.ibew.org/",
    profileUrl: "https://red-seal.ca/eng/trades/powerline-tech.shtml",
    durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/4740/ca",
    jobSearch: "powerline technician apprentice",
    journeySearch: "powerline technician",
    aliases: "lineman lineworker line technician power line technician journeyman lineman utility hydro line crew overhead underground distribution transmission",
    tools: ["CSA-approved climbing boots and gear (where provided)", "Insulated hot stick and tools (employer supplied)", "Lineman's pliers and cutters", "Voltage detector (approved for the voltage)", "Hard hat, FR clothing, and eye protection", "Rubber gloves with protectors (employer supplied)"],
    insight: {
      skills: ["Comfort with heights and outdoor work", "Physical fitness and strength", "Strict discipline with procedures", "Teamwork and clear radio communication"],
      hazards: ["Contact with energized lines: treat every conductor as live until tested and grounded", "Falls from poles and structures: inspect the pole and use fall protection", "Induced and backfeed voltage: ground and bond the work zone", "Weather, traffic, and fatigue: control the site and rest between storm shifts"],
      settings: ["Electrical utilities and municipal power companies", "Line contractors and construction crews", "Industrial and mining power systems", "Telecommunications and rail contractors in some regions"]
    },
    toolGroups: [
      {
        title: "Day-one tools, buy once and buy well",
        note: "Professional-grade tools that hold up outdoors. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer or training program supplies first, since many safety-critical items are issued.",
        items: [
          { name: "CSA-approved safety boots (6 in or 8 in, EH rated)", why: "Electrical-hazard-rated boots with good ankle support for poles, ladders, and rough ground.", search: "CSA EH rated safety boots 8 inch work boots lineman" },
          { name: "Hard hat, Class E (electrical)", why: "Class E hard hats are tested for high-voltage protection. Check the label and the expiry date.", search: "Class E hard hat CSA Z94.1 electrical" },
          { name: "Safety glasses and sun-rated lenses", why: "Wind, debris, and sun glare outdoors. Anti-fog coatings help in cold weather.", search: "CSA Z94.3 safety glasses anti fog tinted" },
          { name: "Cut-resistant work gloves", why: "For handling conductor, hardware, and wood poles. Separate from insulating gloves.", search: "Mechanix cut resistant work gloves" },
          { name: "Klein or Knipex lineman pliers (9 in)", why: "The basic hand tool for twisting, cutting, and gripping.", search: "Klein Knipex lineman pliers 9 inch" },
          { name: "Adjustable wrenches (8 in, 12 in) and ratchet wrench set", why: "Line hardware bolts and nuts. Imperial and metric are both used.", search: "Crescent adjustable wrench 12 inch ratchet wrench set SAE" },
          { name: "Tape measure (25 ft or 7.5 m) and pocket notebook", why: "Measuring clearances and recording work. Waterproof paper suits wet conditions.", search: "Stanley FatMax tape measure 25 ft Rite in the Rain notebook" },
          { name: "FR (flame-resistant) base layers and hi-vis clothing", why: "Arc-rated clothing is often required by the employer. Layers help in cold weather.", search: "FR arc rated base layer hi vis CSA Z96" },
          { name: "Winter and rain gear", why: "Outdoor work happens in all weather. Keep dry layers and warm gloves in the truck.", search: "FR rain jacket insulated winter workwear CSA" }
        ]
      },
      {
        title: "Build up in first and second year",
        note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your crew.",
        items: [
          { name: "Climbing hooks (gaffs) and pole strap (if required by your program)", why: "Pole climbing equipment is usually issued and must be inspected and sharpened to a standard. Do not buy used.", search: "pole climbing gaffs hooks lineman" },
          { name: "Tool belt or pouch set for line work", why: "Keeps pliers, wrenches, and small hardware within reach while aloft.", search: "lineman tool belt Klein pouch" },
          { name: "Headlamp (rated for outdoor use)", why: "Night call-outs and dark transformer boxes.", search: "Streamlight headlamp waterproof work" },
          { name: "Handline and small tool bags", why: "Raising tools and hardware safely rather than carrying them while climbing.", search: "lineman handline tool bag rope" },
          { name: "Cordless drill and impact driver", why: "Mounting hardware and pad-mount work. Choose one battery platform.", search: "Milwaukee M18 FUEL drill impact driver combo" },
          { name: "Multimeter with a CAT III or CAT IV rating", why: "For secondary and service troubleshooting. Use only on circuits within its rating.", search: "Fluke CAT IV multimeter 600V" },
          { name: "Binoculars or monocular", why: "Inspecting hardware, insulators, and poles from the ground.", search: "compact binoculars 10x25 waterproof" },
          { name: "Sturdy lunch kit and thermos", why: "Long days and storm shifts. Staying fuelled and hydrated is a safety issue.", search: "insulated lunch bag thermos" }
        ]
      },
      {
        title: "Later and specialized",
        note: "Usually supplied and maintained by the employer, which must be tested and inspected. Ask before buying.",
        items: [
          { name: "Rubber insulating gloves with leather protectors", why: "Issued by the employer, with the class matched to the voltage. Inspect and air-test before every use.", search: "Class 2 rubber insulating gloves leather protectors" },
          { name: "Hot sticks and hot-line tools", why: "Fibreglass tools for working at a distance from energized parts. Must be kept clean, dry, and tested.", search: "hot stick fiberglass lineman tools" },
          { name: "Proximity or voltage detector approved for line voltage", why: "Detectors are aids and not proof of dead. Follow the utility's testing procedure.", search: "high voltage proximity detector lineman" },
          { name: "Protective grounding set", why: "Portable grounds bring the work zone to equal potential. Must be sized, inspected, and installed per procedure.", search: "protective grounding cluster jumpers lineman" },
          { name: "Fall-arrest harness, positioning lanyard, and pole strap", why: "Issued by the employer. Training and inspection come first.", search: "3M DBI-SALA lineman harness CSA" },
          { name: "Cable cutters and compression tools", why: "Used for conductor splicing and cable termination. Usually shop supplied.", search: "hydraulic compression tool cable cutter lineman" }
        ]
      },
      {
        title: "School supplies for technical training",
        note: "What helps in the classroom for math, drawings, and code study. Check with your school and exam body about calculator rules before you buy.",
        items: [
          { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Trig, square roots for three-phase math, and ratios. Know it before test day.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
          { name: "Canadian Electrical Code, Part I (CSA C22.1)", why: "For service entrances and customer-side rules that connect to utility work. Check your adopted edition.", search: "Canadian Electrical Code Part I CSA C22.1" },
          { name: "CSA C22.3 No. 1 Overhead Systems (if your course uses it)", why: "The Canadian standard for overhead line construction. Check the current edition used by your school.", search: "CSA C22.3 No. 1 overhead systems" },
          { name: "Mechanical pencil (0.5 mm) and erasers", why: "Clean sketches of pole layouts and single-line diagrams.", search: "Pentel GraphGear mechanical pencil 0.5mm eraser" },
          { name: "Graph paper and a 12 in steel ruler", why: "Pole framing sketches and sag calculations.", search: "graph paper pad 12 inch steel ruler" },
          { name: "Electrical theory textbook", why: "AC, three-phase, and transformers at the apprentice level.", search: "electrical theory textbook AC three phase transformers apprentice" },
          { name: "Field notebook (Rite in the Rain)", why: "Weatherproof paper for notes on switching and job details.", search: "Rite in the Rain field notebook" },
          { name: "Binder, dividers, and highlighters", why: "Organize notes by year. Also useful for Red Seal exam review.", search: "binder dividers highlighters" }
        ]
      }
    ],
    mediaGroups: [
      {
        title: "Official and standards resources",
        items: [
          { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare.", url: "https://red-seal.ca/eng/welcome.shtml" },
          { name: "Codes Canada", desc: "National model codes and links to code information.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
          { name: "Infrastructure Health and Safety Association (IHSA)", desc: "Safety resources and training information, including for electrical utilities in Ontario.", url: "https://www.ihsa.ca/" },
          { name: "CSA Group", desc: "Publisher of electrical standards used in Canada, including CSA C22.3 overhead and underground series.", url: "https://www.csagroup.org/" },
          { name: "IBEW", desc: "Union lineworker training and apprenticeship information.", url: "https://www.ibew.org/" },
          { name: "Electricity Human Resources Canada", desc: "Workforce information for the electricity sector.", url: "https://electricityhr.ca/" }
        ]
      },
      {
        title: "Video searches",
        note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials, your employer's procedures, and local codes.",
        items: [
          { name: "Powerline technician career overview", desc: "What lineworkers do and how the apprenticeship works.", url: yt("powerline+technician+career+overview+apprenticeship") },
          { name: "Pole climbing basics", desc: "Pole inspection and climbing technique.", url: yt("lineman+pole+climbing+basics+gaffs+inspection") },
          { name: "Distribution transformers", desc: "How transformers step voltage down for customers.", url: yt("distribution+transformer+basics+pole+mounted+explained") },
          { name: "Protective grounding and equipotential zone", desc: "How grounds protect crews from backfeed and induced voltage.", url: yt("lineman+protective+grounding+equipotential+zone") },
          { name: "Rubber glove and hot stick work", desc: "Methods used for energized work on distribution lines.", url: yt("lineman+rubber+glove+hot+stick+methods+distribution") },
          { name: "Underground cable and URD basics", desc: "Primary cable, terminations, and pad-mount transformers.", url: yt("underground+residential+distribution+URD+pad+mount+transformer") },
          { name: "Step and touch potential", desc: "Why ground gradients are dangerous and how to avoid them.", url: yt("step+potential+touch+potential+explained+electrical+safety") },
          { name: "Three-phase wye and delta systems", desc: "Line and phase voltages explained.", url: yt("three+phase+wye+delta+distribution+explained") }
        ]
      },
      {
        title: "Audio, beginner (pre-apprentice and year 1)",
        note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for powerline work yourself.",
        items: [
          { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
          { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
          { name: "YouTube: lineman apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: yt("lineman+apprentice+podcast") }
        ]
      },
      {
        title: "Audio, intermediate (years 2-3)",
        note: "Trade-knowledge talk that builds on what you do on the job.",
        items: [
          { name: "YouTube: lineworker stories and safety podcast", desc: "Job-site lessons and storm-restoration stories.", url: yt("lineworker+safety+podcast+utility") },
          { name: "YouTube: utility distribution operations talks", desc: "Switching, outages, and system operation concepts.", url: yt("electric+utility+distribution+operations+podcast") },
          { name: "YouTube: electrical safety in utilities (listen-along)", desc: "Talks on hazards and procedures to hear while commuting.", url: yt("electrical+utility+safety+talk+lineman") }
        ]
      },
      {
        title: "Audio, advanced (year 4 to journeyperson)",
        note: "Exam prep, system knowledge, and leadership.",
        items: [
          { name: "YouTube: Red Seal powerline technician exam prep", desc: "Study talks you can listen to while commuting.", url: yt("Red+Seal+powerline+technician+exam+preparation") },
          { name: "YouTube: power system protection and reliability podcast", desc: "Protection concepts and reliability from a utility view.", url: yt("power+system+protection+reliability+podcast") },
          { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: yt("skilled+trades+leadership+mentoring+apprentices+podcast") }
        ]
      }
    ],
    practiceBank: {
      1: bank([
        ["Until proven otherwise, how should a powerline technician treat an overhead conductor on the ground or on a structure?", "As energized, until tested, isolated, and grounded under the utility's procedure", ["As dead if it is not sparking, humming, or visibly arcing, since an energized line always makes noise", "As dead if it is on the ground, since the earth drains the current", "As low voltage if it is thin and looks like a service wire"], "A downed or hanging conductor may be energized, and you never assume it is dead by appearance."],
        ["A vehicle contacts an energized line and you are inside. The general advice is to:", "Stay inside and wait for the line to be de-energized unless there is fire or immediate danger", ["Step out and touch the ground and the vehicle at once to bleed off the charge before the line is re-energized", "Run toward the line to get clear of the vehicle as fast as possible", "Open the door and call out for help while standing on the step"], "Staying in the vehicle keeps you at the same potential. If you must leave because of fire, jump clear with both feet together and shuffle away."],
        ["Rubber insulating gloves are inspected and air-tested:", "Before each use, and are also tested on a schedule set by the standard and employer", ["Only once when new, since the rubber is cured at the factory and holds its rating for the life of the glove", "Only if they appear dirty or damaged after a day of work", "Every five years only, when the employer reviews the equipment"], "Visual inspection and an air check before use catch cuts and punctures. Periodic electrical testing is separate."],
        ["Which hazard communication system gives information on hazardous products such as creosote or treated wood preservatives?", "WHMIS, with labels and safety data sheets", ["Red Seal, with its exam standard and trade sections for each trade", "The CEC tables, with conductor ampacities and wiring rules", "SCADA, with its remote readings of switches and reclosers"], "WHMIS applies to hazardous products in Canadian workplaces."],
        ["AC power in Canadian utility systems is nominally at what frequency?", "60 Hz", ["50 Hz", "120 Hz", "400 Hz"], "Canada's power systems run at 60 Hz."],
        ["Before climbing a wood pole you should:", "Inspect the pole for rot, damage, and condition and verify it can safely support you", ["Climb quickly to test it, since a weak pole will show itself right away and the crew can then switch poles", "Only check the top of the pole where the crossarm is attached", "Skip the inspection if the pole is new, since new poles cannot fail"], "Pole inspection is required before climbing, since a weakened pole can fail."],
        ["What is the main purpose of an insulator on a line?", "To support the conductor and keep it electrically separated from the structure", ["To increase voltage on the line so that power moves farther along the feeder with less loss", "To store charge so the line can ride through short faults", "To reduce frequency swings along the feeder under heavy load"], "Insulators hold conductors while preventing current flow to the pole or crossarm."],
        ["What does 'three points of contact' mean when climbing a ladder or truck?", "Keep two hands and one foot, or two feet and one hand, on the equipment at all times", ["Use three people to hold the ladder base while one person climbs, with one more to hand up tools", "Wear three safety tools on the belt before leaving the yard", "Carry three tools in the pocket for the work at the top"], "It keeps you stable and reduces falls."],
        ["A Class E hard hat is rated to protect against:", "Contact with electrical conductors up to the rated voltage", ["Only chemical splash, with no rating for electrical contact", "Cold weather only, with a liner for work in low temperatures", "Radio signals from nearby transmitters and relay towers"], "Class E hard hats are tested for high-voltage protection. Use it with the other required PPE."],
        ["The unit of electrical resistance is the:", "Ohm", ["Watt", "Volt", "Ampere"], "Resistance is measured in ohms."],
        ["Before you dig near a utility pole or underground line, you should:", "Request locates and follow marked clearances", ["Dig carefully with a sharp shovel only, and stop if you feel resistance", "Assume no cable is within 3 m of the pole, since it is buried deep", "Ignore the markings if the ground is soft and easy to dig"], "Locates identify buried utilities before excavation."],
        ["Which of these best describes a hot stick?", "An insulated tool used to work at a distance from energized parts", ["A heating tool used to thaw ice from poles and crossarms in winter", "A type of crowbar made of fibreglass for pulling pole steps", "A conduit bender with an insulated handle for service work"], "Hot sticks are fibreglass or similar, must be kept clean, dry, and tested."],
        ["In an outage, why should you not rely on a customer's statement that the power is off?", "Backfeed from generators or other sources can energize lines unexpectedly", ["Customers rarely call in, so their reports are seldom correct about which lines are dead", "Power lines are always dead after storms, so no check is needed", "Voltage cannot flow back through transformers, so a check is not needed"], "Backfeed through a transformer can raise a line to a dangerous voltage. Follow switching and grounding procedures."],
        ["Which fall protection element must be inspected before use?", "Harness, lanyard, and pole strap", ["Only the hard hat, since it is the first part to take an impact", "Only the truck, since it carries all of the climbing gear", "Only the tape measure, since it is hooked to the belt"], "All fall protection components are inspected before every use."],
        ["Which colour is typically used for a grounded (neutral) conductor in Canadian service wiring?", "White", ["Red", "Black only", "Orange"], "White or grey identifies a grounded conductor on the customer side."]
      ]),
      2: bank([
        ["A distribution transformer has a 14,400 V primary and a 240 V secondary. The turns ratio is:", "60:1", ["6:1", "600:1", "24:1"], "14,400 / 240 = 60."],
        ["On a 25 kV nominal (line-to-line) three-phase wye system, line-to-ground voltage is about:", "14.4 kV", ["25 kV", "43.3 kV", "8.3 kV"], "25 / 1.732 = 14.43 kV."],
        ["A 50 kVA single-phase transformer on a 240 V secondary carries a full-load current of about:", "208 A", ["104 A", "417 A", "50 A"], "I = 50,000 / 240 = 208 A."],
        ["What is the main purpose of a fuse cutout on a pole-mounted transformer?", "To protect the primary circuit against faults on the transformer, and to provide a means of isolation", ["To raise voltage on the secondary side during heavy winter load", "To measure power used by the customers on the transformer", "To store energy for supplying load when the feeder is open"], "Cutouts are protective devices that open under fault and allow hot-stick operation."],
        ["A recloser:", "Opens on a fault and automatically recloses to clear temporary faults", ["Only opens manually when a lineman operates it with a hot stick from the ground, never by itself", "Locks all circuits permanently after the first fault it detects", "Increases voltage on the feeder after a fault has been cleared"], "Reclosers test the line after a fault and lock out if the fault persists."],
        ["Why are guy wires and anchors used on a pole?", "To resist unbalanced loads such as line angles and dead ends", ["To carry current from the primary conductors down to ground when a fault occurs on the pole top", "To provide lighting for crews working on the pole at night", "To reduce frequency variation caused by wind on the line"], "Guys counter horizontal loads that the pole alone cannot resist."],
        ["ACSR conductor means:", "Aluminum conductor with a steel reinforcement core", ["All copper stranded round, used for service drops only", "Armoured cable with shielded rubber insulation for burial", "Automatic circuit sensing relay used in substation control"], "Steel strands add tensile strength to aluminum conductor."],
        ["As conductor temperature rises, sag generally:", "Increases", ["Decreases", "Stays exactly the same", "Becomes zero"], "Conductors expand when heated, and sag grows."],
        ["A secondary triplex service drop typically carries:", "Two insulated phase conductors and a bare neutral messenger for 120/240 V service", ["Three primary conductors at 25 kV for a three-phase industrial customer, twisted around a messenger", "Fibre only, since triplex is a communications cable type", "A single DC conductor with a ground return for each home"], "Triplex is two insulated phase conductors twisted with a neutral."],
        ["Why is the system neutral grounded at multiple points on many distribution systems?", "To keep the neutral near earth potential and help clear faults", ["To make the wire cheaper by using a smaller conductor for the neutral", "To raise voltage at the end of long feeders during peak load", "To reduce frequency drift on the system during storms"], "Multi-grounded neutrals reduce neutral voltage rise and help protection operate."],
        ["Capacitor banks on a distribution feeder are used mainly to:", "Supply reactive power and improve voltage and power factor", ["Reduce frequency when the feeder is lightly loaded at night", "Increase the load so the feeder runs closer to its limit", "Store active power for days to cover long outages"], "Capacitors provide reactive power locally."],
        ["Single-phase 120/240 V from a transformer secondary uses:", "A centre-tapped secondary where each half gives 120 V and the full winding 240 V", ["A delta secondary with three windings joined end to end, giving 120 V from each corner to ground", "Two separate grounds, one for each of the 120 V legs", "A DC rectifier that converts the supply for each customer"], "The centre tap forms the neutral."],
        ["A pad-mount transformer is typically used in:", "Underground distribution systems", ["Only on poles, in rural areas where lines are overhead", "Only at generating stations, to step up generator voltage", "Only on transmission towers, to step the line voltage down"], "Pad-mount units are ground-level transformers fed by underground cable."],
        ["In switching, why is each step read back and confirmed?", "To prevent errors that could energize a work zone or open the wrong device", ["To waste time so that the crew works more slowly and carefully, whatever the risk of error", "To confuse the crew so that they check each step twice", "To fill the log with entries that the manager reviews later"], "Three-part communication and confirmation are core to safe switching."],
        ["What is the purpose of a lightning arrester (surge arrester) on a line?", "To divert surge current to ground and protect equipment", ["To raise voltage on the line when the load is heavy", "To store energy from a surge for use during an outage", "To measure power flowing through the line during a storm"], "Arresters limit overvoltage from lightning and switching."]
      ]),
      3: bank([
        ["An equipotential work zone on de-energized line is created by:", "Installing protective grounds so that all conductors and the structure are bonded together", ["Wearing rubber gloves only, since the gloves insulate the whole body", "Opening one switch and walking away, since the line is then dead", "Using a flashlight to inspect the line before work begins"], "Bonded protective grounds limit voltage differences if the line is accidentally energized."],
        ["Step potential is the:", "Voltage difference between a person's feet while ground current flows", ["Voltage between two poles that are a span apart on the line, measured by a hot-stick meter", "Wire tension measured at each step along the span", "Transformer ratio at each tap step on the winding"], "A person can be shocked by the voltage gradient across the ground, so feet should be kept together and shuffled away."],
        ["Open-delta (V-V) bank capacity compared with a closed delta bank of the same transformers is about:", "57.7%", ["100%", "66.7%", "86.6%"], "An open delta provides about 57.7% of the capacity of three transformers in closed delta."],
        ["Induced voltage on a de-energized line can come from:", "Nearby energized lines through electric or magnetic coupling", ["The wood pole only, since wood stores charge from lightning strikes and releases it later", "A flashlight used by the crew while checking the line", "A radio signal from a truck antenna parked below the line"], "Parallel energized lines can induce dangerous voltage, which is why grounds are applied."],
        ["Cold load pickup after a long outage can result in:", "Much higher than normal inrush and demand as loads restart together", ["Lower demand than normal, since the houses have cooled down and use less power on restart", "No demand at all, since the loads have all been disconnected", "A frequency change to 50 Hz while the loads restart together"], "Thermostat and motor loads come back at once and can trip protection."],
        ["Ferroresonance is a risk when:", "A cable-fed transformer is energized or de-energized one phase at a time with certain connections", ["A pole is replaced while the line is energized from both ends and the crew has not yet grounded it", "A guy wire is installed too tightly on a dead-end pole", "A crossarm is painted with a preservative on a hot day"], "Interaction of cable capacitance and transformer magnetizing inductance can cause overvoltage."],
        ["When a three-phase line is isolated for work, the last step before work begins is:", "Verifying it is de-energized with an approved method and applying grounds", ["Removing the tags so the line can be switched back on quickly if the work is delayed", "Starting the generator so that the work site has power", "Relaxing the procedure once the switches have been opened"], "Test and ground in accordance with the work protection procedure."],
        ["What is the purpose of a ground rod and its resistance test?", "To confirm the grounding electrode provides an adequately low resistance path to earth", ["To measure wood strength in the pole at the ground line", "To tune the radio used by the crew in the field", "To test insulation on gloves before each shift starts"], "Low resistance supports protection operation and limits voltage rise."],
        ["A stress cone on a medium-voltage cable termination:", "Controls the electric field at the end of the cable shield", ["Strengthens the pole where the cable is attached with straps", "Lights the cable so the crew can see it in the dark", "Absorbs moisture only, and has no part in the electric field"], "Termination stress control prevents electrical stress from concentrating."],
        ["Why do crews avoid using a handheld proximity detector as the only method to confirm de-energized?", "Detectors are aids and can fail or give false results, so approved testing and grounding procedures apply", ["They are always accurate, so the crew can skip grounding after a reading", "They show current, which tells the crew the exact load on the line", "They save time, so crews use them in place of test equipment"], "Never rely on a single device or sense. Follow the procedure."],
        ["When a conductor is under high tension and is cut or released unexpectedly, the main hazard is:", "Stored energy causing violent movement", ["Voltage rising on the line when the load is suddenly lost", "Frequency change on the system caused by the break in the span", "Heat only, from friction as the conductor slides through the clamp"], "Controlling tension with proper tools prevents recoil injuries."],
        ["A relay coordination study aims to ensure that:", "The protective device nearest the fault clears first, limiting the outage area", ["All devices trip at once so the fault is cleared in the shortest time on every part of the feeder", "The largest fuse opens first, to protect the main substation", "No device ever trips, even if the fault current is very high"], "Coordination keeps outages small."],
        ["Which action reduces the risk of backfeed from customer generators during an outage?", "Isolating and grounding the work area and confirming customer generation is disconnected", ["Assuming customer generation is off if the house is dark, then working on the line as normal", "Using a smaller conductor so less current can flow back", "Removing the guy wire from the pole before the work starts"], "Always treat backfeed as possible."],
        ["Primary cable fault location by a 'thumper' uses:", "A high-voltage surge to produce an audible discharge at the fault", ["A flashlight to look for burn marks along the cable run, after the cable is dug up in sections", "A tape measure only, to match the cable length to a map", "Radio signals only, picked up by a receiver on the surface"], "Surge generators help pinpoint underground faults. Follow the utility's safety procedure."],
        ["A voltage regulator on a feeder is used to:", "Keep voltage within limits as load changes along the line", ["Change frequency to match the load at the end of the feeder", "Provide backfeed to the substation during an outage", "Increase sag on the conductors to relieve line tension"], "Regulators tap-change to maintain customer voltage."]
      ]),
      4: bank([
        ["Minimum approach distance (MAD) for energized work is generally determined from:", "System voltage, applicable standards, and conditions such as altitude and the type of work", ["Pole height only, since taller poles need larger distances", "The colour of the lines, which shows the voltage class", "The time of day, since daylight allows closer work"], "Utilities and regulations set approach distances. Always use the values in your jurisdiction's rules."],
        ["In wye-wye distribution, a ground fault on one phase:", "Produces a high fault current returning through the neutral and ground", ["Cannot occur, since the neutral keeps all phases at ground potential and blocks fault current", "Lowers the system voltage to zero permanently on all three phases", "Changes the frequency of the system until the fault is cleared"], "Solidly grounded wye systems allow high ground-fault current, which helps protective devices operate quickly."],
        ["Voltage drop on a long feeder is reduced by:", "Larger conductors, voltage regulators, or capacitor banks, as appropriate", ["Longer lines that spread the load over a wider area and share the current between more conductors", "Smaller conductors that cut cost and weight per span", "Removing the neutral so that less current flows in the circuit"], "Lower impedance or voltage support improves voltage at the end of the line."],
        ["A typical benefit of SCADA for distribution is:", "Remote monitoring and control of switches and reclosers to speed up restoration", ["Replacing all line crews with remote operators at the control centre, so field work is no longer needed", "Lowering conductor tension through automatic sag control", "Eliminating poles by moving all feeders underground by remote control"], "Remote operation shortens outage time but does not replace field verification."],
        ["Which factor most affects conductor sag in a span?", "Span length, tension, conductor weight, and temperature", ["Paint on the pole, which adds weight at the attachment point", "Only the time of day, since sag follows the daily load curve", "The colour of the insulator, which absorbs heat from the sun"], "Sag-tension calculations use these variables."],
        ["Distributed energy resources such as rooftop solar require utilities to:", "Ensure anti-islanding protection and treat all lines as potentially energized", ["Ignore them, since they are on the customer side of the meter and cannot feed the utility lines", "Rely on them for grounding, since inverters bond to earth", "Remove the neutral at those services to prevent backfeed"], "DER can feed back into the grid. Isolation and grounding procedures still apply."],
        ["When planning a scheduled outage, which item is essential?", "A written switching plan, safe work zone, and clear communication with the control centre and customers", ["Verbal agreement only, with no written plan between crew members", "Waiting for the storm to pass before the outage is planned", "Skipping tests so that the outage time is kept to a minimum"], "Planning and communication reduce risk and delays."],
        ["Why is a three-phase transformer bank's primary-secondary connection (delta-wye) significant?", "It affects grounding, zero-sequence behaviour, and phase relationships", ["It only affects the paint finish and the tank markings, because all connections work the same way", "It has no effect on the system, since all banks behave alike", "It changes the frequency from 60 Hz to a lower value"], "The connection determines how faults and imbalance behave."],
        ["Which statement about overhead line work in a storm is most correct?", "Assess hazards, treat downed lines as energized, and follow rest rules to manage fatigue", ["Speed matters more than procedure when many customers are out, as long as the crew stays calm", "Fatigue does not matter if the crew is experienced and well trained", "Grounding is optional when the work area is wet and slippery"], "Safety rules remain in force during emergencies."],
        ["Transformer polarity matters when:", "Paralleling transformers or connecting them into a three-phase bank", ["Painting the tank, since the paint colour follows the polarity and the markings on the bushings", "Choosing the colour of tags for the lockout of the unit", "Picking a hard hat for working near the transformer"], "Wrong polarity can cause short circuits or incorrect phase relationships."],
        ["A 75 kVA three-phase transformer at 600 V has a full-load line current of about:", "72 A", ["125 A", "43 A", "108 A"], "I = 75,000 / (1.732 x 600) = about 72 A."],
        ["What is an advantage of an underground distribution system over overhead?", "Less exposure to wind, ice, and trees, though repairs can take longer", ["Cheaper to repair in all cases, since cables sit below ground and are reached by a short dig", "Never fails, since the cables are protected from all causes", "No locates needed, since the cables are all mapped and marked"], "Underground systems are more weather resistant but harder to access and repair."],
        ["After a fault, what should the crew confirm before re-energizing a line?", "All persons clear, grounds removed, tags cleared, and the control centre informed", ["Only the weather, since fair weather means the line is safe and the fault has cleared itself", "Nothing, since the system will protect itself if a fault remains", "Only the time of day, so that the crew can finish before dark"], "Formal release and clearing of the work protection prevents energizing a line with workers or grounds on it."],
        ["Which concept best describes why crews use a work protection code or similar system?", "It provides documented control of who has authority to energize or work on the equipment", ["It counts the wire and the poles used on a work order, so that materials can be billed back to the job", "It is only used for billing the customer for the work", "It replaces training for crews who are new to the utility"], "Formal clearances control switching and prevent unplanned re-energization."],
        ["Line loss on a distribution feeder is mainly caused by:", "Current flowing through conductor and transformer resistance (I squared R)", ["Colour of insulators, which absorbs heat from the sun and wastes power in the form of light", "Wind direction, which cools the conductors unevenly", "Pole height only, since taller poles have longer wire runs"], "Losses rise with the square of current."]
      ])
    },
    roadmapSteps: [
      { title: "Before you start", items: ["Confirm the trade fits you: comfort with heights, outdoor work, and physical demands.", "Take math, physics, and shop courses if you can.", "Apply to utilities, municipal systems, and line contractors, and look at pre-apprenticeship or pre-employment lineworker programs.", "Gather safety tickets such as WHMIS and first aid, hold a valid driver's licence, and register as an apprentice with your provincial authority."] },
      { title: "Year 1: Safety, climbing, and basics", items: ["Electrical safety, rescue, and fall protection.", "Pole inspection and climbing techniques.", "Basic electrical theory and hardware identification.", "Ground-level support work and truck equipment."] },
      { title: "Year 2: Overhead construction and transformers", items: ["Framing poles, installing conductor, and sagging.", "Transformers, services, and secondary systems.", "Introduction to rubber glove and hot-stick methods under supervision.", "Switching and tagging fundamentals."] },
      { title: "Year 3: Underground, protection, and energized work", items: ["Underground cable, terminations, and URD systems.", "Protective devices, reclosers, and regulators.", "Protective grounding and work zone setup.", "Troubleshooting and outage response."] },
      { title: "Year 4 and beyond: Systems, planning, and leadership", items: ["Switching plans, work protection, and coordination with the control centre.", "System protection, power quality, and DER impacts.", "Advanced rigging, tension stringing, and specialized work.", "Mentoring apprentices and leading small crews."] },
      { title: "Certification", items: ["Complete in-school and on-the-job hours required by your province.", "Write the Red Seal exam (Powerline Technician) after your apprenticeship, according to your province's process.", "Study with the occupational standard and practice tests.", "Keep your certificate, rescue and safety tickets current."] }
    ],
    glossary: [
      ["ACSR", "Aluminum conductor steel reinforced, a common overhead conductor."],
      ["Anchor", "A buried or fixed device that holds a guy wire."],
      ["Backfeed", "Power flowing from a source such as a generator or another system into a line that is supposed to be de-energized."],
      ["Bucket truck", "A truck with an insulated boom and aerial platform for line work."],
      ["Capacitor bank", "A set of capacitors installed on a line to supply reactive power."],
      ["Conductor", "A wire or cable that carries electric current."],
      ["Crossarm", "A horizontal member on a pole that supports insulators and conductors."],
      ["Deadend", "A structure or hardware that terminates a conductor under full tension."],
      ["Distribution", "The part of the power system that delivers electricity from substations to customers."],
      ["Equipotential zone", "A work area where conductors and structures are bonded so that people are at the same voltage."],
      ["Fuse cutout", "A fuse holder mounted on a pole that can be opened with a hot stick."],
      ["Gaffs", "Pointed climbing hooks attached to boots for pole climbing."],
      ["Guy wire", "A tensioned cable that braces a pole against unbalanced loads."],
      ["Hot stick", "An insulated tool used to operate or work on energized equipment from a distance."],
      ["Induced voltage", "Voltage created on a de-energized conductor by nearby energized conductors."],
      ["Insulator", "A device that supports a conductor and resists the flow of current."],
      ["Lockout", "Applying a lock to isolate and prevent re-energization."],
      ["Minimum approach distance", "The closest distance a worker may approach an energized part without insulation or protective measures."],
      ["Neutral", "The grounded conductor in a distribution system, which carries return current."],
      ["Pad-mount transformer", "A ground-level transformer in a locked enclosure used in underground systems."],
      ["Primary", "The higher-voltage side of a distribution transformer or system."],
      ["Recloser", "A device that opens on a fault and automatically recloses to clear temporary faults."],
      ["Sag", "The vertical drop of a conductor between supports."],
      ["Secondary", "The lower-voltage side of a distribution transformer that serves customers."],
      ["Service drop", "The conductors from the utility line to a customer's building."],
      ["Step potential", "The voltage difference between a person's feet in a ground gradient."],
      ["Switching order", "A written sequence of steps to operate devices and isolate equipment safely."],
      ["Transmission", "High-voltage lines that move electricity over long distances to substations."],
      ["URD", "Underground residential distribution."]
    ],
    cards: [
      { front: "Treat every conductor as", back: "Live until it is tested, isolated, and grounded according to procedure." },
      { front: "Wye line-to-ground voltage", back: "VLG = VLL / 1.732. 25 kV line to line is about 14.4 kV to ground." },
      { front: "Single-phase transformer current", back: "I = kVA x 1000 / V. A 50 kVA unit at 240 V carries about 208 A." },
      { front: "Three-phase transformer current", back: "I = kVA x 1000 / (1.732 x V). 75 kVA at 600 V is about 72 A." },
      { front: "Rubber glove classes (max use AC)", back: "Class 00: 500 V, 0: 1000 V, 1: 7500 V, 2: 17,000 V, 3: 26,500 V, 4: 36,000 V." },
      { front: "Vehicle contact with a line", back: "Stay inside unless fire or other immediate danger. If you must leave, jump clear and shuffle away with feet together." },
      { front: "Open-delta capacity", back: "About 57.7% of a closed delta bank of the same transformers." },
      { front: "Purpose of protective grounds", back: "Create an equipotential work zone and provide a path for fault current if the line is energized." },
      { front: "Recloser", back: "Opens on a fault, recloses automatically a set number of times, and locks out if the fault is permanent." },
      { front: "Canadian overhead line standard", back: "CSA C22.3 No. 1, Overhead systems. No. 7 covers underground systems." }
    ],
    jobsIntro: "Look for electrical utilities, municipal and co-operative power companies, line construction contractors, industrial and mining power systems, and union training centres.",
    tips: ["Bring a short resume, your safety tickets, your driver's licence, and ID.", "Show interest in outdoor work, heights, teamwork, and physical fitness.", "Contact utilities and line contractors directly, and follow up.", "Ask what training, tools, and PPE the employer supplies."],
    forumTopics: ["Starting out", "Pole climbing and fall protection", "Transformers, switching, and grounding", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference: [
      {
        title: "Rubber insulating glove classes",
        intro: "Maximum use voltage (AC, rms) by class under the commonly used ASTM D120 system. Use only as directed by your employer's procedures.",
        table: { head: ["Class", "Maximum use voltage (AC)"], rows: [["00", "500 V"], ["0", "1,000 V"], ["1", "7,500 V"], ["2", "17,000 V"], ["3", "26,500 V"], ["4", "36,000 V"]] },
        note: "Gloves must be worn with leather protectors, inspected and air-tested before each use, and tested periodically."
      },
      {
        title: "Key formulas",
        list: ["Single-phase: I = kVA x 1000 / V.", "Three-phase: I = kVA x 1000 / (1.732 x V<sub>LL</sub>).", "Wye voltage: V<sub>LL</sub> = 1.732 x V<sub>LN</sub>.", "Transformer turns ratio = primary voltage / secondary voltage.", "Power loss in a conductor: P = I<sup>2</sup>R."]
      },
      {
        title: "Wye line-to-line and line-to-neutral voltages",
        table: { head: ["Line-to-line", "Line-to-neutral (approx.)"], rows: [["600 V", "347 V"], ["208 V", "120 V"], ["4,160 V", "2,400 V"], ["12,470 V", "7,200 V"], ["25,000 V", "14,400 V"]] },
        note: "Common distribution voltages vary by utility and region."
      },
      {
        title: "Switching, grounding, and work protection",
        list: ["Use a written switching order and read back each step.", "Isolate all sources, including possible backfeed from customer generation.", "Test for absence of voltage using the approved method, then apply protective grounds.", "Use an equipotential work zone so that conductors and structures are bonded.", "Tag and lock according to the utility's work protection procedure, and release in the reverse order."]
      },
      {
        title: "Canadian standards pointers",
        list: ["CSA C22.3 No. 1: Overhead systems. CSA C22.3 No. 7: Underground systems.", "CSA C22.1 (Canadian Electrical Code, Part I): the customer-side wiring rules that connect with the utility service.", "CSA Z462: workplace electrical safety. CSA Z460: control of hazardous energy.", "Electrical utility safety rules and provincial occupational health and safety regulations apply, along with your employer's procedures."],
        note: "Check which edition your province and employer follow."
      },
      {
        title: "Quick unit conversions",
        table: { head: ["Quantity", "Conversion"], rows: [["1 m", "3.281 ft"], ["1 ft", "0.3048 m"], ["1 kg", "2.205 lb"], ["1 kN", "About 225 lbf"], ["1 hp", "746 W"]] }
      }
    ]
  });
})();
