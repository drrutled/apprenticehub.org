// Sheet Metal Worker content: tools, learning media, forum, and practice tests.
// Practice questions are original study aids, not official Red Seal exam questions.

const sheetMetalSections = [
  { id: "overview", label: "Overview" },
  { id: "roadmap", label: "Roadmap" },
  { id: "tools", label: "Buying tools" },
  { id: "learn", label: "Videos & audio" },
  { id: "practice", label: "Practice tests" },
  { id: "reference", label: "Reference" },
  { id: "flashcards", label: "Flashcards" },
  { id: "progress", label: "My progress" },
  { id: "jobs", label: "Jobs" },
  { id: "forum", label: "Forum" },
  { id: "rules", label: "Rules & privacy" }
];

// Amazon Associates Canada tracking ID (e.g. "yourname-20"). Leave empty until your account is approved.
const AMAZON_TAG = "";

function toolLink(item) {
  const params = new URLSearchParams({ k: item.search });
  if (AMAZON_TAG) params.set("tag", AMAZON_TAG);
  return `https://www.amazon.ca/s?${params}`;
}

const toolGroups = [
  {
    title: "Day-one tools, buy once and buy well",
    note: "Professional-grade tools that hold their accuracy and edge for years. Brands are examples of trade-quality lines, not endorsements. Confirm what your employer supplies first.",
    items: [
      { name: "Wiss or Malco aviation snips (left, right, straight)", why: "Forged, hardened blades cut cleaner and last far longer than budget snips. Red cuts left, green cuts right, yellow cuts straight.", search: "Wiss Malco aviation snips compound action" },
      { name: "Malco hand seamer", why: "Wide, durable jaws for crisp edges and seams in the field.", search: "Malco hand seamer" },
      { name: "Starrett combination square", why: "Machined, hardened steel stays square. A good square is the foundation of accurate layout.", search: "Starrett combination square 12 inch" },
      { name: "Stanley FatMax or Milwaukee tape measure (25 ft)", why: "Wide, stiff blade you can read at standout, with durable hooks and coatings.", search: "Milwaukee Stanley FatMax tape measure 25 ft metric" },
      { name: "Starrett steel rule and scriber", why: "Accurate etched rule and a hardened scribe point for fine layout lines.", search: "Starrett 12 inch steel rule scriber" },
      { name: "Quality dividers or trammel points", why: "Repeatable arcs and transferred dimensions for pattern development.", search: "Starrett dividers 6 inch" },
      { name: "Dead-blow or sheet metal mallet and quality hammer", why: "Forms seams without marking the metal and doesn't chip or rebound.", search: "Malco sheet metal hammer mallet" },
      { name: "Cut-resistant gloves (ANSI A5+) and safety glasses", why: "Sheet edges cause serious lacerations. Pick comfortable, rated protection you will actually wear.", search: "Mechanix cut resistant gloves A5 safety glasses Pyramex" },
      { name: "CSA-approved safety boots", why: "You are on your feet all day. Good fit, support, and a lasting sole matter more than almost any other purchase.", search: "CSA safety boots Red Wing Blundstone Timberland PRO" }
    ]
  },
  {
    title: "Build up in first and second year",
    note: "Buy these as the work calls for them. Ask your journeyperson what holds up on your sites.",
    items: [
      { name: "Milwaukee M18 FUEL or Makita 18V brushless drill/driver and impact driver", why: "Reliable power for fastening and drilling. Choose one battery platform and stay with it.", search: "Milwaukee M18 FUEL drill impact driver combo kit" },
      { name: "Cobalt step drill bits", why: "Clean, burr-free holes in sheet metal that last through many holes.", search: "Milwaukee cobalt step drill bit" },
      { name: "Malco duct pliers and hand notcher", why: "Working seams, drives, and notching duct accurately.", search: "Malco duct stretcher pliers hand notcher" },
      { name: "Milwaukee or Malco cordless shears / nibbler", why: "Faster, cleaner straight and curved cuts on site.", search: "Milwaukee M18 shear Malco Turbo nibbler" },
      { name: "Pop rivet gun (professional grade)", why: "A solid-built tool sets blind rivets consistently, hand after hand.", search: "Milwaukee Gesipa professional rivet tool" },
      { name: "Chalk line, torpedo level, and laser level", why: "Hanger layout and checking level or plumb runs.", search: "Milwaukee torpedo level chalk line laser level" },
      { name: "Locking pliers and clamps (Irwin / Bessey / Malco)", why: "Hold work firmly while fastening or sealing.", search: "Irwin Vise-Grip Bessey clamps sheet metal" },
      { name: "Heavy-duty tool bag or pouch", why: "Keeps daily tools together and protected.", search: "Veto Pro Pac tool pouch bag" }
    ]
  },
  {
    title: "Later and specialized",
    note: "Often supplied by the shop or employer. Ask before buying.",
    items: [
      { name: "Auto-darkening welding helmet, jacket, and gloves", why: "Needed when welding is part of your work. Look for clear optics and a good fit.", search: "Miller Lincoln Optrel auto darkening welding helmet" },
      { name: "Digital angle finder and laser distance measure", why: "Faster, more accurate field measuring and layout.", search: "Bosch laser measure digital angle finder" },
      { name: "Digital manometer / airflow meter", why: "Testing and balancing airflow, usually company-supplied.", search: "Fieldpiece Testo digital manometer HVAC" },
      { name: "Full-body harness", why: "Usually supplied by the employer. Fall protection training comes first.", search: "3M DBI-SALA full body harness CSA" }
    ]
  },
  {
    title: "School supplies for technical training",
    note: "What helps in the classroom for layout, math, and note-taking. Check with your school and your exam body about calculator rules before you buy.",
    items: [
      { name: "Mechanical pencil (0.5 mm), such as Pentel GraphGear 1000 or Rotring 600", why: "Consistent fine lines for pattern drafting and sketches. A metal body and retractable tip hold up in a toolbag.", search: "Pentel GraphGear 1000 Rotring 600 mechanical pencil 0.5mm" },
      { name: "Spare 0.5 mm leads (HB and 2H) and quality erasers", why: "2H gives fine, crisp drafting lines; HB is better for notes. A vinyl eraser keeps drawings clean.", search: "Pentel 0.5mm HB 2H lead Staedtler Mars plastic eraser" },
      { name: "Scientific calculator (Casio fx-991 or TI-30XS)", why: "Trig, fractions, and conversions for layout and airflow calculations.", search: "Casio fx-991 Texas Instruments TI-30XS MultiView" },
      { name: "Drafting compass, dividers, and protractor", why: "Practice pattern development at your desk before you cut metal.", search: "Staedtler drafting compass protractor set" },
      { name: "Architect's and engineer's scales", why: "Reading drawings at scale, such as 1:50, and imperial scales like 1/4 in = 1 ft.", search: "architect scale engineer scale ruler" },
      { name: "Triangles, T-square, and a 12 in steel ruler", why: "Clean 30°, 45°, and 60° lines for development drawings.", search: "Staedtler drafting triangle set T-square" },
      { name: "Graph paper, drafting pad, and a field notebook (Rite in the Rain)", why: "Sketching layouts and recording measurements. Weatherproof paper survives job sites.", search: "Rite in the Rain notebook graph paper drafting pad" },
      { name: "Binder, dividers, and highlighters", why: "Organize notes by year and topic, which also helps Red Seal exam review.", search: "binder dividers highlighters" },
      { name: "Fine-tip permanent markers and a metal marking pencil", why: "Marking metal for layout and labelling duct and parts.", search: "Sharpie fine point Markal silver streak marker" },
      { name: "Flash drive or a notes app, plus a tablet or laptop (optional)", why: "Storing drawings, codes, and study notes if your school allows it.", search: "USB flash drive 64GB" }
    ]
  }
];

