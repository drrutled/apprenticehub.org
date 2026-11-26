// Truck and Transport Mechanic content. Practice questions are original study aids, not official Red Seal exam questions.

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
      note: "Professional-grade tools that hold up around heavy fasteners and grease. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first, and what the shop's tool-box policy is.",
      items: [
        { name: "Combination wrench set, metric and SAE (8 mm to 32 mm, 1/4 in to 1-1/4 in)", why: "Trucks mix metric and imperial fasteners. Ratcheting or 12-point box ends give leverage without rounding bolts.", search: "GearWrench Snap-on combination wrench set metric SAE" },
        { name: "1/2 in drive socket set, 6-point, deep and standard, metric and SAE", why: "Six-point sockets grip heavy hardware without rounding it. Deep sockets reach long studs on wheel ends and U-bolts.", search: "1/2 inch drive socket set 6 point metric SAE deep Williams Tekton" },
        { name: "3/8 in drive ratchet and socket set", why: "Lighter work around sensors, covers, and electrical connections where a big ratchet is clumsy.", search: "3/8 inch drive socket set ratchet GearWrench" },
        { name: "Torque wrench, 1/2 in drive, click type (about 50 to 250 ft-lb)", why: "Wheel nuts, U-bolts, and engine hardware have specified torque. A quality wrench kept in its case stays accurate.", search: "1/2 inch drive click torque wrench 250 ft lb CDI Tekton" },
        { name: "Screwdriver set and pry bars", why: "Hardened tips and bars handle linkages, trim, and seals without bending or cam-out.", search: "Wera Klein screwdriver set pry bar set" },
        { name: "Pliers set: slip-joint, locking, needle-nose, and side cutters", why: "Everyday gripping, cotter pins, clips, and wire work. Locking pliers are a helper, not a wrench substitute.", search: "Knipex pliers set locking pliers needle nose side cutters" },
        { name: "Hammer set: ball-peen and dead-blow, with brass drift and punch set", why: "Drifts and punches free pins and bushings. A dead-blow hammer moves parts without marring them.", search: "dead blow hammer ball peen hammer punch drift set" },
        { name: "CSA-approved safety boots, safety glasses, hearing protection, and nitrile gloves", why: "Look for the green CSA triangle on the boot label. Oils, solvents, and noise are daily exposures, so comfortable rated PPE gets worn.", search: "CSA safety boots steel toe Mechanix nitrile gloves safety glasses earmuffs" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up in your shop and what the shop already supplies.",
      items: [
        { name: "Digital multimeter with min/max (such as Fluke or Klein)", why: "Voltage, resistance, and continuity checks on sensors, batteries, and charging circuits. Choose one rated CAT III.", search: "Fluke 117 digital multimeter automotive Klein MM720" },
        { name: "Test light and 12 V circuit tester", why: "A fast way to check power and ground at a connector before reaching for the meter.", search: "circuit tester test light 12V 24V heavy duty" },
        { name: "Air chisel, impact gun (1/2 in and 3/4 in), and quality air fittings", why: "Truck hardware is large and rusty. Air or cordless impacts do the heavy break-away work.", search: "Ingersoll Rand 1/2 inch air impact wrench 3/4 inch Milwaukee M18 impact" },
        { name: "Cordless 1/2 in impact wrench (18 V platform of your choice)", why: "Portable break-away torque for roadside and yard work. Pick one battery platform and stay with it.", search: "Milwaukee M18 FUEL 1/2 inch impact wrench DeWalt 20V" },
        { name: "Tire gauge, tread depth gauge, and inflation hose with clip-on chuck", why: "Pre-trip and inspection work depends on accurate pressure and tread readings.", search: "truck tire pressure gauge tread depth gauge dual head chuck" },
        { name: "Grease gun, fluid transfer pump, and drain pan", why: "Chassis lube and oil changes are daily work on trucks. A good gun delivers grease without leaking back.", search: "Lincoln grease gun 14 oz pistol grip drain pan 20 litre" },
        { name: "Feeler gauges, dial indicator with magnetic base, and micrometer set", why: "Measuring lash, runout, end play, and wear is how you decide if a part is serviceable.", search: "Mitutoyo micrometer set dial indicator magnetic base feeler gauge" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying, and learn the safety training that comes with each tool.",
      items: [
        { name: "Heavy-duty diagnostic adapter and software (Cummins INSITE, Detroit Diesel Diagnostic Link, Noregon, or similar)", why: "Reads fault codes, parameters, and runs tests on modern engines. Normally company-licensed.", search: "Noregon JPRO heavy duty diagnostic adapter Nexiq USB-Link" },
        { name: "Air brake and air system test tools (gauges, leakdown kit)", why: "Check governor cut-in and cut-out, leakage rates, and low air warning accurately.", search: "air brake test gauge kit truck air system leakage tester" },
        { name: "Hydraulic press and bearing/seal driver sets", why: "Used for pressing pins, bushings, and wheel seals. Shops usually own the large presses.", search: "wheel seal driver set truck hub bearing race driver set" },
        { name: "Coolant and fuel system pressure testers", why: "Find leaks and weak caps, and verify fuel supply pressure before condemning parts.", search: "cooling system pressure tester kit heavy duty fuel pressure test kit" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for electrical, hydraulics, and diagnostics study. Check with your school and your exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Ohm's law, ratios, gear ratios, and unit conversions come up all through the program.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Mechanical pencil (0.5 mm) and spare leads", why: "Clean notes and sketches of circuits and air-brake schematics.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm lead refills" },
        { name: "Coloured pencils or pens", why: "Colour in air lines, circuits, and fluid paths when you trace schematics.", search: "coloured pencils set pens 12 colours" },
        { name: "Graph paper and a 30 cm steel ruler", why: "Plotting data, sketching components, and measuring accurately.", search: "graph paper pad 30 cm steel ruler" },
        { name: "Field notebook (Rite in the Rain)", why: "Weatherproof paper for service notes, torque specs, and part numbers around greasy hands.", search: "Rite in the Rain field notebook" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by system: engine, brakes, electrical, drivetrain, suspension. It also helps with Red Seal review.", search: "binder dividers highlighters" },
        { name: "Pocket-size metric and imperial conversion card", why: "Quick lb-ft to N-m, psi to kPa, and mm to inch checks while studying and in the shop.", search: "pocket conversion chart card metric imperial mechanic reference" }
      ]
    }
  ];

  const mediaGroups = [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work, plus the occupational standard and exam information for your trade.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Canadian Trucking Alliance", desc: "Industry information on trucking regulations and the safety and maintenance side of the industry.", url: "https://www.cantruck.ca/" },
        { name: "Canadian Council of Motor Transport Administrators (CCMTA)", desc: "Home of the National Safety Code and its commercial vehicle inspection standards.", url: "https://www.ccmta.ca/" },
        { name: "Commercial Vehicle Safety Alliance (CVSA)", desc: "Roadside inspection programs and out-of-service criteria used across North America.", url: "https://www.cvsa.org/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Workplace safety, WHMIS, and hazard information in plain language.", url: "https://www.ccohs.ca/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials, manufacturer service information, and provincial rules.",
      items: [
        { name: "Air brake system basics", desc: "Compressor, governor, dryer, tanks, and valves in a truck air system.", url: "https://www.youtube.com/results?search_query=truck+air+brake+system+basics+explained" },
        { name: "S-cam drum brake service", desc: "Inspecting and servicing drum brakes, slack adjusters, and chambers.", url: "https://www.youtube.com/results?search_query=semi+truck+s-cam+drum+brake+inspection+slack+adjuster" },
        { name: "Diesel engine four-stroke cycle", desc: "How compression ignition engines make power.", url: "https://www.youtube.com/results?search_query=diesel+engine+four+stroke+cycle+explained" },
        { name: "DPF and SCR aftertreatment", desc: "How diesel particulate filters, DEF, and SCR clean exhaust.", url: "https://www.youtube.com/results?search_query=diesel+DPF+SCR+DEF+aftertreatment+explained+truck" },
        { name: "Heavy truck electrical diagnosis", desc: "Voltage drop testing, grounds, and reading wiring diagrams.", url: "https://www.youtube.com/results?search_query=heavy+duty+truck+electrical+diagnosis+voltage+drop" },
        { name: "J1939 CAN bus troubleshooting", desc: "Checking terminating resistors and network faults.", url: "https://www.youtube.com/results?search_query=J1939+CAN+bus+troubleshooting+truck+terminating+resistor" },
        { name: "Fifth wheel and landing gear service", desc: "Inspecting, lubricating, and adjusting fifth wheels.", url: "https://www.youtube.com/results?search_query=fifth+wheel+inspection+adjustment+semi+truck" },
        { name: "Wheel-end service and hub seals", desc: "Wheel bearings, seals, and hub oil on heavy axles.", url: "https://www.youtube.com/results?search_query=semi+truck+wheel+end+hub+seal+bearing+service" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for truck work yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: diesel mechanic apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=diesel+mechanic+apprentice+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do in the shop.",
      items: [
        { name: "YouTube: truck technician podcast", desc: "Shop talk on diagnostics, fleet work, and common failures.", url: "https://www.youtube.com/results?search_query=truck+technician+podcast+diesel+diagnostics" },
        { name: "YouTube: air brake systems explained (listen-along)", desc: "Talks on air brake design and inspection to hear on the commute.", url: "https://www.youtube.com/results?search_query=air+brake+systems+explained+truck+technician+podcast" },
        { name: "YouTube: diesel emissions systems podcast", desc: "Aftertreatment troubleshooting stories from the field.", url: "https://www.youtube.com/results?search_query=diesel+emissions+aftertreatment+troubleshooting+podcast" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, shop leadership, and fleet work.",
      items: [
        { name: "YouTube: Red Seal truck and transport mechanic exam prep", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+truck+and+transport+mechanic+exam+preparation" },
        { name: "YouTube: fleet maintenance management podcast", desc: "Preventive maintenance planning, uptime, and shop management.", url: "https://www.youtube.com/results?search_query=fleet+maintenance+management+podcast+trucking" },
        { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
      ]
    }
  ];

  const practiceBank = {
    1: mk(0, [
      ["How many sections does a WHMIS Safety Data Sheet (SDS) have?", "16", "8", "12", "20", "WHMIS 2015 follows the GHS format, which uses 16 standard SDS sections."],
      ["A hydraulic floor jack is used to lift a truck axle. Before you work under it you should:", "Support it on rated jack stands or blocks", "Rely on the jack alone", "Remove the wheel chocks", "Run the engine for stability", "A jack is for lifting only. Rated stands carry the load while you work."],
      ["The green triangle on the label of CSA-approved safety boots means:", "The sole has puncture protection", "The boots are waterproof", "The boots are electrically insulated only", "The boots are for office use", "The CSA green triangle marks puncture-resistant soles. Other label symbols mark other properties."],
      ["Which extinguisher class is intended for flammable liquids such as diesel and gasoline?", "Class B", "Class A", "Class D", "Class K", "Class B is for flammable liquids. Class A is ordinary combustibles."],
      ["How many millimetres are in one inch?", "25.4", "2.54", "10", "254", "1 in = 25.4 mm exactly."],
      ["A torque wrench is used to:", "Tighten fasteners to a specified torque", "Loosen seized bolts", "Measure bolt length", "Check thread pitch", "Torque specifications protect parts from being under- or over-tightened."],
      ["100 lb-ft is about how many newton-metres?", "136 N-m", "74 N-m", "14 N-m", "1360 N-m", "1 lb-ft is about 1.356 N-m."],
      ["Ultra-low sulphur diesel (ULSD) is limited to a maximum of how much sulphur?", "15 ppm", "500 ppm", "5000 ppm", "150 ppm", "ULSD has a maximum of 15 parts per million sulphur, which protects aftertreatment systems."],
      ["A diesel engine ignites its fuel by:", "Heat from compressing the air", "A spark plug", "A glow plug only, at all times", "Friction in the fuel line", "Compression ignition: air is compressed until it is hot enough to ignite injected fuel."],
      ["What is the order of the four-stroke cycle?", "Intake, compression, power, exhaust", "Intake, power, compression, exhaust", "Compression, intake, exhaust, power", "Exhaust, power, intake, compression", "Air is drawn in, compressed, fuel burns to push the piston, and exhaust leaves."],
      ["When disconnecting a battery, which cable should you remove first?", "The negative cable", "The positive cable", "Either, order does not matter", "Both at once with a wrench", "Removing negative first avoids a short if a tool touches the chassis."],
      ["Ohm's law: a 12 V circuit has 4 ohms of resistance. The current is:", "3 A", "48 A", "0.33 A", "8 A", "I = V / R = 12 / 4 = 3 A."],
      ["Why should compressed air never be aimed at bare skin?", "Air can enter the bloodstream through the skin", "It dries the skin", "It damages tools", "It cools the air tank", "Air at pressure can injure tissue and cause serious medical problems."],
      ["Wheel chocks are used to:", "Stop the vehicle from rolling while you work", "Lift the axle", "Measure tire wear", "Raise the cab", "Chocks prevent unplanned movement, especially on slopes."],
      ["Which tool measures the thickness of a brake drum or a shaft diameter to hundredths of a millimetre?", "Micrometer", "Tape measure", "Torque wrench", "Feeler gauge", "A micrometer reads very small dimensions accurately."],
      ["Lockout/tagout is used to:", "Keep energy sources off while servicing equipment", "Label tools", "Order parts", "Track hours", "It prevents accidental start-up or release of stored energy."],
      ["Hearing protection is generally needed when:", "Noise levels in the shop are high, such as with air tools and running engines", "Only during meetings", "Only when welding", "Never in a shop", "Repeated loud noise causes permanent hearing loss."],
      ["Used engine oil and coolant should be:", "Collected and disposed of as regulated waste", "Poured down a floor drain", "Burned in an open barrel", "Left in the yard", "Fluids are environmental hazards and must go to approved recycling or disposal."]
    ]),
    2: mk(1, [
      ["In a truck air brake system, which component limits system pressure by controlling the compressor?", "Governor", "Slack adjuster", "Brake chamber", "Relay valve", "The governor tells the compressor when to cut in and cut out."],
      ["The red gladhand on a tractor-trailer connection normally supplies:", "Emergency (supply) air", "Service air", "Antifreeze", "Electrical power", "Red is the emergency line, and blue is the service line."],
      ["The function of an air dryer is to:", "Remove moisture and contaminants from compressed air", "Heat the air", "Cool the compressor", "Increase pressure", "Moisture in brake lines can freeze or corrode components."],
      ["Spring brakes apply when:", "Air pressure in the spring brake chamber is released or drops", "Air pressure is high", "The ignition is on", "The parking lights are on", "Springs hold the brake on until air compresses them to release."],
      ["Why is it dangerous to remove the clamp from a spring brake without caging it?", "The stored spring force can cause serious injury", "The drum will cool", "It will drain the tank", "It will fail the ECM", "The powerful spring can release violently. Never disassemble a spring brake chamber."],
      ["A slack adjuster serves to:", "Maintain proper brake shoe clearance to the drum", "Increase tire pressure", "Cool the drum", "Lock the wheel", "It converts pushrod movement to cam rotation and sets clearance."],
      ["A typical charging voltage on a 12 V truck system with the engine running is:", "About 13.8 to 14.4 V", "About 11 V", "About 9 V", "About 24 V", "The alternator should keep batteries charged above resting voltage."],
      ["Two 12 V batteries wired in series give:", "24 V", "12 V with double capacity", "6 V", "0 V", "Series doubles voltage. Parallel doubles capacity at the same voltage."],
      ["Two 12 V batteries wired in parallel give:", "12 V with increased capacity", "24 V", "6 V", "36 V", "Parallel connections add amp-hour capacity but keep voltage the same."],
      ["The standard kingpin diameter on most fifth wheel trailers is:", "2 in (50 mm)", "1 in (25 mm)", "4 in (100 mm)", "5 in (127 mm)", "A 2 in kingpin is standard on most tractor-trailer combinations."],
      ["CVSA out-of-service criteria for the minimum tread depth of steer axle tires is:", "4/32 in (3.2 mm)", "2/32 in (1.6 mm)", "1/32 in (0.8 mm)", "6/32 in (4.8 mm)", "Steer tires need at least 4/32 in. Other positions need at least 2/32 in."],
      ["Diesel exhaust fluid (DEF) is made of:", "About 32.5 percent urea in deionized water", "Methanol", "Ammonia gas", "Diesel and oil", "DEF is a urea and water solution used in SCR systems."],
      ["A fuel filter/water separator is drained to:", "Remove water that could harm injectors", "Add pressure", "Reduce noise", "Clean the DEF", "Water in diesel causes corrosion and poor lubrication."],
      ["A thermostat in the cooling system:", "Controls coolant flow to keep the engine at operating temperature", "Pumps coolant", "Filters coolant", "Stores coolant", "It opens at a set temperature to let coolant flow to the radiator."],
      ["Mixing different types of coolant can:", "Cause chemical reactions and damage, so use the specified type", "Improve cooling", "Not matter", "Raise the freezing point only", "Mixing incompatible coolants can form gel and clog passages."],
      ["The universal joints on a driveshaft are in proper phase when:", "The yokes are aligned in the same plane", "The yokes are 90 degrees apart", "The shaft is shorter", "The shaft is painted", "Phasing keeps the speed fluctuations of the two joints cancelling out."],
      ["A clutch with no free play may:", "Slip and wear out", "Engage more firmly with no issue", "Cool faster", "Release better", "Free play ensures the release bearing is not loading the clutch."],
      ["What does ABS do during a hard stop?", "Prevents wheel lockup by modulating brake pressure", "Increases engine speed", "Locks the wheels", "Raises the trailer", "Anti-lock braking helps maintain steering control."]
    ]),
    3: mk(2, [
      ["A DPF regeneration is:", "Burning off accumulated soot in the filter", "Replacing the filter", "Adding DEF", "Flushing coolant", "Regeneration raises exhaust temperature to oxidize soot."],
      ["In an SCR system, DEF is injected:", "Into the exhaust stream upstream of the SCR catalyst", "Into the fuel tank", "Into the intake", "Into the crankcase", "DEF breaks down into ammonia, which reduces NOx in the catalyst."],
      ["SCR reduces which emission?", "Oxides of nitrogen (NOx)", "Carbon dioxide only", "Soot only", "Water vapour", "SCR converts NOx into nitrogen and water."],
      ["A J1939 fault code is described by an SPN and an FMI. FMI stands for:", "Failure Mode Identifier", "Fuel Mixture Indicator", "Frame Mount Interface", "Frequency Modulation Input", "SPN is the suspect parameter, and FMI says how it failed."],
      ["On a 12 V J1939 CAN data link with power off, the resistance between CAN High and CAN Low should be about:", "60 ohms", "120 ohms", "0 ohms", "1000 ohms", "Two 120 ohm terminating resistors in parallel read about 60 ohms."],
      ["A voltage drop test is used to find:", "Unwanted resistance in a circuit under load", "Battery capacity", "Alternator speed", "Fuel pressure", "A high drop across a connection indicates a bad connection or cable."],
      ["The inter-axle differential lock on a tandem drive should be engaged:", "Only when traction is poor and with wheels not spinning, per the manufacturer", "At all times at highway speed", "Only when braking", "While making sharp turns on dry pavement", "Engaging it while wheels spin can damage the drivetrain."],
      ["A leveling (height control) valve on an air suspension:", "Maintains ride height by adding or exhausting air from air springs", "Cools the bags", "Pumps coolant", "Measures tire pressure", "It senses ride height and adjusts air to keep the chassis level."],
      ["A turbocharger is driven by:", "Exhaust gas energy", "Belt from the crankshaft", "Electric motor only", "Coolant flow", "Exhaust gas spins the turbine, which drives the compressor."],
      ["A cooling system pressure cap:", "Raises the coolant boiling point by holding pressure", "Lowers the pressure", "Cools the coolant", "Filters coolant", "A pressurized system allows a higher coolant temperature before boiling."],
      ["A parasitic draw test checks for:", "Current drain with the key off", "Alternator output", "Starter torque", "Compression", "A key-off draw that is too high will flatten the batteries."],
      ["Wheel bearing preload on a tapered roller bearing is set by:", "Following the manufacturer's adjustment procedure and torque", "Overtightening the nut", "Leaving it loose", "Adding grease only", "Both too tight and too loose shorten bearing life."],
      ["A common cause of uneven tire wear on a steer axle is:", "Misalignment such as incorrect toe", "Correct inflation", "New shocks", "Cold weather", "Toe and camber problems scrub tread."],
      ["Which of these is a symptom of a restricted air filter on a turbocharged diesel?", "Low power and black smoke", "Overcooling", "High oil pressure", "Better mileage", "Restricted intake air creates a rich mixture and low boost."],
      ["When a driveline vibration occurs only at certain road speeds, a common cause is:", "Worn or out-of-phase U-joints or an unbalanced shaft", "Low coolant", "A weak battery", "Low DEF", "Driveline imbalance and angles produce speed-related vibration."],
      ["Which component stores compressed air for use by the brake system?", "Air reservoir (tank)", "Governor", "Relay valve", "Slack adjuster", "Reservoirs store air so brakes can be applied several times."],
      ["Wet tank draining is needed because:", "Moisture and oil collect in the tank over time", "It adds pressure", "It cools the compressor", "It lubricates valves", "Draining helps keep contaminants out of the system. Many trucks use automatic drain valves."]
    ]),
    4: mk(3, [
      ["In Canada, commercial vehicle maintenance and inspection requirements are set provincially and based on:", "The National Safety Code standards", "The Highway Traffic Act of one province only", "Insurance policy wording", "Manufacturer warranty", "The National Safety Code harmonizes standards, while provinces administer them."],
      ["An out-of-service condition means:", "The vehicle must not be operated until the defect is corrected", "Maintenance can be deferred a month", "It only affects tire pressure", "The vehicle needs a new decal", "Out-of-service defects are serious enough that the vehicle must be repaired before it goes back on the road."],
      ["Removing or defeating emissions equipment on a diesel truck is:", "Prohibited under federal emissions regulations", "Allowed if the customer agrees", "Allowed on older units", "A routine upgrade", "Tampering with emissions controls is illegal and also harms health."],
      ["Which tool is best for verifying a suspected intermittent sensor signal while the truck runs?", "A lab scope or a graphing multimeter", "A tape measure", "A torque wrench", "A grease gun", "Scopes show waveform and glitches that a static meter can miss."],
      ["An EGR cooler leak may show up as:", "Coolant loss and white smoke or exhaust residue", "High fuel pressure", "Low DEF only", "A noisy fan", "Coolant crossing into the exhaust path causes loss and smoke."],
      ["A repeated DPF clog on one truck should lead you to:", "Find the root cause such as injectors, oil use, or duty cycle", "Replace the filter only", "Ignore it", "Raise the idle speed", "Fix the root cause or the new filter will fail too."],
      ["When working on an electric or hybrid truck, high-voltage cables are typically:", "Orange, and require specific training and de-energizing procedures", "Black, and safe to touch", "Red and 12 V", "Covered only by tape", "Orange cabling flags high voltage. Follow the manufacturer's de-energizing steps."],
      ["Gross vehicle weight rating (GVWR) is:", "The maximum loaded weight set by the manufacturer", "Weight of the empty vehicle", "Weight of the cargo only", "The weight of the engine", "GVWR sets a limit for loaded vehicle weight."],
      ["Warranty claims depend heavily on:", "Accurate documentation: complaint, cause, and correction", "Verbal descriptions only", "The age of the technician", "Brand of tools used", "Warranty work requires careful records of what was found and what was done."],
      ["A preventive maintenance (PM) program is meant to:", "Find and fix problems on a schedule before failure", "Replace parts after they fail", "Avoid inspection", "Cut documentation", "Scheduled PM reduces road breakdowns and downtime."],
      ["Reprogramming an engine control module (ECM) generally requires:", "Manufacturer-approved software and a stable power supply", "A paper clip", "A hammer", "No special tools", "Interrupted power during programming can corrupt the module."],
      ["A brake performance problem on a trailer-pulling tractor with unequal braking is best addressed by:", "Inspecting every brake and balancing air pressure and adjustment", "Replacing only the left drum", "Adding air to tires", "Raising governor pressure", "Mismatched brakes cause poor stopping and wear."],
      ["Which statement about DEF quality is correct?", "Contaminated or diluted DEF can cause SCR faults and derates", "DEF quality never matters", "Any liquid works", "DEF improves fuel mileage", "A DEF quality sensor can trigger codes and engine derate."],
      ["Before welding on a truck chassis you should:", "Disconnect batteries and protect electronic modules per the manufacturer", "Leave all connected", "Weld at maximum current", "Remove only the radio", "Welding currents can destroy control modules."],
      ["When a driver reports an intermittent no-start, the best first step is:", "Verify the complaint and gather details before diagnosing", "Replace the starter", "Replace the batteries", "Clear the codes", "Clear information leads to faster, cheaper repairs."],
      ["A truck displaying a low-air warning and spring brakes applying at low pressure should:", "Be repaired before use, since it is a brake system defect", "Be driven carefully", "Have the warning bulb removed", "Be topped up with DEF", "Air system failures are brake safety defects."],
      ["Flat-rate labour time is:", "A set time for a job from a published guide", "Hourly time clock only", "Time for diagnosis only", "Travel time", "Flat rate pays by the standard job time, regardless of actual time."],
      ["Which of these best identifies a root cause?", "The underlying failure that, if fixed, stops the problem coming back", "The first symptom you see", "The part that failed last", "The most expensive part", "Fixing symptoms without the cause leads to repeat repairs."]
    ])
  };

  const roadmapSteps = [
    { title: "Before you start", items: ["Confirm entry requirements and the trade's training pattern with your provincial or territorial apprenticeship authority", "Get safety training employers ask for (commonly WHMIS and site orientation; requirements vary)", "Prepare a resume and apply to truck dealerships, fleets, and independent heavy-truck shops", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: shop safety and basics", items: ["Learn shop safety, lifting, lockout, and fluids handling", "Do preventive maintenance and inspections: oil, filters, lubrication, tires", "Learn measuring tools, torque, and fasteners", "Study electrical basics and the 12 V and 24 V systems", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: brakes, steering, and suspension", items: ["Service air brake systems, drum brakes, and wheel ends", "Work on steering, alignment, and air suspensions", "Learn trailer connections: gladhands, ABS, and lighting", "Learn to read wiring diagrams and use a multimeter"] },
    { title: "Year 3: engines and drivetrains", items: ["Diagnose diesel engine and fuel system problems", "Service clutches, transmissions, driveshafts, and differentials", "Work with cooling and charging systems", "Use electronic diagnostic tools to read and interpret fault codes"] },
    { title: "Year 4 and beyond: advanced diagnostics", items: ["Diagnose aftertreatment, multiplex networks, and complex electrical faults", "Handle safety inspections and learn the National Safety Code standards", "Mentor first-year apprentices", "Use the Red Seal standard to find gaps in your experience, and consider hybrid and electric truck training"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal exam information and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ];

  const glossary = [
    ["ABS", "Anti-lock braking system, which prevents wheel lockup in a hard stop."],
    ["Aftertreatment", "Exhaust devices such as DPF and SCR that reduce emissions."],
    ["Air dryer", "A device that removes moisture and oil from compressed air before it reaches the tanks."],
    ["Brake chamber", "A diaphragm unit that turns air pressure into pushrod force to apply the brakes."],
    ["Cetane number", "A measure of how readily diesel fuel ignites under compression."],
    ["Common rail", "A diesel injection design where a shared high-pressure rail feeds electronically controlled injectors."],
    ["Compression ratio", "The ratio of cylinder volume at bottom dead centre to volume at top dead centre."],
    ["DEF", "Diesel exhaust fluid, a urea and water solution used by SCR systems."],
    ["DPF", "Diesel particulate filter, which traps soot until it is burned off."],
    ["ECM", "Engine control module, the computer that manages the engine."],
    ["EGR", "Exhaust gas recirculation, which lowers combustion temperatures to reduce NOx."],
    ["Fifth wheel", "The coupling on a tractor that holds the trailer kingpin."],
    ["FMI", "Failure mode identifier in a J1939 fault code."],
    ["Gladhand", "The coupling that connects the air lines between a tractor and a trailer."],
    ["Governor", "The air system valve that cuts the compressor in and out to control tank pressure."],
    ["GVWR", "Gross vehicle weight rating, the maximum loaded weight set by the manufacturer."],
    ["Inter-axle differential", "A differential between the two drive axles of a tandem."],
    ["J1939", "A heavy-duty vehicle data network standard used to share information between modules."],
    ["Kingpin", "The pin under the front of a trailer that locks into the fifth wheel."],
    ["Lockout/tagout", "A procedure that keeps energy sources off while equipment is serviced."],
    ["NOx", "Oxides of nitrogen, a regulated exhaust emission."],
    ["Out of service", "A defect serious enough that a vehicle may not be operated until repaired."],
    ["Pushrod stroke", "The travel of the brake chamber rod, used to judge brake adjustment."],
    ["Regeneration", "Burning off soot in the DPF by raising exhaust temperature."],
    ["SCR", "Selective catalytic reduction, which uses DEF to reduce NOx."],
    ["SDS", "Safety Data Sheet, the 16-section document describing a product's hazards and handling."],
    ["Slack adjuster", "A lever on an S-cam brake that sets and maintains shoe-to-drum clearance."],
    ["SPN", "Suspect parameter number, the part of a J1939 code that names the faulty circuit or parameter."],
    ["Spring brake", "A parking and emergency brake applied by a spring and released with air."],
    ["Turbocharger", "An exhaust-driven compressor that increases intake air pressure."],
    ["Wet tank", "The first air reservoir after the compressor and dryer, where leftover moisture collects."],
    ["WHMIS", "Workplace Hazardous Materials Information System, Canada's hazard communication standard."]
  ];

  const reference = [
    {
      title: "Conversions",
      list: [
        "1 in = 25.4 mm, and 1 ft = 304.8 mm",
        "1 psi ≈ 6.895 kPa, and 1 bar = 100 kPa ≈ 14.5 psi",
        "1 lb-ft ≈ 1.356 N-m, and 1 N-m ≈ 0.738 lb-ft",
        "1 US gallon ≈ 3.785 L, and 1 Imperial gallon ≈ 4.546 L",
        "1 hp ≈ 0.746 kW",
        "Temperature: °F = (°C × 9/5) + 32"
      ]
    },
    {
      title: "Electrical formulas (DC)",
      list: [
        "Ohm's law: V = I × R, so I = V ÷ R and R = V ÷ I",
        "Power: P = V × I (watts = volts × amps)",
        "Series circuit: resistances add, and current is the same everywhere",
        "Parallel circuit: voltage is the same across every branch, and branch currents add",
        "Batteries in series add voltage. Batteries in parallel add capacity at the same voltage"
      ],
      note: "Typical charging voltage on a 12 V system with the engine running is about 13.8 to 14.4 V. A fully charged resting 12 V battery reads about 12.6 V or higher."
    },
    {
      title: "Air brake system overview",
      table: {
        head: ["Component", "Job"],
        rows: [
          ["Compressor", "Makes compressed air, driven by the engine"],
          ["Governor", "Controls compressor cut-in and cut-out pressure"],
          ["Air dryer", "Removes moisture and contaminants"],
          ["Reservoirs (tanks)", "Store air for brake applications"],
          ["Brake chamber and slack adjuster", "Turn air pressure into brake force and set clearance"],
          ["Spring brake", "Parking and emergency brake held off by air"],
          ["Gladhands", "Red is emergency (supply). Blue is service (control)"]
        ]
      },
      note: "Cut-in and cut-out pressures, low air warning, and leakage limits vary by regulation and by manufacturer. Use your provincial standard and the service manual."
    },
    {
      title: "Tire tread depth limits (CVSA out-of-service criteria)",
      table: {
        head: ["Position", "Minimum tread depth"],
        rows: [
          ["Steer axle", "4/32 in (3.2 mm)"],
          ["All other axles", "2/32 in (1.6 mm)"]
        ]
      },
      note: "Provincial inspection rules and fleet policies may be stricter. Measure in a major groove, away from wear bars."
    },
    {
      title: "Diesel engine and exhaust fluids",
      list: [
        "Four-stroke order: intake, compression, power, exhaust",
        "Compression ignition: no spark plugs. Fuel ignites from the heat of compressed air",
        "ULSD has a maximum sulphur level of 15 ppm",
        "DEF is about 32.5 percent urea in deionized water and freezes at roughly -11 °C. Systems are designed to thaw it",
        "DPF regeneration burns off soot. Passive, active, and parked regeneration are the common types",
        "SCR uses DEF to turn NOx into nitrogen and water"
      ]
    },
    {
      title: "Standards and where to look",
      list: [
        "<strong>National Safety Code:</strong> harmonized commercial vehicle standards, including maintenance and periodic inspection, administered by provinces and territories",
        "<strong>CVSA:</strong> North American Standard inspection levels and out-of-service criteria",
        "<strong>CMVSS:</strong> Canada Motor Vehicle Safety Standards that apply to new vehicles, including braking and lighting",
        "<strong>WHMIS:</strong> labels and SDS for shop chemicals",
        "<strong>Provincial occupational health and safety rules:</strong> lockout, lifting, and PPE requirements",
        "<strong>Manufacturer service information:</strong> torque specs, procedures, and intervals for your equipment"
      ],
      note: "Confirm which edition and standard your province uses and your employer's policies."
    }
  ];

  registerTrade({
    id: "truck-transport-mechanic",
    store: "truck-transport-mechanic",
    title: "Truck and Transport Mechanic",
    name: "Truck and Transport Mechanic",
    short: "truck and transport repair",
    category: "Transportation · Diesel · Heavy Vehicles",
    summary: "Truck and transport mechanics inspect, diagnose, repair, and maintain highway tractors, straight trucks, buses, and trailers, keeping commercial fleets safe, legal, and moving.",
    work: "You work in dealership shops, fleet garages, and sometimes roadside service vans. Days mix preventive maintenance, air brake work, electrical diagnostics, and engine and aftertreatment repairs. Expect heavy parts, grease, and detailed paperwork.",
    duration: "Usually about 4 years, varies by province",
    union: "Unifor",
    unionUrl: "https://www.unifor.org/",
    jobSearch: "truck and transport mechanic apprentice",
    journeySearch: "truck and transport mechanic",
    aliases: "diesel mechanic truck technician semi truck mechanic heavy truck repair red seal 310t transport mechanic bus mechanic tractor trailer",
    tools: ["Combination wrenches, metric and SAE", "1/2 in socket set and torque wrench", "Digital multimeter", "Pliers, hammers, and pry bars", "Tire gauge and tread depth gauge", "CSA safety boots, glasses, and gloves"],
    insight: {
      skills: ["Mechanical and electrical troubleshooting", "Reading wiring diagrams and service manuals", "Comfort with heavy parts and dirty work", "Careful documentation and communication"],
      hazards: ["Spring brakes and air systems: never open a spring brake chamber, and release stored energy safely", "Lifting and heavy components: use hoists, stands, and proper technique", "Diesel fuel, DEF, and shop chemicals: follow WHMIS and wear gloves", "Noise and fumes: hearing protection and shop ventilation"],
      settings: ["Truck dealerships and service centres", "Fleet maintenance garages", "Independent heavy-truck repair shops", "Mobile and roadside service"]
    },
    toolGroups,
    mediaGroups,
    practiceBank,
    roadmapSteps,
    glossary,
    cards: [
      { front: "Red gladhand colour", back: "Emergency (supply) line. Blue is the service (control) line." },
      { front: "Steer tire minimum tread (CVSA)", back: "4/32 in (3.2 mm). Other axles need 2/32 in (1.6 mm)." },
      { front: "Typical charging voltage, 12 V system", back: "About 13.8 to 14.4 V with the engine running" },
      { front: "Ohm's law", back: "V = I × R" },
      { front: "What does DEF contain?", back: "About 32.5 percent urea in deionized water" },
      { front: "Resistance across CAN H and CAN L, power off", back: "About 60 ohms (two 120 ohm resistors in parallel)" },
      { front: "Standard kingpin diameter", back: "2 in (50 mm)" },
      { front: "Max sulphur in ULSD", back: "15 ppm" },
      { front: "Why never open a spring brake chamber?", back: "The stored spring force can cause severe injury or death." },
      { front: "lb-ft to N-m", back: "1 lb-ft ≈ 1.356 N-m" }
    ],
    jobsIntro: "Look for truck dealerships, fleet maintenance garages, trucking companies with their own shops, school and transit bus operators, and independent heavy-truck repair shops.",
    tips: ["Bring a short resume, your safety tickets, and a valid driver's licence if you have one.", "Show interest in how things work and a willingness to learn heavy-duty systems.", "Visit shops in person when you can, and follow up.", "Ask what tools you need and what the employer supplies."],
    forumTopics: ["Starting out", "Air brakes and chassis", "Engines and aftertreatment", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference
  });
})();
