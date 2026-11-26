// Recreation Vehicle Service Technician content. Practice questions are original study aids, not official Red Seal exam questions.

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
      note: "Professional-grade tools that cover RV chassis, body, and appliance work. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first, and what the shop's tool policy is.",
      items: [
        { name: "Combination wrench set, metric and SAE (8 mm to 24 mm, 5/16 in to 1 in)", why: "RV hardware mixes metric and imperial sizes. Quality box ends do not round off fasteners.", search: "GearWrench Snap-on combination wrench set metric SAE" },
        { name: "3/8 in and 1/2 in drive socket sets, 6-point, metric and SAE", why: "General fastener work on chassis, slide-outs, and appliances.", search: "3/8 inch 1/2 inch drive socket set 6 point metric SAE Tekton" },
        { name: "Screwdriver set (Phillips, flat, Robertson square, and Torx)", why: "RV interiors use Robertson square drive screws in Canada. A full set with good tips avoids stripping screws.", search: "Wera Klein screwdriver set Robertson Phillips Torx" },
        { name: "Torque wrench, 1/2 in drive, click type (about 50 to 250 ft-lb)", why: "Wheel nuts, hitch hardware, and suspension fasteners have specified torque. Store it at its lowest setting.", search: "1/2 inch click torque wrench 250 ft lb CDI Tekton" },
        { name: "Pliers set: slip-joint, locking, needle-nose, and side cutters", why: "Wire work, clamps, clips, and light assembly.", search: "Knipex pliers set locking pliers needle nose side cutters" },
        { name: "Wire stripper and crimper with an assortment of insulated terminals", why: "Good crimps matter on 12 V circuits where a poor connection causes voltage drop and heat.", search: "Klein wire stripper crimper ratcheting crimp tool terminal assortment" },
        { name: "Utility knife, caulking gun, and putty knife set", why: "Sealant removal and replacement on roofs, windows, and trim is routine RV work.", search: "utility knife heavy duty caulking gun putty knife set" },
        { name: "CSA-approved safety boots, safety glasses, hearing protection, and gloves", why: "Look for the green CSA triangle on boots. Roofs, sealants, and cutting tools are daily exposures.", search: "CSA safety boots Mechanix gloves safety glasses earmuffs" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up in your shop and what the shop already supplies.",
      items: [
        { name: "Digital multimeter with AC/DC clamp (such as Fluke or Klein)", why: "Voltage, current, and continuity on both 120 V AC and 12 V DC systems. Choose a CAT III-rated meter.", search: "Fluke 117 digital multimeter Klein CL800 clamp meter" },
        { name: "Receptacle and polarity tester with GFCI test button", why: "Checks shore power outlets and RV circuits for correct wiring before you plug in.", search: "receptacle tester GFCI outlet polarity tester 120V" },
        { name: "Manometer or propane pressure test gauge", why: "Gas systems need accurate low-pressure readings. A digital or water-column gauge is standard for appliance pressure checks.", search: "propane manometer digital gas pressure gauge water column RV" },
        { name: "Combustible gas (propane) leak detector", why: "A sensitive electronic detector finds leaks that you can't smell. Use soap solution to pinpoint them.", search: "combustible gas leak detector propane sniffer Bacharach" },
        { name: "Cordless drill and impact driver (18 V platform)", why: "Fast fastening in framing, trim, and slide-out hardware. Pick one battery platform and stay with it.", search: "Milwaukee M18 FUEL drill impact driver combo DeWalt 20V" },
        { name: "Moisture meter (pin type)", why: "Finds hidden water intrusion in walls, floors, and roofs, which is a main RV repair cause.", search: "pin type moisture meter wood building materials Extech" },
        { name: "Grease gun and bearing packer", why: "Trailer axle bearings and slide-out components need lubrication.", search: "Lincoln grease gun 14 oz wheel bearing packer" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying, and learn the safety training that comes with each tool.",
      items: [
        { name: "Hydraulic jacks, jack stands, and wheel chocks rated for RV weights", why: "Used for axle and suspension work. Shops supply these, and rating labels matter.", search: "heavy duty jack stands 12 ton wheel chocks RV" },
        { name: "Tire inflation gauge, tread depth gauge, and torque stick set", why: "Tire service is common. Accurate pressure and correct wheel nut torque are safety checks.", search: "digital tire pressure gauge tread depth gauge" },
        { name: "Brake tester and controller diagnostic tools", why: "Trailer electric brakes and controllers need amperage and magnet testing.", search: "electric trailer brake magnet tester controller diagnostic" },
        { name: "Appliance diagnostic software and test kits (furnace, water heater, refrigerator)", why: "Manufacturer-specific tools and manuals for appliance diagnostics. Usually supplied by the dealer.", search: "RV furnace water heater diagnostic tester thermocouple multimeter" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for electrical, gas, and plumbing study. Check with your school and your exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Ohm's law, power, wire sizing, load and weight calculations, and conversions.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Mechanical pencil (0.5 mm) and spare leads", why: "Clean sketches of wiring diagrams and plumbing runs.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm lead refills" },
        { name: "Coloured pencils or pens", why: "Colour AC, DC, gas, and water lines when you trace schematics.", search: "coloured pencils set pens 12 colours" },
        { name: "Graph paper and a 30 cm steel ruler", why: "Sketching floor plans and plotting weight distribution.", search: "graph paper pad 30 cm steel ruler" },
        { name: "Field notebook (Rite in the Rain)", why: "Weatherproof paper for service notes, readings, and part numbers.", search: "Rite in the Rain field notebook" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by system: electrical, propane, plumbing, chassis, structure.", search: "binder dividers highlighters" },
        { name: "Pocket conversion card (metric and imperial)", why: "Quick psi to kPa, in. w.c. to kPa, and lb to kg checks while studying and in the shop.", search: "pocket conversion chart card metric imperial mechanic reference" }
      ]
    }
  ];

  const mediaGroups = [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work, plus the occupational standard and exam information for your trade.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Canadian Recreational Vehicle Association (CRVA)", desc: "Industry information on RVs, dealers, and the service sector in Canada.", url: "https://www.crva.ca/" },
        { name: "CSA Group", desc: "Publisher of the CSA Z240 RV Series and the propane and electrical codes that apply to RVs.", url: "https://www.csagroup.org/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Workplace safety, WHMIS, and hazard information in plain language.", url: "https://www.ccohs.ca/" },
        { name: "Transport Canada", desc: "Federal vehicle safety standards and recall information.", url: "https://tc.canada.ca/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials, manufacturer service information, and provincial rules.",
      items: [
        { name: "RV 12 volt electrical system basics", desc: "Batteries, converters, fuses, and distribution panels.", url: "https://www.youtube.com/results?search_query=RV+12+volt+electrical+system+basics+converter+battery" },
        { name: "RV 120 volt shore power and polarity", desc: "Shore power, GFCI, and reverse polarity.", url: "https://www.youtube.com/results?search_query=RV+shore+power+120+volt+polarity+GFCI+explained" },
        { name: "RV propane system and regulator", desc: "How propane flows from tank to appliances.", url: "https://www.youtube.com/results?search_query=RV+propane+system+regulator+explained+leak+test" },
        { name: "RV furnace and water heater troubleshooting", desc: "Ignition sequences and common faults.", url: "https://www.youtube.com/results?search_query=RV+furnace+water+heater+troubleshooting+ignition" },
        { name: "RV absorption refrigerator basics", desc: "How the propane and electric refrigerators work.", url: "https://www.youtube.com/results?search_query=RV+absorption+refrigerator+how+it+works+troubleshooting" },
        { name: "RV winterizing", desc: "Draining, bypassing, and adding non-toxic antifreeze.", url: "https://www.youtube.com/results?search_query=RV+winterizing+antifreeze+water+heater+bypass" },
        { name: "RV slide-out and leveling system service", desc: "Hydraulic and electric slide-out basics.", url: "https://www.youtube.com/results?search_query=RV+slide+out+leveling+jacks+hydraulic+electric+repair" },
        { name: "RV roof leak and sealant repair", desc: "Finding leaks and using compatible sealants.", url: "https://www.youtube.com/results?search_query=RV+roof+leak+sealant+repair+EPDM+TPO" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for RV work yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: RV technician apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=RV+technician+apprentice+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do in the shop.",
      items: [
        { name: "YouTube: RV repair shop podcast", desc: "Shop talk on repairs, appliances, and customer issues.", url: "https://www.youtube.com/results?search_query=RV+repair+shop+podcast+technician" },
        { name: "YouTube: RV electrical troubleshooting talk (listen-along)", desc: "Electrical fault finding to hear on the commute.", url: "https://www.youtube.com/results?search_query=RV+electrical+troubleshooting+talk+technician+podcast" },
        { name: "YouTube: RV water intrusion and delamination podcast", desc: "Structural repair and moisture damage stories.", url: "https://www.youtube.com/results?search_query=RV+water+damage+delamination+repair+podcast" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, service management, and shop leadership.",
      items: [
        { name: "YouTube: Red Seal RV service technician exam prep", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+recreation+vehicle+service+technician+exam+preparation" },
        { name: "YouTube: RV service department management podcast", desc: "Scheduling, warranty work, and customer communication.", url: "https://www.youtube.com/results?search_query=RV+service+department+management+podcast+warranty" },
        { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
      ]
    }
  ];

  const practiceBank = {
    1: mk(0, [
      ["Propane vapour is heavier than air, so a leak will:", "Settle in low areas such as floors and compartments", "Rise to the ceiling and collect near the roof vents", "Disappear at once, since propane vapour mixes with air quickly", "Stay in the tank, because the regulator keeps it contained", "Propane vapour is about 1.5 times heavier than air and collects low."],
      ["Which of these is an ignition source you must avoid when you suspect a propane leak?", "Flames, sparks, and switches", "Opening a window to let fresh air flow through the unit", "Closing the tank valve to stop the flow of propane", "Leaving the area and calling for help from a safe distance", "Remove ignition sources, shut the valve, ventilate, and leave if the leak is large."],
      ["Which method is safe for locating a small propane leak at a fitting?", "A leak detection solution or approved electronic detector", "A lit match held near the fitting to watch for flame changes", "A lighter flame passed slowly along each joint in the line", "A candle carried along the line to see where the flame leans", "Never use flame. Bubbles from a soap solution show leaks."],
      ["Propane is given its smell by adding:", "An odorant, ethyl mercaptan", "Chlorine, added at the refinery to give a sharp smell", "Alcohol, added to the tank to prevent the liquid from freezing", "Water vapour, added at the cylinder to carry a scent", "Propane is naturally odourless, so odorant is added to help detect leaks."],
      ["Carbon monoxide (CO) is:", "Colourless and odourless and can be deadly", "Easily smelled, so a leak is obvious long before it is harmful", "A harmless gas that only matters in very large amounts", "Heavier than propane, so it only collects at floor level", "CO alarms are required safety devices. Never ignore an alarm."],
      ["How many sections does a WHMIS Safety Data Sheet (SDS) have?", "16", "8", "12", "20", "WHMIS 2015 follows the GHS format, which uses 16 standard SDS sections."],
      ["When working on an RV roof you should:", "Use fall protection and check the roof can safely hold your weight", "Walk anywhere on the roof, since all roofs are built to hold people", "Work in wet conditions, as long as you wear soft-soled shoes", "Skip the ladder inspection if the ladder was used the day before", "Many RV roofs are not built to carry workers. Check the manufacturer's guidance and protect against falls."],
      ["How many millimetres are in one inch?", "25.4", "2.54", "10", "254", "1 in = 25.4 mm exactly."],
      ["Ohm's law: 12 V across a 4 ohm load gives a current of:", "3 A", "48 A", "0.33 A", "8 A", "I = V / R = 12 / 4 = 3 A."],
      ["The power in watts equals:", "Volts × amps", "Volts ÷ amps", "Amps ÷ volts", "Volts + amps", "P = V × I."],
      ["A 120 V circuit drawing 10 A uses:", "1200 W", "12 W", "130 W", "120 W", "P = 120 × 10 = 1200 W."],
      ["The green triangle on the label of CSA-approved safety boots means:", "The sole has puncture protection", "The boots are waterproof and sealed at the seams", "The boots are insulated and rated for electrical work", "The boots are made for office use and light duty", "The CSA green triangle marks puncture-resistant soles."],
      ["Lockout/tagout is used to:", "Keep energy sources off while servicing equipment", "Label tools so that each technician can find their own", "Order parts for a job and track them on the work order", "Track hours worked on each unit for billing and for payroll", "It prevents accidental start-up or release of stored energy."],
      ["Which extinguisher class is for flammable liquids such as gasoline?", "Class B", "Class A, for ordinary combustibles such as wood and paper", "Class D, for combustible metals such as magnesium", "Class K, for cooking oils and fats in commercial kitchens", "Class B is for flammable liquids. An ABC extinguisher covers common RV fires."],
      ["Before disconnecting a battery, which terminal do you remove first?", "Negative", "Positive, because it carries the current to the loads", "Either one, because the order makes no difference", "Neither: cut the cables with a cutter to avoid a spark", "Removing negative first lowers the risk of a short to the frame."],
      ["1 L of water has a mass of about:", "1 kg", "0.1 kg", "10 kg", "2.2 kg", "Water weight matters for RV tank loads. 100 L of fresh water is about 100 kg."],
      ["Which type of screw head is commonly used in Canadian RV interiors?", "Robertson (square)", "Slotted only, because every interior fastener is slotted", "Allen only, since the interior panels use hex sockets", "Spanner head, which needs a special two-pin driver", "Robertson screws are common in Canada. Have the right bit to avoid stripping."],
      ["Used oil, propane cylinders, and holding tank waste must be:", "Handled and disposed of as regulated by local rules", "Poured on the ground well away from drains and water", "Burned on site in a metal drum to reduce the volume", "Stored in the open yard until a convenient time to dispose", "Follow provincial and municipal rules and company procedures."]
    ]),
    2: mk(1, [
      ["Propane appliance pressure in an RV is normally regulated to about:", "11 inches of water column (about 2.7 kPa)", "11 psi, the same pressure that leaves the regulator", "100 psi, close to the pressure in a full cylinder", "1 psi, about the pressure that a small appliance needs", "11 in. w.c. is the standard appliance pressure, about 2.7 kPa."],
      ["A propane regulator is used to:", "Reduce tank pressure to a steady low appliance pressure", "Increase tank pressure so the appliances run hotter", "Filter dirt and water out of the propane before it burns", "Cool the tank so that liquid propane does not boil off", "Tank pressure varies with temperature, so regulators keep a steady appliance pressure."],
      ["A propane cylinder should be filled to no more than:", "About 80 percent of its capacity", "100 percent of its capacity, so it lasts as long as possible", "50 percent of its capacity, to keep the weight down", "95 percent of its capacity, leaving room for a small bubble", "The space left allows for liquid expansion. OPD valves help prevent overfilling."],
      ["A common cause of excessive voltage drop in an RV 12 V DC circuit is:", "Undersized wires or poor connections", "Too much battery capacity connected to the circuit", "A fully charged battery that holds a high resting voltage", "A clean and tight terminal with a good ground return path", "Poor connections and thin wires add resistance."],
      ["A converter in an RV:", "Changes 120 V AC into 12 V DC to power DC loads and charge batteries", "Changes 12 V DC into 120 V AC to run household loads", "Filters the water supply before it enters the plumbing lines", "Cools the refrigerator by moving heat out through the roof vent", "It runs 12 V loads when on shore power. An inverter does the opposite."],
      ["An inverter in an RV:", "Changes 12 V DC battery power into 120 V AC", "Charges the battery from shore power only, and does nothing else", "Filters campground water before it reaches the water heater", "Reduces propane pressure from the tank to the appliances", "Inverters supply AC loads from the battery bank."],
      ["Reverse polarity on a 120 V circuit means:", "Hot and neutral are swapped", "Ground is missing, so the frame has no safety path", "The voltage is zero, because the two conductors cancel out", "The wire is too thick, which causes it to overheat at the plug", "Reverse polarity can leave appliances energized when switched off."],
      ["A 30 A, 120 V RV shore power connection can supply up to about:", "3600 W", "1200 W, which is the power drawn by a small heater", "30 W, which is the power drawn by a dim light bulb", "360 W, found by dividing 120 V by 30 A and rounding", "P = 120 V × 30 A = 3600 W."],
      ["A 50 A RV shore power service is made up of:", "Two 120 V legs, each rated 50 A (240 V between them)", "A single 120 V line rated at 50 A, with no second leg", "A 12 V DC supply rated at 50 A, used for the battery bank", "A single 240 V leg without a neutral, rated at 50 A", "50 A service has two hot legs with a shared neutral."],
      ["A GFCI device protects against:", "Ground faults, shutting off power when current leaks", "Overheating tires on a trailer axle after a long highway run", "Low propane in the cylinder before the furnace starts", "Low batteries that cannot supply the 12 V loads", "It trips quickly to reduce shock hazard."],
      ["A deep-cycle battery differs from a starting battery because it:", "Is built to be discharged repeatedly and recharged", "Has thinner plates built for quick bursts of high current only", "Cannot be recharged once it is deeply discharged", "Is always rated at 6 V and used only in pairs", "Deep-cycle batteries handle repeated cycling."],
      ["To avoid damaging flooded lead-acid batteries, you should avoid regularly discharging them below about:", "50 percent state of charge", "90 percent state of charge, which keeps the battery nearly full", "100 percent, so that the battery is never used at all", "10 percent state of charge, which is as low as is safe", "Deep discharges shorten life."],
      ["Which antifreeze is used to winterize RV water systems?", "Non-toxic RV (propylene glycol) antifreeze", "Automotive ethylene glycol antifreeze from the parts counter", "Windshield washer fluid, which resists freezing in the lines", "Motor oil, which coats the pipes and keeps water out", "Only potable-safe RV antifreeze should enter the water system."],
      ["When winterizing, the water heater should be:", "Drained and bypassed so antifreeze is not wasted in the tank", "Left full, since the tank is strong enough to resist freezing", "Filled with antifreeze to overflow, so that it is fully protected", "Turned to high, to keep the water warm all winter", "Draining protects against freeze damage, and the bypass saves antifreeze."],
      ["An RV water pressure regulator protects:", "RV plumbing from high campground water pressure", "The propane tank from overpressure during hot weather", "The refrigerator cooling unit from high ambient temperatures", "The batteries from overcharging while on shore power", "Campground pressure can exceed what the RV plumbing handles."],
      ["The ST on a trailer tire sidewall stands for:", "Special trailer", "Standard truck, a tire made for pickup trucks", "Steel tube, a tire built on a steel-belted frame", "Super tough, a rating for heavy road debris", "ST tires are built for trailer use and shouldn't be swapped for passenger tire types without guidance."],
      ["A tire DOT date code of 2623 means the tire was made in:", "Week 26 of 2023", "June 26, 2023, with the day and month printed", "2026, week 23, with the year printed first", "26 June 1923, an old tire from the early days", "The last four digits show week and year."],
      ["After mounting wheels, lug nuts should be re-torqued:", "After a short distance, as the manufacturer recommends", "Never, because torque from the shop is enough for the life of the wheel", "Only if a nut sounds loose when tapped with a wrench", "Once a decade, at the time of a full axle inspection", "Lug nuts can settle, so re-torque after initial travel."]
    ]),
    3: mk(2, [
      ["The tongue weight of a conventional travel trailer is typically:", "About 10 to 15 percent of the loaded trailer weight", "50 percent of the loaded trailer weight, for better stability", "1 percent of the loaded trailer weight, to avoid hitch wear", "30 percent of the loaded trailer weight, to resist sway", "Too little tongue weight can cause sway. Follow the manufacturer's recommendation."],
      ["Pin weight on a fifth wheel trailer is typically:", "About 15 to 25 percent of the loaded trailer weight", "2 percent of the loaded trailer weight, similar to a light hitch", "5 percent of the loaded trailer weight, similar to a ball hitch", "40 percent of the loaded trailer weight, since it rides over the axle", "Pin weight is higher than tongue weight on a conventional trailer."],
      ["Cargo carrying capacity (CCC) is calculated as:", "GVWR minus unloaded vehicle weight", "GVWR plus UVW, which adds the two weights together", "UVW minus GVWR, the unloaded weight minus the rating", "GAWR times 2, doubling the axle rating for safety", "CCC shows how much weight can be added."],
      ["GAWR stands for:", "Gross axle weight rating", "General axle width rating, the width of the axle", "Gas appliance work rating, the capacity of the stove", "Gross air weight ratio, the weight of the air in the tires", "No axle may carry more than its rating."],
      ["On an electric trailer brake system, the controller sends:", "A variable current to the brake magnets", "Air to the brake chambers through a supply hose", "Hydraulic pressure to the wheel cylinders from a master cylinder", "A signal to the horn when the trailer brakes engage", "The brake magnets create braking force on the drums."],
      ["A breakaway switch on a trailer with electric brakes:", "Applies the trailer brakes if the trailer separates from the tow vehicle", "Turns off the trailer lights when the tow vehicle stops", "Raises the leveling jacks so the trailer can be moved", "Charges the house battery from the tow vehicle alternator", "It uses a cable and a small battery to apply the brakes."],
      ["The ball size marked on a hitch must match:", "The coupler size on the trailer", "The tire size on the trailer, as shown on the sidewall", "The propane tank size, as shown on the cylinder collar", "The wire gauge of the brake wiring that runs to the plug", "A mismatch can cause the trailer to separate."],
      ["An absorption refrigerator needs to be:", "Reasonably level for proper operation", "Tilted slightly forward so the coolant flows to the front", "Run upside down during travel to protect the cooling unit", "Run only on shore power, because propane is too hot", "Unlevel operation can damage the cooling unit."],
      ["A furnace that starts, runs briefly, and shuts down often indicates:", "A restricted air or exhaust path, low voltage, or a safety-circuit problem", "A tank that is full, which raises the propane pressure", "A clean filter that allows too much air through the heater", "A new thermostat only, with nothing else involved at all", "Check supply voltage, airflow, and sensors."],
      ["On a water heater's direct spark ignition (DSI) system, ignition is:", "Controlled by a board that sparks and senses flame", "Lit with a match only, through a small opening in the door", "Always manual, using a pilot knob that the user presses", "Done by the thermostat only, with no board or sensor", "The board runs the sequence and verifies flame."],
      ["A gas leak test of the propane system is done:", "With a manometer pressure test and leak solution or detector", "By a flame passed slowly along each fitting and joint", "By smell only, since propane has a strong odorant added", "By sound, listening for a hiss at each of the fittings", "A pressure drop test checks for leaks without exposing flames."],
      ["Water stains on an interior ceiling should be checked with:", "A moisture meter and an inspection of roof seals", "A fresh coat of paint to hide the stain and seal it", "A new light fixture so the stain is not as visible", "Ignoring it, since the stain will dry out on its own", "Water intrusion can cause rot and delamination."],
      ["Sealants used on an EPDM or TPO roof must be:", "Compatible with the roof material", "Any available type, since all sealants will stick to rubber", "Silicone only, since it is the only sealant that is waterproof", "Cooking oil based, since it keeps the membrane soft", "Incompatible sealants can fail or damage the membrane."],
      ["A slide-out room stuck partly open should first be:", "Checked for obstruction, power, and manufacturer manual override instructions", "Forced with a pry bar to free the mechanism quickly", "Hit with a hammer to knock the stuck gears loose", "Ignored until the next scheduled service visit comes up", "Follow the manual override procedure and avoid forcing the mechanism."],
      ["Leveling jacks are intended to:", "Level and stabilize the RV when parked, not lift it for tire changes", "Lift the RV for tire service and wheel bearing repacking", "Replace the tires when the weight is too heavy on the axle", "Increase the tank capacity by tilting the RV forward", "Use rated jack stands for lifting."],
      ["Wire gauge (AWG) numbers:", "Get smaller as the wire gets thicker", "Get larger as the wire gets thicker, so 14 AWG is thicker than 10", "Show wire colour, such as 10 for red and 14 for black", "Show the voltage rating of the wire insulation in volts", "A 10 AWG wire is thicker than 14 AWG."],
      ["A fuse or breaker in a circuit is sized to protect:", "The wire from overheating", "The battery from aging when it is charged and discharged", "The user from the weather when working outside the unit", "The tank from overpressure when it is filled too full", "Protection must match the wire's ampacity."]
    ]),
    4: mk(3, [
      ["In Canada, standards for propane systems and other systems in RVs are covered by:", "The CSA Z240 RV Series", "Only a tire code, which covers wheel and tire sizes", "A paint standard, which covers the finish of the exterior", "Municipal bylaws only, with no national standard in force", "The Z240 series covers many RV systems, and propane storage and handling falls under CSA B149.2."],
      ["Propane storage and handling in Canada is covered by:", "CSA B149.2, the Propane Storage and Handling Code", "CSA Z94.1, the standard for industrial protective headwear", "CSA Z195, the standard for protective footwear", "CSA C22.2 only, the standard for electrical equipment", "B149.2 covers storage, handling, and transfer of propane."],
      ["Electrical hook-ups at RV sites and parks are covered mainly by:", "The Canadian Electrical Code, Part I", "The National Building Code only, since parks are buildings", "A tire standard, which covers load and inflation limits", "A paint standard, which covers exterior finish and coatings", "The CEC has rules for RV parks and hookups."],
      ["A customer reports no 12 V power to any DC appliance with the battery charged. A good first check is:", "Main fuse or breaker, battery disconnect, and connections", "Replace every appliance, since all of them have failed together", "Replace the converter, before checking any fuses or wiring", "Add a bigger battery, since the present one is too small", "Check the simplest common point first."],
      ["Lithium iron phosphate (LiFePO4) batteries need:", "A compatible charger or charging profile and a battery management system", "A lead-acid charger only, since the chemistries charge alike", "No protection, since lithium cells never need monitoring", "Constant boiling, to keep the cells at a steady temperature", "Charging profiles and protection differ from lead-acid."],
      ["MPPT solar charge controllers compared with PWM:", "Convert excess panel voltage into extra charging current, giving higher efficiency in many cases", "Are always cheaper and simpler than a PWM controller", "Cannot charge batteries unless the panels face the sun at noon", "Do not regulate the charge, and simply pass panel power through", "MPPT tracks the maximum power point of the array."],
      ["When a customer's RV exceeds its GVWR when loaded, you should advise:", "Reducing load or addressing capacity before travelling", "Adding more load, since the rating is only a suggestion", "Ignoring the rating, because the tires are in good shape", "Changing the sticker, to match the weight that was added", "Overloading risks tire and axle failure."],
      ["Warranty work on an RV is generally based on:", "Accurate documentation of the complaint, cause, and correction", "Verbal reports only, with no written record of the work done", "The technician's guess about the cause of the failure", "Brand colour and model year printed on the owner's manual", "Manufacturers and warranty companies need clear records."],
      ["A lock-up test of a propane regulator checks that:", "Pressure does not rise abnormally when flow stops", "Pressure falls to zero when the flow stops, which shows it works", "The tank is full, since lock-up is measured at the cylinder", "The vent is open, so that the regulator can release gas", "Lock-up shows the regulator closes properly."],
      ["A refrigerator running on propane but not cooling should first be checked for:", "Level condition, ventilation, burner flame, and ambient conditions", "Replacing the cooling unit at once, before any other checks", "Adding refrigerant to the system, as with a home fridge", "Painting the vent cover, which reflects the outside heat", "Many problems are simple: poor ventilation or unlevel position."],
      ["A hidden risk when repairing an RV roof or wall is:", "Structural delamination or rot beyond the visible damage", "Excess paint on the exterior from earlier owner repairs", "Wrong tires, which can affect the load rating of the unit", "Weather stripping, which is thick and hard to remove", "Moisture damage often extends beyond the stain."],
      ["Before returning a repaired gas appliance to service, you should:", "Test for leaks and verify operation and safety devices", "Hand it to the customer with the paperwork and the keys", "Skip the test if the repair was small and the same as before", "Close the tank valve and tell the customer to open it later", "Safety verification is a required step."],
      ["Reading wiring diagrams is useful for:", "Tracing circuits and locating faults", "Choosing paint colours for the exterior and the interior", "Filling the tanks to the correct level before delivery", "Setting the hitch ball size to match the trailer coupler", "Diagrams show how circuits connect."],
      ["When a customer cannot describe an intermittent issue, the best approach is to:", "Ask questions, check conditions, and if needed reproduce and monitor the issue", "Replace parts at random until the issue seems to go away", "Close the work order and tell the customer to call back", "Tell them it is normal and that all RVs act that way", "Good diagnosis needs information and testing."],
      ["Preventive maintenance for an RV includes:", "Seal inspection, bearing service, appliance checks, and tire inspection", "Only washing the exterior to keep the finish in good shape", "Only waxing the sides and the roof once each season", "Only fuel top-ups and a check of the oil on the tow vehicle", "Regular inspection prevents costly water damage and failures."],
      ["A root cause analysis aims to:", "Find the underlying failure so it does not recur", "Assign blame to the person who did the last repair", "Order more parts so a repeat failure can be fixed quickly", "Reduce paperwork by combining the repair notes into one line", "Fixing only the symptom leads to repeat failures."],
      ["Which statement about modifying a gas system on an RV is correct?", "Modifications must follow the applicable code and be done by qualified, authorized persons", "Anyone may modify gas lines if they have basic tools", "Codes do not apply to RVs, since they are vehicles", "Use any pipe that fits, as long as the joints are tight", "Gas work is regulated in Canada, and provincial authorization requirements vary."],
      ["A pre-delivery inspection (PDI) on a new RV is used to:", "Verify all systems work and the unit is complete before handing it over", "Paint the unit and touch up the exterior before handover", "Set the price of the unit before it goes on the lot", "Order parts for the first service visit after the sale", "A PDI finds shipping damage and setup issues."]
    ])
  };

  const roadmapSteps = [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get safety training employers ask for (commonly WHMIS and site orientation; requirements vary)", "Prepare a resume and apply to RV dealerships, manufacturers, and service centres", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: shop safety and basics", items: ["Learn shop safety, propane safety, lockout, and fluids handling", "Do pre-delivery inspections and preventive maintenance: sealants, lubrication, tires", "Learn measuring tools, torque, and fasteners", "Study electrical basics on 12 V DC and 120 V AC", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: electrical, plumbing, and propane", items: ["Diagnose 12 V and 120 V circuits, batteries, and converters", "Service water systems, pumps, and holding tanks", "Learn propane systems and appliance basics under qualified supervision", "Learn to read wiring and plumbing diagrams"] },
    { title: "Year 3: appliances, chassis, and structure", items: ["Service furnaces, water heaters, and refrigerators", "Work on brakes, axles, suspensions, and hitches", "Repair roofs, walls, windows, and slide-outs", "Use moisture meters and inspect for water intrusion"] },
    { title: "Year 4 and beyond: advanced diagnostics and planning", items: ["Handle complex electrical and appliance troubleshooting, including solar and lithium systems", "Manage warranty documentation and customer communication", "Plan repairs and estimate work", "Mentor first-year apprentices and use the Red Seal standard to find gaps"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal exam information and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ];

  const glossary = [
    ["Absorption refrigerator", "A refrigerator that uses a heat source, such as propane or a 120 V element, instead of a compressor."],
    ["AGM battery", "Absorbed glass mat battery, a sealed lead-acid type."],
    ["AWG", "American wire gauge, a wire size system where larger numbers mean thinner wire."],
    ["Black water", "Wastewater from toilets, stored in a holding tank."],
    ["Breakaway switch", "A switch that applies trailer brakes if the trailer separates from the tow vehicle."],
    ["CCC", "Cargo carrying capacity, GVWR minus unloaded vehicle weight."],
    ["Converter", "A device that changes 120 V AC to 12 V DC and charges batteries."],
    ["CSA Z240", "The CSA RV Series of standards covering RV systems in Canada."],
    ["DSI", "Direct spark ignition, used in many water heaters."],
    ["Fifth wheel", "A trailer that couples to a hitch in the bed of a truck."],
    ["GAWR", "Gross axle weight rating, the maximum load an axle can carry."],
    ["GFCI", "Ground fault circuit interrupter, which cuts power when it detects current leakage."],
    ["Gray water", "Wastewater from sinks and showers, stored in a holding tank."],
    ["GVWR", "Gross vehicle weight rating, the maximum loaded weight set by the manufacturer."],
    ["Inverter", "A device that changes 12 V DC battery power into 120 V AC."],
    ["Lockout/tagout", "A procedure that keeps energy sources off while equipment is serviced."],
    ["Manometer", "A gauge that measures low gas pressure, often in inches of water column."],
    ["MPPT", "Maximum power point tracking, a type of solar charge controller."],
    ["OPD", "Overfill prevention device on a propane cylinder."],
    ["Pin weight", "The load a fifth wheel puts on the truck's hitch."],
    ["Polarity", "The correct connection of hot and neutral conductors in AC wiring."],
    ["Propane regulator", "A device that reduces tank pressure to appliance pressure."],
    ["SDS", "Safety Data Sheet, the 16-section document describing a product's hazards and handling."],
    ["Shore power", "External 120 V AC power supplied from a campground pedestal or home."],
    ["Slide-out", "A room that extends from the RV body to increase living space."],
    ["Tongue weight", "The downward load a trailer puts on the tow ball."],
    ["UVW", "Unloaded vehicle weight, the weight of the RV as built without cargo or fluids."],
    ["Voltage drop", "Loss of voltage along a wire or connection caused by resistance."],
    ["Water column (in. w.c.)", "A unit for low gas pressure. About 11 in. w.c. is typical RV appliance pressure."],
    ["WHMIS", "Workplace Hazardous Materials Information System, Canada's hazard communication standard."],
    ["Winterizing", "Preparing an RV for freezing weather by draining and protecting the water system."]
  ];

  const reference = [
    {
      title: "Conversions",
      list: [
        "1 in = 25.4 mm, and 1 ft = 304.8 mm",
        "1 psi ≈ 6.895 kPa, and 1 in. w.c. ≈ 0.249 kPa (11 in. w.c. ≈ 2.7 kPa)",
        "1 lb-ft ≈ 1.356 N-m, and 1 N-m ≈ 0.738 lb-ft",
        "1 kg ≈ 2.205 lb, and 1 L of water ≈ 1 kg",
        "1 US gallon ≈ 3.785 L, and 1 Imperial gallon ≈ 4.546 L",
        "Propane boils at about -42 °C, so it stays a vapour in normal cold weather"
      ]
    },
    {
      title: "Electrical formulas",
      list: [
        "Ohm's law: V = I × R, so I = V ÷ R and R = V ÷ I",
        "Power: P = V × I (watts = volts × amps)",
        "15 A at 120 V = 1800 W. 30 A at 120 V = 3600 W. 50 A service has two 120 V legs and can supply up to about 12 000 W",
        "A 120 W load on a 12 V system draws 120 ÷ 12 = 10 A",
        "Series circuit: resistances add, and current is the same everywhere",
        "Parallel circuit: voltage is the same across every branch, and branch currents add"
      ],
      note: "Two 12 V batteries in series give 24 V. In parallel they give 12 V with more capacity. Two 6 V batteries in series give 12 V."
    },
    {
      title: "Weight terms",
      table: {
        head: ["Term", "Meaning"],
        rows: [
          ["GVWR", "Maximum loaded weight of the RV set by the manufacturer"],
          ["UVW", "Unloaded vehicle weight, as built without cargo or fluids"],
          ["CCC", "Cargo carrying capacity = GVWR minus UVW"],
          ["GAWR", "Maximum load for one axle"],
          ["Tongue weight (travel trailer)", "Typically about 10 to 15 percent of loaded trailer weight"],
          ["Pin weight (fifth wheel)", "Typically about 15 to 25 percent of loaded trailer weight"]
        ]
      },
      note: "Always use the manufacturer's ratings and recommendations on the unit's labels."
    },
    {
      title: "Propane safety and facts",
      list: [
        "Propane vapour is heavier than air and collects in low areas",
        "Odorant (ethyl mercaptan) is added to help detect leaks",
        "Fill cylinders to no more than about 80 percent. OPD valves help prevent overfilling",
        "Typical RV appliance pressure is 11 in. w.c. (about 2.7 kPa) from the regulator",
        "Leak testing uses a manometer pressure drop test and leak solution or detector. Never use a flame",
        "Gas work follows CSA B149.2 and the CSA Z240 RV Series, and provincial authorization rules vary"
      ],
      note: "Confirm propane qualification requirements with your provincial authority."
    },
    {
      title: "Winterizing steps (overview)",
      list: [
        "Drain the fresh, gray, and black water tanks and the lines",
        "Drain the water heater and bypass it, per the manufacturer",
        "Use non-toxic RV (propylene glycol) antifreeze only. Never automotive antifreeze",
        "Run each faucet, shower, and toilet until antifreeze appears",
        "Treat traps and drains and protect the pump",
        "De-winterize by flushing and sanitizing the system, then check for leaks"
      ]
    },
    {
      title: "Standards and where to look",
      list: [
        "<strong>CSA Z240 RV Series:</strong> standards for RV systems and construction in Canada",
        "<strong>CSA B149.2:</strong> Propane Storage and Handling Code",
        "<strong>Canadian Electrical Code, Part I (CSA C22.1):</strong> rules for RV parks and hookups",
        "<strong>CMVSS:</strong> Canada Motor Vehicle Safety Standards for vehicles and some trailers",
        "<strong>WHMIS and provincial occupational health and safety rules:</strong> chemical hazards, lockout, and fall protection",
        "<strong>Manufacturer service information:</strong> appliance manuals, torque specs, and procedures"
      ],
      note: "Confirm which edition and standard your province uses and your employer's policies."
    }
  ];

  registerTrade({
    id: "rv-service-technician",
    store: "rv-service-technician",
    title: "Recreation Vehicle Service Technician",
    name: "Recreation Vehicle Service Technician",
    short: "recreation vehicle service",
    category: "Recreation Vehicles · Gas · Electrical · Plumbing",
    summary: "Recreation vehicle service technicians inspect, diagnose, and repair motorhomes, travel trailers, and fifth wheels, including their electrical, propane, plumbing, appliance, chassis, and body systems.",
    work: "You work in RV dealerships and service centres, with busy seasons in spring and fall. Days mix electrical and propane diagnosis, plumbing, appliance repair, leak and structure work, and chassis service. Customers depend on a safe, comfortable home on wheels.",
    duration: "Usually about 3 to 4 years, varies by province",
    union: "Canadian Recreational Vehicle Association",
    unionUrl: "https://www.crva.ca/",
    jobSearch: "RV service technician apprentice",
    journeySearch: "RV service technician",
    aliases: "rv technician rv mechanic recreational vehicle technician camper repair travel trailer technician motorhome technician red seal",
    tools: ["Combination wrenches, metric and SAE", "Screwdrivers including Robertson square", "Digital multimeter and receptacle tester", "Propane leak detector and manometer", "Wire stripper and crimper", "CSA safety boots, glasses, and gloves"],
    insight: {
      skills: ["Electrical, plumbing, and gas troubleshooting", "Reading wiring and appliance diagrams", "Careful inspection and documentation", "Clear customer communication"],
      hazards: ["Propane leaks and fire: no ignition sources, test with solution or a detector", "Electric shock on 120 V systems: isolate, test, and use GFCI protection", "Roof falls and ladders: use fall protection and check the surface", "Carbon monoxide: verify appliance venting and working alarms"],
      settings: ["RV dealerships and service centres", "RV manufacturers", "Mobile RV service", "Campgrounds and rental fleets"]
    },
    toolGroups,
    mediaGroups,
    practiceBank,
    roadmapSteps,
    glossary,
    cards: [
      { front: "Typical RV propane appliance pressure", back: "11 in. w.c. (about 2.7 kPa)" },
      { front: "Max propane cylinder fill", back: "About 80 percent of capacity" },
      { front: "30 A at 120 V gives", back: "3600 W (P = V × I)" },
      { front: "Tongue weight, travel trailer", back: "About 10 to 15 percent of loaded trailer weight" },
      { front: "Cargo carrying capacity (CCC)", back: "GVWR minus unloaded vehicle weight" },
      { front: "Safe antifreeze for water systems", back: "Non-toxic RV (propylene glycol) antifreeze" },
      { front: "Converter vs inverter", back: "Converter: 120 V AC to 12 V DC. Inverter: 12 V DC to 120 V AC." },
      { front: "Tire DOT date code 2623", back: "Week 26 of 2023" },
      { front: "Safe method to find a propane leak", back: "Leak solution or an approved detector. Never a flame." },
      { front: "Propane gas code in Canada", back: "CSA B149.2" }
    ],
    jobsIntro: "Look for RV dealerships and service centres, RV manufacturers, mobile RV service businesses, campground and rental fleets, and marine and powersports dealers that also service RVs.",
    tips: ["Bring a short resume, your safety tickets, and a valid driver's licence.", "Show interest in electrical, plumbing, and gas systems and in customer service.", "Visit dealerships in person when you can, and follow up before the busy season.", "Ask what tools you need and what the employer supplies."],
    forumTopics: ["Starting out", "Electrical, propane, and plumbing", "Appliances, chassis, and structure", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference
  });
})();
