// Heavy Duty Equipment Technician content. Practice questions are original study aids, not official Red Seal exam questions.

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
      note: "Professional-grade tools that hold up on large fasteners, in mud, and around hydraulic oil. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first, since many field and mine employers have rules on tool boxes and tool lists.",
      items: [
        { name: "Combination wrench set, metric and SAE (10 mm to 36 mm, 3/8 in to 1-1/2 in)", why: "Construction, mining, and forestry machines use big metric and imperial hardware. Quality box ends do not round off.", search: "GearWrench Snap-on combination wrench set metric SAE large" },
        { name: "1/2 in and 3/4 in drive socket sets, 6-point, metric and SAE", why: "Six-point sockets protect bolt heads on track, final drive, and attachment hardware.", search: "3/4 inch drive socket set 6 point metric SAE Williams Proto" },
        { name: "Breaker bar and long extensions", why: "Controlled leverage for seized hardware without damaging your ratchet.", search: "1/2 inch breaker bar 24 inch 3/4 inch breaker bar" },
        { name: "Torque wrench, 1/2 in drive (about 50 to 250 ft-lb), and a larger 3/4 in drive wrench", why: "Torque specs on pins, covers, and wheels are not optional. Keep the wrench stored at its lowest setting.", search: "1/2 inch click torque wrench 250 ft lb 3/4 inch drive torque wrench 600 ft lb" },
        { name: "Hammers: ball-peen, dead-blow, and a 4 lb hand sledge", why: "Drifting pins and persuading seized parts is part of the trade. Match the hammer to the job.", search: "dead blow hammer ball peen hammer 4 lb sledge" },
        { name: "Pliers, snap-ring pliers, and side cutters", why: "Snap rings, pins, and wire work show up daily on hydraulic cylinders and final drives.", search: "Knipex snap ring pliers set locking pliers side cutters" },
        { name: "Pry bar set and drift and punch set", why: "Lining up parts and driving pins out without mushrooming the ends.", search: "pry bar set brass drift punch set" },
        { name: "CSA-approved safety boots, safety glasses, hard hat, hearing protection, and gloves", why: "Look for the green CSA triangle on boots. Hard hats should meet CSA Z94.1. Comfortable rated PPE is what you will wear all day.", search: "CSA safety boots Z94.1 hard hat hearing protection hi vis vest gloves" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up in your shop and what the field service truck already carries.",
      items: [
        { name: "Digital multimeter with min/max (such as Fluke or Klein)", why: "Voltage, resistance, and continuity checks on sensors, switches, and charging circuits. Choose a CAT III-rated meter.", search: "Fluke 117 digital multimeter automotive Klein MM720" },
        { name: "Hydraulic test gauge set with quick-connect fittings (0 to 40 MPa / 6000 psi)", why: "Setting and checking pressure is core hydraulic work. A gauge range that covers the working pressure keeps readings accurate.", search: "hydraulic pressure test gauge kit 6000 psi quick connect" },
        { name: "Grease gun and a lithium or moly grease selection", why: "Daily greasing keeps pins and bushings alive. A pistol-grip gun with a flexible hose reaches awkward fittings.", search: "Lincoln grease gun 14 oz pistol grip flexible hose" },
        { name: "Cordless 1/2 in impact wrench", why: "Portable break-away torque in the yard or at a remote job. Pick one battery platform and stay with it.", search: "Milwaukee M18 FUEL 1/2 inch high torque impact wrench" },
        { name: "Micrometer, vernier caliper, and feeler gauge set", why: "Measuring wear on pins, bushings, and cylinders tells you whether a part is serviceable.", search: "Mitutoyo digital caliper micrometer set feeler gauge set" },
        { name: "Tool bag or tool chest that suits field service", why: "Organized tools save time and keep you from forgetting a socket at the site.", search: "heavy duty tool bag Veto Pro Pac field service tool chest" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying, and learn the safety training that comes with each tool.",
      items: [
        { name: "OEM diagnostic software and adapters (Cat ET, Komatsu, Deere, Volvo, Cummins INSITE, or others)", why: "Reads fault codes, flashes software, and performs calibrations. Normally company-licensed.", search: "Nexiq USB-Link 3 diagnostic adapter heavy equipment" },
        { name: "Hydraulic flow meter and pump test kit", why: "Pump output and leakage testing separates a worn pump from a valve or cylinder fault.", search: "hydraulic flow meter tester 100 gpm test kit" },
        { name: "Hydraulic hose crimper and hose cutting saw", why: "Making hoses in the field gets machines back to work, but crimping needs training and the correct dies.", search: "hydraulic hose crimper portable hose cut off saw" },
        { name: "Hydraulic press, bearing puller, and seal driver sets", why: "Used for pins, bushings, bearings, and seals. Shops usually own the large presses.", search: "bearing puller set seal driver set hydraulic press" },
        { name: "Welding and cutting equipment (stick, MIG, oxy-fuel or plasma)", why: "Usually shop-supplied. Welding and hot work training and fire watch come first.", search: "Lincoln Miller MIG welder 230V plasma cutter" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for hydraulics, electrical, and diagnostics study. Check with your school and your exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Hydraulic force and flow, gear ratios, Ohm's law, and unit conversions appear throughout the program.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Mechanical pencil (0.5 mm) and spare leads", why: "Clean sketches of hydraulic circuits and schematics.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm lead refills" },
        { name: "Hydraulic and electrical symbol reference card", why: "ISO and ANSI hydraulic symbols and electrical symbols are used on every schematic you will read.", search: "hydraulic symbols reference chart card" },
        { name: "Coloured pencils or pens", why: "Colour pressure lines, return lines, and pilot lines when tracing schematics.", search: "coloured pencils set pens 12 colours" },
        { name: "Field notebook (Rite in the Rain)", why: "Weatherproof paper for serial numbers, hours, readings, and torque specs.", search: "Rite in the Rain field notebook" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by system: engine, hydraulics, powertrain, undercarriage, electrical.", search: "binder dividers highlighters" },
        { name: "Steel ruler (30 cm) and graph paper", why: "Plotting test data and sketching components to scale.", search: "30 cm steel ruler graph paper pad" }
      ]
    }
  ];

  const mediaGroups = [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work, plus the occupational standard and exam information for your trade.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Workplace safety, WHMIS, and hazard information in plain language.", url: "https://www.ccohs.ca/" },
        { name: "CSA Group", desc: "Publisher of Canadian standards, including those for rollover protective structures and protective equipment.", url: "https://www.csagroup.org/" },
        { name: "International Association of Machinists and Aerospace Workers (IAM)", desc: "Union information for mechanics and technicians in Canada.", url: "https://www.iamaw.ca/" },
        { name: "Unifor", desc: "Canadian union with members in transportation, mining, and equipment repair.", url: "https://www.unifor.org/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials, manufacturer service information, and provincial rules.",
      items: [
        { name: "Hydraulic system basics", desc: "Pumps, valves, cylinders, and fluid power fundamentals.", url: "https://www.youtube.com/results?search_query=hydraulic+system+basics+pumps+valves+cylinders+explained" },
        { name: "Reading hydraulic schematics", desc: "Symbols and tracing circuits on a heavy equipment schematic.", url: "https://www.youtube.com/results?search_query=how+to+read+hydraulic+schematics+symbols" },
        { name: "Excavator hydraulic pump and control valve", desc: "How the main pump and valve work together.", url: "https://www.youtube.com/results?search_query=excavator+hydraulic+pump+main+control+valve+explained" },
        { name: "Track undercarriage inspection", desc: "Wear points on track chains, rollers, idlers, and sprockets.", url: "https://www.youtube.com/results?search_query=excavator+dozer+undercarriage+inspection+wear" },
        { name: "Powershift transmission and torque converter", desc: "How torque converters and clutch packs work.", url: "https://www.youtube.com/results?search_query=torque+converter+powershift+transmission+explained" },
        { name: "Heavy equipment final drive and planetary gears", desc: "How planetary sets multiply torque.", url: "https://www.youtube.com/results?search_query=planetary+gear+final+drive+heavy+equipment+explained" },
        { name: "Diesel engine emissions on off-road equipment", desc: "DPF, SCR, and DEF on Tier 4 machines.", url: "https://www.youtube.com/results?search_query=Tier+4+Final+DPF+SCR+DEF+off+road+equipment+explained" },
        { name: "Hydraulic hose assembly and safety", desc: "Hose selection, crimping, and injection injury hazards.", url: "https://www.youtube.com/results?search_query=hydraulic+hose+assembly+crimping+safety+injection+injury" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for heavy equipment work yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: heavy equipment mechanic apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=heavy+equipment+mechanic+apprentice+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do in the shop and field.",
      items: [
        { name: "YouTube: heavy duty technician podcast", desc: "Shop talk on diagnostics, hydraulics, and field service.", url: "https://www.youtube.com/results?search_query=heavy+duty+technician+podcast+hydraulics+diagnostics" },
        { name: "YouTube: hydraulics troubleshooting (listen-along)", desc: "Talks on hydraulic faults to hear on the commute.", url: "https://www.youtube.com/results?search_query=hydraulics+troubleshooting+heavy+equipment+podcast" },
        { name: "YouTube: field service technician stories (audio)", desc: "Remote repair stories and lessons from working technicians.", url: "https://www.youtube.com/results?search_query=field+service+technician+heavy+equipment+podcast+stories" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, condition monitoring, and shop leadership.",
      items: [
        { name: "YouTube: Red Seal heavy duty equipment technician exam prep", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+heavy+duty+equipment+technician+exam+preparation" },
        { name: "YouTube: equipment condition monitoring and oil analysis podcast", desc: "Predictive maintenance and fluid analysis talks.", url: "https://www.youtube.com/results?search_query=equipment+condition+monitoring+oil+analysis+podcast" },
        { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
      ]
    }
  ];

  const practiceBank = {
    1: mk(2, [
      ["Where do you find the hazards and first-aid measures for hydraulic oil or coolant?", "The Safety Data Sheet (SDS)", "The supplier's invoice that came with the product", "The parts book for the machine the oil goes into", "The warranty card in the operator's manual", "The SDS covers hazards, handling, and first aid for the product."],
      ["Before working on a machine's hydraulic system you should:", "Park, lower the attachments to the ground, shut down, and relieve pressure", "Leave the boom raised on its hydraulics so the cylinders stay in position", "Keep the engine running so that the system stays warm", "Loosen the fittings slowly while the circuit is still under pressure", "Stored energy can move parts or inject oil. Lower, lock out, and relieve pressure."],
      ["A raised boom or loader arm that you need to work under should be:", "Supported by approved blocking or locks", "Held up by the hydraulic cylinder alone, since it has a check valve", "Left with the engine idling so that pressure is maintained", "Held by a rope or chain tied off to the frame of the machine", "Hydraulic systems can leak down. Mechanical supports prevent sudden movement."],
      ["ROPS on a machine stands for:", "Rollover protective structure", "Rotating power system, the drive for the swing motor", "Remote operation panel, used for operating from outside the cab", "Rated operating pressure sensor, fitted to the main pump", "A ROPS helps protect the operator in a rollover."],
      ["How many millimetres are in one inch?", "25.4", "About 2.54 millimetres", "About 10 millimetres", "About 254 millimetres", "1 in = 25.4 mm exactly."],
      ["1 MPa is equal to about:", "145 psi", "About 14.5 psi, which is only a tenth of a megapascal", "About 1450 psi, which is ten times the correct value", "About 10 psi, since the units are nearly the same size", "1 MPa = 1000 kPa, and 1 psi is about 6.895 kPa, so 1 MPa is about 145 psi."],
      ["Hydraulic fluid escaping from a pinhole leak can:", "Inject through the skin and cause severe injury", "Only stain clothing, since the oil is not under real pressure", "Be safely wiped away by hand, if you wear gloves", "Cool the skin, since the oil is not hot", "High-pressure injection injuries need immediate medical attention. Never feel for leaks by hand."],
      ["The green triangle on the label of CSA-approved safety boots means:", "The sole has puncture protection", "The boots are waterproof up to the top of the ankle", "The boots are insulated for electrical work up to a set voltage", "The boots are for office use and are not rated for the site", "The CSA green triangle marks puncture-resistant soles."],
      ["A torque wrench is used to:", "Tighten fasteners to a specified torque", "Loosen seized bolts by applying a very high torque", "Measure the bolt length to confirm the correct grade", "Check the thread pitch before the bolt is installed", "Specified torque keeps parts from being over- or under-tightened."],
      ["100 lb-ft is about how many newton-metres?", "136 N-m", "About 74 N-m, found by dividing by the conversion factor", "About 14 N-m, which is too low by a factor of ten", "About 1360 N-m, which is too high by a factor of ten", "1 lb-ft is about 1.356 N-m."],
      ["Lockout/tagout is used to:", "Keep energy sources off while servicing equipment", "Label tools with the date that they were last calibrated", "Order parts for the machine at the end of each shift", "Track the machine hours between each service", "It prevents accidental start-up or release of stored energy."],
      ["Four-stroke engine order is:", "Intake, compression, power, exhaust", "Intake, power, compression, exhaust, in the order of the crank turns", "Compression, intake, exhaust, power, as the valves open and close", "Exhaust, intake, power, compression, starting with the exhaust stroke", "Air in, compress, burn, exhaust out."],
      ["Which class of fire extinguisher is for flammable liquids?", "Class B", "Class A, which is for ordinary combustibles such as wood and paper", "Class D, which is for combustible metals such as magnesium", "Class C only, which is for energized electrical equipment", "Class B is for flammable liquids such as diesel and hydraulic oil."],
      ["Before disconnecting a battery, which terminal do you remove first?", "Negative", "Positive, because it carries the current to the starter", "Either one, since both carry the same current", "Neither, so use a cutter to separate the battery cable", "Negative first lowers the risk of a short to the frame."],
      ["Using a hard hat that meets CSA Z94.1 helps protect against:", "Impact and falling objects on the head", "Hearing loss from noise near the machine", "Eye splashes from fluids or sparks", "Chemical burns from battery acid or coolant", "Hard hats protect against impact and penetration."],
      ["Ohm's law: 24 V across a 6 ohm load gives a current of:", "4 A", "144 A, found by multiplying instead of dividing", "0.25 A, found by dividing the resistance by the voltage", "18 A, found by adding the two values", "I = V / R = 24 / 6 = 4 A."],
      ["When climbing on and off a machine you should:", "Face the machine and keep three points of contact", "Jump down from the track to save time", "Carry tools in both hands to save a second trip", "Use the hoses as handles to steady yourself on the machine", "Slips on machines cause many injuries. Three points of contact lowers risk."],
      ["Used oil, filters, and coolant must be:", "Collected and disposed of as regulated waste", "Poured on the ground away from drains and waterways", "Burned on site in a barrel so that nothing is left", "Left in the drain pan until the next service", "Fluids are environmental hazards. Follow provincial rules and company procedures."]
    ]),
    2: mk(3, [
      ["Pascal's law states that pressure applied to a confined fluid:", "Is transmitted equally in all directions", "Only acts downward, in the direction of gravity", "Is lost in the fluid as it passes through a fitting", "Increases with every fitting along the line", "Pascal's law is the basis for hydraulic force multiplication."],
      ["Force equals pressure times area. A cylinder with a piston area of 100 cm² at 20 MPa produces about:", "200 kN", "20 kN, found by dropping a zero from the answer", "2 kN, which is a tenth of the correct force", "2000 kN, which is ten times the correct force", "100 cm² = 0.01 m², and 20 MPa × 0.01 m² = 0.2 MN = 200 kN."],
      ["A hydraulic pump:", "Creates flow, and pressure results from resistance to flow", "Creates pressure by itself, whether or not there is a load", "Stores oil under pressure for later use in the circuit", "Filters the oil before it returns to the tank", "Resistance in the system builds pressure."],
      ["A relief valve in a hydraulic system:", "Limits the maximum system pressure", "Increases flow to the cylinders when the load is heavy", "Filters oil as it passes back to the tank", "Cools the oil before it returns to the tank", "It opens to send oil back to tank at a set pressure."],
      ["Which pump type commonly gives a fixed displacement per revolution?", "Gear pump", "A variable swashplate piston pump that changes its output", "A load-sensing piston pump that matches the demand", "A pressure-compensated pump that cuts off at a set pressure", "Gear pumps deliver a fixed volume each revolution."],
      ["Flow in a hydraulic cylinder determines mainly its:", "Speed", "Force, because force depends on flow and not on pressure", "Pressure rating of the cylinder at the rod seal", "Rod finish, so that the seal is protected", "Cylinder speed depends on flow divided by area. Force depends on pressure."],
      ["Cavitation in a pump is caused by:", "Starved inlet or air or vapour in the oil", "Too much oil in the tank, which floods the inlet", "Cold weather only, which thickens the oil in the tank", "A tight relief valve that raises the pressure", "Cavitation damages pump parts and makes a harsh noise."],
      ["A filter's job in a hydraulic system is to:", "Remove contamination to protect components", "Raise the pressure so that the system works harder", "Cool the oil as it passes back to the tank", "Reduce the flow, so that the cylinders move more slowly", "Contamination causes most hydraulic failures."],
      ["A planetary gear set has a sun gear of 20 teeth and a ring gear of 80 teeth. With the ring held and sun as input, carrier as output, the ratio is:", "5:1", "4:1, found by dividing the ring gear teeth by the sun gear teeth", "1:4, the inverse of the correct ratio, as for a reduction", "3:1, found by subtracting one from the tooth ratio of 4", "Ratio = 1 + ring/sun = 1 + 80/20 = 5."],
      ["A torque converter:", "Transmits power through fluid and can multiply torque", "Is a solid clutch only, with no fluid inside the housing", "Filters oil for the transmission circuit", "Stores energy in a spring, to be used at start-up", "It uses an impeller, turbine, and stator."],
      ["A wet disc brake in a heavy machine is cooled by:", "Oil", "Air only, blown over the outside of the housing", "Water spray, applied from a tank on the machine", "Dry friction only, so no cooling is needed", "Oil-cooled discs give long life in dirty environments."],
      ["On a tracked machine, sprockets, idlers, and rollers are part of the:", "Undercarriage", "The cab and its mounting", "The fuel system and its injectors", "The hydraulic pump and the drive coupling", "The undercarriage carries and drives the machine."],
      ["Track sag is adjusted by:", "A track adjuster, using grease or a tensioning cylinder per procedure", "Replacing the engine mounts, which sets the track position", "Adding air to the track, so that the shoes lift up", "Swapping the rollers, so that the track pitch is changed", "Too tight accelerates wear. Too loose can derail the track."],
      ["Greasing the pins and bushings regularly:", "Reduces wear and extends service life", "Is optional, as modern bushings do not need grease", "Makes the parts looser, so it should be avoided", "Prevents all leaks from the hydraulic system", "Daily lubrication is a basic maintenance duty."],
      ["Many heavy machines use a 24 V electrical system made with:", "Two 12 V batteries in series", "Two 12 V batteries in parallel, which keep 12 V and double the capacity", "A single 6 V battery, rated for heavy machines", "A single 12 V battery, with a larger alternator to raise the voltage", "Series connection adds the voltages."],
      ["Which of these is the correct gas for charging a hydraulic accumulator?", "Dry nitrogen", "Oxygen, since it is easy to get and gives a high pressure", "Compressed air from the shop, which is dry enough", "Propane, as it is a stable gas at low pressure", "Oxygen or air with oil can explode. Use nitrogen only."],
      ["Engine coolant should be tested for:", "Freeze protection and corrosion inhibitor level", "Colour only, since colour shows the type of coolant", "Clarity only, since cloudy coolant is the main concern", "Taste, so that any contamination can be detected", "Test strips or a refractometer check protection."]
    ]),
    3: mk(0, [
      ["A hydraulic cylinder drifts down slowly under load. A likely cause is:", "Internal leakage past the piston seals or a leaking valve", "Too much oil in the tank, which makes the cylinder move", "A clean filter that is restricting the return flow", "A fully charged battery that is raising the system voltage", "Leakage allows oil to bypass, so the load creeps."],
      ["An open-centre hydraulic system:", "Allows oil to flow through the valve back to tank when the valve is centred", "Blocks the flow when centred, so that the pump builds pressure", "Uses no pump, since the oil is moved by gravity", "Cannot control a cylinder, so it is used for motors only", "Open centre returns pump flow to tank at low pressure when idle."],
      ["A load-sensing system adjusts:", "Pump flow and pressure to match the demand", "Engine fuel only, so that the engine speed matches the load", "Brake force, according to the position of the pedal", "Track tension, using the pressure from the pump", "It saves energy by delivering only the needed flow."],
      ["A hydraulic pressure test should be done:", "With a gauge of suitable range connected at the proper test port", "By feel, running a hand along the hose for pulses", "Without a gauge, by watching the speed of the cylinder", "With a damaged hose, as the test pressure is low", "Accurate gauges at test ports give reliable results."],
      ["A hydrostatic drive uses:", "A variable hydraulic pump and motor to propel the machine", "A mechanical clutch only, with a gearbox and shafts", "A belt drive that is tensioned with a spring", "A chain drive only, with a sprocket at each wheel", "Hydrostatic drives use fluid power for travel."],
      ["Which test best identifies a worn hydraulic pump?", "A flow test at a specified rpm and pressure", "A visual check of the tank for foam and oil level", "Smelling the oil for a burnt odour", "A battery test at the starter terminals", "Flow versus specification shows pump efficiency."],
      ["A tapered roller wheel bearing is typically adjusted by:", "Following the manufacturer's preload procedure", "Tightening it as hard as possible to remove all play", "Leaving it loose so that the bearing can run cool", "Adding thicker grease until the play is taken up", "Incorrect preload shortens bearing life."],
      ["Oil sampling (scheduled oil analysis) can show:", "Wear metals, contamination, and fluid condition", "Tire pressure and tread wear on each wheel", "Operator skill and habits during the shift", "The fuel price and the supplier's rating", "Analysis helps predict failures before they happen."],
      ["A common sign of coolant in engine oil is:", "A milky or foamy appearance", "A darker, thicker feel as the oil ages", "A clean look with no change in colour", "Reduced fuel use and a quieter engine", "Coolant mixing with oil creates a milky emulsion."],
      ["When replacing a hydraulic hose you should:", "Use a hose with the correct pressure rating and fittings", "Use any hose that fits the fittings and the length", "Use a garden hose, since it is cheap and flexible", "Use a thinner hose to save on cost and weight", "Hoses must match system pressure, temperature, and fluid."],
      ["A final drive failure is often first noticed by:", "Noise, metal in the oil, or heat", "A tight track and less sag", "Cabin odour from the heater", "A clean magnet on the drain plug", "Metal in the oil indicates gear or bearing wear."],
      ["A diesel particulate filter on a Tier 4 machine:", "Traps soot, which is burned off during regeneration", "Cools the engine by passing the exhaust through a radiator", "Raises the hydraulic pressure at the main pump", "Filters the fuel before it reaches the injectors", "It reduces particulate emissions."],
      ["SCR on an off-road engine uses:", "Diesel exhaust fluid to reduce NOx", "Water injection to cool the combustion", "Ethanol, to raise the cetane rating of the fuel", "Engine oil, sprayed into the exhaust stream", "DEF breaks down to ammonia in the exhaust."],
      ["A parasitic battery drain test is done with:", "The key off and an ammeter in series", "The engine running, so the alternator is charging", "Jumper cables connected to a second battery", "A voltmeter across the starter terminals", "Current drain with everything off reveals a faulty circuit."],
      ["If hydraulic oil temperature is higher than normal, a likely cause is:", "A plugged cooler, low oil, or a worn pump", "Cold weather, which thickens the oil in the cooler", "A clean filter that passes the oil freely", "New seals that grip the cylinder more tightly", "Heat results from restricted flow or internal leakage."],
      ["Blocking a machine for work requires:", "Rated stands or cribbing placed on firm ground", "A single jack under the frame, which is quick to set up", "Wood scraps stacked under the frame, as a cheap support", "Leaving the bucket partly raised, to hold the machine steady", "Cribbing and stands must be rated and stable."],
      ["The steering on an articulated loader is controlled by:", "Hydraulic cylinders between the frame halves", "A chain drive linked to the steering wheel", "A rack and pinion only, as on a car", "The brakes, applied on one side to turn the machine", "Cylinders pivot the frame at the articulation joint. Use the articulation lock before servicing."]
    ]),
    4: mk(1, [
      ["In an ISO 4406 cleanliness code of 18/16/13, the three numbers refer to:", "Particle counts at three size ranges", "Three viscosities, measured at different temperatures", "Three pressures, at different points in the circuit", "Three temperatures, at the pump, the tank, and the cooler", "ISO 4406 reports particle counts per millilitre at three sizes."],
      ["Which is the best first step when diagnosing slow boom speed on an excavator?", "Check the complaint, oil level, and filters, then test pump flow and pressure", "Replace the main pump straight away, since that is the usual cause", "Replace the control valve, since it is the next most likely cause", "Drain the tank and refill with new oil before any testing", "Do simple checks first to avoid unneeded replacement."],
      ["A hydraulic cylinder with a 100 mm bore at 20 MPa produces about:", "157 kN", "20 kN, found by using the bore in millimetres", "314 kN, found by using the diameter in place of the radius", "78 kN, found by using half the radius", "Area is π × 50² = 7854 mm². Force = 20 N/mm² × 7854 mm² ≈ 157 kN."],
      ["A suspected faulty relief valve is checked by:", "Reading pressure at the test port while deadheading the circuit safely", "Hitting the valve body with a hammer to free the spool", "Removing the filter so the oil can pass freely", "Draining the tank to see if there are any metal particles", "Test per the service manual, using proper safeguards."],
      ["A machine's hour meter is used for:", "Scheduling maintenance intervals and recording usage", "Measuring the fuel price at the pump", "Setting the torque on the fasteners", "Timing the engine at idle speed", "Service intervals are set in hours."],
      ["Telematics on modern machines can:", "Report hours, fault codes, and location remotely", "Replace maintenance with remote monitoring", "Reduce the need for safety practices on site", "Operate machines without any operator training", "Data helps schedule service and anticipate faults."],
      ["Welding on a machine with electronic control modules requires you to:", "Follow manufacturer steps such as disconnecting batteries and modules", "Leave everything connected, as the modules are protected", "Weld at maximum amperage so the job is quick", "Remove only the radio, since it is the only electronic item", "Welding current can destroy electronics."],
      ["A root cause analysis aims to:", "Find the underlying failure so the problem does not recur", "Assign blame to the last person who worked on the machine", "Order more parts so that the machine can be fixed quickly", "Reduce paperwork by combining the repair records", "Treating symptoms leads to repeat failures."],
      ["Component rebuild versus replacement decisions usually consider:", "Cost, downtime, warranty, and condition of the core", "Paint colour of the machine and its attachments", "Operator preference only, and no other factors", "Tool brand and the cost of the special tools", "Total cost and availability drive the decision."],
      ["Which fluid hazard should be treated as high-risk during a hydraulic hose replacement?", "Hot oil and stored pressure", "Cold water on the floor of the shop", "Clean air in the compressor tank", "Dry grease on the pins and bushings", "Hot pressurized oil causes burns and injection."],
      ["Before entering a confined space such as a large tank you must:", "Follow a permit and test the atmosphere", "Hold your breath while you go in, and come out quickly", "Send in a tool only, and look around from the door", "Skip the paperwork when the job is quick and simple", "Confined spaces can have low oxygen or toxic gas."],
      ["Which task is covered by manufacturer service procedures rather than guesses?", "Torque, calibration, and software updates", "Weather checks and the daily report to the dispatcher", "Break times and the lunch period during the shift", "Paint colour and decals on the machine", "Follow the service manual and technical bulletins."],
      ["When a machine has a safety-related defect, you should:", "Tag it out of service and report it", "Return it to work with a warning note taped to the controls", "Fix it later, once the current job is completed", "Ignore the defect if it does not affect production", "Unsafe machines must not be operated."],
      ["A damaged ROPS structure after a rollover should be:", "Replaced or repaired only as the manufacturer approves", "Straightened with a torch and then put back in service", "Welded by any shop that has a certified welder", "Painted and reused, as long as there are no cracks", "Welding or modifying a ROPS can destroy its certification."],
      ["A hydraulic accumulator should be discharged:", "Before servicing, following the manufacturer's procedure", "Never, since it is sealed for life", "By cutting the line to release the oil and gas", "Only after removing the gas valve cap and the nitrogen", "Stored gas and oil pressure remains after shutdown."],
      ["Good documentation of a repair includes:", "Complaint, cause, correction, parts, and hours", "Only the part number and the date of the work", "The invoice only, with no other details of the repair", "The operator's name only, and the time that the machine was returned", "Records support warranty and future diagnosis."],
      ["Preventive maintenance reduces:", "Unplanned downtime and costly repairs", "The need for safety practices on the machine", "Operator training that is needed for each machine", "Fuel quality problems in the supply tanks", "Scheduled service finds wear early."],
      ["If a machine's engine overheats, which is the best first step?", "Shut down safely, let it cool, then inspect coolant, cooler, and fan", "Open the radiator cap while it is hot to let the steam out", "Keep working at a lower speed so the machine can cool", "Add cold water to a hot engine to bring the temperature down", "Hot coolant under pressure can scald. Let it cool first."]
    ])
  };

  const roadmapSteps = [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get safety training employers ask for (commonly WHMIS, fall protection, and site orientation; requirements vary)", "Prepare a resume and apply to equipment dealers, mining, construction, forestry, and rental companies", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: shop safety and basics", items: ["Learn shop and site safety, lockout, blocking, and fluids handling", "Do preventive maintenance: greasing, filters, fluids, and walk-around inspections", "Learn measuring tools, torque, and fasteners", "Study electrical basics and charging systems", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: hydraulics and undercarriage", items: ["Learn hydraulic components and read basic hydraulic schematics", "Service cylinders, hoses, and pumps under supervision", "Inspect and service undercarriage and wheel-end systems", "Use pressure gauges and take readings correctly"] },
    { title: "Year 3: power trains and engines", items: ["Service and diagnose powershift transmissions, torque converters, and final drives", "Diagnose diesel engine and fuel system problems", "Work with cooling systems and air intake", "Use electronic diagnostic tools to read and interpret fault codes"] },
    { title: "Year 4 and beyond: advanced diagnostics and field service", items: ["Diagnose complex hydraulic, electrical, and electronic faults", "Handle aftertreatment and Tier 4 systems", "Plan repairs, order parts, and document work", "Mentor first-year apprentices and use the Red Seal standard to find gaps"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal exam information and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ];

  const glossary = [
    ["Accumulator", "A vessel that stores hydraulic energy, usually with a nitrogen-charged bladder or piston."],
    ["Articulation lock", "A bar that locks the two halves of an articulated machine for service and transport."],
    ["Bore", "The inside diameter of a cylinder."],
    ["Bushing", "A sleeve bearing that sits between a pin and its bore."],
    ["Cavitation", "Formation and collapse of vapour bubbles in oil, caused by starved inlet or low pressure."],
    ["Check valve", "A valve that lets oil flow in one direction only."],
    ["Cribbing", "Stacked blocks used to support equipment or loads safely."],
    ["Displacement", "The volume a pump or motor moves in one revolution."],
    ["DPF", "Diesel particulate filter, which traps soot until it is burned off."],
    ["Drawbar pull", "The pulling force a machine can deliver at its drawbar or hitch."],
    ["Final drive", "The last reduction gear set that turns the track sprocket or wheel."],
    ["FOPS", "Falling object protective structure."],
    ["Hydrostatic drive", "A drive using a hydraulic pump and motor to move the machine."],
    ["Idler", "A wheel at the front of the track frame that guides the track and holds tension."],
    ["Load sensing", "A hydraulic control that matches pump output to the work demand."],
    ["Lockout/tagout", "A procedure that keeps energy sources off while equipment is serviced."],
    ["Pilot pressure", "Low-pressure oil used to control a larger valve or pump."],
    ["Planetary gear set", "A sun, planet, and ring gear arrangement used for high torque in a compact space."],
    ["Pressure-compensated pump", "A pump that holds a set pressure by changing its displacement."],
    ["Relief valve", "A valve that limits maximum hydraulic system pressure."],
    ["ROPS", "Rollover protective structure that protects the operator in a rollover."],
    ["SCR", "Selective catalytic reduction, which uses DEF to reduce NOx."],
    ["SDS", "Safety Data Sheet, the 16-section document describing a product's hazards and handling."],
    ["Spool valve", "A directional control valve with a sliding spool that routes oil."],
    ["Sprocket", "The toothed wheel that drives the track."],
    ["Stator", "The reaction member of a torque converter that redirects fluid to multiply torque."],
    ["Swashplate", "A tilting plate in an axial piston pump that sets piston stroke and displacement."],
    ["Telematics", "Remote monitoring of machine data such as hours, location, and fault codes."],
    ["Tier 4", "A stage of off-road diesel emission standards that requires aftertreatment on larger engines."],
    ["Torque converter", "A fluid coupling that can multiply torque between the engine and transmission."],
    ["Undercarriage", "Tracks, rollers, idlers, sprockets, and frames that carry a tracked machine."],
    ["WHMIS", "Workplace Hazardous Materials Information System, Canada's hazard communication standard."]
  ];

  const reference = [
    {
      title: "Conversions",
      list: [
        "1 in = 25.4 mm, and 1 ft = 304.8 mm",
        "1 psi ≈ 6.895 kPa, 1 bar = 100 kPa ≈ 14.5 psi, and 1 MPa ≈ 145 psi",
        "1 lb-ft ≈ 1.356 N-m, and 1 N-m ≈ 0.738 lb-ft",
        "1 US gallon ≈ 3.785 L, and 1 Imperial gallon ≈ 4.546 L",
        "1 US gpm ≈ 3.785 L/min",
        "1 hp ≈ 0.746 kW"
      ]
    },
    {
      title: "Hydraulic formulas",
      list: [
        "Force: F = P × A (pressure × area). With MPa and mm², the result is in newtons",
        "Cylinder area: A = π × d² ÷ 4. A 100 mm bore is about 7854 mm²",
        "Speed: cylinder speed = flow ÷ area. More flow means faster, not stronger",
        "Pump flow = displacement per revolution × rpm (adjusted for efficiency)",
        "Pascal's law: pressure on a confined fluid is transmitted equally in all directions",
        "Pressure results from resistance to flow. A pump creates flow, not pressure"
      ],
      note: "A rod-side area is smaller than the cap-side area, so a cylinder extends with more force and retracts faster at the same flow."
    },
    {
      title: "Hydraulic components at a glance",
      table: {
        head: ["Component", "Job"],
        rows: [
          ["Pump (gear, vane, piston)", "Creates flow of oil"],
          ["Relief valve", "Limits maximum system pressure"],
          ["Directional control valve", "Routes oil to the actuators"],
          ["Cylinder", "Converts fluid power to linear force and motion"],
          ["Hydraulic motor", "Converts fluid power to rotary motion"],
          ["Filter and breather", "Control particle contamination and air entering the tank"],
          ["Cooler", "Removes heat from the oil"],
          ["Accumulator", "Stores energy. Must be discharged and handled per the manufacturer"]
        ]
      },
      note: "Always read the machine's schematic before testing. Pressure settings and test points differ by model."
    },
    {
      title: "Planetary gear ratios",
      table: {
        head: ["Input", "Held", "Output", "Ratio"],
        rows: [
          ["Sun", "Ring", "Carrier", "1 + ring ÷ sun (speed reduction, torque increase)"],
          ["Ring", "Sun", "Carrier", "1 + sun ÷ ring (smaller reduction)"],
          ["Sun", "Carrier", "Ring", "ring ÷ sun, with reversed direction"],
          ["Any two members locked together", "none", "All turn as one", "1:1 direct"]
        ]
      },
      note: "Example: 20 tooth sun and 80 tooth ring, sun input and ring held, gives 1 + 80/20 = 5:1."
    },
    {
      title: "Electrical formulas (DC)",
      list: [
        "Ohm's law: V = I × R, so I = V ÷ R and R = V ÷ I",
        "Power: P = V × I (watts = volts × amps)",
        "Series circuit: resistances add, and current is the same everywhere",
        "Parallel circuit: voltage is the same across every branch, and branch currents add",
        "Two 12 V batteries in series give 24 V. In parallel they give 12 V with more capacity"
      ]
    },
    {
      title: "Safety and standards pointers",
      list: [
        "<strong>WHMIS and SDS:</strong> labels and 16-section data sheets for shop chemicals",
        "<strong>Provincial occupational health and safety regulations:</strong> lockout, blocking, fall protection, and confined space rules",
        "<strong>CSA Z94.1:</strong> industrial protective headwear. <strong>CSA Z195:</strong> protective footwear",
        "<strong>ROPS and FOPS:</strong> operator protective structures that must not be modified without manufacturer approval",
        "<strong>Off-road engine emission standards (Tier levels):</strong> removing or defeating emission controls is not allowed",
        "<strong>Manufacturer service information:</strong> torque specs, test pressures, and procedures for your machine"
      ],
      note: "Confirm which edition and standard your province and employer use."
    }
  ];

  registerTrade({
    id: "heavy-duty-technician",
    store: "heavy-duty-technician",
    title: "Heavy Duty Equipment Technician",
    name: "Heavy Duty Equipment Technician",
    short: "heavy duty equipment repair",
    category: "Heavy Equipment · Hydraulics · Mining and Construction",
    summary: "Heavy duty equipment technicians inspect, diagnose, and repair construction, mining, forestry, and industrial machines, from engines and hydraulics to power trains and electronics.",
    work: "You service excavators, loaders, dozers, haul trucks, and similar machines in shops and out in the field. Expect hydraulics, large components, and remote work, sometimes in rough weather. Careful diagnosis and safe lifting and blocking matter as much as turning wrenches.",
    duration: "Usually about 3 to 4 years, varies by province",
    union: "International Association of Machinists and Aerospace Workers (IAM)",
    unionUrl: "https://www.iamaw.ca/",
    jobSearch: "heavy duty equipment technician apprentice",
    journeySearch: "heavy duty equipment technician",
    aliases: "heavy equipment mechanic hetm hdet red seal 421a diesel mechanic excavator mechanic mining mechanic construction equipment mechanic",
    tools: ["Combination wrenches, metric and SAE", "1/2 in and 3/4 in socket sets", "Torque wrench", "Digital multimeter", "Hydraulic pressure test gauge kit", "CSA safety boots, hard hat, glasses, and gloves"],
    insight: {
      skills: ["Hydraulic and mechanical troubleshooting", "Reading hydraulic and electrical schematics", "Comfort with large components and field work", "Careful documentation and planning"],
      hazards: ["Stored hydraulic energy: relieve pressure and never check leaks by hand", "Raised booms and heavy components: block and support before working beneath", "Crushing and pinch points: use lockout and articulation locks", "Hot fluids, noise, and dust: wear PPE and follow WHMIS"],
      settings: ["Equipment dealerships and rental yards", "Mining and quarry operations", "Construction and forestry companies", "Mobile field service and shops"]
    },
    toolGroups,
    mediaGroups,
    practiceBank,
    roadmapSteps,
    glossary,
    cards: [
      { front: "Force equation for a cylinder", back: "F = P × A" },
      { front: "What creates hydraulic pressure?", back: "Resistance to flow. A pump creates flow." },
      { front: "1 MPa in psi", back: "About 145 psi" },
      { front: "Cylinder speed depends on", back: "Flow ÷ piston area" },
      { front: "Planetary ratio: sun input, ring held, carrier output", back: "1 + ring teeth ÷ sun teeth" },
      { front: "Gas used to charge a hydraulic accumulator", back: "Dry nitrogen only" },
      { front: "Before working under a raised boom", back: "Block or lock it. Never rely on hydraulics alone." },
      { front: "Hydraulic injection injury", back: "High-pressure oil can penetrate skin. Get medical help at once." },
      { front: "ROPS", back: "Rollover protective structure" },
      { front: "lb-ft to N-m", back: "1 lb-ft ≈ 1.356 N-m" }
    ],
    jobsIntro: "Look for equipment dealerships, mining and quarry operations, construction and forestry companies, rental companies, and municipal and utility fleets.",
    tips: ["Bring a short resume, your safety tickets, and a valid driver's licence if you have one.", "Show interest in hydraulics, diagnostics, and working on large machines.", "Visit dealers and shops in person when you can, and follow up.", "Ask what tools you need and what the employer supplies, especially for field work."],
    forumTopics: ["Starting out", "Hydraulics and schematics", "Power trains and undercarriage", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference
  });
})();
