// Agricultural Equipment Technician content. Practice questions are original study aids, not official Red Seal exam questions.

(function () {
  // Builds a question with the correct option placed at a rotating position so answers are spread across A to D.
  const mk = (offset, list) => list.map(([q, a, w1, w2, w3, explain], i) => {
    const pos = (i * 3 + offset) % 4;
    const options = [w1, w2, w3];
    options.splice(pos, 0, a);
    return { q, options, answer: pos, explain };
  });

  const toolGroups = [
    {
      title: "Day-one tools, buy once and buy well",
      note: "Professional-grade tools that hold up around farm equipment, grease, and crop residue. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first, and what your dealership's tool policy is.",
      items: [
        { name: "Combination wrench set, metric and SAE (8 mm to 32 mm, 5/16 in to 1-1/4 in)", why: "Farm machinery mixes metric and imperial hardware, often on older equipment. Quality box ends do not round off bolts.", search: "GearWrench Snap-on combination wrench set metric SAE" },
        { name: "1/2 in and 3/8 in drive socket sets, 6-point, metric and SAE", why: "Six-point sockets protect bolt heads on implements, wheel hubs, and covers.", search: "1/2 inch 3/8 inch drive socket set 6 point metric SAE Tekton" },
        { name: "Breaker bar, extensions, and universal joints", why: "Reach and leverage for hardware tucked into frames and drivelines.", search: "1/2 inch breaker bar extension set universal joint socket" },
        { name: "Torque wrench, 1/2 in drive, click type (about 50 to 250 ft-lb)", why: "Wheel nuts, cylinder heads, and implement hardware have specified torque. Store it at its lowest setting.", search: "1/2 inch click torque wrench 250 ft lb CDI Tekton" },
        { name: "Pliers set: slip-joint, locking, needle-nose, snap-ring, and side cutters", why: "Cotter pins, hairpin clips, snap rings, and wire work come up constantly on implements.", search: "Knipex pliers set snap ring pliers locking pliers side cutters" },
        { name: "Hammer set: ball-peen, dead-blow, and a 3 lb hand sledge, with punches and drifts", why: "Driving and removing pins, bushings, and chain pins is common on farm equipment.", search: "dead blow hammer ball peen hammer 3 lb sledge punch drift set" },
        { name: "Screwdriver set, pry bars, and a chain breaker and rivet tool", why: "Roller chain on balers, headers, and drives is repaired in the field. A chain breaker saves time.", search: "screwdriver set pry bar roller chain breaker tool" },
        { name: "CSA-approved safety boots, safety glasses, hearing protection, and gloves", why: "Look for the green CSA triangle on boots. Dust, noise, and sharp metal are part of every day.", search: "CSA safety boots Mechanix gloves safety glasses earmuffs" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up in your shop and what the service truck already carries.",
      items: [
        { name: "Digital multimeter with min/max (such as Fluke or Klein)", why: "Voltage, resistance, and continuity checks on sensors, harnesses, and charging circuits. Choose a CAT III-rated meter.", search: "Fluke 117 digital multimeter automotive Klein MM720" },
        { name: "Grease gun and flexible extension, with spare couplers", why: "Dozens of grease points on every machine. A good gun and a hose reach awkward zerks.", search: "Lincoln grease gun 14 oz pistol grip flexible hose coupler" },
        { name: "Hydraulic pressure gauge kit with quick-connect fittings", why: "Hydraulic and hitch faults need pressure readings. Choose a range that covers the working pressure.", search: "hydraulic pressure test gauge kit 5000 psi quick connect tractor" },
        { name: "Cordless 1/2 in impact wrench", why: "Fast and portable for fieldwork on large hardware. Pick one battery platform and stay with it.", search: "Milwaukee M18 FUEL 1/2 inch impact wrench DeWalt 20V" },
        { name: "Feeler gauges, calipers, and a micrometer", why: "Measuring valve lash, bearing wear, and shaft diameters tells you if a part is serviceable.", search: "Mitutoyo digital caliper micrometer feeler gauge set" },
        { name: "Belt tension gauge and a straightedge for sheave alignment", why: "Belts and drives on balers, mowers, and combines fail early if mis-tensioned or misaligned.", search: "belt tension gauge straightedge sheave alignment tool" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the dealership or employer. Ask before buying, and learn the training that comes with each tool.",
      items: [
        { name: "OEM diagnostic software and adapters (John Deere Service ADVISOR, Case IH EST, New Holland, AGCO, or similar)", why: "Reads fault codes, calibrates controllers, and updates software. Normally dealer-licensed.", search: "Nexiq USB-Link 3 diagnostic adapter agricultural equipment" },
        { name: "GPS and guidance calibration equipment", why: "Setup of receivers, correction signals, and steering is a growing part of the job. Usually supplied by the dealer.", search: "GNSS receiver tester RTK base station calibration tools" },
        { name: "Hydraulic hose crimper and hose cutting saw", why: "Field hose repair gets equipment back to work, but crimping needs training and the correct dies.", search: "portable hydraulic hose crimper hose cut off saw" },
        { name: "Press, bearing puller, and seal driver sets", why: "Used for pins, bushings, bearings, and seals. Shops usually own the large presses.", search: "bearing puller set seal driver set press" },
        { name: "Welding and cutting equipment (MIG, stick, oxy-fuel or plasma)", why: "Repairs to implements and frames are common. Usually shop-supplied, with hot work training and fire watch.", search: "Lincoln Miller MIG welder 230V plasma cutter" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for hydraulics, electrical, and diagnostics study. Check with your school and your exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Rates, area, ratios, and unit conversions come up in calibration and hydraulics.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Mechanical pencil (0.5 mm) and spare leads", why: "Clean notes and sketches of circuits and hydraulic schematics.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm lead refills" },
        { name: "Hydraulic and electrical symbol reference card", why: "You will read these symbols on every service schematic.", search: "hydraulic symbols reference chart card" },
        { name: "Coloured pencils or pens", why: "Colour pressure, return, and pilot lines when tracing schematics.", search: "coloured pencils set pens 12 colours" },
        { name: "Field notebook (Rite in the Rain)", why: "Weatherproof paper for serial numbers, settings, and torque specs.", search: "Rite in the Rain field notebook" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by system: engine, hydraulics, electrical, power train, implements. It also helps with Red Seal review.", search: "binder dividers highlighters" },
        { name: "Steel ruler (30 cm) and graph paper", why: "Sketching components and plotting calibration data.", search: "30 cm steel ruler graph paper pad" }
      ]
    }
  ];

  const mediaGroups = [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work, plus the occupational standard and exam information for your trade.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Workplace safety, WHMIS, and hazard information in plain language.", url: "https://www.ccohs.ca/" },
        { name: "Agriculture and Agri-Food Canada", desc: "Federal information on agriculture and agri-food in Canada.", url: "https://agriculture.canada.ca/" },
        { name: "Canadian Federation of Agriculture", desc: "National farm organization with news on the industry.", url: "https://www.cfa-fca.ca/" },
        { name: "American Society of Agricultural and Biological Engineers (ASABE)", desc: "Publisher of agricultural machinery standards used in North America.", url: "https://www.asabe.org/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials, manufacturer service information, and provincial rules.",
      items: [
        { name: "Tractor PTO and three-point hitch", desc: "How PTO shafts and hitch categories work.", url: "https://www.youtube.com/results?search_query=tractor+PTO+three+point+hitch+categories+explained" },
        { name: "Tractor hydraulic system basics", desc: "Open-centre, closed-centre, and remote valves on tractors.", url: "https://www.youtube.com/results?search_query=tractor+hydraulic+system+open+centre+closed+centre+explained" },
        { name: "Combine harvester operation", desc: "Threshing, separation, and cleaning explained.", url: "https://www.youtube.com/results?search_query=combine+harvester+how+it+works+threshing+separating+cleaning" },
        { name: "Field sprayer calibration", desc: "Nozzles, pressure, and application rate.", url: "https://www.youtube.com/results?search_query=field+sprayer+calibration+nozzle+flow+application+rate" },
        { name: "Planter setup and seed metering", desc: "Seed meters, row units, and population.", url: "https://www.youtube.com/results?search_query=planter+seed+meter+row+unit+setup+explained" },
        { name: "GPS auto-steer and precision agriculture", desc: "GNSS, RTK, and guidance basics.", url: "https://www.youtube.com/results?search_query=GPS+auto+steer+RTK+precision+agriculture+explained" },
        { name: "Round baler maintenance", desc: "Belts, chains, and net wrap service.", url: "https://www.youtube.com/results?search_query=round+baler+maintenance+belts+chains+knotter" },
        { name: "Diesel emissions on farm tractors", desc: "DPF, SCR, and DEF on Tier 4 tractors.", url: "https://www.youtube.com/results?search_query=Tier+4+tractor+DPF+SCR+DEF+explained" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for farm equipment work yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: farm equipment technician podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=farm+equipment+technician+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do in the shop and field.",
      items: [
        { name: "YouTube: ag equipment mechanic podcast", desc: "Shop and field talk on repairs and diagnostics.", url: "https://www.youtube.com/results?search_query=ag+equipment+mechanic+podcast+diagnostics" },
        { name: "YouTube: tractor hydraulics troubleshooting (listen-along)", desc: "Talks on hydraulic faults to hear on the commute.", url: "https://www.youtube.com/results?search_query=tractor+hydraulics+troubleshooting+podcast" },
        { name: "YouTube: combine setup and troubleshooting (audio)", desc: "Seasonal setup and in-field problem solving.", url: "https://www.youtube.com/results?search_query=combine+setup+troubleshooting+podcast+technician" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, precision ag, and shop leadership.",
      items: [
        { name: "YouTube: Red Seal agricultural equipment technician exam prep", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+agricultural+equipment+technician+exam+preparation" },
        { name: "YouTube: precision agriculture technology podcast", desc: "Guidance, telematics, and data systems in modern farming.", url: "https://www.youtube.com/results?search_query=precision+agriculture+technology+podcast+farm+equipment" },
        { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
      ]
    }
  ];

  const practiceBank = {
    1: mk(3, [
      ["A power take-off (PTO) shaft must always be:", "Fully guarded, with shields in place and in good condition", "Left unshielded whenever the implement is run at low speed in the field", "Cleaned while turning", "Stepped over while running", "Entanglement in PTO shafts causes severe and fatal injuries."],
      ["Before servicing an implement you should:", "Shut off the engine, remove the key, and wait for all motion to stop", "Reach in while it idles", "Adjust the belts and chains while the engine idles, as long as you stay clear of the pulleys", "Clear plugged parts with the PTO engaged", "Stored energy and moving parts injure people who skip shutdown steps."],
      ["Where do you find the hazards and first-aid measures for a product like hydraulic fluid?", "The Safety Data Sheet (SDS)", "The supplier's delivery invoice kept in the office", "The parts book", "The warranty card", "The SDS covers hazards, handling, and first aid."],
      ["ROPS on a tractor stands for:", "Rollover protective structure", "Rotating power transfer system", "Remote operating panel", "Rated operating pressure", "A ROPS with a seat belt greatly improves survival in a rollover."],
      ["A tractor with a ROPS should be operated:", "With the seat belt fastened", "With the belt off for quick exit", "With a passenger on the fender", "Without the ROPS raised", "The ROPS and belt work together to keep the operator in the protected zone."],
      ["How many millimetres are in one inch?", "25.4", "2.54", "10", "254", "1 in = 25.4 mm exactly."],
      ["A torque wrench is used to:", "Tighten fasteners to a specified torque", "Loosen seized bolts without damaging the threads", "Measure bolt length", "Check thread pitch", "Specified torque prevents under- or over-tightening."],
      ["100 lb-ft is about how many newton-metres?", "136 N-m", "74 N-m", "14 N-m", "1360 N-m", "1 lb-ft is about 1.356 N-m."],
      ["Lockout/tagout is used to:", "Keep energy sources off while servicing equipment", "Label tools", "Order replacement parts for the machine being repaired", "Track hours", "It prevents accidental start-up or release of stored energy."],
      ["Four-stroke engine order is:", "Intake, compression, power, exhaust", "Intake, power, compression, exhaust", "Compression, intake, exhaust, power", "Exhaust, intake, power, compression", "Air in, compress, burn, exhaust out."],
      ["Hydraulic fluid escaping from a pinhole leak can:", "Inject through the skin and cause severe injury", "Only stain clothing and leave no lasting harm to the skin", "Be safely wiped by hand", "Cool the skin", "Never feel for leaks by hand. Use cardboard and get medical help for any injection."],
      ["A fire extinguisher class suited to flammable liquids such as diesel is:", "Class B", "Class A", "Class D", "Class K", "Class B is for flammable liquids."],
      ["Before disconnecting a battery, which terminal do you remove first?", "Negative", "Positive", "Either", "Neither: use a cutter", "Removing negative first lowers the risk of a short to the frame."],
      ["What does the slow-moving vehicle (SMV) emblem do?", "Warns other road users of a slow vehicle", "Marks the fuel tank as holding farm diesel", "Shows engine size", "Indicates four-wheel drive", "It is the orange triangle on the rear of slow farm equipment on roads."],
      ["Which type of mark on a bolt head shows an SAE grade 5 bolt?", "Three radial lines", "No marks", "Six radial lines", "A single dot", "Grade 5 has three lines. Grade 8 has six."],
      ["A 10.9 on a bolt head indicates:", "A metric property class of high strength", "A thread pitch of 10.9 mm", "A 10.9 mm bolt diameter measured across the threads", "A left-hand thread", "Metric classes such as 8.8, 10.9, and 12.9 tell strength."],
      ["Ohm's law: 12 V across a 3 ohm load gives a current of:", "4 A", "36 A", "0.25 A", "9 A", "I = V / R = 12 / 3 = 4 A."],
      ["Used oil, filters, and coolant must be:", "Collected and disposed of as regulated waste", "Poured on the ground away from any buildings or wells", "Burned on site", "Left in the pan", "Fluids are environmental hazards. Follow provincial rules and company procedures."]
    ]),
    2: mk(0, [
      ["The two common standard PTO speeds on tractors are:", "540 and 1000 rpm", "300 and 600 rpm", "800 and 1200 rpm", "1500 and 2000 rpm", "540 and 1000 rpm are standard, and the implement must match the speed."],
      ["A standard 540 rpm PTO shaft usually has how many splines?", "6", "21", "12", "4", "The 540 shaft typically has 6 splines. The 1000 rpm shafts have 21 or 20."],
      ["Three-point hitch categories (1, 2, 3, 4) differ mainly by:", "Pin sizes and lift capacity", "Colour coding and paint finish of the arms", "Engine size", "Tire type", "Categories match implements to the tractor's hitch size and power."],
      ["A drawbar is used for:", "Pulling towed implements", "Mounting implements on the three-point", "Powering a PTO", "Adjusting tire pressure", "Towed equipment attaches to the drawbar."],
      ["A hydraulic relief valve in a tractor system:", "Limits maximum system pressure", "Increases pump flow when the load rises", "Filters oil", "Cools oil", "It opens to protect components from excess pressure."],
      ["A selective control valve (SCV) on a tractor:", "Provides hydraulic outlets for implements", "Filters dust from the air entering the engine intake", "Controls PTO speed", "Charges the battery", "SCVs direct oil to remote cylinders and motors."],
      ["A tractor universal fluid (UTTO) is commonly used for:", "Shared transmission and hydraulic systems", "Engine crankcase oil in diesel engines only", "Fuel", "Coolant", "Many tractors share one sump for transmission and hydraulics."],
      ["Roller chain number 60 has a pitch of:", "3/4 in", "1/2 in", "5/8 in", "1 in", "The chain number divided by 8 gives the pitch in inches. 60 is 6/8 = 3/4 in."],
      ["Too much tension on a V-belt causes:", "Early bearing and belt wear", "Longer belt life with cooler bearings and quieter running", "Cooler running", "Quieter operation", "Over-tension overloads bearings and belts."],
      ["A slipping belt is often a sign of:", "Low tension, wear, or oil contamination", "Good alignment", "Overinflated tires on the drive wheels of the tractor", "A full tank", "Check tension and cleanliness first."],
      ["Sprayer application rate in L/ha equals:", "Nozzle flow in L/min × 600 ÷ (speed in km/h × nozzle spacing in m)", "Flow × speed × 600", "Speed ÷ flow", "Flow ÷ speed ÷ 60", "The 600 converts minutes, hectares, and kilometres. A 1 L/min nozzle at 10 km/h on 0.5 m spacing gives 120 L/ha."],
      ["Seeds per hectare with 0.76 m rows and 0.15 m seed spacing is about:", "87 700", "50 000", "130 000", "10 000", "10 000 m² ÷ (0.76 × 0.15) ≈ 87 700."],
      ["A planter's seed meter is used to:", "Singulate and deliver seeds at a set rate", "Fill the hopper quickly from the seed tender", "Raise the row unit", "Close the furrow", "Accurate metering controls population and spacing."],
      ["On a combine, the concave and cylinder or rotor are used to:", "Thresh grain from the straw or stems", "Spread fertilizer evenly across the field", "Cut the crop", "Cool the engine", "Threshing separates kernels from the plant."],
      ["The combine's chaffer and sieves are used for:", "Cleaning grain by separating chaff", "Cutting the crop", "Cutting the crop at the right stubble height", "Cooling oil", "Air and sieve action clean grain."],
      ["Four-wheel drive on a tractor is commonly called:", "MFWD (mechanical front-wheel drive)", "PTO", "SCV (selective control valve) outlets", "CVT", "MFWD sends power to the front axle on demand."],
      ["Which fire risk is common on combines and balers?", "Crop residue buildup around hot parts and bearings", "Freezing of hydraulic hoses during very cold weather", "Clean machines", "Fresh paint", "Regular cleaning and checking bearings reduce fire risk."],
      ["Tire inflation on farm tires should be set to:", "The pressure recommended for the load and field or road use", "The maximum pressure on the sidewall for every job, in all conditions", "Zero", "A random value", "Correct inflation protects tires and reduces soil compaction."]
    ]),
    3: mk(1, [
      ["Open-centre hydraulic systems:", "Let pump flow return to tank when valves are in neutral", "Block pump flow in neutral so pressure builds in the system", "Use no pump", "Cannot run cylinders", "Open centre circulates oil at low pressure when idle."],
      ["A closed-centre, pressure-compensated system:", "Maintains pressure and varies pump flow to meet demand", "Never builds pressure", "Uses only fixed-displacement gear pumps with a constant flow", "Has no valves", "Variable-displacement pumps hold pressure and give flow on demand."],
      ["Hydraulic pump flow is measured in:", "Litres per minute (or US gpm)", "Kilopascals, a measure of pressure", "Newton-metres", "Degrees", "Pressure is kPa or MPa, while flow is volume over time."],
      ["The main reason hydraulic filters are changed on schedule is to:", "Remove contamination that wears pumps and valves", "Add pressure to the system for stronger lift power", "Cool oil", "Reduce flow", "Clean oil protects components."],
      ["A tractor's three-point hitch lift arms are raised by:", "A hydraulic lift cylinder", "A mechanical chain and sprocket drive", "The PTO shaft", "The battery", "Hydraulic cylinders (or a lift cover) raise the lower links."],
      ["A CVT (continuously variable transmission) on a tractor:", "Provides stepless speed changes", "Has six fixed gear ratios with a manual shift lever only", "Uses no hydraulics", "Is a manual shift only", "CVTs blend hydrostatic and mechanical drive for seamless speed."],
      ["A common cause of poor power and black smoke on a turbocharged diesel is:", "A restricted air filter or intake", "Too much coolant in the overflow bottle", "A full tank", "Low tire pressure", "Restricted air gives a rich mixture and low boost."],
      ["Diesel exhaust fluid (DEF) is about:", "32.5 percent urea in deionized water", "Methanol and water", "Pure ammonia stored under pressure in the tank", "Diesel and oil", "DEF feeds the SCR catalyst to reduce NOx."],
      ["The ISOBUS standard used on tractors and implements is:", "ISO 11783", "ISO 9001", "ISO 4406", "ISO 14001", "ISO 11783 allows compatible equipment to share a virtual terminal and controls."],
      ["RTK GNSS corrections are used to:", "Improve guidance accuracy to the centimetre level", "Increase engine power under heavy field loads", "Measure fuel", "Clean the air", "RTK provides high-precision positioning for auto-steer."],
      ["A combine header's reel speed is typically set:", "Slightly faster than ground speed, adjusted for crop and conditions", "Much slower than ground speed so the crop drops gently on the cutterbar", "At zero", "At engine speed", "Reel speed is adjusted to feed crop into the cutter bar properly."],
      ["Baler knotter failures are often caused by:", "Dirty or worn parts and incorrect timing or twine tension", "Too much hydraulic oil pressure reaching the baler pickup and drive", "Full fuel", "Correct timing", "Knotters need clean, correct setup and good twine."],
      ["Wheel weights or liquid ballast on a tractor:", "Improve traction and stability when properly matched to the load", "Reduce traction on soft ground and make the machine easier to steer", "Replace brakes", "Raise fuel economy always", "Ballast must match the work. Too much compacts soil and wastes fuel."],
      ["A parasitic battery drain test is done with:", "The key off and an ammeter in series", "The engine running at fast idle with the lights on", "Jumper cables", "A voltmeter across the starter", "Current drain with everything off reveals a faulty circuit."],
      ["Hydraulic oil that looks milky usually indicates:", "Water or air contamination", "Fresh oil", "Overfilling of the reservoir past the sight glass", "High pressure", "Milky oil needs to be investigated and the source fixed."],
      ["Which sensor is used by a modern engine to measure the amount of air entering the intake?", "Mass airflow or manifold pressure sensor", "Fuel rail pressure sensor in the injector line", "Wheel speed sensor", "Belt tension sensor", "Air measurement helps the ECM control fuelling."],
      ["Preventive maintenance in ag equipment is most important:", "Before the busy season, such as planting and harvest", "After the season only, once all of the machines are parked", "Never", "Only when something breaks", "Pre-season service avoids breakdowns when time is critical."]
    ]),
    4: mk(2, [
      ["A tractor loses hydraulic lift power. After checking oil level and filters, the next best step is:", "Test pump flow and relief pressure with a gauge", "Replace the engine and rebuild the whole hydraulic system", "Replace the tires", "Ignore it", "Measure first, then replace the failed component."],
      ["When you calibrate a sprayer, you typically verify:", "Nozzle output, pressure, speed, and area covered", "Tire pressure, engine hours, and tractor seat position", "Engine hours", "Operator weight", "Application rate depends on flow, speed, and spacing."],
      ["Which of these is a key step during planter setup?", "Checking seed meter, row unit down pressure, and depth settings", "Repainting the frame and greasing the hitch pins before every field use", "Changing the engine oil only", "Removing the hitch", "Correct setup improves emergence and yield."],
      ["Welding on a tractor with electronic modules requires you to:", "Follow manufacturer steps such as disconnecting batteries and modules", "Leave the batteries and modules connected and ground near the controller", "Weld at maximum amperage", "Remove only the radio", "Welding currents can destroy electronics."],
      ["A fault code points to a sensor circuit. The best next step is:", "Test the wiring, connector, and sensor before replacing parts", "Replace the ECM first, since modules fail more often than wiring", "Clear the code and move on", "Cut the harness", "Many sensor faults are wiring or connector problems."],
      ["A Pre-Delivery Inspection (PDI) is used to:", "Make sure a new machine is complete and set up before it goes to the customer", "Sell the customer extra parts and accessories before the machine is delivered", "Paint the machine", "Record fuel price", "A PDI finds shipping damage and setup issues."],
      ["When a combine shows high grain loss, you should:", "Check settings such as speeds, concave clearance, and fan against the operator's manual and crop conditions", "Increase ground speed only", "Turn off the monitor", "Ignore it", "Loss depends on adjustment and crop. Use the manual as a starting point."],
      ["When working in or near a grain bin, you must never:", "Enter while augers run or grain is flowing", "Use lockout and tagout on the unloading auger controls", "Wear a harness", "Ventilate", "Flowing grain can trap and bury a person within seconds."],
      ["Software updates on machine controllers usually require:", "Manufacturer-approved tools and a stable power supply", "Any spare laptop and a generic cable from the parts counter", "A paper clip", "No power", "Interrupted power can corrupt the module."],
      ["Which statement about emission controls on farm tractors is correct?", "Removing or defeating them is not allowed and can cause serious problems", "They can be removed to save fuel", "They are optional once the machine is out of its warranty period or sold", "They never fail", "Tampering with emissions equipment is prohibited."],
      ["A root cause analysis aims to:", "Find the underlying failure so it does not recur", "Assign blame to the last technician who worked on the machine", "Order more parts", "Reduce paperwork", "Treating only symptoms leads to repeat failures."],
      ["Good documentation of a repair includes:", "Complaint, cause, correction, parts, and hours", "Only the part number and the price of the new part", "The invoice only", "Operator's name only", "Records support warranty and future diagnosis."],
      ["When a customer reports a machine problem, the first step is to:", "Gather details about the symptoms, conditions, and history", "Replace the most likely part right away to save the customer time", "Clear the codes", "Quote a price", "Good information leads to faster repairs."],
      ["Seasonal planning for a service department commonly involves:", "Scheduling inspections and parts stock ahead of planting and harvest", "Avoiding any preparation until the first machines break down in the field", "Waiting for breakdowns", "Ordering parts at harvest only", "Peak seasons leave little time for repairs."],
      ["Precision agriculture data such as yield maps and prescriptions:", "Depend on correct calibration of sensors and guidance", "Need no calibration once the sensors have been installed", "Replace service work", "Are not stored", "Bad calibration gives bad data."],
      ["A hydraulic accumulator or cylinder under load should be:", "Relieved and blocked before servicing", "Left pressurized so the parts stay in place", "Cut open to check", "Heated", "Stored energy can cause injury if released."],
      ["If a machine has a safety-related defect, you should:", "Tag it out of service and report it", "Send it back to work with a warning", "Fix it later", "Ignore the defect", "Unsafe machines must not be operated."],
      ["Choosing between rebuilding and replacing a component depends on:", "Cost, downtime, warranty, and the condition of the core", "Paint colour", "The operator's personal preference and the paint colour of the part", "Tool brand", "Total cost and availability drive the decision."]
    ])
  };

  const roadmapSteps = [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get safety training employers ask for (commonly WHMIS and farm or shop safety orientation; requirements vary)", "Prepare a resume and apply to equipment dealerships, farm equipment manufacturers, and service shops", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: shop safety and basics", items: ["Learn shop safety, lockout, PTO and guarding safety, and fluids handling", "Do predelivery inspections and preventive maintenance: greasing, filters, fluids, belts", "Learn measuring tools, torque, and fasteners", "Study electrical basics and charging systems", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: tractors and implements", items: ["Service tractor drivelines, hitches, and PTOs", "Learn hydraulic components and read basic schematics", "Maintain and repair tillage, seeding, and hay equipment", "Use pressure gauges and take readings correctly"] },
    { title: "Year 3: harvest and application equipment", items: ["Set up and service combines, headers, and balers", "Calibrate sprayers and planters", "Diagnose diesel engine and fuel system problems", "Use electronic diagnostic tools to read and interpret fault codes"] },
    { title: "Year 4 and beyond: advanced diagnostics and precision ag", items: ["Diagnose complex electronic, hydraulic, and network faults", "Set up and calibrate guidance, ISOBUS, and data systems", "Handle aftertreatment and Tier 4 systems", "Mentor first-year apprentices and use the Red Seal standard to find gaps"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal exam information and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ];

  const glossary = [
    ["Baler", "A machine that compresses hay or straw into bales."],
    ["Ballast", "Weight added to a tractor to improve traction and stability."],
    ["Concave", "The curved grate under a combine cylinder or rotor where grain is threshed."],
    ["CVT", "Continuously variable transmission, which gives stepless speed changes."],
    ["Cylinder (combine)", "A rotating drum with rasp bars that threshes grain against the concave."],
    ["DEF", "Diesel exhaust fluid, a urea and water solution used by SCR systems."],
    ["Down pressure", "Force applied to a planter row unit to hold depth in the soil."],
    ["Drawbar", "A bar at the rear of a tractor for hitching towed implements."],
    ["ECM", "Engine control module, the computer that manages the engine."],
    ["Header", "The front attachment of a combine that cuts and feeds the crop."],
    ["Hitch category", "Size classification (1 to 4) for three-point hitch pins and linkage."],
    ["ISOBUS", "ISO 11783, a communications standard that lets tractors and implements work together."],
    ["Knotter", "The mechanism on a square baler that ties twine around a bale."],
    ["Lockout/tagout", "A procedure that keeps energy sources off while equipment is serviced."],
    ["MFWD", "Mechanical front-wheel drive on a tractor."],
    ["Nozzle", "The tip on a sprayer boom that controls droplet size and flow."],
    ["PDI", "Pre-delivery inspection, done on new equipment before it goes to the customer."],
    ["Pitch (chain)", "The distance between roller chain pins, measured in eighths of an inch for ANSI chain."],
    ["PTO", "Power take-off, a rotating shaft that drives implements, usually at 540 or 1000 rpm."],
    ["Rate controller", "An electronic controller that adjusts seeding, spraying, or spreading rates."],
    ["Relief valve", "A valve that limits maximum hydraulic system pressure."],
    ["ROPS", "Rollover protective structure that protects the operator in a rollover."],
    ["RTK", "Real-time kinematic GNSS correction that gives centimetre-level accuracy."],
    ["SCR", "Selective catalytic reduction, which uses DEF to reduce NOx."],
    ["SCV", "Selective control valve, a tractor hydraulic outlet for implements."],
    ["SDS", "Safety Data Sheet, the 16-section document describing a product's hazards and handling."],
    ["Seed meter", "The device in a planter that singulates seeds at a set rate."],
    ["SMV emblem", "Slow-moving vehicle sign, an orange triangle for slow equipment on roads."],
    ["Spline", "A groove or ridge on a shaft that transmits torque to a mating part."],
    ["Three-point hitch", "A tractor linkage with two lower arms and a top link for mounted implements."],
    ["UTTO", "Universal tractor transmission oil, shared by transmission and hydraulics."],
    ["WHMIS", "Workplace Hazardous Materials Information System, Canada's hazard communication standard."]
  ];

  const reference = [
    {
      title: "Conversions",
      list: [
        "1 in = 25.4 mm, and 1 ft = 304.8 mm",
        "1 psi ≈ 6.895 kPa, 1 bar = 100 kPa ≈ 14.5 psi, and 1 MPa ≈ 145 psi",
        "1 lb-ft ≈ 1.356 N-m, and 1 N-m ≈ 0.738 lb-ft",
        "1 hectare = 10 000 m² ≈ 2.47 acres, and 1 acre ≈ 0.405 ha",
        "1 US gallon ≈ 3.785 L, and 1 Imperial gallon ≈ 4.546 L",
        "1 bu/ac of wheat ≈ 67.25 kg/ha, and 1 km/h ≈ 0.621 mph"
      ]
    },
    {
      title: "Calibration formulas",
      list: [
        "Sprayer rate (L/ha) = nozzle flow (L/min) × 600 ÷ (speed in km/h × nozzle spacing in m)",
        "Example: 1.0 L/min nozzle, 0.5 m spacing, 10 km/h gives 600 ÷ 5 = 120 L/ha",
        "Seeds per hectare = 10 000 ÷ (row spacing in m × seed spacing in m)",
        "Example: 0.76 m rows (30 in) and 0.15 m seed spacing gives about 87 700 seeds/ha",
        "Ground speed (km/h) = distance (m) ÷ time (s) × 3.6",
        "Area covered (ha/h) = speed (km/h) × width (m) ÷ 10"
      ],
      note: "Always follow the manufacturer and product label for rates. Field efficiency reduces real coverage."
    },
    {
      title: "PTO and three-point hitch",
      table: {
        head: ["Item", "Common values"],
        rows: [
          ["PTO speeds", "540 rpm (6-spline shaft) and 1000 rpm (21-spline or 20-spline shaft)"],
          ["Category 1 lower link pin", "7/8 in (about 22 mm)"],
          ["Category 2 lower link pin", "1-1/8 in (about 29 mm)"],
          ["Category 3 lower link pin", "1-7/16 in (about 37 mm)"],
          ["Category 4 lower link pin", "2 in (about 51 mm)"]
        ]
      },
      note: "Match the implement's PTO speed and hitch category to the tractor. Check the manufacturer's data."
    },
    {
      title: "Roller chain size and bolt grades",
      table: {
        head: ["Item", "Rule or value"],
        rows: [
          ["Chain number 40", "1/2 in pitch (number ÷ 8)"],
          ["Chain number 50", "5/8 in pitch"],
          ["Chain number 60", "3/4 in pitch"],
          ["SAE grade 5 bolt", "Three radial lines on the head"],
          ["SAE grade 8 bolt", "Six radial lines on the head"],
          ["Metric classes", "8.8, 10.9, and 12.9 are marked on the head, and higher is stronger"]
        ]
      },
      note: "Use the torque specifications for the exact bolt grade and lubrication condition."
    },
    {
      title: "Hydraulic and electrical basics",
      list: [
        "Force = pressure × area, and cylinder speed = flow ÷ area",
        "A pump creates flow, and pressure results from resistance to flow",
        "Open-centre systems circulate oil at low pressure when valves are neutral",
        "Closed-centre systems hold pressure and vary pump flow",
        "Ohm's law: V = I × R, and power: P = V × I",
        "Batteries in series add voltage. In parallel they add capacity"
      ]
    },
    {
      title: "Safety and standards pointers",
      list: [
        "<strong>WHMIS and SDS:</strong> labels and 16-section data sheets for shop chemicals",
        "<strong>Provincial occupational health and safety regulations:</strong> lockout, guarding, fall protection, and confined space rules",
        "<strong>ROPS and seat belt:</strong> use together, and do not modify a ROPS without manufacturer approval",
        "<strong>PTO and implement shielding:</strong> replace missing shields before returning machines to service",
        "<strong>Grain bins and manure pits:</strong> entrapment and toxic gas hazards require procedures and training",
        "<strong>Manufacturer service information:</strong> torque specs, test pressures, and procedures for your equipment"
      ],
      note: "Confirm which edition and standard your province and employer use."
    }
  ];

  registerTrade({
  introVideo: { id: "a6s2EULCZAE", title: "Intro video: Agricultural Equipment Technician" },
    id: "agricultural-equipment-technician",
    store: "agricultural-equipment-technician",
    title: "Agricultural Equipment Technician",
    name: "Agricultural Equipment Technician",
    short: "agricultural equipment repair",
    category: "Agriculture · Equipment · Diesel",
    summary: "Agricultural equipment technicians service, diagnose, and repair tractors, combines, sprayers, planters, and implements, including their engines, hydraulics, electronics, and guidance systems.",
    work: "You work in dealership shops and out in the field, with busy seasons around planting and harvest. Days mix preventive maintenance, hydraulics, diesel engines, and electronics. Timely, accurate repairs matter because farmers depend on their machines at critical moments.",
    duration: "Usually 3–5 years (Job Bank), varies by province",
    union: "Provincial equipment dealers and agricultural associations",
    unionUrl: undefined,
    profileUrl: "https://red-seal.ca/eng/trades/agri-equip-tech.shtml",
    durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/26452/ca",
    jobSearch: "agricultural equipment technician apprentice",
    journeySearch: "agricultural equipment technician",
    aliases: "farm equipment mechanic ag mechanic tractor mechanic combine technician red seal 311a implement technician precision ag technician",
    tools: ["Combination wrenches, metric and SAE", "1/2 in socket set and torque wrench", "Digital multimeter", "Pliers, hammers, and chain breaker", "Grease gun and hydraulic gauge kit", "CSA safety boots, glasses, and gloves"],
    insight: {
      skills: ["Mechanical, hydraulic, and electronic troubleshooting", "Reading schematics and service manuals", "Working to seasonal deadlines", "Customer communication and documentation"],
      hazards: ["PTO shafts and moving parts: shut down, remove the key, and wait for all motion to stop", "Stored hydraulic and spring energy: relieve and block before working", "Rollovers and heavy lifts: use ROPS, seat belts, and rated lifting equipment", "Crop dust, noise, and fire risk: wear PPE and keep machines clean"],
      settings: ["Equipment dealerships and service shops", "Mobile field service", "Farm operations with their own shops", "Equipment manufacturers and distributors"]
    },
    toolGroups,
    mediaGroups,
    practiceBank,
    roadmapSteps,
    glossary,
    cards: [
      { front: "Standard PTO speeds", back: "540 rpm and 1000 rpm" },
      { front: "Sprayer rate formula", back: "L/ha = L/min × 600 ÷ (km/h × nozzle spacing in m)" },
      { front: "Seeds per hectare", back: "10 000 ÷ (row spacing in m × seed spacing in m)" },
      { front: "Roller chain pitch", back: "Chain number ÷ 8 = pitch in inches (60 is 3/4 in)" },
      { front: "SAE grade 8 bolt head marking", back: "Six radial lines" },
      { front: "What creates hydraulic pressure?", back: "Resistance to flow. A pump creates flow." },
      { front: "ISOBUS standard number", back: "ISO 11783" },
      { front: "Before servicing an implement", back: "Shut off, remove the key, lock out, and wait for all motion to stop." },
      { front: "What does RTK provide?", back: "Centimetre-level GNSS guidance accuracy" },
      { front: "lb-ft to N-m", back: "1 lb-ft ≈ 1.356 N-m" }
    ],
    jobsIntro: "Look for farm equipment dealerships, equipment manufacturers' service centres, independent ag repair shops, large farms with their own shops, and custom application companies.",
    tips: ["Bring a short resume, your safety tickets, and a valid driver's licence.", "Show interest in machinery, hydraulics, and working with farm customers.", "Visit dealerships in person when you can, and follow up before the busy season.", "Ask what tools you need and what the employer supplies."],
    forumTopics: ["Starting out", "Tractors, PTO, and hydraulics", "Combines, planters, and sprayers", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference
  });
})();
