// Automotive Refinishing Technician content. Practice questions are original study aids, not official Red Seal exam questions.
(() => {
  // Each row: [question, correct answer, [three wrong answers], explanation]. The correct position rotates per question.
  const bank = (rows, offset) => rows.map(([q, correct, wrong, explain], i) => {
    const answer = (i + offset) % 4;
    const options = [...wrong];
    options.splice(answer, 0, correct);
    return { q, options, answer, explain };
  });

  registerTrade({
    id: "automotive-refinishing",
    store: "automotive-refinishing",
    title: "Automotive Refinishing Technician",
    name: "Automotive Refinishing Technician",
    short: "automotive refinishing",
    category: "Automotive · Paint · Collision Repair",
    summary: "Prepare, prime, colour match, spray, and finish vehicle surfaces so repaired panels match the original paint and last in service.",
    work: "Refinishing technicians prepare repaired panels, mix and match colour, spray primer, basecoat, and clearcoat in a booth, cure the finish, and polish it. The work requires careful preparation, steady spray technique, and strict attention to respiratory protection, ventilation, and fire safety because paint products contain solvents and isocyanates.",
    duration: "Usually 2–3 years (Job Bank), varies by province",
    union: "Unifor",
    unionUrl: "https://www.unifor.org/",
    profileUrl: "https://red-seal.ca/eng/trades/auto-refinish-tech.shtml",
    durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/7688/ca",
    jobSearch: "automotive painter apprentice",
    journeySearch: "automotive refinishing technician painter",
    aliases: "auto painter car painter automotive painter paint technician refinisher paint and body spray painter red seal 310c",
    tools: [
      "Fit-tested respirator and paint suit",
      "Nitrile gloves and safety glasses",
      "DA sander and sanding blocks",
      "Mixing cups and sticks with ratio markings",
      "Quality HVLP spray gun",
      "Masking tape and paper"
    ],
    insight: {
      skills: ["Colour vision and an eye for detail", "Steady hands and consistent technique", "Patience with preparation work", "Following technical data sheets and mixing ratios exactly"],
      hazards: ["Isocyanates in clearcoats and hardeners: respiratory protection, skin protection, and ventilation", "Solvent vapour and fire: ground equipment, no ignition sources, and approved storage", "Sanding dust: respirator and extraction", "Slips, noise, and compressed air: use proper PPE and hose handling"],
      settings: ["Collision repair shops", "Dealership body and paint shops", "Fleet, bus, and heavy-truck refinishing", "Specialty and custom paint shops"]
    },
    toolGroups: [
      {
        title: "Day-one tools, buy once and buy well",
        note: "Professional-grade tools and PPE that hold up for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
        items: [
          { name: "Half-face respirator with organic vapour and P100 cartridges (fit tested)", why: "Basic protection for sanding and mixing. Spraying isocyanate coatings generally needs a supplied-air system, so follow your shop's program.", search: "3M half face respirator organic vapor P100 cartridges" },
          { name: "Disposable paint suits with hood", why: "Keeps paint and chemicals off your skin and clothing, and keeps lint off the vehicle.", search: "disposable paint suit with hood spray painting" },
          { name: "Nitrile gloves, box of 100", why: "Isocyanates and solvents can be absorbed through skin. Nitrile resists them better than latex.", search: "nitrile gloves powder free box 100 industrial" },
          { name: "Safety glasses or full-face shield", why: "Splash and sanding protection.", search: "safety glasses full face shield 3M" },
          { name: "CSA-approved safety boots", why: "Comfortable, rated protection for a long day on concrete. Choose anti-static footwear if your employer requires it.", search: "CSA safety boots Blundstone Dakota" },
          { name: "Mixing cups with ratio scales and mixing sticks", why: "Accurate mixing starts with the right cup and a clean stirring stick.", search: "paint mixing cups ratio scale mixing sticks" },
          { name: "Paint strainers and viscosity cup", why: "Strain every mix, and check viscosity when the manufacturer requires it.", search: "paint strainers 190 micron viscosity cup" },
          { name: "Masking tape and paper (3M or similar)", why: "Clean tape lines and no bleed-through are the basis of a clean job.", search: "3M automotive masking tape masking paper" },
          { name: "Tack cloths, lint-free wipes, and wax and grease remover", why: "Surface cleanliness prevents fisheyes and other defects.", search: "tack cloth lint free wipes wax and grease remover automotive" }
        ]
      },
      {
        title: "Build up in first and second year",
        note: "Buy these as the work calls for them. Ask your journeyperson what holds up in your shop.",
        items: [
          { name: "HVLP spray gun (SATA, Iwata, DeVilbiss, or similar)", why: "A well-made gun gives a consistent fan and atomization. Ask which tip sizes your shop uses.", search: "SATA Iwata DeVilbiss HVLP spray gun automotive" },
          { name: "Gun cleaning kit with brushes and needle picks", why: "A clean gun is the key to a clean finish. Never use metal to clean air-cap holes.", search: "spray gun cleaning kit brushes" },
          { name: "DA sander and a set of sanding blocks", why: "Scuffing, feathering primer, and levelling surfaces evenly.", search: "DA sander air 5 inch sanding block set auto body" },
          { name: "Assorted abrasives from P240 to P600, and finishing papers", why: "A progression of grits is needed for primer, scuffing, and finishing.", search: "automotive sandpaper assortment P320 P400 P600 wet dry" },
          { name: "Air line filter, regulator, and gauge for the gun", why: "Controls air pressure at the gun and removes water and oil that would ruin paint.", search: "spray gun air regulator gauge filter desiccant" },
          { name: "Film thickness gauge", why: "Checks existing paint thickness before refinishing.", search: "paint thickness gauge automotive" },
          { name: "Colour matching light and spray-out cards", why: "Compare matches under different light, and test spray before the panel.", search: "colour matching light automotive spray out cards" },
          { name: "Tool bag or mobile cart for your kit", why: "Keeps your tools clean and protected from dust.", search: "tool bag organizer cart" }
        ]
      },
      {
        title: "Later and specialized",
        note: "Often supplied by the shop or employer. Ask before buying.",
        items: [
          { name: "Supplied-air respirator system", why: "Required in many shops for spraying isocyanate coatings. Normally employer-supplied and fit tested.", search: "supplied air respirator paint spray system" },
          { name: "Rotary or dual-action polisher and compounds", why: "Remove dust nibs and refine the finish after curing.", search: "dual action polisher rotary compound polish automotive" },
          { name: "Spectrophotometer", why: "Reads colour to help match it. Shop equipment.", search: "automotive paint spectrophotometer colour matching" },
          { name: "Infrared curing lamp", why: "Speeds drying of primers and fillers. Shop equipment.", search: "infrared curing lamp auto body paint" },
          { name: "Mixing scale and paint mixing system access", why: "Mixing by weight improves accuracy and reduces waste. Shop equipment.", search: "paint mixing scale automotive refinish" }
        ]
      },
      {
        title: "School supplies for technical training",
        note: "What helps in the classroom for colour theory, mixing math, and technical data sheets. Check with your school and your exam body about calculator rules before you buy.",
        items: [
          { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Mixing ratios, coverage, and conversions.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
          { name: "Colour wheel", why: "Learn hue, value, and chroma, and how tints change a colour.", search: "artist colour wheel mixing guide" },
          { name: "Steel ruler and small tape measure", why: "Measuring panels and spray distance.", search: "steel ruler 300mm tape measure" },
          { name: "Field notebook (Rite in the Rain)", why: "Record formulas, products used, and defect fixes. Weatherproof paper survives a shop.", search: "Rite in the Rain field notebook" },
          { name: "Binder with sheet protectors for technical data sheets", why: "Keep TDS and mixing charts clean and organized for study and for reference.", search: "binder sheet protectors dividers" },
          { name: "Automotive refinishing textbook or study guide", why: "Reinforces classroom learning. Ask your school which edition they use.", search: "automotive refinishing textbook paint and body Red Seal" },
          { name: "Highlighters and permanent markers", why: "Marking study notes and labelling mixed products.", search: "highlighters Sharpie permanent markers" }
        ]
      }
    ],
    mediaGroups: [
      {
        title: "Official and standards resources",
        items: [
          { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare, including the trade profile for your trade.", url: "https://red-seal.ca/eng/welcome.shtml" },
          { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Plain-language information on WHMIS, solvents, isocyanates, and respirators.", url: "https://www.ccohs.ca/" },
          { name: "I-CAR", desc: "Collision repair training and technical resources, including refinishing topics.", url: "https://www.i-car.com/" },
          { name: "Automotive Industries Association of Canada (AIAC)", desc: "Industry information for the Canadian automotive aftermarket.", url: "https://www.aiacanada.com/" },
          { name: "Unifor", desc: "Union representing many automotive and collision workers in Canada.", url: "https://www.unifor.org/" }
        ]
      },
      {
        title: "Video searches",
        note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and the product's technical data sheet.",
        items: [
          { name: "Spray gun setup and technique", desc: "Fan pattern, distance, and overlap.", url: "https://www.youtube.com/results?search_query=HVLP+spray+gun+setup+technique+automotive+painting" },
          { name: "Surface preparation and masking", desc: "Cleaning, sanding, and masking before paint.", url: "https://www.youtube.com/results?search_query=automotive+paint+surface+preparation+sanding+masking" },
          { name: "Basecoat and clearcoat application", desc: "Applying basecoat and clear for a smooth finish.", url: "https://www.youtube.com/results?search_query=basecoat+clearcoat+application+automotive+painter" },
          { name: "Automotive colour matching and blending", desc: "Tinting and blending into adjacent panels.", url: "https://www.youtube.com/results?search_query=automotive+paint+colour+matching+blending+tinting" },
          { name: "Paint defects and how to fix them", desc: "Fisheyes, solvent pop, orange peel, and runs.", url: "https://www.youtube.com/results?search_query=automotive+paint+defects+fisheyes+solvent+pop+orange+peel" },
          { name: "Waterborne basecoat application", desc: "How waterborne paint differs from solvent-based.", url: "https://www.youtube.com/results?search_query=waterborne+basecoat+application+automotive+refinish" },
          { name: "Paint booth safety and respirators", desc: "Ventilation, respirator use, and fire safety.", url: "https://www.youtube.com/results?search_query=paint+booth+safety+respirator+isocyanate+automotive" },
          { name: "Cut and polish a clearcoat", desc: "Wet sanding and compounding a finish.", url: "https://www.youtube.com/results?search_query=wet+sand+compound+polish+clearcoat+automotive" }
        ]
      },
      {
        title: "Audio, beginner (pre-apprentice and year 1)",
        note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for refinishing yourself.",
        items: [
          { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
          { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
          { name: "YouTube: auto painter apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=auto+painter+apprentice+podcast" }
        ]
      },
      {
        title: "Audio, intermediate (years 2-3)",
        note: "Trade-knowledge talk that builds on what you do on the job.",
        items: [
          { name: "YouTube: automotive refinishing podcast", desc: "Painters talk technique, products, and troubleshooting.", url: "https://www.youtube.com/results?search_query=automotive+refinishing+podcast+painter" },
          { name: "YouTube: colour matching talk (listen-along)", desc: "Colour theory and matching talks to hear while commuting.", url: "https://www.youtube.com/results?search_query=automotive+paint+colour+matching+podcast" },
          { name: "YouTube: paint shop stories and tips (audio)", desc: "Job-site lessons from working painters.", url: "https://www.youtube.com/results?search_query=auto+paint+shop+podcast+tips+stories" }
        ]
      },
      {
        title: "Audio, advanced (year 4 to journeyperson)",
        note: "Exam prep, shop business, and leadership.",
        items: [
          { name: "YouTube: Red Seal automotive refinishing exam prep", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+automotive+refinishing+technician+exam+preparation" },
          { name: "YouTube: paint department management podcast", desc: "Materials control, cycle time, and running a paint department.", url: "https://www.youtube.com/results?search_query=collision+shop+paint+department+management+podcast" },
          { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
        ]
      }
    ],
    practiceBank: {
      1: bank([
        ["Where do you find the hazards, handling, and first-aid details for a clearcoat hardener?", "Safety Data Sheet (SDS)", ["The colour formula card supplied by the mixing system", "Spray gun manual", "Repair estimate"], "WHMIS requires labels and SDS for hazardous products. Read them before use."],
        ["Which chemical group in many hardeners and clearcoats is a respiratory sensitizer?", "Isocyanates", ["Chlorinated solvents", "Carbonates", "Silicates"], "Isocyanate exposure can cause asthma-like sensitization. Use proper respiratory and skin protection."],
        ["Why are nitrile gloves preferred over latex when handling paint products?", "They resist solvents and chemicals better", ["They are thicker and stay on longer during a shift", "They are cheaper", "They are heavier"], "Skin absorption is a route of exposure. Replace damaged gloves."],
        ["Which is the usual order of a basic paint system from the surface up?", "Primer, basecoat, clearcoat", ["Clearcoat, basecoat, primer", "Basecoat, primer, clearcoat", "Clearcoat, primer, basecoat"], "Primer bonds and builds, the basecoat supplies colour, and the clear gives gloss and protection."],
        ["What is the purpose of wax and grease remover?", "To remove contaminants such as oil and silicone before sanding and painting", ["To thin the paint so that it flows out evenly and dries faster on the panel", "To harden primer", "To add gloss"], "Contaminants cause fisheyes and adhesion failures. Wipe on and wipe off with clean cloths."],
        ["What does a mixing ratio of 4:1 mean?", "Four parts of paint to one part of hardener, as stated by the manufacturer", ["Four coats of paint applied with one gun setup before the clear", "Four hours and one minute", "Four colours and one clear"], "Always follow the technical data sheet for the product."],
        ["Which sandpaper is coarser: P180 or P600?", "P180", ["P600", "They are the same", "It depends on the brand"], "A lower grit number means a coarser abrasive."],
        ["Why do you strain paint before filling the gun cup?", "To remove lumps and debris that could cause defects", ["To thin it so that it sprays more evenly and uses less product", "To make it darker", "To cool it"], "Strainers are cheap compared with repainting a panel."],
        ["Oily rags soaked with solvent or catalyzed product should be:", "Placed in an approved metal waste container", ["Left on the bench at the end of the shift to air out", "Put in a pocket", "Thrown in the regular garbage"], "Some rags can self-heat and ignite. Follow your shop's waste program."],
        ["Which extinguisher class is for flammable liquids such as paint thinner?", "Class B", ["Class A", "Class C", "Class D"], "Know the location of extinguishers in your shop and booth."],
        ["Why is a spray booth kept under controlled airflow?", "To carry overspray and vapours away and keep dust off the finish", ["To heat the shop so that the paint dries at a steady, even rate", "To make noise", "To dry rags"], "Filters clean incoming air and exhaust filters capture overspray."],
        ["How many millimetres are in one inch?", "25.4", ["2.54", "10", "254"], "1 in = 25.4 mm exactly."],
        ["Where is a vehicle's paint code usually found?", "On the vehicle identification or certification label", ["On the exhaust manifold or the catalytic converter near the engine", "On the engine block only", "On the spare tire"], "The label is often in the driver's door jamb."],
        ["The main job of the clearcoat is to:", "Provide gloss and protect the colour from UV and weather", ["Hide dents and fill deep scratches in the panel before the colour goes on", "Supply colour only", "Fill scratches deeply"], "Clear is the outer layer and bears the wear."],
        ["Why is a mixing stick or cup marked with ratio lines used?", "To measure product volumes accurately", ["To stir the paint and thinner together in the cup", "To strain the paint", "To check temperature"], "A mixing scale or ratio cup helps repeatable colour and cure."],
        ["Why should you never point a spray gun at a person?", "Pressurized product can penetrate skin and cause injury", ["It uses too much paint and wastes expensive material on the floor", "It makes noise", "It dries the paint"], "Treat a spray gun like a tool that can injure."],
        ["Static electricity is a concern in a paint area because:", "A spark can ignite solvent vapour", ["It dulls paint and lowers the gloss of the finish", "It makes sanding harder", "It lowers air pressure"], "Ground and bond equipment as your shop requires."],
        ["Masking tape should be:", "Pressed down firmly along clean, dry edges", ["Left loose along the edge so that it peels off easily later", "Applied over dirt", "Used wet"], "Poor tape adhesion causes bleed-through and lifted edges."]
      ], 0),
      2: bank([
        ["A high-volume, low-pressure (HVLP) spray gun is defined as having a maximum air pressure at the air cap of about:", "10 psi (about 70 kPa)", ["50 psi at the inlet of the gun, which is the usual HVLP rating", "100 psi", "200 psi"], "Low cap pressure means less bounce-back and better transfer efficiency."],
        ["Flash time is:", "The time allowed between coats for solvent to evaporate", ["The time needed to mix and strain the product before spraying", "The time to polish", "The time in the booth after finishing"], "Follow the technical data sheet. Rushing coats can trap solvent."],
        ["Pot life is the time:", "You have to spray a mixed product before it begins to cure in the cup", ["A can of unmixed product can be kept in storage before it expires", "A booth stays warm", "A gun stays clean"], "Once catalyzed, the product slowly cures even in the cup."],
        ["Fisheyes are small craters that are usually caused by:", "Silicone or oil contamination", ["Too much clear applied over a basecoat that was not flashed", "Too much hardener", "Cold weather only"], "Clean thoroughly and avoid silicone products in the shop."],
        ["Orange peel is:", "A bumpy surface resembling an orange skin, from poor flow-out", ["A colour mismatch between the repaired panel and the old finish", "A type of primer", "A repair filler"], "Causes include viscosity, air pressure, distance, and temperature."],
        ["Solvent pop appears as:", "Tiny bubbles or pinholes where trapped solvent escaped", ["Dust nibs that settle into the wet film as it dries in the booth", "Fisheyes", "A pearl effect"], "Caused by too thick a coat, insufficient flash time, or too-fast reducer."],
        ["Runs and sags are mostly caused by:", "Applying too much product in one pass", ["Too little hardener in the mix, so that the film stays soft", "Too much sanding", "Cold air"], "Control gun speed and overlap, and allow flash time."],
        ["The purpose of primer surfacer is to:", "Fill minor imperfections, promote adhesion, and provide a uniform base", ["Provide the final gloss and a hard layer that protects against UV", "Add colour", "Seal cracks completely"], "Block sand primer to level the surface before basecoat."],
        ["A typical overlap for spray passes is:", "About 50 to 75 percent, per the technical data sheet", ["0 percent, so that each pass just touches the last one", "200 percent", "No overlap"], "Consistent overlap gives an even film."],
        ["A plastic part that is bare should be treated with:", "Adhesion promoter, if the paint system requires it", ["Wax or silicone dressing to help the paint spread easily", "Thick body filler", "Silicone"], "Raw plastics often need a specific cleaner and promoter."],
        ["Blending a colour into an adjacent panel is done to:", "Make a slight colour difference less noticeable", ["Speed up curing and save primer on the repair area", "Save primer", "Increase gloss"], "A gradual fade hides the match line."],
        ["A spray-out card is used to:", "Test colour match and spray settings before painting the panel", ["Store leftover paint and keep the colour mixed for the next job", "Clean the gun", "Dry the paint"], "Compare to the vehicle under good light."],
        ["Waterborne basecoats typically need:", "More airflow and complete drying between coats", ["Solvent cleaners only, with no extra drying time between coats", "No drying", "A heavier clear"], "Waterborne waste and cleaners must be handled per the maker's instructions."],
        ["A mixing ratio of 4:1:1 for 600 mL total is mixed as:", "400 mL paint, 100 mL hardener, 100 mL reducer", ["300 mL paint, 150 mL hardener, 150 mL reducer, which is 2:1:1", "200 mL, 200 mL, 200 mL", "500 mL, 50 mL, 50 mL"], "4 + 1 + 1 = 6 parts, so each part is 100 mL."],
        ["2K products are:", "Two-component products that cure with a hardener", ["Products that have two colours mixed into one can", "Products used twice", "Water-based only"], "Once mixed they begin to cure, so mix only what you need."],
        ["Sanding scratches that are too coarse can:", "Show through the topcoat", ["Improve gloss and reduce the time the clear takes to cure", "Reduce cure time", "Increase adhesion always"], "Use the grit the maker recommends for each stage."],
        ["Gun distance that is too close results in:", "A heavier, wetter film that can run or sag", ["A dry, dusty film from paint drying before it lands", "A thinner film", "Less overspray"], "Hold the distance given in the technical data sheet."],
        ["Gun distance that is too far results in:", "A dry, rough surface from partial drying in the air", ["Runs and sags from too much wet paint building up on the panel", "Better gloss", "Thicker paint"], "Keep the gun perpendicular and a steady distance."]
      ], 1),
      3: bank([
        ["The three attributes of colour are:", "Hue, value, and chroma", ["Red, green, and blue only", "Gloss, texture, and shape", "Thick, thin, and heavy"], "Hue is the colour family, value is lightness, and chroma is intensity."],
        ["Metamerism is when:", "Two colours match in one light but not another", ["A colour changes in the can once the lid is left off", "Paint cures too fast", "Paint is mixed incorrectly"], "Check the match in daylight, shop light, and a colour matching light."],
        ["Metallic colours look lighter and brighter when applied:", "Drier, with more distance or faster passes", ["Wetter, with a close gun, slow passes, and a heavy overlap", "Thicker", "Over a dark primer"], "Application technique affects how flakes lay and the colour flop."],
        ["Mottling or cloudiness in a metallic finish is caused by:", "Uneven orientation of the metallic flakes", ["Too much hardener mixed into the basecoat before spraying", "Cold gun", "Dust"], "Use consistent technique and a medium wet final coat."],
        ["A tri-coat finish is:", "A base colour, a mid-coat such as pearl, and clear", ["Three clear coats applied one over the other with sanding between", "Three primer coats", "A colour and two hardeners"], "Tri-coat colours are sensitive to coat count, so keep records."],
        ["When tinting a colour you should:", "Make small changes and spray out to verify each one", ["Add large amounts of tint at once to save time and avoid spray-outs", "Tint after spraying", "Never use a spray-out"], "Record changes so you can repeat them."],
        ["Dieback means:", "Gloss loss in a finish after curing", ["Colour darkening in the can when it sits for a long time", "Gun clog", "Primer lifting"], "Causes include inadequate cure or under-sanded primer, and porous fillers."],
        ["Blushing in a finish appears as:", "A milky cloudiness from moisture trapped in the film", ["Orange peel caused by a gun held too far from the panel", "Runs", "Fisheyes"], "It happens in humid conditions with fast evaporating solvents."],
        ["One mil is:", "0.001 inch, or about 25.4 micrometres", ["0.01 inch, or about 254 micrometres, which is ten mils", "1 mm", "0.1 inch"], "Film thickness is often reported in mils or micrometres."],
        ["How thick is 3 mils in micrometres?", "About 76 micrometres", ["About 7.6 micrometres", "About 760 micrometres", "About 3 micrometres"], "3 × 25.4 = 76.2."],
        ["Why measure existing film thickness before refinishing?", "Too much total film can crack or fail, so it limits how much more can be added", ["To check the colour of the existing finish before the match is made", "To check gloss", "To check air pressure"], "Follow the manufacturer's guidance on maximum film build, and sand through to a sound base if needed."],
        ["Infrared curing lamps work by:", "Heating the coating and substrate directly", ["Blowing hot air across the panel to dry the surface", "Removing moisture only", "Changing the colour"], "Follow the lamp distance and time limits for the product."],
        ["The Canadian federal VOC regulations for automotive refinishing products:", "Limit the volatile organic compounds in the products sold", ["Set the booth temperature and the airflow used when spraying", "Set paint prices", "Limit PPE"], "They support lower emissions, so lower-VOC and waterborne products are common."],
        ["Why do paint booths use filters on air intake and exhaust?", "To keep dust off the work and capture overspray", ["To make noise and prevent leaks in the booth walls", "To heat air", "To cool air"], "Replace filters on schedule and check the pressure drop."],
        ["The main cause of dust nibs in a finish is:", "Contamination in the air, on the surface, or on the painter's clothing", ["Too much hardener mixed into the clear before it is sprayed on", "Primer type", "Gun cleaning"], "Tack carefully and wear a clean paint suit."],
        ["Polishing after clearcoat should be done:", "After the clear has cured enough per the maker's instructions", ["Immediately after spraying, while the clear is still wet and soft", "Before flash time", "Before sanding"], "Compounds work best on fully cured finishes."],
        ["A repair requiring a repaired panel to match the adjacent panel is commonly handled by:", "Blending into the adjacent panel", ["Painting only the repair spot, then polishing the edge", "Skipping clearcoat", "Using any colour"], "Blending hides slight differences."],
        ["Cleaning a spray gun after use with waterborne paint should follow:", "The paint manufacturer's cleaning and waste instructions", ["Any solvent on hand, poured into the shop drain after rinsing", "A hose", "No cleaning"], "Waste must be collected and handled per regulations."]
      ], 2),
      4: bank([
        ["The technical data sheet (TDS) is the best source for:", "Product mixing ratios, flash times, and application details", ["Vehicle paint codes, plus the labour times for the repair", "Labour times", "Tool prices"], "Follow the TDS for the exact product and shop conditions."],
        ["A fisheye problem that keeps recurring in a shop most likely points to:", "A contamination source such as silicone, air line oil, or cleaning products", ["A single bad gun that must be replaced before the next job", "Red paint", "Booth lights"], "Track the source: air supply, rags, nearby products, and personal care products."],
        ["Why use compatible products from one paint system?", "Mixing different systems can cause adhesion and cure problems", ["It looks better and gives the customer a nicer colour match overall", "It reduces cost only", "It lowers noise"], "Use the primer, base, clear, and additives specified by the maker."],
        ["Which of these must be considered when refinishing bumpers with radar behind them?", "The manufacturer's limits on paint type and film thickness", ["Only colour and gloss, since radar signals pass through any paint", "Gloss only", "Sanding grit only"], "Radar signals can be affected by metallic paint or thick film. Follow the OEM instructions."],
        ["Paint materials in an estimate are typically calculated from:", "Refinish labour hours and the shop's materials rate", ["The vehicle's age and the number of tools used in the job", "The colour", "The number of tools"], "Estimating systems apply rates per refinish hour."],
        ["Why keep a log of colour formulas and tints?", "So a match can be repeated or fixed later", ["To show customers the colours that were used on their car", "To order tools", "To check air pressure"], "Notes save time on later repairs."],
        ["Inspection and maintenance of a spray booth should include:", "Checking filters, airflow, lighting, and fire protection per the fire code and manufacturer", ["Painting the walls and removing the extinguisher between each job", "Removing the extinguisher", "Turning off the fan"], "Follow the National Fire Code of Canada, provincial rules, and local fire authority."],
        ["Where products are stored in a paint mixing room, the room should:", "Meet fire code requirements for flammable liquid storage", ["Be open to the rest of the shop so that fumes can spread out", "Have no ventilation", "Share space with ignition sources"], "Keep quantities within permitted limits and containers closed."],
        ["Spraying isocyanate-containing coatings typically requires:", "A supplied-air respirator and skin protection, per the employer's program", ["A paper dust mask and a cloth overall that covers the arms and legs", "A cloth rag", "No protection in a booth"], "Cartridge respirators alone are generally not adequate. Follow the SDS and your health and safety program."],
        ["What is a reasonable way to reduce rework in a paint department?", "Consistent preparation, record keeping, and checking the match before finishing", ["Skip masking and spray-outs whenever the schedule is running tight", "Skip spray-outs", "Use more hardener"], "Most defects trace to preparation and process."],
        ["Over-reducing a product can cause:", "Poor coverage, low gloss, and runs", ["Faster cure and a harder, glossier finish on the panel", "Higher gloss", "Better hiding"], "Use the reducer type and ratio specified."],
        ["Temperature and humidity affect refinishing because:", "They change flash, flow, and cure times", ["They change paint colours permanently once the can is open", "They change tool sizes", "They have no effect"], "Choose reducers and hardeners suited to the conditions."],
        ["If a customer is unhappy with a colour match, the best first step is:", "Compare the finish under proper light and review the formula and process", ["Argue that the match is perfect and point to the paint code on the label", "Repaint without checking", "Ignore it"], "Document findings and communicate clearly."],
        ["Spray gun maintenance includes:", "Cleaning after each use and checking the needle, nozzle, and air cap for damage", ["Leaving it dirty between coats so that the passages stay wet and open", "Using metal wire in air holes", "Never disassembling it"], "A damaged tip distorts the fan pattern."],
        ["Waste solvents and unused paints must be:", "Collected and disposed of through approved waste services", ["Poured down the shop drain with plenty of running water to dilute it", "Burned", "Buried"], "Regulations differ by province. Follow your employer's program."],
        ["The difference between a single-stage and a basecoat/clearcoat system is:", "Single-stage has colour and gloss in one coat, while basecoat/clear separates them", ["Single-stage is always water-based, but basecoat/clear is solvent-based only", "Basecoat/clear has no colour", "They are the same"], "Check which system the vehicle has before choosing a repair."],
        ["Why is a rubbing compound used carefully near edges and body lines?", "Paint is thin there and can be cut through", ["Compound stains plastic trim and leaves a white residue", "Edges cure faster", "It damages tires"], "Use light pressure and tape off edges."],
        ["How can you help a first-year apprentice develop good habits?", "Show correct mixing and cleaning, and have them practise on test panels", ["Let them mix alone on day one so they learn quickly from mistakes", "Ignore PPE", "Skip training"], "Good habits protect their health and the quality of work."]
      ], 3)
    },
    roadmapSteps: [
      { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS and respirator fit testing; requirements vary)", "Prepare a resume and apply to collision shops and dealership paint departments", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
      { title: "Year 1: preparation and safety", items: ["Learn WHMIS, SDS, respirator use, and fire safety in the paint area", "Learn cleaning, sanding, and masking", "Learn to mix products accurately", "Complete your first technical training block", "Build your core PPE and tool kit (see Buying tools)"] },
      { title: "Year 2: primer and spray technique", items: ["Learn spray gun setup and cleaning", "Apply primer surfacer and block sand", "Practise basecoat and clearcoat technique", "Learn to recognize and fix common defects"] },
      { title: "Year 3: colour and finishing", items: ["Learn colour theory, tinting, and blending", "Work with metallics, pearls, and tri-coat systems", "Learn waterborne basecoat handling", "Learn polishing and finishing"] },
      { title: "Year 4 and beyond: advanced refinishing", items: ["Troubleshoot defects and contamination sources", "Learn estimating, materials control, and OEM refinish requirements", "Maintain booth and equipment to code and manufacturer requirements", "Mentor first-year apprentices"] },
      { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
    ],
    glossary: [
      ["Adhesion promoter", "A product that helps coatings bond to difficult surfaces such as raw plastic."],
      ["Basecoat", "The colour layer in a basecoat/clearcoat system."],
      ["Blending", "Fading a new colour into an adjacent panel to hide differences."],
      ["Blushing", "Milky cloudiness caused by moisture trapped in a film."],
      ["Chroma", "The intensity or purity of a colour."],
      ["Clearcoat", "The transparent outer layer that provides gloss and protection."],
      ["Dieback", "Loss of gloss after a finish has cured."],
      ["Dust nib", "A small speck of dirt trapped in a finish."],
      ["Feathering", "Sanding the edge of a repair so it blends smoothly."],
      ["Fisheye", "A crater-like defect caused by contamination such as silicone."],
      ["Flash time", "The waiting period between coats while solvents evaporate."],
      ["Flop", "How a metallic colour changes in appearance with viewing angle."],
      ["Hue", "The colour family, such as red or blue."],
      ["HVLP", "High-volume, low-pressure spray gun design with low air cap pressure."],
      ["Isocyanate", "A chemical in hardeners and clearcoats that is a respiratory sensitizer."],
      ["Metamerism", "When colours match in one light source but not in another."],
      ["Mil", "One thousandth of an inch, about 25.4 micrometres."],
      ["Orange peel", "A bumpy finish resembling an orange skin."],
      ["Pot life", "The usable time after mixing a catalyzed product."],
      ["Primer surfacer", "A thick primer that fills fine scratches and provides a base."],
      ["Reducer", "A solvent used to adjust the viscosity of paint."],
      ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
      ["Solvent pop", "Pinholes or bubbles caused by trapped solvent."],
      ["Spray-out card", "A test card used to check colour and application."],
      ["Tack cloth", "A sticky cloth used to remove dust before painting."],
      ["TDS", "Technical data sheet from the product manufacturer."],
      ["Value", "The lightness or darkness of a colour."],
      ["VOC", "Volatile organic compound, a solvent vapour regulated for emissions."],
      ["WHMIS", "Canada's workplace hazardous materials information system."]
    ],
    cards: [
      { front: "Order of a basic paint system", back: "Primer, basecoat, clearcoat" },
      { front: "HVLP air cap pressure", back: "10 psi (about 70 kPa) maximum" },
      { front: "Three attributes of colour", back: "Hue, value, chroma" },
      { front: "1 mil in micrometres", back: "0.001 in is about 25.4 micrometres" },
      { front: "Fisheye cause", back: "Silicone or oil contamination" },
      { front: "Flash time", back: "Waiting between coats while solvent evaporates" },
      { front: "Isocyanate protection", back: "Respiratory protection, per the employer's program, plus skin protection" },
      { front: "Mixing 4:1:1 for 600 mL", back: "400 mL paint, 100 mL hardener, 100 mL reducer" },
      { front: "Higher grit number", back: "Finer abrasive" }
    ],
    jobsIntro: "Look for independent collision repair shops, dealership paint departments, insurance-network repair facilities, and fleet, bus, or heavy-truck refinishing shops.",
    tips: ["Bring a short resume, your safety tickets, and ID, and mention any experience with detail work or finishing.", "Show patience for preparation work, since most of the quality in paint comes from it.", "Visit shops in person and follow up, and ask whether respirator fit testing is provided.", "Ask what tools and PPE you need and what the employer supplies."],
    forumTopics: ["Starting out", "Spray technique and defects", "Colour matching and materials", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference: [
      {
        title: "Conversions",
        list: [
          "1 in = 25.4 mm",
          "1 mil = 0.001 in ≈ 25.4 micrometres",
          "1 psi ≈ 6.895 kPa, and 10 psi ≈ 69 kPa",
          "1 US quart ≈ 0.946 L, and 1 US gallon ≈ 3.785 L",
          "1 fluid ounce (US) ≈ 29.6 mL"
        ]
      },
      {
        title: "Mixing ratio worked example",
        table: {
          head: ["Ratio", "Total", "Paint", "Hardener", "Reducer"],
          rows: [
            ["4:1:1", "600 mL", "400 mL", "100 mL", "100 mL"],
            ["2:1", "300 mL", "200 mL", "100 mL", "None"],
            ["3:1:1", "500 mL", "300 mL", "100 mL", "100 mL"]
          ]
        },
        note: "Ratios shown are examples only. Always use the ratio on the technical data sheet for your product."
      },
      {
        title: "Common defects and usual causes",
        table: {
          head: ["Defect", "Usual cause"],
          rows: [
            ["Fisheyes", "Silicone, oil, or other contamination"],
            ["Solvent pop", "Coats too heavy, short flash time, or reducer too fast"],
            ["Runs and sags", "Too much material, slow gun, or short flash time"],
            ["Orange peel", "Poor flow, viscosity, air pressure, distance, or temperature"],
            ["Dust nibs", "Dirt in air, on the surface, or on clothing"],
            ["Blushing", "Moisture trapped in the film in humid conditions"],
            ["Mottling", "Uneven metallic flake orientation"]
          ]
        }
      },
      {
        title: "Spray technique checklist",
        list: [
          "Hold the gun square to the surface at the distance on the technical data sheet.",
          "Start the stroke before the panel and release after it, keeping speed constant.",
          "Overlap each pass by the amount recommended, commonly 50 to 75 percent.",
          "Allow flash time between coats, and do not spray in poor light.",
          "Check the fan pattern on masking paper before spraying the panel."
        ]
      },
      {
        title: "Safety and environmental pointers",
        list: [
          "<strong>Respiratory:</strong> isocyanate coatings generally need supplied-air protection, and respirators must be fit tested.",
          "<strong>Skin:</strong> wear nitrile gloves and a paint suit to limit absorption.",
          "<strong>Fire:</strong> follow the National Fire Code of Canada, provincial rules, and the local fire authority for spray areas and storage.",
          "<strong>Static:</strong> ground and bond equipment as required to limit sparks.",
          "<strong>Emissions:</strong> federal rules limit VOCs in automotive refinishing products, which is why waterborne systems are common.",
          "<strong>Waste:</strong> collect solvents, paint, and rags as the employer's hazardous waste program requires."
        ]
      }
    ]
  });
})();