const mediaGroups = [
  {
    title: "Official and standards resources",
    items: [
      { name: "Red Seal Sheet Metal Worker trade page", desc: "Occupational standard, exam information, and preparation guidance.", url: "https://red-seal.ca/_conf/assets/custom/docms/sheetmetalwork/tp.pdf" },
      { name: "Red Seal exam preparation", desc: "How Red Seal exams work and how to prepare.", url: "https://red-seal.ca/eng/welcome.shtml" },
      { name: "SMACNA", desc: "Sheet metal and air-conditioning contractors' standards and publications.", url: "https://www.smacna.org/" },
      { name: "SMART Canada apprenticeships", desc: "Union apprenticeship and training information.", url: "https://www.smart-union.org/canada/apprenticeships/" }
    ]
  },
  {
    title: "Video searches",
    note: "These open YouTube searches. We have not reviewed individual videos, so judge quality and check against your training materials and local codes.",
    items: [
      { name: "Parallel line development", desc: "Pattern layout for elbows and straight-sided shapes.", url: "https://www.youtube.com/results?search_query=sheet+metal+parallel+line+development" },
      { name: "Radial line development", desc: "Cones and tapered fittings.", url: "https://www.youtube.com/results?search_query=sheet+metal+radial+line+development" },
      { name: "Triangulation", desc: "Transitions such as square-to-round.", url: "https://www.youtube.com/results?search_query=sheet+metal+triangulation+square+to+round" },
      { name: "Duct seams and fabrication", desc: "Pittsburgh, snap lock, and other seams.", url: "https://www.youtube.com/results?search_query=sheet+metal+duct+fabrication+seams" },
      { name: "HVAC airflow and balancing basics", desc: "CFM, velocity, and system balancing.", url: "https://www.youtube.com/results?search_query=HVAC+airflow+duct+basics+balancing" },
      { name: "Standing seam roofing and flashing", desc: "Architectural sheet metal installation.", url: "https://www.youtube.com/results?search_query=standing+seam+metal+roof+flashing+installation" }
    ]
  },
  {
    title: "Audio, beginner (pre-apprentice and year 1)",
    note: "Listen-only picks for getting oriented. Listed from beginner to journeyperson across these four audio sections. We haven't listened to every episode, so judge fit for sheet metal yourself.",
    items: [
      { name: "Skills Ontario Trades Tech Talk Podcast", desc: "Careers, apprenticeships, and getting started in the skilled trades.", url: "https://skillsontario.com/resources/the-skills-ontario-trades-tech-talk-podcast/" },
      { name: "TradeMasters Podcast (Canada)", desc: "Skilled trades careers, licensing, and exam topics in HVAC and related trades.", url: "https://www.tmws.ca/podcasts" },
      { name: "YouTube: skilled trades apprenticeship podcast (audio-only listening)", desc: "Open the results and press play with the screen off, or use a background-play option.", url: "https://www.youtube.com/results?search_query=skilled+trades+apprenticeship+podcast+Canada" }
    ]
  },
  {
    title: "Audio, intermediate (years 2-3)",
    note: "HVAC and trade-knowledge talk that builds on what you do on the job.",
    items: [
      { name: "HVAC podcast directory (Feedspot)", desc: "A ranked list of HVAC podcasts. Pick shows on installation, airflow, and building science.", url: "https://podcast.feedspot.com/hvac_podcasts/" },
      { name: "YouTube: HVAC duct design and airflow podcast", desc: "Longer talks and interviews on duct design, airflow, and commissioning.", url: "https://www.youtube.com/results?search_query=HVAC+duct+design+airflow+podcast" },
      { name: "YouTube: Red Seal exam prep (talk-through)", desc: "Study talks you can listen to while commuting.", url: "https://www.youtube.com/results?search_query=red+seal+sheet+metal+exam+prep" }
    ]
  },
  {
    title: "Audio, advanced (year 4 and journeyperson)",
    note: "Leadership, estimating, business, and mentoring topics.",
    items: [
      { name: "YouTube: HVAC business and leadership podcast", desc: "Foremanship, estimating, running crews, and the trade business side.", url: "https://www.youtube.com/results?search_query=HVAC+contractor+leadership+podcast" },
      { name: "YouTube: sheet metal estimating and project management", desc: "Takeoffs, pricing, and managing jobs.", url: "https://www.youtube.com/results?search_query=sheet+metal+estimating+project+management" },
      { name: "Spotify: HVAC and skilled trades podcasts", desc: "Search Spotify or Apple Podcasts for HVAC, mentorship, and trades-business shows.", url: "https://open.spotify.com/search/HVAC%20podcast" }
    ]
  }
];

