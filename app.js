const nationalResources = {
  apprenticeship: "https://www.canada.ca/en/services/jobs/training/support-skilled-trades-apprentices.html",
  provinces: "https://www.canada.ca/en/services/jobs/training/support-skilled-trades-apprentices/provinces-territories.html",
  buildingTrades: "https://www.buildingtrades.ca/en/apprenticeship/",
  redSeal: "https://red-seal.ca/eng/welcome.shtml",
  loan: "https://www.canada.ca/en/services/jobs/training/support-skilled-trades-apprentices/loan.html",
  bonus: "https://www.canada.ca/en/employment-social-development/news/2026/10/government-of-canada-will-be-accepting-applications-for-5000-team-canada-strong-red-seal-completion-bonus-as-of-november-16.html",
  jobBank: "https://www.jobbank.gc.ca/jobsearch/jobsearch?searchstring="
};

const tradeInsights = {
  "sheet-metal": { skills: ["Strong math, geometry, and spatial thinking","Attention to detail and accurate layout","Comfort with heights and physical work","Teamwork on shop and site crews"], hazards: ["Sharp edges: wear cut-resistant gloves","Heights and lifting: fall protection and safe rigging","Hot work and welding: permits and fire watch","Noise and metal dust: hearing and eye protection"], settings: ["HVAC and ventilation contractors","Fabrication shops","Roofing and architectural cladding","Commercial and industrial construction"] },
  "plumbing": { skills: ["Problem solving and troubleshooting","Math for slopes, offsets, and flow","Comfort with tight spaces and physical work","Clear communication with customers and crews"], hazards: ["Hot work: heat shields, fire watch, and extinguishers","Trenches and confined spaces: follow permits and shoring rules","Sewer gas and contaminated water: PPE and hygiene","Lifting heavy pipe and fixtures: use proper technique"], settings: ["Residential new construction and renovation","Commercial and industrial mechanical contractors","Service and repair companies","Maintenance departments"] },
  "electrician": { skills: ["Strong math and logical thinking","Careful, methodical work habits","Reading drawings and code","Comfort with ladders and physical work"], hazards: ["Electrical shock: lockout, test, and prove dead","Arc flash: follow safe work procedures and wear rated PPE","Falls from ladders and lifts: fall protection","Overhead and live-work hazards: stay trained and supervised"], settings: ["Residential and commercial wiring","Industrial and maintenance electrical","Utility and infrastructure contractors","Renewable energy and EV charging"] }
};

