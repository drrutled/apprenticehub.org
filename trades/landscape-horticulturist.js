// Landscape Horticulturist guide. Practice questions are original study aids, not official Red Seal exam questions.

const horticulturePositions = [0, 2, 1, 3, 3, 1, 2, 0, 1, 3, 0, 2, 2, 0, 3, 1, 1, 3, 2, 0];
const horticultureQuestions = (rows) => rows.map(([q, right, wrong, explain], i) => {
  const answer = horticulturePositions[i % horticulturePositions.length];
  const options = [...wrong];
  options.splice(answer, 0, right);
  return { q, options, answer, explain };
});

registerTrade({
  id: "landscape-horticulturist",
  store: "landscape-horticulturist",
  title: "Landscape Horticulturist",
  name: "Landscape Horticulturist",
  short: "landscape horticulture",
  category: "Outdoor · Plants · Construction",
  summary: "Landscape horticulturists install and maintain gardens, lawns, trees, shrubs, and hard surfaces, applying plant knowledge, soil science, and site safety to outdoor spaces.",
  work: "Landscape horticulturists work outdoors in all seasons, on crews that plant, build, prune, irrigate, and maintain residential, commercial, and public landscapes. The work mixes plant identification, soil and turf care, hardscape construction, irrigation, and equipment operation. Work is busiest from spring to fall, and many people shift to snow management or greenhouse and nursery work in winter.",
  duration: "Usually about 3 years (varies by province)",
  union: "Canadian Nursery Landscape Association (CNLA)",
  unionUrl: "https://www.cnla-acpp.ca/",
  jobSearch: "landscape horticulturist apprentice",
  journeySearch: "landscape horticulturist",
  aliases: "landscaper gardener horticulture turf arborist lawn nursery irrigation hardscape landscaping greenhouse red seal",
  tools: ["Bypass pruners and loppers", "Pruning saw and hori hori knife", "Round-point shovel, spade, and rakes", "Tape measure, string line, and level", "Work gloves, eye and hearing protection", "CSA safety boots and sun protection"],
  insight: {
    skills: ["Plant identification and care", "Soil, turf, and irrigation knowledge", "Reading landscape plans and layout", "Safe use of hand tools and power equipment"],
    hazards: ["Noise and flying debris: wear hearing and eye protection around mowers and trimmers", "Heat, sun, and ticks: hydrate, cover up, and check for ticks after work", "Underground utilities: get locates before you dig", "Strains and lifting: use carts, lift with your legs, and share heavy loads"],
    settings: ["Landscape construction and design-build firms", "Grounds maintenance and golf courses", "Nurseries, greenhouses, and garden centres", "Municipal parks and institutional grounds"]
  },
  toolGroups: [
    {
      title: "Day-one kit, buy once and buy well",
      note: "Professional-grade tools that hold their edge and last for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first, and what your school requires.",
      items: [
        { name: "Felco or ARS bypass pruners", why: "Clean cuts on live stems protect plant health. Good pruners can be sharpened and rebuilt.", search: "Felco 2 bypass pruners ARS" },
        { name: "Loppers (bypass, 60 to 80 cm)", why: "Reach and leverage for branches too thick for hand pruners.", search: "Corona Fiskars bypass loppers 30 inch" },
        { name: "Folding pruning saw (Silky or similar)", why: "Aggressive teeth cut branches cleanly on the pull stroke.", search: "Silky Gomboy Corona folding pruning saw" },
        { name: "Hori hori knife or soil knife", why: "Planting bulbs, dividing perennials, and cutting roots and sod.", search: "hori hori soil knife stainless steel" },
        { name: "Round-point shovel and flat spade", why: "Digging, planting, edging, and moving soil. Fibreglass or ash handles are common choices.", search: "Spear and Jackson round point shovel flat spade" },
        { name: "Steel bow rake and leaf rake", why: "Grading soil and spreading mulch, and cleaning up leaves.", search: "bow rake steel leaf rake landscaping" },
        { name: "Work gloves and thorn-resistant gloves", why: "Protect hands from blisters, thorns, and sharp stones.", search: "Mechanix thorn proof gardening gloves leather" },
        { name: "Safety glasses (CSA Z94.3) and hearing protection", why: "Eyes and ears are at risk from flying debris and engine noise.", search: "CSA Z94.3 safety glasses earmuffs hearing protection" },
        { name: "CSA-approved safety boots and rain gear", why: "Protective toe, slip resistance, and dry feet for wet mornings.", search: "CSA safety boots waterproof Blundstone Terra rain gear" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your crew lead what holds up on your sites.",
      items: [
        { name: "Tape measure (8 m) and measuring wheel", why: "Layout and takeoffs depend on accurate measurements.", search: "Stanley FatMax tape measure 8m measuring wheel" },
        { name: "String line, stakes, and line level", why: "Mark edges and check slope for patios, paths, and beds.", search: "mason string line stakes line level" },
        { name: "Torpedo level and rubber mallet", why: "Level pavers and blocks, and tap them into place without damage.", search: "torpedo level rubber mallet paver" },
        { name: "Hat, sunscreen, and insect repellent", why: "Sun, heat, and biting insects are daily hazards. Cover up and reapply as needed.", search: "wide brim sun hat sunscreen insect repellent" },
        { name: "Reusable water bottle and insulated jug", why: "Staying hydrated helps prevent heat illness.", search: "insulated water jug work site" },
        { name: "Hedge shears and hand shears", why: "Shaping hedges and trimming edges neatly.", search: "bypass hedge shears hand shears Corona" },
        { name: "Wheelbarrow or contractor cart (personal tools)", why: "Moves soil, mulch, and stone while protecting your back. Often supplied by the crew.", search: "contractor wheelbarrow garden cart" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the employer. Ask before buying, and complete training before using power equipment.",
      items: [
        { name: "Chainsaw chaps, helmet with face screen, and saw gloves", why: "Required PPE for chainsaw work, and training comes first.", search: "chainsaw chaps helmet face shield CSA Z62" },
        { name: "Plate compactor and rented equipment", why: "Compacting hardscape bases. Usually employer-supplied or rented.", search: "plate compactor landscaping paver base" },
        { name: "Laser level or builder's level", why: "Setting grades for patios, retaining walls, and drainage.", search: "laser level grade rod builders level landscaping" },
        { name: "Backpack sprayer (for licensed applicators)", why: "Used for approved applications only after required training and licensing.", search: "backpack sprayer Solo Chapin" },
        { name: "Irrigation tools and pressure gauge", why: "Troubleshooting valves, heads, and pressure during irrigation work.", search: "irrigation tools pressure gauge Rain Bird Hunter" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for plant ID, soil, math, and plan reading. Check with your school and exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific or basic calculator (Casio fx-991 or similar)", why: "Areas, volumes, fertilizer rates, and material takeoffs.", search: "Casio fx-991 scientific calculator" },
        { name: "Canadian plant identification guide", why: "Trees, shrubs, perennials, and weeds common in your region.", search: "Canadian tree shrub identification field guide" },
        { name: "Hand lens (10x) and plant press", why: "Examine leaf and flower details and keep reference specimens.", search: "10x hand lens loupe botanical plant press" },
        { name: "Architect's scale ruler (metric)", why: "Reading landscape plans at scales such as 1:100 or 1:200.", search: "metric architect scale ruler 1:100 1:200" },
        { name: "Soil test kit and pH meter", why: "Practise soil pH and nutrient testing for class and projects.", search: "soil test kit pH meter garden" },
        { name: "Rite in the Rain field notebook", why: "Weatherproof paper for site notes, plant lists, and measurements.", search: "Rite in the Rain field notebook" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic, which also helps with Red Seal exam review.", search: "binder dividers highlighters" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare. Search for the Landscape Horticulturist trade profile from here.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Canadian Nursery Landscape Association (CNLA)", desc: "Industry standards, careers, and training for the nursery and landscape sector.", url: "https://www.cnla-acpp.ca/" },
        { name: "Landscape Ontario", desc: "Industry association with training and career information for landscape workers.", url: "https://landscapeontario.com/" },
        { name: "Canadian Food Inspection Agency (CFIA)", desc: "Federal information on plant pests and invasive species.", url: "https://inspection.canada.ca/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Workplace safety facts on heat, noise, lifting, and equipment hazards.", url: "https://www.ccohs.ca/" },
        { name: "Natural Resources Canada", desc: "Federal home page. Search for plant hardiness zone information.", url: "https://natural-resources.canada.ca/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local rules.",
      items: [
        { name: "Proper tree planting", desc: "Hole size, root flare, and mulching.", url: "https://www.youtube.com/results?search_query=proper+tree+planting+root+flare+mulch+landscape" },
        { name: "Pruning basics for trees and shrubs", desc: "Cuts, branch collars, and timing.", url: "https://www.youtube.com/results?search_query=pruning+basics+branch+collar+three+cut+method" },
        { name: "Paver patio installation", desc: "Base, bedding, and edge restraint.", url: "https://www.youtube.com/results?search_query=paver+patio+installation+base+compaction+landscape" },
        { name: "Soil texture and pH", desc: "Sand, silt, clay, and testing soil.", url: "https://www.youtube.com/results?search_query=soil+texture+triangle+soil+pH+horticulture" },
        { name: "Turfgrass care and mowing", desc: "Mowing height, aeration, and overseeding.", url: "https://www.youtube.com/results?search_query=turfgrass+management+mowing+height+aeration+overseeding" },
        { name: "Irrigation system basics", desc: "Zones, valves, heads, and drip.", url: "https://www.youtube.com/results?search_query=irrigation+system+basics+zones+valves+drip+landscape" },
        { name: "Integrated pest management", desc: "Monitoring and controlling pests in landscapes.", url: "https://www.youtube.com/results?search_query=integrated+pest+management+landscape+horticulture" },
        { name: "Reading landscape plans", desc: "Scales, symbols, and plant schedules.", url: "https://www.youtube.com/results?search_query=reading+landscape+plans+scale+plant+schedule" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for horticulture yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: landscaping apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=landscaping+apprentice+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: horticulture podcast", desc: "Plants, soil, and landscape care from working horticulturists.", url: "https://www.youtube.com/results?search_query=horticulture+podcast+landscape+plants+soil" },
        { name: "YouTube: hardscape and landscape construction podcast", desc: "Patios, walls, and drainage in the field.", url: "https://www.youtube.com/results?search_query=hardscape+landscape+construction+podcast" },
        { name: "YouTube: turf and lawn care podcast", desc: "Turfgrass care, pests, and fertility.", url: "https://www.youtube.com/results?search_query=turf+lawn+care+professional+podcast" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, business, and leadership.",
      items: [
        { name: "YouTube: Red Seal landscape horticulturist exam prep (talk-through)", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+landscape+horticulturist+exam+preparation" },
        { name: "YouTube: landscape business and estimating podcast", desc: "Estimating, pricing jobs, and running a landscape company.", url: "https://www.youtube.com/results?search_query=landscape+business+estimating+pricing+podcast" },
        { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
      ]
    }
  ],
  practiceBank: {
    1: horticultureQuestions([
      ["At about what noise level do most Canadian jurisdictions require hearing protection or exposure limits over an 8-hour shift?", "About 85 dBA", ["About 40 dBA", "About 60 dBA", "About 120 dBA only"], "Limits vary by jurisdiction. Use hearing protection around mowers, trimmers, blowers, and saws."],
      ["Before digging with a shovel or machine on a new site you should:", "Request utility locates", ["Dig carefully and see", "Ask the client for a guess", "Probe with a metal bar"], "Provincial one-call services arrange for buried utilities to be marked. Follow the rules for your province."],
      ["Gasoline for equipment should be stored in:", "An approved, labelled fuel container away from ignition sources", ["A glass jar", "A drink bottle", "An open pail"], "Fuel vapours ignite easily. Let hot engines cool before refuelling."],
      ["The safest way to lift a heavy bag of soil is to:", "Bend your knees, keep it close, and use a cart or help", ["Twist at the waist", "Lift with a round back", "Hold it at arm's length"], "Good lifting posture prevents back injury."],
      ["Which is a sign of heat illness?", "Dizziness, heavy sweating, and headache", ["Cold dry skin only", "Shivering at 35 °C", "A sudden urge to nap"], "Rest in shade, drink water, and get help if symptoms are severe."],
      ["To reduce the risk of Lyme disease from ticks you should:", "Wear long clothing, use repellent, and check yourself after work", ["Ignore ticks", "Wear shorts and sandals", "Brush ticks off with bare hands"], "Remove an attached tick promptly with fine-tipped tweezers and report it as advised."],
      ["Poison ivy typically has:", "Leaves in groups of three", ["Leaves in groups of five only", "Needles", "Blue flowers only"], "Wear gloves and long sleeves, and wash exposed skin and tools after contact."],
      ["The three mineral particles that make up soil texture are:", "Sand, silt, and clay", ["Rock, wood, and ash", "Peat, bark, and compost", "Salt, lime, and gypsum"], "Loam is a balanced mixture of the three."],
      ["Which soil particle is the largest?", "Sand", ["Silt", "Clay", "Humus"], "Sand drains quickly, and clay holds water."],
      ["A fertilizer labelled 20-10-10 contains:", "20% nitrogen, 10% phosphate, and 10% potash", ["20% potassium only", "10% nitrogen, 20% phosphorus", "Equal amounts of everything"], "The numbers are always N-P-K by weight."],
      ["A 20 kg bag of 20-10-10 fertilizer contains how much nitrogen?", "4 kg", ["2 kg", "10 kg", "20 kg"], "20% of 20 kg is 4 kg."],
      ["A good mulch depth around trees and shrubs is generally:", "5 to 10 cm, kept back from the trunk", ["30 cm piled against the trunk", "None", "1 cm"], "Mulch retains moisture and suppresses weeds. A pile against the trunk, sometimes called a mulch volcano, harms the tree."],
      ["The one-third rule for mowing says:", "Do not remove more than a third of the grass blade height at once", ["Mow one third of the lawn", "Water for a third of an hour", "Fertilize every third week"], "Heavy cutting stresses turf."],
      ["Photosynthesis uses sunlight, carbon dioxide, and water to make:", "Sugars and oxygen", ["Fertilizer", "Nitrogen gas", "Salt"], "Plants rely on photosynthesis for food."],
      ["Canada's plant hardiness zones:", "Run from 0 to 9, with higher numbers being milder", ["Run from 1 to 20 north to south", "Show only rainfall", "Are the same as the US soil map"], "Zones help match plants to winter climate. Microclimates matter too."],
      ["A lawn is 12 m by 8 m. What is its area?", "96 m²", ["20 m²", "40 m²", "192 m²"], "Area = length × width = 12 × 8 = 96 m²."],
      ["Before clearing a jam in a mower or trimmer you should:", "Stop the engine and disconnect the spark plug lead", ["Reach in while it idles", "Use your boot", "Increase the speed"], "Blades can move or restart unexpectedly."]
    ]),
    2: horticultureQuestions([
      ["When planting a tree, the root flare should be:", "At or slightly above the surrounding grade", ["Buried 15 cm below grade", "Covered with mulch", "Below the water table"], "Planting too deep can harm the trunk and roots."],
      ["A planting hole for a tree should be:", "2 to 3 times wider than the root ball and no deeper", ["Narrow and very deep", "The same width as the root ball", "Twice as deep as the root ball"], "A wide, shallow hole lets roots spread into loosened soil."],
      ["Most landscape plants grow best in soil with a pH of about:", "6 to 7", ["2 to 3", "9 to 10", "11 to 12"], "Some, like blueberries and rhododendrons, prefer more acidic soil."],
      ["Which plants generally need acidic soil?", "Blueberries and rhododendrons", ["Lilac and lavender", "Buffalo grass", "Spinach only"], "Acid-loving plants cannot absorb some nutrients in alkaline soil."],
      ["How much topsoil is needed to cover an area of 10 m by 5 m to 15 cm deep?", "7.5 m³", ["0.75 m³", "75 m³", "15 m³"], "10 × 5 × 0.15 = 7.5 m³."],
      ["About how many square metres does 1 m³ of mulch cover at 10 cm deep?", "10 m²", ["1 m²", "100 m²", "50 m²"], "Area = volume ÷ depth = 1 ÷ 0.10 = 10 m²."],
      ["Which is a common cool-season turfgrass?", "Kentucky bluegrass", ["Bermuda grass", "Buffalo grass", "Zoysia"], "Cool-season grasses grow best in spring and fall."],
      ["Deep, infrequent watering of turf encourages:", "Deeper roots", ["Shallow roots", "Faster weed seed growth", "Disease"], "A common guideline is about 25 mm per week including rain, but needs vary."],
      ["When pruning a branch you should cut:", "Just outside the branch collar", ["Flush to the trunk", "Leaving a long stub", "Through the collar"], "The collar helps the tree seal the wound."],
      ["The three-cut method for removing a large branch is used to:", "Prevent bark from tearing down the trunk", ["Save time", "Prune roots", "Shape hedges"], "An undercut and a top cut relieve weight before the final cut."],
      ["Spring-flowering shrubs such as lilac are generally pruned:", "Right after flowering", ["In late fall", "Before they bud", "Never"], "Pruning later removes next year's flower buds."],
      ["Core aeration helps turf by:", "Relieving compaction and improving water and air movement", ["Adding nitrogen", "Killing weeds", "Lowering soil pH"], "It pulls small plugs of soil from the lawn."],
      ["Compost improves soil mainly by:", "Adding organic matter that improves structure and water holding", ["Adding salt", "Acidifying it strongly", "Making it sterile"], "Organic matter helps both sandy and clay soils."],
      ["A slope rises 2 m over a horizontal run of 20 m. What is the slope as a percent?", "10%", ["1%", "2%", "40%"], "Slope % = rise ÷ run × 100 = 2 ÷ 20 × 100 = 10%."],
      ["Ground next to a building foundation should generally slope:", "Away from the building", ["Toward the building", "Not at all", "Into a basement window"], "Positive drainage keeps water away from the foundation."],
      ["A soil test is useful to learn about:", "pH and nutrient levels", ["Plant names", "Rainfall", "Pest names only"], "It guides lime and fertilizer decisions."],
      ["A perennial plant is one that:", "Lives for more than two years", ["Lives for one season", "Never flowers", "Only grows in pots"], "Annuals complete their life cycle in one growing season."]
    ]),
    3: horticultureQuestions([
      ["Integrated pest management (IPM) means:", "Combining monitoring, thresholds, and cultural, biological, and chemical controls", ["Spraying on a schedule", "Ignoring pests", "Using only one pesticide"], "IPM uses the least risky effective options and treats only when needed."],
      ["On a pesticide product label, the directions are:", "A legal requirement that you must follow", ["Only suggestions", "Optional advice", "For homeowners only"], "In Canada, the Pest Control Products Act makes label directions legally binding."],
      ["Applying pesticides commercially generally requires:", "A provincial licence or certification, so confirm your province's rules", ["No training", "Only a driver's licence", "Only a hat"], "Rules differ across the provinces and territories, and some provinces restrict cosmetic pesticide use."],
      ["Drip irrigation is efficient because it:", "Delivers water slowly to the root zone with little loss to evaporation", ["Sprays water high in the air", "Floods the surface", "Needs no pressure control"], "It is useful for beds, trees, and shrubs."],
      ["A backflow preventer on an irrigation system:", "Protects the drinking water supply from contamination", ["Increases pressure", "Colours the water", "Reduces flow to plants"], "Irrigation lines can contain fertilizer or soil contaminants."],
      ["Sprinkler heads in one zone should have:", "Matching precipitation rates", ["Different types mixed freely", "No set pattern", "Random spacing"], "Mixed rates over-water some areas and under-water others."],
      ["For a paver patio, a typical bedding layer thickness is about:", "25 mm of screeded bedding sand over a compacted granular base", ["150 mm of topsoil", "1 mm of sand", "Wet clay"], "Base depth depends on soil and use. Follow the design and manufacturer directions."],
      ["Granular base material for pavers should be compacted:", "In layers (lifts) with a plate compactor", ["All at once in a thick layer", "Not at all", "Only by foot"], "Compacting in thin lifts gives a stable base."],
      ["Edge restraint on a paver patio is used to:", "Keep the pavers from spreading and shifting", ["Make mowing harder", "Cool the pavers", "Add colour"], "Without it, the edges drift apart."],
      ["Retaining walls above a certain height often require:", "Engineered design, with limits that vary by municipality", ["No planning", "Painting", "Annual flowers"], "Check local rules, and provide drainage behind the wall."],
      ["Slow-release fertilizer is useful because it:", "Feeds plants gradually and reduces leaching", ["Burns lawns quickly", "Is cheaper per kilogram always", "Has no nutrients"], "Avoid applying fertilizer near waterways or before heavy rain."],
      ["Yellowing of older, lower leaves often suggests:", "Nitrogen deficiency", ["Iron deficiency in new growth only", "Too much phosphorus", "Frost damage only"], "Nitrogen moves within the plant to new growth, so deficiency shows first in older leaves."],
      ["The principle of \"right plant, right place\" means:", "Choosing plants that suit the hardiness zone, light, and soil", ["Choosing the cheapest plants", "Planting everything in rows", "Using only evergreens"], "Matching plants to site conditions reduces maintenance and losses."],
      ["Which is regarded as an invasive plant in parts of Canada?", "Japanese knotweed", ["Sugar maple", "Kentucky bluegrass", "White pine"], "Avoid planting invasive species and follow local guidance for disposal."],
      ["Transplant shock can be reduced by:", "Watering well and minimizing root damage", ["Letting roots dry in the sun", "Pruning all the roots off", "Planting in dry soil"], "Handle the root ball carefully and keep it moist."]
    ]),
    4: horticultureQuestions([
      ["A basic landscape estimate generally includes:", "Labour, materials, equipment, overhead, and profit", ["Materials only", "Labour only", "The client's opinion"], "Leaving out overhead or contingency causes losses."],
      ["On a plan with a scale of 1:100, 5 cm on the plan is:", "5 m on the ground", ["50 cm", "0.5 m", "50 m"], "At 1:100, 1 cm is 100 cm, which is 1 m."],
      ["On a plan with a scale of 1:200, 4 cm on the plan is:", "8 m on the ground", ["4 m", "2 m", "80 m"], "4 cm × 200 = 800 cm, which is 8 m."],
      ["A 3-4-5 triangle on the site can be used to:", "Set out a right angle", ["Level a slope", "Measure soil pH", "Estimate sod"], "A triangle with sides 3, 4, and 5 units has a 90° angle."],
      ["You need sod to cover 96 m² plus 5% for cutting waste. About how much should you order?", "101 m²", ["96 m²", "91 m²", "110 m²"], "96 × 1.05 = 100.8, rounded up to 101 m²."],
      ["A 40 m² bed needs mulch at 7.5 cm deep. How much mulch is that?", "3 m³", ["0.3 m³", "30 m³", "7.5 m³"], "40 × 0.075 = 3 m³."],
      ["Utility locates show:", "Approximate positions, so you must dig carefully near them", ["Exact positions to the millimetre", "Only gas lines", "Property lines"], "Hand-dig or expose lines within the tolerance zone set by the utility rules."],
      ["Trenches that workers enter must be protected by:", "Sloping, shoring, or a trench box as required by provincial rules", ["A flag", "A caution tape only", "A ladder only"], "Depth thresholds for protection are set by your provincial OHS regulations."],
      ["Working near overhead power lines requires:", "Staying outside safe limits and using only qualified line-clearance workers when needed", ["Using a wet pole", "Trimming quickly", "Guessing the distance"], "Contact the utility, and never assume a line is dead."],
      ["A swale or rain garden is used to:", "Slow, collect, and infiltrate stormwater", ["Increase runoff", "Heat the soil", "Block sunlight"], "It reduces runoff and erosion."],
      ["A good pest diagnosis starts by:", "Identifying the plant and the problem, and checking for non-living causes", ["Spraying immediately", "Guessing", "Removing the plant"], "Poor watering, soil, or damage can look like pests."],
      ["Pesticide application records should include:", "Product, rate, date, location, and applicator", ["Only the date", "Only the price", "Nothing"], "Records are often required by law and help with follow-up."],
      ["A job hazard assessment before starting work is used to:", "Identify hazards and controls for the task", ["Pick a lunch break", "Order plants", "Increase speed"], "It prevents injuries and incidents."],
      ["A client asks for extra work not in the contract. You should:", "Document it with a change order and agreed price", ["Do it free without telling anyone", "Refuse everything", "Add it on the invoice later"], "Change orders avoid disputes."],
      ["Irrigation zone has dry spots. The first things to check are:", "Clogged nozzles, broken heads, misaligned spray, and pressure", ["The mower blade", "The soil pH only", "The plant labels"], "Systematic checks find the cause."],
      ["Preparing a landscape for winter may include:", "Watering evergreens before freeze-up, protecting plants from salt and wind, and cleaning equipment", ["Pruning everything hard", "Fertilizing heavily in late fall", "Leaving fuel in equipment"], "Winter damage often comes from drought, salt, and wind."]
    ])
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the training employers ask for (commonly WHMIS, first aid, and equipment orientation; requirements vary by province)", "Gain some outdoor work or volunteer experience and note the seasonal nature of the work", "Find a sponsoring employer, register your apprenticeship, and keep your hours logged"] },
    { title: "Year 1: foundations", items: ["Learn site safety, PPE, and safe lifting", "Identify common trees, shrubs, perennials, and weeds", "Learn basic planting, mulching, and mowing", "Complete your first technical training block", "Build your core kit (see Buying tools)"] },
    { title: "Year 2: soil, turf, and plant care", items: ["Learn soil texture, pH, and fertility", "Practise pruning and turf renovation", "Learn irrigation basics and water management", "Read plans and measure layouts"] },
    { title: "Year 3: construction and pest management", items: ["Build patios, walkways, and low walls to specification", "Learn integrated pest management and pesticide rules in your province", "Operate small power equipment safely", "Plan seasonal maintenance work"] },
    { title: "Year 4 and beyond: advanced", items: ["Most provinces complete the term in about three years, so use this stage to deepen skills and prepare for crew-lead roles", "Estimate jobs and plan crews and materials", "Learn drainage, grading, and stormwater features", "Mentor new apprentices", "Use the Red Seal standard to find gaps in your experience"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["Aeration", "Pulling plugs of soil from turf to relieve compaction."],
    ["Annual", "A plant that completes its life cycle in one growing season."],
    ["Backflow", "Reversed flow of water into the clean supply."],
    ["Bedding sand", "A thin sand layer on which pavers are set."],
    ["Branch collar", "The swollen ring at the base of a branch, where it joins the trunk."],
    ["Compaction", "Soil particles pressed together, reducing air and water movement."],
    ["Compost", "Decomposed organic matter used to improve soil."],
    ["Cultivar", "A plant variety selected and named for particular traits."],
    ["Deciduous", "Plants that lose their leaves each fall."],
    ["Edge restraint", "A border that holds pavers in place."],
    ["Grade", "The slope or level of the ground surface."],
    ["Hardiness zone", "A map-based rating of how cold a plant can tolerate in winter."],
    ["Hardscape", "Non-living landscape elements such as patios, walls, and paths."],
    ["Integrated pest management", "A strategy that combines monitoring and several control methods for pests."],
    ["Invasive species", "A non-native species that spreads and harms the environment."],
    ["Loam", "A balanced soil mix of sand, silt, and clay."],
    ["Mulch", "A layer of material on the soil surface that retains moisture and suppresses weeds."],
    ["NPK", "Nitrogen, phosphorus, and potassium, the main nutrients in fertilizer."],
    ["Overseeding", "Spreading grass seed over existing turf to thicken it."],
    ["Perennial", "A plant that lives for more than two years."],
    ["pH", "A measure of acidity or alkalinity on a scale of 0 to 14."],
    ["Root flare", "The widening at the base of a tree trunk where the roots begin."],
    ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
    ["Swale", "A shallow channel that carries and slows surface water."],
    ["Thatch", "A layer of dead and living stems and roots between turf and the soil."],
    ["Topsoil", "The upper layer of soil, richest in organic matter."],
    ["Turfgrass", "Grass species grown for lawns and sports fields."],
    ["WHMIS", "Canada's workplace hazardous materials information system."]
  ],
  cards: [
    { front: "Soil particles from largest to smallest", back: "Sand, silt, clay" },
    { front: "N-P-K stands for", back: "Nitrogen, phosphorus, potassium" },
    { front: "Mowing rule", back: "Remove no more than one third of blade height at once" },
    { front: "Ideal soil pH for most plants", back: "About 6 to 7" },
    { front: "Mulch depth", back: "5 to 10 cm, kept back from the trunk" },
    { front: "Volume of material", back: "Length × width × depth (all in metres gives m³)" },
    { front: "Slope percent", back: "Rise ÷ run × 100" },
    { front: "Tree root flare position", back: "At or slightly above grade" },
    { front: "Canada's plant hardiness zones", back: "0 (coldest) to 9 (mildest)" }
  ],
  jobsIntro: "Look for landscape construction and design-build firms, grounds maintenance companies, golf courses, municipal parks departments, nurseries and garden centres, and tree care companies.",
  tips: ["Bring a short resume, your safety tickets, and ID.", "Show you can work outdoors in all weather and take direction on a crew.", "Visit companies in person in late winter before the season starts, and follow up.", "Ask what tools and PPE you need and what the employer supplies."],
  forumTopics: ["Starting out", "Plants, soil, and turf", "Hardscape and irrigation", "Red Seal and exam prep", "Tools and gear", "Province and licensing questions"],
  reference: [
    {
      title: "Key formulas",
      list: [
        "Area of a rectangle = length × width, and area of a circle = π × r²",
        "Volume (m³) = area (m²) × depth (m). Convert centimetres to metres first",
        "Slope % = rise ÷ run × 100",
        "Plan scale: real length = plan length × scale (at 1:100, 1 cm is 1 m)",
        "Nutrient weight in fertilizer = bag weight × percent nutrient ÷ 100",
        "Order quantity = area × (1 + waste factor)"
      ]
    },
    {
      title: "Conversions",
      list: [
        "1 in = 25.4 mm, and 1 ft = 0.3048 m",
        "1 m³ = 1000 L, and 1 m³ ≈ 1.308 cubic yards",
        "1 ha = 10 000 m², and 1 acre ≈ 4047 m²",
        "1 kg ≈ 2.205 lb",
        "1 L ≈ 0.264 US gal, and 1 Imperial gal ≈ 4.546 L"
      ]
    },
    {
      title: "Fertilizer numbers (N-P-K)",
      table: {
        head: ["Nutrient", "Symbol", "Main role"],
        rows: [
          ["Nitrogen", "N", "Leaf and shoot growth, green colour"],
          ["Phosphorus", "P", "Root development, flowering, and energy transfer"],
          ["Potassium", "K", "Overall plant health, stress tolerance, and winter hardiness"]
        ]
      },
      note: "Labels list N, P₂O₅, and K₂O percentages by weight. Base rates on a soil test and the product label."
    },
    {
      title: "Soil texture and drainage",
      table: {
        head: ["Soil", "Particle size", "Drainage and water holding"],
        rows: [
          ["Sand", "Largest", "Drains fast, holds little water"],
          ["Silt", "Medium", "Moderate drainage and holding"],
          ["Clay", "Smallest", "Drains slowly, holds much water"],
          ["Loam", "Balanced mix", "Good drainage and water holding"]
        ]
      }
    },
    {
      title: "Planting and care pointers",
      list: [
        "Trees: dig a wide, shallow hole, set the root flare at or above grade, and mulch 5 to 10 cm deep away from the trunk",
        "Pruning: cut just outside the branch collar, and use the three-cut method for large branches",
        "Turf: mow at a consistent height, never remove more than one third of the blade, and water deeply and less often",
        "Paver patios: compacted granular base in lifts, about 25 mm of bedding sand, and edge restraint",
        "Safety: locate utilities before digging, wear CSA-approved PPE, and complete training before using power equipment"
      ],
      note: "Confirm rates, depths, and rules against your plans, product labels, and provincial regulations."
    }
  ]
});
