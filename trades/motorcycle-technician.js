// Motorcycle Technician content. Practice questions are original study aids, not official Red Seal exam questions.
(() => {
  // Each row: [question, correct answer, [three wrong answers], explanation]. The correct position rotates per question.
  const bank = (rows, offset) => rows.map(([q, correct, wrong, explain], i) => {
    const answer = (i + offset) % 4;
    const options = [...wrong];
    options.splice(answer, 0, correct);
    return { q, options, answer, explain };
  });

  registerTrade({
    id: "motorcycle-technician",
    store: "motorcycle-technician",
    title: "Motorcycle Technician",
    name: "Motorcycle Technician",
    short: "motorcycle service",
    category: "Powersports · Repair · Diagnostics",
    summary: "Inspect, maintain, diagnose, and repair motorcycles and related powersports vehicles, from engines, brakes, and suspension to electrical and fuel injection systems.",
    work: "Motorcycle technicians service and repair street, off-road, and touring machines. They perform seasonal maintenance, find faults using service manuals and diagnostic tools, and repair engines, drivetrains, brakes, suspension, and electrical systems. Many shops also handle scooters, ATVs, and snowmobiles, so work is often busy in spring and slower in winter in much of Canada.",
    duration: "Usually 3–4 years (Job Bank), varies by province",
    union: "Motorcycle and Moped Industry Council (MMIC)",
    unionUrl: "https://www.mmic.ca/",
    profileUrl: "https://red-seal.ca/eng/trades/motorcycle-tech.shtml",
    durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/297457/ca",
    jobSearch: "motorcycle technician apprentice",
    journeySearch: "motorcycle technician mechanic",
    aliases: "motorcycle mechanic bike mechanic powersports technician harley honda yamaha scooter atv snowmobile red seal 310m",
    tools: [
      "Metric socket and wrench sets",
      "Torque wrench (N·m)",
      "Digital multimeter",
      "Feeler gauge set",
      "Safety glasses, gloves, and CSA safety boots",
      "Rolling tool box"
    ],
    insight: {
      skills: ["Mechanical aptitude and attention to detail", "Diagnosis using logic and test equipment", "Basic electrical and math skills", "Customer communication and a passion for riding"],
      hazards: ["Bike falling from a stand or lift: use rated stands and tie-downs", "Gasoline vapour and fire: no ignition sources, safe storage", "Battery acid and hydrogen gas: ventilate and avoid sparks", "Hot exhausts and moving chains: wear PPE and keep clear"],
      settings: ["Dealerships and powersports shops", "Independent motorcycle repair shops", "Rental, tour, and fleet operations", "Specialty and performance shops"]
    },
    toolGroups: [
      {
        title: "Day-one tools, buy once and buy well",
        note: "Professional-grade tools that hold their accuracy for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
        items: [
          { name: "Metric socket set, 1/4 in and 3/8 in drive", why: "Most motorcycle fasteners are metric and small. Six-point sockets protect soft fastener heads.", search: "GearWrench metric socket set 1/4 3/8 drive" },
          { name: "Metric combination wrench set (6 to 24 mm)", why: "Reach tight spots around engines and frames.", search: "GearWrench metric combination wrench set ratcheting" },
          { name: "Hex and Torx key sets (ball-end hex)", why: "Allen and Torx fasteners are everywhere on bikes. Quality keys do not round off.", search: "Wera hex key set Torx bit set motorcycle" },
          { name: "1/4 in drive click-type torque wrench (N·m)", why: "Many motorcycle fasteners have low torque specs. A small-range wrench stays accurate.", search: "1/4 drive torque wrench 2-25 Nm" },
          { name: "3/8 in drive click-type torque wrench (N·m)", why: "For axle, caliper, and engine fasteners.", search: "3/8 drive torque wrench 10-100 Nm" },
          { name: "Digital multimeter (Fluke or Klein)", why: "Measures voltage, resistance, and continuity for every electrical job.", search: "Fluke digital multimeter automotive" },
          { name: "Screwdriver set (JIS and Phillips) and pliers", why: "JIS screwdrivers fit many Japanese bikes' screws without stripping them.", search: "Vessel JIS screwdriver set pliers Knipex" },
          { name: "Mechanic's gloves and nitrile gloves", why: "Protect hands from oils, solvents, and sharp edges.", search: "Mechanix Wear gloves nitrile gloves" },
          { name: "Safety glasses and CSA-approved safety boots", why: "Debris and heavy bikes. Comfortable, rated protection is what you will actually wear.", search: "safety glasses CSA safety boots Blundstone Dakota" }
        ]
      },
      {
        title: "Build up in first and second year",
        note: "Buy these as the work calls for them. Ask your journeyperson what holds up in your shop.",
        items: [
          { name: "Feeler gauge set and spark plug gap tool", why: "Valve clearances and plug gaps are routine services.", search: "feeler gauge set spark plug gap tool" },
          { name: "Chain breaker, riveting tool, and chain alignment tool", why: "Needed for chain replacement and sprocket alignment.", search: "motorcycle chain breaker rivet tool alignment tool" },
          { name: "Spark plug sockets and a long-reach wrench", why: "Thin-wall plug sockets fit deep plug wells.", search: "thin wall spark plug socket set motorcycle" },
          { name: "Brake bleeder kit and caliper piston tool", why: "Bleed brakes cleanly and service calipers.", search: "brake bleeder kit motorcycle caliper piston tool" },
          { name: "Tire irons, bead breaker, and wheel balancer (basic)", why: "Tire changing tools, with care not to damage rims. Normally shop supplied.", search: "motorcycle tire changing tools bead breaker spoon" },
          { name: "Vacuum gauge set and compression tester", why: "Carb synchronization and engine health checks.", search: "carb synchronizer vacuum gauge compression tester motorcycle" },
          { name: "Battery tester and smart charger", why: "Test and charge batteries safely, matched to their chemistry.", search: "motorcycle battery tester smart charger Battery Tender" },
          { name: "Paddock stand or motorcycle lift access", why: "Safe support for the bike. Shops usually supply lifts.", search: "motorcycle paddock stand" }
        ]
      },
      {
        title: "Later and specialized",
        note: "Often supplied by the shop or employer. Ask before buying.",
        items: [
          { name: "Brand-specific diagnostic software and interface", why: "Reads fault codes and live data on specific brands. Normally supplied by the dealer.", search: "motorcycle diagnostic scan tool OBD interface" },
          { name: "Fork seal driver and fork tools", why: "Replace fork seals and set oil level correctly.", search: "fork seal driver motorcycle fork oil level tool" },
          { name: "Dynamometer access and training", why: "Measures power and tunes fuelling. Shop equipment.", search: "motorcycle dynamometer" },
          { name: "Insulated tools and gloves for high-voltage work", why: "Required for electric motorcycles. Training comes first.", search: "insulated tools 1000V Class 0 insulating gloves" }
        ]
      },
      {
        title: "School supplies for technical training",
        note: "What helps in the classroom for diagnosis, math, and service manuals. Check with your school and your exam body about calculator rules before you buy.",
        items: [
          { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Ohm's law, gear ratios, and displacement.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
          { name: "Steel ruler and digital caliper (metric)", why: "Measuring parts and understanding tolerances.", search: "digital caliper 150mm steel ruler" },
          { name: "Field notebook (Rite in the Rain)", why: "Record torque specs and test results. Weatherproof paper survives a shop.", search: "Rite in the Rain field notebook" },
          { name: "Wiring diagram highlighters and coloured pencils", why: "Tracing circuits on schematics is a core diagnostic skill.", search: "highlighters coloured pencils set" },
          { name: "Binder, dividers, and sticky tabs", why: "Organize notes by system for study and exam review.", search: "binder dividers sticky tabs" },
          { name: "Motorcycle technology textbook or study guide", why: "Reinforces classroom learning. Ask your school which edition they use.", search: "motorcycle repair textbook technology study guide" },
          { name: "Magnetic parts tray and labelled bags", why: "Keep fasteners from different assemblies separate.", search: "magnetic parts tray zip bags labels" }
        ]
      }
    ],
    mediaGroups: [
      {
        title: "Official and standards resources",
        items: [
          { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare, including the trade profile for your trade.", url: "https://red-seal.ca/eng/welcome.shtml" },
          { name: "Motorcycle and Moped Industry Council (MMIC)", desc: "Canadian motorcycle industry association with information on the industry.", url: "https://www.mmic.ca/" },
          { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Plain-language WHMIS, fuel, battery, and workplace safety information.", url: "https://www.ccohs.ca/" },
          { name: "Transport Canada", desc: "Information on vehicle safety standards and recalls.", url: "https://tc.canada.ca/" },
          { name: "Skills Canada", desc: "Information on skilled trades careers and competitions.", url: "https://www.skillscanada.com/" }
        ]
      },
      {
        title: "Video searches",
        note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and the manufacturer's service manual.",
        items: [
          { name: "Motorcycle engine basics", desc: "How four-stroke motorcycle engines work.", url: "https://www.youtube.com/results?search_query=motorcycle+four+stroke+engine+how+it+works" },
          { name: "Motorcycle chain and sprocket service", desc: "Adjusting, lubricating, and replacing a chain.", url: "https://www.youtube.com/results?search_query=motorcycle+chain+sprocket+replacement+adjustment" },
          { name: "Valve clearance check", desc: "Using a feeler gauge and adjusting valves.", url: "https://www.youtube.com/results?search_query=motorcycle+valve+clearance+check+feeler+gauge+shim" },
          { name: "Carburetor synchronization", desc: "Balancing carburetors with vacuum gauges.", url: "https://www.youtube.com/results?search_query=motorcycle+carburetor+synchronization+vacuum+gauges" },
          { name: "Motorcycle electrical diagnosis", desc: "Charging system and wiring tests.", url: "https://www.youtube.com/results?search_query=motorcycle+charging+system+test+stator+regulator+rectifier" },
          { name: "Fork service and suspension setup", desc: "Fork oil, seals, and sag.", url: "https://www.youtube.com/results?search_query=motorcycle+fork+seal+oil+change+suspension+sag" },
          { name: "Motorcycle brake service and bleeding", desc: "Pads, rotors, and bleeding.", url: "https://www.youtube.com/results?search_query=motorcycle+brake+service+bleeding+caliper" },
          { name: "Fuel injection diagnosis on motorcycles", desc: "Sensors, fuel pump, and fault codes.", url: "https://www.youtube.com/results?search_query=motorcycle+fuel+injection+diagnosis+sensors+fault+codes" }
        ]
      },
      {
        title: "Audio, beginner (pre-apprentice and year 1)",
        note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for motorcycle service yourself.",
        items: [
          { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
          { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
          { name: "YouTube: motorcycle mechanic apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=motorcycle+mechanic+apprentice+podcast" }
        ]
      },
      {
        title: "Audio, intermediate (years 2-3)",
        note: "Trade-knowledge talk that builds on what you do on the job.",
        items: [
          { name: "YouTube: motorcycle repair podcast", desc: "Technicians talk repair methods and shop experience.", url: "https://www.youtube.com/results?search_query=motorcycle+repair+podcast+technician" },
          { name: "YouTube: motorcycle diagnostics talk (listen-along)", desc: "Talks on engine and electrical diagnosis to hear while commuting.", url: "https://www.youtube.com/results?search_query=motorcycle+diagnostics+podcast+fuel+injection+electrical" },
          { name: "YouTube: powersports shop stories and tips (audio)", desc: "Job-site lessons from working technicians.", url: "https://www.youtube.com/results?search_query=powersports+technician+podcast+tips+stories" }
        ]
      },
      {
        title: "Audio, advanced (year 4 to journeyperson)",
        note: "Exam prep, shop business, and leadership.",
        items: [
          { name: "YouTube: Red Seal motorcycle technician exam prep", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+motorcycle+technician+exam+preparation" },
          { name: "YouTube: powersports dealership service department podcast", desc: "Service writing, scheduling, and running a service department.", url: "https://www.youtube.com/results?search_query=powersports+dealership+service+department+podcast" },
          { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
        ]
      }
    ],
    practiceBank: {
      1: bank([
        ["Where do you find the hazards and first-aid measures for a product such as carburetor cleaner?", "Safety Data Sheet (SDS)",["The owner's manual supplied with the motorcycle by the manufacturer", "The tire sidewall markings, which list the load and speed ratings", "The work order the customer signed when the bike was dropped off at the shop"], "The SDS describes hazards, handling, and first aid under WHMIS."],
        ["Which equipment should hold a motorcycle for work under it or on its wheels?", "A rated lift or stand, with straps as required",["The side stand alone, with the front wheel turned to the left", "A stack of wood blocks placed under the engine and the frame rails", "A friend holding the bike upright while the wheel is removed"], "A bike can fall easily. Secure it before work begins."],
        ["Why avoid open flames when draining fuel or working near fuel lines?", "Gasoline vapour is highly flammable",["The fuel is too hot to touch after the engine has been running", "It dries the paint on the tank and leaves a dull finish on the panels", "It adds smoke to the shop air, which makes it harder to see the work"], "Work in a ventilated area and use approved fuel containers."],
        ["Charging a battery can release:", "Hydrogen gas, which can explode",["Helium, which is lighter than air and collects at the top of the shop", "Carbon dioxide only, which is harmless in an open workshop", "Nothing at all, if the battery is a sealed maintenance-free type"], "Charge in a ventilated area away from sparks."],
        ["What is the order of the four-stroke cycle?", "Intake, compression, power, exhaust", ["Intake, power, compression, exhaust", "Compression, intake, exhaust, power", "Power, intake, exhaust, compression"], "Air and fuel enter, are compressed, burn to push the piston, then exhaust leaves."],
        ["On a motorcycle tire marked 120/70ZR17, the 120 is the:", "Section width in millimetres",["Rim diameter in inches, which is the 17 at the end of the code", "Load index, a number that shows the weight each tire can carry", "Aspect ratio, the sidewall height as a percentage of the width of the tire"], "70 is the aspect ratio, R means radial, and 17 is the rim diameter in inches."],
        ["On the sidewall of a tire the date code '2023' in the DOT code shows:", "Week 20 of year 2023",["Year 2023 only, with no week of manufacture shown in the code", "A tire age of 20 years, based on the first two digits of the code", "The recommended tire pressure, written in kPa on the sidewall of the tire"], "The first two digits are the week and the last two are the year."],
        ["The usual shifting pattern of a motorcycle gearbox is:", "1-N-2-3-4-5-6, with neutral between first and second",["N-1-2-3-4-5-6, with neutral below first gear on the shift pattern", "6-5-4-3-2-1-N, with the lever pressed down for each higher gear", "1-2-N-3-4-5-6, with neutral placed between second and third gear"], "Most are shifted with the left foot. Check the manual for the pattern."],
        ["The metric unit of torque is:", "The newton-metre (N·m)",["The kilopascal, which is a unit of pressure and not of torque", "The litre, which is a unit of volume used for fuel and oil", "The watt, which is a unit of power and is used for engine output"], "1 lb-ft is about 1.356 N·m."],
        ["Which fire extinguisher class is for flammable liquids such as gasoline?", "Class B", ["Class A", "Class C", "Class D"], "Class A is ordinary combustibles, B is flammable liquids, and C is energized electrical."],
        ["Why warm the engine slightly before draining the oil?", "Warm oil flows better and carries more contaminants out",["It hardens the oil so that it drains out in a thicker stream", "It reduces the torque needed to loosen the drain plug and the filter", "It saves time on the paperwork once the oil has been changed"], "Do not drain a very hot engine, because oil can burn skin."],
        ["How many millimetres are in one inch?", "25.4", ["2.54", "10", "254"], "1 in = 25.4 mm exactly."],
        ["Why use exhaust extraction when a motorcycle runs in a shop?", "Carbon monoxide is toxic, colourless, and odourless",["To cool the bike down while it idles on the floor of the shop", "To keep the floor clean by carrying oil mist out through the vent", "To make the engine quieter only, so the shop is easier to work in"], "CO can build up quickly in enclosed spaces."],
        ["A fully charged 12 V motorcycle battery at rest reads about:", "12.6 V", ["10.5 V", "14.4 V", "9.6 V"], "A charging system typically shows higher voltage with the engine running. Lithium types can read differently."],
        ["Brake pad wear should be checked by:", "Measuring the friction material against the manufacturer's minimum",["Listening for noise only, since the pads always squeal when they are worn out", "Guessing from the age of the pads, without removing the wheel or caliper", "Checking only the colour of the pad surface, since dark pads are worn"], "Inspect pad thickness and rotor condition."],
        ["Why wear safety glasses when using a wire brush or grinder?", "Flying particles can injure eyes",["To see better in a dim shop, since the lenses brighten the work", "To protect your hair from the wire strands that can fly off the brush", "To stay warm while working near the grinder, since the lenses block draft"], "Always wear eye protection when using tools that throw debris."],
        ["A kill switch or engine stop switch is used to:", "Stop the engine quickly",["Start the engine from the handlebar, with the key in the ignition", "Lock the steering at full lock so that the bike cannot be ridden away", "Charge the battery from the stator when the bike is running at idle"], "Learn how the interlocks work, such as the kickstand and clutch switches."],
        ["Used engine oil and coolant must be:", "Collected and taken to an authorized recycler",["Poured down a floor drain, if it is flushed with plenty of water", "Burned in a barrel outside the shop, away from the main building", "Buried in a pit behind the shop, where it will break down in the soil"], "They are regulated wastes. Follow your shop's program."]
      ], 0),
      2: bank([
        ["Valve clearance is normally checked:", "With the engine cold, as the service manual specifies",["At full operating temperature always, since the metal has expanded to its working size", "While the engine is running at idle, using the feeler gauge on each valve", "Only after a rebuild, when the cylinder head has been taken off and replaced"], "Clearance changes with temperature, so follow the manual."],
        ["A feeler gauge is used to:", "Measure small gaps such as valve clearance",["Measure tire pressure at the valve stem when the tire is cold", "Check chain tension only, by sliding it between the sprocket and the links", "Measure voltage across the battery terminals when the engine is running"], "Feeler gauges are strips of known thickness."],
        ["Oil rated JASO MA or MA2 is for:", "Motorcycles with a wet clutch sharing engine oil",["Scooters with dry clutches only, where the oil must not contain friction modifiers", "Diesel engines, where the oil is rated for high soot loading and heat", "Brake systems, where the oil is used in place of hydraulic brake fluid"], "Oils with friction modifiers can cause wet clutches to slip."],
        ["Chain slack should be measured:", "At the tightest point of the chain, per the manual",["With the chain loose and lying on the swingarm, to get the largest reading", "On a hot engine only, after the bike has been ridden for an hour", "At the loosest point of the chain, so the reading is the largest possible"], "A chain tightens and loosens as the wheel turns, so rotate and check."],
        ["A '520' chain has a pitch of:", "5/8 in (about 15.9 mm)",["1/2 in, which is the pitch of a 415 or 420 chain", "3/4 in, which is the pitch of a large industrial roller chain", "20 mm, which is the width across the side plates of a 520 chain"], "The first digit is the pitch in eighths of an inch, and the next digits are the width."],
        ["A front sprocket with 15 teeth and a rear sprocket with 45 teeth gives a ratio of:", "3 to 1", ["1 to 3", "30 to 1", "60 to 1"], "45 ÷ 15 = 3."],
        ["Carburetor synchronization is done to:", "Balance the airflow between cylinders",["Set the ignition timing so that all cylinders fire at the same crank angle", "Adjust the brakes so that the front and rear systems work together evenly", "Charge the battery by matching the vacuum at each of the carburetors"], "It is done using vacuum gauges or a manometer."],
        ["A float level that is too high in a carburetor causes:", "A rich mixture and possible flooding",["A lean mixture only, because the fuel level in the bowl is too far from the jet", "A dead battery, since extra fuel in the bowl washes the oil from the cylinder", "A loose chain, because a high float level changes the engine's torque"], "Check float height against the manual."],
        ["A stator makes:", "Alternating current that the regulator/rectifier converts to direct current",["Fuel pressure for the injectors, by spinning a pump inside the tank", "Ignition timing signals, by sensing the position of the flywheel teeth", "Brake force for the ABS unit, by sending current to the wheel sensors"], "A bad regulator/rectifier can overcharge or undercharge the battery."],
        ["Fork oil seals that leak:", "Need replacement, and the fork oil level checked",["Can be ignored if the oil only weeps and does not run down the tube", "Mean the brake is bad, and the caliper and pads need to be replaced", "Mean the chain is loose, and the rear wheel needs to be moved back"], "Oil on brake pads is dangerous, so clean and inspect carefully."],
        ["Rider sag is the amount the suspension compresses:", "With the rider aboard, compared with fully extended",["With the bike on a lift, with the wheels hanging off the ground", "When the bike is empty only, with the fork and shock under their own weight", "At full travel, when the suspension is compressed all the way to the stops"], "Set preload so sag matches the manufacturer's range."],
        ["A compression test checks:", "How well the cylinder seals",["Fuel pressure at the rail, using a gauge fitted to the test port", "Oil viscosity at operating temperature, using a thermometer and a dipstick", "Brake wear on the pads and the discs, using a micrometer on the rotor"], "Low readings point to rings, valves, or a head gasket."],
        ["Brake fluid is hygroscopic, which means it:", "Absorbs moisture from the air",["Repels water, so that moisture beads on the surface of the fluid", "Burns easily when it is heated, so it needs to be kept from open flame", "Thickens with heat, so that it flows more slowly when the brakes get hot"], "Moisture lowers its boiling point, so change it as scheduled."],
        ["ABS wheel speed sensors read:", "A toothed ring or tone wheel on the wheel or hub",["Brake fluid pressure in the lines, using a transducer in the master cylinder", "Chain slack at the rear wheel, using a sensor on the swingarm", "Spark timing from the ignition coil, using a pickup on the flywheel"], "A damaged ring or dirty sensor can set an ABS fault."],
        ["Spoked wheels should be checked for:", "Loose or broken spokes and wheel runout",["Only air pressure, since spoked wheels are otherwise maintenance free", "Rim colour and finish, since fading shows when the wheel is out of true", "Valve cap colour and thread condition, since these show when a tube has leaked"], "A uniformly tensioned wheel runs true."],
        ["A two-stroke engine is lubricated by:", "Oil mixed with fuel or injected into it",["Oil in a separate sump, as in a four-stroke engine with a wet crankcase", "Water that is circulated through the crankcase and the cylinder walls", "Nothing, because the piston and rings need no lubrication when run lean"], "Check the manual for the oil type and ratio."],
        ["Countersteering means:", "Pushing the handlebar on the side of the desired turn to start a lean",["Turning the bars away from the turn, to force the bike to lean in the corner", "Pulling the clutch in the corner, to let the engine slow without braking", "Braking only, with the front brake, to tip the bike over into the turn"], "Pushing the right grip forward initiates a right-hand lean."],
        ["A spark plug that is light grey or white can indicate:", "A lean mixture or overheating", ["A rich mixture", "Oil in the fuel", "A normal reading in every case"], "Plug reading is a clue. Confirm with other tests."]
      ], 1),
      3: bank([
        ["On a fuel-injected motorcycle, the throttle position sensor tells the ECU:", "How far the throttle is open",["Engine oil level in the sump, so that it can warn the rider if it is low", "Tire pressure at each wheel, so that it can adjust the traction control", "Chain slack at the rear sprocket, so that it can adjust the ride height"], "The ECU uses it with other sensors to set fuel and timing."],
        ["A manifold absolute pressure (MAP) sensor measures:", "Intake air pressure or vacuum",["Brake pressure in the lines, so the ABS can adjust the front caliper", "Tire pressure at the wheel, so the dash can warn the rider of a leak", "Oil pressure in the main gallery, so the ECU can protect the bearings"], "It helps the ECU calculate engine load."],
        ["If a fuel-injected engine has a lean condition you should check for:", "Intake air leaks, low fuel pressure, and clogged injectors",["Brake pad wear at the front caliper, since drag can load the engine", "Chain tension at the rear wheel, since a tight chain loads the engine", "Tire wear at the rear, since worn tires raise the rolling resistance"], "Test one thing at a time."],
        ["Diagnostic fault codes on many motorcycles are read:", "Through a scan tool or the dash, per the manufacturer's method",["With a feeler gauge placed in the diagnostic socket under the seat", "By ear, listening to the engine and counting the clicks from the injectors", "By the exhaust colour at idle, which shows the code in the smoke"], "Procedures differ between brands."],
        ["A slipper clutch helps:", "Reduce rear wheel hop when downshifting aggressively",["Increase top speed by reducing the drag on the clutch plates", "Save fuel by disconnecting the engine from the wheel when coasting", "Lower the seat height, by letting the rear suspension sit lower at rest"], "It allows the clutch to slip under reverse torque."],
        ["Cylinder leakdown testing measures:", "The percentage of air that leaks out of a pressurized cylinder",["Oil pressure in the main gallery while the engine is cranked over", "Fuel flow through the injector at the rated pulse width at idle", "Brake pressure in the caliper when the lever is squeezed with the engine running"], "Listen at the intake, exhaust, and crankcase to find the leak path."],
        ["A CAN bus on a modern motorcycle is:", "A network that lets modules share data",["A type of tire with a special tread for wet roads and cold weather", "A fuse that protects the wiring harness from a short in the bike", "A fuel line that carries pressure from the pump to the injectors"], "A communication fault can set codes across modules."],
        ["Traction control systems reduce:", "Rear wheel spin using sensor input",["Fuel use only, by cutting power when the rider opens the throttle too far", "Tire pressure, by adding air through the valve during hard cornering", "Chain slack, by adjusting the rear axle position when the chain wears"], "They use wheel speed and other data to limit power."],
        ["A voltage drop test on a ground path under load with high voltage drop shows:", "Excessive resistance in the connection",["A strong battery, with plenty of cranking power for the starter motor", "A broken fuse in the circuit, which would show as no voltage at all", "A good ground, since a high reading means the path is conducting well"], "Clean and tighten connections, then retest."],
        ["Steering head bearings that are worn can cause:", "Notchy steering or a head shake",["Poor fuel economy, because the steering resists the rider's input", "Brake fade, because the bearing heat passes through to the caliper", "Chain noise, because the front sprocket moves out of line with the rear"], "Check for notches with the front wheel off the ground."],
        ["A wheel that is out of true can cause:", "Vibration and poor handling",["Extra braking power from the tire, because the flat spot grips better", "Faster charging from the stator, because the wheel turns more slowly", "Lower oil pressure in the engine, because the crank spins more freely"], "Check runout with a gauge or stand."],
        ["Coolant in a liquid-cooled engine should be:", "The type and mix the manufacturer specifies",["Any colour, since all coolants can be mixed without any problems", "Plain water always, since it carries heat away better than coolant", "Brake fluid, since it resists boiling better than the usual coolant mix"], "A typical mix is 50/50, but check the manual."],
        ["Cam timing marks are used to:", "Time the camshaft to the crankshaft",["Set tire pressure to the right level before the engine is cranked over", "Time the chain only, with no reference to the camshaft or crankshaft", "Set brake pads to the right clearance before the caliper is refitted"], "Wrong timing can damage valves."],
        ["A parasitic draw test measures:", "Battery current with the bike off",["Fuel use at idle, with the pump running and the key in the on position", "Tire wear at the contact patch, using a depth gauge on the tread", "Brake force at the lever, using a gauge fitted to the caliper"], "A high draw drains the battery in storage."],
        ["Linked or combined braking systems:", "Apply brake force to both wheels from one control, in part",["Use no hydraulics, and work only through cables from the lever", "Need no fluid, since the system is sealed for the life of the bike", "Only work off-road, where the wheels are not locked up by the rider"], "Follow the service manual for bleeding and service."],
        ["On a high-voltage electric motorcycle you should:", "Follow the manufacturer's procedure and use rated insulating PPE",["Work on it like a normal bike, since the battery is only 12 volts", "Cut the orange cables first to make the system safe before working", "Use a normal multimeter without any checks, as long as the bike is off"], "Only trained technicians should work on high-voltage systems."],
        ["A transmission that jumps out of gear can be caused by:", "Worn shift forks or gear dogs",["Low tire pressure at the rear, which changes the load on the gears", "Dirty brake pads, since dust can get into the gearbox through the drum", "A weak horn circuit, since it draws power from the same supply as the shifter"], "Diagnose by checking shift mechanism parts."],
        ["The air filter in a foam filter system should be:", "Cleaned and re-oiled with the proper foam filter oil",["Run dry, because oil on the foam stops the air from passing through it", "Soaked in engine oil, since any oil will do as well as foam filter oil", "Replaced with a paper element of any size, since it filters the same way"], "A dirty filter changes the mixture and can let dust in."]
      ], 2),
      4: bank([
        ["What is the first step in diagnosing a customer concern?", "Verify the complaint, ideally with a ride or test",["Replace the most likely part first, to see if the fault goes away", "Clear the codes in the ECU, then see if the fault comes back", "Order parts from the supplier so they arrive before the bike is opened up"], "Confirm the concern before testing."],
        ["Canadian Motor Vehicle Safety Standard (CMVSS) 122 covers:", "Motorcycle brake systems",["Tire sizes and load ratings, which are listed on the sidewall of the tire", "Helmet fit and the strength of the chin strap, as tested by an approved lab", "Exhaust noise limits, measured at idle and at a set distance from the bike"], "Brake requirements for motorcycles are in CMVSS 122. Controls and displays are in 123."],
        ["Which Canadian agency handles safety defect recalls on vehicles?", "Transport Canada, working with manufacturers",["The local shop only, which sends its own notice to each customer", "A tire retailer, which decides which vehicles need to be recalled", "A trade union, which inspects bikes for defects on behalf of its members"], "Check recalls when a bike is in for service."],
        ["A pre-delivery inspection (PDI) is:", "A check of a new bike before it is delivered to the customer",["A yearly tax paid by the dealer on every bike that is sold in the province", "A paint process used to finish tanks and fenders before delivery", "A tire brand that is fitted to bikes sold by the dealer in the spring"], "It confirms assembly, fluids, and safety items are correct."],
        ["Work beyond an approved estimate should be:", "Authorized by the customer before it proceeds",["Done anyway, since the customer will want the bike fixed properly", "Hidden in the labour time, so the invoice total stays the same as the estimate", "Skipped silently, even when the work is needed for safe riding"], "Provincial consumer protection rules generally expect authorization for extra work."],
        ["A single-cylinder engine has a 50 mm bore and a 50 mm stroke. Its displacement is about:", "98 cc", ["25 cc", "250 cc", "500 cc"], "π ÷ 4 × 50² × 50 = about 98,175 mm³, or 98 cc."],
        ["A cylinder has 500 cc swept volume and 50 cc clearance volume. The compression ratio is:", "11 to 1", ["10 to 1", "9 to 1", "12 to 1"], "(500 + 50) ÷ 50 = 11."],
        ["A dynamometer measures:", "Engine power and torque",["Tire pressure at the contact patch, while the bike is rolling on the rollers", "Brake fluid level in the master cylinder, with the engine running", "Chain slack at the rear wheel, while the bike is held against the rollers"], "A dyno is also used for tuning and diagnosis."],
        ["Preparing a motorcycle for winter storage should include:", "Fuel stabilizer, a battery charger or removal, and proper tire care",["Leaving the battery to drain in the bike, so it can be recharged in the spring", "Storing with old fuel unprotected, since fuel does not break down in the cold", "Parking it outside in the rain, under a plastic sheet that traps the water"], "Check the manual for fuel, oil, and tire guidance."],
        ["Why should a technician use the manufacturer's torque spec and sequence?", "To avoid damage, loosening, or failure",["To save time at the bench, since the sequence makes each bolt go in faster", "To look professional in front of the customer, since the manual is on show", "To avoid reading the rest of the service manual, which is long and complex"], "Fasteners on safety parts are critical."],
        ["Intermittent electrical faults are best handled by:", "Wiggle tests, data logging, and careful inspection of connectors",["Replacing parts randomly until the fault goes away and the bike runs well", "Ignoring the customer's description, since it is usually not accurate", "Clearing the code and returning the bike, since the fault may not come back"], "Poor connectors and chafed wires are frequent causes."],
        ["A rear tire with a feathered or cupped wear pattern can indicate:", "Suspension or balance problems",["A good tire that is wearing evenly across the whole width of the tread", "A bad battery that is not charging, which leaves the tire to run under-inflated", "A stuck brake only, since the drag always wears the tire in a straight line"], "Inspect shocks, wheel balance, and alignment."],
        ["Documenting service work is important because:", "It records what was done and supports warranty and safety needs",["It is optional, as long as the customer does not ask for the invoice", "It slows the work down, so it is best done at the end of the week", "It replaces training, since the notes tell a new tech what to do on each job"], "Write complaint, cause, and correction."],
        ["A gear ratio is calculated as:", "Driven gear teeth divided by driving gear teeth",["Driving teeth divided by driven teeth, which gives the reverse of the ratio", "Pitch divided by width of the chain, which gives the size of the sprocket", "Torque divided by speed, which gives the power of the engine at the wheel"], "Changing sprockets alters final drive ratio."],
        ["A rider complains of a high-speed wobble. What is a sensible first check?", "Tire pressures and condition, wheel and steering head bearings",["Spark plugs, since fouled plugs cause the engine to shake at high speed", "Air filter, since a blocked filter causes the front end to shake at speed", "Chain oil, since a dry chain makes the rear wheel wobble at high speed"], "Check simple items before more complex ones."],
        ["Replacing a chain without replacing worn sprockets will:", "Wear the new chain quickly",["Extend the chain life, since the new links wear the old teeth smooth", "Improve the gear ratio, since the new chain is a different length", "Be required by the manufacturer, since sprockets last as long as the chain"], "Replace chain and sprockets as a set."],
        ["Which statement about aftermarket parts is correct?", "They should meet the safety and legal requirements and fit properly",["They are always better than the original parts, since they cost more", "They need no testing, since the maker has already approved them for all bikes", "They void all laws and warranties as soon as one is fitted to a bike"], "Check fitment, legal requirements, and rider disclosure."],
        ["How can you help a first-year apprentice develop good habits?", "Demonstrate safe procedures and check their work",["Leave them alone to find their own way, so they learn from their own mistakes", "Rush them through the jobs, so they finish the tasks in the time allowed", "Ignore safety when the shop is busy, so the customer gets the bike earlier"], "Good habits start with clear demonstration and feedback."]
      ], 3)
    },
    roadmapSteps: [
      { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS and shop safety; requirements vary)", "Prepare a resume and apply to dealerships and independent motorcycle shops, noting that many hire in late winter for the riding season", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
      { title: "Year 1: foundations and maintenance", items: ["Learn shop safety, stands, lifts, and PPE", "Perform oil changes, chain service, and tire work", "Learn basic brake and suspension service", "Complete your first technical training block", "Build your core tool kit (see Buying tools)"] },
      { title: "Year 2: engines and electrical basics", items: ["Learn engine operation and perform tests such as compression", "Check valve clearance and carburetor synchronization", "Learn Ohm's law and service charging and starting systems", "Service brakes, forks, and shocks"] },
      { title: "Year 3: fuel injection and drivetrain", items: ["Diagnose fuel injection and ignition systems", "Learn network communication and scan tool data", "Service transmissions, clutches, and final drives", "Learn ABS and traction control basics"] },
      { title: "Year 4 and beyond: advanced diagnosis", items: ["Diagnose complex electrical and intermittent faults", "Work with electric motorcycles and high-voltage systems under proper training", "Handle warranty, recalls, and customer communication", "Mentor first-year apprentices"] },
      { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
    ],
    glossary: [
      ["ABS", "Anti-lock braking system that prevents wheel lockup during hard braking."],
      ["Aspect ratio", "Tire sidewall height as a percentage of section width."],
      ["Bore", "The diameter of an engine cylinder."],
      ["CAN bus", "Controller Area Network, a data network linking vehicle modules."],
      ["Carburetor", "A device that mixes air and fuel for the engine."],
      ["Chain pitch", "The distance between chain pins, such as 5/8 in for a 520 chain."],
      ["CMVSS", "Canada Motor Vehicle Safety Standards."],
      ["Compression ratio", "Cylinder volume at bottom of the stroke divided by volume at the top."],
      ["Countersteering", "Pushing the bar toward the turn to start a lean."],
      ["ECU", "Electronic control unit that manages fuel and ignition."],
      ["Feeler gauge", "Set of thin blades used to measure small gaps."],
      ["Final drive", "The chain, belt, or shaft that drives the rear wheel."],
      ["Fork seal", "Seal that keeps fork oil in the front suspension."],
      ["JASO", "Japanese Automotive Standards Organization, with MA ratings for wet-clutch oils."],
      ["Multimeter", "Meter that measures voltage, current, and resistance."],
      ["Preload", "Spring compression set before the suspension moves."],
      ["Regulator/rectifier", "Converts stator AC to DC and limits charging voltage."],
      ["Rider sag", "Suspension compression with the rider aboard."],
      ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
      ["Shim", "A thin disc used to set clearances such as valve lash."],
      ["Slipper clutch", "A clutch that slips under reverse torque to prevent wheel hop."],
      ["Stator", "The stationary windings that produce AC power."],
      ["Stroke", "The distance a piston travels in the cylinder."],
      ["Throttle position sensor", "Sensor that reports throttle opening to the ECU."],
      ["Torque", "Turning force, measured in N·m or lb-ft."],
      ["Valve clearance", "The small gap in the valve train that allows for heat expansion."],
      ["Wet clutch", "A clutch that runs in engine oil."],
      ["WHMIS", "Canada's workplace hazardous materials information system."]
    ],
    cards: [
      { front: "Four-stroke order", back: "Intake, compression, power, exhaust" },
      { front: "1 lb-ft in N·m", back: "About 1.356 N·m" },
      { front: "Tire marking 120/70ZR17", back: "120 mm width, 70% aspect ratio, Z speed rating, radial, 17 in rim" },
      { front: "Displacement formula", back: "π ÷ 4 × bore² × stroke × number of cylinders" },
      { front: "Compression ratio", back: "(Swept volume + clearance volume) ÷ clearance volume" },
      { front: "JASO MA oil", back: "For wet clutches, where the engine and clutch share oil" },
      { front: "Chain size 520", back: "5/8 in pitch, 2/8 in width" },
      { front: "Resting voltage of a full 12 V battery", back: "About 12.6 V" },
      { front: "Gear ratio", back: "Driven teeth ÷ driving teeth" }
    ],
    jobsIntro: "Look for powersports and motorcycle dealerships, independent motorcycle shops, scooter and ATV shops, rental and touring companies, and snowmobile and marine dealers that also service motorcycles.",
    tips: ["Bring a short resume, your safety tickets, and ID, and mention any riding or hands-on experience.", "Show curiosity about how bikes work and willingness to learn diagnosis.", "Visit shops in person in late winter when they prepare for the riding season, and follow up.", "Ask what tools you need and what the employer supplies."],
    forumTopics: ["Starting out", "Engines, carburetors, and fuel injection", "Brakes, suspension, and electrical", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference: [
      {
        title: "Key formulas",
        list: [
          "Displacement = π ÷ 4 × bore² × stroke × number of cylinders",
          "Compression ratio = (swept volume + clearance volume) ÷ clearance volume",
          "Ohm's law: V = I × R, and power P = V × I",
          "Gear ratio = driven gear teeth ÷ driving gear teeth",
          "Power in kW = hp × 0.746",
          "Voltage drop = current × resistance of the connection or wire"
        ]
      },
      {
        title: "Conversions",
        list: [
          "1 in = 25.4 mm, and 1 ft = 304.8 mm",
          "1 psi ≈ 6.895 kPa, and 1 bar = 100 kPa",
          "1 lb-ft ≈ 1.356 N·m",
          "1 cc = 1 mL = 1000 mm³",
          "1 US gallon ≈ 3.785 L, and 1 Imperial gallon ≈ 4.546 L",
          "1 mile ≈ 1.609 km"
        ]
      },
      {
        title: "Chain size codes",
        table: {
          head: ["Code", "Pitch", "Width"],
          rows: [
            ["420", "1/2 in (12.7 mm)", "2/8 in"],
            ["520", "5/8 in (15.875 mm)", "2/8 in"],
            ["525", "5/8 in (15.875 mm)", "5/16 in"],
            ["530", "5/8 in (15.875 mm)", "3/8 in"]
          ]
        },
        note: "The first digit gives the pitch in eighths of an inch. Match the chain to the sprockets and replace them as a set."
      },
      {
        title: "Tire marking explained",
        table: {
          head: ["Part of 120/70ZR17", "Meaning"],
          rows: [
            ["120", "Section width in millimetres"],
            ["70", "Aspect ratio: sidewall is 70 percent of the width"],
            ["Z", "Speed rating symbol"],
            ["R", "Radial construction"],
            ["17", "Rim diameter in inches"]
          ]
        },
        note: "The DOT code ends with four digits for the week and year of manufacture. Set pressures cold, per the manual."
      },
      {
        title: "Fluids and service practices",
        list: [
          "<strong>Engine oil:</strong> use the viscosity and JASO rating the manual calls for. Wet clutches need MA or MA2 oil.",
          "<strong>Brake fluid:</strong> glycol-based DOT 3, DOT 4, and DOT 5.1 absorb water. DOT 5 is silicone based and not interchangeable.",
          "<strong>Coolant:</strong> use the type specified and mix as directed (commonly 50/50).",
          "<strong>Valve clearance:</strong> measure cold, as the manual specifies.",
          "<strong>Chain:</strong> check slack at the tightest point, lubricate with a product suitable for the chain type, and replace chain and sprockets together.",
          "<strong>Canadian safety standards:</strong> CMVSS 122 covers motorcycle brake systems and CMVSS 123 covers motorcycle controls and displays."
        ]
      }
    ]
  });
})();
