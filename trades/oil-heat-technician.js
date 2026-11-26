// Oil Heat System Technician: tools, learning media, practice tests, roadmap, and reference.
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
  id: "oil-heat-technician",
  store: "oil-heat-technician",
  title: "Oil Heat System Technician",
  name: "Oil Heat System Technician",
  short: "oil heat",
  category: "Heating · Fuel Oil · Service",
  summary: "Install, tune, service, and repair oil-fired furnaces, boilers, burners, tanks, and fuel lines, keeping home and building heating systems safe and efficient.",
  work: "Oil heat technicians install and service burners, furnaces, boilers, fuel tanks, and oil piping. A typical call involves cleaning the appliance, replacing the nozzle and filter, testing combustion with an analyzer, and diagnosing ignition or flame problems. Work is in basements and mechanical rooms, often in cold weather, with a strong focus on CSA B139 compliance, spill prevention, and customer communication.",
  duration: "Usually about 3 years (varies by province)",
  union: "Provincial oil heat and fuel associations (check your province)",
  unionUrl: undefined,
  jobSearch: "oil burner technician apprentice",
  journeySearch: "oil heat technician",
  aliases: "oil burner mechanic oil burner technician fuel oil furnace boiler b139 heating oil tank obt",
  tools: [
    "Combustion analyzer and smoke pump",
    "Oil pressure and vacuum gauges",
    "Nozzle wrench and electrode gauge",
    "Multimeter and cad cell tester",
    "Flare and tubing tools",
    "CSA B139 code book"
  ],
  insight: {
    skills: ["Mechanical and electrical troubleshooting", "Careful combustion testing and tuning", "Clean, tidy work in customers' homes", "Spill prevention and environmental awareness"],
    hazards: ["Oil spills: contain, clean up, and report as required", "Soot, hot surfaces, and delayed ignition: follow safe start-up and reset rules", "Carbon monoxide: test flue gases and venting, wear a monitor", "Cold, tight basements and slips on oil: plan access and housekeeping"],
    settings: ["Fuel oil dealers and heating service companies", "Residential and small commercial heating contractors", "Mechanical contractors installing boilers and furnaces", "Institutional and building maintenance departments"]
  },
  toolGroups: [
    {
      title: "Day-one tools, buy once and buy well",
      note: "Professional-grade tools that hold up in dirty, oily basements. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
      items: [
        { name: "Nozzle wrench (3/4 in and 5/8 in)", why: "Removes and installs burner nozzles without damaging threads or the adapter. A thin, accurate wrench matters.", search: "oil burner nozzle wrench 3/4 5/8" },
        { name: "Hex key (Allen) set, metric and imperial", why: "Burner components, air bands, and pump covers use hex screws.", search: "Wera Bondhus hex key set metric imperial" },
        { name: "Crescent or Knipex adjustable wrenches (8 in and 12 in)", why: "Fuel line fittings and flare nuts need good-fitting jaws.", search: "Knipex Crescent adjustable wrench 8 inch 12 inch" },
        { name: "Flare nut (line) wrenches", why: "Hold soft brass and copper flare nuts without rounding them.", search: "flare nut wrench set 3/8 1/2 5/8" },
        { name: "Klein or Wera screwdriver set", why: "Control, cad cell, and electrical terminal screws.", search: "Klein Wera screwdriver set slotted Phillips" },
        { name: "Inspection mirror and bright headlamp", why: "Look at flame, burner head, and the back of the combustion chamber in dark basements.", search: "inspection mirror telescoping LED headlamp" },
        { name: "Oil-resistant gloves and disposable gloves", why: "Fuel oil on skin causes irritation. Change contaminated gloves.", search: "nitrile oil resistant gloves heavy duty disposable" },
        { name: "Safety glasses and CSA-approved safety boots", why: "Oil spray, soot, and slippery floors. Rated, comfortable PPE is what you will wear.", search: "safety glasses CSA safety boots oil resistant sole" },
        { name: "Shop rags, absorbent pads, and a spill kit bag", why: "Every fuel line job needs quick containment for drips and small spills.", search: "oil absorbent pads spill kit small" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
      items: [
        { name: "Oil pump pressure gauge (0 to 400 psi) with adapters", why: "Measures pump pressure at the gauge port to set and verify nozzle pressure.", search: "oil burner pressure gauge 0-400 psi adapter" },
        { name: "Vacuum gauge for oil suction line", why: "Finds restrictions in the suction line such as a clogged filter or kinked tubing.", search: "oil burner vacuum gauge 0-30 inHg" },
        { name: "Electrode gauge and spacing tool", why: "Sets electrode gap and position so ignition is reliable.", search: "oil burner electrode gauge setting tool" },
        { name: "Multimeter with DC microamp range", why: "Tests voltage, continuity, and control signals. Cad cell resistance is tested in ohms.", search: "Fluke Fieldpiece multimeter HVAC true RMS" },
        { name: "Smoke test pump and Bacharach scale", why: "Takes a flue gas sample on filter paper for a smoke spot rating.", search: "Bacharach smoke test pump oil burner scale" },
        { name: "Flaring tool, tubing cutter, and bender", why: "Making oil line connections in copper tubing with reliable flare joints.", search: "flaring tool 3/8 inch copper tubing cutter bender" },
        { name: "Shop vac with fine filter", why: "Clean soot from heat exchangers and combustion chambers.", search: "shop vac fine dust filter HVAC cleaning brush" },
        { name: "Tool bag with oil-proof tray", why: "Contains drips and keeps tools clean.", search: "tool bag rubber bottom tray oil proof" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying.",
      items: [
        { name: "Combustion analyzer (Testo, Bacharach, or similar)", why: "Reads O2, CO, stack temperature, and calculated CO2 and efficiency. Needs regular calibration and sensor replacement.", search: "combustion analyzer Testo Bacharach oil burner" },
        { name: "Digital draft gauge", why: "Measures overfire and flue draft pressures accurately.", search: "digital draft gauge flue pressure" },
        { name: "Borescope or inspection camera", why: "Look inside boiler sections and chimneys for soot, cracks, and corrosion.", search: "borescope inspection camera HVAC" },
        { name: "Nozzle assortment (Delavan, Hago, Danfoss) in common gph and angles", why: "Stocked by most service trucks. Always match the nozzle to the burner and the manufacturer's chart.", search: "oil burner nozzle assortment Delavan Hago Danfoss" },
        { name: "Tank gauge and tank test equipment", why: "For checking tank levels, water in the tank, and tank condition. Usually company-supplied.", search: "fuel oil tank gauge dipstick water finding paste" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for drawings, math, and code study. Check with your school and your exam body about calculator rules before you buy.",
      items: [
        { name: "CSA B139 Installation Code for Oil-Burning Equipment", why: "Main reference for installation, tanks, and piping. Check which edition your province has adopted and whether your school supplies a copy.", search: "CSA B139 installation code oil burning equipment" },
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Nozzle flow, input, efficiency, and unit conversions.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Mechanical pencil (0.5 mm), such as Pentel GraphGear 1000", why: "Clean notes and wiring sketches.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm" },
        { name: "Wiring diagram sketch pad or graph paper", why: "Practise drawing ladder diagrams for burner controls.", search: "graph paper pad 8.5 x 11 ladder diagram" },
        { name: "Field notebook (Rite in the Rain)", why: "Record readings, nozzle sizes, and customer equipment details. Weatherproof paper survives basements.", search: "Rite in the Rain field notebook" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by topic. Highlight code references.", search: "binder dividers highlighters" },
        { name: "Index tabs for your code book", why: "Quickly find tables and clauses, as your school and exam rules allow.", search: "adhesive index tabs book tabs" },
        { name: "Steel ruler and protractor", why: "Layouts and drawings of oil piping and tank locations.", search: "Staedtler drafting triangle set protractor steel ruler" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal Program", desc: "Red Seal information, trade standard, and exam preparation.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Codes Canada", desc: "National model codes. Oil installation is governed by CSA B139 and provincial adoption.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
        { name: "CSA Group", desc: "Publisher of the B139 oil-burning equipment installation code.", url: "https://www.csagroup.org/" },
        { name: "TSSA (Ontario)", desc: "Ontario's technical safety authority for fuels, including oil burner technician certification.", url: "https://www.tssa.org/" },
        { name: "Technical Safety BC", desc: "British Columbia's safety authority for fuel-burning equipment.", url: "https://www.technicalsafetybc.ca/" },
        { name: "HRAI", desc: "Heating, Refrigeration and Air Conditioning Institute of Canada, with industry and training information.", url: "https://www.hrai.ca/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local codes.",
      items: [
        { name: "Oil burner basics", desc: "Parts and operation of a residential oil burner.", url: "https://www.youtube.com/results?search_query=oil+burner+basics+how+it+works+residential" },
        { name: "Oil burner nozzle replacement", desc: "Changing nozzles and setting electrodes.", url: "https://www.youtube.com/results?search_query=oil+burner+nozzle+replacement+electrode+setting" },
        { name: "Oil furnace annual service", desc: "A full tune-up and cleaning procedure.", url: "https://www.youtube.com/results?search_query=oil+furnace+annual+service+tune+up+technician" },
        { name: "Combustion testing oil burner", desc: "Using a combustion analyzer and smoke tester.", url: "https://www.youtube.com/results?search_query=oil+burner+combustion+test+smoke+test+CO2" },
        { name: "Primary control and cad cell troubleshooting", desc: "Diagnosing no-flame lockouts.", url: "https://www.youtube.com/results?search_query=oil+burner+primary+control+cad+cell+troubleshooting" },
        { name: "Bleeding air from an oil line", desc: "Priming single-pipe and two-pipe systems.", url: "https://www.youtube.com/results?search_query=bleed+air+oil+burner+fuel+pump+single+pipe+two+pipe" },
        { name: "Oil tank installation and safety", desc: "Tank placement, venting, and spill prevention.", url: "https://www.youtube.com/results?search_query=heating+oil+tank+installation+vent+alarm+safety" },
        { name: "Oil fired boiler service", desc: "Service steps specific to hydronic boilers.", url: "https://www.youtube.com/results?search_query=oil+fired+boiler+service+cleaning+tune+up" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for oil heat yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: oil heat technician podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=oil+heat+technician+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: oil burner service call stories (listen-along)", desc: "Service lessons and troubleshooting for the commute.", url: "https://www.youtube.com/results?search_query=oil+burner+service+call+troubleshooting+podcast" },
        { name: "YouTube: combustion efficiency talks (audio)", desc: "Understanding CO2, O2, stack temperature, and efficiency.", url: "https://www.youtube.com/results?search_query=oil+burner+combustion+efficiency+explained+podcast" },
        { name: "YouTube: heating oil industry podcast", desc: "Fuel delivery, bioheat, and industry trends. Judge fit for your province.", url: "https://www.youtube.com/results?search_query=heating+oil+industry+podcast+bioheat" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, business, and leadership.",
      items: [
        { name: "YouTube: oil heat exam preparation talk-through", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=oil+burner+technician+exam+preparation" },
        { name: "YouTube: running a heating service company podcast", desc: "Pricing, service agreements, and growing a service business.", url: "https://www.youtube.com/results?search_query=heating+service+company+business+podcast" },
        { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
      ]
    }
  ],
  practiceBank: buildBank(6311, {
    1: [
      ["Which CSA standard series covers installation of oil-burning equipment in Canada?", "CSA B139", ["CSA B149.1", "CSA B52", "CSA C22.1"], "B139 covers oil-burning equipment. B149 is for gas, B52 for refrigeration, and C22.1 for electrical."],
      ["Before burning, heating oil is turned into:", "A fine spray of droplets by the nozzle", ["A solid block", "A cold vapour by a heater", "A liquid stream"], "Atomizing oil into droplets lets it mix with air and burn."],
      ["A typical residential oil burner pump pressure is about:", "100 psi (about 690 kPa)", ["10 psi", "1 psi", "1000 psi"], "Nozzle gph ratings are normally given at 100 psi."],
      ["What should never be added to a heating oil tank?", "Gasoline", ["Furnace oil", "Approved fuel additive", "Heating oil from a licensed supplier"], "Gasoline lowers the flash point and creates a fire and explosion hazard."],
      ["Which instrument rates smoke from an oil burner on a 0 to 9 scale?", "A smoke tester using the Bacharach scale", ["A manometer", "A draft gauge", "A cad cell"], "A sample is pulled through filter paper and compared with a scale."],
      ["A cad cell on an oil burner senses:", "Light from the flame", ["Oil pressure", "Room temperature", "Gas flow"], "It is a light-sensitive resistor that proves flame to the primary control."],
      ["If heating oil spills during a fill or repair, you should first:", "Stop the source, contain the spill, and report as required", ["Rinse it into a drain", "Cover it with a rug", "Ignore small spills"], "Spills can contaminate soil and water, and reporting rules vary by province."],
      ["1 Imperial gallon is about how many litres?", "4.546 L", ["3.785 L", "1 L", "5.5 L"], "A US gallon is about 3.785 L, and an Imperial gallon is about 4.546 L."],
      ["The tank vent pipe is there to:", "Let air out when filling and in when oil is drawn out", ["Add oil to the burner", "Measure oil level", "Return oil to the burner"], "The vent also supports a whistle or alarm that signals when the tank is nearly full."],
      ["Oil-line connections on soft copper tubing normally use:", "Flare fittings", ["Press fittings", "PVC cement", "Pipe dope on a plain union"], "Flare joints are the usual choice for oil tubing."],
      ["An emergency shut-off switch for an oil burner should be:", "Easily accessible and located away from the appliance as required by the code", ["Hidden behind the furnace", "Removed after installation", "Placed only inside the combustion chamber"], "It lets someone shut the burner off quickly in an emergency."],
      ["Which product provides hazard and first-aid information for fuel oil?", "Safety Data Sheet (SDS)", ["A thermostat manual", "A pump label", "A weather report"], "WHMIS requires an SDS for hazardous products such as fuel oil."],
      ["Lockout/tagout is used to:", "Keep energy sources off while servicing equipment", ["Mark nozzles", "Order parts", "Label tank sizes"], "Remove the power and secure it before opening electrical or moving parts."],
      ["Carbon monoxide is dangerous because it is:", "Odourless and toxic", ["Strongly scented", "Harmless in small spaces", "Only found with gas"], "Oil appliances can also produce CO if combustion is poor or venting fails."],
      ["The unit gph on a nozzle stands for:", "Gallons per hour at a stated pressure", ["Gauge pressure holder", "Gas pressure height", "Gallons per heater"], "It is flow in US gallons per hour at the rated pressure, normally 100 psi."]
    ],
    2: [
      ["In a single-pipe oil system:", "One line supplies oil from the tank and the pump must be bled of air", ["Oil returns to the tank by a second line", "No pump is used", "Air is injected into the line"], "In a single-pipe system the air must be bled out at the pump. Two-pipe systems return excess oil and air to the tank."],
      ["A two-pipe oil system returns:", "Excess oil and entrained air to the tank", ["Water to the pump", "Smoke to the chimney", "Gas to the pipe"], "The return line helps purge air from the supply."],
      ["Nozzle spray patterns include:", "Hollow, solid, and semi-solid", ["Square, round, and flat", "Hot, cold, and warm", "Long, short, and medium only"], "The pattern should match the burner head design and manufacturer's recommendation."],
      ["A common electrode gap is about:", "3 mm (1/8 in), but follow the manufacturer's setting", ["20 mm", "0.1 mm", "50 mm"], "Gap and position affect ignition. Use the burner manufacturer's specification."],
      ["An oil burner ignition transformer typically has a secondary output of about:", "10 000 volts", ["24 volts", "600 volts", "100 000 volts"], "It steps up line voltage to jump the electrode gap."],
      ["A cad cell shows what when it sees a flame?", "Low resistance", ["Infinite resistance", "High voltage", "Open circuit"], "Resistance drops when light hits the cell. In the dark it is very high."],
      ["A primary control locks out if:", "Flame is not proven within its safety timing", ["The thermostat is satisfied", "The tank is full", "The nozzle is new"], "Lockout stops oil flow when ignition fails."],
      ["The barometric draft control regulates:", "Draft in the flue by admitting room air", ["Oil pressure", "Water level", "Burner motor speed"], "It keeps draft steady despite wind and chimney temperature changes."],
      ["Overfire draft (in the combustion chamber) is typically:", "Slightly negative, commonly about -0.02 in w.c.", ["Strongly positive", "Zero always", "-2 in w.c."], "Use the manufacturer's recommended value."],
      ["A 0.75 gph nozzle at 100 psi gives an input of about:", "104 000 Btu/h", ["10 400 Btu/h", "75 000 Btu/h", "138 500 Btu/h"], "Fuel oil has about 138 500 Btu per US gallon. 0.75 × 138 500 is about 103 900 Btu/h."],
      ["The oil filter in the supply line is changed to:", "Remove dirt and water that clog the nozzle", ["Heat the oil", "Reduce draft", "Increase pressure"], "A clean filter and strainer protect the pump and the nozzle."],
      ["The air band or shutter on the burner adjusts:", "The amount of combustion air", ["The oil pressure", "The electrode gap", "The thermostat"], "Adjust air with a combustion analyzer, not by eye."],
      ["The smoke test sample is taken from:", "The flue pipe ahead of the draft regulator", ["The oil tank", "The room air", "The pump"], "Take the sample where flue gas is undiluted by the draft control air."],
      ["A burner head's job is to:", "Shape the air flow so it mixes well with the oil spray", ["Store oil", "Cool the flue", "Vent the tank"], "The head creates turbulence for stable combustion."],
      ["Fuel oil is usually stored:", "In a certified tank installed to the code", ["In any plastic barrel", "In an unlabelled container", "Under the furnace without support"], "Tanks must meet the standards and installation rules of B139 and your province."]
    ],
    3: [
      ["Residential oil burners are commonly tuned to a smoke spot of:", "A trace to 1 on the Bacharach scale, or per the manufacturer", ["9", "5 to 7", "No testing is required"], "Low smoke keeps heat exchangers clean and efficiency up."],
      ["Opening the burner air band more generally causes the CO2 reading to:", "Go down", ["Go up", "Stay exactly the same", "Become negative"], "More excess air dilutes CO2 and raises O2."],
      ["A very high stack temperature can indicate:", "A sooted heat exchanger, over-firing, or excess firing rate", ["A cleaner heat exchanger", "A low oil level", "A cold house"], "Check the nozzle size, pressure, and cleanliness."],
      ["Net stack temperature is:", "Flue gas temperature minus combustion air (room) temperature", ["Flue gas temperature plus room temperature", "Outdoor temperature only", "Water temperature"], "It is used with O2 or CO2 to calculate combustion efficiency."],
      ["A vacuum gauge on the suction line reading higher than normal suggests:", "A restriction such as a plugged filter or kinked tubing", ["A cleaner filter", "A full tank", "Too much draft"], "Higher vacuum means the pump is working harder to pull oil."],
      ["Puff-back or soft explosions in an oil burner are often caused by:", "Delayed ignition", ["Fast ignition", "A new filter", "A full tank"], "Oil vapour builds up if the ignition is late and then ignites suddenly."],
      ["Which can cause delayed ignition?", "Poor electrode setting or a weak spark", ["A clean nozzle", "A correct pressure", "A fresh filter"], "Check electrodes, transformer, nozzle, and draft."],
      ["Water at the bottom of the oil tank can cause:", "Filter plugging, corrosion, and flame-out", ["Higher heat", "Lower oil usage", "No effects"], "Water settles below the oil and may be drawn into the pump if the suction is low."],
      ["After a lockout, the primary control reset should normally be pressed:", "No more than once, then find the cause", ["Repeatedly until it lights", "Never, ignore it", "Ten times"], "Repeated resets can flood the chamber with oil and create a hazard."],
      ["Nozzles are commonly replaced:", "At every annual service", ["Only when the burner stops", "Every ten years", "Never"], "Nozzles wear and partially clog. A new nozzle supports good spray quality."],
      ["In cold weather, heating oil can have problems because:", "It can thicken and wax at low temperatures", ["It becomes a gas", "It stops burning at any temperature", "It turns clear"], "Outdoor tanks and lines may need winter blends or additives per the supplier."],
      ["A boiler low water cutoff:", "Prevents the burner from firing when water level is too low", ["Shuts the boiler on high temperature only", "Controls the flue draft", "Measures oil pressure"], "It protects the boiler from overheating without water."],
      ["Heat exchanger cleaning involves:", "Brushing and vacuuming soot from flue passages", ["Painting the surfaces", "Adding water", "Replacing the oil line"], "Soot insulates heat transfer surfaces and wastes fuel."],
      ["An oil pump cutoff pressure test checks that:", "The pump stops oil flow cleanly when the burner shuts off", ["The motor is cool", "The filter is clean", "The tank is full"], "A pump that does not cut off properly can cause nozzle drip and smoky starts."],
      ["Efficiency from an analyzer is based on:", "O2 or CO2 and net stack temperature", ["Oil colour", "Furnace age only", "Chimney height only"], "Lower stack temperature and the right excess air improve steady-state efficiency."]
    ],
    4: [
      ["Doubling nozzle pressure increases oil flow by about:", "41%", ["100%", "10%", "50%"], "Flow varies with the square root of pressure, and √2 is about 1.414."],
      ["A 1.00 gph nozzle at 100 psi gives an input of about:", "138 500 Btu/h", ["13 850 Btu/h", "100 000 Btu/h", "277 000 Btu/h"], "Fuel oil is about 138 500 Btu per US gallon."],
      ["Firing rate for a replacement burner should be based on:", "The heat loss of the building and the appliance rating", ["The old nozzle size only", "The biggest nozzle available", "The tank size"], "Oversizing causes short cycling, soot, and poor efficiency."],
      ["Before putting a new oil installation into service, you must:", "Check for leaks, set up combustion, and test safety controls", ["Light it and leave", "Only check the thermostat", "Skip combustion testing"], "Commissioning includes pressure, draft, and combustion tests plus safety checks."],
      ["Testing a primary control's safety function means:", "Verifying it locks out within its safety timing when flame is not proven", ["Bypassing it", "Resetting it quickly", "Removing the cad cell permanently"], "Safety tests confirm the system fails safe."],
      ["A burner that runs but produces no flame may have:", "No oil flow due to air in the line, a plugged nozzle, or a pump fault", ["A new thermostat", "A clean filter", "A good igniter"], "Check pressure, vacuum, nozzle, and ignition in a logical order."],
      ["Underground oil tanks are a particular concern because:", "Leaks can contaminate soil and groundwater and are regulated", ["They are always safe", "They never corrode", "They are lighter"], "Check provincial rules for inspection, removal, and reporting."],
      ["After a spill, a technician should record:", "The amount, location, cleanup steps, and any report made", ["Only the customer's name", "Nothing", "The tank colour"], "Records and reporting meet legal and insurance requirements."],
      ["Heating oil blended with biodiesel requires:", "Confirming that the equipment and supplier approve the blend", ["No checks", "Doubling the nozzle size", "Removing the filter"], "Approved blend levels and compatibility vary by manufacturer."],
      ["An oversized chimney on a modern oil furnace can cause:", "Cooler flue gases, poor draft, and condensation", ["Higher efficiency", "A smaller fire", "No issues"], "A liner may be needed to restore proper flue conditions."],
      ["For a mid-efficiency retrofit, a flame retention head burner generally gives:", "A more stable flame and better combustion than older burners", ["A bigger flame", "More smoke", "Lower oil pressure"], "Better mixing allows lower excess air and higher efficiency."],
      ["A good record of service includes:", "Readings for CO2, O2, smoke, stack temperature, draft, and nozzle size", ["A photo of the tank", "Only the invoice", "Nothing"], "Records support later troubleshooting and show the work was done to standard."],
      ["A nozzle that is partly plugged will usually cause:", "A distorted spray, a smoky or uneven flame, and possibly a pressure that reads normal", ["A cleaner flame", "Lower stack temperature only", "No change"], "Dirt in the nozzle disturbs atomization even when pump pressure is correct, so replace the nozzle rather than clean it."],
      ["If a customer has a CO alarm sounding near an oil furnace, you should first:", "Get occupants out to fresh air and call emergency services if symptoms are present", ["Silence it and continue", "Restart the furnace", "Block the flue"], "Occupant safety comes before investigation."],
      ["The burner's air supply in a small mechanical room is:", "Provided by code-required openings or ducts sized to the appliance", ["Optional", "Always from the flue", "Not needed for oil"], "Combustion needs adequate air, so confirm openings against the code and the appliance data."]
    ]
  }),
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements and certification rules with your provincial or territorial apprenticeship and safety authority", "Get the safety training employers ask for (commonly WHMIS, fall protection, and customer service basics; requirements vary)", "Prepare a resume and apply to fuel oil dealers, heating contractors, and service companies", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: safety, fuel, and burner basics", items: ["Learn fuel oil properties, spill response, and lockout/tagout", "Learn burner parts: pump, motor, nozzle, electrodes, head, and controls", "Make flare connections and replace filters and nozzles", "Learn the layout of CSA B139", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: ignition, controls, and fuel systems", items: ["Set electrodes, check ignition transformers, and test cad cells", "Learn single-pipe and two-pipe oil systems and how to bleed air", "Learn primary controls, aquastats, and wiring diagrams", "Install and inspect tanks, vents, and fill pipes"] },
    { title: "Year 3: combustion, venting, and heating systems", items: ["Use a combustion analyzer, draft gauge, and smoke tester", "Understand draft, chimneys, and venting for oil appliances", "Service furnaces and hydronic boilers and their safety controls", "Diagnose delayed ignition and no-flame faults"] },
    { title: "Year 4 and beyond: advanced service and planning", items: ["Size and retrofit equipment based on heat loss", "Handle complex troubleshooting and efficiency upgrades", "Plan installations, permits, and documentation", "Mentor first-year apprentices and use the Red Seal standard to find gaps"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade standard and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement and your provincial certificate", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["Aquastat", "A control that senses boiler water temperature and switches the burner."],
    ["Atomize", "To break liquid oil into fine droplets with a nozzle."],
    ["B139", "CSA series of installation codes for oil-burning equipment."],
    ["Bacharach scale", "A 0 to 9 smoke spot scale for oil burner flue gases."],
    ["Barometric damper", "A flue damper that admits room air to keep draft steady."],
    ["Bleeding", "Removing trapped air from the oil pump and lines."],
    ["Burner head", "The part that shapes air flow and mixes it with the oil spray."],
    ["Cad cell", "A light-sensitive resistor that proves flame."],
    ["CO2", "Carbon dioxide percentage in flue gas, used to judge combustion."],
    ["Combustion analyzer", "An instrument that measures O2, CO, and flue temperature."],
    ["Delayed ignition", "Oil vapour igniting late, which can cause a puff-back."],
    ["Draft", "The pressure difference that moves flue gases up a vent."],
    ["Electrode", "A metal rod that carries the spark that lights the oil spray."],
    ["Excess air", "Air supplied beyond the amount needed for combustion."],
    ["Flare fitting", "A tubing joint made by flaring the end of the tube."],
    ["Flue gas", "The combustion products leaving an appliance."],
    ["gph", "US gallons per hour, used to rate nozzle flow at a given pressure."],
    ["Ignition transformer", "A step-up transformer that makes the high voltage for the spark."],
    ["Net stack temperature", "Flue gas temperature minus combustion air temperature."],
    ["Nozzle", "A precision part that atomizes oil into a spray pattern."],
    ["Overfire draft", "Draft measured in the combustion chamber."],
    ["Primary control", "The main burner control that starts the sequence and proves flame."],
    ["Puff-back", "A small explosion caused by delayed ignition."],
    ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
    ["Single-pipe system", "An oil supply with only one line from tank to pump."],
    ["Spill", "Release of oil to the environment, subject to reporting rules."],
    ["Two-pipe system", "An oil supply with a supply line and a return line."],
    ["Vacuum gauge", "A gauge that reads suction in the oil line, in inches of mercury."],
    ["WHMIS", "Canada's workplace hazardous materials information system."]
  ],
  cards: [
    { front: "Oil installation code (Canada)", back: "CSA B139 series" },
    { front: "Typical burner pump pressure", back: "About 100 psi (690 kPa)" },
    { front: "Heat content of fuel oil", back: "About 138 500 Btu per US gallon (about 38 MJ/L)" },
    { front: "Input from a nozzle", back: "gph × 138 500 Btu/h (at 100 psi)" },
    { front: "Flow vs pressure", back: "Flow varies with the square root of pressure." },
    { front: "Net stack temperature", back: "Flue gas temperature minus room temperature." },
    { front: "Smoke test scale", back: "Bacharach, 0 to 9. Aim for a trace to 1 unless the manufacturer says otherwise." },
    { front: "What does a cad cell sense?", back: "Light from the flame. Resistance drops when flame is present." },
    { front: "Single-pipe vs two-pipe", back: "Two-pipe systems return oil and air to the tank. Single-pipe systems must be bled." },
    { front: "After a lockout", back: "Reset once at most, then find the cause." }
  ],
  jobsIntro: "Look for fuel oil dealers, heating service companies, residential and commercial heating contractors, mechanical contractors, and building maintenance departments.",
  tips: ["Bring a short resume, your safety tickets, and ID.", "Show that you are comfortable with dirty, hands-on work and early starts in winter.", "Visit shops and dealers in person when you can, and follow up.", "Ask what test instruments and tools the employer supplies before buying your own."],
  forumTopics: ["Starting out", "Burner setup and combustion testing", "Oil tanks and fuel lines", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
  reference: [
    {
      title: "Key formulas",
      list: [
        "Input (Btu/h) = nozzle gph × 138 500 (at the rated pressure)",
        "Flow at another pressure = rated gph × √(new pressure ÷ rated pressure)",
        "Net stack temperature = flue gas temperature minus room air temperature",
        "Temperature rise (furnace) = supply air temperature minus return air temperature",
        "Input (kW) ≈ Btu/h ÷ 3412",
        "Fuel use per hour (US gal) = input (Btu/h) ÷ 138 500"
      ]
    },
    {
      title: "Conversions",
      list: [
        "1 US gallon ≈ 3.785 L, and 1 Imperial gallon ≈ 4.546 L",
        "1 psi ≈ 6.895 kPa, and 1 in w.c. ≈ 0.249 kPa",
        "1 inch of mercury (Hg) ≈ 3.386 kPa",
        "1 kW ≈ 3412 Btu/h",
        "Fuel oil heat content: about 138 500 Btu per US gallon, or about 38 MJ/L"
      ]
    },
    {
      title: "Nozzle flow at common pressures (example 1.00 gph at 100 psi)",
      table: {
        head: ["Pump pressure", "Approximate flow (gph)", "Approximate input (Btu/h)"],
        rows: [
          ["100 psi (690 kPa)", "1.00", "138 500"],
          ["140 psi (965 kPa)", "1.18", "163 800"],
          ["200 psi (1380 kPa)", "1.41", "195 900"],
          ["50 psi (345 kPa)", "0.71", "97 900"]
        ]
      },
      note: "Flow follows the square root of pressure. Always stay within the burner manufacturer's allowed pressure range."
    },
    {
      title: "Annual service checklist (typical)",
      list: [
        "Check for leaks and signs of oil on the floor, tank, and lines",
        "Replace the nozzle and the oil filter, and clean the pump strainer",
        "Clean and inspect the burner head, electrodes, and air tube",
        "Clean the heat exchanger or boiler passages and the flue pipe",
        "Check the barometric damper and chimney connection",
        "Set the gap and position of electrodes",
        "Test pump pressure, cutoff, and vacuum",
        "Take combustion readings (smoke, CO2 or O2, stack temperature, draft) and record them",
        "Test safety controls, such as the primary control lockout and the high limit"
      ]
    },
    {
      title: "Troubleshooting guide: burner will not start or lights poorly",
      table: {
        head: ["Symptom", "Check first"],
        rows: [
          ["No motor run", "Power, emergency switch, thermostat, limit controls, primary control"],
          ["Motor runs, no spark", "Ignition transformer, electrodes, wiring, primary control output"],
          ["Spark but no flame", "Oil supply, filter, pump pressure, nozzle, air in the line, tank level and water"],
          ["Flame, then lockout", "Cad cell and its view, flame quality, nozzle, air setting"],
          ["Smoky or delayed ignition", "Electrode position, nozzle spray, draft, combustion air, pump cutoff"]
        ]
      },
      note: "Reset the primary control only once, then find the cause."
    },
    {
      title: "Code and standard pointers",
      list: [
        "<strong>CSA B139 series:</strong> installation code for oil-burning equipment, including tanks and fuel piping",
        "<strong>Provincial regulations:</strong> licensing, permits, inspections, and spill reporting",
        "<strong>Equipment data plates and manufacturer instructions:</strong> set the nozzle, pressure, clearances, and venting",
        "<strong>WHMIS:</strong> handling of fuel oil, cleaners, and additives, with SDSs available"
      ],
      note: "Requirements for certification and the Red Seal endorsement vary by province. Confirm with your provincial authority."
    }
  ]
});
