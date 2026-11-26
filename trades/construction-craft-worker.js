// Construction Craft Worker guide. Practice questions are original study aids, not official Red Seal exam questions.

const ccwQ = (() => {
  let n = 0;
  return (q, right, wrong, explain) => {
    const pos = (n * 3 + 2 + (n >> 2)) % 4;
    n += 1;
    const options = wrong.slice();
    options.splice(pos, 0, right);
    return { q, options, answer: pos, explain };
  };
})();

const ccwYt = (s) => "https://www.youtube.com/results?search_query=" + s;
const ccwNote = "Professional-grade gear that holds up on site. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.";

registerTrade({
  id: "construction-craft-worker",
  store: "construction-craft-worker",
  title: "Construction Craft Worker",
  name: "Construction Craft Worker",
  short: "construction craft work",
  category: "Construction · Site work · Concrete · Utilities",
  summary: "Construction craft workers prepare sites, form and place concrete, lay pipe, rig and signal loads, support other trades, and handle materials across civil, industrial, commercial, and residential projects.",
  work: "Construction craft workers do the broad range of site tasks that keep a project moving: excavating and backfilling, forming and placing concrete, laying pipe, rigging, scaffolding, and demolition. Work is outdoors in all weather, physical, and often around heavy equipment. The trade opens doors to many specializations.",
  duration: "Usually about 3 years (hours and levels vary by province)",
  union: "Laborers' International Union of North America (LiUNA)",
  unionUrl: "https://www.liuna.org/",
  jobSearch: "construction craft worker apprentice",
  journeySearch: "construction craft worker",
  aliases: "labourer laborer construction labourer general labourer site worker concrete forming pipe laying rigger signaller flagger civil construction demolition",
  tools: ["CSA boots, hard hat, and eye protection", "High-visibility CSA Z96 apparel", "Work gloves and hearing protection", "Tape measure and utility knife", "Framing hammer and pry bar", "Level and string line"],
  insight: {
    skills: ["Reading site plans and layout marks", "Safe material handling and rigging", "Forming, placing, and curing concrete", "Working safely around equipment and excavations"],
    hazards: ["Trench cave-ins: never enter an unprotected excavation", "Struck-by: stay clear of equipment swing and suspended loads", "Silica dust: use wet methods and a respirator", "Heat and cold stress: hydrate, take breaks, and dress for conditions"],
    settings: ["Civil and road construction crews", "Commercial and industrial building sites", "Concrete forming and utility contractors", "Union and non-union construction projects"]
  },
  toolGroups: [
    {
      title: "Day-one tools, buy once and buy well",
      note: ccwNote,
      items: [
        { name: "CSA Z195 safety boots (green triangle, with a waterproof option)", why: "Puncture-resistant soles and toe protection for rebar, nails, and wet concrete work. Waterproof boots matter for trenches and pours.", search: "CSA Z195 green triangle safety boots waterproof Red Wing Blundstone Timberland PRO" },
        { name: "CSA Z94.1 hard hat with a chin strap or liner option", why: "Head protection on every site. Choose a Type 2 hat for side impacts when you are working around equipment.", search: "CSA Z94.1 hard hat Type 2 chin strap winter liner" },
        { name: "CSA Z94.3 safety glasses and splash goggles", why: "Protection from flying debris, dust, and wet concrete splash. Keep a spare pair in your bag.", search: "CSA Z94.3 safety glasses anti-fog goggles" },
        { name: "CSA Z96 high-visibility vest or jacket (Class 2 or 3)", why: "Required on many sites and near traffic. Pick the class and colours your employer or traffic rules require.", search: "CSA Z96 high visibility vest class 2 class 3 jacket" },
        { name: "Work gloves: leather, cut-resistant, and nitrile-coated", why: "Different tasks need different gloves: lifting rebar, handling forms, and wet work. Replace worn gloves.", search: "Mechanix cut resistant leather work gloves nitrile coated" },
        { name: "Hearing protection: earmuffs and earplugs", why: "Jackhammers, saws, and compactors can exceed 85 dBA. Muffs are easy to put on and take off on site.", search: "3M Peltor earmuffs CSA Z94.2 foam earplugs" },
        { name: "Stanley FatMax or Milwaukee 7.5 m (25 ft) tape measure", why: "A wide, stiff blade is easy to read for layout, forming, and material takeoffs.", search: "Stanley FatMax Milwaukee 25 ft tape measure metric" },
        { name: "Utility knife with spare blades", why: "Opening materials, cutting poly, and trimming. A fresh blade is a safer blade.", search: "Olfa Milwaukee utility knife retractable blades" },
        { name: "Rain gear, thermal layers, and waterproof gloves", why: "Weather protection helps you work safely in all seasons. Dress in layers and keep spares in your truck or bag.", search: "Helly Hansen rain jacket pants merino thermal base layer waterproof gloves" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
      items: [
        { name: "Estwing or Stiletto 20 to 22 oz framing hammer", why: "Building forms, stripping, and general nail work. A shock-reducing grip helps over a long day.", search: "Estwing 22 oz framing hammer" },
        { name: "Pry bars and cat's paw (Stanley FuBar or Estwing)", why: "Stripping forms and pulling nails without damaging lumber you will reuse.", search: "Stanley FuBar Estwing pry bar cat's paw" },
        { name: "Stabila or Empire 600 mm and 1200 mm levels", why: "Setting forms plumb and level and checking grade on pipe and footings. Check accuracy before relying on it.", search: "Stabila 24 inch 48 inch box level" },
        { name: "Line level, mason's line, and string line", why: "Quick checks for grade and alignment over distance on footings and curbs.", search: "mason line string line line level" },
        { name: "Speed square and chalk line reel", why: "Layout lines on lumber and slabs, and checking corners.", search: "Swanson 7 inch speed square Irwin chalk reel" },
        { name: "Marking paint and lumber crayons", why: "Marking layout, utilities, and cut lines in a way that stays visible outdoors. Follow the colour code for utilities.", search: "Rust-Oleum marking paint upside down lumber crayon Markal" },
        { name: "Tool belt or nail apron with suspenders", why: "Keeps a hammer, tape, and fasteners handy and spreads the weight off your hips.", search: "Occidental Leather tool belt nail apron suspenders" },
        { name: "Knee pads and kneeling pad", why: "Reduces knee strain on slabs and forms. Pick pads that stay in place while you walk.", search: "Thorogood Dewalt knee pads kneeling pad construction" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the employer or company. Ask before buying.",
      items: [
        { name: "Half-mask respirator with P100 filters and organic vapour cartridges (fit-tested)", why: "For silica dust, solvents, and adhesives. Your employer should arrange fit testing and training.", search: "3M half facepiece respirator P100 filters 6000 series" },
        { name: "Full-body harness and lanyard (CSA Z259.10)", why: "Usually supplied by the employer. Fall protection training must come before use.", search: "3M DBI-SALA full body harness CSA Z259.10" },
        { name: "Self-levelling line laser or rotary laser", why: "Setting levels and grades on forms and slabs. Usually company-supplied.", search: "Bosch line laser level DeWalt rotary laser" },
        { name: "Anti-vibration gloves", why: "Reduces hand-arm vibration when using jackhammers and breakers. Does not replace limiting exposure time.", search: "anti vibration gloves ISO 10819 jackhammer" },
        { name: "Cordless circular saw and reciprocating saw", why: "Cutting form lumber and demolition work. Match the battery to the rest of the crew's tools.", search: "Milwaukee M18 circular saw Sawzall reciprocating saw" },
        { name: "Tag line, slings, and shackles (rigging hardware)", why: "Supplied and inspected by the employer for rated lifting. Learn inspection and rated capacity before use.", search: "rigging slings shackles WLL tag line" },
        { name: "Gas detector or four-gas monitor", why: "Used for confined space and trench entry. Normally issued and calibrated by the employer.", search: "BW Honeywell four gas monitor confined space" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for drawings, math, and safety study. Check with your school and exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Volume, area, grade, and unit conversion questions come up often.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Mechanical pencil (0.5 mm) and spare leads", why: "Sketching layouts, calculations, and notes.", search: "Pentel GraphGear 0.5mm mechanical pencil HB lead" },
        { name: "Engineer's scale and architect's scale", why: "Reading site and civil drawings at scales like 1:100 and 1:500.", search: "engineer scale ruler architect scale metric" },
        { name: "Graph paper pad and a 300 mm steel ruler", why: "Quick sketches of forms and trench sections.", search: "graph paper pad steel ruler 300 mm" },
        { name: "Provincial occupational health and safety regulations for construction projects", why: "Excavations, scaffolds, and fall protection rules are in your provincial regulation. Use the official version for your province.", search: "construction projects occupational health and safety regulation Canada book" },
        { name: "Field notebook (Rite in the Rain) and permanent markers", why: "Weatherproof notes, measurements, and sketches that survive wet sites.", search: "Rite in the Rain field notebook Sharpie fine point" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic for Red Seal exam review.", search: "binder dividers highlighters" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work, the Construction Craft Worker trade profile, and how to prepare.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Codes Canada (National Building Code)", desc: "The model national code that provincial building codes are based on.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Plain-language safety sheets on trenching, silica, noise, ladders, and manual handling.", url: "https://www.ccohs.ca/" },
        { name: "Laborers' International Union of North America (LiUNA)", desc: "Union training and apprenticeship information for construction labourers.", url: "https://www.liuna.org/" },
        { name: "Canadian Construction Association", desc: "National voice of the construction industry, with employer and training information.", url: "https://www.cca-acc.com/" },
        { name: "CSA Group", desc: "Standards for protective equipment, fall protection, scaffolds, and concrete.", url: "https://www.csagroup.org/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and provincial regulations.",
      items: [
        { name: "Trench safety and shoring", desc: "Cave-in hazards, sloping, shields, and shoring.", url: ccwYt("trench+safety+shoring+sloping+trench+box+cave+in") },
        { name: "Concrete forming for walls and footings", desc: "Setting up, bracing, and stripping wall and footing forms.", url: ccwYt("concrete+wall+forms+footing+forms+construction+laborer") },
        { name: "Rigging and signalling basics", desc: "Slings, shackles, sling angles, and hand signals.", url: ccwYt("rigging+basics+slings+shackles+sling+angle+hand+signals") },
        { name: "Pipe laying and grade", desc: "Laying sewer and water pipe to grade with a laser.", url: ccwYt("pipe+laying+sewer+pipe+grade+laser+trench") },
        { name: "Plate compactor and soil compaction", desc: "Compaction methods, lifts, and soil types.", url: ccwYt("soil+compaction+lifts+plate+compactor+granular") },
        { name: "Silica dust and concrete cutting safety", desc: "Wet cutting, vacuum dust control, and respirators.", url: ccwYt("silica+dust+concrete+cutting+safety+wet+cutting") },
        { name: "Scaffold erection basics", desc: "Frame scaffold set-up, guardrails, and tags.", url: ccwYt("frame+scaffold+erection+basics+guardrails+safety") },
        { name: "Utility locates and call before you dig", desc: "Reading locate marks and safe digging near utilities.", url: ccwYt("utility+locates+call+before+you+dig+canada+hand+digging") }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for construction craft work yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: construction labourer apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: ccwYt("construction+laborer+apprentice+podcast") }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: construction safety podcast", desc: "Real incidents, hazard recognition, and prevention on construction sites.", url: ccwYt("construction+safety+podcast+hazard+recognition") },
        { name: "YouTube: civil construction and site work talk", desc: "Excavation, utilities, grading, and site logistics.", url: ccwYt("civil+construction+site+work+podcast+excavation+utilities") },
        { name: "YouTube: concrete construction podcast", desc: "Forming, placing, and curing talk from the field.", url: ccwYt("concrete+construction+podcast+forming+placing") }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, planning, and leadership.",
      items: [
        { name: "YouTube: Red Seal construction craft worker exam prep (talk-through)", desc: "Study talks you can listen to while commuting.", url: ccwYt("Red+Seal+construction+craft+worker+exam+preparation") },
        { name: "YouTube: construction project planning and crew leadership podcast", desc: "Planning work, coordinating crews, and leading on site.", url: ccwYt("construction+foreman+leadership+crew+planning+podcast") },
        { name: "YouTube: mentoring apprentices on site", desc: "Leadership and training skills for new journeypersons.", url: ccwYt("skilled+trades+leadership+mentoring+apprentices+podcast") }
      ]
    }
  ],
  practiceBank: {
    1: [
      ccwQ("Which CSA standard covers high-visibility safety apparel?", "CSA Z96", ["CSA Z195", "CSA Z94.1", "CSA S269.2"], "Z96 covers high-visibility apparel. Z195 is footwear and Z94.1 is hard hats."),
      ccwQ("About how much does one cubic metre of normal concrete weigh?", "About 2400 kg", ["About 240 kg", "About 1000 kg", "About 9000 kg"], "Concrete is heavy, about 2.4 tonnes per cubic metre, so plan lifts and wheelbarrow loads."),
      ccwQ("How much concrete is needed for a 5 m x 3 m slab that is 100 mm thick?", "1.5 m³", ["0.15 m³", "15 m³", "5 m³"], "5 x 3 x 0.1 = 1.5 m³, before extra for waste."),
      ccwQ("Fresh wet concrete can burn skin because it is:", "Highly alkaline", ["Very hot", "Highly acidic", "Radioactive"], "Cement is alkaline (about pH 12 to 13). Wash with clean water right away and remove soaked clothing."),
      ccwQ("Cutting or grinding concrete creates hazardous dust containing:", "Respirable crystalline silica", ["Carbon monoxide", "Asbestos only", "Lead only"], "Use wet methods, vacuum shrouds, and a suitable respirator to reduce exposure."),
      ccwQ("What must happen before digging with machines on a site?", "Utility locates are requested and the marks are followed", ["Nothing, if the soil is soft", "Just call the supervisor", "Dig a test pit with a machine"], "Locating buried lines prevents strikes, so contact the locate service and respect the markings."),
      ccwQ("To lift a heavy object safely you should:", "Bend your knees, keep the load close, and get help for heavy loads", ["Bend at the waist and twist", "Jerk the load up fast", "Carry it above your head"], "A neutral spine and a team lift reduce injury risk."),
      ccwQ("In most Canadian jurisdictions, the 8-hour noise exposure limit is about:", "85 dBA", ["50 dBA", "100 dBA", "120 dBA"], "Jackhammers and compactors can be much louder, so use hearing protection."),
      ccwQ("Which document gives hazards, first aid, and handling details for a form-release oil or curing compound?", "The Safety Data Sheet (SDS)", ["The site schedule", "The drawing set", "The delivery slip"], "Every WHMIS controlled product should have an SDS, and the label gives a short summary."),
      ccwQ("Good housekeeping on a site means:", "Keeping walkways clear, removing nails from lumber, and disposing of waste regularly", ["Leaving material wherever it falls", "Stacking lumber in walkways", "Burying scrap on site"], "Trips, punctures, and falling objects are common, so tidy as you go."),
      ccwQ("An unguarded floor opening should be:", "Covered with a secured, marked cover or guarded", ["Left open with a spray paint ring", "Covered with a loose scrap of plywood", "Ignored"], "Covers must be strong, secured, and marked. Guardrails are an alternative."),
      ccwQ("Hand-arm vibration from a jackhammer can be reduced by:", "Using low-vibration tools, correct technique, and rotating tasks", ["Gripping the handle tightly all day", "Working without breaks", "Using a dull bit"], "Reducing exposure time and tool vibration helps prevent long-term nerve and circulation damage."),
      ccwQ("Which of the following is the most important sign of heat stress to act on?", "Confusion, hot dry skin, or fainting", ["Feeling slightly warm", "Needing sunscreen", "Wearing a hard hat"], "These can be signs of heat stroke, which is an emergency. Stop work, cool the person, and call for help."),
      ccwQ("Workers who work near moving traffic need to wear:", "High-visibility apparel meeting the required class", ["Dark clothing", "Only a hard hat", "Light cotton shirts"], "Visibility is vital, and the class depends on traffic speed and conditions."),
      ccwQ("Before using a sledgehammer you should:", "Check that the head is tight and the handle is sound, and keep others clear", ["Swing it near others", "Use a cracked handle", "Strike hardened steel faces together"], "A loose head or cracked handle can fail, so inspect tools before use."),
      ccwQ("How many kilograms are in one tonne?", "1000", ["100", "10,000", "2.2"], "A metric tonne is 1000 kg. Concrete volumes are often turned into tonnes for hauling.")
    ],
    2: [
      ccwQ("The most serious hazard of trench work is:", "Cave-in", ["Noise", "Sunburn", "Boredom"], "A cubic metre of soil weighs more than a tonne, so cave-ins are often fatal."),
      ccwQ("Excavated soil (spoil) should be placed:", "Back from the trench edge as the regulation requires", ["Right at the trench edge", "In the trench", "On the ladder"], "Spoil piles add load and can fall in, so keep them set back."),
      ccwQ("In the common utility marking colour code, yellow indicates:", "Gas, oil, steam, or other flammable products", ["Electric", "Communications", "Potable water"], "Yellow marks hazardous products such as gas and oil. Always check your provincial locate service rules."),
      ccwQ("In the common utility marking colour code, red indicates:", "Electric power lines", ["Sewer", "Survey marks", "Reclaimed water"], "Red is for electric. Blue is potable water, orange is communications, and green is sewer or drain."),
      ccwQ("Fill is compacted in lifts so that:", "Each thin layer reaches the required density", ["The pile looks higher", "Material is used up faster", "Water can drain away"], "Thick layers do not compact in the middle, which causes settlement later."),
      ccwQ("Pressure of fresh concrete on a wall form is greatest when:", "The pour is fast, the concrete is fluid, and it is deep", ["The concrete is dry and stiff", "The weather is very cold and the pour is slow", "The form is empty"], "Rate of placement, depth, and temperature affect pressure, so forms must be braced for the planned pour."),
      ccwQ("The main purpose of vibrating concrete is to:", "Consolidate it and remove trapped air", ["Move it across the form", "Make it set faster", "Add water"], "Do not over-vibrate or use the vibrator to drag concrete, since that can cause segregation."),
      ccwQ("A 15M rebar has a nominal diameter of about:", "16 mm", ["15 mm of area", "10 mm", "25 mm"], "Canadian metric bar sizes are designated by rounded diameter: 10M is 11.3 mm, 15M is 16.0 mm, and 20M is 19.5 mm."),
      ccwQ("When gravity sewer pipe is laid, work normally starts at:", "The downstream end, with bells facing upstream", ["The upstream end", "The middle", "Wherever the pipe is stacked"], "Starting downstream and laying uphill lets the pipe drain and keeps the socket joints facing the flow."),
      ccwQ("A trench is 20 m long, 0.6 m wide, and 1.5 m deep. How much soil is excavated?", "18 m³", ["12 m³", "1.8 m³", "30 m³"], "20 x 0.6 x 1.5 = 18 m³, before adding swell."),
      ccwQ("A drop of how many millimetres over 30 m is a 1% grade?", "300 mm", ["30 mm", "100 mm", "3000 mm"], "1% is 1 mm per 100 mm, so 30 m (30,000 mm) x 0.01 = 300 mm."),
      ccwQ("A scaffold should be inspected before use by:", "A competent person, and tagged according to the regulation", ["Anyone passing by", "The material supplier", "No one"], "Competent persons check bases, bracing, guardrails, and planks."),
      ccwQ("Which of the following belongs under every scaffold leg?", "Base plates on firm, level mudsills", ["Loose bricks", "Plywood scraps with no support", "Nothing"], "Spread the load on a firm base to prevent sinking and tipping."),
      ccwQ("Form release agent is applied to forms to:", "Prevent concrete bonding to the form face", ["Speed up curing", "Make forms heavier", "Add strength to the concrete"], "It lets the forms strip cleanly. Keep it off rebar, as it can reduce bond."),
      ccwQ("A grade stake marked with a cut or fill value tells you:", "How far to dig or build up from the stake top to the design level", ["The soil type", "The pipe diameter", "The weather"], "Cut means remove material, and fill means add material."),
      ccwQ("Which type of soil compaction works best with granular material such as sand and gravel?", "Vibratory compaction", ["Wetting only", "Hand tamping only", "No compaction"], "Vibration rearranges particles into a denser state, whereas clay needs kneading or impact compaction."),
      ccwQ("Which is a correct use of a plate compactor?", "Compacting thin lifts in trenches and around forms", ["Compacting one thick lift of 1 m", "Compacting standing water", "Compacting frozen ground"], "Thin lifts at the right moisture reach density. Frozen or saturated ground cannot be compacted properly.")
    ],
    3: [
      ccwQ("As the angle of a sling leg gets lower (closer to horizontal), the tension in each leg:", "Increases", ["Decreases", "Stays the same", "Drops to zero"], "Tension = load share ÷ sin of the angle from horizontal, so flatter angles mean much higher tension."),
      ccwQ("Working load limit (WLL) is:", "The maximum load a rigging item is rated to carry in service", ["The weight of the item", "The breaking strength", "The cost"], "WLL includes a design factor below the breaking strength. Never exceed it."),
      ccwQ("A shackle pin should be:", "The correct pin fully seated, not replaced with a bolt", ["Replaced with any bolt that fits", "Left loose", "Bent to fit"], "Only the manufacturer's pin should be used. Substitutes can fail."),
      ccwQ("A tag line is used to:", "Control a suspended load from a safe distance", ["Lift the load", "Measure the load", "Repair the sling"], "Tag lines stop loads from swinging or spinning and keep workers out of the load's path."),
      ccwQ("Workers must never:", "Stand or walk under a suspended load", ["Use a tag line", "Inspect slings", "Use a signaller"], "A falling load can be fatal, so stay clear of the drop zone."),
      ccwQ("During a lift, who gives signals to the crane operator?", "A single designated signaller, though anyone may give a stop signal", ["Whoever is closest", "Everyone at once", "The oiler"], "One clear voice prevents confusion, and a stop is obeyed from anyone."),
      ccwQ("Which CSA standard is used for managing work in confined spaces?", "CSA Z1006", ["CSA Z96", "CSA O86", "CSA G30.18"], "Z1006 covers hazard assessment, entry permits, atmospheric testing, and rescue planning."),
      ccwQ("Before entering a deep manhole or tank, the atmosphere must be:", "Tested and monitored, with a trained attendant outside", ["Smelled for gas", "Assumed safe", "Tested after you enter"], "Oxygen, flammables, and toxic gases are tested, and an attendant maintains contact and starts rescue."),
      ccwQ("Concrete should not be placed on:", "Frozen subgrade", ["Compacted gravel", "Damp subgrade", "A vapour barrier"], "Frozen ground can thaw and settle, causing cracking and heaving."),
      ccwQ("Curing concrete means:", "Keeping it moist and at a suitable temperature so hydration continues", ["Letting it dry out fast", "Sealing it after it has dried", "Washing it with salt"], "Strength and durability develop as the cement hydrates, which needs moisture and warmth."),
      ccwQ("A slump test measures concrete's:", "Consistency or workability", ["Colour", "Compressive strength", "Temperature only"], "It shows how much the concrete sags when a standard cone is lifted."),
      ccwQ("In Ontario's construction regulation, soil types 1 to 4 are ranked so that:", "Type 4 is the least stable", ["Type 1 is the least stable", "Type 3 is solid rock", "All are equally stable"], "Soil classification sets the allowable slopes and the required support. Check your own province's categories."),
      ccwQ("When backfilling around new pipe, you should:", "Place and compact bedding and cover in layers by hand or small equipment", ["Dump large rocks directly on the pipe", "Backfill with frozen lumps", "Drive over it right away"], "Dropping large rocks or heavy equipment on the pipe can crack it."),
      ccwQ("When working near an excavator or loader, you should:", "Stay out of the swing radius and make eye contact with the operator", ["Walk behind it while it reverses", "Stand under the bucket", "Wave from any angle"], "Operators have blind spots. Agree on signals and keep clear of moving equipment."),
      ccwQ("A benchmark on a drawing is:", "A fixed point of known elevation used as a reference", ["A type of bolt", "A property line", "A brand of level"], "Levels are shot from the benchmark to set grades."),
      ccwQ("The main reason for a spotter when a truck backs up is:", "To guide the driver and keep people clear of blind spots", ["To check the paint", "To slow work down", "To measure fuel"], "Backing incidents are common, and a spotter in view of the driver reduces risks."),
      ccwQ("Which concrete placement practice helps prevent segregation?", "Avoid dropping concrete from a great height and avoid long horizontal runs with a vibrator", ["Free-falling the concrete from 4 m", "Dragging concrete with a vibrator", "Adding extra water to flow it"], "Segregation separates aggregate from paste and weakens the concrete.")
    ],
    4: [
      ccwQ("A pre-job hazard assessment or tailgate meeting should:", "Identify hazards, controls, and responsibilities before work starts", ["Replace training", "Be signed but not discussed", "Happen after the work"], "Talking through hazards and controls keeps the crew aligned."),
      ccwQ("If you strike a buried gas line while digging, you should:", "Stop work, evacuate the area, and call emergency services and the utility from a safe place", ["Try to bend the pipe closed", "Keep digging", "Light a flare"], "Gas can ignite or suffocate, so get everyone away and report immediately."),
      ccwQ("Deep or complex excavation support systems are usually:", "Designed by a professional engineer where the regulation requires", ["Chosen by the newest worker", "Designed by the material supplier", "Left to chance"], "Provincial regulations set depth and soil conditions that trigger an engineered design."),
      ccwQ("Normal structural concrete is tested for strength at:", "28 days, using cylinders cured under standard conditions", ["1 hour", "7 hours", "5 years"], "28-day compressive strength is the common specification point."),
      ccwQ("A concrete pump hose should be handled by:", "Trained workers who keep clear of the end hose and never kink the line", ["Anyone standing close to the nozzle", "Workers who tie it to their belt", "Nobody"], "Hose whip and blockages can cause serious injuries. Relieve pressure before clearing blockages."),
      ccwQ("An 8 m x 6 m slab is 150 mm thick. How much concrete including 10% extra should be ordered?", "About 7.9 m³", ["About 7.2 m³", "About 72 m³", "About 4.8 m³"], "8 x 6 x 0.15 = 7.2 m³, and 7.2 x 1.10 = 7.92 m³."),
      ccwQ("Which of the following is the most effective way to control silica dust exposure?", "Eliminate or reduce dust at the source with wet methods or capture", ["Wear a paper mask only", "Work faster", "Blow the dust away with compressed air"], "The hierarchy of controls puts source control ahead of PPE."),
      ccwQ("Before demolishing an older building, you should ensure:", "A hazardous materials survey for asbestos and lead was done", ["The doors are open", "The tools are new", "The weather is dry"], "Designated substances must be identified and controlled before work."),
      ccwQ("If you find a suspect material that may be asbestos during work, you should:", "Stop work, secure the area, and notify your supervisor", ["Keep working with a dust mask", "Sweep it up", "Take it home"], "Disturbing asbestos can release fibres, so wait for testing and proper procedures."),
      ccwQ("A benchmark has an elevation of 100.000 m. The backsight reading is 1.250 m and the foresight reading is 1.700 m. What is the elevation of the foresight point?", "99.550 m", ["100.450 m", "101.250 m", "98.300 m"], "Height of instrument = 100.000 + 1.250 = 101.250. Then subtract the foresight: 101.250 − 1.700 = 99.550 m."),
      ccwQ("Backfilled walls behind a retaining wall need:", "Drainage and compaction in lifts", ["Only dirt dumped in one load", "No drainage", "Frozen soil"], "Water pressure can overload walls, so drains and proper backfill are essential."),
      ccwQ("Erosion and sediment control on a site is used to:", "Keep soil and silt out of storm drains and waterways", ["Increase noise", "Reduce hours", "Make roads dirty"], "Silt fences, mats, and settling controls follow the site's plan."),
      ccwQ("A critical lift should have:", "A written lift plan, rated gear, a qualified signaller, and a controlled zone", ["An improvised plan", "Unknown load weights", "No exclusion zone"], "Planning prevents overloads and struck-by incidents."),
      ccwQ("Workers have which basic rights under occupational health and safety law in every Canadian province?", "To know about hazards, to participate, and to refuse unsafe work", ["To choose pay rates", "To skip training", "To stop all projects"], "These are the foundation of the internal responsibility system. Your province defines the process."),
      ccwQ("When running a crew for the day, you should first:", "Confirm the plan, hazards, equipment, and roles", ["Start working without a plan", "Skip PPE checks", "Assign tasks randomly"], "Clear planning avoids confusion and keeps people safe."),
      ccwQ("A written order to stop an unsafe activity should be:", "Obeyed immediately and reported", ["Challenged on site", "Ignored", "Delayed"], "Safety stop-work authority exists so anyone can act on imminent danger."),
      ccwQ("Which person needs to be aware of a change to the trench support design?", "Everyone working in or near the excavation, plus the engineer if required", ["No one", "Only visitors", "Only the delivery driver"], "Changes affect cave-in protection, so verify with the competent person and engineer.")
    ]
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS, working at heights, and site orientation; requirements vary)", "Prepare a resume and contact LiUNA locals and general, civil, and concrete contractors", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: site safety and basics", items: ["Learn site safety, PPE, housekeeping, and material handling", "Practice using hand tools, measuring, and reading site marks", "Learn basic forming and concrete placing tasks", "Complete your first technical training block", "Build your core PPE and tool kit (see Buying tools)"] },
    { title: "Year 2: excavation, pipe, and concrete", items: ["Learn trench safety, sloping, and shoring", "Learn utility locates and the colour code", "Lay pipe to grade and compact backfill", "Build and brace wall and footing forms, and learn concrete placing and curing"] },
    { title: "Year 3: rigging, scaffolds, and confined spaces", items: ["Learn rigging, sling angles, and signalling", "Erect and inspect scaffolds under supervision", "Learn confined space awareness and gas monitoring", "Learn demolition basics, silica control, and traffic control"] },
    { title: "Year 4 and beyond: advanced", items: ["Lead small crews and plan work with hazard assessments", "Read civil and structural drawings and set grade from benchmarks", "Learn estimating of quantities such as concrete and excavation volumes", "Mentor first-year apprentices and use the Red Seal standard to find gaps in your experience"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["Backfill", "Soil or granular material placed back into an excavation."],
    ["Bedding", "Granular material placed under and around pipe for support."],
    ["Benchmark", "A fixed point of known elevation used as a reference."],
    ["Cave-in", "The sudden collapse of an excavation wall."],
    ["Compaction", "Densifying soil to improve strength and reduce settlement."],
    ["Competent person", "A person with the knowledge and authority to identify hazards and correct them."],
    ["Curing", "Keeping concrete moist and warm so it gains strength."],
    ["Cut and fill", "Removing soil to reach grade, or adding soil to raise it."],
    ["Formwork", "Temporary moulds that hold concrete until it gains strength."],
    ["Grade", "The slope or elevation of a surface or pipe."],
    ["Hydration", "The chemical reaction between cement and water that hardens concrete."],
    ["Lift", "A layer of fill or concrete placed in one stage."],
    ["Locates", "Markings showing the position of buried utilities."],
    ["Rebar", "Steel reinforcing bar placed in concrete."],
    ["Respirable crystalline silica", "Fine dust from concrete and stone that can cause lung disease."],
    ["Rigging", "Slings, hardware, and methods used to lift and move loads."],
    ["Scaffold", "A temporary elevated work platform and its supporting structure."],
    ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
    ["Segregation", "Separation of the aggregate from the paste in concrete."],
    ["Shoring", "A support system that protects workers from an excavation collapse."],
    ["Signaller", "A worker who directs a crane or equipment operator with signals."],
    ["Sloping", "Cutting trench walls back at an angle to prevent a cave-in."],
    ["Slump", "A measure of the consistency of fresh concrete."],
    ["Spoil", "Material removed from an excavation."],
    ["Strip", "To remove formwork after concrete has gained enough strength."],
    ["Tag line", "A rope used to control a suspended load."],
    ["Trench box", "A shield that protects workers in a trench but does not stop soil from collapsing."],
    ["WHMIS", "Canada's workplace hazardous materials information system."],
    ["WLL", "Working load limit, the maximum load rigging is rated to carry."]
  ],
  cards: [
    { front: "Weight of 1 m³ of normal concrete", back: "About 2400 kg" },
    { front: "Concrete volume for a slab", back: "Length x width x thickness (in metres), plus extra for waste" },
    { front: "Sling leg tension at 60° from horizontal (per unit of load carried by that leg)", back: "Load share x 1.155" },
    { front: "Utility colour: yellow", back: "Gas, oil, steam, and other flammable products" },
    { front: "Utility colour: red", back: "Electric power" },
    { front: "Utility colour: blue", back: "Potable water" },
    { front: "Rebar 15M diameter", back: "16 mm nominal" },
    { front: "The main danger of trench work", back: "Cave-in, so slope, shield, or shore before entry" },
    { front: "A 1% grade over 30 m drops", back: "300 mm" },
    { front: "Cure concrete by", back: "Keeping it moist and warm so hydration continues" }
  ],
  jobsIntro: "Look for general contractors, civil and road builders, concrete forming and utility contractors, pipeline and industrial contractors, union locals such as LiUNA, and municipal public works departments.",
  tips: ["Bring a short resume, your safety tickets, and ID.", "Show you are reliable, fit, and eager to learn a wide range of tasks.", "Visit contractors and union halls in person when you can, and follow up.", "Ask what PPE and tools you need and what the employer supplies."],
  forumTopics: ["Starting out", "Excavation, trenches, and pipe", "Concrete forming and rigging", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
  reference: [
    {
      title: "Key formulas",
      list: [
        "Volume of a rectangle (slab, trench) = length x width x depth, in m³",
        "Volume of a cylinder (post hole, pier) = π x r² x height",
        "Grade (%) = rise ÷ run x 100; drop = run x grade",
        "Sling leg tension = load share per leg ÷ sin (angle from horizontal)",
        "Elevation by level: HI = benchmark + backsight; point elevation = HI − foresight",
        "Order quantity = calculated volume x (1 + waste allowance)"
      ]
    },
    {
      title: "Conversions",
      list: [
        "1 in = 25.4 mm, and 1 ft = 304.8 mm",
        "1 m³ = 1.308 yd³, and 1 yd³ = 0.7646 m³",
        "1 m³ = 1000 L, and 1 tonne = 1000 kg",
        "1 MPa ≈ 145 psi",
        "Normal concrete ≈ 2400 kg/m³",
        "1 kg ≈ 2.205 lb"
      ]
    },
    {
      title: "Canadian reinforcing bar sizes (metric)",
      table: {
        head: ["Bar", "Nominal diameter (mm)", "Cross-sectional area (mm²)"],
        rows: [["10M", "11.3", "100"], ["15M", "16.0", "200"], ["20M", "19.5", "300"], ["25M", "25.2", "500"], ["30M", "29.9", "700"], ["35M", "35.7", "1000"]]
      },
      note: "Reinforcing bar is covered by CSA G30.18. Always follow the structural drawings for sizes and spacing."
    },
    {
      title: "Sling angle effect (two-leg sling, load shared evenly)",
      table: {
        head: ["Leg angle from horizontal", "Tension multiplier per leg (x half the load)"],
        rows: [["90° (vertical)", "1.000"], ["60°", "1.155"], ["45°", "1.414"], ["30°", "2.000"]]
      },
      note: "Keep sling angles above the minimum shown on the sling tag or rigging chart. Rated capacity drops as the angle gets lower."
    },
    {
      title: "Utility locate colour code (commonly used in Canada)",
      table: {
        head: ["Colour", "Meaning"],
        rows: [["Red", "Electric power"], ["Yellow", "Gas, oil, steam, and other flammable products"], ["Orange", "Communications, alarm, or signal lines"], ["Blue", "Potable water"], ["Green", "Sewer and drain lines"], ["White", "Proposed excavation limits"], ["Pink", "Temporary survey marks"], ["Purple", "Reclaimed water, irrigation, or slurry"]]
      },
      note: "Marks are a guide. Hand dig or use approved methods near them and follow your provincial locate rules."
    },
    {
      title: "Trench safety checklist",
      list: [
        "Locates are complete and marks are protected.",
        "Spoil and equipment are kept back from the edge as the regulation requires.",
        "Walls are sloped, shielded, or shored for the soil type and depth.",
        "A safe way in and out is provided, and workers stay out of unprotected trenches.",
        "Water, vibration, and nearby loads are checked, and the trench is inspected daily and after rain."
      ],
      note: "Depth limits, soil classes, and ladder spacing differ by province. Use your own provincial construction regulation."
    }
  ]
});
