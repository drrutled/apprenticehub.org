// Automotive Service Technician content. Practice questions are original study aids, not official Red Seal exam questions.
(() => {
  // Each row: [question, correct answer, [three wrong answers], explanation]. The correct position rotates per question.
  const bank = (rows, offset) => rows.map(([q, correct, wrong, explain], i) => {
    const answer = (i + offset) % 4;
    const options = [...wrong];
    options.splice(answer, 0, correct);
    return { q, options, answer, explain };
  });

  const toolNote = "Professional-grade tools that hold their accuracy for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.";

  registerTrade({
    id: "automotive-service-technician",
    store: "automotive-service-technician",
    title: "Automotive Service Technician",
    name: "Automotive Service Technician",
    short: "automotive service",
    category: "Automotive · Repair · Diagnostics",
    summary: "Diagnose, maintain, and repair cars and light trucks, from brakes, steering, and engines to electrical, climate control, and computer-controlled systems.",
    work: "Automotive service technicians inspect vehicles, find faults using scan tools and test equipment, and repair or replace worn and failed parts. Work happens in dealerships, independent shops, and fleet garages, and includes routine maintenance as well as complex electronic diagnosis. Technicians keep learning as vehicles add hybrid, electric, and driver-assistance technology.",
    duration: "Usually 4 years, varies by province",
    union: "Unifor",
    unionUrl: "https://www.unifor.org/",
    jobSearch: "automotive service technician apprentice",
    journeySearch: "automotive service technician",
    aliases: "auto mechanic car mechanic mechanic automotive technician garage dealership service tech red seal 310s",
    tools: [
      "Metric and SAE socket and wrench sets",
      "Torque wrench (N·m and lb-ft)",
      "Digital multimeter",
      "Quality screwdrivers and pliers",
      "Safety glasses, gloves, and CSA safety boots",
      "Rolling tool box"
    ],
    insight: {
      skills: ["Logical, step-by-step diagnosis", "Mechanical aptitude and attention to detail", "Basic electrical and math skills", "Clear communication with customers and service advisors"],
      hazards: ["Vehicle falling off a lift or jack: use rated stands and lift points", "Carbon monoxide: use exhaust extraction when engines run indoors", "Hot fluids and parts: let systems cool, wear gloves", "High-voltage hybrid and EV systems: follow manufacturer procedures and wear rated PPE"],
      settings: ["Dealership service departments", "Independent repair shops", "Fleet and municipal garages", "Specialty shops such as brakes, tires, and transmissions"]
    },
    toolGroups: [
      {
        title: "Day-one tools, buy once and buy well",
        note: toolNote,
        items: [
          { name: "GearWrench or Sunex 3/8 in drive socket set (metric and SAE)", why: "Six-point sockets grip fasteners without rounding them. A 3/8 in drive set handles most under-hood work.", search: "GearWrench 3/8 drive socket set metric SAE" },
          { name: "Combination wrench set, metric and SAE", why: "Ratcheting or standard combination wrenches reach where sockets cannot.", search: "GearWrench ratcheting combination wrench set metric" },
          { name: "3/8 in drive click-type torque wrench", why: "Most engine, suspension, and wheel fasteners have a torque spec. A quality wrench keeps it accurate.", search: "3/8 drive click torque wrench N·m ft-lb" },
          { name: "Digital multimeter (Fluke or Klein)", why: "Measures voltage, resistance, and current for every electrical diagnosis you will do.", search: "Fluke digital multimeter automotive" },
          { name: "Screwdriver set and trim removal tools", why: "Quality tips resist cam-out, and nylon trim tools stop you breaking clips and marking panels.", search: "Wera screwdriver set automotive trim removal tool kit" },
          { name: "Pliers set: slip-joint, needle-nose, side cutters, locking", why: "Everyday gripping, cutting, and holding jobs.", search: "Knipex pliers set automotive Vise-Grip locking pliers" },
          { name: "Mechanic's work gloves and nitrile gloves", why: "Protect hands from sharp edges, hot parts, and oils and solvents.", search: "Mechanix Wear gloves nitrile gloves mechanic" },
          { name: "Safety glasses and CSA-approved safety boots", why: "Debris and dripping fluids are constant. Rated, comfortable protection is what you will actually wear.", search: "safety glasses CSA safety boots Blundstone Dakota" },
          { name: "Magnetic parts tray and LED work light", why: "Keeps fasteners together and lights dark engine bays.", search: "magnetic parts tray rechargeable LED work light" }
        ]
      },
      {
        title: "Build up in first and second year",
        note: "Buy these as the work calls for them. Ask your journeyperson what holds up in your shop.",
        items: [
          { name: "1/2 in drive socket set and breaker bar", why: "Suspension, axle, and wheel fasteners need more leverage than 3/8 in drive gives.", search: "1/2 drive socket set breaker bar impact rated" },
          { name: "Deep and impact sockets, including axle nut sizes", why: "Needed for strut nuts, spindle nuts, and lug nuts.", search: "impact socket set deep metric lug nut socket" },
          { name: "Brake tools: caliper piston tool, line wrenches, bleeder kit", why: "Flare nut wrenches protect brake line fittings and a bleeder kit makes bleeding safe and clean.", search: "brake caliper piston tool flare nut wrench set brake bleeder kit" },
          { name: "Feeler gauge set and spark plug gap tool", why: "Checks valve and plug gaps to specification.", search: "feeler gauge set spark plug gap tool" },
          { name: "Cordless impact wrench or 1/2 in impact (Milwaukee or Makita)", why: "Speeds up wheel and suspension work. Choose one battery platform and stay with it.", search: "Milwaukee M18 FUEL 1/2 impact wrench" },
          { name: "Test light, jumper leads, and back-probe set", why: "Basic circuit testing without piercing wire insulation.", search: "automotive circuit tester power probe back probe kit" },
          { name: "Compression tester and vacuum gauge", why: "Basic engine health checks.", search: "compression tester kit vacuum pump gauge automotive" },
          { name: "Hydraulic floor jack and jack stands (if shop does not supply)", why: "Rated stands hold a vehicle. A floor jack alone never does.", search: "3 ton floor jack 3 ton jack stands" }
        ]
      },
      {
        title: "Later and specialized",
        note: "Often supplied by the shop or employer. Ask before buying.",
        items: [
          { name: "Professional scan tool (Autel, Launch, Snap-on, or OEM tool)", why: "Reads codes and live data and runs bi-directional tests. Usually a shop tool, so learn the shop's.", search: "Autel MaxiSys Launch professional scan tool" },
          { name: "Lab scope or automotive oscilloscope (PicoScope)", why: "Shows sensor and network signals over time, which is essential for advanced diagnosis.", search: "PicoScope automotive oscilloscope kit" },
          { name: "A/C manifold gauges and refrigerant recovery machine", why: "Refrigerant handling requires certification and equipment. Normally shop-supplied.", search: "A/C manifold gauge set R134a R1234yf" },
          { name: "Insulated hand tools and Class 0 rubber gloves with protectors", why: "Required for hybrid and EV high-voltage work. Training comes first.", search: "insulated tools 1000V electrician Class 0 rubber insulating gloves" },
          { name: "Fuel pressure tester and smoke machine", why: "Finds fuel-delivery problems and vacuum or EVAP leaks.", search: "fuel pressure test kit EVAP smoke machine automotive" }
        ]
      },
      {
        title: "School supplies for technical training",
        note: "What helps in the classroom for diagnosis, math, and service information. Check with your school and your exam body about calculator rules before you buy.",
        items: [
          { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Ohm's law, ratios, torque and fuel math.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
          { name: "Steel ruler (metric and imperial) and digital caliper", why: "Measuring parts and understanding tolerances.", search: "digital caliper 150mm steel ruler metric imperial" },
          { name: "Field notebook (Rite in the Rain)", why: "Record torque specs, test results, and diagnosis steps. Weatherproof paper survives a shop.", search: "Rite in the Rain field notebook" },
          { name: "Wiring diagram highlighters and coloured pencils", why: "Tracing circuits on schematics is a core diagnostic skill.", search: "highlighters coloured pencils set" },
          { name: "Binder, dividers, and sticky tabs", why: "Organize notes by system for study and exam review.", search: "binder dividers sticky tabs" },
          { name: "Automotive technology textbook or study guide (Red Seal exam prep)", why: "Reinforces classroom learning. Ask your school which edition they use.", search: "automotive technology textbook Canada Red Seal study guide" },
          { name: "USB memory stick and a tablet or laptop", why: "Service information and course files are digital.", search: "USB flash drive 32GB tablet stand" }
        ]
      }
    ],
    mediaGroups: [
      {
        title: "Official and standards resources",
        items: [
          { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare, including the trade profile for your trade.", url: "https://red-seal.ca/eng/welcome.shtml" },
          { name: "Automotive Industries Association of Canada (AIAC)", desc: "Industry information for the Canadian automotive aftermarket.", url: "https://www.aiacanada.com/" },
          { name: "Unifor", desc: "Union representing many automotive and service workers in Canada.", url: "https://www.unifor.org/" },
          { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Plain-language WHMIS, hazard, and workplace safety information.", url: "https://www.ccohs.ca/" },
          { name: "ASE (Automotive Service Excellence)", desc: "A North American certification body whose study materials many technicians use for extra practice.", url: "https://www.ase.com/" }
        ]
      },
      {
        title: "Video searches",
        note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and manufacturer service information.",
        items: [
          { name: "Brake system basics", desc: "How hydraulic disc and drum brakes work.", url: "https://www.youtube.com/results?search_query=automotive+brake+system+basics+disc+drum" },
          { name: "Using a digital multimeter on a car", desc: "Voltage, resistance, and continuity testing.", url: "https://www.youtube.com/results?search_query=using+a+multimeter+automotive+voltage+drop+test" },
          { name: "Four-stroke engine operation", desc: "Intake, compression, power, and exhaust strokes.", url: "https://www.youtube.com/results?search_query=four+stroke+engine+how+it+works+automotive" },
          { name: "Reading automotive wiring diagrams", desc: "Following circuits, grounds, and relays.", url: "https://www.youtube.com/results?search_query=how+to+read+automotive+wiring+diagrams" },
          { name: "OBD-II scan tool and live data", desc: "Reading codes, freeze frame, and fuel trims.", url: "https://www.youtube.com/results?search_query=OBD2+scan+tool+live+data+fuel+trims+explained" },
          { name: "Wheel alignment angles", desc: "Camber, caster, and toe explained.", url: "https://www.youtube.com/results?search_query=wheel+alignment+camber+caster+toe+explained" },
          { name: "Automotive A/C system diagnosis", desc: "Refrigerant circuit and pressure readings.", url: "https://www.youtube.com/results?search_query=automotive+air+conditioning+system+how+it+works+diagnosis" },
          { name: "Hybrid and EV safety for technicians", desc: "High-voltage safety principles.", url: "https://www.youtube.com/results?search_query=hybrid+electric+vehicle+high+voltage+safety+technician" }
        ]
      },
      {
        title: "Audio, beginner (pre-apprentice and year 1)",
        note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for automotive service yourself.",
        items: [
          { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
          { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
          { name: "YouTube: auto mechanic apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=auto+mechanic+apprentice+podcast" }
        ]
      },
      {
        title: "Audio, intermediate (years 2-3)",
        note: "Trade-knowledge talk that builds on what you do on the job.",
        items: [
          { name: "YouTube: automotive diagnostics podcast", desc: "Technicians talk through electrical and driveability diagnosis.", url: "https://www.youtube.com/results?search_query=automotive+diagnostics+podcast+technician" },
          { name: "YouTube: engine performance and fuel trims (listen-along)", desc: "Talks on sensors, fuel trims, and misfires to hear while commuting.", url: "https://www.youtube.com/results?search_query=engine+performance+diagnosis+fuel+trim+misfire+podcast" },
          { name: "YouTube: shop stories and tips from mechanics (audio)", desc: "Job-site lessons and troubleshooting stories from working technicians.", url: "https://www.youtube.com/results?search_query=mechanic+podcast+tips+stories+shop" }
        ]
      },
      {
        title: "Audio, advanced (year 4 to journeyperson)",
        note: "Exam prep, shop business, and leadership.",
        items: [
          { name: "YouTube: Red Seal automotive service technician exam prep", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+automotive+service+technician+exam+preparation" },
          { name: "YouTube: auto repair shop business podcast", desc: "Service writing, flat rate, and running a shop.", url: "https://www.youtube.com/results?search_query=auto+repair+shop+owner+business+podcast" },
          { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
        ]
      }
    ],
    practiceBank: {
      1: bank([
        ["Where do you find the hazards and first-aid measures for a product such as brake cleaner?", "Safety Data Sheet (SDS)", ["The repair order the customer signed at the front desk", "The tire placard on the driver's door jamb", "The odometer reading recorded at check-in"], "The SDS describes hazards, handling, and first aid. WHMIS requires products to be labelled and SDS available."],
        ["Which equipment should hold a raised vehicle while you work under it?", "Properly rated jack stands on level, firm ground", ["A floor jack alone, since it is rated for the vehicle weight", "Concrete blocks stacked under the frame rails", "Wood stacked under the bumper to spread the load"], "A jack lifts but does not hold. Use jack stands or a lift locked on the manufacturer's lift points."],
        ["In an engine oil grade such as 5W-30, the W stands for:", "Winter", ["Weight, since it describes how heavy the oil is", "Wear, since it rates the oil's wear protection", "Water, since it rates how well the oil resists moisture"], "The number before the W describes cold-flow performance. The second number is the viscosity at operating temperature."],
        ["What is the order of the four-stroke cycle?", "Intake, compression, power, exhaust", ["Intake, power, compression, exhaust", "Compression, intake, exhaust, power", "Power, intake, exhaust, compression"], "Air and fuel enter, are compressed, burn to push the piston, then exhaust leaves."],
        ["The metric unit of torque is the:", "Newton-metre (N·m)", ["Kilopascal (kPa), which measures pressure", "Litre (L), which measures volume", "Watt (W), which measures power"], "1 lb-ft is about 1.356 N·m."],
        ["A fully charged 12 V lead-acid battery at rest reads about:", "12.6 V", ["10.5 V, which means the battery is only slightly low", "14.4 V, which is a typical charging voltage with the engine running", "9.6 V, which is the cranking voltage of a good battery"], "About 12.6 V at rest. A charging system typically shows higher voltage with the engine running."],
        ["Why tighten wheel nuts in a star (criss-cross) pattern?", "It seats the wheel evenly against the hub", ["It makes the nuts easier to remove later on", "It is faster than tightening them in a circle", "It prevents rust from forming on the studs"], "Even seating avoids warped rotors and loose wheels. Finish with a torque wrench to the specified value."],
        ["Which fire extinguisher class is for flammable liquids such as gasoline and oil?", "Class B", ["Class A, for ordinary combustibles such as wood and paper", "Class C, for energized electrical equipment", "Class D, for combustible metals such as magnesium"], "Class A is ordinary combustibles, B is flammable liquids, C is energized electrical, and D is combustible metals."],
        ["Why does brake fluid need to be replaced periodically?", "Glycol-based fluid absorbs moisture, which lowers its boiling point", ["It turns into oil as the fluid breaks down over time", "It gets thicker with age and can no longer flow", "It evaporates in the lines and leaves air in the system"], "Moisture in the fluid can cause vapour and a soft pedal under heavy braking, and it promotes corrosion."],
        ["On a tire marked P215/65R15, the 215 is the:", "Section width in millimetres", ["Load index, which tells how much weight the tire can carry", "Rim diameter in inches, which is the 15 in the code", "Speed rating, which is shown by a letter in the code"], "65 is the aspect ratio in percent, R means radial, and 15 is the rim diameter in inches."],
        ["To measure voltage with a multimeter you connect the leads:", "In parallel across the circuit or component", ["In series with the circuit, so all current flows through the meter", "Only to ground, with the red lead left open", "Only to the battery terminals, never to the component"], "Voltage is a difference between two points. Current is measured in series."],
        ["How should used engine oil be handled?", "Collected and taken to an authorized recycler", ["Poured down a floor drain with plenty of water", "Burned in a barrel behind the shop", "Spread on a gravel lot to control dust"], "Used oil is a regulated waste. Follow your shop's procedure and provincial rules."],
        ["Why use exhaust extraction when running an engine in a shop?", "Carbon monoxide is toxic, colourless, and odourless", ["To cool the engine while it idles for a long time", "To reduce noise only while the engine runs", "To keep the shop floor clean of exhaust soot"], "CO can build up quickly in enclosed spaces and cause serious harm."],
        ["How many millimetres are in one inch?", "25.4", ["2.54, which is the number of centimetres in one inch", "10, which is the number of millimetres in one centimetre", "254, which is the number of tenths of a millimetre"], "1 in = 25.4 mm exactly."],
        ["A typical coolant mixture is:", "About 50 percent antifreeze and 50 percent water", ["100 percent antifreeze for the best freeze protection", "100 percent water, since it carries heat best", "10 percent antifreeze, only enough to prevent rust"], "Check the manufacturer's coolant type and ratio. A 50/50 mix protects against freezing and boiling."],
        ["Which PPE helps most when grinding or using a wire wheel?", "Safety glasses or a face shield", ["Ear plugs only, which protect hearing but not the eyes", "Cloth gloves only, which protect the hands", "A baseball cap, which keeps debris out of your hair"], "Flying particles are an eye hazard. Use eye protection and a guard on the tool."],
        ["A micrometer is used to:", "Make very precise measurements of small dimensions", ["Check engine speed by touching the crankshaft pulley", "Measure fluid pressure inside the fuel rail", "Test the charge level of a battery under load"], "Micrometers measure parts such as rotor thickness or shaft diameter to hundredths of a millimetre or better."],
        ["Before disconnecting a fuel line on many vehicles you should:", "Relieve fuel system pressure per the service procedure", ["Heat the line with a torch so the fitting loosens", "Start the engine and rev it to clear the line", "Open the gas cap only and then disconnect the line"], "Fuel injection systems stay pressurized. Follow the service information to relieve pressure safely."]
      ], 0),
      2: bank([
        ["In a disc brake, the part that squeezes the pads against the rotor is the:", "Caliper", ["Wheel cylinder", "Master cylinder", "Proportioning valve"], "Caliper pistons push the pads onto the rotor when hydraulic pressure is applied."],
        ["The thermostat in a cooling system:", "Controls coolant flow to regulate engine temperature", ["Pumps coolant through the engine at all speeds", "Cools the engine oil using a heat exchanger", "Filters dirt and rust from the coolant"], "It stays closed when cold and opens as the engine warms."],
        ["Camber is the:", "Inward or outward tilt of the wheel when viewed from the front", ["Forward or rearward tilt of the steering axis, seen from the side", "Difference in diameter between the left and right tires", "Distance between the front and rear wheels"], "Caster is the forward or rearward tilt of the steering axis. Toe is the inward or outward pointing of the tires."],
        ["A 12 V circuit has a 4 Ω load. Current flow is:", "3 A", ["48 A", "0.33 A", "8 A"], "I = V ÷ R = 12 ÷ 4 = 3 A."],
        ["An open circuit is:", "A break in the circuit that stops current flow", ["A short to ground that sends current to the chassis", "A circuit with unusually high current flow", "A circuit that is switched by a relay"], "Opens cause components not to work. Shorts bypass the load and often blow fuses."],
        ["A fuse protects a circuit by:", "Melting when current exceeds its rating", ["Raising voltage when the load increases", "Storing charge until the load needs it", "Filtering electrical noise from the wiring"], "Always replace a blown fuse with the same rating and find the cause."],
        ["Where do you find the minimum thickness for a brake rotor?", "In the specifications, often stamped on the rotor", ["On the brake pad backing plate", "On the tire sidewall next to the load index", "On the oil filter housing"], "A rotor below minimum thickness cannot dissipate heat properly and must be replaced."],
        ["The alternator:", "Converts mechanical energy from the engine into electrical energy", ["Stores electrical energy to start the engine", "Starts the engine by turning the flywheel", "Regulates fuel flow to the injectors"], "It recharges the battery and powers the electrical system while the engine runs."],
        ["A compression test checks:", "How well the cylinders seal (rings, valves, and head gasket)", ["Fuel pressure at the rail while the engine runs", "Oil viscosity at operating temperature", "Ignition timing relative to top dead centre"], "Low or uneven readings point to mechanical sealing problems."],
        ["You bleed brakes to:", "Remove air from the hydraulic system", ["Add friction material to worn brake pads", "Adjust pad thickness for even wear", "Change the rotor surface finish"], "Air compresses, so air in the lines causes a soft pedal."],
        ["A spark plug gap is measured with a:", "Feeler or wire gap gauge", ["Micrometer only, set to the plug's thread diameter", "Torque wrench set to the plug's specified torque", "Compression gauge threaded into the plug hole"], "Set the gap to the manufacturer's specification before installation."],
        ["The serpentine belt generally drives:", "Accessories such as the alternator, water pump, and A/C compressor", ["The wheels", "The transmission gears", "The camshaft in most engines"], "Timing belts and chains drive the camshafts, not the serpentine belt."],
        ["A MacPherson strut:", "Combines the spring and damper into a structural suspension member", ["Is only a shock absorber", "Replaces the brake caliper", "Is used only on trailers"], "Struts support the vehicle and locate the wheel, so alignment is usually needed after replacing one."],
        ["A torn CV joint boot is a problem because:", "Grease escapes and dirt enters, damaging the joint", ["The tire loses air through the axle seal", "Brake fluid leaks past the axle seal into the hub", "The engine overheats from lost drive-shaft cooling"], "Replace torn boots early. Clicking on turns often signals a worn outer CV joint."],
        ["Tire pressures are best checked:", "Cold, and set to the vehicle placard value", ["After a long highway drive, when the tires are warm", "Only when the tire looks visibly flat", "To the maximum pressure printed on the sidewall"], "The placard lists the manufacturer's recommended cold pressure."],
        ["A differential allows:", "The drive wheels to turn at different speeds in a corner", ["The engine to idle while the vehicle is stopped", "Higher gear ratios in the lower gears", "Brake force to balance between front and rear"], "The outside wheel travels farther in a turn than the inside wheel."],
        ["Which tool measures a spark plug gap or valve clearance?", "Feeler gauge", ["Vernier protractor", "Manometer", "Stethoscope"], "Feeler gauges are strips of known thickness."],
        ["Automatic transmission fluid level is best checked:", "Using the manufacturer's procedure, including temperature and engine state", ["Cold with the engine off, always, whatever the vehicle", "Only by smell, to judge whether the fluid is burnt", "By the colour of the fluid in the pan"], "Procedures differ. Some transmissions have no dipstick and need a specific temperature."]
      ], 1),
      3: bank([
        ["A diagnostic trouble code P0300 means:", "Random or multiple cylinder misfire detected", ["Catalyst efficiency below threshold on bank 1", "Mass airflow sensor circuit range or performance", "Throttle position sensor circuit high input"], "P0301 to P0308 identify the specific cylinder. P0420 relates to catalyst efficiency."],
        ["A strongly positive long-term fuel trim usually indicates:", "The computer is adding fuel to correct a lean condition", ["A rich condition, where the computer is removing fuel", "A normal reading, since fuel trim should stay at zero", "A failed battery that cannot power the injectors"], "Causes include vacuum leaks, low fuel pressure, or a dirty mass airflow sensor."],
        ["The ideal air-fuel ratio for gasoline is about:", "14.7 to 1 by mass", ["8 to 1, which is too rich for the converter to work well", "20 to 1, which is a lean mixture", "5 to 1, which is closer to a diesel's behaviour"], "That ratio is called stoichiometric and lets the catalytic converter work efficiently."],
        ["A CAN bus is:", "A two-wire network that lets control modules share data", ["A type of fuse used to protect module circuits", "A fuel line connection used on injectors", "A tire sensor used for pressure monitoring"], "Network faults can set many modules' codes at once."],
        ["Freeze frame data shows:", "Operating conditions recorded when a code set", ["The vehicle's service history stored by the shop", "Future codes that the module predicts will set", "Battery age recorded when it was installed"], "It helps you recreate the conditions of a fault."],
        ["In an A/C system the compressor:", "Raises the pressure and temperature of refrigerant vapour", ["Cools the cabin directly by blowing air over fins", "Removes moisture from the refrigerant only", "Stores liquid refrigerant until it is needed"], "The condenser then rejects heat and the evaporator absorbs it."],
        ["R-1234yf refrigerant differs from R-134a because it:", "Is mildly flammable and uses different service fittings", ["Is harmless to the ozone layer only, and has no other differences", "Needs no recovery because it does not harm the environment", "Is a lubricant that replaces compressor oil"], "Use equipment designed for the refrigerant in the vehicle."],
        ["Technicians who service A/C refrigerant in Canada must:", "Hold the refrigerant-handling training or certification their province requires", ["Be at least in year 4 of an apprenticeship", "Use only shop rags", "Vent small amounts to the air"], "Releasing refrigerant is prohibited, and provincial ozone-depleting substance rules require qualified handlers."],
        ["High-voltage cables on hybrid and electric vehicles are typically coloured:", "Orange", ["Green, the colour of ground wiring", "Black, the colour of most low-voltage cables", "White, the colour of switched accessory wires"], "Orange marks high-voltage wiring, but always follow the manufacturer's identification and procedures."],
        ["Before working on a high-voltage system you should:", "Follow the manufacturer's de-energizing procedure and use rated insulating PPE", ["Cut the orange cables to disable the pack quickly", "Use a standard multimeter only, with bare hands", "Disconnect the radio fuse to power down the system"], "High-voltage systems can be fatal. Only trained technicians should work on them."],
        ["A voltage drop test across a ground connection under load that shows a high reading means:", "There is excessive resistance in that connection", ["The battery is overcharged and needs to be replaced", "The circuit is open to ground and carries no current", "The load is working normally and the ground is good"], "Good connections drop only a small fraction of a volt."],
        ["A catalytic converter reduces:", "Hydrocarbons, carbon monoxide, and oxides of nitrogen", ["Oil consumption in the combustion chamber", "Fuel economy loss from rich mixtures", "Engine noise only, like a muffler would"], "A three-way converter handles all three pollutants."],
        ["Exhaust gas recirculation (EGR) mainly lowers:", "NOx emissions by reducing combustion temperature", ["Fuel pressure in the rail at high load", "Oil temperature in the sump at idle", "Brake wear caused by engine braking"], "Reducing peak combustion temperature reduces the formation of NOx."],
        ["A diesel engine ignites its fuel by:", "The heat of compressed air", ["A spark plug", "A glow plug alone while running", "The alternator"], "Glow plugs only help in cold starting."],
        ["On an interference engine, a broken timing belt can:", "Allow pistons to hit open valves", ["Only stop the alternator from charging", "Blow the oil filter off its mounting", "Leave the engine unharmed, because the valves clear the pistons"], "Replace belts at the manufacturer's interval."],
        ["A wheel bearing noise that changes when you swerve left and right most likely points to:", "A failing wheel bearing on one side", ["A bad alternator that cannot charge the battery", "Low oil pressure from a worn pump", "A weak battery that cannot crank the engine"], "Load shifts to the outside wheel in a turn, changing the noise."],
        ["A lambda or air-fuel ratio oxygen sensor measures:", "The oxygen content of the exhaust", ["Fuel temperature in the rail", "Coolant level in the reservoir", "Manifold vacuum at idle"], "The computer uses it to adjust fuel delivery."],
        ["A relay lets a small control current:", "Switch a larger current", ["Reduce voltage in the control circuit", "Store energy for the next start", "Measure resistance in the load circuit"], "The relay's coil is the low-current side and its contacts carry the load."]
      ], 2),
      4: bank([
        ["What is the first step in diagnosing a customer concern?", "Verify the complaint", ["Replace the most likely part", "Clear all codes", "Order parts"], "Confirm the concern before testing so you fix the actual fault."],
        ["A Technical Service Bulletin (TSB) is:", "Manufacturer information about known problems and repairs", ["A tool catalogue from the parts supplier", "A tax form used for shop billing", "A recall notice only, and never about repairs"], "Check TSBs and service information early in a diagnosis."],
        ["What does a bi-directional scan tool function allow?", "Commanding a component on or off to test it", ["Only reading codes, never sending commands", "Updating the vehicle's mileage in the module", "Charging the battery through the diagnostic port"], "Active tests help isolate faulty components."],
        ["An oscilloscope shows:", "Voltage changes over time", ["Current only, shown as a number", "Fluid level in the reservoir", "Vehicle weight on each axle"], "Scopes reveal signal problems that a multimeter averages out."],
        ["In a standard automotive relay, terminals 85 and 86 are the:", "Coil terminals", ["Normally closed contacts", "Battery terminals", "Ground studs"], "30 and 87 are the switched terminals."],
        ["Why wait before measuring parasitic draw?", "Modules need time to go to sleep", ["To let the battery warm up to room temperature", "To check the oil level before testing", "To bleed the brakes before measuring the draw"], "Reading too early shows draw from modules that are still awake."],
        ["After windshield or alignment work, camera-based driver-assistance systems often need:", "Calibration per the manufacturer's procedure", ["A new battery to power the cameras", "Tire rotation to even out the wear", "A coolant flush to cool the sensors"], "Misaligned sensors can cause incorrect warnings or braking."],
        ["Torque-to-yield (stretch) bolts should be:", "Replaced, not reused", ["Reused up to three times", "Lubricated and reused", "Tightened to double the torque"], "They stretch when tightened and may fail if reused."],
        ["During a cylinder leakdown test, air heard from the tailpipe indicates:", "A leaking exhaust valve", ["A leaking intake valve, since the air goes to the intake", "Worn rings, since the air goes to the crankcase", "A blown head gasket, since bubbles show in the coolant"], "Air at the intake means an intake valve leak, and air in the crankcase means rings."],
        ["A cylinder has 500 cc swept volume and 50 cc clearance volume. The compression ratio is:", "11 to 1", ["10 to 1, from dividing swept volume by clearance volume", "9 to 1, from subtracting the clearance volume", "12 to 1, from adding the volumes together"], "(500 + 50) ÷ 50 = 11."],
        ["A four-cylinder engine with 0.5 L per cylinder has a displacement of:", "2.0 L", ["0.5 L, which is the size of a single cylinder", "1.0 L, which counts only two cylinders", "4.0 L, which multiplies by the number of cylinders twice"], "4 × 0.5 L = 2.0 L."],
        ["A vehicle pulls to one side while driving. What is a sensible first check?", "Tire pressures and tire condition", ["Replacing the steering rack right away", "Alternator output with a load test", "Engine compression in each cylinder"], "Start with simple, inexpensive checks before alignment or brakes."],
        ["Flat-rate pay means a technician is paid for:", "The book time for the job, no matter how long it actually takes", ["Hours on the clock only, regardless of the book time", "Parts sold on each repair order", "Customer satisfaction scores after each job"], "Efficient diagnosis and organization improve flat-rate earnings."],
        ["On a warranty claim, the '3 Cs' are:", "Complaint, cause, and correction", ["Cost, code, and calibration for each repair", "Clean, check, and confirm before returning the vehicle", "Cooling, charging, and cranking system checks"], "Write them clearly. Claims depend on accurate documentation."],
        ["Low fuel rail pressure can lead to:", "A lean mixture and driveability problems", ["A rich mixture only, with no other symptoms", "Higher brake performance from greater vacuum", "Lower oil pressure in the engine"], "Compare measured pressure to specification with the correct gauge."],
        ["Work beyond an approved estimate should be:", "Authorized by the customer before it proceeds", ["Done anyway to save time on the job", "Hidden in labour so the total looks unchanged", "Skipped silently so the customer is never charged"], "Provincial consumer protection rules generally require authorization for extra work. Follow your shop policy and local rules."],
        ["Moisture in brake fluid:", "Lowers its boiling point", ["Raises its boiling point and improves braking", "Makes it thicker and harder to pump", "Has no effect on how the brakes work"], "Use a tester or follow the recommended replacement interval."],
        ["A good habit when diagnosing an intermittent fault is to:", "Use data logging and try to recreate the conditions", ["Replace parts until the problem stops showing up", "Ignore the customer's description of the fault", "Clear the code and return the vehicle to the customer"], "Freeze frame, logging, and wiggle tests help catch intermittent problems."]
      ], 3)
    },
    roadmapSteps: [
      { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS and shop safety; requirements vary)", "Prepare a resume and apply to dealerships, independent shops, and fleet garages", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
      { title: "Year 1: foundations and maintenance", items: ["Learn shop safety, lifts, jacks, and PPE", "Perform oil changes, tire work, and routine inspections", "Learn basic brake, suspension, and steering service", "Complete your first technical training block", "Build your core tool kit (see Buying tools)"] },
      { title: "Year 2: electrical and engine basics", items: ["Learn Ohm's law and read simple wiring diagrams", "Service cooling, charging, and starting systems", "Learn engine operation and perform tests such as compression", "Practise brake and alignment-related repairs"] },
      { title: "Year 3: engine management and drivetrain", items: ["Diagnose fuel, ignition, and emission control systems", "Learn network communication and scan tool data", "Service automatic and manual drivetrains", "Learn A/C service and the certification it requires"] },
      { title: "Year 4 and beyond: advanced diagnosis", items: ["Diagnose complex electrical and intermittent faults", "Work with hybrid, electric, and driver-assistance systems under proper training", "Use service information, TSBs, and an oscilloscope", "Mentor first-year apprentices"] },
      { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
    ],
    glossary: [
      ["ABS", "Anti-lock braking system that prevents wheel lockup during hard braking."],
      ["Alignment", "Adjusting wheel angles (camber, caster, toe) to specification."],
      ["Alternator", "Generator that charges the battery and powers the electrical system."],
      ["Bleeding", "Removing air from a hydraulic system such as brakes."],
      ["CAN bus", "Controller Area Network, a data network linking vehicle modules."],
      ["Caster", "Forward or rearward tilt of the steering axis."],
      ["Catalytic converter", "Exhaust device that reduces harmful emissions."],
      ["CV joint", "Constant velocity joint that transfers drive torque through changing angles."],
      ["DTC", "Diagnostic trouble code stored by a control module."],
      ["EGR", "Exhaust gas recirculation, used to reduce NOx."],
      ["Freeze frame", "Data recorded at the moment a fault code sets."],
      ["Fuel trim", "Fuel correction the computer adds or subtracts to hold the target air-fuel ratio."],
      ["Misfire", "Failure of a cylinder to burn its fuel charge properly."],
      ["Multimeter", "Meter that measures voltage, current, and resistance."],
      ["OBD-II", "Standardized on-board diagnostic system with a 16-pin data link connector."],
      ["Parasitic draw", "Current drawn from the battery with the vehicle off."],
      ["Rotor", "Brake disc that the pads clamp."],
      ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
      ["Serpentine belt", "A single belt that drives several engine accessories."],
      ["TPMS", "Tire pressure monitoring system."],
      ["Toe", "The inward or outward angle of the tires when viewed from above."],
      ["Torque", "Turning force, measured in N·m or lb-ft."],
      ["TSB", "Technical Service Bulletin from the manufacturer."],
      ["Viscosity", "A fluid's resistance to flow."],
      ["Voltage drop", "Loss of voltage across a connection or wire when current flows."],
      ["WHMIS", "Canada's workplace hazardous materials information system."]
    ],
    cards: [
      { front: "Ohm's law", back: "V = I × R, so I = V ÷ R." },
      { front: "1 lb-ft in N·m", back: "About 1.356 N·m" },
      { front: "Resting voltage of a full 12 V battery", back: "About 12.6 V" },
      { front: "Four-stroke order", back: "Intake, compression, power, exhaust" },
      { front: "Stoichiometric air-fuel ratio for gasoline", back: "About 14.7 to 1" },
      { front: "OBD-II data link connector", back: "16 pins. Pin 16 is battery positive, pins 4 and 5 are grounds." },
      { front: "Camber, caster, toe", back: "Wheel tilt from the front, steering axis tilt, and inward or outward pointing of the tires." },
      { front: "Tire marking P215/65R15", back: "215 mm width, 65% aspect ratio, radial, 15 in rim" },
      { front: "Compression ratio", back: "(Swept volume + clearance volume) ÷ clearance volume" }
    ],
    jobsIntro: "Look for new-vehicle dealerships, independent repair shops, tire and brake specialists, fleet and municipal garages, and transit or trucking maintenance shops.",
    tips: ["Bring a short resume, your safety tickets, and ID, and mention any hands-on experience such as small engines.", "Show curiosity about how things work and willingness to learn diagnosis.", "Visit shops in person and follow up, since many hire apprentices through word of mouth.", "Ask what tools you need and what the employer supplies."],
    forumTopics: ["Starting out", "Brakes, steering, and suspension", "Engine performance and electrical diagnosis", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference: [
      {
        title: "Key formulas",
        list: [
          "Ohm's law: V = I × R, and power P = V × I",
          "Displacement = π ÷ 4 × bore² × stroke × number of cylinders",
          "Compression ratio = (swept volume + clearance volume) ÷ clearance volume",
          "Voltage drop = current × resistance of the connection or wire",
          "Gear ratio = driven gear teeth ÷ driving gear teeth",
          "Power in kW = hp × 0.746"
        ]
      },
      {
        title: "Conversions",
        list: [
          "1 in = 25.4 mm, and 1 ft = 304.8 mm",
          "1 psi ≈ 6.895 kPa, and 1 bar = 100 kPa",
          "1 lb-ft ≈ 1.356 N·m",
          "1 US gallon ≈ 3.785 L, and 1 Imperial gallon ≈ 4.546 L",
          "1 mile ≈ 1.609 km",
          "1 in Hg ≈ 3.386 kPa"
        ]
      },
      {
        title: "Diagnostic trouble code families",
        table: {
          head: ["Prefix", "System", "Example"],
          rows: [
            ["P", "Powertrain: engine and transmission", "P0300 random misfire"],
            ["B", "Body: airbags, seats, comfort", "Manufacturer specific"],
            ["C", "Chassis: ABS, steering, suspension", "Manufacturer specific"],
            ["U", "Network communication", "Lost communication with a module"]
          ]
        },
        note: "Codes starting P0 are generic across manufacturers. P1 codes are manufacturer specific."
      },
      {
        title: "Wheel alignment angles",
        table: {
          head: ["Angle", "What it is", "Effect"],
          rows: [
            ["Camber", "Tilt of the wheel viewed from the front", "Tire wear and cornering"],
            ["Caster", "Forward or rearward tilt of the steering axis", "Straight-line stability and steering return"],
            ["Toe", "Inward or outward pointing of the tires viewed from above", "Tire wear and steering response"]
          ]
        },
        note: "Always align to the manufacturer's specification after repairing steering or suspension parts."
      },
      {
        title: "Fluids and fastener practices",
        list: [
          "<strong>Engine oil:</strong> use the viscosity and approval stated in the owner's manual or service information.",
          "<strong>Brake fluid:</strong> glycol-based DOT 3, DOT 4, and DOT 5.1 mix with water. DOT 5 is silicone based and not interchangeable. Use only what the vehicle specifies.",
          "<strong>Coolant:</strong> use the type specified, and mix with water as directed (commonly 50/50).",
          "<strong>Wheel nuts:</strong> tighten in a star pattern in stages with a torque wrench to the specified torque.",
          "<strong>Torque-to-yield bolts:</strong> replace after use.",
          "<strong>Winter tires:</strong> the three-peak mountain snowflake symbol marks tires rated for severe snow service."
        ]
      },
      {
        title: "OBD-II connector quick facts",
        table: {
          head: ["Pin", "Function"],
          rows: [
            ["4", "Chassis ground"],
            ["5", "Signal ground"],
            ["6 and 14", "CAN high and CAN low"],
            ["16", "Battery positive"]
          ]
        },
        note: "Other pins vary by manufacturer. Use the wiring diagram."
      }
    ]
  });
})();
