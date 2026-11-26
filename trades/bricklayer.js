// Bricklayer content: tools, learning media, practice tests, roadmap, and reference.
// Practice questions are original study aids, not official Red Seal exam questions.

(() => {
  const bank = (rows) => rows.map(([q, c, d, explain], i) => {
    const answer = (i * 3 + rows.length) % 4;
    const options = d.slice();
    options.splice(answer, 0, c);
    return { q, options, answer, explain };
  });

  const toolGroups = [
    {
      title: "Day-one tools, buy once and buy well",
      note: "Professional-grade tools that hold their edge and accuracy for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
      items: [
        { name: "Marshalltown or Kraft brick trowel (11 in)", why: "A balanced, forged-steel blade spreads mortar and cuts brick. Handle balance matters over a full day on the wall.", search: "Marshalltown brick trowel 11 inch" },
        { name: "Marshalltown or Kraft pointing trowel", why: "Small blade for tucking, buttering ends, and repairing joints.", search: "Marshalltown pointing trowel 6 inch" },
        { name: "Mason's brick hammer (Estwing or Marshalltown)", why: "Square face for tapping, chisel end for trimming brick. One-piece steel holds up to daily abuse.", search: "Estwing brick hammer mason" },
        { name: "Brick set (bolster) chisel and club hammer", why: "Cuts brick and block cleanly along a scored line. Use with eye protection.", search: "brick bolster chisel club hammer set" },
        { name: "Mason's line, line blocks, and line pins", why: "Holds the course line tight between corners so each brick is set straight and level.", search: "mason line blocks line pins bricklayer" },
        { name: "Stanley or Empire 4 ft mason's level", why: "A long, accurate level with plumb vials for checking walls and corners.", search: "Empire 48 inch mason level magnetic" },
        { name: "Stanley or Milwaukee tape measure (25 ft / 7.5 m)", why: "A wide blade with metric and imperial markings for layout and course checking.", search: "Stanley FatMax tape measure 7.5m 25ft" },
        { name: "Marshalltown convex jointer and sled runner", why: "Compress and shape joints to a weather-tight concave profile.", search: "Marshalltown convex jointer sled runner" },
        { name: "Cut-resistant gloves, safety glasses, hearing protection, and CSA-approved safety boots", why: "Abrasive brick, cement burns, noise, and dropped masonry. Rated, comfortable gear is the gear you will wear.", search: "CSA safety boots Mechanix gloves safety glasses ear muffs" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
      items: [
        { name: "Mason's brick tongs", why: "Carry several bricks at once and save your hands on heavy lifts.", search: "brick tongs mason carrier" },
        { name: "Story pole or course gauge", why: "Marks course heights so openings, sills, and tops of walls land exactly where drawings say.", search: "masonry story pole course gauge" },
        { name: "Mortar hawk and mortar board", why: "Holds a working amount of mortar at belt height for the trowel.", search: "mortar hawk aluminum plasterer mason" },
        { name: "Plumb bob and chalk line", why: "Quick vertical and straight-line checks across a wall or footing.", search: "plumb bob chalk line reel" },
        { name: "Wheelbarrow, mixing hoe, and mortar tub", why: "Mixing and moving mortar on small jobs. Often provided on site.", search: "mortar mixing hoe tub masonry" },
        { name: "Margin and brush tools for cleaning (stiff brush and sponge)", why: "Dry brushing and cleaning faces after tooling keeps the wall tidy and reduces later staining.", search: "masonry cleaning brush stiff bristle" },
        { name: "Knee pads and a back support option", why: "Low courses and long days on the knees add up. Protect joints early.", search: "gel knee pads construction" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying.",
      items: [
        { name: "Masonry wet saw or brick saw", why: "Wet cutting keeps silica dust down. Normally company-supplied.", search: "masonry wet saw brick saw" },
        { name: "Angle grinder with diamond blade and dust shroud", why: "Cutting and chasing brick. Use dust control and respiratory protection.", search: "Milwaukee angle grinder diamond blade dust shroud" },
        { name: "Laser level and rotary laser", why: "Transfer heights and check lines across a site. Usually a crew tool.", search: "rotary laser level construction" },
        { name: "Full-body harness and lanyard", why: "Usually supplied by the employer. Fall protection training comes first.", search: "3M DBI-SALA full body harness CSA" },
        { name: "Half-face respirator with P100 filters", why: "A fitted respirator is part of a silica control plan. Fit testing is required.", search: "3M half face respirator P100 filters" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for drawings, math, and code study. Check with your school and your exam body about calculator rules before you buy.",
      items: [
        { name: "Mechanical pencil (0.5 mm), such as Pentel GraphGear 1000", why: "Fine lines for sketching bonds, courses, and wall sections.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm" },
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Fractions, area, volume, and material estimating.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Graph paper pads", why: "Draw bond patterns, corner leads, and wall layouts to scale.", search: "graph paper pad 8.5x11" },
        { name: "Architect's and engineer's scales", why: "Read masonry drawings and wall sections at scale.", search: "architect scale engineer scale ruler" },
        { name: "Triangles, protractor, and a 12 in steel ruler", why: "Clean lines for angles, arches, and layouts.", search: "Staedtler drafting triangle set protractor" },
        { name: "Field notebook (Rite in the Rain)", why: "Weatherproof paper survives rain and mortar splashes.", search: "Rite in the Rain field notebook" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic for Red Seal review.", search: "binder dividers highlighters" }
      ]
    }
  ];

  const mediaGroups = [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare. Search for the Bricklayer trade page.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Codes Canada (National Building Code)", desc: "The model national code that provincial building codes are based on.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
        { name: "International Union of Bricklayers and Allied Craftworkers (BAC)", desc: "Union masonry training and apprenticeship information.", url: "https://www.bacweb.org/" },
        { name: "CSA Group", desc: "Publisher of the masonry standards, including CSA A179 and CSA A371.", url: "https://www.csagroup.org/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Plain-language safety information on silica, cement, and fall protection.", url: "https://www.ccohs.ca/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local codes.",
      items: [
        { name: "Laying brick for beginners", desc: "Buttering, bedding, and plumbing a first course.", url: "https://www.youtube.com/results?search_query=bricklaying+for+beginners+how+to+lay+brick" },
        { name: "Building a brick corner lead", desc: "Stepping up a lead and checking it plumb and level.", url: "https://www.youtube.com/results?search_query=bricklayer+building+a+corner+lead" },
        { name: "Mixing mortar", desc: "Batching, mixing, and working consistency.", url: "https://www.youtube.com/results?search_query=how+to+mix+masonry+mortar+bricklayer" },
        { name: "Mortar joint types and tooling", desc: "Concave, V, flush, and raked joints and when each is used.", url: "https://www.youtube.com/results?search_query=mortar+joint+types+tooling+concave+brick" },
        { name: "Brick bond patterns", desc: "Running, English, Flemish, and stack bond compared.", url: "https://www.youtube.com/results?search_query=brick+bond+patterns+running+english+flemish" },
        { name: "Brick veneer cavity wall details", desc: "Ties, flashing, weeps, and air space.", url: "https://www.youtube.com/results?search_query=brick+veneer+cavity+wall+flashing+weep+holes" },
        { name: "Concrete block wall construction", desc: "Laying CMU, rebar, and grouting cores.", url: "https://www.youtube.com/results?search_query=concrete+block+wall+construction+rebar+grout" },
        { name: "Silica dust safety in masonry", desc: "Wet cutting, dust control, and respirators.", url: "https://www.youtube.com/results?search_query=silica+dust+safety+masonry+cutting" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for bricklaying yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: bricklayer apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=bricklayer+apprentice+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: masonry podcast (listen-along)", desc: "Talks about brick, block, and stone work from working masons.", url: "https://www.youtube.com/results?search_query=masonry+podcast+bricklayer+mason" },
        { name: "YouTube: brick veneer and moisture control talks", desc: "Cavity walls, flashing, and why walls leak.", url: "https://www.youtube.com/results?search_query=masonry+moisture+flashing+cavity+wall+talk" },
        { name: "YouTube: mason tips and stories (audio)", desc: "Job-site lessons and troubleshooting stories.", url: "https://www.youtube.com/results?search_query=mason+podcast+tips+stories+brick" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, business, and leadership.",
      items: [
        { name: "YouTube: Red Seal bricklayer exam prep (talk-through)", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+bricklayer+exam+preparation" },
        { name: "YouTube: masonry estimating and business podcast", desc: "Takeoffs, pricing, and running a masonry crew or business.", url: "https://www.youtube.com/results?search_query=masonry+estimating+business+podcast" },
        { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
      ]
    }
  ];

  const practiceBank = {
    1: bank([
      ["The long, narrow face of a brick that shows in a normal wall face is called the:", "Stretcher", ["Header", "Soldier", "Frog"], "A stretcher face is the long side. A header is the short end face."],
      ["Which airborne hazard is created when you dry-cut brick or block with a saw or grinder?", "Respirable crystalline silica dust", ["Carbon monoxide", "Lead fumes", "Ozone"], "Cut wet, use dust control, and wear a fitted respirator as part of your employer's silica control plan."],
      ["What is a mason's line used for?", "Keeping each course straight and level between corners", ["Measuring the brick weight", "Marking mortar mixes", "Checking mortar temperature"], "The line is stretched between corner leads and each brick is set to it."],
      ["Wet Portland cement and mortar on bare skin can cause:", "Chemical burns or dermatitis", ["Frostbite", "Lead poisoning", "Hearing loss"], "Cement is strongly alkaline. Wear gloves, wash off promptly, and follow the SDS."],
      ["A typical mortar joint thickness for modular brick is:", "10 mm (3/8 in)", ["3 mm", "25 mm", "40 mm"], "Joints of about 10 mm keep the brick module on a 200 mm, 3 course basis. Confirm on the drawings."],
      ["The length of a typical modular brick unit, before the joint, is about:", "190 mm", ["90 mm", "290 mm", "390 mm"], "Metric modular brick is about 90 x 57 x 190 mm. Add a 10 mm joint for the module."],
      ["A brick stood on its end with its long narrow face toward the viewer is called a:", "Soldier", ["Stretcher", "Rowlock", "Header"], "Soldiers are used for lintels, sills, and decorative bands."],
      ["Which tool compresses and shapes a mortar joint after the mortar has stiffened?", "Jointer", ["Bolster", "Plumb bob", "Hawk"], "Tooling compresses the mortar and sheds water. A concave jointer is the most common."],
      ["Before working from a scaffold you should:", "Inspect it for completeness, a firm base, and guardrails", ["Add loose boards to reach higher", "Remove the base plates", "Ignore the tag if you are experienced"], "Scaffolds must be erected and inspected as regulations require. Report defects and do not modify it."],
      ["On a cement bag, hazard information is shown by:", "WHMIS pictograms and signal words, with more detail on the SDS", ["A brand colour only", "The bag weight", "A union stamp"], "WHMIS requires supplier labels, and the SDS gives full detail on hazards and first aid."],
      ["On CSA-approved safety boots, a green triangle patch indicates:", "Sole puncture protection", ["Metatarsal protection", "Electrical hazard rating", "Slip resistance only"], "Grade 1 footwear has a green triangle for puncture-protected soles and a protective toe cap."],
      ["4 inches is closest to how many millimetres?", "102 mm", ["40 mm", "92 mm", "120 mm"], "4 x 25.4 = 101.6 mm, which is about 102 mm."],
      ["A safe way to lift heavy block or a bucket of mortar is to:", "Bend your knees, keep the load close, and avoid twisting", ["Bend at the waist with straight legs", "Twist while lifting", "Hold the load at arm's length"], "Good lifting posture reduces back injuries. Use team lifts or tongs and mechanical aids when possible."],
      ["Sides of 3 m and 4 m with a 5 m diagonal show that a corner is:", "Square (90 degrees)", ["Out of plumb", "Out of level", "Too long"], "The 3-4-5 triangle is a quick check for a right angle."],
      ["The recess pressed into the bed face of many bricks is called a:", "Frog", ["Core", "Wythe", "Quoin"], "The frog reduces weight and gives the mortar a key."],
      ["Three courses of modular brick with 10 mm joints rise about:", "200 mm", ["100 mm", "150 mm", "300 mm"], "Each course is about 66.7 mm, so three courses is 200 mm (8 in)."]
    ]),
    2: bank([
      ["Which mortar type has the highest compressive strength?", "Type M", ["Type N", "Type O", "Type K"], "Strength order is M, S, N, O, then K. Use the type specified for the job."],
      ["The main purpose of through-wall flashing in a cavity wall is to:", "Collect water in the cavity and direct it out through the weeps", ["Hold the brick to the backup", "Support the roof", "Add insulation value"], "Flashing must be continuous, lapped, and sloped outward with weeps above it."],
      ["Weep holes at the base of a brick veneer allow:", "Moisture in the cavity to drain out", ["Air to be sucked into the home", "Mortar to be pumped in", "Ties to be inspected"], "Weeps are placed in the head joints above the flashing. Keep them clear of mortar droppings."],
      ["White powdery deposits on new brick are called:", "Efflorescence", ["Spalling", "Mortar smear", "Crazing"], "Soluble salts are carried to the surface by water and left behind as it evaporates."],
      ["Which joint profile is generally the most weather-resistant?", "Concave", ["Flush cut", "Raked", "Struck with no compression"], "Compressing the mortar into a concave shape sheds water and seals against the brick."],
      ["Mortar joints should be tooled when the mortar is:", "Thumbprint hard", ["Fully dry", "Still soupy", "Frozen"], "Tooling too early smears and too late leaves marks. Timing depends on weather and brick suction."],
      ["Very absorbent (high suction) brick laid in hot, dry weather should be:", "Wetted ahead of time so the surface is damp but not dripping", ["Laid dry", "Soaked in mortar", "Heated first"], "Dry suction pulls water from the mortar and weakens the bond. Follow the specification."],
      ["In running bond, each course:", "Is offset about half a brick from the course below", ["Is stacked directly over the one below", "Uses only headers", "Alternates stretcher and header in the same course"], "Running bond overlaps vertical joints and is the most common bond."],
      ["Concrete masonry units tend to shrink as they dry, so walls built with them commonly use:", "Control joints", ["Soldier courses", "Weep screeds", "Corbels"], "Control joints let the wall shrink without random cracks. Clay brick, in contrast, tends to expand."],
      ["Metal wall ties in a veneer wall:", "Connect the veneer to the backup wall and carry lateral loads", ["Support the veneer weight", "Replace mortar", "Provide a vapour barrier"], "Veneer weight is carried by the foundation or a shelf angle, not by the ties."],
      ["A story pole is used to:", "Mark course heights for the whole wall", ["Measure mortar temperature", "Hang the line", "Cut brick to length"], "It is a straight rod marked at course intervals and openings."],
      ["For 390 mm x 190 mm block with 10 mm joints, the number of blocks per square metre is about:", "12.5", ["25", "8", "50"], "Each block plus joint covers 0.4 m x 0.2 m = 0.08 m², and 1 / 0.08 = 12.5."],
      ["Modular brick with 10 mm joints needs about how many bricks per square metre (before waste)?", "75", ["25", "150", "200"], "A 200 mm x 66.7 mm module gives 5 x 15 = 75 bricks per m²."],
      ["How many courses of modular brick (about 66.7 mm per course) are needed to reach 2.4 m?", "36", ["24", "48", "60"], "2400 mm / 200 mm = 12 sets of three courses, so 36 courses."],
      ["A masonry lead is:", "A corner or end built up several courses first, to guide the line", ["A bundle of ties", "A lead-based mortar", "A type of lintel"], "The line is attached to the leads so the wall between them runs true."],
      ["A lintel over a door or window opening:", "Carries the masonry above the opening", ["Is only decorative", "Replaces the flashing", "Prevents efflorescence"], "Steel angle or precast lintels are common. Flash above them and allow bearing at each end."]
    ]),
    3: bank([
      ["Which CSA standard covers masonry construction for buildings?", "CSA A371", ["CSA Z259.10", "CSA B64", "CSA O86"], "CSA A371 is the masonry construction standard. A179 covers mortar and grout."],
      ["CSA A179 covers:", "Mortar and grout for unit masonry", ["Fall arrest harnesses", "Welding of rebar", "Safety footwear"], "It sets requirements for mortar and grout materials and proportions."],
      ["Grout differs from mortar in that grout is:", "Fluid enough to fill cores and cavities around reinforcement", ["Used only for tooling", "Always coloured", "A dry mix"], "Grout is placed in cores or collar joints to bond reinforcing steel and unit."],
      ["A bond beam in a block wall is:", "A horizontal reinforced and grouted course that ties the wall together", ["A line of wall ties", "A decorative header course", "A flashing detail"], "Bond beams are commonly at floor, roof, or lintel levels."],
      ["Reinforcing bars in grouted cores should be:", "Held in position and fully surrounded by grout", ["Left leaning against the face", "Painted before grouting", "Cut short of the grout"], "Positioners keep bars where the drawings require and give corrosion protection."],
      ["A shelf angle in a multi-storey brick veneer:", "Supports the veneer at floor levels with room for movement beneath", ["Holds the interior drywall", "Replaces all wall ties", "Is installed upside down to drain water"], "A soft joint with backer rod and sealant is usually provided below the angle."],
      ["Which statement about air barriers in a cavity wall is correct?", "The air barrier system must be continuous and sealed at joints and openings", ["It should have gaps for ventilation", "It is installed on the face of the brick", "It is only needed on roofs"], "Gaps let air carry moisture and reduce energy performance."],
      ["Brick veneer is best described as a:", "Rain screen that sheds most water, with a drained cavity for the rest", ["Waterproof barrier", "Structural wall by itself", "Vapour barrier"], "Water that gets in must drain out through flashing and weeps."],
      ["Before applying an acid-based masonry cleaner you should:", "Saturate the wall with clean water and rinse thoroughly afterward", ["Apply it to dry brick", "Mix it with bleach", "Skip eye protection"], "Pre-wetting keeps acid from soaking in. Always follow the SDS and manufacturer directions."],
      ["Mortar droppings that fill the bottom of a cavity can:", "Block the weep holes and trap moisture", ["Improve insulation", "Strengthen the wall ties", "Prevent efflorescence"], "Use a cavity board or batten and clean droppings out."],
      ["Flemish bond has:", "Alternating headers and stretchers within each course", ["Only stretchers", "Only headers", "Stacked vertical joints"], "English bond alternates whole courses of headers and stretchers instead."],
      ["The load rating of a masonry scaffold platform should be checked because:", "Stacked brick, block, and mortar add up quickly", ["Brick is weightless", "Mortar never adds load", "Only people count"], "Material pallets must be placed within the rated load and not overload the platform."],
      ["How high is a wall of 20 courses of modular brick (about 66.7 mm per course)?", "About 1,333 mm", ["About 1,000 mm", "About 2,000 mm", "About 2,667 mm"], "20 x 66.67 mm = 1,333 mm, or 1.33 m."],
      ["The inclined surface at each end of a masonry arch where the arch bears is the:", "Skewback", ["Frog", "Quoin", "Sill"], "The skewback is cut at the angle needed to direct arch thrust."],
      ["In freezing weather, masonry work should:", "Use unfrozen materials and protect new work from freezing", ["Use frozen sand", "Lay on frozen snow", "Add water to the mortar to thaw it"], "Cold weather procedures in the specification and CSA A371 govern heating and protection."],
      ["An expansion joint in a long clay brick wall is meant to:", "Let the brick move without cracking", ["Hold the ties in place", "Provide flashing", "Increase wall height"], "Clay brick expands over time with moisture, so allowance is needed."]
    ]),
    4: bank([
      ["A new wall shows efflorescence. The first step in the correction is to:", "Find and stop the source of moisture, then clean and let the wall dry", ["Seal the wall immediately", "Add more salt", "Paint over it"], "Efflorescence needs soluble salts and water. Fix the water path before cleaning."],
      ["Stair-step cracking in a veneer near a corner often points to:", "Differential movement or missing movement joints", ["Too much mortar colour", "Good workmanship", "Low silica exposure"], "Look at foundation settlement, movement joint spacing, and tie condition."],
      ["Water staining under a window head in a brick wall is most likely caused by:", "Missing or poorly lapped flashing and weeps above the lintel", ["Too many wall ties", "Dry mortar", "Too much sunlight"], "Flashing must extend past the opening and end with end dams."],
      ["A wall of 12 m x 3 m with 6 m² of openings needs about how many modular bricks including 5% waste?", "About 2,360", ["About 2,250", "About 2,700", "About 3,375"], "Net area is 30 m², x 75 = 2,250, plus 5% = 2,362."],
      ["The number of 390 x 190 block needed for 30 m² of wall, before waste, is:", "375", ["240", "300", "450"], "30 m² x 12.5 per m² = 375 blocks."],
      ["Consistent mortar colour across a wall is best achieved by:", "Measuring batches and water consistently with the same materials", ["Adding water by eye", "Mixing leftover mortar", "Changing sand daily"], "Batching by measure keeps colour and strength even."],
      ["Fresh free-standing masonry walls:", "Need bracing against wind until the wall is tied and the mortar has cured", ["Are always safe", "Gain strength from rain", "Do not need planning"], "Temporary bracing and limits on unsupported height are part of site safety planning."],
      ["Steel lintels in exterior masonry should be:", "Corrosion protected and flashed above", ["Left bare", "Placed with no bearing", "Painted only on the inside"], "Galvanizing or protective coatings are commonly specified."],
      ["Differential movement between a brick veneer and its backup frame is accommodated by:", "Ties that allow movement in-plane and soft joints at shelf angles", ["Rigid welds only", "Extra mortar", "Removing the ties"], "Veneer and backup move differently with temperature and moisture."],
      ["In hot, dry, windy weather, the best way to protect mortar is to:", "Shade materials, wet the units, and protect fresh work from rapid drying", ["Lay faster without wetting", "Add cement", "Leave brick in full sun"], "Rapid drying weakens the bond. Cure and cover as specified."],
      ["When measuring mortar sand by volume, you should remember that:", "Damp sand takes up more volume than dry sand", ["Dry sand is always bulky", "Moisture does not affect volume", "Sand is never measured"], "Bulking makes volume batching inconsistent, so measure the same way each time."],
      ["In an expansion joint, backer rod is used so that the sealant:", "Bonds to two sides only and can stretch", ["Sticks to three sides", "Sets harder", "Becomes the air barrier"], "Three-sided adhesion tears the sealant when the joint moves."],
      ["A Red Seal endorsement on your certificate helps:", "Show interprovincial recognition of your journeyperson qualification", ["Replace safety training", "Waive the exam", "Set your pay"], "It reflects passing the interprovincial exam. Provincial certification rules still apply."],
      ["Stack bond is generally weaker than running bond because:", "Vertical joints line up, so it needs added reinforcement", ["It uses no mortar", "It is always load bearing", "It has too many ties"], "Joint reinforcement is commonly specified for stack bond walls."],
      ["Horizontal joint reinforcement should be:", "Fully embedded in mortar and kept off the face of the unit", ["Laid dry on the brick", "Left bare to the weather", "Used instead of ties"], "Mortar protects wire from corrosion and bonds it to the wall."],
      ["In a silica control plan, which control should come first?", "Eliminate or reduce dust at the source, such as wet cutting or local exhaust", ["Rely only on a mask", "Do nothing for short jobs", "Work upwind only"], "The hierarchy puts engineering controls ahead of PPE, with respirators as a back-up."]
    ])
  };

  const roadmapSteps = [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS, fall protection, and site orientation; requirements vary)", "Prepare a resume and apply to union locals (such as BAC) and masonry contractors", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: foundations and brick basics", items: ["Learn site safety, PPE, scaffold awareness, and silica controls", "Mix and handle mortar, and learn to spread, bed, and plumb brick", "Build first courses, corners, and simple walls to the line", "Complete your first technical training block", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: bonds, leads, and veneer", items: ["Build corner leads and run walls between them", "Lay common bonds such as running, English, and Flemish", "Learn cavity walls, ties, flashing, and weeps", "Cut brick and block, and tool a consistent joint"] },
    { title: "Year 3: block, reinforcement, and arches", items: ["Build concrete block walls and learn rebar and grout placement", "Lay out openings, lintels, sills, and arches", "Learn movement joints and sealant details", "Read drawings, wall sections, and the masonry standards"] },
    { title: "Year 4 and beyond: advanced work", items: ["Estimate materials and plan lifts, scaffolds, and crew sequence", "Troubleshoot leaks, cracking, and efflorescence", "Mentor first-year apprentices", "Use the Red Seal standard to find gaps in your experience"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ];

  const glossary = [
    ["Bed joint", "The horizontal mortar joint between courses."],
    ["Bond", "The pattern in which units are laid, or the adhesion between mortar and unit."],
    ["Bond beam", "A horizontal reinforced and grouted course in a block wall."],
    ["Buttering", "Spreading mortar on the end of a brick before placing it."],
    ["Cavity wall", "A wall with an air space between the veneer and the backup."],
    ["CMU", "Concrete masonry unit, or concrete block."],
    ["Collar joint", "The vertical joint between two wythes of a wall."],
    ["Control joint", "A planned break that allows concrete masonry to shrink without cracking."],
    ["Corbel", "A course projecting out from the one below."],
    ["Course", "One horizontal layer of masonry units."],
    ["Efflorescence", "White salt deposits left on masonry as water evaporates."],
    ["Expansion joint", "A joint that allows clay brick to expand without damage."],
    ["Flashing", "Membrane or metal that directs water out of a wall."],
    ["Frog", "The recess in the bed face of a brick."],
    ["Grout", "A fluid mix that fills cores or cavities and bonds reinforcement."],
    ["Head joint", "The vertical mortar joint between units in the same course."],
    ["Header", "A unit laid with its short end showing, tying wythes together."],
    ["Jointer", "A tool used to compress and shape mortar joints."],
    ["Lead", "A corner or end built up first to guide the line."],
    ["Lintel", "A beam over an opening that supports masonry above."],
    ["Mortar", "A mix of cement, lime, sand, and water that bonds units."],
    ["Quoin", "A corner unit, often a decorative one."],
    ["Rowlock", "A brick laid on its edge, often used for sills and caps."],
    ["Shelf angle", "A steel angle fixed to the structure to support veneer."],
    ["Soldier", "A brick laid upright on its end."],
    ["Spalling", "Flaking or breaking away of the face of a unit."],
    ["Stretcher", "A unit laid with its long side showing."],
    ["Suction", "The rate at which a brick absorbs water, also called initial rate of absorption."],
    ["Veneer", "A non-structural facing of masonry over a backup wall."],
    ["Weep hole", "An opening in the base of a wall that drains water from the cavity."],
    ["Wythe", "A single vertical layer of masonry in a wall."]
  ];

  registerTrade({
    id: "bricklayer",
    store: "bricklayer",
    title: "Bricklayer",
    name: "Bricklayer",
    short: "bricklaying",
    category: "Masonry · Construction · Building envelope",
    summary: "Bricklayers build and repair walls, chimneys, and facades from brick, block, and stone, working to drawings with precision, speed, and strong attention to weather-tight detail.",
    work: "Bricklayers lay units in mortar to the line, build corner leads, and install ties, flashing, and reinforcement. Work is mostly outdoors on scaffolds, in all seasons, and is physically demanding. Accuracy in level, plumb, and bond is judged by every other trade that follows.",
    duration: "Usually about 3 years (varies by province)",
    union: "International Union of Bricklayers and Allied Craftworkers (BAC)",
    unionUrl: "https://www.bacweb.org/",
    jobSearch: "bricklayer apprentice",
    journeySearch: "bricklayer",
    aliases: "brick mason masonry block mason stone mason bricklaying cmu",
    tools: ["Brick trowel and pointing trowel", "Mason's level (4 ft)", "Mason's line and line pins", "Brick hammer and bolster", "Jointer", "Safety boots, gloves, and glasses"],
    insight: {
      skills: ["Reading drawings and wall sections", "Accuracy to the line, level, and plumb", "Mortar mixing and joint tooling", "Stamina and steady pace"],
      hazards: ["Silica dust: wet cut and use controls", "Falls from scaffolds: inspect and use guardrails", "Cement burns: wear gloves and wash off", "Heavy lifting: use tongs and team lifts"],
      settings: ["Residential and commercial buildings", "Chimneys and fireplaces", "Restoration and heritage work", "Block and foundation walls"]
    },
    toolGroups,
    mediaGroups,
    practiceBank,
    roadmapSteps,
    glossary,
    cards: [
      { front: "Modular brick size (metric)", back: "About 90 x 57 x 190 mm, plus 10 mm joints" },
      { front: "Three courses of modular brick", back: "200 mm (8 in)" },
      { front: "Modular brick per square metre", back: "About 75, before waste" },
      { front: "Block per square metre (390 x 190)", back: "12.5, before waste" },
      { front: "Clay brick vs concrete masonry movement", back: "Clay brick expands, so expansion joints. Concrete masonry shrinks, so control joints." },
      { front: "Most weather-resistant joint", back: "Concave" },
      { front: "Purpose of weep holes", back: "Drain moisture from the cavity above the flashing." },
      { front: "3-4-5 triangle", back: "A quick check for a 90 degree corner." },
      { front: "Efflorescence", back: "Salt deposits on masonry from water moving through the wall." },
      { front: "Silica dust control", back: "Wet cutting, dust collection, and a fitted respirator as a back-up." }
    ],
    jobsIntro: "Look for union and non-union masonry contractors, residential brick and block builders, restoration firms, commercial and industrial contractors, and maintenance departments.",
    tips: ["Bring a short resume, your safety tickets, and ID.", "Show you are comfortable working outdoors and at heights.", "Visit contractors and halls in person when you can, and follow up.", "Ask what tools you need and what the employer supplies."],
    forumTopics: ["Starting out", "Brick, block, and stone", "Mortar, flashing, and moisture", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference: [
      {
        title: "Brick and block sizes",
        intro: "Typical Canadian modular units. Actual sizes vary by manufacturer, so confirm on the product data.",
        table: {
          head: ["Unit", "Typical actual size (mm)", "Module with 10 mm joint"],
          rows: [
            ["Metric modular brick", "90 x 57 x 190", "100 x 67 x 200"],
            ["Standard 190 mm concrete block", "190 x 190 x 390", "200 x 200 x 400"],
            ["Standard 140 mm concrete block", "140 x 190 x 390", "150 x 200 x 400"],
            ["Imperial modular brick", "3-5/8 x 2-1/4 x 7-5/8 in", "4 x 2-2/3 x 8 in"]
          ]
        },
        note: "Three modular brick courses equal one 200 mm block course, which is why brick and block line up in cavity and backup walls."
      },
      {
        title: "Quick quantity estimates",
        list: [
          "<strong>Modular brick:</strong> about 75 per m² (6.75 per ft²) with 10 mm joints.",
          "<strong>190 mm block:</strong> 12.5 per m² (1.125 per ft²).",
          "<strong>Courses in a wall:</strong> height in mm / 66.7 for brick, or height / 200 for block.",
          "<strong>Net area:</strong> gross wall area minus openings, then add waste (often 5 to 10 percent, per your estimator).",
          "<strong>Mortar sand:</strong> measure by consistent volume. Damp sand bulks, so keep the method the same batch to batch."
        ]
      },
      {
        title: "Bond patterns",
        table: {
          head: ["Bond", "Pattern", "Use"],
          rows: [
            ["Running", "Stretchers only, offset half a unit", "Most veneer and block walls"],
            ["English", "Alternate courses of headers and stretchers", "Solid walls and heritage work"],
            ["Flemish", "Headers and stretchers alternate in each course", "Decorative, heritage work"],
            ["Stack", "Vertical joints line up", "Decorative, needs joint reinforcement"]
          ]
        }
      },
      {
        title: "Mortar types and joints",
        list: [
          "<strong>Strength order:</strong> M, S, N, O, K (highest to lowest). Use what the specification calls for.",
          "<strong>Type N:</strong> common general-purpose type, often for above-grade veneer.",
          "<strong>Type S:</strong> higher bond and strength, often for below grade or higher lateral loads.",
          "<strong>Concave joint:</strong> the most weather-resistant. Tool at thumbprint hardness.",
          "<strong>Raked and flush joints:</strong> less weather-resistant in exposed walls."
        ],
        note: "Mortar and grout requirements are set by CSA A179, and masonry construction by CSA A371. Check the edition your province adopts."
      },
      {
        title: "Cavity wall checklist",
        list: [
          "Air barrier continuous and sealed at openings.",
          "Insulation held tight against the backup, as designed.",
          "Ties spaced and fastened per the drawings and code.",
          "Through-wall flashing lapped, sloped out, with end dams and drip.",
          "Weeps above the flashing and clean cavity free of mortar droppings.",
          "Movement joints, shelf angles, and soft joints where the design shows them."
        ]
      },
      {
        title: "Silica and site safety",
        list: [
          "Wet cut, use dust collection, and work upwind.",
          "Use a fitted respirator when controls are not enough, as part of your employer's plan.",
          "Cement and mortar are alkaline: wear gloves and rinse skin quickly.",
          "Inspect scaffolds and ladders, and use fall protection where regulations require.",
          "Read the SDS for cleaners such as acid-based masonry cleaners."
        ],
        note: "Fall protection heights, silica limits, and scaffold rules differ by province, so confirm with your provincial occupational health and safety regulations."
      }
    ]
  });
})();
