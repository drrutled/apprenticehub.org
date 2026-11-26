// Industrial Electrician guide. Practice questions are original study aids, not official Red Seal exam questions.

(() => {
  const pattern = [1, 3, 0, 2, 1, 0, 3, 2, 1, 0, 2, 3, 0, 1, 2];
  const bank = (rows) => rows.map(([q, right, wrong, explain], i) => {
    const pos = pattern[i % pattern.length];
    const options = wrong.slice();
    options.splice(pos, 0, right);
    return { q, options, answer: pos, explain };
  });
  const noteBrands = "Professional-grade tools that hold up on plant floors. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.";
  const yt = (s) => `https://www.youtube.com/results?search_query=${s}`;

  registerTrade({
    id: "industrial-electrician",
    store: "industrial-electrician",
    title: "Industrial Electrician",
    name: "Industrial Electrician",
    short: "industrial electrical work",
    category: "Electrical · Industrial · Controls",
    summary: "Industrial electricians install, maintain, and troubleshoot motors, drives, PLC controls, and high-capacity power systems in plants, mills, mines, and other industrial facilities.",
    work: "You work on motors, motor control centres, variable frequency drives, PLC-based controls, and 600 V class distribution, often in noisy, dusty, or hazardous areas. Much of the day is troubleshooting: reading drawings, taking measurements safely, and getting production running again. Shutdowns, call-outs, and shift work are common in some plants.",
    duration: "Usually 4 years, varies by province",
    union: "IBEW Canada",
    unionUrl: "https://www.ibew.org/",
    jobSearch: "industrial electrician apprentice",
    journeySearch: "industrial electrician",
    aliases: "industrial electrician red seal 442a plant electrician maintenance electrician plc motor control mcc vfd controls",
    tools: ["Insulated screwdrivers and nut drivers", "CAT III or CAT IV rated multimeter", "Wire strippers and crimpers", "Clamp meter", "Voltage tester and proving unit", "Lockout kit and CSA-approved PPE"],
    insight: {
      skills: ["Strong math, especially trigonometry and Ohm's law", "Logical troubleshooting under pressure", "Reading schematics, ladder logic, and drawings", "Safe, disciplined work habits around energy"],
      hazards: ["Shock and arc flash: lockout, test, prove, and wear arc-rated PPE", "Stored energy and moving machinery: control all energy sources, not only electrical", "Confined spaces and heights: permits, rescue plans, and fall protection", "Hazardous locations: use only equipment approved for the classified area"],
      settings: ["Manufacturing and processing plants", "Mines, mills, and smelters", "Pulp, paper, oil, gas, and chemical facilities", "Contractors and plant maintenance departments"]
    },
    toolGroups: [
      {
        title: "Day-one tools, buy once and buy well",
        note: noteBrands,
        items: [
          { name: "Klein or Knipex insulated screwdriver set (1000 V rated)", why: "VDE-style insulated drivers add a layer of protection when working near energized parts. Check for damage before every use.", search: "Klein Knipex Wera insulated screwdriver set 1000V" },
          { name: "Klein or Knipex linesman pliers and diagonal cutters", why: "Cutting, twisting, and pulling conductors all day. Forged heads and comfortable grips last for years.", search: "Klein Knipex lineman pliers diagonal cutters" },
          { name: "Needle-nose pliers and long-reach pliers", why: "Placing wires in tight terminal and panel spaces without damaging insulation.", search: "Klein Knipex needle nose pliers long reach" },
          { name: "Wire strippers for 22 to 10 AWG", why: "Clean strips without nicking strands matter on control wiring, where one nicked conductor can cause a nuisance fault.", search: "Klein Katapult wire stripper cutter 10-22 AWG" },
          { name: "Ratcheting crimper for insulated and non-insulated terminals", why: "A ratcheting crimp is repeatable. Poor crimps are a top cause of heat and intermittent faults in control panels.", search: "Ideal ratcheting crimping tool insulated terminals" },
          { name: "Multimeter rated CAT III 600 V or CAT IV 600 V (Fluke or similar)", why: "Your main diagnostic tool. A rated meter with fused leads is a safety device, not only a measuring device.", search: "Fluke 117 87V multimeter CAT III 600V" },
          { name: "Non-contact tester plus two-pole voltage tester and proving unit", why: "Test-before-touch needs a tester you trust, and you prove it on a known live source before and after use.", search: "Fluke T6-1000 voltage tester proving unit" },
          { name: "Personal lockout kit: lock, hasps, tags", why: "Your personal lock is your life. Keep your key with you only, and follow the plant's lockout procedure.", search: "Master Lock safety lockout kit hasp tags" },
          { name: "CSA-approved safety boots, safety glasses, hearing protection, and hard hat", why: "Electrical-hazard-rated footwear, Class E hard hat, and comfortable PPE you will actually wear every shift.", search: "CSA green patch EH rated safety boots Class E hard hat safety glasses earplugs" }
        ]
      },
      {
        title: "Build up in first and second year",
        note: "Buy these as the work calls for them. Ask your journeyperson what holds up in your plant.",
        items: [
          { name: "Clamp meter (AC/DC true RMS)", why: "Measure motor and feeder current without breaking the circuit. Useful for load checks and VFD output troubleshooting.", search: "Fluke 376 clamp meter true RMS AC DC" },
          { name: "Conduit bender (1/2 in and 3/4 in EMT hand bender) and level", why: "EMT bending is a core early skill. Learn take-up, offsets, and saddles by hand.", search: "Klein Ideal EMT conduit bender 1/2 3/4 inch" },
          { name: "Cordless drill and impact driver (one battery platform)", why: "Mounting hardware and enclosures. Choose one platform to match what your crew uses.", search: "Milwaukee M18 FUEL drill impact driver combo kit" },
          { name: "Torque screwdriver (in-lb or N·m)", why: "Terminals and breakers have torque specs. Proper torque prevents loose connections and overheating.", search: "Wiha torque screwdriver in-lb N.m set" },
          { name: "Headlamp and flashlight", why: "Dark panels, cable trenches, and enclosures. Hands-free light is something you will use daily.", search: "Streamlight headlamp Milwaukee flashlight work" },
          { name: "Fish tape and wire-pulling tools", why: "Pulling conductors through conduit.", search: "Klein fish tape steel 25 ft 50 ft" },
          { name: "Hole saw and step bit set", why: "Cutting clean holes in enclosures and panels for glands and devices.", search: "Milwaukee step drill bit hole saw set" },
          { name: "Heavy-duty tool pouch or bag", why: "Keep daily tools organized and protected on a shutdown.", search: "Veto Pro Pac electrician tool bag" }
        ]
      },
      {
        title: "Later and specialized",
        note: "Often supplied by the employer, or required only for specific tasks. Ask before buying.",
        items: [
          { name: "Insulation resistance tester (megohmmeter)", why: "Used to test motor windings and cable insulation. Usually a plant or company tool.", search: "Fluke 1507 insulation resistance tester megohmmeter" },
          { name: "Loop calibrator (4-20 mA)", why: "Simulates and measures 4-20 mA signals when troubleshooting analog circuits.", search: "Fluke 707 loop calibrator 4-20mA" },
          { name: "Laptop-compatible programming cable and adapters", why: "Needed for PLC and drive programming. Software and cables are normally employer supplied.", search: "USB to serial Ethernet adapter programming cable PLC" },
          { name: "Thermal imaging camera", why: "Finds hot connections and overloaded components. Normally company supplied.", search: "Fluke thermal imager infrared camera electrical" },
          { name: "Arc-rated clothing and face shield", why: "Usually supplied by the employer according to the arc flash assessment. Training comes first.", search: "arc rated coverall face shield CSA Z462" },
          { name: "Rated insulating gloves with leather protectors", why: "Used in specific tasks per the site's safe work procedure. Gloves must be tested and inspected.", search: "Class 0 insulating rubber gloves leather protectors CSA" },
          { name: "Full-body harness and lanyard", why: "Usually supplied by the employer. Fall protection training is required first.", search: "3M DBI-SALA full body harness CSA" }
        ]
      },
      {
        title: "School supplies for technical training",
        note: "What helps in the classroom for math, drawings, and code study. Check with your school and exam body about calculator rules before you buy.",
        items: [
          { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Trig functions, square roots for three-phase math, and fractions. Learn it well before test day.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
          { name: "Canadian Electrical Code, Part I (CSA C22.1)", why: "You will refer to the CE Code constantly. Check which edition your province has adopted.", search: "Canadian Electrical Code Part I CSA C22.1" },
          { name: "Tabs and highlighters for code book", why: "Quick access to tables and rules is a major time-saver on exams.", search: "code book tabs sticky index tabs highlighters" },
          { name: "Mechanical pencil (0.5 mm) and erasers", why: "Fine, clean lines for schematics and ladder diagrams.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm eraser" },
          { name: "Graph paper pad and a 12 in steel ruler", why: "Sketching one-line diagrams and ladder logic neatly.", search: "graph paper pad 12 inch steel ruler" },
          { name: "Electrical symbols and schematics study book", why: "Practise reading single-line diagrams, schematics, and P&IDs.", search: "industrial electricity motor controls textbook schematics" },
          { name: "Field notebook (Rite in the Rain)", why: "Record measurements, nameplate data, and fault history. Weatherproof paper survives a plant floor.", search: "Rite in the Rain field notebook" },
          { name: "Binder, dividers, and flash drive", why: "Organize notes and copies of drawings and manuals by year.", search: "binder dividers USB flash drive" }
        ]
      }
    ],
    mediaGroups: [
      {
        title: "Official and standards resources",
        items: [
          { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare.", url: "https://red-seal.ca/eng/welcome.shtml" },
          { name: "Codes Canada", desc: "National model codes and links to code information.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
          { name: "CSA Group", desc: "Publisher of the Canadian Electrical Code and related electrical standards.", url: "https://www.csagroup.org/" },
          { name: "IBEW", desc: "Union electrical training and apprenticeship information.", url: "https://www.ibew.org/" },
          { name: "Electricity Human Resources Canada", desc: "Labour market and workforce information for the electricity sector.", url: "https://electricityhr.ca/" }
        ]
      },
      {
        title: "Video searches",
        note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local codes.",
        items: [
          { name: "Motor control basics", desc: "Start-stop circuits, contactors, and overloads.", url: yt("motor+control+basics+start+stop+contactor+overload") },
          { name: "Ladder logic and PLC basics", desc: "Inputs, outputs, and reading ladder programs.", url: yt("PLC+ladder+logic+basics+for+beginners") },
          { name: "Variable frequency drive basics", desc: "How VFDs control motor speed and common faults.", url: yt("variable+frequency+drive+basics+VFD+explained") },
          { name: "Three-phase power explained", desc: "Wye, delta, line and phase values.", url: yt("three+phase+power+explained+wye+delta") },
          { name: "Reading electrical schematics", desc: "Interpreting control schematics and wiring diagrams.", url: yt("reading+industrial+electrical+schematics+control+diagrams") },
          { name: "Arc flash and electrical safety", desc: "Hazards, boundaries, and safe work practices.", url: yt("arc+flash+electrical+safety+lockout+tagout+test+before+touch") },
          { name: "Troubleshooting motors with a megohmmeter", desc: "Insulation resistance testing of motor windings.", url: yt("megger+insulation+resistance+test+motor+winding") },
          { name: "Conduit bending", desc: "Offsets, saddles, and 90 degree bends.", url: yt("EMT+conduit+bending+90+offset+saddle") }
        ]
      },
      {
        title: "Audio, beginner (pre-apprentice and year 1)",
        note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for industrial electrical work yourself.",
        items: [
          { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
          { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
          { name: "YouTube: electrician apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: yt("electrician+apprentice+podcast") }
        ]
      },
      {
        title: "Audio, intermediate (years 2-3)",
        note: "Trade-knowledge talk that builds on what you do on the job.",
        items: [
          { name: "YouTube: industrial maintenance electrician podcast", desc: "Plant troubleshooting stories and tips.", url: yt("industrial+maintenance+electrician+podcast") },
          { name: "YouTube: PLC and automation podcast (listen-along)", desc: "Controls and automation topics to hear while commuting.", url: yt("PLC+automation+controls+podcast") },
          { name: "YouTube: motor and VFD troubleshooting talks", desc: "Hear how experienced techs diagnose drive and motor faults.", url: yt("VFD+motor+troubleshooting+industrial+electrician+talk") }
        ]
      },
      {
        title: "Audio, advanced (year 4 to journeyperson)",
        note: "Exam prep, code, and leadership.",
        items: [
          { name: "YouTube: Red Seal industrial electrician exam prep", desc: "Study talks you can listen to while commuting.", url: yt("Red+Seal+industrial+electrician+exam+preparation") },
          { name: "YouTube: Canadian Electrical Code explained", desc: "Code rule discussions to hear on the go.", url: yt("Canadian+Electrical+Code+explained+CE+Code+podcast") },
          { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: yt("skilled+trades+leadership+mentoring+apprentices+podcast") }
        ]
      }
    ],
    practiceBank: {
      1: bank([
        ["What is the correct order for the core steps of a lockout before electrical work?", "Identify and isolate the source, apply lock and tag, test for zero energy, then prove the tester", ["Apply lock and tag, then guess that the circuit is dead", "Test the circuit, then turn off the disconnect, then touch the conductors", "Ask a coworker if it is off and begin work"], "Isolate and lock, then verify the absence of voltage with a tester you have proven. Proving the tester before and after is standard practice."],
        ["A 24 V DC circuit has a 12 ohm load. What is the current?", "2 A", ["0.5 A", "12 A", "288 A"], "I = V / R = 24 / 12 = 2 A."],
        ["Which Canadian standard is the Canadian Electrical Code, Part I?", "CSA C22.1", ["CSA Z462", "CSA C22.3", "CSA Z460"], "CSA C22.1 is the CE Code. Z462 is workplace electrical safety and Z460 is control of hazardous energy."],
        ["Which meter category rating is the better choice for measuring on a motor control centre?", "CAT III or higher, with a voltage rating suited to the system", ["CAT I only", "No category, since it is a low-current circuit", "A rating only for hobby electronics"], "Industrial distribution equipment needs a meter whose category and voltage rating match the installation."],
        ["What does WHMIS give workers information about?", "Hazardous products in the workplace, through labels and safety data sheets", ["Voltage ratings of conductors", "Wage rates for apprentices", "Torque specs for terminals"], "WHMIS covers hazardous products. SDSs describe hazards and safe handling."],
        ["Total resistance of 10 ohm, 20 ohm, and 30 ohm resistors in series is:", "60 ohm", ["5.45 ohm", "20 ohm", "600 ohm"], "In series, resistances add."],
        ["Power in watts is voltage multiplied by:", "Current", ["Resistance", "Frequency", "Time"], "P = E x I. Combined with Ohm's law you can also use I squared R."],
        ["What is the typical purpose of an overload relay in a motor starter?", "Protect the motor from sustained overcurrent by opening the control circuit", ["Increase starting torque", "Reduce voltage to the motor", "Reverse motor direction"], "An overload relay responds to sustained overcurrent and opens the contactor coil circuit. Short-circuit protection is done separately."],
        ["For a normal three-phase induction motor, how do you reverse the direction of rotation?", "Swap any two of the three line leads", ["Swap all three line leads in rotation", "Reduce the supply frequency to zero", "Ground one phase"], "Swapping any two phases reverses the rotating field."],
        ["Which is a normally open (NO) contact?", "A contact that is open when its device is not actuated", ["A contact that is closed when not actuated", "A contact that is always open", "A contact that is open only under load"], "NO and NC describe the unactuated state."],
        ["What is the main purpose of bonding in an electrical system?", "To provide a low-impedance path that lets fault current operate overcurrent protection", ["To increase voltage", "To lower the power factor", "To carry normal load current"], "Bonding connects normally non-current-carrying metal parts so a fault clears quickly and touch voltage is limited."],
        ["How many degrees apart are the three voltages in a balanced three-phase system?", "120", ["60", "90", "180"], "Balanced three-phase voltages are 120 electrical degrees apart."],
        ["A 4-pole, 60 Hz induction motor has a synchronous speed of:", "1800 rpm", ["3600 rpm", "1200 rpm", "900 rpm"], "Ns = 120 x f / poles = 120 x 60 / 4 = 1800 rpm."],
        ["What does an arc flash risk assessment help determine?", "Incident energy, arc flash boundary, and the PPE category needed", ["The color of conductors", "The length of conduit runs", "The bonding of metal studs"], "It informs labelling and PPE decisions, as set out in standards such as CSA Z462."],
        ["Which tool is used to put a precise offset or 90 degree bend in EMT?", "A conduit bender", ["A tubing cutter", "A pipe threader", "A fish tape"], "A bender with the correct shoe size forms accurate bends."]
      ].concat([["Which colour is typically used for the grounded (neutral) conductor in Canadian wiring?", "White", ["Green", "Red", "Blue"], "White or grey identifies the grounded conductor. Green or bare identifies bonding conductors."]])),
      2: bank([
        ["In a three-phase wye system, line-to-line voltage equals the line-to-neutral voltage times:", "1.732", ["1.414", "3", "0.577"], "VLL = square root of 3 x VLN. For 347 V line to neutral, line to line is about 600 V."],
        ["A VFD changes motor speed mainly by varying:", "Output frequency, with a matching voltage", ["Number of poles", "Rotor resistance only", "The supply neutral"], "Speed is proportional to frequency. The drive keeps volts per hertz appropriate."],
        ["A pressure transmitter outputs 4-20 mA for 0-100 kPa. What current at 50 kPa?", "12 mA", ["10 mA", "8 mA", "14 mA"], "4 + 0.5 x 16 = 12 mA."],
        ["What is a 'seal-in' contact in a start-stop circuit?", "An auxiliary NO contact that keeps the coil energized after the start button is released", ["A fuse that seals the panel", "A thermal overload contact", "A contact that bypasses the stop button"], "The holding contact is wired in parallel with the start button."],
        ["In a PLC, the scan cycle typically consists of:", "Reading inputs, executing the program, updating outputs", ["Updating outputs, deleting inputs, rebooting", "Reading outputs, writing inputs, resting", "Executing the program before reading any inputs"], "The CPU reads input status, solves logic, then writes output status, then repeats."],
        ["Why use a star-delta (wye-delta) starter?", "To reduce starting current by starting the motor with its windings connected in wye", ["To increase running speed", "To reverse the motor", "To improve power factor at full load"], "Starting in wye reduces the voltage on each winding and the starting current. It also reduces starting torque."],
        ["An insulation resistance test on a motor winding is done with the motor:", "De-energized, locked out, and disconnected from the drive or starter", ["Running at full load", "Connected to the VFD output", "Energized at half voltage"], "Test only de-energized equipment, and disconnect drives or electronics that the test voltage could damage."],
        ["What does a motor nameplate service factor of 1.15 mean?", "The motor can carry up to 115% of rated load for short periods under stated conditions", ["The motor runs 15% faster", "The motor has 15% more poles", "The motor is rated for 115 V"], "Service factor gives a margin for overload, with reduced life and conditions applied."],
        ["Which device is used primarily to provide short-circuit protection for a motor branch circuit?", "A fuse or circuit breaker", ["An overload relay", "A pilot light", "A timer relay"], "Overload relays handle running overloads. Branch-circuit protection clears short circuits and ground faults."],
        ["What does an interposing relay often do in control circuits?", "Allows a low-power output to control a higher-power or different-voltage load", ["Measures current", "Stores data", "Acts as a ground fault detector"], "Interposing relays isolate and match signal levels."],
        ["Power factor is best described as:", "The ratio of real power (kW) to apparent power (kVA)", ["Volts divided by amps", "Frequency divided by speed", "Reactive power times time"], "PF = kW / kVA. Low PF means more current for the same real power."],
        ["A 3-wire proximity sensor has a:", "Power, common, and signal output wire", ["Positive, negative, and shield only", "Line, neutral, and ground", "Input, relay, and transformer"], "Three-wire DC sensors have supply, common, and output."],
        ["Which condition commonly causes a motor to overheat on a VFD at low speed?", "Reduced cooling from a shaft-mounted fan", ["Too much torque available", "A higher rated horsepower", "Phase balance improvements"], "Self-cooled motors rely on shaft speed for airflow. Low-speed, high-torque duty may need an auxiliary blower."],
        ["Which part of a contactor carries the load current?", "The power poles (main contacts)", ["The coil", "The shading ring", "The auxiliary terminal block only"], "The coil is the control side. The power poles carry the load."],
        ["Control circuits in motor control centres are often 120 V AC. A control transformer is commonly used to:", "Step down the line voltage and isolate the control circuit", ["Raise voltage for the motor", "Correct power factor", "Convert AC to DC"], "A control power transformer supplies the control voltage from the line."],
        ["Conduit bending: for a 30 degree offset, the distance between bends is the offset height multiplied by:", "2", ["1.414", "2.6", "1.0"], "The multiplier for 30 degrees is 2.0. For 45 degrees it is 1.414, and for 22.5 degrees it is 2.6."]
      ]),
      3: bank([
        ["What is the most reliable way to troubleshoot a control circuit?", "Use the schematic, divide the circuit logically, and measure voltage across devices", ["Replace parts until it runs", "Jumper out safety devices to test", "Ignore the wiring diagram"], "A systematic approach with measurements on a safe, correctly rated meter is efficient and safe. Never bypass safety devices."],
        ["In a 600 V three-phase balanced load, drawing 30 kW at unity power factor, the line current is closest to:", "29 A", ["50 A", "17 A", "58 A"], "I = P / (1.732 x V x PF) = 30000 / (1.732 x 600) = about 28.9 A."],
        ["A motor with slip of 3% on a 60 Hz 4-pole supply runs at about:", "1746 rpm", ["1800 rpm", "1854 rpm", "1500 rpm"], "1800 x (1 - 0.03) = 1746 rpm."],
        ["In Class I hazardous locations, the hazard is:", "Flammable gases or vapours", ["Combustible dusts", "Ignitable fibres", "Corrosive liquids"], "In the CE Code, Class I is gases and vapours, Class II is dusts, and Class III is fibres and flyings."],
        ["A soft starter differs from a VFD in that a soft starter generally:", "Ramps voltage during start and stop but does not vary running speed", ["Changes the running frequency", "Converts AC to DC for the motor", "Provides power factor correction at all times"], "Soft starters limit starting current and torque, then the motor runs at line speed."],
        ["What is a ground fault?", "An unintended connection between an energized conductor and ground or bonded metal", ["Two phases touching", "A conductor with high resistance only", "A loose neutral in a non-grounded system"], "Ground faults create current paths to ground. Ground fault protection and bonding handle them."],
        ["An analog input shows 0 mA on a 4-20 mA loop. Which cause is most likely?", "An open circuit or broken loop wire, since a healthy loop never reads below about 4 mA", ["A normal zero reading", "A 24 V supply that is too high", "A perfectly calibrated sensor at zero"], "Live zero means 4 mA is the minimum, so 0 mA indicates a fault such as an open loop."],
        ["Harmonics produced by VFDs can cause:", "Extra heating in transformers and neutral conductors, and nuisance trips", ["Lower current draw always", "Improved power factor always", "Reduced insulation stress"], "Non-linear loads inject harmonic currents, which increase losses and may affect other equipment."],
        ["What is the purpose of a line reactor or DC link choke with a VFD?", "To reduce harmonic current and protect the drive from supply disturbances", ["To increase output frequency", "To reverse phase sequence", "To bypass the drive"], "Reactors add impedance that smooths current and limits surge."],
        ["Which test proves the phase rotation at a motor terminal?", "A phase sequence (rotation) meter", ["A continuity buzzer", "A wire stripper", "A tape measure"], "A phase rotation tester shows ABC or CBA sequence."],
        ["Why is a motor's bearing current protection (shaft grounding ring) used with VFDs?", "To divert damaging common-mode currents away from the bearings", ["To increase motor speed", "To improve the display", "To limit the incoming voltage"], "VFD common-mode voltage can drive currents through bearings, causing fluting and early failure."],
        ["In ladder logic, an XIC (examine if closed) instruction is true when:", "Its referenced bit is on (1)", ["Its referenced bit is off", "The PLC is in program mode", "The output coil is de-energized"], "XIC passes power when the addressed bit is 1. It is the equivalent of a normally open contact in logic."],
        ["The first step before replacing a fuse that blew in a motor circuit is to:", "Find and correct the cause of the fault, with the circuit locked out", ["Install a larger fuse", "Bridge the fuse holder", "Reset the overload and run again"], "Fuses open for a reason. Never upsize to stop nuisance blowing."],
        ["Why is a motor megger reading trending over time valuable?", "A downward trend in insulation resistance signals moisture, contamination, or ageing", ["Only the highest reading counts", "It shows motor speed", "It replaces visual inspection"], "Trending predicts failures before they occur."],
        ["Ground-fault detection on a 600 V system is often done with resistance grounding. A key reason is to:", "Limit ground-fault current and allow the process to continue while the fault is located", ["Increase fault current", "Eliminate the need for bonding", "Raise the system voltage"], "High-resistance grounding limits damage and reduces arc flash from ground faults."]
      ]),
      4: bank([
        ["Under CSA Z462, the arc flash boundary is the distance at which:", "A person could receive a second-degree burn if an arc flash occurred (incident energy of 1.2 cal/cm2)", ["Voltage drops to zero", "A limited approach to shock exists", "A tool must be bonded"], "The arc flash boundary is based on 5 J/cm2 (1.2 cal/cm2) incident energy. It is separate from shock approach boundaries."],
        ["Which CE Code section covers motors and generators?", "Section 28", ["Section 10", "Section 18", "Section 36"], "Section 28 covers motors, generators, and their control and protection. Section 10 is grounding and bonding."],
        ["Which CE Code section addresses high voltage installations over 750 V?", "Section 36", ["Section 6", "Section 12", "Section 30"], "Section 36 covers high-voltage installations."],
        ["A 75 hp motor trips its overload repeatedly after a conveyor repair. What is the best first set of checks?", "Check the mechanical load for binding, supply voltage balance, measured current versus nameplate, and ventilation", ["Increase the overload setting above nameplate", "Remove the overload", "Replace the contactor only"], "Verify true load and supply before changing settings. Overloads are set based on motor nameplate current."],
        ["Voltage imbalance in the supply to a motor causes much larger current imbalance, which results in:", "Excess heat in the windings and shortened life", ["Improved efficiency", "Lower noise", "Reduced vibration"], "Small voltage imbalance can produce large current imbalance and overheating, so derating or correction is required."],
        ["What is the purpose of a bypass contactor on a drive or soft starter?", "To run the motor across the line after start, reducing losses, while keeping a means of maintenance", ["To reverse the motor", "To step up the voltage", "To measure speed"], "Bypass contactors remove the electronics from the circuit when full speed is reached or when the drive is faulted, as designed."],
        ["Which method is used to improve a plant's lagging power factor?", "Installing power factor correction capacitors, sized and applied with harmonic considerations", ["Installing more lightly loaded motors", "Increasing conductor size only", "Removing bonding conductors"], "Capacitors supply reactive power locally. Harmonics may need detuned reactors."],
        ["In a lockout of a machine, which energy sources must be controlled?", "All hazardous energy sources, including electrical, hydraulic, pneumatic, gravity, and stored energy", ["Electrical only", "Only the main disconnect", "Only moving parts"], "CSA Z460 and the plant procedure require identifying and controlling all hazardous energy."],
        ["What is a typical reason to use an isolation transformer in an industrial control panel?", "To galvanically isolate circuits and reduce noise and shock hazard", ["To increase available fault current", "To provide an extra ground", "To step up current"], "Isolation separates circuits and can limit ground-fault paths."],
        ["A shutdown plan for an electrical outage in a plant should include:", "Job scope, isolation points, lockout sequence, sign-off, and a re-energization plan", ["A verbal agreement only", "No documentation to save time", "Only the supervisor's lock"], "Planning, communication, and documented sign-off reduce risk."],
        ["Which factor is most important when selecting a motor for a hazardous classified area?", "Its certification and marking for the area class, division or zone, and gas or dust group", ["Its colour", "Its price", "Its brand only"], "Equipment must be approved for the classification and its temperature class."],
        ["When commissioning a VFD, which step is critical before first run?", "Enter motor nameplate data and verify rotation with the driven load safely uncoupled when needed", ["Set acceleration to zero", "Disable all protections", "Connect the drive output to the supply"], "Correct parameters protect the motor and drive, and checking rotation prevents damage."],
        ["What does a differential (87) protection scheme detect?", "Current into and out of a protected zone that does not match, indicating an internal fault", ["Only overvoltage", "Only low frequency", "Phase colour"], "Differential protection compares currents and trips for faults inside its zone."],
        ["Which description fits an effective root-cause troubleshooting report?", "States the symptom, tests, finding, cause, corrective action, and follow-up to prevent repeat failure", ["Only the part number replaced", "A verbal hand-wave", "The name of the last person who worked on it"], "Good documentation helps the next shift and prevents repeats."],
        ["A 100 kVA three-phase transformer at 600 V full load current is about:", "96 A", ["167 A", "58 A", "144 A"], "I = 100000 / (1.732 x 600) = about 96.2 A."]
      ])
    },
    roadmapSteps: [
      { title: "Before you start", items: ["Confirm the trade is a fit: math, troubleshooting, and comfort in industrial settings.", "Get your high school credits in math, physics, and shop if you can.", "Find an employer sponsor: plants, contractors, mines, or union training centres.", "Gather safety tickets such as WHMIS, fall protection, and first aid, and register as an apprentice with your provincial authority."] },
      { title: "Year 1: Safety and electrical fundamentals", items: ["Lockout, test-before-touch, and arc flash awareness.", "Ohm's law, series and parallel circuits, and AC theory.", "CE Code basics, wiring methods, and conduit bending.", "Reading single-line diagrams and basic schematics."] },
      { title: "Year 2: Motors and control circuits", items: ["Three-phase power and transformers.", "Motor types, nameplate data, and starters.", "Relay logic, control schematics, and sensors.", "Intro to PLCs and ladder logic."] },
      { title: "Year 3: Drives, PLCs, and instrumentation", items: ["VFDs, soft starters, and motor protection.", "PLC programming, I/O wiring, and analog signals.", "Preventive and predictive maintenance: insulation and thermal testing.", "Hazardous locations and grounding."] },
      { title: "Year 4 and beyond: Advanced troubleshooting and planning", items: ["High-voltage systems, protective relaying, and power quality.", "Shutdown planning and commissioning.", "Advanced code and arc flash assessment concepts.", "Mentoring newer apprentices and leading small jobs."] },
      { title: "Certification", items: ["Complete required in-school and on-the-job hours as set by your province.", "Write the Red Seal exam (Industrial Electrician) after your apprenticeship, according to your province's process.", "Study with the occupational standard and practice tests.", "Keep your certificate and tickets current, and plan for continuing learning."] }
    ],
    glossary: [
      ["AC drive", "Another name for a variable frequency drive that controls an AC motor."],
      ["Arc flash", "A dangerous release of energy caused by an electrical arc, with intense heat, light, and pressure."],
      ["Bonding", "Connecting normally non-current-carrying metal parts so they are at the same potential and fault current can flow."],
      ["Branch circuit", "The circuit conductors between the final overcurrent device and the load."],
      ["Contactor", "An electrically operated switch for power circuits, controlled by a coil."],
      ["Control transformer", "A transformer that supplies lower-voltage control power from the line voltage."],
      ["Delta connection", "A three-phase connection where windings form a closed triangle."],
      ["Disconnect", "A switch that isolates equipment from its source of supply."],
      ["Fault current", "Current that flows in a circuit during a short circuit or ground fault."],
      ["Ground fault", "An unintended path between a live conductor and ground or bonded metal."],
      ["Harmonics", "Distorting currents or voltages at multiples of the supply frequency, often caused by non-linear loads."],
      ["HRG", "High-resistance grounding, used to limit ground-fault current on some industrial systems."],
      ["Incident energy", "The energy at a working distance during an arc flash, usually in cal/cm2 or J/cm2."],
      ["Interlock", "A device or circuit that prevents an unsafe or conflicting operation."],
      ["Lockout", "Applying a lock to an energy-isolating device to prevent re-energizing."],
      ["MCC", "Motor control centre: an assembly of motor starters and related equipment."],
      ["Megohmmeter", "An instrument that applies high DC voltage to measure insulation resistance."],
      ["Overload relay", "A device that opens a motor control circuit when the motor draws excessive current for too long."],
      ["PLC", "Programmable logic controller: an industrial computer for machine and process control."],
      ["Power factor", "The ratio of real power to apparent power in an AC circuit."],
      ["Proximity sensor", "A sensor that detects objects without contact, such as inductive or capacitive types."],
      ["Service factor", "A multiplier on a motor's rating for safe operation above nameplate for limited periods."],
      ["Slip", "The difference between synchronous and actual rotor speed in an induction motor."],
      ["Soft starter", "A device that gradually increases voltage to a motor at start to limit current and torque."],
      ["Synchronous speed", "The speed of the rotating magnetic field, equal to 120 x frequency / poles."],
      ["Test before touch", "The practice of verifying absence of voltage with a proven tester before working."],
      ["VFD", "Variable frequency drive: a device that varies motor speed by changing frequency and voltage."],
      ["Wye connection", "A three-phase connection where windings join at a common neutral point."]
    ],
    cards: [
      { front: "Steps of electrical isolation", back: "Identify, isolate, lock and tag, test for zero energy with a proven tester, then work." },
      { front: "Synchronous speed formula", back: "Ns = 120 x f / P. A 4-pole 60 Hz motor runs about 1800 rpm synchronous." },
      { front: "Three-phase line and phase relationship (wye)", back: "VLL = 1.732 x VLN. Line current equals phase current." },
      { front: "Three-phase power", back: "P = 1.732 x V x I x PF. kVA = 1.732 x V x I / 1000." },
      { front: "How to reverse a three-phase motor", back: "Swap any two line leads, with the circuit locked out." },
      { front: "4-20 mA live zero", back: "4 mA is the zero, so 0 mA signals a broken loop. 12 mA is the midpoint." },
      { front: "Overload versus short-circuit protection", back: "Overload relays protect against running overload. Fuses or breakers handle short circuits and ground faults." },
      { front: "CE Code section for motors", back: "Section 28, motors and generators. Section 10 is grounding and bonding." },
      { front: "Class I, II, III hazardous locations", back: "Class I: gases and vapours. Class II: combustible dusts. Class III: ignitable fibres and flyings." },
      { front: "Conduit offset multipliers", back: "10 degrees: 5.76. 22.5 degrees: 2.6. 30 degrees: 2.0. 45 degrees: 1.414." }
    ],
    jobsIntro: "Look for manufacturing plants, mines and mills, pulp and paper, oil and gas and chemical facilities, industrial electrical contractors, and unionized training centres.",
    tips: ["Bring a short resume, your safety tickets, and ID.", "Show interest in math, troubleshooting, and automation.", "Visit plants, shops, and union halls when you can, and follow up.", "Ask what tools and PPE you need and what the employer supplies."],
    forumTopics: ["Starting out", "Motors, drives, and starters", "PLCs and controls", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference: [
      {
        title: "Key electrical formulas",
        list: ["Ohm's law: V = I x R; I = V / R; R = V / I.", "Power: P = V x I = I<sup>2</sup>R = V<sup>2</sup>/R.", "Three-phase power: P = 1.732 x V<sub>L</sub> x I<sub>L</sub> x PF; apparent power S = 1.732 x V x I.", "Synchronous speed: N = 120 x f / poles.", "Slip (%) = (N<sub>s</sub> - N<sub>r</sub>) / N<sub>s</sub> x 100.", "Horsepower to watts: 1 hp = 746 W."],
        note: "Always confirm with equipment nameplates and the CE Code."
      },
      {
        title: "Synchronous speeds at 60 Hz",
        table: { head: ["Poles", "Synchronous speed (rpm)"], rows: [["2", "3600"], ["4", "1800"], ["6", "1200"], ["8", "900"], ["10", "720"]] }
      },
      {
        title: "EMT bending multipliers",
        intro: "Distance between bends for an offset equals the offset height multiplied by the cosecant of the bend angle.",
        table: { head: ["Bend angle", "Multiplier", "Shrink per inch of offset (approx.)"], rows: [["10 degrees", "5.76", "1/16 in"], ["22.5 degrees", "2.6", "3/16 in"], ["30 degrees", "2.0", "1/4 in"], ["45 degrees", "1.414", "3/8 in"], ["60 degrees", "1.155", "1/2 in"]] },
        note: "Take-up and shrink vary by bender. Check your bender's markings."
      },
      {
        title: "Canadian standards and CE Code pointers",
        list: ["CSA C22.1: Canadian Electrical Code, Part I. Check your province's adopted edition and amendments.", "Section 10: grounding and bonding. Section 28: motors and generators.", "Section 18: hazardous locations. Section 36: high-voltage installations.", "CSA Z462: workplace electrical safety. CSA Z460: control of hazardous energy (lockout).", "Provincial occupational health and safety regulations apply in addition to codes."]
      },
      {
        title: "4-20 mA scaling and quick conversions",
        intro: "Percent of span = (mA - 4) / 16 x 100.",
        table: { head: ["Signal", "Percent of span"], rows: [["4 mA", "0%"], ["8 mA", "25%"], ["12 mA", "50%"], ["16 mA", "75%"], ["20 mA", "100%"]] },
        note: "A 250 ohm resistor converts 4-20 mA to 1-5 V."
      },
      {
        title: "Troubleshooting a motor that will not start",
        list: ["Verify the lockout and isolation before opening any enclosure.", "Check control power, stop and start devices, interlocks, and overload status.", "Measure supply voltage at the starter with proper PPE and a rated meter.", "Test motor winding insulation and continuity, de-energized.", "Check the mechanical load and shaft for binding.", "Document findings and corrections."]
      }
    ]
  });
})();
