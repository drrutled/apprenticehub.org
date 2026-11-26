// Heavy Equipment Operator (Tractor-Loader-Backhoe) guide. Practice questions are original study aids, not official Red Seal exam questions.

const hoeSeq = [3, 1, 2, 0, 0, 2, 1, 3, 2, 3, 1, 0, 1, 3, 0, 2, 1, 0, 3, 2];
const hoeBank = (rows, off) => rows.map(([q, right, wrong, explain], i) => {
  const pos = hoeSeq[(i + off) % hoeSeq.length];
  const options = [...wrong];
  options.splice(pos, 0, right);
  return { q, options, answer: pos, explain };
});

registerTrade({
  id: "heo-backhoe",
  store: "heo-backhoe",
  title: "Heavy Equipment Operator (Tractor-Loader-Backhoe)",
  name: "Heavy Equipment Operator (Tractor-Loader-Backhoe)",
  short: "backhoe-loader operation",
  category: "Heavy Equipment · Excavation · Site Services",
  summary: "Tractor-loader-backhoe operators use one rubber-tired machine to dig, load, carry, backfill, and grade on small to mid-sized jobs, often moving between sites on their own wheels.",
  work: "You work outdoors on service connections, small trenches, landscaping, municipal repairs, and site cleanup. The machine switches between loader and backhoe work all day, so you need good judgment on stabilizers, load carrying, buried services, and public roads and sidewalks close to the work.",
  duration: "Usually 2–3 years of hours-based training, varies by province",
  union: "International Union of Operating Engineers (IUOE)",
  unionUrl: "https://www.iuoe.org/",
  jobSearch: "backhoe loader operator apprentice",
  journeySearch: "backhoe operator",
  aliases: "backhoe loader tlb tractor loader backhoe 580 420 digger operator heavy equipment operator backhoe red seal municipal public works",
  tools: ["CSA Grade 1 safety boots", "Hard hat, glasses, hearing protection", "Hi-vis gear and gloves", "Grease gun and tire gauge", "Shovel and spade for hand digging", "Logbook and inspection sheets"],
  insight: {
    skills: ["Switching between loader and backhoe work", "Setting stabilizers and digging to depth", "Safe travel on sites and public roads", "Hand digging and locating utilities"],
    hazards: ["Tip-over from soft ground or uneven stabilizer pads: set up on firm, level ground", "Swing and loader strikes: keep people clear of both ends", "Utility strikes: locate and hand dig near marks", "Public road travel: lights, signs, and attention to traffic"],
    settings: ["Municipal public works and utilities", "Residential service connections and landscaping", "Farms, acreages, and rural contractors", "Small commercial and site-cleanup jobs"]
  },
  toolGroups: [
    {
      title: "Day-one gear, buy once and buy well",
      note: "Professional-grade PPE and small kit built for mud, cold, and long shifts. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
      items: [
        { name: "CSA Grade 1 waterproof safety boots", why: "Protection from falling rock, pipe, and crushing. Good tread is vital on cab steps and muddy ground.", search: "CSA Grade 1 waterproof safety boots Red Wing Terra Dakota" },
        { name: "CSA Z94.1 hard hat with chin strap", why: "Needed whenever you leave the cab, especially near trenches and traffic.", search: "CSA Z94.1 hard hat Type 1 chin strap" },
        { name: "Safety glasses (CSA Z94.3), clear and tinted", why: "Debris, dust, and spray are common on small digging jobs.", search: "CSA Z94.3 safety glasses tinted anti fog" },
        { name: "Hearing protection: earmuffs and plugs", why: "Engine, hammer, and hydraulic noise add up across a day.", search: "3M Peltor earmuffs earplugs CSA" },
        { name: "High-visibility vest or jacket (CSA Z96)", why: "You work near roads and sidewalks where drivers and pedestrians need to see you.", search: "CSA Z96 class 2 hi vis vest" },
        { name: "Work gloves, cut-resistant and insulated", why: "Hands are exposed to bucket teeth, chain, and winter cold.", search: "Mechanix insulated winter work gloves cut resistant" },
        { name: "Rain suit and rubber over-boots", why: "Wet trenches and fuelling in the rain are routine.", search: "hi vis rain suit work rubber overboots" },
        { name: "Headlamp and small flashlight", why: "Checking undercarriage, hoses, and tight spots on the machine.", search: "Petzl headlamp rechargeable flashlight work" },
        { name: "Thermos, lunch cooler, and water bottle", why: "Short breaks and mobile jobs mean you need your own food and water.", search: "insulated lunch cooler thermos jobsite" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your operator and foreman what holds up on your sites.",
      items: [
        { name: "Grease gun and cartridges", why: "A backhoe loader has many pins and bushings that need daily greasing.", search: "Lincoln lever grease gun Milwaukee grease gun 14 oz" },
        { name: "Spade, round-point shovel, and a trenching shovel", why: "Hand digging around utilities and cleaning trench bottoms is part of the job.", search: "fiberglass round point shovel trenching spade" },
        { name: "Tire pressure gauge (0 to 100 psi)", why: "Tire pressure affects stability, traction, and wear. Check with the machine's specified values.", search: "heavy duty tire pressure gauge dial 100 psi" },
        { name: "Hand level, grade rod, and 7.5 m tape", why: "Checking trench depth and elevations from a stake or benchmark.", search: "Johnson hand level grade rod Stanley FatMax tape" },
        { name: "Marking paint, flags, and lumber crayon", why: "Mark spoil, hazards, and utility offsets using the site's locate colour codes.", search: "Markal marking paint utility flags lumber crayon" },
        { name: "Funnel set, rags, and a small spill kit", why: "Top up fluids cleanly and manage small spills as your employer's procedures describe.", search: "oil funnel set portable spill kit shop rags" },
        { name: "Jumper cables or a booster pack", why: "Cold-weather starts. Follow your manual's jump-start sequence.", search: "heavy duty jumper cables lithium booster pack" },
        { name: "Cold-weather layers and boot insoles", why: "Winter work is common. Warm, dry operators concentrate better.", search: "merino base layer balaclava winter boot insoles" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the employer or tied to a specific job. Ask before buying.",
      items: [
        { name: "Full-body harness and lanyard (CSA Z259)", why: "For work from trailers or elevated tasks. Training comes first and the employer normally supplies it.", search: "CSA Z259 full body harness lanyard" },
        { name: "Respirator (half-mask, P100 or N95)", why: "Saw-cutting dust and contaminated soil need the right respiratory protection and fit testing.", search: "3M half mask respirator P100 N95 fit testing" },
        { name: "Hand-held gas detector", why: "For sewer and confined work where gases collect. Supplied and calibrated by the employer.", search: "personal 4 gas detector confined space monitor" },
        { name: "Two-way radio or headset", why: "Coordination with spotters, crews, and traffic control. Typically company-issued.", search: "Motorola two way radio jobsite waterproof" },
        { name: "Traffic control kit awareness: cones, signs, and flags", why: "Roadside work requires a traffic control plan. Employers supply these and train you in their use.", search: "traffic cones safety signs flagger paddle CSA" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for trench math, hydraulics, and safety courses. Check with your school and exam body about calculator rules before you buy.",
      items: [
        { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Volumes, percentages, and unit conversions.", search: "Casio fx-991 Texas Instruments TI-30XS" },
        { name: "30 cm metric ruler and engineer's scale", why: "Reading site and service plans.", search: "engineer scale metric 12 inch triangular ruler" },
        { name: "Mechanical pencils (0.5 mm) and vinyl eraser", why: "Notes, sketches, and exam work.", search: "Pentel GraphGear 1000 mechanical pencil 0.5mm" },
        { name: "Graph paper and a pocket slope calculator card", why: "Sketch trench profiles and practise slope math.", search: "graph paper pad slope calculator card" },
        { name: "Highlighters and tabbed dividers", why: "Organize notes from hydraulics, safety, and regulations modules.", search: "highlighters binder dividers tabs" },
        { name: "Rite in the Rain notebook", why: "Weatherproof logs of hours and daily tasks.", search: "Rite in the Rain field notebook" },
        { name: "Printed or offline copy of your province's OHS excavation rules", why: "Trench, spoil, and mobile equipment rules vary by province. Use your own province's current text.", search: "occupational health and safety construction regulations Canada excavation" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare, plus trade profiles.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "International Union of Operating Engineers (IUOE)", desc: "Operator training and apprenticeship information.", url: "https://www.iuoe.org/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Plain-language safety fact sheets, WHMIS, and hazard information.", url: "https://www.ccohs.ca/" },
        { name: "Infrastructure Health & Safety Association (IHSA)", desc: "Ontario construction safety training and equipment resources.", url: "https://www.ihsa.ca/" },
        { name: "WorkSafeBC", desc: "BC regulations and guides for excavation and mobile equipment.", url: "https://www.worksafebc.com/" },
        { name: "CSA Group", desc: "Standards publisher for PPE and machinery standards.", url: "https://www.csagroup.org/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your operator's manual, training materials, and provincial regulations.",
      items: [
        { name: "Backhoe loader controls for beginners", desc: "Loader and backhoe controls and pattern selectors.", url: "https://www.youtube.com/results?search_query=backhoe+loader+controls+beginner+tutorial" },
        { name: "Backhoe loader daily inspection", desc: "Walk-around checks, greasing points, and fluids.", url: "https://www.youtube.com/results?search_query=backhoe+loader+daily+inspection+walk+around" },
        { name: "Setting up stabilizers and digging safely", desc: "Outrigger placement, pads, and stable digging.", url: "https://www.youtube.com/results?search_query=backhoe+stabilizers+outriggers+setup+safety" },
        { name: "Digging a trench with a backhoe", desc: "Depth control, straight walls, and spoil placement.", url: "https://www.youtube.com/results?search_query=backhoe+digging+trench+technique" },
        { name: "Loading trucks with a backhoe loader", desc: "Loader approach, bucket control, and loading patterns.", url: "https://www.youtube.com/results?search_query=backhoe+loader+loading+truck+technique" },
        { name: "Using the 4-in-1 loader bucket", desc: "Clamshell, dozing, and dumping functions.", url: "https://www.youtube.com/results?search_query=backhoe+4+in+1+bucket+uses" },
        { name: "Backhoe loader travel and road safety", desc: "Transport lock, lights, and moving between sites.", url: "https://www.youtube.com/results?search_query=backhoe+loader+road+travel+transport+lock+safety" },
        { name: "Hand digging near underground utilities", desc: "Locate marks, tolerance zones, and safe exposure.", url: "https://www.youtube.com/results?search_query=hand+digging+near+underground+utilities+locate+safety" }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for backhoe work yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: backhoe operator career podcast", desc: "Open the results and listen with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=backhoe+operator+career+podcast" }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        { name: "YouTube: backhoe operator tips (listen-along)", desc: "Operators discussing technique and habits for efficient digging.", url: "https://www.youtube.com/results?search_query=backhoe+operator+tips+podcast" },
        { name: "YouTube: municipal public works podcast", desc: "Water, sewer, and road maintenance work.", url: "https://www.youtube.com/results?search_query=municipal+public+works+operator+podcast" },
        { name: "YouTube: excavation and trench safety talks", desc: "Cave-in lessons and protective system discussions.", url: "https://www.youtube.com/results?search_query=excavation+trench+safety+talk+podcast" }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "For planning, productivity, and leadership as you move toward the Red Seal and a lead hand role.",
      items: [
        { name: "YouTube: small contractor business and estimating podcast", desc: "Pricing small digging jobs and managing crews.", url: "https://www.youtube.com/results?search_query=excavation+contractor+estimating+small+business+podcast" },
        { name: "YouTube: construction safety leadership podcast", desc: "Hazard assessment, due diligence, and supervision.", url: "https://www.youtube.com/results?search_query=construction+safety+leadership+podcast" },
        { name: "YouTube: Red Seal exam study tips (heavy equipment)", desc: "Preparing for trade exams and managing test anxiety.", url: "https://www.youtube.com/results?search_query=red+seal+exam+study+tips+heavy+equipment+operator" }
      ]
    }
  ],
  practiceBank: {
    1: hoeBank([
      ["A tractor-loader-backhoe has:", "A loader bucket at the front and a backhoe at the rear", ["Two backhoes", "Only a loader", "A crane boom"], "The machine combines loader and backhoe functions on one rubber-tired tractor."],
      ["Before digging with the backhoe you should:", "Lower the stabilizers firmly on solid ground and set up level", ["Dig with the stabilizers raised", "Dig while travelling", "Keep the loader raised high"], "Stabilizers carry the machine's weight so it does not rock or tip."],
      ["Before travelling between locations you should:", "Raise the stabilizers and engage the backhoe transport lock", ["Leave the boom swung out", "Lower the stabilizers a little", "Leave the bucket hanging loose"], "A locked, curled backhoe stays centred and protects traffic and workers."],
      ["When mounting or dismounting you should:", "Face the machine and keep three points of contact", ["Jump from the cab", "Carry tools in both hands", "Step off backward onto the tire"], "Three-point contact reduces slips and falls."],
      ["Travelling with the loader bucket, keep it:", "Low and tilted back so the load is secure", ["Raised high for visibility", "At full dump", "Tilted forward"], "A low load keeps the centre of gravity low and improves stability and view."],
      ["Before reversing, you should:", "Check behind you and use a spotter if you cannot see", ["Rely only on the backup alarm", "Back up fast to clear the way", "Look at the mirror once and go"], "Alarms do not guarantee people are aware. Confirm the area is clear."],
      ["Before leaving the seat you should:", "Lower the loader bucket and stabilizers, set the parking brake, and shut off", ["Leave the loader bucket raised", "Leave the engine on", "Park on a slope"], "Lowering attachments and setting the brake prevent unexpected movement."],
      ["What does WHMIS stand for?", "Workplace Hazardous Materials Information System", ["Worksite Heavy Machine Inspection Standard", "Workers' Hazard Materials Incident Summary", "Workplace Hydraulic Machine Information Sheet"], "WHMIS covers labels, SDSs, and training for hazardous products."],
      ["Before any digging, you must:", "Obtain underground utility locates", ["Dig a trial trench with the bucket", "Call after contact", "Check only overhead lines"], "Ground disturbance rules require locates in every province."],
      ["A 600 mm backhoe bucket width is closest to:", "24 in", ["12 in", "36 in", "48 in"], "600 ÷ 25.4 = 23.6 in, which is about 24 in."],
      ["A diesel fuel fire is classified as:", "Class B", ["Class A", "Class C", "Class D"], "Class B covers flammable liquids."],
      ["Riders on a backhoe loader are:", "Not allowed unless the machine has an approved seat for them", ["Fine on the loader bucket", "Fine on the stabilizers", "Allowed on the boom"], "Carrying people outside the cab is a serious hazard."],
      ["The ROPS frame protects you only if:", "You wear the seat belt", ["The door is open", "The engine is off", "The loader is raised"], "The belt keeps you in the protected zone during a rollover."],
      ["A hydraulic hose leak under pressure should be checked:", "With cardboard after relieving pressure, never with a bare hand", ["With your fingers", "While the machine is running at full throttle", "By smelling it"], "Fluid injection injuries need immediate medical care."],
      ["A Red Seal endorsement shows:", "You met a national standard recognized across participating provinces and territories", ["You can skip site rules", "You own the machine", "You are a licensed engineer"], "Red Seal supports mobility for journeypersons."]
    ], 0),
    2: hoeBank([
      ["The 4-in-1 loader bucket can:", "Dump, clamp as a clamshell, doze, and grab", ["Only dump", "Replace the stabilizers", "Cut asphalt without a saw"], "A hydraulic clamshell split opens the bucket for dozing, grabbing, and controlled dumping."],
      ["Stabilizers on soft ground should be:", "Placed on pads or timbers to spread the load", ["Left raised", "Set at the edge of a slope", "Placed on a utility mark"], "Pads increase contact area and reduce sinking."],
      ["A backhoe swings to the side while digging. The hazards are:", "Anyone in the swing arc and tipping of the machine", ["None", "Only the bucket", "Only the hose"], "Check the swing area first, and keep the machine level."],
      ["Which describes an extendable dipper (extendahoe)?", "A stick section that telescopes to add reach and depth", ["A longer seat", "A stronger boom pin", "A second bucket"], "It extends digging depth and reach but affects stability. Check the manual."],
      ["Slow-moving vehicle (SMV) emblems are:", "Orange reflective triangles used on slow vehicles on public roads", ["Green circles", "Blue squares", "Optional ornaments"], "They warn drivers that your machine is slow. Check your province's rules for when they are required."],
      ["When using independent brake pedals for tight turns on a backhoe loader, you must:", "Lock the pedals together for road travel and normal braking", ["Leave them separate on the road", "Remove one", "Only use the left pedal"], "Linked pedals stop both wheels evenly at speed."],
      ["Approaching a pile with the loader, you should:", "Approach square, with the bucket level, and curl as you lift", ["Hit it at an angle at full speed", "Lift before entering the pile", "Reverse into it"], "A square approach loads the bucket and spreads wear evenly."],
      ["When jump starting, the last connection is made to:", "A solid ground point on the frame away from the battery", ["The positive terminal", "The fuel tank", "The hydraulic tank"], "This avoids sparks near battery gases."],
      ["The transport lock on the backhoe:", "Holds the boom centred and raised for travel", ["Starts the engine", "Controls the loader", "Releases the stabilizers"], "It keeps the boom from swinging during travel."],
      ["Which should you do before dumping into a truck?", "Make sure the driver is out of the cab path and you can see the truck", ["Dump from high up", "Swing over the cab", "Ignore the driver"], "Never swing a load over a cab and keep the driver in sight and aware."],
      ["Before extending the stabilizers, you must:", "Check the area for people and for locate marks or hazards beneath", ["Close your eyes", "Ignore utilities", "Raise the loader"], "Stabilizer feet can damage buried lines and injure people."],
      ["Which describes a pilot-pattern selector on a backhoe?", "A switch that changes the control pattern", ["A switch that locks the cab", "A key for the loader", "A fuel valve"], "Always confirm which pattern is set before you start digging."],
      ["On cold mornings, you should:", "Warm up the hydraulics before heavy work", ["Run at full throttle immediately", "Skip the walk-around", "Disconnect the battery"], "Cold oil is thick, so warm-up protects pumps and reduces sluggish response."],
      ["Why should you keep the loader bucket flat on the ground when parked?", "It relieves pressure on the loader circuit and prevents it dropping unexpectedly", ["It cools the engine", "It charges the battery", "It tightens the tires"], "Parking with attachments on the ground avoids drift and unexpected movement."],

      ["The best location to put spoil from a trench is:", "Back from the edge and away from locates or traffic", ["At the trench edge", "On top of a locate paint mark", "In the roadway"], "Spoil placement is regulated and affects trench stability."]
    ], 6),
    3: hoeBank([
      ["Trench excavation next to a building footing can be hazardous because:", "It may undermine the footing and destabilize the structure", ["It increases fuel use", "It improves compaction", "It cools the soil"], "Undercutting footings can cause collapse. Follow engineering direction."],
      ["Each stabilizer carries 25 kN on a pad of 0.20 m². Ground pressure is:", "125 kPa", ["12.5 kPa", "50 kPa", "500 kPa"], "25 kN ÷ 0.20 m² = 125 kPa. A bigger pad lowers pressure."],
      ["An 8 m³ truck is loaded with a 1.0 m³ bucket at 90% fill. Passes needed:", "9", ["8", "10", "12"], "Each pass is 0.9 m³, so 8 ÷ 0.9 ≈ 8.9, rounded to 9."],
      ["On a steep slope with a loaded loader bucket, you should:", "Drive with the load uphill (forward going up, reverse going down)", ["Drive across the slope", "Drive with the load downhill", "Raise the bucket high"], "Keeping weight on the uphill side improves stability and control."],
      ["Using a backhoe or loader to lift a load with a chain is allowed:", "Only if the machine is rated for it and has approved lifting points", ["Whenever you like", "Only on weekends", "If the load looks small"], "Lifting needs rated points, a rated capacity, and a trained rigger."],
      ["A hydraulic breaker on a backhoe loader should not be used:", "To pry or to blank-fire", ["On concrete", "On rock", "With a ground spotter"], "Blank firing and prying damage tool and machine."],
      ["A water main is hit during excavation. First steps:", "Stop work, shut down if safe, protect people, and notify the utility and supervisor", ["Cover it with soil", "Keep digging to find the end", "Wait until the end of shift"], "Shutting off the source and protecting people takes priority."],
      ["A hand-dug test hole to expose a utility within a marked zone is done to:", "Positively identify location and depth", ["Increase spoil volume", "Damage the line", "Find a better bucket"], "Exposure confirms that locates match reality."],
      ["The open-centre hydraulic system on many backhoe loaders usually uses:", "A gear pump with oil returning to tank when valves are neutral", ["A battery", "A wheel brake", "A single piston"], "Open-centre circuits send oil back to tank when valves are neutral."],
      ["When working near overhead power lines, you must:", "Know the minimum approach distance for the voltage and keep clear", ["Guess the distance", "Treat them as dead", "Raise the loader to check"], "Required distances depend on voltage and province. Ask the utility."],
      ["If the machine contacts a live line and you are in the cab, you should:", "Stay in the cab, warn others, and wait for the utility to confirm it is safe", ["Jump out and run", "Climb out touching the ground and machine together", "Keep moving"], "Leaving can create a path to ground. Exit only if there is fire, and jump clear with feet together."],
      ["Backfilling over a pipe should use:", "Specified bedding and cover material placed in lifts", ["Large boulders against the pipe", "Frozen lumps", "A single deep pour"], "Proper bedding protects the pipe and reduces settling."],
      ["The best check of tire condition before travelling is:", "Check pressure and look for cuts, bulges, and loose lug nuts", ["Spin the wheel", "Only wash them", "Tighten the hydraulic hoses"], "Tires affect stability and braking."],
      ["Travelling on ice or wet clay with rubber tires, you should:", "Reduce speed and allow more stopping distance", ["Increase speed", "Raise the loader to the top", "Brake hard in turns"], "Rubber tires have limited traction on ice and slick mud."],
      ["When using the loader to carry material over uneven ground, you should:", "Keep speed low and the load low to avoid bouncing and tipping", ["Go fast to save time", "Raise the load for visibility", "Swing the backhoe for balance"], "Bouncing with a raised load can cause loss of control or tip-over."]
    ], 12),
    4: hoeBank([
      ["A trench 30 m long, 0.6 m wide, and 1.5 m deep has a bank volume of:", "27 m³", ["13.5 m³", "54 m³", "2.7 m³"], "30 × 0.6 × 1.5 = 27 m³."],
      ["With 25% swell, 27 m³ of bank material is about:", "33.75 m³ loose", ["21.6 m³", "27 m³", "36 m³"], "27 × 1.25 = 33.75 m³."],
      ["The loader raises slowly while the backhoe functions normally. The likely cause is:", "A problem in the loader circuit, such as a valve or cylinder", ["A dead battery", "A dirty windshield", "Low tire pressure on all wheels"], "A fault confined to one circuit points to that circuit's valve, cylinder, or hose."],
      ["The trench depth at which protection is required:", "Is set by provincial regulation, often around 1.2 to 1.5 m, so check yours", ["Is the same everywhere at 5 m", "Does not exist", "Depends on the machine colour"], "Always check your own province's excavation rules."],
      ["Running a diesel machine in an enclosed area can create:", "Dangerous carbon monoxide and exhaust levels", ["Excess oxygen", "Cooler air", "Lower noise"], "Ventilate or avoid operating in enclosed spaces."],
      ["Which describes a near miss report?", "A report of an event that could have caused injury or damage but did not", ["A report of a purchase", "A fuel receipt", "A weather forecast"], "Near-miss reporting helps correct hazards before someone is hurt."],
      ["A hydraulic hose bursts on the boom while it is raised. First actions:", "Lower the load if safe, shut off, keep clear, and report", ["Hold the hose by hand", "Run the engine faster", "Climb under the boom"], "Never put yourself under a raised boom or load."],
      ["Which factor most reduces tire life?", "Operating at incorrect pressure", ["Parking in shade", "Washing the machine", "Using a seat belt"], "Under- or over-inflation affects wear, heat, and traction."],
      ["Before transporting a backhoe loader on a trailer, check:", "Weight, dimensions, tie-downs, and route permits", ["Only the colour", "Only the fuel price", "The loader's cup holder"], "Transport rules vary by province."],
      ["A fuel spill at a site should be:", "Stopped, contained, and reported as the site and regulatory plan requires", ["Covered with soil", "Washed into a drain", "Ignored"], "Spills are regulated and must be reported when thresholds are exceeded."],
      ["Which task belongs in a hazard assessment for a roadside dig?", "Traffic control, utilities, overhead lines, and public protection", ["Lunch menu", "Colour of the bucket", "Fuel brand"], "Assess the specific site hazards before starting."],
      ["Fatigue most increases the risk of:", "Misjudging swing, clearances, and travel speed", ["Better focus", "Lower fuel use", "Easier digging"], "Rest and breaks are part of safe operation."],
      ["Service intervals for a backhoe loader should follow:", "The manufacturer's maintenance schedule in the operator's manual", ["A friend's guess", "Whenever the machine breaks", "The fuel gauge"], "Manuals specify intervals by hours and conditions."],
      ["Which is the best way to learn a new backhoe's control pattern?", "Check the pattern selector and practise in an open area before digging", ["Test it next to a gas line", "Skip the manual", "Assume it matches your last machine"], "Control patterns vary, and mistakes near utilities are costly."],
      ["Which three worker rights are generally recognized under Canadian occupational health and safety law?", "To know, to participate, and to refuse unsafe work", ["To rest, travel, and quit", "To inspect, hire, and fire", "To strike, bid, and sell"], "Specifics vary by province and territory."],
      ["When you see another operator breaking a safety rule, a good response is:", "Speak up safely and report it through your supervisor or safety process", ["Ignore it", "Film it only", "Copy the behaviour"], "The internal responsibility system depends on everyone speaking up."]
    ], 17)
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS, first aid, ground disturbance, and traffic control awareness; requirements vary)", "Check the driver's licence class your employer needs for moving machines on roads", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: safe basics", items: ["Learn PPE, mounting, spotter signals, and lockout", "Do daily walk-arounds and greasing", "Practise loader work, travel, and stabilizer setup", "Learn locate marks and hand digging"] },
    { title: "Year 2: loader and backhoe work", items: ["Load trucks and move material efficiently", "Dig trenches to depth and set spoil safely", "Use the 4-in-1 bucket and attachments", "Backfill and compact in lifts"] },
    { title: "Year 3: service work and precision", items: ["Dig around live utilities and expose them safely", "Handle municipal repairs and service connections", "Work near roads with traffic control plans", "Learn hydraulic system basics and troubleshooting"] },
    { title: "Year 4 and beyond: planning and leadership", items: ["Plan small jobs, quantities, and sequences", "Diagnose problems and plan maintenance with the shop", "Lead hazard assessments and mentor apprentices", "Use the Red Seal standard to find gaps in your experience"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check federal completion grant and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["4-in-1 bucket", "A multi-purpose loader bucket that opens like a clamshell."],
    ["Backhoe", "The rear digging attachment with boom, dipper, and bucket."],
    ["Ballast", "Weight added to tires or frame for stability."],
    ["Bank volume", "Volume of material in its natural state."],
    ["Boom", "The first arm segment of the backhoe."],
    ["Bucket curl", "Tilting the bucket back to hold a load."],
    ["Dipper", "The second arm segment of the backhoe, also called the stick."],
    ["Dump height", "The height at which the loader bucket can dump."],
    ["Extendahoe", "An extendable dipper that increases reach."],
    ["Hand-dig zone", "The area around a locate mark where machine digging is restricted."],
    ["Kingpost", "The pivot that lets the backhoe swing."],
    ["Loader", "The front attachment with a bucket for loading and carrying."],
    ["Locate", "Marking of underground utilities."],
    ["Open-centre hydraulics", "A system where oil flows to tank when valves are in neutral."],
    ["Pilot controls", "Low-pressure controls that operate hydraulic valves."],
    ["Powershuttle", "A transmission control that changes direction without clutching."],
    ["ROPS", "Rollover protective structure."],
    ["Spoil", "Material removed from an excavation."],
    ["Stabilizer", "A hydraulic leg that lifts and steadies the machine for digging."],
    ["Swing", "Rotation of the backhoe left or right."],
    ["Tipping load", "The load at which the machine begins to tip."],
    ["Torque converter", "A fluid coupling between engine and transmission."],
    ["Transport lock", "A lock that holds the backhoe boom for travel."],
    ["Trench box", "A rigid shield that protects workers in a trench."],
    ["Undercutting", "Digging beneath a footing or wall, which can destabilize it."],
    ["Wheel loader", "A rubber-tired machine with a large front bucket."],
    ["Windrow", "A long ridge of material left by the loader or blade."]
  ],
  cards: [
    { front: "Before digging", back: "Locates done, stabilizers down on firm ground, area clear." },
    { front: "Before travel", back: "Stabilizers up, backhoe locked, loader low." },
    { front: "Ground pressure", back: "Force ÷ pad area, in kPa." },
    { front: "Passes to fill a truck", back: "Truck volume ÷ (bucket volume × fill factor), rounded up." },
    { front: "Slope with a loaded loader", back: "Keep the load uphill." },
    { front: "3 points of contact", back: "Two hands and one foot, or two feet and one hand." },
    { front: "Contact with a live line", back: "Stay in the cab unless there is fire. Warn others and wait for the utility." },
    { front: "Last jump-start connection", back: "Solid ground point away from the battery." },
    { front: "Hydraulic leak check", back: "Cardboard, never a bare hand." },
    { front: "Swell formula", back: "Loose volume = bank volume × (1 + swell)." }
  ],
  jobsIntro: "Look for apprentice and operator roles with municipalities, utilities, small excavation contractors, landscapers, farms, and rental or service companies. Many jobs involve moving the machine between sites, so ask about driver's licence classes and trailer experience.",
  tips: [
    "Set up the stabilizers on firm ground every time, even for a quick dig.",
    "Hand dig first near marks. A few minutes can prevent a major strike.",
    "Know which pattern your machine uses before you touch the backhoe levers.",
    "Keep your hours logbook current and signed by your sponsor."
  ],
  forumTopics: [
    "Starting out as a backhoe operator",
    "Red Seal and exam prep",
    "Tools and gear",
    "Province and code questions",
    "Municipal and service connection work",
    "Stabilizers, stability, and travel safety"
  ],
  reference: [
    {
      title: "Key formulas",
      list: ["Trench volume (bank) = length × width × depth", "Loose volume = bank volume × (1 + swell)", "Pad ground pressure = load ÷ pad area", "Passes per truck = truck volume ÷ (bucket volume × fill factor), rounded up", "Percent grade = rise ÷ run × 100", "Production = bucket volume × fill factor × cycles per hour × efficiency"]
    },
    {
      title: "Conversions",
      list: ["1 in = 25.4 mm and 1 ft = 0.3048 m", "1 m³ ≈ 1.308 yd³", "1 psi ≈ 6.895 kPa", "1 tonne = 1,000 kg ≈ 2,204.6 lb", "1 L ≈ 0.264 US gal ≈ 0.22 imperial gal", "1 km/h ≈ 0.621 mph"]
    },
    {
      title: "Stabilizer pad pressure example",
      intro: "Each stabilizer carries 25 kN in this example. Larger pads give lower ground pressure.",
      table: { head: ["Pad area", "Ground pressure"], rows: [["0.10 m²", "250 kPa"], ["0.20 m²", "125 kPa"], ["0.50 m²", "50 kPa"], ["1.00 m²", "25 kPa"]] },
      note: "Actual stabilizer loads come from the machine, the dig position, and the load. Check the manual."
    },
    {
      title: "Loader passes to fill a truck (90% fill factor)",
      table: { head: ["Bucket", "Passes for 10 m³", "Passes for 8 m³"], rows: [["0.8 m³", "14", "12"], ["1.0 m³", "12", "9"], ["1.2 m³", "10", "8"]] },
      note: "Passes are rounded up. Real fill factors depend on the material and technique."
    },
    {
      title: "Backhoe loader travel checklist",
      list: ["Stabilizers fully raised and backhoe in the transport lock", "Loader bucket low and tilted back", "Brake pedals locked together", "Lights, signals, mirrors, and slow-moving vehicle emblem as required", "Tire pressure and wheel nuts checked", "Know route clearances for overhead lines, bridges, and weight limits", "Seat belt on and no riders"]
    },
    {
      title: "Utility contact response",
      list: ["Overhead line: stay in the cab, warn others, and wait for the utility. Jump clear with feet together only if there is fire", "Gas line: stop, shut down if safe, evacuate upwind, call 911 and the utility", "Water main: stop, shut down, protect people, and notify the utility", "Buried electrical: keep people away, do not touch the machine or ground, and call the utility", "Report every contact, even if no damage is apparent"],
      note: "Follow your employer's emergency plan and the utility's directions."
    },
    {
      title: "Standards and regulation pointers",
      list: ["Your provincial OHS regulation covers excavation, spoil, trench protection, and mobile equipment", "Call your province's locate service before ground disturbance", "CSA standards cover PPE: Z94.1 hard hats, Z94.3 eye protection, Z94.2 hearing, Z96 high-visibility garments", "WHMIS and SDSs apply to fuels, oils, and cleaners", "Your operator's manual sets machine limits"],
      note: "Rules vary by province. Use your own jurisdiction's current text."
    }
  ]
});
