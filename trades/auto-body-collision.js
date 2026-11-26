// Auto Body and Collision Technician content. Practice questions are original study aids, not official Red Seal exam questions.
(() => {
  // Each row: [question, correct answer, [three wrong answers], explanation]. The correct position rotates per question.
  const bank = (rows, offset) => rows.map(([q, correct, wrong, explain], i) => {
    const answer = (i + offset) % 4;
    const options = [...wrong];
    options.splice(answer, 0, correct);
    return { q, options, answer, explain };
  });

  registerTrade({
    id: "auto-body-collision",
    store: "auto-body-collision",
    title: "Auto Body and Collision Technician",
    name: "Auto Body and Collision Technician",
    short: "collision repair",
    category: "Automotive · Collision Repair · Metalwork",
    summary: "Repair collision-damaged vehicles by straightening structures, replacing and welding panels, fixing plastics and glass, and restoring safety systems to manufacturer specifications.",
    work: "Collision technicians assess damage, measure and pull structures back to specification, cut out and replace panels, repair dents and plastics, and prepare vehicles for paint. Work is done in collision shops and dealership body shops, and follows manufacturer repair procedures closely because modern vehicles use high-strength steels, aluminum, adhesives, and driver-assistance sensors.",
    duration: "Usually 3–4 years, varies by province",
    union: "Unifor",
    unionUrl: "https://www.unifor.org/",
    profileUrl: "https://red-seal.ca/eng/trades/auto-body-col-tech.shtml",
    durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/298170/ca",
    jobSearch: "auto body collision technician apprentice",
    journeySearch: "auto body collision technician",
    aliases: "auto body repair collision repair body shop bodyman panel beater autobody dent repair frame straightening red seal 310b",
    tools: [
      "Hammer and dolly set",
      "Dual-action (DA) sander",
      "Respirator with fit testing",
      "Auto-darkening welding helmet and gloves",
      "Body files, spreaders, and picks",
      "Locking panel clamps"
    ],
    insight: {
      skills: ["Eye for shape, alignment, and panel gaps", "Mechanical aptitude and welding skills", "Patience and attention to detail", "Reading repair procedures and estimates"],
      hazards: ["Grinding sparks and flying debris: eye, face, and hearing protection", "Dust, solvents, and isocyanates: respirator and ventilation", "Welding arc and fumes: shade lens, fume extraction, and fire watch", "Airbags, fuel, and high-voltage parts on damaged vehicles: follow manufacturer procedures"],
      settings: ["Independent collision repair shops", "Dealership body shops", "Insurance-affiliated repair networks", "Fleet, bus, and specialty vehicle repair"]
    },
    toolGroups: [
      {
        title: "Day-one tools, buy once and buy well",
        note: "Professional-grade tools that hold their shape and accuracy for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
        items: [
          { name: "Body hammer and dolly set (Martin, Eastwood, or similar)", why: "Forged faces that stay true let you work metal back to shape with control.", search: "Martin body hammer dolly set auto body" },
          { name: "Body spoon set and pry tools", why: "Reach behind panels and spread force over a wide area without marking the surface.", search: "auto body spoon set dent pry tool" },
          { name: "Plastic spreaders and a mixing board", why: "Apply filler in thin, even layers and mix hardener cleanly.", search: "body filler spreaders mixing board auto body" },
          { name: "Body file and sanding block set", why: "Reveals highs and lows and keeps filler work flat.", search: "body file sanding block set auto body long board" },
          { name: "Half-face respirator with organic vapour and P100 cartridges", why: "Protects from dust and fumes. Get it fit tested and replace cartridges as directed.", search: "3M half face respirator organic vapor P100 cartridges" },
          { name: "Safety glasses, face shield, and hearing protection", why: "Grinding and sanding are loud and throw debris.", search: "safety glasses face shield earmuffs 3M" },
          { name: "Cut-resistant and mechanic's gloves, and nitrile gloves", why: "Sharp metal edges and chemicals are constant. Nitrile keeps products off your skin.", search: "cut resistant gloves nitrile gloves mechanic" },
          { name: "CSA-approved safety boots", why: "Heavy panels and sparks. Comfortable, rated protection is what you will wear.", search: "CSA safety boots Blundstone Dakota" },
          { name: "Panel clamps, locking pliers, and a magnet set", why: "Hold panels and parts in place for fitting and welding.", search: "Vise-Grip locking clamps panel clamp welding magnets" }
        ]
      },
      {
        title: "Build up in first and second year",
        note: "Buy these as the work calls for them. Ask your journeyperson what holds up in your shop.",
        items: [
          { name: "Dual-action (DA) sander", why: "The workhorse for feathering and finishing. Quality sanders are lighter and less tiring.", search: "DA sander 6 inch air random orbital auto body" },
          { name: "Pneumatic cut-off tool and air saw", why: "Cut panels along sectioning lines and remove damaged metal.", search: "pneumatic cut off tool air saw auto body" },
          { name: "Spot-weld cutter and drill bit set", why: "Remove factory spot welds without damaging the underlying panel.", search: "spot weld cutter drill bit set auto body" },
          { name: "Panel adhesive and rivet tools (if not supplied)", why: "Common in modern repairs. Use the products the manufacturer's procedure calls for.", search: "panel bonding adhesive applicator rivet gun auto body" },
          { name: "Stud welder or dent puller kit", why: "Pull dents where you cannot reach the back of the panel.", search: "stud welder dent pulling kit auto body" },
          { name: "Plastic repair kit with a plastic welder", why: "Repair bumper covers and other thermoplastic parts.", search: "plastic bumper repair kit plastic welder" },
          { name: "Cordless drill and impact driver (Milwaukee or Makita)", why: "Panel removal and fastener work. Choose one battery platform and stay with it.", search: "Milwaukee M18 FUEL drill impact driver combo" },
          { name: "Tool bag or mobile tool cart", why: "Keeps your tools organized and protected.", search: "mechanic tool cart tool bag" }
        ]
      },
      {
        title: "Later and specialized",
        note: "Often supplied by the shop or employer. Ask before buying.",
        items: [
          { name: "MIG welder rated for steel and aluminum", why: "Shops normally supply welders. Learn the specific equipment and settings manufacturers approve.", search: "MIG welder auto body steel aluminum Lincoln Miller" },
          { name: "Squeeze-type resistance spot welder", why: "Reproduces factory spot welds where manufacturers require them. Shop equipment.", search: "squeeze type resistance spot welder auto body" },
          { name: "Frame machine and anchoring system", why: "Pulls structures back to specification. Large shop equipment.", search: "auto body frame machine anchoring system" },
          { name: "Electronic measuring system (3D or mechanical)", why: "Verifies dimensions against manufacturer data before and after repair.", search: "auto body electronic measuring system tram gauge" },
          { name: "Aluminum repair station and dedicated tools", why: "Aluminum needs separate tools to avoid contamination and galvanic corrosion.", search: "aluminum repair dedicated tools auto body" },
          { name: "Self-piercing rivet gun", why: "Used on some manufacturers' structures. Training and procedure required.", search: "self piercing rivet tool automotive" }
        ]
      },
      {
        title: "School supplies for technical training",
        note: "What helps in the classroom for estimating, measuring, and repair procedures. Check with your school and your exam body about calculator rules before you buy.",
        items: [
          { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Estimating math, measuring diagonals, and conversions.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
          { name: "Steel ruler and tape measure (metric and imperial)", why: "Reading repair data in millimetres and inches.", search: "Stanley FatMax tape measure metric 5m steel ruler" },
          { name: "Digital caliper", why: "Checking panel thickness and fastener sizes.", search: "digital caliper 150mm" },
          { name: "Field notebook (Rite in the Rain)", why: "Record measurements, repair steps, and part numbers. Weatherproof paper survives a shop.", search: "Rite in the Rain field notebook" },
          { name: "Binder, dividers, and highlighters", why: "Organize notes by topic for study and exam review.", search: "binder dividers highlighters" },
          { name: "Collision repair textbook or study guide", why: "Reinforces classroom learning. Ask your school which edition they use.", search: "collision repair textbook auto body technology" },
          { name: "Fine-tip permanent markers and a paint pen", why: "Marking cut lines, panel position, and part labels.", search: "Sharpie fine point Markal paint marker" }
        ]
      }
    ],
    mediaGroups: [
      {
        title: "Official and standards resources",
        items: [
          { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare, including the trade profile for your trade.", url: "https://red-seal.ca/eng/welcome.shtml" },
          { name: "I-CAR", desc: "Collision repair training and technical resources, including welding and structural repair topics.", url: "https://www.i-car.com/" },
          { name: "Automotive Industries Association of Canada (AIAC)", desc: "Industry information for the Canadian automotive aftermarket.", url: "https://www.aiacanada.com/" },
          { name: "Unifor", desc: "Union representing many automotive and collision workers in Canada.", url: "https://www.unifor.org/" },
          { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Plain-language WHMIS, welding, noise, and respirator information.", url: "https://www.ccohs.ca/" }
        ]
      },
      {
        title: "Video searches",
        note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and manufacturer repair procedures.",
        items: [
          { name: "Hammer and dolly basics", desc: "Metalworking techniques for removing dents.", url: "https://www.youtube.com/results?search_query=hammer+and+dolly+basics+auto+body+dent+repair" },
          { name: "Body filler application", desc: "Mixing, applying, and shaping filler.", url: "https://www.youtube.com/results?search_query=body+filler+application+auto+body+beginner" },
          { name: "MIG welding auto body panels", desc: "Plug welds, butt welds, and heat control.", url: "https://www.youtube.com/results?search_query=MIG+welding+auto+body+panels+tutorial" },
          { name: "Unibody structure and crumple zones", desc: "How a unibody structure absorbs energy.", url: "https://www.youtube.com/results?search_query=unibody+structure+crumple+zones+collision+repair" },
          { name: "Frame straightening and measuring", desc: "Anchoring, pulling, and checking dimensions.", url: "https://www.youtube.com/results?search_query=collision+repair+frame+straightening+measuring+system" },
          { name: "Plastic bumper repair", desc: "Identifying plastics and repairing bumper covers.", url: "https://www.youtube.com/results?search_query=plastic+bumper+repair+plastic+welding+auto+body" },
          { name: "Collision estimating basics", desc: "Writing an estimate and supplements.", url: "https://www.youtube.com/results?search_query=collision+repair+estimating+basics+supplement" },
          { name: "Aluminum body repair", desc: "Working with aluminum panels and avoiding contamination.", url: "https://www.youtube.com/results?search_query=aluminum+body+repair+collision+dedicated+tools" }
        ]
      },
      {
        title: "Audio, beginner (pre-apprentice and year 1)",
        note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for collision repair yourself.",
        items: [
          { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
          { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
          { name: "YouTube: auto body apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=auto+body+apprentice+podcast" }
        ]
      },
      {
        title: "Audio, intermediate (years 2-3)",
        note: "Trade-knowledge talk that builds on what you do on the job.",
        items: [
          { name: "YouTube: collision repair podcast", desc: "Technicians and shop owners talk repair methods and industry changes.", url: "https://www.youtube.com/results?search_query=collision+repair+podcast+technician" },
          { name: "YouTube: OEM repair procedures and welding (listen-along)", desc: "Talks on manufacturer procedures to hear while commuting.", url: "https://www.youtube.com/results?search_query=collision+repair+OEM+repair+procedures+welding+podcast" },
          { name: "YouTube: body shop stories and tips (audio)", desc: "Job-site lessons from working body techs.", url: "https://www.youtube.com/results?search_query=body+shop+podcast+tips+stories+collision" }
        ]
      },
      {
        title: "Audio, advanced (year 4 to journeyperson)",
        note: "Exam prep, estimating, shop business, and leadership.",
        items: [
          { name: "YouTube: Red Seal auto body and collision exam prep", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=Red+Seal+auto+body+collision+technician+exam+preparation" },
          { name: "YouTube: collision shop business and estimating podcast", desc: "Estimating, supplements, and running a body shop.", url: "https://www.youtube.com/results?search_query=collision+shop+business+estimating+podcast" },
          { name: "YouTube: leading a crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: "https://www.youtube.com/results?search_query=skilled+trades+leadership+mentoring+apprentices+podcast" }
        ]
      }
    ],
    practiceBank: {
      1: bank([
        ["Which document describes the hazards and first-aid measures for a body filler or primer?", "Safety Data Sheet (SDS)", ["The written repair estimate prepared by the shop for the customer", "Vehicle registration", "Paint code label"], "Under WHMIS, products have labels and SDS that describe hazards, handling, and first aid."],
        ["What is the main hazard of dust from sanding body filler and primer?", "Inhaling fine particles", ["Slipping on the floor only", "Magnetic attraction", "Radiation"], "Wear a properly fitted respirator and use dust extraction when available."],
        ["Why is a guard kept on a grinder?", "It controls sparks and protects you if the wheel breaks", ["It makes the grinder quieter and reduces vibration in your hands", "It cools the wheel", "It sharpens the wheel"], "Never remove a guard. Use the correct wheel and wear eye and face protection."],
        ["Hearing protection is generally required when noise exposure exceeds about:", "85 dBA over a work shift (check your jurisdiction)", ["20 dBA, about the level of a quiet whisper at work", "45 dBA", "150 dBA"], "Grinders and air tools often exceed this. Limits vary slightly by jurisdiction."],
        ["Which sandpaper is finer: P80 or P320?", "P320", ["P80", "They are the same", "It depends on the colour"], "A higher grit number means finer abrasive. Work from coarse to fine."],
        ["A unibody vehicle is one where:", "The body and frame are built as one structure", ["The body sits on a separate ladder frame bolted to the cab", "There is no steel", "The engine is the structure"], "Body-on-frame vehicles have a separate frame. Unibody structures are repaired to strict dimensional specifications."],
        ["The purpose of crumple zones is to:", "Absorb crash energy and protect the occupant compartment", ["Make repairs easier by keeping all of the damage in one outer panel", "Reduce paint use", "Add weight"], "Parts of the structure are designed to deform. Repair them only as the manufacturer allows."],
        ["The pillar between the front and rear doors is the:", "B-pillar", ["A-pillar", "C-pillar", "Rocker panel"], "The A-pillar frames the windshield, and the C-pillar is behind the rear doors."],
        ["Which tool compares diagonal measurements to check for structural damage?", "Tram gauge", ["Feeler gauge", "Dwell meter", "Torque wrench"], "Equal diagonals indicate symmetry. Electronic systems compare to manufacturer data."],
        ["Arc welding without proper eye protection can cause:", "Arc eye, a painful burn to the cornea", ["Colour blindness that lasts for several days afterward", "Dry skin", "Hearing loss"], "Use an auto-darkening or fixed shade helmet and protect others nearby."],
        ["What should you do with a hammer and dolly when removing a dent?", "Work gradually from the outside edge toward the highest point", ["Hit as hard as possible in one spot to flatten the high area at once", "Use only a sledge", "Heat the panel red-hot first"], "Controlled strokes relieve stress and stretch the metal back to shape."],
        ["Body filler should be applied:", "In thin layers to clean, properly prepared metal", ["Over rust and old paint to save time on preparation", "Thick enough to fill any dent", "Without hardener"], "Filler is for smoothing small imperfections, not for repairing structural or heavy damage."],
        ["Mixing too much or too little hardener in polyester filler can cause:", "Poor curing and adhesion problems", ["Faster paint drying and a harder surface for sanding", "Better strength", "No effect"], "Follow the manufacturer's mixing instructions."],
        ["How many millimetres are in one inch?", "25.4", ["2.54", "10", "254"], "1 in = 25.4 mm exactly."],
        ["Which extinguisher class is for flammable liquids such as thinner and gasoline?", "Class B", ["Class A", "Class C", "Class D"], "Know where your shop's extinguishers are and keep welding areas clear of flammables."],
        ["Where would you find a vehicle's paint code?", "On the vehicle identification or certification label", ["On the tire sidewall next to the load and pressure rating", "On the oil dipstick", "On the engine block only"], "The label is often in the driver's door jamb."],
        ["Why disconnect the battery before welding on a vehicle, where the manufacturer procedure requires it?", "To help protect electronic modules from voltage spikes", ["To cool the metal so that the nearby panels do not warp or distort", "To brighten the arc", "To avoid dust"], "Follow the repair procedure. Some also require disabling airbag and other systems."],
        ["Which tape or covering protects glass and trim from weld spatter?", "A welding blanket or spatter shield", ["Masking tape and paper laid over the glass and trim", "Cardboard only", "Nothing"], "Protect glass, paint, and interiors before heat work."]
      ], 0),
      2: bank([
        ["A common shielding gas for MIG welding steel body panels is:", "A blend of argon and CO2, such as 75 percent argon and 25 percent CO2", ["100 percent oxygen, which makes the arc hotter and the weld cleaner", "Acetylene", "Nitrogen"], "Follow the manufacturer's procedure. Aluminum requires pure argon."],
        ["Which shielding gas is used for MIG welding aluminum?", "100 percent argon", ["75 percent argon and 25 percent CO2", "100 percent CO2", "Oxygen"], "Aluminum welding needs the correct filler and clean, dedicated equipment."],
        ["A squeeze-type resistance spot welder:", "Joins panels by passing current through them under clamping pressure", ["Uses a gas flame to melt the panels together along the outer edge", "Needs filler rod", "Cuts panels"], "It reproduces factory spot welds where the manufacturer specifies."],
        ["How can you identify a plastic part's material?", "Check the ISO code stamped on the part, such as >PP< or >TPO<", ["By its colour, since each plastic type is moulded in its own shade", "By weighing it", "By its smell only"], "Identification tells you whether a repair method is allowed and which products to use."],
        ["Why should aluminum and steel not share grinding tools and abrasives?", "Cross-contamination causes galvanic corrosion", ["It dulls the abrasive faster and weakens the tool body", "It weakens the tool", "There is no reason"], "Use dedicated aluminum tools and keep steel dust away from aluminum."],
        ["After welding, why apply corrosion protection to the inside of the joint?", "Heat destroys the factory coating, which allows rust to form", ["To make the welds look better and sand smoother before they are painted", "To cool the metal", "To add strength"], "Use weld-through primer, seam sealer, and cavity wax where the manufacturer specifies."],
        ["Before working near airbags, you should:", "Follow the manufacturer's procedure to disable the system and wait the specified time", ["Hit the airbag module with a hammer so the charge is released safely", "Cut the wires immediately", "Ignore it"], "Stored energy can deploy an airbag unexpectedly."],
        ["High-strength steels are generally:", "Not to be heated beyond the manufacturer's limits", ["Always safe to heat red-hot, the same as mild steel", "Soft and easy to reshape", "Free of any repair limits"], "Excessive heat can weaken the steel and reduce crash performance."],
        ["Seam sealer is applied to:", "Seal joints and keep out water, noise, and dust", ["Strengthen the frame joints so that welds are not needed in them", "Fill dents", "Replace welding"], "Match the original appearance and the manufacturer's product."],
        ["A butt weld with a backing or a plug weld in a replacement panel is chosen based on:", "The manufacturer's repair procedure", ["The welder's preference and the equipment on hand", "The paint colour", "Shop tradition"], "Procedures state weld type, number, and spacing."],
        ["Heat shrinking is used on stretched metal to:", "Draw the metal back to its original shape", ["Cut it free so that the stretched section can be removed", "Harden it", "Make it thicker"], "Control heat and cool the area as directed to avoid warping."],
        ["A dent puller using welded studs is used when:", "You cannot reach the back of the panel", ["The panel is plastic and cannot be pulled by hand", "The panel needs painting only", "The panel is glass"], "Remove studs and finish the area properly after pulling."],
        ["Which of these is a sign of a damaged unibody structure?", "Uneven or tapering panel gaps and doors that do not close properly", ["A dirty windshield and wiper streaks that appear after a car wash", "A noisy radio", "Faded paint"], "Gaps indicate shifts in the structure. Measure to confirm."],
        ["Panel bonding adhesive:", "Joins panels where the manufacturer allows, often combined with rivets or welds", ["Replaces all welding and riveting on every structural panel in the vehicle", "Is used for glass only", "Is never used on modern cars"], "Follow the stated cure times and surface preparation."],
        ["A tape measure and a dimensional specification chart are used to:", "Compare measured points to the manufacturer's data", ["Check tire pressure and wheel alignment after the repair", "Estimate paint", "Adjust headlights"], "Dimensional data lists control points and tolerances."],
        ["Which of the following is thermoplastic repair equipment?", "A plastic welder", ["A tram gauge", "A torque wrench", "A spot weld cutter"], "Plastic welding melts the material along with a compatible rod."],
        ["Before cutting a panel, you should:", "Check for wiring, hoses, and reinforcements behind it", ["Cut at once, as the manufacturer's lines are already marked", "Heat the panel", "Remove the paint around it only"], "Locate hidden components first to avoid damage."],
        ["Sectioning a structural part is only done:", "At locations the manufacturer approves", ["Anywhere you like, as long as the cut is straight", "Where it is easiest to reach", "At the highest point"], "Unapproved cuts can change how the part absorbs crash energy."]
      ], 1),
      3: bank([
        ["Rivets and adhesives are specified on some structures because:", "Heat from welding could damage the metal or the joint's strength", ["They are cheaper and faster to install than welds on a production line", "They look nicer", "They are always faster"], "Follow the manufacturer's joining method."],
        ["Self-piercing rivets:", "Join panels from one side without pre-drilled holes", ["Need a gas flame to soften the metal before joining", "Need a threaded hole", "Can be reused"], "Use the specified rivet and die for the material stack."],
        ["After a collision, driver-assistance cameras and radar may need:", "Calibration to the manufacturer's procedure", ["No attention, since the sensors reset on their own", "A new paint job", "Tire rotation"], "Calibration confirms they see accurately after repair."],
        ["High-voltage cables on hybrid and electric vehicles are typically:", "Orange", ["Green, the same as the low-voltage ground cables in the vehicle", "Yellow", "Brown"], "Follow the manufacturer's procedure for de-energizing before working on or near them."],
        ["Pulling a structure is generally done:", "With anchoring and multiple controlled pulls while measuring", ["With one big pull using the heaviest chain and clamp available at once", "Without anchoring", "By hand"], "Pull opposite the direction of damage and re-measure often."],
        ["Stress relieving during structural repair means:", "Releasing stored stress in damaged metal as it is pulled", ["Painting the area to seal in the stress before the repair is finished", "Welding it faster", "Adding filler"], "Without stress relief, the part may spring back out of position."],
        ["Direct damage is:", "Damage at the point of impact", ["Damage far from the impact, such as in the rear panels", "Paint scratches only", "Interior damage only"], "Indirect damage occurs elsewhere as forces travel through the vehicle."],
        ["A pulled-out dent in a high-strength steel part is generally:", "Replaced or repaired only as the manufacturer permits", ["Heated until it moves back into shape, then quenched with water", "Always repaired by pulling", "Ignored"], "Some steels cannot be straightened or heated."],
        ["Galvanic corrosion occurs when:", "Dissimilar metals are in contact with an electrolyte", ["Metal is painted with a thick layer of primer that traps moisture", "Metal is hot", "Metal is cold"], "Use isolating adhesives or coatings when joining aluminum and steel."],
        ["Why wear a welding helmet with the right shade number?", "To protect your eyes from arc brightness and UV", ["To keep your hair clean and to filter fine dust from the air you breathe", "To filter dust", "To stay warm"], "Auto-darkening helmets should be set to the process."],
        ["When welding galvanized or coated steel you should:", "Use fume extraction and a respirator as needed", ["Do nothing special, since the coating burns off safely", "Weld in a closed room", "Add oil"], "Zinc fumes can cause metal fume fever."],
        ["After repairing a vehicle with active safety systems, it is good practice to:", "Perform a post-repair scan and clear or verify codes", ["Return it immediately, since the lights on the dash are off", "Skip scanning", "Disconnect modules"], "Modules may have stored faults from the collision."],
        ["A weld-through primer is:", "A conductive coating applied to surfaces before spot or plug welding", ["A thick body filler applied to low spots and sanded before paint", "A top coat", "A cleaner"], "It protects the surface that will be hidden after welding."],
        ["Cavity wax is applied:", "Inside closed sections to protect against corrosion", ["On windshields and side glass to keep the surface from fogging in cold weather", "On tires", "On brake rotors"], "Restore anti-corrosion protection after structural repairs."],
        ["The first priority when a damaged vehicle arrives is typically to:", "Check for hazards such as fuel leaks, airbags, and high voltage", ["Start painting right away, so the customer gets the car back sooner", "Order parts", "Polish the paint"], "Safety assessment comes before disassembly."],
        ["Which of the following is a typical repair order of operations?", "Estimate, tear down and measure, structural repair, panel repair, then refinish and reassemble", ["Paint first, then measure the structure, then weld in the new panels", "Weld, then estimate", "Reassemble before structural work"], "Structural dimensions must be correct before panels are fitted."],
        ["Why does an aluminum panel need different repair methods than steel?", "It has less 'memory' and different thermal properties", ["It is much heavier than steel and cannot be repaired with any heat", "It is magnetic", "It cannot be painted"], "Follow aluminum-specific procedures and training."]
      ], 2),
      4: bank([
        ["The manufacturer's repair procedure takes priority over:", "General shop habits and rules of thumb", ["The vehicle owner's manual and the customer's wishes", "Safety rules", "Paint code"], "Procedures reflect the testing and design of the specific vehicle."],
        ["A supplement is:", "An additional estimate for hidden damage found during repair", ["A paint additive used to speed up the drying time in a cold shop", "A part number", "A discount"], "Document hidden damage with photos and communicate with the insurer."],
        ["A collision estimate typically includes:", "Labour hours, parts, paint and materials, and sublet items", ["Only paint costs and the clear coat applied over the entire vehicle", "Only parts", "Owner's insurance premium"], "Estimates help set expectations. Keep them accurate."],
        ["What is a repair vs replace decision based on?", "Manufacturer procedures, safety, repairability, and cost", ["Which tool or measuring system is free and available in the shop that day", "The technician's preference only", "The colour"], "Safety and manufacturer guidance come first."],
        ["Dimensional tolerance checks should be done:", "Before and after structural repair", ["Only after painting, once the final colour is on", "Never", "Only on the roof"], "Documented measurements show the structure is within specification."],
        ["A diminished-value concern is:", "A reduction in a vehicle's market value after repair", ["A paint defect, such as dieback, that shows up after the first wash", "A welding error", "A tool warranty"], "Quality documented repairs help preserve confidence."],
        ["Quality repairs after structural work should include:", "A final inspection, test drive, and calibration of safety systems as needed", ["Only a car wash and a quick polish of the paint before delivery", "A paint polish", "No further check"], "Verify operation of lights, sensors, and doors."],
        ["Why document repairs with photos?", "To record pre-existing damage, hidden damage, and procedures followed", ["To post the work online and show new customers the finished results", "To avoid estimating", "To avoid measuring"], "Records protect the customer and the shop."],
        ["Which of the following is part of cycle-time management in a shop?", "Scheduling work so parts, paint, and bays are ready when needed", ["Starting every job at once so that no vehicle waits in the queue", "Ignoring parts delays", "Working without a plan"], "Efficient flow improves quality and turnaround."],
        ["If you find a repair procedure unclear you should:", "Contact the manufacturer or ask a lead hand before proceeding", ["Guess based on a similar repair that you have done on another vehicle", "Skip it", "Use any adhesive"], "Never improvise on structural or safety parts."],
        ["Which statement about total loss is correct?", "The decision involves repair cost, vehicle value, and insurer or provincial rules", ["It depends only on the paint condition and the age of the car", "It applies to any damage", "It is decided by the apprentice"], "Rules vary by province and insurer."],
        ["Why is an I-CAR or manufacturer certification valuable?", "It shows training on current repair methods", ["It replaces apprenticeship hours and the trade exam", "It is required for all cleaning", "It sets paint prices"], "Ongoing training is vital as materials and structures change."],
        ["Why re-measure frequently while pulling a structure?", "To confirm points are moving toward specification without creating new damage", ["To warm up the metal so that it moves more easily under the pull", "To save time on paperwork", "To check paint thickness"], "Measuring between pulls keeps the repair controlled and documented."],
        ["A recalibration of the steering angle sensor may be required after:", "Alignment or suspension and steering repair", ["Tire inflation and rotation done at a regular service", "Wiper replacement", "Painting a bumper"], "Follow scan tool and manufacturer instructions."],
        ["Which hazard is specific to damaged high-voltage battery packs?", "Thermal runaway and electric shock", ["Dusty air only, from the lining of the pack", "Noise only", "Sunlight"], "Follow the manufacturer's procedures and isolate the vehicle."],
        ["Why keep tools for aluminum separate in the shop?", "To prevent contamination that leads to corrosion and weld defects", ["To save money on abrasives, wheels, and cutting discs for the shop", "Because it looks neat", "To avoid sharpening"], "Dedicated tools, bench areas, and abrasives are best practice."],
        ["What is a sensible way to mentor a first-year apprentice?", "Demonstrate safely, explain why, and check their work", ["Leave them alone to learn the hard way on their own, without any feedback", "Rush them", "Ignore safety"], "Good habits start with clear demonstration and feedback."],
        ["After welding on a vehicle, which check is important?", "Inspect weld quality and restore corrosion protection", ["Ignore the welds, since the scan tool will flag any defect", "Paint over bare metal", "Skip fire watch"], "Check for fire hazards after hot work as well."]
      ], 3)
    },
    roadmapSteps: [
      { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS and respirator fit testing; requirements vary)", "Prepare a resume and apply to collision shops and dealership body shops", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
      { title: "Year 1: foundations and prep work", items: ["Learn shop safety, PPE, and respirator use", "Remove and install trim, bumpers, and bolt-on panels", "Learn sanding, masking, and body filler basics", "Learn hammer and dolly metalworking", "Build your core tool kit (see Buying tools)"] },
      { title: "Year 2: welding and panel repair", items: ["Learn MIG welding and plug welding on steel", "Repair and replace non-structural panels", "Learn plastic identification and repair", "Learn corrosion protection and seam sealing"] },
      { title: "Year 3: structure and measuring", items: ["Learn unibody construction and damage analysis", "Learn measuring and structural pulling", "Learn about high-strength steel and aluminum repair requirements", "Learn safety system and electrical basics"] },
      { title: "Year 4 and beyond: advanced repair", items: ["Perform structural repair using manufacturer procedures", "Learn estimating, supplements, and documentation", "Work with calibration, high-voltage, and ADAS systems under proper training", "Mentor first-year apprentices"] },
      { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
    ],
    glossary: [
      ["A-pillar", "The roof support at each side of the windshield."],
      ["ADAS", "Advanced driver-assistance systems such as cameras and radar."],
      ["B-pillar", "The roof support between the front and rear doors."],
      ["Body filler", "A polyester putty used to smooth minor surface imperfections."],
      ["Butt weld", "A weld joining two panel edges that meet edge to edge."],
      ["Cavity wax", "Wax sprayed inside closed sections to prevent rust."],
      ["Crumple zone", "A structure area designed to deform and absorb crash energy."],
      ["DA sander", "Dual-action sander that spins and oscillates."],
      ["Dimensional specification", "Manufacturer data listing measurement points and tolerances."],
      ["Dolly", "A hand-held steel block used behind a panel when hammering."],
      ["Feather edge", "Sanding the edge of a repair so the paint transitions smoothly."],
      ["Galvanic corrosion", "Corrosion caused by two dissimilar metals in contact with moisture."],
      ["High-strength steel", "Steel with greater strength that has repair limits set by the manufacturer."],
      ["Isocyanate", "A chemical in some paints and coatings that is a respiratory sensitizer."],
      ["MIG welding", "Gas metal arc welding using a continuous wire electrode."],
      ["OEM", "Original equipment manufacturer, the maker of the vehicle."],
      ["Panel gap", "The space between adjacent panels, which should be even."],
      ["Plug weld", "A weld made through a hole in one panel to join it to another."],
      ["Rocker panel", "The structural panel beneath the doors."],
      ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
      ["Seam sealer", "Material applied to joints to keep out water and noise."],
      ["Sectioning", "Cutting and joining a part at a manufacturer-approved location."],
      ["Spot weld", "A weld made by resistance heating between two clamped panels."],
      ["Supplement", "An additional estimate for hidden damage found during repair."],
      ["Tram gauge", "A measuring tool that compares distances between points."],
      ["Unibody", "A vehicle design where the body and frame are one structure."],
      ["WHMIS", "Canada's workplace hazardous materials information system."]
    ],
    cards: [
      { front: "Unibody vs body-on-frame", back: "Unibody: body and frame are one structure. Body-on-frame: the body sits on a separate frame." },
      { front: "Shielding gas for steel and aluminum MIG welding", back: "Steel: commonly argon and CO2 mix. Aluminum: 100 percent argon." },
      { front: "Sandpaper grit direction", back: "Higher number is finer. Work from coarse to fine." },
      { front: "A-pillar, B-pillar, C-pillar", back: "A: beside the windshield. B: between front and rear doors. C: behind the rear doors." },
      { front: "Why avoid excess heat on high-strength steel?", back: "It can reduce strength and crash performance. Follow the manufacturer's limits." },
      { front: "Why dedicated aluminum tools?", back: "To prevent steel contamination and galvanic corrosion." },
      { front: "After welding", back: "Restore corrosion protection with primer, sealer, and cavity wax." },
      { front: "Inches to millimetres", back: "1 in = 25.4 mm" },
      { front: "Sectioning", back: "Only at manufacturer-approved locations and methods." }
    ],
    jobsIntro: "Look for independent collision repair shops, dealership body shops, insurance-network repair facilities, and fleet, transit, or heavy-truck body shops.",
    tips: ["Bring a short resume, your safety tickets, and ID, and mention any hands-on or bodywork experience.", "Show an eye for detail and willingness to learn welding and measuring.", "Visit shops in person and follow up, and ask whether a short trial day is possible.", "Ask what tools you need and what the employer supplies."],
    forumTopics: ["Starting out", "Welding and structural repair", "Plastics, aluminum, and materials", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
    reference: [
      {
        title: "Conversions",
        list: [
          "1 in = 25.4 mm, and 1 ft = 304.8 mm",
          "1 psi ≈ 6.895 kPa",
          "1 mm ≈ 0.0394 in",
          "1 US gallon ≈ 3.785 L, and 1 Imperial gallon ≈ 4.546 L",
          "1 lb ≈ 0.4536 kg"
        ]
      },
      {
        title: "Abrasive grit guide (P-grade)",
        table: {
          head: ["Grit range", "Typical use"],
          rows: [
            ["P40 to P80", "Heavy removal and shaping filler"],
            ["P120 to P180", "Feathering and finishing filler"],
            ["P240 to P320", "Sanding primer and final smoothing"],
            ["P400 and finer", "Fine finishing before paint, per the paint maker"]
          ]
        },
        note: "Higher numbers are finer. Follow the coating manufacturer's technical data sheet for the required final grit."
      },
      {
        title: "Shielding gas quick guide",
        table: {
          head: ["Metal", "Common MIG gas", "Note"],
          rows: [
            ["Mild and high-strength steel", "Argon and CO2 blend (commonly 75/25)", "Follow OEM procedure"],
            ["Aluminum", "100 percent argon", "Dedicated tools and clean filler"],
            ["Silicon bronze brazing", "100 percent argon", "Only where OEM permits"]
          ]
        }
      },
      {
        title: "Repair order of operations",
        list: [
          "Assess for hazards: fuel, airbags, high voltage, and sharp edges.",
          "Document damage with photos and write an estimate.",
          "Tear down enough to find hidden damage and measure the structure.",
          "Repair structure to manufacturer dimensions and procedure.",
          "Fit and repair panels, restore corrosion protection, and prepare for refinish.",
          "Reassemble, scan, calibrate systems as required, and perform final inspection."
        ]
      },
      {
        title: "Plastic identification codes",
        table: {
          head: ["Code", "Material"],
          rows: [
            ["PP", "Polypropylene"],
            ["TPO", "Thermoplastic polyolefin"],
            ["ABS", "Acrylonitrile butadiene styrene"],
            ["PUR", "Polyurethane"],
            ["PC", "Polycarbonate"]
          ]
        },
        note: "Codes are usually stamped inside the part between greater-than and less-than symbols. Not every plastic can be welded."
      }
    ]
  });
})();