// Each question: q, options, answer (index), explain. Year 1-4 pools feed the mock exam.
const practiceBank = {
  1: [
    { q: "Which tool marks a hole centre before drilling so the bit doesn't wander?", options: ["Scriber", "Centre punch", "Hand seamer", "Dividers"], answer: 1, explain: "A centre punch makes a small dimple that guides the drill point." },
    { q: "How many millimetres are in one inch?", options: ["2.54", "10", "25.4", "254"], answer: 2, explain: "1 in = 25.4 mm exactly." },
    { q: "A right triangle has legs of 3 and 4. The hypotenuse is:", options: ["5", "7", "12", "25"], answer: 0, explain: "3² + 4² = 25, and the square root of 25 is 5." },
    { q: "A hem folded on a sheet edge is used mainly to:", options: ["Change the gauge", "Stiffen the edge and remove the sharp cut edge", "Make the sheet longer", "Seal against water only"], answer: 1, explain: "Hems stiffen and make the edge safer to handle." },
    { q: "Which eye protection is the minimum when cutting or grinding metal?", options: ["Sunglasses", "Safety glasses with side shields, plus a face shield for grinding", "Prescription glasses only", "None if it is quick"], answer: 1, explain: "Flying particles require rated eye protection, with a face shield added for grinding." },
    { q: "Which is thicker, 22 gauge or 26 gauge sheet steel?", options: ["22 gauge", "26 gauge", "They are the same", "It depends on the colour"], answer: 0, explain: "Lower gauge numbers are thicker." },
    { q: "Aviation snips with green handles are designed to cut:", options: ["Straight lines only", "Left curves", "Right curves", "Heavy plate"], answer: 2, explain: "Green handles cut right, red cut left, and yellow cut straight." },
    { q: "For sheet steel gauge numbers, a lower number means the metal is:", options: ["Thicker", "Thinner", "Softer", "Lighter"], answer: 0, explain: "A lower gauge number is thicker sheet, so 16 gauge is thicker than 24 gauge." },
    { q: "Which fastener can be installed with access to only one side of the work?", options: ["Machine screw and nut", "Blind (pop) rivet", "Carriage bolt", "Lag bolt"], answer: 1, explain: "Blind rivets are set from one side." },
    { q: "Where would you find the hazards and first-aid measures for a hazardous product?", options: ["Invoice", "Safety Data Sheet (SDS)", "Drawing title block", "Tool manual"], answer: 1, explain: "SDSs are part of WHMIS and describe hazards, handling, and first aid." },
    { q: "The purpose of lockout/tagout is to:", options: ["Track tool inventory", "Control hazardous energy during servicing", "Label finished duct", "Prevent theft"], answer: 1, explain: "It keeps equipment from starting or releasing stored energy while someone works on it." },
    { q: "Which development method is normally used for a round pipe elbow?", options: ["Parallel line", "Radial line", "Triangulation", "Freehand"], answer: 0, explain: "Parallel line development suits straight-sided shapes and elbows." },
    { q: "What is the perimeter of a rectangular duct 300 mm by 200 mm?", options: ["500 mm", "600 mm", "1000 mm", "60 000 mm"], answer: 2, explain: "Perimeter = 2 × (300 + 200) = 1000 mm." },
    { q: "What is the main purpose of the zinc coating on galvanized steel?", options: ["Corrosion protection", "Added strength", "Electrical insulation", "Easier welding"], answer: 0, explain: "The zinc layer protects the steel from rusting." },
    { q: "Which class of fire extinguisher is intended for energized electrical equipment fires?", options: ["Class A", "Class B", "Class C", "Class D"], answer: 2, explain: "Class C is for fires involving energized electrical equipment." },
    { q: "The main purpose of soldering flux is to:", options: ["Cool the joint", "Remove oxides and help solder flow", "Add strength by itself", "Colour the metal"], answer: 1, explain: "Flux cleans oxides and lets solder wet the surface." },
    { q: "Dividers or a trammel are used for:", options: ["Scribing circles and arcs", "Cutting hole saw holes", "Checking squareness", "Measuring thickness"], answer: 0, explain: "They transfer distances and scribe arcs." },
    { q: "2.5 metres is equal to:", options: ["25 mm", "250 mm", "2500 mm", "25 000 mm"], answer: 2, explain: "1 m = 1000 mm, so 2.5 m = 2500 mm." },
    { q: "When lifting a heavy sheet, you should:", options: ["Bend at the waist", "Bend your knees and keep the load close", "Twist while lifting", "Lift quickly"], answer: 1, explain: "Use your legs, keep the load close, and avoid twisting." }
  ],
  2: [
    { q: "S-slips and drive cleats are typically used on:", options: ["Transverse (cross) joints of rectangular duct", "Longitudinal corner seams", "Roof flashing", "Round pipe elbows"], answer: 0, explain: "They join duct sections at the transverse joints." },
    { q: "What is the cross-sectional area of a 600 mm by 300 mm duct?", options: ["0.09 m²", "0.18 m²", "0.9 m²", "1.8 m²"], answer: 1, explain: "0.6 × 0.3 = 0.18 m²." },
    { q: "About how long is the stretchout (circumference) for 100 mm diameter round pipe, before seam allowance?", options: ["100 mm", "157 mm", "314 mm", "628 mm"], answer: 2, explain: "C = π × d = 3.1416 × 100 ≈ 314 mm." },
    { q: "On a drawing, hidden edges are normally shown as:", options: ["Thick solid lines", "Dashed lines", "Centre lines only", "Not shown"], answer: 1, explain: "Hidden lines are drawn as short dashes." },
    { q: "Compared with a square mitred elbow without vanes, a radius elbow generally has:", options: ["Higher pressure loss", "Lower pressure loss", "No difference", "More leakage by design"], answer: 1, explain: "Smooth turns create less turbulence." },
    { q: "A snap lock seam is typically closed by:", options: ["Pushing the female and male edges together and snapping them shut", "Welding", "Riveting only", "Gluing"], answer: 0, explain: "The pocket and flange snap together and are then flattened or sealed." },
    { q: "Radial line development is best suited to:", options: ["Rectangular ducts", "Cones and tapered round fittings", "Flat plates", "Square elbows"], answer: 1, explain: "Radial lines fan out from the apex of a cone." },
    { q: "Triangulation is commonly used to develop:", options: ["Transitions such as square to round", "Straight pipe", "Flat flashing", "Cylinders"], answer: 0, explain: "Transitions have no parallel or radial elements, so the surface is split into triangles." },
    { q: "The Pittsburgh lock seam is commonly used for:", options: ["Roof drainage", "Longitudinal corner seams on rectangular duct", "Welding stainless", "Hangers"], answer: 1, explain: "It is a common corner seam in rectangular duct fabrication." },
    { q: "What is the cross-sectional area of a round duct with a 400 mm diameter?", options: ["About 0.126 m²", "About 0.4 m²", "About 1.26 m²", "About 0.04 m²"], answer: 0, explain: "A = π × 0.2² ≈ 0.1257 m²." },
    { q: "On a 1:50 scale drawing, 40 mm measures what actual length?", options: ["800 mm", "2000 mm", "4000 mm", "200 mm"], answer: 1, explain: "40 × 50 = 2000 mm." },
    { q: "Cross-breaking a flat duct panel is done mainly to:", options: ["Increase rigidity and reduce drumming", "Reduce cost", "Allow hanging", "Increase leakage"], answer: 0, explain: "The slight crown stiffens the panel and reduces vibration noise." },
    { q: "A plan view shows the object as seen from:", options: ["The side", "The front", "Above", "Below the floor only"], answer: 2, explain: "Plan views look down from above." },
    { q: "GMAW (MIG) welding uses:", options: ["A stick electrode", "A continuously fed wire and shielding gas", "A tungsten electrode only", "Oxy-fuel flame"], answer: 1, explain: "GMAW feeds consumable wire while gas shields the weld." },
    { q: "Turning vanes in a rectangular elbow are used to:", options: ["Add noise", "Reduce turbulence and pressure loss", "Hold insulation", "Increase leakage"], answer: 1, explain: "They guide air smoothly around the bend." },
    { q: "Duct sealant is applied mainly at:", options: ["Hangers", "Joints and seams", "Duct interiors only", "Paint areas"], answer: 1, explain: "Sealing joints and seams reduces air leakage." },
    { q: "In a three-piece 90° round elbow, each joint changes the airflow direction by:", options: ["22.5°", "30°", "45°", "90°"], answer: 2, explain: "Two joints share the 90° turn equally." },
    { q: "Why should burrs be removed from cut edges?", options: ["Safety and proper fit", "To make metal heavier", "To change gauge", "It is purely cosmetic"], answer: 0, explain: "Burrs cut people and prevent tight seams and joints." }
  ],
  3: [
    { q: "About how many CFM are in 1 m³/s?", options: ["35", "212", "2119", "21 190"], answer: 2, explain: "1 m³ ≈ 35.31 ft³ and there are 60 seconds in a minute, so about 2119 CFM." },
    { q: "Air flows at 1000 FPM through a duct carrying 2000 CFM. The duct area is:", options: ["0.5 ft²", "2 ft²", "20 ft²", "2000 ft²"], answer: 1, explain: "Area = CFM ÷ FPM = 2000 ÷ 1000 = 2 ft²." },
    { q: "A smoke damper is intended to:", options: ["Restrict the passage of smoke through the duct", "Balance airflow", "Insulate", "Reduce noise"], answer: 0, explain: "Smoke dampers close to limit smoke spread, and fire dampers address heat and flame." },
    { q: "Duct static pressure is commonly measured in:", options: ["Pascals or inches of water gauge", "Litres", "Degrees", "Volts"], answer: 0, explain: "Pa in metric and in. w.g. in imperial." },
    { q: "A 4:12 roof pitch rises how far over 24 inches of horizontal run?", options: ["4 in", "6 in", "8 in", "12 in"], answer: 2, explain: "4 per 12 is 8 per 24." },
    { q: "Compared with steel, aluminum thermal expansion is roughly:", options: ["Half as much", "About the same", "About twice as much", "Zero"], answer: 2, explain: "Aluminum expands about twice as much per degree, so fastening must allow for movement." },
    { q: "A duct has an area of 0.2 m² and air velocity of 5 m/s. What is the airflow?", options: ["0.04 m³/s", "1.0 m³/s", "25 m³/s", "10 m³/s"], answer: 1, explain: "Q = V × A = 5 × 0.2 = 1.0 m³/s." },
    { q: "A fire damper is designed to:", options: ["Balance airflow", "Close to help prevent fire spread through a rated assembly", "Silence the duct", "Filter air"], answer: 1, explain: "It closes when heat melts a fusible link or by other release." },
    { q: "A volume damper is used mainly to:", options: ["Stop fires", "Adjust airflow for balancing", "Support duct", "Add insulation"], answer: 1, explain: "Volume dampers let a balancer set branch airflow." },
    { q: "Flashing is used to:", options: ["Add colour", "Direct water away from joints and penetrations", "Support roof loads", "Insulate"], answer: 1, explain: "It sheds water at vulnerable points." },
    { q: "Counterflashing is normally installed:", options: ["Under base flashing", "Lapped over base flashing", "Without overlap", "Only on floors"], answer: 1, explain: "It laps over base flashing so water runs onto it." },
    { q: "Galvanic corrosion is most likely when:", options: ["Identical metals touch in dry air", "Dissimilar metals touch in the presence of moisture", "Metal is painted", "Metal is cut"], answer: 1, explain: "Moisture acts as electrolyte between dissimilar metals." },
    { q: "Why use slotted holes or sliding clips on long metal cladding or roofing?", options: ["Decoration", "To allow thermal expansion and contraction", "To reduce weight", "To simplify drawings"], answer: 1, explain: "Metal moves with temperature, so fastening must allow for it." },
    { q: "Which instrument is commonly used with a manometer to measure air velocity in a duct?", options: ["Pitot tube", "Torque wrench", "Feeler gauge", "Dial caliper"], answer: 0, explain: "A pitot tube measures velocity pressure." },
    { q: "As the sling angle from horizontal decreases, tension in each sling:", options: ["Decreases", "Stays the same", "Increases", "Becomes zero"], answer: 2, explain: "Shallower sling angles increase the force on each leg." },
    { q: "For efficiency, a rectangular duct aspect ratio should ideally be:", options: ["As narrow as possible", "Close to square", "Always 10:1", "Irrelevant"], answer: 1, explain: "Near-square ducts have lower friction for the same area." },
    { q: "Before using a safety harness you should:", options: ["Wash it", "Inspect it and confirm a rated anchor point", "Shorten the lanyard", "Paint it"], answer: 1, explain: "Inspection and a rated anchor are part of safe fall protection." },
    { q: "Flexible duct should generally be installed:", options: ["Fully extended and without sharp bends", "Compressed", "Kinked at corners", "Buried"], answer: 0, explain: "Compression and kinks greatly increase friction loss." }
  ],
  4: [
    { q: "A submittal is:", options: ["Shop drawings or product data sent for approval before fabrication or purchase", "A tool order", "A safety talk", "A lunch schedule"], answer: 0, explain: "Submittals let the designer review before work is built." },
    { q: "Testing and balancing (TAB) aims to:", options: ["Paint ductwork", "Adjust the system so airflows match design values", "Estimate costs", "Hang duct"], answer: 1, explain: "Balancers measure and adjust to design airflow." },
    { q: "Confined space entry normally requires:", options: ["A permit, atmospheric testing, and an attendant as your jurisdiction requires", "Nothing if it is short", "Only a flashlight", "Just a hard hat"], answer: 0, explain: "Confined spaces can hide toxic or oxygen-deficient air. Follow your provincial rules." },
    { q: "A change order is:", options: ["A written authorization to change scope, price, or time", "A tool swap", "A shift change", "An inspection"], answer: 0, explain: "Changes should be documented and approved before extra work proceeds." },
    { q: "SMACNA is best known for:", options: ["Publishing sheet metal and HVAC duct construction standards", "Issuing Red Seal certificates", "Making tools", "Writing building codes"], answer: 0, explain: "It publishes widely used duct construction standards." },
    { q: "Before you take over a job from another crew, a good practice is to:", options: ["Walk the work, review drawings, and clarify open items", "Assume it is correct", "Ignore the drawings", "Start cutting at once"], answer: 0, explain: "Checking the status avoids rework and safety problems." },
    { q: "Commercial kitchen grease exhaust duct work is generally governed by which standard?", options: ["NFPA 96", "CSA W59 only", "ISO 9001", "WHMIS"], answer: 0, explain: "NFPA 96 covers ventilation control and fire protection of commercial cooking operations." },
    { q: "Duct leakage testing is performed to:", options: ["Verify leakage is within the allowed limit", "Clean the duct", "Measure thickness", "Check paint"], answer: 0, explain: "A test fan and orifice confirm leakage meets specification." },
    { q: "When welding stainless steel you should:", options: ["Use tools dedicated to stainless to avoid carbon contamination", "Use any wire brush", "Skip cleaning", "Use only flux"], answer: 0, explain: "Cross-contamination with carbon steel can cause corrosion." },
    { q: "Commissioning a system means:", options: ["Painting it", "Verifying it performs as designed", "Ordering materials", "Estimating cost"], answer: 1, explain: "Commissioning verifies and documents performance." },
    { q: "A material takeoff is:", options: ["A list of quantities taken from drawings for estimating", "Removing old material", "A shipping label", "A tool inventory"], answer: 0, explain: "It supports pricing and ordering." },
    { q: "For the same airflow, increasing duct velocity generally results in:", options: ["Higher friction loss and noise", "Lower friction loss", "No change", "Lower noise"], answer: 0, explain: "Velocity pressure and friction rise with the square of velocity." },
    { q: "A lift plan should address:", options: ["Load weight, centre of gravity, and rated hardware", "Paint colour", "Lunch breaks", "Invoice dates"], answer: 0, explain: "Rigging safety relies on known weights and rated equipment." },
    { q: "A Request for Information (RFI) is used to:", options: ["Clarify unclear drawings or specifications before work", "Order tools", "Report injuries", "Close a project"], answer: 0, explain: "RFIs resolve ambiguity with the designer or general contractor." },
    { q: "As-built drawings record:", options: ["Original design only", "The actual installed conditions", "Cost estimates", "Shop schedules"], answer: 1, explain: "They document changes made during construction." },
    { q: "A hot work permit is typically required when:", options: ["Welding or cutting near combustibles", "Measuring duct", "Sweeping", "Using snips"], answer: 0, explain: "Sparks and heat create a fire risk." },
    { q: "Duct liner is used mainly to:", options: ["Add thermal and acoustic performance", "Reduce weight", "Seal leaks only", "Hold hangers"], answer: 0, explain: "It insulates and absorbs sound." },
    { q: "Compared with rectangular duct, spiral round duct typically has:", options: ["Lower leakage and friction", "Higher friction", "Higher leakage", "No reinforcement"], answer: 0, explain: "Round spiral duct is rigid, tight, and efficient." }
  ]
};

