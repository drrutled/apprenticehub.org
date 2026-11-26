// Tool and Die Maker guide. Practice questions are original study aids, not official Red Seal exam questions.
{
  const I = (name, why, search) => ({ name, why, search });
  const M = (name, desc, url) => ({ name, desc, url });
  const V = (name, desc, q) => M(name, desc, "https://www.youtube.com/results?search_query=" + q);
  const Q = (q, a, w, i, explain) => { const options = [...w]; options.splice(i, 0, a); return { q, options, answer: i, explain }; };

  const toolGroups = [
    {
      title: "Day-one tools, buy once and buy well",
      note: "Professional-grade measuring and layout tools hold their accuracy for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first, since shops often supply cutters, wheels, and machine tooling.",
      items: [
        I("Starrett or Mitutoyo 150 mm (6 in) digital calipers", "Quick checks on plates, pockets, and stock. Verify against a micrometer for tight work.", "Mitutoyo Starrett 150mm 6 inch digital caliper"),
        I("Mitutoyo or Starrett 0-25 mm (0-1 in) outside micrometer", "Precision size checks on punches, pins, and ground parts.", "Mitutoyo Starrett 0-25mm outside micrometer"),
        I("Starrett combination square set", "Squareness and layout checks during setups.", "Starrett 6 inch combination square set"),
        I("Precision parallels and a small machinist vise", "Support and hold ground plates without distortion.", "precision steel parallels set machinist vise"),
        I("Safety glasses with side shields (CSA Z94.3) and a face shield", "Grinding sparks, chips, and oil mist. A face shield goes over glasses for grinding.", "CSA Z94.3 safety glasses face shield grinding"),
        I("CSA-approved safety boots (green triangle, metatarsal guard if required)", "Die sections and plates are heavy and drop hazards are real. Choose slip-resistant soles.", "CSA safety boots metatarsal slip resistant"),
        I("Hearing protection (earmuffs or custom plugs)", "Grinders, presses, and shops can be loud for a full shift.", "3M Peltor earmuffs hearing protection CSA"),
        I("Hex key sets (metric and imperial) and a torque wrench", "Socket head cap screws are everywhere in dies and moulds. Torque them to the specification.", "Wera hex key set metric imperial torque wrench 1/4 drive"),
        I("Dowel pin punches and a brass or dead-blow hammer", "Seat and remove dowels and tool components without marking them.", "pin punch set brass hammer dead blow"),
        I("Deburring tool, stones, and a set of files", "Break edges and dress surfaces without damaging ground faces.", "Noga deburring tool Arkansas stone set files")
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson which brands survive in your shop.",
      items: [
        I("Dial indicator and a lever-type test indicator with magnetic base", "Tramming vises, setting parallels, and aligning plates on mills and grinders.", "dial test indicator lever type magnetic base Starrett Mitutoyo"),
        I("Micrometer set (25-50, 50-75, 75-100 mm)", "Extends your measuring range for die plates and tooling.", "Mitutoyo micrometer set 0-100mm"),
        I("Telescoping and small-hole gauge set", "Transfer bore sizes to a micrometer.", "telescoping gauge set small hole gauge set"),
        I("Pin gauge set and a magnetic sine plate", "Check small holes and set up angles for grinding.", "pin gauge set magnetic sine plate"),
        I("Edge finder and layout kit (scriber, dividers, prick punch)", "Locate work on mills and mark out plates before machining.", "mill edge finder scriber dividers prick punch set"),
        I("Rolling tool chest", "Protects precision tools from chips and knocks.", "Waterloo Kennedy machinist tool chest")
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop. Ask before buying, and learn to calibrate and care for each.",
      items: [
        I("Height gauge (digital or vernier) and surface plate accessories", "Layout and inspection on a surface plate.", "Mitutoyo digital height gauge 300mm"),
        I("Gauge block set and a sine bar", "Set precise angles for grinding and inspection.", "gauge block set sine bar 100mm"),
        I("Optical comparator or profile projector access", "Check punch and die profiles against drawings. Usually a shop tool.", "optical comparator profile projector machinist"),
        I("Thread plug and ring gauges", "Acceptance checks for threaded details.", "thread plug gauge ring gauge metric"),
        I("Jeweller's screwdrivers and fine stones", "Fit and polish small details and inserts.", "jeweler screwdriver set diamond lapping stones")
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for blueprints, trig, and tooling theory. Check with your school and exam body about calculator rules before you buy.",
      items: [
        I("Scientific calculator with trig functions (Casio fx-991 or TI-30XS)", "Trig for angles, bolt circles, and sine bar setups.", "Casio fx-991 Texas Instruments TI-30XS MultiView"),
        I("Machinery's Handbook (current edition)", "The standard shop reference for tables, fits, and formulas.", "Machinery's Handbook Industrial Press"),
        I("Die design and metal stamping textbook", "Learn blanking, forming, and progressive die principles.", "die design handbook metal stamping book"),
        I("Plastic injection mould design reference", "Learn gates, runners, cooling, and ejection.", "injection mold design handbook book"),
        I("GD&T reference guide (ASME Y14.5 based)", "Feature control frames and datums for blueprint reading.", "GD&T pocket guide ASME Y14.5"),
        I("Mechanical pencil (0.5 mm) and drafting triangles", "Sketching sections and layouts clearly.", "Pentel GraphGear 1000 mechanical pencil drafting triangle"),
        I("Field notebook (Rite in the Rain) and graph paper", "Record setups, clearances, and shim changes.", "Rite in the Rain notebook graph paper"),
        I("Binder, dividers, and highlighters", "Organize notes by year and topic for Red Seal review.", "binder dividers highlighters")
      ]
    }
  ];

  const mediaGroups = [
    {
      title: "Official and standards resources",
      items: [
        M("Red Seal exam preparation", "How Red Seal exams work and how to prepare. Find the Tool and Die Maker trade page from here.", "https://red-seal.ca/eng/welcome.shtml"),
        M("Codes Canada", "Canadian model codes, useful for building and safety context.", "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada"),
        M("CSA Group", "Standards bodies publish power press and lockout standards.", "https://www.csagroup.org/"),
        M("Canadian Centre for Occupational Health and Safety (CCOHS)", "Free safety fact sheets on machine guarding, noise, and WHMIS.", "https://www.ccohs.ca/"),
        M("Unifor", "Union representing many manufacturing and tooling workers in Canada.", "https://www.unifor.org/")
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and shop procedures.",
      items: [
        V("Progressive die basics", "How strip layouts and stations work.", "progressive+stamping+die+basics+explained"),
        V("Blanking and piercing clearance", "Die clearance and cut edge quality.", "blanking+piercing+die+clearance+explained"),
        V("Wire EDM basics", "How wire EDM cuts hardened steel.", "wire+EDM+basics+how+it+works"),
        V("Sinker EDM basics", "Electrodes, flushing, and spark gap.", "sinker+EDM+basics+electrode"),
        V("Surface grinding basics", "Setup, dressing, and grinding a plate flat.", "surface+grinder+basics+setup+dressing+wheel"),
        V("Injection mould components", "Cavity, core, sprue, runner, gate, and ejection.", "injection+mold+components+explained+cavity+core"),
        V("Heat treating tool steel", "Hardening and tempering basics.", "heat+treating+tool+steel+hardening+tempering"),
        V("Die tryout and troubleshooting", "Finding and fixing stamping problems.", "stamping+die+tryout+troubleshooting")
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for tool and die work yourself.",
      items: [
        M("Skills Ontario Trades Tech Talk Podcast", "Careers, apprenticeships, and getting started in the skilled trades.", "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/"),
        M("TradeMasters Podcast (Canada)", "Skilled trades careers, licensing, and exam topics.", "https://www.tmws.ca/podcasts"),
        M("YouTube: tool and die apprentice podcast (audio-only listening)", "Open the results and press play with the screen off, or use a background-play option.", "https://www.youtube.com/results?search_query=tool+and+die+apprentice+podcast")
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        M("YouTube: metal stamping podcast", "Stamping process, die maintenance, and quality talks.", "https://www.youtube.com/results?search_query=metal+stamping+podcast+die"),
        M("YouTube: plastic injection moulding podcast", "Moulding process and mould maintenance topics.", "https://www.youtube.com/results?search_query=injection+molding+podcast+mold+maintenance"),
        M("YouTube: manufacturing podcast (tooling)", "Tooling, quality, and shop floor topics.", "https://www.youtube.com/results?search_query=manufacturing+podcast+tooling+machine+shop")
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, tool design, quoting, and leadership.",
      items: [
        M("YouTube: Red Seal tool and die exam prep (talk-through)", "Study talks you can listen to while commuting.", "https://www.youtube.com/results?search_query=Red+Seal+tool+and+die+maker+exam+preparation"),
        M("YouTube: tooling business and quoting podcast", "Quoting, scheduling, and running a tool room.", "https://www.youtube.com/results?search_query=tool+and+die+shop+business+quoting+podcast"),
        M("YouTube: mentoring apprentices and shop leadership", "Leadership and training skills for new journeypersons.", "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast")
      ]
    }
  ];

  const practiceBank = {
    1: [
      Q("Where should a bench grinder's tool rest be set relative to the wheel?", "As close as practical, commonly no more than about 3 mm (1/8 in)", ["About 25 mm (1 in) away, so there is room to swing the work around freely", "Removed completely", "Touching the wheel"], 2, "A small gap stops work from jamming between the rest and wheel. Follow the manufacturer's setting and check it with the grinder off."),
      Q("What should you wear when grinding?", "Safety glasses plus a face shield", ["Loose work gloves and a ball cap for protection from sparks", "Nothing if you are quick", "Sunglasses"], 0, "Sparks and wheel fragments are hazards. Eye protection is mandatory, and a face shield adds protection."),
      Q("Which is a safe way to remove chips and swarf from a machine?", "Stop the machine and use a brush or hook", ["Blow them off yourself with compressed air", "Wipe with bare hands", "Use a rag on a running spindle"], 3, "Compressed air can drive chips into skin or eyes. Use hooks and brushes only."),
      Q("0.500 in is how many millimetres?", "12.7 mm", ["1.27 mm", "127 mm", "5.0 mm"], 1, "0.500 × 25.4 = 12.7 mm."),
      Q("What does a jig do compared with a fixture?", "A jig guides the tool, a fixture holds the work", ["A jig holds the work, a fixture guides the tool", "They are the same device", "A jig is only for grinding"], 3, "Drill jigs use bushings to guide the drill. Fixtures locate and clamp the workpiece."),
      Q("In a die, which part is the female member?", "The die button or die block opening", ["The punch", "The stripper bolt", "The pilot only"], 0, "The punch is the male member that enters the die opening."),
      Q("What is the main purpose of dowel pins in a die set?", "To locate parts accurately and allow realignment after disassembly", ["To clamp the die parts tightly together so they cannot shift under load", "To cool the die", "To lubricate guide posts"], 2, "Screws clamp, dowels locate. A properly fitted dowel pair brings parts back to the same position."),
      Q("D2 tool steel is known mainly for:", "High wear resistance", ["Being the softest tool steel", "Being non-magnetic", "Being free of carbon"], 1, "D2 is high-carbon, high-chromium, and often used for punches and dies."),
      Q("O1 tool steel is classed as:", "Oil hardening", ["Water hardening", "Air hardening only", "Not hardenable"], 0, "The O stands for oil-hardening tool steel, widely used for general tooling."),
      Q("Where do you find the hazards of a cutting or EDM fluid?", "On its Safety Data Sheet (SDS)", ["On the press tonnage plate", "On the parallels", "On the drawing revision block"], 3, "WHMIS requires suppliers to provide an SDS. Check it before using a new product."),
      Q("What are parallels used for?", "Supporting work level and off the vise bottom", ["Measuring threads", "Cutting keyways and slots into the end of a shaft", "Setting wheel speed"], 1, "Ground parallels give a flat, level support for work in a vise."),
      Q("What is the safest way to move a heavy die section?", "Use rated lifting eyes and rigging, and never stand under the load", ["Carry it alone with a back belt, bending at the knees to keep the lift quick", "Use a rope around the corners", "Slide it on the floor with your foot"], 2, "Check the lifting device rating and the load. Keep clear of suspended loads."),
      Q("Why deburr parts after machining?", "Burrs cut hands and interfere with fits and assembly", ["Burrs make parts stronger by adding extra material at edges", "Burrs improve surface finish", "It is only cosmetic"], 0, "Removing burrs protects people and prevents assembly problems."),
      Q("Layout dye on a plate is used to:", "Make scribed lines easy to see", ["Harden the plate", "Remove oil", "Cool the grinding wheel"], 3, "A thin coat of dye gives a high-contrast surface to scribe on."),
      Q("Hardened tool steel is commonly finished by:", "Grinding", ["Hand filing only", "Drilling with a standard drill", "Bending"], 1, "Hardened steel is too hard for ordinary cutting tools, so grinding, EDM, or hard milling are used."),
      Q("What must you do before adjusting or cleaning a machine?", "Stop it and lock out its energy sources", ["Slow it down", "Hold a rag over the moving part", "Ask a coworker to watch"], 2, "Lockout prevents unexpected start-up. CSA Z460 covers control of hazardous energy.")
    ],
    2: [
      Q("In a blanking die, which part sets the size of the blank?", "The die opening", ["The punch", "The stripper", "The pilot"], 0, "In blanking, the die opening is made to blank size and the punch is smaller by the clearance."),
      Q("In a piercing die, which part sets the size of the hole?", "The punch", ["The die opening", "The stripper", "The slug"], 3, "In piercing, the punch is made to hole size and the die opening is larger."),
      Q("The die opening is 20.20 mm and the punch is 20.00 mm. What is the clearance per side?", "0.10 mm", ["0.20 mm", "0.05 mm", "0.40 mm"], 2, "Total clearance 0.20 mm divided by two sides is 0.10 mm per side."),
      Q("A blank has a 200 mm cut perimeter, 2 mm thickness, and 300 MPa shear strength. The approximate blanking force is:", "120 kN", ["12 kN", "1200 kN", "60 kN"], 1, "F = perimeter × thickness × shear strength = 200 × 2 × 300 = 120 000 N = 120 kN."),
      Q("What is a stripper plate's main job?", "To strip the stock from the punch after the cut", ["To cool the die", "To locate the die in the press", "To measure the strip"], 0, "Material grips the punch on the up-stroke, and the stripper holds it down."),
      Q("What do pilots do in a progressive die?", "Locate the strip accurately at each station", ["Lubricate the stock as it moves through each station", "Cut the slug", "Adjust the press stroke"], 2, "Pilots enter holes already pierced to register the strip before the cut or form."),
      Q("What is springback in bending?", "Partial return of the formed part toward its original shape", ["Extra stretching of the part as the bend is pulled past its limit", "Cracking of the bend", "A press malfunction"], 1, "Material elastically recovers after forming, so dies often overbend to compensate."),
      Q("To reduce cracking, a bend line is usually best oriented:", "Across the rolling direction of the sheet", ["Along the rolling direction", "At the sheet edge", "At the burr side only"], 3, "Bending across the grain is generally less prone to cracking, but check the material specification."),
      Q("Wire EDM can cut only materials that are:", "Electrically conductive", ["Soft enough to be machined by conventional tools", "Magnetic", "Hardened"], 0, "The spark needs a conductive workpiece. It can cut hardened tool steel."),
      Q("The dielectric fluid in wire EDM is usually:", "Deionized water", ["Salt water, to help the spark carry current", "Gasoline", "Compressed air"], 1, "Deionized water insulates, flushes debris, and cools the cut. Machines also have oil-based variants for sinkers."),
      Q("What is the purpose of a ring test on a grinding wheel?", "To check for cracks before mounting", ["To balance the wheel and trim it round before use", "To measure grit size", "To set the speed"], 2, "A sound vitrified wheel rings when tapped, and a crack gives a dull sound."),
      Q("A grinding wheel's maximum rated speed on its label:", "Must never be exceeded", ["Can be exceeded by 10%", "Applies only to new wheels", "Is advisory only"], 0, "Overspeed can cause a wheel to burst. Check the machine speed against the label."),
      Q("Why do injection mould cavities have draft angles?", "To let the part release from the mould", ["To make parts lighter", "To cool the plastic", "To improve the gate"], 3, "Slight taper on vertical walls reduces drag during ejection."),
      Q("To reduce the risk of quench cracking in hardening, you should:", "Use radii and avoid sharp internal corners", ["Add sharp notches to relieve the stress in the part", "Quench as fast as possible regardless", "Skip tempering"], 1, "Sharp corners concentrate stress. Good design and correct quenching help."),
      Q("Sinker EDM electrodes are commonly made of:", "Graphite or copper", ["Aluminum oxide ceramic rods", "Glass", "Soft pine wood"], 2, "Both conduct well and erode in a controlled way. The cavity takes the electrode's shape."),
      Q("What is the term for the guide bushings in a drill jig used for?", "Guiding the drill to the correct location and angle", ["Holding the jig steady on the bench while drilling is done", "Cooling the drill", "Measuring hole depth"], 0, "Hardened bushings guide drills and reamers so holes repeat accurately.")
    ],
    3: [
      Q("In an injection mould, the gate is:", "The small opening where plastic enters the cavity", ["The channel from the nozzle to the manifold", "The pin that pushes out the part", "The cooling line that carries water around the cavity"], 1, "The sprue and runner carry plastic, and the gate is the final restriction into the cavity."),
      Q("What do ejector pins do?", "Push the moulded part out of the open mould", ["Cool the part", "Fill the cavity", "Heat the steel"], 2, "They move forward as the mould opens to eject the part."),
      Q("Mould vents are cut to:", "Let trapped air and gas escape the cavity", ["Let molten plastic escape so the cavity can fill", "Cool the part", "Eject the sprue"], 0, "Vents are very shallow so air leaves but plastic does not."),
      Q("A hot runner system mainly:", "Keeps plastic molten in the manifold so there is no cold runner to eject", ["Cools the part faster by running chilled fluid through the manifold plates", "Reduces the clamp force", "Replaces the gate"], 3, "It reduces waste and cycle time but costs more and needs careful temperature control."),
      Q("Why is a mould cavity cut slightly oversize?", "To allow for plastic shrinkage as the part cools", ["To save steel and shorten the machining time", "To fit the press", "To allow for rust"], 1, "Different resins shrink differently, so use the material supplier's shrink data."),
      Q("The shut height of a stamping press is:", "The distance from bolster to slide with the slide at the bottom of its stroke", ["The overall height of the press from the floor to the top of the crown with the slide up", "The strip thickness", "The length of the stroke"], 2, "A die must fit within the press's shut height range with the adjustment."),
      Q("Stock lifters in a progressive die:", "Raise the strip so it can feed forward without dragging", ["Punch the small holes needed in the strip at each station", "Cool the strip", "Measure the strip"], 0, "Formed features would catch the die if the strip were not lifted."),
      Q("Adding a shear angle to a punch face does what?", "Reduces peak cutting force", ["Increases tonnage", "Prevents burrs entirely", "Makes the punch longer"], 3, "A shear angle spreads the cutting over time, but it distorts the slug or the blank."),
      Q("On a blanked part, a heavy burr usually points to:", "Worn cutting edges or incorrect clearance", ["Too much lubricant", "A fresh die", "Too slow a press"], 1, "Check edge condition and clearance first, then regrind or adjust."),
      Q("D2 is commonly hardened to about which range?", "58 to 62 HRC", ["20 to 25 HRC, the range of a mild annealed steel", "5 to 10 HRC", "90 to 95 HRC"], 0, "Exact values depend on the heat-treat specification and application."),
      Q("Which tool steel group is designed for shock loading, such as chisels and punches under impact?", "S-series (such as S7)", ["Water-hardening W1 only", "Free-cutting steel", "Cast iron"], 2, "S7 is a shock-resisting tool steel. Choose the steel for the load."),
      Q("H13 tool steel is commonly used for:", "Hot work tooling such as die casting and extrusion dies", ["Wood chisels and other hand tools used at room temperature only", "Springs", "Structural beams"], 3, "H13 keeps strength at elevated temperature and resists heat checking."),
      Q("The wire EDM path offset from the programmed profile is about:", "Wire radius plus spark gap", ["The full wire diameter plus the part thickness", "The thickness of the part", "Zero"], 1, "Controls compensate for the radius of the wire and the gap so parts come out to size."),
      Q("Why are die shoes and plates ground flat and parallel?", "So the die closes square and wears evenly", ["To look attractive and make them easy to handle", "To lower the weight", "To avoid oil"], 2, "Parallelism affects alignment, clearance, and tool life."),
      Q("A bend relief is used to:", "Prevent tearing at the corners of a bend", ["Reduce the shear strength of the sheet at the bend", "Cool the die", "Lock the part"], 0, "A small notch or relief at a bend end avoids stress concentration and tearing.")
    ],
    4: [
      Q("Slugs are pulled back up with the punch. A common fix is:", "Slug-retention features or vacuum relief in the punch, and checking clearance", ["Using a much larger die opening so the slug has plenty of room to fall through", "Using more oil on the strip", "Removing the stripper"], 1, "Slug pulling can come from oil and vacuum. Retention features, vent holes, or ejector pins help."),
      Q("Burrs are increasing steadily during a long production run. The first action is to:", "Inspect and regrind the dull punch and die edges", ["Slow the press down and keep running while watching the burrs", "Increase the tonnage", "Add more oil"], 0, "Wear opens clearance and rounds the edges. Regrinding restores sharp edges."),
      Q("After grinding a die section, how is the shut height commonly restored?", "By adding shims or adjusting the stack to compensate", ["By polishing the die faces until the stack is back to height", "By raising the press speed", "By loosening the dowels"], 2, "Grinding removes height, so shims bring the die back to its design height."),
      Q("Two 10 mm holes are pierced in 1.5 mm stock, shear strength 250 MPa. The approximate piercing force is:", "About 23.6 kN", ["About 2.4 kN", "About 236 kN", "About 11.8 kN"], 3, "Perimeter = 2 × π × 10 ≈ 62.8 mm. Force = 62.8 × 1.5 × 250 ≈ 23 600 N."),
      Q("98.1 kN of force is about how many tonnes-force?", "10", ["1", "100", "0.1"], 0, "1 tonne-force is about 9.81 kN, so 98.1 kN is about 10 tonnes-force."),
      Q("When choosing a press for a die, you should confirm that:", "The press capacity, bed size, and shut height suit the die and the load", ["Any press with a high enough tonnage rating will do, whatever the bed size", "Only the colour matches", "Only the bed size matters"], 1, "Check tonnage, energy, bolster size, shut height, and feed equipment."),
      Q("Flash at the parting line on a moulded part is commonly caused by:", "Low clamp force, worn parting surfaces, or excess pressure", ["Too little injection pressure combined with a mould that is far too cold", "Too cold a mould", "A vent being too small"], 2, "Plastic leaks where the mould halves do not seal. Check clamp tonnage and the parting surfaces."),
      Q("Sink marks on a moulded part usually mean:", "Thick sections or too little packing pressure and time", ["Too much venting letting the air and gas escape the cavity", "A bad ejector pin", "Rust on the cavity"], 0, "Material shrinks and pulls the surface inward in thick areas."),
      Q("A short shot means:", "The cavity did not fill completely", ["The part is too long", "The gate is too large", "The mould is too hot"], 3, "Look at melt temperature, pressure, gate size, and venting."),
      Q("Burn marks on a moulded part are most often caused by:", "Trapped air that overheats, from poor venting", ["Too cold a mould that makes the plastic freeze early", "Too much packing", "A worn ejector pin"], 1, "Compressed air ignites or overheats the resin. Clean and deepen vents as needed."),
      Q("Which standard covers the operation of mechanical power presses in Canada?", "CSA Z142", ["CSA Z460 only", "CSA B139", "CSA C22.1"], 2, "CSA Z142 is the code for power press operation. Provincial regulations also apply."),
      Q("Before working in the die area of a press, a die setter should:", "Lock out the press and use safety blocks", ["Turn the press to slow speed and work between strokes", "Hold the flywheel", "Rely on the light curtain only"], 0, "Press energy can still move the ram. Lockout and blocks keep it from falling."),
      Q("A hole has MMC 10.0 mm, size range 10.0 to 10.2 mm, and a position tolerance of Ø0.1 mm at MMC. If the hole measures 10.15 mm, the allowable position tolerance is:", "Ø0.25 mm", ["Ø0.10 mm", "Ø0.15 mm", "Ø0.35 mm"], 3, "Bonus = 10.15 − 10.0 = 0.15, so total = 0.10 + 0.15 = 0.25 mm."),
      Q("Three parts are stacked, each ±0.05 mm. The worst-case stack tolerance is:", "±0.15 mm", ["±0.05 mm", "±0.10 mm", "±0.30 mm"], 1, "A worst-case stack adds all tolerances: 3 × 0.05 = 0.15 mm."),
      Q("Why make skim passes in wire EDM?", "To improve accuracy and surface finish after the roughing cut", ["To speed up the job by cutting through the part faster with heavier passes", "To use more wire", "To remove the dielectric"], 2, "Lighter finishing cuts remove the recast layer and reduce stress marks."),
      Q("Why leave grinding stock on a part before heat treat?", "Hardening can distort the part, so finish grinding corrects it afterward", ["To use up extra steel stock left over from the bar the part was cut from", "Because hardening makes steel smaller", "Because grinding is cheaper than cutting"], 0, "Distortion is common in hardening, so critical surfaces are finished after hardening.")
    ]
  };

  const glossary = [
    ["Blanking", "Cutting a flat shape out of sheet where the cut-out piece is the part."],
    ["Bolster", "The thick plate on a press bed that a die mounts to."],
    ["Burr", "A raised sharp edge left from cutting or shearing."],
    ["Cavity", "The hollow part of a mould that forms the outside of the part."],
    ["Clearance", "The gap between punch and die, usually stated per side."],
    ["Core", "The part of a mould that forms the inside of the part."],
    ["Die", "The female tooling that forms or cuts material in a press."],
    ["Die set", "A pair of plates with guide posts that keeps punch and die aligned."],
    ["Dowel", "A precision pin that locates tooling components."],
    ["Draft", "A taper on mould walls that allows a part to release."],
    ["EDM", "Electrical discharge machining, which erodes conductive metal with sparks."],
    ["Ejector pin", "A pin that pushes a moulded part out of the mould."],
    ["Fixture", "A device that holds and locates a workpiece for machining."],
    ["Flash", "Thin excess plastic that escapes at the parting line."],
    ["Gate", "The opening where molten plastic enters the cavity."],
    ["Jig", "A device that guides a tool to the correct location on a workpiece."],
    ["Parting line", "The surface where the two halves of a mould meet."],
    ["Pierce", "To punch a hole in a sheet, where the slug is scrap."],
    ["Pilot", "A pin that locates the strip in a progressive die."],
    ["Progressive die", "A die that performs several operations in stations as the strip advances."],
    ["Punch", "The male member that enters the die to cut or form."],
    ["Runner", "The channel that carries molten plastic from the sprue to the gate."],
    ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
    ["Shut height", "Press height from bolster to slide at the bottom of the stroke."],
    ["Slug", "The scrap piece punched out of a hole."],
    ["Sprue", "The channel where plastic first enters the mould from the nozzle."],
    ["Stripper", "A plate or pad that removes the stock from the punch."],
    ["Temper", "A heat treatment after hardening that reduces brittleness."],
    ["Tool steel", "Steel formulated for cutting, forming, and shaping other materials."],
    ["WHMIS", "Canada's workplace hazardous materials information system."]
  ];

  const reference = [
    {
      title: "Die and force formulas",
      list: [
        "Blanking or piercing force = cut perimeter × material thickness × shear strength",
        "Convert: tonnes-force = force in kN ÷ 9.81, and 1 US ton of force ≈ 8.896 kN",
        "Clearance per side = (die opening − punch size) ÷ 2",
        "Blanking: die opening = blank size, punch = die opening − 2 × clearance",
        "Piercing: punch = hole size, die opening = punch + 2 × clearance",
        "Clearance depends on the material, thickness, and hardness, so follow the die design data"
      ],
      note: "Example: 200 mm × 2 mm × 300 MPa = 120 kN."
    },
    {
      title: "Common tool steels (typical uses)",
      table: {
        head: ["Steel", "Type", "Typical use"],
        rows: [["O1", "Oil hardening", "General tooling, gauges, punches"], ["A2", "Air hardening", "Punches and dies with good dimensional stability"], ["D2", "High carbon, high chromium", "Wear-resistant blanking dies and punches"], ["S7", "Shock resisting", "Chisels, punches, and impact parts"], ["H13", "Hot work", "Die casting and extrusion tooling"], ["M2", "High speed", "Cutting tools and heavy-duty punches"]]
      },
      note: "Heat treat values vary, so use the supplier's data sheet."
    },
    {
      title: "Injection mould parts",
      table: {
        head: ["Part", "Job"],
        rows: [["Sprue", "First channel from the machine nozzle"], ["Runner", "Channel to the gate or gates"], ["Gate", "Entry into the cavity"], ["Cavity and core", "Form the outer and inner shape of the part"], ["Ejector system", "Pushes the part out of the mould"], ["Cooling channels", "Control temperature and cycle time"], ["Vents", "Let trapped air escape"]]
      }
    },
    {
      title: "Press and setup checks",
      list: [
        "Confirm tonnage, bed size, and shut height before loading a die",
        "Lock out the press and use safety blocks before working in the die area",
        "Clamp the die with the rated number of clamps and torque them to specification",
        "Check feed, pilots, and stock lift before running strips",
        "Run a first-piece inspection and record the measurements",
        "Check guarding against CSA Z142 and your provincial regulations"
      ]
    },
    {
      title: "Conversions and trig for tooling work",
      list: [
        "1 in = 25.4 mm, and 0.001 in = 0.0254 mm",
        "Sine bar height: H = L × sin θ",
        "Worst-case tolerance stack = sum of the individual tolerances",
        "Thermal growth: ΔL = α × L × ΔT (steel α ≈ 12 × 10⁻⁶ per °C)",
        "Measure at about 20 °C, the standard reference temperature for dimensional work"
      ]
    }
  ];

  registerTrade({
    id: "tool-and-die-maker", store: "tool-and-die-maker", title: "Tool and Die Maker", name: "Tool and Die Maker", short: "tool and die",
    category: "Manufacturing · Tooling · Metalworking",
    summary: "Build, fit, and repair the dies, moulds, jigs, and fixtures that mass-produce parts, working to very close tolerances in hardened tool steels.",
    work: "Tool and die makers design details, machine, grind, EDM, assemble, and try out the tooling used in stamping, moulding, and die casting. They work from drawings and models, heat treat and finish tool steels, and troubleshoot tooling that is worn or producing bad parts. Most work is indoors in tool rooms and manufacturing plants.",
    duration: "Usually about 4 to 5 years, varies by province",
    union: "Unifor",
    unionUrl: "https://www.unifor.org/",
    jobSearch: "tool and die apprentice", journeySearch: "tool and die maker",
    aliases: "tooling die maker mould mold stamping die edm jig fixture tool room",
    tools: ["Calipers and micrometers", "Dial test indicator and magnetic base", "Precision parallels and a machinist vise", "Hex keys, dowel punches, and a dead-blow hammer", "Safety glasses, face shield, boots, and hearing protection", "Scientific calculator and Machinery's Handbook"],
    insight: {
      skills: ["Math and trigonometry for layout and fits", "Patience and precise measuring", "Spatial thinking and reading assemblies", "Problem solving and troubleshooting tooling"],
      hazards: ["Grinders and rotating tools: guards, eye protection, and no loose clothing", "Heavy die sections: use rated lifting gear and never stand under loads", "Press hazards: lockout and safety blocks before die work", "Sharp edges and fluids: cut-resistant gloves and SDS awareness"],
      settings: ["Tool rooms and tooling shops", "Metal stamping plants", "Plastic injection moulding plants", "Automotive and appliance suppliers"]
    },
    toolGroups, mediaGroups, practiceBank,
    roadmapSteps: [
      { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS and shop safety; requirements vary)", "Practise shop math, geometry, and reading drawings", "Apply to tooling shops and manufacturers, then register your apprenticeship"] },
      { title: "Year 1: shop safety and basics", items: ["Learn guarding, lockout, and PPE", "Master the micrometer, caliper, and layout tools", "Operate drill presses, saws, and bench tools", "Learn basic lathe and mill work, and deburring", "Build your core tool kit (see Buying tools)"] },
      { title: "Year 2: machining and grinding", items: ["Set up mills and surface grinders", "Understand tool steels and heat treatment", "Read drawings and tolerances", "Make simple punches, plates, and fixtures"] },
      { title: "Year 3: dies and moulds", items: ["Learn blanking, piercing, and forming die principles", "Learn mould components, gates, cooling, and ejection", "Use wire EDM and sinker EDM", "Fit and assemble tooling to close tolerances"] },
      { title: "Year 4 and beyond: tryout and troubleshooting", items: ["Try out dies and moulds and correct part defects", "Apply GD&T and tolerance stack-ups", "Work with CNC programming and CAD/CAM", "Mentor first-year apprentices"] },
      { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade page and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
    ],
    glossary,
    cards: [
      { front: "Blanking or piercing force", back: "Perimeter × thickness × shear strength" },
      { front: "Clearance per side", back: "(Die opening − punch size) ÷ 2" },
      { front: "Blanking: which part sets the size?", back: "The die opening sets the blank size." },
      { front: "Piercing: which part sets the size?", back: "The punch sets the hole size." },
      { front: "kN to tonnes-force", back: "Divide by 9.81" },
      { front: "Jig versus fixture", back: "A jig guides the tool, a fixture holds the work." },
      { front: "D2 tool steel", back: "High wear resistance, high carbon and chromium." },
      { front: "Purpose of a stripper", back: "Removes the stock from the punch." },
      { front: "Wire EDM works on", back: "Electrically conductive materials only." }
    ],
    jobsIntro: "Look for tool rooms, tooling shops, metal stamping plants, plastic moulding companies, and automotive and appliance suppliers.",
    tips: ["Bring a short resume, your safety tickets, and ID.", "Show interest in math, precision work, and problem solving.", "Visit shops in person when you can, and follow up.", "Ask what tools you need and what the employer supplies."],
    forumTopics: ["Starting out", "Stamping dies", "Moulds and EDM", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference
  });
}
