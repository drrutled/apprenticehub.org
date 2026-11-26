// Baker guide. Practice questions are original study aids, not official Red Seal exam questions.

const bakerPositions = [2, 0, 3, 1, 1, 3, 0, 2, 3, 1, 2, 0, 0, 3, 1, 2, 2, 0, 1, 3];
const bakerQuestions = (rows) => rows.map(([q, right, wrong, explain], i) => {
  const answer = bakerPositions[i % bakerPositions.length];
  const options = [...wrong];
  options.splice(answer, 0, right);
  return { q, options, answer, explain };
});

registerTrade({
  id: "baker",
  store: "baker",
  title: "Baker",
  name: "Baker",
  short: "baking",
  category: "Food · Production · Pastry",
  summary: "Bakers scale, mix, ferment, shape, bake, and finish breads, pastries, cakes, and cookies, working to formulas while keeping food safe and quality consistent.",
  work: "Bakers often start early, work around hot ovens and heavy mixers, and follow production schedules that depend on fermentation and bake times. The work blends science, precision, and craft, from lean breads to laminated pastry and decorated cakes. Many bakers work in retail bakeries, wholesale plants, grocery in-store bakeries, hotels, and restaurants.",
  duration: "Usually about 3 years (varies by province)",
  union: "BCTGM (Bakery, Confectionery, Tobacco Workers and Grain Millers International Union)",
  unionUrl: "https://bctgm.org/",
  jobSearch: "baker apprentice",
  journeySearch: "baker",
  aliases: "bakery pastry bread cake dough baking production baker red seal food",
  tools: ["Digital baking scale (g and kg)", "Bench scraper and dough cutter", "Probe thermometer and oven thermometer", "Lame or bread razor and pastry brushes", "Rolling pin and piping bags", "Slip-resistant CSA footwear, oven mitts, and apron"],
  insight: {
    skills: ["Accurate scaling by weight", "Dough handling and fermentation control", "Reading formulas and baker's percentages", "Time management and production planning"],
    hazards: ["Burns: use dry mitts, treat oven racks as hot, and cool burns with running water", "Flour dust: combustible and an irritant, so clean up and avoid dust clouds", "Mixer injuries: stop and lock out before reaching into a bowl", "Slips and heavy lifting: keep floors clean, use carts, and ask for help with bags"],
    settings: ["Retail and artisan bakeries", "Wholesale and industrial plants", "Grocery in-store bakeries", "Hotels, restaurants, and institutions"]
  },
  toolGroups: [
    {
      title: "Day-one kit, buy once and buy well",
      note: "Professional-grade gear that holds up to daily use. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first, and what your school requires.",
      items: [
        { name: "Digital kitchen scale (1 g precision, 5 kg capacity)", why: "Bakers weigh almost everything. A reliable scale with a tare button is the most important tool you own.", search: "digital kitchen scale 1g 5kg tare baking" },
        { name: "Stainless bench scraper and plastic dough scraper", why: "Divides dough, cleans the bench, and moves sticky dough without tearing it.", search: "stainless steel bench scraper plastic dough scraper" },
        { name: "Instant-read probe thermometer", why: "Checks dough, water, and finished product temperatures for quality and food safety.", search: "ThermoWorks Thermapen instant read thermometer" },
        { name: "Oven thermometer", why: "Ovens drift from their set temperature. A hanging thermometer shows what the oven is really doing.", search: "oven thermometer stainless steel hanging" },
        { name: "Bread lame or razor blade handle", why: "A sharp blade scores loaves cleanly so they expand where you intend.", search: "bread lame scoring razor blade" },
        { name: "Pastry brushes (natural or silicone)", why: "Egg wash, butter, glazes, and removing excess flour. Keep separate brushes for different jobs.", search: "pastry brush silicone set" },
        { name: "Heat-resistant oven mitts and a cotton side towel", why: "Dry, heat-rated protection prevents burns when moving trays and pans.", search: "heat resistant oven mitts baker" },
        { name: "CSA-approved slip-resistant footwear", why: "Flour, grease, and wet floors cause falls. Comfortable shoes matter on long shifts.", search: "CSA slip resistant kitchen work shoes Skechers Blundstone" },
        { name: "Baker's apron, hat or hairnet, and chef's whites", why: "Hygiene and hair control are required, and an apron protects you from heat and spills.", search: "baker apron hairnet chef jacket" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what your bakery and school expect.",
      items: [
        { name: "Rolling pins (straight and tapered)", why: "Even thickness for pie dough, cookies, and laminated dough.", search: "French rolling pin tapered hardwood" },
        { name: "Piping bags and assorted tips", why: "Used for choux, icing, meringues, and decorating.", search: "piping bags and tips set Wilton Ateco" },
        { name: "Offset spatulas (small and large)", why: "Spreads icing, fillings, and lifts delicate items evenly.", search: "offset spatula set stainless" },
        { name: "Dough docker and pastry wheel cutter", why: "Docking controls puffing, and the wheel cuts neat strips of dough.", search: "dough docker pastry wheel cutter" },
        { name: "Banneton baskets and couche linen", why: "Support shaped loaves during final proof and give crust texture.", search: "banneton proofing basket couche linen" },
        { name: "Cake turntable and serrated knife", why: "Level and decorate cakes cleanly, and slice without crushing crumb.", search: "cake turntable serrated bread knife Mercer" },
        { name: "Silicone mats and parchment", why: "Prevent sticking and give consistent bottoms on baked goods.", search: "silicone baking mat parchment paper half sheet" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the bakery. Ask before buying.",
      items: [
        { name: "Spiral or planetary mixer", why: "Commercial mixers are the bakery's equipment. Learn to use the guards and controls safely.", search: "planetary mixer commercial guard bakery" },
        { name: "Dough sheeter and divider-rounder", why: "Production equipment for laminated dough and consistent portions. Employer-supplied.", search: "dough sheeter bakery commercial" },
        { name: "Refractometer or sugar thermometer", why: "Used for syrups, sugar work, and fillings when you move into pastry.", search: "candy sugar thermometer refractometer brix" },
        { name: "Chocolate tempering thermometer and moulds", why: "Tempering needs accurate temperatures. Useful in confectionery and pastry work.", search: "chocolate tempering thermometer polycarbonate moulds" },
        { name: "Cake decorating tool kit", why: "Palettes, scribers, and brushes for finishing and detail work.", search: "cake decorating tool kit fondant" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for formulas, math, and food safety study. Check with your school and exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific or basic calculator (Casio fx-991 or similar)", why: "Baker's percentages, scaling factors, costing, and temperature math.", search: "Casio fx-991 scientific calculator" },
        { name: "Spiral notebook and waterproof pocket notebook", why: "Record formulas, timings, and oven notes. Waterproof paper survives a wet bakery.", search: "Rite in the Rain pocket notebook" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic, which also helps with Red Seal exam review.", search: "binder dividers highlighters" },
        { name: "Baking science textbook for professional bakers", why: "Explains ingredient functions, fermentation, and formulas. Ask your school which edition they use.", search: "professional baking Wayne Gisslen textbook" },
        { name: "Food safety study guide (Canadian)", why: "Food handler and safe-food-preparation training varies by province. Use a Canadian resource.", search: "Canadian food handler certification study guide" },
        { name: "Metric conversion chart", why: "Handy when you meet older imperial recipes. Keep it with your notes.", search: "kitchen metric conversion chart magnet" },
        { name: "Permanent markers and masking tape", why: "Label dough, proofing racks, and allergen-controlled items.", search: "Sharpie permanent marker masking tape labels" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare. Search for the Baker trade profile from here.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Canadian Food Inspection Agency (CFIA)", desc: "Federal food safety information, including the Safe Food for Canadians Regulations and allergen labelling.", url: "https://inspection.canada.ca/" },
        { name: "Food Allergy Canada", desc: "Allergen information and cross-contact guidance for food businesses.", url: "https://foodallergycanada.ca/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Workplace safety facts on lifting, burns, slips, and hazardous products.", url: "https://www.ccohs.ca/" },
        { name: "BCTGM", desc: "Union information for bakery and confectionery workers.", url: "https://bctgm.org/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local rules.",
      items: [
        { name: "Bread fermentation and proofing", desc: "How yeast works and how to judge proof.", url: "https://www.youtube.com/results?search_query=bread+fermentation+proofing+baker+explained" },
        { name: "Baker's percentages explained", desc: "Reading and scaling formulas using baker's percentages.", url: "https://www.youtube.com/results?search_query=baker%27s+percentage+explained+bread+formula" },
        { name: "Desired dough temperature", desc: "Working out water temperature with friction factor.", url: "https://www.youtube.com/results?search_query=desired+dough+temperature+calculation+baker" },
        { name: "Shaping loaves and rolls", desc: "Boules, batards, baguettes, and dinner rolls.", url: "https://www.youtube.com/results?search_query=bread+shaping+techniques+baker+batard+boule" },
        { name: "Laminated dough and croissants", desc: "Butter blocks, folds, and proofing croissants.", url: "https://www.youtube.com/results?search_query=croissant+lamination+professional+baker" },
        { name: "Pâte à choux and pastry cream", desc: "Choux paste, eclairs, and pastry cream basics.", url: "https://www.youtube.com/results?search_query=pate+a+choux+eclairs+pastry+cream+technique" },
        { name: "Chocolate tempering", desc: "Why and how chocolate is tempered.", url: "https://www.youtube.com/results?search_query=chocolate+tempering+technique+pastry+chef" },
        { name: "Bakery food safety and allergens", desc: "Cross-contact and sanitation in bakeries.", url: "https://www.youtube.com/results?search_query=bakery+food+safety+allergen+cross+contact" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for baking yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: baker apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=baker+apprentice+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: baking science podcast", desc: "Talks on gluten, fermentation, and ingredient function.", url: "https://www.youtube.com/results?search_query=baking+science+podcast+bread+fermentation" },
        { name: "YouTube: pastry chef interview podcast", desc: "Working bakers and pastry chefs talk about technique and career paths.", url: "https://www.youtube.com/results?search_query=pastry+chef+interview+podcast" },
        { name: "YouTube: artisan bakery podcast", desc: "Sourdough, scheduling, and running production in smaller bakeries.", url: "https://www.youtube.com/results?search_query=artisan+bakery+owner+podcast+sourdough" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, business, and leadership.",
      items: [
        { name: "YouTube: Red Seal baker exam prep (talk-through)", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+baker+exam+preparation" },
        { name: "YouTube: bakery business and costing podcast", desc: "Pricing, food cost, and running a bakery.", url: "https://www.youtube.com/results?search_query=bakery+business+costing+pricing+podcast" },
        { name: "YouTube: leading a kitchen team and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
      ]
    }
  ],
  practiceBank: {
    1: bakerQuestions([
      ["Which temperature range is commonly called the danger zone for food in Canada?", "4 °C to 60 °C", ["0 °C to 20 °C", "30 °C to 45 °C", "60 °C to 100 °C"], "Bacteria multiply fastest between about 4 °C and 60 °C, so keep perishable food cold or hot."],
      ["About how much does 1 L of water weigh?", "1 kg", ["100 g", "500 g", "1.5 kg"], "Water is 1 kg per litre, which is why bakers can scale water by weight or volume."],
      ["In baker's percentages, which ingredient is always 100%?", "Total flour", ["Total dough weight, including all ingredients", "Water, since it is the largest liquid ingredient", "Yeast, because it drives the fermentation"], "All other ingredients are expressed as a percentage of the flour weight."],
      ["A formula uses 1000 g flour and 650 g water. What is the hydration?", "65%", ["35%", "6.5%", "165%"], "Hydration = water ÷ flour × 100 = 650 ÷ 1000 × 100 = 65%."],
      ["Why do professional bakers weigh ingredients instead of measuring by volume?", "Weight is more accurate and repeatable", ["Weight is always faster, even for tiny amounts of yeast", "Volume cannot be measured at all in metric units", "Scales never need calibration, so errors cannot happen"], "Flour packs differently each time you scoop, but a gram is always a gram."],
      ["Where do you find the hazards and first aid for an oven cleaner?", "Safety Data Sheet (SDS)", ["The delivery invoice from the supplier", "The cleaning schedule posted by the sink", "The oven manual cover page"], "The SDS lists hazards, handling, PPE, and first aid. WHMIS training explains how to read it."],
      ["Why should flour dust be controlled in a bakery?", "It can irritate lungs and is combustible in dust clouds", ["It makes dough sticky and hard to scale accurately", "It improves oven spring and crust colour in lean breads", "It only changes the colour of the floor and equipment"], "Clean up with a suitable vacuum or damp methods and avoid blowing flour with compressed air."],
      ["After cracking raw eggs, you should:", "Wash your hands before touching other food", ["Wipe your hands on your apron and keep working", "Carry on, since eggs are sterile inside the shell", "Rinse the eggs with sanitizer before using them"], "Raw eggs can carry Salmonella. Wash hands, then clean and sanitize surfaces."],
      ["Which of these is a priority food allergen in Canada?", "Sesame", ["Rice", "Carrot", "Cinnamon"], "Canada's priority allergens include peanuts, tree nuts, sesame, wheat, eggs, milk, soy, fish, shellfish, mustard, and sulphites."],
      ["In bread dough, salt mainly:", "Adds flavour, strengthens gluten, and slows fermentation", ["Kills all the yeast so dough cannot rise at all during proof", "Replaces some of the flour so less is needed in the formula", "Raises the dough temperature during mixing"], "Salt is usually about 2% of flour weight in lean breads. Leaving it out gives fast, bland, slack dough."],
      ["About what is 200 °C in degrees Fahrenheit?", "392 °F", ["328 °F, from adding 32 before converting", "212 °F, which is the boiling point of water", "428 °F, from multiplying by 2 and adding 28"], "°F = °C × 9 ÷ 5 + 32 = 360 + 32 = 392."],
      ["Before reaching into a running dough mixer bowl you should:", "Stop the mixer fully and lock it out", ["Slow it to the lowest speed and reach in quickly", "Wear loose gloves to protect your hands", "Hold the guard up with one hand while you scrape"], "Mixers can pull in hands and clothing. Stop, wait for it to stop moving, and lock out as required."],
      ["Which is the safest way to handle a heavy flour bag?", "Bend your knees, keep it close, and use a cart or help for heavy loads", ["Twist at the waist while holding it at arm's length", "Lift with straight legs and a rounded back to protect the knees", "Throw it onto your shoulder in one quick motion"], "Good posture and mechanical aids prevent back injuries."],
      ["Gluten forms when:", "Wheat flour proteins are hydrated and mixed", ["Fat is melted into the flour and water", "Yeast is frozen before it is mixed in", "Sugar is caramelized in the mixing bowl"], "Glutenin and gliadin link up with water and mixing, giving dough strength and stretch."],
      ["What does yeast produce when it ferments sugars?", "Carbon dioxide and alcohol", ["Oxygen and water, which make the dough wetter", "Salt and starch, which firm up the crumb", "Pure gluten, which gives the dough strength"], "The gas inflates the dough and the alcohol evaporates in the oven."],
      ["About how many grams are in one pound?", "454 g", ["28 g", "100 g", "1000 g"], "1 lb = 453.6 g, and 1 oz is about 28.35 g."]
    ]),
    2: bakerQuestions([
      ["In an autolyse, you:", "Rest flour and water before adding salt and yeast", ["Bake the dough twice for a thicker crust", "Freeze the flour overnight before mixing it with water and yeast", "Mix only the fat and sugar until light and fluffy"], "The rest hydrates flour and starts gluten development, often shortening mixing."],
      ["A dough has a desired temperature of 24 °C. Flour is 21 °C, the room is 23 °C, and the friction factor is 12 °C. What is the water temperature (three-factor method)?", "16 °C", ["24 °C, the same as the desired dough temperature", "30 °C, from adding the friction factor to the desired temperature", "8 °C, from subtracting the room temperature only"], "Water = (24 × 3) − (21 + 23 + 12) = 72 − 56 = 16 °C."],
      ["Proofing refers to:", "The final rise of shaped dough before baking", ["Mixing flour and water together to form dough", "Cooling bread on a rack after baking", "Cutting loaves with a razor before baking"], "Proof is judged by dough feel, volume, and a gentle finger poke."],
      ["A poolish is a preferment made of:", "Equal weights of flour and water with a little yeast", ["Flour and salt only, mixed with no water", "Butter and sugar creamed until light and fluffy", "Old baked bread soaked and mashed into the dough"], "Equal weights means 100% hydration, which ferments to a bubbly liquid."],
      ["Overproofed dough typically:", "Collapses, bakes with weak oven spring, and tastes overly sour or yeasty", ["Bakes with a very tall rise and a springy, tight crumb that stays moist for days", "Has a thicker crust and a dense, gummy centre", "Becomes gluten-free because the gluten has fully dissolved"], "The gluten structure weakens and gas escapes."],
      ["Why are loaves scored before baking?", "To control where the loaf expands", ["To add salt to the crust surface", "To remove excess gluten from the surface", "To cool the loaf faster after it bakes"], "Without scoring, the crust can burst in random places."],
      ["Steam in the first minutes of a bake helps lean bread by:", "Keeping the crust soft so the loaf expands, then giving a crisp, glossy crust", ["Raising the oven temperature above the thermostat setting", "Killing the yeast immediately so the loaf cannot rise", "Adding salt to the surface so the crust browns faster"], "Steam delays crust setting and gelatinizes surface starch."],
      ["A sourdough starter is a culture of:", "Wild yeast and lactic acid bacteria", ["Commercial baking powder and flour only", "Only baker's yeast, with no bacteria present", "Only lactic acid bacteria, with no yeast present"], "The bacteria produce acids that give sourdough its flavour."],
      ["Brioche is an enriched dough because it contains a high amount of:", "Eggs, butter, and sugar", ["Water only, with no fat or sugar added", "Rye flour, which gives a dark and dense crumb", "Salt, which makes the dough rich and tender"], "Enrichment gives a tender crumb and rich flavour."],
      ["The creaming method begins by:", "Beating fat and sugar together to trap air", ["Melting the flour with the butter in a pan", "Boiling the eggs before folding them in", "Mixing all the dry ingredients in last of all"], "Air cells created while creaming help leaven cakes and cookies."],
      ["For flaky pie dough you should:", "Keep the fat cold and avoid overmixing", ["Knead until the dough is smooth and elastic", "Warm the fat first so it spreads evenly through the flour", "Use bread flour with extra water for a strong dough"], "Cold fat pieces make flaky layers, and minimal mixing limits gluten."],
      ["Pâte à choux rises mainly because of:", "Steam", ["Yeast", "Baking soda", "Whipped egg whites alone"], "The wet paste turns to steam in a hot oven, puffing and then setting."],
      ["Laminated dough such as croissant dough gets its layers from:", "Folding butter and dough together repeatedly", ["Mixing in whole eggs until the dough is airy", "Using extra yeast so the dough rises in sheets", "Baking at a very low temperature for several hours"], "Water in the butter and dough turns to steam and separates the layers."],
      ["A recipe makes 24 muffins and you need 60. What is the scaling factor?", "2.5", ["0.4, from dividing 24 by 60", "36, from subtracting 24 from 60", "1.5, from adding half of 24 to the batch"], "Desired yield ÷ recipe yield = 60 ÷ 24 = 2.5."],
      ["Compared with bread flour, cake flour is:", "Lower in protein, giving a more tender crumb", ["Higher in protein, giving a chewy and strong crumb", "Made from rye, giving a dense and sour crumb", "Always whole grain, with the bran left in"], "Lower protein forms less gluten, which is ideal for tender cakes."],
      ["Why should baked goods cool before packaging?", "Trapped steam condenses and causes sogginess and mould", ["Cooling adds protein that firms up the crumb", "Warm packaging cannot be applied because of colour changes", "Cooling removes allergens from the surface"], "Condensation inside packaging shortens shelf life."]
    ]),
    3: bakerQuestions([
      ["Retarding dough in a cold cooler (about 2 to 4 °C) mainly:", "Slows fermentation and develops flavour", ["Kills the yeast permanently so dough never rises again", "Removes gluten from the dough while it rests", "Adds salt to the dough through the cooler air"], "Retarding gives flexible scheduling and deeper flavour."],
      ["The Maillard reaction is browning caused by:", "Reactions between amino acids and reducing sugars", ["Sugar alone melting without any protein present", "Yeast fermentation producing coloured compounds", "Steam condensing and staining the crust surface"], "It gives crust colour and baked flavour."],
      ["Caramelization is:", "The browning of sugar when heated", ["Browning of protein only, with no sugar involved", "A way to leaven cakes and cookies with sugar", "A cooling method used to set sugar syrups"], "Caramelization does not need protein, unlike the Maillard reaction."],
      ["Italian meringue is made by:", "Pouring hot sugar syrup into whipping egg whites", ["Whipping whites with cold granulated sugar until stiff", "Heating whites and sugar over a bain-marie while whisking", "Folding egg yolks into whipped whites and sugar"], "The hot syrup partly cooks the whites, giving a stable meringue."],
      ["The soft ball stage of sugar syrup is roughly:", "112 to 116 °C", ["80 to 90 °C, the temperature of a warm water bath", "149 to 154 °C, which is the hard crack stage", "180 to 190 °C, where sugar starts to caramelize"], "Soft ball suits fondant and some fillings. Hard crack is roughly 149 to 154 °C."],
      ["Chocolate is tempered to:", "Form stable cocoa butter crystals for snap and gloss", ["Add sugar so the chocolate sets harder", "Remove all of the fat so it can be moulded", "Sterilize it before it is used with fillings"], "Properly tempered chocolate sets glossy, snaps cleanly, and resists bloom."],
      ["Greyish streaks on chocolate are most likely:", "Fat bloom from poor tempering or temperature swings", ["Allergen contamination from shared equipment or unwashed trays", "Yeast growth from humid storage conditions", "Gluten from flour dust in the bakery air"], "Bloom is cosmetic but signals storage or tempering problems."],
      ["Bread staling is mainly due to:", "Starch retrogradation", ["Yeast regrowing inside the cooled crumb", "Gluten dissolving as the bread cools down", "Salt crystallizing slowly inside the loaf"], "Starch molecules recrystallize as bread cools and ages."],
      ["Dough that is too warm after mixing will usually:", "Ferment too fast and have weaker flavour and structure", ["Never ferment, because heat kills gluten in the flour", "Be perfectly extensible and easy to shape for hours", "Lose all its yeast in the first few minutes of mixing"], "Controlling dough temperature is key to consistent results."],
      ["Double-acting baking powder reacts:", "Once when wet and again with heat", ["Only when cold, in the refrigerator", "Only when it contacts fat in the batter", "Only when it meets salt in the formula"], "It releases gas in the bowl and again in the oven."],
      ["Baking soda needs which type of ingredient to react fully?", "An acid, such as buttermilk or lemon juice", ["A fat, such as butter or shortening", "Salt, which makes the soda foam strongly", "Cold water only, with no other ingredients"], "Baking soda is a base. Without acid it leaves a soapy taste and poor rise."],
      ["To reduce cross-contact when baking a gluten-free product, you should:", "Use clean or dedicated equipment and separate storage", ["Sift the flour twice before mixing it in", "Use the same tray after giving it a quick wipe", "Bake it last on a shared tray in the same oven"], "Even small amounts of wheat flour can cause problems for those with celiac disease."],
      ["A rack oven or convection oven compared with a deck oven often requires:", "A lower temperature or shorter bake time", ["No change in temperature or bake time at all", "Much longer time at the same temperature as the deck oven", "Removing the steam from the oven completely"], "Moving air transfers heat faster, so adjust and test."],
      ["Cream-filled pastries should be held at:", "4 °C or colder", ["20 °C, the normal room temperature of the bakery", "35 °C, to keep the filling soft and spreadable", "50 °C, warm enough to slow bacterial growth"], "Dairy and egg fillings are potentially hazardous foods and need cold holding."],
      ["Which label detail is required when a food has a durable life of 90 days or less in Canada?", "A best before date", ["The oven temperature", "A baker's name only", "A tare weight"], "Check CFIA guidance for the exact requirements for your product."],
      ["A scale that drifts or reads inconsistently should be:", "Taken out of use, checked, and calibrated or replaced", ["Ignored if the error is only a few grams on a large batch", "Tapped or moved around until it reads correctly", "Used only for weighing water and liquids"], "Inaccurate weights wreck formulas and costing."]
    ]),
    4: bakerQuestions([
      ["A pastry costs $0.90 in ingredients and sells for $3.00. What is the food cost percentage?", "30%", ["3%, from dropping the decimal", "70%, which is the profit margin and not the food cost", "90%, from reading the cost as a percentage"], "Food cost % = 0.90 ÷ 3.00 × 100 = 30%."],
      ["A critical control point (CCP) in a food safety plan is a step where:", "Control is essential to prevent or eliminate a hazard", ["Ingredients are ordered from the supplier each week", "Staff take their scheduled breaks and clean up the bench", "Labels are printed for the finished product"], "A CCP has a measurable limit, monitoring, and a corrective action."],
      ["A dough never rose after two hours. Which is the most likely cause?", "Yeast killed by very hot water (about 60 °C or more)", ["Too much flour dust in the bakery room air", "Proofing the dough at 27 °C in a proof box", "A scored top on the shaped dough before it was proofed"], "High temperature kills yeast, so check water temperature before mixing."],
      ["Baker's percentages help when you:", "Compare, scale, and adjust formulas of any batch size", ["Only measure the baked colour of the crust on each tray", "Replace the scale with volume measuring cups and spoons", "Check the oven pressure before preheating"], "Because they are ratios, they work for 1 kg or 1000 kg of flour."],
      ["A formula has 5 kg of total flour and salt at 2%. How much salt is needed?", "100 g", ["10 g", "250 g", "1000 g"], "2% × 5000 g = 100 g."],
      ["A good allergen control program includes:", "Segregation, scheduling, cleaning verification, and label checks", ["Labels only, with no other controls", "Hoping staff remember which products have allergens", "Using the same utensils for every product to save time"], "Controls must cover ingredients, equipment, rework, and packaging."],
      ["When preparing a production schedule you generally:", "Work backwards from the time product is needed", ["Start with the last item sold the day before", "Bake everything at once to save oven time", "Skip proof times to finish earlier"], "Mixing, fermentation, proof, bake, and cooling times drive the start time."],
      ["Your bakery makes a new product for sale. A trusted way to confirm shelf life is:", "Testing the product under storage conditions and recording results", ["Guessing from the date on similar products", "Copying a competitor's date from their label", "Using the longest date available to the bakery"], "Shelf life should be supported by testing and sound food safety practice."],
      ["Preventive maintenance on a bakery oven or mixer is done to:", "Reduce breakdowns and safety hazards", ["Use more energy so equipment warms up faster", "Void warranties on the equipment", "Avoid having to clean the equipment"], "Scheduled checks and lubrication catch issues early."],
      ["Loaves from one bakery batch show pale crust and low volume, while the oven has been serviced. What do you check first?", "Formula weights, dough temperature, proof time, and oven thermometer readings", ["Only the colour of the apron the baker wears that day", "Nothing, as the result is random from batch to batch", "Only the label on the finished packaging, since it affects the bake"], "Systematically checking inputs and process steps finds the cause."],
      ["A flour supplier changes flour and your bread behaves differently. You should:", "Test small batches and adjust hydration or mixing", ["Keep the formula unchanged for every flour", "Double the yeast in the formula to compensate", "Stop baking until the old flour returns"], "Absorption and strength vary between flours."],
      ["Under the Safe Food for Canadians Regulations, many food businesses must have:", "A preventive control plan and records", ["No written plans, since small bakeries are exempt", "Only a staff schedule posted in the break room", "A menu board listing the allergens in every product"], "The plan documents hazards, controls, and corrective actions. Requirements depend on your licence and activity."],
      ["Rework (leftover dough or product reused in a new batch) should be:", "Handled under written rules, with allergen and labelling checks", ["Added to any product freely, whatever its ingredients", "Kept for a week at room temperature before use", "Always discarded, with no exceptions allowed"], "Rework can introduce allergens and spoilage risks."],
      ["A trainee keeps overbaking pastries. A good journeyperson response is:", "Demonstrate, explain the doneness signs, and check back", ["Take over the job without explaining anything", "Ignore it and hope they learn by themselves", "Give them the hardest job to test their limits"], "Mentoring builds skills and consistency."],
      ["Yield loss in bakery costing means:", "Ingredient or product lost to scraps, trim, and waste, which affects true cost", ["Extra profit from product that sells above the usual price each day", "Extra flour that is added to the formula for safety", "A tax charged on bakery products at the point of sale"], "Accurate costing includes expected yield and waste."],
      ["Which is the best way to cool a large batch of cooked filling safely?", "Spread in shallow pans and cool quickly, then refrigerate", ["Leave the pot on the counter overnight to cool slowly at room temperature", "Cover it tightly while hot and place it in the cooler", "Add warm water to thin it so it cools evenly"], "Shallow pans and quick cooling shorten time in the danger zone."]
    ])
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the training employers ask for (commonly food handler certification and WHMIS; requirements vary by province)", "Work or volunteer in a bakery or kitchen if you can, and note early mornings and standing time", "Find a sponsoring employer, register your apprenticeship, and keep your hours logged"] },
    { title: "Year 1: foundations", items: ["Learn food safety, sanitation, allergen control, and safe work around ovens and mixers", "Scale accurately and learn baker's percentages", "Make basic yeast breads, rolls, quick breads, muffins, and cookies", "Complete your first technical training block", "Build your core kit (see Buying tools)"] },
    { title: "Year 2: doughs, pastry, and cakes", items: ["Learn fermentation, desired dough temperature, preferments, and shaping", "Make pie dough, laminated dough, choux, and basic cakes and icings", "Learn oven types, steam, and bake-time control", "Read production schedules and work to them"] },
    { title: "Year 3: specialty and decoration", items: ["Learn sourdough, enriched doughs, tarts, and fillings", "Work with chocolate, sugar, and finishing and decorating", "Handle gluten-free and allergen-sensitive production", "Troubleshoot product faults and adjust formulas"] },
    { title: "Year 4 and beyond: advanced", items: ["Most provinces complete the term in about three years, so use this stage to deepen skills and prepare for leadership", "Plan production, order supplies, and calculate costs and yields", "Learn food safety plan basics such as critical control points and records", "Mentor new apprentices", "Use the Red Seal standard to find gaps in your experience"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["Absorption", "The amount of water flour can take up, affecting dough consistency."],
    ["Allergen", "A substance that can cause an allergic reaction, such as wheat, milk, eggs, nuts, or sesame."],
    ["Autolyse", "A rest of flour and water before salt and yeast are added."],
    ["Baker's percentage", "Each ingredient as a percentage of the total flour weight."],
    ["Bench rest", "A short rest after dividing and rounding so dough relaxes before shaping."],
    ["Bloom (chocolate)", "A white or grey film on chocolate from fat or sugar rising to the surface."],
    ["Cross-contact", "Transfer of an allergen from one food or surface to another."],
    ["Crumb", "The interior texture of bread or cake."],
    ["DDT", "Desired dough temperature, the target temperature at the end of mixing."],
    ["Docking", "Piercing dough with small holes to stop it puffing unevenly."],
    ["Enriched dough", "Dough containing notable amounts of fat, eggs, sugar, or milk."],
    ["Fermentation", "Yeast converting sugars to carbon dioxide and alcohol."],
    ["Friction factor", "The temperature added to dough by the mixer during mixing."],
    ["Gluten", "The elastic protein network formed when wheat flour is hydrated and mixed."],
    ["Hydration", "Water as a percentage of flour weight in a dough."],
    ["Laminating", "Layering dough and fat through folding, as in croissants."],
    ["Lean dough", "Dough with little or no fat, sugar, or eggs, such as baguette."],
    ["Maillard reaction", "Browning from amino acids reacting with sugars."],
    ["Mise en place", "Having all ingredients and tools ready before starting."],
    ["Oven spring", "The quick rise of dough in the first minutes of baking."],
    ["Preferment", "A fermented flour, water, and yeast mixture added to the final dough."],
    ["Proof", "The final rise of shaped dough before baking."],
    ["Retarding", "Slowing fermentation by chilling the dough."],
    ["Scaling", "Weighing ingredients, or dividing dough into set weights."],
    ["Score", "A cut on the surface of dough that controls expansion."],
    ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
    ["Sourdough", "Bread leavened by a culture of wild yeast and lactic acid bacteria."],
    ["Tempering", "Heating and cooling chocolate to form stable crystals."],
    ["WHMIS", "Canada's workplace hazardous materials information system."]
  ],
  cards: [
    { front: "Danger zone for food", back: "4 °C to 60 °C" },
    { front: "Baker's percentage base", back: "Total flour weight is 100%" },
    { front: "Hydration formula", back: "Water ÷ flour × 100" },
    { front: "Three-factor water temperature", back: "(DDT × 3) − (flour temp + room temp + friction factor)" },
    { front: "Celsius to Fahrenheit", back: "°F = °C × 9 ÷ 5 + 32" },
    { front: "Scaling factor", back: "Desired yield ÷ recipe yield" },
    { front: "Why steam in the oven?", back: "Keeps the crust soft early for oven spring, then gives a crisp, glossy crust." },
    { front: "Priority allergens in Canada (some)", back: "Peanuts, tree nuts, sesame, wheat, eggs, milk, soy, fish, shellfish, mustard, sulphites" },
    { front: "Food cost percentage", back: "Ingredient cost ÷ selling price × 100" }
  ],
  jobsIntro: "Look for retail and artisan bakeries, wholesale and industrial bakeries, grocery in-store bakeries, hotels, restaurants, and institutional kitchens.",
  tips: ["Bring a short resume, your food handler certificate if you have one, and ID.", "Show you can start early, stand for long shifts, and follow a schedule.", "Visit bakeries in person at quiet times of day, and follow up.", "Ask what you need to bring and what the employer supplies."],
  forumTopics: ["Starting out", "Bread and fermentation", "Pastry and cakes", "Red Seal and exam prep", "Tools and gear", "Province and food safety questions"],
  reference: [
    {
      title: "Key formulas",
      list: [
        "Baker's percentage = ingredient weight ÷ total flour weight × 100",
        "Hydration % = water weight ÷ flour weight × 100",
        "Scaling factor = desired yield ÷ recipe yield",
        "Three-factor water temperature = (DDT × 3) − (flour temp + room temp + friction factor)",
        "Preferment dough: use (DDT × 4) − (flour + room + preferment + friction factor) when a preferment is included",
        "Food cost % = ingredient cost ÷ selling price × 100"
      ]
    },
    {
      title: "Conversions",
      list: [
        "1 kg = 1000 g, and 1 lb = 453.6 g",
        "1 oz ≈ 28.35 g",
        "1 L of water ≈ 1 kg",
        "°F = °C × 9 ÷ 5 + 32, and °C = (°F − 32) × 5 ÷ 9",
        "1 tsp = 5 mL, 1 tbsp = 15 mL, and a Canadian metric cup = 250 mL"
      ]
    },
    {
      title: "Oven temperatures",
      table: {
        head: ["°C", "°F (rounded)", "Common uses"],
        rows: [
          ["150", "300", "Meringues dried slowly, slow baking"],
          ["175 to 180", "350 to 356", "Cakes, cookies, muffins"],
          ["200", "392", "Rolls, enriched bread, puff pastry start"],
          ["220", "428", "Lean breads and pizza, with steam in the first minutes"],
          ["230 to 250", "446 to 482", "Hearth breads and baguettes in a hot deck oven"]
        ]
      },
      note: "Settings are typical starting points only. Follow the formula, your oven's behaviour, and your instructor or journeyperson."
    },
    {
      title: "Typical baker's percentages (lean bread)",
      table: {
        head: ["Ingredient", "Typical range (% of flour)"],
        rows: [
          ["Flour", "100"],
          ["Water", "60 to 70, higher for rustic doughs"],
          ["Salt", "1.8 to 2.2"],
          ["Instant dry yeast", "0.5 to 1"],
          ["Preferment", "Varies with the formula"]
        ]
      },
      note: "Ranges depend on flour, method, and product. Always follow the house formula."
    },
    {
      title: "Sugar stages (syrup temperatures)",
      table: {
        head: ["Stage", "Approx. °C", "Used for"],
        rows: [
          ["Soft ball", "112 to 116", "Fondant, some buttercreams"],
          ["Firm to hard ball", "118 to 130", "Caramels, marshmallow, nougat"],
          ["Soft crack", "132 to 143", "Taffy"],
          ["Hard crack", "149 to 154", "Brittle, hard candy"]
        ]
      },
      note: "Use a calibrated thermometer, and adjust for altitude as your instructor directs."
    },
    {
      title: "Safe food and allergen pointers",
      list: [
        "Keep potentially hazardous food at 4 °C or colder, or at 60 °C or hotter",
        "Wash hands for at least 20 seconds with soap and warm water, and after handling raw eggs",
        "Canadian priority allergens: peanuts, tree nuts, sesame, wheat and triticale, eggs, milk, soy, fish, crustaceans and molluscs, mustard, and sulphites",
        "The Safe Food for Canadians Regulations (CFIA) and your provincial or territorial food premises rules both apply. Check which applies to your bakery",
        "Use clean, dedicated tools and storage for allergen-free items"
      ],
      note: "This sheet does not replace your food safety training or local public health requirements."
    }
  ]
});