const trades = [
  {
    id: "sheet-metal",
    name: "Sheet Metal Worker",
    category: "Fabrication · HVAC · Construction",
    summary: "Shape, assemble, and install metal products and systems - from ventilation ductwork to roofing and architectural cladding.",
    work: "Sheet metal workers measure, lay out, cut, form, join, and install sheet metal. Work can happen in a fabrication shop or on a job site, including heating, ventilation, and air-conditioning systems, roofing, cladding, and custom metalwork.",
    duration: "Usually 3–5 years",
    durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/4756/ca",
    profileUrl: "https://red-seal.ca/_conf/assets/custom/docms/sheetmetalwork/tp.pdf",
    union: "SMART Canada",
    unionUrl: "https://www.smart-union.org/canada/apprenticeships/",
    jobSearch: "sheet metal worker apprentice",
    tools: ["Tape measure and combination square", "Aviation snips", "Hand seamer", "Hammer or mallet", "Work gloves and eye protection", "Site-specific PPE"],
    icon: "<svg viewBox=\"0 0 64 64\" fill=\"none\" aria-hidden=\"true\"><path d=\"M11 18h42v8H11zM17 26v25m30-25v25M11 51h42M23 18V9h18v9M24 33h16\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"square\"/><path d=\"M7 56h50\" stroke=\"currentColor\" stroke-width=\"3\"/></svg>"
  },
  {
    id: "plumbing",
    name: "Plumbing",
    category: "Piping · Buildings · Service",
    summary: "Install, maintain, and repair the piping systems that bring water, drainage, and other services into buildings.",
    work: "Plumbers read plans, measure and prepare pipe, install fixtures and piping systems, and test for safe operation. Depending on the employer and specialization, work may be in new construction, renovation, industrial settings, or service calls.",
    duration: "Usually 4–5 years",
    durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/4745/ca",
    profileUrl: "https://red-seal.ca/_conf/assets/custom/docms/plumber/tp-current-eng.pdf",
    union: "UA Canada",
    unionUrl: "https://www.uacanada.ca/",
    jobSearch: "plumber apprentice",
    tools: ["Pipe wrench and adjustable wrench", "Tongue-and-groove pliers", "Tubing cutter", "Tape measure and level", "Screwdrivers and hex keys", "Work gloves and eye protection"],
    icon: "<svg viewBox=\"0 0 64 64\" fill=\"none\" aria-hidden=\"true\"><path d=\"M8 16h31v13H25v14h17v13H17V29H8zM39 11h15v13H39\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linejoin=\"round\"/><circle cx=\"48\" cy=\"47\" r=\"8\" stroke=\"currentColor\" stroke-width=\"4\"/></svg>"
  },
  {
    id: "electrician",
    name: "Construction Electrician",
    category: "Power · Controls · Construction",
    summary: "Install, test, maintain, and troubleshoot electrical wiring, equipment, and systems in buildings and other workplaces.",
    work: "Electricians interpret drawings, install wiring and equipment, test systems, and troubleshoot faults. The work calls for careful planning, code awareness, safe work practices, and attention to detail. Work settings vary by specialization and employer.",
    duration: "Usually 4–5 years",
    durationUrl: "https://www.jobbank.gc.ca/marketreport/requirements/20684/ca",
    profileUrl: "https://red-seal.ca/eng/trades/constelectric/overview.shtml",
    union: "IBEW apprenticeship information",
    unionUrl: "https://joinibew.ca/apprenticeships/",
    jobSearch: "electrician apprentice",
    tools: ["Insulated screwdrivers", "Wire strippers and side-cutting pliers", "Digital multimeter (training and task appropriate)", "Tape measure and level", "Fish tape or cable-pulling tools", "Electrical-rated PPE as required"],
    icon: "<svg viewBox=\"0 0 64 64\" fill=\"none\" aria-hidden=\"true\"><path d=\"M35 5 15 35h15l-2 24 22-33H35z\" fill=\"currentColor\"/></svg>"
  }
];

tradeCatalog.forEach((t) => {
  tradeInsights[t.id] = t.insight;
  trades.push({ ...t, profileUrl: t.profileUrl || nationalResources.redSeal, durationUrl: t.durationUrl || nationalResources.redSeal });
});

// Official Red Seal trade titles not yet covered by a guide.
const upcomingTrades = [
  "Agricultural Equipment Technician",
  "Appliance Service Technician",
  "Auto Body and Collision Technician",
  "Automotive Refinishing Technician",
  "Automotive Service Technician",
  "Baker",
  "Boilermaker",
  "Bricklayer",
  "Cabinetmaker",
  "Carpenter",
  "Concrete Finisher",
  "Construction Craft Worker",
  "Cook",
  "Drywall Finisher and Plasterer",
  "Floorcovering Installer",
  "Gasfitter - Class A",
  "Gasfitter - Class B",
  "Glazier",
  "Hairstylist",
  "Heavy Duty Equipment Technician",
  "Heavy Equipment Operator (Dozer)",
  "Heavy Equipment Operator (Excavator)",
  "Heavy Equipment Operator (Tractor-Loader-Backhoe)",
  "Industrial Electrician",
  "Industrial Mechanic (Millwright)",
  "Instrumentation and Control Technician",
  "Insulator (Heat and Frost)",
  "Ironworker (Generalist)",
  "Ironworker (Reinforcing)",
  "Ironworker (Structural/Ornamental)",
  "Landscape Horticulturist",
  "Lather (Interior Systems Mechanic)",
  "Machinist",
  "Metal Fabricator (Fitter)",
  "Mobile Crane Operator",
  "Motorcycle Technician",
  "Oil Heat System Technician",
  "Painter and Decorator",
  "Parts Technician",
  "Powerline Technician",
  "Recreation Vehicle Service Technician",
  "Refrigeration and Air Conditioning Mechanic",
  "Roofer",
  "Sprinkler Fitter",
  "Steamfitter/Pipefitter",
  "Tilesetter",
  "Tool and Die Maker",
  "Tower Crane Operator",
  "Transport Trailer Technician",
  "Truck and Transport Mechanic",
  "Welder"
];

