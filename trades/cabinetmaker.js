// Cabinetmaker guide. Practice questions are original study aids, not official Red Seal exam questions.

const cabQ = (() => {
  let n = 0;
  return (q, right, wrong, explain) => {
    const pos = (n * 3 + 1 + (n >> 2)) % 4;
    n += 1;
    const options = wrong.slice();
    options.splice(pos, 0, right);
    return { q, options, answer: pos, explain };
  };
})();

const cabYt = (s) => "https://www.youtube.com/results?search_query=" + s;
const cabNote = "Professional-grade tools that hold their edge and accuracy for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer or shop supplies first.";

registerTrade({
  id: "cabinetmaker",
  store: "cabinetmaker",
  title: "Cabinetmaker",
  name: "Cabinetmaker",
  short: "cabinetmaking",
  category: "Woodworking · Millwork · Shop",
  summary: "Cabinetmakers design, build, finish, and install cabinets, casework, countertops, and architectural millwork from wood and sheet materials using machines, hand tools, and careful joinery.",
  work: "Cabinetmakers read shop drawings, prepare cut lists, machine and assemble parts, and apply finishes. Most work happens in a shop with stationary machines and dust control, followed by installation on site. Accuracy, safe machine use, and an eye for detail are central to the trade.",
  duration: "Usually 3 to 4 years (varies by province)",
  union: "Architectural Woodwork Manufacturers Association of Canada (AWMAC)",
  unionUrl: "https://www.awmac.com/",
  jobSearch: "cabinetmaker apprentice",
  journeySearch: "cabinetmaker",
  aliases: "cabinet maker millwork woodworker woodworking furniture kitchen cabinets casework finishing joiner joinery shop",
  tools: ["Tape measure and combination square", "Marking gauge and sharp pencils", "Sharp chisels and block plane", "Cordless drill and clamps", "Random orbit sander", "CSA eye, hearing, and dust protection"],
  insight: {
    skills: ["Accurate measuring and joinery", "Reading shop drawings and cut lists", "Safe machine setup and operation", "Surface preparation and finishing"],
    hazards: ["Table saw kickback: use riving knife, guard, and push sticks", "Fine wood dust: use dust collection and a respirator", "Solvent and finish fumes: ventilate and use the right respirator", "Rags with oil finishes: dispose of them safely to avoid fires"],
    settings: ["Custom cabinet and millwork shops", "Kitchen and bath cabinet manufacturers", "Commercial and architectural woodwork companies", "Installation crews and renovation firms"]
  },
  toolGroups: [
    {
      title: "Day-one tools, buy once and buy well",
      note: cabNote,
      items: [
        { name: "Stanley FatMax or Milwaukee 5 m (16 ft) tape measure", why: "A stiff, readable blade in metric and imperial for accurate layout. Check the hook for accuracy against a rule.", search: "Stanley FatMax Milwaukee 16 ft tape measure metric" },
        { name: "Starrett or Empire 300 mm (12 in) combination square", why: "Checks square, marks lines, and sets depths. A machined square holds its accuracy for years.", search: "Starrett 12 inch combination square" },
        { name: "Marking gauge and marking knife", why: "A knife line gives a precise reference for hand tools, and a gauge repeats a measurement exactly.", search: "Veritas Lee Valley marking gauge marking knife" },
        { name: "Narex or Veritas bevel-edge chisel set (6, 12, 19, 25 mm)", why: "Fitting joints and cleaning corners. Keep them sharp, and always use them with both hands behind the edge.", search: "Narex bevel edge chisel set 6 12 19 25 mm" },
        { name: "Block plane (low angle)", why: "Trims end grain and edges and eases sharp corners by hand.", search: "Stanley Veritas low angle block plane" },
        { name: "Japanese pull saw or fine back saw", why: "Fast, clean hand cuts for trimming and joinery.", search: "Gyokucho Ryoba Japanese pull saw" },
        { name: "Bar and F-style clamps (300 mm to 900 mm)", why: "Glue-ups need even clamp pressure. You can never own too many good clamps.", search: "Bessey bar clamps F-style clamps 24 inch" },
        { name: "18V cordless drill and impact driver", why: "Drilling, driving screws, and installing hardware. Pick one battery platform and stay with it.", search: "18V drill impact driver combo kit Milwaukee Makita DeWalt" },
        { name: "CSA-approved safety glasses (Z94.3), hearing protection (Z94.2), dust mask or respirator (Z94.4), and CSA safety boots", why: "Dust, noise, and dropped stock are constant shop hazards. Pick a comfortable, certified set you will actually wear.", search: "CSA Z94.3 safety glasses earmuffs Z94.2 3M half mask respirator P100 safety boots" }
      ]
    },
    {
      title: "Build up in first and second year",
      note: "Buy these as the work calls for them. Ask your shop which brands and platforms it already uses.",
      items: [
        { name: "Random orbit sander (125 mm or 150 mm) with dust extraction", why: "The main sanding tool for flat surfaces. Connect it to a vacuum to reduce airborne dust.", search: "Festool Mirka Bosch random orbit sander 5 inch dust extraction" },
        { name: "Sanding sheets in 80, 120, 150, 180, and 220 grits", why: "Work through grits in order without skipping more than one step to avoid scratches that show under finish.", search: "hook and loop sanding discs 5 inch assorted grit 80 120 180 220" },
        { name: "Trim router with roundover, chamfer, and straight bits", why: "Edge profiles, hinge mortises, and trimming edge banding. Carbide bits stay sharp longer.", search: "Bosch Colt Makita trim router bit set" },
        { name: "Pocket-hole jig (Kreg)", why: "A fast, strong way to join face frames and cabinet parts. Match the screw to the wood type.", search: "Kreg pocket hole jig 720" },
        { name: "Forstner bit set and 35 mm hinge-cup bit", why: "Clean flat-bottomed holes and cup holes for concealed hinges.", search: "Forstner bit set 35 mm hinge boring bit" },
        { name: "Shelf pin jig and 5 mm brad-point bit", why: "Gives evenly spaced adjustable shelf holes that line up on every side.", search: "Kreg shelf pin jig 5 mm" },
        { name: "Dial caliper (digital or analog)", why: "Measures thickness of materials, hardware, and tolerances to a fraction of a millimetre.", search: "Mitutoyo digital caliper 150 mm" },
        { name: "Woodworking tool bag or tote and apron", why: "Keeps hand tools organized for site installs and protects your clothing.", search: "Veto Pro Pac tool bag shop apron woodworker" }
      ]
    },
    {
      title: "Later and specialized",
      note: "Often supplied by the shop or employer. Ask before buying.",
      items: [
        { name: "Cabinet table saw with riving knife and guard (shop equipment)", why: "The core machine of the shop. Training and approval are needed before using it.", search: "SawStop cabinet table saw riving knife" },
        { name: "Jointer and thickness planer (shop equipment)", why: "Flatten and square solid stock. Learn the safe setup and push techniques first.", search: "jointer thickness planer combo shop woodworking" },
        { name: "Track saw with guide rails", why: "Clean, accurate sheet-good cuts. Often replaces a panel saw in small shops and for site work.", search: "Festool Makita track saw guide rail" },
        { name: "Edge bander (shop equipment) or handheld edge banding trimmer", why: "Applies and trims PVC or veneer edge banding on sheet goods.", search: "edge banding trimmer flush trim handheld" },
        { name: "Dust collector or cyclone and hoses", why: "Captures dust at the source, which protects lungs and helps prevent fires. Usually a shop investment.", search: "dust collector cyclone woodworking 4 inch hose" },
        { name: "HVLP spray gun and compressor", why: "Used for lacquer, conversion varnish, and waterborne finishes. Needs a ventilated spray booth and fit-tested respirator.", search: "HVLP spray gun turbine finishing woodworking" },
        { name: "Laser level or line laser", why: "Setting wall cabinet and countertop levels on site installs.", search: "Bosch line laser level self leveling" }
      ]
    },
    {
      title: "School supplies for technical training",
      note: "What helps in the classroom for shop drawings, math, and material study. Check with your school and exam body about calculator rules before you buy.",
      items: [
        { name: "Mechanical pencil (0.5 mm) with HB and 2H leads", why: "Fine lines for drawings and shop sketches.", search: "Pentel GraphGear 0.5mm mechanical pencil HB 2H lead" },
        { name: "Scientific calculator (Casio fx-991 or TI-30XS), ideally with a fraction function", why: "Fractions, decimals, and metric conversions come up daily in cut lists and layout.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
        { name: "Graph paper pad and a metric and imperial steel rule (300 mm and 600 mm)", why: "Sketching cabinet elevations and plans at scale.", search: "graph paper pad Starrett steel rule 300 mm 12 inch" },
        { name: "Architect's scale and engineer's scale", why: "Reading drawings at 1:10, 1:20, and 1:50, or 1 in = 1 ft.", search: "architect scale ruler metric imperial triangular" },
        { name: "Drafting triangles and protractor", why: "Drawing angles and layouts for face frames, mitres, and raised panels.", search: "Staedtler drafting triangle set protractor" },
        { name: "Architectural Woodwork Standards reference or the AWMAC standard (if your school suggests it)", why: "Sets grades and quality expectations for architectural woodwork in Canada. Ask your school which edition they use.", search: "Architectural Woodwork Standards AWMAC" },
        { name: "Field notebook (Rite in the Rain) and fine-tip markers", why: "Weatherproof notes for site measurements and installation details.", search: "Rite in the Rain field notebook Sharpie fine point" },
        { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic for Red Seal exam review.", search: "binder dividers highlighters" }
      ]
    }
  ],
  mediaGroups: [
    {
      title: "Official and standards resources",
      items: [
        { name: "Red Seal exam preparation", desc: "How Red Seal exams work, the Cabinetmaker trade profile, and how to prepare.", url: "https://red-seal.ca/eng/welcome.shtml" },
        { name: "Architectural Woodwork Manufacturers Association of Canada (AWMAC)", desc: "Industry association behind the Canadian architectural woodwork standards and grades.", url: "https://www.awmac.com/" },
        { name: "Canadian Centre for Occupational Health and Safety (CCOHS)", desc: "Plain-language safety sheets on wood dust, noise, machine guarding, and finishing hazards.", url: "https://www.ccohs.ca/" },
        { name: "Canadian Wood Council", desc: "Wood and wood product information for builders and designers.", url: "https://cwc.ca/" },
        { name: "FPInnovations", desc: "Forest products research and technical information, including wood properties.", url: "https://fpinnovations.ca/" },
        { name: "CSA Group", desc: "Standards for protective equipment such as eye, hearing, and respiratory protection.", url: "https://www.csagroup.org/" }
      ]
    },
    {
      title: "Video searches",
      note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and shop safety rules.",
      items: [
        { name: "Table saw safety", desc: "Riving knives, guards, push sticks, and avoiding kickback.", url: cabYt("table+saw+safety+riving+knife+kickback+push+stick") },
        { name: "32 mm system cabinet construction", desc: "Frameless cabinet building with the 32 mm system.", url: cabYt("32mm+system+frameless+cabinet+construction") },
        { name: "Face frame cabinet building", desc: "Building and attaching a face frame to a carcass.", url: cabYt("face+frame+cabinet+building+pocket+hole+carcass") },
        { name: "Dovetail drawer box", desc: "Cutting and assembling dovetail drawer joints.", url: cabYt("dovetail+drawer+box+cabinetmaker") },
        { name: "Hinge cup boring and installing concealed hinges", desc: "Boring cups and adjusting European hinges.", url: cabYt("install+concealed+european+hinges+35mm+cup+adjust") },
        { name: "Edge banding and laminate", desc: "Applying edge banding and plastic laminate to panels.", url: cabYt("edge+banding+iron+on+trim+plastic+laminate+countertop") },
        { name: "Sanding and finishing wood", desc: "Grit sequence, raising grain, and applying a clear finish.", url: cabYt("sanding+grit+sequence+wood+finishing+raise+grain") },
        { name: "Installing kitchen cabinets", desc: "Levelling, scribing, and fastening base and wall cabinets.", url: cabYt("installing+kitchen+cabinets+level+scribe+shim+wall+cabinets") }
      ]
    },
    {
      title: "Audio, beginner (pre-apprentice and year 1)",
      note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for cabinetmaking yourself.",
      items: [
        { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
        { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics.", url: "https://www.tmws.ca/podcasts" },
        { name: "YouTube: woodworking and cabinetmaker apprentice podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: cabYt("cabinetmaker+apprentice+woodworking+podcast") }
      ]
    },
    {
      title: "Audio, intermediate (years 2-3)",
      note: "Trade-knowledge talk that builds on what you do in the shop.",
      items: [
        { name: "YouTube: woodworking shop talk podcast", desc: "Joinery, material choices, and shop workflow from working woodworkers.", url: cabYt("woodworking+podcast+shop+talk+joinery") },
        { name: "YouTube: wood finishing podcast", desc: "Finish choices, surface prep, and troubleshooting.", url: cabYt("wood+finishing+podcast+stain+lacquer+troubleshooting") },
        { name: "YouTube: cabinet shop business podcast", desc: "Running jobs, estimating, and shop efficiency.", url: cabYt("cabinet+shop+business+podcast+kitchen+cabinets") }
      ]
    },
    {
      title: "Audio, advanced (year 4 to journeyperson)",
      note: "Exam prep, estimating, and leadership.",
      items: [
        { name: "YouTube: Red Seal cabinetmaker exam prep (talk-through)", desc: "Study talks you can listen to while commuting.", url: cabYt("Red+Seal+cabinetmaker+exam+preparation") },
        { name: "YouTube: architectural millwork estimating podcast", desc: "Pricing, shop drawings, and project management for millwork.", url: cabYt("architectural+millwork+estimating+podcast") },
        { name: "YouTube: leading a shop crew and mentoring apprentices", desc: "Leadership and training skills for new journeypersons.", url: cabYt("skilled+trades+leadership+mentoring+apprentices+podcast") }
      ]
    }
  ],
  practiceBank: {
    1: [
      cabQ("What does a riving knife do on a table saw?", "Keeps the kerf open behind the blade to reduce pinching and kickback", ["Makes the cut faster by pulling the stock through the blade", "Replaces the blade guard so that the guard can be removed for cutting", "Cools the blade so it can run longer without burning the wood"], "The riving knife moves with the blade and stops the wood closing on the back of the blade."),
      cabQ("A push stick is used mainly to:", "Keep your hands away from the blade when ripping narrow stock", ["Hold the fence tight to the table so it cannot shift during the cut", "Mark the cut line so the blade follows it accurately", "Measure the thickness of the board as it passes the blade"], "Never put your fingers close to the blade. Use push sticks or blocks for narrow work."),
      cabQ("When crosscutting on a table saw with a mitre gauge, you should not also use the rip fence as a stop against the part because:", "The offcut can be trapped between the blade and fence and be thrown back", ["The saw will stop and the motor will overheat if both are used together", "It makes the cut slower and leaves a rougher edge on the part", "It will scratch the table surface and dull the fence faces over time"], "Use a separate stop block set before the blade, not the fence, to avoid trapping the offcut."),
      cabQ("Which CSA standard is used when selecting respirators in Canada?", "CSA Z94.4", ["CSA Z94.3", "CSA O86", "CSA Z195"], "Z94.4 covers selection, use, and care of respirators. Z94.3 is eye and face protection."),
      cabQ("Rags soaked with oil-based finishes such as linseed oil should be:", "Laid flat to dry outdoors or stored in a closed metal container with water", ["Thrown in a pile in a warm shop corner so they can air out overnight before the shift ends", "Left in a sealed plastic bag until the garbage is collected", "Stored near the heater so that they dry out quickly"], "Drying oils generate heat as they cure and can ignite spontaneously."),
      cabQ("Which sheet material has no grain direction and a smooth, uniform surface good for painted doors?", "MDF", ["Plywood with a thin hardwood veneer face", "Solid hardwood glued up from narrow boards", "Veneer-core plywood with an alternating grain core"], "Medium density fibreboard is made of fine fibres and machines smoothly, but is heavy and weak in screw holding at edges."),
      cabQ("A 3/4 in sheet of plywood is closest to what metric thickness?", "19 mm", ["15 mm (about 5/8 in)", "21 mm (about 13/16 in)", "25 mm (about 1 in)"], "3/4 in = 19.05 mm. Metric panels are often sold at 18 mm."),
      cabQ("Which sandpaper grit is the finest?", "220", ["60 grit, a coarse paper for stock removal", "80 grit, used for general smoothing", "120 grit, used for final sanding before finish"], "Higher numbers mean smaller abrasive particles and a finer scratch."),
      cabQ("When you mark a cut line, you should cut:", "On the waste side of the line and leave the line", ["Directly through the middle of the line so half of it remains", "On the part side with a small gap left against the line", "Anywhere near the line, then trim the part to size later"], "The kerf removes material. Cutting on the waste side leaves the line as your final dimension."),
      cabQ("Chisels are used safely when:", "Both hands stay behind the cutting edge and the work is clamped", ["The work is held in your hand while you pare toward it with the blade", "You cut toward your body so you can see the line clearly", "The chisel is dull so it needs more force to cut"], "A slipping chisel can cause deep cuts. Clamp the work and keep both hands behind the edge."),
      cabQ("In most Canadian jurisdictions, the 8-hour noise exposure limit is about:", "85 dBA", ["60 dBA, about the level of normal conversation", "100 dBA, about the level of a loud power tool", "120 dBA, about the threshold of pain"], "Table saws, planers, and routers can exceed 85 dBA, so wear hearing protection."),
      cabQ("Which WHMIS document tells you about the hazards and first aid for a lacquer thinner?", "The Safety Data Sheet (SDS)", ["The shop drawing that shows the cabinet dimensions", "The cut list that lists the part sizes", "The supplier invoice that lists the product name"], "The SDS has 16 sections including hazards, first aid, and protective equipment."),
      cabQ("How many millimetres is 5/8 in?", "About 15.9 mm", ["About 5.8 mm, using the number of eighths directly", "About 18 mm, which is about 11/16 in", "About 25.4 mm, which is a full inch"], "5/8 x 25.4 = 15.875 mm."),
      cabQ("Which tool is best for checking that a cabinet carcass is square?", "A tape measured across both diagonals", ["A tape measured along one side only, then checked against the top", "A pencil used to mark the outline of each panel", "A sanding block held against each outside corner of the box"], "A square rectangle has equal diagonals."),
      cabQ("Why should you not wear loose sleeves or jewellery near a router table, lathe, or drill press?", "They can be caught by rotating parts and pull your hand in", ["They slow your movements down and make it harder to control a cut", "They make noise against the machine as it runs", "They reduce your grip on the wood and cause it to slip"], "Rotating tools can entangle clothing quickly, so tie back hair and wear fitted clothing."),
      cabQ("Wood dust in the shop is a concern because it:", "Can irritate or harm the lungs and can be a fire or explosion risk", ["Is harmless at any level of exposure as long as the shop floor is swept daily", "Only affects the finish by leaving specks in wet coatings", "Only causes noise problems when the collector is running"], "Fine wood dust is a health hazard and combustible when suspended. Use collection and good housekeeping.")
    ],
    2: [
      cabQ("In the 32 mm system, adjacent holes in a line bored row are spaced:", "32 mm apart", ["25 mm apart (about 1 in)", "50 mm apart (about 2 in)", "19 mm apart (about 3/4 in)"], "The 32 mm spacing is the basis of European-style frameless cabinet hole patterns."),
      cabQ("What is the common diameter of a shelf pin hole in frameless cabinet sides?", "5 mm", ["3 mm, like a small pilot hole", "10 mm, like a large dowel hole", "35 mm, like a hinge cup hole"], "5 mm holes are standard, but check the hardware you are using."),
      cabQ("The hole for a concealed (European) hinge cup is usually bored at:", "35 mm", ["5 mm, the same as a shelf pin hole", "8 mm, the same as a common dowel hole", "50 mm, the same as a large hole saw"], "A 35 mm Forstner or hinge-boring bit is the common size."),
      cabQ("Ball-bearing side-mount drawer slides commonly need how much clearance between each side of the drawer box and the cabinet?", "About 12.7 mm (1/2 in) per side", ["No clearance, so the drawer fits tight to the cabinet side", "About 50 mm per side, so the drawer box is much narrower", "About 1 mm per side, so the drawer fits snug against the side"], "Always confirm the clearance in the slide manufacturer's instructions."),
      cabQ("A dado is a:", "Groove cut across the grain", ["Groove cut along the grain, usually on a table saw", "Rabbet along the edge of a panel to receive a back", "Round tenon turned on a lathe to fit a round hole"], "A groove runs with the grain, a dado runs across it, and a rabbet is a step cut along an edge or end."),
      cabQ("A solid wood panel in a door frame is made to float so that it can:", "Expand and shrink with humidity without cracking the frame", ["Be removed easily when the door needs to be refinished", "Be glued tightly so the frame stays rigid", "Hold the frame square once the glue has cured completely"], "Solid wood moves mostly across its width, so panels are not glued in their grooves."),
      cabQ("Solid wood moves the least in which direction?", "Along its length", ["Across its width, because the fibres run that way", "Tangentially, along the curve of the growth rings", "Radially, from the centre of the log out to the bark"], "Movement along the length of a board is very small compared with across the width."),
      cabQ("Interior wood used for cabinets is usually dried to a moisture content of about:", "6 to 8%", ["Over 20%, as it comes from a green mill", "15 to 18%, as for exterior framing lumber", "Below 2%, as in oven-dried samples"], "Cabinets are made at moisture levels close to heated interior conditions to limit movement."),
      cabQ("A typical base cabinet height with a countertop is about:", "900 mm (36 in)", ["700 mm (about 28 in)", "1100 mm (about 43 in)", "1300 mm (about 51 in)"], "Base cabinets are about 876 mm (34-1/2 in) tall, and the countertop brings the work surface to about 36 in."),
      cabQ("The usual depth of a standard kitchen wall cabinet is about:", "300 mm (12 in)", ["600 mm (24 in), the depth of a base cabinet", "450 mm (18 in)", "150 mm (6 in), the depth of a shelf only"], "Wall cabinets are typically 12 in deep, while base cabinets are 24 in deep."),
      cabQ("How many board feet are in a piece 1 in thick, 6 in wide, and 8 ft long?", "4", ["6, from multiplying 1 x 6 only", "8, from using the length in feet only", "48, from multiplying all dimensions in inches"], "1 x 6 x 8 / 12 = 4 board feet."),
      cabQ("Coarse-thread pocket screws are generally used for:", "Softwood and sheet materials such as plywood and MDF", ["Dense hardwoods only, such as maple and oak", "Thin steel track and metal studs, with a self-drilling tip", "Glass and ceramic panels, with a pilot hole drilled first"], "Fine-thread screws are better for dense hardwoods where coarse threads can split the wood."),
      cabQ("A router bit should be fed:", "Against the direction of the bit's rotation", ["With the direction of rotation (climb cut) for all cuts", "At any speed with no support", "Only by freehand"], "Feeding against rotation gives control, while a climb cut can grab and pull the router."),
      cabQ("A jointer is mainly used to:", "Flatten one face and square an edge of a board", ["Cut curves", "Plane both faces parallel to a set thickness without a flat face", "Sand the board"], "A planer then makes the second face parallel, but only a jointer flattens a warped face."),
      cabQ("Ripping a board means cutting:", "Along the grain", ["Across the grain, using a crosscut sled or mitre saw", "At 45° to the face, using a mitre gauge", "Through the thickness only, to resaw the board"], "Crosscutting is across the grain."),
      cabQ("The open time of a wood glue is:", "The time you have to assemble the joint before the glue starts to set", ["The time it takes for the glue to cure fully and reach its rated strength", "The time to open the bottle", "The shelf life"], "Plan the glue-up so clamping finishes within the open time."),
      cabQ("A biscuit joiner is mainly used to:", "Align panels and add some gluing surface", ["Create high-strength load-bearing joints", "Cut dovetails", "Plane edges"], "Biscuits help with alignment and add some glue area, but they are not structural joints by themselves.")
    ],
    3: [
      cabQ("A frameless (European style) cabinet differs from a face frame cabinet because it:", "Has no front frame, with doors mounted directly to the box sides", ["Has no back panel, so the box is always left open", "Uses only solid wood for the box sides", "Cannot have drawers because it has no frame to mount slides to"], "Frameless cabinets rely on the carcass sides for hardware, so the 32 mm system is used."),
      cabQ("Inset doors compared with overlay doors:", "Sit inside the frame opening and require tighter fit tolerances", ["Cover the entire face frame and leave only a small reveal", "Need no hinges because they slide in the frame", "Are always cheaper to build than overlay doors in every case"], "Inset doors need consistent gaps, so accuracy in the frame and door is essential."),
      cabQ("A good practice before staining is to:", "Raise the grain with a damp cloth and lightly resand", ["Skip sanding because stain will fill the scratches", "Stain over dust so it can mix into the finish", "Use coarse sandpaper last so the stain soaks in deeper"], "Water raises wood fibres and a light final sanding avoids a rough finish."),
      cabQ("A benefit of waterborne finishes compared with solvent finishes is:", "Lower solvent vapours and cleanup with water", ["They never need sanding", "They cannot be sprayed", "They are never flammable products in concentrate"], "Waterborne finishes have lower VOCs, but still follow the SDS for ventilation and PPE."),
      cabQ("When spraying solvent-based finishes, the area must have:", "Ventilation, no ignition sources, and appropriate respirators", ["Closed doors and heaters running to keep vapours inside", "Open flames nearby to help the finish dry faster", "No air movement so dust does not settle in the finish"], "Solvent vapours are flammable and harmful. Use rated booths and equipment."),
      cabQ("Quarter-sawn veneer typically produces a:", "Straight, tight grain pattern", ["Cathedral pattern only, with wide arched figure", "Random swirl pattern with burl-like figure", "No visible grain, like an MDF panel"], "Quarter-sliced veneer shows straight grain and a flake effect in species like oak."),
      cabQ("When applying contact cement to laminate and substrate, you should:", "Coat both surfaces and let them dry to the touch before joining", ["Join while wet so the cement grabs as the parts slide together", "Apply to one surface only and press them together", "Use clamps for 24 hours until the cement has fully cured"], "The bond is immediate on contact, so alignment must be right the first time."),
      cabQ("Compared with particleboard, plywood generally:", "Holds screws better and is stronger", ["Is always cheaper, which is why it is used for shelving", "Has no grain layers, since it is made of chips", "Has a smoother core for edges, so it machines better"], "Cross-laminated veneers give plywood higher strength and better screw holding."),
      cabQ("When cutting plywood with a circular saw, the good face should usually be:", "Down, because the blade exits upward and may chip the top", ["Up, because the blade pushes the chips down and away from the face", "Either, there is no difference in the quality of the cut", "Facing the fence, so the saw base can ride on it"], "A circular saw cuts upward through the sheet. A table saw cuts downward, so the good face is up."),
      cabQ("A cabinet carcass is held square after assembly mainly by:", "Fastening a squared back panel or applying clamps while the glue sets", ["Pushing on one corner by hand until the box looks square, then leaving it", "Adding more finish to the outside faces", "Removing the shelves so the box can flex into square"], "A back panel fitted to a square carcass locks in the squareness."),
      cabQ("Cutting list optimization (nesting) should account for:", "Grain direction, edge banding, and material sizes", ["Only the colour of the pencil used to mark parts", "Nothing except total area, since grain does not matter", "The weather on the day the sheets are cut"], "Parts with grain direction must be oriented properly to make a matching finished piece."),
      cabQ("Before changing a blade or cutter on any machine, you should:", "Lock out the power and wait for the cutter to stop", ["Leave it running so the blade can be seen while it is changed", "Wear loose gloves so the blade edge does not cut you", "Hold the cutter by hand so it cannot spin while you work"], "Lockout prevents accidental start-up while hands are near the cutter."),
      cabQ("A drawer bottom is usually installed:", "In a groove so it can move slightly", ["Glued flat to the sides with no groove", "Nailed through the front", "Left floating on the slides"], "A grooved bottom adds strength and allows for slight movement."),
      cabQ("When attaching wall cabinets, the screws should go through the cabinet hanging rail into:", "Wall studs or approved structural backing", ["Drywall only, using the anchors that came with the screws", "Wallpaper or the paint layer on the wall", "Trim and baseboard along the bottom of the wall"], "Drywall alone cannot carry a loaded cabinet."),
      cabQ("Burn marks on a cut edge of cherry or maple are commonly caused by:", "A dull blade, slow feed, or misaligned fence", ["Too sharp a blade cutting at too fast a feed rate", "Too much dust collection pulling air across the cut", "Dry glue left on the fence or the saw table"], "Heat from friction burns dense woods. Check the blade, feed rate, and fence alignment."),
      cabQ("Why is it important to scribe a filler or panel to an uneven wall during installation?", "To get a tight fit against a wall that is not straight or plumb", ["To make the cabinet heavier so it stays on the wall", "To hide the hinges behind the door", "To lower the cabinet so that the top aligns with the ceiling"], "Walls are rarely perfectly straight, and scribing removes the gaps."),
      cabQ("Hardwood lumber in Canada is commonly graded using rules from:", "The National Hardwood Lumber Association (NHLA)", ["The Red Seal program, which sets trade exam standards", "WHMIS, which covers workplace hazard labels", "The plumbing code, which covers pipe sizing and fixtures"], "NHLA grades such as FAS, Select, and No. 1 Common describe clear cutting yield.")
    ],
    4: [
      cabQ("Shop drawings for architectural woodwork are normally:", "Submitted for approval before fabrication starts", ["Skipped if the job is small and the client is in a hurry", "Created after installation to record what was built", "Kept secret from the designer until the work is done"], "Approval avoids costly mistakes by confirming dimensions, materials, and details."),
      cabQ("The grades of architectural woodwork in the Canadian standard are:", "Economy, Custom, and Premium", ["Good, Better, Best, and Elite", "Grade A, Grade B, and Grade C, set by the hardware supplier", "Basic, Standard, and Deluxe, set by each shop"], "The AWMAC standard defines three grades that set the quality of materials, workmanship, and installation."),
      cabQ("When estimating sheet goods for a job, you should:", "Add a waste allowance for trim, defects, and grain matching", ["Use the exact net area only, with no extra material for offcuts or defects", "Subtract an allowance because offcuts can be reused", "Ignore the layout and order by the cabinet count"], "Waste varies by layout and material. Use your cut list and yield."),
      cabQ("New cabinets and wood products delivered to a site should be:", "Acclimated to the building's conditions before installation where possible", ["Installed immediately in any weather so the schedule is not delayed", "Soaked in water to bring up the moisture content", "Stored outdoors under a tarp until they are needed"], "Changes in humidity cause movement, so let materials adjust and avoid installation when the building is wet."),
      cabQ("Cabinets should normally be installed only after:", "Wet trades such as plaster, concrete, and paint are finished and the building is enclosed", ["Roof framing is finished and the shingles are on", "Excavation and foundation work are finished", "The drywall is hung but before the mudding and taping is started"], "Excess moisture damages wood and finishes."),
      cabQ("Wood dust has been classified by IARC as:", "A human carcinogen (nasal and sinus cancers)", ["Harmless to people at any exposure level in a shop", "Not classified, since only metal dust is regulated", "Only a nuisance dust that irritates the eyes and nose"], "Reducing exposure with source capture, ventilation, and respirators is important."),
      cabQ("Fine dust can pose an explosion risk when:", "It is suspended in air in an enclosed area and meets an ignition source", ["It is wet on the floor after the shop is washed down", "It is stored in a sealed bag away from any ignition source", "It is mixed with water to form a slurry"], "Good housekeeping and dust collection reduce the risk."),
      cabQ("Fisheyes (small circular craters) in a finish are most often caused by:", "Surface contamination such as silicone or oil", ["Too much sanding with a fine grit before finishing", "Cold weather only, which makes the finish gel", "Grain direction, from sanding across the grain"], "Clean surfaces, use compatible products, and keep silicone products out of the finishing area."),
      cabQ("Book-matching veneer means:", "Adjacent leaves are opened like a book to form a mirrored pattern", ["Gluing leaves randomly so the pattern does not repeat", "Using the same leaf twice on opposite faces", "Staining the veneer to match the adjacent leaf"], "Sequence matching and book matching give consistent appearance across panels."),
      cabQ("A tolerance stack-up in cabinet fabrication is:", "The cumulative effect of small errors across multiple parts", ["A pile of lumber stacked and waiting to be milled", "A sanding step used to level glued-up panels", "A glue spec that lists open time and clamp pressure"], "Small errors in several parts can add up, so you need consistent references and checks."),
      cabQ("A sink base cabinet that holds a stone countertop should be:", "Level, fully supported, and sealed at the sink cutout as specified", ["Left unsupported at the cutout since the stone carries the load", "Fastened with tape until the top is set", "Painted only, since the stone provides all the support"], "Stone is heavy and brittle, so support is critical, and water at the sink must be kept out of the wood."),
      cabQ("Drawer slides should be chosen based on:", "The drawer load, extension type, and mounting method", ["Colour only, because the slides are hidden anyway", "Whatever is cheapest at the supplier that week", "Whether they are noisy when the drawer is slammed"], "Load rating, full or partial extension, and soft-close features all matter."),
      cabQ("A cut list, also called a bill of materials, should include:", "Part names, quantities, dimensions, materials, and grain or banding notes", ["Only the total price of the job and the expected delivery date to the site", "Only the client's name and the job address", "Only the hinge model and the finish colour of the doors"], "A complete list prevents mistakes and helps with nesting and ordering."),
      cabQ("A request for information (RFI) is used to:", "Clarify unclear drawings or specifications before work proceeds", ["Order hardware and sheet goods directly from the supplier", "Report an injury to the joint health and safety committee", "Close a job and release the final holdback"], "Resolve questions with the designer or contractor in writing."),
      cabQ("Cabinet doors warping after installation are often related to:", "Uneven moisture or finish applied on only one face", ["Too many hinges holding the door too rigidly", "Using sharp tools when machining the door parts and edges", "Using clamps while the glue is still wet"], "Finish all faces and edges evenly to balance moisture exchange."),
      cabQ("Before running a machine you are not trained on, you should:", "Get training and authorization from your supervisor", ["Learn by trying it on scrap with a coworker watching", "Skip the manual since all saws work the same way", "Remove the guard so you can see how the cutter moves"], "Machine training and guarding are legal and safety requirements in all provinces."),
      cabQ("If you notice a safety guard has been removed from a machine, you should:", "Not use the machine and report it", ["Use it carefully and report it after the job", "Replace the guard after the job is finished", "Ignore it, since the guard is the owner's problem"], "Workers have the right to refuse unsafe work. Report missing guards immediately.")
    ]
  },
  roadmapSteps: [
    { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS and shop machine safety; requirements vary)", "Prepare a resume and a small portfolio of woodworking projects and apply to cabinet shops and millwork companies", "Register your apprenticeship once you have a sponsor and keep your hours logged"] },
    { title: "Year 1: foundations", items: ["Learn shop safety, PPE, dust control, and lockout", "Practice measuring, marking, and hand tool use", "Learn wood properties, sheet goods, and basic joinery", "Complete your first technical training block", "Build your core tool kit (see Buying tools)"] },
    { title: "Year 2: machines and carcass construction", items: ["Learn table saw, jointer, planer, router, and edge banding processes", "Build carcasses with the 32 mm system and face frame methods", "Read shop drawings and write cut lists", "Learn basic hardware: hinges, slides, and shelf supports"] },
    { title: "Year 3: doors, drawers, and finishing", items: ["Build doors, drawers, and raised panels", "Apply laminate, veneer, and edge banding", "Learn finishing: surface prep, stains, and clear coats", "Learn installation: levelling, scribing, and fastening"] },
    { title: "Year 4 and beyond: advanced", items: ["Handle complex millwork and custom pieces", "Learn estimating, shop drawings, and project planning", "Troubleshoot defects and finishing problems", "Mentor first-year apprentices and use the Red Seal standard to find gaps in your experience"] },
    { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
  ],
  glossary: [
    ["Blind dado", "A dado that stops before the front edge so it is hidden."],
    ["Book match", "Veneer leaves opened like a book to make a mirror-image pattern."],
    ["Carcass", "The box of a cabinet, without doors or drawers."],
    ["Climb cut", "A router cut fed with the bit rotation, which can grab the tool."],
    ["Crosscut", "A cut across the wood grain."],
    ["Dado", "A groove cut across the grain."],
    ["Dovetail", "An interlocking joint with flared pins and tails, used for drawers."],
    ["Edge banding", "A thin strip applied to cover the exposed edge of sheet goods."],
    ["Face frame", "A frame of stiles and rails fastened to the front of a cabinet box."],
    ["Frameless", "A cabinet style with no face frame, also called European style."],
    ["Grain", "The direction of the wood fibres."],
    ["HPL", "High-pressure laminate, a hard surface used on countertops."],
    ["Inset", "A door or drawer front that sits inside the opening of the frame."],
    ["Jointer", "A machine that flattens one face and squares one edge."],
    ["Kerf", "The slot of material removed by a saw blade."],
    ["MDF", "Medium density fibreboard, made from wood fibres and resin."],
    ["Mortise and tenon", "A joint with a projecting tenon fitted into a mortise."],
    ["Open time", "Working time of an adhesive before it starts to set."],
    ["Overlay", "A door that covers part or all of the face frame or cabinet front."],
    ["Planer", "A machine that makes the second face of a board parallel to the first."],
    ["Rabbet", "A step cut along an edge or end of a board."],
    ["Reveal", "The visible gap between a door or drawer and the frame."],
    ["Rip", "A cut along the wood grain."],
    ["Scribe", "To fit a panel or cabinet edge to an uneven wall."],
    ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
    ["Stile and rail", "The vertical and horizontal parts of a door or frame."],
    ["Toe kick", "The recessed base at the bottom of a base cabinet."],
    ["Veneer", "A thin slice of wood glued to a substrate."],
    ["WHMIS", "Canada's workplace hazardous materials information system."],
    ["Wood movement", "Expansion and shrinkage of wood as it gains and loses moisture."]
  ],
  cards: [
    { front: "Hole spacing in the 32 mm system", back: "32 mm between holes" },
    { front: "Typical shelf pin hole size", back: "5 mm" },
    { front: "Concealed hinge cup bore", back: "35 mm" },
    { front: "Board feet formula", back: "Thickness (in) x width (in) x length (ft) / 12" },
    { front: "Typical base cabinet and wall cabinet depths", back: "About 610 mm (24 in) and 305 mm (12 in)" },
    { front: "Direction of most wood movement", back: "Across the width, with very little along the length" },
    { front: "Standard sheet size in metric", back: "About 1220 x 2440 mm" },
    { front: "How to check a carcass for square", back: "Measure both diagonals and confirm they are equal" },
    { front: "Which way does the router feed relative to the bit?", back: "Against its rotation" },
    { front: "Architectural woodwork grades", back: "Economy, Custom, and Premium" }
  ],
  jobsIntro: "Look for custom cabinet and millwork shops, kitchen and bath cabinet manufacturers, commercial and architectural woodwork firms, installation crews, furniture and store fixture shops, and renovation companies.",
  tips: ["Bring a short resume, your safety tickets, and photos of any woodworking projects you have made.", "Show interest in accuracy, drawings, and working with your hands.", "Visit shops in person when you can, and follow up.", "Ask what tools you need and what the shop supplies."],
  forumTopics: ["Starting out", "Joinery and machine setup", "Finishing and installation", "Red Seal and exam prep", "Tools and gear", "Province and code questions"],
  reference: [
    {
      title: "Key formulas",
      list: [
        "Board feet = thickness (in) x width (in) x length (ft) ÷ 12",
        "Area of a rectangle = length x width; sheets needed = total part area ÷ sheet area, plus waste",
        "Diagonal of a rectangle = √(width² + height²); equal diagonals show a square carcass",
        "Scale: real length = drawing length x scale factor (1:10 means x 10)",
        "Percentage waste = (material bought − material used) ÷ material bought x 100",
        "Shelf spacing = (inside height − shelf thicknesses) ÷ number of openings"
      ]
    },
    {
      title: "Conversions",
      list: [
        "1 in = 25.4 mm, and 1 ft = 304.8 mm",
        "3/4 in = 19.05 mm, 5/8 in = 15.9 mm, 1/2 in = 12.7 mm, and 1/4 in = 6.35 mm",
        "4 x 8 ft sheet = 1219 x 2438 mm, commonly 1220 x 2440 mm",
        "1 m² = 10.764 ft²",
        "1 board foot = 144 in³, or about 0.00236 m³",
        "1 kg ≈ 2.205 lb"
      ]
    },
    {
      title: "Common cabinet dimensions (typical, check your design)",
      table: {
        head: ["Item", "Typical size", "Metric"],
        rows: [["Base cabinet height (without top)", "34-1/2 in", "876 mm"], ["Base cabinet depth", "24 in", "610 mm"], ["Wall cabinet depth", "12 in", "305 mm"], ["Counter height", "36 in", "914 mm"], ["Wall cabinet bottom above counter", "18 in", "457 mm"], ["Toe kick height", "4-1/2 in", "114 mm"]]
      },
      note: "These are common design conventions, not code limits. Always follow the drawings and the client's needs."
    },
    {
      title: "32 mm system quick facts",
      list: [
        "Holes are spaced in 32 mm increments along vertical lines.",
        "The front hole line is commonly 37 mm from the front edge of the side panel.",
        "Shelf pin holes are commonly 5 mm in diameter.",
        "Concealed hinge cups are commonly bored at 35 mm.",
        "Confirm every dimension against the hardware manufacturer's template."
      ]
    },
    {
      title: "Which joint or fastener?",
      list: [
        "<strong>Dado or rabbet with glue and screws:</strong> carcass shelves and backs in sheet goods.",
        "<strong>Pocket screws:</strong> face frames and fast carcass assembly. Use coarse thread for softwood and sheet goods, fine thread for dense hardwoods.",
        "<strong>Dowels or biscuits:</strong> alignment of panels and frames, with glue for strength.",
        "<strong>Mortise and tenon:</strong> strong frame and door joints in solid wood.",
        "<strong>Dovetails:</strong> drawer boxes and high-strength corners.",
        "<strong>Confirmat or cabinet screws:</strong> knock-down assembly in particleboard and MDF."
      ]
    },
    {
      title: "Sanding and finishing sequence",
      list: [
        "Mill and joint parts accurately so heavy sanding is not needed.",
        "Sand progressively, for example 120, 150, then 180 to 220 grit, without skipping more than one step.",
        "Remove dust, wipe with a suitable cleaner, and raise the grain if using waterborne products.",
        "Apply stain or toner if specified, then a sealer, and a topcoat as per the manufacturer.",
        "Scuff-sand between coats lightly, and clean up between each stage."
      ],
      note: "Always follow the product's SDS and technical data sheet for ventilation, respirator type, drying times, and compatibility with other products."
    }
  ]
});
