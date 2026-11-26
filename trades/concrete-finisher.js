// Concrete Finisher guide. Practice questions are original study aids, not official Red Seal exam questions.

const cfQ = (() => {
  let n = 0;
  return (q, right, wrong, explain) => {
    const pos = (n * 3 + 3 + (n >> 2)) % 4;
    n += 1;
    const options = wrong.slice();
    options.splice(pos, 0, right);
    return { q, options, answer: pos, explain };
  };
})();

const cfYt = (s) => "https://www.youtube.com/results?search_query=" + s;
const cfNote = "Professional-grade tools that hold their shape and finish for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.";

registerTrade({
  id: "concrete-finisher",
  store: "concrete-finisher",
  title: "Concrete Finisher",
  name: "Concrete Finisher",
  short: "concrete finishing",
  category: "Construction · Concrete · Flatwork",
  summary: "Concrete finishers place, screed, float, trowel, and cure concrete to give slabs, sidewalks, floors, and other surfaces the required level, texture, appearance, and durability.",
  work: "Concrete finishers work on flatwork such as floors, driveways, sidewalks, curbs, and decorative surfaces. The work is time-sensitive: concrete sets on its own schedule, so finishers plan crews, read the concrete, and work on their knees on wet slabs. Work happens outdoors and indoors on construction sites.",
  duration: "Usually about 3 years (varies by province)",
  union: "Operative Plasterers' and Cement Masons' International Association (OPCMIA)",
  unionUrl: "https://www.opcmia.org/",
  jobSearch: "concrete finisher apprentice",
  journeySearch: "concrete finisher",
  aliases: "cement mason cement finisher concrete flatwork slab floor sidewalk stamped concrete trowel screed concrete worker",
  tools: ["Magnesium hand float and steel trowel", "Edger and groover", "Kneeboards and knee pads", "Waterproof CSA rubber boots", "Nitrile-coated or rubber gloves", "Safety glasses and hearing protection"],
  insight: {
    skills: ["Reading bleed water and timing finishing", "Screeding, floating, and troweling to level and flatness", "Jointing and edging slabs", "Curing and protecting concrete in all weather"],
    hazards: ["Alkaline burns: wash wet concrete off skin and keep boots dry", "Silica dust: use wet cutting or dust capture and a respirator", "Power trowel blades: keep guards in place and stay clear of the blades", "Back and knee strain: use kneeboards, kneel carefully, and lift with help"],
    settings: ["Residential flatwork and driveways", "Commercial and industrial slabs", "Sidewalk, curb, and civil work", "Decorative and polished concrete"]
  },
  toolGroups: [
    {
      title: "Day-one tools, buy once and buy well",
      note: cfNote,
      items: [
        { name: "Waterproof CSA Z195 rubber or PVC safety boots", why: "Wet concrete is alkaline and will soak through leather. Look for the CSA green triangle and a puncture-resistant sole.", search: "CSA green triangle waterproof rubber safety boots Dunlop Acton Tingley" },
        { name: "Kneeboards (pair)", why: "Spread your weight so you can reach into the slab without leaving deep marks. Plastic or wood boards both work.", search: "concrete kneeboards plastic pair finisher" },
        { name: "Knee pads or gel knee pads for wet work", why: "Protect your knees on hard slabs and forms during setup. Choose waterproof, easy-to-clean pads.", search: "Thorogood gel knee pads waterproof concrete" },
        { name: "Magnesium hand float (about 400 mm / 16 in)", why: "The basic float used after screeding to level and prepare the surface. Magnesium is light and common for finishing.", search: "Marshalltown magnesium hand float 16 inch" },
        { name: "Steel finishing trowel (about 400 x 100 mm, 16 x 4 in)", why: "For a smooth, dense finish once the concrete is ready. Break in new blades and keep them clean and dry.", search: "Marshalltown finishing trowel 16 x 4 stainless steel" },
        { name: "Hand edger and hand groover", why: "Round and compact the edges and cut control joints in sidewalks and small slabs.", search: "Marshalltown concrete edger groover 6 inch" },
        { name: "Nitrile-coated or rubber gloves for wet concrete", why: "Protect skin from alkaline burns and improve grip. Replace gloves that have soaked through.", search: "nitrile coated gloves concrete rubber gauntlet gloves" },
        { name: "CSA Z94.3 safety glasses, hard hat (Z94.1), and hearing protection (Z94.2)", why: "Basic PPE for every site. Eye protection is vital because splashes and dust are common.", search: "CSA Z94.3 safety glasses Z94.1 hard hat earmuffs" },
        { name: "High-visibility CSA Z96 vest and rain gear", why: "Visibility near trucks, pumps, and traffic, and weather protection for wet pours.", search: "CSA Z96 class 2 vest rain gear waterproof" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
      items: [
        { name: "Pool trowel and square-end finishing trowels (several sizes)", why: "Different sizes help with edges, corners, and open areas. Rounded-end pool trowels reduce trowel marks.", search: "Marshalltown pool trowel finishing trowel set" },
        { name: "Margin trowel and pointing tools", why: "Fixing small areas, corners, and patches.", search: "margin trowel mason pointing trowel set" },
        { name: "Jointer or groover in several widths", why: "Cutting clean control joints in different thicknesses of slab and sidewalk.", search: "concrete jointer groover tool 3/4 inch 1 inch" },
        { name: "Broom (concrete finishing broom) and soft-bristle brush", why: "Creates slip-resistant texture on exterior slabs and sweeps debris off cured slabs.", search: "concrete finishing broom soft bristle Marshalltown" },
        { name: "Magnesium darby (about 1.2 m / 48 in)", why: "A darby levels and smooths small areas without a bull float. Wood or magnesium is common.", search: "magnesium darby 48 inch concrete" },
        { name: "Tape measure, level, and string line", why: "Checking slab thickness, slopes, and edge alignment.", search: "Stanley FatMax 25 ft tape measure 4 foot level string line" },
        { name: "Stiff scrub brush and pail for tool cleaning", why: "Keep trowels and floats free of dried paste to avoid scratches in the next pour.", search: "stiff scrub brush bucket concrete tool cleaning" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the employer or company. Ask before buying.",
      items: [
        { name: "Bull float with extension handle (magnesium blade)", why: "Levels and smooths the slab after screeding. Usually company-supplied for larger slabs.", search: "magnesium bull float 48 inch handle" },
        { name: "Walk-behind power trowel with pans and blades", why: "For finishing large floors. Operator training and guarding are essential. Normally company equipment.", search: "walk behind power trowel concrete finishing" },
        { name: "Early-entry concrete saw or wet saw with dust control", why: "Cuts control joints at the right time. Wet cutting or dust capture is needed to control silica.", search: "early entry concrete saw soff-cut wet saw" },
        { name: "Concrete vibrator (poker) and hand tampers", why: "Consolidates concrete in slabs and formed work. Usually supplied by the crew lead or company.", search: "concrete poker vibrator electric" },
        { name: "Stamps, texture mats, and release agents", why: "Decorative stamped concrete requires matched tools and the right timing. Normally supplied by the decorative contractor.", search: "concrete stamp mats release agent decorative" },
        { name: "Half-mask respirator with P100 filters (fit-tested)", why: "For silica dust and some sealers or coatings. Your employer should arrange fit testing and training.", search: "3M half facepiece respirator P100 filters" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for drawings, math, and concrete science. Check with your school and exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Volume, area, and unit conversions for slabs, joints, and slopes.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Mechanical pencil (0.5 mm) and spare leads", why: "Sketching slab layouts, joint plans, and notes.", search: "Pentel GraphGear 0.5mm mechanical pencil HB lead" },
        { name: "Architect's scale and engineer's scale", why: "Reading site and structural drawings at scales like 1:50 and 1:100.", search: "architect scale ruler engineer scale metric" },
        { name: "Graph paper pad and steel ruler", why: "Sketching joint layouts and slopes.", search: "graph paper pad steel ruler 300 mm" },
        { name: "Concrete reference such as a concrete finishing manual", why: "Mix, curing, and finishing practices are covered in CSA A23.1 and industry guides. Ask your school which references they use.", search: "concrete finishing manual cement mason guide" },
        { name: "Field notebook (Rite in the Rain) and permanent markers", why: "Record mix details, temperatures, and slab notes. Weatherproof paper survives wet sites.", search: "Rite in the Rain field notebook Sharpie fine point" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic for Red Seal exam review.", search: "binder dividers highlighters" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work, the Concrete Finisher trade profile, and how to prepare.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Cement Association of Canada", desc: "Technical information on cement, concrete, and sustainable construction.", url: "https://cement.ca/" },
        { name: "American Concrete Institute (ACI)", desc: "Concrete guides and publications, including finishing and curing guidance.", url: "https://www.concrete.org/" },
        { name: "CSA Group", desc: "Publisher of CSA A23.1 and A23.2 concrete standards, and protective equipment standards.", url: "https://www.csagroup.org/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Plain-language safety sheets on silica, cement burns, noise, and manual handling.", url: "https://www.ccohs.ca/" },
        { name: "Operative Plasterers' and Cement Masons' International Association", desc: "Union training and apprenticeship information for cement masons.", url: "https://www.opcmia.org/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and the project specification.",
      items: [
        { name: "Screeding and bull floating a slab", desc: "Striking off, bull floating, and judging concrete readiness.", url: cfYt("concrete+slab+screeding+bull+float+finishing+timing") },
        { name: "Hand troweling and edging", desc: "Floating, edging, and steel troweling a sidewalk or small slab.", url: cfYt("concrete+finishing+hand+trowel+edger+sidewalk") },
        { name: "Power trowel basics", desc: "Pans, blades, and pitch on walk-behind trowels.", url: cfYt("power+trowel+concrete+finishing+pans+blades+pitch") },
        { name: "Control joints in concrete", desc: "Joint depth, spacing, and timing.", url: cfYt("concrete+control+joints+spacing+depth+cutting+timing") },
        { name: "Curing concrete", desc: "Wet curing, curing compounds, and temperature control.", url: cfYt("curing+concrete+compound+wet+curing+cold+hot+weather") },
        { name: "Broom finish and exposed aggregate", desc: "Texture finishes for slip resistance and appearance.", url: cfYt("broom+finish+exposed+aggregate+concrete+retarder") },
        { name: "Stamped concrete", desc: "Colour hardener, release agent, and stamping timing.", url: cfYt("stamped+concrete+colour+hardener+release+agent+stamping") },
        { name: "Silica dust and concrete safety", desc: "Wet cutting, dust control, and respirators.", url: cfYt("silica+dust+concrete+safety+wet+cutting+respirator") }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for concrete finishing yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: concrete finisher apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: cfYt("concrete+finisher+apprentice+podcast") }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: concrete flatwork podcast", desc: "Finishing, timing, and troubleshooting from working finishers.", url: cfYt("concrete+flatwork+podcast+finishing+tips") },
        { name: "YouTube: concrete science and durability talk", desc: "Mix design, air entrainment, and freeze-thaw durability.", url: cfYt("concrete+science+podcast+air+entrainment+durability") },
        { name: "YouTube: decorative concrete podcast", desc: "Stamped, coloured, and polished concrete discussions.", url: cfYt("decorative+concrete+podcast+polished+stamped") }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, estimating, and leadership.",
      items: [
        { name: "YouTube: Red Seal concrete finisher exam prep (talk-through)", desc: "Study talks you can listen to while commuting.", url: cfYt("Red+Seal+concrete+finisher+exam+preparation") },
        { name: "YouTube: concrete contracting, estimating, and crew management podcast", desc: "Pricing and scheduling concrete work, and leading a finishing crew.", url: cfYt("concrete+contractor+estimating+crew+management+podcast") },
        { name: "YouTube: mentoring apprentices on site", desc: "Leadership and training skills for new journeypersons.", url: cfYt("skilled+trades+leadership+mentoring+apprentices+podcast") }
      ]
    }
  ],
  practiceBank: {
    1: [
      cfQ("Why can fresh concrete burn your skin?", "It is highly alkaline", ["It is very hot", "It contains acid", "It is radioactive"], "Wet cement is strongly alkaline. Wash with clean water, remove soaked clothing, and keep wet concrete out of boots."),
      cfQ("If wet concrete splashes in your eye, you should:", "Flush with clean water for at least 15 minutes and get medical attention", ["Rub the eye", "Wait to see if it hurts", "Wipe it with a dry rag"], "Alkaline burns can damage the eye quickly. Flush right away and seek medical help."),
      cfQ("Concrete hardens mainly because of:", "A chemical reaction between cement and water (hydration)", ["Evaporation of water", "Freezing", "Compression by troweling"], "Concrete gains strength by hydration, not by simply drying, which is why curing matters."),
      cfQ("Concrete is made from:", "Cement, water, aggregates, and sometimes admixtures", ["Cement only", "Sand only", "Asphalt and gravel"], "Cement is the binder, and concrete is the mixture."),
      cfQ("A lower water-cement ratio generally gives concrete that is:", "Stronger and more durable", ["Weaker", "Always runny", "Less dense"], "Less water means a denser paste, but the mix must still be workable."),
      cfQ("Adding extra water to a truck on site to make it easier to place usually:", "Weakens the concrete and increases shrinkage cracking", ["Makes the concrete stronger", "Has no effect", "Speeds up the set without side effects"], "Only add water as the specification and supplier allow, and record it."),
      cfQ("How much concrete is needed for a 6 m x 4 m slab that is 100 mm thick?", "2.4 m³", ["0.24 m³", "24 m³", "10 m³"], "6 x 4 x 0.1 = 2.4 m³, before waste."),
      cfQ("A 4 in slab is about how thick in metric?", "100 mm", ["40 mm", "250 mm", "1000 mm"], "4 x 25.4 = 101.6 mm, so 100 mm is the usual metric thickness."),
      cfQ("Which job does a screed do?", "Strikes off excess concrete to the required grade", ["Cuts control joints", "Adds colour", "Cures the slab"], "Screeding is the first step in leveling the surface using the forms or rails as a guide."),
      cfQ("A bull float is used right after screeding to:", "Smooth and level the surface and push down coarse aggregate", ["Cut joints", "Apply sealer", "Remove the forms"], "It closes surface voids and prepares the slab for bleed water."),
      cfQ("Bleed water is:", "Water that rises to the surface of freshly placed concrete", ["Water added after finishing", "Water sprayed for curing", "Water in the aggregate"], "Do not finish the surface until the bleed water has gone."),
      cfQ("Cutting or grinding hardened concrete exposes workers to:", "Respirable crystalline silica dust", ["Carbon monoxide only", "Lead only", "No hazards"], "Wet methods, vacuum shrouds, and respirators help control exposure."),
      cfQ("Why use kneeboards on a wet slab?", "They spread your weight so you can work without sinking in", ["To make the concrete set faster", "To mark joints", "To measure slope"], "Kneeboards let you work the surface without leaving deep marks."),
      cfQ("About how much does one cubic metre of normal concrete weigh?", "About 2400 kg", ["About 240 kg", "About 1000 kg", "About 9000 kg"], "Plan for the weight when lifting, wheeling, and disposing of excess."),
      cfQ("What should you do with wet clothing that has been soaked with concrete?", "Remove it, wash the skin, and change into dry clothes", ["Keep working", "Let it dry on you", "Cover it with a jacket"], "Prolonged skin contact with wet cement can cause serious burns."),
      cfQ("In most Canadian jurisdictions, the 8-hour noise exposure limit is about:", "85 dBA", ["50 dBA", "100 dBA", "120 dBA"], "Power trowels, saws, and vibrators can be loud, so wear hearing protection.")
    ],
    2: [
      cfQ("When should floating and troweling a slab begin?", "After the bleed water has gone and the surface will support the weight of the finisher without sinking deeply", ["Immediately after placing", "While bleed water is pooled on the surface", "After the concrete is fully hardened"], "Starting too early works water into the surface, and starting too late makes the surface hard to work."),
      cfQ("Finishing or sealing the surface while bleed water is still rising can cause:", "Scaling, dusting, or blisters", ["Stronger concrete", "A darker colour only", "Faster curing"], "Trapped bleed water weakens the surface layer."),
      cfQ("What is the purpose of edging a slab?", "To compact and round the edge so it resists chipping", ["To cut control joints", "To dry the slab", "To add colour"], "A rounded, compacted edge is more durable."),
      cfQ("Control joints are cut to:", "Control where shrinkage cracking occurs", ["Add strength", "Drain water", "Cool the slab"], "Concrete shrinks as it cures, and joints guide the cracking along planned lines."),
      cfQ("A common guideline for the depth of a control joint is:", "About one quarter of the slab thickness", ["1 mm", "The full slab thickness", "Twice the slab thickness"], "For a 100 mm slab that is about 25 mm, but follow the specification."),
      cfQ("A common spacing guideline for control joints is about:", "24 to 36 times the slab thickness", ["0.5 times the thickness", "100 times the thickness", "Only at the corners"], "For a 100 mm slab, that gives roughly 2.4 to 3.6 m. Use the plan and specification."),
      cfQ("Why is a broom finish used on exterior slabs?", "It gives slip resistance", ["It makes the slab cure faster", "It adds strength", "It hides joints"], "The texture improves traction in wet and icy conditions."),
      cfQ("A steel trowel finish is used for:", "A smooth, dense surface once the concrete is ready", ["Removing bleed water", "Making an exposed aggregate", "Adding air to the concrete"], "Steel troweling closes the surface, but over-troweling exterior air-entrained concrete can cause problems."),
      cfQ("For exterior air-entrained concrete slabs, finishers should generally avoid:", "Over-troweling or hard steel-troweling the surface", ["Using a float", "Curing the slab", "Cutting joints"], "Excessive working can seal the surface and cause blisters or delamination."),
      cfQ("A slump cone is about how tall?", "300 mm", ["30 mm", "100 mm", "1 m"], "The standard slump cone is 300 mm high, 200 mm at the base and 100 mm at the top."),
      cfQ("Rebar chairs or supports are used to:", "Hold reinforcing at the correct height in the slab", ["Add colour to the slab", "Cure the concrete", "Make the slab thicker"], "Reinforcing in the wrong position will not do its job."),
      cfQ("The subgrade before a pour should be:", "Compacted, level, and free of standing water, mud, or frost", ["Frozen solid", "Covered in puddles", "Loose and soft"], "A stable, uniform base helps prevent settling and cracking."),
      cfQ("A strength of 25 MPa is approximately how many psi?", "3600 psi", ["250 psi", "36,000 psi", "17 psi"], "1 MPa is about 145 psi, so 25 MPa is about 3625 psi."),
      cfQ("Freshly placed concrete that freezes at an early age:", "Can suffer permanent damage and loss of strength", ["Is stronger", "Is unaffected", "Cures faster"], "Protect concrete from freezing until it reaches the strength specified."),
      cfQ("Hot, windy, dry weather can cause:", "Rapid evaporation and plastic shrinkage cracking", ["Slower hydration", "Frost damage", "Fewer cracks"], "Windbreaks, shade, fogging, and evaporation retarders help in hot weather."),
      cfQ("A groover or jointer tool is used to:", "Tool a control joint into the surface", ["Smooth the aggregate", "Float the slab", "Measure slump"], "Tooled joints are cut while the concrete is still plastic."),
      cfQ("A vapour retarder under an interior slab is used to:", "Slow moisture moving up from the ground into the slab", ["Add strength", "Warm the slab", "Make the slab slippery"], "It helps protect floor coverings and indoor air quality.")
    ],
    3: [
      cfQ("When using a power trowel, the blade pitch is normally:", "Increased as the surface hardens", ["Kept flat from start to finish", "Decreased to zero", "Reversed"], "Start with a flat or float pan, then use trowel blades with increasing pitch for a harder surface."),
      cfQ("The first pass of a walk-behind power trowel on a slab is often done with:", "Float pans or a flat blade setting", ["Aggressive blades set steeply", "No blades", "A broom"], "Floating opens and levels the surface before finishing."),
      cfQ("Gasoline power trowel engines used indoors require:", "Ventilation, because they produce carbon monoxide", ["No special precautions", "A closed building", "A heater beside them"], "Use electric or propane units designed for indoors where needed, and ventilate."),
      cfQ("Exposed aggregate finishes are usually produced by:", "Removing the surface paste with a retarder and washing or brushing", ["Adding extra cement", "Sealing the surface early", "Troweling hard"], "The paste is removed to reveal the stone once the slab is firm enough."),
      cfQ("A dry-shake colour hardener is:", "Broadcast over the slab after bull floating and floated in", ["Added to the truck only", "Sprayed after curing", "Applied before placing"], "Dry shake gives a durable, coloured surface when applied at the proper time."),
      cfQ("A release agent is used in stamped concrete to:", "Prevent the stamps from sticking and add colour variation", ["Cure the slab", "Add strength", "Remove bleed water"], "It makes the stamp pattern clean and can add antique colouring."),
      cfQ("A curing compound is:", "A liquid sprayed on to slow moisture loss from the surface", ["A form of cement", "A joint filler", "A cutting lubricant"], "It forms a membrane. Check compatibility with sealers or coatings that will be applied later."),
      cfQ("Why must saw cuts be made soon after the concrete can support the saw?", "To prevent random cracking before the joint is cut", ["To make the slab thinner", "To save blades", "To help it dry"], "Early-entry saws allow cutting without raveling edges."),
      cfQ("An isolation joint is placed:", "Where a slab meets a wall, column, or footing to allow independent movement", ["In the middle of the slab only", "To add reinforcing", "Where concrete is not needed"], "It prevents cracks from restrained movement."),
      cfQ("Crazing is:", "A network of fine surface cracks often caused by rapid drying or overworking", ["A type of rebar", "A saw cut", "A colour"], "Crazing is usually cosmetic, but it indicates curing or finishing problems."),
      cfQ("A dusting surface is typically caused by:", "A weak surface from finishing too early, excess water, or poor curing", ["Too much cement", "Too much curing", "Using a broom"], "Dust on the surface suggests the top layer is weak."),
      cfQ("Scaling of exterior slabs is most commonly linked to:", "Freeze-thaw cycles with de-icing salts on concrete lacking proper air entrainment or finishing", ["Too much curing", "Sun exposure only", "Warm weather"], "Use air-entrained concrete and good finishing practice for exterior surfaces in cold climates."),
      cfQ("Air entrainment gives concrete:", "Tiny air bubbles that help it resist freeze-thaw damage", ["Greater weight", "Faster set", "More shrinkage"], "Specified air content depends on the exposure class and aggregate size in CSA A23.1."),
      cfQ("Exterior slabs are commonly sloped for drainage by about:", "1 to 2%", ["10%", "0%", "20%"], "A 2% slope drops 20 mm per metre. Follow the drawings."),
      cfQ("Compression test cylinders for concrete are commonly:", "100 mm x 200 mm and tested at 28 days", ["50 mm x 50 mm and tested at 1 hour", "1 m x 1 m and tested at 1 year", "Not tested"], "Strength is verified by testing cylinders cured under standard conditions."),
      cfQ("A water-reducing admixture is used to:", "Improve workability without adding water", ["Colour the concrete", "Freeze the concrete", "Cut joints"], "It helps keep the water-cement ratio low."),
      cfQ("An evaporation rate above about 1 kg/m² per hour suggests:", "A high risk of plastic shrinkage cracking, so extra protection is needed", ["Ideal conditions", "No risk", "A need to add water to the truck"], "Use windbreaks, fogging, or evaporation retarder, and start curing promptly.")
    ],
    4: [
      cfQ("FF and FL numbers on a floor specification describe:", "Floor flatness and floor levelness", ["Fire and fuel ratings", "Fibre and load ratings", "Form and lift sizes"], "They are measured after finishing and are used to specify tight-tolerance floors."),
      cfQ("In CSA A23.1, exposure class F-1 refers to:", "Freezing and thawing in a saturated condition with exposure to de-icing chemicals", ["Interior dry conditions", "Chemical attack by sulphates", "No exposure"], "F-1 is the most severe freeze-thaw class and requires the specified air content and strength."),
      cfQ("A 12 m x 10 m slab is 125 mm thick. How much concrete including 5% extra should be ordered?", "15.75 m³", ["15.0 m³", "1.5 m³", "150 m³"], "12 x 10 x 0.125 = 15.0 m³, and x 1.05 = 15.75 m³."),
      cfQ("Concrete should be discharged:", "Within the time limit in the specification (commonly within 120 minutes of batching)", ["Whenever the truck arrives", "Within 12 hours", "After it starts setting"], "Time limits control the quality of the concrete, and the batch ticket records it."),
      cfQ("A concrete delivery (batch) ticket normally shows:", "The mix, quantity, batching time, and any added water or admixtures", ["The finisher's name", "The weather forecast", "The tool list"], "Check the ticket against the specification before placing."),
      cfQ("Delamination on a slab is most likely caused by:", "Sealing the surface over bleed water or air before the concrete was ready", ["Too much curing", "Using a broom", "Cold water"], "The trapped layer separates from the slab below."),
      cfQ("Curling in a slab is mainly caused by:", "Differences in drying and shrinkage between the top and bottom", ["Using too many joints", "Troweling too little", "Colour hardener"], "Proper curing, joint spacing, and mix design help limit curling."),
      cfQ("Efflorescence is:", "White salt deposits left by moisture moving through concrete", ["A type of rebar", "A saw cut", "A joint sealant"], "Moisture and salts move to the surface and dry, leaving a white film."),
      cfQ("Dark blotches on a hard-troweled slab can be caused by:", "Calcium chloride accelerators or uneven troweling and curing", ["Sunlight on the form", "Cold boots", "Hand floats"], "Avoid these causes, since patchy colour is difficult to correct."),
      cfQ("A good pre-pour plan includes:", "Crew size, equipment, access, weather, joint layout, and a finishing sequence", ["Starting without checking", "Only ordering concrete", "Only measuring the forms"], "Concrete does not wait, so the plan prepares for delays and surprises."),
      cfQ("When concrete arrives with slump much higher than specified, you should:", "Contact the supervisor and follow the specification, not add water or accept it quietly", ["Add more cement", "Pour it fast", "Accept it without checking"], "Out-of-spec concrete can be rejected, and the decision is made by those with authority."),
      cfQ("Polishing concrete involves:", "Progressive grinding with diamond tooling, often with a densifier and dust control", ["Painting only", "Sandblasting only", "Hand floating only"], "Wet methods or vacuum dust control reduce silica exposure."),
      cfQ("When working around a concrete pump or truck chute, you should:", "Keep clear of the moving boom and hose, and watch for overhead power lines", ["Stand under the boom", "Grab the hose end", "Ignore power lines"], "Contact with power lines can be fatal, and hose whip can cause serious injuries."),
      cfQ("Workers in every Canadian jurisdiction have the right to:", "Know about hazards, participate in safety, and refuse unsafe work", ["Skip training", "Choose the mix", "Set the pay rates"], "The process for refusing unsafe work depends on your province."),
      cfQ("Concrete temperature at placement is checked because:", "Temperature affects setting time, strength gain, and cracking risk", ["It changes the colour of the truck", "It is decorative", "It has no effect"], "Specifications set minimum and maximum placement temperatures."),
      cfQ("A straightedge test on a finished slab:", "Checks flatness by measuring the gap beneath a long straightedge", ["Measures slump", "Measures air content", "Checks the colour"], "The gap allowed under, for example, a 3 m straightedge is set in the specification."),
      cfQ("A good finisher notices a drying surface and responds by:", "Applying an evaporation retarder, fogging, or windbreaks as the plan allows", ["Spraying water onto the surface and finishing it in", "Troweling harder", "Leaving the slab"], "Do not add water to the surface, which weakens it. Use approved methods to slow evaporation.")
    ]
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS, working at heights, and site orientation; requirements vary)", "Prepare a resume and contact cement mason locals and concrete contractors", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: concrete basics and safety", items: ["Learn site safety, PPE, skin protection, and silica awareness", "Learn concrete materials, mix terms, and the water-cement ratio", "Help with forms, screeding, bull floating, and hand tool use", "Complete your first technical training block", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: flatwork and finishing", items: ["Judge readiness from bleed water and surface condition", "Float, edge, joint, and steel-trowel sidewalks and small slabs", "Apply broom finishes and basic curing methods", "Learn slump, air, and temperature testing basics"] },
    { title: "Year 3: floors, weather, and decorative work", items: ["Use power trowels and early-entry saws under supervision", "Learn cold and hot weather concreting", "Apply colour hardeners, stamps, and exposed aggregate finishes", "Learn about reinforcing, subgrade preparation, and isolation joints"] },
    { title: "Year 4 and beyond: advanced", items: ["Plan pours, crews, and finishing sequences", "Troubleshoot defects such as scaling, dusting, curling, and delamination", "Learn estimating, flatness tolerances, and specifications", "Mentor first-year apprentices and use the Red Seal standard to find gaps in your experience"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["Admixture", "A material added to concrete to change its properties."],
    ["Aggregate", "Sand, gravel, or crushed stone used in concrete."],
    ["Air entrainment", "Tiny air bubbles added to resist freeze-thaw damage."],
    ["Bleed water", "Water that rises to the surface of fresh concrete."],
    ["Broom finish", "A textured surface made by drawing a broom across the slab."],
    ["Bull float", "A large float on a long handle used right after screeding."],
    ["Cement", "The binder in concrete that reacts with water."],
    ["Control joint", "A groove that controls where shrinkage cracks form."],
    ["Crazing", "Fine surface cracks in concrete."],
    ["Curing", "Keeping concrete moist and warm so it gains strength."],
    ["Darby", "A hand float used to level small areas."],
    ["Delamination", "Separation of a thin layer from the slab surface."],
    ["Edger", "A tool that rounds and compacts slab edges."],
    ["Efflorescence", "White salt deposits left on concrete by moisture."],
    ["Flatwork", "Horizontal concrete such as slabs and sidewalks."],
    ["Float", "A tool that levels and smooths concrete after screeding."],
    ["Hydration", "The chemical reaction between cement and water."],
    ["Isolation joint", "A joint that separates a slab from walls and columns."],
    ["MPa", "Megapascal, a unit of concrete compressive strength."],
    ["Rebar", "Steel reinforcing bar placed in concrete."],
    ["Scaling", "Flaking of the concrete surface, often from freeze-thaw."],
    ["Screed", "To strike off concrete to grade, or the tool that does this."],
    ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
    ["Slump", "A measure of the consistency of fresh concrete."],
    ["Subgrade", "The prepared soil or base under a slab."],
    ["Trowel", "A flat tool used to smooth and harden the slab surface."],
    ["Vapour retarder", "A layer under a slab that limits moisture movement."],
    ["Water-cement ratio", "The mass of water divided by the mass of cement in a mix."],
    ["WHMIS", "Canada's workplace hazardous materials information system."]
  ],
  cards: [
    { front: "Why concrete hardens", back: "Hydration, a chemical reaction between cement and water" },
    { front: "When to start floating and troweling", back: "After bleed water is gone and the surface supports your weight" },
    { front: "Control joint depth guideline", back: "About one quarter of the slab thickness" },
    { front: "Control joint spacing guideline", back: "About 24 to 36 times the slab thickness" },
    { front: "Slab volume", back: "Length x width x thickness (in metres), plus waste" },
    { front: "Weight of 1 m³ of concrete", back: "About 2400 kg" },
    { front: "MPa to psi", back: "1 MPa ≈ 145 psi" },
    { front: "Slump cone height", back: "300 mm" },
    { front: "Purpose of air entrainment", back: "Resist freeze-thaw damage" },
    { front: "First aid for concrete in the eye", back: "Flush with clean water for at least 15 minutes and get medical help" }
  ],
  jobsIntro: "Look for concrete flatwork and finishing contractors, general and civil contractors, residential and commercial builders, ready-mix and precast companies, decorative concrete shops, and union locals such as OPCMIA.",
  tips: ["Bring a short resume, your safety tickets, and ID.", "Show you can work quickly, carefully, and as part of a crew.", "Visit finishing contractors and union halls in person when you can, and follow up.", "Ask what tools you need and what the employer supplies."],
  forumTopics: ["Starting out", "Finishing, timing, and joints", "Weather, curing, and troubleshooting", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
  reference: [
    {
      title: "Key formulas",
      list: [
        "Slab volume (m³) = length (m) x width (m) x thickness (m)",
        "Order quantity = calculated volume x (1 + waste allowance)",
        "Area of a circle = π x r², and a round slab volume = π x r² x thickness",
        "Slope (%) = rise ÷ run x 100; drop = run x slope",
        "Control joint depth ≈ slab thickness ÷ 4",
        "Control joint spacing ≈ 24 to 36 x slab thickness (guideline; follow the drawings)"
      ]
    },
    {
      title: "Conversions",
      list: [
        "1 in = 25.4 mm, and 1 ft = 304.8 mm",
        "4 in slab ≈ 100 mm, and 6 in slab ≈ 150 mm",
        "1 m³ = 1.308 yd³, and 1 yd³ = 0.7646 m³",
        "1 MPa ≈ 145 psi",
        "Normal concrete ≈ 2400 kg/m³",
        "1 m³ covers 10 m² at 100 mm thick"
      ]
    },
    {
      title: "Concrete area covered by 1 m³",
      table: {
        head: ["Slab thickness", "Area per m³"],
        rows: [["75 mm", "13.3 m²"], ["100 mm", "10.0 m²"], ["125 mm", "8.0 m²"], ["150 mm", "6.7 m²"], ["200 mm", "5.0 m²"]]
      },
      note: "Area = 1 ÷ thickness in metres. Add a waste allowance for uneven subgrade and spillage."
    },
    {
      title: "Canadian reinforcing bar sizes (metric)",
      table: {
        head: ["Bar", "Nominal diameter (mm)", "Cross-sectional area (mm²)"],
        rows: [["10M", "11.3", "100"], ["15M", "16.0", "200"], ["20M", "19.5", "300"], ["25M", "25.2", "500"], ["30M", "29.9", "700"]]
      },
      note: "Reinforcing bar is covered by CSA G30.18. Follow the structural drawings for sizes, spacing, and cover."
    },
    {
      title: "Finishing sequence for a typical slab",
      list: [
        "Prepare the subgrade and forms, and check reinforcing, chairs, and cover.",
        "Place, consolidate, and screed to grade.",
        "Bull float, then wait for the bleed water to go and the sheen to leave the surface.",
        "Edge and joint, then float with a magnesium float.",
        "Steel trowel (interior) or broom (exterior) once the surface is ready.",
        "Saw or tool joints at the right time, then cure promptly and protect the slab."
      ],
      note: "Timing depends on temperature, mix, and weather. Judge readiness by the surface, not the clock."
    },
    {
      title: "Common finishing defects and likely causes",
      table: {
        head: ["Defect", "Likely cause"],
        rows: [["Scaling", "Freeze-thaw with de-icing salts on poorly air-entrained or poorly finished concrete"], ["Dusting", "Weak surface from finishing too early, too much water, or poor curing"], ["Blisters and delamination", "Sealing the surface over bleed water or air"], ["Plastic shrinkage cracks", "Rapid evaporation from wind, sun, and heat"], ["Crazing", "Rapid drying or over-finishing"], ["Curling", "Differential shrinkage between top and bottom of the slab"]]
      },
      note: "Always follow the project specification, CSA A23.1, and the guidance of the concrete supplier."
    }
  ]
});
