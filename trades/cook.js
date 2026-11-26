// Cook guide. Practice questions are original study aids, not official Red Seal exam questions.

const cookPositions = [1, 3, 0, 2, 2, 0, 3, 1, 0, 2, 3, 1, 1, 2, 0, 3, 3, 1, 2, 0];
const cookQuestions = (rows) => rows.map(([q, right, wrong, explain], i) => {
  const answer = cookPositions[i % cookPositions.length];
  const options = [...wrong];
  options.splice(answer, 0, right);
  return { q, options, answer, explain };
});

registerTrade({
  id: "cook",
  store: "cook",
  title: "Cook",
  name: "Cook",
  short: "cooking",
  category: "Food · Hospitality · Production",
  summary: "Cooks prepare and present food in restaurants, hotels, institutions, and camps, using sound technique, food safety, and teamwork to deliver consistent meals on time.",
  work: "Cooks work in fast, hot, and busy kitchens, usually on shifts that include evenings, weekends, and holidays. The job combines knife skills, cooking methods, food safety, recipe costing, and working as part of a brigade. Cooks may work in restaurants, hotels, hospitals, care homes, schools, catering, camps, and cruise or remote worksites.",
  duration: "Usually about 3 years (varies by province)",
  union: "Restaurants Canada (industry association)",
  unionUrl: "https://www.restaurantscanada.org/",
  jobSearch: "cook apprentice",
  journeySearch: "cook",
  aliases: "chef kitchen restaurant culinary line cook prep cook food hospitality catering camp cook red seal",
  tools: ["Chef's knife (20 cm) and paring knife", "Honing steel and sharpening stone", "Probe thermometer", "Cut-resistant glove and cutting boards", "Peeler, tongs, spatulas, and whisk", "Slip-resistant CSA footwear, apron, and side towels"],
  insight: {
    skills: ["Knife skills and consistent cuts", "Cooking methods and seasoning", "Food safety and time management", "Costing, portioning, and plating"],
    hazards: ["Burns and scalds: use dry towels, warn others, and cool burns with running water", "Cuts: keep knives sharp, cut on a stable board, and never catch a falling knife", "Slips: clean spills at once and wear slip-resistant footwear", "Grease fire: smother or use a Class K extinguisher, never water"],
    settings: ["Restaurants and cafes", "Hotels and banquet kitchens", "Hospitals, care homes, and schools", "Camps, catering, and remote worksites"]
  },
  toolGroups: [
    {
      title: "Day-one kit, buy once and buy well",
      note: "Professional-grade gear that holds an edge and lasts for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer and school supply first, and what is required for class.",
      items: [
        { name: "Victorinox Fibrox or Wusthof 20 cm chef's knife", why: "The core knife of every cook. A comfortable grip and a good edge make hours of prep safer and easier.", search: "Victorinox Fibrox Pro 8 inch chef knife" },
        { name: "Paring knife and serrated utility knife", why: "Small, precise cuts and cutting tomatoes, bread, and citrus cleanly.", search: "Victorinox paring knife serrated utility knife" },
        { name: "Honing steel and a combination sharpening stone", why: "Honing keeps the edge aligned and a stone restores it. Sharp knives are safer than dull ones.", search: "honing steel 10 inch combination whetstone 1000 3000" },
        { name: "Knife roll or guards", why: "Protects blades and your hands when you carry knives to work.", search: "chef knife roll bag knife guards" },
        { name: "Instant-read probe thermometer", why: "Checking internal temperatures is a food safety habit. Calibrate it regularly.", search: "ThermoWorks Thermapen instant read thermometer" },
        { name: "Cut-resistant glove and finger guards", why: "Protects the guiding hand when using a mandoline or breaking down product.", search: "NoCry cut resistant glove food grade" },
        { name: "Peeler, microplane, tongs, and kitchen spoons", why: "Everyday hand tools. Choose sturdy, dishwasher-safe ones.", search: "Oxo Y peeler microplane tongs kitchen spoons" },
        { name: "CSA-approved slip-resistant footwear", why: "Grease and water on kitchen floors cause falls. Look for comfortable, closed-toe, supportive shoes.", search: "CSA slip resistant kitchen work shoes Skechers Blundstone" },
        { name: "Aprons, side towels, chef's whites, and hat or hairnet", why: "Hygiene and burn protection. Dry cotton towels are essential for handling hot pans.", search: "chef apron side towels chef jacket skull cap" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your chef or instructor what your kitchen expects.",
      items: [
        { name: "Boning and fillet knives", why: "Breaking down poultry, meat, and fish with minimal waste.", search: "Victorinox boning knife flexible fillet knife" },
        { name: "Whisks, fine mesh strainer, and china cap", why: "Smooth sauces, stocks, and emulsions.", search: "stainless whisk set fine mesh strainer chinois" },
        { name: "Offset and flexible spatulas", why: "Turning delicate fish, plating, and scraping bowls clean.", search: "fish spatula offset spatula chef" },
        { name: "Microplane and mandoline", why: "Zesting and uniform slicing. Always use the guard or glove.", search: "Benriner mandoline slicer microplane zester" },
        { name: "Sauté pan and non-stick fish pan (personal sizes)", why: "Good pans help you learn heat control, though many kitchens supply their own.", search: "Tramontina professional fry pan stainless 10 inch" },
        { name: "Plating tools: squeeze bottles, ring moulds, and tweezers", why: "Clean plating becomes part of daily work as you move to the line.", search: "squeeze bottles plating tweezers ring moulds" },
        { name: "Pocket notebook and permanent markers", why: "Record recipes, prep lists, and temperatures. Waterproof paper survives a wet kitchen.", search: "Rite in the Rain pocket notebook Sharpie" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the kitchen. Ask before buying.",
      items: [
        { name: "Immersion circulator and vacuum sealer", why: "Used for low-temperature cooking. Usually kitchen-supplied, and safe time and temperature rules apply.", search: "immersion circulator Anova vacuum sealer" },
        { name: "Meat grinder and sausage stuffer attachments", why: "In-house butchery and charcuterie. Normally kitchen equipment.", search: "meat grinder attachment sausage stuffer" },
        { name: "Pastry and garde manger tools", why: "Piping bags, moulds, and carving sets for cold work and banquets.", search: "garde manger carving tools piping bags" },
        { name: "Torch and smoking gun", why: "Used for finishing, searing, and smoke. Learn the safety rules for fuel and ventilation.", search: "culinary torch smoking gun" },
        { name: "Pressure cooker or tilting braising pan training", why: "Large-format equipment usually requires supervised instruction before use.", search: "kitchen training pressure cooker safety" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for recipes, math, and food safety study. Check with your school and exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific or basic calculator (Casio fx-991 or similar)", why: "Recipe conversions, yield tests, costing, and portioning.", search: "Casio fx-991 scientific calculator" },
        { name: "Professional cooking textbook", why: "Ask which text your school uses. A standard book is useful for reference throughout your career.", search: "Professional Cooking Wayne Gisslen textbook" },
        { name: "Food handler certification study guide (Canadian)", why: "Certification requirements vary by province, so use a guide for your province.", search: "Canadian food handler certification study guide" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic, which also helps with Red Seal exam review.", search: "binder dividers highlighters" },
        { name: "Digital kitchen scale", why: "Practice portioning and recipe weights for your classes and exam math.", search: "digital kitchen scale 1g 5kg tare" },
        { name: "Metric conversion chart", why: "Handy for imperial recipes and the mix of metric and imperial in Canadian kitchens.", search: "kitchen metric conversion chart magnet" },
        { name: "Sticky flags and index cards", why: "Make flashcards for cuts, temperatures, and mother sauces.", search: "index cards sticky flags study" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare. Search for the Cook trade profile from here.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Canadian Food Inspection Agency (CFIA)", desc: "Federal food safety information and the Safe Food for Canadians Regulations.", url: "https://inspection.canada.ca/" },
        { name: "Health Canada (Government of Canada)", desc: "Federal home page. Search for safe internal cooking temperatures and food safety guidance.", url: "https://www.canada.ca/" },
        { name: "Food Allergy Canada", desc: "Allergen information and cross-contact guidance for food service.", url: "https://foodallergycanada.ca/" },
        { name: "Restaurants Canada", desc: "Industry association information about careers and the food service sector.", url: "https://www.restaurantscanada.org/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Workplace safety facts on burns, cuts, slips, and kitchen hazards.", url: "https://www.ccohs.ca/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local rules.",
      items: [
        { name: "Knife skills for cooks", desc: "Grip, claw hand, and safe cutting technique.", url: "https://www.youtube.com/results?search_query=professional+knife+skills+cook+claw+grip" },
        { name: "Classic vegetable cuts", desc: "Julienne, brunoise, and dice measurements.", url: "https://www.youtube.com/results?search_query=julienne+brunoise+dice+classic+cuts+culinary" },
        { name: "Stocks and mother sauces", desc: "Building stocks and the five classic sauces.", url: "https://www.youtube.com/results?search_query=five+mother+sauces+stock+culinary+school" },
        { name: "Dry and moist heat cooking methods", desc: "Sautéing, roasting, braising, poaching, and more.", url: "https://www.youtube.com/results?search_query=dry+heat+moist+heat+cooking+methods+culinary" },
        { name: "Breaking down chicken", desc: "Butchering whole chicken for portions.", url: "https://www.youtube.com/results?search_query=how+to+break+down+whole+chicken+culinary" },
        { name: "Food safety in the kitchen", desc: "Temperatures, cross-contamination, and cooling.", url: "https://www.youtube.com/results?search_query=commercial+kitchen+food+safety+temperature+cross+contamination" },
        { name: "Food costing and yield tests", desc: "As purchased versus edible portion costs.", url: "https://www.youtube.com/results?search_query=food+costing+yield+test+edible+portion+culinary" },
        { name: "Knife sharpening and honing", desc: "Using a stone and a steel.", url: "https://www.youtube.com/results?search_query=how+to+sharpen+chef+knife+whetstone+honing+steel" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for cooking yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: cook apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=cook+apprentice+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: chef interview podcast", desc: "Working chefs discuss technique, kitchens, and career paths.", url: "https://www.youtube.com/results?search_query=chef+interview+podcast+kitchen+career" },
        { name: "YouTube: restaurant kitchen management podcast", desc: "Prep systems, ordering, and kitchen workflow.", url: "https://www.youtube.com/results?search_query=restaurant+kitchen+management+podcast" },
        { name: "YouTube: food science for cooks podcast", desc: "Why techniques work: Maillard, emulsions, and heat transfer.", url: "https://www.youtube.com/results?search_query=food+science+for+cooks+podcast" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, business, and leadership.",
      items: [
        { name: "YouTube: Red Seal cook exam prep (talk-through)", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+cook+exam+preparation" },
        { name: "YouTube: restaurant costing and menu pricing podcast", desc: "Food cost, menu engineering, and profit.", url: "https://www.youtube.com/results?search_query=restaurant+food+cost+menu+pricing+podcast" },
        { name: "YouTube: leading a kitchen team and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
      ]
    }
  ],
  practiceBank: {
    1: cookQuestions([
      ["Which temperature range is commonly called the danger zone for food in Canada?", "4 °C to 60 °C", ["0 °C to 20 °C", "30 °C to 45 °C", "60 °C to 100 °C"], "Bacteria multiply fastest between about 4 °C and 60 °C, so keep potentially hazardous food cold or hot."],
      ["What internal temperature is recommended for poultry pieces such as chicken breasts?", "74 °C", ["55 °C", "63 °C", "60 °C"], "Health Canada recommends 74 °C for poultry pieces. Whole poultry should reach a higher temperature, so check current guidance."],
      ["Ground beef should be cooked to an internal temperature of at least:", "71 °C", ["52 °C", "60 °C", "63 °C"], "Grinding spreads bacteria through the meat, so it needs more thorough cooking than a whole steak."],
      ["The safest way to carry a knife across a kitchen is:", "Point down, blade against your leg, and call out a warning", ["Point up at chest height", "In a pocket", "Held out in front of you"], "Controlled carrying prevents cuts to you and coworkers."],
      ["A dull knife is more dangerous than a sharp one because it:", "Needs more force and can slip", ["Cuts more cleanly", "Makes the food cold", "Cannot cut at all"], "Slips from extra force cause many kitchen cuts."],
      ["To prevent cross-contamination you should:", "Keep raw foods and ready-to-eat foods on separate boards and tools", ["Rinse boards in cold water", "Use one board for everything", "Wipe the knife on an apron"], "Colour-coded boards and separate prep areas keep raw meat bacteria from ready-to-eat food."],
      ["Hands should be washed with soap and warm water for at least:", "20 seconds", ["2 seconds", "5 seconds", "1 minute only"], "Thorough washing removes soil and microbes. Rinse and dry with a single-use towel."],
      ["Which fire extinguisher class is designed for commercial cooking oils and fats?", "Class K", ["Class A only", "Class C only", "Class D"], "Class K agents cool and saponify burning oils in commercial fryers."],
      ["If a pan of oil catches fire you should:", "Turn off the heat and cover it or use the correct extinguisher, never water", ["Pour water on it", "Carry it outside", "Fan the flames"], "Water can spread burning oil violently."],
      ["Mise en place means:", "Having ingredients and tools prepared and ready before cooking", ["Plating cold dishes", "Washing dishes at the end", "A type of sauce"], "Preparation keeps service fast and organized."],
      ["A medium dice is usually about:", "12 mm (1/2 in) cubes", ["3 mm cubes", "25 mm cubes", "50 mm strips"], "Small dice is about 6 mm, and brunoise about 3 mm."],
      ["How many millilitres are in one tablespoon (standard measure)?", "15 mL", ["5 mL", "30 mL", "250 mL"], "1 tsp is 5 mL, 1 tbsp is 15 mL, and a metric cup is 250 mL."],
      ["The first thing to do for a minor burn is:", "Cool it under cool running water", ["Apply butter", "Pop any blisters", "Cover it with ice directly"], "Cool running water reduces damage. Seek medical help for serious burns."],
      ["FIFO stands for:", "First in, first out", ["Fresh in, fresh out", "Fast in, fast out", "First order, final order"], "Rotating stock so older product is used first reduces waste and spoilage."],
      ["A refrigerator used to hold potentially hazardous foods should be at:", "4 °C or colder", ["10 °C", "15 °C", "20 °C"], "Frozen storage should hold -18 °C or colder."],
      ["Where would you find a hazardous cleaning product's first aid and handling information?", "Safety Data Sheet (SDS)", ["Menu", "Prep list", "Invoice"], "WHMIS requires suppliers to provide SDSs, and workers must be trained to use them."],
      ["Which is a moist-heat cooking method?", "Braising", ["Grilling", "Deep-frying", "Broiling"], "Braising and poaching cook food in liquid or steam."],
      ["Why wear slip-resistant footwear in a kitchen?", "Grease and water create slip hazards", ["They keep food warmer", "They make knives sharper", "They are always required to be black"], "Falls are a leading cause of kitchen injuries."]
    ]),
    2: cookQuestions([
      ["A white roux is made of:", "Equal parts fat and flour by weight, cooked briefly", ["Equal parts water and flour", "Cream and eggs", "Stock and wine"], "Roux thickens sauces. A white roux is cooked just long enough to remove the raw flour taste."],
      ["In a standard mirepoix, the usual ratio of onion : carrot : celery by weight is:", "2 : 1 : 1", ["1 : 1 : 1", "3 : 1 : 2", "1 : 2 : 2"], "Mirepoix gives aromatic flavour to stocks and braises."],
      ["For a clear stock you should:", "Simmer gently and skim", ["Boil hard", "Stir constantly", "Salt heavily at the start"], "A hard boil emulsifies fat and impurities and clouds the stock."],
      ["Blanching and shocking vegetables:", "Briefly cooks them in boiling water, then stops cooking in ice water", ["Fries them in oil", "Dries them", "Cooks them slowly in the oven"], "It sets colour and texture."],
      ["Braising involves:", "Browning food, then cooking slowly in a small amount of liquid in a covered pot", ["Cooking quickly in oil", "Boiling in a lot of water", "Grilling over open flame"], "Slow moist cooking tenderizes tougher cuts."],
      ["To get a good sear on meat you should:", "Pat it dry and use a hot pan without overcrowding", ["Add water to the pan", "Start with a cold pan", "Press it constantly"], "Dry surfaces brown faster through the Maillard reaction."],
      ["Hollandaise sauce is:", "An emulsion of egg yolk and butter", ["A roux-thickened milk sauce", "A reduced stock", "A tomato sauce"], "It breaks if it gets too hot or the butter is added too fast."],
      ["Deglazing a pan means:", "Adding liquid to dissolve the browned bits for a sauce", ["Cleaning it with soap", "Draining oil", "Heating it empty"], "The browned bits, called fond, carry flavour."],
      ["A recipe serves 8 and you need to serve 14. What is the conversion factor?", "1.75", ["0.57", "6", "2.5"], "Conversion factor = new yield ÷ old yield = 14 ÷ 8 = 1.75."],
      ["You trim 10 kg of as-purchased vegetables to 7 kg of usable product. What is the yield percentage?", "70%", ["30%", "7%", "170%"], "Yield % = edible portion ÷ as purchased × 100 = 7 ÷ 10 × 100."],
      ["For large batches of hot food, the safest cooling method is:", "Shallow pans, ice baths, and stirring, then refrigeration", ["Leave the pot on the counter overnight", "Put the hot pot in the walk-in as is", "Cover it tightly while steaming"], "Fast cooling limits time in the danger zone."],
      ["Leftovers being reheated for service should reach:", "74 °C", ["40 °C", "50 °C", "60 °C"], "Reheat quickly and thoroughly, not in a steam table."],
      ["Hot-held food should stay at:", "60 °C or hotter", ["40 °C", "45 °C", "50 °C"], "Below 60 °C bacteria can grow."],
      ["Meat should rest after roasting so that:", "Juices redistribute", ["It cools to room temperature", "It absorbs water", "It loses salt"], "Resting gives juicier slices."],
      ["The safest method to thaw frozen meat is:", "In the refrigerator, or as part of cooking", ["On the counter overnight", "In warm water in a bucket", "Beside the oven"], "Cold running water and microwave thawing are acceptable if the food is cooked right away."],
      ["Which cooking method uses a small amount of fat and high heat in a shallow pan?", "Sautéing", ["Poaching", "Steaming", "Braising"], "Sauté means \"to jump\", describing quick, high-heat cooking."],
      ["Tomatoes, onions, and carrots in a pot are first cooked slowly in fat without browning. This technique is called:", "Sweating", ["Searing", "Caramelizing", "Blanching"], "Sweating softens vegetables and releases flavour without colour."]
    ]),
    3: cookQuestions([
      ["Cross-contact differs from cross-contamination because it:", "Refers to transfer of allergens between foods or surfaces", ["Only refers to bacteria", "Only refers to chemicals", "Only applies to dishes"], "Even trace allergens can cause serious reactions."],
      ["Which of these is a classic mother sauce thickened with a roux and made with white stock?", "Velouté", ["Hollandaise", "Tomato", "Mayonnaise"], "Velouté uses a blond roux and a light stock of veal, chicken, or fish."],
      ["Demi-glace is classically made by:", "Reducing espagnole and brown stock together", ["Whisking butter into wine", "Cooking milk with flour", "Blending raw tomatoes"], "It is a rich, brown reduction used as a base for many sauces."],
      ["Carryover cooking means:", "Internal temperature keeps rising after food leaves the heat", ["Food cools immediately", "Food cooks only in the fridge", "Heat is transferred by steam"], "Remove large roasts slightly before the target temperature."],
      ["Whole cuts of beef, such as steaks, should be cooked to at least what internal temperature by Health Canada's guidance?", "63 °C (medium-rare)", ["45 °C", "55 °C", "82 °C"], "Higher temperatures give medium and well done. Mechanically tenderized beef is treated differently."],
      ["Pork should reach an internal temperature of at least:", "71 °C", ["52 °C", "60 °C", "55 °C"], "Check current Health Canada guidance for specific cuts."],
      ["Fish should be cooked to about what internal temperature according to Health Canada?", "70 °C", ["40 °C", "50 °C", "90 °C"], "Fish should be opaque and flake easily. Raw preparations need special sourcing."],
      ["In low-temperature or sous vide cooking, food safety depends on:", "Both the temperature and the time held", ["Only the time", "Only the packaging brand", "Only the thickness"], "Pasteurization depends on time at temperature, so follow validated charts."],
      ["Received refrigerated food arriving above 4 °C should:", "Be checked and rejected if it is in the danger zone", ["Always be accepted", "Be left on the dock", "Be frozen immediately without checking"], "Receiving checks are a food safety control."],
      ["Mayonnaise is stable because the egg yolk:", "Contains lecithin, which acts as an emulsifier", ["Is acidic", "Is hot", "Contains starch"], "Emulsifiers hold oil and water together."],
      ["A honing steel:", "Realigns the edge of a knife", ["Removes a lot of steel", "Always sharpens a damaged edge", "Cuts bones"], "Sharpening stones remove metal to form a new edge."],
      ["Pasta cooked al dente is:", "Firm to the bite", ["Very soft", "Raw", "Crunchy"], "It cooks a little more in the sauce."],
      ["When seasoning, it is best to:", "Season in stages and taste as you go", ["Add all salt at the end only", "Only use pepper", "Never taste until the dish is served"], "Layering seasoning builds flavour. Reducing sauces concentrates salt."],
      ["A par level is:", "The minimum quantity of an item to keep on hand", ["A recipe yield", "A kind of knife cut", "A cooking temperature"], "Par levels guide ordering and prep."],
      ["Which cooking method is a dry-heat technique?", "Roasting", ["Poaching", "Steaming", "Simmering"], "Dry heat uses air, fat, or radiant heat instead of liquid."],
      ["A guest tells you they have a severe peanut allergy. What do you do?", "Tell the chef and follow the allergen procedure, with clean equipment and checked ingredients", ["Just remove the nuts from the plate", "Guess if the dish is safe", "Use the same pan after a quick wipe"], "Allergen errors can be life-threatening. Never guess."]
    ]),
    4: cookQuestions([
      ["As-purchased vegetables cost $10.00 per kg and the yield is 80%. What is the edible portion cost per kg?", "$12.50", ["$8.00", "$10.80", "$20.00"], "EP cost = AP cost ÷ yield = 10.00 ÷ 0.80 = $12.50."],
      ["A dish has a plate cost of $4.50 and a target food cost of 30%. What is the selling price?", "$15.00", ["$13.50", "$6.50", "$1.35"], "Price = cost ÷ food cost % = 4.50 ÷ 0.30 = $15.00."],
      ["A cooling log shows a batch of soup stayed in the danger zone too long. The correct action is:", "Follow your corrective action procedure, which may include discarding it", ["Serve it quickly", "Ignore it", "Reheat it once and serve"], "Plans require corrective actions when limits are missed."],
      ["Under the Safe Food for Canadians Regulations, many food businesses need:", "A preventive control plan with records", ["No documentation", "Only a menu", "Only a pest trap"], "Requirements depend on your licence and activity. Provincial food premises rules also apply."],
      ["Regular cleaning of kitchen exhaust hoods and ducts is needed mainly to:", "Reduce the risk of grease fires", ["Make the kitchen cooler", "Save water", "Improve plating"], "Grease buildup can spread a fire quickly. Follow fire code and inspection schedules."],
      ["A broken hollandaise can often be fixed by:", "Whisking it slowly into a fresh egg yolk or warm water", ["Heating it more", "Adding flour", "Chilling and serving"], "Re-establishing the emulsion with a fresh yolk or a little warm water works."],
      ["Which step makes an oversalted sauce worse?", "Reducing it further", ["Adding unsalted liquid", "Adding unsalted starch", "Diluting with more base"], "Evaporation concentrates salt."],
      ["Standardized recipes help a kitchen:", "Produce consistent quality and accurate costs", ["Avoid food safety rules", "Reduce tools", "Eliminate waiting"], "They define ingredients, methods, yields, and portions."],
      ["A guest has a severe allergy. A strong kitchen process includes:", "Clear communication, separate equipment, checked labels, and identifying the plate", ["Telling only the server", "Removing the allergen at the pass", "Using the same fryer oil"], "Communication and clean equipment prevent errors."],
      ["When a chemical is decanted into a spray bottle, WHMIS generally requires:", "A workplace label on the new container", ["No label", "A menu label", "A date only"], "Workplace labels give product identity and safe handling information."],
      ["Which factor most directly affects your food cost percentage in the walk-in?", "Waste, over-portioning, and spoilage", ["Plate colour", "Apron colour", "Music in the kitchen"], "Controlling waste, portion size, and purchasing controls food cost."],
      ["Menu planning should consider:", "Station capacity, skills, equipment, and food cost", ["Only the chef's favourites", "Only trendy items", "Colour only"], "A menu the kitchen cannot execute causes delays and waste."],
      ["A prep list is created by:", "Counting par levels and forecasting what will be needed", ["Guessing", "Copying yesterday exactly", "Waiting until service"], "Good forecasting prevents running out or overproducing."],
      ["Before cleaning a meat slicer you must:", "Turn it off, unplug it or lock out, and set the blade guard", ["Wipe while running", "Use your bare fingers on the blade", "Remove the guard first"], "Slicers cause serious cuts. Always follow lockout and guarding procedures."],
      ["A cook finds trim and bones can be used in stocks, soups, and staff meals. This is an example of:", "Waste reduction through full use of product", ["Poor practice", "A food safety violation", "Cross-contact"], "Using trim properly lowers cost, provided it is safe and handled correctly."],
      ["Staff training and verification of food safety practices should be:", "Ongoing and documented", ["One time only", "Verbal only", "Optional"], "Training records help show due diligence."]
    ])
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the training employers ask for (commonly food handler certification and WHMIS; requirements vary by province)", "Work or volunteer in a kitchen if you can and see if you like the pace and the hours", "Find a sponsoring employer, register your apprenticeship, and keep your hours logged"] },
    { title: "Year 1: foundations", items: ["Learn food safety, sanitation, and allergen awareness", "Build knife skills and classic cuts", "Learn basic cooking methods, stocks, and soups", "Complete your first technical training block", "Build your core kit (see Buying tools)"] },
    { title: "Year 2: sauces, proteins, and stations", items: ["Learn the mother sauces and their derivatives", "Learn butchery basics for poultry, meat, and fish", "Work the line stations and learn plating", "Convert recipes and calculate yields"] },
    { title: "Year 3: menus, costing, and production", items: ["Learn banquet, buffet, and garde manger work", "Cook for dietary and allergen needs", "Cost recipes and control waste", "Handle ordering, receiving, and inventory"] },
    { title: "Year 4 and beyond: advanced", items: ["Most provinces complete the term in about three years, so use this stage to deepen skills and prepare for lead roles", "Supervise a station and train new cooks", "Develop and cost menus and manage production", "Learn food safety plan basics and records", "Use the Red Seal standard to find gaps in your experience"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["Al dente", "Cooked firm to the bite, used for pasta."],
    ["Allergen", "A substance that can cause an allergic reaction."],
    ["As purchased (AP)", "The weight or cost of food before trimming."],
    ["Bain-marie", "A hot water bath used to heat or hold food gently."],
    ["Blanch", "To cook briefly in boiling water, then cool in ice water."],
    ["Braise", "To brown, then cook slowly in a little liquid in a covered pot."],
    ["Brigade", "The organized team system of a professional kitchen."],
    ["Brunoise", "A very small dice, about 3 mm."],
    ["Chiffonade", "Thin ribbons of leafy herbs or greens."],
    ["Cross-contamination", "Transfer of microbes from one food or surface to another."],
    ["Deglaze", "To add liquid to a hot pan to dissolve browned bits."],
    ["Edible portion (EP)", "The usable weight or cost after trimming."],
    ["Emulsion", "A stable mixture of two liquids that normally do not mix, such as oil and water."],
    ["FIFO", "First in, first out stock rotation."],
    ["Fond", "Browned bits left in a pan after searing."],
    ["Julienne", "A matchstick cut, about 3 mm by 3 mm by 5 cm."],
    ["Maillard reaction", "Browning from amino acids reacting with sugars."],
    ["Mirepoix", "Diced onion, carrot, and celery used to flavour stocks and sauces."],
    ["Mise en place", "Having everything prepared and in place before cooking."],
    ["Pass", "The area where finished dishes are checked before they go to service."],
    ["Reduction", "Simmering a liquid to evaporate water and concentrate flavour."],
    ["Roux", "Equal parts fat and flour cooked together to thicken sauces."],
    ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
    ["Sear", "To brown the surface of food at high heat."],
    ["Sweat", "To cook vegetables slowly in fat without browning."],
    ["Velouté", "A mother sauce of light stock thickened with a blond roux."],
    ["WHMIS", "Canada's workplace hazardous materials information system."],
    ["Yield", "The usable amount of a product after preparation or the number of portions in a recipe."]
  ],
  cards: [
    { front: "Danger zone for food", back: "4 °C to 60 °C" },
    { front: "Safe internal temperature: poultry pieces", back: "74 °C" },
    { front: "Safe internal temperature: ground beef and pork", back: "71 °C" },
    { front: "Safe internal temperature: fish", back: "70 °C" },
    { front: "Mirepoix ratio by weight", back: "2 parts onion, 1 part carrot, 1 part celery" },
    { front: "Roux ratio", back: "Equal parts fat and flour by weight" },
    { front: "Recipe conversion factor", back: "New yield ÷ old yield" },
    { front: "Yield percentage", back: "Edible portion ÷ as purchased × 100" },
    { front: "Selling price from food cost percentage", back: "Plate cost ÷ target food cost %" }
  ],
  jobsIntro: "Look for restaurants, hotels, hospitals, long-term care homes, schools and colleges, catering companies, camps and remote worksites, and cruise lines.",
  tips: ["Bring a short resume, your food handler certificate if you have one, and ID.", "Offer a stage or trial shift to show your work ethic and skills.", "Visit kitchens in person between lunch and dinner service, and follow up.", "Ask what knives and uniform you need and what the employer supplies."],
  forumTopics: ["Starting out", "Cooking methods and sauces", "Food safety and allergens", "Red Seal and exam prep", "Tools and gear", "Province and food safety questions"],
  reference: [
    {
      title: "Safe internal cooking temperatures (Health Canada guidance)",
      table: {
        head: ["Food", "Minimum internal temperature"],
        rows: [
          ["Poultry pieces and ground poultry", "74 °C (165 °F)"],
          ["Ground beef, pork, and other ground meat (not poultry)", "71 °C (160 °F)"],
          ["Pork cuts", "71 °C (160 °F)"],
          ["Whole cuts of beef, veal, and lamb", "63 °C (145 °F) medium-rare, with a rest period"],
          ["Fish and seafood", "70 °C (158 °F)"],
          ["Egg dishes and reheated leftovers", "74 °C (165 °F)"]
        ]
      },
      note: "Always check the current Health Canada guidance and your provincial food premises rules. Whole poultry has its own higher target temperature."
    },
    {
      title: "Key formulas",
      list: [
        "Conversion factor = new yield ÷ old yield",
        "Yield % = edible portion weight ÷ as-purchased weight × 100",
        "Edible portion cost = as-purchased cost ÷ yield %",
        "Food cost % = food cost ÷ selling price × 100",
        "Selling price = plate cost ÷ target food cost %",
        "Portion cost = cost per kg × portion weight in kg"
      ]
    },
    {
      title: "Classic cuts",
      table: {
        head: ["Cut", "Approx. size"],
        rows: [
          ["Brunoise", "3 mm cubes"],
          ["Small dice", "6 mm cubes"],
          ["Medium dice", "12 mm cubes"],
          ["Large dice", "20 mm cubes"],
          ["Julienne", "3 × 3 × 50 mm"],
          ["Batonnet", "6 × 6 × 50 mm"]
        ]
      },
      note: "Sizes are typical teaching values. Your school or kitchen may state slightly different standards."
    },
    {
      title: "Conversions",
      list: [
        "1 tsp = 5 mL, 1 tbsp = 15 mL, and a Canadian metric cup = 250 mL",
        "1 kg = 1000 g, and 1 lb = 453.6 g",
        "1 oz ≈ 28.35 g",
        "°F = °C × 9 ÷ 5 + 32, and °C = (°F − 32) × 5 ÷ 9",
        "1 L of water ≈ 1 kg"
      ]
    },
    {
      title: "The five classic mother sauces",
      table: {
        head: ["Sauce", "Base", "Thickener"],
        rows: [
          ["Béchamel", "Milk", "White roux"],
          ["Velouté", "Light stock (chicken, veal, or fish)", "Blond roux"],
          ["Espagnole", "Brown stock", "Brown roux, with tomato and mirepoix"],
          ["Hollandaise", "Clarified butter and egg yolks", "Emulsion of yolk and butter"],
          ["Tomato", "Tomatoes and stock or aromatics", "Reduction, with or without roux"]
        ]
      }
    },
    {
      title: "Food safety and allergen pointers",
      list: [
        "Keep potentially hazardous food at 4 °C or colder, or at 60 °C or hotter",
        "Wash hands for at least 20 seconds, and sanitize surfaces as per the product label",
        "Canadian priority allergens: peanuts, tree nuts, sesame, wheat and triticale, eggs, milk, soy, fish, crustaceans and molluscs, mustard, and sulphites",
        "Know your provincial food handler certification rules, since they differ across Canada",
        "Use Class K extinguishers and approved suppression systems for cooking oil fires"
      ],
      note: "This sheet does not replace your food safety training or local public health requirements."
    }
  ]
});
