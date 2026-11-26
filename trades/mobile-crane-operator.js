// Mobile Crane Operator guide. Practice questions are original study aids, not official Red Seal exam questions.

const mcSeq = [0, 2, 1, 3, 3, 1, 2, 0, 1, 0, 3, 2, 0, 3, 2, 1, 3, 1, 0, 2];
const mcBank = (rows, off) => rows.map(([q, right, wrong, explain], i) => {
  const pos = mcSeq[(i + off) % mcSeq.length];
  const options = [...wrong];
  options.splice(pos, 0, right);
  return { q, options, answer: pos, explain };
});

registerTrade({
  id: "mobile-crane-operator",
  store: "mobile-crane-operator",
  title: "Mobile Crane Operator",
  name: "Mobile Crane Operator",
  short: "mobile crane operation",
  category: "Cranes · Hoisting · Construction",
  summary: "Mobile crane operators set up and run telescopic, lattice-boom, and crawler cranes to lift and place loads safely, using load charts, rigging knowledge, and clear signals.",
  work: "You travel to varied job sites to place steel, precast, equipment, and materials. Each lift starts with ground and set-up checks, a load chart, and a plan with the rigging crew and signal person. The work requires calm judgment, math, and a strict habit of never exceeding the crane's rated limits.",
  duration: "Varies by province, often about 2–3 years of hours-based training with technical blocks",
  union: "International Union of Operating Engineers (IUOE)",
  unionUrl: "https://www.iuoe.org/",
  jobSearch: "mobile crane operator apprentice",
  journeySearch: "mobile crane operator",
  aliases: "crane operator hydraulic truck crane all terrain rough terrain crawler lattice boom boom truck hoisting rigging signal person red seal",
  tools: ["CSA Grade 1 safety boots", "Hard hat, glasses, hearing protection", "Hi-vis gear and leather gloves", "Digital calipers for rope diameter", "Pocket level and handheld anemometer", "Load chart notes and daily logbook"],
  insight: {
    skills: ["Reading and applying load charts", "Crane set-up, levelling, and ground assessment", "Rigging knowledge and load weight calculation", "Signals, radio communication, and lift planning"],
    hazards: ["Overloading and tip-over: check chart, configuration, and ground every lift", "Power line contact: know approach distances and keep clear", "Struck-by and crushed-by loads: no one under a suspended load", "Two-blocking and rope damage: use limiting devices and inspect rope"],
    settings: ["Commercial and residential construction", "Industrial plants and maintenance shutdowns", "Wind, energy, and infrastructure projects", "Rental and heavy-lift companies"]
  },
  toolGroups: [
    {
      title: "Day-one gear, buy once and buy well",
      note: "Professional-grade PPE and small kit that hold up outdoors in all weather. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
      items: [
        { name: "CSA Grade 1 waterproof safety boots", why: "Dropped rigging, crane steps, and uneven sites call for protective toes and good tread.", search: "CSA Grade 1 waterproof safety boots Red Wing Terra Blundstone" },
        { name: "CSA Z94.1 hard hat with chin strap", why: "Required near suspended loads and on site. A chin strap keeps it on when you climb or look up.", search: "CSA Z94.1 hard hat chin strap Type 1 Class E" },
        { name: "Safety glasses (CSA Z94.3), clear and tinted", why: "Dust, sun glare, and flying particles are constant outdoors.", search: "CSA Z94.3 safety glasses tinted anti fog Uvex" },
        { name: "Hearing protection: earmuffs and plugs", why: "Diesel engines, compressors, and site equipment generate sustained noise.", search: "3M Peltor earmuffs earplugs CSA Z94.2" },
        { name: "High-visibility vest or jacket (CSA Z96)", why: "Riggers, spotters, and equipment operators need to see you when you leave the cab.", search: "CSA Z96 class 2 hi vis vest jacket" },
        { name: "Leather-palm rigging gloves", why: "Handling wire rope and chains is hard on hands. Keep a warm insulated pair too.", search: "leather palm rigging gloves wire rope insulated work gloves" },
        { name: "Rain suit and winter layers", why: "Cranes work in all conditions and your pre-use inspection is outdoors.", search: "hi vis rain suit insulated bibs winter layers" },
        { name: "Headlamp and flashlight", why: "Inspect boom, rope, and carrier in low light.", search: "Petzl headlamp rechargeable Streamlight flashlight" },
        { name: "Insulated lunch cooler, thermos, and water bottle", why: "Long, exposed shifts with limited breaks. Fatigue affects judgment.", search: "insulated lunch cooler thermos water bottle jobsite" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your operator and rigging foreman what holds up on your sites.",
      items: [
        { name: "Digital or vernier calipers (150 mm, metric and inch)", why: "Wire rope diameter is measured across the crowns. Calipers help you check wear against the manufacturer's limits.", search: "digital calipers 150mm stainless Mitutoyo Neiko wire rope" },
        { name: "Torpedo or pocket level", why: "Cross-check the crane's level indicator when setting up.", search: "magnetic torpedo level 9 inch Milwaukee Stanley" },
        { name: "Handheld anemometer", why: "Wind speed affects load control and chart limits. A personal meter supports the crane's own display.", search: "handheld anemometer wind speed meter Kestrel" },
        { name: "50 m measuring tape or laser distance meter", why: "Check radius, clearance, and distance to power lines or buildings.", search: "50m measuring tape Bosch laser distance meter" },
        { name: "Load chart notes binder and sleeves", why: "Keep copies of the charts, rigging tables, and your own notes organized and dry.", search: "waterproof binder sleeves document protectors" },
        { name: "Hand signal reference card", why: "A pocket reminder of the standard hand signals while you learn.", search: "crane hand signals card pocket" },
        { name: "Marking paint and tape", why: "Mark mats, outrigger positions, and exclusion zones.", search: "Markal marking paint hazard tape" },
        { name: "Pocket first aid kit and multi-tool", why: "Small fixes and basic first aid for remote sites. The employer provides full kits.", search: "pocket first aid kit multi tool Leatherman" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the employer or the rental company. Ask before buying.",
      items: [
        { name: "Full-body harness and lanyard (CSA Z259)", why: "Needed for work on boom, jib, or counterweights. Training comes first and the employer normally supplies it.", search: "CSA Z259 full body harness lanyard" },
        { name: "Two-way radio and headset", why: "Clear radio contact with the signal person is core to every lift. Usually company-issued.", search: "Motorola two way radio headset jobsite" },
        { name: "Portable load cell or dynamometer (awareness)", why: "Used to verify weights when documents are unclear. Owned by rigging or testing companies.", search: "crane scale load cell dynamometer wireless" },
        { name: "Outrigger pads and crane mats (awareness)", why: "Supplied by the employer, with engineering input for large lifts.", search: "outrigger pads crane mats composite" },
        { name: "Respirator (half-mask, P100 or N95)", why: "Dust, blasting, and fumes at some sites. Fit testing is required.", search: "3M half mask respirator P100 N95 fit test" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for load charts, trigonometry, and rigging math. Check with your school and exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific calculator with trig functions (Casio fx-991 or TI-30XS)", why: "Boom angles, radius, sling angles, and load calculations.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Protractor and drafting triangles", why: "Sketch lift diagrams and sling angles to scale.", search: "Staedtler protractor drafting triangle set" },
        { name: "Mechanical pencils (0.5 mm) and vinyl erasers", why: "Neat lift sketches and calculations.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm" },
        { name: "Engineer's scale and 30 cm ruler", why: "Reading site plans and lift drawings.", search: "engineer scale metric triangular ruler 30 cm" },
        { name: "Graph paper pad", why: "Draw plan and elevation views of lifts to check clearances.", search: "graph paper pad 5mm grid" },
        { name: "Highlighters, binder, and dividers", why: "Organize notes on rigging, charts, and regulations.", search: "highlighters binder dividers tabs" },
        { name: "Printed or offline copy of your province's cranes and hoisting rules", why: "Crane and OHS rules vary by province. CSA Z150 is a key reference your course will point you to. Use your own province's current text.", search: "CSA Z150 safety code on mobile cranes" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare, plus trade profiles.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "International Union of Operating Engineers (IUOE)", desc: "Crane operator training and apprenticeship information.", url: "https://www.iuoe.org/" },
        { name: "CSA Group", desc: "Publisher of CSA Z150, the Canadian safety code on mobile cranes, and PPE standards.", url: "https://www.csagroup.org/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Plain-language safety fact sheets, WHMIS, and hazard information.", url: "https://www.ccohs.ca/" },
        { name: "Infrastructure Health & Safety Association (IHSA)", desc: "Ontario construction safety training and hoisting resources.", url: "https://www.ihsa.ca/" },
        { name: "WorkSafeBC", desc: "BC regulations and guides on cranes and hoists.", url: "https://www.worksafebc.com/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your crane's manual, load chart, training materials, and provincial regulations.",
      items: [
        { name: "Mobile crane types explained", desc: "All-terrain, rough-terrain, truck, and crawler cranes compared.", url: "https://www.youtube.com/results?search_query=mobile+crane+types+explained+all+terrain+rough+terrain+crawler" },
        { name: "How to read a crane load chart", desc: "Radius, boom length, configuration, and deductions.", url: "https://www.youtube.com/results?search_query=how+to+read+a+crane+load+chart+tutorial" },
        { name: "Crane setup and outrigger placement", desc: "Ground assessment, mats, and levelling.", url: "https://www.youtube.com/results?search_query=mobile+crane+setup+outriggers+mats+level" },
        { name: "Crane hand signals", desc: "Standard hand signals for hoisting and travel.", url: "https://www.youtube.com/results?search_query=crane+hand+signals+standard+signal+person" },
        { name: "Rigging basics: slings and sling angles", desc: "Hitches, angles, and capacity reduction.", url: "https://www.youtube.com/results?search_query=rigging+basics+sling+angles+hitches+capacity" },
        { name: "Wire rope inspection and discard criteria", desc: "Broken wires, kinks, corrosion, and diameter loss.", url: "https://www.youtube.com/results?search_query=wire+rope+inspection+crane+discard+criteria" },
        { name: "Two-blocking and anti-two-block devices", desc: "Why it happens and how to prevent it.", url: "https://www.youtube.com/results?search_query=two+blocking+crane+anti+two+block+device" },
        { name: "Crane power line safety", desc: "Approach distances and what to do if contact happens.", url: "https://www.youtube.com/results?search_query=crane+power+line+contact+safety+approach+distance" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for crane work yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: crane operator career podcast", desc: "Open the results and listen with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=crane+operator+career+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: crane operator stories and tips (listen-along)", desc: "Operators describing lifts, planning, and lessons learned.", url: "https://www.youtube.com/results?search_query=crane+operator+tips+stories+podcast" },
        { name: "YouTube: rigging and hoisting talks", desc: "Rigging practices and common mistakes.", url: "https://www.youtube.com/results?search_query=rigging+hoisting+safety+talk+podcast" },
        { name: "YouTube: construction site safety talks", desc: "Hazard assessments and toolbox talk topics.", url: "https://www.youtube.com/results?search_query=construction+site+safety+toolbox+talk+podcast" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "For planning, engineering coordination, and leadership as you move toward the Red Seal and lead roles.",
      items: [
        { name: "YouTube: critical lift planning discussion", desc: "Lift plans, engineering input, and roles on complex picks.", url: "https://www.youtube.com/results?search_query=critical+lift+planning+crane+discussion+podcast" },
        { name: "YouTube: crane accident lessons learned", desc: "Investigation findings and prevention.", url: "https://www.youtube.com/results?search_query=crane+accident+lessons+learned+safety+podcast" },
        { name: "YouTube: Red Seal exam study tips (crane operator)", desc: "Preparing for trade exams and managing test anxiety.", url: "https://www.youtube.com/results?search_query=red+seal+exam+study+tips+crane+operator" }
      ]
    }
  ],
  practiceBank: {
    1: mcBank([
      ["A crane's rated capacity is found on:", "The manufacturer's load chart for the exact configuration", ["The hook block colour", "The fuel gauge", "The cab radio"], "Charts list capacity by boom length, radius, outrigger set-up, and counterweight."],
      ["Radius is measured:", "Horizontally from the centre of rotation to the centre of the load", ["Along the boom", "Straight up from the hook", "From the ground to the boom tip"], "Radius, not boom length, drives most load chart values."],
      ["If the boom is lowered (boom angle decreases), the radius:", "Increases and the capacity decreases", ["Decreases and the capacity increases", "Stays the same", "Only the hook height changes"], "A lower angle reaches farther out, increasing the load moment."],
      ["No one should be:", "Under or in the path of a suspended load", ["More than 30 m away", "Wearing a hard hat", "Holding a tag line"], "Workers must stay clear of loads in the air."],
      ["Before lifting, outriggers must be:", "Set and extended as required by the load chart on firm, level support", ["Left retracted for speed", "Used only on the left side", "Placed on a utility cover"], "The chart assumes the specified outrigger configuration."],
      ["The signal for stop is:", "Arm extended, palm down, moving horizontally back and forth", ["Arm raised, palm out, still", "Both hands over the head", "Pointing at the load"], "Stop means halt the movement. Emergency stop uses both arms in the same motion."],
      ["Which hand signal means hoist (raise the load)?", "Forearm vertical, forefinger pointing up, small horizontal circle", ["Arm extended, finger pointing down, circling", "Fist tapping the helmet", "Palm down, moving back and forth"], "Lower the load is the same circling motion with the arm extended and the finger pointing down."],
      ["Two-blocking is when:", "The hook block contacts the boom point sheaves", ["Two cranes lift a load together", "Two slings share a load", "The boom hits a building"], "It can break the rope and drop the load. Limiters and careful operation prevent it."],
      ["A hook safety latch is meant to:", "Keep slings or links from slipping off the hook", ["Lock the boom", "Cool the hook", "Measure the load"], "Latches should be working and used."],
      ["5 tonnes is about:", "11,023 lb", ["5,000 lb", "2,268 lb", "50,000 lb"], "1 tonne = 1,000 kg ≈ 2,204.6 lb."],
      ["Which describes a pre-use (frequent) inspection?", "Checking rope, hook, limiters, fluids, and controls before operating", ["Checking the mailbox", "Only wiping the windows", "Washing the carrier"], "Frequent inspections catch defects before lifting."],
      ["You should stay clear of overhead power lines:", "By at least the minimum approach distance for the line voltage and your regulation", ["Within a hand's reach", "Only if there is rain", "Only if lines are low"], "Distances depend on voltage and jurisdiction. Treat all lines as energized until the utility confirms otherwise."],
      ["WHMIS refers to:", "Workplace Hazardous Materials Information System", ["Wire and Hoist Material Inspection System", "Weather Hazard and Machine Inspection Standard", "Workplace Hoisting Machinery Information Sheet"], "WHMIS covers labels, SDSs, and training for hazardous products."],
      ["Which crane type is mounted on tracks?", "Crawler crane", ["All-terrain crane", "Boom truck", "Rough-terrain crane"], "Crawler cranes use tracks. The others use rubber tires."],
      ["Who has the authority to refuse a lift that appears unsafe?", "The operator", ["Only the owner", "Only the signal person", "Nobody"], "The operator can stop any lift that seems unsafe. Operators also have legal work refusal rights."]
    ], 0),
    2: mcBank([
      ["A crane's chart shows 20,000 kg gross capacity at your radius. The hook block is 500 kg and slings are 300 kg. The maximum load you can lift is:", "19,200 kg", ["20,000 kg", "19,700 kg", "20,800 kg"], "Deductions come off the gross capacity: 20,000 − 500 − 300 = 19,200 kg."],
      ["A steel plate is 2 m × 1 m × 0.025 m. Steel is about 7,850 kg/m³. The plate weighs about:", "393 kg", ["39 kg", "1,570 kg", "3,925 kg"], "Volume is 0.05 m³. 0.05 × 7,850 = 392.5 kg."],
      ["1 m³ of reinforced concrete weighs about:", "2,400 kg", ["1,000 kg", "7,850 kg", "600 kg"], "Concrete is about 2,400 kg per cubic metre. Always use documented weights where available."],
      ["A 4,000 kg load is lifted with a two-leg sling whose legs are at 60° to the horizontal. Each leg carries about:", "2,309 kg", ["2,000 kg", "4,000 kg", "1,155 kg"], "Leg tension = load ÷ (2 × sin 60°) = 4,000 ÷ 1.732 = 2,309 kg."],
      ["As sling angle from horizontal gets smaller, the tension in each leg:", "Increases", ["Decreases", "Stays the same", "Becomes zero"], "Lower angles multiply the force in the legs."],
      ["The crane's hook should be positioned:", "Directly above the load's centre of gravity", ["At the edge of the load", "Beside the load", "Anywhere"], "This prevents tilting and swinging when the load lifts."],
      ["A crane's level indicator should be:", "Within the manufacturer's tolerance, usually about 1%", ["Ignored", "Within 20%", "Only checked after the lift"], "Out-of-level cranes lose capacity and stability."],
      ["Outrigger pads or mats are used to:", "Spread the load over a larger area of ground", ["Raise the crane", "Lower the radius", "Cool the outriggers"], "Pressure = force ÷ area. A bigger area lowers pressure."],
      ["Signs of damaged wire rope include:", "Broken wires, kinks, corrosion, and flattened sections", ["Clean grease", "Bright colour", "Uniform diameter"], "Rope that shows these defects is removed or evaluated per the standard and manufacturer."],
      ["A tag line is used to:", "Control the load's rotation from a safe distance", ["Lift the load", "Measure radius", "Lock the boom"], "Never wrap a tag line around your hand or body."],
      ["Wind on a large flat load will:", "Make it harder to control and may require stopping", ["Make it lighter", "Have no effect", "Increase chart capacity"], "Sail area and wind speed matter. Follow manufacturer wind limits."],
      ["When a load is just lifted off the ground, you should:", "Pause and check stability, rigging, and brakes before continuing", ["Raise it quickly to full height", "Swing immediately", "Leave the cab"], "A short test lift reveals problems while the load is still close to the ground."],
      ["A load line with 4 parts of line (ignoring friction) supports a 20 t load. Line pull is about:", "5 t", ["20 t", "80 t", "10 t"], "Line pull = load ÷ parts = 20 ÷ 4 = 5 t."],
      ["The boom of a telescopic crane should be extended:", "In the sequence and amounts the manual and chart permit", ["Randomly", "Fully, whatever the load", "Without the chart"], "Capacities are based on specific boom lengths and extension modes."],
      ["Which is true of a sling's choke hitch compared with a vertical hitch?", "It reduces the rated capacity", ["It increases capacity", "It has no effect", "It doubles capacity"], "Choke hitches reduce capacity. Use the sling manufacturer's table."]
    ], 5),
    3: mcBank([
      ["A critical lift plan is typically needed when:", "Loads are heavy, complex, near limits, or involve people or two cranes", ["Every lift", "Only when raining", "Only at night"], "Employers and standards define what makes a lift critical. Many use a percentage of rated capacity."],
      ["Each of four outrigger mats carries up to 150 kN on 1.5 m². Ground pressure is:", "100 kPa", ["10 kPa", "225 kPa", "1,000 kPa"], "150 kN ÷ 1.5 m² = 100 kPa."],
      ["A mat needs to spread 150 kN to an allowable ground pressure of 75 kPa. The area needed is:", "2.0 m²", ["1.0 m²", "4.0 m²", "0.5 m²"], "Area = 150 ÷ 75 = 2.0 m²."],
      ["Under load, boom deflection causes the actual radius to:", "Increase compared with the unloaded radius", ["Decrease", "Stay exactly the same", "Become zero"], "Use the loaded radius when reading the chart."],
      ["If the radius doubles with the same load, the load moment:", "Doubles", ["Halves", "Stays the same", "Becomes zero"], "Load moment = load × radius."],
      ["Using a jib generally:", "Reduces capacity compared with the main boom alone", ["Increases it", "Has no effect", "Doubles it"], "Jibs add weight and reach. Use the specific chart for the jib configuration."],
      ["The rated capacity limiter (load moment indicator) should be:", "Used as an aid and never bypassed or relied on alone", ["Bypassed to finish faster", "Turned off in wind", "Ignored for small loads"], "Limiters support, but do not replace, charts and judgment."],
      ["The weight of a load is best determined by:", "Documented weight, a load cell, or calculation with a margin", ["Visual guess", "Ask the nearest worker to guess", "Pick it up and see"], "Unknown weights are a leading cause of overloads."],
      ["A utility confirms a line is energized at 25 kV. You should:", "Stay outside the required approach distance, including boom and load sway", ["Work within 1 m", "Use a tag line to push the wire", "Ignore it"], "Distances are set by regulation and the utility."],
      ["During a thunderstorm with lightning nearby, you should:", "Stop lifting, secure the load if safe, and follow your site's plan", ["Keep lifting steel", "Raise the boom high", "Stand next to the crane"], "Cranes attract lightning. Follow the emergency plan."],
      ["Lifting people with a crane:", "Is prohibited unless regulations are met and a rated personnel platform is used", ["Is allowed with a bucket", "Is fine with a sling", "Is always allowed"], "Strict requirements apply and vary by province."],
      ["Pick-and-carry operations require:", "Following manufacturer limits and a plan for travel speed and surface", ["No planning", "Travelling at highway speed", "Swinging while travelling"], "Charts for pick-and-carry differ."],
      ["When a crane is on crawler tracks, the ground must:", "Support the machine and travel path without settling", ["Be soft", "Be wet", "Be unchecked"], "Ground bearing is as important for crawlers as for outriggers."],
      ["Which is a possible hidden hazard under outrigger pads?", "Buried utilities, voids, or backfilled trenches", ["Sunshine", "Paint", "Gravel"], "Know what is under the pads before setting up."],
      ["Lowering the boom on a long lift while the load is out at full radius:", "Increases radius and may exceed capacity", ["Decreases radius", "Has no effect", "Reduces load weight"], "Always check the chart for changes in radius."]
    ], 10),
    4: mcBank([
      ["A 30 m boom is at 60° from horizontal. Horizontal reach from the boom foot is about:", "15 m", ["26 m", "30 m", "52 m"], "Reach = 30 × cos 60° = 15 m. Add the offset from the centre of rotation to the boom foot for the true radius."],
      ["A 30 m boom at 60° reaches a height of about:", "26 m", ["15 m", "30 m", "60 m"], "Height = 30 × sin 60° ≈ 26 m, plus the boom foot height."],
      ["A 12 t net load at a radius with a chart capacity of 15 t is using:", "80% of chart capacity", ["125%", "60%", "100%"], "12 ÷ 15 = 0.80."],
      ["Line speed is 60 m/min and the load line has 4 parts. Load speed is:", "15 m/min", ["240 m/min", "60 m/min", "4 m/min"], "Load speed = line speed ÷ parts of line."],
      ["A basket hitch with both sling legs vertical (90°) provides about:", "Twice the vertical rated capacity of one leg, subject to bend limits", ["Half the capacity", "The same as a choker", "Zero capacity"], "Two legs share the load. Small bend diameters reduce capacity."],
      ["The load moment indicator reading does not match the chart. First step:", "Verify the configuration inputs (outriggers, counterweight, boom length, parts of line)", ["Ignore the LMI", "Bypass it", "Lift anyway"], "Wrong inputs give wrong readings. Stop until resolved."],
      ["A boom slowly retracts or drifts under load. This most likely points to:", "Internal leakage or a failing holding valve", ["Low tire pressure", "Wrong hook type", "Weather"], "Drift under load is a serious fault that needs a technician."],
      ["Stability-limited capacities on charts:", "Include a safety margin below the tipping load", ["Equal the tipping load", "Exceed the tipping load", "Ignore tipping"], "Structural limits apply at short radius and stability at long radius."],
      ["Frequent inspections are done:", "Daily or before use, with periodic inspections at longer intervals by a competent person", ["Never", "Only after an accident", "Only at purchase"], "CSA Z150 and your regulation set the types and frequency. Keep records."],
      ["When two cranes share a lift:", "A detailed plan, one designated lead, and clear communication are essential", ["No plan is needed", "Each crane lifts independently", "Operators decide alone"], "Load sharing is difficult and requires planning."],
      ["A shackle pin is found bent. You should:", "Remove it from service and replace it", ["Straighten it with a hammer", "Use it for light loads", "Ignore it"], "Damaged rigging hardware must be removed."],
      ["When a sling passes over a sharp corner, you should:", "Use corner protection or padding", ["Use it unchanged", "Use a shorter sling", "Choke it tighter"], "Sharp edges cut slings. Pad or protect them."],
      ["If you notice the ground under an outrigger starting to settle during a lift, you should:", "Stop, lower the load if safe, and reassess the support", ["Continue lifting", "Swing faster", "Retract the other outriggers"], "Settling changes level and can tip the crane."],
      ["Which are typical parts of a hazard assessment for a lift?", "Ground, overhead lines, weather, load weight, rigging, communication, and people", ["Lunch plans", "The colour of the crane", "Radio music"], "A thorough assessment is part of due diligence."],
      ["If a rope has several broken wires in one lay length, you should:", "Compare it with the discard criteria and remove it from service when limits are exceeded", ["Wrap tape on it", "Lubricate it", "Use it for small loads"], "Discard criteria come from the standard and the manufacturer."],
      ["A near-miss is best handled by:", "Reporting it so causes can be corrected", ["Keeping it secret", "Blaming the weather", "Waiting for a bigger incident"], "Near-miss reports prevent accidents."]
    ], 15)
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS, first aid, fall protection, rigging, and signal person awareness; requirements vary)", "Ask whether your province requires a crane operator certificate or has special rules", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: safety, signals, and basics", items: ["Learn crane parts, PPE, and site safety", "Learn hand signals and radio communication", "Do pre-use inspections and basic maintenance with supervision", "Learn basic rigging, load weight, and sling use", "Build your personal kit (see Buying tools)"] },
    { title: "Year 2: load charts and set-up", items: ["Read load charts and apply deductions", "Set up outriggers, mats, and levelling", "Learn wire rope, reeving, and hook block basics", "Run simple lifts under supervision"] },
    { title: "Year 3: complex lifts and conditions", items: ["Learn jib, counterweight, and configuration changes", "Plan lifts near power lines, buildings, and traffic", "Handle wind, ground, and clearance issues", "Understand critical lift plans and tandem lifts"] },
    { title: "Year 4 and beyond: planning and leadership", items: ["Plan and lead complex lifts with engineering support", "Diagnose crane faults and work with technicians", "Mentor apprentices and coach signal persons and riggers", "Use the Red Seal standard to find gaps in your experience"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check federal completion grant and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["All-terrain crane", "A rubber-tired telescopic crane built for road and rough-site travel."],
    ["Anti-two-block device", "A device that warns or stops motion before the hook block contacts the boom tip."],
    ["Boom", "The main structural arm of a crane."],
    ["Boom angle", "The angle of the boom measured from horizontal."],
    ["Boom foot", "The pin where the boom attaches to the crane's body."],
    ["Counterweight", "Weight on the rear of the crane that helps balance the load."],
    ["Crawler crane", "A crane mounted on tracks, often with a lattice boom."],
    ["Deductions", "Weights subtracted from gross capacity, such as hook block and rigging."],
    ["Gross capacity", "The load chart's rated capacity before deductions."],
    ["Hook block", "The assembly with sheaves and a hook on the load line."],
    ["Jib", "An extension attached to the boom tip for added reach."],
    ["Lattice boom", "A boom built from a framework of tubes or angles."],
    ["Lay", "The length along a rope for one strand to wrap once around."],
    ["Load chart", "The manufacturer's table of capacities by configuration and radius."],
    ["Load moment", "Load weight multiplied by radius."],
    ["Net capacity", "Gross capacity minus deductions."],
    ["Outrigger", "An extendable support that increases a crane's stability."],
    ["Parts of line", "The number of rope segments supporting the hook block."],
    ["Pick and carry", "Travelling with a suspended load."],
    ["Radius", "Horizontal distance from the centre of rotation to the load."],
    ["Rated capacity limiter", "A device that monitors load and warns or prevents unsafe operation."],
    ["Reeving", "The path of the wire rope through sheaves."],
    ["Rigging", "Slings, shackles, hooks, and hardware used to attach loads."],
    ["Signal person", "A trained person who directs the crane operator."],
    ["Sling angle", "The angle between a sling leg and the horizontal."],
    ["Swing", "Rotation of the crane's upper structure."],
    ["Tag line", "A rope used to control the rotation of a suspended load."],
    ["Telescopic boom", "A boom with sections that extend and retract hydraulically."],
    ["Two-blocking", "Contact between the hook block and the boom point sheaves."]
  ],
  cards: [
    { front: "Radius", back: "Horizontal distance from the centre of rotation to the load." },
    { front: "Boom lowered", back: "Radius increases and capacity decreases." },
    { front: "Net capacity", back: "Gross chart capacity minus hook block, rigging, and other deductions." },
    { front: "Sling leg tension (two legs)", back: "Load ÷ (2 × sin of the sling angle from horizontal)." },
    { front: "Line pull", back: "Load ÷ parts of line, ignoring friction." },
    { front: "Ground pressure", back: "Force ÷ contact area." },
    { front: "Stop signal", back: "Arm extended, palm down, moving back and forth." },
    { front: "Steel density", back: "About 7,850 kg/m³." },
    { front: "Never", back: "Stand under a suspended load or bypass a safety device." },
    { front: "Two-blocking", back: "Hook block contacts the boom point sheaves." }
  ],
  jobsIntro: "Look for apprentice and operator roles with crane rental companies, construction contractors, industrial maintenance firms, and unions such as IUOE locals. Many employers value rigging, signal person, and first aid tickets, so ask what training they expect.",
  tips: [
    "Treat the load chart as the final word, and check your configuration twice.",
    "Walk the site and the ground before you set up, not after.",
    "Agree on signals and radio channels with the signal person before the first lift.",
    "Keep your hours logbook current and signed by your sponsor."
  ],
  forumTopics: [
    "Starting out as a crane operator",
    "Red Seal and exam prep",
    "Tools and gear",
    "Province and code questions",
    "Load charts and lift planning",
    "Rigging, signals, and communication"
  ],
  reference: [
    {
      title: "Key formulas",
      list: ["Horizontal reach from boom foot = boom length × cos (boom angle)", "Boom tip height = boom length × sin (boom angle) + boom foot height", "Load moment = load × radius", "Net capacity = gross capacity − deductions", "Line pull ≈ load ÷ parts of line (ignoring friction)", "Load speed = line speed ÷ parts of line", "Ground pressure = force ÷ area, and required area = force ÷ allowable pressure"]
    },
    {
      title: "Sling angle factors",
      intro: "Tension in each leg of a two-leg sling = (load ÷ 2) × factor, where angle is measured from horizontal.",
      table: { head: ["Angle from horizontal", "Factor (1 ÷ sin angle)"], rows: [["90°", "1.000"], ["75°", "1.035"], ["60°", "1.155"], ["45°", "1.414"], ["30°", "2.000"]] },
      note: "Employers often set a minimum sling angle. Avoid low angles where possible."
    },
    {
      title: "Approximate material densities",
      table: { head: ["Material", "Density (kg/m³)"], rows: [["Fresh water", "1,000"], ["Concrete (reinforced)", "about 2,400"], ["Aluminum", "about 2,700"], ["Steel", "about 7,850"]] },
      note: "Always use documented weights where available. Allow for attachments, fluids, and rigging."
    },
    {
      title: "Conversions",
      list: ["1 tonne = 1,000 kg ≈ 2,204.6 lb", "1 kN ≈ 101.97 kgf ≈ 225 lbf", "1 m = 3.281 ft and 1 in = 25.4 mm", "1 kPa ≈ 0.145 psi", "1 km/h ≈ 0.278 m/s ≈ 0.621 mph", "1 short ton = 2,000 lb ≈ 907 kg"]
    },
    {
      title: "Standard hand signals (common)",
      table: { head: ["Signal", "Motion"], rows: [["Hoist", "Forearm vertical, forefinger pointing up, small horizontal circle"], ["Lower", "Arm extended downward, forefinger pointing down, small horizontal circle"], ["Raise boom", "Arm extended, fingers closed, thumb pointing up"], ["Lower boom", "Arm extended, fingers closed, thumb pointing down"], ["Stop", "Arm extended, palm down, moving back and forth"], ["Emergency stop", "Both arms extended, palms down, moving back and forth"]] },
      note: "Confirm the signal set used on your site and in your province's regulation."
    },
    {
      title: "Pre-use inspection checklist",
      list: ["Hook, safety latch, and hook block sheaves", "Wire rope for kinks, broken wires, corrosion, and flattening", "Anti-two-block and rated capacity limiter functions", "Boom, jib, outriggers, and pads for damage or leaks", "Level indicator, boom angle indicator, and load chart in the cab", "Horn, alarms, lights, and controls", "Fluid levels and tire or track condition", "Record defects and remove the crane from service if unsafe"]
    },
    {
      title: "Standards and regulation pointers",
      list: ["CSA Z150 is the Canadian safety code on mobile cranes", "Your provincial OHS regulation sets rules for cranes, hoisting, power lines, and operator qualification", "CSA standards cover PPE: Z94.1 hard hats, Z94.3 eye protection, Z94.2 hearing, Z96 high-visibility garments, and Z259 fall protection", "WHMIS and SDSs apply to fuels, oils, and cleaners", "The manufacturer's manual and load chart are the final word on capacity"],
      note: "Rules vary by province. Use your own jurisdiction's current text."
    }
  ]
});
