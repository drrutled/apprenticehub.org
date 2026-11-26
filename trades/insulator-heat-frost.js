// Insulator (Heat and Frost) content. Practice questions are original study aids, not official Red Seal exam questions.
{
  // Rows: [question, correct answer, wrong, wrong, wrong, explanation]. The correct option is placed at a rotating position.
  const Q = (y, rows) => rows.map(([q, c, a, b, d, e], i) => {
    const p = (i * 3 + y) % 4;
    const o = [a, b, d];
    o.splice(p, 0, c);
    return { q, options: o, answer: p, explain: e };
  });
  const yt = (s) => "https://www.youtube.com/results?search_query=" + s;

  registerTrade({
    id: "insulator-heat-frost",
    store: "insulator-heat-frost",
    title: "Insulator (Heat and Frost)",
    name: "Insulator (Heat and Frost)",
    short: "heat and frost insulating",
    category: "Mechanical Insulation · Industrial · Construction",
    summary: "Heat and frost insulators install thermal insulation, vapour barriers, and protective jacketing on pipes, ducts, tanks, and equipment so systems save energy, resist condensation, and protect people.",
    work: "You measure, cut, and fit insulation on hot and cold systems in commercial buildings, industrial plants, and power facilities, then seal and jacket it. The work involves ladders, scaffolds, and tight spaces, and it demands accurate fabrication and careful handling of fibres and hazardous materials.",
    duration: "Usually 4 years, hours and school vary by province",
    union: "International Association of Heat and Frost Insulators and Allied Workers",
    unionUrl: "https://www.insulators.org/",
    jobSearch: "insulator apprentice heat and frost",
    journeySearch: "heat and frost insulator",
    aliases: "insulator mechanical insulator pipe insulation duct insulation heat frost insulation firestop jacketing asbestos abatement thermal insulation",
    tools: ["Insulation knife and shears", "Tape measure and circumference tape", "Aviation snips", "Banding tool and wire twister", "Respirator, gloves, safety glasses, CSA boots", "Caulk gun and brushes for mastic"],
    insight: {
      skills: ["Accurate measuring and fabrication", "Fitting insulation on fittings and equipment", "Sealing vapour barriers and joints", "Reading specifications and drawings"],
      hazards: ["Fibres and dust: wear a fitted respirator, gloves, and long sleeves", "Asbestos in older systems: stop and report suspect material", "Heights and confined spaces: follow permits and training", "Sharp metal jacketing: wear cut-resistant gloves"],
      settings: ["Commercial and institutional buildings", "Industrial plants and refineries", "Power and process facilities", "Cold storage, arenas, and refrigeration"]
    },
    toolGroups: [
      {
        title: "Day-one tools, buy once and buy well",
        note: "Professional-grade tools that hold up on site. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
        items: [
          { name: "Insulation knife (serrated) and utility knife", why: "A serrated blade slices fibreglass and mineral wool cleanly. Keep blades sharp and cut away from your body.", search: "insulation knife serrated Malco Stanley utility knife" },
          { name: "Insulation shears", why: "Cut faced insulation and wrap neatly with less effort.", search: "insulation shears scissors heavy duty" },
          { name: "Tape measure (25 ft / 7.5 m)", why: "A wide, stiff blade with metric and imperial markings for takeoffs and fabrication.", search: "Milwaukee Stanley FatMax tape measure 25 ft metric" },
          { name: "Circumference tape (pi tape)", why: "Wraps around a pipe to read diameter directly. Quick for sizing jackets.", search: "pi tape circumference tape diameter measuring" },
          { name: "Aviation snips (left, right, and straight cut)", why: "Colour-coded handles: red cuts left, green cuts right, yellow cuts straight. They cut metal jacketing.", search: "Malco Wiss aviation snips red green yellow set" },
          { name: "Hand brush and caulk gun for mastic and sealant", why: "Applying vapour-barrier mastic and sealant neatly is a core skill.", search: "Newborn dripless caulk gun mastic brush" },
          { name: "Fitted respirator and spare filters", why: "Fibres and dust irritate skin, eyes, and lungs. Get fit tested and use what your employer specifies.", search: "3M half face respirator P100 filters" },
          { name: "Safety glasses, cut-resistant gloves, coveralls, and CSA-approved safety boots", why: "Fibres, sharp metal, and slippery steps. Comfortable PPE is the PPE you will wear.", search: "cut resistant gloves coveralls CSA safety boots safety glasses" }
        ]
      },
      {
        title: "Build up in first and second year",
        note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
        items: [
          { name: "Cordless drill and impact driver", why: "Drive screws and drill for pins and bands. Pick one battery platform and stay with it.", search: "Milwaukee M18 FUEL drill impact driver combo" },
          { name: "Banding tool and wire twister", why: "Secures insulation and jacketing with bands or wire.", search: "banding tool stainless strapping wire twister insulation" },
          { name: "Metal jacket crimper and beader", why: "Forms rolled beads and crimps on jacketing for fit and stiffness. Often shop-supplied.", search: "jacketing crimper beader roller sheet metal" },
          { name: "Steel square and straightedge", why: "Lay out cuts and fabricate fittings.", search: "framing square straightedge sheet metal" },
          { name: "Compass and dividers", why: "Lay out circles and elbow gores.", search: "drafting compass dividers metal" },
          { name: "Pencil, marker, and scribe", why: "Mark insulation and metal cleanly.", search: "Markal marker scribe metal" },
          { name: "Hammer and pin spotter", why: "Install pins on duct and equipment where required.", search: "hammer pin spotter insulation pins" },
          { name: "Tool bag or bucket organizer", why: "Keeps daily tools together.", search: "Veto Pro Pac tool bag bucket organizer" }
        ]
      },
      {
        title: "Later and specialized",
        note: "Often supplied by the shop or employer. Ask before buying.",
        items: [
          { name: "Powered shears or nibbler", why: "Speeds up cutting of metal jacketing. Usually company-supplied.", search: "Milwaukee cordless metal shears nibbler" },
          { name: "Pin welder (stud welder)", why: "Attaches pins to metal ducts and equipment. Company tool; training required.", search: "insulation pin welder" },
          { name: "Fall protection harness and lanyard", why: "Usually supplied by the employer. Fall protection training comes first.", search: "3M DBI-SALA full body harness CSA" },
          { name: "HEPA vacuum", why: "Cleans up fibres and dust without spreading them. Used on abatement work.", search: "HEPA vacuum contractor fibre dust" },
          { name: "Asbestos abatement respirator and suit", why: "Provided and fit tested by the employer for regulated abatement work, with training and procedures.", search: "full face respirator disposable coveralls P100 abatement" }
        ]
      },
      {
        title: "School supplies for technical training",
        note: "What helps in the classroom for drawings, math, and code study. Check with your school about calculator rules before you buy.",
        items: [
          { name: "Mechanical pencil (0.5 mm)", why: "Consistent fine lines for layouts and notes.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm" },
          { name: "Scientific calculator", why: "Circumference, area, and heat loss calculations.", search: "Casio fx-991 scientific calculator" },
          { name: "Architect's scale ruler", why: "Reading mechanical drawings at 1:50, 1:100, and imperial scales.", search: "architect scale ruler metric imperial" },
          { name: "Drafting compass and protractor", why: "Draw gores and angles for fittings.", search: "Staedtler compass protractor set" },
          { name: "Field notebook (Rite in the Rain)", why: "Record pipe sizes, thicknesses, and notes on wet or dusty sites.", search: "Rite in the Rain field notebook" },
          { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic for exam review.", search: "binder dividers highlighters" },
          { name: "Fine-tip permanent markers", why: "Mark insulation and label systems.", search: "Sharpie fine point permanent marker" }
        ]
      }
    ],
    mediaGroups: [
      {
        title: "Official and standards resources",
        items: [
          { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare.", url: "https://red-seal.ca/eng/welcome.shtml" },
          { name: "Codes Canada (National Building Code)", desc: "The model code, with fire and energy provisions that affect insulation.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
          { name: "International Association of Heat and Frost Insulators and Allied Workers", desc: "Union training and apprenticeship information.", url: "https://www.insulators.org/" },
          { name: "National Insulation Association (NIA)", desc: "Technical information on mechanical insulation.", url: "https://insulation.org/" },
          { name: "Canada's Building Trades Unions", desc: "Find union trades and apprenticeship paths.", url: "https://www.buildingtrades.ca/en/apprenticeship/" }
        ]
      },
      {
        title: "Video searches",
        note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local codes.",
        items: [
          { name: "Pipe insulation installation", desc: "Fitting and sealing pipe sections.", url: yt("mechanical+pipe+insulation+installation+heat+frost+insulator") },
          { name: "Mitring insulation on pipe elbows", desc: "Cutting and fitting insulation on fittings.", url: yt("insulating+pipe+elbow+mitre+insulation+fitting") },
          { name: "Metal jacketing on pipe", desc: "Rolling, fitting, and banding aluminum jacket.", url: yt("aluminum+jacketing+pipe+insulation+install+elbow+cover") },
          { name: "Vapour barrier on cold pipe", desc: "Sealing joints to stop condensation.", url: yt("cold+pipe+insulation+vapor+barrier+condensation+sealing") },
          { name: "Duct insulation and wrap", desc: "Insulating duct with board and wrap.", url: yt("duct+insulation+wrap+installation+commercial") },
          { name: "Cellular glass and elastomeric insulation", desc: "Properties and uses of common materials.", url: yt("cellular+glass+elastomeric+insulation+uses+mechanical") },
          { name: "Asbestos awareness for trades", desc: "Recognizing asbestos hazards.", url: yt("asbestos+awareness+construction+trades+insulation") },
          { name: "Insulation of tanks and vessels", desc: "Pins, bands, and jacketing on equipment.", url: yt("tank+insulation+installation+pins+bands+jacketing") }
        ]
      },
      {
        title: "Audio, beginner (pre-apprentice and year 1)",
        note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for insulating yourself.",
        items: [
          { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
          { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
          { name: "YouTube: heat and frost insulator podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: yt("heat+and+frost+insulator+podcast") }
        ]
      },
      {
        title: "Audio, intermediate (years 2-3)",
        note: "Trade-knowledge talk that builds on what you do on the job.",
        items: [
          { name: "YouTube: mechanical insulation talk (listen-along)", desc: "Materials, installation, and energy savings.", url: yt("mechanical+insulation+energy+savings+podcast") },
          { name: "YouTube: building envelope and insulation podcast", desc: "How insulation fits the larger building system.", url: yt("building+science+insulation+podcast") },
          { name: "YouTube: union trades and apprenticeship talk", desc: "Training and career talks from union trades.", url: yt("union+trades+apprenticeship+podcast+insulators") }
        ]
      },
      {
        title: "Audio, advanced (year 4 to journeyperson)",
        note: "Exam prep, business, and leadership.",
        items: [
          { name: "YouTube: Red Seal insulator exam prep", desc: "Study talks you can listen to while commuting.", url: yt("Red+Seal+insulator+heat+and+frost+exam+preparation") },
          { name: "YouTube: construction estimating podcast", desc: "Takeoffs, pricing, and planning insulation work.", url: yt("construction+estimating+takeoff+podcast") },
          { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: yt("skilled+trades+leadership+mentoring+apprentices+podcast") }
        ]
      }
    ],
    practiceBank: {
      1: Q(1, [
        ["Which is a purpose of mechanical insulation?", "Reduce heat loss or gain, control condensation, and protect people", "Make pipes heavier", "Add paint", "Stop all vibration", "Insulation saves energy, controls temperature, helps prevent condensation, and can protect personnel from hot surfaces."],
        ["Which are the three modes of heat transfer?", "Conduction, convection, and radiation", "Pressure, flow, and volume", "Weight, mass, and density", "Freezing, boiling, and melting", "Insulation mainly slows conduction, with jackets reducing convection and radiation."],
        ["A lower thermal conductivity (k) means the material is:", "A better insulator", "A worse insulator", "Heavier", "Stronger", "k measures how easily heat flows through a material."],
        ["A higher R-value means:", "More resistance to heat flow", "Less resistance to heat flow", "Lower cost", "More weight", "R-value (and RSI) measure thermal resistance."],
        ["What does ASJ stand for?", "All-service jacket", "Air seal joint", "Asbestos safety jacket", "Aluminum steel joint", "ASJ is a common facing on pipe insulation."],
        ["Why does cold pipe insulation need a vapour barrier?", "To keep moisture from reaching the cold surface and condensing", "To keep heat in", "To add colour", "To make it fire resistant", "Moist air that reaches the cold pipe will condense."],
        ["If you find suspect asbestos insulation on a job you should:", "Stop work and report it for testing", "Remove it with a knife", "Sweep it up", "Cover it with new insulation", "Asbestos work is regulated and requires trained workers."],
        ["The circumference of a pipe with a 100 mm outside diameter is about:", "314 mm", "100 mm", "200 mm", "628 mm", "C = π × d = 3.1416 × 100 = 314 mm."],
        ["Pipe insulation sections are sized to fit:", "The outside diameter of the pipe", "The inside of the pipe", "The flange bolts", "The pipe length only", "The inside diameter of the section matches the pipe OD."],
        ["Which PPE protects from fibre irritation?", "Respirator, gloves, safety glasses, and long sleeves", "Sandals", "A scarf only", "A sun hat", "Fibres irritate skin, eyes, and lungs."],
        ["Which colour of aviation snips cuts to the left?", "Red", "Green", "Yellow", "Blue", "Red cuts left, green cuts right, yellow cuts straight."],
        ["Why keep insulation dry?", "Wet insulation loses its insulating value and can corrode pipes", "It weighs more", "It is brighter", "It cuts more easily", "Water conducts heat and can cause corrosion."],
        ["When using a knife, you should:", "Cut away from your body and keep the blade sharp", "Cut toward your hand", "Hold the material against your leg", "Use a dull blade", "Knife injuries are common in insulating work."],
        ["Where do you find hazard information about a product used on site?", "The Safety Data Sheet (SDS)", "The tape measure", "The pipe label", "The jacket colour", "WHMIS requires an SDS for hazardous products."],
        ["Heat and frost insulators work on:", "Pipes, ducts, tanks, boilers, and equipment", "Only house attics", "Only roofs", "Only lighting", "Mechanical insulation covers hot and cold systems."]
      ]),
      2: Q(2, [
        ["Condensation forms on a surface when its temperature is:", "Below the dew point of the surrounding air", "Above the dew point", "Exactly 20 °C", "Higher than the air", "Cold surfaces cool nearby air until moisture condenses."],
        ["Why must a vapour barrier on a cold pipe be continuous?", "Any gap allows moisture to reach the cold surface", "It makes it look neater", "It increases R-value", "It adds fire rating", "One breach can wet the insulation."],
        ["What is a mitre (gore) cut used for?", "Fitting insulation around an elbow", "Cutting straight pipe", "Measuring temperature", "Sealing seams", "Segments are cut and assembled to cover the fitting."],
        ["Cellular glass insulation is:", "Non-combustible, closed-cell, and does not absorb water", "A fibrous batt", "A flexible foam", "A spray foam", "It is used for hot and cold systems and where moisture is a concern."],
        ["Elastomeric foam insulation is commonly used on:", "Chilled water and refrigerant lines", "Steam mains at high temperature", "Boiler stacks", "Furnaces", "It is flexible and closed-cell."],
        ["Calcium silicate insulation is suited to:", "High-temperature service", "Chilled water only", "Refrigerant lines", "Vapour barriers", "It is rigid and handles high temperatures. Check the product's rating."],
        ["On an outdoor horizontal pipe, jacket laps should:", "Be arranged to shed water", "Face upward", "Be left open", "Be fastened with nothing", "Water entry causes corrosion and wet insulation."],
        ["Which jacketing is common for outdoor weather protection?", "Aluminum or stainless steel", "Paper", "Plain felt", "Untreated cloth", "Metal jackets resist weather and damage."],
        ["Where pipe hangers rest on insulated pipe, you should:", "Use an insulation shield or insert to protect the insulation", "Crush the insulation", "Leave the support bare", "Remove the insulation", "Inserts carry the load without compressing the insulation."],
        ["Why do hot pipes need allowance for expansion?", "Pipe grows with temperature and can damage insulation and jackets", "Pipes shrink when hot", "To save material", "For colour", "Allow for movement at joints and supports."],
        ["Compressing duct wrap insulation:", "Reduces its thickness and R-value", "Increases R-value", "Has no effect", "Increases fire rating", "R-value depends on installed thickness."],
        ["Mastic and mesh on joints of cold pipe insulation is used to:", "Seal the joint against moisture", "Hold heat in", "Add colour", "Keep the pipe cold", "Sealing joints keeps vapour out."],
        ["Banding on jacketing is used to:", "Secure the jacket in place", "Cut the metal", "Cool the pipe", "Test the seam", "Stainless bands are common."],
        ["The outside diameter of NPS 2 pipe is about:", "60.3 mm", "50 mm", "42.2 mm", "76 mm", "NPS 2 has an OD of 60.3 mm. Nominal size is not the OD."],
        ["Pipe insulation thickness is usually chosen from:", "The specification and tables based on pipe size and temperature", "A guess", "The roll colour", "The brand name", "Use the project specification."]
      ]),
      3: Q(3, [
        ["What is the RSI of 100 mm of insulation with k = 0.04 W/m·K?", "2.5 m²·K/W", "4.0", "0.4", "25", "RSI = thickness (m) ÷ k = 0.1 ÷ 0.04 = 2.5."],
        ["RSI 2.5 is about what R-value?", "R-14", "R-2.5", "R-25", "R-7", "R = RSI × 5.678 = 14.2."],
        ["A pipe with a 114 mm OD has 50 mm insulation. The jacket length for one wrap, with a 50 mm overlap, is about:", "722 mm", "358 mm", "672 mm", "1000 mm", "Outer diameter = 114 + 100 = 214 mm. π × 214 = 672 mm, plus 50 mm overlap = 722 mm."],
        ["Heat tracing under insulation is used to:", "Keep a pipe from freezing or hold process temperature", "Cool the pipe", "Add colour", "Stop condensation only", "Electric or steam tracing adds heat that insulation then retains."],
        ["Insulation alone on a stagnant water line:", "Slows freezing but cannot prevent it indefinitely", "Prevents freezing forever", "Makes it freeze faster", "Heats the water", "Insulation delays heat loss but does not add heat."],
        ["Penetrations through a fire-rated wall that carry insulated pipe must be:", "Sealed with a listed firestop system", "Left open", "Stuffed with paper", "Covered with tape", "Firestop systems are tested for the specific installation."],
        ["Removable insulation covers on valves and flanges are used to:", "Allow access for maintenance and inspection", "Add fire rating", "Increase thickness", "Prevent expansion", "They can be taken off and replaced."],
        ["Corrosion under insulation (CUI) is mainly caused by:", "Water trapped under the insulation", "Excessive heat", "Pipe colour", "Overtight bands", "Keeping jackets and seals tight prevents wet insulation."],
        ["Acoustic duct liner is used to:", "Reduce noise in the duct", "Increase pressure", "Cool the air", "Increase flow", "Liner absorbs sound as well as insulating."],
        ["Pins and bands are used on tanks to:", "Hold insulation in place", "Measure temperature", "Seal valves", "Cool the tank", "Large equipment needs mechanical fastening."],
        ["Personnel protection insulation is installed on:", "Hot surfaces people may touch", "Chilled water only", "Valves only", "Underground pipe", "The specification states the touch temperature limit."],
        ["Why is metal jacket expansion considered when banding?", "Metal moves with temperature changes", "Metal does not move", "To make it tighter", "To save bands", "Allow for movement so it does not buckle."],
        ["A vapour-tight system is critical for:", "Cold and cryogenic service", "Hot flue stacks", "Gas lines", "Electrical conduit", "Low-temperature lines draw moisture inward."],
        ["Which is a common facing on pipe insulation?", "ASJ (all-service jacket)", "Concrete", "Gypsum", "Rubber sheet only", "ASJ has a self-sealing lap."],
        ["Tank insulation is often held in place using:", "Pins, bands, and clips", "Staples only", "Nails only", "Adhesive tape only", "Use manufacturer and specification methods."],
        ["What property makes mineral wool suited to high-temperature use?", "It resists heat and is non-combustible", "It melts at low temperature", "It is flexible foam", "It is waterproof", "Mineral fibre has high temperature limits. Check the product data."]
      ]),
      4: Q(4, [
        ["Before removing suspect asbestos-containing insulation, you must:", "Have it assessed and sampled by a competent person and follow provincial regulations", "Scrape it off dry", "Brush it away", "Wrap it with paper", "Asbestos work is regulated. Do not disturb suspect material."],
        ["How many 914 mm (3 ft) pipe insulation sections are needed for 45.72 m of straight pipe?", "50", "45", "46", "52", "45.72 ÷ 0.9144 = 50. Add for fittings and waste."],
        ["Wet insulation on a cold line means:", "The vapour barrier or jacket has been breached", "The pipe is too hot", "The insulation is too thick", "Normal behaviour", "Find and repair the source of moisture."],
        ["Higher humidity in a space means the dew point:", "Increases, so thicker insulation or better vapour control may be needed", "Decreases", "Stays the same", "Has no effect", "Condensation risk rises with humidity."],
        ["Why make insulation continuous through hangers on cold systems?", "Gaps at supports cause condensation", "It saves time", "It reduces weight", "It cuts noise only", "Use inserts and sealed joints."],
        ["Heat loss from a surface is proportional to:", "Surface area and temperature difference", "Colour only", "Pipe length only", "Insulation brand", "Q = U × A × ΔT."],
        ["Spray polyurethane foam hazards include:", "Isocyanates and requires proper respiratory protection and training", "No hazards", "Only paper dust", "Only noise", "Follow the SDS and employer procedures."],
        ["Cleaning up fibre dust is best done with:", "A HEPA vacuum or damp methods", "Dry sweeping", "Compressed air", "A leaf blower", "Avoid spreading airborne fibres."],
        ["Before choosing a product for a hot system you should check:", "The maximum service temperature rating", "The colour of the label", "The roll weight", "The price of tape", "Products have temperature limits."],
        ["Insulation is normally installed after:", "The piping or duct has been pressure tested and approved", "Before the pipe is installed", "Before the walls are built", "During testing", "Testing is done with joints visible."],
        ["Flame spread and smoke developed ratings in Canada are tested to:", "CAN/ULC-S102", "CSA B139", "CSA Z259", "ASTM D3359", "S102 is the surface burning characteristics test."],
        ["Why does insulation allow for expansion at elbows on hot lines?", "Pipe movement can crush or open the insulation", "Pipes shrink", "To hide fittings", "For looks", "Expansion movement is accommodated in design."],
        ["Entering a vessel or tank to insulate requires:", "A confined space permit and atmospheric testing", "Just a flashlight", "No procedure", "Only a helper", "Confined spaces are regulated."],
        ["Which document defines insulation type, thickness, and jacketing for a project?", "The specification and drawings", "The tape measure", "The cutting list only", "The brand label", "Always work to the project documents."],
        ["The National Energy Code of Canada for Buildings relates to insulation because it:", "Sets energy performance requirements that include insulation of systems", "Sets welding rules", "Controls paint colour", "Regulates ladders", "Check which edition your province adopts."]
      ])
    },
    roadmapSteps: [
      { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get safety training employers ask for (commonly WHMIS, working at heights, and site orientation; requirements vary)", "Apply to union locals (the Heat and Frost Insulators) and insulation contractors", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
      { title: "Year 1: foundations", items: ["Learn site safety, PPE, respirators, and WHMIS", "Learn insulation materials and their uses", "Practise measuring, cutting, and fitting pipe insulation", "Learn about asbestos awareness and fibre control", "Complete your first technical training block"] },
      { title: "Year 2: fittings and jacketing", items: ["Mitre elbows, tees, and valves", "Install ASJ and metal jacketing", "Seal vapour barriers on cold systems", "Install duct insulation and wrap"] },
      { title: "Year 3: equipment and systems", items: ["Insulate tanks, vessels, and boilers", "Learn heat tracing and personnel protection", "Learn cold and cryogenic service requirements", "Read mechanical drawings and specifications"] },
      { title: "Year 4 and beyond: advanced", items: ["Troubleshoot condensation and corrosion under insulation", "Estimate materials and plan jobs", "Review asbestos abatement and confined space rules", "Mentor first-year apprentices"] },
      { title: "Certification", items: ["Confirm hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
    ],
    glossary: [
      ["Abatement", "The regulated removal or control of hazardous materials such as asbestos."],
      ["ASJ", "All-service jacket, a facing on pipe insulation."],
      ["Banding", "Securing insulation or jacketing with metal straps."],
      ["Cellular glass", "A rigid, closed-cell, non-combustible insulation."],
      ["Condensation", "Moisture that forms when a surface is below the dew point."],
      ["Conduction", "Heat flow through a material."],
      ["Convection", "Heat transfer by moving fluid or air."],
      ["CUI", "Corrosion under insulation."],
      ["Dew point", "The temperature at which air becomes saturated and moisture forms."],
      ["Elastomeric foam", "A flexible closed-cell insulation for cold lines."],
      ["Firestop", "A listed system that seals openings against fire and smoke."],
      ["Gore", "A cut segment used to build a mitred cover for a fitting."],
      ["Heat tracing", "Electric or steam lines that add heat under insulation."],
      ["Jacketing", "The outer covering over insulation, such as aluminum or PVC."],
      ["k-value", "Thermal conductivity of a material."],
      ["Mastic", "A coating used to seal insulation and vapour barriers."],
      ["Mitre", "An angled cut that joins insulation segments around a fitting."],
      ["NPS", "Nominal pipe size."],
      ["Personnel protection", "Insulation that prevents contact burns on hot surfaces."],
      ["R-value", "Thermal resistance, higher is better, in imperial units."],
      ["RSI", "Thermal resistance in metric units, m²·K/W."],
      ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
      ["Thermal bridge", "A path that lets heat bypass the insulation."],
      ["Vapour barrier", "A layer that stops moisture vapour from passing through."],
      ["WHMIS", "Canada's workplace hazardous materials information system."]
    ],
    cards: [
      { front: "Three modes of heat transfer", back: "Conduction, convection, radiation" },
      { front: "RSI formula", back: "RSI = thickness (m) ÷ k (W/m·K)" },
      { front: "R-value from RSI", back: "R = RSI × 5.678" },
      { front: "Circumference of a circle", back: "C = π × d" },
      { front: "Snip handle colours", back: "Red cuts left, green cuts right, yellow cuts straight." },
      { front: "Condensation forms when", back: "A surface is below the dew point of the air." },
      { front: "ASJ", back: "All-service jacket, a common pipe insulation facing" },
      { front: "Suspect asbestos found", back: "Stop work and report it. Do not disturb it." },
      { front: "Flame spread test in Canada", back: "CAN/ULC-S102" }
    ],
    jobsIntro: "Look for mechanical insulation contractors, union and signatory insulating contractors, industrial maintenance contractors, abatement firms, and commercial building contractors.",
    tips: ["Bring a short resume, your safety tickets, and ID.", "Show you are careful, neat, and comfortable with physical work at heights.", "Visit union halls and contractors in person when you can, and follow up.", "Ask what tools you need and what the employer supplies."],
    forumTopics: ["Starting out", "Materials and jacketing", "Cold systems and vapour barriers", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference: [
      {
        title: "Key formulas",
        list: [
          "Circumference C = π × d. Diameter d = C ÷ π",
          "Jacket length for one wrap = π × (pipe OD + 2 × insulation thickness) + overlap",
          "RSI = thickness (m) ÷ k (W/m·K). R-value (imperial) = RSI × 5.678",
          "Heat flow Q = U × A × ΔT, where A is surface area and ΔT is the temperature difference",
          "Area of a rectangle = length × width. Area of a circle = π × r²"
        ]
      },
      {
        title: "Pipe sizes (NPS to outside diameter)",
        table: {
          head: ["NPS (in)", "OD (mm)"],
          rows: [["1/2", "21.3"], ["3/4", "26.7"], ["1", "33.4"], ["1-1/4", "42.2"], ["1-1/2", "48.3"], ["2", "60.3"], ["3", "88.9"], ["4", "114.3"], ["6", "168.3"]]
        },
        note: "Nominal pipe size is not the outside diameter for NPS 12 in and smaller. Confirm sizes before ordering insulation."
      },
      {
        title: "Common insulation materials",
        table: {
          head: ["Material", "Typical use", "Notes"],
          rows: [
            ["Mineral wool or fibreglass", "Hot and cold pipe, duct, and equipment", "Check temperature limits and facing"],
            ["Cellular glass", "Hot and cold systems, below-grade, wet areas", "Rigid, closed-cell, non-combustible"],
            ["Calcium silicate", "High-temperature piping and equipment", "Rigid. Check the maximum service temperature"],
            ["Elastomeric foam", "Chilled water and refrigerant lines", "Flexible, closed-cell"],
            ["Polyisocyanurate or phenolic foam", "Cold and dual-temperature service", "Follow the manufacturer's limits"]
          ]
        },
        note: "Always follow the specification and the manufacturer's data sheets."
      },
      {
        title: "Conversions",
        list: [
          "1 in = 25.4 mm, and 1 ft = 304.8 mm",
          "3 ft = 914 mm (a common pipe insulation section length)",
          "1 m² ≈ 10.76 sq ft",
          "°F = (°C × 9/5) + 32",
          "RSI 1 = R-5.678"
        ]
      },
      {
        title: "Cold system checklist",
        list: [
          "Keep the vapour barrier continuous and sealed at joints, hangers, and fittings",
          "Use insulation inserts at hangers so the load does not crush the insulation",
          "Seal ends and penetrations, and keep insulation dry",
          "Check the dew point for the space and choose thickness accordingly",
          "Inspect after pressure testing is complete"
        ]
      },
      {
        title: "Standards and safety pointers",
        list: [
          "National Building Code of Canada and National Energy Code of Canada for Buildings: fire, plenum, and energy provisions",
          "CAN/ULC-S102: surface burning characteristics (flame spread and smoke developed)",
          "ASTM C547 (mineral fibre pipe insulation), C585 (pipe and tubing sizing), and C1136 (barrier facings) are commonly referenced",
          "WHMIS and SDS: read the SDS for adhesives, foams, and sealants",
          "Asbestos, confined space, and fall protection: follow provincial occupational health and safety regulations"
        ],
        note: "Your province may call up different editions. Confirm with your instructor and authority."
      }
    ]
  });
}
