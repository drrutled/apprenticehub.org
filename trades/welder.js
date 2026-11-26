// Welder content: tools, learning media, practice tests, roadmap, and reference.
// Practice questions are original study aids, not official Red Seal exam questions.

const welderTl = (a) => a.map(([name, why, search]) => ({ name, why, search }));
const welderMd = (a) => a.map(([name, desc, url]) => ({ name, desc, url }));
// Each row is [question, correct answer, [3 wrong answers], explanation]; the correct position rotates.
const welderQs = (a) => a.map(([q, c, w, explain], i) => {
  const answer = (i * 3 + 1) % 4;
  const options = w.slice();
  options.splice(answer, 0, c);
  return { q, options, answer, explain };
});
const welderYt = (s) => `https://www.youtube.com/results?search_query=${s}`;
const welderNote = "Professional-grade tools that hold up to daily use. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.";

registerTrade({
  introVideo: { id: "eqbJs9UZ68Q", title: "Intro video: Welder" },
  id: "welder",
  store: "welder",
  title: "Welder",
  name: "Welder",
  short: "welding",
  category: "Fabrication · Metal · Construction",
  summary: "Welders join and cut metal using arc, gas, and other processes, working from drawings and welding procedures in shops, plants, and construction sites across Canada.",
  work: "Welders read drawings and welding symbols, prepare joints, and make welds with processes such as stick, MIG, flux-cored, and TIG. Work ranges from structural steel and pressure piping to stainless, aluminum, and repair work. Expect heat, noise, fumes, and awkward positions, with strict attention to procedures and inspection.",
  duration: "Usually 3 years (Job Bank), varies by province",
  union: "CWB Group (Canadian Welding Association)",
  unionUrl: "https://www.cwbgroup.org/",
  profileUrl: "https://red-seal.ca/eng/trades/welder.shtml",
  durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/23242/ca",
  jobSearch: "welder apprentice",
  journeySearch: "welder",
  aliases: "welding weld mig tig stick smaw gmaw gtaw fcaw cwb pressure welder fabrication",
  tools: ["Auto-darkening welding helmet", "Leather welding gloves and FR clothing", "Chipping hammer and wire brush", "Angle grinder with flap discs", "Welding pliers and clamps", "Tape measure, square, and soapstone"],
  insight: {
    skills: ["Steady hands and good hand-eye coordination", "Patience and attention to detail", "Reading drawings and welding symbols", "Basic math for fit-up and heat input"],
    hazards: ["Arc rays: use a proper shade lens and cover all skin", "Fumes and gases: use ventilation and the right respirator", "Fire and explosion: hot work permits and a fire watch", "Burns and electric shock: dry gloves, sound cables, and PPE"],
    settings: ["Fabrication and machine shops", "Structural and industrial construction", "Pipelines, refineries, and pressure piping", "Mining, shipbuilding, and equipment repair"]
  },
  toolGroups: [
    {
      title: "Day-one tools, buy once and buy well",
      note: welderNote,
      items: welderTl([
        ["Auto-darkening welding helmet (Miller, Lincoln, or Optrel)", "A reliable lens with adjustable shade and sensitivity protects your eyes and lets you see the joint. Make sure it is CSA approved.", "Miller Lincoln Optrel auto darkening welding helmet"],
        ["Clear safety glasses to wear under the helmet", "Protect your eyes from flying slag and grinding debris when the helmet is up.", "CSA safety glasses clear anti fog"],
        ["Leather MIG/stick gloves and TIG gloves", "Thicker gloves for stick and MIG, thin goatskin for TIG feel. Dry gloves also insulate against shock.", "Lincoln Miller leather welding gloves TIG goatskin"],
        ["Flame-resistant jacket or sleeves and FR work pants", "Cotton or leather FR layers resist sparks. Synthetic fabrics melt onto skin.", "flame resistant welding jacket FR cotton work pants"],
        ["CSA Grade 1 safety boots with metatarsal protection", "Dropped steel and hot slag are daily hazards. Choose boots with a CSA green triangle and no exposed laces.", "CSA safety boots metatarsal Red Wing Blundstone"],
        ["Chipping hammer and wire brush", "Remove slag and clean welds between passes so you do not trap inclusions.", "chipping hammer wire brush welding"],
        ["Welding pliers (Lincoln or Miller)", "Cut wire, pull nozzle tips, and handle hot parts in one tool.", "Lincoln Miller MIG welding pliers"],
        ["Locking clamps and welding magnets", "Hold work in position while you tack. Quality clamps do not warp under heat.", "Irwin Vise-Grip welding clamps magnets"],
        ["Tape measure, combination square, and soapstone", "Layout and fit-up accuracy decides how good the final weld can be.", "Stanley FatMax tape measure combination square soapstone"]
      ])
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
      items: welderTl([
        ["4.5 in angle grinder (Milwaukee, Makita, or DeWalt)", "Used for bevelling, cleaning, and cutting. Buy a model with a guard you can adjust and a paddle switch.", "Milwaukee Makita DeWalt 4.5 inch angle grinder"],
        ["Flap discs, cut-off wheels, and wire cup brushes", "Match the abrasive to the metal, and never use stainless tools on carbon steel.", "flap disc 4.5 inch cut off wheel stainless wire brush"],
        ["Welding cap and neck protection", "Keeps sparks out of your hair and ears during overhead welding.", "welding cap flame resistant"],
        ["Tip cleaners, spare contact tips, and nozzle gel", "Keep MIG consumables clean to reduce wire feeding problems.", "MIG tip cleaner contact tips nozzle gel"],
        ["Tungsten sharpener and a selection of tungstens", "A consistent ground point gives a stable TIG arc. Check which tungsten type your shop uses.", "tungsten grinder sharpener 2% lanthanated tungsten"],
        ["Fillet weld gauge and bridge cam gauge", "Check leg size, throat, undercut, and reinforcement against the drawing.", "fillet weld gauge bridge cam gauge"],
        ["Respirator with P100 filters and spare cartridges", "Required in many shops when fume exposure is high. Needs a fit test and proper care.", "3M half face respirator P100 welding"]
      ])
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying.",
      items: welderTl([
        ["Powered air-purifying respirator (PAPR) welding helmet", "Gives clean air under the helmet for long stainless or confined jobs. Usually employer supplied.", "3M Speedglas PAPR welding helmet"],
        ["Digital multimeter and clamp meter", "Check welding machine inputs, cables, and grounds when troubleshooting.", "Fluke clamp meter multimeter"],
        ["Pipe fit-up tools: wrap-around, pipe clamps, and fitting levels", "Align pipe quickly for 5G and 6G work.", "pipe welding fit up clamps wrap around level"],
        ["Infrared thermometer and temperature-indicating crayons", "Verify preheat and interpass temperatures called for by the procedure.", "Tempilstik temperature indicating crayon infrared thermometer"],
        ["Pipe bevelling tool or portable bevel machine", "Consistent bevels for root and hot pass work. Usually company supplied.", "portable pipe beveller"],
        ["Rod oven or portable rod holder", "Keeps low-hydrogen electrodes dry as required by the procedure. Often shop supplied.", "portable electrode rod oven"]
      ])
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for drawings, math, and code study. Check with your school and your exam body about calculator rules before you buy.",
      items: welderTl([
        ["Scientific calculator (Casio fx-991 or TI-30XS)", "Trig for fit-up, fraction and metric work, and heat input calculations.", "Casio fx-991 Texas Instruments TI-30XS MultiView"],
        ["Mechanical pencil (0.5 mm) and spare leads", "Clean lines for sketching joints and markups on drawings.", "Pentel GraphGear mechanical pencil 0.5mm leads"],
        ["Metric and imperial steel ruler (300 mm / 12 in)", "Fast checks of root openings, leg sizes, and bevels.", "Starrett 12 inch steel ruler metric imperial"],
        ["Protractor and drafting triangles", "Measure groove angles and practise layout.", "protractor drafting triangle set"],
        ["Binder, dividers, and highlighters", "Organize notes by process and position for exam review.", "binder dividers highlighters"],
        ["Field notebook (Rite in the Rain)", "Weatherproof paper for parameters, procedure numbers, and measurements.", "Rite in the Rain field notebook"],
        ["Welding textbook or code reference (CSA W59 or your school text)", "You will refer to symbols and joint details constantly. Check which edition your school uses.", "welding textbook CSA W59"]
      ])
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: welderMd([
        ["Red Seal exam preparation", "How Red Seal exams work and how to prepare.", "https://red-seal.ca/eng/welcome.shtml"],
        ["CWB Group", "Certification of welding companies, welder testing, and welding standards information.", "https://www.cwbgroup.org/"],
        ["CSA Group", "Publisher of the CSA W-series welding standards.", "https://www.csagroup.org/"],
        ["American Welding Society", "Welding education, standards, and technical resources.", "https://www.aws.org/"],
        ["Codes Canada", "Model national codes that provincial codes are based on.", "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada"]
      ])
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and applicable codes.",
      items: welderMd([
        ["Welding safety basics", "PPE, fumes, fire prevention, and electrical safety.", welderYt("welding+safety+basics+ppe+fumes+fire")],
        ["Stick welding (SMAW) for beginners", "Striking an arc, travel speed, and running a bead.", welderYt("stick+welding+SMAW+beginner+tutorial")],
        ["MIG welding (GMAW) setup", "Wire speed, voltage, gas flow, and stickout.", welderYt("MIG+welding+setup+wire+speed+voltage+gas+flow")],
        ["TIG welding (GTAW) technique", "Torch angle, filler addition, and tungsten preparation.", welderYt("TIG+welding+technique+tungsten+preparation")],
        ["Flux-cored welding (FCAW)", "Gas-shielded and self-shielded wire basics.", welderYt("flux+core+welding+FCAW+tutorial")],
        ["Reading welding symbols", "Reference line, arrow side, and other side explained.", welderYt("welding+symbols+explained+arrow+side+other+side")],
        ["Weld defects and causes", "Porosity, undercut, lack of fusion, and how to fix them.", welderYt("weld+defects+porosity+undercut+lack+of+fusion")],
        ["Pipe welding positions 5G and 6G", "Fit-up, root pass, and out-of-position technique.", welderYt("pipe+welding+5G+6G+root+pass+tutorial")]
      ])
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for welding yourself.",
      items: welderMd([
        ["Skills Ontario Trades Tech Talk Podcast", "Careers, apprenticeships, and getting started in the skilled trades.", "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/"],
        ["TradeMasters Podcast (Canada)", "Skilled trades careers, licensing, and exam topics.", "https://www.tmws.ca/podcasts"],
        ["YouTube: welding apprentice podcast (audio-only listening)", "Open the results and press play with the screen off, or use a background-play option.", welderYt("welding+apprentice+podcast")]
      ])
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: welderMd([
        ["YouTube: welding podcast (process and troubleshooting)", "Conversations about weld quality, procedures, and problem solving.", welderYt("welding+podcast+troubleshooting+procedures")],
        ["YouTube: welding metallurgy explained (listen-along)", "Preheat, heat input, and why steels crack.", welderYt("welding+metallurgy+explained+preheat+heat+input")],
        ["YouTube: welder career stories (audio)", "Working welders talk about shops, pipelines, and travel.", welderYt("welder+career+stories+podcast")]
      ])
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, inspection, and leadership.",
      items: welderMd([
        ["YouTube: Red Seal welder exam prep (talk-through)", "Study talks you can listen to while commuting.", welderYt("Red+Seal+welder+exam+preparation")],
        ["YouTube: welding inspector and CWI talks", "Inspection, procedures, and quality systems.", welderYt("welding+inspector+CWI+podcast+quality")],
        ["YouTube: leading a crew and mentoring apprentices", "Leadership and training skills for new journeypersons.", welderYt("skilled+trades+leadership+mentoring+apprentices+podcast")]
      ])
    }
  ],
  practiceBank: {
    1: welderQs([
      ["Which item protects your eyes from arc rays during welding?", "A helmet with a lens of the correct shade", ["Clear safety glasses worn under a standard hard hat", "Tinted sunglasses with side shields and a UV rating", "A face shield meant for grinding, with a clear visor"], "Arc light has intense UV and infrared radiation. Only a proper welding lens filters it safely, and clear glasses go under the helmet for slag and grinding."],
      ["Arc eye (flash burn) is caused by:", "Ultraviolet radiation from the arc", ["Flying slag and spatter landing on the eye", "Hot fumes drifting up under the helmet", "Noise and vibration from the arc over a long shift"], "UV light burns the surface of the eye. Pain usually shows up hours later."],
      ["Which kind of power source characteristic is normally used for stick welding?", "Constant current", ["Constant voltage, as used by MIG wire feeders", "Constant wire speed, set at the feeder", "Constant gas flow, set at the regulator"], "Stick and TIG use constant current so arc length changes cause only small current changes."],
      ["Which shielding gas mixture is common for GMAW (MIG) of mild steel?", "75% argon and 25% carbon dioxide", ["100% oxygen, which gives a very hot clean arc", "100% hydrogen, used for fast travel on thick plate", "100% nitrogen, used to keep the weld cool and dry"], "Argon with CO2 gives a stable arc and good wetting on carbon steel."],
      ["Before cutting or welding near combustibles you should:", "Remove or shield them and have a fire watch and extinguisher ready", ["Wet the area with oil so sparks cannot ignite it", "Work faster to finish before anything can catch", "Turn up the amperage and rely on the helmet to protect nearby materials"], "Sparks travel and can start fires in hidden places. Follow your hot work permit."],
      ["When not in use, a compressed gas cylinder should be:", "Secured upright with the valve cap on", ["Laid on the floor so it cannot fall over", "Leaned in a corner, unsecured, away from traffic", "Stored upright with the valve cap removed for access"], "A cylinder with a broken valve can become a projectile, so secure it and cap it."],
      ["Where do you find a consumable's hazards and first-aid measures?", "The Safety Data Sheet (SDS)", ["The invoice that came with the delivery", "The drawing title block on the shop print", "The machine nameplate on the power source"], "WHMIS requires the SDS to describe hazards, handling, and first aid."],
      ["Welding galvanized steel without ventilation can cause:", "Metal fume fever from zinc fume", ["Radiation burns on the skin around the neck", "Hearing loss from the zinc coating cracking", "Nothing, since the galvanized coating is inert when hot"], "Zinc oxide fume causes flu-like symptoms. Remove coating where practical and ventilate."],
      ["The 1G welding position means:", "Flat groove weld", ["Vertical groove weld, made while moving upward", "Overhead groove weld, made from below the joint", "Horizontal groove weld, made across a vertical plate"], "1G is flat, 2G horizontal, 3G vertical, and 4G overhead."],
      ["A tee joint is formed when:", "One member meets another at about 90 degrees forming a T", ["Two plates are laid edge to edge in the same plane", "Two plates overlap one another and are welded at the edge", "Two plates meet at their outside corners forming an L"], "Tee joints are usually welded with fillet welds."],
      ["Low-hydrogen electrodes such as E7018 should be:", "Kept dry and stored as the electrode maker and procedure require", ["Left in open air overnight so moisture can dry off", "Soaked in water before use to cool the arc", "Stored with flux cored wire in any spare box on the shelf near the machine"], "Moisture adds hydrogen to the weld and increases the risk of cracking and porosity."],
      ["3/8 in is closest to how many millimetres?", "9.5 mm", ["3.8 mm, by moving the decimal point one place", "7.5 mm, found by halving the figure and adding one", "11.2 mm, found by multiplying by three and a bit"], "3/8 in is 0.375 in, and 0.375 × 25.4 = 9.525 mm."],
      ["Where should the work lead (ground clamp) be attached?", "On clean bare metal on or near the workpiece", ["On the electrode holder so the circuit is short", "On a painted surface far from the work", "On the gas hose near the regulator"], "A clean, tight connection near the work gives a stable arc and avoids arcing elsewhere."],
      ["Which tool removes slag from a stick weld?", "Chipping hammer", ["Centre punch, struck along the bead", "Tin snips, run along the edge of the bead", "Hacksaw, cutting the slag away from the weld"], "Slag must be removed between passes to avoid inclusions."],
      ["Duty cycle on a welding machine is the percentage of:", "A 10-minute period it can operate at rated output without overheating", ["A 1-hour period it can run at rated output without a break", "The input voltage the machine actually draws from the supply during a weld", "The wire the feeder uses per minute of welding at a set speed"], "At 60% duty cycle, a machine can weld 6 minutes in a 10-minute period at its rated current."],
      ["Which clothing is best for welding?", "Flame-resistant cotton or leather without frayed edges", ["A polyester work shirt that is light and breathable", "Shorts and a t-shirt for comfort in a hot shop", "A nylon windbreaker, since it sheds sparks easily"], "Synthetics melt onto skin. FR clothing resists sparks."]
    ]),
    2: welderQs([
      ["In the electrode E4918, the 49 indicates:", "A minimum tensile strength of about 490 MPa", ["The amperage to use when running the electrode", "The coating thickness measured in thousandths of an inch", "The electrode length in millimetres, with the rest the diameter"], "In the CSA system the first digits give the weld metal's minimum tensile strength in MPa."],
      ["On a welding symbol, a weld on the arrow side is shown:", "Below the reference line", ["Above the reference line, in the other-side position", "On the tail of the symbol, where notes are placed", "Inside the flag, which marks the arrow side"], "Arrow side goes below the reference line and other side goes above."],
      ["A flag on a welding symbol means:", "Field weld", ["Weld all around the joint, which uses a circle", "Grind flush after welding, shown by a contour symbol", "Inspect the weld by x-ray before it leaves the shop"], "The flag indicates the weld is made on site, not in the shop."],
      ["A fillet weld with 10 mm legs has an effective throat of about:", "7.1 mm", ["5.0 mm, which is half the leg size", "10.0 mm, the same as the leg size", "14.1 mm, found by multiplying the leg by 1.41"], "Throat = 0.707 × leg = 7.07 mm."],
      ["Undercut is:", "A groove melted into the base metal at the weld toe and not filled", ["A weld that does not reach the root of the joint and leaves a gap", "Slag trapped between weld passes and not cleaned out before the next bead", "Weld metal rolled over onto the plate without fusing to it"], "Undercut is often caused by excessive current or travel speed or poor technique."],
      ["Short-circuit transfer in GMAW is well suited to:", "Thin material and out-of-position welding", ["Very thick plate welded at high current only", "Underwater welding where the arc must stay shielded", "Aluminum only, since it never needs spray transfer"], "Lower heat input in short-circuit mode keeps the pool small and easier to control."],
      ["Scattered porosity in a MIG weld is commonly caused by:", "Poor shielding gas coverage or contaminated base metal", ["Too much shielding gas pressure and nothing else", "A wire that is too thin for the machine settings", "A short stickout that overheats the contact tip"], "Drafts, clogged nozzles, low gas flow, oil, and rust can all cause porosity."],
      ["For GTAW of carbon steel, the usual polarity is:", "DCEN (electrode negative)", ["DCEP (electrode positive), which overheats the tungsten", "Pulsed DCEP only, with no steady background current", "Neither, because carbon steel is always welded on AC"], "DCEN puts most heat in the work and keeps the tungsten cooler."],
      ["For TIG welding aluminum, the usual current type is:", "AC", ["DCEN, as used for carbon steel and stainless", "DCEP only, with no alternating half cycle", "Pulsed DC only, with no oxide cleaning action"], "The positive half-cycle cleans the oxide, and the negative half-cycle gives penetration."],
      ["A neutral oxy-acetylene flame shows:", "A sharply defined inner cone with no feather", ["A long feathery inner cone, which is a carburizing flame", "A flame with an oxygen hiss and a short pointed cone", "No visible inner cone at any gas setting on the torch"], "Excess acetylene creates a feather (carburizing) and excess oxygen gives a short, hissing flame."],
      ["The generally accepted maximum working pressure for acetylene gas is:", "15 psig (about 103 kPa)", ["50 psig, which is the normal working pressure for any gas", "100 psig, which is the standard line pressure for oxygen", "1000 kPa, the limit shown on most regulator gauges"], "Above this pressure acetylene can decompose unstably."],
      ["The main reason for tack welding is to:", "Hold parts in position before final welding", ["Increase weld strength by itself, with no final weld", "Cool the joint so heat does not spread to the next plate", "Replace the procedure so the welder can skip the WPS"], "Tacks need the same quality as the final weld because they become part of it."],
      ["Which method helps reduce distortion?", "Balanced welding and backstepping", ["Welding all on one side in one long continuous pass", "Increasing heat input so the joint stays hot longer", "Skipping tack welds so the plates are free to move"], "Balancing welds around the neutral axis and using backstep sequences controls shrinkage."],
      ["Plasma arc cutting can cut:", "Any electrically conductive metal, including stainless and aluminum", ["Only carbon steel, because it needs an iron-based plate to carry the arc", "Only non-metals, since it relies on a gas flame", "Only thin aluminum, as thick plate stops the arc"], "Oxyfuel cuts carbon steel only. Plasma melts and blows away conductive metals."],
      ["A welding procedure specification (WPS) is:", "A written set of instructions and parameters for making a weld", ["A welder's certificate listing the tests passed", "A drawing title block with sizes and revision notes", "A tool list of consumables and equipment for the job"], "Welders follow the WPS within the allowed ranges for the job."],
      ["Self-shielded flux-cored wire (FCAW-S) is useful because it:", "Needs no external shielding gas", ["Cannot produce slag, so no cleaning is ever needed", "Only welds aluminum, which needs no gas shield", "Requires pure argon, supplied through the gun nozzle"], "The flux core generates shielding, so it works well outdoors."]
    ]),
    3: welderQs([
      ["Using heat input = (V × A × 60) ÷ (travel speed in mm/min × 1000), 24 V, 200 A, 300 mm/min gives about:", "0.96 kJ/mm", ["9.6 kJ/mm, from misplacing the decimal point", "0.096 kJ/mm, from dividing by 3 000 000 instead", "1.92 kJ/mm, from using 600 mm/min travel speed"], "24 × 200 × 60 = 288 000, divided by 300 000 = 0.96 kJ/mm."],
      ["Lack of fusion is usually caused by:", "Insufficient heat or poor technique so metal does not melt together", ["Too much preheat, which keeps the base metal soft and hard to fuse", "Damp electrodes only, which can never affect fusion", "Using too much shielding gas, which blows the pool away from the joint"], "Low amperage, fast travel, or wrong angle can leave the weld unfused to the base metal."],
      ["The 6G pipe position is:", "Pipe fixed at about 45 degrees to horizontal", ["Pipe rolled flat and turned while the welder stays in place", "Pipe fixed vertically with the weld made in a horizontal line", "Pipe fixed horizontally, welded in the flat position only"], "6G is a fixed pipe inclined at 45°, a demanding all-position test."],
      ["The 5G pipe position is:", "Pipe axis horizontal and fixed, welded around the circumference", ["Pipe axis vertical, welded in a horizontal line around the pipe", "Pipe rotated while the welder holds the flat position throughout", "Pipe fixed at 45 degrees to the horizontal and welded all around"], "5G needs flat, vertical, and overhead technique in a single weld."],
      ["Preheating steel before welding helps by:", "Slowing the cooling rate and reducing cracking risk", ["Increasing hydrogen in the weld metal", "Raising its carbon content so it hardens less", "Replacing the need for filler metal in thick joints"], "A slower cooling rate lets hydrogen escape and limits hard brittle microstructures."],
      ["Which tends to need more caution on preheat?", "Steel with a higher carbon equivalent", ["Low carbon steel only, since it hardens the most", "Any steel at warm ambient temperature, with no preheat", "Steel in thin foil gauge, because it chills quickly"], "Higher carbon equivalent means a higher hardenability and a greater cracking risk."],
      ["A typical filler metal for welding 304 stainless steel is:", "ER308L", ["ER70S-6, a carbon steel filler wire", "ER4043, an aluminum silicon filler rod", "ER5356, an aluminum magnesium filler rod"], "308L matches 304's composition. ER4043 and ER5356 are aluminum fillers."],
      ["Back purging with argon on stainless pipe prevents:", "Oxidation (sugaring) of the root", ["Slag inclusion between weld passes in the joint", "Arc blow caused by residual magnetism in the pipe", "Undercut along the toes of the root pass"], "Without purge gas, air oxidizes the inside of the root and reduces corrosion resistance."],
      ["Welding stainless steel can create which fume hazard?", "Hexavalent chromium", ["Carbon dioxide only, which collects at floor level", "Pure oxygen, which makes the fume flammable", "Water vapour, which is harmless in a confined space"], "Hexavalent chromium is a serious health hazard that needs controls such as exhaust ventilation and respirators."],
      ["Which NDT method finds surface cracks in ferromagnetic steel?", "Magnetic particle testing", ["Ultrasonic testing only, with a probe and couplant", "Radiography only, with film and a source", "Hardness testing, using a portable indenter"], "Magnetic particles gather at flux leakage from surface and near-surface cracks."],
      ["Which test is best known for showing internal porosity and slag as an image?", "Radiographic testing", ["Visual inspection, using a gauge and a flashlight", "Dye penetrant, which only shows surface-breaking flaws", "Magnetic particle, which mainly shows flaws at the surface"], "Radiography produces an image of internal volume defects."],
      ["CSA W59 covers:", "Welded steel construction (metal arc welding)", ["Welding of aluminum only, including structures", "Boiler inspection and the testing of pressure vessels", "The plumbing code for gas and water piping"], "W59 sets design, workmanship, and inspection requirements for welded steel structures."],
      ["CSA W47.1 covers:", "Certification of companies for fusion welding of steel", ["Welder safety clothing and personal protective gear", "Rebar welding only, for concrete reinforcement", "Crane operation and rigging near the welding bay"], "CWB certifies companies to this standard."],
      ["Aluminum can be hard to weld because:", "Its oxide melts at a much higher temperature than the base metal", ["It has no oxide layer, so there is nothing to clean off", "It melts at a higher temperature than steel does", "It cannot conduct heat away from the weld at all"], "The oxide layer must be cleaned or broken, and aluminum conducts heat quickly."],
      ["Pulsed GMAW spray transfer is valued because it:", "Gives spray-like transfer with lower average heat input", ["Needs no shielding gas, so the cost is lower", "Cannot be used on thin metal because it burns through", "Always increases spatter compared with short circuit"], "Pulsing lets you control the pool on thinner material and out of position."],
      ["Spray transfer in GMAW generally requires:", "A high-argon shielding gas and current above the transition", ["Pure CO2 shielding gas and a very short stickout at low voltage", "A short stickout only, at the lowest settings on the machine", "Low voltage and low current, with a steady short-circuiting arc"], "Spray mode is not stable with pure CO2 and low parameters."]
    ]),
    4: welderQs([
      ["A welder performance qualification record shows:", "That a welder passed a qualification test for specified conditions", ["How a welding procedure was qualified by the shop, with test results", "The price quoted for the job and its labour", "A list of consumables used on the weld, by batch number and heat"], "A WPQ records the welder's test and the ranges for which they are qualified."],
      ["A procedure qualification record (PQR) records:", "The actual parameters and test results used to qualify a procedure", ["Welder attendance and the hours worked on each weld in the shift", "Drawing revisions made to the weld details by the engineer", "Cylinder tests for the shielding gas supply to the booth, by date"], "A PQR supports the WPS with evidence of tests on a coupon."],
      ["Changing an essential variable in a procedure usually means:", "The procedure may need to be requalified", ["Nothing, welders can change any variable freely", "The weld is automatically accepted by the inspector", "Only the drawing is updated, with no new tests"], "Essential variables affect mechanical properties, so changes outside the allowed range need approval or requalification."],
      ["Post-weld heat treatment is used to:", "Relieve residual stress and temper the heat-affected zone", ["Add chromium to the weld so it resists corrosion", "Make the weld look brighter and smoother", "Replace inspection and testing of the finished weld"], "PWHT is specified by the code or engineer for certain thicknesses and materials."],
      ["Which Canadian standard covers safety in welding, cutting, and allied processes?", "CSA W117.2", ["CSA S16, the steel design standard for structures", "CSA B51, the boiler and pressure vessel code", "CSA Z259, the fall arrest equipment standard"], "W117.2 is the welding safety standard. S16 is steel design, B51 is the boiler and pressure vessel code, and Z259 is fall protection."],
      ["Arc blow is best reduced by:", "Moving the ground, changing the direction of travel, or using shorter arcs", ["Increasing the arc length and welding faster to outrun the arc deflection", "Using wetter electrodes to steady the arc and keep it from wandering", "Welding with more preheat and nothing else changed on the joint"], "Magnetic fields deflect the arc, so repositioning the work lead often helps."],
      ["Wire birdnesting in a MIG feeder is often caused by:", "Too much drive roll pressure or a restricted liner or tip", ["Too little shielding gas flow at the nozzle only", "Too low voltage at the power source, which weakens the wire push", "Too much preheat on the base plate, which melts the wire early"], "Check the liner, contact tip size, and drive roll tension."],
      ["Centreline cracking is more likely when a weld bead has:", "A deep, narrow profile with a high depth-to-width ratio", ["A wide, flat shape with a low depth-to-width ratio", "A slightly convex shape with good width", "Low travel speed that makes a wide pool"], "Narrow, deep welds solidify with impurities in the centre, which can crack."],
      ["Lamellar tearing is associated with:", "Through-thickness stress in rolled plate at T-joints", ["Hot weld cracking in aluminum alloys during cooling", "Pinholes in stainless steel from poor purging", "Undercut on thin sheet from high travel speed"], "Rolled plate can have weak through-thickness properties, and restrained joints can tear."],
      ["Which is required when welding in a confined space?", "Ventilation, atmospheric testing, and a standby person per procedures", ["Only a helmet, since the space is small and the job is brief", "Nothing at all if the job is short and the hatch is open", "A bigger machine so the weld is finished sooner and fumes are limited"], "Confined space entry has strict permit controls under provincial regulations."],
      ["Pressure welding tickets in Canada are generally issued by:", "Provincial pressure equipment safety authorities", ["The federal customs agency at the border", "Tool manufacturers when you buy a machine", "Insurance companies after a site inspection"], "Examples include ABSA, TSSA, and Technical Safety BC, but each province has its own rules."],
      ["If a fillet weld leg size is doubled, the weld volume per unit length increases by about:", "4 times", ["2 times, because the weld doubles in size", "1.4 times, from the square root of two", "8 times, because volume follows the cube"], "Volume is proportional to leg size squared, so oversize welds are very wasteful."],
      ["A weld made on one side of a plate usually makes the plate:", "Bow toward the weld side as it shrinks", ["Bow away from the weld as the metal expands", "Expand evenly in all directions, with no bowing", "Stay perfectly straight when welded on one side"], "Weld metal shrinks as it cools and pulls the plate toward the weld."],
      ["If the field conditions require a deviation from the WPS, you should:", "Get approval from the responsible engineer or authority before proceeding", ["Do it anyway and tell no one afterwards, to avoid delays", "Ignore the drawing and follow your own judgement on site", "Ask a labourer or another welder on the crew what they would do"], "Deviations need approval so the weld meets the code and design."],
      ["Maximum interpass temperature is limited because excessive temperature can:", "Reduce toughness or strength in some steels", ["Increase hardness in every steel, which is always good", "Improve every property of the steel, so it is not limited", "Remove the need for preheat on the next pass"], "Some steels lose properties in the HAZ with too much heat."],
      ["Hydrogen cracking needs which three conditions together?", "Hydrogen, susceptible microstructure, and tensile stress", ["Oxygen, argon, and nitrogen in the shielding gas", "Low voltage, low current, and a thin plate", "Zinc, salt, and water on the joint surface"], "Remove any one and cracking risk drops, which is why low-hydrogen practices and preheat matter."]
    ])
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get safety training employers ask for (commonly WHMIS, fall protection, and site orientation; requirements vary)", "Try a pre-apprenticeship or welding foundations program if one is offered near you", "Apply to employers, union locals, and training providers, then register your apprenticeship once you have a sponsor"] },
    { title: "Year 1: safety and basic processes", items: ["Learn shop safety, hot work rules, PPE, and cylinder handling", "Practise stick, MIG, and flux-cored welding in the flat and horizontal positions", "Learn oxyfuel and plasma cutting and safe grinding", "Learn to read basic drawings and welding symbols", "Complete your first technical training block"] },
    { title: "Year 2: positions and joint design", items: ["Weld vertical and overhead positions on plate", "Learn joint types, groove preparation, and fit-up", "Start TIG welding on mild steel", "Study weld defects, inspection, and distortion control"] },
    { title: "Year 3: materials and procedures", items: ["Weld stainless steel and aluminum", "Learn preheat, interpass temperature, and basic metallurgy", "Understand WPS, PQR, and welder qualification", "Practise pipe welding in 5G and 6G if your employer works with pipe"] },
    { title: "Year 4 and beyond: advanced", items: ["Work to codes such as CSA W59 and the pressure codes your employer uses", "Learn NDT basics and how to correct rejected welds", "Troubleshoot machines, consumables, and weld quality problems", "Mentor first-year apprentices and use the Red Seal standard to find gaps"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Ask your employer about CWB or pressure welder tests separate from your trade certificate"] }
  ],
  glossary: [
    ["Arc blow", "Deflection of the arc caused by magnetic fields, common with DC welding."],
    ["Arc eye", "Painful flash burn to the cornea from ultraviolet light."],
    ["Backstep welding", "A sequence where each short weld runs opposite to the overall progression to control distortion."],
    ["Bevel", "An angled edge preparation on a joint to allow penetration."],
    ["Carbon equivalent", "A formula estimating how hardenable a steel is, used to judge preheat needs."],
    ["Constant current (CC)", "A power source output that keeps current steady while voltage varies, used for stick and TIG."],
    ["Constant voltage (CV)", "A power source output that keeps voltage steady, used for MIG and flux-cored welding."],
    ["DCEN", "Direct current electrode negative, also called straight polarity."],
    ["DCEP", "Direct current electrode positive, also called reverse polarity."],
    ["Deposition rate", "The mass of weld metal added per hour."],
    ["Duty cycle", "Percentage of a 10-minute period a machine can run at its rated output."],
    ["Fillet weld", "A roughly triangular weld joining two surfaces at about right angles."],
    ["Flux", "A material that shields the weld and cleans the pool, forming slag."],
    ["Groove weld", "A weld made in a prepared groove between two members."],
    ["Heat-affected zone (HAZ)", "Base metal near the weld that is changed by heat without melting."],
    ["Heat input", "Energy delivered per length of weld, in kJ/mm."],
    ["Interpass temperature", "The temperature of the weld area between passes in a multipass weld."],
    ["Lack of fusion", "A defect where weld metal does not fuse with base metal or the previous bead."],
    ["Porosity", "Gas pockets trapped in solidified weld metal."],
    ["PQR", "Procedure qualification record documenting a qualified procedure test."],
    ["Preheat", "Heat applied to base metal before welding."],
    ["Root pass", "The first weld pass in a joint, made at the root."],
    ["Shielding gas", "Gas that protects the molten pool from air, such as argon or argon-CO2."],
    ["Slag", "Hardened flux residue on the surface of a weld."],
    ["Stickout", "The length of wire extending beyond the contact tip in MIG welding."],
    ["Throat", "The shortest distance from the root of a fillet weld to its face."],
    ["Undercut", "A groove melted into the base metal at the toe of a weld and left unfilled."],
    ["WPQ", "Welder performance qualification record."],
    ["WPS", "Welding procedure specification giving required parameters and methods."]
  ],
  cards: [
    { front: "Fillet weld throat from leg size", back: "Throat = 0.707 × leg" },
    { front: "Heat input (kJ/mm)", back: "(Volts × Amps × 60) ÷ (travel speed mm/min × 1000)" },
    { front: "Inches to millimetres", back: "1 in = 25.4 mm" },
    { front: "Common MIG shielding gas for mild steel", back: "75% argon and 25% CO2" },
    { front: "Max working pressure for acetylene", back: "15 psig (about 103 kPa)" },
    { front: "Weld positions for plate groove", back: "1G flat, 2G horizontal, 3G vertical, 4G overhead" },
    { front: "Pipe test positions", back: "5G is fixed horizontal, 6G is fixed at 45 degrees" },
    { front: "Which side is the arrow side on a symbol?", back: "Below the reference line" },
    { front: "Stick welding power source type", back: "Constant current" }
  ],
  jobsIntro: "Look for fabrication shops, structural and industrial contractors, pipeline and pressure piping companies, mining and equipment repair operations, and union locals.",
  tips: ["Bring a short resume, your safety tickets, and ID.", "Show your weld coupons or photos of practice work when you can.", "Visit shops in person and follow up. Mention any CWB tests you have passed.", "Ask what tools and PPE you must bring and what the employer supplies."],
  forumTopics: ["Starting out", "Welding processes and troubleshooting", "Pipe and pressure welding", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
  reference: [
    {
      title: "Weld positions",
      table: {
        head: ["Position", "Groove", "Fillet", "Description"],
        rows: [["Flat", "1G", "1F", "Welding from above, joint face roughly horizontal"], ["Horizontal", "2G", "2F", "Weld axis horizontal on a vertical plate"], ["Vertical", "3G", "3F", "Weld axis vertical"], ["Overhead", "4G", "4F", "Welding from below"], ["Pipe horizontal fixed", "5G", "", "Pipe axis horizontal and not rotated"], ["Pipe inclined fixed", "6G", "", "Pipe at about 45° and not rotated"]]
      },
      note: "Names and limits of qualified ranges come from your code and procedure."
    },
    {
      title: "Key formulas",
      list: ["Fillet throat = 0.707 × leg size. Example: 8 mm leg gives about 5.7 mm throat.", "Heat input (kJ/mm) = (V × A × 60) ÷ (travel speed in mm/min × 1000). Example: 24 V, 200 A, 300 mm/min = 0.96 kJ/mm.", "Duty cycle: percentage of a 10-minute period at rated output.", "Plate mass: 7.85 kg per square metre for each millimetre of thickness (steel density 7850 kg/m³).", "Linear expansion of steel is about 12 × 10⁻⁶ per °C, so 10 m of steel warming 50 °C grows about 6 mm."]
    },
    {
      title: "Common processes at a glance",
      table: {
        head: ["Process", "Name", "Shielding", "Power source"],
        rows: [["SMAW", "Stick", "Flux coating on electrode", "Constant current"], ["GMAW", "MIG", "External gas such as Ar/CO2", "Constant voltage"], ["FCAW", "Flux-cored", "Core flux, with or without gas", "Constant voltage"], ["GTAW", "TIG", "Argon or argon mixes", "Constant current"], ["SAW", "Submerged arc", "Granular flux blanket", "CC or CV"]]
      },
      note: "Process choice depends on material, thickness, position, location, and your procedure."
    },
    {
      title: "Weld defects and typical causes",
      table: {
        head: ["Defect", "Typical causes", "Typical fix"],
        rows: [["Porosity", "Poor gas coverage, contamination, wet electrodes", "Clean joint, check gas and nozzle, dry consumables"], ["Undercut", "Excess current or travel speed, wrong angle", "Reduce current, pause at toes, correct angle"], ["Lack of fusion", "Low heat, fast travel, poor angle", "Raise heat, slow down, correct technique"], ["Slag inclusion", "Poor cleaning between passes", "Clean each pass thoroughly"], ["Hydrogen cracking", "Hydrogen, hard microstructure, stress", "Dry low-hydrogen consumables and preheat"], ["Overlap", "Travel too slow or current too low", "Adjust travel speed and heat"]]
      }
    },
    {
      title: "Standards and pointers",
      list: ["CSA W59: welded steel construction (metal arc welding).", "CSA W47.1: certification of companies for fusion welding of steel. CSA W47.2 covers aluminum.", "CSA W48: filler metals and allied materials for metal arc welding.", "CSA W117.2: safety in welding, cutting, and allied processes.", "CSA B51 and ASME codes apply to pressure equipment. Provincial safety authorities regulate pressure welding.", "WHMIS and SDS apply to consumables, fluxes, and gases."],
      note: "Always confirm the current edition adopted in your province."
    },
    {
      title: "Helmet shade guide (typical, check your lens and standard)",
      table: {
        head: ["Task", "Typical shade range"],
        rows: [["Light cutting and brazing", "3 to 5"], ["Gas welding", "4 to 8"], ["Arc welding at lower amperage", "9 to 11"], ["Arc welding at higher amperage", "12 to 14"]]
      },
      note: "Shade selection depends on amperage and process. Follow your employer's PPE rules."
    }
  ]
});
