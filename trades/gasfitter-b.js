// Gasfitter Class B: tools, learning media, practice tests, roadmap, and reference.
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
  introVideo: { id: "6d4khWILewA", title: "Intro video: Gasfitter (Class B)" },
  id: "gasfitter-b",
  store: "gasfitter-b",
  title: "Gasfitter - Class B",
  name: "Gasfitter (Class B)",
  short: "Class B gasfitting",
  category: "Gas · Residential Heating · Service",
  summary: "Install and service gas piping and appliances within a limited scope, typically homes and smaller buildings, such as furnaces, water heaters, ranges, dryers, and fireplaces.",
  work: "Class B gasfitters focus on residential and light commercial gas work: running appliance piping, connecting and venting furnaces, water heaters, fireplaces, ranges, and dryers, and servicing them. Much of the day is in customers' homes, so clear explanations, tidy work, and strict leak testing matter. What a Class B licence allows, including input limits, varies by province.",
  duration: "Usually shorter than Class A (varies by province)",
  union: "UA Canada (union) and provincial gas contractor associations",
  unionUrl: "https://www.uacanada.ca/",
  profileUrl: "https://red-seal.ca/eng/trades/gasfitter_b/overview.shtml",
  durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/16980/ca",
  jobSearch: "gasfitter class B apprentice",
  journeySearch: "gasfitter class B",
  aliases: "gas fitter class b residential gas technician furnace water heater fireplace range dryer propane natural gas b149",
  tools: [
    "Digital manometer",
    "Combustible gas leak detector",
    "Pipe wrenches and adjustable wrenches",
    "Multimeter with microamp range",
    "Personal CO monitor",
    "CSA B149.1 code book"
  ],
  insight: {
    skills: ["Neat, careful work inside customers' homes", "Clear explanations of safety issues to homeowners", "Basic electrical and ignition control troubleshooting", "Knowing the limits of your licence class"],
    hazards: ["Gas leaks: no ignition sources, ventilate, leak test every joint", "Carbon monoxide: check venting and spillage, test with a monitor", "Crawl spaces and attics: heat, tight spaces, and poor air, plan access", "Hot appliances and flues: allow cooling and use proper PPE"],
    settings: ["Residential gas and heating contractors", "Appliance and fireplace installers and retailers", "Propane distributors and service providers", "Home service and maintenance companies"]
  },
  toolGroups: [
    {
      title: "Day-one tools, buy once and buy well",
      note: "Professional-grade tools that hold up in homes and crawl spaces. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
      items: [
        { name: "RIDGID 10 in and 14 in pipe wrenches", why: "Common sizes for 1/2 in to 1 in appliance piping. Use two wrenches so you do not twist fittings you are not tightening.", search: "RIDGID 10 inch 14 inch pipe wrench" },
        { name: "Crescent or Knipex adjustable wrenches (6 in, 8 in and 12 in)", why: "For flare nuts, connectors, and valves where pipe wrench teeth would damage the fitting.", search: "Knipex Crescent adjustable wrench 6 inch 8 inch 12 inch" },
        { name: "Klein or Wera screwdriver and nut driver set", why: "Appliance panels, gas valve screws, and control terminals.", search: "Klein screwdriver nut driver set" },
        { name: "Combustible gas leak detector", why: "Finds low-level natural gas and propane leaks behind appliances. Bump test it before use.", search: "combustible gas leak detector natural gas propane sniffer" },
        { name: "Leak detection solution", why: "Bubble solution made for gas confirms leaks at fittings. Rinse and wipe it off after the test.", search: "gas leak detector solution bubble spray" },
        { name: "Gas-rated PTFE tape and pipe thread compound", why: "Seals tapered threads. Use a product marked for gas service.", search: "yellow PTFE gas thread tape pipe thread sealant natural gas" },
        { name: "Milwaukee or Stanley FatMax tape measure (25 ft)", why: "Measuring clearances, vent runs, and pipe lengths.", search: "Milwaukee Stanley FatMax tape measure 25 ft" },
        { name: "Cut-resistant gloves, safety glasses, and CSA-approved safety boots", why: "Sharp sheet metal vent parts and threaded pipe. Comfortable, rated PPE is what you will wear.", search: "Mechanix cut resistant gloves CSA safety boots safety glasses" },
        { name: "Headlamp and knee pads", why: "Crawl spaces, furnace closets, and attic work are part of the job.", search: "LED headlamp rechargeable knee pads work" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
      items: [
        { name: "Digital manometer (kPa and in w.c.)", why: "Checks inlet and manifold pressure and does low-pressure leak tests.", search: "digital manometer in w.c. kPa gas pressure testo fieldpiece" },
        { name: "Multimeter with DC microamp range", why: "Tests 24 V controls, igniters, and flame sensing current.", search: "Fluke Fieldpiece multimeter microamp HVAC" },
        { name: "Tin snips (aviation snips) and crimper", why: "Cutting and fitting vent pipe and sheet metal connectors.", search: "aviation snips straight left right duct crimper" },
        { name: "Flaring and swaging tools for tubing", why: "Used for certain tubing connections where the code and the job allow them.", search: "flaring tool kit copper tubing swage" },
        { name: "Pipe cutter and reamer", why: "Square cuts and a deburred bore keep debris out of valves and orifices.", search: "RIDGID pipe cutter reamer 1/2 inch to 2 inch" },
        { name: "Personal carbon monoxide monitor", why: "A wearable alarm warns you of CO while testing appliances in occupied homes.", search: "personal carbon monoxide monitor wearable" },
        { name: "Hand pump and gauge for low-pressure tests", why: "Lets you pressurize small piping runs and watch for a pressure drop.", search: "low pressure test pump gauge gas line manometer kit" },
        { name: "Heavy-duty tool bag with shoe covers or mat", why: "Protects floors and customers' property, and keeps tools organized.", search: "tool bag job site floor mat shoe covers" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying.",
      items: [
        { name: "Combustion analyzer (Testo, Bacharach, or similar)", why: "Measures O2, CO, and flue temperature to verify safe venting and combustion. Needs regular calibration.", search: "combustion analyzer Testo 310 Bacharach gas furnace" },
        { name: "Digital draft gauge", why: "Checks small vent and chimney draft pressures for Category I appliances.", search: "digital draft gauge flue pressure" },
        { name: "Borescope or inspection camera", why: "Looks inside chimneys, heat exchangers, and tight spaces.", search: "borescope inspection camera HVAC" },
        { name: "Thermometer set (stack and temperature rise)", why: "Measures supply and return air temperature for temperature rise checks.", search: "digital thermometer probe HVAC temperature rise" },
        { name: "Appliance dolly and straps", why: "Moving water heaters and furnaces safely. Usually supplied by the shop.", search: "appliance hand truck dolly straps" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for drawings, math, and code study. Check with your school and your exam body about calculator rules before you buy.",
      items: [
        { name: "CSA B149.1 Natural Gas and Propane Installation Code", why: "Your main reference in school. Check which edition your province has adopted and whether your school supplies a copy.", search: "CSA B149.1 natural gas and propane installation code" },
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Input rates, load totals, and unit conversions.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Mechanical pencil (0.5 mm), such as Pentel GraphGear 1000", why: "Clean notes and sketches that survive a tool bag.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm" },
        { name: "Graph paper pad", why: "Sketch appliance layouts and piping runs for a house.", search: "graph paper pad 8.5 x 11" },
        { name: "Field notebook (Rite in the Rain)", why: "Record pressures, readings, and appliance data plate details. Weatherproof paper survives job sites.", search: "Rite in the Rain field notebook" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by topic and mark code references.", search: "binder dividers highlighters" },
        { name: "Index tabs for your code book", why: "Quickly find tables and clauses, as your school and exam rules allow.", search: "adhesive index tabs book tabs" },
        { name: "Steel ruler and protractor", why: "Drawings and vent offset layouts.", search: "Staedtler drafting triangle set protractor steel ruler" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal Program", desc: "Red Seal information and where to confirm whether your gas class has a Red Seal endorsement.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Codes Canada", desc: "National model codes. Gas installation itself is governed by CSA B149 and provincial adoption.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
        { name: "CSA Group", desc: "Publisher of the B149 gas installation codes and appliance standards.", url: "https://www.csagroup.org/" },
        { name: "Technical Safety BC", desc: "British Columbia's safety authority for gas work, licensing, and permits.", url: "https://www.technicalsafetybc.ca/" },
        { name: "TSSA (Ontario)", desc: "Ontario's technical safety authority for fuels and gas technician certification.", url: "https://www.tssa.org/" },
        { name: "HRAI", desc: "Heating, Refrigeration and Air Conditioning Institute of Canada, with industry and training information.", url: "https://www.hrai.ca/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local codes.",
      items: [
        { name: "Gas water heater installation", desc: "Connecting, venting, and testing a gas water heater.", url: "https://www.youtube.com/results?search_query=gas+water+heater+installation+venting+connector" },
        { name: "Gas furnace installation", desc: "Furnace setup, gas connection, and venting.", url: "https://www.youtube.com/results?search_query=gas+furnace+installation+gas+connection+venting" },
        { name: "Gas range and dryer hookup", desc: "Safe appliance connectors, shut-offs, and leak testing.", url: "https://www.youtube.com/results?search_query=gas+range+dryer+hookup+flexible+connector+leak+test" },
        { name: "Gas fireplace service", desc: "Cleaning, inspecting, and servicing gas fireplaces.", url: "https://www.youtube.com/results?search_query=gas+fireplace+service+cleaning+pilot+thermopile" },
        { name: "Furnace ignition and flame sensor", desc: "Hot surface igniters and flame sensors explained.", url: "https://www.youtube.com/results?search_query=furnace+hot+surface+igniter+flame+sensor+troubleshooting" },
        { name: "Direct vent and sealed combustion", desc: "How direct vent appliances take in and exhaust air.", url: "https://www.youtube.com/results?search_query=direct+vent+sealed+combustion+gas+appliance+explained" },
        { name: "Carbon monoxide testing", desc: "Testing for CO and spillage in homes.", url: "https://www.youtube.com/results?search_query=carbon+monoxide+testing+gas+appliance+spillage+test" },
        { name: "Propane cylinder safety", desc: "Handling, transport, and connecting small propane cylinders.", url: "https://www.youtube.com/results?search_query=propane+cylinder+safety+OPD+valve+transport" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for gasfitting yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: gas technician career podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=gas+technician+career+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: residential HVAC service podcast (listen-along)", desc: "Service stories and furnace diagnostics for the commute.", url: "https://www.youtube.com/results?search_query=residential+HVAC+service+technician+podcast" },
        { name: "YouTube: venting and combustion air talks (audio)", desc: "Understanding vent sizing, combustion air, and spillage.", url: "https://www.youtube.com/results?search_query=gas+appliance+venting+combustion+air+explained+podcast" },
        { name: "YouTube: customer communication for service techs", desc: "Explaining problems and options to homeowners.", url: "https://www.youtube.com/results?search_query=service+technician+customer+communication+podcast" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, business, and leadership.",
      items: [
        { name: "YouTube: gasfitter class B exam preparation talk-through", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=gasfitter+class+B+exam+preparation" },
        { name: "YouTube: running a home service business podcast", desc: "Estimating, scheduling, and growing a service company.", url: "https://www.youtube.com/results?search_query=home+service+HVAC+business+podcast" },
        { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
      ]
    }
  ],
  practiceBank: buildBank(5207, {
    1: [
      ["What is the first priority if a customer reports the smell of gas?", "Get people out, avoid ignition sources, and call from a safe place", ["Find the leak by holding a lighter near the suspected joint", "Turn on the exhaust fan and light switches to clear the air", "Wait inside to see whether the smell goes away on its own"], "Sparks from switches and phones can ignite gas. Leave first and shut off the supply only if it is safe."],
      ["The rotten-egg smell in natural gas comes from:", "An added odorant, usually a mercaptan compound", ["Natural decay of organic material inside the underground gas main", "Sulfur that naturally dissolves in the water vapour in the line", "Rust and scale reacting with the gas inside the steel pipe"], "Natural gas is odourless until odorant is added."],
      ["Common symptoms of carbon monoxide exposure include:", "Headache, dizziness, nausea, and flu-like feelings", ["A strong rotten egg smell that fills the room quickly", "A burning sensation in the throat that fades at once", "Sudden loss of hearing within seconds of entering the room"], "CO is odourless. Symptoms often improve when away from the building."],
      ["Which tool is best for tightening a polished brass shut-off valve nut?", "An adjustable wrench", ["A pipe wrench with serrated jaws set snug on the nut", "A hammer and a flat punch to tap the nut around", "Locking pliers clamped tightly on the corners of the nut"], "A smooth-jawed wrench avoids marring or crushing fittings."],
      ["Tapered pipe threads (NPT) seal because:", "The threads wedge together and sealant fills small gaps", ["The threads have a rubber seat that compresses against the fitting", "They are cut perfectly square so the faces meet flat together", "The joint is fused by friction heat as the fitting is tightened"], "NPT threads are tapered. Sealant helps close leak paths."],
      ["A gas shut-off valve handle is open when it is:", "In line with the pipe", ["Across the pipe at a right angle to the line", "At 45° to the pipe, halfway between open and closed", "Facing the wall regardless of the pipe direction"], "Quarter-turn valves are open when the handle is parallel to the pipe."],
      ["Which of these should you NOT use to find a gas leak?", "An open flame", ["Bubble solution", "An electronic detector", "A soap solution made for the job"], "Never use a flame to test for gas."],
      ["1 psi is about how many inches of water column?", "27.7", ["About 2.77 in w.c.", "About 277 in w.c.", "About 0.277 in w.c."], "1 psi is about 27.7 in w.c., so low-pressure gas systems are very small pressures."],
      ["A gas range should be secured with:", "An anti-tip bracket", ["Spray foam under the rear feet to hold it in place", "Duct tape across the back panel and the wall", "Nothing extra, since a heavy range cannot tip over"], "The bracket prevents tipping when someone steps or leans on an open door."],
      ["40 000 Btu/h is about how many kilowatts?", "11.7 kW", ["1.2 kW, found by dropping a zero", "40 kW, treating Btu/h as watts", "136 kW, found by multiplying by 3412"], "Divide by 3412 Btu/h per kW."],
      ["A Safety Data Sheet (SDS) for thread sealant gives:", "Hazards, handling, and first aid information", ["Current retail price and where to buy the sealant", "Pressure ratings of the pipe it can be used on", "Warranty terms and the return policy for the product"], "WHMIS requires workers to have access to an SDS for hazardous products."],
      ["When working in a crawl space you should:", "Check air quality and access and have a way out", ["Work alone without telling anyone where you are", "Ignore spider and mould hazards to save time", "Light a torch to see better in the dark space"], "Crawl spaces can have poor air, tight access, and hidden hazards."],
      ["Which of these is an ignition source around a gas leak?", "A light switch or a cell phone", ["A closed door between two rooms", "A wet floor near the meter", "A cold steel pipe running along the wall"], "Even small sparks can ignite gas in the right mixture."],
      ["Why do you wipe off bubble leak solution after testing?", "Some residues can corrode fittings or hide later leaks", ["It makes the pipe lighter, which helps with handling", "The solution is highly flammable and ignites at the pilot light", "It leaves a slippery film on the floor and nothing else"], "Clean the joint and recheck it. Use a solution intended for gas fittings."],
      ["Why are two wrenches used when making up a threaded joint?", "One holds the fitting while the other turns, so you do not loosen other joints", ["To finish the job faster, since two people always work quicker", "Because the pipe is heavy and a single wrench cannot safely carry the weight of it", "To warm the thread so the sealant flows into the joint"], "A backup wrench prevents twisting and loosening connections already made."]
    ],
    2: [
      ["A direct vent (sealed combustion) appliance:", "Draws combustion air from outdoors and vents flue gases outdoors", ["Draws combustion air from the room and vents through a natural draft chimney only", "Has no vent and releases flue gases into the room", "Burns propane only and needs a separate outdoor tank"], "The combustion chamber is sealed from the room."],
      ["A Category I gas water heater is normally vented through:", "A draft hood and a gas vent or chimney", ["A PVC pipe sized for the appliance and glued to the draft hood", "A flexible dryer duct run to the nearest exterior wall", "A hole through the wall with no pipe at all"], "Category I appliances rely on natural draft with an appropriate vent."],
      ["A vent connector should slope:", "Upward toward the vent or chimney", ["Downward toward the vent so condensate can run out", "Perfectly level so the flue gases do not rush", "In whichever direction is easiest for the installer"], "A continuous upward slope, commonly 20 mm per metre (1/4 in per foot), helps flue gases rise."],
      ["A gas clothes dryer exhaust duct should:", "Terminate outdoors and not be combined with a furnace vent", ["Discharge into the basement so the heat is not wasted", "Connect into the furnace flue so both appliances share a single vent", "End in the attic where the lint can settle out"], "Dryer exhaust carries moisture and lint and must not be connected to the appliance venting."],
      ["An oxygen depletion sensor (ODS) in an unvented heater is designed to:", "Shut off gas if oxygen in the room falls too low", ["Measure the gas pressure at the appliance regulator", "Add oxygen to the room when the level drops too low", "Control the room temperature in place of a thermostat"], "ODS pilots shut off if the pilot flame lengthens due to low oxygen."],
      ["The usual sequence in a modern gas furnace is:", "Thermostat call, inducer, pressure switch proves draft, igniter, gas valve, then blower", ["Thermostat call, gas valve opens, igniter lights it, then the inducer starts and the blower follows", "Blower starts first, then the thermostat calls for heat", "Igniter, then pressure switch, then thermostat"], "The control must prove draft before gas flows."],
      ["A 20 lb (about 9 kg) barbecue propane cylinder valve has an OPD, which stands for:", "Overfill prevention device", ["Open pilot device that keeps the pilot lit", "Over-pressure drain that vents the extra vapour", "Output pressure detector for the regulator"], "The OPD helps prevent overfilling of the cylinder."],
      ["Propane cylinders being transported should be:", "Upright and secured in a ventilated space", ["Lying down in the trunk with the valve pointing up", "Left rolling freely in the back of the vehicle", "Stored inside a closed passenger compartment all day"], "Upright and secured keeps the relief valve in the vapour space."],
      ["Corrugated stainless steel tubing (CSST) installers generally need:", "Manufacturer training and bonding per the code and manufacturer instructions", ["No training, because it is installed the same way as ordinary black iron pipe", "Only a drill and a tube cutter", "A plumber's licence only, with no manufacturer training"], "CSST has specific fitting and bonding requirements."],
      ["The utility's gas meter and service line are generally:", "Worked on only by the utility or authorized people", ["Opened by any customer who wants to check the meter", "Replaced by the fitter without telling the utility", "Always owned by the fitter who installed the piping"], "Do not tamper with utility equipment."],
      ["To convert a furnace from natural gas to propane you must:", "Use the manufacturer's approved conversion kit and follow its instructions", ["Drill out the burner orifices a little larger until the flame looks right", "Do nothing, the gas valve adjusts itself", "Add water to the line"], "Orifices and regulator settings change. Use certified kits and relabel the appliance."],
      ["A furnace closet needs combustion air because:", "The burner needs oxygen and the room is small", ["The furnace fan needs a gap so it can run quietly", "Gas pipe in the closet must be ventilated to stay dry", "Gas needs room air only to carry the odorant smell"], "Confined spaces need openings or ducted air as required by the code."],
      ["After reconnecting an appliance you must:", "Leak test the connection and check operation", ["Assume it is tight because it was tight before", "Only smell the area around the connection", "Leave the valve closed until the customer returns"], "Every connection you disturb is leak tested."],
      ["A hot surface igniter is:", "An electrically heated element that lights the gas", ["A thermocouple that generates millivolts in a pilot flame", "A standing pilot burner that stays lit all the time", "A gas valve that opens when the board calls for heat"], "It glows hot enough to ignite gas on a call for heat."],
      ["Gas fireplaces with a glass front are hot, so you should:", "Warn owners about the glass and keep children away", ["Remove the glass so the heat can reach the room", "Leave the glass off to improve the flame appearance", "Tell them the glass is always cool to the touch"], "Glass can stay hot long after the fire is off."]
    ],
    3: [
      ["High-efficiency condensing furnace vent pipe should slope:", "Back toward the appliance so condensate drains", ["Away from the appliance so the pipe drains outside", "Up and down in waves to trap the water in dips", "Level with no slope, since condensate evaporates"], "Condensate must drain to the condensate trap or drain, not collect in the pipe."],
      ["A rollout switch trips when:", "Flames roll out of the burner area", ["The filter is dirty and airflow is reduced", "The thermostat is switched off at the wall", "The gas meter is spinning faster than normal"], "It is a safety device. Find the cause before resetting."],
      ["A pressure switch on an induced-draft furnace proves:", "That the inducer is creating draft", ["That the gas supply is on and at line pressure", "That the filter is clean enough for airflow", "That the room is warm enough to end the call"], "The control must not light the burner until draft is proven."],
      ["Furnace temperature rise is measured as:", "Supply air temperature minus return air temperature", ["Return air plus supply air temperature", "Flue gas temperature minus supply temperature", "Outdoor temperature only, measured at the thermostat"], "Compare it to the range on the data plate."],
      ["If a pilot will not stay lit, a likely cause is:", "A weak thermocouple or a dirty pilot", ["A new filter that was installed last week", "A thermostat that is set low in the house", "A window left closed in the furnace room"], "The thermocouple must produce enough millivolts to hold the valve open."],
      ["A negatively pressured house with exhaust fans running can:", "Pull flue gases back down a Category I vent", ["Speed up combustion and improve the burner flame", "Fix a draft problem by pushing flue gases up", "Reduce CO by pulling in extra fresh air"], "That is why spillage testing under worst-case conditions matters."],
      ["A tankless gas water heater often requires:", "A larger gas supply line to meet its high input", ["A smaller gas line, because it burns gas slowly", "No gas line, since it runs on electricity only", "A masonry chimney only, with no gas piping upgrade"], "Check input rating and pipe capacity before the installation."],
      ["A common T&P relief valve discharge pipe rule is:", "It must run to a safe place without a valve or plug", ["It may be capped to stop drips on the floor", "It must be hidden in a wall cavity out of sight", "It must be copper only, with a shut-off at the end"], "Never block or cap a relief valve discharge."],
      ["A small residential hot water boiler commonly has a pressure relief valve rated at:", "About 210 kPa (30 psi)", ["About 21 kPa (3 psi)", "About 2100 kPa (300 psi)", "About 10 000 kPa (1450 psi)"], "30 psi is common, but always use the boiler's rated valve."],
      ["A bird's nest or debris blocking a flue can lead to:", "Spillage and carbon monoxide", ["Higher efficiency from the warmer exhaust", "A lower gas bill from the restricted flow", "Less condensate collecting in the vent"], "Inspect vent terminations during service."],
      ["Oversized vent pipe on a Category I appliance can cause:", "Condensation and poor draft", ["Better efficiency because the vent runs cooler", "A lower input rating on the data plate", "Higher thermostat accuracy in the room"], "Cool flue gases in a large vent condense and corrode."],
      ["Which control opens the gas valve on a 24 V furnace?", "A 24 V coil energised by the control board", ["A 120 V thermocouple wired to the board", "A manual lever that the occupant operates", "A pressure gauge connected to the manifold"], "Check for 24 V at the valve when troubleshooting."],
      ["A cracked heat exchanger can show up as:", "Flame disturbance when the blower starts or CO in the supply air", ["A clean flame always", "A quieter blower", "Lower gas pressure"], "Test and inspect. Condemn the furnace if confirmed per local rules."],
      ["Which is acceptable as the shut-off valve for a gas appliance?", "An approved manual shut-off valve near the appliance", ["A ball valve from a water line rated for 125 psi", "A garden valve with a hose thread outlet", "A homemade plug and cap threaded onto the pipe"], "Use valves certified for fuel gas."],
      ["When a customer has CO alarm sounding, you should first:", "Get people out into fresh air and call emergency services if symptoms exist", ["Silence the alarm and continue working, because alarms are often false and the reading is probably low", "Open a gas valve", "Light a candle to check"], "Occupant safety comes first. Investigate after everyone is safe."]
    ],
    4: [
      ["A house has a furnace 80 000 Btu/h, a water heater 40 000 Btu/h, a range 65 000 Btu/h, and a dryer 25 000 Btu/h. The total load is:", "210 000 Btu/h", ["About 145 000 Btu/h", "About 190 000 Btu/h", "About 230 000 Btu/h"], "Add inputs: 80 000 + 40 000 + 65 000 + 25 000 = 210 000 Btu/h."],
      ["At 1000 Btu/ft³, 210 000 Btu/h needs about how much gas per hour?", "210 ft³/h", ["About 21 ft³/h", "About 2100 ft³/h", "About 21 000 ft³/h"], "Divide the input by the heating value."],
      ["If a house adds a new large appliance, you should check:", "That the piping, meter capacity, and venting can handle the added load", ["Only the thermostat", "That the paint matches", "The doorbell"], "Extra load can starve other appliances if the piping or meter is too small."],
      ["A gas appliance found unsafe should be:", "Shut off, tagged, and reported to the customer and authority as required", ["Left running", "Hidden from the owner", "Reset and left"], "Documentation and tagging protect occupants and you."],
      ["Replacing an old furnace with a high-efficiency model while the water heater stays on the old chimney can:", "Leave the water heater with an oversized flue that may vent poorly", ["Improve the water heater draft", "Make no difference to the water heater, since it still has its own vent connector", "Reduce gas use"], "Common vent changes may require a liner or a new vent for the water heater."],
      ["A job requires a gas appliance larger than your licence class allows. You should:", "Decline that portion and refer it to a qualified person", ["Do it anyway and mention it to the inspector later", "Ask an apprentice to complete the work for you", "Hide the work from the permit paperwork"], "Working beyond your class risks safety and legal consequences."],
      ["Sealed combustion intake and exhaust terminations should be located:", "At clearances from windows, doors, meters, and snow level as the code and manufacturer require", ["Under a window", "Next to a neighbour's window", "At ground level in a crawl space"], "Clearances prevent re-entry of flue gases and blockage."],
      ["A gas piping job done without a required permit can result in:", "Penalties and unsafe, uninsured installations", ["A faster job with no waiting for inspection", "Better insurance rates from the provider", "A lower gas bill after the work"], "Permits and inspections protect the owner and installer."],
      ["Before turning on gas to a new appliance, you must:", "Leak test, purge the line, and verify supply pressure", ["Light it right away to see whether it works", "Only look at the meter dial for movement", "Skip the shut-off valve to save installation time"], "Test the piping first, then commission the appliance."],
      ["An elevation of 1500 m above sea level generally means:", "Appliance input may need derating per the manufacturer and code", ["More gas is needed", "No change", "Appliances run cooler"], "Lower air density changes the air-gas ratio."],
      ["The main reason to size piping for the longest run is:", "To keep pressure adequate at the farthest appliance at full load", ["To use less pipe", "To increase noise", "To raise the heating value"], "Code tables are based on length and load."],
      ["A technician finds the manifold pressure on a propane furnace reads 3.5 in w.c. The likely problem is:", "The furnace is set up for natural gas, not propane", ["The reading is ideal for a propane furnace", "The meter is broken and needs replacing", "The filter is dirty and restricting the airflow"], "Typical propane manifold pressure is near 10 in w.c. and typical natural gas is near 3.5 in w.c."],
      ["When a homeowner asks you to remove the gas safety control, you should:", "Refuse and explain why safety controls cannot be bypassed", ["Do it for a fee", "Bypass it quickly", "Ignore the request"], "Safety controls protect life. Never bypass them."],
      ["Which record is most valuable after commissioning an appliance?", "Readings for pressures, combustion, and tests with the date and your signature", ["A photo of the truck", "A blank form", "The receipt only"], "Records show the work was checked and support later troubleshooting."],
      ["Which is true of CO alarms installed in homes?", "They supplement safe installation and servicing but do not replace it", ["They make combustion testing unnecessary", "They detect gas leaks", "They work without batteries or power"], "A CO alarm is a backup. It does not detect natural gas leaks."]
    ]
  }),
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements and the gas classes offered by your provincial or territorial apprenticeship and safety authority", "Get the safety training employers ask for (commonly WHMIS, fall protection, and customer service basics; requirements vary)", "Prepare a resume and apply to residential gas and heating contractors", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: gas safety and appliance basics", items: ["Learn gas properties, odorant, and what to do on a leak call", "Cut, thread, and join steel pipe and use gas-rated sealants", "Learn how B149.1 is organised and which parts apply to Class B work", "Practise leak testing and pressure checks with a manometer", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: appliances and venting", items: ["Install water heaters, furnaces, and ranges with proper connectors and shut-offs", "Learn combustion air and Category I and direct vent systems", "Connect dryers, fireplaces, and unit heaters", "Learn the basics of 24 V controls and ignition"] },
    { title: "Year 3: service and troubleshooting", items: ["Diagnose ignition, pressure switch, and flame sensing faults", "Use a combustion analyzer and test for spillage", "Handle condensing furnace venting and condensate", "Communicate findings clearly to customers"] },
    { title: "Year 4 and beyond: loads, planning, and judgment", items: ["Add up appliance loads and check meter and pipe capacity", "Handle permits, documentation, and inspections", "Know the limits of your licence class and when to refer work", "Mentor first-year apprentices and plan towards Class A if you want wider scope"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Check whether your province offers a Red Seal endorsement or its own Class B certificate", "Review the trade standard and take the mock exam on the Practice tests tab", "Write your exam and check the federal completion bonus and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["Anti-tip bracket", "A bracket that stops a range from tipping forward."],
    ["Appliance connector", "A certified flexible connector between a shut-off valve and an appliance."],
    ["B149.1", "CSA Natural Gas and Propane Installation Code."],
    ["Category I", "Appliance venting with negative vent pressure and no condensing."],
    ["Combustion air", "Air supplied to an appliance so gas burns completely."],
    ["Condensate", "Acidic water that forms when flue gases cool in a high-efficiency appliance."],
    ["CSST", "Corrugated stainless steel tubing used for flexible gas piping."],
    ["Direct vent", "A sealed combustion appliance that uses outdoor air and vents outdoors."],
    ["Draft hood", "A device that relieves downdraft and stabilizes draft at a Category I appliance."],
    ["Gas valve", "A valve that opens on demand to supply gas to the burner."],
    ["Heat exchanger", "The surface that moves heat from flue gases into air or water."],
    ["Hot surface igniter", "An electrically heated element that lights the burner."],
    ["Inducer", "A fan that pulls flue gases through a furnace heat exchanger."],
    ["Input rating", "The rate of fuel use of an appliance, in kW or Btu/h."],
    ["Leak detection solution", "A bubble solution used to find gas leaks at joints."],
    ["Manifold pressure", "Gas pressure measured at the burner manifold."],
    ["Manometer", "An instrument for measuring low gas pressures."],
    ["NPT", "National Pipe Taper, the common tapered thread."],
    ["ODS", "Oxygen depletion sensor, a safety feature on unvented heaters."],
    ["OPD", "Overfill prevention device on a propane cylinder valve."],
    ["Pressure switch", "A switch that proves draft before the burner lights."],
    ["Rollout switch", "A thermal safety device that trips if flames roll out of the burner area."],
    ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
    ["Spillage", "Flue gases escaping into a room instead of leaving through the vent."],
    ["Temperature rise", "The supply air temperature minus return air temperature across a furnace."],
    ["Thermocouple", "A junction of two metals that produces a small millivolt signal when heated."],
    ["Vent connector", "The pipe joining an appliance flue outlet to a vent or chimney."],
    ["WHMIS", "Canada's workplace hazardous materials information system."],
    ["Water column (w.c.)", "A unit of low pressure. 1 in w.c. is about 0.249 kPa."]
  ],
  cards: [
    { front: "Valve handle in line with pipe", back: "Open." },
    { front: "1 psi in inches of water column", back: "About 27.7 in w.c." },
    { front: "Typical NG manifold pressure", back: "About 3.5 in w.c. Confirm on the data plate." },
    { front: "Typical propane manifold pressure", back: "About 10 in w.c. Confirm on the data plate." },
    { front: "Appliance load sum", back: "Add every appliance's input rating, then check pipe and meter capacity." },
    { front: "Vent connector slope", back: "Upward toward the vent, commonly at least 20 mm per metre (1/4 in per foot)." },
    { front: "Direct vent means", back: "Sealed combustion with outdoor air in and flue gases out." },
    { front: "Pressure switch proves", back: "That the inducer is creating draft." },
    { front: "Temperature rise", back: "Supply air temperature minus return air temperature." },
    { front: "Who may work on the utility meter?", back: "The utility or authorized persons only." }
  ],
  jobsIntro: "Look for residential heating and gas contractors, appliance and fireplace installers, propane distributors, home service companies, and union pipe trades locals.",
  tips: ["Bring a short resume, your safety tickets, and ID.", "Show you can communicate politely and keep customers' homes clean.", "Visit shops in person when you can, and follow up.", "Ask what your licence class allows before you take on any job."],
  forumTopics: ["Starting out", "Appliance installation and venting", "Service and troubleshooting", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
  reference: [
    {
      title: "Appliance load and gas flow",
      list: [
        "Total load (Btu/h) = sum of the input ratings of all appliances on the piping",
        "Gas flow (ft³/h) = load (Btu/h) ÷ heating value (Btu/ft³)",
        "Example: 210 000 Btu/h ÷ 1000 Btu/ft³ = 210 ft³/h",
        "kW = Btu/h ÷ 3412, and Btu/h = kW × 3412",
        "Compare the total load with the capacity of the piping and the meter before adding an appliance"
      ],
      note: "Pipe capacity depends on pipe size, length, and allowable pressure drop. Use the B149.1 tables or your authority's method."
    },
    {
      title: "Pressure units",
      table: {
        head: ["Unit", "Approximate value"],
        rows: [
          ["1 in w.c.", "0.249 kPa"],
          ["7 in w.c.", "1.7 kPa"],
          ["11 in w.c.", "2.7 kPa"],
          ["1 psi", "6.895 kPa, or about 27.7 in w.c."],
          ["1 kPa", "About 4.0 in w.c."]
        ]
      },
      note: "Typical residential supply is about 7 in w.c. for natural gas and 11 in w.c. for propane. Check data plates."
    },
    {
      title: "Typical gas pressures at residential appliances",
      table: {
        head: ["Gas", "Inlet (typical)", "Manifold (typical)"],
        rows: [
          ["Natural gas", "About 7 in w.c.", "About 3.5 in w.c."],
          ["Propane", "About 11 in w.c.", "About 10 in w.c."]
        ]
      },
      note: "These are typical values. Always set and verify pressures to the appliance data plate."
    },
    {
      title: "Furnace service sequence check (24 V gas furnace)",
      list: [
        "Thermostat calls for heat and the control board starts the inducer",
        "The pressure switch closes, proving draft",
        "The igniter warms, then the gas valve opens",
        "Flame is proven by the flame sensor",
        "After a delay the blower starts. Compare temperature rise to the data plate",
        "A fault at any step tells you which component to test next"
      ]
    },
    {
      title: "Home service safety steps",
      list: [
        "Smell of gas: no switches or phones, leave, call from outside",
        "CO alarm: get everyone to fresh air, call emergency services if people have symptoms",
        "Unsafe appliance: shut off, tag, tell the owner, and report as the authority requires",
        "After every disturbed joint: leak test and check operation",
        "Never bypass a safety control, and never exceed your licence class"
      ]
    },
    {
      title: "Code and standard pointers",
      list: [
        "<strong>CSA B149.1:</strong> Natural Gas and Propane Installation Code",
        "<strong>CSA B149.2:</strong> Propane Storage and Handling Code",
        "<strong>Provincial rules:</strong> define licence classes, permits, input limits for Class B, and inspections",
        "<strong>Appliance data plate and installation instructions:</strong> required by code, and these set clearances and gas pressures"
      ],
      note: "Class B scope, input limits, and Red Seal status depend on your province. Confirm with your provincial authority."
    }
  ]
});