const tradeGroups = [
  ["all", "All trades"],
  ["construction", "Construction and building"],
  ["metal", "Metal, welding and industrial"],
  ["mechanical", "Mechanics and equipment"],
  ["service", "Service and food"]
];
const tradeGroupOf = {
  "sheet-metal": "metal", plumbing: "construction", electrician: "construction",
  carpenter: "construction", cabinetmaker: "construction", "construction-craft-worker": "construction", "concrete-finisher": "construction",
  bricklayer: "construction", tilesetter: "construction", roofer: "construction", glazier: "construction",
  "drywall-finisher-plasterer": "construction", "lather-interior-systems": "construction", "painter-decorator": "construction",
  "floorcovering-installer": "construction", "insulator-heat-frost": "construction", "sprinkler-fitter": "construction",
  "gasfitter-a": "construction", "gasfitter-b": "construction", "oil-heat-technician": "construction", "refrigeration-mechanic": "construction",
  "steamfitter-pipefitter": "construction", "industrial-electrician": "metal", "instrumentation-technician": "metal", "powerline-technician": "construction",
  millwright: "metal", boilermaker: "metal", welder: "metal", "metal-fabricator": "metal", machinist: "metal", "tool-and-die-maker": "metal",
  "ironworker-generalist": "metal", "ironworker-reinforcing": "metal", "ironworker-structural": "metal",
  "automotive-service-technician": "mechanical", "auto-body-collision": "mechanical", "automotive-refinishing": "mechanical", "motorcycle-technician": "mechanical",
  "truck-transport-mechanic": "mechanical", "heavy-duty-technician": "mechanical", "agricultural-equipment-technician": "mechanical",
  "transport-trailer-technician": "mechanical", "rv-service-technician": "mechanical", "parts-technician": "mechanical", "appliance-service-technician": "mechanical",
  "heo-dozer": "mechanical", "heo-excavator": "mechanical", "heo-backhoe": "mechanical", "mobile-crane-operator": "mechanical", "tower-crane-operator": "mechanical",
  baker: "service", cook: "service", hairstylist: "service", "landscape-horticulturist": "service"
};
let activeGroup = "all";

const homeView = document.getElementById("home-view");
const detailView = document.getElementById("detail-view");
const detailContent = document.getElementById("trade-detail");
const tradeGrid = document.getElementById("trade-grid");
const searchInput = document.getElementById("trade-search");
const provinceSelect = document.getElementById("province-select");
const locationNote = document.getElementById("location-note");
const resultCount = document.getElementById("result-count");

function externalLink(url, label, description) {
  return `<a class="resource-link" href="${url}" target="_blank" rel="noopener noreferrer"><span><strong>${label}</strong><small>${description}</small></span><span aria-hidden="true">↗</span></a>`;
}

function renderTrades() {
  const query = searchInput.value.trim().toLowerCase();
  const matches = trades.filter((trade) => (activeGroup === "all" || tradeGroupOf[trade.id] === activeGroup)).filter((trade) =>
    `${trade.name} ${trade.category} ${trade.summary} ${trade.id === "plumbing" ? "plumber" : ""} ${trade.id === "electrician" ? "construction electrician" : ""} ${trade.title || ""} ${trade.aliases || ""}`.toLowerCase().includes(query)
  );
  const upcoming = activeGroup !== "all" ? [] : upcomingTrades.filter((name) => !tradeCatalog.some((t) => t.title === name) && name.toLowerCase().includes(query));
  const count = matches.length + upcoming.length;
  resultCount.textContent = `${count} ${count === 1 ? "trade" : "trades"}`;

  if (!count) {
    tradeGrid.innerHTML = '<div class="empty-state">No trade matches that search. Try another name or visit the Red Seal trade list linked above.</div>';
    return;
  }

  const pilotCards = matches.map((trade) => `
    <a class="trade-card" href="#trade/${trade.id}" aria-label="Open the ${trade.name} guide">
      <span class="card-top"><span class="trade-art">${trade.icon}</span><span class="available-tag">Full guide</span></span>
      <h3>${trade.name}</h3>
      <p>${trade.summary}</p>
      <span class="card-link"><span>${trade.category}</span><span aria-hidden="true">→</span></span>
    </a>
  `).join("");
  const upcomingCards = upcoming.map((name) => `
    <article class="trade-card upcoming-card">
      <div class="card-top"><span class="trade-art" aria-hidden="true">A</span><span class="coming-tag">Guide coming soon</span></div>
      <h3>${name}</h3>
      <p>Our guide is in the works. Find official trade information through the Red Seal Program.</p>
      <a class="card-link" href="${nationalResources.redSeal}" target="_blank" rel="noopener noreferrer" aria-label="Explore Red Seal information for ${name}"><span>Red Seal trade list</span><span aria-hidden="true">↗</span></a>
    </article>
  `).join("");
  tradeGrid.innerHTML = pilotCards + upcomingCards;
}

