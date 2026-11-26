// Ironworker (Generalist) content: tools, learning media, practice tests, roadmap, and reference.
// Practice questions are original study aids, not official Red Seal exam questions.

const iwTl = (a) => a.map(([name, why, search]) => ({ name, why, search }));
const iwMd = (a) => a.map(([name, desc, url]) => ({ name, desc, url }));
// Each row is [question, correct answer, [3 wrong answers], explanation]; the correct position rotates.
const iwQs = (a) => a.map(([q, c, w, explain], i) => {
  const answer = (i * 3 + 0) % 4;
  const options = w.slice();
  options.splice(answer, 0, c);
  return { q, options, answer, explain };
});
const iwYt = (s) => `https://www.youtube.com/results?search_query=${s}`;
const iwNote = "Professional-grade tools that hold up to daily use. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.";

registerTrade({
  id: "ironworker-generalist",
  store: "ironworker-generalist",
  title: "Ironworker (Generalist)",
  name: "Ironworker (Generalist)",
  short: "ironwork",
  category: "Construction · Structural · Heights",
  summary: "Generalist ironworkers erect structural steel and metal decking, place reinforcing steel, and rig and hoist heavy materials on buildings, bridges, and industrial projects.",
  work: "Ironworkers connect beams and columns, bolt and weld them in place, lay steel deck, install ornamental metal, and place and tie rebar. Much of the work is outdoors and at height, with constant rigging and crane signals, so fall protection and teamwork are central.",
  duration: "Usually about 3 to 4 years, varies by province",
  union: "Ironworkers (International Association of Bridge, Structural, Ornamental and Reinforcing Iron Workers)",
  unionUrl: "https://www.ironworkers.org/",
  jobSearch: "ironworker apprentice",
  journeySearch: "ironworker",
  aliases: "iron worker structural steel rebar reinforcing rigging erector decking connector bridge ornamental heights",
  tools: ["CSA hard hat, glasses, and boots", "Full-body harness and lanyard", "Spud wrench and bull pin", "Tape measure and chalk line", "Rebar tying tool or pliers", "Tool belt and tether lanyards"],
  insight: {
    skills: ["Comfort with heights and physical work", "Balance, strength, and coordination", "Spatial thinking and reading drawings", "Clear communication with crane operators and crews"],
    hazards: ["Falls: use approved fall protection and anchors every time", "Suspended loads: stay clear and use tag lines", "Dropped tools: tether tools and use toe boards", "Weather and wind: stop work when conditions are unsafe"],
    settings: ["Commercial and high-rise construction", "Bridges and infrastructure", "Industrial plants and mining", "Fabrication shops and rebar yards"]
  },
  toolGroups: [
    {
      title: "Day-one tools, buy once and buy well",
      note: iwNote,
      items: iwTl([
        ["CSA hard hat with chin strap", "Heights and wind demand a hard hat that stays on. Chin straps and a Type 2 rating are common site requirements.", "CSA Z94.1 hard hat chin strap Type 2"],
        ["CSA safety glasses", "Grinding, cutting, and wind-blown debris are constant eye hazards.", "CSA safety glasses anti fog"],
        ["CSA Grade 1 safety boots with metatarsal protection", "Good grip on steel and protection from dropped material. Pick boots with ankle support.", "CSA safety boots Red Wing Blundstone ankle support"],
        ["Leather or grip work gloves", "Protect against steel edges and hot surfaces. Grip matters on cold steel.", "leather rigger gloves Mechanix grip work gloves"],
        ["Tape measure (8 m or 25 ft)", "Measure layout and connections reliably.", "Stanley FatMax tape measure 8m 25 ft"],
        ["Chalk line and soapstone", "Mark layout lines and positions on steel and concrete.", "chalk line soapstone holder"],
        ["Tool belt with tool tethers", "Keep tools on your body and tether them to prevent dropped objects.", "ironworker tool belt tool tether lanyard"],
        ["Spud wrench", "A long handle for tightening bolts with a tapered end to align holes.", "ironworker spud wrench 15/16 1-1/8"],
        ["Bull pin or drift pin", "Align bolt holes during connection of steel members.", "ironworker bull pin drift pin"],
        ["Flame-resistant clothing and warm layers", "Cutting sparks and cold winds are daily concerns. Dress for the weather in layers.", "flame resistant work clothes insulated layers"]
      ])
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
      items: iwTl([
        ["Rebar tying tool or tie wire pliers", "Fast, repeatable tying. A hand twister works well while you learn the pattern.", "rebar tying hook tie wire pliers Max"],
        ["Rebar bender and cutters (manual)", "Hand benders and cutters for small bars. Larger bar is bent by machine.", "manual rebar bender cutter"],
        ["Ratchet wrench set", "Faster bolting when the connection allows it.", "ratchet wrench set metric imperial"],
        ["Level, plumb bob, and magnetic square", "Plumb and level columns and frames.", "magnetic torpedo level plumb bob square"],
        ["Welding hood, gloves, and pliers", "Ironworkers weld deck and connections, so keep your own PPE in good shape.", "auto darkening welding helmet leather welding gloves"],
        ["Come-along and chain fall (employer supplied if possible)", "Pull and align members. Learn working load limits.", "come along chain fall rigging"],
        ["Beam clamps and tag line", "Used for rigging and controlling loads. Employer supplies and inspects them.", "beam clamp tag line rope"]
      ])
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying.",
      items: iwTl([
        ["Full-body harness and shock-absorbing lanyard (CSA Z259)", "Usually supplied by the employer. Inspect before every use and replace after a fall.", "3M DBI-SALA full body harness CSA lanyard"],
        ["Retractable fall arrester or self-retracting lifeline", "Useful for connectors and decking. Usually employer supplied.", "self retracting lifeline fall arrester CSA"],
        ["Torque wrench or calibrated wrench for bolt pretension", "Used on bolt inspection. Calibration by the employer or inspector.", "torque wrench click type 3/4 drive"],
        ["Cutting torch outfit and hoses", "Cut steel on site. Usually supplied and maintained by the employer.", "oxy acetylene torch kit cutting"],
        ["Hydraulic bar bender or bar shear", "Bending and shearing larger bar. Typically shop equipment.", "hydraulic rebar bender shear"],
        ["Rescue and suspension relief equipment", "Rescue plans and kits are employer provided. Learn how to use them.", "fall protection rescue kit suspension relief strap"]
      ])
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for drawings, math, and code study. Check with your school and your exam body about calculator rules before you buy.",
      items: iwTl([
        ["Scientific calculator (Casio fx-991 or TI-30XS)", "Trigonometry for sling angles and layout.", "Casio fx-991 Texas Instruments TI-30XS MultiView"],
        ["Mechanical pencil (0.5 mm) and spare leads", "Neat sketches and drawing notes.", "Pentel GraphGear mechanical pencil 0.5mm leads"],
        ["Engineer's and architect's scales", "Read structural and architectural drawings at scale.", "architect scale engineer scale ruler"],
        ["Protractor and drafting triangles", "Angles for bracing, stairs, and layout.", "protractor drafting triangle set"],
        ["Rigging handbook", "Check working load limits and hitch details. Confirm which edition your school uses.", "rigging handbook ironworker"],
        ["Field notebook (Rite in the Rain)", "Weatherproof notes for lifts, measurements, and bar lists.", "Rite in the Rain field notebook"],
        ["Binder, dividers, and highlighters", "Organize notes by topic for Red Seal exam review.", "binder dividers highlighters"],
        ["Steel construction handbook (CISC)", "Reference for steel shapes and connections.", "CISC handbook of steel construction"]
      ])
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: iwMd([
        ["Red Seal exam preparation", "How Red Seal exams work and how to prepare.", "https://red-seal.ca/eng/welcome.shtml"],
        ["Ironworkers (International Association)", "Union apprenticeship and training information.", "https://www.ironworkers.org/"],
        ["Canadian Institute of Steel Construction", "Steel design, erection, and standards information.", "https://www.cisc-icca.ca/"],
        ["CSA Group", "Publisher of CSA S16, A23.1, W59, and the Z259 fall protection standards.", "https://www.csagroup.org/"],
        ["Codes Canada", "Model national codes that provincial codes are based on.", "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada"]
      ])
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and applicable codes.",
      items: iwMd([
        ["Structural steel erection", "Setting columns and beams, connecting, and plumbing up.", iwYt("structural+steel+erection+ironworker+connecting")],
        ["Rigging basics for ironworkers", "Slings, hitches, shackles, and inspection.", iwYt("rigging+basics+ironworker+slings+hitches+shackles")],
        ["Crane hand signals", "Standard signals between signal person and operator.", iwYt("crane+hand+signals+standard+signal+person")],
        ["Rebar placing and tying", "Tie patterns, chairs, and cover.", iwYt("rebar+placing+tying+ironworker+reinforcing+steel")],
        ["Steel deck installation", "Laying, fastening, and edge protection for decking.", iwYt("steel+deck+installation+puddle+welds+ironworker")],
        ["Bolting and pretension", "Snug-tight, turn-of-nut, and tension indicating washers.", iwYt("structural+bolting+pretension+turn+of+nut+DTI+washers")],
        ["Fall protection for ironworkers", "Harnesses, anchors, and rescue planning.", iwYt("fall+protection+ironworker+harness+anchor+rescue")],
        ["Reading structural drawings", "Plans, elevations, and connection details.", iwYt("reading+structural+steel+drawings+ironworker")]
      ])
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for ironwork yourself.",
      items: iwMd([
        ["Skills Ontario Trades Tech Talk Podcast", "Careers, apprenticeships, and getting started in the skilled trades.", "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/"],
        ["TradeMasters Podcast (Canada)", "Skilled trades careers, licensing, and exam topics.", "https://www.tmws.ca/podcasts"],
        ["YouTube: ironworker apprentice podcast (audio-only listening)", "Open the results and press play with the screen off, or use a background-play option.", iwYt("ironworker+apprentice+podcast")]
      ])
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: iwMd([
        ["YouTube: ironworker stories and career talk (audio)", "Working ironworkers talk about the job and the trade.", iwYt("ironworker+podcast+stories+career")],
        ["YouTube: rigging and crane safety talks", "Signals, lift planning, and near-miss lessons.", iwYt("rigging+crane+safety+podcast+lift+planning")],
        ["YouTube: reinforcing steel and concrete talks", "Rebar details and concrete placement from the field.", iwYt("reinforcing+steel+rebar+concrete+podcast")]
      ])
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, planning, and leadership.",
      items: iwMd([
        ["YouTube: Red Seal ironworker exam prep (talk-through)", "Study talks you can listen to while commuting.", iwYt("Red+Seal+ironworker+generalist+exam+preparation")],
        ["YouTube: erection planning and steel construction", "Sequencing, stability, and erection engineering topics.", iwYt("steel+erection+planning+podcast+stability+sequence")],
        ["YouTube: leading a crew and mentoring apprentices", "Leadership and training skills for new journeypersons.", iwYt("skilled+trades+leadership+mentoring+apprentices+podcast")]
      ])
    }
  ],
  practiceBank: {
    1: iwQs([
      ["A full-body harness for fall arrest is normally connected at the:", "Back (dorsal) D-ring to an approved anchor", ["Waist belt loop", "Chest strap", "Leg strap"], "The dorsal D-ring keeps the body upright after a fall. Always follow your equipment manual and site rules."],
      ["Provincial fall protection rules commonly require protection when a fall could be from about:", "3 m or more, or lower if there are other hazards", ["30 m only", "No height at all", "10 m only"], "Details differ by province, so check your local OHS regulation."],
      ["A 15M rebar has a nominal diameter of about:", "16 mm", ["15 mm", "25 mm", "10 mm"], "Metric bar sizes are approximate nominal numbers. 15M is 16.0 mm in diameter and 200 mm² in area."],
      ["A 10M rebar has a cross-sectional area of:", "100 mm²", ["10 mm²", "1000 mm²", "200 mm²"], "10M is 100 mm², 15M is 200 mm², 20M is 300 mm², and 25M is 500 mm²."],
      ["A tag line on a suspended load is used to:", "Control rotation from a safe distance", ["Carry the full load", "Replace the hook", "Weigh the load"], "Never stand under the load or wrap the line around your hand."],
      ["In the designation W250 × 33, the 33 means:", "33 kg per metre", ["33 mm flange", "33 bolts", "33 cm depth"], "W250 is a wide-flange shape about 250 mm deep."],
      ["Standing under a suspended load is:", "Never allowed", ["Fine if it is light", "Safe if the crane is new", "Fine for tag lines only"], "Loads can slip or fall, so stay clear."],
      ["What is rebar tie wire used for?", "Holding bar intersections together during concrete placement", ["Welding bars", "Cutting bars", "Measuring spacing"], "Ties keep bars in position so they do not shift."],
      ["A spud wrench is used to:", "Tighten bolts and align holes with its tapered handle", ["Cut rebar", "Drive deck screws", "Measure bars"], "The tapered end can be used to drift holes into line."],
      ["Never put oil or grease on:", "Oxygen cylinder valves and regulators", ["Chains", "Bolts", "Rigging hooks"], "Oil with pure oxygen can ignite violently."],
      ["Wire rope must be removed from service if it shows:", "Kinks, birdcaging, or many broken wires", ["Light surface dirt", "A shiny finish", "A small amount of grease"], "Follow the inspection criteria in your standard and site procedure."],
      ["Where can you find hazards and first aid steps for a paint or coating?", "The Safety Data Sheet (SDS)", ["The invoice", "The drawing title block", "The crane log"], "WHMIS requires an SDS for hazardous products."],
      ["A 6 m beam is about how many feet long?", "19.7 ft", ["12.0 ft", "6.0 ft", "24.5 ft"], "1 m = 3.281 ft, so 6 m = 19.7 ft."],
      ["Rebar bundles should be stored:", "Off the ground on dunnage", ["Directly in mud", "In a pile on a slope", "Under a suspended load"], "Dunnage keeps bars clean and bundles stable."],
      ["The approximate conversion from inches to millimetres is:", "1 in = 25.4 mm", ["1 in = 2.54 mm", "1 in = 30 mm", "1 in = 10 mm"], "It is exact: 25.4 mm per inch."],
      ["Which standard covers full-body harnesses in Canada?", "CSA Z259.10", ["CSA S16", "CSA A23.1", "CSA W59"], "Z259.10 covers full-body harnesses, and Z259.11 covers energy absorbers and lanyards."]
    ]),
    2: iwQs([
      ["A two-leg sling with legs 60° from horizontal lifts 1000 kg. Tension in each leg is about:", "577 kg", ["500 kg", "1000 kg", "707 kg"], "Tension = 1000 ÷ (2 × sin 60°) = 577 kg."],
      ["A choker hitch compared with a vertical hitch usually:", "Reduces the rated capacity", ["Increases capacity", "Has no effect", "Is for tag lines only"], "Use the rated capacity from the tag or chart for the hitch."],
      ["The lap splice length for rebar is:", "Specified on the structural drawings and code", ["Chosen by feel", "Always 100 mm", "Always 1 m"], "Lap length depends on bar size, concrete, and design."],
      ["Chairs and bolsters under rebar are used to:", "Maintain the specified cover and bar position", ["Cut bars", "Add weight", "Replace ties"], "Cover protects steel from corrosion and fire."],
      ["A 25M rebar has an area of:", "500 mm²", ["250 mm²", "25 mm²", "1000 mm²"], "25M is 500 mm² with a 25.2 mm nominal diameter."],
      ["Columns are commonly plumbed up using:", "Cables or guys with turnbuckles, checked with an instrument", ["Tag lines left in place", "Paint marks on the base plate", "Extra anchor rod nuts only"], "Plumbing up is done before final tightening and release of braces."],
      ["Anchor rod base plates are commonly set on:", "Levelling nuts or shims, then grouted", ["Loose sand", "Wood blocks only", "Nothing"], "The grout transfers load evenly under the base plate."],
      ["Steel deck is typically fastened to supports with:", "Puddle welds, screws, or other specified fasteners", ["Nails", "Duct tape", "Ties"], "The drawings define the pattern and type."],
      ["A beam may be released from the crane hook when:", "Enough bolts are installed per the erection plan and the member is stable", ["Immediately", "After one pass of the hook", "After lunch"], "Release too early and the member can fall."],
      ["Grade 400 rebar has a minimum yield strength of:", "400 MPa", ["40 MPa", "4000 MPa", "250 MPa"], "CSA G30.18 grade 400 bars are standard in Canada."],
      ["Synthetic slings should be protected from:", "Sharp edges and corners with padding or edge protection", ["Light", "Water", "Soft surfaces"], "Cuts severely reduce capacity."],
      ["Who gives crane signals?", "One designated signal person, except anyone may give an emergency stop", ["Everyone at once", "Whoever is closest", "The operator's helper only"], "Clear single-source signals prevent mistakes."],
      ["A shackle pin is not allowed to be replaced with:", "A bolt", ["A cotter pin", "A matching pin from the same shackle", "A screw pin shackle"], "A bolt is not rated as a pin."],
      ["A floor opening in a deck should be:", "Covered and secured or guarded and marked", ["Left open", "Marked with a pencil", "Covered by a loose sheet"], "Openings are common fall and dropped object hazards."],
      ["Gripping marks on a shackle indicate:", "The working load limit and size", ["The colour", "The price", "The date of purchase"], "Never use a shackle with unreadable markings."],
      ["Which fastener is used in structural steel connections with high strength?", "ASTM A325 or A490 bolts", ["Wood screws", "Sheet metal screws", "Nails"], "These bolts require a pretension method as specified."]
    ]),
    3: iwQs([
      ["A 25M bar 12 m long has a mass of about:", "47.1 kg", ["24 kg", "94 kg", "3.9 kg"], "25M is 3.925 kg/m, so 12 m is 47.1 kg."],
      ["The mass of a 35M bar per metre is about:", "7.85 kg", ["3.9 kg", "1.57 kg", "11.8 kg"], "35M has an area of 1000 mm², which gives 7.85 kg/m."],
      ["Ten 15M bars have a total area of:", "2000 mm²", ["1000 mm²", "150 mm²", "3000 mm²"], "10 × 200 mm² = 2000 mm²."],
      ["Slip-critical bolted joints depend on:", "Friction between properly prepared faying surfaces", ["Bolt shear only", "Welding", "Paint thickness"], "Surface condition and pretension are critical."],
      ["Which CSA standard covers welding of reinforcing bars?", "CSA W186", ["CSA W59", "CSA S16", "CSA G40.21"], "W186 covers welding of reinforcing bars in reinforced concrete construction."],
      ["Headed shear studs on a steel beam under a slab:", "Create composite action between steel and concrete", ["Are for decoration", "Hold deck only", "Hold rebar"], "Studs transfer shear so the two materials work together."],
      ["Direct tension indicator (DTI) washers show correct pretension when:", "Protrusions are compressed to a specified gap", ["They are painted", "They are loose", "They are crushed completely"], "Check the gap with a feeler gauge per the specification."],
      ["A moment connection differs from a simple shear connection because it:", "Transfers bending as well as shear", ["Carries no load", "Is for fences", "Has fewer bolts always"], "Moment connections resist rotation."],
      ["Temporary bracing and guys are kept until:", "Permanent connections and bracing make the structure stable", ["The crane leaves", "The first beam is set", "Lunch"], "An erected frame can be unstable until braced."],
      ["When a lift's wind limit is exceeded you should:", "Stop the lift as the plan, manufacturer, and site rules require", ["Lift faster", "Lift lighter loads only", "Remove tag lines"], "Wind makes loads swing and can overturn cranes."],
      ["A rebar mechanical coupler is used to:", "Join bars end to end without a lap splice", ["Cut bars", "Bend bars", "Tie bars"], "Couplers are used where laps are not practical."],
      ["A bar list or bending schedule shows:", "Mark numbers, bar size, length, quantity, and shape", ["The concrete price", "The crane weight", "The tool list"], "It lets bars be fabricated and tagged for placement."],
      ["On a wire rope clip, the U-bolt is placed on the:", "Dead end of the rope, with the saddle on the live end", ["Live end of the rope", "Either end", "Hook"], "Never saddle a dead horse. The saddle goes on the live end."],
      ["A pick point should be located:", "Above the centre of gravity of the load", ["Below the centre of gravity", "Beside the heaviest corner", "At the lightest end"], "Otherwise the load tilts."],
      ["Welding on galvanized deck or members calls for:", "Ventilation and a suitable respirator as required, since zinc fumes are hazardous", ["No precautions", "Wet clothing", "Loose clothing"], "Zinc fume can cause metal fume fever."],
      ["A permanent connection of a steel beam bolted with A325 bolts is inspected for:", "The specified pretension method and installation records", ["The paint colour", "The crane model", "The beam colour"], "Inspection ensures the bolts are installed as specified."]
    ]),
    4: iwQs([
      ["An erection plan should address:", "Sequence, stability, bracing, and lift requirements", ["Only paint colours", "Only welding rods", "Only invoices"], "A good plan keeps the structure stable at every stage."],
      ["Crane outrigger mats are used to:", "Spread load to the ground and prevent sinking", ["Make the crane quieter", "Increase boom length", "Hold the hook"], "Ground bearing capacity must be known for the lift."],
      ["A tandem lift with two cranes requires:", "An engineered plan and close coordination", ["No planning", "A hand wave", "One signal person per crane giving opposite signals"], "Load sharing changes in real time, so careful planning is essential."],
      ["After a fall arrest event, a lanyard should be:", "Removed from service and inspected or replaced as per the manufacturer", ["Reused immediately", "Washed and reused", "Left on the structure"], "Energy absorbers are single-use after arrest."],
      ["A common maximum free fall distance in Canada for an energy-absorbing lanyard is:", "1.8 m (6 ft)", ["6 m", "0.3 m", "10 m"], "Check your Z259 equipment markings and your site rules."],
      ["Wire rope bent over a small diameter reduces capacity because:", "Sharp bends add stress and wear to the rope", ["It increases strength", "It adds weight", "It makes the rope shorter"], "The bend ratio D/d affects rope efficiency."],
      ["If a weld defect is found on a structural connection, you should:", "Report it to the supervisor or engineer and repair as directed", ["Paint over it", "Ignore it", "Remove the tag"], "Unauthorized repairs can change the design."],
      ["A fall rescue plan should be in place:", "Before work at height starts", ["After the first fall", "Only for training", "On request"], "Suspension in a harness can cause serious injury quickly."],
      ["Tool tethering reduces:", "Dropped object hazards", ["Wind speed", "Steel weight", "Concrete shrinkage"], "Falling tools are a major hazard on sites."],
      ["Congested rebar at a joint should be:", "Reviewed for placement and clarified with the engineer through an RFI", ["Cut as needed", "Left out", "Replaced with smaller bars"], "Changes affect strength and concrete placement."],
      ["Precast panels are lifted using:", "The specified inserts and lifting hardware", ["Any rope", "Chains around edges", "Tag lines only"], "Inserts and hardware are rated for specific loads and angles."],
      ["Which factor reduces a mobile crane's capacity the most?", "A larger working radius", ["A sunnier day", "A shorter hook block", "A tighter tag line"], "Capacity charts show a steep reduction as radius grows."],
      ["Which of these is a permanent part of structural stability?", "The final bolted or welded connections and bracing", ["A borrowed guy line", "A hard hat", "A hook latch"], "Temporary supports are removed only per the plan."],
      ["A mobile crane operator should be told:", "The load weight, radius, and rigging weight", ["Only the beam colour", "Nothing", "The project budget"], "Rigging weight is part of the lift."],
      ["Which scenario needs a hot work permit?", "Torch cutting steel next to combustibles", ["Bolting a beam", "Tying rebar", "Measuring a column"], "Sparks and slag can start hidden fires."],
      ["Weld tests on shear studs often include:", "Bend tests on selected studs, as specified", ["Painting tests", "Weight tests", "Colour tests"], "Specifications define the inspection frequency."]
    ])
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get safety training employers ask for (commonly WHMIS, fall protection, and site orientation; requirements vary)", "Build fitness, balance, and comfort with heights, and consider a pre-apprenticeship program", "Contact Ironworkers locals and contractors, then register your apprenticeship once you have a sponsor"] },
    { title: "Year 1: safety and rigging basics", items: ["Learn site safety, fall protection, and hazard assessment", "Learn rigging hardware, slings, hitches, and signals", "Handle and place steel safely, and learn basic bolting", "Learn to read basic structural drawings", "Complete your first technical training block"] },
    { title: "Year 2: structural steel and decking", items: ["Learn column and beam erection and connection", "Bolt with the specified pretension method", "Lay and fasten steel deck and install edge protection", "Assist with plumbing up and aligning"] },
    { title: "Year 3: reinforcing and ornamental work", items: ["Read bar lists and place and tie rebar to drawings", "Understand cover, laps, and couplers", "Install stairs, railings, and ornamental metal", "Assist with welding studs and field welding as trained"] },
    { title: "Year 4 and beyond: advanced", items: ["Plan lifts and supervise rigging with signals", "Understand erection stability, temporary bracing, and sequence", "Work to CSA S16, W59, and A23.1 requirements as your site does", "Mentor first-year apprentices and use the Red Seal standard to find gaps"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Ask your union or employer about welding and rigging tickets that may add to your credentials"] }
  ],
  glossary: [
    ["Anchor rod", "A rod cast in concrete to hold a column base plate."],
    ["Base plate", "A steel plate at the bottom of a column that bears on the foundation."],
    ["Bar list", "A schedule of rebar marks, sizes, lengths, and shapes."],
    ["Bolster", "A rebar support used to hold bars off the formwork."],
    ["Bull pin", "A tapered pin used to align bolt holes."],
    ["Chair", "A rebar support that holds top bars at the specified height."],
    ["Choker hitch", "A sling wrapped around a load and through its own eye."],
    ["Connector", "An ironworker who makes connections of beams and columns during erection."],
    ["Cover", "The distance from the surface of concrete to the nearest rebar."],
    ["Dead end", "The end of a wire rope that does not carry the load, where the U-bolt of a clip is placed."],
    ["Decking", "Corrugated steel sheet used as a floor or roof base."],
    ["Drift pin", "A tapered pin used to align holes without damaging them."],
    ["Faying surface", "The contact surface between two plates in a bolted joint."],
    ["Grout", "A cementitious or other fill placed under base plates."],
    ["Lap splice", "An overlap of two rebar to transfer load."],
    ["Live end", "The end of the wire rope under tension, where the clip saddle goes."],
    ["Mechanical coupler", "A device that joins rebar end to end."],
    ["Moment connection", "A connection that transfers bending moment as well as shear."],
    ["Plumb up", "Adjust a column or frame until it is vertical."],
    ["Pretension", "Tightening a bolt to a specified tension."],
    ["Puddle weld", "A weld made through a hole or the deck to fasten it to its support."],
    ["Rigging", "The equipment and methods used to lift and move loads."],
    ["Shear stud", "A headed stud welded to a beam to connect it to concrete."],
    ["Signal person", "The designated person who directs the crane operator."],
    ["Snug-tight", "The tightness of a bolt after full effort with a spud wrench or a few impacts."],
    ["Spud wrench", "A long wrench with a tapered end used for bolting and aligning."],
    ["Tag line", "A rope used to control the rotation of a suspended load."],
    ["Tie wire", "Soft wire used to hold rebar intersections."],
    ["Working load limit (WLL)", "The maximum load a piece of rigging is rated to carry."]
  ],
  cards: [
    { front: "Rebar areas (mm²)", back: "10M = 100, 15M = 200, 20M = 300, 25M = 500, 30M = 700, 35M = 1000, 45M = 1500, 55M = 2500" },
    { front: "Rebar mass per metre", back: "Area in mm² × 0.00785 kg/m (25M = 3.925 kg/m)" },
    { front: "Sling leg tension, two legs", back: "Load ÷ (2 × sin of angle from horizontal)" },
    { front: "Wire rope clip placement", back: "U-bolt on the dead end, saddle on the live end" },
    { front: "Typical maximum free fall for lanyards", back: "1.8 m (6 ft)" },
    { front: "Which standard covers fall arrest harnesses?", back: "CSA Z259.10" },
    { front: "What does W250 × 33 mean?", back: "Wide flange, about 250 mm deep, 33 kg per metre" },
    { front: "Standard that covers welded rebar", back: "CSA W186" },
    { front: "Inches to millimetres", back: "1 in = 25.4 mm" }
  ],
  jobsIntro: "Look for structural steel erectors, reinforcing steel contractors, bridge and infrastructure builders, industrial contractors, and the Ironworkers union locals.",
  tips: ["Bring a short resume, your safety tickets, and ID.", "Show you are fit, reliable, and comfortable with heights.", "Contact union locals and contractors directly, and follow up.", "Ask what PPE and tools you must bring and what the employer supplies."],
  forumTopics: ["Starting out", "Rigging and structural erection", "Rebar and decking", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
  reference: [
    {
      title: "Canadian rebar sizes",
      table: {
        head: ["Bar size", "Nominal diameter (mm)", "Area (mm²)", "Mass (kg/m)"],
        rows: [["10M", "11.3", "100", "0.785"], ["15M", "16.0", "200", "1.570"], ["20M", "19.5", "300", "2.355"], ["25M", "25.2", "500", "3.925"], ["30M", "29.9", "700", "5.495"], ["35M", "35.7", "1000", "7.850"], ["45M", "43.7", "1500", "11.775"], ["55M", "56.4", "2500", "19.625"]]
      },
      note: "Grade 400 bars per CSA G30.18 are common. Confirm sizes on the drawings and bar list."
    },
    {
      title: "Sling leg tension factors",
      intro: "For a two-leg sling, each leg carries load ÷ 2 ÷ sin(angle from horizontal).",
      table: {
        head: ["Angle from horizontal", "Per-leg tension for a 1000 kg load"],
        rows: [["90°", "500 kg"], ["60°", "577 kg"], ["45°", "707 kg"], ["30°", "1000 kg"]]
      },
      note: "Low sling angles greatly increase leg tension. Check your rigging chart and site rules."
    },
    {
      title: "Key formulas and conversions",
      list: ["Rebar mass per metre = area in mm² × 0.00785.", "Steel plate mass = 7.85 kg per square metre per millimetre of thickness.", "1 in = 25.4 mm and 1 m = 3.281 ft.", "1 kg = 2.2046 lb.", "Pythagorean theorem for bracing and diagonals: c = √(a² + b²).", "Slope or angle of stairs: rise ÷ run = tan of the angle."]
    },
    {
      title: "Bolting methods for structural steel",
      table: {
        head: ["Method", "Idea"],
        rows: [["Snug-tight", "Full effort with a spud wrench or a few impacts of an impact wrench"], ["Turn-of-nut", "Nut rotated a specified amount past snug-tight"], ["DTI washers", "Protrusions compress to a specified gap as bolt tension rises"], ["Calibrated wrench", "Torque set for the bolt and lubrication, with checks"], ["Twist-off bolts", "The spline shears off when the bolt reaches tension"]]
      },
      note: "Use the method your specification and bolt supplier require."
    },
    {
      title: "Standards pointers",
      list: ["CSA S16: design of steel structures.", "CSA W59: welded steel construction, and CSA W186 for welding of reinforcing bars.", "CSA A23.1: concrete materials and methods of concrete construction.", "CSA G30.18: billet-steel bars for concrete reinforcement.", "CSA Z259 series: fall protection equipment. Z259.10 covers full-body harnesses and Z259.11 energy absorbers and lanyards.", "Provincial OHS regulations set fall protection, crane, and rigging requirements."],
      note: "Always confirm the current edition adopted in your province."
    },
    {
      title: "Pre-use rigging and fall protection checks",
      list: ["Inspect slings, shackles, hooks, and latches for damage and readable tags.", "Check harness webbing, stitching, buckles, and D-rings before every use.", "Confirm the anchor is rated and the lanyard length fits the free fall limit.", "Confirm the lift plan, load weight, radius, and signals with the operator and signal person.", "Check the rescue plan and equipment before working at height.", "Tether tools and secure materials against wind."]
    }
  ]
});
