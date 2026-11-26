// Ironworker (Reinforcing) guide. Practice questions are original study aids, not official Red Seal exam questions.

const rebarBank = (rows) => rows.map(([q, ok, bad, explain], i) => {
  const answer = (i * 3 + 1) % 4;
  const options = [...bad];
  options.splice(answer, 0, ok);
  return { q, options, answer, explain };
});

registerTrade({
  introVideo: { id: "t_127YEnNZw", title: "Intro video: Ironworker (Reinforcing)" },
  id: "ironworker-reinforcing",
  store: "ironworker-reinforcing",
  title: "Ironworker (Reinforcing)",
  name: "Ironworker (Reinforcing)",
  short: "reinforcing ironwork",
  category: "Construction · Concrete · Steel",
  summary: "Read placing drawings, then cut, bend, place, and tie the reinforcing steel that gives concrete footings, walls, slabs, columns, and bridges their tensile strength.",
  work: "Reinforcing ironworkers (rodbusters) unload and sort bar, work from placing drawings and bar lists, and tie bars into cages and mats before the concrete crews arrive. Work is outdoors in all seasons, often on foundations, high-rise floors, parkades, bridges, and infrastructure, and it is physical, repetitive, and precise. Some crews also place mesh, set mechanical splices, and place post-tensioning tendons.",
  duration: "Usually 2–3 years (Job Bank), varies by province",
  union: "Iron Workers (Ironworkers) union",
  unionUrl: "https://www.ironworkers.org/",
  profileUrl: "https://red-seal.ca/eng/trades/ironwork-reinforce.shtml",
  durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/6368/ca",
  jobSearch: "reinforcing ironworker apprentice",
  journeySearch: "reinforcing ironworker rodbuster",
  aliases: "rebar rodbuster rod buster reinforcing steel concrete placer tying bar placer ironworker",
  tools: [
    "Rebar tying tool or hook and tie wire",
    "Bar bender and hickey bar",
    "25 ft or 7.5 m tape measure",
    "Cutters and bolt cutters for tie wire and bar",
    "Cut-resistant gloves and CSA safety boots",
    "Hard hat, safety glasses, and hearing protection"
  ],
  insight: {
    skills: [
      "Reading placing drawings and bar lists",
      "Spatial thinking and careful counting",
      "Stamina for bending, lifting, and tying all day",
      "Teamwork with concrete and formwork crews"
    ],
    hazards: [
      "Impalement on exposed bar ends: cap or bend over protruding bars",
      "Falls from slabs, edges, and mats: fall protection and walkways",
      "Lifting heavy bundles: use mechanical help and team lifts",
      "Post-tensioning and stressing: stay clear of the jack and tendon line"
    ],
    settings: [
      "Foundations and high-rise buildings",
      "Bridges, tunnels, and civil infrastructure",
      "Reinforcing steel fabrication shops",
      "Industrial and energy project sites"
    ]
  },
  toolGroups: [
    {
      title: "Day-one tools, buy once and buy well",
      note: "Work-ready gear that survives wet, muddy, abrasive conditions. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
      items: [
        { name: "Klein or Channellock lineman-style side cutters", why: "Cut tie wire all day. Hardened cutting edges stay sharp and a comfortable grip saves your hand.", search: "Klein side cutters lineman pliers 9 inch" },
        { name: "Tie wire spool holder or tie wire reel", why: "Keeps 16 gauge annealed tie wire on your belt and feeding smoothly so you aren't tangled in loose coils.", search: "rebar tie wire reel holder belt" },
        { name: "Rebar tying hook (spinner hook)", why: "A fast spinning hook makes saddle and snap ties quickly and teaches clean tie patterns before you use a tying tool.", search: "rebar tying hook spinner" },
        { name: "Milwaukee or Stanley FatMax tape measure (25 ft / 7.5 m)", why: "Wide, stiff blade and metric and imperial markings for checking bar spacing, laps, and cover.", search: "Stanley FatMax 7.5 m 25 ft tape measure metric" },
        { name: "Hickey bar (rebar bending bar)", why: "Bends small and mid-size bar cold for field adjustments. Buy a steel one with a well-formed head.", search: "rebar hickey bar bender" },
        { name: "Markal paint markers and lumber crayon", why: "Mark spacing, laps, and bar marks on bar and formwork. Paint markers last on wet and rusty steel.", search: "Markal paint marker lumber crayon construction" },
        { name: "Cut-resistant gloves with a grippy palm", why: "Ties, bar ends, and sharp mill scale chew up gloves. Choose a pair rated for cut resistance and dexterity.", search: "cut resistant work gloves Mechanix Youngstown" },
        { name: "CSA-approved safety boots with metatarsal guard and puncture-resistant sole", why: "Dropped bar and nails in forms are constant hazards. Insulated, waterproof boots matter in Canadian winters.", search: "CSA safety boots puncture resistant sole waterproof insulated" },
        { name: "Knee pads and a back support belt", why: "Tying slab steel means long hours bent over or kneeling. Good pads reduce knee and back strain.", search: "construction knee pads gel work" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson or foreman what holds up on your sites.",
      items: [
        { name: "Cordless rebar tying tool (Max RB or Milwaukee M18)", why: "Ties intersections in a fraction of a second. Often company-supplied, but many crews expect you to know it.", search: "Milwaukee M18 rebar tying tool Max RB441T" },
        { name: "Rebar tool belt and tie wire pouch", why: "A belt organized for wire, cutters, tape, and markers keeps both hands free on mats.", search: "rebar tool belt tie wire pouch" },
        { name: "Bar cutter or bolt cutters (24 in to 36 in)", why: "Cuts small bar and mesh and trims tie wire where a shear isn't available. Choose cutters rated for the hardness you cut.", search: "Knipex bolt cutters 24 inch 36 inch" },
        { name: "Rain gear and insulated layers", why: "Concrete work continues in wet weather and cold. Reliable layers let you work safely through the season.", search: "rain gear PVC jacket pants insulated work base layer" },
        { name: "Padded rigging gloves and wire rope sleeves", why: "For handling bundles with slings and chains, protecting hands from burrs and frayed wire.", search: "rigging gloves heavy duty leather" },
        { name: "Chalk line and line level", why: "Snaps layout lines on decks and forms and checks bar elevations along a pour.", search: "chalk line reel line level" },
        { name: "Pencil, notebook, and weatherproof pen", why: "Mark bar lists, count bars, and note changes from the foreman. Wet, muddy sites demand weatherproof paper.", search: "Rite in the Rain pen notebook" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying.",
      items: [
        { name: "Hydraulic bar bender and bar cutter (shop or site)", why: "Used for large bar and fabrication runs. Normally employer-supplied and requires training.", search: "hydraulic rebar bender cutter" },
        { name: "Full-body harness and lanyard (CSA Z259.10)", why: "Needed at slab edges, on high-rise decks, and on bridges. Fall protection training comes first.", search: "CSA Z259.10 full body harness lanyard" },
        { name: "Cover meter and tape for checking cover and spacing", why: "Measures concrete cover and bar spacing during inspections. Usually supplied by quality control or the foreman.", search: "concrete cover meter rebar locator" },
        { name: "Torque wrench and calibrated tools for mechanical couplers", why: "Mechanical splices have specific tightening requirements. Follow the manufacturer's procedure.", search: "torque wrench rebar coupler tightening" },
        { name: "Hand signal reference card for crane lifts", why: "Bundles often go up by crane. Know standard signals when you work as a signaller or rigger.", search: "crane hand signals reference card" },
        { name: "Cordless angle grinder with cut-off wheels", why: "For trimming bar in tight spots. Only use with training and appropriate guards.", search: "Milwaukee M18 FUEL angle grinder 4-1/2 inch cut-off wheel" },
        { name: "Hearing protection (CSA Class A earmuffs or earplugs)", why: "Saws, vibrators, and hydraulics are loud. Hearing loss is permanent.", search: "CSA Class A earmuffs hearing protection construction" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for drawings, bar bending math, and code study. Check with your school and your exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Bar lengths, hook allowances, spacing, areas, and mass calculations are daily work. Check calculator rules for exams.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Engineer's scale and architect's scale", why: "Reading placing drawings and structural drawings at several scales.", search: "engineer scale architect scale ruler set" },
        { name: "Mechanical pencil (0.5 mm) and spare leads", why: "Clean sketches of bar shapes, sections, and bending details.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm leads" },
        { name: "12 in steel ruler and set of triangles", why: "Draw 45°, 60°, and 90° shapes accurately when sketching bends and hooks.", search: "Staedtler drafting triangle set steel ruler" },
        { name: "CSA A23.3 or concrete design summary (if recommended by your school)", why: "Understand cover, development, and lap rules. Check whether your school requires the full standard.", search: "CSA A23.3 design of concrete structures" },
        { name: "Graph paper and field notebook", why: "Sketch bar bends and layout and record measurements from drawings.", search: "graph paper pad field notebook" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic, useful for Red Seal exam review.", search: "binder dividers highlighters" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare, and where to find the Ironworker (Reinforcing) standard.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Codes Canada", desc: "The National Building Code of Canada and related model codes referenced by provincial codes.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
        { name: "Iron Workers (Ironworkers) union", desc: "Union training and apprenticeship information for ironworkers.", url: "https://www.ironworkers.org/" },
        { name: "CSA Group", desc: "Publisher of the concrete and reinforcing standards used in Canada, such as A23.1, A23.3, and G30.18.", url: "https://www.csagroup.org/" },
        { name: "Cement Association of Canada", desc: "Background on concrete construction in Canada.", url: "https://cement.ca/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Fact sheets on WHMIS, fall protection, and lifting safety.", url: "https://www.ccohs.ca/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local codes.",
      items: [
        { name: "Rebar tying patterns", desc: "Saddle, snap, and figure-8 ties and when each is used.", url: "https://www.youtube.com/results?search_query=rebar+tying+patterns+saddle+snap+tie" },
        { name: "Reading rebar placing drawings", desc: "Bar marks, sizes, spacing notation, and sections.", url: "https://www.youtube.com/results?search_query=reading+rebar+placing+drawings+bar+list" },
        { name: "Rebar bending and shop drawings", desc: "Bending shapes, hooks, and bend allowances.", url: "https://www.youtube.com/results?search_query=rebar+bending+shapes+hooks+bar+bending+schedule" },
        { name: "Rebar lap splices and development length", desc: "Why bars overlap and how lap length is chosen.", url: "https://www.youtube.com/results?search_query=rebar+lap+splice+development+length+explained" },
        { name: "Rebar chairs, bolsters and concrete cover", desc: "Supports that hold steel at the correct cover.", url: "https://www.youtube.com/results?search_query=rebar+chairs+bolsters+concrete+cover" },
        { name: "Post-tensioning basics", desc: "Tendons, anchors, and stressing safety.", url: "https://www.youtube.com/results?search_query=post+tensioning+slab+tendons+stressing+basics" },
        { name: "Rebar mechanical couplers", desc: "Threaded and grouted splice types.", url: "https://www.youtube.com/results?search_query=rebar+mechanical+coupler+splice+installation" },
        { name: "Rebar mat and cage assembly", desc: "How columns, walls, and slabs are built from bar.", url: "https://www.youtube.com/results?search_query=rebar+cage+column+wall+assembly+rodbuster" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for reinforcing ironwork yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: ironworker apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=ironworker+apprentice+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: rodbuster stories and tips (audio)", desc: "Job-site lessons from reinforcing ironworkers.", url: "https://www.youtube.com/results?search_query=rodbuster+podcast+rebar+ironworker+stories" },
        { name: "YouTube: concrete construction podcast", desc: "Talks on formwork, placing, and concrete quality to hear while commuting.", url: "https://www.youtube.com/results?search_query=concrete+construction+podcast+formwork+rebar" },
        { name: "YouTube: construction safety toolbox talk (audio)", desc: "Short safety talks relevant to heights, lifting, and site hazards.", url: "https://www.youtube.com/results?search_query=construction+safety+toolbox+talk+podcast" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, planning, and leadership.",
      items: [
        { name: "YouTube: Red Seal ironworker exam prep (talk-through)", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+ironworker+exam+preparation" },
        { name: "YouTube: construction foreman and leadership podcast", desc: "Planning crews, productivity, and communication.", url: "https://www.youtube.com/results?search_query=construction+foreman+leadership+podcast" },
        { name: "YouTube: reinforcing steel estimating podcast", desc: "Takeoffs, detailing, and pricing concepts.", url: "https://www.youtube.com/results?search_query=rebar+estimating+detailing+takeoff+podcast" }
      ]
    }
  ],
  practiceBank: {
    1: rebarBank([
      ["What is the main job of reinforcing steel in concrete?", "Carry tension that concrete resists poorly", ["Make the concrete set faster by drawing heat out of it", "Colour the concrete", "Hold the wet concrete in shape so no formwork is needed"], "Concrete is strong in compression but weak in tension, so bar carries the tensile forces."],
      ["The number in the bar size 25M refers roughly to:", "The nominal diameter in millimetres", ["The standard length in feet of each bar from the mill", "The grade in MPa", "The mass in kilograms of one metre of the bar"], "In metric bar sizes the number approximates the nominal diameter in mm. 25M has a diameter of about 25 mm."],
      ["What does the number 400 in 400W commonly refer to?", "Minimum yield strength in MPa", ["The standard bar length in centimetres from the mill", "The price class used when quoting bar to a contractor", "Bar mass in kg"], "Grade 400 bar has a specified minimum yield strength of 400 MPa. Confirm on your drawings."],
      ["Protruding vertical bar ends at head height should be:", "Capped or protected to prevent impalement", ["Left bare so they are easy to see", "Painted bright white or orange only, so the ends are easier to see", "Heated with a torch to dull the tips of the bar"], "Protective caps or bent-over bars prevent serious impalement injuries."],
      ["Which document tells you bar sizes, spacing, and locations?", "Placing drawings and the bar list", ["The concrete delivery ticket that records mix and slump", "The crew timesheet with the hours worked by each person", "Safety Data Sheet"], "Placing drawings show where each mark goes, and the bar list gives size, quantity, and length."],
      ["What does WHMIS give workers?", "Hazard information on workplace chemicals through labels and SDS", ["A licence to operate cranes and hoists on a construction site", "A list of tool prices", "Wage rates and overtime rules for workers on the job"], "WHMIS covers labels and Safety Data Sheets for hazardous products."],
      ["How many millimetres are in one inch?", "25.4", ["2.54", "10", "254"], "1 in = 25.4 mm exactly."],
      ["Which tie is commonly used at most intersections of a slab mat to hold bars in position?", "Saddle tie or snap tie", ["A welded tack at each crossing, made by the ironworker", "Duct tape", "A single loose wrap of wire that keeps the bars in contact"], "Saddle and snap ties lock the bars so they don't shift during concrete placement."],
      ["Tie wire is typically:", "Soft annealed steel wire", ["Stainless steel rod that is bent around each intersection", "Galvanized chain", "Bare copper wire twisted by hand around the bars"], "Annealed wire bends and twists easily so ties are tight without breaking."],
      ["Why wear cut-resistant gloves when handling bar?", "Bar ends, mill scale, and tie wire can cut and puncture skin", ["To keep the pliers and tools clean while tying", "To increase tying speed and grip, with no safety benefit", "To reduce bar weight"], "Gloves protect hands but must still allow control of the work."],
      ["A good way to lift a heavy rebar bundle is to:", "Use mechanical lifting or a team lift, with a straight back", ["Lift alone with a rounded back so the legs are not strained", "Drag it by the ends", "Throw it off the truck onto dunnage to save time unloading"], "Heavy bundles are a major cause of strain injuries. Use equipment or team lifts."],
      ["What is the purpose of concrete cover?", "Protect the steel from corrosion and fire and develop bond", ["Keep the steel looking neat and evenly spaced in the form", "Reduce the weight of the slab", "Speed up curing by keeping heat near the surface of the concrete"], "Cover protects bar from moisture and heat and keeps it bonded in the concrete."],
      ["The unit for steel bar length on Canadian drawings is normally:", "Millimetres", ["Furlongs, which is the traditional unit for long pours", "Yards only, shown on every bar mark and cut length", "Litres"], "Canadian structural drawings use metric units, with millimetres for lengths."],
      ["Standard bar sizes are most commonly identified by:", "A size designation such as 10M, 15M, 20M", ["A colour band marked on each bar by the mill and nothing else", "A brand name", "The delivery truck number written on the load ticket"], "The M designation is the metric bar size. Know the common sizes."],
      ["Before stepping onto a mat of bar at an open edge, you should:", "Check that fall protection or guardrails are in place", ["Remove your hard hat so that you can see the edge clearly", "Run across it", "Assume the foreman is watching and would warn you of a gap"], "Slab edges are fall hazards. Protection should be in place before work begins."],
      ["Why keep a clean, organized work area around rebar?", "Reduces trips, impalement, and lifting injuries", ["It makes the bar feel lighter when you carry it", "It helps the concrete cure faster by improving air movement", "It is required for tie wire to work"], "Tripping hazards and scattered bar cause many injuries."],
      ["Which PPE is standard on concrete and rebar sites?", "Hard hat, safety glasses, CSA boots, and gloves", ["Sandals or runners and a ball cap for comfort on hot days", "Dress shoes and sunglasses, which are fine for short visits", "Rubber slippers"], "CSA-approved footwear, head, eye, and hand protection are the baseline."]
    ]),
    2: rebarBank([
      ["The purpose of a lap splice is to:", "Transfer force from one bar to the next by overlap in concrete", ["Make the bar longer so that the cage looks continuous", "Save tie wire", "Hold the formwork together while the concrete is placed"], "Laps transfer load through the surrounding concrete. Lap length comes from the drawings and the design standard."],
      ["Where do you find the required lap splice length?", "Structural drawings and specifications", ["The concrete truck driver, who has placed similar jobs", "The colour on the bar tag attached to each bundle", "The tape measure"], "The designer specifies lap lengths in the drawings or general notes."],
      ["A 25M bar has a mass of about:", "3.9 kg per metre", ["0.8 kg per metre", "7.9 kg per metre", "19 kg per metre"], "25M weighs 3.925 kg per metre."],
      ["The mass of 6 m of 15M bar is about:", "9.4 kg", ["3.1 kg", "15 kg", "24 kg"], "15M is 1.570 kg per metre, and 1.570 × 6 = 9.42 kg."],
      ["How many bars are needed across 6 m at 300 mm spacing if the first and last bars sit at the ends?", "21", ["20", "19", "6"], "6000 ÷ 300 = 20 spaces, so 21 bars including both ends."],
      ["A standard 90° hook usually has an extension of about:", "12 bar diameters", ["1 bar diameter", "30 bar diameters", "No extension"], "A standard 90° hook turns the bar 90° and extends it 12 bar diameters."],
      ["A standard 180° hook has an extension of at least:", "4 bar diameters, and not less than 60 mm", ["12 bar diameters", "1 mm", "300 mm"], "The 180° hook extension is 4 bar diameters, with a 60 mm minimum."],
      ["What are chairs and bolsters used for?", "Holding the steel at the correct height above the form", ["Lifting bar with a crane when the bundles are tied together", "Cutting bar", "Measuring the slump of the concrete before the pour"], "They support bar to maintain specified cover."],
      ["Reinforcing bar should not be bent in the field using heat unless:", "The engineer or specifications allow it", ["It is cold outside and the bar is hard to bend by hand", "The foreman is away", "The bar is rusty and has been sitting on the ground for weeks"], "Heating can damage the steel. Follow the specifications."],
      ["Why is a bar bending schedule used?", "It lists the bar shapes, dimensions, and quantities to fabricate", ["It tracks the serial numbers of tools issued to the crew", "It sets concrete strength", "It orders the formwork panels and ties for the job"], "Shape codes and dimensions let the shop cut and bend correctly."],
      ["What does a bar mark such as B12 identify?", "A specific bar type with its size, length, and shape on the list", ["The brand and gauge of tie wire used on the job", "A concrete mix", "The safety inspector who signed the site orientation"], "Marks tie placing drawings to the bar list."],
      ["Welded wire mesh is commonly used for:", "Slabs on grade and shrinkage and temperature steel", ["Replacing structural steel beams in a short-span building", "Cladding", "Scaffold planks that are walked on at the edge of a slab"], "Mesh is placed in slabs and walls where lighter reinforcing is called for."],
      ["Rust on rebar that is light surface rust (not flaking):", "Is generally acceptable unless specifications say otherwise", ["Always requires replacing the bar before it can be placed", "Makes the bar stronger by improving its bond to the concrete", "Is illegal on all sites"], "Light tight rust is usually allowed. Loose scale or heavy pitting may not be."],
      ["Why do wall bars need tying at alternate intersections or more?", "To keep the cage stable while concrete is placed", ["To increase the strength of the concrete in the wall", "To make the bars shorter so they fit inside the forms", "To keep forms clean"], "Ties hold bar position against the forces of placing concrete."],
      ["Spacers on formwork keep:", "The correct cover between bar and form face", ["Water off the bar so it stays dry before the pour", "Mesh from rolling", "Air out of the concrete as the mix is vibrated in the form"], "Without spacers, bars drift to the form face and lose cover."],
      ["A rebar cap is:", "A plastic or steel guard fitted on the exposed end of a bar", ["A short piece of bar welded to the top of the column", "A bolt", "A finishing trowel used to smooth the top of the slab"], "Caps protect people from the sharp end of vertical bar."],
      ["A crew member hears the crane signal person say stop. You should:", "Stop immediately and stay clear of the load", ["Continue work under the load once it is clear of your head", "Ask them to repeat the signal once your task is finished", "Run past the load"], "Stop means stop. Stay out from under suspended loads."]
    ]),
    3: rebarBank([
      ["Development length is the length of bar needed to:", "Develop its strength through bond with the concrete", ["Reach the top of the form so the bar can be tied at the rim", "Resist rust and corrosion over the life of the structure", "Support a crane"], "It is the embedment required so that the bar can reach its design stress."],
      ["Stirrups in a beam mainly resist:", "Shear", ["Fire", "Water leakage", "Temperature"], "Stirrups hold longitudinal bars in position and carry shear forces."],
      ["In a simply supported beam under gravity load, the main tension bars are generally placed:", "Near the bottom", ["Near the top only", "At the neutral axis only", "Outside the beam"], "Bottom steel carries the tension from positive bending. Always follow the drawings."],
      ["In a typical cantilever slab, the main steel is placed:", "Near the top", ["Near the bottom", "Vertically", "Outside the concrete"], "Cantilevers have tension at the top, so the main steel is placed there."],
      ["A tie in a column is used to:", "Hold vertical bars and resist buckling and shear", ["Hang scaffolding brackets from the column cage during erection", "Increase bar length", "Level the formwork at the top of the column"], "Ties or spirals confine the core and brace the longitudinal bars."],
      ["Epoxy-coated bars should be handled with:", "Padded slings and care to avoid damaging the coating", ["Bare chains looped around the bundle and dragged into place", "Hot cutting torches to trim the bar to length on site", "Wire brush cleaning"], "Coating damage allows corrosion. Repair damage as specified."],
      ["Post-tensioning tendons are tensioned using:", "Hydraulic jacks after the concrete reaches required strength", ["A large pipe wrench turned by two people on the anchor", "Hand tying", "Rebar benders clamped to the end of each tendon"], "Stressing is done by hydraulic jack when concrete meets its specified strength. Stay clear of the line of the tendon."],
      ["Where should workers stand when a tendon is being stressed?", "Clear of the line of the jack and tendon ends", ["Directly behind the jack, where you can read the gauge", "On the tendon, to hold it steady while it is stressed", "Beside the anchor at head height"], "A failure can eject the tendon or anchor with great force."],
      ["Why are mechanical couplers sometimes used instead of lap splices?", "They reduce congestion and meet design requirements for splices", ["They make the bar lighter because less steel is overlapped", "They are cheaper than lap splices in every case", "They make bars tie faster"], "Couplers save space in congested areas and may be required by the designer."],
      ["CSA W186 covers:", "Welding of reinforcing bars in reinforced concrete construction", ["Scaffold design and the loads on its platforms", "Steel pipe threads and fittings used in building services", "Concrete mix design"], "W186 is the Canadian standard for welding reinforcing bar."],
      ["CSA G30.18 is the standard for:", "Carbon steel bars for concrete reinforcement", ["Fall arrest harnesses and lanyards for work at height", "Hand signals", "Fire sprinklers and the piping that serves them"], "G30.18 sets requirements for reinforcing bar."],
      ["CSA A23.1 is mostly about:", "Concrete materials and methods of concrete construction", ["Welded steel structures and their connection details", "Electrical wiring", "Boiler design and pressure vessel construction"], "A23.1 covers concrete materials and construction, including placement of reinforcement."],
      ["A column cage with a 4 m height is lifted by crane. Before lifting you should:", "Check that it is tied securely and rigged to prevent racking", ["Lift it without securing the bars, since the crane holds it", "Lift one corner only", "Skip signalling because the operator can see the cage clearly"], "Cages can distort or collapse if poorly tied or rigged."],
      ["Bar bends in a stirrup are called hooks. A 135° hook on a stirrup:", "Anchors it in the core of the concrete", ["Makes the stirrup easier to cut and bend on the bench", "Is only decorative", "Replaces the lap splice at the corners of the beam"], "Seismic and confinement hooks keep ties anchored."],
      ["Welded wire reinforcement is called WWR, and a typical designation 152 × 152 means:", "Wire spacing of 152 mm in each direction", ["The mass of 152 kg for each full sheet of mesh", "Bar size 152M", "The 152 mm of cover required over the mesh"], "152 mm is the metric equivalent of 6 in spacing."],
      ["When rebar placed in a deck slab must clear a conduit or insert, you should:", "Check with the foreman and drawings before moving bar", ["Cut the bar short so that it clears the conduit", "Remove every second bar near the conduit to make room", "Ignore the conflict"], "Moving or cutting bar without approval can violate design intent."],
      ["Why stagger lap splices where the design allows?", "To avoid concentrating all splices at one section", ["To save tie wire because fewer ties are needed at each splice", "To use shorter bars and reduce waste from the offcuts", "To look neat"], "Staggering spreads out the weakest locations."]
    ]),
    4: rebarBank([
      ["What is the difference between an RFI and a field change?", "An RFI asks the designer for clarification, while a field change alters the work and needs approval", ["They are identical, and either one can be used to approve changes", "A field change is a tool", "An RFI is a type of bar that is used in congested joints"], "Never change reinforcing without authorization. RFIs resolve conflicts through the designer."],
      ["During placing, a bar conflicts with an embedded sleeve. You should:", "Raise it with your foreman and request direction before changing the steel", ["Cut the bar so that it stops short of the sleeve", "Bend the sleeve", "Skip the bar at that location, since the others will carry the load"], "Cut bars can compromise the design. Unapproved changes are not allowed."],
      ["Quality inspection before a pour normally checks:", "Bar size, spacing, cover, laps, and ties against the drawings", ["Only the paint colour of the formwork and bulkheads", "The tire pressure of the concrete trucks arriving at the site", "Crane operator lunch"], "Inspectors review reinforcing against the placing drawings before concrete is placed."],
      ["Why plan the sequence of bar placement on a congested column or beam-column joint?", "Some bars must go in first or they cannot be placed later", ["To speed up the curing of the concrete in the joint", "To change bar grades", "To avoid using tie wire at the crowded crossings"], "Planning prevents unfixable conflicts at congested joints."],
      ["The mass of 40 bars of 20M, each 7.5 m long, is about:", "706.5 kg", ["300 kg", "5 995 kg", "1 413 kg"], "20M is 2.355 kg/m. 2.355 × 7.5 × 40 = 706.5 kg."],
      ["How many 12 m bars of 10M are needed to cut 3 m pieces for 100 pieces?", "25 bars", ["10", "33", "100"], "Each 12 m bar yields 4 pieces of 3 m. 100 ÷ 4 = 25 bars."],
      ["A crane lift of rebar must have rigging with:", "A rated sling and capacity greater than the load", ["Any strong rope that is long enough to reach around the bundle", "A chain that has a damaged link but is still heavy-duty", "A belt"], "Rigging capacity must exceed the load. Inspect slings before use."],
      ["Slings used at a 30° angle from horizontal carry about what multiple of the load per leg compared with a vertical lift (two legs)?", "2 times", ["0.5 times", "1 time", "4 times"], "Tension per leg increases as the sling angle decreases. At 30° it doubles."],
      ["For a bundle weighing 1 000 kg lifted with two legs each at 60° from horizontal, tension in each leg is about:", "577 kg", ["500 kg", "1 000 kg", "1 155 kg"], "Each leg carries W ÷ (2 × sin 60°) = 1 000 ÷ 1.732 = 577 kg."],
      ["When post-tensioning anchors or tendons have a defect, you should:", "Stop and report it to the supervisor or engineer", ["Fix it with tie wire and then continue the stressing", "Cover it with concrete so that it is protected from corrosion", "Continue stressing"], "Defects must be assessed by qualified persons."],
      ["Glass-fibre reinforced polymer (GFRP) bar in Canada is covered by:", "CSA S807", ["CSA G30.18", "CSA W186", "CSA Z259"], "CSA S807 specifies fibre-reinforced polymers."],
      ["Why are as-built records of reinforcing changes kept?", "They document approved deviations from the design", ["They set the wages and overtime of the placing crew", "They are for taxes", "They schedule the deliveries of bar from the supplier"], "Records support the final quality documentation."],
      ["The formula for mass of straight bar is:", "Mass per metre × length", ["Length divided by the diameter of the bar", "Diameter × 8", "The cover multiplied by the spacing of the bars"], "Use the table mass per metre and multiply by total length."],
      ["Where bars of different sizes are lapped, the lap length is typically governed by:", "The drawings or the larger or smaller bar as specified", ["Whatever is convenient for the crew at the time of placing", "The shortest bar", "The gauge of the tie wire used at the splice"], "Check the drawings or notes for what governs."],
      ["Before cutting bar in a congested area, the right step is to:", "Check whether it was designed to be cut, and get approval", ["Cut it as needed to get the new bars into position", "Hide the cut under the next layer of bars before inspection", "Remove all ties"], "Unplanned cuts change the load path."],
      ["Fall protection planning for a bridge deck rebar job should include:", "A written plan, anchor points, guardrails, or nets as required", ["Nothing extra, since the crew will be on the deck at a low height", "Only hard hats and safety glasses, which cover the deck work", "A radio"], "Hazard assessment and a fall protection plan are required where fall exposure exists. Rules vary by province."],
      ["Which factor most affects the length of time before stripping forms or stressing tendons?", "The concrete reaching the specified strength", ["The colour of the bar and its mill coating", "The weather forecast only", "The number of ties used in the cage"], "Strength gain, confirmed by testing, governs when loads can be applied."]
    ])
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety tickets employers ask for (commonly WHMIS, fall protection, and site orientation; requirements vary)", "Contact ironworker union locals and rebar contractors, and prepare a short resume", "Register your apprenticeship once you have a sponsor and log your hours from day one"] },
    { title: "Year 1: safety, bar, and tying", items: ["Learn site safety, PPE, and hazard assessment", "Identify bar sizes, grades, and bundles by tag and mark", "Master tie patterns and handling of mats and cages", "Complete your first technical training block", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: drawings and placement", items: ["Read placing drawings, sections, and bar lists", "Place bar for footings, walls, columns, and slabs at correct spacing and cover", "Learn laps, hooks, and standard bends", "Place supports, spacers, and mesh"] },
    { title: "Year 3: systems and rigging", items: ["Assemble beams, columns, and complex cages", "Learn basic rigging, hoisting signals, and crane safety", "Work with mechanical splices and bar bending equipment", "Be introduced to post-tensioning and its safety rules"] },
    { title: "Year 4 and beyond: planning and lead hand", items: ["Plan placing sequences for congested areas", "Check work against drawings and prepare for inspection", "Estimate quantities and calculate bar mass", "Mentor first-year apprentices and take on lead hand duties"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal standard and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["Anchor", "A device that holds a post-tensioning tendon at its end, or a bar embedded to resist pull-out."],
    ["As-built", "A record of the actual installed conditions, including approved changes."],
    ["Bar list", "A schedule of bar marks with size, quantity, length, and shape."],
    ["Bar mark", "An identifier on the drawings and tag that links a bar to the bar list."],
    ["Bar support", "A chair, bolster, or dobie that holds bar at the correct elevation."],
    ["Bend", "A change of direction in a bar, formed cold on a bender."],
    ["Bolster", "A continuous wire support that holds bottom steel above the form."],
    ["Bond", "The grip between concrete and reinforcing steel."],
    ["Cage", "A built-up assembly of bars and ties forming a column or beam reinforcement."],
    ["Chair", "A wire or plastic support that holds top bar at its height."],
    ["Cold bending", "Bending bar at ambient temperature, the normal method."],
    ["Coupler", "A mechanical device that joins two bars end to end."],
    ["Cover", "The distance from the bar surface to the nearest concrete surface."],
    ["Dobie", "A small concrete block used as a bar support, also called a bar block."],
    ["Development length", "The embedded length needed for a bar to reach its design stress through bond."],
    ["Epoxy-coated bar", "Reinforcing steel with a protective epoxy coating, usually green, for corrosive environments."],
    ["Hickey", "A hand tool, a pipe with a slot or fitting, used to bend small bar."],
    ["Hook", "A bent end on a bar that provides anchorage."],
    ["Lap splice", "An overlap of two bars to transfer load between them."],
    ["Mat", "A grid of bars in two directions, placed in a slab, footing, or wall."],
    ["Mill scale", "The dark oxide layer formed on newly rolled steel."],
    ["Placing drawing", "A drawing that shows where each bar is placed in the structure."],
    ["Post-tensioning", "Stressing steel tendons in concrete after it has hardened."],
    ["Rodbuster", "A common name for a reinforcing ironworker."],
    ["Shape code", "A standard code describing the geometry of a bent bar."],
    ["Slump", "A measure of concrete consistency, not a bar property."],
    ["Spacer", "A device that holds bar off a form face."],
    ["Stirrup", "A closed or open bar that resists shear and holds main bars in a beam."],
    ["Tendon", "A strand or bar in a post-tensioned member."],
    ["Tie", "A bar or wire that holds bars in position, or a closed loop that confines column bars."],
    ["Tie wire", "Soft annealed wire used to bind bar intersections."],
    ["Yield strength", "The stress at which steel begins to deform permanently, such as 400 MPa."]
  ],
  cards: [
    { front: "Bar size 25M, diameter", back: "About 25 mm (actual 25.2 mm), 500 mm² area, 3.925 kg/m" },
    { front: "Mass of 15M bar", back: "1.570 kg per metre" },
    { front: "Standard 90° hook extension", back: "12 bar diameters" },
    { front: "Standard 180° hook extension", back: "4 bar diameters, minimum 60 mm" },
    { front: "Number of bars across a width", back: "(Width ÷ spacing) + 1 if both end bars are placed" },
    { front: "What does cover protect?", back: "Steel from corrosion and fire, and develops bond" },
    { front: "Grade 400W", back: "Minimum yield strength 400 MPa, weldable" },
    { front: "Sling angle effect", back: "A smaller angle from horizontal means higher tension per leg. Multiply the vertical share by 1.155 at 60°, 1.414 at 45°, and 2.0 at 30°" },
    { front: "CSA G30.18", back: "Standard for carbon steel reinforcing bars" },
    { front: "CSA W186", back: "Welding of reinforcing bars in reinforced concrete" }
  ],
  jobsIntro: "Look for reinforcing steel contractors, general and civil contractors, ironworker union locals, bridge and infrastructure builders, and rebar fabrication shops.",
  tips: [
    "Bring a short resume, your safety tickets, and ID, and be ready to start in work boots.",
    "Show that you are reliable, physically fit, and comfortable working outdoors in all seasons.",
    "Visit contractors and union halls in person when you can, and follow up.",
    "Ask what tools you need and what the employer supplies, such as tying tools and harnesses."
  ],
  forumTopics: ["Starting out", "Placing drawings and bar lists", "Tying, laps, and cover", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
  reference: [
    {
      title: "Metric reinforcing bar sizes (CSA G30.18)",
      intro: "Nominal values for common sizes. Approximate imperial bar numbers are shown for reference only.",
      table: {
        head: ["Size", "Diameter (mm)", "Area (mm²)", "Mass (kg/m)", "Approx. imperial"],
        rows: [
          ["10M", "11.3", "100", "0.785", "#3"],
          ["15M", "16.0", "200", "1.570", "#5"],
          ["20M", "19.5", "300", "2.355", "#6"],
          ["25M", "25.2", "500", "3.925", "#8"],
          ["30M", "29.9", "700", "5.495", "#9"],
          ["35M", "35.7", "1000", "7.850", "#11"],
          ["45M", "43.7", "1500", "11.775", "#14"],
          ["55M", "56.4", "2500", "19.625", "#18"]
        ]
      },
      note: "Confirm actual values with the standard and your supplier."
    },
    {
      title: "Quantity and mass calculations",
      list: [
        "Mass of bar = mass per metre × total length. Example: 40 bars of 20M at 7.5 m = 2.355 × 7.5 × 40 = 706.5 kg.",
        "Number of bars across a width = (width ÷ spacing) + 1 when a bar sits at each end. 6 000 mm at 300 mm spacing = 21 bars.",
        "Number of stock lengths = total pieces ÷ pieces per stock length, rounded up. Stock lengths of 6 m and 12 m are common.",
        "Steel density is about 7 850 kg/m³, which is why 1 000 mm² of area weighs 7.85 kg per metre.",
        "1 in = 25.4 mm, 1 ft = 304.8 mm, 1 kg ≈ 2.205 lb."
      ]
    },
    {
      title: "Hooks and bends",
      list: [
        "Standard 90° hook: bend through 90° and extend 12 bar diameters.",
        "Standard 180° hook: bend through 180° and extend 4 bar diameters, not less than 60 mm.",
        "Stirrup and tie hooks (such as 135°) have their own extension rules in CSA A23.3. Use the shape on the bar list.",
        "Bend diameters depend on bar size and use. Check CSA A23.1, A23.3, and the project specifications.",
        "Do not field-bend partially embedded bar or heat bar unless the specifications and the engineer allow it."
      ],
      note: "Always take dimensions from the bar list and the drawings."
    },
    {
      title: "Common reinforcing locations",
      table: {
        head: ["Member", "Main steel location", "Notes"],
        rows: [
          ["Simply supported beam", "Bottom for tension", "Stirrups resist shear"],
          ["Cantilever slab or balcony", "Top", "Check embedment into the support"],
          ["Slab on grade", "Mesh or bars in the upper to mid-depth, per drawings", "Supported on chairs"],
          ["Column", "Vertical bars with ties or spirals", "Laps above the floor level"],
          ["Wall", "Vertical and horizontal mats, one or two layers", "Spacers keep cover on both faces"]
        ]
      },
      note: "Always follow the project drawings, which may differ from these general patterns."
    },
    {
      title: "Rigging and lifting quick rules",
      intro: "Sling tension per leg = load ÷ (number of legs × sin of the angle from horizontal).",
      table: {
        head: ["Angle from horizontal", "Multiplier on the share of load per leg"],
        rows: [["90°", "1.000"], ["60°", "1.155"], ["45°", "1.414"], ["30°", "2.000"]]
      },
      note: "Never exceed the working load limit of a sling, and avoid angles below 45° where possible."
    },
    {
      title: "Standards and codes to know",
      list: [
        "CSA A23.1 Concrete materials and methods of concrete construction.",
        "CSA A23.3 Design of concrete structures.",
        "CSA G30.18 Carbon steel bars for concrete reinforcement.",
        "CSA W186 Welding of reinforcing bars in reinforced concrete construction.",
        "CSA S807 Specification for fibre-reinforced polymers.",
        "CSA Z259.10 Full body harnesses for fall protection.",
        "Provincial occupational health and safety regulations govern fall protection, hoisting, and excavation on your site."
      ]
    }
  ]
});