const tradeRoute = /^#trade\/([a-z-]+)(?:\/([a-z]+))?$/;

function parseRoute() {
  const match = window.location.hash.match(tradeRoute);
  const trade = match && trades.find((item) => item.id === match[1]);
  const pack = trade && tradePacks[trade.id];
  const section = pack && pack.sections.some((s) => s.id === match[2]) ? match[2] : "overview";
  return { trade, section };
}

function renderDetail(trade, section = "overview") {
  const province = provinceSelect.value;
  const tools = trade.tools.map((tool) => `<li>${tool}</li>`).join("");
  const jobQuery = encodeURIComponent(`${trade.jobSearch} ${province}`);
  const resources = [
    externalLink(nationalResources.provinces, "Find your provincial or territorial authority", `Select ${province} on the government directory to confirm local registration, training and certification.`),
    ...(trade.unionUrl ? [externalLink(trade.unionUrl, trade.union, "Explore union training and apprenticeship information. Availability and entry steps vary by local.")] : []),
    externalLink(nationalResources.buildingTrades, "Canada's Building Trades Unions", "Explore trades, apprenticeship pathways, and union / signatory-employer connections."),
    externalLink(trade.profileUrl, "Red Seal trade profile", "Explore the official occupational standard and tasks for this trade."),
    externalLink(trade.durationUrl, "Job Bank: training and requirements", "Review typical apprenticeship length and certification requirements."),
    externalLink(`${nationalResources.jobBank}${jobQuery}`, `Search Job Bank in ${province}`, `Look for ${trade.jobSearch} opportunities in your area.`),
    externalLink(nationalResources.redSeal, "Red Seal Program", "Learn how Red Seal certification works and which trades are designated.")
  ].join("");

  const pack = useTrade(trade.id);
  const isSheetMetal = Boolean(pack);
  const base = `#trade/${trade.id}`;
  const subNav = isSheetMetal ? `<nav class="sub-nav" aria-label="${trade.name} sections">${pack.sections.map((s) =>
    `<a href="${base}${s.id === "overview" ? "" : `/${s.id}`}"${s.id === section ? ' aria-current="page"' : ""}>${s.label}</a>`).join("")}</nav>` : "";
  const tiles = isSheetMetal ? `<div class="tile-grid" aria-label="${trade.name} toolkit">${[
    ["roadmap", "Roadmap", "Year-by-year checklist to certification"],
    ["tools", "Buying tools", "Pro-grade tools and school supplies"],
    ["practice", "Practice tests", `${Object.values(pack.practiceBank).flat().length} questions and a mock Red Seal-style exam`],
    ["flashcards", "Flashcards", "Glossary terms and formulas"],
    ["reference", "Reference", "Formulas, tables, and glossary"],
    ["learn", "Videos & audio", "Watch and listen from beginner to journeyperson"],
    ["jobs", "Jobs", "Openings, unions, and applying tips"],
    ["forum", "Forum and buy & sell", "Ask questions and trade gear locally"]
  ].map(([id, title, text]) => `<a class="tile" href="${base}/${id}"><strong>${title}</strong><span>${text}</span><span class="tile-arrow" aria-hidden="true">→</span></a>`).join("")}</div>` : "";
  const startHere = isSheetMetal ? `<section class="content-block start-here"><h2>Start here</h2>
        <ol class="steps-list"><li><a href="${base}/roadmap">Read the roadmap</a> to see what each year of the apprenticeship looks like.</li><li><a href="${base}/tools">Check the tool guide</a> before you buy anything, and ask your employer what they supply.</li><li><a href="${base}/practice">Try a Year 1 practice test</a> to see where you stand, then use the <a href="${base}/flashcards">flashcards</a> to review.</li><li><a href="${base}/jobs">Look at jobs and unions</a> in ${province}.</li></ol></section>` : "";
  const insight = tradeInsights[trade.id];
  const list = (items) => `<ul class="tools-list">${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
  const insightBlocks = insight ? `<section class="content-block"><h2>Skills that help</h2>${list(insight.skills)}</section>
        <section class="content-block"><h2>Where you could work</h2>${list(insight.settings)}</section>
        <section class="content-block"><h2>Safety first</h2>${list(insight.hazards)}<p class="fine-print">Safety rules vary by province and employer. Follow your training and your journeyperson's direction.</p></section>` : "";
  const toolsAndMedia = isSheetMetal
    ? `<section class="content-block"><h2>Tools and affiliate links</h2><p>See the <a href="${base}/tools">Buying tools</a> guide. Some tool links may be affiliate links; they are always clearly disclosed there.</p></section>`
    : `<section class="content-block"><h2>Tools and affiliate links</h2><p>There are no affiliate links in this pilot. Tool recommendations are informational only; any future affiliate links will be clearly labelled.</p></section>`;
  const communityBlock = isSheetMetal
    ? `<section class="content-block"><h2>Community and media</h2><p>Join the <a href="${base}/forum">forum</a>, browse <a href="${base}/learn">videos and audio</a>, or take a <a href="${base}/practice">practice test</a>.</p></section>`
    : `<section class="content-block"><h2>Community and media</h2><p>Trade forums, photo guides, and video or audio resources are planned next. This first version has no accounts, user uploads, or discussion boards.</p></section>`;

  detailContent.innerHTML = `
    <div class="detail-hero">
      <div>
        <p class="eyebrow">Trade guide · ${trade.category}</p>
        <h1 id="detail-title" tabindex="-1">${trade.name}</h1>
        <p>${trade.summary}</p>
      </div>
      <div class="detail-art">${trade.icon}</div>
    </div>
    <div class="detail-region"><span>Selected location: <strong>${province}</strong>. Training length, entry requirements, grants, and certification can vary by province or territory.</span><a href="${nationalResources.provinces}" target="_blank" rel="noopener noreferrer">Find your local authority ↗</a></div>
    ${subNav}
    ${section !== "overview" ? `<div class="section-body">${renderSheetMetalSection(section)}</div>` : `${tiles}${startHere}<div class="facts-grid" aria-label="Apprenticeship overview">
      <div class="fact"><div class="fact-label">How training works</div><strong>Paid workplace learning plus technical instruction</strong></div>
      <div class="fact"><div class="fact-label">How long it takes</div><strong>${trade.duration}</strong><small>Typical estimate from Job Bank; local requirements vary.</small></div>
      <div class="fact"><div class="fact-label">Certification</div><strong>Ask your local authority about completion and Red Seal options</strong></div>
    </div>
    <div class="detail-columns">
      <div>
        <section class="content-block"><h2>What the work is like</h2><p>${trade.work}</p></section>
        ${insightBlocks}<section class="content-block"><h2>Getting started</h2><ol class="steps-list"><li>Check entry requirements with your province or territory.</li><li>Look for an employer or union apprenticeship opportunity and ask about sponsorship.</li><li>Register your apprenticeship as required locally; combine supervised work with technical training.</li><li>Complete local requirements and ask about the Red Seal exam and endorsement.</li></ol></section>
        <section class="content-block"><h2>Starter tool list</h2><ul class="tools-list">${tools}</ul><p class="tool-note">This is a research checklist, not a required purchase list. Ask your employer or training provider what is required, supplied, or approved before buying anything.</p></section>
        ${toolsAndMedia}
      </div>
      <div>
        <section class="content-block"><h2>Funding and support</h2><div class="resource-list">
          ${externalLink(nationalResources.loan, "Canada Apprentice Loan", "Eligible Red Seal apprentices may borrow up to $4,000 per technical training period. This is a loan, not a grant.")}
          ${externalLink(nationalResources.bonus, "$5,000 Red Seal Completion Bonus", "For eligible people certified in a designated Red Seal trade on or after April 1, 2025. Deadlines apply.")}
          ${externalLink(nationalResources.apprenticeship, "Federal supports for apprentices", "Find current grants, loans, and other programs; check eligibility before applying.")}
          ${externalLink(nationalResources.provinces, "Provincial and territorial programs", "Find your local authority and ask about regional funding.")}
        </div><p class="fine-print">Programs and eligibility can change. Check the official program pages for details and deadlines.</p></section>
        <section class="content-block"><h2>Useful places to start</h2><div class="resource-list">${resources}</div><p class="fine-print">External resources are maintained by their respective organizations. Confirm current details directly with them.</p></section>
        ${communityBlock}
      </div>
    </div>`}
  `;
  if (section !== "overview") bindSheetMetalSection(section, detailContent);

  document.title = `ApprenticeHub - ${trade.name}`;
}

