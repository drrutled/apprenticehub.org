// Refrigeration and Air Conditioning Mechanic: tools, learning media, practice tests, roadmap, and reference.
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
  id: "refrigeration-mechanic",
  store: "refrigeration-mechanic",
  title: "Refrigeration and Air Conditioning Mechanic",
  name: "Refrigeration and Air Conditioning Mechanic",
  short: "refrigeration and air conditioning",
  category: "Refrigeration · HVAC · Controls",
  summary: "Install, commission, maintain, and repair refrigeration, air conditioning, and heat pump systems, from home cooling to cold storage, supermarkets, arenas, and industrial plants.",
  work: "Refrigeration and air conditioning mechanics work with compressors, coils, controls, and refrigerants in homes, stores, restaurants, arenas, and plants. You braze copper lines, evacuate and charge systems, recover refrigerant, test electrical components, and troubleshoot with gauges and meters. The work blends piping, electrical controls, and strict refrigerant handling rules.",
  duration: "Usually 3–5 years (Job Bank), varies by province",
  union: "UA Canada (union) and the Heating, Refrigeration and Air Conditioning Institute of Canada (HRAI)",
  unionUrl: "https://www.uacanada.ca/",
  profileUrl: "https://red-seal.ca/eng/trades/refrig-ac-mech.shtml",
  durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/7533/ca",
  jobSearch: "refrigeration mechanic apprentice",
  journeySearch: "refrigeration and air conditioning mechanic",
  aliases: "refrigeration mechanic hvac air conditioning heat pump cooler freezer chiller refrigerant technician rac 313a",
  tools: [
    "Manifold gauge set (digital or analog)",
    "Vacuum pump and micron gauge",
    "Brazing torch and nitrogen regulator",
    "Clamp meter and multimeter",
    "Refrigerant recovery machine",
    "Electronic leak detector"
  ],
  insight: {
    skills: ["Understanding the refrigeration cycle and heat transfer", "Electrical and controls troubleshooting", "Brazing and clean piping practices", "Careful measurement and record keeping"],
    hazards: ["Refrigerant exposure: liquid frostbite and oxygen displacement, use PPE and ventilation", "High pressure and nitrogen: regulate, relieve, and secure cylinders", "Electrical shock and stored energy in capacitors: lockout and verify dead", "Brazing fire risk and flammable refrigerants: hot work controls and no ignition sources"],
    settings: ["Commercial refrigeration and supermarket contractors", "Residential and commercial HVAC companies", "Arenas, cold storage, and food processing plants", "Mechanical contractors and maintenance departments"]
  },
  toolGroups: [
    {
      title: "Day-one tools, buy once and buy well",
      note: "Professional-grade tools that hold up in the field. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
      items: [
        { name: "Klein or Wera screwdriver and nut driver set", why: "Panels, control boards, and electrical terminals. Insulated drivers are useful around live parts.", search: "Klein Wera screwdriver nut driver set insulated" },
        { name: "Crescent or Knipex adjustable wrenches (8 in and 12 in)", why: "Flare nuts, valves, and mounting hardware. Tight-tolerance jaws do not round fittings.", search: "Knipex Crescent adjustable wrench 8 inch 12 inch" },
        { name: "Refrigeration ratchet wrench", why: "Opens and closes service valves with square stems. A reliable ratchet makes service quicker and safer.", search: "refrigeration service valve ratchet wrench" },
        { name: "Tubing cutter and deburring tool", why: "Square cuts and a clean bore are essential before brazing or flaring.", search: "tubing cutter deburring reamer copper refrigeration" },
        { name: "Flaring and swaging kit", why: "Makes flare joints and swaged connections in soft copper tubing.", search: "flaring swaging tool kit refrigeration copper" },
        { name: "Digital multimeter with capacitance and temperature", why: "Checks voltage, continuity, capacitors, and temperature. Choose a CAT III rated meter.", search: "Fluke Fieldpiece multimeter capacitance temperature HVAC CAT III" },
        { name: "Tape measure and torpedo level", why: "Mounting units, running lines, and checking condensate drain slope.", search: "Milwaukee Stanley FatMax tape measure torpedo level" },
        { name: "Cut-resistant gloves, safety glasses, and CSA-approved safety boots", why: "Sharp fin edges, hot lines, and refrigerant splash. Comfortable, rated PPE is what you will wear.", search: "Mechanix cut resistant gloves CSA safety boots safety glasses" },
        { name: "Insulated gloves and a cold-resistant glove pair", why: "Protect hands from liquid refrigerant frostbite and from freezer work.", search: "refrigerant handling gloves insulated cold storage gloves" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
      items: [
        { name: "Manifold gauge set (digital or analog, with hoses)", why: "Reads system pressures and calculates superheat and subcooling. Match the gauge to the refrigerants you service.", search: "digital manifold gauge set HVAC refrigeration Fieldpiece Testo" },
        { name: "Clamp meter with microamp and capacitance", why: "Measures compressor and fan motor current and run capacitor values.", search: "Fluke Fieldpiece clamp meter HVAC amps microamps" },
        { name: "Clamp-on and probe thermometers", why: "Measure line temperatures for superheat and subcooling, and air temperatures for temperature split.", search: "HVAC clamp thermometer pipe temperature probe set" },
        { name: "Electronic refrigerant leak detector", why: "Finds small leaks. Know its sensitivity and calibration needs.", search: "electronic refrigerant leak detector Inficon Fieldpiece" },
        { name: "Brazing torch kit with regulator and nitrogen purge fitting", why: "Clean brazed joints need a flowing nitrogen purge to prevent scale inside the tube.", search: "brazing torch kit MAP-Pro oxy acetylene Turbotorch nitrogen regulator" },
        { name: "Vacuum pump (5 to 6 cfm) and 1/2 in hoses", why: "Evacuates systems before charging. Large-bore hoses speed the evacuation.", search: "HVAC vacuum pump 5 CFM 6 CFM two stage" },
        { name: "Micron vacuum gauge", why: "The only reliable way to know the system is dry and leak-free before charging.", search: "digital micron gauge vacuum HVAC" },
        { name: "Tool bag with insulated tool set", why: "Keeps meters, gauges, and hand tools protected on the road.", search: "HVAC tool bag Veto Pro Pac technician" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying.",
      items: [
        { name: "Refrigerant recovery machine and recovery cylinders", why: "Required to capture refrigerant instead of venting it. Often company-supplied and must be used with approved cylinders.", search: "refrigerant recovery machine Fieldpiece Yellow Jacket recovery cylinder" },
        { name: "Digital refrigerant scale", why: "Charging by weight and recovery weight checks are common in commercial service.", search: "digital refrigerant charging scale HVAC" },
        { name: "Nitrogen cylinder and regulator for pressure testing", why: "Safe testing of lines and holding charge. Use a regulator with a relief device.", search: "nitrogen regulator HVAC pressure test relief valve gauge" },
        { name: "Anemometer and airflow measurement tools", why: "Check airflow across coils and in ducts to diagnose coils and fans.", search: "digital anemometer HVAC air velocity Testo" },
        { name: "Borescope and thermal imaging camera", why: "Spot hot connections, frozen coils, and hidden problems.", search: "thermal imaging camera HVAC Flir borescope" },
        { name: "Full-body harness and lanyard", why: "For rooftop units and elevated work. Fall protection training comes first.", search: "3M DBI-SALA full body harness CSA" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for drawings, math, and code study. Check with your school and your exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Heat transfer, airflow, and electrical calculations.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Refrigeration and air conditioning textbook for your program", why: "Check your school's course list first. A good textbook covers the cycle, controls, and system types.", search: "refrigeration and air conditioning textbook technician" },
        { name: "Pressure-temperature chart card for common refrigerants", why: "Quick reference for saturation temperatures, as your school and exam rules allow.", search: "refrigerant pressure temperature chart card HVAC" },
        { name: "Mechanical pencil (0.5 mm), such as Pentel GraphGear 1000", why: "Clean notes, sketches of piping, and wiring diagrams.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm" },
        { name: "Graph paper pad", why: "Sketching refrigeration cycles, ladder diagrams, and piping layouts.", search: "graph paper pad 8.5 x 11" },
        { name: "Field notebook (Rite in the Rain)", why: "Record pressures, temperatures, and nameplate data in the field. Weatherproof paper survives job sites.", search: "Rite in the Rain field notebook" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by topic and mark formulas.", search: "binder dividers highlighters" },
        { name: "Colour pencils and a ruler", why: "Colour code high-side, low-side, liquid, and vapour on cycle diagrams.", search: "colored pencils set ruler" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal Program", desc: "Red Seal information, trade standard, and exam preparation.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Codes Canada", desc: "National model codes. Refrigeration installation is also governed by CSA B52 and provincial rules.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
        { name: "CSA Group", desc: "Publisher of CSA B52, the Mechanical Refrigeration Code.", url: "https://www.csagroup.org/" },
        { name: "HRAI", desc: "Heating, Refrigeration and Air Conditioning Institute of Canada, with industry and training information.", url: "https://www.hrai.ca/" },
        { name: "TSSA (Ontario)", desc: "Ontario's technical safety authority for refrigeration and related technical safety rules.", url: "https://www.tssa.org/" },
        { name: "UA Canada", desc: "Union pipe trades training and apprenticeship information.", url: "https://www.uacanada.ca/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local codes.",
      items: [
        { name: "Refrigeration cycle explained", desc: "The four main components and how heat moves through the system.", url: "https://www.youtube.com/results?search_query=refrigeration+cycle+explained+compressor+condenser+evaporator" },
        { name: "Superheat and subcooling", desc: "Measuring and understanding superheat and subcooling.", url: "https://www.youtube.com/results?search_query=superheat+subcooling+explained+HVAC+refrigeration" },
        { name: "Brazing copper with nitrogen purge", desc: "Clean brazed joints in refrigeration lines.", url: "https://www.youtube.com/results?search_query=brazing+copper+refrigeration+nitrogen+purge" },
        { name: "Evacuation and micron gauge", desc: "Pulling a deep vacuum and checking for leaks.", url: "https://www.youtube.com/results?search_query=system+evacuation+micron+gauge+vacuum+decay+test" },
        { name: "Refrigerant recovery procedure", desc: "Recovering refrigerant safely and legally.", url: "https://www.youtube.com/results?search_query=refrigerant+recovery+procedure+recovery+machine+cylinder" },
        { name: "Compressor electrical testing", desc: "Testing windings, capacitors, and contactors.", url: "https://www.youtube.com/results?search_query=compressor+electrical+testing+windings+capacitor+contactor" },
        { name: "Walk-in cooler and freezer service", desc: "Evaporators, defrost, and common faults.", url: "https://www.youtube.com/results?search_query=walk+in+cooler+freezer+service+defrost+evaporator" },
        { name: "Heat pump reversing valve", desc: "How the reversing valve changes cooling and heating mode.", url: "https://www.youtube.com/results?search_query=heat+pump+reversing+valve+explained+defrost" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for refrigeration yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: HVAC and refrigeration apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=HVAC+refrigeration+apprentice+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: HVACR service technician podcast (listen-along)", desc: "Service stories and troubleshooting for the commute.", url: "https://www.youtube.com/results?search_query=HVACR+service+technician+podcast+troubleshooting" },
        { name: "YouTube: commercial refrigeration podcast", desc: "Supermarket, cooler, and freezer system talk.", url: "https://www.youtube.com/results?search_query=commercial+refrigeration+technician+podcast" },
        { name: "YouTube: refrigerant regulations and transitions (audio)", desc: "Understanding refrigerant phase-downs and new refrigerants. Check Canadian rules.", url: "https://www.youtube.com/results?search_query=refrigerant+transition+A2L+regulations+podcast" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, business, and leadership.",
      items: [
        { name: "YouTube: Red Seal refrigeration mechanic exam preparation", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+refrigeration+air+conditioning+mechanic+exam+preparation" },
        { name: "YouTube: industrial refrigeration and ammonia podcast", desc: "Advanced systems and safety in industrial plants.", url: "https://www.youtube.com/results?search_query=industrial+refrigeration+ammonia+podcast" },
        { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
      ]
    }
  ],
  practiceBank: buildBank(7419, {
    1: [
      ["Which four components make up the basic vapour-compression refrigeration cycle?", "Compressor, condenser, metering device, evaporator", ["Pump, boiler, radiator, and a pressure relief valve", "Fan, filter, heater coil, and a room thermostat control", "Compressor, boiler, storage tank, and a shutoff valve"], "These four components move heat from the cold space to the warm space."],
      ["Where does the refrigerant absorb heat in the cycle?", "In the evaporator, as it boils", ["In the condenser, as the vapour is cooled and turns to liquid", "In the compressor discharge line, as the hot gas leaves the shell", "In the filter drier, as the liquid passes through the desiccant"], "The evaporator removes heat from the space or air."],
      ["One ton of refrigeration is equal to:", "12 000 Btu/h, about 3.517 kW", ["1000 Btu/h, about 0.29 kW of continuous cooling", "3412 Btu/h, which is the heat output of one kilowatt", "120 000 Btu/h, about 35.2 kW of continuous cooling"], "It comes from the heat needed to melt one ton of ice in 24 hours."],
      ["On a manifold gauge set, the blue gauge normally reads:", "The low (suction) side", ["The high (discharge) side", "Ambient temperature", "Electrical current"], "Blue is low side and red is high side."],
      ["Which of these should you do before brazing refrigeration lines?", "Flow nitrogen through the tube to prevent scale inside", ["Fill the tube with oxygen so the filler metal flows more freely", "Pressurize the tube with shop air to blow out any loose debris", "Skip the purge for short joints because little scale will form"], "A low-flow nitrogen purge prevents oxide flakes that can plug metering devices."],
      ["Why is it important to avoid releasing refrigerant to the atmosphere?", "It is regulated and can harm the ozone layer or contribute to climate change", ["It is a waste of money only, since refrigerants are harmless to the air", "It is harmless to the atmosphere, but the refrigerant must be reused", "It cleans the system, so a small release after service is routine"], "Federal and provincial rules require proper recovery and handling by trained persons."],
      ["Liquid refrigerant on bare skin can cause:", "Frostbite", ["Heat burns, because the refrigerant leaves the cylinder very hot", "No effect, because refrigerant evaporates before it reaches skin", "Skin dye staining that fades without any tissue damage at all"], "Refrigerant boils off quickly and chills the skin."],
      ["A hazard of refrigerant in a small enclosed space is:", "It can displace oxygen and cause suffocation", ["It adds extra oxygen and makes fires burn more fiercely", "It warms the room quickly and causes heat exhaustion in minutes", "It makes the air dry enough to cause eye and throat irritation"], "Most refrigerants are heavier than air and settle in low areas."],
      ["Heat naturally moves from:", "A warmer object to a cooler one", ["A cooler object to a warmer one, as long as it is well insulated", "Cold to hot with no work, because cold travels toward heat", "Neither direction, because heat stays in the object that holds it"], "A refrigeration system uses energy to move heat from cold to warm."],
      ["68 °F is how many degrees Celsius?", "20 °C", ["36 °C", "10 °C", "30 °C"], "(68 - 32) × 5 ÷ 9 = 20."],
      ["Which gas must NEVER be used to pressure test refrigeration systems?", "Oxygen", ["Nitrogen, regulated down to the required test pressure", "Dry nitrogen with a regulator and a relief valve fitted", "Nitrogen with a trace of refrigerant for leak detection"], "Oxygen mixed with oil can explode violently."],
      ["Lockout/tagout is used to:", "Keep energy sources off while servicing equipment", ["Mark pipes so the refrigerant type is easy to identify", "Order replacement parts that are tracked on the job card", "Label refrigerant cylinders for transport and for storage"], "It prevents unexpected start-up. Always verify dead with a meter."],
      ["Why wear safety glasses when connecting gauge hoses?", "Pressurized refrigerant and oil can spray", ["To see the gauge faces better in bright sunlight on the roof", "To block the light from the sun and from any brazing torch", "They are only needed when brazing, not when using gauges"], "Eye injuries from refrigerant are serious."],
      ["Sensible heat is heat that:", "Changes temperature without changing state", ["Changes liquid to vapour at constant temperature, like boiling", "Is hidden, so a thermometer cannot show that it was added", "Only comes from the sun or from an outdoor condenser fan"], "Latent heat changes state (such as boiling) without changing temperature."],
      ["What does the compressor do?", "Raises the pressure and temperature of refrigerant vapour and moves it through the system", ["Cools the vapour so that it turns back into a liquid", "Condenses the vapour by removing heat to the outdoor air", "Filters the oil and traps moisture from the refrigerant"], "It pumps vapour from the low side to the high side."]
    ],
    2: [
      ["Superheat is:", "The temperature of vapour above its saturation temperature", ["The temperature of liquid below its saturation temperature", "The ambient temperature measured at the condenser air inlet", "The discharge pressure measured at the compressor outlet"], "Superheat at the evaporator outlet confirms only vapour is returning to the compressor."],
      ["Subcooling is:", "The temperature of liquid below its saturation temperature", ["The temperature of vapour above its saturation temperature", "The suction pressure measured at the compressor inlet service port", "The condenser air temperature measured at the coil inlet"], "Subcooling at the condenser outlet shows liquid is fully condensed."],
      ["Saturation temperature at the condenser is 40 °C and the liquid line is 35 °C. The subcooling is:", "5 K", ["75 K", "40 K", "35 K"], "Subcooling = saturation temperature minus actual liquid temperature."],
      ["The thermostatic expansion valve (TXV) mainly:", "Meters refrigerant to maintain evaporator superheat", ["Removes moisture and acid from the liquid line to the evaporator", "Increases refrigerant pressure before it enters the condenser", "Cools the compressor by spraying liquid into the suction line"], "It responds to superheat at the evaporator outlet."],
      ["Evacuating a system is done mainly to remove:", "Moisture and non-condensable gases", ["Refrigerant, so the system can be recharged with a fresh amount", "Compressor oil, so that new oil can be added after the repair", "Dirt and metal particles, which a vacuum pump pulls out of the tubes"], "Moisture and air cause acid, ice, and high head pressure."],
      ["A commonly used target vacuum level before charging is about:", "500 microns or lower, as the manufacturer or procedure requires", ["50 000 microns, which is a rough vacuum", "5 000 000 microns, which is about the same as atmospheric pressure", "No vacuum is needed if the system was purged with nitrogen"], "Hold and check for vacuum rise to confirm the system is dry and tight."],
      ["The filter drier is used to:", "Capture moisture, acid, and debris", ["Add oil to the compressor crankcase during start-up", "Pump refrigerant from the condenser to the evaporator", "Measure the pressure in the liquid line for the technician"], "It protects the metering device and compressor."],
      ["A single-phase compressor winding test shows 4 Ω (C to S), 2 Ω (C to R). The reading between S and R should be about:", "6 Ω", ["2 Ω", "4 Ω", "8 Ω"], "S to R equals the sum of C to S and C to R."],
      ["A run capacitor is mainly used to:", "Improve motor efficiency and provide phase shift while running", ["Pump refrigerant through the liquid line to the evaporator", "Add oil to the compressor while the motor is running", "Heat the crankcase so liquid refrigerant cannot collect there"], "Test capacitors with a meter that reads capacitance after discharging them."],
      ["Zeotropic blends such as R-407C should usually be charged as:", "Liquid, to avoid changing the blend composition", ["Vapour drawn from the top of an upright cylinder, to keep the blend steady", "A mix from any cylinder, since all blends stay uniform in vapour form", "Vapour only, so that the lightest component is added first"], "Liquid charging keeps the blend composition correct."],
      ["Refrigerant cylinder colours: R-410A is typically:", "Rose (pink)", ["Light green, the colour used for R-22 cylinders", "Light blue, the colour used for R-134a cylinders", "Orange, the colour used for R-404A cylinders"], "R-22 is light green, R-134a is light blue, R-404A is orange."],
      ["The low-pressure cutout switch is used to:", "Stop the compressor if suction pressure drops too low", ["Stop the compressor on high discharge temperature or overload", "Increase suction pressure when the evaporator load rises", "Reset a TXV after the superheat has drifted out of range"], "It protects against loss of charge and freeze-ups."],
      ["A defrost cycle in a walk-in freezer removes:", "Frost from the evaporator coil", ["Oil from the compressor, which collects in the crankcase", "Moisture from the compressor shell after a long run time", "Dirt from the condenser coil, which blocks outdoor airflow"], "Frost blocks airflow, so periodic defrost is needed."],
      ["Typical airflow for air conditioning is about:", "400 cfm per ton, about 50 L/s per kW", ["100 cfm per ton, about 13 L/s per kW of cooling", "1000 cfm per ton, about 130 L/s per kW of cooling", "No set airflow, because coil capacity does not depend on it"], "Airflow affects capacity. Check manufacturer data."],
      ["A nitrogen leak test is done by:", "Pressurizing the system with nitrogen to the test pressure and checking with bubble solution or gauge hold", ["Using refrigerant only, charged to the full cylinder pressure", "Using oxygen, because it gives a stronger pressure reading", "Using water, which is pumped into the system to show leaks"], "Never exceed the lowest pressure rating of any component."]
    ],
    3: [
      ["The reversing valve on a heat pump:", "Changes the direction of refrigerant flow between cooling and heating modes", ["Meters refrigerant into the evaporator based on superheat", "Removes moisture and acid from the circulating refrigerant", "Stores extra refrigerant when the system switches modes"], "It swaps the roles of the indoor and outdoor coils."],
      ["Ice forming on an air conditioning evaporator is commonly caused by:", "Low airflow or low refrigerant charge", ["High airflow across the coil that overcools the passing air", "A clean filter that lets too much dust reach the evaporator", "Overcharge only, since extra refrigerant always freezes the coil"], "A low evaporator temperature freezes condensate."],
      ["High head (discharge) pressure may be caused by:", "A dirty condenser, non-condensables, or overcharge", ["Low ambient temperature, which cools the condenser more than usual", "A clean condenser that sheds heat faster than designed", "High airflow across the condenser from a faster fan speed"], "Check the condenser airflow and coil cleanliness first."],
      ["Low suction pressure with high superheat points to:", "Undercharge or a restriction", ["Overcharge, since too much refrigerant raises the suction pressure", "A clean evaporator with plenty of airflow and a normal load", "High load, which raises both the suction pressure and superheat"], "Not enough refrigerant is feeding the evaporator."],
      ["Low superheat and liquid returning to the compressor may cause:", "Slugging and compressor damage", ["Higher efficiency, since the evaporator is fully used", "Improved oil return, since more liquid washes oil back", "No problem, because compressors are designed to handle liquid"], "Liquid is not compressible and can damage valves and rods."],
      ["After a compressor burnout you should:", "Test the oil for acid, clean the system, and replace the filter drier", ["Replace only the compressor and run the system to flush it", "Add more refrigerant and oil so the system self-cleans", "Remove the drier so that the debris can pass through freely"], "Acid and contaminants will destroy a new compressor."],
      ["Components in a walk-in freezer commonly include:", "Defrost heaters, evaporator fans, and door heaters", ["Boilers and radiators that keep the freezer door frames warm", "Humidifiers that add moisture to protect the stored food", "Chimneys and vent hoods that remove heat from the room"], "Heaters prevent frost and ice at doors and drains."],
      ["Oil return in a refrigeration system depends on:", "Adequate refrigerant velocity in the suction line", ["Low velocity in the suction line, which lets the oil drift back", "Warm oil in the sump that flows by gravity to the compressor", "Oversized pipe diameters throughout, to keep the pressure drop low"], "Pipe sizing, traps, and risers support oil return."],
      ["A scroll compressor running backwards on three-phase power may show:", "Noise, low pressure difference, and no cooling", ["Higher efficiency and a quieter running sound than normal", "Strong cooling with a very high pressure difference", "Lower current only, with otherwise normal pressures and cooling"], "Swap two supply leads. Check the phase before starting."],
      ["A 400 L/s airflow with a 10 K temperature change corresponds to about what sensible load?", "4.8 kW", ["48 kW", "0.48 kW", "400 kW"], "Q ≈ 1.2 × 400 × 10 = 4800 W = 4.8 kW."],
      ["A 3 ton air conditioner has a nominal capacity of about:", "10.5 kW", ["3.5 kW, the same as three single-kilowatt heaters", "36 kW, the capacity of a large commercial chiller", "1.2 kW, a little more than a small bar heater"], "3 × 3.517 kW ≈ 10.55 kW."],
      ["Head pressure control devices are used so that:", "The condenser pressure stays high enough in cold weather for the metering device to work", ["Pressure is as low as possible so the compressor uses less power", "Oil is removed from the condenser so it does not foul the coil", "Voltage is raised to the compressor motor during cold weather"], "Low ambient conditions can starve the metering device."],
      ["Pumping down a system:", "Stores the refrigerant in the condenser or receiver", ["Removes oil from the crankcase so it can be changed", "Adds refrigerant to the low side to build up suction pressure", "Heats the evaporator to melt any frost on the fins and tubes"], "A liquid line solenoid valve is closed and the compressor pulls the low side down."],
      ["When recovering refrigerant, a recovery cylinder must not be filled over about:", "80% of its capacity", ["100% of its capacity", "50% of its capacity", "95% of its capacity"], "Space is needed for liquid expansion. Weigh the cylinder."],
      ["A dirty evaporator coil generally results in:", "Reduced airflow, low suction pressure, and possible icing", ["Higher capacity, because dirt adds surface area for heat transfer", "Lower discharge pressure only, with no change to the airflow", "No change, because coils absorb heat the same when dirty"], "Clean coils improve heat transfer."]
    ],
    4: [
      ["Which Canadian standard covers mechanical refrigeration systems?", "CSA B52", ["CSA B139, the installation code for oil-burning equipment", "CSA B149.1, the natural gas and propane installation code", "CSA C22.1, the Canadian Electrical Code for wiring"], "CSA B52 is the Mechanical Refrigeration Code."],
      ["Ammonia (R-717) is classified as:", "Toxic with lower flammability (B2L)", ["Non-toxic and non-flammable (A1), like most common HFCs", "Highly flammable and non-toxic, like propane (A3)", "An ozone-depleting HCFC that is being phased out like R-22"], "Ammonia systems need specific training, ventilation, and detection."],
      ["A2L refrigerants such as R-32 are:", "Mildly flammable and need specific handling procedures", ["Non-flammable, so no special precautions are ever needed", "Highly flammable like propane, with no charge limits", "Toxic like ammonia, and so only used in industrial plants"], "Follow manufacturer and code requirements and avoid ignition sources."],
      ["R-290 (propane) refrigerant is classified as:", "A3, highly flammable", ["A1", "B2L", "A2L"], "A3 refrigerants have strict charge size limits and ignition control rules."],
      ["Compared with common HFC systems, CO2 (R-744) systems operate at:", "Much higher pressures", ["Much lower pressures, so thin-wall copper is acceptable", "About the same pressures, so standard HFC components work fine", "Slightly lower pressures, which suit standard copper tubing"], "Components must be rated for those pressures."],
      ["Ozone depletion potential (ODP) relates to:", "A substance's effect on the ozone layer", ["The flammability of the refrigerant when it leaks into air", "The toxicity of the refrigerant to a person in a small room", "The cost of the refrigerant compared with other refrigerants"], "HFCs have zero ODP but can have high global warming potential (GWP)."],
      ["For a cooling system, heat rejected at the condenser equals:", "Evaporator capacity plus the compressor work input", ["Evaporator capacity only, since the compressor adds no heat", "Compressor work only, since the evaporator heat leaves elsewhere", "Evaporator capacity minus the compressor work input to the system"], "Energy balance: heat in plus work in equals heat out."],
      ["A cooling system produces 10.5 kW of cooling with 3 kW input. Its COP is:", "3.5", ["0.29, found by dividing the input by the output", "7.5, found by subtracting the input from the cooling output", "13.5, found by adding the cooling output and the input"], "COP = 10.5 ÷ 3 = 3.5."],
      ["Staying below the lowest pressure rating of any component is important because:", "Exceeding it during a pressure test can cause rupture", ["It speeds up testing because the system is only partly pressurized", "It has no effect, since any pressure is fine if it holds", "It saves nitrogen, which is the only reason for the limit"], "Use test pressures from the code and equipment data."],
      ["Cascade refrigeration systems are used to:", "Reach very low temperatures using two linked refrigerant circuits", ["Heat water for a building using a single refrigerant circuit", "Store ice overnight so that daytime power use can be reduced", "Filter the air in a cleanroom using two linked fan circuits"], "The low stage condenses into the evaporator of the high stage."],
      ["Defrost methods include:", "Off-cycle, electric, and hot gas", ["Oil flush, vacuum, and nitrogen sweep of the coil", "Brazing, soldering, and welding of the coil fins", "Air balance and fan speed changes with no heat added"], "Choose a method suited to the temperature and application."],
      ["A variable frequency drive (VFD) on a compressor or fan is used to:", "Match capacity to load and save energy", ["Increase supply voltage so the motor makes more torque", "Remove moisture from the refrigerant before it reaches the coil", "Heat the compressor oil before start-up in cold weather"], "Modulating speed reduces cycling and power use."],
      ["Federal and provincial refrigerant rules often require for large systems:", "Leak checks, records of refrigerant added or recovered, and qualified personnel", ["No records, as long as the refrigerant is recovered eventually", "Venting of small leaks, since they do not add up to much", "Use of unlabelled cylinders when the contents are known"], "Requirements vary by system size and jurisdiction."],
      ["A thorough commissioning record includes:", "Pressures, temperatures, superheat, subcooling, amperage, and controls checks", ["Only the invoice and the date the unit was started up", "Photographs of the unit and a sketch of the equipment room", "The tool list and the names of everyone on the crew"], "Records help future troubleshooting and show the system was set up properly."],
      ["Food in cold storage should generally be held at about:", "4 °C or colder (refrigerated) and -18 °C or colder (frozen)", ["10 °C, which is acceptable for all stored foods", "0 °C only, for both fresh and frozen foods", "15 °C, since bacteria only grow above that temperature"], "Safe food holding temperatures are set by food safety rules. Confirm local requirements."]
    ]
  }),
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS, fall protection, and electrical safety; requirements vary)", "Prepare a resume and apply to refrigeration and HVAC contractors and union locals", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: fundamentals, safety, and piping", items: ["Learn the refrigeration cycle, heat transfer, and refrigerant safety", "Cut, flare, swage, and braze copper tubing with nitrogen purge", "Learn lockout/tagout and basic electrical safety", "Learn the ozone depleting substance and halocarbon handling requirements in your province", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: components, electrical controls, and service", items: ["Learn compressors, condensers, evaporators, and metering devices", "Evacuate, charge, and recover refrigerant correctly", "Test motors, capacitors, contactors, and relays", "Measure superheat and subcooling"] },
    { title: "Year 3: systems and troubleshooting", items: ["Service commercial coolers, freezers, and ice machines", "Understand heat pumps, reversing valves, and defrost", "Troubleshoot with pressures, temperatures, and electrical readings", "Work with control systems and sequences of operation"] },
    { title: "Year 4 and beyond: advanced systems and planning", items: ["Work on chillers, multi-compressor racks, and industrial systems", "Handle flammable and toxic refrigerants safely and understand CSA B52", "Plan commissioning, documentation, and energy efficiency improvements", "Mentor first-year apprentices and use the Red Seal standard to find gaps"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Keep your refrigerant handling certification current as your province requires", "Review the Red Seal trade standard and take the mock exam on the Practice tests tab", "Write your exam and check the federal completion bonus and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["A2L", "A refrigerant safety class for lower toxicity and mildly flammable refrigerants."],
    ["Charge", "The amount of refrigerant in a system."],
    ["COP", "Coefficient of performance: cooling output divided by power input."],
    ["Compressor", "The component that raises refrigerant pressure and pumps it through the system."],
    ["Condenser", "The heat exchanger where refrigerant vapour releases heat and becomes liquid."],
    ["Contactor", "An electrical switch that starts and stops the compressor or fan motors."],
    ["Defrost", "A cycle that melts frost from an evaporator coil."],
    ["Evacuation", "Removing air and moisture from a system with a vacuum pump."],
    ["Evaporator", "The heat exchanger where refrigerant boils and absorbs heat."],
    ["Filter drier", "A device that removes moisture, acid, and debris from the refrigerant."],
    ["GWP", "Global warming potential, a measure of a substance's climate impact."],
    ["Head pressure", "The pressure on the high side of the system, at the compressor discharge."],
    ["Latent heat", "Heat absorbed or released when a substance changes state."],
    ["Metering device", "A device such as a TXV or capillary tube that controls refrigerant flow to the evaporator."],
    ["Micron", "A unit used to measure deep vacuum, one thousandth of a millimetre of mercury."],
    ["Non-condensables", "Gases such as air that do not condense and raise head pressure."],
    ["ODP", "Ozone depletion potential, a measure of harm to the ozone layer."],
    ["Pump down", "Storing refrigerant in the condenser or receiver by closing a valve."],
    ["Receiver", "A tank that stores liquid refrigerant."],
    ["Recovery", "Removing refrigerant from a system and storing it in an approved cylinder."],
    ["Reversing valve", "A valve that changes refrigerant flow direction in a heat pump."],
    ["Saturation", "The temperature at which a refrigerant boils or condenses at a given pressure."],
    ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
    ["Sensible heat", "Heat that changes temperature without changing state."],
    ["Subcooling", "Liquid temperature below its saturation temperature."],
    ["Suction line", "The line that carries vapour from the evaporator to the compressor."],
    ["Superheat", "Vapour temperature above its saturation temperature."],
    ["TXV", "Thermostatic expansion valve, which meters refrigerant to hold superheat."],
    ["WHMIS", "Canada's workplace hazardous materials information system."]
  ],
  cards: [
    { front: "One ton of refrigeration", back: "12 000 Btu/h, about 3.517 kW" },
    { front: "Superheat", back: "Vapour temperature minus saturation temperature at the same pressure." },
    { front: "Subcooling", back: "Saturation temperature minus liquid temperature." },
    { front: "Four main components", back: "Compressor, condenser, metering device, evaporator." },
    { front: "Single-phase compressor windings", back: "S to R = C to S + C to R" },
    { front: "Sensible heat of air (metric)", back: "Q (W) ≈ 1.2 × airflow (L/s) × temperature change (K)" },
    { front: "COP", back: "Cooling output ÷ power input, in the same units." },
    { front: "Max recovery cylinder fill", back: "About 80% by weight or volume as marked on the cylinder." },
    { front: "Refrigerant cylinder colours (examples)", back: "R-410A rose, R-22 light green, R-134a light blue, R-404A orange." },
    { front: "Mechanical refrigeration code", back: "CSA B52" }
  ],
  jobsIntro: "Look for commercial refrigeration contractors, HVAC service companies, supermarket and food service maintenance teams, arenas and cold storage, mechanical contractors, and union pipe trades locals.",
  tips: ["Bring a short resume, your safety tickets, and ID.", "Show you are comfortable with electrical and mechanical problem solving.", "Ask about on-call and weekend service expectations in the trade.", "Ask what test instruments the employer supplies and what refrigerant certifications they will help you obtain."],
  forumTopics: ["Starting out", "Refrigeration cycle and troubleshooting", "Electrical controls and compressors", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
  reference: [
    {
      title: "Key formulas",
      list: [
        "Superheat = suction (vapour) line temperature minus saturation temperature at suction pressure",
        "Subcooling = saturation temperature at liquid line pressure minus liquid line temperature",
        "Sensible heat of air (metric): Q (W) ≈ 1.2 × L/s × ΔT (K)",
        "Sensible heat of air (imperial): Q (Btu/h) = 1.08 × cfm × ΔT (°F)",
        "COP = cooling capacity ÷ electrical power input (same units)",
        "Heat rejected at the condenser = evaporator capacity + compressor work",
        "Single-phase compressor windings: S to R = C to S + C to R"
      ]
    },
    {
      title: "Conversions",
      list: [
        "1 ton of refrigeration = 12 000 Btu/h ≈ 3.517 kW",
        "1 kW ≈ 3412 Btu/h",
        "1 psi ≈ 6.895 kPa, and 1 bar = 100 kPa",
        "°C = (°F - 32) × 5 ÷ 9, and °F = °C × 9 ÷ 5 + 32",
        "A temperature difference of 1 K equals 1 °C, or 1.8 °F",
        "1 L/s ≈ 2.12 cfm"
      ]
    },
    {
      title: "Common refrigerants (approximate)",
      table: {
        head: ["Refrigerant", "ASHRAE safety class", "Boiling point at atmospheric pressure", "Notes"],
        rows: [
          ["R-22", "A1", "About -40.8 °C", "HCFC, ozone depleting, being phased out"],
          ["R-134a", "A1", "About -26 °C", "HFC, used in medium temperature and automotive"],
          ["R-410A", "A1", "About -51 °C", "HFC blend, high pressure, rose cylinder"],
          ["R-404A", "A1", "About -46 °C", "HFC blend for low and medium temperature"],
          ["R-32", "A2L", "About -52 °C", "Mildly flammable, lower GWP than R-410A"],
          ["R-290 (propane)", "A3", "About -42 °C", "Highly flammable, limited charge sizes"],
          ["R-717 (ammonia)", "B2L", "About -33 °C", "Toxic, industrial systems"],
          ["R-744 (CO2)", "A1", "Sublimes at about -78 °C at atmospheric pressure", "Very high operating pressures"]
        ]
      },
      note: "Approximate values for study. Always use the manufacturer's data and a current pressure-temperature chart for the refrigerant in the system."
    },
    {
      title: "Evacuation and charging procedure (outline)",
      list: [
        "Pressure test with dry nitrogen to the required test pressure and confirm there are no leaks",
        "Release nitrogen safely and connect a vacuum pump and micron gauge with large-bore hoses",
        "Evacuate to about 500 microns or lower, then isolate and watch for vacuum rise",
        "Charge by weight or by the manufacturer's method, using liquid for blends",
        "Check superheat, subcooling, pressures, current draw, and temperature split",
        "Record all readings and the amount of refrigerant added"
      ],
      note: "Follow the manufacturer's procedure and the refrigerant handling rules in your province."
    },
    {
      title: "Electrical checks on a compressor circuit",
      list: [
        "Lock out and verify dead, and discharge capacitors before testing them",
        "Check supply voltage at the contactor under load, and compare with the nameplate",
        "Check run capacitor value against its rating, and replace if out of tolerance",
        "Check winding resistance, and test each winding to ground for insulation faults",
        "Compare running current with the rated load amps (RLA) on the nameplate",
        "Verify three-phase supply balance and rotation on scroll compressors"
      ]
    },
    {
      title: "Code and standard pointers",
      list: [
        "<strong>CSA B52:</strong> Mechanical Refrigeration Code",
        "<strong>Federal and provincial regulations:</strong> govern refrigerant handling, certification, leak repair, and records",
        "<strong>Canadian Electrical Code (CSA C22.1):</strong> applies to the electrical supply and controls",
        "<strong>Manufacturer instructions:</strong> set refrigerant type, charge, and clearances, especially for flammable refrigerants"
      ],
      note: "Certification, licensing, and Red Seal requirements vary by province. Confirm with your provincial authority."
    }
  ]
});
