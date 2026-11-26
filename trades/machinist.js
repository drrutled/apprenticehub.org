// Machinist guide. Practice questions are original study aids, not official Red Seal exam questions.
{
  const I = (name, why, search) => ({ name, why, search });
  const M = (name, desc, url) => ({ name, desc, url });
  const V = (name, desc, q) => M(name, desc, "https://www.youtube.com/results?search_query=" + q);
  const Q = (q, a, w, i, explain) => { const options = [...w]; options.splice(i, 0, a); return { q, options, answer: i, explain }; };
  const R = (list) => list;

  const toolGroups = [
    {
      title: "Day-one tools, buy once and buy well",
      note: "Professional-grade measuring and hand tools hold their accuracy for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first, since many shops supply cutters and machine tooling.",
      items: [
        I("Starrett or Mitutoyo 150 mm (6 in) digital calipers", "Quick inside, outside, depth, and step readings. Learn to check zero and keep the jaws clean.", "Mitutoyo Starrett 150mm 6 inch digital caliper"),
        I("Mitutoyo or Starrett 0-25 mm (0-1 in) outside micrometer", "The first precision tool you master. Reads to 0.01 mm or 0.001 in with a ratchet or friction thimble.", "Mitutoyo Starrett 0-25mm outside micrometer"),
        I("Starrett 150 mm combination square set", "Squareness, 45 degree lines, depth, and height checks on layout and setups.", "Starrett 6 inch combination square set"),
        I("Steel rule, 150 mm / 6 in, metric and inch graduations", "Rough measuring, layout, and checking stock. Get a flexible and a rigid one.", "Starrett 6 inch steel rule metric inch"),
        I("Safety glasses with side shields (CSA Z94.3)", "Chips and coolant spray are constant. Comfortable lenses are the ones you will keep on.", "CSA Z94.3 safety glasses side shields 3M"),
        I("CSA-approved safety boots (green triangle, steel or composite toe)", "Dropped parts and sharp chips on the floor. Look for slip-resistant soles.", "CSA safety boots composite toe slip resistant"),
        I("Hearing protection (earmuffs or custom plugs)", "Machine shops can be loud for a full shift. Choose a rating suited to your shop.", "3M Peltor earmuffs hearing protection CSA"),
        I("Deburring tool and set of blades (Noga style)", "Removes sharp burrs from edges and holes by hand, which protects fingers and the next operation.", "Noga deburring tool blades"),
        I("Hex key set (metric and imperial) and a scriber", "Hex keys for vises, setups, and machine covers. A carbide scriber for layout lines.", "Wera Bondhus hex key set metric imperial carbide scriber"),
        I("Brush, chip hook, and magnetic pickup", "Clear chips safely without bare hands or compressed air.", "machinist chip brush chip hook magnetic pickup tool")
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your journeyperson which brands survive in your shop.",
      items: [
        I("Mitutoyo or Starrett micrometer set (25-50, 50-75, 75-100 mm)", "Extends your measuring range. Keep each micrometer with its own standard.", "Mitutoyo micrometer set 0-100mm"),
        I("Dial indicator with magnetic base (0.01 mm or 0.001 in)", "Tramming vises, finding runout, and centring work in a four-jaw chuck.", "dial indicator magnetic base 0.01mm Starrett Mitutoyo"),
        I("Dial test indicator (lever type, 0.01 mm / 0.0005 in)", "Reads small movements in tight spots, for edge finding, vise alignment, and bore work.", "dial test indicator lever type 0.01mm Blake"),
        I("Telescoping and small-hole gauge set", "Transfer bore sizes to a micrometer when a bore gauge is not available.", "telescoping gauge set small hole gauge set Starrett"),
        I("Thread pitch gauges (metric and UN) and radius gauges", "Identify unknown threads and check fillet radii quickly.", "thread pitch gauge metric UNC radius gauge set"),
        I("Mechanical edge finder and wiggler", "Locate the edges of work on a mill to set work zero.", "mill edge finder 10mm wiggler"),
        I("Rolling tool chest or toolbox", "Protects precision tools from chips and knocks. Line drawers with foam.", "Waterloo Kennedy machinist tool chest")
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop. Ask before buying, and learn to calibrate and care for each.",
      items: [
        I("Dial or digital bore gauge", "Fast, accurate bore size and form checks once you know how to master it with a ring.", "Mitutoyo dial bore gauge 18-35mm"),
        I("Height gauge (digital or vernier)", "Layout and inspection on a surface plate.", "Mitutoyo digital height gauge 300mm"),
        I("Sine bar (100 mm or 5 in) and gauge block set", "Set precise angles by stacking blocks and calculating the height.", "sine bar 100mm gauge block set"),
        I("Pin gauge set (plug gauges)", "Go and no-go checks on small bores and reamed holes.", "pin gauge set plug gauge metric"),
        I("Thread ring and plug gauges", "Final acceptance of threads against the class of fit on the drawing.", "thread plug gauge ring gauge M8 metric"),
        I("Indicator-type surface plate accessories (V-blocks and parallels)", "Hold round and flat work for inspection and layout.", "precision V-blocks parallels set machinist")
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for blueprints, trig, and machining math. Check with your school and exam body about calculator rules before you buy.",
      items: [
        I("Scientific calculator with trig functions (Casio fx-991 or TI-30XS)", "Trig for tapers, bolt circles, and sine bar setups, plus speeds and feeds.", "Casio fx-991 Texas Instruments TI-30XS MultiView"),
        I("Machinery's Handbook (current edition)", "The standard shop reference for tables, threads, fits, and formulas.", "Machinery's Handbook Industrial Press"),
        I("Mechanical pencil (0.5 mm) and spare leads", "Fine, consistent lines for sketching setups and part notes.", "Pentel GraphGear 1000 mechanical pencil 0.5mm"),
        I("Engineer's scale and a 300 mm steel ruler", "Reading and checking scaled drawings.", "engineer scale ruler 300mm steel ruler"),
        I("GD&T reference guide (ASME Y14.5 based)", "Learn feature control frames and datums for blueprint reading.", "GD&T pocket guide ASME Y14.5"),
        I("Field notebook (Rite in the Rain) and graph paper", "Record setups, offsets, and program changes. Weatherproof paper survives a shop.", "Rite in the Rain notebook graph paper"),
        I("Binder, dividers, and highlighters", "Organize notes by year and topic for Red Seal review.", "binder dividers highlighters"),
        I("Blueprint reading workbook (machining)", "Practise orthographic views, sections, and tolerances.", "blueprint reading for machinists workbook")
      ]
    }
  ];

  const mediaGroups = [
    {
      title: "Official and standards resources",
      items: [
        M("Red Seal exam preparation", "How Red Seal exams work and how to prepare. Find the Machinist trade page from here.", "https://red-seal.ca/eng/welcome.shtml"),
        M("Codes Canada", "Canadian model codes, useful for building and safety context.", "https://nrc.canada.ca/en/certifications-evaluations-standards/codes-canada"),
        M("CSA Group", "Standards bodies publish safeguarding of machinery and lockout standards.", "https://www.csagroup.org/"),
        M("Canadian Centre for Occupational Health and Safety (CCOHS)", "Free safety fact sheets on machine guarding, noise, and WHMIS.", "https://www.ccohs.ca/"),
        M("International Association of Machinists (IAM)", "Union training and apprenticeship information.", "https://www.goiam.org/")
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and shop procedures.",
      items: [
        V("Reading a micrometer", "Metric and inch micrometer reading and care.", "how+to+read+a+micrometer+machinist"),
        V("Lathe basics", "Setting up and turning, facing, and boring on an engine lathe.", "manual+lathe+basics+for+beginners+machinist"),
        V("Milling machine basics", "Vise setup, tramming, and facing on a knee mill.", "manual+milling+machine+basics+machinist+apprentice"),
        V("Speeds and feeds explained", "Calculating spindle speed and feed rate.", "speeds+and+feeds+explained+machining"),
        V("Blueprint reading for machinists", "Views, dimensions, and tolerances on drawings.", "blueprint+reading+for+machinists"),
        V("GD&T basics", "Feature control frames and datums.", "GD%26T+basics+explained+for+machinists"),
        V("CNC G-code basics", "Reading and writing simple CNC programs.", "CNC+G+code+basics+for+beginners+milling"),
        V("Cutting threads on a lathe", "Single-point threading and the thread dial.", "cutting+threads+on+a+lathe+single+point")
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for machining yourself.",
      items: [
        M("Skills Ontario Trades Tech Talk Podcast", "Careers, apprenticeships, and getting started in the skilled trades.", "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/"),
        M("TradeMasters Podcast (Canada)", "Skilled trades careers, licensing, and exam topics.", "https://www.tmws.ca/podcasts"),
        M("YouTube: machinist apprentice podcast (audio-only listening)", "Open the results and press play with the screen off, or use a background-play option.", "https://www.youtube.com/results?search_query=machinist+apprentice+podcast")
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do on the job.",
      items: [
        M("YouTube: machining podcast (listen-along)", "Shop talk on tooling, materials, and process problems.", "https://www.youtube.com/results?search_query=machining+podcast+shop+talk"),
        M("YouTube: CNC machinist podcast", "Programming, setups, and troubleshooting stories.", "https://www.youtube.com/results?search_query=CNC+machinist+podcast"),
        M("YouTube: manufacturing podcast", "Quality, process control, and shop floor topics.", "https://www.youtube.com/results?search_query=manufacturing+podcast+machine+shop")
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, programming, quality, and leadership.",
      items: [
        M("YouTube: Red Seal machinist exam prep (talk-through)", "Study talks you can listen to while commuting.", "https://www.youtube.com/results?search_query=Red+Seal+machinist+exam+preparation"),
        M("YouTube: machine shop business podcast", "Quoting, scheduling, and running a job shop.", "https://www.youtube.com/results?search_query=machine+shop+business+podcast+quoting"),
        M("YouTube: mentoring apprentices and shop leadership", "Leadership and training skills for new journeypersons.", "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast")
      ]
    }
  ];

  const practiceBank = {
    1: [
      Q("Which is unsafe to wear while operating a lathe?", "Loose sleeves and dangling jewellery", ["Safety glasses with side shields and a snug-fitting cap", "Close-fitting sleeves", "CSA-approved safety boots with slip-resistant soles"], 1, "Rotating work can catch loose clothing and jewellery. Remove them, tie back long hair, and keep sleeves close-fitting."),
      Q("What must you do with the chuck key before starting a lathe?", "Remove it from the chuck", ["Leave it in the chuck for the next job", "Hold it loosely in your hand", "Tighten it twice"], 3, "A key left in a spinning chuck becomes a projectile. Make removing it a habit."),
      Q("How should you clear long, sharp chips from a machine?", "Use a chip hook or brush after the spindle stops", ["Grab them with gloved hands while spinning", "Blow them off with an air gun toward the next machine", "Sweep them off with a bare hand while the spindle coasts down"], 0, "Stop the machine and use a hook or brush. Chips are razor sharp and hot."),
      Q("2.5 in is equal to how many millimetres?", "63.5 mm", ["25.4 mm", "6.35 mm", "635 mm"], 2, "1 in = 25.4 mm, so 2.5 × 25.4 = 63.5 mm."),
      Q("One thimble graduation on a standard inch micrometer represents:", "0.001 in", ["0.01 in", "0.0001 in", "0.025 in"], 0, "The thimble is divided into 25 parts, each worth 0.001 in. Each sleeve line is 0.025 in."),
      Q("One thimble graduation on a standard metric micrometer represents:", "0.01 mm", ["0.1 mm", "0.001 mm", "0.5 mm"], 3, "A metric thimble has 50 divisions of 0.01 mm, and one revolution moves the spindle 0.5 mm."),
      Q("Which tool is generally the better choice for a tight tolerance on a shaft diameter?", "Outside micrometer", ["Steel rule", "Combination square", "Hermaphrodite caliper"], 1, "A micrometer reads finer and is less sensitive to feel than a caliper."),
      Q("What are the main jobs of cutting fluid?", "Cool, lubricate, and flush chips", ["Make the part magnetic so chips stay clear of the cutter", "Soften the machine bed so vibration is absorbed", "Replace the need for sharp tools"], 2, "Coolant reduces heat and friction and helps clear chips. It does not replace correct speeds and sharp tools."),
      Q("What is the common point angle of a general-purpose twist drill?", "118 degrees", ["60 degrees, as used on screw thread form tools", "29 degrees, as used on Acme threads", "90 degrees"], 3, "118 degrees suits general work. Harder materials often use 135 degrees with a split point."),
      Q("What is the correct tap drill size for an M8 × 1.25 coarse thread?", "6.8 mm", ["8.0 mm, the same as the major diameter", "7.5 mm", "5.0 mm, which is for an M6 thread"], 0, "Major diameter minus pitch gives about 6.75 mm, and 6.8 mm is the standard drill."),
      Q("What does a file that is 'pinned' have?", "Chips lodged between the teeth that scratch the work", ["A broken handle", "A loose handle that wobbles on the tang", "Extra coarse teeth cut by the maker"], 1, "Clean it with a file card and chalk the teeth to reduce pinning."),
      Q("Where do you find the hazards and first aid steps for a cutting fluid?", "On its Safety Data Sheet (SDS)", ["On the machine nameplate near the motor", "In the weekly shop schedule posted at the entrance", "On the drawing title block of the current job"], 2, "WHMIS requires an SDS for hazardous products, and containers must carry proper labels."),
      Q("What is layout dye (such as blue Dykem) used for?", "To make scribed lines easy to see", ["To harden the steel surface before machining", "To lubricate drills in deep holes", "To cool the cut and carry chips away"], 0, "A thin coat on clean metal makes a scribed line stand out."),
      Q("What is a granite surface plate used for?", "A flat reference for layout and inspection", ["Holding a part in a lathe for turning operations", "Grinding cutters to a sharp edge", "Supporting the mill table under heavy cuts"], 3, "Its flat surface is the reference for height gauges, indicators, and parts."),
      Q("A machine guard has been removed and the machine is running. What should you do?", "Stop, lock out, and report it before using the machine", ["Carry on carefully and keep your hands clear", "Work faster to finish the job before anyone notices", "Tape the area off and continue using the machine"], 1, "Never operate a machine with missing guards. Report it and have it fixed. CSA Z432 covers safeguarding of machinery."),
      Q("Which hardness scale is commonly used for hardened steel?", "Rockwell C", ["Mohs", "Shore A", "Brinell with a rubber ball"], 2, "Rockwell C uses a diamond cone indenter and is widely used for hardened steels.")
    ],
    2: [
      Q("What spindle speed gives 100 m/min cutting speed on a 25 mm diameter workpiece?", "About 1273 rpm", ["About 318 rpm", "About 4000 rpm, using the diameter in metres", "About 637 rpm"], 0, "N = (1000 × 100) ÷ (π × 25) ≈ 1273 rpm."),
      Q("Using RPM = (3.82 × SFM) ÷ D, what is the speed for a 1 in diameter cutter at 100 SFM?", "382 rpm", ["38 rpm", "3820 rpm", "100 rpm"], 2, "3.82 × 100 ÷ 1 = 382 rpm. The constant is 12 ÷ π."),
      Q("A 4-flute end mill at 2000 rpm with 0.05 mm per tooth should feed at:", "400 mm/min", ["100 mm/min, from using only one tooth", "800 mm/min, from doubling the teeth", "250 mm/min"], 0, "Feed = rpm × teeth × feed per tooth = 2000 × 4 × 0.05 = 400 mm/min."),
      Q("In climb milling, the cutter rotation relative to feed is:", "In the same direction as the feed at the cut", ["Opposite to the feed at the point of cut", "Perpendicular to the feed direction", "Stopped during the cut, with only the table feeding"], 3, "Climb milling gives a thick-to-thin chip but needs a rigid machine with backlash under control."),
      Q("What is the included angle of a standard 60 degree thread form, and how is it often fed on a lathe?", "60 degrees, with the compound set near 29 to 30 degrees", ["29 degrees, with the cross slide only for infeed", "45 degrees, with the tailstock set over", "90 degrees, with the compound at zero"], 1, "Feeding with the compound at about 29.5 degrees cuts mainly on the leading flank and reduces chip crowding."),
      Q("Turning a taper over the full length of the work by offsetting the tailstock, the offset equals:", "(D − d) ÷ 2", ["D − d", "(D + d) ÷ 2", "D × d"], 2, "For a 30 mm to 26 mm taper over the whole length, offset = (30 − 26) ÷ 2 = 2 mm."),
      Q("Why would you choose a four-jaw independent chuck?", "To hold irregular or square stock and set it to run true", ["Because it self-centres faster than a three-jaw chuck", "To grip only round bar of a fixed diameter", "Because it needs no indicator to set the work"], 0, "Each jaw moves independently, so you can dial in concentricity with an indicator."),
      Q("To set a 10 in sine bar to 30 degrees, the gauge block stack height is:", "5 in", ["10 in", "2.5 in", "8.66 in"], 3, "sin 30° = 0.5, so H = 10 × 0.5 = 5 in."),
      Q("Why can gauge blocks be wrung together?", "Their surfaces are flat enough to cling by molecular attraction and a thin film", ["They are magnetic and pull together", "They have threaded ends that screw into each other", "They are glued with a thin layer of oil and cannot be separated"], 1, "Clean, flat blocks stick together firmly when slid and twisted."),
      Q("Annealing steel generally does what?", "Softens it and relieves stress", ["Removes all of the carbon so the steel becomes pure iron", "Makes it as hard as possible for wear parts", "Makes it rustproof and bright"], 2, "Annealing is slow cooling from temperature to make steel softer and easier to machine."),
      Q("What is a reamer used for?", "To finish a drilled hole to accurate size and finish", ["To cut an internal thread", "To start a hole on a curved surface without drifting", "To remove large amounts of material quickly in a hole"], 1, "A reamer removes a small stock allowance and improves size and surface finish."),
      Q("In CNC programming (Fanuc style), G01 means:", "Linear move at the programmed feed rate", ["Rapid positioning to the programmed point", "Clockwise circular arc at the feed rate", "Dwell for a programmed length of time"], 0, "G00 is rapid, G01 is a linear feed move, and G02 and G03 are arcs."),
      Q("A dial indicator on a part spinning in a chuck shows a total needle swing of 0.10 mm. What does this mean?", "TIR is 0.10 mm, so the eccentricity is about 0.05 mm", ["Eccentricity is 0.10 mm and TIR is 0.20 mm", "The part is perfectly centred and needs no adjustment", "The chuck jaws are 0.10 mm too large for this part"], 3, "Total indicator reading is the full swing. The centre is off by half of that."),
      Q("Which approach best reduces built-up edge when machining aluminum?", "A sharp tool with polished flutes, suitable speed, and lubricant", ["A dull tool at low speed with no coolant", "A very slow feed with the tool rubbing heavily", "A negative-rake insert run dry at a low speed"], 2, "Aluminum tends to weld to the tool edge. Sharp, polished tools and lubricant help."),
      Q("Which is the best reason to take a light finishing pass?", "To control size and surface finish with little tool pressure", ["To make the part cool the machine down", "To save a tool change on a long job", "To avoid measuring the part before removal"], 1, "A light, consistent cut deflects the tool less and gives better size and finish."),
      Q("What does G00 do in a CNC program?", "Moves rapidly to a position without cutting", ["Feeds in a straight line at the programmed rate", "Cancels cutter compensation at the end of a cut", "Ends the program and rewinds to the start"], 0, "Rapid moves are for positioning. Take care that the path is clear of clamps and the part.")
    ],
    3: [
      Q("An H7/g6 fit is classed as:", "A clearance (running or sliding) fit", ["A press fit with heavy interference, needing heat to assemble", "A threaded fit used to lock nuts onto bolts", "A transition fit that may have either clearance or interference"], 2, "H7 holes with g6 shafts always leave a small clearance."),
      Q("An H7/p6 fit is classed as:", "A locational interference (press) fit", ["A loose running fit for freely turning parts", "A clearance fit with a generous gap", "A thread fit"], 0, "A p6 shaft is slightly larger than the H7 hole, so it needs pressing or heating."),
      Q("The maximum material condition (MMC) of a hole is:", "The smallest allowed hole size", ["The largest allowed hole size", "The mean size halfway through the tolerance band", "The size at exactly 20 °C measured with no tolerance"], 3, "The hole has the most material left when it is smallest."),
      Q("Which GD&T control does NOT require a datum reference?", "Flatness", ["Perpendicularity", "Position", "Runout"], 1, "Form controls such as flatness, straightness, circularity, and cylindricity stand alone."),
      Q("In CNC programming, G41 means:", "Cutter compensation to the left of the programmed path", ["Cutter compensation to the right of the path", "Tool length compensation applied along Z", "Work offset selection for a new fixture"], 0, "G41 is left and G42 is right, looking in the direction of travel. G40 cancels it."),
      Q("What is the purpose of G43 with an H word?", "Applies the tool length offset", ["Selects metric units for the program", "Starts the coolant pump before a cut", "Selects an arc plane for circular moves"], 2, "G43 Hxx applies the stored length for that tool so Z is measured to the tool tip."),
      Q("G54 on a CNC mill selects:", "The first work coordinate system", ["Rapid traverse mode between cuts", "Spindle clockwise at the programmed speed", "The tool changer carousel position"], 1, "G54 to G59 call stored work offsets."),
      Q("Which change has the strongest effect on tool life?", "Cutting speed", ["Colour of the coolant", "Length of the program", "Brand of the vise"], 3, "Tool life falls quickly as speed rises, and speed has the largest effect of speed, feed, and depth."),
      Q("About how much does a 300 mm aluminum bar grow if it warms by 10 °C (coefficient about 23 × 10⁻⁶ per °C)?", "About 0.07 mm", ["About 0.007 mm", "About 0.7 mm", "About 7 mm"], 1, "ΔL = 23 × 10⁻⁶ × 300 × 10 ≈ 0.069 mm. Measure parts at a stable temperature."),
      Q("Why is steel tempered after it is hardened?", "To reduce brittleness and relieve stress", ["To make it harder", "To add carbon so the steel can be hardened again", "To clean the surface of scale and oxide after heat treatment"], 0, "Quenched steel is hard but brittle. Tempering trades a little hardness for toughness."),
      Q("Surface roughness Ra is expressed in:", "Micrometres (µm)", ["Degrees of surface slope", "Newtons of cutting force", "Rockwell points of hardness"], 2, "Ra is the arithmetic average roughness, in µm (or µin in older prints)."),
      Q("Which action helps reduce chatter?", "Reduce tool overhang and improve rigidity", ["Make the tool stick out farther", "Use a dull cutter so the cut is gentler on the part", "Loosen the vise slightly to absorb vibration"], 3, "Stiffness is the first fix. Changing speed or feed can also break up the vibration."),
      Q("Machining work-hardening stainless steel, you should:", "Keep a positive feed with a sharp tool and avoid dwelling", ["Stop feeding and let the tool rub", "Use a very light feed to save the tool edge", "Remove all coolant so the tool stays hot"], 1, "Rubbing hardens the surface. Keep the tool cutting with enough chip load."),
      Q("A control chart is mainly used to:", "Monitor whether a process is stable over time", ["Set the spindle speed for a new material", "Calibrate a micrometer against gauge blocks", "Sharpen a drill on the pedestal grinder"], 0, "Statistical process control tracks measurements to catch drift before parts go out of tolerance."),
      Q("On a lathe, a part that is bell-mouthed at the end of a bore is most likely caused by:", "Tool deflection or a worn tool", ["Too much coolant flooding the bore", "A short, stiff boring bar", "A chuck key left in the jaws"], 2, "Deflection varies with the tool overhang. Reduce overhang and take spring passes carefully.")
    ],
    4: [
      Q("A long shaft turned between centres comes out tapered. The most likely cause is:", "The tailstock is out of line with the headstock", ["The coolant is too cold for the material", "The part is too short for the centres", "The live centre is lubricated"], 1, "Tailstock offset cuts a taper. Align it before precision turning."),
      Q("If a boring bar overhang doubles, deflection under the same load increases about:", "Eight times", ["Two times, since deflection is directly proportional to length", "Four times, since deflection follows the square of the length", "Not at all, since the bar material alone sets the deflection"], 3, "Deflection varies with the cube of the length, so 2³ = 8."),
      Q("The main purpose of a first article inspection is to:", "Confirm the first part meets all drawing requirements before production", ["Time the operator", "Check the invoice against the purchase order", "Test the coolant concentration before the run starts"], 0, "Catching setup errors on piece one avoids a full run of scrap."),
      Q("Gauge calibration is said to be traceable when it:", "Links through records to national or international standards", ["Was done by the operator's supervisor with a similar gauge", "Was done last decade and has been in a drawer since", "Used a similar gauge that is kept in the same toolbox"], 2, "Traceability means an unbroken chain of comparisons to recognized standards."),
      Q("The common 10:1 rule suggests a gauge should be capable of resolving about:", "One-tenth of the tolerance being measured", ["Twice the tolerance being measured", "The full tolerance being measured", "Ten times the tolerance being measured"], 1, "A gauge that is much finer than the tolerance gives a trustworthy decision."),
      Q("The 3-2-1 locating principle constrains how many degrees of freedom?", "Six", ["Three", "Four", "Nine"], 0, "Three points on the primary datum, two on the secondary, and one on the tertiary locate a rigid part."),
      Q("The pitch of a 1/4-20 UNC thread is:", "0.050 in", ["0.020 in", "0.250 in", "0.200 in"], 3, "20 threads per inch means pitch = 1 ÷ 20 = 0.050 in."),
      Q("On a double-start thread with a 1.5 mm pitch, the lead is:", "3.0 mm", ["1.5 mm", "0.75 mm", "6.0 mm"], 0, "Lead = pitch × number of starts = 1.5 × 2."),
      Q("Which CNC lathe feature keeps surface speed constant as the diameter changes?", "Constant surface speed (G96) with a maximum rpm limit", ["Dwell (G04) with a programmed pause", "Rapid override set to a low percentage", "Coolant through the spindle at high pressure"], 2, "G96 adjusts rpm with diameter, and a limit such as G50 caps the spindle speed."),
      Q("When proving out a new CNC program, a sensible first step is to:", "Run in single block with the rapid override reduced", ["Run at full speed on the first part", "Disable the door interlock so you can watch the cut", "Remove the part and fixture so nothing can be damaged"], 1, "Single block and slow rapids give time to stop if the path looks wrong."),
      Q("Cutting width 10 mm, depth 5 mm, feed 400 mm/min. What is the material removal rate?", "20 cm³/min", ["2 cm³/min", "200 cm³/min", "0.2 cm³/min"], 0, "10 × 5 × 400 = 20 000 mm³/min = 20 cm³/min."),
      Q("Which CSA standard covers control of hazardous energy (lockout)?", "CSA Z460", ["CSA Z94.3 only", "CSA Z195", "CSA B139"], 3, "Z460 covers lockout and other methods. Z432 covers safeguarding of machinery."),
      Q("After a tool change on a CNC mill, Z cuts too deep by 0.5 mm. What should you check first?", "The tool length offset for that tool", ["The coolant concentration in the tank", "The X work offset for that fixture", "The spindle warm-up time at the start of the shift"], 1, "A wrong length offset shifts every Z depth for that tool."),
      Q("To hold a ±0.01 mm tolerance in a production run, you should:", "Measure regularly, track tool wear, and adjust offsets", ["Measure only the first and last part", "Rely on the programmed size only and trust the machine", "Ignore temperature changes since they are too small to matter"], 2, "Tool wear and heat drift both change size, so check and compensate on a plan."),
      Q("Which is the best way to find the cause of a repeating scrap problem?", "Change one variable at a time and record the results", ["Change everything at once", "Increase the spindle speed until the scrap stops", "Blame the material supplier and reorder from another"], 0, "Systematic testing identifies the true cause, and records help the next shift.")
    ]
  };

  const glossary = [
    ["Backlash", "Lost motion in a lead screw or gear train when direction reverses."],
    ["Bore", "An internal cylindrical surface cut or finished to size."],
    ["Chamfer", "A bevelled edge, often 45 degrees, that removes a sharp corner."],
    ["Chatter", "Self-excited vibration between tool and work that leaves marks."],
    ["Chip load", "The thickness of material removed by each cutting tooth."],
    ["Climb milling", "Milling with cutter rotation in the direction of feed at the cut."],
    ["Collet", "A sleeve that grips a tool or bar by squeezing it evenly."],
    ["Datum", "A theoretical reference point, line, or plane for measurement."],
    ["Dowel pin", "A precision pin that locates parts accurately relative to each other."],
    ["Endmill", "A rotating cutter with teeth on its end and sides, used on a mill."],
    ["Feed rate", "How fast the tool moves through the work, in mm/min or in/min."],
    ["Fixture", "A device that holds and locates a workpiece for machining."],
    ["G-code", "The programming language that controls CNC machine motion."],
    ["GD&T", "Geometric dimensioning and tolerancing, a symbol system on drawings."],
    ["Gauge block", "A precision block of known length used as a reference standard."],
    ["Insert", "A replaceable cutting tip, usually carbide, held in a tool holder."],
    ["Interference fit", "A fit where the shaft is larger than the hole, needing force to assemble."],
    ["Knurl", "A pattern of ridges rolled into a surface to give grip."],
    ["MMC", "Maximum material condition, the size at which a feature has the most material."],
    ["Run-out", "How far a rotating surface wobbles from its true axis."],
    ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
    ["Spindle", "The rotating shaft that holds the tool or workpiece."],
    ["Tap", "A tool that cuts an internal thread."],
    ["Tolerance", "The permitted variation in a dimension."],
    ["Tramming", "Aligning a mill head or vise square to the table or axes."],
    ["Vernier", "A sliding scale that allows reading finer than the main graduations."],
    ["WHMIS", "Canada's workplace hazardous materials information system."],
    ["Work offset", "A stored position that tells the control where the part's zero is."]
  ];

  const reference = [
    {
      title: "Cutting speed and feed formulas",
      list: R([
        "Spindle speed (metric): N (rpm) = (1000 × cutting speed in m/min) ÷ (π × D in mm)",
        "Spindle speed (imperial): N (rpm) = (SFM × 12) ÷ (π × D in) ≈ (3.82 × SFM) ÷ D",
        "Feed rate for a mill: feed (mm/min) = rpm × number of teeth × feed per tooth",
        "Feed on a lathe: feed (mm/min) = rpm × feed per revolution",
        "Material removal rate = width of cut × depth of cut × feed rate",
        "Recommended cutting speeds come from tool and material suppliers, so check the manufacturer data"
      ]),
      note: "Example: 25 mm diameter at 100 m/min gives about 1273 rpm."
    },
    {
      title: "Metric tap drill sizes (coarse threads)",
      table: {
        head: ["Thread", "Pitch (mm)", "Tap drill (mm)"],
        rows: [["M3", "0.5", "2.5"], ["M4", "0.7", "3.3"], ["M5", "0.8", "4.2"], ["M6", "1.0", "5.0"], ["M8", "1.25", "6.8"], ["M10", "1.5", "8.5"], ["M12", "1.75", "10.2"]]
      },
      note: "Approximate tap drill = major diameter minus pitch. Always confirm against your tap chart."
    },
    {
      title: "Common imperial tap drills (UNC)",
      table: {
        head: ["Thread", "Threads per inch", "Tap drill"],
        rows: [["1/4-20", "20", "#7 (0.201 in)"], ["5/16-18", "18", "F (0.257 in)"], ["3/8-16", "16", "5/16 in"], ["1/2-13", "13", "27/64 in"]]
      }
    },
    {
      title: "Conversions and trig for setups",
      list: R([
        "1 in = 25.4 mm, and 0.001 in = 0.0254 mm",
        "Sine bar height: H = L × sin θ (a 100 mm bar at 15° needs a stack of about 25.88 mm)",
        "Taper per length = (D − d) ÷ L; tailstock offset for a full-length taper = (D − d) ÷ 2",
        "Bolt circle X = R × cos θ, Y = R × sin θ from the centre",
        "Measure at about 20 °C, the standard reference temperature for dimensional work"
      ])
    },
    {
      title: "Common CNC codes (Fanuc style)",
      table: {
        head: ["Code", "Meaning"],
        rows: [["G00", "Rapid positioning"], ["G01", "Linear interpolation at feed"], ["G02 / G03", "Circular arc clockwise / counter-clockwise"], ["G20 / G21", "Inch / metric units"], ["G40 / G41 / G42", "Cutter compensation cancel / left / right"], ["G43", "Tool length offset (with H)"], ["G54 to G59", "Work coordinate systems"], ["G90 / G91", "Absolute / incremental"], ["M03 / M05", "Spindle clockwise / stop"], ["M30", "Program end and reset"]]
      },
      note: "Codes vary between controls, so confirm with the machine's manual."
    },
    {
      title: "Common ISO fits (hole basis)",
      table: {
        head: ["Fit", "Type", "Typical use"],
        rows: [["H7/g6", "Clearance", "Sliding and close running fits"], ["H7/h6", "Clearance, close", "Parts that slide and locate"], ["H7/k6", "Transition", "Light press or tap into place"], ["H7/p6", "Interference", "Pressed assemblies"]]
      },
      note: "Limits depend on the nominal size, so look up the actual numbers in a standard table."
    }
  ];

  registerTrade({
    id: "machinist", store: "machinist", title: "Machinist", name: "Machinist", short: "machining",
    category: "Manufacturing · Metalworking · Tooling",
    summary: "Turn raw metal and plastic into precise parts using lathes, mills, grinders, and CNC machines, working to tight tolerances from drawings.",
    work: "Machinists set up and operate manual and CNC machine tools to make parts, tooling, and repair components. They read drawings, calculate speeds and feeds, measure with precision instruments, and solve problems with fits, finishes, and tolerances. Work is mostly indoors in machine shops, plants, and maintenance departments.",
    duration: "Usually about 4 years, varies by province",
    union: "International Association of Machinists and Aerospace Workers (IAM)",
    unionUrl: "https://www.goiam.org/",
    jobSearch: "machinist apprentice", journeySearch: "machinist",
    aliases: "machine shop cnc lathe mill turning milling g-code manufacturing tooling",
    tools: ["Calipers and micrometers", "Combination square and steel rule", "Dial indicator and magnetic base", "Deburring tool and files", "Safety glasses, boots, and hearing protection", "Scientific calculator and Machinery's Handbook"],
    insight: {
      skills: ["Math and trigonometry for setups", "Attention to detail and precise measuring", "Mechanical aptitude and problem solving", "Patience and consistent work habits"],
      hazards: ["Rotating parts: no loose clothing, jewellery, or gloves near spindles", "Flying chips and coolant: wear safety glasses with side shields", "Noise: wear hearing protection", "Heavy workpieces and chucks: use lifting aids and proper technique"],
      settings: ["Job shops and precision machine shops", "Manufacturing plants and automotive suppliers", "Aerospace and defence manufacturers", "Maintenance and repair departments"]
    },
    toolGroups, mediaGroups, practiceBank,
    roadmapSteps: [
      { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS and shop safety; requirements vary)", "Practise shop math, fractions, decimals, and basic geometry", "Apply to machine shops, manufacturers, and union or training programs, then register your apprenticeship"] },
      { title: "Year 1: shop safety and measuring", items: ["Learn machine guarding, lockout, and PPE", "Master the micrometer, caliper, and layout tools", "Operate drill presses, saws, and bench tools", "Learn basic lathe and mill operations", "Build your core tool kit (see Buying tools)"] },
      { title: "Year 2: manual machining", items: ["Calculate speeds, feeds, and depth of cut", "Turn, face, bore, and thread on engine lathes", "Set up mills and vises and use indicators", "Read orthographic drawings and tolerances"] },
      { title: "Year 3: precision and CNC", items: ["Learn grinding and precision measuring", "Learn fits, GD&T basics, and surface finish", "Set up and run CNC machines and edit simple programs", "Understand tool materials, coatings, and wear"] },
      { title: "Year 4 and beyond: advanced setups", items: ["Plan multi-operation parts and fixtures", "Program and prove out CNC jobs and troubleshoot scrap", "Apply inspection, calibration, and quality methods", "Mentor first-year apprentices"] },
      { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade page and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
    ],
    glossary,
    cards: [
      { front: "Spindle speed from cutting speed (metric)", back: "N = (1000 × Vc) ÷ (π × D)" },
      { front: "Mill feed rate", back: "rpm × number of teeth × feed per tooth" },
      { front: "Inches to millimetres", back: "1 in = 25.4 mm" },
      { front: "Tap drill, metric coarse", back: "Major diameter minus pitch (M8 × 1.25 uses 6.8 mm)" },
      { front: "Sine bar height", back: "H = L × sin θ" },
      { front: "Tailstock offset for a full-length taper", back: "(D − d) ÷ 2" },
      { front: "Drill point angle, general purpose", back: "118 degrees" },
      { front: "Climb milling", back: "Cutter rotation goes the same direction as feed at the cut." },
      { front: "One thimble division on a metric micrometer", back: "0.01 mm" }
    ],
    jobsIntro: "Look for job shops, manufacturers, aerospace and automotive suppliers, tool rooms, and plant maintenance departments.",
    tips: ["Bring a short resume, your safety tickets, and ID.", "Show interest in math, measuring, and making things.", "Visit shops in person when you can, and follow up.", "Ask what tools you need and what the employer supplies."],
    forumTopics: ["Starting out", "Lathe and mill work", "CNC and programming", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference
  });
}
