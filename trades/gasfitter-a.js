// Gasfitter Class A: tools, learning media, practice tests, roadmap, and reference.
// Practice questions are original study aids, not official Red Seal exam questions.

// Each entry: [question, correct answer, [three wrong answers], explanation]. Correct positions are shuffled with a fixed seed.
function buildBank(seed, raw) {
  let s = seed;
  const rnd = () => (s = (s * 1664525 + 1013904223) % 4294967296) / 4294967296;
  const out = {};
  for (const y of [1, 2, 3, 4]) {
    let pool = [];
    out[y] = raw[y].map(([q, right, wrong, explain]) => {
      if (!pool.length) {
        pool = [0, 1, 2, 3];
        for (let i = 3; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
      }
      const answer = pool.pop();
      const options = [...wrong];
      options.splice(answer, 0, right);
      return { q, options, answer, explain };
    });
  }
  return out;
}

registerTrade({
  id: "gasfitter-a",
  store: "gasfitter-a",
  title: "Gasfitter - Class A",
  name: "Gasfitter (Class A)",
  short: "Class A gasfitting",
  category: "Gas · Heating · Construction",
  summary: "Install, commission, service, and repair natural gas and propane piping, appliances, venting, and burner systems of any size, including commercial and industrial equipment.",
  work: "Class A gasfitters work on the full range of gas systems: house piping, meters and regulators, furnaces, boilers, rooftop units, commercial kitchens, and industrial burners. You read drawings, size and install piping, pressure test, purge, light and tune equipment, and troubleshoot controls. Safety and code compliance, especially CSA B149.1, drive every task.",
  duration: "Usually about 3 years (varies by province)",
  union: "UA Canada (union) and provincial gas contractor associations",
  unionUrl: "https://www.uacanada.ca/",
  jobSearch: "gasfitter apprentice",
  journeySearch: "gasfitter class A",
  aliases: "gas fitter natural gas propane b149 class a unrestricted gas technician boiler furnace burner",
  tools: [
    "Digital manometer and pressure gauges",
    "Combustible gas leak detector",
    "Pipe wrenches and pipe threader",
    "Combustion analyzer (CO, O2, flue temperature)",
    "Multimeter with microamp (DC) range",
    "CSA B149.1 code book"
  ],
  insight: {
    skills: ["Strong respect for code and safe work procedures", "Math for gas input, pipe sizing, and pressure", "Electrical and controls troubleshooting", "Methodical testing and documentation"],
    hazards: ["Gas leaks and explosion: no ignition sources, ventilate, leak test", "Carbon monoxide: test combustion and venting, wear a personal monitor", "Confined spaces and mechanical rooms: follow permits and atmosphere testing", "Hot work and live controls: lockout/tagout and verified isolation"],
    settings: ["Gas contractors serving homes and small buildings", "Mechanical contractors on commercial and industrial projects", "Utility and propane distribution companies", "Institutional and industrial maintenance departments"]
  },
  toolGroups: [
    {
      title: "Day-one tools, buy once and buy well",
      note: "Professional-grade tools that hold up on gas work. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first, especially test instruments.",
      items: [
        { name: "RIDGID 14 in and 18 in pipe wrenches", why: "Hardened jaws for threaded black steel pipe. Use two wrenches so you do not twist fittings you are not tightening.", search: "RIDGID 14 inch 18 inch pipe wrench" },
        { name: "Crescent or Knipex adjustable wrenches (8 in and 12 in)", why: "For unions, appliance connectors, and valves where pipe wrench teeth would mark the fitting.", search: "Knipex Crescent adjustable wrench 8 inch 12 inch" },
        { name: "Milwaukee or Stanley FatMax tape measure (25 ft)", why: "Stiff, readable blade for piping takeoffs and clearance checks.", search: "Milwaukee Stanley FatMax tape measure 25 ft" },
        { name: "Klein or Wera screwdriver and nut driver set", why: "Control, gas valve, and cabinet screws. Insulated drivers are handy near live terminals.", search: "Klein screwdriver nut driver set insulated" },
        { name: "Combustible gas leak detector (electronic sniffer)", why: "Pinpoints low-level natural gas and propane leaks. Bump test it before each use and know its sensitivity.", search: "combustible gas leak detector natural gas propane sniffer" },
        { name: "Leak detection solution", why: "Bubble solution made for gas fittings confirms a leak at a joint. Household soap can corrode some fittings.", search: "gas leak detector solution bubble spray" },
        { name: "Gas-rated PTFE tape and pipe thread compound", why: "Seals tapered threads. Use a product marked for gas service and the pipe material.", search: "yellow PTFE gas thread tape pipe thread sealant natural gas" },
        { name: "Cut-resistant gloves, safety glasses, and CSA-approved safety boots", why: "Threaded pipe, burrs, and hot flue parts. Comfortable, rated PPE is what you will wear.", search: "Mechanix cut resistant gloves CSA safety boots safety glasses" },
        { name: "Headlamp and flashlight", why: "Dark mechanical rooms, attics, and crawl spaces. Use a rated or sealed light around a suspected leak.", search: "LED headlamp rechargeable work light" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
      items: [
        { name: "Digital manometer (kPa and in w.c.)", why: "Reads supply and manifold pressure and does low-pressure leak tests. Zero it before use.", search: "digital manometer in w.c. kPa gas pressure testo fieldpiece" },
        { name: "Multimeter with DC microamp and millivolt ranges", why: "Checks thermocouples, thermopiles, flame sensing current, and control voltages.", search: "Fluke Fieldpiece multimeter microamp true RMS HVAC" },
        { name: "RIDGID ratchet pipe threader and dies", why: "Cuts clean NPT threads on small steel pipe in tight spaces. Keep dies sharp and oiled.", search: "RIDGID ratchet pipe threader NPT dies" },
        { name: "Pipe cutter and reamer", why: "Square cuts and a deburred bore keep debris out of regulators and orifices.", search: "RIDGID pipe cutter reamer 1/2 inch to 2 inch" },
        { name: "Torch kit and tubing cutter", why: "For brazed copper or tubing connections where the code and the job allow them.", search: "Turbotorch brazing torch kit tubing cutter" },
        { name: "Personal carbon monoxide monitor", why: "A wearable alarm warns you of CO while you test combustion appliances.", search: "personal carbon monoxide monitor wearable" },
        { name: "Orifice drill set and tap and die basics", why: "Checking orifice sizes and cleaning ports. Only use sizes matching the appliance data plate and manufacturer instructions.", search: "pin vise number drill bit set orifice" },
        { name: "Heavy-duty tool bag or bucket organizer", why: "Keeps instruments and tools protected and easy to carry.", search: "Veto Pro Pac tool bag bucket organizer" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying.",
      items: [
        { name: "Combustion analyzer (Testo, Bacharach, or similar)", why: "Measures O2, CO, and flue temperature to tune burners and verify safe venting. Needs regular calibration.", search: "combustion analyzer Testo 310 Bacharach gas furnace" },
        { name: "Pressure test kit with calibrated gauges", why: "Pipe pressure testing is a required inspection step. Gauge range and accuracy must suit the test pressure.", search: "gas piping pressure test kit gauge 0-15 psi" },
        { name: "Polyethylene gas pipe fusion tools", why: "Used on buried gas distribution and service lines. Fusion qualification is required and tools are usually company-supplied.", search: "polyethylene pipe butt fusion tool gas" },
        { name: "Full-body harness and lanyard", why: "For rooftop units and elevated work. Fall protection training comes first.", search: "3M DBI-SALA full body harness CSA" },
        { name: "Draft gauge", why: "Measures small vent and chimney draft pressures to check natural draft venting.", search: "digital draft gauge flue pressure" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for drawings, math, and code study. Check with your school and your exam body about calculator rules before you buy.",
      items: [
        { name: "CSA B149.1 Natural Gas and Propane Installation Code", why: "You will use it all through school and on the exam. Check which edition your province has adopted and whether your school provides a copy.", search: "CSA B149.1 natural gas and propane installation code" },
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Input rates, flow, pressure conversions, and pipe sizing math.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Mechanical pencil (0.5 mm), such as Pentel GraphGear 1000", why: "Clean notes and piping sketches that survive a tool bag.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm" },
        { name: "Isometric graph paper pad", why: "Sketching gas piping runs and fitting lists in 3D.", search: "isometric graph paper pad" },
        { name: "Field notebook (Rite in the Rain)", why: "Record pressures, readings, and appliance data in the field. Weatherproof paper survives job sites.", search: "Rite in the Rain field notebook" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic. Colour-code code references.", search: "binder dividers highlighters" },
        { name: "Code book index tabs", why: "Quickly find the tables and clauses you use most, as your school and exam rules allow.", search: "adhesive index tabs book tabs" },
        { name: "Steel ruler, triangles, and protractor", why: "Layout, offsets, and clean drawings.", search: "Staedtler drafting triangle set protractor steel ruler" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal Program", desc: "Red Seal information, exam preparation, and where to confirm whether your gas class has a Red Seal endorsement.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Codes Canada", desc: "National model codes. Gas installation itself is governed by CSA B149 and provincial adoption.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
        { name: "CSA Group", desc: "Publisher of the B149 gas installation codes and appliance standards.", url: "https://www.csagroup.org/" },
        { name: "Technical Safety BC", desc: "British Columbia's safety authority for gas work, licensing, and permits.", url: "https://www.technicalsafetybc.ca/" },
        { name: "TSSA (Ontario)", desc: "Ontario's technical safety authority for fuels and gas technician certification.", url: "https://www.tssa.org/" },
        { name: "UA Canada", desc: "Union pipe trades training and apprenticeship information.", url: "https://www.uacanada.ca/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local codes.",
      items: [
        { name: "Natural gas piping basics", desc: "How gas piping is laid out from meter to appliance.", url: "https://www.youtube.com/results?search_query=natural+gas+piping+installation+basics" },
        { name: "Gas pressure testing", desc: "Pressure testing gas piping and reading gauges safely.", url: "https://www.youtube.com/results?search_query=gas+piping+pressure+test+manometer" },
        { name: "Gas furnace operation", desc: "Sequence of operation for a modern gas furnace.", url: "https://www.youtube.com/results?search_query=gas+furnace+sequence+of+operation" },
        { name: "Combustion analysis", desc: "Using a combustion analyzer to read O2, CO, and flue temperature.", url: "https://www.youtube.com/results?search_query=combustion+analyzer+gas+furnace+O2+CO" },
        { name: "Gas valve and regulator", desc: "How regulators and gas valves control pressure.", url: "https://www.youtube.com/results?search_query=gas+regulator+how+it+works+pressure" },
        { name: "Boiler burner commissioning", desc: "Setting up gas-fired boilers and checking safeties.", url: "https://www.youtube.com/results?search_query=gas+boiler+commissioning+burner+setup" },
        { name: "Venting categories", desc: "Category I to IV appliance venting explained.", url: "https://www.youtube.com/results?search_query=gas+appliance+venting+category+I+II+III+IV" },
        { name: "Propane regulators and storage", desc: "Two-stage regulation and propane container basics.", url: "https://www.youtube.com/results?search_query=propane+two+stage+regulator+tank+basics" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for gasfitting yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: gas fitter apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=gas+fitter+apprentice+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: HVAC and gas heating podcast (listen-along)", desc: "Service stories and furnace troubleshooting talk for the commute.", url: "https://www.youtube.com/results?search_query=HVAC+gas+heating+service+podcast" },
        { name: "YouTube: combustion and venting explained (audio)", desc: "Talks on combustion air, venting, and flue gas analysis.", url: "https://www.youtube.com/results?search_query=combustion+air+venting+explained+podcast" },
        { name: "YouTube: gas code B149 discussion", desc: "Talks on how gas code clauses are applied on the job.", url: "https://www.youtube.com/results?search_query=B149.1+gas+code+explained" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, business, and leadership.",
      items: [
        { name: "YouTube: gasfitter exam preparation talk-through", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=gasfitter+exam+preparation+class+A" },
        { name: "YouTube: commercial boiler and burner troubleshooting podcast", desc: "Advanced diagnostic thinking for commercial and industrial equipment.", url: "https://www.youtube.com/results?search_query=commercial+boiler+burner+troubleshooting+podcast" },
        { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
      ]
    }
  ],
  practiceBank: buildBank(4101, {
    1: [
      ["Compared with air, natural gas is:", "Lighter, so it tends to rise", ["Heavier, so it settles in low areas", "About the same weight as water", "Denser than propane"], "Natural gas has a relative density of about 0.6 and rises, while propane vapour is heavier than air."],
      ["Why is propane vapour a particular concern in basements and pits?", "It is heavier than air and can collect in low areas", ["It is lighter than air and floats away", "It is non-flammable at low levels", "It reacts with concrete"], "Propane vapour has a relative density of about 1.5, so it pools in low spots."],
      ["Why is odorant added to natural gas?", "So a leak can be detected by smell", ["To make it burn hotter", "To keep pipes from rusting", "To increase pressure"], "Natural gas is naturally odourless, so a mercaptan-type odorant is added for safety."],
      ["Which three things are needed for a fire?", "Fuel, oxygen, and an ignition source", ["Gas, water, and pressure", "Wood, air, and a vent", "Fuel, nitrogen, and a spark only"], "Remove any one of fuel, oxygen, or heat and combustion stops."],
      ["Which combustion by-product is colourless, odourless, and toxic?", "Carbon monoxide", ["Water vapour", "Nitrogen", "Carbon dioxide at normal levels"], "CO forms during incomplete combustion and cannot be detected by smell."],
      ["How should you look for a leak at a threaded gas joint?", "Apply leak detection solution or use an electronic detector", ["Hold a lit match near the joint", "Listen with your ear only", "Spray it with water and wait"], "Never use a flame. Approved solution shows bubbles at a leak."],
      ["Which CSA standard is the main installation code for natural gas and propane equipment in Canada?", "CSA B149.1", ["CSA B139", "CSA B52", "CSA C22.1"], "B149.1 is the Natural Gas and Propane Installation Code. B139 is for oil, B52 for refrigeration, C22.1 for electrical."],
      ["7 in w.c. is about how many kilopascals?", "1.7 kPa", ["0.7 kPa", "7 kPa", "17 kPa"], "1 in w.c. is about 0.249 kPa, so 7 in w.c. is about 1.74 kPa."],
      ["Which instrument is normally used to measure low gas pressures in inches of water column?", "A manometer", ["A multimeter", "A draft hood", "A tape measure"], "Manometers read small pressures, in w.c. or kPa."],
      ["Natural gas burns only when mixed with air in roughly what range?", "About 5% to 15% gas in air", ["About 0.5% to 1%", "About 30% to 50%", "Any mixture at all"], "Below the lower limit it is too lean and above the upper limit it is too rich to ignite."],
      ["You smell a strong gas odour on arriving at a job. What should you do first?", "Avoid ignition sources, ventilate, evacuate, and call from a safe place", ["Turn on lights to see the leak", "Use your phone indoors to report it", "Light a pilot to test"], "Switches and phones can spark. Leave, then call the utility or emergency number from outside."],
      ["Which pipe is commonly used for above-ground gas piping in buildings?", "Black steel pipe, Schedule 40", ["PEX water tubing", "ABS drain pipe", "PVC water pipe"], "Steel pipe with threaded joints is common. Plastic water and drain pipe is not for gas."],
      ["After cutting threaded steel pipe, you should ream it to:", "Remove the burr so debris and restriction do not affect flow", ["Make the pipe shiny", "Add length", "Thin the wall"], "Burrs can break loose and clog orifices and regulators."],
      ["Which document describes a product's hazards, handling, and first aid?", "Safety Data Sheet (SDS)", ["Drawing title block", "Permit card", "Thread chart"], "WHMIS requires SDSs for hazardous products such as thread compounds and cleaners."],
      ["Lockout/tagout is used to:", "Keep energy sources off while servicing equipment", ["Mark tools", "Order parts", "Label gas meters"], "It prevents unexpected start-up or release of energy."]
    ],
    2: [
      ["The main job of a gas pressure regulator is to:", "Reduce supply pressure and hold it steady downstream", ["Measure gas flow", "Add odorant", "Filter combustion air"], "Regulators keep downstream pressure constant despite supply changes."],
      ["A typical appliance inlet pressure for natural gas is about:", "7 in w.c. (about 1.7 kPa)", ["27 in w.c.", "2 psi", "14 in Hg"], "Many natural gas appliances are supplied at about 7 in w.c. Always check the data plate."],
      ["Propane appliances are typically supplied at about:", "11 in w.c. (about 2.7 kPa)", ["3.5 in w.c.", "7 in w.c.", "27 in w.c."], "Propane is typically 11 in w.c. at the appliance. Confirm on the data plate."],
      ["The orifice in a gas burner:", "Meters the amount of gas that enters the burner", ["Vents the flue", "Measures draft", "Cools the flame"], "Orifice size, gas pressure, and gas type set the input."],
      ["Primary air in an atmospheric burner is:", "Mixed with the gas before it reaches the burner ports", ["Air that surrounds the flame only", "Air from the vent", "Air that cools the heat exchanger"], "Secondary air supports combustion at the flame."],
      ["A thermocouple:", "Produces a small millivolt signal when heated by a pilot flame", ["Measures gas pressure", "Controls draft", "Heats the burner"], "The signal holds a safety valve open while the pilot is lit."],
      ["A yellow, lazy, sooty flame on an atmospheric burner usually indicates:", "Incomplete combustion", ["Perfect combustion", "Too much primary air", "Low voltage"], "A stable, mostly blue flame is expected. Yellow tipping or soot means a problem."],
      ["A Category I appliance vents with:", "Negative vent pressure and non-condensing flue gases", ["Positive pressure and condensing flue gases", "Positive pressure and non-condensing flue gases", "No vent"], "Category I is natural draft style venting. Categories III and IV use positive pressure."],
      ["A draft hood or diverter is used to:", "Break the effect of downdraft and stabilize draft at the appliance", ["Add combustion air to the room", "Measure flue gas", "Reduce gas pressure"], "It lets room air enter and relieves downdraft so the burner flame is not disturbed."],
      ["Approximate conversion: 1 kW equals how many Btu/h?", "About 3412 Btu/h", ["About 341 Btu/h", "About 12 000 Btu/h", "About 100 000 Btu/h"], "1 kW is about 3412 Btu/h."],
      ["The heating value of natural gas is about:", "37 to 38 MJ/m³", ["3.7 MJ/m³", "370 MJ/m³", "93 MJ/m³"], "It is about 1000 Btu per cubic foot. Propane vapour is much higher, near 93 MJ/m³."],
      ["A sediment trap (drip leg) on an appliance gas line is for:", "Catching dirt and moisture before the appliance valve", ["Venting the line", "Measuring pressure", "Adding odorant"], "It stops debris from reaching the control."],
      ["Why must gas pipe be supported at intervals?", "To prevent sag and stress on joints and appliance connections", ["To increase pressure", "To reduce heating value", "To vent the pipe"], "Support spacing is set by the code and pipe size."],
      ["Insufficient combustion air to an appliance can cause:", "Incomplete combustion and carbon monoxide", ["Higher efficiency", "Lower gas pressure", "Quieter operation"], "Combustion needs adequate oxygen and also dilution air in some installations."],
      ["The appliance shut-off valve should be:", "Accessible and located at or near the appliance as required by code", ["Hidden behind the appliance", "Removed after commissioning", "Replaced by a union"], "A shut-off must allow service without shutting down the whole system."]
    ],
    3: [
      ["A cracked heat exchanger on a furnace is dangerous because it can:", "Let flue gases, including CO, enter the heated air", ["Raise the water temperature", "Reduce gas flow", "Over-pressurize the meter"], "Flue products must be kept separate from circulating air."],
      ["A higher oxygen (O2) reading in flue gas indicates:", "More excess air", ["Less excess air", "A cleaner heat exchanger", "A leak in the gas line"], "More O2 in the flue means more excess air, which lowers efficiency."],
      ["A condensing furnace usually needs:", "Category IV style venting and a condensate drain", ["A masonry chimney only", "No condensate drain", "An unlined metal chimney"], "Condensate is acidic and must be drained and often neutralized."],
      ["Why can't regular steel vent pipe be used on condensing appliances?", "The acidic condensate corrodes it", ["It is too light", "It is too expensive", "It cannot hold pressure"], "Use vent materials approved by the appliance listing and manufacturer."],
      ["Which gas should never be used to pressure test a gas piping system?", "Oxygen", ["Air", "Nitrogen", "Another inert gas"], "Oxygen with oil or thread compound is a fire and explosion hazard."],
      ["New gas piping should be purged:", "To a safe location outdoors, away from ignition sources", ["Into the furnace room", "Through a vent on the appliance", "Into a drain"], "Purging into a building creates an explosion risk."],
      ["Why does a longer pipe run with more fittings often need a bigger pipe?", "Friction loss increases and pressure drops", ["Gas gets colder", "The heating value rises", "The regulator becomes noisy"], "Pipe sizing keeps pressure at the appliance within its range at full load."],
      ["Liquid propane boils at about what temperature at atmospheric pressure?", "About -42 °C", ["About 0 °C", "About +20 °C", "About -150 °C"], "Propane vaporizes readily in normal conditions, which is why cylinders deliver vapour."],
      ["The purpose of a regulator vent on a gas regulator is to:", "Let the diaphragm breathe, and a vent line must go to a safe place if required", ["Release gas to the room", "Measure the supply", "Drain condensate"], "If the diaphragm ruptures the vent will release gas, so location and protection matter."],
      ["Flame rectification ignition systems detect the flame using:", "A flame sensing rod that conducts a small current through the flame", ["A thermocouple only", "A pressure switch", "A thermometer"], "The control reads a microamp signal through the flame to prove it."],
      ["A high-limit switch on a furnace:", "Shuts off the burner if the temperature goes too high", ["Controls the blower speed", "Regulates gas pressure", "Measures draft"], "It is a safety control that stops overheating."],
      ["Which mark shows that an appliance has been certified for use in Canada?", "A recognized certification mark such as CSA, ULC, or Intertek", ["A shipping label", "A paint colour", "A serial number alone"], "Appliances must be certified by an accredited body for Canadian use."],
      ["Clearances to combustibles for an appliance are found:", "On the appliance data plate and in the installation instructions and code", ["On the gas meter", "In the SDS", "On the gas bill"], "Follow the stricter of the manufacturer and code."],
      ["A manifold pressure check is done to:", "Verify the pressure to the burner orifices matches the data plate", ["Check the vent size", "Test the thermostat wire", "Adjust the water level"], "Manifold pressure and orifice size set the burner input."],
      ["A spillage test checks whether:", "The appliance's flue gases are drawn up the vent under worst case conditions", ["The gas meter is accurate", "The pipe slope is correct", "The thermostat is calibrated"], "Exhaust fans and other appliances can pull flue gases back into a room."]
    ],
    4: [
      ["Before a new gas system is put into service you must typically:", "Have it leak tested and inspected, then purge and commission it", ["Light the appliance and see", "Skip testing if the pipe is new", "Only check the meter"], "Pressure testing, authority inspection, purging, and commissioning verify safety."],
      ["Gas permits and inspections in Canada are generally handled by:", "The provincial or territorial authority or the authority having jurisdiction", ["The pipe supplier", "The federal customs agency", "The tool manufacturer"], "Requirements vary by province, so confirm with your authority."],
      ["Two safety shut-off valves in series on a burner train are used to:", "Provide redundancy so gas is shut off if one valve leaks", ["Increase gas pressure", "Mix air and gas", "Measure flow"], "Redundant valves reduce the risk of gas reaching a burner when it is off."],
      ["A vent valve between two safety shut-off valves is used to:", "Vent leaked gas to a safe location outdoors", ["Increase firing rate", "Measure input", "Regulate air"], "It prevents a leaking first valve from pressurizing the burner."],
      ["A burner flame failure (flame safeguard) control must:", "Shut off gas within its safety time if flame is lost", ["Keep gas on to relight", "Ignore the flame signal", "Run the blower only"], "Flame safeguard controls protect against unburned gas accumulating."],
      ["Which instrument gives the input rate by timing the meter dial?", "The gas meter and a stopwatch", ["A sling psychrometer", "A draft gauge", "A tape measure"], "Input = (3600 ÷ seconds per revolution) × dial volume × heating value."],
      ["Meter test: a 1 ft³ dial takes 36 s per revolution on gas with 1000 Btu/ft³. The input is:", "100 000 Btu/h", ["36 000 Btu/h", "10 000 Btu/h", "360 000 Btu/h"], "3600 ÷ 36 = 100 revolutions per hour, which is 100 ft³/h × 1000 Btu/ft³."],
      ["A combustion air supply to a large mechanical room is usually:", "Sized from the code based on the total input of the appliances", ["Left to the owner", "Sized from the pipe diameter", "Not required for gas equipment"], "B149.1 gives methods based on input rating and the type of venting."],
      ["A furnace repeatedly locks out after a short time. A common first check is:", "A dirty or faulty flame sensor", ["The filter colour", "The thermostat brand", "The gas meter size"], "A coated flame rod gives a weak microamp signal and trips the control."],
      ["Buried steel gas piping is protected by:", "Coating and cathodic protection or other approved corrosion protection", ["Bare pipe only", "Painting after backfill", "Leaving it exposed"], "Underground steel needs corrosion protection. Plastic piping must be locatable, for example with tracer wire."],
      ["The maximum liquid fill of a propane container is usually about:", "80% of its volume", ["100% of its volume", "50% of its volume", "95% of its volume"], "Space is left for liquid expansion as temperature rises."],
      ["Which code covers propane storage and handling?", "CSA B149.2", ["CSA B52", "CSA B139", "NBC only"], "B149.2 is the Propane Storage and Handling Code."],
      ["An oversized furnace or boiler commonly causes:", "Short cycling, wear, and poor comfort or efficiency", ["Better efficiency", "Lower gas pressure", "Longer life"], "Size equipment to the heat loss, not just a larger rule of thumb."],
      ["At higher altitude, gas appliance input generally must be:", "Derated according to the manufacturer and code", ["Increased by 20%", "Ignored", "Doubled"], "Air density is lower so input is reduced. Follow manufacturer and code instructions."],
      ["After a CO event or serious gas incident you should:", "Make the system safe, tag out the equipment, and report to the authority as required", ["Restart it immediately", "Remove the data plate", "Remove the detector"], "Documentation and reporting protect the occupants and you."]
    ]
  }),
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements and the gas classes offered by your provincial or territorial apprenticeship and safety authority", "Get the safety training employers ask for (commonly WHMIS, fall protection, and H2S or site orientation where relevant; requirements vary)", "Prepare a resume and apply to gas contractors, mechanical contractors, utilities, and union locals", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: gas safety and piping", items: ["Learn gas properties, odorant, leak response, and lockout/tagout", "Cut, thread, and assemble steel pipe and learn gas-rated sealants", "Learn the structure of CSA B149.1 and your provincial rules", "Practise pressure testing and leak detection with a manometer", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: appliances and venting", items: ["Install and connect furnaces, water heaters, and unit heaters", "Learn burners, orifices, regulators, and gas valves", "Study combustion air and Category I to IV venting", "Learn basic electrical controls and ignition systems"] },
    { title: "Year 3: controls, boilers, and larger systems", items: ["Commission and service boilers and rooftop equipment", "Use a combustion analyzer and a manometer to tune and verify", "Size pipe with code tables and read piping drawings", "Learn propane storage, regulation, and vaporization"] },
    { title: "Year 4 and beyond: commercial and industrial", items: ["Work on large burners, burner trains, and flame safeguard controls", "Troubleshoot complex controls and combustion problems", "Handle permits, documentation, and inspections", "Mentor first-year apprentices and use the Red Seal standard to find gaps"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Check whether your province offers a Red Seal endorsement or its own Class A certificate", "Review the trade standard and take the mock exam on the Practice tests tab", "Write your exam and check the federal completion bonus and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["Appliance", "A device that burns gas to produce heat, such as a furnace, boiler, or water heater."],
    ["Authority having jurisdiction (AHJ)", "The body that enforces gas codes and issues permits in your area."],
    ["B149.1", "CSA Natural Gas and Propane Installation Code."],
    ["Btu", "British thermal unit, a unit of heat. Input is measured in Btu per hour."],
    ["Category I to IV", "Classification of appliance venting by vent pressure and condensing."],
    ["Combustion air", "Air supplied to an appliance so gas burns completely."],
    ["Combustion analyzer", "An instrument that measures O2, CO, and flue temperature."],
    ["Draft", "The pressure difference that moves flue gases up a vent."],
    ["Drip leg", "A short vertical pipe that traps sediment and moisture before an appliance."],
    ["Excess air", "Air supplied beyond the amount theoretically needed for combustion."],
    ["Flame rectification", "A method of proving flame by the small DC current that passes through it."],
    ["Flame safeguard", "A control that proves ignition and shuts off gas if flame is lost."],
    ["Flue gas", "The combustion products leaving an appliance."],
    ["Heat exchanger", "The surface that transfers heat from flue gases to air or water."],
    ["High limit", "A safety control that shuts the burner off on over-temperature."],
    ["Input rating", "The rate at which an appliance consumes fuel, in kW or Btu/h."],
    ["Lockout/tagout", "Locking and tagging energy sources off before servicing."],
    ["Manifold pressure", "Gas pressure measured at the burner manifold."],
    ["Manometer", "An instrument for measuring low gas pressures."],
    ["Mercaptan", "The sulphur compound added to give gas its odour."],
    ["Orifice", "A precisely sized opening that meters gas into a burner."],
    ["Purge", "Removing air or gas from piping by displacing it with fuel gas or inert gas."],
    ["Regulator", "A device that reduces and controls gas pressure."],
    ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
    ["Spillage", "Flue gases escaping into a room instead of leaving through the vent."],
    ["Thermocouple", "A junction of two metals that makes a millivolt signal when heated."],
    ["Vent connector", "The pipe that joins the appliance flue outlet to a vent or chimney."],
    ["WHMIS", "Canada's workplace hazardous materials information system."],
    ["Water column (w.c.)", "A unit of low pressure. 1 in w.c. is about 0.249 kPa."]
  ],
  cards: [
    { front: "Natural gas relative density", back: "About 0.6, lighter than air, rises." },
    { front: "Propane vapour relative density", back: "About 1.5, heavier than air, collects low." },
    { front: "1 in w.c. in kPa", back: "About 0.249 kPa" },
    { front: "Typical NG appliance inlet pressure", back: "About 7 in w.c. (1.7 kPa). Check the data plate." },
    { front: "1 kW in Btu/h", back: "About 3412 Btu/h" },
    { front: "Natural gas flammable range", back: "About 5% to 15% gas in air" },
    { front: "Main Canadian gas installation code", back: "CSA B149.1" },
    { front: "Input from a meter reading", back: "(3600 ÷ seconds per revolution) × dial size × heating value" },
    { front: "Category IV appliance", back: "Positive vent pressure and condensing flue gases." },
    { front: "First action on a strong gas odour", back: "Avoid ignition sources, ventilate, evacuate, call from outside." }
  ],
  jobsIntro: "Look for gas and heating contractors, mechanical contractors, propane and natural gas utilities, institutional and industrial maintenance departments, and union pipe trades locals.",
  tips: ["Bring a short resume, your safety tickets, and ID.", "Show that you take safety and code compliance seriously.", "Visit shops and halls in person when you can, and follow up.", "Ask which test instruments the employer supplies before buying your own."],
  forumTopics: ["Starting out", "Gas piping and pressure testing", "Burners, venting, and combustion", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
  reference: [
    {
      title: "Key formulas",
      list: [
        "Input (Btu/h) = gas flow (ft³/h) × heating value (Btu/ft³)",
        "Meter clocking: flow (ft³/h) = 3600 ÷ seconds per revolution × dial volume (ft³)",
        "Input (MJ/h) = flow (m³/h) × heating value (MJ/m³). 1 MJ/h ≈ 278 W",
        "Pressure drop in a run is chosen from code tables for pipe size, length, and load",
        "Right triangle: c² = a² + b² for offsets and diagonal runs",
        "Net stack temperature = flue gas temperature minus room (combustion air) temperature"
      ]
    },
    {
      title: "Conversions",
      list: [
        "1 in w.c. ≈ 0.249 kPa, and 1 psi ≈ 6.895 kPa (about 27.7 in w.c.)",
        "1 kW ≈ 3412 Btu/h, and 1 hp (boiler) ≈ 33 475 Btu/h",
        "1 m³ ≈ 35.3 ft³, and 1 ft³ ≈ 28.3 L",
        "1 in = 25.4 mm, and 1 ft = 304.8 mm",
        "1 Btu ≈ 1.055 kJ, and 1 therm = 100 000 Btu"
      ]
    },
    {
      title: "Fuel gas properties (approximate)",
      table: {
        head: ["Property", "Natural gas", "Propane"],
        rows: [
          ["Heating value (vapour)", "About 37 to 38 MJ/m³", "About 93 MJ/m³"],
          ["Relative density (air = 1)", "About 0.6", "About 1.5"],
          ["Flammable range in air", "About 5% to 15%", "About 2% to 9.5%"],
          ["Typical appliance inlet pressure", "About 7 in w.c. (1.7 kPa)", "About 11 in w.c. (2.7 kPa)"],
          ["Typical manifold pressure", "About 3.5 in w.c. (0.9 kPa)", "About 10 in w.c. (2.5 kPa)"]
        ]
      },
      note: "Typical values only. Always use the appliance data plate and the gas supplier's data."
    },
    {
      title: "Vent categories",
      table: {
        head: ["Category", "Vent pressure", "Flue gas condensing?"],
        rows: [
          ["I", "Negative", "No"],
          ["II", "Negative", "Yes"],
          ["III", "Positive", "No"],
          ["IV", "Positive", "Yes"]
        ]
      },
      note: "Use only vent materials and components listed for the appliance and category. Always follow the manufacturer's instructions."
    },
    {
      title: "Commissioning checklist for a gas appliance",
      list: [
        "Confirm the appliance is certified for use in Canada and suits the gas type and elevation",
        "Check clearances, combustion air, and vent connections against code and instructions",
        "Leak test all joints, then purge the line safely to outdoors",
        "Verify supply pressure, set manifold pressure, and confirm the input rate",
        "Prove ignition, flame signal, and all safety controls (high limit, pressure switches, flame failure)",
        "Take a combustion reading and complete a spillage or draft test where applicable",
        "Explain operation and shutoff to the owner, and complete your documentation"
      ]
    },
    {
      title: "Code and standard pointers",
      list: [
        "<strong>CSA B149.1:</strong> Natural Gas and Propane Installation Code (piping, appliances, venting, testing)",
        "<strong>CSA B149.2:</strong> Propane Storage and Handling Code",
        "<strong>CSA B149.3:</strong> Code for the field approval of fuel-related components on appliances and equipment",
        "<strong>Provincial rules:</strong> adopt and amend B149 and define licence classes, permits, and inspections"
      ],
      note: "Class A and Class B scope, input limits, and Red Seal status depend on your province. Confirm with your provincial authority."
    }
  ]
});