function shuffle(list) {
  const copy = list.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function readScores() {
  try { return JSON.parse(localStorage.getItem(`${P.store}-scores`) || "{}"); } catch { return {}; }
}

function saveScore(key, percent) {
  const scores = readScores();
  scores[key] = Math.max(scores[key] || 0, percent);
  try { localStorage.setItem(`${P.store}-scores`, JSON.stringify(scores)); } catch { /* storage unavailable */ }
}


function sheetMetalLinkCard(url, label, description) {
  return `<a class="resource-link" href="${url}" target="_blank" rel="noopener noreferrer"><span><strong>${label}</strong><small>${description}</small></span><span aria-hidden="true">↗</span></a>`;
}

function featuredTool() {
  const pool = P.toolGroups.slice(0, 2).flatMap((g) => g.items);
  const now = new Date();
  return pool[(now.getFullYear() * 12 + now.getMonth()) % pool.length];
}

const toolBadges = ["Essential", "Year 1–2", "Later", "School"];
const toolAnchors = ["Essentials", "First & second year", "Specialized", "School supplies"];

function toolCard(item, badge, featured) {
  return `<a class="tool-card${featured ? " is-featured" : ""}" href="${toolLink(item)}" target="_blank" rel="noopener noreferrer">
    <span class="tool-badge">${featured ? "Tool of the month" : badge}</span>
    <strong>${item.name}</strong>
    <span class="tool-why">${item.why}</span>
    <span class="tool-cta">Shop on Amazon.ca <span aria-hidden="true">↗</span></span>
  </a>`;
}

function renderSheetMetalTools() {
  const pick = featuredTool();
  const groups = P.toolGroups.map((group, gi) => `
    <section class="content-block" id="tool-group-${gi}">
      <h2>${group.title}</h2>
      <p class="fine-print">${group.note}</p>
      <div class="tool-grid">${group.items.map((item) => toolCard(item, toolBadges[gi])).join("")}</div>
    </section>`).join("");
  const jump = `<div class="jump-chips" aria-label="Jump to a section">${toolAnchors.map((label, gi) => `<button type="button" data-jump="tool-group-${gi}">${label}</button>`).join("")}</div>`;
  return `
    <section class="content-block"><h2>Buying tools</h2>
      <p>A practical shopping guide for ${P.short} apprentices. Ask your employer, union local, and training provider what is supplied or required before you buy. ${AMAZON_TAG ? "<strong>As an Amazon Associate I earn from qualifying purchases.</strong> Tool links open Amazon.ca searches and are affiliate links: if you buy, ApprenticeHub may earn a small commission at no extra cost to you. Recommendations are chosen for quality, not commission." : "Tool links open Amazon.ca searches. They are not affiliate links."} Compare prices at other Canadian retailers too.</p>
    </section>
    <section class="content-block"><h2>Tool of the month</h2><div class="tool-grid">${toolCard(pick, "", true)}</div><p class="fine-print">Rotates monthly from our core list. It is not paid placement.</p></section>${jump}${groups}`;
}

function renderSheetMetalLearn() {
  return P.mediaGroups.map((group) => `
    <section class="content-block"><h2>${group.title}</h2>
      ${group.note ? `<p class="fine-print">${group.note}</p>` : ""}
      <div class="resource-list">${group.items.map((i) => sheetMetalLinkCard(i.url, i.name, i.desc)).join("")}</div>
    </section>`).join("");
}

function renderSheetMetalPractice() {
  const scores = readScores();
  const best = (key) => (scores[key] === undefined ? "" : ` · Best ${scores[key]}%`);
  const years = [1, 2, 3, 4].map((y) => `
    <button class="quiz-start" type="button" data-quiz="year-${y}"><strong>Year ${y} test</strong><small>${P.practiceBank[y].length} questions${best(`year-${y}`)}</small></button>`).join("");
  const total = Object.values(P.practiceBank).reduce((n, list) => n + list.length, 0);
  return `
    <section class="content-block"><h2>Practice tests</h2>
      <p>Original study questions written for ApprenticeHub. They are not official Red Seal questions, and the real exam's content, length, and format differ by trade and jurisdiction. Check the Red Seal site for exam details. Scores are saved only in this browser.</p>
    </section>
    <section class="content-block"><h2>Mock Red Seal-style exam</h2>
      <p>All ${total} questions across every year, shuffled. A 70% mark is used as the pass target for this practice exam.</p>
      <p><button class="quiz-start" type="button" data-quiz="mock"><strong>Start mock exam</strong><small>${total} questions${best("mock")}</small></button></p>
    </section>
    <section class="content-block"><h2>Tests by apprenticeship year</h2><div class="quiz-grid">${years}</div>
      <p class="fine-print">Year boundaries vary by province and employer, so treat these as topic groupings that follow a typical progression.</p></section>
    <div id="quiz-area" aria-live="polite"></div>`;
}


const roadmapSteps = [
  { title: "Before you start", items: ["Confirm entry requirements with your provincial or territorial apprenticeship authority", "Get the safety training employers ask for (commonly WHMIS, fall protection, and site orientation; requirements vary)", "Prepare a resume and apply to union locals (such as SMART) and employers", "Register your apprenticeship and start a hours log"] },
  { title: "Year 1: foundations", items: ["Learn shop and site safety, PPE, and lockout/tagout", "Master measuring, layout, and the hand tools", "Learn basic cutting, forming, and seams", "Complete your first technical training block", "Build your core tool kit (see Buying tools)"] },
  { title: "Year 2: fabrication", items: ["Practise parallel line, radial line, and triangulation development", "Fabricate duct, fittings, and transitions", "Learn soldering and basic welding as your employer teaches them", "Read plans, sections, and details with growing confidence"] },
  { title: "Year 3: installation and systems", items: ["Install duct, hangers, and equipment on site", "Learn rigging and hoisting basics", "Work on roofing, flashing, or cladding where available", "Learn airflow math, dampers, and system balancing basics"] },
  { title: "Year 4 and beyond: advanced", items: ["Handle complex fabrication and layout independently", "Learn estimating, takeoffs, and coordination", "Mentor first-year apprentices", "Use the Red Seal standard to find gaps in your experience"] },
  { title: "Certification", items: ["Confirm your hours and school requirements with your authority", "Review the Red Seal trade profile and take the mock exam on the Practice tests tab", "Write your exam and ask about the Red Seal endorsement", "Check the federal completion bonus and funding pages on the Overview tab"] }
];

function renderSheetMetalRoadmap() {
  const done = (() => { try { return JSON.parse(localStorage.getItem(`${P.store}-roadmap`) || "{}"); } catch { return {}; } })();
  return `
    <section class="content-block"><h2>Apprenticeship roadmap</h2>
      <p>A general path from first day to certification. Hours, years, and exam rules vary by province and employer, so this is a guide, not a requirement. Ticks are saved in this browser only.</p></section>
    ${P.roadmapSteps.map((step, si) => `
    <section class="content-block"><h2>${step.title}</h2>
      <ul class="check-list">${step.items.map((item, ii) => { const id = `${si}-${ii}`; return `<li><label><input type="checkbox" data-road="${id}"${done[id] ? " checked" : ""}> <span>${item}</span></label></li>`; }).join("")}</ul>
    </section>`).join("")}`;
}

const gaugeTable = [["28", "0.47", "0.0187"], ["26", "0.55", "0.0217"], ["24", "0.70", "0.0276"], ["22", "0.85", "0.0336"], ["20", "1.00", "0.0396"], ["18", "1.31", "0.0516"], ["16", "1.61", "0.0635"]];

const glossary = [
  ["Aspect ratio", "The width-to-height ratio of a rectangular duct."],
  ["Blind rivet", "A rivet set from one side of the work."],
  ["CFM", "Cubic feet per minute, a measure of airflow."],
  ["Counterflashing", "Flashing lapped over base flashing to shed water."],
  ["Damper", "A plate or blade that controls or stops airflow."],
  ["Development", "Laying out a 3D shape flat so it can be cut and formed."],
  ["Drive cleat", "A formed strip slid over duct flanges to join sections."],
  ["FPM", "Feet per minute, a measure of air velocity."],
  ["Galvanized", "Steel coated with zinc to resist rust."],
  ["Gauge", "A number for sheet thickness. Lower numbers are thicker."],
  ["Hanger", "A support that holds duct from the structure."],
  ["Lockout/tagout", "Locking and tagging energy sources off before servicing."],
  ["Pittsburgh lock", "A common corner seam on rectangular duct."],
  ["Radial line development", "A layout method for cones and tapered round shapes."],
  ["SDS", "Safety Data Sheet describing a product's hazards and handling."],
  ["Static pressure", "Pressure in a duct system, in Pa or in. w.g."],
  ["Stretchout", "The flat length of a part before forming."],
  ["TAB", "Testing, adjusting, and balancing of air systems."],
  ["Transition", "A fitting that joins two different duct sizes or shapes."],
  ["Triangulation", "A layout method that splits surfaces into triangles."],
  ["Turning vanes", "Curved blades in an elbow that guide airflow."],
  ["WHMIS", "Canada's workplace hazardous materials information system."]
];

function smReference() {
  return `
    <section class="content-block"><h2>Reference sheet</h2><p>Quick study aids. Always confirm values against your drawings, specifications, manufacturer data, and local codes.</p></section>
    <section class="content-block"><h2>Key formulas</h2>
      <ul class="check-list plain">
        <li>Airflow: Q = V × A (m³/s = m/s × m²), or CFM = FPM × ft²</li>
        <li>Circle area: A = π × r², circumference: C = π × d</li>
        <li>Rectangle perimeter: P = 2 × (w + h)</li>
        <li>Right triangle: c² = a² + b²</li>
        <li>Slope: rise ÷ run, and a 4:12 pitch rises 4 in per 12 in of run</li>
        <li>Scale: real length = drawing length × scale (1:50 means × 50)</li>
      </ul></section>
    <section class="content-block"><h2>Conversions</h2>
      <ul class="check-list plain">
        <li>1 in = 25.4 mm, and 1 ft = 304.8 mm</li>
        <li>1 m = 1000 mm</li>
        <li>1 m³/s ≈ 2119 CFM, and 1 CFM ≈ 0.4719 L/s</li>
        <li>1 in. w.g. ≈ 249 Pa</li>
      </ul></section>
    <section class="content-block"><h2>Galvanized sheet gauge (approximate)</h2>
      <table class="ref-table"><thead><tr><th>Gauge</th><th>mm</th><th>in</th></tr></thead><tbody>${gaugeTable.map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</tbody></table>
      <p class="fine-print">Gauge values differ by material (galvanized, stainless, aluminum). Check the manufacturer's chart.</p></section>
    <section class="content-block"><h2>Which development method?</h2>
      <ul class="check-list plain">
        <li><strong>Parallel line:</strong> straight-sided shapes such as elbows and pipe.</li>
        <li><strong>Radial line:</strong> cones and tapered round fittings.</li>
        <li><strong>Triangulation:</strong> transitions such as square to round.</li>
      </ul></section>
    <section class="content-block"><h2>Glossary</h2>
      <dl class="glossary">${P.glossary.map(([t, d]) => `<dt>${t}</dt><dd>${d}</dd>`).join("")}</dl></section>`;
}

function renderSheetMetalJobs() {
  const province = (typeof provinceSelect !== "undefined" && provinceSelect.value) || "Ontario";
  const links = P.jobLinks(province, encodeURIComponent);
  return `
    <section class="content-block"><h2>Jobs and employers</h2><p>Searches for ${province}. Change your province on the home page. ${P.jobsIntro} Ask about sponsorship and your first-year hours.</p>
      <div class="resource-list">${links.map((l) => sheetMetalLinkCard(l[2], l[0], l[1])).join("")}</div></section>
    <section class="content-block"><h2>Applying tips</h2>
      <ul class="check-list plain">${P.tips.map((t) => `<li>${t}</li>`).join("")}</ul></section>`;
}

function renderSheetMetalFlashcards() {
  const cards = [
    ...P.glossary.map(([t, d]) => ({ front: `What is: ${t}?`, back: d })),
    ...P.cards
  ];
  window.smwCards = shuffle(cards);
  return `
    <section class="content-block"><h2>Flashcards</h2>
      <p>Tap the card to flip it. Use Next for a new card. Cards come from the glossary and formulas on the Reference tab.</p>
      <button class="flashcard" id="flashcard" type="button" aria-live="polite"></button>
      <div class="forum-actions"><button class="quiz-start" id="card-prev" type="button">Previous</button><button class="quiz-submit" id="card-next" type="button">Next</button><span class="fine-print" id="card-count"></span></div>
    </section>`;
}

function bindFlashcards(root) {
  const cards = window.smwCards;
  let index = 0;
  let flipped = false;
  const card = root.querySelector("#flashcard");
  const show = () => {
    card.textContent = flipped ? cards[index].back : cards[index].front;
    card.classList.toggle("is-flipped", flipped);
    root.querySelector("#card-count").textContent = `${index + 1} of ${cards.length}`;
  };
  card.addEventListener("click", () => { flipped = !flipped; show(); });
  root.querySelector("#card-next").addEventListener("click", () => { index = (index + 1) % cards.length; flipped = false; show(); });
  root.querySelector("#card-prev").addEventListener("click", () => { index = (index - 1 + cards.length) % cards.length; flipped = false; show(); });
  show();
}

function renderSheetMetalProgress() {
  const scores = readScores();
  let roadmap = {};
  try { roadmap = JSON.parse(localStorage.getItem(`${P.store}-roadmap`) || "{}"); } catch { /* ignore */ }
  const totalSteps = P.roadmapSteps.reduce((n, step) => n + step.items.length, 0);
  const doneSteps = Object.values(roadmap).filter(Boolean).length;
  const row = (label, key) => `<tr><td>${label}</td><td>${scores[key] === undefined ? "Not taken" : scores[key] + "%"}</td></tr>`;
  return `
    <section class="content-block"><h2>My progress</h2>
      <p>Saved only in this browser on this device. Clearing your browser data resets it.</p></section>
    <section class="content-block"><h2>Roadmap</h2>
      <p><strong>${doneSteps} of ${totalSteps}</strong> steps ticked. <a href="#trade/${P.id}/roadmap">Open the roadmap</a></p></section>
    <section class="content-block"><h2>Best practice test scores</h2>
      <table class="ref-table"><thead><tr><th>Test</th><th>Best score</th></tr></thead><tbody>
        ${row("Year 1", "year-1")}${row("Year 2", "year-2")}${row("Year 3", "year-3")}${row("Year 4", "year-4")}${row("Mock Red Seal-style exam", "mock")}
      </tbody></table>
      <p class="fine-print"><a href="#trade/${P.id}/practice">Take a practice test</a></p></section>`;
}

function renderSheetMetalRules() {
  return `
    <section class="content-block"><h2>Community rules</h2>
      <ul class="check-list plain">
        <li>This is a safe place. Disrespect, judgement, and ridicule are not tolerated.</li>
        <li>Be honest and helpful. Every question is a good question.</li>
        <li>No harassment, hate, threats, spam, or adult content.</li>
        <li>Don't share anyone's private information, or your own home address or phone number.</li>
        <li>Don't post employer-confidential information or unsafe shortcuts.</li>
        <li>Buy and sell: personal items only, and listed honestly with the real condition. No stolen, counterfeit, recalled, or illegal items.</li>
        <li>Moderators may remove posts or accounts that break these rules.</li>
      </ul></section>
    <section class="content-block"><h2>Buy and sell safety</h2>
      <p>Sales are between members. ApprenticeHub does not handle payments, shipping, or disputes, and does not guarantee any item or buyer. Meet in a public place, bring a friend if you can, inspect the item before paying, and don't send money in advance. Use your own judgement.</p></section>
    <section class="content-block"><h2>Privacy</h2>
      <p>When you create a forum account we store your email address, a display name you choose, and the posts, replies, listings, photos, and reports you submit. Your display name and posts are public. Your email is not shown to other members. Accounts and content are stored with Supabase, a third-party service. Practice test scores and roadmap ticks stay in your own browser and are not sent to us. To have your account or content removed, contact the site owner through the forum or the contact details on the site.</p></section>
    <section class="content-block"><h2>Advice and links disclaimer</h2>
      <p>Content here is informal and for learning. It is not official Red Seal material or professional, legal, or safety advice. Always follow your employer's procedures, local codes, and your journeyperson's direction. External sites are maintained by others.</p></section>
    <section class="content-block"><h2>Affiliate disclosure</h2>
      <p>If tool links become affiliate links, we will say so clearly on the Buying tools page, and recommendations stay based on quality, not commission.</p></section>`;
}

function renderSheetMetalSection(section) {
  if (section === "flashcards") return renderSheetMetalFlashcards();
  if (section === "progress") return renderSheetMetalProgress();
  if (section === "rules") return renderSheetMetalRules();
  if (section === "roadmap") return renderSheetMetalRoadmap();
  if (section === "reference") return P.reference();
  if (section === "jobs") return renderSheetMetalJobs();
  if (section === "tools") return renderSheetMetalTools();
  if (section === "learn") return renderSheetMetalLearn();
  if (section === "forum") return renderSheetMetalForum();
  if (section === "practice") return renderSheetMetalPractice();
  return "";
}

function startQuiz(key, area, retry) {
  const questions = retry ? shuffle(retry) : key === "mock"
    ? shuffle(Object.values(P.practiceBank).flat())
    : shuffle(P.practiceBank[Number(key.split("-")[1])]);
  const title = retry ? "Retry: questions you missed" : key === "mock" ? "Mock Red Seal-style exam" : `Year ${key.split("-")[1]} test`;
  const picks = new Array(questions.length).fill(null);

  const form = questions.map((item, i) => `
    <fieldset class="quiz-question"><legend>${i + 1}. ${escapeHtml(item.q)}</legend>
      ${item.options.map((opt, o) => `<label><input type="radio" name="q${i}" value="${o}"> <span>${escapeHtml(opt)}</span></label>`).join("")}
      <p class="quiz-explain" hidden></p>
    </fieldset>`).join("");

  area.innerHTML = `
    <section class="content-block"><h2>${title}</h2>
      <div class="quiz-progress" aria-live="polite"><div class="quiz-bar"><span></span></div><small>0 of ${questions.length} answered</small></div>
      <form id="quiz-form">${form}<button class="quiz-submit" type="submit">Submit answers</button></form>
      <div id="quiz-result" role="status"></div>
    </section>`;
  area.scrollIntoView({ behavior: "smooth", block: "start" });

  const quizForm = area.querySelector("#quiz-form");
  quizForm.addEventListener("change", () => {
    const answered = new Set([...new FormData(quizForm).keys()]).size;
    area.querySelector(".quiz-bar span").style.width = `${(answered / questions.length) * 100}%`;
    area.querySelector(".quiz-progress small").textContent = `${answered} of ${questions.length} answered`;
  });
  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let correct = 0;
    questions.forEach((item, i) => {
      const value = data.get(`q${i}`);
      picks[i] = value === null ? null : Number(value);
      const ok = picks[i] === item.answer;
      if (ok) correct += 1;
      const fieldset = event.target.querySelectorAll(".quiz-question")[i];
      fieldset.classList.add(ok ? "is-correct" : "is-wrong");
      const note = fieldset.querySelector(".quiz-explain");
      note.hidden = false;
      note.textContent = `${ok ? "Correct." : `Answer: ${item.options[item.answer]}.`} ${item.explain}`;
      fieldset.querySelectorAll("input").forEach((input) => { input.disabled = true; });
    });
    const percent = Math.round((correct / questions.length) * 100);
    if (!retry) saveScore(key, percent);
    const verdict = key === "mock" ? (percent >= 70 ? " Above the 70% target." : " Below the 70% target. Review and try again.") : "";
    const result = area.querySelector("#quiz-result");
    result.textContent = `You scored ${correct} of ${questions.length} (${percent}%).${verdict}`;
    result.classList.add("quiz-score");
    event.target.querySelector(".quiz-submit").hidden = true;
    const missed = questions.filter((item, i) => picks[i] !== item.answer);
    if (missed.length) {
      const again = document.createElement("button");
      again.type = "button"; again.className = "quiz-start"; again.textContent = `Retry the ${missed.length} missed`;
      again.addEventListener("click", () => startQuiz(key, area, missed));
      result.appendChild(document.createElement("br")); result.appendChild(again);
    }
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function bindSheetMetalSection(section, root) {
  if (section === "forum") {
    const forumRoot = root.querySelector("#forum-root");
    if (forumRoot) initForum(forumRoot);
    return;
  }
  if (section === "tools") {
    root.querySelectorAll("[data-jump]").forEach((b) => b.addEventListener("click", () => {
      root.querySelector(`#${b.dataset.jump}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }));
    return;
  }
  if (section === "flashcards") { bindFlashcards(root); return; }
  if (section === "roadmap") {
    root.querySelectorAll("[data-road]").forEach((box) => box.addEventListener("change", () => {
      let saved = {};
      try { saved = JSON.parse(localStorage.getItem(`${P.store}-roadmap`) || "{}"); } catch { /* ignore */ }
      saved[box.dataset.road] = box.checked;
      try { localStorage.setItem(`${P.store}-roadmap`, JSON.stringify(saved)); } catch { /* storage unavailable */ }
    }));
    return;
  }
  if (section !== "practice") return;
  const area = root.querySelector("#quiz-area");
  root.querySelectorAll("[data-quiz]").forEach((button) => {
    button.addEventListener("click", () => startQuiz(button.dataset.quiz, area));
  });
}


const tradePacks = {};
let P = null;

function useTrade(id) {
  P = tradePacks[id] || null;
  return P;
}

tradePacks["sheet-metal"] = {
  id: "sheet-metal", store: "smw", name: "Sheet Metal Worker", short: "sheet metal",
  sections: sheetMetalSections, toolGroups, mediaGroups, practiceBank, roadmapSteps, glossary,
  reference: smReference,
  cards: [
    { front: "Airflow formula (metric)", back: "Q = V × A (m³/s = m/s × m²)" },
    { front: "Airflow formula (imperial)", back: "CFM = FPM × ft²" },
    { front: "Circumference of a circle", back: "C = π × d" },
    { front: "Perimeter of a rectangle", back: "P = 2 × (w + h)" },
    { front: "Inches to millimetres", back: "1 in = 25.4 mm" },
    { front: "Which snips cut left, right, and straight?", back: "Red cuts left, green cuts right, yellow cuts straight." },
    { front: "Which development method for cones?", back: "Radial line development." },
    { front: "Which development method for square-to-round transitions?", back: "Triangulation." }
  ],
  jobsIntro: "Look for union and signatory contractors, HVAC firms, roofing and cladding shops, and fabrication shops.",
  tips: ["Bring a short resume, your safety tickets, and ID.", "Show interest in math, layout, and working with your hands.", "Visit shops and halls in person when you can, and follow up.", "Ask what tools you need and what the employer supplies."],
  jobLinks: (province, q) => [
    ["Job Bank: sheet metal apprentice", `Search openings in ${province}.`, `${nationalResources.jobBank}${q("sheet metal apprentice " + province)}`],
    ["Job Bank: sheet metal worker", `Search journeyperson openings in ${province}.`, `${nationalResources.jobBank}${q("sheet metal worker " + province)}`],
    ["Indeed Canada: sheet metal apprentice", "Search a large job board.", `https://ca.indeed.com/jobs?q=${q("sheet metal apprentice")}&l=${q(province)}`],
    ["SMART Canada apprenticeships", "Union training and how to apply.", "https://www.smart-union.org/canada/apprenticeships/"],
    ["Canada's Building Trades Unions", "Find unions and apprenticeship paths.", nationalResources.buildingTrades],
    ["Find your local apprenticeship authority", "Confirm registration and find approved employers.", nationalResources.provinces]
  ],
  forumTopics: ["Starting out", "Layout and fabrication", "Install and field work", "Red Seal and exam prep", "Tools and gear", "Province and jurisdiction"]
};

