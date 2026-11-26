// Hairstylist guide. Practice questions are original study aids, not official Red Seal exam questions.

const hairPositions = [3, 1, 0, 2, 0, 2, 1, 3, 2, 0, 3, 1, 1, 0, 2, 3, 0, 2, 1, 3];
const hairQuestions = (rows) => rows.map(([q, right, wrong, explain], i) => {
  const answer = hairPositions[i % hairPositions.length];
  const options = [...wrong];
  options.splice(answer, 0, right);
  return { q, options, answer, explain };
});

registerTrade({
  id: "hairstylist",
  store: "hairstylist",
  title: "Hairstylist",
  name: "Hairstylist",
  short: "hairstyling",
  category: "Personal services · Beauty · Client care",
  summary: "Hairstylists consult with clients, then cut, colour, chemically treat, and style hair, while keeping tools clean, services safe, and clients happy.",
  work: "Hairstylists work on their feet, close to people, and combine technical skill with creativity and communication. The day includes consultations, cutting, colouring, chemical services, styling, cleaning and disinfection, and booking. Hairstylists work in salons, barbershops, spas, film and theatre, cruise ships, and as self-employed stylists.",
  duration: "Usually 2 to 3 years (varies by province)",
  union: "Provincial and industry associations (varies by province)",
  unionUrl: undefined,
  jobSearch: "hairstylist apprentice",
  journeySearch: "hairstylist",
  aliases: "hair stylist hairdresser barber salon cosmetology colourist hair colour cut perm beauty red seal",
  tools: ["Cutting shears and thinning shears", "Combs and sectioning clips", "Brushes, blow dryer, and flat iron", "Colour bowls, brushes, and gloves", "Cape, neck strips, and spray bottle", "Supportive, slip-resistant footwear"],
  insight: {
    skills: ["Consultation and communication", "Precision cutting and sectioning", "Colour theory and chemical services", "Infection control and client safety"],
    hazards: ["Chemical exposure: wear gloves, ventilate, and read the SDS", "Skin conditions such as dermatitis: limit wet work and use gloves and moisturizer", "Repetitive strain and back pain: adjust chair height and vary posture", "Sharps and infection: use clean tools, single-use blades, and sharps containers"],
    settings: ["Salons and barbershops", "Spas and resorts", "Film, theatre, and photography", "Self-employed and mobile stylists"]
  },
  toolGroups: [
    {
      title: "Day-one kit, buy once and buy well",
      note: "Professional-grade tools that hold their quality for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer and school supply first, and what is required for your program.",
      items: [
        { name: "Professional cutting shears (5.5 to 6 in)", why: "The most personal tool you own. A comfortable fit and a sharp edge give clean cuts and reduce hand strain.", search: "Jaguar Yasaka professional hair cutting shears 6 inch" },
        { name: "Thinning or texturizing shears", why: "Removes bulk and blends layers. Use with care and sparingly.", search: "professional hair thinning shears texturizing" },
        { name: "Cutting combs set (carbon or anti-static)", why: "Even partings and controlled sectioning for accurate cuts.", search: "Dateline Professional carbon comb set cutting combs" },
        { name: "Sectioning clips and duckbill clips", why: "Keep sections tidy and secure during cutting and colouring.", search: "hair sectioning clips duckbill salon" },
        { name: "Round and paddle brushes", why: "Control direction and tension for blow-drying. A range of sizes helps for different lengths.", search: "Denman round brush paddle brush salon" },
        { name: "Spray bottle and wide-tooth comb", why: "Keeps hair evenly damp during cutting, and detangles gently.", search: "salon spray bottle fine mist wide tooth comb" },
        { name: "Cape, neck strips, and towels", why: "Protect clients from clippings and chemicals, and keep service neat.", search: "salon cape neck strips towels" },
        { name: "Nitrile gloves", why: "Protect your hands from colour and chemicals. Nitrile avoids latex allergies for you and your clients.", search: "nitrile gloves powder free salon" },
        { name: "Comfortable slip-resistant CSA footwear", why: "Long shifts and wet floors. Supportive shoes protect feet and back.", search: "CSA slip resistant work shoes Skechers Dansko" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your instructor or senior stylist what your salon expects.",
      items: [
        { name: "Professional blow dryer with nozzles and diffuser", why: "Strong airflow and good heat control speed up styling and protect hair.", search: "Babyliss Pro Parlux Elchim professional hair dryer" },
        { name: "Flat iron and curling iron with temperature control", why: "Adjustable temperature protects hair. Look for ceramic or titanium plates and a good swivel cord.", search: "professional flat iron temperature control ghd Babyliss" },
        { name: "Clippers and trimmers", why: "Fades, tapers, and neck lines. Choose a quality corded or cordless set.", search: "Wahl Andis professional clippers trimmer" },
        { name: "Colour bowls, brushes, and measuring scale", why: "Accurate weighing of colour and developer gives repeatable results.", search: "hair colour bowl brush digital scale salon" },
        { name: "Foils, meche, and balayage board", why: "Highlights and lowlights, and hand-painted colour.", search: "hair foils highlighting balayage board brush" },
        { name: "Roller sets, perm rods, and pin curl clips", why: "For sets, perms, and updos taught in the first years.", search: "perm rods rollers pin curl clips professional" },
        { name: "Tail comb and pins", why: "Precise partings and secure updos.", search: "tail comb bobby pins hair pins salon" },
        { name: "Tool belt or stylist's trolley", why: "Keeps tools within reach and tidy at the chair.", search: "stylist tool belt salon trolley" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the salon. Ask before buying.",
      items: [
        { name: "Hooded dryer or steamer", why: "Usually salon equipment used for setting and conditioning treatments.", search: "salon hooded dryer hair steamer" },
        { name: "Wash basin and styling chair", why: "Salon furniture. Learn height and posture adjustments to protect your back.", search: "salon shampoo bowl styling chair hydraulic" },
        { name: "Extension tools and bonding kits", why: "Specialized training is needed before offering extension services.", search: "hair extension tools beads tape-in kit" },
        { name: "Wig, hairpiece, and block kit", why: "Used for custom work, film, and theatre.", search: "wig block canvas head stylist training" },
        { name: "Barber razor and straight-razor kit", why: "Shaving and neckline work. Learn the regulations and sharps rules for your province.", search: "barber shavette razor straight razor kit" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for theory, math, and infection control study. Check with your school and exam body about calculator rules before you buy.",
      items: [
        { name: "Mannequin heads (cutting, colour, and braiding)", why: "Practice cuts, colouring, and updos at home. Many schools list a required style.", search: "cosmetology mannequin head human hair practice" },
        { name: "Mannequin stand and clamp", why: "Keeps the head stable on a table while you practise.", search: "mannequin head tripod stand clamp" },
        { name: "Cosmetology theory textbook", why: "Covers anatomy, chemistry, colour theory, and infection control. Ask which text your school uses.", search: "Milady Standard Cosmetology textbook" },
        { name: "Basic calculator", why: "Ratios for colour and developer, pricing, and sales.", search: "basic calculator solar office" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic, which also helps with Red Seal exam review.", search: "binder dividers highlighters" },
        { name: "Notebook and client record cards", why: "Record formulas, patch tests, and service details.", search: "notebook index cards client record salon" },
        { name: "Camera or phone tripod", why: "Capture your work for a portfolio, with client consent.", search: "phone tripod portfolio photography" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare. Search for the Hairstylist trade profile from here.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Health Canada (Government of Canada)", desc: "Federal home page. Search for cosmetic ingredient and product safety guidance.", url: "https://www.canada.ca/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Workplace safety facts on chemical exposure, skin care, and ergonomics.", url: "https://www.ccohs.ca/" },
        { name: "Skills Canada", desc: "Careers and skills competitions, including hairstyling competitions.", url: "https://www.skillscanada.ca/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local rules.",
      items: [
        { name: "Hair structure and the cuticle", desc: "Cuticle, cortex, and medulla explained.", url: "https://www.youtube.com/results?search_query=hair+structure+cuticle+cortex+medulla+cosmetology" },
        { name: "Sectioning and haircutting basics", desc: "Guidelines, elevation, and sections.", url: "https://www.youtube.com/results?search_query=haircutting+basics+sectioning+elevation+guideline" },
        { name: "Colour theory and the level system", desc: "Levels, tones, and the colour wheel.", url: "https://www.youtube.com/results?search_query=hair+colour+theory+level+system+colour+wheel" },
        { name: "Developer volumes and lift", desc: "10, 20, 30, and 40 volume developer.", url: "https://www.youtube.com/results?search_query=hair+developer+volumes+10+20+30+40+lift+explained" },
        { name: "Infection control in the salon", desc: "Cleaning versus disinfecting tools.", url: "https://www.youtube.com/results?search_query=salon+infection+control+disinfecting+tools+cosmetology" },
        { name: "Perm and relaxer chemistry", desc: "How reduction and neutralization work.", url: "https://www.youtube.com/results?search_query=perm+chemistry+reduction+neutralization+cosmetology" },
        { name: "Blow-drying and styling", desc: "Tension, nozzles, and finishing.", url: "https://www.youtube.com/results?search_query=blow+dry+technique+round+brush+salon+tutorial" },
        { name: "Client consultation skills", desc: "Asking questions and setting expectations.", url: "https://www.youtube.com/results?search_query=hairstylist+client+consultation+tips" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for hairstyling yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: hairstylist apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=hairstylist+apprentice+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: hairstylist career podcast", desc: "Working stylists talk about building a clientele and avoiding burnout.", url: "https://www.youtube.com/results?search_query=hairstylist+career+podcast+salon+life" },
        { name: "YouTube: hair colour education podcast", desc: "Colour formulation and correction talk.", url: "https://www.youtube.com/results?search_query=hair+colour+education+podcast+colourist" },
        { name: "YouTube: salon client retention podcast", desc: "Rebooking, communication, and customer care.", url: "https://www.youtube.com/results?search_query=salon+client+retention+rebooking+podcast" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, business, and leadership.",
      items: [
        { name: "YouTube: Red Seal hairstylist exam prep (talk-through)", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+hairstylist+exam+preparation" },
        { name: "YouTube: salon business and pricing podcast", desc: "Pricing services, booth rental, and running a salon.", url: "https://www.youtube.com/results?search_query=salon+business+pricing+booth+rental+podcast" },
        { name: "YouTube: leading a team and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
      ]
    }
  ],
  practiceBank: {
    1: hairQuestions([
      ["Which layer of the hair shaft contains most of the pigment and gives hair its strength?", "Cortex", ["Cuticle", "Medulla", "Papilla"], "The cortex is the thick middle layer holding melanin and most of the hair's strength and elasticity."],
      ["The outer protective layer of the hair shaft is the:", "Cuticle", ["Cortex", "Medulla", "Follicle"], "It is made of overlapping scales that protect the cortex."],
      ["In Canada, a hospital-grade disinfectant label should show:", "A Drug Identification Number (DIN)", ["A barcode only", "A fragrance rating", "A recipe"], "A DIN shows the product is authorized by Health Canada. Follow label directions."],
      ["For a disinfectant to work properly you must:", "Clean the tool first, then follow the label contact time", ["Skip cleaning and spray lightly", "Dilute it as you wish", "Wipe it dry right away"], "Dirt blocks disinfectants, and they need to stay wet for the stated contact time."],
      ["Used razor blades should be disposed of in:", "A puncture-resistant sharps container", ["The regular garbage", "A paper bag", "A drawer"], "Sharps containers protect people from cuts and bloodborne infections."],
      ["If a client has visible head lice you should:", "Politely decline the service and refer them, and follow your salon's cleaning rules", ["Continue as normal", "Spray the client's hair", "Ignore it"], "Lice spread by contact. Do not proceed, and clean and disinfect tools as required."],
      ["Shampoo and scalp pH are typically:", "Slightly acidic, about 4.5 to 5.5", ["Strongly alkaline, 12 to 14", "Neutral at 7 only", "Strongly acidic at 1"], "Mildly acidic products help keep the cuticle smooth."],
      ["Scalp hair typically grows about:", "1 to 1.5 cm per month", ["1 mm per month", "5 cm per month", "10 cm per month"], "Growth rates vary from person to person."],
      ["When should you wash your hands during service?", "Before and after each client", ["Only at lunch", "Only after chemical services", "Never if wearing gloves"], "Hand hygiene is the most important infection-control step."],
      ["The first step of any service is:", "A client consultation", ["Applying chemicals", "Cutting", "Shampooing"], "The consultation covers goals, hair history, allergies, and expectations."],
      ["Wet hair is:", "More fragile and prone to stretching and breakage", ["Stronger than dry hair", "Unaffected by combing", "Impossible to cut"], "Detangle gently from ends to roots."],
      ["Which glove material is common in salons to avoid latex allergies?", "Nitrile", ["Cotton", "Paper", "Wool"], "Nitrile is chemical-resistant and latex-free."],
      ["If you cut a client during a service, you should:", "Stop, wear gloves, clean and cover the wound, and dispose of items correctly", ["Continue and ignore it", "Rinse the blade and reuse it immediately", "Use the same towel on the next client"], "Blood must be handled as a possible infection source."],
      ["Where do you find hazards and first aid information for a hair colour product?", "Safety Data Sheet (SDS)", ["Price list", "Appointment book", "Mirror"], "WHMIS requires suppliers to provide SDSs for hazardous products."],
      ["To reduce back and neck strain you should:", "Adjust the chair height and change posture often", ["Bend over the chair", "Keep your arms raised", "Stand in one position"], "Good ergonomics prevents repetitive strain."],
      ["Combs and brushes used on a client should be:", "Cleaned and disinfected, or discarded if they cannot be", ["Rinsed in cold water", "Wiped on a towel", "Shared between clients"], "Porous items such as emery boards or foam must be single-use."],
      ["Why should you wear a cape and neck strip on a client?", "To protect their skin and clothing from hair and chemicals", ["To keep them warm", "To cover their face", "To speed up cutting"], "It also protects the stylist from hair clippings and spills."]
    ]),
    2: hairQuestions([
      ["In the level system, a lower number means the hair is:", "Darker", ["Lighter", "Wetter", "Longer"], "Level 1 is black and level 10 is the lightest blonde."],
      ["The three primary colours in colour theory are:", "Red, yellow, and blue", ["Red, green, and orange", "Black, white, and grey", "Orange, green, and violet"], "Secondary colours come from mixing two primaries."],
      ["Which colour neutralizes unwanted orange tones?", "Blue", ["Red", "Orange", "Yellow"], "Colours opposite each other on the wheel cancel each other out. Blue is opposite orange."],
      ["Violet or purple toners neutralize:", "Yellow", ["Green", "Blue", "Red"], "Violet is opposite yellow on the colour wheel."],
      ["20 volume developer is about what percent hydrogen peroxide?", "6%", ["3%", "9%", "12%"], "10 vol is 3%, 20 vol is 6%, 30 vol is 9%, and 40 vol is 12%."],
      ["Higher volume developer will generally:", "Give more lift but is harsher on the hair and scalp", ["Deposit more colour only", "Lift less", "Be gentler"], "Choose the lowest volume that achieves the result."],
      ["A patch (predisposition) test is used to:", "Check for an allergic reaction to colour before the service", ["Measure hair length", "Find the hair level", "Test shampoo"], "Follow the manufacturer's directions, which typically call for testing 24 to 48 hours before colouring."],
      ["Semi-permanent colour:", "Deposits colour without lifting natural pigment", ["Lifts several levels", "Is made with bleach", "Never fades"], "It coats or slightly penetrates the hair and fades over time."],
      ["Cutting hair at 90° elevation from the head generally gives:", "Uniform layers", ["A blunt line", "A graduated line", "No change in length"], "Elevation controls layering and weight distribution."],
      ["A guideline in haircutting is:", "The first section cut that you follow to cut the rest", ["A rule in the salon policy", "A comb type", "A type of shears"], "Cutting to a consistent guide keeps lengths accurate."],
      ["Hair with high porosity:", "Absorbs moisture and chemicals quickly and may lose them quickly", ["Resists all products", "Is always virgin hair", "Is always straight"], "Porosity affects processing times and results."],
      ["The best way to point the blow-dryer nozzle for smooth hair is:", "Down the hair shaft from roots to ends", ["Against the cuticle", "Directly at the scalp", "From a distance of 1 m"], "Directing air with the cuticle makes it lie flat and shiny."],
      ["A heat protectant is used to:", "Reduce damage from hot tools", ["Increase colour deposit", "Remove oil", "Raise pH"], "It does not make hot tools safe at any temperature, so use controlled settings."],
      ["Elasticity of a strand is tested by:", "Gently stretching a wet strand and seeing if it returns", ["Cutting it", "Burning it", "Soaking it in bleach"], "Hair with poor elasticity breaks easily and may not tolerate chemical services."],
      ["Which tool is used to cut hair very short, evenly, and quickly for fades?", "Clippers with guards", ["Thinning shears", "Pin tail comb", "Round brush"], "Guard sizes control the length left."],
      ["Colour that deposits tone only and does not need developer is:", "A direct dye or semi-permanent without peroxide", ["Permanent colour", "Bleach", "A perm solution"], "Always follow the manufacturer's directions."],
      ["A strand test before a colour service helps to:", "Predict the result and processing time", ["Avoid shampooing", "Cut the hair", "Choose a hair clip"], "It also checks how damaged or porous hair reacts."]
    ]),
    3: hairQuestions([
      ["In a permanent wave, the perm solution (reducing agent) works by:", "Breaking disulfide bonds in the cortex", ["Coating the cuticle", "Dyeing the hair", "Removing the cuticle"], "Thioglycolate-based solutions soften the hair so it can be reshaped."],
      ["The neutralizer in a perm:", "Oxidizes and re-forms the bonds in the new shape", ["Washes out the curl", "Cools the hair", "Removes oil"], "It rebuilds disulfide bonds to hold the curl."],
      ["Using smaller perm rods generally results in:", "Tighter curls", ["Looser waves", "No curl", "Straighter hair"], "Rod size controls curl diameter."],
      ["A lye relaxer contains:", "Sodium hydroxide, a strong alkali", ["Hydrogen peroxide", "Ammonium thioglycolate only", "Vinegar"], "Protect the scalp and skin, and follow the manufacturer's directions exactly."],
      ["After rinsing a relaxer you should:", "Use a neutralizing shampoo", ["Leave the product in", "Apply bleach", "Use a hot iron"], "Neutralizing restores the pH and stops the chemical action."],
      ["When lifting dark hair with bleach, the underlying pigment generally progresses through:", "Red, orange, and then yellow stages", ["Blue, green, and violet", "White first", "Black first"], "Understanding underlying pigment helps you choose the right toner."],
      ["A toner is used to:", "Adjust the tone after lifting", ["Lift more levels", "Straighten hair", "Remove colour"], "Toners neutralize unwanted warmth or add a desired tone."],
      ["Some keratin smoothing products can release formaldehyde. Good practice is to:", "Read the SDS, ventilate well, and use PPE", ["Ignore the label", "Close all windows", "Use more product"], "Follow regulations and the manufacturer's directions for the product."],
      ["Which scalp condition is contagious and should be referred to a doctor?", "Ringworm of the scalp (tinea capitis)", ["Dry skin", "Dandruff", "Oily hair"], "It is a fungal infection, so do not perform services."],
      ["If a client has a reaction during a colour service, you should:", "Stop the service, rinse the product off, and recommend medical attention", ["Continue", "Cover with foil", "Apply more developer"], "Document the incident per your salon's policy."],
      ["Previously chemically treated hair generally:", "Processes differently and needs careful testing", ["Processes the same as virgin hair", "Never takes colour", "Is always stronger"], "Porosity and damage change processing time."],
      ["A double-process colour is:", "Lightening first, then toning or colouring in a second step", ["Two shampoos", "Two haircuts", "Colouring twice in the same bowl"], "It allows for lighter or fashion colours."],
      ["Balayage is:", "A freehand technique of painting colour onto sections", ["A type of perm", "A haircut", "A shampoo"], "It gives a softer, more natural-looking graduation."],
      ["Tight hairstyles worn for long periods can cause:", "Traction alopecia", ["Ringworm", "Dandruff", "Greying"], "Repeated tension damages follicles."],
      ["Colour chemicals should be mixed:", "In a ventilated area, using non-metallic bowls", ["In a metal bowl", "In a closed cupboard", "With bare hands"], "Metal can react with some chemicals."],
      ["To estimate a client's natural level before colouring you should:", "Check the natural hair near the root in good lighting", ["Guess from the ends", "Use only the packaging", "Check the client's clothing colour"], "Levels differ between roots and previously treated lengths."]
    ]),
    4: hairQuestions([
      ["A product costs $10 and sells for $25. What is the gross margin?", "60%", ["40%", "150%", "250%"], "Margin = (25 − 10) ÷ 25 = 0.60. The markup is 150%, which is a different measure."],
      ["Why should you record patch test results, formulas, and allergies on client cards?", "To provide safe, consistent service and show good practice", ["To fill time", "Because clients like to see them", "Only for advertising"], "Records protect clients and you if there is a complaint. Protect clients' private information as privacy law requires."],
      ["For a major colour correction, a good plan is to:", "Assess hair history, do strand tests, and work in stages", ["Do everything in one step", "Skip the consultation", "Use the highest developer volume"], "Staged work reduces damage and gives a predictable outcome."],
      ["Colour is mixed at 1 part colour to 1.5 parts developer. With 60 g of colour, how much developer is needed?", "90 g", ["40 g", "60 g", "120 g"], "60 × 1.5 = 90 g. Always follow the manufacturer's mixing ratio."],
      ["A booth renter is usually:", "Self-employed, responsible for their own taxes and insurance", ["An employee on payroll", "Covered by the salon owner's taxes", "Exempt from all rules"], "Check your province's rules and Canada Revenue Agency guidance."],
      ["Which should you ask a client who wants a chemical service?", "About allergies, past reactions, and recent chemical treatments", ["Their age only", "Their phone model", "The salon's rent"], "This prevents unsafe combinations of chemicals."],
      ["The best way to handle a client's complaint is to:", "Listen, apologize where fitting, and offer a fair fix", ["Argue", "Ignore them", "Blame the previous stylist"], "Professional communication builds trust."],
      ["Leftover chemicals should be disposed of by:", "Following the SDS and local rules", ["Pouring them into any drain", "Mixing them together", "Leaving them in the open"], "Some products need special handling."],
      ["Workplace ventilation in a salon helps to:", "Reduce exposure to fumes and dust", ["Increase chemical strength", "Dry hair faster only", "Remove the need for gloves"], "Use source capture and ventilation where chemicals are used."],
      ["Scheduling a colour client's processing time so you can serve another client is an example of:", "Efficient time management", ["Poor service", "Cross-contamination", "An unsafe act"], "Be sure the client is never left unsupervised during a chemical process."],
      ["Certification requirements for hairstylists:", "Vary by province or territory, so confirm with your authority", ["Are the same everywhere", "Do not exist", "Only apply to barbers"], "Some provinces regulate the trade as compulsory and others as voluntary."],
      ["Cleaning and servicing hot tools regularly helps to:", "Prevent product buildup, shock, and burns", ["Make them hotter", "Increase damage to hair", "Remove the need for temperature control"], "Inspect cords and plates, and unplug tools after use."],
      ["Retail product recommendations should be based on:", "The client's hair needs and goals", ["Only the highest margin", "Whatever is on sale", "The stylist's preferences"], "Honest advice builds loyalty."],
      ["Mentoring a new apprentice includes:", "Demonstrating, observing, and giving constructive feedback", ["Only criticizing", "Never letting them practise", "Doing everything for them"], "Supervision and feedback speed learning."],
      ["A client wants a drastic change that your assessment shows is unsafe for their hair. You should:", "Explain the risks and suggest a staged or alternative plan", ["Do it anyway", "Refuse without explanation", "Use extra bleach"], "Informed consent and honest advice protect both client and hair."],
      ["A good rebooking habit is to:", "Offer the next appointment at checkout based on their hair's needs", ["Wait for the client to call", "Never mention it", "Book at random"], "Regular visits maintain cut and colour quality."]
    ])
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the training employers ask for (commonly WHMIS and first aid; requirements vary by province)", "Learn whether hairstyling is a compulsory or voluntary trade in your province", "Find a sponsoring salon, register your apprenticeship, and keep your hours logged"] },
    { title: "Year 1: foundations", items: ["Learn infection control, sanitation, and client safety", "Practise shampooing, scalp care, and sectioning", "Learn basic cuts and blow-drying", "Complete your first technical training block", "Build your core kit (see Buying tools)"] },
    { title: "Year 2: cutting, colour, and styling", items: ["Master layered, graduated, and one-length cuts", "Learn colour theory, levels, and developer", "Do roller sets, updos, and thermal styling", "Learn client consultation and record keeping"] },
    { title: "Year 3: chemical services", items: ["Perform perms, relaxers, and smoothing services safely", "Handle highlights, balayage, and corrective colour", "Recognize scalp and hair conditions and refer clients when needed", "Build your clientele and rebooking habits"] },
    { title: "Year 4 and beyond: advanced", items: ["Many provinces complete the term in 2 to 3 years, so use this stage to deepen skills and prepare for lead roles", "Learn pricing, retail, and salon operations", "Mentor new apprentices", "Plan continuing education in trends and techniques", "Use the Red Seal standard to find gaps in your experience"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["Balayage", "A freehand technique of painting colour onto hair."],
    ["Bloodborne pathogen", "A microorganism in blood that can cause disease."],
    ["Cortex", "The middle layer of the hair that holds pigment and strength."],
    ["Cuticle", "The outer protective layer of overlapping scales on the hair shaft."],
    ["Deposit", "Adding colour to hair without lifting natural pigment."],
    ["Developer", "Hydrogen peroxide solution used to activate oxidative colour or bleach."],
    ["DIN", "Drug Identification Number, shown on authorized disinfectants in Canada."],
    ["Disinfect", "To destroy most harmful microorganisms on a clean surface."],
    ["Elevation", "The angle at which hair is held from the head when cutting."],
    ["Graduation", "A cut that builds weight by shortening hair in layers from the nape upward."],
    ["Guideline", "The first section cut that guides the cutting of the remaining hair."],
    ["Hair texture", "The thickness of each hair strand: fine, medium, or coarse."],
    ["Layering", "A cut in which hair is cut to different lengths to create movement."],
    ["Level", "A number from 1 (black) to 10 (lightest blonde) that describes hair darkness."],
    ["Lift", "Lightening the natural or artificial pigment in the hair."],
    ["Medulla", "The innermost layer of the hair shaft, which is not present in all hair."],
    ["Neutralizer", "A product that stops a chemical action and sets the new shape in a perm."],
    ["Oxidation", "A chemical reaction involving oxygen, used in permanent colour and perm neutralizing."],
    ["Patch test", "A test of a small area of skin to check for allergy before a service."],
    ["Porosity", "The ability of hair to absorb moisture and chemicals."],
    ["Reduction", "A chemical reaction that breaks disulfide bonds in a perm."],
    ["Sanitize", "To reduce microorganisms to a safe level, which is less than disinfecting."],
    ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
    ["Strand test", "A test on a small section of hair to preview colour results."],
    ["Texturizing", "Removing bulk or adding movement with shears, razors, or products."],
    ["Toner", "A product used to adjust the tone of lightened or coloured hair."],
    ["Traction alopecia", "Hair loss from repeated pulling or tension on the follicles."],
    ["WHMIS", "Canada's workplace hazardous materials information system."]
  ],
  cards: [
    { front: "Outer layer of hair", back: "Cuticle" },
    { front: "Layer containing pigment", back: "Cortex" },
    { front: "Level system", back: "1 is black and 10 is the lightest blonde" },
    { front: "Developer volumes and strengths", back: "10 vol = 3%, 20 vol = 6%, 30 vol = 9%, 40 vol = 12%" },
    { front: "Colour that cancels orange", back: "Blue" },
    { front: "Colour that cancels yellow", back: "Violet" },
    { front: "Disinfectant label number in Canada", back: "DIN (Drug Identification Number)" },
    { front: "Perm chemistry", back: "Reduction breaks disulfide bonds, and neutralizer re-forms them" },
    { front: "Gross margin", back: "(Selling price − cost) ÷ selling price × 100" }
  ],
  jobsIntro: "Look for independent and franchise salons, barbershops, spas and resorts, cruise lines, film and theatre productions, and booth-rental or mobile styling.",
  tips: ["Bring a short resume, your portfolio photos, and ID.", "Show your professionalism, with a neat appearance and a friendly manner.", "Visit salons in person at quiet times of day, and follow up.", "Ask what tools you need and what the salon supplies."],
  forumTopics: ["Starting out", "Cutting and colour", "Chemical services and safety", "Red Seal and exam prep", "Tools and gear", "Province and licensing questions"],
  reference: [
    {
      title: "Developer strengths",
      table: {
        head: ["Volume", "Hydrogen peroxide", "Typical use"],
        rows: [
          ["10 vol", "3%", "Deposit-only or gentle colour, toning"],
          ["20 vol", "6%", "Standard permanent colour, up to about 2 levels of lift"],
          ["30 vol", "9%", "Stronger lift, up to about 3 levels"],
          ["40 vol", "12%", "Maximum lift, used with care away from the scalp"]
        ]
      },
      note: "Lift amounts depend on the product and the hair. Follow the manufacturer's instructions."
    },
    {
      title: "Colour theory pointers",
      list: [
        "Primary colours: red, yellow, and blue",
        "Secondary colours: orange, green, and violet",
        "Blue cancels orange, violet cancels yellow, and green cancels red",
        "Level system: 1 is black and 10 is the lightest blonde",
        "Underlying pigment when lifting dark hair moves from red to orange to yellow to pale yellow"
      ]
    },
    {
      title: "Hair structure",
      table: {
        head: ["Layer", "Description"],
        rows: [
          ["Cuticle", "Outer scales, protects the cortex"],
          ["Cortex", "Middle layer, pigment, strength, and elasticity"],
          ["Medulla", "Innermost layer, not present in all hair"]
        ]
      },
      note: "Disulfide bonds in the cortex are the bonds that perms and relaxers change."
    },
    {
      title: "Infection control order of operations",
      list: [
        "Clean: remove hair, product, and debris with soap or detergent and water",
        "Disinfect: use a disinfectant with a DIN, following the dilution and contact time on the label",
        "Rinse and dry as the label directs, and store clean tools in a clean, covered place",
        "Throw away single-use items such as emery boards, neck strips, and razor blades after one client",
        "Wash your hands before and after every client"
      ],
      note: "Rules differ between provinces and public health units. Confirm local requirements."
    },
    {
      title: "Key formulas and math",
      list: [
        "Gross margin % = (selling price − cost) ÷ selling price × 100",
        "Markup % = (selling price − cost) ÷ cost × 100",
        "Developer needed = colour weight × mixing ratio (1 : 1.5 with 60 g colour is 90 g)",
        "Service time planning: processing time can be used for another client, but never leave a chemical service unsupervised",
        "°F = °C × 9 ÷ 5 + 32, and 1 in = 2.54 cm"
      ]
    }
  ]
});
