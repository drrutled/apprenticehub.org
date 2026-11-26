// Steamfitter/Pipefitter guide. Practice questions are original study aids, not official Red Seal exam questions.

const pipefitBank = (rows) => rows.map(([q, ok, bad, explain], i) => {
  const answer = (i * 3 + 3) % 4;
  const options = [...bad];
  options.splice(answer, 0, ok);
  return { q, options, answer, explain };
});

registerTrade({
  id: "steamfitter-pipefitter",
  store: "steamfitter-pipefitter",
  title: "Steamfitter/Pipefitter",
  name: "Steamfitter/Pipefitter",
  short: "steamfitting and pipefitting",
  category: "Construction · Industrial · Piping",
  summary: "Fabricate, install, and maintain high-pressure and high-temperature piping for steam, hydronic, process, and industrial systems, working from isometric drawings and pressure piping codes.",
  work: "Steamfitters and pipefitters lay out, cut, fit, weld, and flange steel and other alloy pipe for heating plants, process facilities, power stations, refrigeration plants, and large commercial buildings. They set pumps, valves, and equipment, support and align the piping, and pressure test it. Work ranges from clean mechanical rooms to outdoor plants and shutdowns, and it often involves welding and rigging.",
  duration: "Usually about 4 to 5 years, varies by province",
  union: "UA Canada (United Association)",
  unionUrl: "https://www.uacanada.ca/",
  jobSearch: "pipefitter apprentice",
  journeySearch: "steamfitter pipefitter",
  aliases: "pipe fitter steam fitter industrial piping welder process piping boiler hydronic refrigeration pressure piping flange",
  tools: [
    "Pipe wrenches (14 in and 18 in)",
    "Tape measure and combination square",
    "Pipe fitter's level and wrap-around",
    "Pipe stands and chain vise",
    "Welding helmet, gloves, and hand tools",
    "Hard hat, safety glasses, and CSA boots"
  ],
  insight: {
    skills: [
      "Strong math: fractions, trigonometry, and offsets",
      "Reading isometrics, P&IDs, and specifications",
      "Hand skills for welding, fitting, and rigging",
      "Problem solving and careful, safe work habits"
    ],
    hazards: [
      "High-pressure and hot systems: isolate, drain, depressurize, and lock out before opening",
      "Hot work and welding: permits, fire watch, and ventilation",
      "Confined spaces: permits, atmosphere testing, and rescue plan",
      "Rigging and heavy pipe: use rated lifting equipment and stay clear of loads"
    ],
    settings: [
      "Industrial plants, refineries, and power stations",
      "Commercial and institutional mechanical rooms",
      "Heating, cooling, and district energy systems",
      "Shop fabrication and shutdown maintenance crews"
    ]
  },
  toolGroups: [
    {
      title: "Day-one tools, buy once and buy well",
      note: "Professional-grade tools that hold their accuracy for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
      items: [
        { name: "RIDGID 14 in and 18 in pipe wrenches", why: "Forged hook jaws grip steel pipe and fittings without slipping. A staple for threaded and fitted pipe.", search: "RIDGID 14 inch 18 inch pipe wrench" },
        { name: "Milwaukee or Stanley FatMax tape measure (25 ft / 7.5 m)", why: "A wide, stiff blade and sturdy hook for accurate layout and takeoffs. Choose one with metric and imperial markings.", search: "Stanley FatMax 7.5 m 25 ft tape measure metric" },
        { name: "Combination square and speed square", why: "Check squareness of cuts and layout fit-up on steel pipe and flanges.", search: "Starrett combination square Swanson speed square" },
        { name: "Wrap-around pipe marker (pipe wrap) and soapstone", why: "Marks a true square line around the pipe for cutting. Soapstone shows on hot, dirty steel.", search: "pipe wrap around marker soapstone holder" },
        { name: "Torpedo level and pipe level", why: "Set pipe to grade and plumb. A magnetic vial grips steel pipe.", search: "magnetic torpedo level pipe level Milwaukee" },
        { name: "Adjustable wrenches (10 in and 15 in) and combination wrench set", why: "Flange bolting, unions, and equipment connections demand wrenches that fit precisely.", search: "Crescent adjustable wrench 10 inch 15 inch Gearwrench combination wrench set" },
        { name: "Cut-resistant gloves and leather work gloves", why: "Sharp edges, hot pipe, and slag. Keep separate pairs for rigging and for welding.", search: "cut resistant gloves leather TIG welding gloves" },
        { name: "Safety glasses, face shield, and hearing protection", why: "Grinding, cutting, and compressed air demand eye, face, and hearing protection every day.", search: "safety glasses face shield CSA hearing protection earmuffs" },
        { name: "CSA safety boots with metatarsal guard and a sturdy sole", why: "Heavy pipe, hot work, and uneven site conditions. A leather upper handles sparks and slag.", search: "CSA safety boots metatarsal guard leather welding" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson or foreman what holds up on your sites.",
      items: [
        { name: "Auto-darkening welding helmet (Miller, Lincoln, or 3M Speedglas)", why: "A good lens and reliable auto-darkening protect your eyes and help you see the puddle on root passes.", search: "Miller Lincoln 3M Speedglas auto darkening welding helmet" },
        { name: "Welding jacket, sleeves, and welding gloves", why: "Flame-resistant gear protects against spatter and burns. Leather suits tolerate overhead work.", search: "flame resistant welding jacket leather sleeves MIG TIG gloves" },
        { name: "Angle grinder (4-1/2 in) with grinding and flap discs", why: "Bevelling, cleaning weld joints, and removing mill scale. Learn proper guarding and disc selection.", search: "Milwaukee DeWalt 4-1/2 inch angle grinder flap disc grinding wheel" },
        { name: "Flange alignment tools (spud wrenches, drift pins, and flange spreaders)", why: "Line up bolt holes on flanges and bring joints together without damaging faces.", search: "flange alignment spud wrench drift pins pipe fitter" },
        { name: "Pipe fitter's tool bag or bucket, and magnet set", why: "Carries small tools to the work. Magnet holders keep pipe in fit-up while you tack.", search: "pipe fitter tool bag welding magnets 45 90 degree" },
        { name: "Fitter's gauge, tape, and 90° welding clamps", why: "Hold flanges square and pipe aligned during tack welding.", search: "flange square pipe clamp fitter gauge" },
        { name: "Chipping hammer and wire brush", why: "Clean slag from stick-weld passes between passes for sound weld metal.", search: "chipping hammer wire brush weld" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying.",
      items: [
        { name: "Pipe threading machine and dies (RIDGID 300 or 535)", why: "Cuts NPT threads on small-diameter pipe. Usually a shop or company tool.", search: "RIDGID 300 pipe threader dies 535" },
        { name: "Beveling machine and pipe cutting tools", why: "Fast, accurate cuts and weld bevels. Usually supplied by the contractor.", search: "pipe beveling machine portable pipe bevelling tool" },
        { name: "Hydrostatic test pump and calibrated gauges", why: "Pressure testing is a core procedure. Gauges must be calibrated and in range.", search: "hydrostatic test pump calibrated pressure gauge" },
        { name: "Torque wrench and bolt-tensioning tools", why: "Flange bolting to torque values in the specification.", search: "torque wrench flange bolting hydraulic tensioning" },
        { name: "Rigging gear: slings, shackles, chain falls, and come-alongs", why: "Used to place heavy pipe and equipment. Employer-owned and inspected.", search: "rigging chain fall come along shackles slings" },
        { name: "Full-body harness and lanyard (CSA Z259.10)", why: "Usually supplied by the employer. Fall protection training comes first.", search: "CSA Z259.10 full body harness lanyard" },
        { name: "Gas detector and confined space gear", why: "Personal gas monitors are supplied by the employer. Know how to bump test and read them.", search: "four gas detector confined space personal monitor" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for drawings, math, and code study. Check with your school and your exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Trig for offsets, rolling offsets, fractions, and flow and pressure calculations.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Isometric graph paper pad", why: "Draw pipe runs, offsets, and rolling offsets at 30°. A core pipefitting skill.", search: "isometric graph paper pad" },
        { name: "Mechanical pencil (0.5 mm) and spare leads", why: "Clean lines for isometrics and notes. 2H for layout, HB for notes.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm leads" },
        { name: "Engineer's scale and architect's scale", why: "Reading plans and isometrics at different scales.", search: "engineer scale architect scale ruler set" },
        { name: "Triangles, protractor, and steel ruler", why: "Draw 45°, 30°, and 60° lines accurately for layouts and offsets.", search: "Staedtler drafting triangle set protractor steel ruler" },
        { name: "Piping handbook or pipefitter's handbook (as recommended by your school)", why: "Look up dimensions, takeoffs, and conversions. Check which one your instructors use.", search: "pipefitter's handbook Lindsey pipe trades handbook" },
        { name: "Field notebook and binder with dividers", why: "Organize notes by year and topic. Useful for Red Seal exam review.", search: "Rite in the Rain notebook binder dividers" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare, including the Steamfitter/Pipefitter trade standard.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Codes Canada", desc: "National model codes referenced by provincial codes.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
        { name: "UA Canada", desc: "Union pipefitter and steamfitter training and apprenticeship information.", url: "https://www.uacanada.ca/" },
        { name: "CSA Group", desc: "Publisher of CSA B51 (boiler, pressure vessel, and pressure piping code) and related standards.", url: "https://www.csagroup.org/" },
        { name: "ASME", desc: "Publisher of B31 piping codes and the boiler and pressure vessel code.", url: "https://www.asme.org/" },
        { name: "Mechanical Contractors Association of Canada", desc: "Industry information on mechanical contracting.", url: "https://www.mcac.ca/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local codes.",
      items: [
        { name: "Pipe fitting basics", desc: "Fittings, flanges, valves, and fit-up fundamentals.", url: "https://www.youtube.com/results?search_query=pipefitter+basics+fittings+flanges+fit+up" },
        { name: "Pipe offsets and rolling offsets", desc: "Travel, run, and rolling offset calculations.", url: "https://www.youtube.com/results?search_query=pipefitter+offset+rolling+offset+calculation" },
        { name: "Reading pipe isometrics", desc: "Isometric drawings, symbols, and bill of materials.", url: "https://www.youtube.com/results?search_query=reading+piping+isometric+drawings+pipefitter" },
        { name: "Flange bolting and gasket installation", desc: "Star pattern tightening and gasket selection.", url: "https://www.youtube.com/results?search_query=flange+bolting+star+pattern+gasket+installation" },
        { name: "Steam trap types and operation", desc: "Float, thermostatic, bucket, and thermodynamic traps.", url: "https://www.youtube.com/results?search_query=steam+trap+types+how+they+work" },
        { name: "Hydrostatic pressure testing of piping", desc: "Test preparation, filling, and safety.", url: "https://www.youtube.com/results?search_query=hydrostatic+pressure+test+piping+procedure" },
        { name: "Pipe welding root pass and fit-up", desc: "Fit-up, tacking, and root pass basics.", url: "https://www.youtube.com/results?search_query=pipe+welding+fit+up+root+pass+tack" },
        { name: "Boiler and steam system basics", desc: "How boilers, steam mains, and condensate returns work.", url: "https://www.youtube.com/results?search_query=steam+boiler+system+basics+condensate+return" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for steamfitting and pipefitting yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: pipefitter apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=pipefitter+apprentice+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: pipefitting tips and stories (audio)", desc: "Job-site lessons and fabrication tips from working pipefitters.", url: "https://www.youtube.com/results?search_query=pipefitter+podcast+tips+stories" },
        { name: "YouTube: pipe welding podcast", desc: "Talks about pipe welding quality and procedures.", url: "https://www.youtube.com/results?search_query=pipe+welding+podcast+pressure+piping" },
        { name: "YouTube: industrial shutdown and turnaround podcast", desc: "Plant work, scheduling, and safety during shutdowns.", url: "https://www.youtube.com/results?search_query=industrial+shutdown+turnaround+podcast+pipefitter" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, planning, and leadership.",
      items: [
        { name: "YouTube: Red Seal steamfitter pipefitter exam prep (talk-through)", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+steamfitter+pipefitter+exam+preparation" },
        { name: "YouTube: pressure piping code discussion", desc: "Talks on pressure piping standards and testing.", url: "https://www.youtube.com/results?search_query=ASME+B31+pressure+piping+code+explained+podcast" },
        { name: "YouTube: construction foreman and leadership podcast", desc: "Planning crews, communication, and productivity.", url: "https://www.youtube.com/results?search_query=construction+foreman+leadership+podcast" }
      ]
    }
  ],
  practiceBank: {
    1: pipefitBank([
      ["What does NPS stand for in pipe sizing?", "Nominal pipe size", ["Normal pressure setting", "National pipe standard", "Net pipe stock"], "NPS is the North American nominal size designation. It is not the actual outside diameter for small sizes."],
      ["The outside diameter of NPS 4 pipe is:", "114.3 mm", ["100 mm", "101.6 mm", "127 mm"], "NPS 4 has an OD of 114.3 mm (4.5 in), regardless of schedule."],
      ["For a given NPS, a heavier schedule has:", "A thicker wall and smaller inside diameter", ["A larger outside diameter and the same inside diameter", "A thinner wall", "The same wall"], "OD stays constant, and the wall grows with schedule."],
      ["Lockout/tagout is used to:", "Keep energy sources isolated while work is done", ["Mark tools", "Label pipe sizes", "Order parts"], "It prevents accidental start-up or release of energy."],
      ["Before opening a pipe line you must:", "Isolate, drain, depressurize, and verify", ["Crack the joint open slowly and step back in case it is live", "Assume it is empty", "Hammer the pipe"], "Stored pressure and hot fluids can injure you. Verify the line is safe."],
      ["Which document gives hazard and first aid information for a chemical product?", "Safety Data Sheet (SDS)", ["Isometric drawing", "Bill of materials", "Tag"], "SDS is part of WHMIS."],
      ["How many millimetres are in one inch?", "25.4", ["2.54", "10", "254"], "1 in = 25.4 mm exactly."],
      ["A right triangle has legs of 6 and 8. The hypotenuse is:", "10", ["12", "14", "100"], "6² + 8² = 100, and the square root of 100 is 10."],
      ["Which PPE protects your eyes when grinding?", "Safety glasses with a face shield", ["Ear plugs", "Hard hat only", "Knee pads"], "Grinding throws sparks and fragments."],
      ["Welding on or near combustibles requires:", "A hot work permit, fire watch, and extinguisher", ["Nothing at all, provided the job only takes a few minutes", "A dry cloth", "A louder radio"], "Hot work controls prevent fires."],
      ["A pipe wrench is meant for:", "Round pipe and fittings that can tolerate the teeth", ["Finished surfaces and hex bolt heads that need a firm grip", "Hex nuts and bolts", "Polished stainless"], "Teeth bite into the work. Use a smooth-jaw wrench on nuts."],
      ["A gasket is used between flanges to:", "Seal the joint", ["Align the bolts", "Lighten the pipe", "Reduce flow"], "Gasket material depends on pressure, temperature, and fluid."],
      ["Why use a level when setting pipe?", "To keep pipe plumb, level, or at the specified grade", ["To mark the cut line square around the pipe circumference", "To measure length", "To weigh the pipe"], "Many lines must be sloped for drainage or venting."],
      ["Which valve type is best for tight shutoff in a quarter turn?", "Ball valve", ["Globe valve", "Gate valve", "Check valve"], "Ball valves turn 90° and seal tightly."],
      ["A check valve:", "Allows flow in one direction only", ["Throttles flow", "Measures flow", "Heats the fluid"], "It prevents backflow."],
      ["Ladder safety includes:", "Three points of contact", ["Standing on the top step", "Carrying loads in both hands", "Leaning sideways"], "Three points of contact reduces fall risk."],
      ["Compressed gas cylinders should be:", "Secured upright and capped when not in use", ["Left loose", "Stored near open flames", "Rolled by the valve"], "Unsecured cylinders can become projectiles."]
    ]),
    2: pipefitBank([
      ["The travel of a 45° offset is about the offset times:", "1.414", ["1.0", "0.707", "2.0"], "Travel = offset ÷ sin 45° ≈ offset × 1.414."],
      ["For a 45° offset, the run equals:", "The offset", ["Twice the offset", "Half the offset", "1.414 × offset"], "At 45° the run and the offset are equal."],
      ["The centre-to-end dimension of a long radius 90° elbow is:", "1.5 times the nominal pipe size (in inches)", ["1.0 times the NPS", "2.0 times the NPS, measured to the weld end", "0.625 times the NPS"], "NPS 4 long radius elbow is 6 in (152 mm). Short radius elbows are 1.0 × NPS."],
      ["Flange bolts are tightened using:", "A star (cross) pattern in stages", ["One side to full torque first, then the opposite side", "Clockwise only", "By feel"], "The star pattern compresses the gasket evenly."],
      ["Bolt holes on a pipe flange normally:", "Straddle the vertical and horizontal centrelines", ["Sit directly on the vertical and horizontal centrelines", "Are random", "Face down"], "Straddling is standard unless the drawing says otherwise."],
      ["A weld neck flange is joined to the pipe by:", "A butt weld", ["Threads only", "A union", "Solder"], "The weld neck gives a smooth transition and strong joint."],
      ["Which flange face is common on Class 150 steel flanges?", "Raised face", ["Square face", "Spherical face", "Pointed face"], "Raised face flanges are common for class 150 and 300."],
      ["Steam traps are used to:", "Remove condensate and air without losing live steam", ["Create steam by flashing the condensate back to vapour", "Increase pressure", "Filter water"], "Traps drain condensate while holding steam in the system."],
      ["Steam piping should be pitched to:", "Drain condensate toward drip legs and traps", ["Collect condensate at high points where it is easy to drain", "Be level everywhere", "Slope up away from traps"], "Condensate must drain freely to avoid water hammer."],
      ["Water hammer in steam lines is most often caused by:", "Condensate accumulating and being swept along by steam", ["Hot steam alone moving too fast through an empty line", "Cold pipes", "Loose hangers only"], "Slugs of water moving at steam velocity cause severe shocks."],
      ["Thermal expansion of carbon steel is about:", "0.012 mm per metre per °C", ["1.2 mm per metre per °C", "0.12 mm per metre per °C", "0.00012 mm per metre per °C"], "12 µm per metre per degree is a standard approximation."],
      ["A pipe expansion loop is used to:", "Absorb thermal movement of the pipe", ["Reduce flow", "Heat the fluid", "Increase pressure"], "Loops, offsets, and joints allow growth without overstressing."],
      ["A strainer in a line is used to:", "Catch debris to protect valves, traps, and equipment", ["Raise the pressure downstream of the valves and the traps", "Cool the fluid", "Measure flow"], "Strainers need periodic cleaning."],
      ["NPT pipe threads have a taper of about:", "1 in 16 on the diameter", ["1 in 2 on the diameter, a steep taper", "1 in 100", "No taper"], "NPT is tapered so the threads seal as they are tightened."],
      ["A hanger or support is installed to:", "Carry the weight and maintain alignment and grade", ["Increase the pipe size so the line can carry more flow", "Reduce flow", "Cool the pipe"], "Spacing depends on pipe size, content, and code."],
      ["Which pipe material is common for steam and hot water lines in commercial and industrial plants?", "Carbon steel", ["PVC", "ABS", "Polyethylene"], "Plastics are not suitable for high-temperature steam."],
      ["A union is used to:", "Join pipe so it can be disconnected without cutting", ["Reduce pipe size from one nominal diameter to the next", "Vent the line", "Stop flow"], "Unions allow easy removal of equipment or sections."]
    ]),
    3: pipefitBank([
      ["Hydrostatic testing normally uses:", "Water as the test fluid, with trapped air vented", ["Compressed air, which keeps the system dry afterward", "Steam", "Oil"], "Water stores far less energy than gas, so it is safer for pressure tests."],
      ["Pressure test gauges should be:", "Calibrated, and the range suited to the test pressure", ["Any gauge on hand, since the reading only needs to be close", "Rated far above test pressure", "Covered"], "Typical practice is to use a gauge whose range puts the test pressure well within its scale."],
      ["A common hydrostatic test pressure for new piping is:", "1.5 times the design pressure (per code and specification)", ["0.5 times the design pressure, to avoid stressing the pipe welds", "Equal to atmospheric pressure", "10 times the design pressure"], "Check the applicable code. Many pressure piping codes use 1.5 × design."],
      ["What does CRN stand for on pressure fittings and vessels in Canada?", "Canadian Registration Number", ["Certified Rating Number issued by the maker", "Certified Rating Number", "Code Reference Notation"], "CRN indicates that the design is registered with the province where it is used."],
      ["A thermowell is used to:", "Protect a temperature sensor inside a pipe", ["Mix fluid", "Heat the pipe", "Reduce pressure"], "The well lets the sensor be removed without draining the line."],
      ["A pressure relief valve must be:", "Set no higher than the maximum allowable working pressure", ["Set higher than the pipe rating so it never lifts in service", "Blocked off", "Painted"], "The relief device protects equipment from over-pressure."],
      ["Which fitting changes pipe size concentrically?", "Reducer", ["Union", "Tee", "Cap"], "Reducers connect different sizes. Eccentric reducers keep a flat top or bottom."],
      ["An eccentric reducer is often used on pump suction with the flat side up to:", "Avoid trapping air", ["Trap air", "Reduce the flow", "Save material"], "Flat on top prevents air pockets that can cause pump cavitation."],
      ["The basic heating formula for water is:", "Heat (kW) = flow (kg/s) × 4.19 × temperature change (°C)", ["Heat (kW) = pressure (kPa) × 4.19 × pipe diameter (mm) × length", "Heat = flow ÷ ΔT", "Heat = diameter × length"], "Water's specific heat is about 4.19 kJ/kg·°C."],
      ["Heat carried by 2 L/s (about 2 kg/s) of water with a 10 °C temperature drop:", "About 84 kW", ["About 8 kW", "About 840 kW", "About 20 kW"], "2 × 4.19 × 10 = 83.8 kW."],
      ["Saturated steam at atmospheric pressure is at about:", "100 °C", ["50 °C", "212 °C", "150 °C"], "At sea-level pressure water boils at 100 °C. Steam at higher pressure is hotter."],
      ["A pressure reducing valve in a steam system:", "Lowers and controls downstream pressure", ["Raises downstream pressure to match the boiler", "Removes condensate", "Filters steam"], "PRVs reduce supply pressure for lower-rated equipment."],
      ["Why use low-hydrogen electrodes such as E7018 on pressure piping steel?", "They reduce the risk of hydrogen cracking, and must be kept dry", ["They are cheaper and can be left uncovered in a damp pipe rack for weeks", "They need no storage", "They do not need cleaning"], "Store low-hydrogen rods in a heated rod oven per the procedure."],
      ["Back purging with argon when welding stainless steel pipe prevents:", "Oxidation (sugaring) on the inside of the root", ["Slag trapped between weld passes on the outside surface", "Distortion", "Porosity from paint"], "Oxidized roots weaken corrosion resistance."],
      ["A P&ID shows:", "Piping and instrumentation, with equipment, valves, and control loops", ["Only pipe lengths and fitting sizes for each run, for the fabrication shop", "Only wiring", "Concrete details"], "P&IDs describe the process and instruments, not dimensions."],
      ["A gate valve is best used:", "Fully open or fully closed, not throttling", ["For fine throttling of flow to hold a steady pressure", "As a check valve", "As a relief valve"], "Partly open gate valves vibrate and wear."],
      ["Insulation on hot steam piping reduces:", "Heat loss and burn hazards", ["Pipe wall thickness", "Pipe size", "Water quality"], "Insulation saves energy and protects personnel."]
    ]),
    4: pipefitBank([
      ["Which Canadian code covers boilers, pressure vessels, and pressure piping?", "CSA B51", ["CSA B149.1", "CSA Z259", "CSA W59"], "CSA B51 is the Boiler, pressure vessel, and pressure piping code, adopted by provinces."],
      ["ASME B31.3 applies to:", "Process piping", ["Power piping only", "Gas distribution", "Plumbing"], "B31.1 is power piping and B31.3 is process piping."],
      ["Who normally regulates pressure piping installation and inspection in a province?", "The provincial safety authority", ["The tool supplier", "The union steward", "The customer's accountant"], "Examples include TSSA, ABSA, and Technical Safety BC. Check your province."],
      ["A work expansion calculation: 50 m of carbon steel pipe heated by 100 °C expands about:", "60 mm", ["6 mm", "600 mm", "12 mm"], "0.012 mm/m/°C × 50 m × 100 °C = 60 mm."],
      ["Which test is used to find surface-breaking weld defects on carbon steel?", "Magnetic particle or dye penetrant", ["Hardness test", "Weight test", "Flow test"], "MT and PT are surface methods. Radiography and UT find internal flaws."],
      ["Radiographic testing (RT) of pipe welds checks for:", "Internal defects such as porosity and lack of fusion", ["Surface paint", "Pipe colour", "Valve leaks"], "RT shows internal weld quality."],
      ["Before entering a confined space, you must:", "Follow the entry permit and have the atmosphere tested", ["Hold your breath and keep the job to a few minutes at most", "Skip the permit if short", "Send a coworker alone"], "Confined spaces can have low oxygen, toxic gas, or flammable gas."],
      ["Commissioning a hydronic system includes:", "Filling, venting, flushing, balancing, and recording results", ["Painting, labelling, and tidying up the mechanical room afterward", "Estimating", "Ordering"], "Commissioning verifies the system performs as designed."],
      ["Line identification on piping in Canada is commonly done using:", "Labels and colours per CAN/CGSB-24.3 or site standards", ["Whatever colours the crew has left over from the paint shop", "No marking", "Verbal agreement"], "Consistent identification supports safety."],
      ["A piping material specification (pipe class) lists:", "Pipe, fitting, flange, gasket, and bolting types by service", ["Wages and overtime rates for each trade working on the job site", "Welder names", "Tool brands"], "The spec ties the materials to design conditions."],
      ["A rolling offset is calculated using:", "Offset in two planes, and the true offset with Pythagoras", ["Only the vertical rise, since the horizontal travel can be ignored", "Only the horizontal", "The pipe weight"], "True offset = √(vertical² + horizontal²). Travel = true offset × fitting factor."],
      ["The rolling offset with 300 mm vertical and 400 mm horizontal has a true offset of:", "500 mm", ["700 mm, found by adding the 300 and 400", "100 mm", "350 mm"], "√(300² + 400²) = 500 mm."],
      ["Travel for a 45° rolling offset with a true offset of 500 mm is about:", "707 mm", ["500 mm", "1 000 mm", "354 mm"], "500 × 1.414 = 707 mm."],
      ["If a long radius 90° elbow on NPS 6 has a centre-to-end of 1.5 × NPS (in), then centre-to-end is:", "229 mm (9 in)", ["152 mm, the centre-to-end of a 1.0 × NPS elbow", "305 mm", "114 mm"], "1.5 × 6 in = 9 in = 228.6 mm."],
      ["What is meant by shutdown work?", "A planned plant outage used for maintenance and construction", ["A scheduled break when the crew stops all site work for the day", "Equipment storage", "Welding rod storage"], "Shutdowns demand careful planning and permits."],
      ["Before returning a repaired system to service you should:", "Confirm tests, documentation, and a safe start-up", ["Open all valves at once to see if everything holds", "Skip the paperwork", "Remove tags without checking"], "Controlled start-up and sign-off are required."],
      ["Water at 7 bar (700 kPa) in psi is about:", "102 psi", ["10 psi", "1 020 psi", "48 psi"], "700 ÷ 6.895 ≈ 101.5 psi."]
    ])
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety tickets employers ask for (commonly WHMIS, fall protection, and site orientation; requirements vary)", "Contact UA locals and mechanical contractors, and prepare a short resume", "Register your apprenticeship once you have a sponsor and log your hours from day one"] },
    { title: "Year 1: safety, tools, and pipe basics", items: ["Learn site safety, hot work, and lockout/tagout", "Learn pipe sizes, schedules, and fittings", "Cut, thread, and fit pipe, and read basic drawings", "Complete your first technical training block", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: layout and welding", items: ["Read isometrics and calculate offsets", "Fit up and tack weld pipe, and learn flange installation", "Learn valves, traps, and supports", "Start working with welding procedures and welder qualification requirements in your province"] },
    { title: "Year 3: systems and testing", items: ["Install steam, condensate, and hydronic systems", "Learn expansion, anchors, guides, and pipe stress basics", "Perform pressure tests and document results", "Learn rigging and equipment setting"] },
    { title: "Year 4 and beyond: codes, planning, and commissioning", items: ["Work with CSA B51 and ASME B31 requirements and your provincial safety authority", "Plan shutdown work, fabrication, and sequencing", "Commission and troubleshoot systems", "Mentor first-year apprentices and move toward lead hand duties"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal standard and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["Anchor", "A support that fixes a pipe in position and directs expansion."],
    ["Bevel", "An angled edge prepared on pipe for welding, commonly 37.5°."],
    ["Boiler", "A pressure vessel that heats water or generates steam."],
    ["Branch", "A pipe connecting to a main line."],
    ["Butt weld", "A weld joining the ends of two pieces in line."],
    ["Check valve", "A valve that allows flow in one direction only."],
    ["Condensate", "Water formed when steam cools."],
    ["CRN", "Canadian Registration Number for registered pressure equipment designs."],
    ["Design pressure", "The pressure used to design a piping system."],
    ["Drip leg", "A vertical pipe that collects condensate in a steam line."],
    ["Eccentric reducer", "A reducer whose centreline is offset so one side stays flat."],
    ["Elbow", "A fitting that changes direction, commonly 45° or 90°."],
    ["Expansion loop", "A bend in a line that absorbs thermal movement."],
    ["Fit-up", "Aligning and tacking pipe and fittings before final welding."],
    ["Flange", "A disc fitting with bolt holes used to join pipe and equipment."],
    ["Gasket", "A compressible seal between flanges."],
    ["Gate valve", "A valve that isolates flow using a sliding gate."],
    ["Globe valve", "A valve used to throttle flow."],
    ["Hydronic", "Relating to heating or cooling systems that circulate water."],
    ["Hydrostatic test", "A pressure test using water."],
    ["Isometric", "A 3D pipe drawing at 30° axes."],
    ["Lockout/tagout", "Procedure to isolate and lock energy sources."],
    ["NPS", "Nominal pipe size."],
    ["NPT", "National pipe taper, the common tapered thread."],
    ["P&ID", "Piping and instrumentation diagram."],
    ["Pipe schedule", "A designation for wall thickness, such as Schedule 40."],
    ["Pitch", "The slope of a pipe for drainage."],
    ["Relief valve", "A valve that opens to prevent over-pressure."],
    ["Root pass", "The first weld pass in a joint."],
    ["Saturated steam", "Steam at the boiling temperature for its pressure."],
    ["Steam trap", "A device that discharges condensate and air but holds steam."],
    ["Strainer", "A device that removes debris from a line."],
    ["Tack weld", "A small weld that holds parts in position."],
    ["Travel", "The length of the angled piece between fittings in an offset."],
    ["Water hammer", "A pressure shock caused by sudden changes in flow."]
  ],
  cards: [
    { front: "Travel of a 45° offset", back: "Offset × 1.414" },
    { front: "OD of NPS 4 pipe", back: "114.3 mm (4.5 in)" },
    { front: "Long radius 90° elbow, centre to end", back: "1.5 × NPS (in inches)" },
    { front: "Rolling offset true offset", back: "√(vertical² + horizontal²)" },
    { front: "Steel thermal expansion", back: "About 0.012 mm per metre per °C" },
    { front: "psi to kPa", back: "1 psi ≈ 6.895 kPa, 1 bar = 100 kPa" },
    { front: "Hydrostatic test pressure", back: "Commonly 1.5 × design pressure, per code and specification" },
    { front: "Heating formula for water", back: "kW = kg/s × 4.19 × ΔT in °C" },
    { front: "Flange bolt tightening", back: "Star pattern in stages" },
    { front: "CSA B51", back: "Boiler, pressure vessel, and pressure piping code" }
  ],
  jobsIntro: "Look for union and signatory mechanical contractors, industrial and shutdown contractors, power and process plants, commercial mechanical firms, and maintenance departments.",
  tips: [
    "Bring a short resume, your safety tickets, and ID.",
    "Show interest in math, welding, and problem solving.",
    "Visit union halls and contractors in person when you can, and follow up.",
    "Ask what tools and PPE you need and what the employer supplies."
  ],
  forumTopics: ["Starting out", "Pipe welding and fit-up", "Steam, hydronic, and process systems", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
  reference: [
    {
      title: "Common NPS, outside diameter, and Schedule 40 wall thickness",
      table: {
        head: ["NPS", "OD (mm)", "Sch 40 wall (mm)", "Sch 40 ID (mm)"],
        rows: [
          ["1", "33.4", "3.38", "26.6"],
          ["2", "60.3", "3.91", "52.5"],
          ["3", "88.9", "5.49", "77.9"],
          ["4", "114.3", "6.02", "102.3"],
          ["6", "168.3", "7.11", "154.1"],
          ["8", "219.1", "8.18", "202.7"]
        ]
      },
      note: "Inside diameter = OD minus twice the wall. Confirm in the standard (ASME B36.10M) for your pipe."
    },
    {
      title: "Offset factors",
      intro: "Travel = offset × factor. Use the fitting angle for the offset.",
      table: {
        head: ["Fitting angle", "Travel factor", "Run factor (run ÷ offset)"],
        rows: [["60°", "1.155", "0.577"], ["45°", "1.414", "1.000"], ["30°", "2.000", "1.732"], ["22.5°", "2.613", "2.414"], ["11.25°", "5.126", "5.027"]]
      },
      note: "Subtract fitting take-offs when cutting pipe to length."
    },
    {
      title: "Fitting dimensions and pipe makeup",
      list: [
        "Long radius 90° elbow centre-to-end = 1.5 × NPS (inches). NPS 6: 9 in (229 mm).",
        "Short radius 90° elbow centre-to-end = 1.0 × NPS (inches).",
        "45° long radius elbow centre-to-end = 0.625 × NPS (inches). NPS 4: 2.5 in (63.5 mm).",
        "Pipe length to cut = centre-to-centre dimension minus the take-offs of the fittings at each end, plus any thread engagement or minus gasket and gap allowances as the job needs.",
        "Common weld bevel for butt welds is 37.5°, with a root face and gap per the welding procedure."
      ],
      note: "Use manufacturer or standard (ASME B16.9) tables for exact dimensions."
    },
    {
      title: "Pressure and heat conversions",
      list: [
        "1 psi ≈ 6.895 kPa. 1 bar = 100 kPa ≈ 14.5 psi.",
        "1 m of water head ≈ 9.81 kPa.",
        "Heating: kW = flow (kg/s) × 4.19 × ΔT (°C). 1 L/s of water is about 1 kg/s.",
        "Latent heat of vaporization of water at atmospheric pressure is about 2 257 kJ/kg.",
        "Thermal expansion of carbon steel: about 0.012 mm per metre per °C. 50 m × 100 °C ≈ 60 mm."
      ]
    },
    {
      title: "Pressure piping codes and standards",
      list: [
        "CSA B51 Boiler, pressure vessel, and pressure piping code.",
        "ASME B31.1 Power piping. ASME B31.3 Process piping.",
        "ASME B16.5 Pipe flanges and flanged fittings. ASME B16.9 Factory-made wrought fittings.",
        "ASME B36.10M Welded and seamless wrought steel pipe.",
        "CSA B52 Mechanical refrigeration code, for refrigeration work.",
        "Your provincial pressure equipment safety authority sets registration and inspection requirements."
      ]
    },
    {
      title: "Steam trap types",
      table: {
        head: ["Type", "Operates by", "Typical use"],
        rows: [
          ["Float and thermostatic", "Float opens as condensate rises, with a thermostatic air vent", "Heat exchangers and equipment"],
          ["Inverted bucket", "Steam buoyancy in a bucket closes the valve", "Drip legs and process"],
          ["Thermodynamic (disc)", "Flash steam velocity changes pressure on a disc", "Steam mains and drip points"],
          ["Thermostatic", "Temperature-sensitive element opens when cooler condensate arrives", "Radiators, tracing"]
        ]
      },
      note: "Always follow the manufacturer's selection and installation guide."
    }
  ]
});
