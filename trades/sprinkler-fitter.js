// Sprinkler Fitter guide. Practice questions are original study aids, not official Red Seal exam questions.

const sprinklerBank = (rows) => rows.map(([q, ok, bad, explain], i) => {
  const answer = (i * 3) % 4;
  const options = [...bad];
  options.splice(answer, 0, ok);
  return { q, options, answer, explain };
});

registerTrade({
  introVideo: { id: "H_DspT0865U", title: "Intro video: Sprinkler Fitter" },
  id: "sprinkler-fitter",
  store: "sprinkler-fitter",
  title: "Sprinkler Fitter",
  name: "Sprinkler Fitter",
  short: "fire sprinkler fitting",
  category: "Construction · Fire Protection · Piping",
  summary: "Install, test, and service automatic fire sprinkler, standpipe, and related water-based fire protection systems that protect lives and buildings.",
  work: "Sprinkler fitters read fire protection shop drawings, then hang, cut, groove, thread, and join pipe, set sprinklers, valves, and alarm devices, and pressure test the system. Most work is overhead in new and existing buildings, on lifts, ladders, and scaffold, and it follows NFPA standards and the building and fire codes in force in your province.",
  duration: "Usually 4–5 years (Job Bank), varies by province",
  union: "UA Canada (United Association)",
  unionUrl: "https://www.uacanada.ca/",
  profileUrl: "https://red-seal.ca/eng/trades/sprinkler-fitter.shtml",
  durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/21474/ca",
  jobSearch: "sprinkler fitter apprentice",
  journeySearch: "sprinkler fitter fire protection",
  aliases: "fire sprinkler installer fire protection pipefitter standpipe deluge preaction suppression NFPA 13 sprinkler system installer",
  tools: [
    "Pipe wrenches and chain wrenches",
    "Tape measure, level, and pipe marker",
    "Sprinkler wrench set",
    "Hammer drill and anchor setting tools",
    "Roll grooving tool and grooved coupling wrenches",
    "Hard hat, safety glasses, hearing and fall protection"
  ],
  insight: {
    skills: [
      "Reading shop drawings and building plans",
      "Math for layout, spacing, and flow",
      "Comfort with overhead and lift work",
      "Attention to detail, since the system must work when needed"
    ],
    hazards: [
      "Overhead drilling and dust: eye, respiratory, and hearing protection",
      "Work from lifts, ladders, and scaffold: inspect equipment and use fall protection",
      "Charged systems and testing: isolate, drain, and verify pressure before opening",
      "Occupied buildings: control impairments, protect the public, and keep fire watches in place"
    ],
    settings: [
      "New commercial, institutional, and residential construction",
      "Renovations and tenant improvements",
      "Industrial and warehouse fire protection",
      "Inspection, testing, and maintenance service companies"
    ]
  },
  toolGroups: [
    {
      title: "Day-one tools, buy once and buy well",
      note: "Professional-grade tools that hold their accuracy for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
      items: [
        { name: "RIDGID 14 in and 18 in pipe wrenches", why: "Forged hook jaws grip threaded pipe and fittings. A staple for sprinkler piping.", search: "RIDGID 14 inch 18 inch pipe wrench" },
        { name: "RIDGID or Reed chain wrench", why: "Works in tight overhead spaces and on larger pipe where a straight wrench won't fit.", search: "RIDGID chain wrench pipe 2 inch" },
        { name: "Milwaukee or Stanley FatMax tape measure (25 ft / 7.5 m)", why: "A wide, stiff blade lets you read measurements overhead without bending. Metric and imperial markings help.", search: "Stanley FatMax 7.5 m 25 ft tape measure metric" },
        { name: "Torpedo level and 4 ft level", why: "Set pipe grade and check plumb. Many dry systems rely on proper pitch for drainage.", search: "Milwaukee magnetic torpedo level 48 inch level Stabila" },
        { name: "Pipe wrap-around marker and soapstone", why: "Marks a square cut line. Visible on dark or dusty pipe.", search: "pipe wrap around marker soapstone holder" },
        { name: "Adjustable wrenches (10 in and 15 in) and combination wrench set", why: "For grooved coupling bolts, unions, and valve work.", search: "Crescent adjustable wrench 10 inch 15 inch Gearwrench combination wrench set" },
        { name: "Safety glasses, dust mask or respirator, and hearing protection", why: "Overhead drilling and cutting fill the air with dust and grit. Protection is daily gear.", search: "safety glasses half mask respirator P100 earmuffs CSA" },
        { name: "Cut-resistant gloves", why: "Sharp pipe edges and threaded ends. Choose a dexterous pair.", search: "cut resistant work gloves Mechanix Youngstown" },
        { name: "CSA safety boots with metatarsal guard", why: "Heavy pipe, dropped tools, and site conditions. Slip-resistant soles help on wet or dusty floors.", search: "CSA safety boots metatarsal guard slip resistant waterproof" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson or foreman what holds up on your sites.",
      items: [
        { name: "Milwaukee M18 FUEL hammer drill and SDS rotary hammer", why: "Install hanger anchors overhead in concrete. Choose one battery platform and stay with it.", search: "Milwaukee M18 FUEL SDS plus rotary hammer hammer drill" },
        { name: "Hanger rod and anchor setting tools", why: "Setting listed anchors correctly is a code requirement. Follow the anchor manufacturer's instructions.", search: "anchor setting tool concrete drop-in anchor rod hanger" },
        { name: "Pipe cutter (RIDGID or Reed) for small pipe", why: "Square cuts for thread and groove preparation.", search: "RIDGID pipe cutter 1/8 to 2 inch" },
        { name: "Deburring and reaming tool", why: "Removes burrs inside cut pipe so flow stays smooth and gaskets seat properly.", search: "RIDGID reamer deburring tool pipe" },
        { name: "Cordless reciprocating saw and quality blades", why: "Cuts pipe and hanger rod. Use the right blade for steel and CPVC.", search: "Milwaukee M18 Sawzall reciprocating saw metal blades" },
        { name: "Tool belt and bucket organizer", why: "Keeps small items together while you work on a lift or ladder.", search: "Veto Pro Pac tool bag bucket organizer" },
        { name: "Hard hat with visor and chin strap", why: "Overhead work stirs up dust and debris. A chin strap helps when working above.", search: "hard hat face shield chin strap CSA" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying.",
      items: [
        { name: "Roll grooving machine (RIDGID 918 or Victaulic)", why: "Forms the groove for grooved couplings. Usually a shop or company tool with training required.", search: "RIDGID 918 roll groover Victaulic grooving tool" },
        { name: "RIDGID pipe threader and dies", why: "Cutting NPT threads on steel pipe for small diameters. Typically company-supplied.", search: "RIDGID 300 pipe threader dies" },
        { name: "Hydrostatic test pump and calibrated gauges", why: "Used to test new systems. Gauges must be calibrated and in range.", search: "hydrostatic test pump calibrated pressure gauge" },
        { name: "Air compressor and nitrogen test equipment", why: "Used to test dry and preaction systems. Follow the procedure and pressure limits.", search: "air compressor nitrogen regulator dry pipe test gauge" },
        { name: "Scissor lift or boom lift certification", why: "Most sprinkler work is overhead. Your employer provides the lift and training, and you need a ticket to operate it.", search: "scissor lift operator safety handbook" },
        { name: "Full-body harness and lanyard (CSA Z259.10)", why: "Usually supplied by the employer. Fall protection training comes first.", search: "CSA Z259.10 full body harness lanyard" },
        { name: "Laser distance meter and laser level", why: "Layout of overhead lines and hanger locations. Often employer-supplied.", search: "Bosch laser distance measure self leveling laser level" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for drawings, math, and code study. Check with your school and your exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Flow, pressure, and K-factor calculations use square roots and powers.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Architect's scale and engineer's scale", why: "Reading fire protection and architectural drawings.", search: "architect scale engineer scale ruler set" },
        { name: "Mechanical pencil (0.5 mm) and spare leads", why: "Neat layout sketches and notes.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm leads" },
        { name: "Isometric graph paper pad", why: "Sketch pipe runs and offsets at 30° angles.", search: "isometric graph paper pad" },
        { name: "NFPA 13 handbook or standard (if recommended by your school)", why: "The core installation standard. Check which edition your province and school use.", search: "NFPA 13 Standard for the Installation of Sprinkler Systems" },
        { name: "Triangles, protractor, and steel ruler", why: "Draw accurate layouts and angles.", search: "Staedtler drafting triangle set protractor steel ruler" },
        { name: "Field notebook and binder with dividers", why: "Organize notes by year and topic. Useful for exam review.", search: "Rite in the Rain notebook binder dividers" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare, including the trade standard.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Codes Canada", desc: "The National Building Code and National Fire Code of Canada, model codes adopted by provinces.", url: "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada" },
        { name: "UA Canada", desc: "Union sprinkler fitter and pipefitter training and apprenticeship information.", url: "https://www.uacanada.ca/" },
        { name: "NFPA (National Fire Protection Association)", desc: "Publisher of NFPA 13, 14, 20, 24, and 25, the main sprinkler standards referenced in Canada.", url: "https://www.nfpa.org/" },
        { name: "CSA Group", desc: "Publisher of Canadian standards for fall protection, welding, and more.", url: "https://www.csagroup.org/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Fact sheets on WHMIS, ladders, lifts, and fall protection.", url: "https://www.ccohs.ca/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local codes.",
      items: [
        { name: "Fire sprinkler system basics", desc: "How sprinklers work and the main system types.", url: "https://www.youtube.com/results?search_query=fire+sprinkler+system+basics+wet+dry+preaction+deluge" },
        { name: "How a fire sprinkler head works", desc: "Bulbs, fusible links, and activation.", url: "https://www.youtube.com/results?search_query=how+a+fire+sprinkler+head+works+glass+bulb" },
        { name: "Dry pipe valve operation", desc: "Air pressure, differential, and tripping.", url: "https://www.youtube.com/results?search_query=dry+pipe+valve+fire+sprinkler+operation+trip" },
        { name: "Grooved pipe installation", desc: "Roll grooving and coupling assembly.", url: "https://www.youtube.com/results?search_query=grooved+pipe+coupling+installation+fire+sprinkler" },
        { name: "Sprinkler hydraulic calculations", desc: "K-factor, flow, and pressure basics.", url: "https://www.youtube.com/results?search_query=fire+sprinkler+hydraulic+calculation+k+factor+basics" },
        { name: "Fire sprinkler hangers and seismic bracing", desc: "Support and bracing of sprinkler piping.", url: "https://www.youtube.com/results?search_query=fire+sprinkler+hangers+seismic+bracing+installation" },
        { name: "Hydrostatic test of sprinkler system", desc: "Test procedure and safety.", url: "https://www.youtube.com/results?search_query=fire+sprinkler+hydrostatic+test+procedure" },
        { name: "NFPA 13 explained", desc: "Overview of installation rules and hazard classifications.", url: "https://www.youtube.com/results?search_query=NFPA+13+explained+hazard+classification+sprinkler+spacing" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for sprinkler fitting yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: fire sprinkler fitter podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=fire+sprinkler+fitter+apprentice+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: fire protection industry podcast", desc: "Talks about sprinkler design, installation, and inspection.", url: "https://www.youtube.com/results?search_query=fire+protection+industry+podcast+sprinkler" },
        { name: "YouTube: NFPA podcast episodes", desc: "Discussions of standards and fire safety topics.", url: "https://www.youtube.com/results?search_query=NFPA+podcast+sprinkler+standards" },
        { name: "YouTube: sprinkler fitter tips and stories (audio)", desc: "Job-site lessons and troubleshooting stories.", url: "https://www.youtube.com/results?search_query=sprinkler+fitter+podcast+tips+stories" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, planning, and leadership.",
      items: [
        { name: "YouTube: Red Seal sprinkler system installer exam prep", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+sprinkler+system+installer+exam+preparation" },
        { name: "YouTube: NFPA 25 inspection testing and maintenance", desc: "Talks on ITM requirements for water-based systems.", url: "https://www.youtube.com/results?search_query=NFPA+25+inspection+testing+maintenance+podcast" },
        { name: "YouTube: construction foreman and leadership podcast", desc: "Planning crews, communication, and productivity.", url: "https://www.youtube.com/results?search_query=construction+foreman+leadership+podcast" }
      ]
    }
  ],
  practiceBank: {
    1: sprinklerBank([
      ["What is the main purpose of an automatic sprinkler system?", "Control or suppress fire early by applying water automatically", ["Heat the building by releasing warm water through the pipe network", "Supply drinking water to the occupants through the fixtures", "Detect smoke only and send a signal to the fire alarm panel"], "Sprinklers operate individually when heat reaches their rating, controlling fire growth."],
      ["What triggers a standard automatic sprinkler to open?", "Heat at the sprinkler melting a link or breaking a bulb", ["Smoke reaching the sprinkler, which opens it at once", "A manual switch operated by the fire department on arrival", "A loss of water pressure in the supply piping to the system"], "Only the sprinklers near the fire usually operate."],
      ["In a wet pipe system the pipes are:", "Filled with water under pressure", ["Filled with air under pressure, held back by a dry valve", "Empty until the fire department connects and pumps water in", "Filled with foam concentrate that mixes with water at the head"], "Wet systems have water in the pipe at all times, so they respond fastest."],
      ["Why must a sprinkler never be painted?", "Paint can change how it responds to heat", ["It looks odd when the colour differs from the surrounding ceiling", "Paint is heavy and can overload the pipe and the hangers", "It adds friction loss that raises the pressure at the sprinkler"], "Painted or coated sprinklers can fail to operate and must be replaced."],
      ["How many millimetres are in one inch?", "25.4", ["2.54", "10", "254"], "1 in = 25.4 mm exactly."],
      ["Which document describes hazards and first aid for pipe thread sealant or cutting oil?", "Safety Data Sheet (SDS)", ["The shop drawing for the system, which shows pipe sizes and hangers", "The hanger schedule, which lists the hanger types and spacing", "The pipe tag attached to the bundle at the supplier's yard"], "SDS are part of WHMIS."],
      ["Lockout/tagout is used to:", "Keep energy sources isolated while working", ["Mark tools so that each fitter can find their own on site", "Label sprinklers by type and temperature rating before installing", "Order materials and track what has been delivered to the floor"], "It prevents accidental energization or release of stored energy."],
      ["Before working from a ladder you should:", "Inspect it and keep three points of contact", ["Stand on the top step so that you can reach the ceiling", "Carry loads in both hands so you only make one trip", "Lean sideways to reach farther rather than moving the ladder"], "Ladder falls are a major source of injury."],
      ["When drilling overhead into concrete you should wear:", "Eye protection, a respirator rated for silica dust, and hearing protection", ["Sunglasses only, to keep dust and debris out of your eyes", "No PPE if the drilling will take less than a few minutes", "Gloves only, since they protect against vibration from the drill"], "Concrete dust contains silica. Follow your employer's silica control plan."],
      ["Threads on steel sprinkler pipe are typically:", "NPT, tapered threads", ["Straight metric threads, sealed with an O-ring at each joint", "Square threads, which are cut with a standard pipe die", "Left-hand threads, so the fittings do not loosen from vibration"], "Tapered pipe threads seal when tightened with sealant."],
      ["A sprinkler wrench is used to:", "Install and remove sprinklers without damaging them", ["Cut pipe to length before the fittings are installed", "Measure the water pressure at the sprinkler during the test", "Weld fittings onto the pipe at the start of a job"], "Use the wrench made for that sprinkler to avoid damaging the deflector or frame."],
      ["A sprinkler that has been dropped should be:", "Replaced, since it may be damaged", ["Installed anyway, if it looks fine and the bulb is not cracked", "Painted so that any chips or marks are covered up", "Heated gently to check that the link or the bulb still works"], "Damaged sprinklers can fail to operate or leak."],
      ["What does the fire triangle consist of?", "Heat, fuel, and oxygen", ["Wood, water, and air, the three things found in most buildings", "Smoke, heat, and light, the three signs of a fire starting", "Gas, electricity, and wind, the three causes of most fires"], "Sprinklers primarily remove heat by cooling the fire."],
      ["Why wear cut-resistant gloves when handling pipe?", "Cut pipe ends and burrs are sharp", ["To keep tools clean and free from oil during the day", "To keep the pipe cold so that it can be handled in summer", "To make the pipe lighter by spreading the weight of it"], "Gloves protect hands but must still allow control."],
      ["Hot work such as cutting and welding requires:", "A permit, a fire watch, and fire extinguishers", ["Nothing, if the work will only take a few minutes", "Work done at night, when the building is empty of people", "A radio, so that you can call for help if a fire starts"], "Hot work is a leading cause of construction fires."],
      ["Which tool removes the inside burr after cutting pipe?", "Reamer", ["Level, used to check the slope of the pipe run", "Tape measure, used to find the length of the next cut", "Chalk line, used to mark the layout on the ceiling"], "Burrs restrict flow and can damage gaskets."],
      ["Why is correct PPE important in an occupied building?", "It protects you and others from hazards created by your work", ["It is decorative, and it helps the crew look professional", "It is optional, but the employer may ask you to wear it", "It reduces noise only, and does not protect against other hazards"], "Work in occupied spaces also needs barriers and housekeeping."]
    ]),
    2: sprinklerBank([
      ["A glass bulb sprinkler with a red liquid is rated for about:", "68 °C", ["57 °C, the lowest common glass bulb rating", "79 °C, used in ordinary temperature areas such as attics", "93 °C, used in hot areas such as near skylights"], "Common colours: orange 57 °C, red 68 °C, yellow 79 °C, green 93 °C."],
      ["A glass bulb with an orange liquid is rated for about:", "57 °C", ["68 °C, the rating for ordinary temperature areas", "141 °C, an intermediate rating used for hot locations", "182 °C, a high rating used for very hot locations"], "57 °C is the lowest common rating."],
      ["K-factor in Q = K√P relates to:", "The sprinkler's discharge coefficient", ["The temperature rating of the bulb or the fusible link", "The length of the pipe supplying the sprinkler branch line", "The spacing between hangers on the branch line pipe"], "Q is flow, P is pressure at the sprinkler, and K depends on the orifice."],
      ["A K5.6 sprinkler at 100 psi flows about:", "56 gpm", ["5.6 gpm, found by using the K-factor as the flow", "560 gpm, found by multiplying the K-factor by the pressure", "11 gpm, found by doubling the K-factor and rounding it"], "5.6 × √100 = 56 gpm."],
      ["A K80 (metric) sprinkler at 4 bar flows about:", "160 L/min", ["80 L/min, found by using the K-factor as the flow", "320 L/min, found by multiplying the K-factor by the pressure", "20 L/min, found by dividing the K-factor by the pressure"], "80 × √4 = 160 L/min."],
      ["Which hazard classification generally requires the smallest design density?", "Light hazard", ["Extra hazard, where large amounts of flammable liquids are stored", "Ordinary hazard Group 2, such as stores and light manufacturing", "Extra hazard Group 2, such as plastics processing and spraying"], "Light hazard occupancies such as offices have the lowest design density."],
      ["Which of these is an ordinary hazard occupancy example?", "Retail shops, parking garages, and light manufacturing", ["Chemical storage, such as flammable liquids in drums", "Churches, where the fire load is low and the ceilings are high", "Small offices, which are the lowest in fire load of any use"], "Always confirm with NFPA 13 and the project design."],
      ["A pendent sprinkler is installed:", "Hanging down from the pipe", ["Pointing up from the pipe, with the deflector above the frame", "On a wall only, with the deflector aimed across the room", "In a floor, with the deflector facing up toward the ceiling"], "Upright sprinklers point up, pendents hang down, and sidewalls mount on walls."],
      ["Which valve is commonly used as a supervised control valve?", "OS&Y gate valve or a butterfly valve with a tamper switch", ["A hose bib, which has a handle and a hose thread outlet", "A check valve, which only lets water flow in one direction", "A float valve, which opens and closes with the water level"], "Control valves must be supervised so closed valves are noticed."],
      ["A water motor gong provides:", "A local mechanical waterflow alarm", ["Hot water for the building, heated by the flowing system", "Pump pressure for the system, taken from the riser", "Pipe cleaning by flushing water through the system at speed"], "Water flows to a turbine that rings the gong when the system flows."],
      ["A waterflow switch is used to:", "Send an electrical signal when water flows in the system", ["Control the temperature of the water in the system", "Hold the pipe in place as water flows through the riser", "Cut the flow of water when the fire has been controlled"], "It signals the fire alarm panel."],
      ["The inspector's test connection is used to:", "Simulate the flow of one sprinkler and test alarms", ["Drain the system fully so that the pipes can be inspected", "Test the fire department connection and its check valve", "Vent trapped air from the high points of the piping"], "It flows through an orifice equal to the smallest sprinkler."],
      ["A main drain is used to:", "Check the water supply and drain the riser", ["Test alarms only, without checking the supply at all", "Vent pipes at the high points after the system is filled", "Fill the tanks and pumps that supply the system"], "A main drain test compares static and residual pressure to detect supply changes."],
      ["A spare sprinkler cabinet should include:", "Spare sprinklers of each type and a sprinkler wrench", ["Hand tools only, such as wrenches, snips, and a pipe cutter", "Pipe fittings of every size used on the system, plus sealant", "Tape and sealant, so that small leaks can be fixed on site"], "NFPA 13 requires a supply of spare sprinklers and the correct wrench."],
      ["CPVC pipe is generally permitted in:", "Light hazard wet systems where listed for the application", ["All hazards, as long as the pipe is hung properly", "Dry systems only, where there is no water in the pipe", "Anywhere, since the pipe is listed for fire protection"], "Always follow the listing and manufacturer instructions."],
      ["Which of these can damage CPVC?", "Incompatible thread sealants, cutting oils, and solvents", ["Clean water, which weakens the plastic over time", "Daylight, which is always harmful to plastic pipe", "Air, which causes the pipe to dry out and crack"], "Use only compatible products from the manufacturer."],
      ["Schedule 10 steel pipe is usually joined by:", "Roll grooving, welding, or other approved methods rather than cut threads", ["Cutting threads, as for heavier schedule 40 pipe", "Soldering, using a torch and a lead-free solder", "Gluing, using a solvent cement made for steel pipe"], "Thin-wall pipe is not normally threaded. Follow the listing and NFPA 13."]
    ]),
    3: sprinklerBank([
      ["Light hazard standard spray sprinklers have a maximum coverage per sprinkler of about:", "20.9 m² (225 ft²)", ["9.3 m², the maximum for extra hazard occupancies", "12.1 m², the maximum for ordinary hazard occupancies", "50 m², a size used for large open warehouse bays"], "Ordinary hazard is 12.1 m² (130 ft²) and extra hazard 9.3 m² (100 ft²), per NFPA 13 for typical spray sprinklers."],
      ["Maximum spacing between standard spray sprinklers in ordinary hazard is generally:", "4.6 m (15 ft)", ["3.7 m, which is the extra hazard maximum", "6.1 m, which is the light hazard maximum in some cases", "9 m, which is used only for large open areas"], "Extra hazard maximum is 3.7 m (12 ft). Confirm with NFPA 13."],
      ["The typical distance of a standard pendent sprinkler deflector below the ceiling is:", "25 to 300 mm (1 to 12 in)", ["0 to 5 mm, which puts the deflector against the ceiling", "600 to 900 mm, which puts the deflector well below the ceiling", "At least 1 m, so that the spray has room to spread out"], "Deflector distance below the ceiling affects heat response."],
      ["The three-times rule relates to:", "The distance a sprinkler must be from an obstruction, relative to its size", ["The size of the pipe that feeds each of the branch lines", "The size of the hanger rod needed for each of the pipe sizes", "The number of sprinklers allowed on each of the branch lines"], "A sprinkler should be at least three times the largest dimension of an obstruction away, within limits."],
      ["The Hazen-Williams formula is used to calculate:", "Friction loss in pipe", ["The temperature rating of a sprinkler for a hot area", "Whether a flow switch will sound an alarm at low flow", "The spacing between hangers on a given pipe size"], "It estimates pressure loss as water flows through pipe."],
      ["A common Hazen-Williams C factor for new steel pipe in wet systems is:", "120", ["60, a value used for very old and heavily corroded pipe", "250, a value that is higher than any real pipe material", "10, a value used for pipes that are almost blocked"], "120 is used for unlined steel wet systems and 100 for dry and preaction. Cement-lined ductile iron is 140 and CPVC or copper 150."],
      ["Elevation pressure for water is about:", "9.81 kPa per metre of height", ["1 kPa per metre of height, about a tenth of the real value", "98 kPa per metre of height, ten times the real value", "0.1 kPa per metre of height, a hundredth of the real value"], "Each metre of water head is about 9.81 kPa (0.433 psi per ft)."],
      ["For a 12 m rise from the riser to a sprinkler, elevation pressure loss is about:", "118 kPa", ["12 kPa, found by using 1 kPa per metre", "1 180 kPa, found by using 98 kPa per metre", "9.8 kPa, found by dividing 118 kPa by the rise"], "12 × 9.81 ≈ 118 kPa."],
      ["A typical hydrostatic test for new sprinkler piping is:", "1 400 kPa (200 psi) for 2 hours, or 350 kPa above maximum static if that exceeds 1 050 kPa", ["50 kPa for 10 minutes, using a hand pump on the system", "Only a visual check, with no test needed for new piping", "An air test only, at 50 kPa held for one hour"], "NFPA 13 sets 200 psi for 2 hours, or 50 psi above the maximum static pressure where higher than 150 psi."],
      ["A dry pipe system air leakage test is commonly run at:", "40 psi (275 kPa) for 24 hours with limited loss", ["5 psi for 1 minute, enough to show a large leak", "1 000 psi for 24 hours, using a nitrogen cylinder", "No test is needed if the hydrostatic test passed"], "NFPA 13 allows a loss of no more than 1.5 psi in 24 hours."],
      ["A preaction system differs from a wet system because:", "Pipe is normally dry and water enters when detection operates the valve", ["It is always filled with water, and has closed sprinklers", "It has no sprinklers, and uses open nozzles at each head", "It uses foam only, with no water reaching the sprinklers"], "Preaction systems help avoid accidental water discharge."],
      ["A deluge system uses:", "Open sprinklers and a valve that floods all of them on detection", ["Closed sprinklers and a valve that opens when one head operates", "Glass bulbs only, with a valve that stays closed until a manual release", "Foam only, injected into a pipe that is always full of water"], "Deluge systems are used for high-hazard areas needing quick water delivery."],
      ["In a dry system, branch lines should be pitched at about:", "4 mm per metre (1/2 in per 10 ft) toward a drain", ["No pitch, because water will drain from the sprinklers anyway", "100 mm per metre, which is a steep pitch toward the drain", "Upward toward the end of the line, so air can collect there"], "Pitch lets water drain after operation or testing and prevents ice plugs."],
      ["A backflow preventer on a sprinkler supply protects:", "The potable water supply from contamination", ["The pipe from rust, by keeping oxygen out of the water", "The pump from cavitation when the water level in the tank drops", "The hangers from overload when the pipes are filled with water"], "Local authorities may require certain backflow assemblies."],
      ["A fire department connection (FDC) allows:", "The fire department to supply water to the system", ["Drinking water access for firefighters at the building", "Sprinkler drain use during the annual test of the system", "Air supply to the dry system from a fire truck compressor"], "It supplements the building water supply."],
      ["Class I standpipe hose connections are typically:", "65 mm (2-1/2 in) for use by the fire department", ["25 mm (1 in) for use by the building occupants", "100 mm (4 in) for use by the building occupants", "13 mm (1/2 in) for use by the building occupants"], "Class II uses 38 mm (1-1/2 in) hose for occupants, and Class III has both."],
      ["Seismic bracing is installed to:", "Limit pipe movement and protect the system in an earthquake", ["Support the hangers only, and so carry the weight of the pipe", "Hide the pipe behind a neat covering above the ceiling", "Cool the pipe so that it does not sweat in humid weather"], "NFPA 13 includes seismic design requirements where required."]
    ]),
    4: sprinklerBank([
      ["NFPA 25 covers:", "Inspection, testing, and maintenance of water-based fire protection systems", ["Installation of sprinklers, including spacing and hangers", "Design of fire pumps, including the driver and the controller", "Hose reels only, and the hose that goes with them"], "NFPA 13 covers installation, and NFPA 25 covers ITM."],
      ["NFPA 14 covers:", "Installation of standpipe and hose systems", ["Sprinkler spacing and the layout of branch lines", "Fire alarm wiring and the signals sent to the panel", "Fire pump testing and the annual flow test at the pump"], "NFPA 14 covers standpipes."],
      ["NFPA 20 covers:", "Stationary pumps for fire protection", ["Sprinkler heads and how they are rated and listed", "Hydrants only, and the mains that supply them", "Alarm systems and the detectors that are used in them"], "Fire pump installation is covered by NFPA 20."],
      ["NFPA 24 covers:", "Private fire service mains and their appurtenances", ["Sprinkler spacing and the layout of the branch lines", "Smoke alarms in dwelling units and the wiring for them", "Fire extinguishers and the maintenance cycle for them"], "It covers underground mains and hydrants."],
      ["A fire protection impairment means:", "Part of a system is out of service and requires notification and precautions", ["A tool failure that slows down the fitting crew on site", "A late delivery of sprinklers or pipe to the job site", "A paperwork delay in getting the permit for the system"], "Impairments require notification, a fire watch where required, and prompt restoration."],
      ["Before shutting down a sprinkler system for work you should:", "Follow the impairment procedure, notify the owner and fire authorities, and arrange a fire watch if required", ["Close the valve quietly, so that the occupants are not alarmed", "Leave a note on the valve explaining that the system is off", "Skip approvals if the shutdown will last for less than an hour"], "Systems in occupied buildings must not be left unprotected without a plan."],
      ["A hydraulic placard on a riser shows:", "Design area, density, and flow and pressure demand", ["Wages for the crew, as set out in the union agreement", "Pipe colour codes used by the owner for each of the systems", "A tool list for the fitters who service the riser each year"], "The placard helps inspectors and maintainers verify the design."],
      ["Shop drawings are normally submitted to:", "The authority having jurisdiction and the design team for review before installation", ["The supplier only, who then orders the material", "No one, as long as the work follows the standard", "The tool crib, where the fitters pick up their tools"], "Approved drawings are needed before work in most jurisdictions."],
      ["A contractor's material and test certificate records:", "Test results and details of the installed system", ["Time sheets for the crew who worked on the installation", "Weather conditions on each of the days the work was done", "Invoices only, for the pipe and the sprinklers used"], "It is part of acceptance and handover."],
      ["An ESFR sprinkler is intended for:", "Early suppression of high-challenge storage fires, with large K-factors and fast response", ["Small kitchens, where grease fires are the main risk", "Residential bathrooms, where a quick response is needed", "Decorative use in lobbies, with a concealed cover plate"], "ESFR sprinklers have strict requirements for ceilings and storage arrangements."],
      ["Design area 139 m² (1 500 ft²) at a density of 6.1 L/min per m² (0.15 gpm/ft²) needs about:", "850 L/min (225 gpm)", ["85 L/min, found by dropping a zero from the right answer", "8 500 L/min, found by adding a zero to the right answer", "139 L/min, which is the area only and ignores the density"], "6.1 × 139 ≈ 848 L/min, or 0.15 × 1 500 = 225 gpm."],
      ["Where a building's use changes to a higher hazard, you should:", "Have the system reviewed against the new requirements", ["Do nothing, since the original design is still approved", "Paint over the heads so that they match the new ceiling", "Close the valves until the owner decides what to do"], "Hazard changes can require different density, spacing, or components."],
      ["A dry system in an unheated area is used because:", "Water in the pipe could freeze", ["Dry pipe is cheaper to buy and install than wet pipe", "It cools faster than wet pipe in a fire, giving better control", "It saves water in every case, since less is used to operate it"], "Freezing in wet pipe can burst piping and impair protection."],
      ["Antifreeze solutions in sprinkler systems:", "Are limited by code and must be used per the standard and listing", ["Are always allowed, in any concentration and in any system", "Are never needed, since pipes cannot freeze indoors", "Can be any product, such as car antifreeze from a store"], "Standards restrict the types and concentrations of antifreeze."],
      ["A sprinkler that has been painted over or coated with residue should be:", "Replaced", ["Cleaned with a wire brush, to take the paint off the frame", "Left in place if the paint is thin and the colour is light", "Painted again to match the colour of the ceiling around it"], "Do not clean or coat sprinklers. Replace them."],
      ["A drain test on the main drain shows a large drop in residual pressure compared to previous tests. This suggests:", "A possible partially closed valve or supply problem to investigate", ["The system is perfect, and no action is needed", "More hangers are needed on the riser to carry the load", "The sprinklers are too big for the pipe that supplies them"], "ITM trends help detect supply changes."],
      ["The authority having jurisdiction (AHJ) is:", "The organization or person responsible for enforcing the code, such as a fire or building official", ["A tool supplier that provides the approved wrenches", "The union that represents the sprinkler fitters on site", "The pipe manufacturer that lists the pipe and fittings"], "Always follow the AHJ's requirements."]
    ])
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety tickets employers ask for (commonly WHMIS, fall protection, aerial lift, and site orientation; requirements vary)", "Contact UA locals and fire protection contractors, and prepare a short resume", "Register your apprenticeship once you have a sponsor and log your hours from day one"] },
    { title: "Year 1: safety, pipe, and tools", items: ["Learn site safety, ladders, lifts, and PPE", "Learn pipe sizes, fittings, hangers, and basic drawings", "Cut, thread, and groove pipe", "Complete your first technical training block", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: layout and installation", items: ["Read fire protection shop drawings and layout lines", "Install hangers, branch lines, and sprinklers to spacing rules", "Learn sprinkler types, temperature ratings, and K-factors", "Learn about valves, alarms, and wet systems"] },
    { title: "Year 3: systems and testing", items: ["Install dry, preaction, and deluge components", "Install risers, backflow preventers, and standpipes", "Learn hydraulic basics and read hydraulic calculations", "Perform and document hydrostatic and air tests"] },
    { title: "Year 4 and beyond: codes, planning, and service", items: ["Work with NFPA 13, 14, 20, 24, and 25 and your provincial codes", "Plan installations around other trades and the building schedule", "Troubleshoot and commission systems", "Mentor first-year apprentices and move toward lead hand duties"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal standard and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["AHJ", "Authority having jurisdiction, the body that enforces the code."],
    ["Alarm check valve", "A one-way valve that sends a signal to alarms when water flows."],
    ["Armover", "A short pipe that connects a branch line to a sprinkler drop."],
    ["Branch line", "A pipe that supplies sprinklers."],
    ["Check valve", "A valve that allows flow in one direction only."],
    ["CPVC", "Chlorinated polyvinyl chloride pipe used in some light hazard systems."],
    ["Cross main", "A pipe that supplies branch lines."],
    ["Deflector", "The part of a sprinkler that spreads the water spray."],
    ["Deluge system", "A system with open sprinklers that flood on detection."],
    ["Density", "Water applied per area, such as 0.15 gpm/ft² or 6.1 L/min per m²."],
    ["Design area", "The area over which the design density applies."],
    ["Dry pipe system", "A system with pressurized air or nitrogen in the pipe, filled with water after a dry valve trips."],
    ["ESFR", "Early suppression fast response sprinkler."],
    ["FDC", "Fire department connection."],
    ["Fire watch", "A person who watches for fire during impairments or hot work."],
    ["Flow switch", "A device that sends a signal when water flows."],
    ["Grooved coupling", "A mechanical joint that grips a groove rolled or cut in the pipe."],
    ["Hanger", "A support that holds pipe in position."],
    ["Hazen-Williams", "A formula for calculating friction loss in pipe."],
    ["Impairment", "A situation where a fire protection system is out of service."],
    ["Inspector's test", "A connection used to simulate flow of one sprinkler."],
    ["K-factor", "A sprinkler discharge coefficient used in Q = K√P."],
    ["Main drain", "A valve used to drain the riser and test the water supply."],
    ["NFPA 13", "The standard for installation of sprinkler systems."],
    ["Obstruction", "An object that interferes with sprinkler discharge."],
    ["OS&Y valve", "Outside screw and yoke gate valve, whose stem shows open or closed."],
    ["Pendent", "A sprinkler that hangs downward."],
    ["Preaction system", "A system where water enters pipe after detection operates a valve."],
    ["Riser", "The vertical supply pipe of a system."],
    ["Sidewall sprinkler", "A sprinkler that discharges from a wall."],
    ["Sprig", "A short vertical pipe that connects a branch to an upright sprinkler."],
    ["Standpipe", "A pipe and hose connections used by fire fighters or occupants."],
    ["Tamper switch", "A device that signals when a control valve is moved."],
    ["Upright", "A sprinkler installed pointing up."],
    ["Wet pipe system", "A system with water in the pipe at all times."]
  ],
  cards: [
    { front: "Flow from a sprinkler", back: "Q = K√P" },
    { front: "Sprinkler bulb colours", back: "Orange 57 °C, red 68 °C, yellow 79 °C, green 93 °C, blue 141 °C, mauve 182 °C" },
    { front: "Elevation pressure for water", back: "About 9.81 kPa per metre (0.433 psi per ft)" },
    { front: "Light hazard maximum coverage", back: "20.9 m² (225 ft²) per standard spray sprinkler" },
    { front: "Ordinary hazard maximum coverage", back: "12.1 m² (130 ft²)" },
    { front: "Hydrostatic test", back: "1 400 kPa (200 psi) for 2 hours, per NFPA 13" },
    { front: "NFPA 13 vs NFPA 25", back: "13 is installation, 25 is inspection, testing, and maintenance" },
    { front: "Standpipe Class I hose connection", back: "65 mm (2-1/2 in)" },
    { front: "Never do this to a sprinkler", back: "Paint it, cover it, or hang things from it" },
    { front: "1 US gpm", back: "About 3.785 L/min" }
  ],
  jobsIntro: "Look for union and signatory fire protection contractors, sprinkler installation and service companies, mechanical contractors with a fire protection division, and building owners with maintenance teams.",
  tips: [
    "Bring a short resume, your safety tickets, and ID.",
    "Show interest in math, drawings, and working overhead.",
    "Visit union halls and contractors in person when you can, and follow up.",
    "Ask what tools and PPE you need and what the employer supplies."
  ],
  forumTopics: ["Starting out", "Sprinkler layout and NFPA 13", "Dry, preaction, and deluge systems", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
  reference: [
    {
      title: "Sprinkler temperature ratings and bulb colours",
      table: {
        head: ["Rating", "Temperature", "Glass bulb colour"],
        rows: [
          ["Ordinary", "57 °C (135 °F)", "Orange"],
          ["Ordinary", "68 °C (155 °F)", "Red"],
          ["Intermediate", "79 °C (175 °F)", "Yellow"],
          ["Intermediate", "93 °C (200 °F)", "Green"],
          ["High", "141 °C (286 °F)", "Blue"],
          ["Extra high", "182 °C (360 °F)", "Mauve"]
        ]
      },
      note: "Confirm with the sprinkler marking and the manufacturer's data."
    },
    {
      title: "Hazard classifications (typical NFPA 13 values)",
      table: {
        head: ["Hazard", "Design density", "Max coverage per sprinkler", "Max spacing"],
        rows: [
          ["Light", "0.10 gpm/ft² (4.1 L/min per m²)", "20.9 m² (225 ft²)", "4.6 m (15 ft)"],
          ["Ordinary Group 1", "0.15 gpm/ft² (6.1 L/min per m²)", "12.1 m² (130 ft²)", "4.6 m (15 ft)"],
          ["Ordinary Group 2", "0.20 gpm/ft² (about 8.1 L/min per m²)", "12.1 m² (130 ft²)", "4.6 m (15 ft)"],
          ["Extra Group 1", "0.30 gpm/ft² (12.2 L/min per m²)", "9.3 m² (100 ft²)", "3.7 m (12 ft)"],
          ["Extra Group 2", "0.40 gpm/ft² (16.3 L/min per m²)", "9.3 m² (100 ft²)", "3.7 m (12 ft)"]
        ]
      },
      note: "Densities are from the typical design curves at the standard design area. Use the current edition of NFPA 13 and your project design."
    },
    {
      title: "Flow, pressure, and K-factor",
      list: [
        "Q = K√P. Imperial: Q in gpm and P in psi. Metric: Q in L/min and P in bar. K5.6 (imperial) is about K80 (metric).",
        "K5.6 at 100 psi gives 56 gpm. K80 at 4 bar gives 160 L/min.",
        "Elevation pressure: 9.81 kPa per metre (0.433 psi per ft) of water.",
        "Hazen-Williams: p = 4.52 × Q^1.85 ÷ (C^1.85 × d^4.87), with p in psi per ft, Q in gpm, and d the inside diameter in inches.",
        "Common C values: 120 for steel in wet systems, 100 for steel in dry and preaction systems, 140 for cement-lined ductile iron, and 150 for copper and CPVC.",
        "1 US gpm = 3.785 L/min. 1 psi = 6.895 kPa. 1 bar = 100 kPa."
      ]
    },
    {
      title: "System types at a glance",
      table: {
        head: ["System", "Pipe contains", "Water enters when"],
        rows: [
          ["Wet", "Water", "A sprinkler operates"],
          ["Dry", "Pressurized air or nitrogen", "A sprinkler operates, air pressure drops, and the dry valve trips"],
          ["Preaction (single interlock)", "Air or nothing, supervised", "Detection operates the valve"],
          ["Preaction (double interlock)", "Pressurized air", "Detection and a sprinkler both operate"],
          ["Deluge", "Air at atmospheric pressure, with open sprinklers", "Detection operates the valve and all sprinklers flow"]
        ]
      }
    },
    {
      title: "Test pressures",
      list: [
        "New wet and dry piping: hydrostatic test at 1 400 kPa (200 psi) for 2 hours, or 350 kPa (50 psi) above the maximum static pressure where that exceeds 1 050 kPa (150 psi).",
        "Dry and preaction piping: air or nitrogen test at 275 kPa (40 psi) for 24 hours, with a loss of no more than 10 kPa (1.5 psi).",
        "Blind off or isolate components not rated for the test pressure, such as some pressure switches and backflow assemblies.",
        "Record all tests on the contractor's material and test certificate."
      ],
      note: "Always follow the current edition of NFPA 13 and the project specification."
    },
    {
      title: "Standards to know",
      list: [
        "NFPA 13 Installation of sprinkler systems. NFPA 13R and 13D cover low-rise residential and one- and two-family dwellings.",
        "NFPA 14 Installation of standpipe and hose systems.",
        "NFPA 20 Installation of stationary pumps for fire protection.",
        "NFPA 24 Private fire service mains.",
        "NFPA 25 Inspection, testing, and maintenance of water-based fire protection systems.",
        "National Building Code of Canada and National Fire Code of Canada, plus provincial versions, adopt or reference these standards.",
        "Always use the edition your province and the authority having jurisdiction require."
      ]
    }
  ]
});
