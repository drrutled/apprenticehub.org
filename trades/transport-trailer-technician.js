// Transport Trailer Technician content. Practice questions are original study aids, not official Red Seal exam questions.

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
      note: "Professional-grade tools that hold up around heavy axles, rust, and road salt. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first, and what the shop's tool policy is.",
      items: [
        { name: "Combination wrench set, metric and SAE (10 mm to 32 mm, 3/8 in to 1-1/4 in)", why: "Trailers mix metric and imperial hardware. Quality box ends do not round off rusty fasteners.", search: "GearWrench Snap-on combination wrench set metric SAE" },
        { name: "1/2 in drive socket set, 6-point, metric and SAE, with 33 mm and 1-1/2 in wheel nut sockets", why: "Wheel nuts on heavy trailers need thin-wall or impact-rated sockets sized to the nut.", search: "1/2 inch drive socket set 6 point 33mm 1-1/2 inch impact socket wheel nut" },
        { name: "3/4 in drive breaker bar and long extensions", why: "Controlled leverage for seized hardware without damaging your ratchet.", search: "3/4 inch drive breaker bar 24 inch extension" },
        { name: "Torque wrench, 1/2 in drive (about 50 to 250 ft-lb), and a 3/4 in drive wrench for wheel nuts", why: "Torque specs on wheel ends and suspension hardware are safety-critical. Store wrenches at their lowest setting.", search: "1/2 inch click torque wrench 250 ft lb 3/4 inch drive torque wrench 600 ft lb" },
        { name: "Hammers: ball-peen, dead-blow, and a 4 lb hand sledge, with punches and drifts", why: "Removing pins, bushings, and seized hardware is regular work on suspensions and landing gear.", search: "dead blow hammer ball peen hammer 4 lb sledge punch drift set" },
        { name: "Pliers set and side cutters", why: "Cotter pins, clips, wire work, and light-harness repairs come up daily.", search: "Knipex pliers set locking pliers side cutters" },
        { name: "Screwdrivers and pry bars", why: "Hardened tips and bars handle lamps, linkages, and trim without bending.", search: "screwdriver set pry bar set Wera Klein" },
        { name: "CSA-approved safety boots, safety glasses, hearing protection, and gloves", why: "Look for the green CSA triangle on boots. Rust, grinding, and noise are daily exposures.", search: "CSA safety boots Mechanix gloves safety glasses earmuffs" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up in your shop and what the shop already supplies.",
      items: [
        { name: "Digital multimeter with min/max (such as Fluke or Klein)", why: "Voltage, resistance, and continuity checks on trailer lighting, ABS, and sensor circuits. Choose a CAT III-rated meter.", search: "Fluke 117 digital multimeter automotive Klein MM720" },
        { name: "7-way trailer circuit tester", why: "Quickly checks lighting and power circuits at the trailer connector.", search: "7 way trailer circuit tester tractor trailer J560" },
        { name: "Tire gauge, tread depth gauge, and inflation hose with clip-on chuck", why: "Tire inflation and tread checks are part of every inspection.", search: "truck tire pressure gauge tread depth gauge dual head chuck" },
        { name: "Grease gun and fluid transfer pump", why: "Landing gear, slack adjusters, suspension pins, and fifth wheel plates all need lubrication.", search: "Lincoln grease gun 14 oz pistol grip flexible hose" },
        { name: "Cordless 1/2 in impact wrench", why: "Portable break-away torque for road service and yard work. Pick one battery platform and stay with it.", search: "Milwaukee M18 FUEL 1/2 inch high torque impact wrench DeWalt 20V" },
        { name: "Tape measure, trammel bar, and axle alignment tools", why: "Checking axle squareness and tracking means accurate measurements over long distances.", search: "25 ft tape measure trammel bar axle alignment tool trailer" },
        { name: "Angle grinder and wire wheels", why: "Preparing rust, welds, and frame repairs. Eye and face protection are mandatory.", search: "Milwaukee DeWalt 4-1/2 inch angle grinder wire wheel flap disc" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying, and learn the safety training that comes with each tool.",
      items: [
        { name: "Trailer ABS diagnostic tool (such as a trailer ABS reader and software)", why: "Reads codes and wheel speed data from the trailer ABS controller. Normally company-supplied.", search: "trailer ABS diagnostic tool Bendix Wabco Haldex reader" },
        { name: "Welding equipment (MIG, stick, and aluminum capable)", why: "Frame, crossmember, and body repairs. Usually shop-supplied, with hot work training and fire watch.", search: "Lincoln Miller MIG welder 230V spool gun aluminum" },
        { name: "Hydraulic press, bearing and seal drivers, and hub tools", why: "Wheel seal and bearing work needs correct drivers. Shops often own the large presses.", search: "wheel seal driver set truck hub bearing race driver set" },
        { name: "Air system leakage tester and gauge kit", why: "Quantifies air leaks and checks trailer supply and service pressure.", search: "air brake test gauge kit truck trailer air leakage tester" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for electrical, brakes, and diagnostics study. Check with your school and your exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Ohm's law, weight and load calculations, and unit conversions come up throughout the program.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Mechanical pencil (0.5 mm) and spare leads", why: "Clean notes and sketches of circuits and air brake schematics.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm lead refills" },
        { name: "Coloured pencils or pens", why: "Colour in supply and service air lines and circuits when you trace schematics.", search: "coloured pencils set pens 12 colours" },
        { name: "Graph paper and a 30 cm steel ruler", why: "Sketching axle layouts and plotting weight distribution.", search: "graph paper pad 30 cm steel ruler" },
        { name: "Field notebook (Rite in the Rain)", why: "Weatherproof paper for service notes, torque specs, and measurements.", search: "Rite in the Rain field notebook" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by system: brakes, suspension, electrical, structure, landing gear.", search: "binder dividers highlighters" },
        { name: "Pocket conversion card (metric and imperial)", why: "Quick lb to kg, psi to kPa, and mm to inch checks while studying and in the shop.", search: "pocket conversion chart card metric imperial mechanic reference" }
      ]
    }
  ];

  const mediaGroups = [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work, plus the occupational standard and exam information for your trade.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Canadian Trucking Alliance", desc: "Industry information on trucking regulation, safety, and equipment.", url: "https://www.cantruck.ca/" },
        { name: "Canadian Council of Motor Transport Administrators (CCMTA)", desc: "Home of the National Safety Code, including cargo securement and maintenance standards.", url: "https://www.ccmta.ca/" },
        { name: "Commercial Vehicle Safety Alliance (CVSA)", desc: "Roadside inspection programs and out-of-service criteria.", url: "https://www.cvsa.org/" },
        { name: "Transport Canada", desc: "Federal vehicle standards, including the Canada Motor Vehicle Safety Standards and dangerous goods rules.", url: "https://tc.canada.ca/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials, manufacturer service information, and provincial rules.",
      items: [
        { name: "Trailer air brake system basics", desc: "Supply, service, relay valves, and spring brakes on trailers.", url: "https://www.youtube.com/results?search_query=semi+trailer+air+brake+system+basics+relay+valve+spring+brake" },
        { name: "Trailer ABS troubleshooting", desc: "Wheel speed sensors, tone rings, and modulators.", url: "https://www.youtube.com/results?search_query=trailer+ABS+troubleshooting+wheel+speed+sensor+tone+ring" },
        { name: "Landing gear service and repair", desc: "Inspecting, lubricating, and replacing landing gear.", url: "https://www.youtube.com/results?search_query=semi+trailer+landing+gear+repair+service" },
        { name: "Trailer wheel end and hub seal service", desc: "Bearings, seals, and hub oil on trailer axles.", url: "https://www.youtube.com/results?search_query=trailer+wheel+end+hub+seal+bearing+service+semi" },
        { name: "Trailer air suspension and ride height", desc: "Height control valves, air springs, and shocks.", url: "https://www.youtube.com/results?search_query=trailer+air+ride+suspension+ride+height+valve+adjust" },
        { name: "Trailer axle alignment", desc: "Measuring and correcting tandem axle alignment.", url: "https://www.youtube.com/results?search_query=semi+trailer+axle+alignment+tandem+tracking" },
        { name: "Trailer lighting and 7-way wiring", desc: "Tracing lighting circuits and grounds.", url: "https://www.youtube.com/results?search_query=semi+trailer+lights+wiring+7+way+troubleshooting+ground" },
        { name: "Trailer floor and frame repair", desc: "Welding and repairing structure and floors.", url: "https://www.youtube.com/results?search_query=semi+trailer+floor+frame+repair+welding+crossmember" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for trailer work yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: trailer technician apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=trailer+technician+apprentice+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do in the shop.",
      items: [
        { name: "YouTube: trailer repair shop podcast", desc: "Shop talk on trailer brakes, suspensions, and structure.", url: "https://www.youtube.com/results?search_query=trailer+repair+shop+podcast+brakes+suspension" },
        { name: "YouTube: air brake systems explained (listen-along)", desc: "Talks on air brake design and inspection to hear on the commute.", url: "https://www.youtube.com/results?search_query=air+brake+systems+explained+truck+trailer+technician+podcast" },
        { name: "YouTube: CVSA inspection and out-of-service criteria talk", desc: "Roadside inspection items that affect trailer work.", url: "https://www.youtube.com/results?search_query=CVSA+inspection+out+of+service+criteria+trailer+brakes+talk" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, fleet maintenance, and shop leadership.",
      items: [
        { name: "YouTube: Red Seal transport trailer technician exam prep", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+transport+trailer+technician+exam+preparation" },
        { name: "YouTube: fleet maintenance management podcast", desc: "Preventive maintenance planning, uptime, and shop management.", url: "https://www.youtube.com/results?search_query=fleet+maintenance+management+podcast+trucking" },
        { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
      ]
    }
  ];

  const practiceBank = {
    1: mk(1, [
      ["How many sections does a WHMIS Safety Data Sheet (SDS) have?", "16", "8", "12", "20", "WHMIS 2015 follows the GHS format, which uses 16 standard SDS sections."],
      ["Before working under a trailer you should:", "Chock the wheels and support the trailer on rated stands", "Rely on the landing gear alone", "Work with the brakes released and no chocks", "Stand under the kingpin to align it", "Landing gear and jacks can fail. Rated stands carry the load, and chocks prevent rolling."],
      ["The trailer landing gear in the low (loaded) gear is used to:", "Lift or lower with a heavy load, using less effort but more turns", "Raise the empty trailer quickly", "Set the tire pressure", "Charge the batteries", "High gear is fast with no load. Low gear gives mechanical advantage for lifting weight."],
      ["The green triangle on the label of CSA-approved safety boots means:", "The sole has puncture protection", "The boots are waterproof", "The boots are insulated for electrical work", "The boots are for office use", "The CSA green triangle marks puncture-resistant soles."],
      ["How many millimetres are in one inch?", "25.4", "2.54", "10", "254", "1 in = 25.4 mm exactly."],
      ["A torque wrench is used to:", "Tighten fasteners to a specified torque", "Loosen seized bolts", "Measure bolt length", "Check thread pitch", "Specified torque prevents loose wheels and damaged parts."],
      ["100 lb-ft is about how many newton-metres?", "136 N-m", "74 N-m", "14 N-m", "1360 N-m", "1 lb-ft is about 1.356 N-m."],
      ["1 kg is about how many pounds?", "2.2", "0.45", "10", "22", "1 kg ≈ 2.205 lb, and 1 lb ≈ 0.454 kg."],
      ["The standard kingpin diameter on most trailers is:", "2 in (50 mm)", "1 in (25 mm)", "4 in (100 mm)", "5 in (127 mm)", "A 2 in kingpin is standard for typical highway semi-trailers."],
      ["Lockout/tagout is used to:", "Keep energy sources off while servicing equipment", "Label tools", "Order parts", "Track hours", "It prevents accidental start-up or release of stored energy."],
      ["Which colour is typically the emergency (supply) air line glad hand?", "Red", "Blue", "Green", "Yellow", "Red is the supply (emergency) line, and blue is the service (control) line."],
      ["Why should compressed air never be aimed at bare skin?", "Air can enter the bloodstream through the skin", "It dries the skin", "It damages tools", "It cools the air tank", "Air at pressure can cause serious injury."],
      ["Before working on a trailer's electrical system you should:", "Disconnect the trailer from power or the tractor connector", "Leave it connected for testing", "Short the wires", "Use a wet cloth", "Isolating power avoids shorts and shocks."],
      ["Which extinguisher class is for flammable liquids such as fuel?", "Class B", "Class A", "Class D", "Class K", "Class B is for flammable liquids."],
      ["A hacksaw, a file, and a grinder are examples of:", "Hand and power tools used for cutting and shaping", "Measuring tools", "Diagnostic tools", "Lifting tools", "Choose the right tool and wear eye and face protection."],
      ["Ohm's law: 12 V across a 6 ohm load gives a current of:", "2 A", "72 A", "0.5 A", "18 A", "I = V / R = 12 / 6 = 2 A."],
      ["When using an angle grinder, you should always wear:", "Eye and face protection and keep the guard in place", "Loose gloves", "No protection if brief", "Sandals", "Sparks and disc fragments are serious hazards."],
      ["Used oil, filters, and brake fluid must be:", "Collected and disposed of as regulated waste", "Poured on the ground", "Burned on site", "Left in the pan", "Follow provincial rules and company procedures."]
    ]),
    2: mk(2, [
      ["On a trailer air brake system, the red supply line:", "Charges the trailer air tanks and releases the spring brakes", "Applies the service brakes", "Carries electrical power", "Supplies the landing gear", "Supply air fills reservoirs and holds the spring brakes released."],
      ["The blue service line:", "Carries the control signal that applies the service brakes", "Supplies the tank", "Releases the parking brake", "Carries ABS power", "Pressure in the service line tells the relay valve how hard to apply."],
      ["A relay valve on a trailer:", "Applies the brakes quickly using air from the trailer reservoir", "Filters air", "Cools the drums", "Raises the suspension", "It speeds up application and release at the brake chambers."],
      ["Trailer spring brakes apply when:", "Supply air pressure is lost or released", "Supply pressure is high", "The lights are on", "The ignition is on", "Springs hold the brake on until air compresses them to release."],
      ["Never remove the clamp from a spring brake chamber without caging it because:", "The stored spring force can cause serious injury", "The drum will cool", "It will drain the tank", "It will fail the ABS", "The spring is under very high force. Never disassemble a spring brake chamber."],
      ["What does the slack adjuster do on an S-cam brake?", "Converts pushrod movement to cam rotation and maintains shoe clearance", "Raises the suspension", "Filters air", "Cools the brake", "Correct adjustment gives even braking and avoids dragging."],
      ["A wheel speed sensor and tone ring are used by:", "The anti-lock braking system", "The suspension", "The landing gear", "The fifth wheel", "The ABS controller reads wheel speed to prevent lockup."],
      ["A trailer's tires should be checked for:", "Inflation, tread depth, damage, and matched duals", "Colour only", "Brand only", "Weight only", "Mismatched inflation or size causes uneven wear and heat."],
      ["The CVSA out-of-service tread depth for steer tires on power units is 4/32 in, and for all other tires (including trailers) it is:", "2/32 in (1.6 mm)", "4/32 in", "1/32 in", "6/32 in", "Trailer tires follow the 2/32 in minimum used for non-steer positions."],
      ["A trailer's hub oil level is checked:", "At the sight window or fill plug, to the manufacturer's mark", "By tasting it", "Never", "Only when hot", "Low oil leads to bearing damage."],
      ["Which fastener check is critical after a wheel is mounted?", "Re-torque after a short distance", "None needed", "Paint the nuts", "Loosen them slightly", "Wheel nuts can settle after the first use. Follow the manufacturer's re-torque schedule."],
      ["Common causes of trailer lighting faults include:", "Corroded grounds, damaged wiring, and poor connections", "Too much air pressure", "Landing gear height", "A full tank", "Always check the ground circuit first."],
      ["A 7-way connector is used to:", "Supply trailer lighting circuits and power for the ABS", "Connect the air lines", "Raise the landing gear", "Carry fuel", "The 7-way connector links the tractor's electrical system to the trailer."],
      ["Dielectric grease on electrical connectors is used to:", "Help keep out moisture and corrosion", "Increase voltage", "Conduct current", "Lubricate bearings", "It protects connectors from water and road salt."],
      ["A tandem axle suspension is held in position by:", "Springs or air springs, hangers, and radius or torque rods", "Landing gear", "A fifth wheel", "The brake chambers", "Suspension components locate and cushion the axles."],
      ["What should you check on a leaf spring during inspection?", "Cracks, broken leaves, shifted or missing center bolt, and sagging", "Paint colour", "Tire brand", "The glad hand colour", "Spring defects affect handling and may be out-of-service conditions."],
      ["The upper coupler plate on a trailer:", "Rests on the fifth wheel and carries the kingpin", "Holds the landing gear", "Mounts the axles", "Stores the air", "It is the flat plate and kingpin that couple with the tractor."],
      ["Which of the following are typical trailer structural materials?", "Steel and aluminum", "Wood only", "Plastic only", "Rubber", "Many trailers use steel, aluminum, or a combination."]
    ]),
    3: mk(3, [
      ["A trailer's air brake system shows a leak when the engine is off and the tractor supply is isolated. The most reliable way to find it is:", "Apply the brakes and listen and use soapy water on suspect joints", "Pressurize and ignore the leak", "Use open flame", "Replace all hoses", "A soap solution shows bubbles at leaks."],
      ["Trailer brake imbalance can result from:", "Uneven adjustment, worn linings, or restricted air lines", "Matched brakes", "Correct tires", "Properly maintained slack adjusters", "Each brake must do its share. Uneven brakes cause long stops and uneven wear."],
      ["A common sign of an ABS wheel speed sensor problem is:", "An ABS warning light and a fault code for that wheel", "Higher tire pressure", "Low oil", "Cold hubs", "The controller detects a missing or erratic signal."],
      ["When a trailer ABS sensor is installed, the clearance to the tone ring is:", "Set per the manufacturer, using the correct sensor and clip", "Random", "Maximum", "Zero with the sensor pressed hard", "Proper gap gives a clean signal."],
      ["An air ride suspension height control valve:", "Adjusts air springs to maintain ride height", "Filters air", "Applies the brakes", "Cools the shocks", "It adds or exhausts air as load changes."],
      ["Moving a tandem axle slider forward on a loaded trailer moves weight:", "Onto the trailer axles and off the tractor drive axles", "Onto the tractor drive axles", "Onto the landing gear", "Off the trailer entirely", "Sliding forward shortens the distance to the kingpin and shifts load to the trailer axles."],
      ["After sliding the tandem, the locking pins must be:", "Fully engaged and confirmed visually", "Left out", "Painted", "Greased only", "Unlocked sliders are an extreme hazard."],
      ["Axle alignment on a tandem trailer is checked by:", "Measuring from the kingpin to each end of each axle and comparing the measurements", "Judging by sight", "Checking tire colour", "Weighing the trailer", "Equal measurements show the axles are square to the kingpin."],
      ["A trailer that tracks to one side (dog tracking) most often indicates:", "Axle misalignment", "Low tire pressure on all tires", "A high water level", "Mismatched lights", "Misaligned axles cause the trailer to follow at an angle."],
      ["U-bolts or spring hardware on a suspension should be:", "Torqued to specification and re-checked after initial service", "Overtightened", "Left loose", "Replaced every week", "Proper clamp load keeps the axle aligned."],
      ["Hub seal leaks should be fixed because:", "Oil can reach the brake linings and cause brake failure", "They look untidy", "They add pressure", "They cool the drum", "Oil-contaminated linings cannot brake and must be replaced."],
      ["On a trailer with disc brakes, brake pads should be checked for:", "Pad thickness, uneven wear, and sticking calipers", "Paint", "Tire brand", "Hub colour", "Disc brakes wear differently from drums but still need regular checks."],
      ["Before welding on a trailer, you should:", "Disconnect electronics and protect wiring, and have a fire extinguisher ready", "Weld at once", "Leave the ABS connected", "Remove the extinguisher", "Heat and current can damage controllers, wiring, and nearby materials."],
      ["Before welding or cutting on a tank trailer that carried flammable product, you must:", "Ensure the tank is cleaned, purged, and certified safe for hot work", "Weld straight away", "Fill it with air", "Just open the hatch", "Vapours can explode. Follow confined space and hot work procedures."],
      ["Reflective conspicuity tape on a trailer helps:", "Make the trailer visible at night", "Seal the body", "Hold the doors", "Cool the floor", "It uses alternating red and white patterns per vehicle standards."],
      ["Aluminum trailer floors and frames require:", "Welding procedures and filler suited to aluminum", "Any welding wire", "Steel electrodes", "No cleaning", "Aluminum needs proper filler, cleaning, and technique."],
      ["The first thing to check when a trailer's lights fail on all circuits is typically:", "The ground connection and the connector", "The tire pressure", "The landing gear", "The glad hands", "A common ground fault affects several circuits at once."]
    ]),
    4: mk(0, [
      ["In Canada, standards for securing cargo on commercial vehicles are set out in:", "National Safety Code Standard 10 (Cargo Securement)", "A tire manufacturer's guide", "A landing gear manual", "A paint standard", "NSC Standard 10 governs cargo securement. Provinces adopt it in their rules."],
      ["Vehicle maintenance and inspection requirements for commercial vehicles are set by:", "The National Safety Code standards as adopted by each province", "One company's policy only", "Tire dealers", "Insurance forms", "Standard 11 covers maintenance and periodic inspection, with provincial administration."],
      ["Highway tank trailers for dangerous goods are built to standards such as:", "CSA B620", "CSA Z94.1", "CSA Z195", "CSA C22.1", "CSA B620 covers highway tanks and TC portable tanks for dangerous goods."],
      ["Dangerous goods transportation in Canada is regulated federally by:", "The Transportation of Dangerous Goods Act and Regulations", "The Canada Labour Code only", "Provincial tire laws", "The Criminal Code only", "TDG rules apply across Canada. Tank inspection and certification are strict."],
      ["A trailer is found with a cracked main frame rail. You should:", "Tag it out of service until repaired by approved methods", "Keep using it", "Paint over the crack", "Wait for the next inspection", "Structural defects are out-of-service conditions."],
      ["Which of the following should be done after a trailer has been in an accident?", "Inspect the frame, axles, suspension, and alignment thoroughly", "Wash it only", "Replace the lights only", "Change the tires only", "Hidden damage can compromise safety."],
      ["Brake performance on a combination vehicle depends on:", "Proper adjustment, lining condition, and air system balance on all units", "Only the tractor", "Only the trailer", "Paint", "Every brake must be working properly."],
      ["A good trailer inspection report includes:", "Defects found, repairs made, and date and technician details", "Only a signature", "Only the price", "Only a photo", "Records support compliance and follow-up."],
      ["Which statement about trailer ABS is correct?", "A trailer with an ABS fault may still brake but without anti-lock protection, and it should be repaired", "ABS faults are cosmetic", "ABS never needs repair", "ABS raises air pressure", "A warning light shows lost function and must be corrected."],
      ["Gross vehicle weight rating (GVWR) of a trailer is:", "The maximum loaded weight set by the manufacturer", "The empty weight", "The weight of cargo only", "The weight of the axles", "Loads above ratings overstress components."],
      ["Wheel-end failures are most often prevented by:", "Correct installation, lubrication, torque, and preventive inspection", "Ignoring noise", "Extending intervals", "Using any grease", "Most wheel-end failures are installation or maintenance problems."],
      ["When a customer reports a fault, the best first step is to:", "Verify the complaint and gather details", "Replace the likely part", "Clear the codes", "Quote a price", "Good information leads to faster repairs."],
      ["A root cause analysis aims to:", "Find the underlying failure so it does not recur", "Assign blame", "Order more parts", "Reduce paperwork", "Fixing only the symptom leads to repeat failures."],
      ["Preventive maintenance reduces:", "Unplanned downtime and costly repairs", "The need for safety", "Training", "Fuel use", "Scheduled service finds wear early."],
      ["A trailer's brake lining is found oil-soaked. You should:", "Fix the oil source and replace the contaminated linings", "Wash the lining with solvent", "Burn it off", "Ignore it", "Oil-soaked lining cannot be cleaned effectively. Fix the leak and replace the lining."],
      ["Refurbishing a trailer's air system includes replacing:", "Worn hoses, fittings, and valves with parts rated for the system", "Any hose that fits", "Garden hose", "Wire", "Air system parts must be rated for the pressure and the environment."],
      ["The best way to plan work on a fleet of trailers is to:", "Use a preventive maintenance schedule based on time, distance, and condition", "Wait for failures", "Repair randomly", "Avoid records", "Planning keeps trailers safe and available."],
      ["When an inspector marks a trailer out of service, the trailer:", "Must not move until the defect is corrected, apart from safe movement allowed by the authority", "Can continue its trip", "Needs only a note", "Can drive to the next stop", "Out-of-service orders protect the public."]
    ])
  };

  const roadmapSteps = [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get safety training employers ask for (commonly WHMIS and site orientation; requirements vary)", "Prepare a resume and apply to trailer dealers, manufacturers, and fleet shops", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: shop safety and basics", items: ["Learn shop safety, lifting, blocking, and fluids handling", "Do preventive maintenance and inspections: lubrication, tires, lights, and landing gear", "Learn measuring tools, torque, and fasteners", "Study electrical basics and trailer lighting circuits", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: brakes, wheel ends, and suspension", items: ["Service air brake systems, drum and disc brakes, and wheel ends", "Work on air ride and mechanical suspensions", "Learn trailer connections: glad hands and 7-way circuits", "Learn to read wiring diagrams and air brake schematics"] },
    { title: "Year 3: ABS, electrical, and structure", items: ["Diagnose trailer ABS and electrical problems with test equipment", "Align axles and adjust slider assemblies", "Repair frames, floors, doors, and bodies, including welding under supervision", "Learn the different trailer types and their special systems"] },
    { title: "Year 4 and beyond: advanced diagnostics and inspection", items: ["Handle complex troubleshooting and accident repair", "Learn National Safety Code standards and inspection processes", "Understand tank, refrigerated, and specialized trailer requirements", "Mentor first-year apprentices and use the Red Seal standard to find gaps"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal exam information and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ];

  const glossary = [
    ["ABS", "Anti-lock braking system, which prevents wheel lockup in a hard stop."],
    ["Air ride", "A suspension using air springs and a height control valve."],
    ["B-train", "A combination of a lead trailer with a fifth wheel on its rear and a second trailer coupled to it."],
    ["Brake chamber", "A diaphragm unit that turns air pressure into pushrod force to apply the brakes."],
    ["Caging bolt", "A bolt used to hold a spring brake spring compressed, released only by a trained technician."],
    ["Conspicuity tape", "Red and white reflective tape that makes a trailer visible at night."],
    ["Converter dolly", "A coupling unit with a fifth wheel and axle that lets a second trailer be towed."],
    ["Crossmember", "A structural member running across the trailer frame that supports the floor."],
    ["Dog tracking", "When a trailer follows the tractor at an angle because of misaligned axles."],
    ["Dry van", "An enclosed non-refrigerated cargo trailer."],
    ["Exciter ring", "A toothed ring on the wheel hub that the ABS sensor reads (also called a tone ring)."],
    ["Glad hand", "The coupling that connects the air lines between a tractor and a trailer."],
    ["GVWR", "Gross vehicle weight rating, the maximum loaded weight set by the manufacturer."],
    ["Height control valve", "An air suspension valve that keeps ride height steady."],
    ["Kingpin", "The pin under the front of a trailer that locks into the fifth wheel."],
    ["Landing gear", "Support legs that hold the front of a trailer when it is not coupled."],
    ["Lockout/tagout", "A procedure that keeps energy sources off while equipment is serviced."],
    ["Pup trailer", "A short trailer that is often towed behind another trailer."],
    ["Relay valve", "An air valve that applies and releases trailer brakes quickly."],
    ["SDS", "Safety Data Sheet, the 16-section document describing a product's hazards and handling."],
    ["Service line", "The blue air line that carries the brake control signal."],
    ["Slack adjuster", "A lever on an S-cam brake that sets and maintains shoe-to-drum clearance."],
    ["Slider (tandem)", "A sliding axle assembly that adjusts weight distribution and length."],
    ["Spring brake", "A parking and emergency brake applied by a spring and released with air."],
    ["Supply line", "The red air line that charges trailer tanks and releases the spring brakes."],
    ["Tandem axle", "A pair of axles on a trailer suspension."],
    ["Tone ring", "A toothed ring read by a wheel speed sensor for ABS."],
    ["Upper coupler", "The plate and kingpin at the front of a trailer that couple to the fifth wheel."],
    ["Wheel end", "The hub, bearings, seals, brake, and wheel assembly at each axle end."],
    ["WHMIS", "Workplace Hazardous Materials Information System, Canada's hazard communication standard."]
  ];

  const reference = [
    {
      title: "Conversions",
      list: [
        "1 in = 25.4 mm, and 1 ft = 304.8 mm",
        "1 psi ≈ 6.895 kPa, and 1 bar = 100 kPa ≈ 14.5 psi",
        "1 lb-ft ≈ 1.356 N-m, and 1 N-m ≈ 0.738 lb-ft",
        "1 kg ≈ 2.205 lb, and 1 lb ≈ 0.454 kg",
        "1 tonne (metric) = 1000 kg ≈ 2205 lb",
        "1 US gallon ≈ 3.785 L, and 1 Imperial gallon ≈ 4.546 L"
      ]
    },
    {
      title: "Trailer air brake lines and valves",
      table: {
        head: ["Item", "Job"],
        rows: [
          ["Supply (emergency) line, red", "Charges the trailer reservoirs and holds the spring brakes released"],
          ["Service (control) line, blue", "Carries the brake application signal from the driver's pedal"],
          ["Relay valve", "Applies and releases the brakes quickly using trailer reservoir air"],
          ["Spring brake chamber", "Parking and emergency brake applied by spring force when air is lost"],
          ["Slack adjuster", "Maintains shoe-to-drum clearance on S-cam brakes"],
          ["ABS modulator", "Reduces brake pressure when a wheel is about to lock"]
        ]
      },
      note: "Exact pressures and tests vary by regulation and manufacturer. Use your provincial standard and the service manual."
    },
    {
      title: "Weight distribution and slider axles",
      list: [
        "Sliding the tandem forward moves weight onto the trailer axles and off the tractor drive axles",
        "Sliding the tandem back moves weight onto the tractor drive axles and off the trailer axles",
        "Every sliding pin must be fully engaged and visually confirmed after a move",
        "Check axle weights against axle ratings and provincial limits",
        "Gross vehicle weight must not exceed the GVWR and the lowest component rating"
      ],
      note: "Axle weight limits vary by province and configuration, so always confirm with your provincial authority."
    },
    {
      title: "Electrical formulas (DC)",
      list: [
        "Ohm's law: V = I × R, so I = V ÷ R and R = V ÷ I",
        "Power: P = V × I (watts = volts × amps)",
        "Series circuit: resistances add, and current is the same everywhere",
        "Parallel circuit: voltage is the same across every branch, and branch currents add",
        "Most trailer lighting faults trace to poor grounds, corroded connectors, or damaged wiring"
      ]
    },
    {
      title: "Tire tread depth limits (CVSA out-of-service criteria)",
      table: {
        head: ["Position", "Minimum tread depth"],
        rows: [
          ["Steer axle of a power unit", "4/32 in (3.2 mm)"],
          ["All other axles, including trailer axles", "2/32 in (1.6 mm)"]
        ]
      },
      note: "Provincial inspection rules and fleet policies may be stricter. Measure in a major groove, away from wear bars."
    },
    {
      title: "Standards and where to look",
      list: [
        "<strong>National Safety Code:</strong> Standard 10 (Cargo Securement) and Standard 11 (Maintenance and Inspection), administered by provinces and territories",
        "<strong>CVSA:</strong> North American Standard inspection levels and out-of-service criteria",
        "<strong>CMVSS:</strong> Canada Motor Vehicle Safety Standards for new vehicles, including lighting and braking",
        "<strong>TDG:</strong> Transportation of Dangerous Goods rules and CSA B620 for highway tanks",
        "<strong>WHMIS and provincial occupational health and safety rules:</strong> chemical hazards, lockout, and lifting",
        "<strong>Manufacturer service information:</strong> torque specs, intervals, and procedures for your axles and equipment"
      ],
      note: "Confirm which edition and standard your province uses and your employer's policies."
    }
  ];

  registerTrade({
    id: "transport-trailer-technician",
    store: "transport-trailer-technician",
    title: "Transport Trailer Technician",
    name: "Transport Trailer Technician",
    short: "transport trailer repair",
    category: "Transportation · Trailers · Brakes and Structure",
    summary: "Transport trailer technicians inspect, repair, and maintain commercial trailers, including brakes, suspensions, wheel ends, electrical systems, landing gear, and bodies, keeping them safe, legal, and roadworthy.",
    work: "You work in trailer dealerships, fleet shops, and manufacturers' service centres on dry vans, flatbeds, tanks, and specialty trailers. Work mixes air brakes, wheel-end service, ABS and lighting diagnostics, and structural repair with welding. Rust, road salt, and heavy parts are part of the job.",
    duration: "Usually about 3 to 4 years, varies by province",
    union: "Canadian Trucking Alliance (industry association)",
    unionUrl: "https://www.cantruck.ca/",
    jobSearch: "transport trailer technician apprentice",
    journeySearch: "transport trailer technician",
    aliases: "trailer mechanic trailer repair technician semi trailer technician red seal tractor trailer repair reefer trailer tank trailer technician",
    tools: ["Combination wrenches, metric and SAE", "1/2 in socket set with wheel nut sockets", "Torque wrench", "Digital multimeter and 7-way tester", "Tire gauge and tread depth gauge", "CSA safety boots, glasses, and gloves"],
    insight: {
      skills: ["Mechanical and electrical troubleshooting", "Reading air brake and wiring schematics", "Welding and structural repair", "Careful inspection and documentation"],
      hazards: ["Spring brakes and air systems: never open a spring brake chamber", "Trailers on stands and landing gear: block, chock, and use rated supports", "Welding and tanks: follow hot work and confined space rules", "Grinding, noise, and chemicals: wear PPE and follow WHMIS"],
      settings: ["Trailer dealerships and service centres", "Fleet maintenance garages", "Trailer manufacturers", "Mobile and roadside service"]
    },
    toolGroups,
    mediaGroups,
    practiceBank,
    roadmapSteps,
    glossary,
    cards: [
      { front: "Red glad hand", back: "Supply (emergency) line. Blue is the service (control) line." },
      { front: "Trailer spring brakes apply when", back: "Supply air is lost or exhausted" },
      { front: "Standard kingpin diameter", back: "2 in (50 mm)" },
      { front: "Slide tandem forward", back: "Weight moves onto trailer axles, off the tractor drive axles" },
      { front: "Non-steer tire minimum tread (CVSA)", back: "2/32 in (1.6 mm)" },
      { front: "Landing gear low gear", back: "Used under load: more turns, less effort" },
      { front: "Most common trailer lighting fault", back: "Poor ground or corroded connector" },
      { front: "National Safety Code Standard 10", back: "Cargo securement" },
      { front: "Why never open a spring brake chamber?", back: "The stored spring force can cause severe injury or death." },
      { front: "lb-ft to N-m", back: "1 lb-ft ≈ 1.356 N-m" }
    ],
    jobsIntro: "Look for trailer dealerships and manufacturers, fleet maintenance garages, trucking companies with their own shops, tank and specialty trailer service centres, and mobile repair companies.",
    tips: ["Bring a short resume, your safety tickets, and a valid driver's licence if you have one.", "Show interest in brakes, electrical diagnosis, and welding or fabrication work.", "Visit shops in person when you can, and follow up.", "Ask what tools you need and what the employer supplies."],
    forumTopics: ["Starting out", "Air brakes and ABS", "Suspensions, wheel ends, and structure", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference
  });
})();
