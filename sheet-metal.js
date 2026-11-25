// Sheet Metal Worker content: tools, learning media, forum, and practice tests.
// Practice questions are original study aids, not official Red Seal exam questions.

const sheetMetalSections = [
  { id: "overview", label: "Overview" },
  { id: "tools", label: "Buying tools" },
  { id: "learn", label: "Videos & audio" },
  { id: "forum", label: "Forum" },
  { id: "practice", label: "Practice tests" }
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
  try { return JSON.parse(localStorage.getItem("smw-scores") || "{}"); } catch { return {}; }
}

function saveScore(key, percent) {
  const scores = readScores();
  scores[key] = Math.max(scores[key] || 0, percent);
  try { localStorage.setItem("smw-scores", JSON.stringify(scores)); } catch { /* storage unavailable */ }
}

function sheetMetalLinkCard(url, label, description) {
  return `<a class="resource-link" href="${url}" target="_blank" rel="noopener noreferrer"><span><strong>${label}</strong><small>${description}</small></span><span aria-hidden="true">↗</span></a>`;
}

function renderSheetMetalTools() {
  const groups = toolGroups.map((group) => `
    <section class="content-block">
      <h2>${group.title}</h2>
      <p class="fine-print">${group.note}</p>
      <div class="resource-list">${group.items.map((item) =>
        sheetMetalLinkCard(toolLink(item), item.name, item.why)
      ).join("")}</div>
    </section>`).join("");
  return `
    <section class="content-block"><h2>Buying tools</h2>
      <p>A practical shopping guide for sheet metal apprentices. Ask your employer, union local, and training provider what is supplied or required before you buy. ${AMAZON_TAG ? "<strong>As an Amazon Associate I earn from qualifying purchases.</strong> Tool links open Amazon.ca searches and are affiliate links: if you buy, ApprenticeHub may earn a small commission at no extra cost to you. Recommendations are chosen for quality, not commission." : "Tool links open Amazon.ca searches. They are not affiliate links."} Compare prices at other Canadian retailers too.</p>
    </section>${groups}`;
}

function renderSheetMetalLearn() {
  return mediaGroups.map((group) => `
    <section class="content-block"><h2>${group.title}</h2>
      ${group.note ? `<p class="fine-print">${group.note}</p>` : ""}
      <div class="resource-list">${group.items.map((i) => sheetMetalLinkCard(i.url, i.name, i.desc)).join("")}</div>
    </section>`).join("");
}

function renderSheetMetalPractice() {
  const scores = readScores();
  const best = (key) => (scores[key] === undefined ? "" : ` · Best ${scores[key]}%`);
  const years = [1, 2, 3, 4].map((y) => `
    <button class="quiz-start" type="button" data-quiz="year-${y}"><strong>Year ${y} test</strong><small>${practiceBank[y].length} questions${best(`year-${y}`)}</small></button>`).join("");
  const total = Object.values(practiceBank).reduce((n, list) => n + list.length, 0);
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

function renderSheetMetalSection(section) {
  if (section === "tools") return renderSheetMetalTools();
  if (section === "learn") return renderSheetMetalLearn();
  if (section === "forum") return renderSheetMetalForum();
  if (section === "practice") return renderSheetMetalPractice();
  return "";
}

function startQuiz(key, area) {
  const questions = key === "mock"
    ? shuffle(Object.values(practiceBank).flat())
    : shuffle(practiceBank[Number(key.split("-")[1])]);
  const title = key === "mock" ? "Mock Red Seal-style exam" : `Year ${key.split("-")[1]} test`;
  const picks = new Array(questions.length).fill(null);

  const form = questions.map((item, i) => `
    <fieldset class="quiz-question"><legend>${i + 1}. ${escapeHtml(item.q)}</legend>
      ${item.options.map((opt, o) => `<label><input type="radio" name="q${i}" value="${o}"> <span>${escapeHtml(opt)}</span></label>`).join("")}
      <p class="quiz-explain" hidden></p>
    </fieldset>`).join("");

  area.innerHTML = `
    <section class="content-block"><h2>${title}</h2>
      <form id="quiz-form">${form}<button class="quiz-submit" type="submit">Submit answers</button></form>
      <div id="quiz-result" role="status"></div>
    </section>`;
  area.scrollIntoView({ behavior: "smooth", block: "start" });

  area.querySelector("#quiz-form").addEventListener("submit", (event) => {
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
    saveScore(key, percent);
    const verdict = key === "mock" ? (percent >= 70 ? " Above the 70% target." : " Below the 70% target. Review and try again.") : "";
    const result = area.querySelector("#quiz-result");
    result.textContent = `You scored ${correct} of ${questions.length} (${percent}%).${verdict}`;
    result.classList.add("quiz-score");
    event.target.querySelector(".quiz-submit").hidden = true;
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

function bindSheetMetalSection(section, root) {
  if (section === "forum") {
    const forumRoot = root.querySelector("#forum-root");
    if (forumRoot) initForum(forumRoot);
    return;
  }
  if (section !== "practice") return;
  const area = root.querySelector("#quiz-area");
  root.querySelectorAll("[data-quiz]").forEach((button) => {
    button.addEventListener("click", () => startQuiz(button.dataset.quiz, area));
  });
}
