// Tilesetter content: tools, learning media, practice tests, roadmap, and reference.
// Practice questions are original study aids, not official Red Seal exam questions.

(() => {
  const bank = (rows) => rows.map(([q, c, d, explain], i) => {
    const answer = (i * 3 + rows.length + 1) % 4;
    const options = d.slice();
    options.splice(answer, 0, c);
    return { q, options, answer, explain };
  });

  const toolGroups = [
    {
      title: "Day-one tools, buy once and buy well",
      note: "Professional-grade tools that hold their edge and accuracy for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
      items: [
        { name: "Marshalltown or QLT notched trowels (square-notch set)", why: "Notch size controls how much mortar is left on the substrate. A set of 6 mm, 10 mm, and 12 mm notches covers most jobs.", search: "Marshalltown QLT notched trowel square notch set tile" },
        { name: "Margin trowel", why: "Mix, scoop, and spread mortar in tight spots and back-butter tile.", search: "Marshalltown margin trowel tile" },
        { name: "Grout float (hard rubber)", why: "Packs grout into joints without scratching tile. A firm, sharp-edged float lasts years.", search: "QEP grout float hard rubber" },
        { name: "Tile spacers and wedges", why: "Keep joint widths consistent. Buy several sizes, from 1.5 mm to 6 mm.", search: "tile spacers assorted 1.5mm 3mm 6mm" },
        { name: "Tile nippers (carbide wheel)", why: "Nibble curves and notches around pipes and corners.", search: "QEP tile nippers carbide wheel" },
        { name: "Score-and-snap tile cutter (Rubi or Montolit)", why: "Clean, fast straight cuts on ceramic and many porcelain tiles without dust.", search: "Rubi Montolit tile cutter score snap" },
        { name: "4 ft level and a straightedge", why: "Checks flatness of the substrate and of the finished tile surface.", search: "Empire 48 inch level aluminum straightedge" },
        { name: "Tape measure (25 ft / 7.5 m) and chalk line", why: "Layout starts with accurate measuring and straight reference lines.", search: "Stanley FatMax tape measure 7.5m chalk line" },
        { name: "Knee pads, safety glasses, and CSA-approved safety boots", why: "Long hours kneeling and flying chips. Comfortable, rated gear is what you will wear.", search: "gel knee pads CSA safety boots safety glasses" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
      items: [
        { name: "Mixing paddle and a corded or 18V drill", why: "Mix thinset evenly without lumps. Choose a low-speed, high-torque drill for mixing.", search: "mortar mixing paddle low speed drill DeWalt Milwaukee" },
        { name: "Tile levelling system (clips and wedges)", why: "Reduces lippage on large tiles. Pick a system your shop uses.", search: "tile leveling system clips wedges Raimondi QEP" },
        { name: "Grout sponges, buckets, and a haze cloth", why: "Clean sponges and fresh water keep grout joints even and tile clean.", search: "grout sponge bucket tile cleaning" },
        { name: "Suction cup tile lifter", why: "Lifts and places large tiles without chipping edges.", search: "suction cup tile lifter" },
        { name: "Rubber mallet and beating block", why: "Seats tile into mortar evenly for full coverage.", search: "rubber mallet tile beating block" },
        { name: "Grout saw and caulking gun", why: "Remove old grout and install flexible sealants at movement joints.", search: "grout saw carbide caulking gun" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying.",
      items: [
        { name: "Wet tile saw (DeWalt or MK Diamond)", why: "Precise cuts in porcelain and stone with water to control silica dust. Normally company-supplied.", search: "DeWalt MK Diamond wet tile saw" },
        { name: "Angle grinder with diamond blade", why: "Cutting holes and edges. Use water or dust shroud and respiratory protection.", search: "angle grinder diamond blade tile dust shroud" },
        { name: "Laser level", why: "Sets reference lines for wall and floor layouts. Usually a crew tool.", search: "green cross line laser level" },
        { name: "Half-face respirator with P100 filters", why: "Part of a silica control plan when cutting. Fit testing is required.", search: "3M half face respirator P100" },
        { name: "Large-format tile carrier and glass-handling cups", why: "Moves heavy slabs safely and reduces strain.", search: "large format tile carrier slab handling" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for drawings, math, and code study. Check with your school and your exam body about calculator rules before you buy.",
      items: [
        { name: "Mechanical pencil (0.5 mm), such as Pentel GraphGear 1000", why: "Fine lines for layout drawings and notes.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm" },
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Area, volume, waste factors, and mortar coverage.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Graph paper pads", why: "Sketch tile layouts to scale to find cuts and avoid slivers.", search: "graph paper pad 8.5x11" },
        { name: "Architect's and engineer's scales", why: "Read floor plans and details at scale.", search: "architect scale engineer scale ruler" },
        { name: "Combination square and a 12 in steel ruler", why: "Check squareness and mark cuts accurately.", search: "Starrett combination square steel ruler 12 inch" },
        { name: "Field notebook (Rite in the Rain)", why: "Record room dimensions and product data. Weatherproof paper handles wet sites.", search: "Rite in the Rain field notebook" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic for Red Seal review.", search: "binder dividers highlighters" }
      ]
    }
  ];

  const mediaGroups = [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare. Search for the tilesetter trade page where available.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Codes Canada (National Building Code)", desc: "The model national code that provincial building codes are based on.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
        { name: "Tile Council of North America (TCNA)", desc: "Publisher of the TCNA Handbook for Ceramic, Glass, and Stone Tile Installation and the ANSI tile standards.", url: "https://www.tcnatile.com/" },
        { name: "International Union of Bricklayers and Allied Craftworkers (BAC)", desc: "Union tile, marble, and terrazzo training information.", url: "https://www.bacweb.org/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Plain-language safety information on silica, dusts, and chemicals.", url: "https://www.ccohs.ca/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local codes.",
      items: [
        { name: "Floor tile installation basics", desc: "Layout, mortar, and setting tile from start to finish.", url: "https://www.youtube.com/results?search_query=how+to+install+floor+tile+professional+tile+setter" },
        { name: "Tile layout and finding the centre", desc: "Dry lay, layout lines, and avoiding slivers.", url: "https://www.youtube.com/results?search_query=tile+layout+centre+line+avoid+slivers" },
        { name: "Shower waterproofing", desc: "Membranes, corners, drains, and flood testing.", url: "https://www.youtube.com/results?search_query=shower+waterproofing+membrane+tile+setter" },
        { name: "Large format tile installation", desc: "Back-buttering, trowel choice, and lippage control.", url: "https://www.youtube.com/results?search_query=large+format+tile+installation+lippage+back+butter" },
        { name: "Mixing and troweling thinset", desc: "Mixing, slaking, combing, and checking coverage.", url: "https://www.youtube.com/results?search_query=thinset+mixing+troweling+coverage+tile" },
        { name: "Grouting tile", desc: "Sanded, unsanded, and epoxy grout application and cleanup.", url: "https://www.youtube.com/results?search_query=how+to+grout+tile+sanded+epoxy+cleanup" },
        { name: "Tile movement joints", desc: "Where and why movement joints are required.", url: "https://www.youtube.com/results?search_query=tile+movement+joints+expansion+perimeter+TCNA" },
        { name: "Wet saw safety and silica dust", desc: "Cutting tile with dust control.", url: "https://www.youtube.com/results?search_query=wet+tile+saw+safety+silica+dust" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for tile work yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: tile setter apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=tile+setter+apprentice+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: tile installation podcast (listen-along)", desc: "Talks from working tile setters about methods, mortar, and substrate prep.", url: "https://www.youtube.com/results?search_query=tile+installation+podcast+tile+setter" },
        { name: "YouTube: tile standards and TCNA talks", desc: "Substrate flatness, deflection, and movement joint discussions.", url: "https://www.youtube.com/results?search_query=TCNA+handbook+tile+standards+talk" },
        { name: "YouTube: tile setter tips and stories (audio)", desc: "Job-site lessons and problem-solving stories.", url: "https://www.youtube.com/results?search_query=tile+setter+podcast+tips+stories" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, business, and leadership.",
      items: [
        { name: "YouTube: Red Seal tilesetter exam prep (talk-through)", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+tilesetter+exam+preparation" },
        { name: "YouTube: tile business and estimating podcast", desc: "Takeoffs, pricing, and running a tile business.", url: "https://www.youtube.com/results?search_query=tile+contractor+estimating+business+podcast" },
        { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
      ]
    }
  ];

  const practiceBank = {
    1: bank([
      ["Which tool spreads thinset in even ridges for setting tile?", "Notched trowel", ["A rubber grout float with a hard edge for packing joints", "Grout float", "Tile nipper"], "The notches control how much mortar is left on the substrate."],
      ["Dry cutting porcelain with a grinder is a concern because it releases:", "Respirable crystalline silica dust", ["Carbon monoxide fumes from the grinder motor", "Lead vapour", "Ozone"], "Cut wet or use dust collection, and use a fitted respirator as part of your employer's plan."],
      ["Cement-based thinset is mixed with:", "Clean water in the amount the manufacturer lists", ["Whatever liquid is handy on site, as long as the mix looks workable", "Oil", "Antifreeze"], "Follow the bag. Too much or too little water weakens the bond."],
      ["Tile spacers are used to:", "Keep joint widths consistent", ["Cut tile edges cleanly along a scored line", "Mix grout", "Check level"], "Spacers set even joints and square lines."],
      ["12 inches is closest to how many millimetres?", "305 mm", ["120 mm", "250 mm", "350 mm"], "12 x 25.4 = 304.8 mm."],
      ["Why should you check a floor for flatness before tiling?", "Uneven surfaces cause lippage, hollow spots, and cracked tile", ["Tile always self-levels", "Mortar fixes any slope", "It is only for looks"], "Flat substrate is key to good coverage and a flat tile surface."],
      ["Which PPE protects your eyes when cutting or nipping tile?", "Safety glasses", ["Ear plugs", "Knee pads rated for long periods of kneeling", "Hard hat only"], "Chips and slurry fly during cutting."],
      ["A score-and-snap cutter is best for:", "Straight cuts on ceramic and many porcelain tiles", ["Round holes", "Cutting thick natural stone slabs and heavy pavers", "Mixing mortar"], "Score once with firm pressure, then snap."],
      ["The water on a wet tile saw serves to:", "Cool the blade and reduce dust", ["Tint the tile so the cut edges match the face", "Make grout", "Clean the floor"], "Water also helps keep the blade cutting well."],
      ["A 3 m by 4 m floor has an area of:", "12 m²", ["7 m²", "7 m², from adding the two sides together", "24 m²"], "Area = length x width."],
      ["Tile nippers are used to:", "Nibble away small pieces for curves and notches", ["Mix thinset and spread it in even ridges", "Spread grout", "Check plumb"], "They are used for cuts around pipes and irregular shapes."],
      ["Where do you find hazards and first aid information about a thinset or sealer?", "Safety Data Sheet (SDS)", ["Tape measure", "The printed label on the tile box lid", "Delivery receipt"], "The SDS explains hazards, handling, and first aid under WHMIS."],
      ["A grout float is used to:", "Press grout into the joints", ["Cut tile along a scored line", "Level mortar", "Cut backer board"], "Hold it at an angle and work diagonally across the joints."],
      ["Porcelain tile is normally defined by a water absorption of:", "0.5% or less", ["Between 5% and 7%, like most ceramic wall tile", "10% or more", "Exactly 3%"], "Standard test methods classify tile by water absorption."],
      ["Wet cement-based thinset on bare skin can cause:", "Chemical irritation or burns", ["Frostbite", "Lead poisoning from the cement dust", "No effects"], "Wear gloves, protect your eyes, and wash promptly."],
      ["Kneeling for long periods on a job is best managed with:", "Knee pads and regular breaks", ["No breaks", "Thin socks and thin-soled work shoes", "Kneeling on tile edges"], "Protect your joints and change positions often."]
    ]),
    2: bank([
      ["The coverage of mortar under tile in wet areas should typically be at least:", "95%", ["50%", "60%", "75%"], "TCNA and ANSI methods call for 80% in dry interior areas and 95% in wet areas and exteriors."],
      ["Back-buttering a tile means:", "Spreading a thin layer of mortar on the back of the tile", ["Soaking it in a bucket of water before setting it on the mortar", "Applying grout to the back", "Scoring the back"], "It helps achieve full coverage, especially on large tiles."],
      ["Sanded grout is generally used for joints that are:", "Wider than about 3 mm (1/8 in)", ["Narrower than 1 mm, as for rectified tile", "Always unfilled", "Only on walls"], "Unsanded grout is for narrow joints, where sand would prevent packing."],
      ["Bigger tile generally needs:", "A larger trowel notch", ["A smaller trowel notch", "No mortar", "Wet saw only"], "Large tiles need more mortar to bridge uneven backs and substrates."],
      ["For best coverage, you should comb the mortar and set the tile:", "With the ridges all running in one direction, then slide the tile perpendicular to them", ["With the ridges combed in circular swirls so the mortar spreads evenly, then pressing the tile straight down", "With no ridges", "Over damp mortar only"], "Perpendicular sliding collapses the ridges and helps close air gaps."],
      ["A common slope for a shower floor toward the drain is:", "About 2% (6 mm per 300 mm, or 1/4 in per ft)", ["Level", "About 10% (100 mm per metre), so water leaves quickly", "0.1%"], "Check the code and manufacturer directions for your project."],
      ["Cement backer board is used because it:", "Resists moisture and gives a stable tile substrate in wet areas", ["Is fully waterproof on its own, so no membrane is ever needed in a shower", "Is paper-faced", "Needs no fastening"], "It is not a waterproof layer by itself, so a membrane is also needed in showers."],
      ["The best layout practice is to:", "Dry lay from the centre line to avoid thin cut tiles at the edges", ["Start tiling from one corner and let the cuts fall wherever they land", "Use the smallest tile at the walls", "Skip the layout"], "Adjusting the starting line balances cuts on opposite walls."],
      ["Movement joints at floor perimeters and changes of plane should be filled with:", "Flexible sealant", ["Sanded grout matched to the field joints", "Thinset", "Epoxy grout"], "Grout cracks if the tile moves, so a sealant is used instead."],
      ["Thinset that has formed a skin before tile is set should be:", "Removed or re-combed with fresh mortar", ["Used as is, since the mortar underneath is still workable", "Wetted with water", "Covered with more tile"], "Skinned mortar does not bond. Spread smaller areas at a time."],
      ["Slaking thinset means:", "Letting the mix rest for the time the manufacturer lists, then remixing", ["Adding extra water until the mix is loose and easy to spread across the floor", "Heating the mix", "Freezing the mix"], "Slaking lets the ingredients wet out fully before use."],
      ["A joint of 1/8 in is about:", "3 mm", ["1 mm", "8 mm", "13 mm"], "1/8 in = 3.2 mm."],
      ["Before tiling concrete, you should make sure it is:", "Clean, flat, and free of curing compounds, sealers, and dust", ["Slightly damp and sealed with a glossy topping to help the mortar grip", "Covered in paint", "Polished"], "Contaminants stop mortar from bonding."],
      ["Mortar that has started to set in the bucket should:", "Be discarded, not softened with extra water", ["Be remixed with a splash of water to restore workability", "Be used on walls", "Be poured on the floor"], "Retempering with water weakens the mix."],
      ["After grouting, the sponge should be:", "Damp, clean, and wiped lightly across the joints", ["Soaking wet so it floats the grout out of the joints", "Used dry", "Used with acid on all grout"], "Too much water weakens grout and washes out colour."],
      ["The size of a trowel notch is chosen based on:", "Tile size, tile back, and the mortar maker's directions", ["The colour of the grout and the finish of the tile face", "The temperature only", "The brand of the saw"], "Check coverage by lifting a tile after setting."]
    ]),
    3: bank([
      ["Where tile is applied over a shower waterproofing membrane, a flood test is commonly held for:", "About 24 hours", ["About 1 minute once the water stops moving", "5 minutes", "1 hour"], "Follow the project specification and membrane manufacturer directions."],
      ["In a traditional mortar bed shower, the slope to the drain should be built:", "Under the waterproofing membrane as well as in the finished floor", ["Only in the thinset layer directly beneath the finished tile surface", "Not at all", "Only at the walls"], "A pre-slope sends any water that gets past the tile to the weep holes."],
      ["Uncoupling membranes are used to:", "Allow in-plane movement of the substrate so it does not crack the tile", ["Make tile slippery", "Replace thinset entirely so tile can be set with no mortar", "Add colour"], "They reduce transfer of substrate movement to tile."],
      ["Large format tile is commonly defined as tile with a side:", "Longer than about 380 mm (15 in)", ["Shorter than 50 mm, like mosaic sheets", "Exactly 150 mm", "No size limit"], "Large and heavy tile needs a flat substrate and often a larger notch."],
      ["Lippage means:", "A height difference between adjacent tile edges", ["A hollow sound when tapped, from poor mortar coverage", "A grout colour change", "A crack in the tile"], "It is controlled by flatness, mortar, and levelling methods."],
      ["Levelling clips and wedges help to:", "Keep adjacent tile edges flush while the mortar sets", ["Mix grout to an even consistency in the bucket", "Cut tile", "Waterproof the wall"], "They are removed after the mortar cures."],
      ["Marble and some natural stones should NOT be cleaned with:", "Acidic cleaners", ["Neutral stone cleaners", "Water and a soft cloth", "A damp mop"], "Acids etch calcium-based stones. Use products approved for natural stone."],
      ["Epoxy grout is chosen for:", "Chemical and stain resistance, with a short working time", ["Wide cement joints", "Slow, forgiving cleanup with plain water and a sponge", "Use on any shrinking substrate"], "Follow the manufacturer's working time and cleanup methods exactly."],
      ["For ceramic tile floors, a commonly used minimum for substrate stiffness is a deflection of no more than:", "L/360", ["L/10", "L/60, a limit that lets floors flex noticeably", "L/120"], "Natural stone typically requires stiffer, such as L/720."],
      ["Before running radiant floor heat under new tile you should:", "Allow the setting materials to cure and ramp up the heat gradually per manufacturer directions", ["Turn the heat to maximum as soon as the tile is set to dry the mortar quickly", "Heat the day you grout", "Skip curing"], "Fast heat can crack tile or break bonds."],
      ["A tile with a wet DCOF of 0.42 or higher is commonly used for:", "Level interior floors expected to be walked on when wet", ["Vertical wall surfaces only, never any floor areas that get wet", "Dry bedrooms only", "Countertops only"], "ANSI A137.1 uses 0.42 as the threshold for such areas."],
      ["Joints between cement backer boards are normally:", "Taped with alkali-resistant mesh tape and thinset", ["Left open with a small gap so the boards can expand freely", "Filled with paint", "Taped with duct tape"], "Follow the board manufacturer directions."],
      ["Tile over a wood subfloor requires:", "Sufficient total thickness and stiffness, and an approved underlayment", ["No special preparation, since thinset bonds directly to plywood or boards", "Only a thin vinyl sheet", "Glue only"], "Wood moves with moisture, and deflection can crack tile."],
      ["Grouting should be done after the tile mortar has:", "Cured enough as the manufacturer directs", ["Been set for about 5 minutes, enough to hold the tile", "Been rewetted", "Been frozen"], "Check mortar data, since fast-setting mortars differ."],
      ["Tile with a water absorption of 0.5% or less is classed as:", "Impervious", ["Non-vitreous", "Semi-vitreous", "Vitreous"], "Porcelain falls in the impervious class. Non-vitreous tile absorbs more than 7%."],
      ["Which setting product suits large and heavy tile best?", "A mortar rated for large and heavy tile, applied in a larger notch with back-buttering", ["Any leftover standard thinset from the shop, spread with a small notch and no back-buttering", "A thin dab of adhesive", "Wall plaster"], "Select by the mortar manufacturer rating and the tile weight and size."]
    ]),
    4: bank([
      ["Tiles that sound hollow when tapped most likely have:", "Poor mortar coverage or a bond problem", ["Perfect coverage", "Too much grout", "A wrong colour"], "Remove and reset with the right trowel, mortar, and back-buttering."],
      ["Cracks that run in a straight line through the tile above a slab crack suggest:", "No crack isolation or movement joint was provided", ["Grout that was over-mixed before it went into the joints", "Too much sealer", "Wrong colour grout"], "Cracks in the slab can telegraph through unless isolated."],
      ["Grout colour that varies from joint to joint is often caused by:", "Inconsistent water in the mix or uneven cleaning", ["Using a level", "Switching to a bigger trowel notch part way through the floor", "Using safety glasses"], "Measure water by volume and clean the same way each time."],
      ["Water pooling in a finished shower floor suggests:", "Not enough slope to the drain", ["Too much pigment in the grout colour", "Wrong tile size only", "A cold floor"], "Slope should be checked before waterproofing and tile."],
      ["A 3.6 m by 2.4 m floor needs about how much tile, including 10% waste?", "9.5 m²", ["8.6 m²", "6 m²", "12 m²"], "3.6 x 2.4 = 8.64 m², and with 10% waste that is about 9.5 m²."],
      ["How many 300 x 600 mm tiles cover 8.64 m² before waste?", "48", ["24, from using a 600 x 600 mm tile size", "36", "96"], "Each tile is 0.18 m², and 8.64 / 0.18 = 48."],
      ["Which layouts usually need extra waste?", "Diagonal and herringbone", ["Straight lay only, with no cuts needed", "Single tile jobs", "Walls with no cuts"], "More angled cuts mean more waste."],
      ["A saw-cut control joint in a concrete slab should be:", "Carried up through the tile as a movement joint", ["Covered with sanded grout like any other joint", "Filled with thinset", "Ignored"], "Movement joints stay open to the substrate and are filled with flexible sealant."],
      ["The best way to waterproof inside corners and drain flanges in a shower is to:", "Use the membrane maker's preformed corners and sealing methods", ["Use a bead of silicone caulking over the corners and flanges only", "Use paint", "Use wet grout"], "Details at corners and penetrations are where leaks start."],
      ["To manage shade variation in tile, you should:", "Mix tile from several boxes as you set", ["Use one box at a time", "Use one box at a time until it is empty, then open the next", "Wet all the tile"], "Blending hides slight shade variation. Check that the lot or shade numbers match."],
      ["At the joint between a tile wall and a tub, use:", "A flexible sealant, not grout", ["Epoxy grout for its strength and stain resistance", "Sanded grout", "Thinset"], "The tub and wall move differently."],
      ["Before tiling new concrete, you should:", "Check the curing and moisture requirements of the mortar and membrane", ["Tile the next day, since new concrete is always ready by then", "Seal it with oil", "Skip testing"], "Many manufacturers specify cure times and moisture limits."],
      ["When the drawings and specifications conflict on a tile detail, you should:", "Ask for clarification in writing before proceeding", ["Pick the cheaper option, since it saves the owner money", "Ignore both", "Guess"], "A written request for information protects you and the client."],
      ["Epoxy grout haze left too long is best handled by:", "Following the grout maker's cleaning product directions promptly", ["Using strong acid on everything, whatever the grout maker says", "Leaving it", "Scraping with steel"], "Epoxy gets harder to remove as it cures."],
      ["After tile is set and grouted, the new floor should be:", "Protected and kept off traffic for the cure time the products list", ["Walked on right away, because grout and mortar harden within minutes", "Rolled with heavy loads", "Washed with solvents"], "Early traffic can shift tile and damage grout."],
      ["Where tile is installed over a floor that bounces, the best fix is:", "Stiffen the floor structure or add suitable underlayment before tiling", ["Use thicker grout joints and a wider trowel notch to take up the bounce", "Use more spacers", "Use a smaller trowel"], "Tile cannot flex. Deflection must be controlled."]
    ])
  };

  const roadmapSteps = [
    { title: "Before you start", items: ["Confirm entry requirements and whether tilesetting is a Red Seal or compulsory trade in your province or territory", "Get the safety training employers ask for (commonly WHMIS, fall protection, and site orientation; requirements vary)", "Prepare a resume and apply to union locals (such as BAC) and tile contractors", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: foundations and surface prep", items: ["Learn site safety, PPE, and silica controls", "Learn substrates, layout lines, and measuring", "Mix thinset and spread, set, and cut simple tile jobs", "Complete your first technical training block", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: wall, floor, and grout work", items: ["Set floor and wall tile with correct trowels and coverage", "Use grout and sealants correctly, including movement joints", "Cut tile around fixtures, pipes, and corners", "Read floor plans and finish schedules"] },
    { title: "Year 3: waterproofing and specialty tile", items: ["Install waterproofing membranes and shower systems", "Learn large format tile, natural stone, and mosaics", "Learn substrates such as backer board, uncoupling membranes, and mortar beds", "Learn TCNA and ANSI methods and how to read product data"] },
    { title: "Year 4 and beyond: advanced work", items: ["Plan layouts, estimate materials, and sequence work with other trades", "Troubleshoot hollow tile, lippage, cracking, and leaks", "Mentor first-year apprentices", "Use the Red Seal standard, where available, to find gaps in your experience"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement where it applies", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ];

  const glossary = [
    ["Back-buttering", "Spreading mortar on the back of a tile to improve coverage."],
    ["Backer board", "A cement-based or similar panel used as a stable tile substrate."],
    ["Bond coat", "The mortar layer that bonds tile to the substrate."],
    ["Caulk (sealant)", "A flexible material used at movement joints and changes of plane."],
    ["Coverage", "The percentage of tile back in full contact with mortar."],
    ["DCOF", "Dynamic coefficient of friction, a measure of slip resistance when wet."],
    ["Deflection", "How much a floor bends under load."],
    ["Dry-set mortar", "Cement-based thinset mixed with water."],
    ["Efflorescence", "White salt deposits that sometimes appear on grout or stone."],
    ["Epoxy grout", "A chemical-resistant grout with a short working time."],
    ["Grout", "The material that fills joints between tile."],
    ["Grout haze", "A thin film of grout residue left on tile after cleaning."],
    ["Large format tile", "Tile with a side longer than about 380 mm (15 in)."],
    ["Lippage", "A height difference between adjacent tile edges."],
    ["Mastic", "An organic adhesive sometimes used on walls in dry areas."],
    ["Membrane", "A waterproofing or uncoupling layer under tile."],
    ["Modified thinset", "Thinset with polymer additives for better bond and flexibility."],
    ["Mortar bed", "A thick sand and cement bed used to slope or level a floor."],
    ["Movement joint", "A joint filled with sealant that lets the tile assembly move."],
    ["Notched trowel", "A trowel with ridges used to spread mortar."],
    ["Open time", "How long mortar stays workable after spreading."],
    ["Porcelain", "A dense, low-absorption tile, 0.5% or less."],
    ["Pot life", "How long mixed mortar is usable in the bucket."],
    ["Sanded grout", "Grout with sand for joints wider than about 3 mm."],
    ["Setting materials", "Mortar, adhesive, and grout used to install tile."],
    ["Slaking", "Letting mixed thinset rest before remixing."],
    ["Spacer", "A small plastic piece that sets joint width."],
    ["Substrate", "The surface that tile is installed on."],
    ["Thinset", "A cement-based adhesive used to set tile."],
    ["Unsanded grout", "Grout without sand for narrow joints."],
    ["Wet saw", "A saw that uses water to cool the blade and reduce dust."]
  ];

  registerTrade({
    id: "tilesetter",
    store: "tilesetter",
    title: "Tilesetter",
    name: "Tilesetter",
    short: "tilesetting",
    category: "Finishing · Construction · Interior",
    summary: "Tilesetters prepare surfaces and install ceramic, porcelain, glass, and natural stone tile on floors, walls, and showers, combining layout skill with waterproofing and detailed finishing.",
    work: "Tilesetters check and prepare substrates, lay out the tile, mix and spread mortar, cut and set tile, then grout and seal. Work is often on your knees, in homes, bathrooms, kitchens, and commercial spaces. Accuracy in layout, flatness, and waterproofing is what the client sees and what keeps the building dry.",
    duration: "Usually 3–4 years (Job Bank), varies by province",
    union: "International Union of Bricklayers and Allied Craftworkers (BAC)",
    unionUrl: "https://www.bacweb.org/",
    profileUrl: "https://red-seal.ca/eng/trades/tilesetter.shtml",
    durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/17024/ca",
    jobSearch: "tilesetter apprentice",
    journeySearch: "tile setter",
    aliases: "tile setter tiler tile installer ceramic porcelain marble stone floor wall shower",
    tools: ["Notched trowels", "Grout float and sponges", "Tile spacers and levelling clips", "Score-and-snap cutter", "Tile nippers", "Knee pads, safety glasses, and boots"],
    insight: {
      skills: ["Layout and measuring accuracy", "Mortar mixing and coverage", "Cutting and fitting", "Patience and finish quality"],
      hazards: ["Silica dust: cut wet and use controls", "Cement and epoxy chemicals: wear gloves and read the SDS", "Knee and back strain: use pads and take breaks", "Heavy tile and slabs: use carriers and team lifts"],
      settings: ["Homes and renovations", "Bathrooms and showers", "Commercial and retail floors", "Stone and specialty finishes"]
    },
    toolGroups,
    mediaGroups,
    practiceBank,
    roadmapSteps,
    glossary,
    cards: [
      { front: "Mortar coverage under tile", back: "80% in dry interior areas, 95% in wet areas and exteriors" },
      { front: "Sanded vs unsanded grout", back: "Sanded for joints wider than about 3 mm. Unsanded for narrow joints." },
      { front: "Shower floor slope", back: "About 2% (6 mm per 300 mm, or 1/4 in per ft)" },
      { front: "Large format tile", back: "Side longer than about 380 mm (15 in)" },
      { front: "Porcelain water absorption", back: "0.5% or less" },
      { front: "Minimum wet DCOF for level interior wet floors", back: "0.42 (ANSI A137.1)" },
      { front: "Ceramic tile floor deflection guideline", back: "No more than L/360 (stone is stiffer, such as L/720)" },
      { front: "Waste allowance", back: "About 10% for straight lay, more for diagonal or herringbone" },
      { front: "What goes in movement joints?", back: "Flexible sealant, not grout" },
      { front: "Silica dust control", back: "Wet cutting, dust collection, and a fitted respirator as a back-up." }
    ],
    jobsIntro: "Look for tile contractors, flooring and renovation companies, home builders and developers, commercial and industrial contractors, stone fabricators, and union locals.",
    tips: ["Bring a short resume, your safety tickets, and ID.", "Show attention to detail and be ready to kneel and lift.", "Visit tile shops and contractors in person when you can, and follow up.", "Ask what tools you need and what the employer supplies."],
    forumTopics: ["Starting out", "Layout, mortar, and grout", "Waterproofing and showers", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference: [
      {
        title: "Area and quantity formulas",
        list: [
          "<strong>Rectangle area:</strong> length x width (m x m = m²).",
          "<strong>Number of tiles:</strong> floor area / area of one tile, then add waste.",
          "<strong>Waste allowance:</strong> about 10% for straight lay, often more for diagonal, herringbone, or room with many cuts.",
          "<strong>Example:</strong> 3.6 m x 2.4 m = 8.64 m². At 300 x 600 mm (0.18 m²) per tile: 48 tiles, about 53 with 10% waste.",
          "<strong>Joint width in metric:</strong> 1/16 in = 1.6 mm, 1/8 in = 3.2 mm, 3/16 in = 4.8 mm, 1/4 in = 6.4 mm."
        ]
      },
      {
        title: "Trowel notch starting points",
        intro: "Typical starting points only. Follow the mortar and tile manufacturer, and check coverage by lifting a freshly set tile.",
        table: {
          head: ["Tile type", "Typical notch", "Note"],
          rows: [
            ["Mosaics and small wall tile", "6 mm x 6 mm square or V-notch", "Thin, even bed"],
            ["About 300 mm (12 in) tile", "6 x 10 mm or 10 x 10 mm square", "Back-butter as needed"],
            ["Large format tile (over 380 mm)", "12 x 12 mm or larger, or a half-moon notch", "Back-butter, use mortar rated for large and heavy tile"],
            ["Natural stone", "Per stone and mortar maker", "Use white mortar for translucent stone"]
          ]
        }
      },
      {
        title: "Tile water absorption classes",
        table: {
          head: ["Class", "Water absorption", "Typical use"],
          rows: [
            ["Non-vitreous", "More than 7%", "Interior walls"],
            ["Semi-vitreous", "More than 3% to 7%", "Interior floors and walls"],
            ["Vitreous", "More than 0.5% to 3%", "Interior and some exterior"],
            ["Impervious (porcelain)", "0.5% or less", "Wet areas and exterior"]
          ]
        },
        note: "Slip resistance, abrasion resistance, and frost resistance are rated separately. Check product data for your application."
      },
      {
        title: "Coverage, grout, and joints",
        list: [
          "<strong>Coverage:</strong> 80% minimum in dry interior areas, 95% in wet areas and exteriors, per ANSI A108 methods.",
          "<strong>Sanded grout:</strong> for joints wider than about 3 mm (1/8 in). <strong>Unsanded:</strong> narrower joints.",
          "<strong>Epoxy grout:</strong> stain and chemical resistant, short working time.",
          "<strong>Movement joints:</strong> at perimeters, changes of plane, over slab joints, and at set intervals in large areas per TCNA EJ171 (check the handbook for spacing).",
          "<strong>Sealants:</strong> flexible sealant at movement joints, never grout."
        ]
      },
      {
        title: "Waterproofing and wet-area steps",
        list: [
          "Check the substrate is flat, sound, and sloped to the drain (about 2%).",
          "Install the membrane system as the manufacturer directs, with preformed corners and sealing at penetrations and drains.",
          "Flood test the shower base when specified, commonly for about 24 hours.",
          "Use tile and mortar rated for wet areas, with 95% coverage.",
          "Use flexible sealant at inside corners and at the tub or base."
        ],
        note: "Show the inspector or site supervisor your membrane and flood test details when required. Rules vary by province and project."
      },
      {
        title: "Silica and site safety",
        list: [
          "Wet cut, use dust collection, and keep dust off clothing.",
          "Use a fitted respirator when controls are not enough, as part of your employer's plan.",
          "Wear gloves with cement and epoxy products, and read the SDS.",
          "Lift slabs with carriers and a partner.",
          "Ventilate when using solvents, sealers, and adhesives."
        ],
        note: "Silica limits and work procedures differ by province, so confirm with your provincial occupational health and safety regulations."
      }
    ]
  });
})();
