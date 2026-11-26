// Tower Crane Operator guide. Practice questions are original study aids, not official Red Seal exam questions.

const tcSeq = [1, 0, 3, 2, 2, 3, 0, 1, 0, 2, 1, 3, 3, 1, 2, 0, 1, 3, 0, 2];
const tcBank = (rows, off) => rows.map(([q, right, wrong, explain], i) => {
  const pos = tcSeq[(i + off) % tcSeq.length];
  const options = [...wrong];
  options.splice(pos, 0, right);
  return { q, options, answer: pos, explain };
});

registerTrade({
  id: "tower-crane-operator",
  store: "tower-crane-operator",
  title: "Tower Crane Operator",
  name: "Tower Crane Operator",
  short: "tower crane operation",
  category: "Cranes · Hoisting · High-rise Construction",
  summary: "Tower crane operators run fixed tower cranes high above the site, placing formwork, rebar, precast, and materials precisely using radio communication, load charts, and safety limiting devices.",
  work: "You climb to the cab before the crew arrives and spend the shift high above the site, moving loads by trolley, hoist, and slew on signals from riggers and signal persons. The job demands patience, focus, steady hands, comfort with heights, and strict discipline with wind limits, load charts, and communication.",
  duration: "Varies by province, with training often built on construction, rigging, or crane experience",
  union: "International Union of Operating Engineers (IUOE)",
  unionUrl: "https://www.iuoe.org/",
  jobSearch: "tower crane operator",
  journeySearch: "tower crane operator",
  aliases: "tower crane hammerhead luffing jib self erecting high rise crane operator hoisting rigging signal person red seal construction",
  tools: ["CSA Grade 1 safety boots", "Hard hat, glasses, hearing protection", "Hi-vis gear and warm layers", "Radio headset and spare batteries", "Tool tether and hoist bag", "Binoculars and logbook"],
  insight: {
    skills: ["Smooth control of trolley, hoist, and slew", "Reading charts, moments, and wind limits", "Radio communication and signal discipline", "Pre-shift inspection of limiters and brakes"],
    hazards: ["Working at height: use required fall protection and follow the rescue plan", "Wind: stop lifts above limits and prepare the crane for out-of-service wind", "Load swing and collision: use zoning, limiters, and clear signals", "Overloading: confirm load weight and radius for every lift"],
    settings: ["High-rise residential and commercial buildings", "Bridges, dams, and infrastructure", "Industrial and energy projects", "Hospitals, universities, and large institutional sites"]
  },
  toolGroups: [
    {
      title: "Day-one gear, buy once and buy well",
      note: "Professional-grade PPE and small kit that hold up at height and in all weather. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
      items: [
        { name: "CSA Grade 1 safety boots with grippy soles", why: "Ladders, grated walkways, and wet steel need good traction and protective toes.", search: "CSA Grade 1 safety boots slip resistant Red Wing Terra Blundstone" },
        { name: "CSA Z94.1 hard hat with chin strap", why: "A chin strap keeps your hat on while climbing and looking down. Helmets with vented liners suit hot cabs.", search: "CSA Z94.1 hard hat chin strap climbing helmet Type 1" },
        { name: "Safety glasses (CSA Z94.3) and polarized sunglasses", why: "Glare at height is intense. Keep a clear pair and a tinted pair that meet the standard.", search: "CSA Z94.3 safety glasses tinted polarized Uvex" },
        { name: "Hearing protection and a comfortable radio headset", why: "Radio communication is your lifeline. A headset with a boom mic reduces misheard instructions.", search: "headset boom microphone radio noise cancelling jobsite 3M Peltor" },
        { name: "High-visibility jacket or vest (CSA Z96)", why: "Ground crews and riggers should be able to identify you at the base of the crane.", search: "CSA Z96 class 2 hi vis jacket" },
        { name: "Warm gloves and thin work gloves", why: "Ladders and cold cabs are hard on hands. Thin gloves keep dexterity for controls.", search: "insulated work gloves thin touchscreen Mechanix" },
        { name: "Layered clothing and windproof shell", why: "Temperatures at the cab can differ sharply from ground level.", search: "merino base layer windproof shell jacket construction" },
        { name: "Headlamp and small flashlight", why: "Pre-dawn climbs and inspections need reliable light.", search: "Petzl headlamp rechargeable flashlight" },
        { name: "Thermos, lunch cooler, and water bottle with a secure lid", why: "You are in the cab for hours with limited breaks. Pack for the whole shift.", search: "insulated lunch cooler thermos leakproof water bottle" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your operator and site safety lead what is permitted in the cab and on the ladder.",
      items: [
        { name: "Climb-friendly backpack or hoist bag with a closed top", why: "Carry your kit up the ladder without loose items that could fall. Follow site rules about how to carry things.", search: "closed top tool bag backpack climbing small lid" },
        { name: "Tool tether lanyards", why: "Dropped objects are a major hazard at height. Tether small items such as radios, tape, and knives.", search: "tool tether lanyard dropped object prevention" },
        { name: "Binoculars (8x42)", why: "See load rigging, landing zones, and signals at distance. Check site rules about use.", search: "binoculars 8x42 compact waterproof" },
        { name: "Handheld anemometer", why: "A secondary check on wind speed alongside the crane's own anemometer.", search: "handheld anemometer wind speed meter Kestrel" },
        { name: "Radio spare batteries and charger", why: "A dead radio can stop a lift or leave you out of contact. Keep spares charged.", search: "Motorola radio spare battery charger" },
        { name: "Seat cushion and lumbar support (if permitted)", why: "Long hours in the seat. Ask before modifying a company cab.", search: "lumbar support seat cushion heavy equipment" },
        { name: "Hand signal reference card", why: "Keep standard signals fresh while you learn.", search: "crane hand signals card pocket" },
        { name: "Field notebook and pen", why: "Record weather, load notes, and any issues. A site log may also be required.", search: "Rite in the Rain notebook pen" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the employer or erector. Ask before buying.",
      items: [
        { name: "Full-body harness and lanyards (CSA Z259)", why: "Needed for climbing and working on the jib or counter-jib. Training comes first and the employer normally supplies it.", search: "CSA Z259 full body harness lanyard 3M DBI-SALA" },
        { name: "Emergency descent or rescue device (awareness)", why: "Part of the site rescue plan. Supplied and inspected by the employer, with training.", search: "rescue descent device tower crane emergency" },
        { name: "Handheld radio with a dedicated crane channel", why: "Provided by the site or company, with a clear channel protocol.", search: "Motorola two way radio jobsite waterproof" },
        { name: "Respirator (half-mask, P100 or N95)", why: "Dust or fumes at some sites. Fit testing is required.", search: "3M half mask respirator P100 N95" },
        { name: "Personal first aid kit", why: "Pack a small kit for the cab. A full kit is on site.", search: "compact first aid kit CSA" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for load moments, trigonometry, and rigging. Check with your school and exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Moments, radii, angles, and unit conversions.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Protractor and drafting triangles", why: "Sketch lifts, sling angles, and jib positions.", search: "Staedtler protractor drafting triangle set" },
        { name: "Mechanical pencils (0.5 mm) and vinyl erasers", why: "Clean notes and neat sketches.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm" },
        { name: "Engineer's scale and 30 cm ruler", why: "Reading site plans and crane location drawings.", search: "engineer scale metric triangular ruler 30 cm" },
        { name: "Graph paper pad", why: "Plot radius circles and check oversail and clearances.", search: "graph paper pad 5mm grid" },
        { name: "Highlighters and binder with dividers", why: "Organize notes on charts, rigging, and regulations.", search: "highlighters binder dividers tabs" },
        { name: "Printed or offline copy of your province's cranes and hoisting rules", why: "Tower crane rules vary by province, and CSA Z248 is a key reference. Use your own province's current text.", search: "CSA Z248 code for tower cranes" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare, plus trade profiles.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "International Union of Operating Engineers (IUOE)", desc: "Crane operator training and apprenticeship information.", url: "https://www.iuoe.org/" },
        { name: "CSA Group", desc: "Publisher of CSA Z248, the Canadian code for tower cranes, and PPE standards.", url: "https://www.csagroup.org/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Plain-language safety fact sheets, WHMIS, and working-at-heights information.", url: "https://www.ccohs.ca/" },
        { name: "Infrastructure Health & Safety Association (IHSA)", desc: "Ontario construction safety training and hoisting resources.", url: "https://www.ihsa.ca/" },
        { name: "WorkSafeBC", desc: "BC regulations and guides on cranes and fall protection.", url: "https://www.worksafebc.com/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your crane's manual, load chart, training materials, and provincial regulations.",
      items: [
        { name: "Tower crane parts explained", desc: "Mast, jib, counter-jib, trolley, slew unit, and cab.", url: "https://www.youtube.com/results?search_query=tower+crane+parts+explained+mast+jib+counter+jib+trolley" },
        { name: "How a tower crane climbs", desc: "Climbing frame, mast sections, and tie-ins.", url: "https://www.youtube.com/results?search_query=how+a+tower+crane+climbs+telescoping+mast+section" },
        { name: "Tower crane operator cab view", desc: "Controls, communication, and typical lifts from the cab.", url: "https://www.youtube.com/results?search_query=tower+crane+operator+cab+view+controls" },
        { name: "Tower crane load charts", desc: "Reading radius, capacity, and moment limits.", url: "https://www.youtube.com/results?search_query=tower+crane+load+chart+explained+radius+capacity" },
        { name: "Tower crane safety devices", desc: "Limit switches, load limiter, and anemometer.", url: "https://www.youtube.com/results?search_query=tower+crane+safety+devices+limit+switch+load+limiter" },
        { name: "Tower crane wind and weathervane", desc: "Out-of-service wind and free slew.", url: "https://www.youtube.com/results?search_query=tower+crane+wind+weathervane+out+of+service" },
        { name: "Luffing jib vs hammerhead tower crane", desc: "How the two main types differ.", url: "https://www.youtube.com/results?search_query=luffing+jib+vs+hammerhead+tower+crane" },
        { name: "Tower crane signals and radio communication", desc: "Radio protocol and hand signals.", url: "https://www.youtube.com/results?search_query=tower+crane+signals+radio+communication+rigger" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for tower crane work yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: tower crane operator career podcast", desc: "Open the results and listen with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=tower+crane+operator+career+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: tower crane operator stories (listen-along)", desc: "Operators describing the work, weather, and lessons.", url: "https://www.youtube.com/results?search_query=tower+crane+operator+stories+podcast" },
        { name: "YouTube: rigging and signal person talks", desc: "Rigging practices and communication on site.", url: "https://www.youtube.com/results?search_query=rigging+signal+person+safety+talk+podcast" },
        { name: "YouTube: high-rise construction podcast", desc: "Sequencing and site logistics on tall buildings.", url: "https://www.youtube.com/results?search_query=high+rise+construction+logistics+podcast" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "For lift planning, engineering coordination, and leadership as you move toward the Red Seal and lead roles.",
      items: [
        { name: "YouTube: crane lift planning and engineering podcast", desc: "Critical lifts, foundations, and site layout.", url: "https://www.youtube.com/results?search_query=crane+lift+planning+engineering+podcast" },
        { name: "YouTube: crane incident lessons learned", desc: "Investigations and prevention themes.", url: "https://www.youtube.com/results?search_query=tower+crane+incident+lessons+learned+safety+podcast" },
        { name: "YouTube: Red Seal exam study tips (crane operator)", desc: "Preparing for trade exams and managing test anxiety.", url: "https://www.youtube.com/results?search_query=red+seal+exam+study+tips+crane+operator" }
      ]
    }
  ],
  practiceBank: {
    1: tcBank([
      ["On a hammerhead tower crane, the counter-jib carries:", "The counterweights", ["The operator's lunch", "The hook block", "The anemometer only"], "Counterweights on the counter-jib balance the load on the working jib."],
      ["On a tower crane, load radius is measured from:", "The slewing axis (mast centre) to the centre of the hook", ["The jib tip to the ground", "The cab to the hook", "The base to the cab"], "Capacity depends on how far the load is from the centre of rotation."],
      ["The trolley on a hammerhead crane:", "Moves the hook in and out along the jib", ["Raises the mast", "Rotates the jib", "Locks the brake"], "Trolley position sets the radius."],
      ["Slewing means:", "Rotating the jib around the mast", ["Moving the trolley", "Lowering the hook", "Climbing the mast"], "Slew is the rotation of the upper structure."],
      ["Before lifting a load of unknown weight you should:", "Find out its weight from documents or the rigger", ["Guess and lift slowly", "Lift it to test", "Ask no one"], "Unknown weights are a major cause of overloads."],
      ["Which describes a safety latch on a hook?", "A device that keeps slings from slipping off the hook", ["A radio button", "A brake", "A ladder step"], "Latches must be present and working."],
      ["The signal for stop from anyone on site should be:", "Obeyed immediately by the operator", ["Ignored unless from the foreman", "Questioned first", "Acknowledged after the lift"], "Anyone can give a stop signal, and the operator stops and clarifies."],
      ["1 tonne is:", "1,000 kg", ["100 kg", "2,000 kg", "10,000 kg"], "A metric tonne is 1,000 kg, about 2,204.6 lb."],
      ["40 m is about:", "131 ft", ["12 ft", "40 ft", "400 ft"], "40 × 3.281 = 131.2 ft."],
      ["WHMIS stands for:", "Workplace Hazardous Materials Information System", ["Weather and Hoist Machine Inspection System", "Worksite Heavy Material Inspection Standard", "Workplace Height Materials Information Sheet"], "WHMIS covers labels, SDSs, and training for hazardous products."],
      ["When climbing the access ladder, you should:", "Keep three points of contact and use the required fall protection", ["Carry loose tools in your hands", "Climb quickly with no gear", "Skip the breaks"], "Follow the site's fall protection plan and ladder system."],
      ["A load limiter on a tower crane:", "Prevents lifting beyond rated limits", ["Increases speed", "Measures wind", "Steers the crane"], "Limiters stop or warn when the load or moment exceeds settings."],
      ["Before the first lift of the shift you should:", "Test brakes, limit switches, emergency stop, and controls per the manual", ["Lift to see if it works", "Skip checks if it passed yesterday", "Wait for a manager"], "Daily checks catch defects before lifts."],
      ["A tower crane is:", "Fixed to a foundation or structure and not self-propelled", ["A rubber-tired crane for highways", "A truck crane", "A crawler crane"], "Tower cranes are erected at one location. Self-erecting types are still fixed in use."],
      ["The best way to communicate with ground crew during lifts is:", "A dedicated radio channel plus agreed hand signals", ["Shouting", "Texting", "Guessing"], "Reliable, agreed communication prevents errors."]
    ], 0),
    2: tcBank([
      ["Trolley limit switches:", "Stop the trolley at its inner and outer limits", ["Start the engine", "Measure wind", "Lock the mast"], "They prevent the trolley from travelling beyond its safe range."],
      ["The hoist upper limit switch prevents:", "The hook block from reaching the jib trolley (two-blocking)", ["The trolley moving", "The jib slewing", "The mast climbing"], "It stops hoisting before the block contacts the trolley."],
      ["Compared with a 2-fall reeving, a 4-fall reeving gives:", "Higher lifting capacity at a slower hook speed", ["Faster hook speed", "No change", "Lower capacity"], "More parts of line share the load and reduce hook speed."],
      ["On a tower crane load chart, capacity is:", "Highest at the minimum radius and lowest at the maximum radius", ["Highest at maximum radius", "Constant", "Zero at minimum radius"], "Load moment increases with radius."],
      ["A 5 t load at 40 m radius has a load moment of:", "200 t·m", ["45 t·m", "8 t·m", "2,000 t·m"], "Moment = load × radius = 5 × 40 = 200 t·m."],
      ["A concrete bucket holds 2.0 m³ of concrete at about 2,400 kg/m³, and the empty bucket weighs 600 kg. Total weight is:", "5,400 kg", ["4,800 kg", "6,000 kg", "3,000 kg"], "2.0 × 2,400 = 4,800 kg, plus 600 kg for the bucket."],
      ["A slew zoning (limit) system helps by:", "Preventing the jib from rotating into restricted areas", ["Cooling the motor", "Replacing the signal person", "Lighting the cab"], "Zones protect occupied buildings and roads."],
      ["Dragging or side-pulling a load with a tower crane:", "Must be avoided, because lifts should be vertical", ["Is fine for small loads", "Is allowed in wind", "Is how to move formwork"], "Side loads can overload the jib and mast."],
      ["A luffing jib crane is useful because:", "It changes radius by raising or lowering the jib, and it can work in tight spaces", ["It has no jib", "It never needs ties", "It lifts any load"], "Luffing jibs can work where a long horizontal jib cannot swing."],
      ["A self-erecting tower crane is:", "A smaller crane that unfolds and erects using its own mechanisms", ["A crane that builds buildings alone", "A crawler crane", "A truck crane"], "They are quick to set up on small sites with height limits."],
      ["Why are many tower crane hoist ropes rotation-resistant?", "To reduce rope twisting and load rotation on long drops", ["To look nicer", "To make them lighter", "To increase noise"], "Ropes that do not twist keep the hook block steadier."],
      ["The maximum free-standing height of a tower crane is:", "Set by the manufacturer and the foundation design", ["Unlimited", "Always 30 m", "Set by the operator"], "Above that height, the crane needs ties or an internal supporting structure."],
      ["A wind speed alarm means you should:", "Follow the manufacturer's limits and stop lifting if exceeded", ["Lift faster", "Ignore it", "Move bigger loads"], "Wind limits depend on the crane model and load sail area."],
      ["The operator's daily log should record:", "Inspection results, defects, and unusual events", ["Lunch menus", "Fuel prices", "Radio brands"], "Records show a history of the crane's condition."],
      ["Which should be done when a load hangs on the hook at the end of the day?", "Land the load or secure it according to the site plan before leaving the cab", ["Leave it hanging over the street", "Raise it to the maximum", "Slew it over the entrance"], "Loads should not be left suspended."]
    ], 5),
    3: tcBank([
      ["Before climbing a tower crane, the crane is balanced so that:", "The forces on the climbing frame and mast are even during the climb", ["The hook is heavier", "The mast sways", "The jib rotates fast"], "Balancing ensures stability. Slewing and hoisting are not allowed during climbing."],
      ["An internal climbing tower crane:", "Sits in the building core and transfers loads to the structure", ["Stands on tracks", "Needs no engineering", "Has no mast"], "The structure must be designed for the crane's loads."],
      ["Ties between a tower crane and the building are:", "Designed and installed according to the manufacturer and engineer", ["Added at random", "Optional above any height", "Made of rope"], "Tie loads must be supported by the structure."],
      ["When two tower cranes overlap, you should:", "Follow a plan with height separation, zoning, and anti-collision systems", ["Share the same height", "Rely only on luck", "Use hand signals only"], "Overlapping work areas need clear rules."],
      ["Oversailing adjacent property with a jib or load:", "May require agreements or permits and must be planned", ["Is always allowed", "Is never mentioned", "Is up to the operator"], "Requirements vary and are managed by the contractor."],
      ["During a blind lift, where you cannot see the load or landing zone, you should:", "Rely on a qualified signal person with radio contact", ["Guess", "Lift anyway", "Use a bell"], "Camera systems can help, but the signal person stays responsible for communication."],
      ["A large flat panel in wind:", "Has a large sail area, so wind limits for that lift may be lower", ["Is lighter in wind", "Is unaffected", "Needs no tag lines"], "Sail area changes how wind affects the load."],
      ["A hoist drum should keep:", "The minimum number of rope wraps specified by the manufacturer at lowest hook position", ["No rope", "Only one wrap", "Rope tied in a knot"], "Minimum wraps help prevent the rope pulling off the drum."],
      ["Before erecting a crane, the foundation concrete must:", "Reach the strength required by the engineer", ["Be wet", "Be painted", "Be covered by mud"], "Premature loading can cause failure."],
      ["Ice on the jib or load in cold weather:", "Must be removed or the lift postponed because falling ice is hazardous", ["Is harmless", "Increases capacity", "Helps traction"], "Falling ice endangers workers below."],
      ["Maintenance on electrical parts of a crane requires:", "Lockout and a qualified person", ["Any helper", "Working while energized", "No tags"], "Lockout prevents unexpected energization."],
      ["After erection or climbing, the crane should be:", "Inspected and tested as the standard and manufacturer require before use", ["Used immediately", "Tested by riggers", "Covered with a tarp"], "Documented inspection confirms safe condition."],
      ["Aircraft warning lights or marking on tall cranes may be required:", "Near airports or flight paths under aviation rules", ["Never", "Only for mobile cranes", "Only in winter"], "Check with the contractor and aviation authorities."],
      ["Fatigue at height can be reduced by:", "Planned breaks and relief operators where available", ["Skipping breaks", "Working extra hours", "Drinking less water"], "Fatigue impairs judgment and reaction time."],
      ["Working near energized overhead lines requires:", "Knowing the minimum approach distance and keeping clear, including load sway", ["Ignoring lines", "Touching to test", "Working at night"], "Required distances depend on voltage and jurisdiction."]
    ], 10),
    4: tcBank([
      ["Before leaving a tower crane unattended in high wind, you should:", "Follow the manufacturer's out-of-service procedure, including freeing the slew to weathervane", ["Lock the slew brake", "Leave loads hanging", "Move the trolley to the jib tip"], "A free-slewing jib points downwind and reduces wind load on the structure."],
      ["If the radius falls between two chart values, the capacity to use is:", "The value for the next larger radius", ["The larger capacity", "An average of both", "Any value"], "Using the larger radius gives a conservative capacity."],
      ["The crane's rated moment is 500 t·m. Ignoring maximum load limits, the largest load at 25 m is:", "20 t", ["12.5 t", "25 t", "125 t"], "500 ÷ 25 = 20 t."],
      ["With 4-fall reeving, an 8 t load causes a line pull of about:", "2 t", ["8 t", "4 t", "32 t"], "Line pull = load ÷ parts = 8 ÷ 4 = 2 t, ignoring friction and block weight."],
      ["If the drum line speed is 100 m/min, hook speed with 2-fall reeving is:", "50 m/min", ["100 m/min", "200 m/min", "25 m/min"], "Hook speed = line speed ÷ parts of line."],
      ["The trolley will not move outward but moves inward. A likely cause is:", "A limit switch or moment limiter cutting out the outward motion", ["A new hard hat", "An empty thermos", "A bad ladder"], "Check the limiters, status lights, and manual troubleshooting steps."],
      ["If hoist brakes appear to slip, you should:", "Stop lifting and have it repaired before using the crane", ["Reduce the load and continue", "Apply more weight", "Ignore it"], "Brake faults are an immediate hazard."],
      ["A rescue plan for tower crane operators is:", "Required so a person at height can be reached and brought down safely", ["Optional", "Only for ground workers", "Only for night shifts"], "Rescue at height needs planning and equipment."],
      ["If you change the reeving, you must:", "Update the limiter settings and the chart used", ["Do nothing", "Only tell the foreman", "Replace the cab"], "Wrong settings give incorrect limits."],
      ["A lift plan for a complex pick should include:", "Load weight, radius, rigging, landing zone, communications, and exclusion zones", ["Only the date", "The colour of the load", "No details"], "Planning reduces risk."],
      ["Dismantling a tower crane should be done:", "By qualified workers following the manufacturer's procedure and wind limits", ["By anyone nearby", "In any weather", "Without a plan"], "Dismantling reverses erection with similar hazards."],
      ["Which is true of smooth slewing and trolley control?", "It reduces load swing and stress on the jib", ["It increases load swing", "It has no effect", "It reduces capacity"], "Smooth starts and stops are part of good operation."],
      ["After a serious crane incident, you should:", "Secure the area, assist as directed, and report as required by law", ["Leave quietly", "Move the evidence", "Restart immediately"], "Serious incidents must be reported to the regulator in most jurisdictions."],
      ["Which records should be kept for a tower crane?", "Inspection, maintenance, testing, and repair records", ["Only fuel receipts", "Lunch logs", "Weather forecasts only"], "Records show compliance and condition history."],
      ["Lifting over occupied areas or people:", "Should be avoided unless the plan and regulations permit and protect those below", ["Is routine", "Is fine at night", "Needs no plan"], "Avoid suspended loads over people."],
      ["A tower crane overload alarm sounds at the maximum radius. You should:", "Stop, return to a safe radius if possible, and verify the load weight", ["Silence the alarm", "Continue slewing", "Increase hoist speed"], "Never override an overload alarm."]
    ], 15)
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements and the training route with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS, first aid, fall protection, rigging, and signal person awareness; requirements vary)", "Many tower crane operators come from rigging, labouring, or other equipment work, so ask employers and unions how they select trainees", "Register your apprenticeship or training once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: safety, rigging, and signals", items: ["Learn tower crane parts, PPE, and working-at-heights rules", "Learn rigging basics, hand signals, and radio communication", "Observe pre-shift checks and daily records", "Understand site layout, wind, and exclusion zones", "Build your personal kit (see Buying tools)"] },
    { title: "Year 2: charts, limiters, and control", items: ["Read load charts, moments, and reeving effects", "Learn limiters, limit switches, and zoning systems", "Practise controls in training or simulation and under supervision", "Learn wire rope, drums, and hook block inspection"] },
    { title: "Year 3: wind, climbing, and site interaction", items: ["Learn wind limits and out-of-service procedures", "Understand climbing, ties, and internal climbing cranes", "Coordinate with overlapping cranes and neighbouring sites", "Practise lifts with complex loads, such as formwork and precast"] },
    { title: "Year 4 and beyond: planning and leadership", items: ["Plan complex lifts with engineers and riggers", "Work with erectors on erection, climbing, and dismantling", "Mentor new operators and signal persons", "Use the Red Seal standard to find gaps in your experience"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check federal completion grant and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["Anemometer", "An instrument that measures wind speed."],
    ["Anti-collision system", "A system that prevents crane parts from hitting each other or structures."],
    ["Apex", "The top of the tower head that supports the jib tie bars."],
    ["Balance", "The state where the crane's moments are even, as needed for climbing."],
    ["Climbing frame", "The device that lifts the upper crane to insert new mast sections."],
    ["Counter-jib", "The short arm that carries counterweights."],
    ["Counterweight", "Concrete or steel weights that balance the load."],
    ["Fall", "One line of rope in a reeving system, also called a part."],
    ["Free-standing height", "The height a crane can reach without ties."],
    ["Hammerhead crane", "A tower crane with a horizontal jib and a trolley."],
    ["Hoist winch", "The winch that raises and lowers the hook."],
    ["Jib", "The working arm of a tower crane that carries the trolley."],
    ["Limit switch", "A device that stops motion at a set point."],
    ["Load moment", "Load weight multiplied by radius."],
    ["Load moment limiter", "A device that prevents loads that exceed the rated moment."],
    ["Luffing jib", "A jib that raises and lowers to change radius."],
    ["Mast", "The vertical tower of the crane, made of sections."],
    ["Oversail", "To swing a jib or load over property outside the site."],
    ["Radius", "Horizontal distance from the slewing axis to the hook."],
    ["Reeving", "The rope path through sheaves, which sets the number of falls."],
    ["Self-erecting crane", "A smaller tower crane that unfolds and erects itself."],
    ["Slew", "Rotation of the jib around the mast."],
    ["Slewing unit", "The assembly that lets the upper crane rotate."],
    ["Tie", "A structural link between the mast and the building."],
    ["Trolley", "The carriage on the jib that moves the hook in and out."],
    ["Weathervane", "To allow the jib to rotate freely and point downwind."],
    ["Zoning", "Software or switches that keep the crane out of restricted areas."]
  ],
  cards: [
    { front: "Load moment", back: "Load × radius." },
    { front: "Capacity vs radius", back: "Highest at the shortest radius and lowest at the longest." },
    { front: "4-fall vs 2-fall reeving", back: "More capacity, slower hook speed." },
    { front: "Hook speed", back: "Line speed ÷ parts of line." },
    { front: "Out of service in high wind", back: "Follow the manufacturer's procedure and free the slew so the jib can weathervane." },
    { front: "Between two chart radii", back: "Use the capacity at the next larger radius." },
    { front: "Trolley limit switch", back: "Stops the trolley at inner and outer limits." },
    { front: "Stop signal", back: "Obey it immediately from anyone." },
    { front: "Climbing rule", back: "Balance the crane, and no slewing or hoisting during the climb." },
    { front: "Never", back: "Side-pull a load, override a limiter, or lift an unknown weight." }
  ],
  jobsIntro: "Tower crane jobs are often with crane rental firms, large general contractors, and union halls such as IUOE locals, in cities with high-rise or infrastructure work. Employers often value rigging, signal person, and mobile crane experience, so ask what training and hours they expect.",
  tips: [
    "Treat the wind forecast as part of your daily plan, not an afterthought.",
    "Confirm signals and radio channels before the first lift of every shift.",
    "Never bypass or ignore a limiter, even for one lift.",
    "Keep your hours logbook current and signed by your sponsor."
  ],
  forumTopics: [
    "Starting out as a tower crane operator",
    "Red Seal and exam prep",
    "Tools and gear",
    "Province and code questions",
    "Working at height and rescue planning",
    "Wind, climbing, and out-of-service procedures"
  ],
  reference: [
    {
      title: "Key formulas",
      list: ["Load moment = load × radius, in t·m", "Maximum load at a radius (moment limit) = rated moment ÷ radius", "Line pull ≈ load ÷ parts of line (ignoring friction and block weight)", "Hook speed = line speed ÷ parts of line", "Percent of capacity = load ÷ chart capacity × 100", "Concrete weight ≈ volume × 2,400 kg/m³"]
    },
    {
      title: "Tower crane types",
      table: { head: ["Type", "Features", "Typical use"], rows: [["Hammerhead (top-slewing)", "Horizontal jib, trolley, counter-jib", "General high-rise and infrastructure work"], ["Luffing jib", "Jib raises and lowers to set radius", "Tight sites and where oversail is limited"], ["Self-erecting", "Folds and erects with its own mechanisms", "Small sites, houses, and low-rise"], ["Internal climbing", "Sits in building core and climbs with it", "Tall buildings with limited ground space"]] }
    },
    {
      title: "Main safety devices",
      table: { head: ["Device", "Purpose"], rows: [["Load limiter", "Stops lifting over the maximum rated load"], ["Load moment limiter", "Stops loads that exceed the rated moment at a radius"], ["Trolley limit switches", "Stop the trolley at inner and outer limits"], ["Hoist limit switches", "Stop the hook before two-blocking or running out of rope"], ["Slew limit and zoning", "Keep the jib out of restricted areas"], ["Anemometer", "Measures wind speed and warns of limits"], ["Anti-collision system", "Prevents crane-to-crane or crane-to-structure contact"]] },
      note: "Never bypass or ignore a limiter. Test limiters as your manufacturer's manual requires."
    },
    {
      title: "Wind and out-of-service checklist (general)",
      list: ["Check the forecast and the crane's wind limits before the shift", "Stop lifting if wind or gusts exceed the manufacturer's limit for the load", "Land or secure all loads and rigging", "Park the trolley, hook block, and jib as the manual specifies", "Release the slew brake so the jib can weathervane", "Switch off power as directed and secure the cab", "Report any issues to your supervisor"],
      note: "Details differ by crane model. The manufacturer's manual and your site procedure are the final word."
    },
    {
      title: "Conversions",
      list: ["1 tonne = 1,000 kg ≈ 2,204.6 lb", "1 m = 3.281 ft and 1 in = 25.4 mm", "1 km/h ≈ 0.278 m/s ≈ 0.621 mph", "1 m/s ≈ 3.6 km/h", "1 kN ≈ 101.97 kgf", "1 m³ ≈ 1.308 yd³"]
    },
    {
      title: "Pre-shift inspection checklist",
      list: ["Emergency stop, brakes, and control functions", "Limit switches and load limiter tests per the manual", "Wire rope, hook block, and safety latch", "Anemometer and wind displays", "Ladders, platforms, handrails, and fall arrest systems", "Cab condition: windows, heater, radio, and fire extinguisher", "Record any defects and report them before lifting"]
    },
    {
      title: "Standards and regulation pointers",
      list: ["CSA Z248 is the Canadian code for tower cranes", "Your provincial OHS regulation sets rules for cranes, hoisting, working at heights, and operator qualification", "CSA standards cover PPE: Z94.1 hard hats, Z94.3 eye protection, Z94.2 hearing, Z96 high-visibility garments, and Z259 fall protection", "WHMIS and SDSs apply to oils, greases, and cleaners", "The manufacturer's manual and load chart are the final word on capacity"],
      note: "Rules vary by province. Use your own jurisdiction's current text."
    }
  ]
});
