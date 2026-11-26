// Roofer content: tools, learning media, practice tests, roadmap, and reference.
// Practice questions are original study aids, not official Red Seal exam questions.

(() => {
  const bank = (rows) => rows.map(([q, c, d, explain], i) => {
    const answer = (i * 3 + rows.length + 2) % 4;
    const options = d.slice();
    options.splice(answer, 0, c);
    return { q, options, answer, explain };
  });

  const toolGroups = [
    {
      title: "Day-one tools, buy once and buy well",
      note: "Professional-grade tools that hold their edge and accuracy for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
      items: [
        { name: "CSA-approved safety boots with slip-resistant soles (Blundstone, Timberland PRO, or Red Wing)", why: "Grip on sloped, dusty, or frosty roofs is your first protection. Comfortable boots get worn all day.", search: "CSA safety boots slip resistant roofing Timberland PRO Red Wing" },
        { name: "Estwing or Stiletto roofing hatchet", why: "Cuts shingles, drives nails, and sets flashing. Balanced weight reduces fatigue.", search: "Estwing roofing hatchet" },
        { name: "Hook blade utility knife and spare blades", why: "Clean, safe cuts through shingles and membranes with a hooked blade that keeps the cut under control.", search: "hook blade utility knife roofing Olfa Milwaukee" },
        { name: "Stanley or Milwaukee tape measure (25 ft / 7.5 m)", why: "Wide blade for accurate layout of courses, flashing, and panel lengths.", search: "Stanley FatMax tape measure 7.5m 25ft" },
        { name: "Chalk line and chalk", why: "Snap straight reference lines for courses, ridge, and eaves.", search: "Irwin Stanley chalk line reel blue chalk" },
        { name: "Roofing nail bag and magnetic sweeper", why: "Keeps nails at hand and cleans up loose nails from the roof and yard.", search: "roofing nail bag magnetic sweeper" },
        { name: "Tin snips (aviation snips, left, right, straight)", why: "Cut flashing, drip edge, and light metal cleanly.", search: "Wiss aviation snips left right straight set" },
        { name: "Cut-resistant gloves, safety glasses, and sun protection", why: "Sharp metal edges, nails, and glare. Choose gloves with good grip.", search: "Mechanix cut resistant gloves safety glasses UV" },
        { name: "Knee pads (roofing style) and a water bottle or hydration pack", why: "Hot roofs mean heat stress and sore knees. Protect both.", search: "roofing knee pads hydration pack" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
      items: [
        { name: "Pneumatic or cordless roofing nailer (Hitachi/Metabo HPT, Bostitch, or Milwaukee)", why: "Fast, consistent nailing. Nail depth must be set correctly. Often company-supplied.", search: "Metabo HPT Bostitch roofing coil nailer" },
        { name: "Shingle tear-off shovel and flat bar", why: "For tear-off and for removing nails and old flashing.", search: "roofing shovel tear off fork shingle remover" },
        { name: "Speed square and framing square", why: "Check pitch, mark rafter cuts, and square flashing.", search: "Swanson speed square framing square" },
        { name: "Roof pitch gauge or digital angle finder", why: "Confirm roof slope and the right underlayment and shingle rules.", search: "roof pitch gauge digital angle finder" },
        { name: "Caulking gun and roofing sealant", why: "For detail work where sealant is called for by the manufacturer.", search: "caulk gun roofing sealant polyurethane" },
        { name: "Hearing protection and dust mask or respirator", why: "Nailers are loud and old roof materials can create dust.", search: "ear muffs P100 respirator" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying.",
      items: [
        { name: "Full-body harness, lanyard, and rope grab", why: "Usually supplied by the employer. Fall protection training comes first.", search: "3M DBI-SALA full body harness roofing CSA Z259.10" },
        { name: "Roof anchor and lifeline kit", why: "Rated anchors are part of a fall protection plan. Use only as trained.", search: "roof anchor lifeline kit fall protection" },
        { name: "Propane torch kit for torch-on membranes", why: "Heat modified bitumen sheets. Training and fire safety procedures required.", search: "torch applicator roofing propane torch" },
        { name: "Hot air welder for TPO and PVC", why: "Seams on single-ply membranes are heat welded. Usually company-supplied.", search: "Leister hot air welder roofing membrane" },
        { name: "Seam probe and roller", why: "Check weld quality and press seams flat.", search: "seam probe silicone roller roofing" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for drawings, math, and code study. Check with your school and your exam body about calculator rules before you buy.",
      items: [
        { name: "Mechanical pencil (0.5 mm), such as Pentel GraphGear 1000", why: "Sketch roof plans, flashings, and sections.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm" },
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Trigonometry for pitch, rafter length, and area.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Graph paper pads", why: "Draw roof layouts to scale to find areas and valleys.", search: "graph paper pad 8.5x11" },
        { name: "Architect's and engineer's scales", why: "Read roof plans and details at scale.", search: "architect scale engineer scale ruler" },
        { name: "Triangles, protractor, and a 12 in steel ruler", why: "Draw pitch triangles and flashing patterns.", search: "Staedtler drafting triangle set protractor" },
        { name: "Field notebook (Rite in the Rain)", why: "Weatherproof paper survives rain and sun on the roof.", search: "Rite in the Rain field notebook" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic for Red Seal review.", search: "binder dividers highlighters" }
      ]
    }
  ];

  const mediaGroups = [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare. Search for the Roofer trade page.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Codes Canada (National Building Code)", desc: "The model national code that provincial building codes are based on.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
        { name: "Canadian Roofing Contractors Association (CRCA)", desc: "Industry information and roofing standards and guides.", url: "https://www.roofingcanada.com/" },
        { name: "United Union of Roofers, Waterproofers and Allied Workers", desc: "Union roofing training and apprenticeship information.", url: "https://www.unionroofers.com/" },
        { name: "CSA Group", desc: "Publisher of the CSA A123 roofing standards and Z259 fall protection standards.", url: "https://www.csagroup.org/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Plain-language safety information on falls, heat stress, and hot work.", url: "https://www.ccohs.ca/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local codes.",
      items: [
        { name: "Asphalt shingle installation", desc: "Starter course, nailing, and course layout.", url: "https://www.youtube.com/results?search_query=asphalt+shingle+installation+roofer+proper+nailing" },
        { name: "Roof underlayment and ice and water shield", desc: "Where and how to install eave protection and underlayment.", url: "https://www.youtube.com/results?search_query=roof+underlayment+ice+and+water+shield+installation" },
        { name: "Step flashing and counterflashing", desc: "Weaving step flashing at walls and chimneys.", url: "https://www.youtube.com/results?search_query=step+flashing+counterflashing+roofing+sidewall" },
        { name: "Roof valleys", desc: "Open and closed valley methods.", url: "https://www.youtube.com/results?search_query=roof+valley+open+closed+woven+shingle+installation" },
        { name: "Torch-on modified bitumen roofing", desc: "Torch-applied membrane methods and fire safety.", url: "https://www.youtube.com/results?search_query=torch+on+modified+bitumen+roofing+installation+safety" },
        { name: "TPO and EPDM flat roof systems", desc: "Single-ply membrane basics.", url: "https://www.youtube.com/results?search_query=TPO+EPDM+flat+roof+membrane+installation" },
        { name: "Roof fall protection and safety", desc: "Harnesses, anchors, and guardrails on roofs.", url: "https://www.youtube.com/results?search_query=roofing+fall+protection+harness+anchor+safety" },
        { name: "Roof pitch and measuring", desc: "Pitch, rafter length, and roof area calculations.", url: "https://www.youtube.com/results?search_query=roof+pitch+rafter+length+roof+area+calculation" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for roofing yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: roofer apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=roofer+apprentice+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: roofing podcast (listen-along)", desc: "Talks from working roofers about systems and problem solving.", url: "https://www.youtube.com/results?search_query=roofing+podcast+roofer+installation" },
        { name: "YouTube: low slope and commercial roofing talks", desc: "Membranes, insulation, and drainage on flat roofs.", url: "https://www.youtube.com/results?search_query=commercial+low+slope+roofing+podcast" },
        { name: "YouTube: roofer tips and stories (audio)", desc: "Job-site lessons and troubleshooting stories.", url: "https://www.youtube.com/results?search_query=roofer+podcast+tips+stories" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, business, and leadership.",
      items: [
        { name: "YouTube: Red Seal roofer exam prep (talk-through)", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+roofer+exam+preparation" },
        { name: "YouTube: roofing estimating and business podcast", desc: "Takeoffs, pricing, and running a roofing company.", url: "https://www.youtube.com/results?search_query=roofing+estimating+business+podcast" },
        { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
      ]
    }
  ];

  const practiceBank = {
    1: bank([
      ["A roof pitch of 6/12 means the roof:", "Rises 6 units for every 12 units of horizontal run", ["Rises 12 units for every 6 units of horizontal run", "Is 6 m long and 12 m wide at the base of the slope", "Slopes at an angle of 12 degrees from the horizontal"], "Pitch is rise over run, usually per 12 units of run."],
      ["The 4 to 1 ladder rule means the base should be set out:", "1 m from the wall for every 4 m of height", ["4 m from the wall for every 1 m of ladder height", "1 m from the wall regardless of the height reached", "Flush against the wall so that the ladder cannot slide sideways"], "This gives a stable angle of about 75 degrees."],
      ["An extension ladder used to reach a roof should extend above the landing by at least:", "1 m (3 ft)", ["About 10 cm, enough to touch the edge of the roof", "About 25 cm, roughly the width of a single rung", "None, if the top of the ladder is tied off"], "The extension gives you something to hold when stepping on and off."],
      ["The most serious hazard when working with hot asphalt is:", "Severe burns", ["Frostbite from handling the cold pails of material", "Radiation exposure from the heated bitumen vapours", "Dehydration from the heat, and nothing more serious"], "Use PPE, control the kettle, and keep others clear."],
      ["A personal fall arrest system consists of:", "A full-body harness, a connector with energy absorber, and a secure anchor", ["A waist belt with a lanyard tied around a roof vent pipe or a chimney", "A rope tied to a vent pipe and a hard hat with a chin strap", "A hard hat, gloves, and safety glasses worn with a tool belt"], "All parts must be compatible, rated, and used as trained."],
      ["Which CSA standard covers full-body harnesses?", "CSA Z259.10", ["CSA A123.1, which covers asphalt shingles", "CSA B64, which covers backflow preventers", "CSA O86, which covers engineered wood design"], "CSA Z259.10 covers full-body harnesses. A123 covers roofing materials."],
      ["One roofing square covers:", "100 ft² (about 9.29 m²)", ["10 ft² (about 0.93 m²)", "1 m² (about 10.76 ft²)", "1,000 ft² (about 92.9 m²)"], "Roofing materials are commonly sold by the square."],
      ["Asphalt shingles are commonly packaged with how many bundles per square?", "3", ["1", "7", "12"], "Confirm for the product, since some heavy products use 4 or more."],
      ["Roofing nails should be:", "Corrosion resistant, such as galvanized", ["Plain steel, since the shingles protect them from moisture", "Painted wire nails, which are cheaper and easy to drive", "Any nail on site that is long enough to reach the deck"], "Corrosion can cause nail failure and leaks."],
      ["Heat stress is best managed by:", "Water, shade, rest breaks, and light clothing", ["Skipping breaks so the work finishes before the hottest hour", "Drinking no water, to avoid needing to climb down often", "Wearing dark heavy layers that protect the skin from the sun"], "Signs include dizziness and cramps. Report symptoms right away."],
      ["Where do you find hazard and first aid information on a roofing primer or adhesive?", "Safety Data Sheet (SDS)", ["The shingle wrapper only, which lists the colour and the coverage", "The invoice from the supplier, which lists the product name", "The tape measure case, which shows the safety rules"], "The SDS is part of WHMIS."],
      ["What kind of footwear is best for roofing?", "CSA-approved boots with slip-resistant soles", ["Sandals, which keep the feet cool during hot weather", "Smooth-soled dress shoes, which are light and quiet on the deck", "Running shoes only, since they are light and flexible"], "Footwear affects both slips and foot injuries."],
      ["A 12/12 pitch is:", "45 degrees", ["12 degrees, since the numbers are the same", "60 degrees, since it is steeper than a 30 degree slope", "30 degrees, since the rise is half of the run"], "Rise equals run, so the angle is 45 degrees."],
      ["The eave of a roof is the:", "Lower edge that meets the gutter", ["Peak, where the two roof planes meet at the top", "Chimney, where the flashing and the cricket are installed", "Valley, where two roof slopes join and shed water"], "The ridge is the peak, and the rake is the sloped edge on a gable."],
      ["The rake of a roof is the:", "Sloped edge at the gable end", ["Low edge that meets the gutter along the eave", "Ridge cap that covers the peak where two slopes meet", "Valley where two roof planes join at an inside corner"], "Rake edges need drip edge too."],
      ["Which tool uses a hooked blade to cut shingles safely?", "Hook-blade utility knife", ["Hacksaw, with a fine-tooth blade for cutting metal", "Pipe wrench, with serrated jaws for gripping round stock", "Level, with vials for checking plumb and level surfaces"], "The hook holds the cut and keeps your hand away from the blade."]
    ]),
    2: bank([
      ["Roof underlayment is used to:", "Provide a secondary layer that sheds water if the roof covering leaks", ["Replace the shingles on the roof when they wear out", "Add colour and texture to the finished roof surface", "Hold the ridge cap in place at the top of the roof"], "It also protects the deck during construction."],
      ["The starter course at the eave:", "Seals the first course and covers the joints at the eaves", ["Holds the ridge cap in place at the top of the roof", "Is optional on any roof, since the first course seals itself", "Replaces the drip edge along the eave and the rake"], "It gives sealing strip at the edge, per manufacturer."],
      ["Step flashing against a side wall is installed:", "With one piece woven with each shingle course", ["In one long piece that runs the full length of the wall", "On top of the siding only, with sealant along the top edge", "Under the roof deck, where it is hidden from the weather"], "Each piece sheds water onto the shingle below."],
      ["A kick-out (diverter) flashing is used at:", "The lower end of a roof-to-wall junction to send water into the gutter", ["The ridge, where the two roof planes meet at the top", "The vent stack, where the pipe passes through the roof", "A chimney crown, where the cap sheds water from the top"], "Without it, water can run behind the siding."],
      ["An open valley has:", "Metal flashing exposed between the shingle edges", ["No flashing, since the shingles cover the whole valley", "Only sealant along the centre, with no metal underneath", "Shingles that cross over the valley from one slope to the next"], "Closed valleys cross shingles, and woven valleys interleave them."],
      ["Drip edge at the eave:", "Directs water into the gutter and protects the deck edge", ["Holds the ridge cap in place and seals the peak", "Seals the plumbing vents where they pass through the deck", "Supports the shingles so that they do not sag at the edge"], "Placement relative to the underlayment follows the manufacturer and code."],
      ["Each shingle is normally fastened with how many nails in standard conditions?", "4", ["1", "2", "12"], "Follow the manufacturer's pattern. Steeper slopes and high winds can require more."],
      ["A common cause of ice dams is:", "Heat loss melting snow that refreezes at the cold eave", ["Too much attic insulation, which keeps the roof cold", "Cold shingles that stay below freezing all winter long", "Wide gutters that hold too much snow at the roof edge"], "Air sealing, insulation, ventilation, and eave protection address the cause."],
      ["The National Building Code guidance on attic ventilation is commonly based on a ratio of unobstructed vent area to insulated ceiling area of:", "1/300", ["1/3, which would call for very large vent openings", "1/30, which is ten times more than the usual ratio", "1/3000, which is ten times less than the usual ratio"], "Check your province's adopted code."],
      ["Gaps between sheathing panels are left for:", "Expansion as the panels absorb moisture", ["Drainage, so that rain can pass through to the attic", "Light, so that the attic is bright during the framing", "Nail access, so the nails can be driven between panels"], "A gap of about 3 mm (1/8 in) is common."],
      ["A pipe boot or vent flashing is used to:", "Seal the roof where a pipe passes through", ["Hold the shingles down along the edge of the pipe", "Vent the attic by letting warm air escape around the pipe", "Ground the roof against lightning by touching the pipe"], "Check that rubber collars are not cracked."],
      ["Rafter length for a 4 m run at 6/12 pitch is about:", "4.47 m", ["4.00 m, which is the run and ignores the slope", "5.00 m, which rounds up the factor by a large amount", "6.00 m, which is the rise multiplied by the run"], "The 6/12 factor is 1.118, so 4 x 1.118 = 4.47 m."],
      ["To estimate roof area from a plan, multiply the plan area by:", "The pitch factor", ["The number of bundles, which depends on the final area", "The ridge length, which is only part of the total area", "The nail count, which is set by the shingle manufacturer"], "Steeper roofs have a bigger factor."],
      ["Shingle courses are applied:", "From the eave up, so each course overlaps the one below", ["From the ridge down, so each course overlaps the one above", "In any order, since the seal strips hold them in place", "From the middle outward, with the courses meeting at the eaves"], "This sheds water down and out."],
      ["The exposure of a shingle is:", "The part of the shingle left uncovered by the next course", ["The nail length that is driven through the shingle", "The roof angle, measured from the horizontal at the eave", "The ridge height above the eave of the roof"], "Follow the manufacturer's exposure, usually printed on the package."],
      ["Nails driven too high on a shingle:", "Miss the reinforced nailing strip and reduce wind resistance", ["Improve sealing because they sit closer to the seal strip", "Are best, since they hold the tabs of the shingles down", "Cannot cause leaks, because the next course covers them"], "Place nails in the manufacturer's nailing area."]
    ]),
    3: bank([
      ["A built-up roof (BUR) is made of:", "Alternating layers of bitumen and reinforcing felts", ["One layer of sheet metal soldered at every seam", "Asphalt shingles nailed in overlapping courses from the eaves", "Concrete tiles set on battens over a layer of underlayment"], "Gravel or a cap sheet usually protects the top layer."],
      ["SBS modified bitumen is best described as:", "Rubber-modified for flexibility, commonly mopped, cold applied, or torched", ["A wood product made from treated strand board and resin", "A metal panel formed from galvanized steel and a coating", "A fastener used to attach insulation to a steel deck"], "APP is plastic modified and commonly torch-applied."],
      ["After torch-applied roofing is done for the day, you should:", "Keep a fire watch and check for hidden smouldering", ["Leave right away, since the heat will dissipate on its own", "Store the torch on the roof, so that it is ready next morning", "Soak the roof in oil, so that the surface cools slowly"], "Follow your employer's hot work procedure and local fire rules."],
      ["TPO and PVC membranes are typically joined by:", "Heat welding the seams", ["Nails only, driven through the lap at close spacing", "Duct tape applied over the seams, then pressed down", "Staples driven through the lap at the edge of the sheet"], "EPDM is commonly joined with adhesives or seam tape."],
      ["A vapour retarder in a low-slope roof assembly generally goes:", "On the warm side of the insulation", ["On the cold side of the insulation, below the roof membrane", "Outside the membrane, where it can shed rain and snow", "Over the gravel ballast, where it covers the whole roof"], "The design drawings set its location."],
      ["Tapered insulation on a low-slope roof is used to:", "Create slope for drainage", ["Lower the roof height at the edges for a clean look", "Replace the membrane with a thicker layer of insulation", "Add colour to the roof so that it reflects the sun"], "Drainage reduces ponding."],
      ["Ponding water is commonly defined as water that remains on a roof after rain for more than:", "48 hours", ["5 minutes, as soon as the rain has stopped", "1 hour, which is the time for a gutter to drain", "6 hours, which is a typical time for a drain to clear"], "Check the project specification."],
      ["Base flashing at a parapet or wall is commonly specified to rise above the roof surface by at least:", "About 200 mm (8 in)", ["About 10 mm, the thickness of a membrane seam", "About 25 mm, the height of a typical roof curb", "About 50 mm, the height of a typical drip edge"], "Follow the manufacturer's and project specifications."],
      ["Roof drains should be fitted with:", "Strainers and kept clear of debris", ["No cover, so the water can flow in more freely", "Sealed caps, so that debris cannot enter the pipe", "Gravel only, packed in loosely around the drain body"], "Blocked drains cause ponding and overloading."],
      ["Membranes that are fully adhered are:", "Bonded to the substrate across the whole surface", ["Held down with stones only, spread over the whole surface", "Nailed at the edges only, with the field left loose", "Left loose over the deck, so they can move freely"], "Other methods are mechanically attached or ballasted."],
      ["Wind uplift loads on a flat roof are usually highest at:", "Corners and perimeters", ["The centre, where the roof is furthest from the edges", "The drain, where the water collects and flows away", "The skylight only, because it is the highest point"], "Perimeters often need extra fasteners or adhesive."],
      ["In cold weather, asphalt shingles tend to be:", "Brittle and easier to damage", ["More flexible, which makes them easier to bend over ridges", "Self-sealing quickly, which makes the roof watertight sooner", "Heavier, which makes them harder to carry up the ladder"], "Handle with care and hand-seal if directed."],
      ["Standing seam metal roof clips are designed to:", "Allow the panels to move with temperature changes", ["Prevent all movement of the panels, so they stay rigid", "Replace the seams, so that no sealant is needed", "Hold nails in place, so the panels can be fastened down"], "Panels expand and contract along their length."],
      ["Copper flashing in contact with bare galvanized steel can cause:", "Galvanic corrosion", ["Better sealing, because the two metals bond over time", "Faster drying, because copper sheds water from its surface", "No effect, since all metals are safe when they touch"], "Use compatible metals and fasteners."],
      ["A minimum roof slope of about 2% (1 in 50) is commonly required for:", "Low-slope roof drainage", ["Steep roofs, such as those covered with asphalt shingles", "Walls, where the drainage plane must slope away", "Chimneys, where the cricket must slope toward the sides"], "Many membranes require positive drainage. Check your code and manufacturer."],
      ["If you find suspected asbestos-containing material when tearing off an old roof, you should:", "Stop work and report it", ["Sweep it up dry, so that the area is clean for the next step", "Burn it in a drum on site, so there is less waste", "Keep going, and tell the foreman at the end of the shift"], "Follow your employer's hazardous materials procedure."]
    ]),
    4: bank([
      ["A 10 m x 12 m roof plan at 6/12 pitch has a surface area of about:", "134 m²", ["120 m², the plan area with no pitch factor", "150 m², a rounded figure with an extra allowance", "180 m², the plan area multiplied by 1.5"], "120 m² x 1.118 = 134.2 m²."],
      ["How many squares are needed to cover 134.2 m² with 10% waste?", "About 15.9 squares", ["About 13.4 squares, which leaves out the waste allowance", "About 20 squares, which adds far too much waste", "About 9 squares, which uses the area of one square only"], "134.2 x 1.1 = 147.6 m², divided by 9.29 m² per square, is 15.9."],
      ["Chimney leaks on the uphill side are often prevented by installing a:", "Cricket (saddle) to divert water around the chimney", ["A second ridge, built above the chimney to shed the water", "A larger vent pipe beside the chimney to dry out the area", "A steeper pitch on the roof next to the chimney"], "A cricket also reduces debris build-up behind the chimney."],
      ["When tracing a roof leak, you should:", "Look uphill from the stain because water travels along framing and decking", ["Only look right above the stain, since that is where the leak is", "Ignore the attic, since the stain is visible on the ceiling", "Replace the whole roof first, before searching for the cause"], "Water can travel a long distance before it appears."],
      ["Blistering or curling of shingles can be linked to:", "Poor attic ventilation and trapped moisture", ["Too much drip edge along the eave and the rake", "Good ventilation that lets the attic air move freely", "Correct nailing that holds each shingle down tightly"], "Check ventilation and moisture sources."],
      ["During re-roofing, any rotted sheathing found should be:", "Replaced before the new roofing is applied", ["Covered over with new underlayment to hide the damage", "Painted with a sealer so that the rot cannot spread", "Ignored if the rot is small and the deck feels firm"], "A sound deck is needed for nail holding."],
      ["Before adding a second layer of shingles, you should check:", "The code limit, the condition of the deck, and structural capacity", ["Only the colour of the old shingles and the new ones", "Only the price of the new shingles and the labour cost", "Nothing, since a second layer is always allowed"], "Many jurisdictions limit layers, and tear-off is often the better choice."],
      ["A fall arrest anchor should be:", "Rated or designed for the loads by a qualified person, not a vent pipe or a similar object", ["A plumbing vent that sticks up through the roof", "A loose board nailed across two rafters in the attic", "A chimney cap that is strapped with a rope"], "Anchors must meet your provincial regulation and site fall protection plan."],
      ["A site-specific fall protection plan should be prepared:", "Before work starts at heights", ["After an incident, once the causes have been found", "Only for large jobs, such as commercial flat roofs", "Never, since a general company plan is always enough"], "It covers hazards, equipment, anchors, rescue, and training."],
      ["In high-wind areas or on steep slopes, manufacturers commonly allow or require:", "More nails per shingle, such as six", ["Fewer nails per shingle, so the shingles can move freely", "No nails, since the seal strips hold the shingles down", "Staples, since they hold better than nails in the wind"], "Always follow the product's installation instructions."],
      ["At the end of a torch-applied lap, a small bead of bitumen at the edge suggests:", "Good adhesion at the lap", ["Over-torching that is always a failure and must be cut out", "No bond between the layers, so the lap must be redone", "The wrong membrane for the job, so it must be replaced"], "Check the manufacturer's guide for bleed-out."],
      ["Probing the seams of a heat-welded membrane is done to:", "Check weld quality and find unsealed spots", ["Make the seams wider with a heated tool and a roller", "Cool the membrane so it does not stretch in the sun", "Add glue under the seams to make a stronger bond"], "Any gaps must be repaired."],
      ["Product warranties usually depend on:", "Installing the system as the manufacturer's instructions require", ["The colour chosen by the owner and the contractor", "The shingle brand only, however the system is installed", "The nail brand only, regardless of how the roof is installed"], "Deviation can void coverage."],
      ["Crickets on low-slope roofs at drains and curbs are used to:", "Direct water to the drains and away from curbs", ["Hold ballast in place along the roof edges and at the corners", "Anchor harnesses to the roof deck during the work", "Vent the roof by letting moist air escape from the insulation"], "Tapered insulation is often used for this."],
      ["The best way to prevent damage to freshly installed membranes is to:", "Limit traffic and use protective walkway pads", ["Allow free traffic, since the membrane is built to be walked on", "Drag tools across the surface, so they are easy to move", "Leave debris in place, since it forms a protective layer"], "Punctures lead to leaks."],
      ["Which factor most affects the number of squares of material ordered?", "Roof area, pitch, and waste for hips, valleys, and starter", ["Number of workers on the crew and the days on the job", "Gutter colour and the type of the drip edge chosen", "Time of day when the delivery truck is scheduled to arrive"], "Complex roofs have higher waste."]
    ])
  };

  const roadmapSteps = [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS, working at heights, and site orientation; requirements vary)", "Prepare a resume and apply to union locals and roofing contractors", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: foundations and safety at heights", items: ["Learn ladder safety, fall protection, and heat stress", "Handle materials, tear off old roofing, and clean up", "Learn pitch, tools, and how to read basic roof plans", "Install underlayment and simple shingle courses", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: steep-slope roofing", items: ["Install shingles with correct nailing and exposure", "Install flashings at walls, chimneys, valleys, and vents", "Learn roof ventilation and ice dam control", "Measure roofs and calculate materials"] },
    { title: "Year 3: low-slope roofing and membranes", items: ["Install built-up, modified bitumen, TPO, PVC, and EPDM systems", "Learn insulation, vapour retarders, and drainage", "Learn torch safety and hot work procedures", "Learn metal roofing and flashing details"] },
    { title: "Year 4 and beyond: advanced work", items: ["Estimate, plan, and sequence roofing projects", "Troubleshoot leaks and failed roof assemblies", "Mentor first-year apprentices", "Use the Red Seal standard to find gaps in your experience"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ];

  const glossary = [
    ["APP", "Atactic polypropylene, a plastic modifier used in modified bitumen membranes."],
    ["Base flashing", "Flashing that turns up at a wall or curb to seal a roof edge."],
    ["Bundle", "A package of shingles, usually three per square."],
    ["BUR", "Built-up roof, layers of bitumen and felts."],
    ["Counterflashing", "Flashing set over base flashing to shed water."],
    ["Cricket", "A small sloped structure that diverts water around a chimney or curb."],
    ["Deck", "The structural surface under the roofing."],
    ["Drip edge", "Metal flashing at the eave or rake to guide water away."],
    ["Eave", "The lower edge of a roof."],
    ["EPDM", "A synthetic rubber single-ply roofing membrane."],
    ["Exposure", "The part of a shingle left uncovered by the next course."],
    ["Fall arrest", "Equipment that stops a fall after it starts."],
    ["Hip", "The sloped ridge where two roof planes meet at an outside corner."],
    ["Ice dam", "A ridge of ice at the eave that can force water under shingles."],
    ["Lap", "The overlap of two layers of material."],
    ["Parapet", "A low wall at the edge of a roof."],
    ["Pitch", "The slope of a roof, expressed as rise over run."],
    ["Ponding", "Water that stays on a roof for 48 hours or more after rain."],
    ["PVC", "A single-ply membrane with welded seams."],
    ["Rafter", "A sloped framing member that supports the roof deck."],
    ["Rake", "The sloped edge of a gable roof."],
    ["Ridge", "The horizontal line at the top where two roof planes meet."],
    ["Run", "The horizontal distance covered by a rafter."],
    ["SBS", "Styrene-butadiene-styrene, a rubber modifier used in modified bitumen."],
    ["Sheathing", "The panels or boards that form the roof deck."],
    ["Square", "100 ft² of roof area, about 9.29 m²."],
    ["Starter course", "The first row of shingles at the eave."],
    ["Step flashing", "Individual flashing pieces woven with shingles at a wall."],
    ["TPO", "Thermoplastic polyolefin, a heat-welded single-ply membrane."],
    ["Underlayment", "A water-resistant layer applied under the roof covering."],
    ["Valley", "The inside angle where two roof planes meet."],
    ["Vapour retarder", "A layer that slows the movement of moisture vapour."]
  ];

  registerTrade({
    id: "roofer",
    store: "roofer",
    title: "Roofer",
    name: "Roofer",
    short: "roofing",
    category: "Construction · Building envelope · Heights",
    summary: "Roofers install, repair, and replace roof systems, from shingles and metal to membrane roofs, keeping buildings dry while working safely at heights in every season.",
    work: "Roofers tear off old materials, prepare the deck, and install underlayment, shingles, metal, or membrane systems with flashing at every edge and opening. Work is outdoors, at heights, and heavily affected by weather. Careful flashing and fall protection are what separate a long-lasting roof from a leak.",
    duration: "Usually 2–3 years (Job Bank), varies by province",
    union: "United Union of Roofers, Waterproofers and Allied Workers",
    unionUrl: "https://www.unionroofers.com/",
    profileUrl: "https://red-seal.ca/eng/trades/roofer.shtml",
    durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/17033/ca",
    jobSearch: "roofer apprentice",
    journeySearch: "roofer",
    aliases: "roofing shingles flat roof membrane metal roof torch on tpo epdm waterproofing",
    tools: ["Roofing hatchet", "Hook-blade utility knife", "Chalk line and tape measure", "Tin snips", "Fall protection harness", "Slip-resistant safety boots"],
    insight: {
      skills: ["Working comfortably at heights", "Flashing detail and workmanship", "Measuring and roof math", "Stamina in weather extremes"],
      hazards: ["Falls: use fall protection and inspect gear", "Heat stress: hydrate and take breaks", "Burns from hot asphalt and torches: use PPE and procedures", "Ladders: use the 4 to 1 rule"],
      settings: ["Residential steep-slope roofs", "Commercial flat roofs", "Metal and specialty roofing", "Repair and service work"]
    },
    toolGroups,
    mediaGroups,
    practiceBank,
    roadmapSteps,
    glossary,
    cards: [
      { front: "Roofing square", back: "100 ft² or about 9.29 m²" },
      { front: "6/12 pitch factor", back: "1.118, and an angle of about 26.6 degrees" },
      { front: "12/12 pitch", back: "45 degrees, with a factor of 1.414" },
      { front: "Ladder rule", back: "1 m out for every 4 m of height, and 1 m above the landing" },
      { front: "Shingle bundles per square", back: "Commonly 3, but check the product" },
      { front: "Attic ventilation ratio", back: "Commonly 1/300 of the insulated ceiling area (check your code)" },
      { front: "Ponding water", back: "Water remaining on a roof 48 hours after rain" },
      { front: "CSA full-body harness standard", back: "CSA Z259.10" },
      { front: "Low-slope drainage guideline", back: "About 2% (1 in 50) minimum slope" },
      { front: "Order of application", back: "Start at the eave and work up, lapping so water sheds down." }
    ],
    jobsIntro: "Look for union and non-union roofing contractors, residential and commercial roofing companies, restoration firms, waterproofing contractors, and maintenance departments.",
    tips: ["Bring a short resume, your safety tickets, and ID.", "Show you are comfortable with heights and physical work.", "Visit roofing contractors in person when you can, and follow up.", "Ask what tools and gear you need and what the employer supplies."],
    forumTopics: ["Starting out", "Shingles and flashing", "Low-slope and membranes", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference: [
      {
        title: "Pitch, angle, and rafter factors",
        intro: "Rafter length = run x factor. Roof surface area = plan area x factor (for a simple, uniform pitch).",
        table: {
          head: ["Pitch (rise/12)", "Angle", "Length factor"],
          rows: [
            ["3/12", "14.0°", "1.031"],
            ["4/12", "18.4°", "1.054"],
            ["5/12", "22.6°", "1.083"],
            ["6/12", "26.6°", "1.118"],
            ["7/12", "30.3°", "1.158"],
            ["8/12", "33.7°", "1.202"],
            ["9/12", "36.9°", "1.250"],
            ["10/12", "39.8°", "1.302"],
            ["12/12", "45.0°", "1.414"]
          ]
        },
        note: "Factor = square root of (1 + (rise/12) squared). Hips and valleys use a different factor."
      },
      {
        title: "Quantity and conversion quick facts",
        list: [
          "<strong>1 roofing square:</strong> 100 ft² = 9.29 m². <strong>1 m²:</strong> 10.76 ft².",
          "<strong>Shingles:</strong> commonly 3 bundles per square, but confirm for the product.",
          "<strong>Waste:</strong> often 10% for simple roofs, more for hips, valleys, and cut-up roofs.",
          "<strong>Example:</strong> 10 m x 12 m plan at 6/12 = 120 x 1.118 = 134.2 m², about 14.4 squares, or 15.9 with 10% waste.",
          "<strong>Length:</strong> 1 in = 25.4 mm. <strong>Pressure and temperature:</strong> follow the product data sheet."
        ]
      },
      {
        title: "Steep-slope shingle checklist",
        list: [
          "Deck sound, dry, and clear of old nails, with panel gaps of about 3 mm (1/8 in).",
          "Eave protection (ice and water membrane) where the code requires, with underlayment above it.",
          "Drip edge at the eave under the underlayment, and at the rake over it, per manufacturer and code.",
          "Starter course sealed at the eave, then courses at the specified exposure.",
          "Four nails per shingle in the nailing zone, more in high wind or steep slope per manufacturer.",
          "Step flashing at walls, kick-out at the bottom, counterflashing at chimneys, and a cricket if needed.",
          "Ventilation: commonly 1/300 of the insulated ceiling area, balanced intake and exhaust."
        ]
      },
      {
        title: "Low-slope membrane systems",
        table: {
          head: ["System", "Key points", "Joining method"],
          rows: [
            ["Built-up roof (BUR)", "Layers of bitumen and felts, with gravel or cap sheet", "Hot or cold applied bitumen"],
            ["SBS modified bitumen", "Rubber-modified, flexible", "Torch, hot mop, or cold adhesive"],
            ["APP modified bitumen", "Plastic-modified, UV stable", "Usually torch-applied"],
            ["TPO and PVC", "Single-ply, reflective, welded seams", "Hot-air welding"],
            ["EPDM", "Synthetic rubber, flexible", "Adhesives or seam tape"]
          ]
        },
        note: "Always follow the manufacturer's application instructions and the project specification."
      },
      {
        title: "Fall protection and ladder safety",
        list: [
          "<strong>Ladder:</strong> 4 to 1 rule (1 m out per 4 m up), extend 1 m above the landing, tie off, and keep three points of contact.",
          "<strong>Fall protection:</strong> use guardrails, travel restraint, or fall arrest as your regulation and site plan require. Trigger heights vary by province.",
          "<strong>Harness:</strong> CSA Z259.10, inspected before every use and sized properly.",
          "<strong>Anchors:</strong> rated or engineered for fall arrest, never a vent pipe or loose object.",
          "<strong>Heat stress:</strong> hydrate, take breaks, and watch your coworkers.",
          "<strong>Hot work:</strong> follow the fire watch procedure after torch work."
        ],
        note: "Fall protection rules, minimum approach distances to power lines, and hot work rules differ by province, so confirm with your provincial occupational health and safety regulations."
      }
    ]
  });
})();