function showCurrentRoute() {
  const quizView = document.getElementById("quiz-view");
  if (window.location.hash === "#quiz") {
    homeView.hidden = true;
    detailView.hidden = true;
    quizView.hidden = false;
    renderQuiz();
    document.title = "ApprenticeHub - Find your trade quiz";
    window.scrollTo(0, 0);
    document.getElementById("quiz-title").focus({ preventScroll: true });
    return;
  }
  quizView.hidden = true;
  const { trade, section } = parseRoute();

  if (trade) {
    homeView.hidden = true;
    detailView.hidden = false;
    renderDetail(trade, section);
    window.scrollTo(0, 0);
    document.getElementById("detail-title").focus({ preventScroll: true });
    const activeTab = document.querySelector(".sub-nav [aria-current='page']");
    if (activeTab) activeTab.scrollIntoView({ block: "nearest", inline: "center" });
  } else {
    homeView.hidden = false;
    detailView.hidden = true;
    document.title = "ApprenticeHub - Find your trade";
  }
}

const groupBar = document.getElementById("trade-groups");
groupBar.innerHTML = tradeGroups.map(([id, label]) => `<button type="button" data-group="${id}"${id === "all" ? ' aria-pressed="true"' : ' aria-pressed="false"'}>${label}</button>`).join("");
groupBar.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-group]");
  if (!button) return;
  activeGroup = button.dataset.group;
  groupBar.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
  renderTrades();
});
searchInput.addEventListener("input", renderTrades);
provinceSelect.addEventListener("change", () => {
  locationNote.textContent = `Showing Canada-wide resources. For ${provinceSelect.value}, confirm local apprenticeship rules, training, and funding with the official authority.`;
  const { trade, section } = parseRoute();
  if (trade) renderDetail(trade, section);
});
const provincialRules = {
  "Alberta": { authority: "Apprenticeship and Industry Training (Alberta)", safety: "Alberta Occupational Health and Safety", comp: ["WCB Alberta", "https://www.wcb.ab.ca"], notes: [] },
  "British Columbia": { authority: "SkilledTradesBC", url: "https://skilledtradesbc.ca", safety: "WorkSafeBC", safetyUrl: "https://www.worksafebc.com", notes: ["Register through the SkilledTradesBC Portal. Your employer sponsor also needs an account to confirm your registration.", "Your SkilledTradesBC ID stays with you for the whole apprenticeship. You need it for school and for EI."] },
  "Manitoba": { authority: "Apprenticeship Manitoba", safety: "Manitoba Workplace Safety and Health (SAFE Work Manitoba)", comp: ["Workers Compensation Board of Manitoba", null], notes: [] },
  "New Brunswick": { authority: "Skilled Trades NB (Apprenticeship and Occupational Certification)", safety: "WorkSafeNB", notes: [] },
  "Newfoundland and Labrador": { authority: "Apprenticeship and Trades Certification", safety: "WorkplaceNL", notes: [] },
  "Northwest Territories": { authority: "Apprenticeship, Trade and Occupation Certification (ATOC) Program", safety: "WSCC (shared with Nunavut)", notes: [] },
  "Nova Scotia": { authority: "Nova Scotia Apprenticeship Agency", safety: "Nova Scotia occupational health and safety program and provincial workers' compensation board", notes: [] },
  "Nunavut": { authority: "Apprenticeship, Trade and Occupations Certification", safety: "WSCC (shared with the Northwest Territories)", notes: [] },
  "Ontario": { authority: "Skilled Trades Ontario", url: "https://www.skilledtradesontario.ca", safety: "Ministry of Labour (Occupational Health and Safety Act)", comp: ["WSIB", "https://www.wsib.ca"], notes: ["Compulsory trades need a Certificate of Qualification, a provisional certificate, or a registered training agreement before you can work in them.", "Employers can check the Skilled Trades Ontario Public Register to confirm a worker is authorized in a compulsory trade."] },
  "Prince Edward Island": { authority: "Provincial apprenticeship office (see the directory link below)", safety: "WorkSafePEI", notes: [] },
  "Quebec": { authority: "Commission de la construction du Québec (CCQ) for construction trades", url: "https://www.ccq.org", safety: "CNESST (health and safety and workers' compensation)", safetyUrl: "https://www.cnesst.gouv.qc.ca", notes: ["Construction apprentices need an apprentice competency certificate (CCA) from the CCQ.", "Complete the 'Santé et sécurité générale sur les chantiers de construction' course before you apply for a CCA."] },
  "Saskatchewan": { authority: "Saskatchewan Apprenticeship and Trade Certification Commission (SATCC)", safety: "Saskatchewan Occupational Health and Safety", comp: ["Saskatchewan Workers' Compensation Board", null], notes: [] },
  "Yukon": { authority: "Provincial apprenticeship office (see the directory link below)", safety: "Yukon Workers' Compensation Health and Safety Board", notes: [] }
};

