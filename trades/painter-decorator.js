// Painter and Decorator content. Practice questions are original study aids, not official Red Seal exam questions.
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
    id: "painter-decorator",
    store: "painter-decorator",
    title: "Painter and Decorator",
    name: "Painter and Decorator",
    short: "painting and decorating",
    category: "Finishing · Coatings · Construction",
    summary: "Painters and decorators prepare surfaces, apply paints, stains, and coatings, hang wallcoverings, and protect and finish interior and exterior surfaces in homes, offices, and industrial sites.",
    work: "You prepare surfaces, mask and protect, mix and tint products, and apply them by brush, roller, and spray. The work ranges from residential repaints to commercial interiors, exterior coatings, and wallcovering. It is detail oriented, and good preparation decides how long a finish lasts.",
    duration: "Usually 3 years, hours and school vary by province",
    union: "International Union of Painters and Allied Trades (IUPAT)",
    unionUrl: "https://www.iupat.org/",
    jobSearch: "painter apprentice",
    journeySearch: "painter decorator",
    aliases: "painter painting decorator wallpaper wallcovering paperhanger spray painter coatings residential painter commercial painter industrial painter",
    tools: ["Quality brushes (50 mm and 65 mm angled)", "Roller frames and covers", "Putty knives and scrapers", "Sanding blocks and sponges", "Respirator, safety glasses, CSA boots", "Drop sheets and masking tape"],
    insight: {
      skills: ["Surface preparation and repair", "Clean cut-in and even roller work", "Reading product data and mixing correctly", "Colour awareness and matching"],
      hazards: ["Solvent and paint vapours: ventilate and use the right respirator", "Oily rags can ignite by themselves: store in a metal container", "Old paint may contain lead: test before sanding or scraping", "Ladders, lifts, and scaffolds: train and inspect before use"],
      settings: ["Residential repaint and new construction", "Commercial and institutional interiors", "Exterior and high-rise coatings", "Industrial and protective coatings"]
    },
    toolGroups: [
      {
        title: "Day-one tools, buy once and buy well",
        note: "Quality brushes and tools pay for themselves. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
        items: [
          { name: "Angled sash brushes (50 mm and 65 mm)", why: "A good synthetic filament brush holds paint and cuts a straight line. Use nylon/polyester blends for latex paint.", search: "Purdy Wooster angled sash brush nylon polyester 2 inch 2.5 inch" },
          { name: "Roller frame (230 mm / 9 in) and covers", why: "A sturdy cage frame and quality covers in the nap your surface needs make a smooth finish.", search: "Wooster Purdy 9 inch roller frame covers 3/8 inch nap" },
          { name: "Putty knives (38 mm and 75 mm) and 5-in-1 tool", why: "Scrape, fill, and clean rollers and cans. Flexible stainless blades work best for filler.", search: "Hyde putty knife 1.5 inch 3 inch 5 in 1 painter tool" },
          { name: "Sanding blocks, sponges, and a pole sander", why: "Smooth repairs and scuff existing finishes for adhesion. Sanding sponges are good on trim.", search: "3M sanding sponge sanding block 120 220 grit" },
          { name: "Painter's tape (blue or green) and masking paper", why: "Clean lines and protection. Choose tape rated for the surface and removal time on the label.", search: "FrogTape 3M painter's tape masking paper" },
          { name: "Canvas drop sheets and plastic sheeting", why: "Protect floors and furniture. Canvas stays put and absorbs drips better than plastic.", search: "canvas drop sheet painter 9x12" },
          { name: "Respirator and spare cartridges", why: "Use organic vapour cartridges for solvent-based coatings and particulate filters for sanding. Get fit tested.", search: "3M half face respirator organic vapor cartridges P100" },
          { name: "Safety glasses, gloves, coveralls, and CSA-approved safety boots", why: "Splash, dust, and slip protection. Comfortable PPE is the PPE you will wear.", search: "safety glasses nitrile gloves painter coveralls CSA boots" }
        ]
      },
      {
        title: "Build up in first and second year",
        note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
        items: [
          { name: "Extension pole (1.2 m to 2.4 m)", why: "Roll ceilings and high walls from the floor with less strain.", search: "Wooster extension pole 4 ft 8 ft threaded" },
          { name: "Paint pail with magnet, and roller tray with liners", why: "Keeps your brush loaded and your work area tidy.", search: "painter pail magnet roller tray liners" },
          { name: "Paint can opener, mixing sticks, and strainers", why: "Properly stirred and strained paint gives a consistent finish.", search: "paint can opener stir sticks paint strainer" },
          { name: "Caulk gun (dripless) and quality caulk", why: "Fill trim gaps cleanly before paint. Pick paintable caulk.", search: "Newborn dripless caulk gun paintable acrylic caulk" },
          { name: "Wire brush and scraper", why: "Remove loose paint and rust before priming.", search: "wire brush paint scraper carbide" },
          { name: "Stepladder (CSA rated, fibreglass)", why: "Inspect before each use. Choose a duty rating for your weight and tools.", search: "Werner fibreglass step ladder CSA 6 ft" },
          { name: "Wallpaper smoothing tools and a seam roller", why: "Wallcovering needs a straightedge, smoother, and seam roller for tight joints.", search: "wallpaper smoother seam roller straight edge knife" },
          { name: "Tool bag or bucket organizer", why: "Keeps daily tools together.", search: "Veto Pro Pac tool bag bucket organizer" }
        ]
      },
      {
        title: "Later and specialized",
        note: "Often supplied by the shop or employer. Ask before buying.",
        items: [
          { name: "Airless sprayer (Graco or Titan)", why: "Fast coverage on large surfaces. Usually company-supplied; learn pressure, tip sizing, and cleanup.", search: "Graco Titan airless paint sprayer" },
          { name: "HVLP sprayer or fine-finish gun", why: "Fine finishing on cabinets and trim. Learn the cleanup routine.", search: "HVLP paint sprayer fine finish" },
          { name: "Wet film thickness gauge", why: "Check the film while it is wet to confirm coverage.", search: "wet film thickness gauge comb" },
          { name: "Dry film thickness gauge", why: "Used on protective coatings. Usually supplied by inspectors or the company.", search: "dry film thickness gauge coating" },
          { name: "Moisture meter", why: "Check wood and substrates before coating.", search: "pin moisture meter wood drywall" },
          { name: "Full-body harness and lanyard", why: "Usually supplied by the employer. Fall protection training comes first.", search: "3M DBI-SALA full body harness CSA" }
        ]
      },
      {
        title: "School supplies for technical training",
        note: "What helps in the classroom for drawings, math, and code study. Check with your school about calculator rules before you buy.",
        items: [
          { name: "Mechanical pencil (0.5 mm)", why: "Consistent fine lines on drawings and notes.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm" },
          { name: "Scientific calculator", why: "Areas, coverage, and mixing ratios.", search: "Casio fx-991 scientific calculator" },
          { name: "Colour wheel and paint chip fan deck", why: "Practise colour relationships and matching.", search: "artist colour wheel paint fan deck" },
          { name: "Architect's scale ruler", why: "Reading drawings at 1:50, 1:100, and imperial scales.", search: "architect scale ruler metric imperial" },
          { name: "Field notebook (Rite in the Rain)", why: "Record product names, batch numbers, and measurements.", search: "Rite in the Rain field notebook" },
          { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic for exam review.", search: "binder dividers highlighters" },
          { name: "Fine-tip permanent markers", why: "Label cans, brushes, and samples.", search: "Sharpie fine point permanent marker" }
        ]
      }
    ],
    mediaGroups: [
      {
        title: "Official and standards resources",
        items: [
          { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare.", url: "https://red-seal.ca/eng/welcome.shtml" },
          { name: "Codes Canada (National Building Code)", desc: "The model code that provincial building codes are based on.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
          { name: "IUPAT", desc: "Union training and apprenticeship information for painters and finishing trades.", url: "https://www.iupat.org/" },
          { name: "Master Painters Institute (MPI)", desc: "Paint standards and coating specifications used in North America.", url: "https://www.mpi.net/" },
          { name: "Association of the Wall and Ceiling Industry (AWCI)", desc: "Industry information for finishing trades.", url: "https://www.awci.org/" }
        ]
      },
      {
        title: "Video searches",
        note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and manufacturer instructions.",
        items: [
          { name: "Surface preparation before painting", desc: "Cleaning, sanding, filling, and priming.", url: yt("surface+preparation+before+painting+walls+professional+painter") },
          { name: "Cutting in and rolling a room", desc: "Technique for a clean, even finish.", url: yt("professional+painter+cutting+in+rolling+a+room") },
          { name: "Airless spray painting", desc: "Setup, tip selection, and technique.", url: yt("airless+sprayer+tutorial+tip+size+fan+width") },
          { name: "Hanging wallpaper", desc: "Pasting, booking, and trimming wallcovering.", url: yt("how+to+hang+wallpaper+professional+paperhanger") },
          { name: "Painting trim and doors", desc: "Brush technique for smooth trim.", url: yt("painting+trim+and+doors+professional+finish") },
          { name: "Exterior painting preparation", desc: "Scraping, caulking, priming, and painting siding.", url: yt("exterior+house+painting+preparation+scrape+prime") },
          { name: "Protective coatings and surface prep (SSPC)", desc: "Blasting and surface prep grades for steel.", url: yt("SSPC+surface+preparation+steel+coatings+blast") },
          { name: "Lead paint safety for painters", desc: "Recognizing and handling lead hazards.", url: yt("lead+paint+safety+painters+renovation") }
        ]
      },
      {
        title: "Audio, beginner (pre-apprentice and year 1)",
        note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for painting yourself.",
        items: [
          { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
          { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
          { name: "YouTube: painting apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: yt("painting+apprentice+podcast") }
        ]
      },
      {
        title: "Audio, intermediate (years 2-3)",
        note: "Trade-knowledge talk that builds on what you do on the job.",
        items: [
          { name: "YouTube: painting contractor tips (audio)", desc: "Prep, products, and crew tips from working painters.", url: yt("painting+contractor+tips+podcast") },
          { name: "YouTube: paint chemistry and coatings talk", desc: "How coatings work and why they fail.", url: yt("paint+coatings+chemistry+why+paint+fails+podcast") },
          { name: "YouTube: wallpaper and decorating talk", desc: "Wallcovering techniques and decorating advice.", url: yt("wallpaper+decorating+paperhanger+podcast") }
        ]
      },
      {
        title: "Audio, advanced (year 4 to journeyperson)",
        note: "Exam prep, business, and leadership.",
        items: [
          { name: "YouTube: Red Seal painter decorator exam prep", desc: "Study talks you can listen to while commuting.", url: yt("Red+Seal+painter+decorator+exam+preparation") },
          { name: "YouTube: painting business and estimating podcast", desc: "Pricing, estimating, and running a painting company.", url: yt("painting+business+estimating+podcast") },
          { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: yt("skilled+trades+leadership+mentoring+apprentices+podcast") }
        ]
      }
    ],
    practiceBank: {
      1: Q(1, [
        ["Where do you find hazard and handling information for a paint product?", "The Safety Data Sheet (SDS)", "The colour chip", "The brush handle", "The price tag", "WHMIS requires an SDS for hazardous products, and workers must have access to it."],
        ["Why is surface preparation so important?", "Most coating failures come from poor preparation and adhesion", "It makes paint cheaper", "It reduces the number of coats to zero", "It only affects colour", "Dirt, grease, and loose paint prevent bonding."],
        ["How should oily rags from alkyd or oil-based products be handled?", "Place them in an approved metal container, as the label directs", "Throw them in a pile", "Leave them in a ball in the truck", "Store them in a plastic bag", "Oxidation heat can cause spontaneous combustion."],
        ["Latex paint tools are normally cleaned with:", "Soap and water", "Gasoline", "Mineral spirits only", "Bleach", "Water-based paints clean up with water."],
        ["Which sheen is the glossiest?", "Gloss", "Flat", "Eggshell", "Satin", "From least to most shine: flat, eggshell, satin, semi-gloss, gloss."],
        ["Cutting in means:", "Painting a clean edge at corners and trim before rolling", "Cutting the paint can", "Cutting wallpaper", "Removing the old paint", "Brush edges, then roll the open areas."],
        ["For a smooth wall, which roller nap is usually appropriate?", "A short nap, such as about 10 mm (3/8 in)", "A long nap of 32 mm", "No cover at all", "A foam brush", "Rougher surfaces need longer naps. Follow the paint label."],
        ["A respirator for solvent vapours needs:", "Organic vapour cartridges, correctly fit tested", "A paper dust mask", "A bandana", "No fit test", "Particle masks do not stop solvent vapour."],
        ["What does a primer do?", "Seals the surface and promotes adhesion", "Replaces the topcoat", "Cleans the brush", "Thins the paint", "Primers prepare the substrate for finish coats."],
        ["When sanding wood, you generally sand:", "With the grain", "Across the grain", "In circles only", "Only the edges", "Sanding across the grain leaves scratches."],
        ["Why caulk gaps between trim and wall?", "To create a smooth, sealed joint before painting", "To remove paint", "To thin the paint", "To strengthen the roller", "Paintable caulk gives a clean line."],
        ["What is the purpose of drop sheets?", "Protect floors and furniture from drips", "Dry paint faster", "Thin the paint", "Mix colours", "Cover surfaces that are not being painted."],
        ["Why stir paint before use?", "Pigments and solids settle and need to be mixed", "To heat it", "To add water", "To make it thinner", "Settled paint gives uneven colour and sheen."],
        ["Old paint in a pre-1980s building may contain:", "Lead", "Only water", "Gypsum", "Aluminum", "Test before sanding or scraping, and follow provincial rules."],
        ["The correct ladder angle is about:", "1 m out for every 4 m up (4:1)", "Straight up at 90 degrees", "1 m out for every 1 m up", "Flat against the wall", "A 4:1 ratio is stable for straight ladders."]
      ]),
      2: Q(2, [
        ["An airless spray tip numbered 515 typically means:", "About a 10 in fan at 12 in with a 0.015 in orifice", "A 5 in fan with a 15 in orifice", "A 15 cm fan", "A 5 mm hose", "The first digit times 2 gives fan width, the last two digits give orifice size in thousandths of an inch."],
        ["If the wet film thickness is 150 µm and the paint is 40% solids by volume, the dry film thickness is:", "60 µm", "150 µm", "40 µm", "110 µm", "DFT = WFT × volume solids = 150 × 0.40 = 60 µm."],
        ["Alkyd paint is typically cleaned up with:", "Mineral spirits or paint thinner", "Water only", "Soap only", "Ammonia", "Alkyd (oil-based) products are solvent-based."],
        ["Before painting over mildew, you should:", "Clean and treat it, then let the surface dry", "Paint over it", "Apply a topcoat only", "Add colour", "Painting over mildew lets it grow through."],
        ["Which caulk is generally not paintable?", "Silicone", "Acrylic latex", "Painter's caulk", "Siliconized acrylic labelled paintable", "Pure silicone does not hold paint. Always check the label."],
        ["In wallcovering, a straight-across match means:", "The pattern lines up at the same height across adjacent strips", "The pattern is offset", "There is no pattern", "The paper is trimmed", "A drop match staggers the pattern."],
        ["What does booking wallpaper mean?", "Folding pasted paper onto itself to let it relax", "Reading the instructions", "Hanging it on a book", "Trimming it with a knife", "Booking lets the paper expand before hanging."],
        ["Which brush filament is best for latex paint?", "Nylon or polyester synthetic", "Natural hog bristle", "Wire", "Cotton", "Natural bristle absorbs water and goes limp in latex."],
        ["Boxing paint means:", "Mixing several cans together for consistent colour", "Putting paint in boxes", "Shaking cans", "Thinning paint", "Batches can vary slightly, so boxing gives uniform colour."],
        ["For exterior steel, surface temperature should typically be above the dew point by at least:", "3 °C", "0.5 °C", "10 °C below", "20 °C below", "Coating specifications commonly require 3 °C above the dew point to prevent moisture."],
        ["Back-rolling after spraying:", "Works the paint into the surface and evens it out", "Thins the paint", "Removes primer", "Blocks stains", "It improves penetration and appearance."],
        ["Stain-blocking primer is used over:", "Water stains, smoke, or knots", "New drywall only", "Clean glass", "Metal tools", "These stains bleed through ordinary paint."],
        ["What is the main reason paint must be applied above its minimum temperature?", "Below it, film formation can fail", "It runs faster", "It changes colour only", "It is easier to roll", "Latex paint needs minimum temperatures to coalesce. Check the label."],
        ["Spreading rate is:", "The area one litre covers at a given thickness", "The speed of the roller", "The price per litre", "The number of coats", "Spreading rate depends on solids and film thickness."],
        ["Why scuff sand a glossy surface before recoating?", "To give the new coat a mechanical bond", "To make it glossier", "To remove all colour", "To clean the brush", "Glossy surfaces are smooth and resist adhesion."]
      ]),
      3: Q(3, [
        ["SSPC-SP 10 is:", "Near-white metal blast cleaning", "Solvent cleaning", "Hand tool cleaning", "White metal blast", "SP 1 solvent, SP 2 hand tool, SP 3 power tool, SP 6 commercial blast, SP 10 near-white, SP 5 white metal."],
        ["SSPC-SP 1 means:", "Solvent cleaning to remove oil and grease", "White metal blast", "Power tool cleaning", "Pressure washing only", "Remove contaminants before mechanical cleaning."],
        ["Blasting steel creates an anchor profile to:", "Give the coating a mechanical grip", "Make the steel shiny", "Increase weight", "Remove paint only", "A rough profile improves adhesion."],
        ["A two-component epoxy has a pot life, which is:", "The time it can be used after mixing", "The shelf life of the can", "The drying time", "The price", "After pot life the mixed material cures too far to apply."],
        ["Fresh concrete or masonry should be painted with:", "Alkali-resistant primer after proper curing and testing", "Any oil primer right away", "No primer", "Wood stain", "High alkalinity attacks some coatings."],
        ["VOC stands for:", "Volatile organic compounds", "Very odd colours", "Variable oxide coatings", "Vapour oxidation chemistry", "VOCs evaporate from coatings and affect health and air quality."],
        ["Before hanging wallcovering on new drywall you should:", "Prime or size the surface", "Apply gloss paint", "Leave it bare", "Sand it down to the paper", "Priming controls absorption and eases removal."],
        ["Complementary colours are:", "Opposite each other on the colour wheel", "Next to each other", "Both grey", "Always warm", "Red and green, blue and orange, and yellow and violet are traditional pairs."],
        ["LRV (light reflectance value) is:", "How much light a colour reflects, from 0 to 100", "Latex resin value", "Wall height ratio", "Volume of paint", "Dark colours have a low LRV."],
        ["Injection injury from an airless sprayer:", "Is a medical emergency, even if the wound looks small", "Is harmless", "Needs no treatment", "Can be treated with paint thinner", "High-pressure fluid can enter the skin. Never point the gun at a person."],
        ["A painter on a swing stage needs:", "Training and fall protection as required by regulations", "No special training", "Only a hard hat", "Only a ladder", "Suspended platforms have strict requirements."],
        ["Why back-prime exterior wood?", "To protect against moisture entering from the hidden faces", "To make it heavier", "To hide knots", "To save paint", "Sealing all faces reduces swelling and coating failure."],
        ["An induction time is:", "A wait after mixing before application for some coatings", "The drying time", "A rest break", "The time to clean tools", "Some products need to react before use."],
        ["Wet film thickness is measured with:", "A wet film comb or wheel gauge", "A dry film gauge", "A tape measure", "A hydrometer", "A comb touches the wet film to read thickness."],
        ["Painting new plaster usually requires:", "Allowing it to dry and cure, then priming with a suitable product", "Painting immediately with gloss", "Wax", "Mineral spirits only", "New plaster is porous and may be alkaline."]
      ]),
      4: Q(4, [
        ["Theoretical spreading rate for a coating with 50% volume solids at 50 µm dry film is:", "10 m² per litre", "25 m² per litre", "5 m² per litre", "50 m² per litre", "Spreading rate = solids% × 10 ÷ DFT µm = 50 × 10 ÷ 50 = 10 m²/L, before losses."],
        ["How many litres are needed for 120 m² at 10 m² per litre, two coats?", "24 L", "12 L", "48 L", "6 L", "120 ÷ 10 = 12 L per coat, so 24 L for two coats before waste."],
        ["Sagging or running of a coating is usually caused by:", "Applying too thick a coat", "Too thin a coat", "Using a primer", "Sanding", "Heavy films run before they set."],
        ["Blistering of paint on exterior siding often indicates:", "Moisture behind the film", "Excess sanding", "Brush marks", "Dry brush", "Moisture vapour pushes up the film."],
        ["Which method is most dangerous with lead paint?", "Dry sanding or open-flame burning", "Wet scraping with controls", "Using HEPA vacuum", "Covering with an approved coating", "These methods create airborne lead dust or fumes. Follow provincial regulations."],
        ["Before working in a confined space such as a tank, you must:", "Follow a permit and test the atmosphere", "Open the door and start", "Use a paper mask", "Ignore ventilation", "Confined spaces require procedures and testing."],
        ["LEL means:", "Lower explosive limit", "Latex emulsion level", "Light emitting layer", "Lowest exposure level", "Below LEL, vapours cannot ignite. Stay well below it."],
        ["Why follow recoat windows?", "Too early or too late may cause poor bonding or failure", "They are optional", "They only affect colour", "They are for taxes", "Data sheets give minimum and maximum recoat times."],
        ["MPI standards are used to:", "Specify paint grades and coating systems", "Rate ladder strength", "Measure sound", "Grade lumber", "Master Painters Institute standards define performance and systems."],
        ["Metamerism is when:", "Colours match in one light but differ in another", "Paint dries too fast", "Paint is too thick", "A brush loses bristles", "Check colour in the lighting of the final space."],
        ["Maintaining a wet edge prevents:", "Lap marks and banding", "Paint drying in the can", "Thinning", "Rust", "Work in manageable sections so adjoining paint blends."],
        ["Latex paint peeling off an old glossy oil finish most likely means:", "The surface was not cleaned and degloss-sanded or primed", "The paint was too good", "Too many coats", "The brush was dry", "Poor adhesion on glossy surfaces."],
        ["A cross-cut tape test checks:", "Coating adhesion", "Wet film thickness", "Colour", "Drying time", "The ASTM D3359 test assesses adhesion."],
        ["Mixing two-component coatings in the wrong ratio can:", "Prevent proper curing", "Make it dry faster and stronger", "Have no effect", "Make it cheaper", "Follow the manufacturer's ratio exactly."],
        ["Which document gives the correct mixing, thinning, and recoat information?", "The manufacturer's product data sheet", "A brush label", "A level", "A colour chip", "Always follow current product data sheets and SDS."]
      ])
    },
    roadmapSteps: [
      { title: "Before you start", items: ["Confirm entry requirements and the trade's status with your provincial or territorial apprenticeship authority", "Get safety training employers ask for (commonly WHMIS, working at heights, and site orientation; requirements vary)", "Apply to union training centres (such as IUPAT) and painting contractors", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
      { title: "Year 1: foundations and preparation", items: ["Learn site safety, PPE, ladders, and WHMIS", "Learn surface preparation, repairs, and masking", "Practise brush and roller techniques", "Learn paint types, sheens, and primers", "Complete your first technical training block"] },
      { title: "Year 2: interior finishing and spray", items: ["Apply coatings to trim, doors, and walls to a high standard", "Learn airless and HVLP spray basics", "Learn wallcovering preparation and hanging", "Learn colour theory and matching"] },
      { title: "Year 3: exterior and specialty coatings", items: ["Prepare and coat exteriors", "Learn stains and clear finishes", "Learn protective coatings, surface preparation grades, and film thickness", "Learn lead, asbestos, and silica awareness"] },
      { title: "Year 4 and beyond: advanced", items: ["Troubleshoot coating failures", "Estimate quantities and plan jobs", "Work with lifts, scaffolds, and swing stages with training", "Mentor first-year apprentices"] },
      { title: "Certification", items: ["Confirm hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
    ],
    glossary: [
      ["Alkyd", "A solvent-based coating that cures by reaction with oxygen."],
      ["Anchor profile", "The roughness left by blasting that helps a coating grip."],
      ["Back-rolling", "Rolling over sprayed paint to even it out."],
      ["Blistering", "Bubbles in a dry film, often from moisture."],
      ["Booking", "Folding pasted wallpaper onto itself to relax."],
      ["Boxing", "Mixing several cans together for consistent colour."],
      ["Chalking", "A powdery surface on weathered paint."],
      ["Cutting in", "Brushing edges and corners before rolling."],
      ["DFT", "Dry film thickness."],
      ["Drop match", "A wallcovering pattern that staggers from strip to strip."],
      ["Efflorescence", "White salt deposits left as moisture evaporates."],
      ["Eggshell", "A low-sheen finish."],
      ["Holiday", "A missed spot in a coating."],
      ["LEL", "Lower explosive limit of a vapour in air."],
      ["LRV", "Light reflectance value, a measure of how much light a colour reflects."],
      ["Mil", "A thousandth of an inch, used for film thickness."],
      ["MPI", "Master Painters Institute."],
      ["Pot life", "Working time of a mixed multi-component coating."],
      ["Primer", "A first coat that seals and promotes adhesion."],
      ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
      ["Sheen", "The level of gloss of a finished surface."],
      ["Solids by volume", "The portion of a coating that remains as dry film."],
      ["Spreading rate", "The area covered by a volume of coating at a given thickness."],
      ["SSPC", "Society for Protective Coatings, source of surface preparation standards."],
      ["VOC", "Volatile organic compound."],
      ["WFT", "Wet film thickness."],
      ["WHMIS", "Canada's workplace hazardous materials information system."]
    ],
    cards: [
      { front: "Sheen order, low to high", back: "Flat, eggshell, satin, semi-gloss, gloss" },
      { front: "DFT from WFT", back: "DFT = WFT × volume solids" },
      { front: "Spreading rate", back: "Solids % × 10 ÷ DFT in µm = m² per litre" },
      { front: "Airless tip 515", back: "About 10 in fan, 0.015 in orifice" },
      { front: "SSPC-SP 10", back: "Near-white metal blast" },
      { front: "Ladder angle", back: "1 m out for every 4 m up (4:1)" },
      { front: "Surface temperature versus dew point", back: "Typically at least 3 °C above" },
      { front: "Oily rags", back: "Store in an approved metal container to prevent spontaneous combustion." },
      { front: "Complementary of red", back: "Green" }
    ],
    jobsIntro: "Look for painting and decorating contractors, union and signatory finishing contractors, commercial and industrial coating firms, restoration companies, and maintenance departments.",
    tips: ["Bring a short resume, your safety tickets, and ID.", "Show you are careful, tidy, and take pride in detailed work.", "Visit contractors and union training centres in person when you can, and follow up.", "Ask what tools you need and what the employer supplies."],
    forumTopics: ["Starting out", "Surface prep and coatings", "Spray painting and wallcovering", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference: [
      {
        title: "Sheen levels",
        table: {
          head: ["Sheen", "Typical use"],
          rows: [
            ["Flat or matte", "Ceilings and low-traffic walls, hides imperfections"],
            ["Eggshell", "Living areas and bedrooms, mild wipe-ability"],
            ["Satin", "Higher traffic walls and hallways"],
            ["Semi-gloss", "Trim, doors, kitchens, and baths"],
            ["Gloss", "High-wear trim and accents, shows imperfections"]
          ]
        },
        note: "Sheen terms vary slightly by manufacturer. Check the product data sheet."
      },
      {
        title: "Film thickness and coverage formulas",
        list: [
          "DFT = WFT × volume solids (as a decimal). 150 µm wet at 40% solids = 60 µm dry",
          "Theoretical spreading rate (m²/L) = volume solids % × 10 ÷ DFT in µm",
          "Litres needed = area ÷ practical spreading rate × number of coats, plus an allowance for waste",
          "1 mil = 0.001 in = 25.4 µm",
          "Always use the manufacturer's recommended film thickness"
        ]
      },
      {
        title: "SSPC surface preparation grades (steel)",
        table: {
          head: ["Grade", "Method"],
          rows: [
            ["SP 1", "Solvent cleaning"],
            ["SP 2", "Hand tool cleaning"],
            ["SP 3", "Power tool cleaning"],
            ["SP 6", "Commercial blast cleaning"],
            ["SP 10", "Near-white blast cleaning"],
            ["SP 5", "White metal blast cleaning"]
          ]
        },
        note: "Blasting grades are tied to cleanliness; the anchor profile depth comes from the coating specification."
      },
      {
        title: "Roller nap and tip guidance",
        list: [
          "Smooth surfaces: short nap, about 6 to 10 mm (1/4 to 3/8 in)",
          "Lightly textured surfaces: medium nap, about 13 mm (1/2 in)",
          "Rough surfaces such as stucco or block: long nap, about 19 to 32 mm (3/4 to 1-1/4 in)",
          "Airless tip numbers: first digit × 2 = fan width in inches at 12 in, last two digits = orifice in thousandths of an inch",
          "Thin materials use smaller orifices. Heavy materials use larger orifices"
        ]
      },
      {
        title: "Conversions",
        list: [
          "1 in = 25.4 mm, and 1 ft = 304.8 mm",
          "1 US gal ≈ 3.785 L, and 1 Imperial gal ≈ 4.546 L",
          "1 m² ≈ 10.76 sq ft",
          "1 µm = 0.001 mm",
          "°F = (°C × 9/5) + 32"
        ]
      },
      {
        title: "Standards and safety pointers",
        list: [
          "WHMIS and SDS: read the SDS for paints, solvents, and strippers. Provincial occupational health and safety regulations apply",
          "Lead, asbestos, and silica: test before disturbing older surfaces and follow provincial rules",
          "Fall protection: follow provincial regulations for ladders, lifts, scaffolds, and swing stages",
          "Master Painters Institute (MPI) and SSPC standards are commonly specified for coating work",
          "Follow the product data sheet for mixing, temperature limits, and recoat windows"
        ],
        note: "Requirements differ by province. Confirm with your instructor and authority."
      }
    ]
  });
}
