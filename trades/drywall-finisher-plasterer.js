// Drywall Finisher and Plasterer content. Practice questions are original study aids, not official Red Seal exam questions.
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
    id: "drywall-finisher-plasterer",
    store: "drywall-finisher-plasterer",
    title: "Drywall Finisher and Plasterer",
    name: "Drywall Finisher and Plasterer",
    short: "drywall finishing and plastering",
    category: "Interior Finishing · Construction",
    summary: "Drywall finishers and plasterers tape, fill, and finish gypsum board joints, apply plaster and stucco, and build smooth, flat surfaces ready for paint and other finishes.",
    work: "You spend your days on stilts, scaffolds, and ladders applying compound, plaster, and textures to walls and ceilings. The work is physical and detail driven, and it is dusty, so dust control and respiratory protection matter. Good finishers are patient, steady with a knife, and careful about flatness and lighting.",
    duration: "Usually 3 years, hours and school vary by province",
    union: "International Union of Painters and Allied Trades (IUPAT)",
    unionUrl: "https://www.iupat.org/",
    jobSearch: "drywall finisher apprentice",
    journeySearch: "drywall finisher plasterer",
    aliases: "drywall taper taper mudder mud plaster plasterer stucco gypsum board finishing wall and ceiling interior finishing",
    tools: ["Taping knives (6 in, 10 in, 12 in)", "Mud pan and hawk", "Finishing trowel", "Pole sander and sanding screens", "Dust mask or respirator, CSA boots", "Tape measure and utility knife"],
    insight: {
      skills: ["Smooth knife and trowel control", "Reading levels of finish", "Mixing compound and plaster", "Patience with flatness and lighting"],
      hazards: ["Dust: use extraction or wet sanding and a fitted respirator", "Falls from stilts and scaffolds: train and keep floors clear", "Old plaster and compound: test for asbestos before disturbing", "Repetitive strain: vary tasks and use poles and extension handles"],
      settings: ["New construction, condos, and renovations", "Commercial interiors and institutional buildings", "Exterior stucco and EIFS crews", "Restoration of heritage plaster"]
    },
    toolGroups: [
      {
        title: "Day-one tools, buy once and buy well",
        note: "Hand tools you will use every day. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
        items: [
          { name: "Taping knives (6 in, 10 in, and 12 in)", why: "Stainless blades that flex evenly let you bed tape and feather coats without ridges. The widths match the coat you are applying.", search: "Marshalltown Columbia stainless taping knife 6 10 12 inch" },
          { name: "Stainless steel mud pan", why: "Holds a working amount of compound and gives a straight edge for loading your knife.", search: "stainless steel drywall mud pan Marshalltown" },
          { name: "Hawk (aluminum or magnesium) and finishing trowel", why: "A light hawk and a 14 in to 16 in finishing trowel are the core of plaster and skim coat work.", search: "plasterer hawk finishing trowel 16 inch Marshalltown" },
          { name: "Utility knife with extra blades", why: "Cuts board, tape, and mesh. Change blades often; a dull blade tears paper.", search: "Milwaukee Stanley utility knife retractable blades" },
          { name: "Tape measure (25 ft / 7.5 m)", why: "A wide, stiff blade with metric and imperial markings for layout and cutting boards.", search: "Milwaukee Stanley FatMax tape measure 25 ft metric" },
          { name: "Hand sanding pole and sanding screens", why: "Sanding screens clog less than paper and a pole reaches high walls and ceilings.", search: "drywall pole sander sanding screens 120 150 grit" },
          { name: "Respirator with particulate filters (fit tested)", why: "Joint compound and plaster dust are fine and irritating. Fit testing matters, so ask your employer which respirator they supply.", search: "3M half face respirator P100 particulate filters" },
          { name: "Safety glasses, gloves, hard hat, and CSA-approved safety boots", why: "Wet compound, falling objects, and slippery floors. Comfortable PPE is the PPE you will wear.", search: "CSA safety boots safety glasses nitrile coated gloves hard hat" }
        ]
      },
      {
        title: "Build up in first and second year",
        note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
        items: [
          { name: "Inside corner and flat finishing tools", why: "Corner tools and 3 in to 4 in knives make clean inside angles and let you finish corner bead.", search: "inside corner taping knife drywall corner tool" },
          { name: "Mud mixing paddle and 5 gal (18 L) pail", why: "A clean pail and a paddle that fits your drill give lump-free compound and consistent mixes.", search: "drywall mud mixer paddle drill 5 gallon bucket" },
          { name: "Corner bead tools and tin snips", why: "Cut and set metal and paper-faced bead cleanly and trim it without bending.", search: "aviation tin snips corner bead drywall" },
          { name: "Skim blade or 24 in finishing blade", why: "Wide blades make level 5 skim coats and large flat surfaces more even.", search: "Level 5 skim blade 24 inch drywall finishing" },
          { name: "Drywall stilts (adjustable)", why: "Reach ceilings and upper walls quickly. Only use them with training, and keep floors clear of debris.", search: "adjustable drywall stilts Dura-Stilts" },
          { name: "Work light with raking light capability", why: "Low-angle light shows ridges and low spots that flat lighting hides.", search: "LED work light stand Milwaukee raking light" },
          { name: "Sanding sponges for wet sanding", why: "Wet sanding keeps dust down in occupied spaces.", search: "drywall sanding sponge wet sanding" },
          { name: "Knee pads or comfortable work knee support", why: "Floor-level work is hard on the knees over a long day.", search: "gel knee pads work Dewalt" }
        ]
      },
      {
        title: "Later and specialized",
        note: "Often supplied by the shop or employer. Ask before buying.",
        items: [
          { name: "Automatic taping tools and finishing boxes", why: "Banjos, flat boxes, and angle boxes speed up production on commercial work. Often company-supplied.", search: "automatic taper drywall banjo flat box Columbia Tapetech" },
          { name: "Airless or texture sprayer", why: "Sprays texture, primer, or skim compound. Usually a company tool; learn the cleanup routine.", search: "drywall texture sprayer airless compound" },
          { name: "Dust-extraction power sander and HEPA vacuum", why: "Pulls fine dust at the source. Requires hose, filters, and training.", search: "Festool drywall sander dust extractor HEPA" },
          { name: "Plastering tools (darby, rod, margin trowels)", why: "Used for levelling, setting grounds, and details in traditional plaster work.", search: "plasterer darby rod margin trowel set" },
          { name: "Scaffold or rolling tower accessories", why: "Usually provided and inspected by the employer. Training comes first.", search: "rolling scaffold tower CSA" }
        ]
      },
      {
        title: "School supplies for technical training",
        note: "What helps in the classroom for drawings, math, and code study. Check with your school about calculator rules before you buy.",
        items: [
          { name: "Mechanical pencil (0.5 mm)", why: "Consistent fine lines on layout and drawing exercises.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm" },
          { name: "Scientific calculator", why: "Area, volume, and material takeoffs.", search: "Casio fx-991 scientific calculator" },
          { name: "Architect's scale ruler", why: "Reading drawings at 1:50, 1:100, and imperial scales.", search: "architect scale ruler metric imperial" },
          { name: "Gypsum Association GA-214 and GA-216 references", why: "Define levels of finish and application practice. Ask your school which are used.", search: "GA-214 GA-216 gypsum board finishing book" },
          { name: "Field notebook (Rite in the Rain)", why: "Notes on products, mix ratios, and jobs survive wet sites.", search: "Rite in the Rain field notebook" },
          { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic for exam review.", search: "binder dividers highlighters" },
          { name: "Fine-tip permanent markers", why: "Mark boards and label buckets and batches.", search: "Sharpie fine point permanent marker" }
        ]
      }
    ],
    mediaGroups: [
      {
        title: "Official and standards resources",
        items: [
          { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare.", url: "https://red-seal.ca/eng/welcome.shtml" },
          { name: "Codes Canada (National Building Code)", desc: "The model code that provincial building codes are based on, including fire and sound provisions.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
          { name: "IUPAT", desc: "Union training and apprenticeship information for finishing trades.", url: "https://www.iupat.org/" },
          { name: "Gypsum Association", desc: "Publisher of GA-214 (levels of finish) and GA-216 (application) documents.", url: "https://www.gypsum.org/" },
          { name: "Association of the Wall and Ceiling Industry (AWCI)", desc: "Industry information and technical resources for wall and ceiling trades.", url: "https://www.awci.org/" }
        ]
      },
      {
        title: "Video searches",
        note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and manufacturer instructions.",
        items: [
          { name: "Taping drywall joints", desc: "Embedding tape and applying the first coat.", url: yt("how+to+tape+drywall+joints+beginner") },
          { name: "Levels of drywall finish", desc: "Level 0 to level 5 explained.", url: yt("drywall+levels+of+finish+GA-214+explained") },
          { name: "Skim coat level 5", desc: "Applying a skim coat for critical lighting.", url: yt("level+5+drywall+skim+coat+technique") },
          { name: "Plastering a wall", desc: "Mixing and applying plaster on a wall.", url: yt("plastering+a+wall+tutorial+plasterer") },
          { name: "Three coat stucco", desc: "Scratch coat, brown coat, and finish coat on lath.", url: yt("three+coat+stucco+scratch+brown+finish+coat") },
          { name: "Corner bead installation", desc: "Setting and finishing metal and paper-faced bead.", url: yt("drywall+corner+bead+install+finish") },
          { name: "Setting compound versus drying compound", desc: "When to use hot mud and how it behaves.", url: yt("setting+type+joint+compound+hot+mud+vs+premixed") },
          { name: "Using drywall stilts safely", desc: "Setting height and working safely on stilts.", url: yt("drywall+stilts+safety+how+to+use") }
        ]
      },
      {
        title: "Audio, beginner (pre-apprentice and year 1)",
        note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for drywall and plastering yourself.",
        items: [
          { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
          { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
          { name: "YouTube: drywall finishing podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: yt("drywall+finishing+podcast") }
        ]
      },
      {
        title: "Audio, intermediate (years 2-3)",
        note: "Trade-knowledge talk that builds on what you do on the job.",
        items: [
          { name: "YouTube: drywall finishing tips and mistakes (audio)", desc: "Troubleshooting talks on ridges, cracks, and flashing.", url: yt("drywall+finishing+mistakes+tips+podcast") },
          { name: "YouTube: plastering trade talk", desc: "Plasterers discussing mixes, lath, and technique.", url: yt("plasterer+trade+talk+podcast") },
          { name: "YouTube: wall and ceiling contractor podcast", desc: "Scheduling, coordination, and quality on interior jobs.", url: yt("wall+and+ceiling+contractor+podcast") }
        ]
      },
      {
        title: "Audio, advanced (year 4 to journeyperson)",
        note: "Exam prep, business, and leadership.",
        items: [
          { name: "YouTube: Red Seal drywall finisher exam prep", desc: "Study talks you can listen to while commuting.", url: yt("Red+Seal+drywall+finisher+plasterer+exam+preparation") },
          { name: "YouTube: drywall business and estimating podcast", desc: "Pricing, takeoffs, and running a finishing company.", url: yt("drywall+business+estimating+podcast") },
          { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: yt("skilled+trades+leadership+mentoring+apprentices+podcast") }
        ]
      }
    ],
    practiceBank: {
      1: Q(1, [
        ["What is the standard width of a full sheet of gypsum board sold in Canada?", "1200 mm (4 ft)", "600 mm (2 ft)", "900 mm (3 ft)", "1500 mm (5 ft)", "Sheets are 1200 mm wide, in common lengths such as 2400 mm (8 ft) and 3600 mm (12 ft)."],
        ["What is the core of gypsum board made of?", "Gypsum (calcium sulphate) between paper faces", "Portland cement and sand bonded between layers of fibreglass mesh", "Compressed wood fibre", "Expanded polystyrene", "Gypsum board has a gypsum core wrapped in paper facings."],
        ["Where do you find the hazards and safe handling information for a joint compound?", "The Safety Data Sheet (SDS)", "The tape measure or the pail lid label showing only the batch number", "The blueprint title block", "The sheet width label only", "WHMIS requires an SDS for hazardous products, and employers must make it available."],
        ["Which approach best reduces airborne dust when finishing joints?", "Wet sanding or sanding with dust extraction", "Dry sanding quickly with no extraction so the dust settles on the floor", "Blowing dust off with compressed air", "Opening a window and continuing", "Controlling dust at the source works better than dispersing it. Add a fitted respirator."],
        ["What is the purpose of joint tape?", "Reinforce the joint and help prevent cracking", "Make the board waterproof so it can be used around tubs and showers", "Replace the compound", "Add fire rating to any joint", "Tape bridges the joint so the compound is not the only thing holding it together."],
        ["Which tool is used to apply and smooth compound over joints?", "Taping knife", "Pipe wrench", "Cold chisel", "Tin snips", "Taping knives in different widths are used for embedding, filling, and feathering."],
        ["Why do board edges along the length have a taper?", "To form a shallow recess that lets the joint finish flush", "To save gypsum", "To make boards lighter and easier to carry up the stairs", "To prevent the paper face from absorbing paint and showing the joint", "Tape and compound fill the recess, so the finished joint does not bulge."],
        ["In which stage is tape embedded?", "In the first coat of compound over the joint", "After the final sanding, once the surface is smooth and ready for primer", "After priming", "Only after painting", "The embedding coat fixes the tape and also fills the recess."],
        ["Setting-type compound labelled 20, 45, or 90 refers to:", "Approximate setting time in minutes", "Grit of the sandpaper recommended for sanding the finished coat", "Weight per pail in kilograms", "Percent of water by volume", "Setting compounds harden by a chemical reaction. The number is the approximate set time."],
        ["Which rule applies when working on stilts?", "Keep the floor clear of debris and cords", "Leave tools lying on the floor", "Use them only on wet floors", "Adjust the height up as high as possible so you can reach the ceiling without a ladder", "Trips and falls are the main stilt hazards. Training and a clear floor reduce risk."],
        ["Why use wider knives on later coats?", "To feather the edge wider so the joint blends flat", "To use less compound", "Because narrow knives leave ridges that inspectors will not accept", "To pull the tape tighter", "Wider feathering hides the build-up of the joint."],
        ["Where should a drywall screw head sit?", "Slightly below the surface without tearing the paper", "Standing slightly proud of the board so the compound can cover it in one coat", "Fully through the paper and into the core", "Bent at an angle", "A dimple lets compound cover the head, and unbroken paper keeps its holding power."],
        ["Which compound is commonly used for the final coat because it sands easily?", "Topping compound or a light all-purpose compound", "Setting compound only, since it is the hardest and gives the smoothest sanding", "Cement grout", "Construction adhesive", "Lighter compounds are easier to sand and give a smoother last coat."],
        ["How thick, in millimetres, is 1/2 in gypsum board?", "12.7 mm", "9.5 mm", "15.9 mm", "6.4 mm", "1/2 in is 12.7 mm. 5/8 in is 15.9 mm, 3/8 in is 9.5 mm, and 1/4 in is 6.4 mm."],
        ["Type X gypsum board is designed for:", "Improved fire resistance", "Extra flexibility on curves", "Use as a vapour barrier", "Exterior sheathing", "Type X has a specially formulated core used in fire-rated assemblies."]
      ]),
      2: Q(2, [
        ["Which level of finish is typically specified for walls that will get flat paint or light texture?", "Level 4", "Level 0", "Level 1", "Level 5 only", "GA-214 describes level 4 as typical for flat paints and light textures. Level 5 is for gloss or critical lighting."],
        ["Level 5 finish adds what compared with level 4?", "A thin skim coat over the entire surface", "More tape", "A second layer of board screwed over the first to flatten the wall", "Paint primer only", "A skim coat evens out porosity and minor surface texture for critical lighting."],
        ["Which GA-214 level means tape embedded in compound with no further finishing?", "Level 1", "Level 3", "Level 4", "Level 5", "Level 1 is typical in areas that will be concealed, such as above ceilings, or for fire taping."],
        ["Where is level 2 typically used?", "As a base for tile or in garages", "Behind high-gloss paint", "In rooms with critical lighting and gloss paint finishes", "Nowhere in practice", "Level 2 has tape embedded plus a coat over joints and fasteners, fine where appearance is not critical."],
        ["What is the main purpose of corner bead?", "Protect and define external corners", "Seal the board edges against moisture from the framing", "Hold up the ceiling", "Add insulation value", "Corner bead protects edges from damage and gives a straight corner line."],
        ["When boards are applied to a ceiling, they are generally installed:", "Perpendicular to the framing members", "Parallel to the framing members only", "With no fasteners", "Only where there are no joists", "Perpendicular application reduces sagging and crossing joint problems."],
        ["Why does a butt joint need wider feathering than a tapered joint?", "It has no recess, so compound builds up and must blend wider", "It is stronger", "Compound does not stick to the cut ends, so tape is left off", "It does not need tape", "Cut ends have no taper, so the joint tends to hump unless feathered wide."],
        ["Applying compound too thick in a single coat commonly causes:", "Shrinkage and cracking", "Faster paint drying because the thick coat holds less moisture", "Better adhesion", "Higher fire rating", "Thick coats dry unevenly and shrink. Build up thin, even coats."],
        ["How does setting-type compound harden?", "By a chemical reaction, not only by evaporation", "By freezing", "By absorbing paint", "By pressing it firmly with a roller until the water is squeezed out", "This allows it to set even in humid conditions and gives a strong base coat."],
        ["Before disturbing old textured ceilings from before the 1990s, you should:", "Have them tested for asbestos", "Scrape them dry right away and bag the debris for the landfill", "Sand them with a power sander", "Blow them down with air", "Older texture and compounds may contain asbestos. Provincial rules require testing before disturbing."],
        ["Why prime new drywall before painting?", "To even out the difference between paper and compound absorption", "To make the board stronger so it can hold heavier paint coats", "To add fire rating", "To replace taping", "Uneven absorption causes flashing under paint."],
        ["What does a control joint do in a large wall or ceiling?", "Relieves stress from building movement", "Adds fire rating", "Holds the tape on tightly at the ceiling and wall corners", "Replaces corner bead", "Control joints are placed where movement would otherwise crack the finish."],
        ["Why must a fire-rated assembly be finished as listed?", "The rating applies only to the tested assembly", "Any board gives the same rating as long as the thickness is correct", "Inspectors do not check it", "Paint determines the rating", "Listings specify boards, fasteners, tape, and joint treatment."],
        ["What does an automatic taping tool (banjo) do?", "Applies tape and compound in one pass", "Cuts boards to size along a straight line", "Sands joints", "Mixes plaster", "It dispenses compound onto the tape as it is placed."],
        ["A screw dimple left unfilled usually shows up as:", "A visible mark after paint", "Extra strength at the fastener so the board holds better", "A fire stop", "No effect at all", "All fasteners must be covered in the coats required by the finish level."]
      ]),
      3: Q(3, [
        ["The three coats of traditional plaster over lath are:", "Scratch, brown, and finish", "Prime, base, and paint, as applied in modern wall systems", "Tape, fill, and sand", "Float, tile, and grout", "The scratch coat keys into lath, the brown coat levels, and the finish coat gives the surface."],
        ["Why is a scratch coat scored?", "To give a key for the brown coat", "To make it dry faster by opening the surface to the air", "To add colour", "To reduce weight", "Grooves create mechanical bond for the next coat."],
        ["What does the lath do in plaster work?", "Provides a base the plaster keys into", "Replaces the plaster in thin areas to cut the cost of the job", "Seals against moisture", "Adds colour", "Plaster pushes through the openings and hardens behind to hold on."],
        ["How does lime plaster cure?", "By absorbing carbon dioxide (carbonation)", "By freezing", "By oxidizing iron", "By heating to 100 degrees until the water is driven off", "Lime plaster slowly hardens as it absorbs CO2 from the air."],
        ["Stucco is typically:", "A portland cement based exterior plaster", "Gypsum joint compound thinned for use on exterior walls", "Paint", "A type of insulation", "Stucco is cement plaster applied over lath or a suitable base."],
        ["Veneer plaster is:", "A thin coat applied over gypsum base", "A deep three coat system applied over metal lath on masonry", "A type of tile", "Paint", "It is only a few millimetres thick over special gypsum base."],
        ["What is a darby used for?", "Levelling the plaster surface", "Cutting lath", "Mixing plaster", "Setting corner bead", "A darby is a long flat float that levels the wet surface."],
        ["What is a plaster ground?", "A guide that sets the thickness of the plaster", "A kind of primer that helps the plaster bond to smooth masonry", "A type of lath", "A fastener", "Grounds are strips set to give the plaster thickness and a screed line."],
        ["Why is damp curing used on cement plaster?", "To prevent rapid drying and cracking", "To make it dry faster so the next coat can go on the same day", "To make it white", "To bond tile", "Cement needs moisture to hydrate fully."],
        ["Acoustic sealant at partition perimeters mainly improves:", "Sound isolation", "Colour", "Fire rating by itself", "Paint adhesion", "Gaps leak sound. Sealing them improves performance."],
        ["Fine, white powdery salt deposits on plaster or stucco are called:", "Efflorescence", "Hawk dust", "Skim", "Calcining", "Moisture carries salts to the surface, where they dry."],
        ["EIFS stands for:", "Exterior insulation and finish system", "Electrical interior finish system for low-voltage wiring in walls", "Exterior interior fire shield", "Elastic infill fastening system", "EIFS includes insulation, a reinforced base coat, and a finish coat."],
        ["Joint finishing temperatures are commonly kept at or above about:", "10 °C", "-5 °C", "0 °C", "35 °C", "Follow the manufacturer's data; many specify about 10 °C minimum during and after finishing."],
        ["Which board is usually chosen behind ceramic tile in a shower?", "Cement board or a tile backer board made for wet areas", "Ordinary paper-faced board", "Type X only", "Hardboard", "Standard paper-faced board is not used in continuously wet areas."],
        ["Why mix powder into water rather than water into a pile of powder?", "To reduce lumps and give a more even mix", "To make it set faster by wetting the powder from the top", "To save water", "To keep it dry", "Add powder to clean water and mix thoroughly following the data sheet."]
      ]),
      4: Q(4, [
        ["Which hazard can arise when dry mixing or cutting sand and cement products?", "Respirable crystalline silica dust", "Carbon monoxide only, from the mixer or saw engine", "Sulphur dioxide", "Radiation", "Silica dust is a serious health hazard. Use controls and respirators per provincial rules."],
        ["Fire-resistance ratings in Canada are determined by testing to:", "CAN/ULC-S101", "CSA Z11 only", "ISO 9000", "CSA C22.1", "ULC-S101 is the standard fire endurance test for building assemblies."],
        ["How many full 1200 mm by 2400 mm sheets are needed to cover 28.8 m² with no waste?", "10", "8", "12", "14", "Each sheet is 2.88 m², and 28.8 ÷ 2.88 = 10. Add an allowance for waste."],
        ["Blisters in drywall tape are most often caused by:", "Too little compound under the tape", "Too much paint applied over compound that was still damp", "Using the wrong colour", "Cold weather only", "A dry or starved embedding coat leaves air and weak bond."],
        ["Visible ridges at joint edges after painting usually mean:", "The coats were not feathered wide enough", "The screws were too long and pushed the paper face outward", "The studs were too wide", "The board was too thick", "Feather each coat wider than the last."],
        ["Which finishing level is best for walls under strong raking light and gloss paint?", "Level 5", "Level 2", "Level 1", "Level 0", "Critical lighting shows minor surface differences. Level 5 evens them out."],
        ["Nail pops are most commonly caused by:", "Lumber drying and shrinking, or boards not held tight", "Too much paint thickness building up over the screw heads", "Warm compound", "Wide tape", "Use screws and fix boards tight to framing."],
        ["Why is the building ideally enclosed and heated before finishing?", "To avoid rapid temperature and humidity swings that cause defects", "Because compound only works in the dark", "To save board by reducing the waste from damp or warped sheets", "Because inspections require it", "Stable conditions give even drying and fewer cracks."],
        ["A house built before 1990 has old plaster. Before demolition you should:", "Test for asbestos and lead as required by provincial rules", "Dry sweep it into piles and shovel it into open bins", "Burn it on site", "Wet it with chlorine", "Old plaster and paint can contain hazardous materials, and regulations apply."],
        ["Map cracking in cement plaster is often caused by:", "Rapid drying or over-rich mixes", "Too much damp curing that keeps the coat wet for days", "Using a trowel", "Using lath", "Control drying and follow the mix ratios."],
        ["Adding too much water to joint compound tends to:", "Increase shrinkage and reduce strength", "Improve sanding and workability, with no downside to the finished joint", "Increase fire rating", "Prevent cracks", "Follow the label. Over-thinned mud shrinks more."],
        ["Which should you do when mixing setting-type compound?", "Use clean tools and water to avoid shortening set time", "Use any bucket with leftover mud, since old compound speeds the set", "Add more catalyst", "Mix in a hot pot", "Contamination can speed the set unpredictably."],
        ["Which standard series covers gypsum board application in many Canadian specifications?", "CSA A82.31 and related gypsum standards", "CSA C22.2 and the Canadian Electrical Code, Part I", "CSA B139", "CSA Z259", "Check which standards your specification and province call up."],
        ["What does a higher STC rating mean in a wall assembly?", "Better airborne sound reduction", "Higher fire rating of the assembly in minutes", "More insulation value", "Faster drying", "Sound transmission class measures airborne sound blocking."],
        ["In a rated assembly, a hole is left around a pipe. The correct step is to:", "Fire-stop it with a listed system", "Fill with joint compound, since it is non-combustible", "Leave it for the painter", "Cover it with tape", "Penetrations must be sealed with a listed firestop system."]
      ])
    },
    roadmapSteps: [
      { title: "Before you start", items: ["Confirm entry requirements and the trade's status with your provincial or territorial apprenticeship authority", "Get safety training employers ask for (commonly WHMIS, working at heights, and site orientation; requirements vary)", "Apply to union training centres (such as IUPAT) and finishing contractors", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
      { title: "Year 1: foundations and taping", items: ["Learn site safety, PPE, dust control, and respirator use", "Learn gypsum board types, sizes, and fasteners", "Practise taping, embedding, and applying coats with knives", "Mix compound and keep a clean work area", "Complete your first technical training block"] },
      { title: "Year 2: levels of finish and corners", items: ["Finish to levels 3, 4, and 5 using GA-214", "Install and finish corner bead and control joints", "Spray and trowel textures", "Work from stilts and scaffolds with training"] },
      { title: "Year 3: plaster and exterior systems", items: ["Learn lath, scratch, brown, and finish coats", "Apply stucco and learn EIFS basics", "Learn fire-rated and acoustic assemblies", "Handle repairs and restoration work"] },
      { title: "Year 4 and beyond: advanced", items: ["Troubleshoot cracking, flashing, and finish defects", "Estimate materials and plan sequences", "Review hazardous materials rules for asbestos, silica, and lead", "Mentor first-year apprentices"] },
      { title: "Certification", items: ["Confirm hours and school requirements with your authority", "Review the Red Seal trade profile if your province offers the exam and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
    ],
    glossary: [
      ["All-purpose compound", "Joint compound suited for embedding, filling, and topping."],
      ["Bedding", "Embedding the tape in a coat of compound."],
      ["Brown coat", "The middle coat in three-coat plaster that levels the surface."],
      ["Butt joint", "A joint where two cut or square ends of board meet with no taper."],
      ["Corner bead", "A metal or plastic profile that protects an external corner."],
      ["Darby", "A long flat float used to level plaster."],
      ["Efflorescence", "White salt deposits left on a surface as moisture evaporates."],
      ["EIFS", "Exterior insulation and finish system."],
      ["Feathering", "Spreading the edge of a coat thin so it blends into the surface."],
      ["Fire taping", "Taping and one coat as needed for a fire-rated assembly."],
      ["Flashing", "Uneven sheen or colour showing through paint."],
      ["GA-214", "Gypsum Association document describing levels of drywall finish."],
      ["Hawk", "A flat hand-held board that holds plaster or compound."],
      ["Hot mud", "Common name for setting-type joint compound."],
      ["Lath", "A base of metal, board, or wood that plaster keys into."],
      ["Level of finish", "A defined quality of joint finishing from level 0 to level 5."],
      ["Mud", "Trade term for joint compound."],
      ["Nail pop", "A fastener head that pushes out and shows on the surface."],
      ["Scratch coat", "The first plaster coat, scored to key the next coat."],
      ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
      ["Skim coat", "A thin full-surface coat of compound or plaster."],
      ["Stucco", "Cement-based exterior plaster."],
      ["Texture", "A decorative surface profile sprayed or troweled on."],
      ["Type X", "Gypsum board with a core made for fire-rated assemblies."],
      ["WHMIS", "Canada's workplace hazardous materials information system."],
      ["Wet sanding", "Smoothing compound with a damp sponge to reduce dust."]
    ],
    cards: [
      { front: "Width of a standard gypsum board sheet", back: "1200 mm (4 ft)" },
      { front: "Thickness of 1/2 in and 5/8 in board", back: "12.7 mm and 15.9 mm" },
      { front: "Level 4 finish", back: "Typical for flat paint and light textures." },
      { front: "Level 5 finish", back: "Skim coat over the whole surface for gloss or critical lighting." },
      { front: "Three coats of plaster over lath", back: "Scratch, brown, finish" },
      { front: "Tape is embedded in", back: "The first coat of compound" },
      { front: "Best control for sanding dust", back: "Wet sanding or dust extraction, plus a fitted respirator" },
      { front: "Fire rating test standard in Canada", back: "CAN/ULC-S101" },
      { front: "Before disturbing old plaster or texture", back: "Test for asbestos and lead as provincial rules require." }
    ],
    jobsIntro: "Look for drywall and finishing contractors, union and signatory wall and ceiling contractors, plastering and stucco companies, restoration firms, and general contractors with in-house finishing crews.",
    tips: ["Bring a short resume, your safety tickets, and ID.", "Show you are careful, patient, and willing to learn a skilled hand trade.", "Visit shops and union training centres in person when you can, and follow up.", "Ask what tools you need and what the employer supplies."],
    forumTopics: ["Starting out", "Taping and levels of finish", "Plaster, stucco and EIFS", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference: [
      {
        title: "Levels of finish (GA-214)",
        intro: "A summary of the Gypsum Association levels. Always follow the project specification.",
        table: {
          head: ["Level", "Typical use"],
          rows: [
            ["0", "Temporary construction, no taping or finishing"],
            ["1", "Tape embedded in compound, concealed areas and fire taping"],
            ["2", "Tape plus a coat on joints and fasteners, tile base or garages"],
            ["3", "Additional coat on joints, for heavy textures"],
            ["4", "Further coats, for flat paints, light textures, and wallcoverings"],
            ["5", "Level 4 plus a skim coat, for gloss paint or critical lighting"]
          ]
        },
        note: "Level 5 is a thin skim coat over the entire surface, not just the joints."
      },
      {
        title: "Gypsum board thickness and sheet sizes",
        table: {
          head: ["Imperial", "Metric", "Notes"],
          rows: [
            ["1/4 in", "6.4 mm", "Thin, used for bending or overlays"],
            ["3/8 in", "9.5 mm", "Repairs and some overlays"],
            ["1/2 in", "12.7 mm", "Common wall and ceiling board"],
            ["5/8 in", "15.9 mm", "Common for fire-rated assemblies (Type X)"]
          ]
        },
        note: "Standard sheet width is 1200 mm (4 ft). Common lengths are 2400 mm (8 ft), 3000 mm (10 ft), 3600 mm (12 ft), and 4800 mm (16 ft)."
      },
      {
        title: "Material takeoff formulas",
        list: [
          "Wall area = length × height, then subtract large openings",
          "One 1200 mm × 2400 mm sheet covers 2.88 m² (32 sq ft)",
          "Sheets needed = total area ÷ sheet area, plus an allowance for waste",
          "Rectangle area = length × width. Triangle area = base × height ÷ 2",
          "Volume of material = area × thickness, with units kept consistent"
        ],
        note: "Waste allowances vary by job. Follow your estimator's figures."
      },
      {
        title: "Conversions",
        list: [
          "1 in = 25.4 mm, and 1 ft = 304.8 mm",
          "1 m² ≈ 10.76 sq ft, and 1 sq ft ≈ 0.0929 m²",
          "1 US gal ≈ 3.785 L, and 5 US gal ≈ 18.9 L",
          "1 kg ≈ 2.205 lb",
          "°F = (°C × 9/5) + 32. 10 °C = 50 °F"
        ]
      },
      {
        title: "Plaster systems at a glance",
        table: {
          head: ["System", "Layers", "Notes"],
          rows: [
            ["Three-coat plaster", "Scratch, brown, finish", "Over lath, traditional interior and exterior work"],
            ["Veneer plaster", "Base coat and thin finish", "Thin coat over gypsum base"],
            ["Stucco", "Scratch, brown, finish", "Cement-based exterior plaster over lath"],
            ["EIFS", "Insulation, base coat with mesh, finish", "Proprietary system, follow the manufacturer"]
          ]
        },
        note: "Follow mixing and curing instructions in the product data sheet."
      },
      {
        title: "Standards and code pointers",
        list: [
          "National Building Code of Canada: fire resistance ratings, sound transmission, and fire stopping requirements",
          "CAN/ULC-S101: standard method of fire endurance tests of building construction and materials",
          "CSA A82.31: gypsum board application. CSA A82.30: interior furring, lathing, and gypsum plastering (confirm current editions)",
          "GA-214 (levels of finish) and GA-216 (application and finishing) from the Gypsum Association",
          "WHMIS and SDS: read the SDS for compounds, primers, and sealants. Provincial regulations cover asbestos, silica, and lead"
        ],
        note: "Your province may call up different editions. Confirm with your instructor and authority."
      }
    ]
  });
}