const rulesToggle = document.getElementById("rules-toggle");
const rulesPanel = document.getElementById("rules-panel");

function linkOrText(label, url) {
  return url ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>` : label;
}

function renderRules() {
  const province = provinceSelect.value;
  const rules = provincialRules[province];
  const authorityLink = linkOrText(rules.authority, rules.url || nationalResources.provinces);
  const safetyLink = linkOrText(rules.safety, rules.safetyUrl);
  const compLink = rules.comp ? `<li><strong>Workers' compensation:</strong> ${linkOrText(rules.comp[0], rules.comp[1])}</li>` : "";
  const notes = rules.notes.length ? `<ul class="rules-notes">${rules.notes.map((note) => `<li>${note}</li>`).join("")}</ul>` : "";
  rulesPanel.innerHTML = `
    <div class="rules-head"><p class="eyebrow">Rules for ${province}</p><button type="button" class="rules-close" id="rules-close" aria-label="Close rules">Close</button></div>
    <ul class="rules-list">
      <li><strong>Apprenticeship authority:</strong> ${authorityLink}</li>
      <li><strong>Workplace safety:</strong> ${safetyLink}</li>
      ${compLink}
    </ul>
    ${notes}
    <p class="fine-print">Rules change. Confirm current requirements with the authorities above. For a full list of provincial and territorial authorities, see <a href="${nationalResources.provinces}" target="_blank" rel="noopener noreferrer">the federal directory ↗</a>.</p>`;
  document.getElementById("rules-close").addEventListener("click", closeRules);
}

function closeRules() {
  rulesPanel.hidden = true;
  rulesToggle.setAttribute("aria-expanded", "false");
}

rulesToggle.addEventListener("click", () => {
  const opening = rulesPanel.hidden;
  if (opening) {
    renderRules();
    rulesPanel.hidden = false;
    rulesToggle.setAttribute("aria-expanded", "true");
    rulesPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } else {
    closeRules();
  }
});
provinceSelect.addEventListener("change", () => {
  if (!rulesPanel.hidden) renderRules();
});

window.addEventListener("hashchange", showCurrentRoute);

const headerEl = document.querySelector(".site-header");
const setHeaderHeight = () => document.documentElement.style.setProperty("--header-h", `${headerEl.offsetHeight}px`);
setHeaderHeight();
window.addEventListener("resize", setHeaderHeight);

trades.sort((a, b) => a.name.localeCompare(b.name));
renderTrades();
locationNote.textContent = `Selected location: ${provinceSelect.value}. Confirm local apprenticeship rules, training, and funding with the official authority.`;
showCurrentRoute();
