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
      cfQ("Why can fresh concrete burn your skin?", "It is highly alkaline", ["It is very hot from the heat of the mix", "It contains a strong acid from the cement", "It is slightly radioactive from the aggregates"], "Wet cement is strongly alkaline. Wash with clean water, remove soaked clothing, and keep wet concrete out of boots."),
      cfQ("If wet concrete splashes in your eye, you should:", "Flush with clean water for at least 15 minutes and get medical attention", ["Rub the eye firmly with a clean cloth to clear out the grit and rinse it later", "Wait to see if it hurts before doing anything", "Wipe it with a dry rag and carry on working"], "Alkaline burns can damage the eye quickly. Flush right away and seek medical help."),
      cfQ("Concrete hardens mainly because of:", "A chemical reaction between cement and water (hydration)", ["Evaporation of the mix water as the surface dries out in warm air", "Freezing of the water in the pores", "Compression by troweling the surface"], "Concrete gains strength by hydration, not by simply drying, which is why curing matters."),
      cfQ("Concrete is made from:", "Cement, water, aggregates, and sometimes admixtures", ["Cement only, mixed with water and poured straight into the forms", "Sand only, bound with a wet binder", "Asphalt and gravel, mixed hot"], "Cement is the binder, and concrete is the mixture."),
      cfQ("A lower water-cement ratio generally gives concrete that is:", "Stronger and more durable", ["Weaker and more likely to crack", "Always runny and hard to hold in the forms", "Less dense and more porous"], "Less water means a denser paste, but the mix must still be workable."),
      cfQ("Adding extra water to a truck on site to make it easier to place usually:", "Weakens the concrete and increases shrinkage cracking", ["Makes the concrete stronger because it hydrates better", "Has no effect on the finished slab", "Speeds up the set without side effects on strength"], "Only add water as the specification and supplier allow, and record it."),
      cfQ("How much concrete is needed for a 6 m x 4 m slab that is 100 mm thick?", "2.4 m³", ["0.24 m³, from a decimal place error", "24 m³, from using 1000 mm of thickness", "10 m³, from adding the dimensions"], "6 x 4 x 0.1 = 2.4 m³, before waste."),
      cfQ("A 4 in slab is about how thick in metric?", "100 mm", ["40 mm, from multiplying by 10", "250 mm, a common footing depth", "1000 mm, from multiplying by 250"], "4 x 25.4 = 101.6 mm, so 100 mm is the usual metric thickness."),
      cfQ("Which job does a screed do?", "Strikes off excess concrete to the required grade", ["Cuts control joints into the surface after the finishing is done", "Adds colour to the concrete mix", "Cures the slab by holding in moisture"], "Screeding is the first step in leveling the surface using the forms or rails as a guide."),
      cfQ("A bull float is used right after screeding to:", "Smooth and level the surface and push down coarse aggregate", ["Cut control joints in the slab before the surface has begun to set up", "Apply sealer to the surface before it hardens", "Remove the forms from the edges of the slab"], "It closes surface voids and prepares the slab for bleed water."),
      cfQ("Bleed water is:", "Water that rises to the surface of freshly placed concrete", ["Water added by the finisher after screeding to make troweling easier", "Water sprayed on the surface for curing", "Water that was already in the aggregate"], "Do not finish the surface until the bleed water has gone."),
      cfQ("Cutting or grinding hardened concrete exposes workers to:", "Respirable crystalline silica dust", ["Carbon monoxide only, from the saw engine", "Lead only, from old paint", "No hazards if the concrete is fully cured"], "Wet methods, vacuum shrouds, and respirators help control exposure."),
      cfQ("Why use kneeboards on a wet slab?", "They spread your weight so you can work without sinking in", ["To make the concrete set faster under the pressure of your knees and body weight", "To mark joints in the surface as you work", "To measure the slope of the slab"], "Kneeboards let you work the surface without leaving deep marks."),
      cfQ("About how much does one cubic metre of normal concrete weigh?", "About 2400 kg", ["About 240 kg, similar to a bag of cement", "About 1000 kg, the weight of water", "About 9000 kg, the weight of steel"], "Plan for the weight when lifting, wheeling, and disposing of excess."),
      cfQ("What should you do with wet clothing that has been soaked with concrete?", "Remove it, wash the skin, and change into dry clothes", ["Keep working until the end of the shift, then wash up when you get home", "Let it dry on you so it does not drip", "Cover it with a jacket and wash up at home"], "Prolonged skin contact with wet cement can cause serious burns."),
      cfQ("In most Canadian jurisdictions, the 8-hour noise exposure limit is about:", "85 dBA", ["50 dBA, about the level of quiet speech", "100 dBA, about the level of a loud grinder", "120 dBA, about the threshold of pain"], "Power trowels, saws, and vibrators can be loud, so wear hearing protection.")
    ],
    2: [
      cfQ("When should floating and troweling a slab begin?", "After the bleed water has gone and the surface will support the weight of the finisher without sinking deeply", ["Immediately after placing, before the screed has been pulled", "While bleed water is pooled on the surface, to work it in", "After the concrete is fully hardened and has been cured"], "Starting too early works water into the surface, and starting too late makes the surface hard to work."),
      cfQ("Finishing or sealing the surface while bleed water is still rising can cause:", "Scaling, dusting, or blisters", ["Stronger concrete from the extra working", "A darker colour only, with no other effect", "Faster curing from the trapped heat"], "Trapped bleed water weakens the surface layer."),
      cfQ("What is the purpose of edging a slab?", "To compact and round the edge so it resists chipping", ["To cut control joints into the slab surface along the edge of the form", "To dry the slab and speed up the set", "To add colour at the edges of the slab"], "A rounded, compacted edge is more durable."),
      cfQ("Control joints are cut to:", "Control where shrinkage cracking occurs", ["Add strength to the slab at the joint", "Drain water from the surface of the slab", "Cool the slab as it cures in the sun"], "Concrete shrinks as it cures, and joints guide the cracking along planned lines."),
      cfQ("A common guideline for the depth of a control joint is:", "About one quarter of the slab thickness", ["1 mm, as a shallow scratch in the surface", "The full slab thickness, as for an isolation joint", "Twice the slab thickness, to reach the subgrade"], "For a 100 mm slab that is about 25 mm, but follow the specification."),
      cfQ("A common spacing guideline for control joints is about:", "24 to 36 times the slab thickness", ["0.5 times the thickness, so they are very close", "100 times the thickness, so they are far apart", "Only at the corners, so no other joints are needed"], "For a 100 mm slab, that gives roughly 2.4 to 3.6 m. Use the plan and specification."),
      cfQ("Why is a broom finish used on exterior slabs?", "It gives slip resistance", ["It makes the slab cure faster outdoors", "It adds strength to the top of the slab", "It hides the joints and trowel marks"], "The texture improves traction in wet and icy conditions."),
      cfQ("A steel trowel finish is used for:", "A smooth, dense surface once the concrete is ready", ["Removing bleed water from the surface of the slab before screeding", "Making an exposed aggregate surface", "Adding air to the concrete mix"], "Steel troweling closes the surface, but over-troweling exterior air-entrained concrete can cause problems."),
      cfQ("For exterior air-entrained concrete slabs, finishers should generally avoid:", "Over-troweling or hard steel-troweling the surface", ["Using a magnesium float on the surface after the bleed water has gone", "Curing the slab after finishing", "Cutting joints in the slab"], "Excessive working can seal the surface and cause blisters or delamination."),
      cfQ("A slump cone is about how tall?", "300 mm", ["30 mm, about the size of a coin", "100 mm, about the width of a hand", "1 m, about the height of a bucket"], "The standard slump cone is 300 mm high, 200 mm at the base and 100 mm at the top."),
      cfQ("Rebar chairs or supports are used to:", "Hold reinforcing at the correct height in the slab", ["Add colour to the surface of the slab as the crew finishes the pour", "Cure the concrete by holding moisture in", "Make the slab thicker than the form depth"], "Reinforcing in the wrong position will not do its job."),
      cfQ("The subgrade before a pour should be:", "Compacted, level, and free of standing water, mud, or frost", ["Frozen solid so it will not settle", "Covered in puddles so the concrete stays cool and cures slowly after placing", "Loose and soft so the slab can bed in"], "A stable, uniform base helps prevent settling and cracking."),
      cfQ("A strength of 25 MPa is approximately how many psi?", "3600 psi", ["250 psi, from dropping a digit", "36,000 psi, from adding a zero", "17 psi, from dividing instead of multiplying"], "1 MPa is about 145 psi, so 25 MPa is about 3625 psi."),
      cfQ("Freshly placed concrete that freezes at an early age:", "Can suffer permanent damage and loss of strength", ["Is stronger because the cold slows the set and lets the cement hydrate fully", "Is unaffected if it is covered later", "Cures faster once it has thawed"], "Protect concrete from freezing until it reaches the strength specified."),
      cfQ("Hot, windy, dry weather can cause:", "Rapid evaporation and plastic shrinkage cracking", ["Slower hydration and extra bleed water", "Frost damage to the surface of the slab during the first night after placing", "Fewer cracks because the slab sets sooner"], "Windbreaks, shade, fogging, and evaporation retarders help in hot weather."),
      cfQ("A groover or jointer tool is used to:", "Tool a control joint into the surface", ["Smooth the aggregate in the surface before the bleed water is gone", "Float the slab to a level surface", "Measure the slump of the concrete"], "Tooled joints are cut while the concrete is still plastic."),
      cfQ("A vapour retarder under an interior slab is used to:", "Slow moisture moving up from the ground into the slab", ["Add strength to the slab as it cures", "Warm the slab so it sets faster", "Make the slab surface slippery so the finishing tools glide over it more easily"], "It helps protect floor coverings and indoor air quality.")
    ],
    3: [
      cfQ("When using a power trowel, the blade pitch is normally:", "Increased as the surface hardens", ["Kept flat from start to finish", "Decreased to zero over the passes", "Reversed on every second pass"], "Start with a flat or float pan, then use trowel blades with increasing pitch for a harder surface."),
      cfQ("The first pass of a walk-behind power trowel on a slab is often done with:", "Float pans or a flat blade setting", ["Aggressive blades set steeply to cut the surface", "No blades at all, only the bare pan", "A broom attached to the machine"], "Floating opens and levels the surface before finishing."),
      cfQ("Gasoline power trowel engines used indoors require:", "Ventilation, because they produce carbon monoxide", ["No special precautions, since the engine is small and the slab area is wide open", "A closed building to keep the slab warm", "A heater beside them to keep the engine running"], "Use electric or propane units designed for indoors where needed, and ventilate."),
      cfQ("Exposed aggregate finishes are usually produced by:", "Removing the surface paste with a retarder and washing or brushing", ["Adding extra cement to the surface layer", "Sealing the surface early with a film-forming sealer to hold in all of the moisture", "Troweling hard to bring up the stone"], "The paste is removed to reveal the stone once the slab is firm enough."),
      cfQ("A dry-shake colour hardener is:", "Broadcast over the slab after bull floating and floated in", ["Added to the truck only, before the concrete is poured at the job site", "Sprayed after curing as a coloured sealer", "Applied before placing, on top of the subgrade"], "Dry shake gives a durable, coloured surface when applied at the proper time."),
      cfQ("A release agent is used in stamped concrete to:", "Prevent the stamps from sticking and add colour variation", ["Cure the slab as it hardens", "Add strength to the surface of the slab so that the stamps can be pressed in deeper", "Remove bleed water from the surface of the slab"], "It makes the stamp pattern clean and can add antique colouring."),
      cfQ("A curing compound is:", "A liquid sprayed on to slow moisture loss from the surface", ["A form of cement mixed in at the batch plant", "A joint filler pushed into the saw cuts", "A cutting lubricant sprayed on diamond saw blades to keep them cool when cutting"], "It forms a membrane. Check compatibility with sealers or coatings that will be applied later."),
      cfQ("Why must saw cuts be made soon after the concrete can support the saw?", "To prevent random cracking before the joint is cut", ["To make the slab thinner at the joint so that it can shrink more easily", "To save wear on the saw blades", "To help the slab dry out faster at the joint"], "Early-entry saws allow cutting without raveling edges."),
      cfQ("An isolation joint is placed:", "Where a slab meets a wall, column, or footing to allow independent movement", ["In the middle of the slab only, as a decorative groove cut at the end of the shift", "To add reinforcing across the slab", "Where concrete is not needed in the slab"], "It prevents cracks from restrained movement."),
      cfQ("Crazing is:", "A network of fine surface cracks often caused by rapid drying or overworking", ["A type of rebar used in thin slabs", "A saw cut made too early in the slab", "A colour variation across the slab caused by sunlight, wind, and uneven troweling"], "Crazing is usually cosmetic, but it indicates curing or finishing problems."),
      cfQ("A dusting surface is typically caused by:", "A weak surface from finishing too early, excess water, or poor curing", ["Too much cement in the mix, which makes the surface layer too hard and brittle", "Too much curing with water", "Using a broom finish on the slab"], "Dust on the surface suggests the top layer is weak."),
      cfQ("Scaling of exterior slabs is most commonly linked to:", "Freeze-thaw cycles with de-icing salts on concrete lacking proper air entrainment or finishing", ["Too much curing in the first week after the pour", "Sun exposure only, with no other cause", "Warm weather during the placing of the slab"], "Use air-entrained concrete and good finishing practice for exterior surfaces in cold climates."),
      cfQ("Air entrainment gives concrete:", "Tiny air bubbles that help it resist freeze-thaw damage", ["Greater weight and density in the slab", "Faster set so it can be finished sooner and the forms can be stripped earlier", "More shrinkage as the air escapes"], "Specified air content depends on the exposure class and aggregate size in CSA A23.1."),
      cfQ("Exterior slabs are commonly sloped for drainage by about:", "1 to 2%", ["10%, as for a steep ramp", "0%, so the slab is dead level", "20%, as for a roof surface"], "A 2% slope drops 20 mm per metre. Follow the drawings."),
      cfQ("Compression test cylinders for concrete are commonly:", "100 mm x 200 mm and tested at 28 days", ["50 mm x 50 mm and tested at 1 hour after the cylinder is cast", "1 m x 1 m and tested at 1 year", "Never tested, since slump is enough"], "Strength is verified by testing cylinders cured under standard conditions."),
      cfQ("A water-reducing admixture is used to:", "Improve workability without adding water", ["Colour the concrete without needing a pigment or dry-shake hardener", "Freeze the concrete to slow the set", "Cut joints in the slab surface"], "It helps keep the water-cement ratio low."),
      cfQ("An evaporation rate above about 1 kg/m² per hour suggests:", "A high risk of plastic shrinkage cracking, so extra protection is needed", ["Ideal conditions for finishing the slab", "No risk to the slab, so no special protection is needed during finishing or curing", "A need to add water to the truck to keep it workable"], "Use windbreaks, fogging, or evaporation retarder, and start curing promptly.")
    ],
    4: [
      cfQ("FF and FL numbers on a floor specification describe:", "Floor flatness and floor levelness", ["Fire and fuel ratings for the building", "Fibre and load ratings for the slab", "Form and lift sizes for the pour"], "They are measured after finishing and are used to specify tight-tolerance floors."),
      cfQ("In CSA A23.1, exposure class F-1 refers to:", "Freezing and thawing in a saturated condition with exposure to de-icing chemicals", ["Interior dry conditions with no exposure to freezing, thawing, or de-icing chemicals at any time", "Chemical attack by sulphates from the soil", "No exposure to any freezing or chemicals"], "F-1 is the most severe freeze-thaw class and requires the specified air content and strength."),
      cfQ("A 12 m x 10 m slab is 125 mm thick. How much concrete including 5% extra should be ordered?", "15.75 m³", ["15.0 m³, with no waste allowance", "1.5 m³, from a decimal place error", "150 m³, from using 125 mm as a metre"], "12 x 10 x 0.125 = 15.0 m³, and x 1.05 = 15.75 m³."),
      cfQ("Concrete should be discharged:", "Within the time limit in the specification (commonly within 120 minutes of batching)", ["Whenever the truck arrives and the crew is ready, whatever time it was batched at the plant", "Within 12 hours, as long as it is kept turning", "After it starts setting, with extra water added"], "Time limits control the quality of the concrete, and the batch ticket records it."),
      cfQ("A concrete delivery (batch) ticket normally shows:", "The mix, quantity, batching time, and any added water or admixtures", ["The finisher's name, the crew size, and the hours worked on the pour", "The weather forecast for the day of the pour", "The tool list for the finishing crew"], "Check the ticket against the specification before placing."),
      cfQ("Delamination on a slab is most likely caused by:", "Sealing the surface over bleed water or air before the concrete was ready", ["Too much curing with wet burlap after the finishing was completed on the slab", "Using a broom on the finished surface", "Cold water used for washing the tools"], "The trapped layer separates from the slab below."),
      cfQ("Curling in a slab is mainly caused by:", "Differences in drying and shrinkage between the top and bottom", ["Using too many joints in the slab", "Troweling too little before the surface sets, leaving it too rough and open", "Colour hardener broadcast on the surface"], "Proper curing, joint spacing, and mix design help limit curling."),
      cfQ("Efflorescence is:", "White salt deposits left by moisture moving through concrete", ["A type of epoxy-coated rebar that rusts in the slab near the top surface", "A saw cut that is too deep", "A joint sealant that has cracked"], "Moisture and salts move to the surface and dry, leaving a white film."),
      cfQ("Dark blotches on a hard-troweled slab can be caused by:", "Calcium chloride accelerators or uneven troweling and curing", ["Sunlight on the form face", "Cold work boots and kneeboards left on the slab while the surface was still soft", "Hand floats used for the first pass"], "Avoid these causes, since patchy colour is difficult to correct."),
      cfQ("A good pre-pour plan includes:", "Crew size, equipment, access, weather, joint layout, and a finishing sequence", ["Starting without checking the weather forecast, the crew size, or the available equipment", "Only ordering concrete and hoping for the best", "Only measuring the forms before the truck arrives"], "Concrete does not wait, so the plan prepares for delays and surprises."),
      cfQ("When concrete arrives with slump much higher than specified, you should:", "Contact the supervisor and follow the specification, not add water or accept it quietly", ["Add more cement to the load to make up for the extra water, then place it right away", "Pour it fast before it has a chance to set", "Accept it without checking the ticket or the slump"], "Out-of-spec concrete can be rejected, and the decision is made by those with authority."),
      cfQ("Polishing concrete involves:", "Progressive grinding with diamond tooling, often with a densifier and dust control", ["Painting the surface with a coloured sealer only, with no grinding or densifier needed", "Sandblasting the surface with a coarse sand only", "Hand floating the surface with a magnesium float only"], "Wet methods or vacuum dust control reduce silica exposure."),
      cfQ("When working around a concrete pump or truck chute, you should:", "Keep clear of the moving boom and hose, and watch for overhead power lines", ["Stand under the boom close to the hose end so you can guide it and signal the operator", "Grab the hose end as it swings past", "Ignore power lines if the boom is low"], "Contact with power lines can be fatal, and hose whip can cause serious injuries."),
      cfQ("Workers in every Canadian jurisdiction have the right to:", "Know about hazards, participate in safety, and refuse unsafe work", ["Skip training if the job is only a day long and the supervisor is on site", "Choose the mix design for the slab", "Set the pay rates for the crew"], "The process for refusing unsafe work depends on your province."),
      cfQ("Concrete temperature at placement is checked because:", "Temperature affects setting time, strength gain, and cracking risk", ["It changes the colour of the truck as it cures", "It is a decorative record only, and does not affect how the slab is placed or finished", "It has no effect on the slab once placed"], "Specifications set minimum and maximum placement temperatures."),
      cfQ("A straightedge test on a finished slab:", "Checks flatness by measuring the gap beneath a long straightedge", ["Measures the slump of the concrete by checking how far the cone subsides", "Measures the air content of the mix", "Checks the colour of the slab"], "The gap allowed under, for example, a 3 m straightedge is set in the specification."),
      cfQ("A good finisher notices a drying surface and responds by:", "Applying an evaporation retarder, fogging, or windbreaks as the plan allows", ["Spraying water onto the surface and finishing it in", "Troweling harder to close the surface before it dries out and starts to crack", "Leaving the slab until the surface is fully dry"], "Do not add water to the surface, which weakens it. Use approved methods to slow evaporation.")
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
