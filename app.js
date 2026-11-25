const nationalResources = {
  apprenticeship: "https://www.canada.ca/en/services/jobs/training/support-skilled-trades-apprentices.html",
  provinces: "https://www.canada.ca/en/services/jobs/training/support-skilled-trades-apprentices/provinces-territories.html",
  buildingTrades: "https://www.buildingtrades.ca/en/apprenticeship/",
  redSeal: "https://www.red-seal.ca/",
  jobBank: "https://www.jobbank.gc.ca/jobsearch/jobsearch?searchstring="
};

const trades = [
  {
    id: "sheet-metal",
    name: "Sheet Metal Worker",
    category: "Fabrication · HVAC · Construction",
    summary: "Shape, assemble, and install metal products and systems - from ventilation ductwork to roofing and architectural cladding.",
    work: "Sheet metal workers measure, lay out, cut, form, join, and install sheet metal. Work can happen in a fabrication shop or on a job site, including heating, ventilation, and air-conditioning systems, roofing, cladding, and custom metalwork.",
    union: "SMART Canada",
    unionUrl: "https://www.smart-union.org/canada/apprenticeships/",
    jobSearch: "sheet metal worker apprentice",
    tools: ["Tape measure and combination square", "Aviation snips and hand snips", "Hand seamer and seamers", "Hammer or mallet", "Work gloves and eye protection", "Site-specific PPE"],
    icon: "<svg viewBox=\"0 0 64 64\" fill=\"none\" aria-hidden=\"true\"><path d=\"M11 18h42v8H11zM17 26v25m30-25v25M11 51h42M23 18V9h18v9M24 33h16\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linecap=\"square\"/><path d=\"M7 56h50\" stroke=\"currentColor\" stroke-width=\"3\"/></svg>"
  },
  {
    id: "plumbing",
    name: "Plumbing",
    category: "Piping · Buildings · Service",
    summary: "Install, maintain, and repair the piping systems that bring water, drainage, and other services into buildings.",
    work: "Plumbers read plans, measure and prepare pipe, install fixtures and piping systems, and test for safe operation. Depending on the employer and specialization, work may be in new construction, renovation, industrial settings, or service calls.",
    union: "UA Canada",
    unionUrl: "https://www.uacanada.ca/",
    jobSearch: "plumber apprentice",
    tools: ["Pipe wrench and adjustable wrench", "Tongue-and-groove pliers", "Tubing cutter", "Tape measure and level", "Screwdrivers and hex keys", "Work gloves and eye protection"],
    icon: "<svg viewBox=\"0 0 64 64\" fill=\"none\" aria-hidden=\"true\"><path d=\"M8 16h31v13H25v14h17v13H17V29H8zM39 11h15v13H39\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linejoin=\"round\"/><circle cx=\"48\" cy=\"47\" r=\"8\" stroke=\"currentColor\" stroke-width=\"4\"/></svg>"
  },
  {
    id: "electrician",
    name: "Electrician",
    category: "Power · Controls · Construction",
    summary: "Install, test, maintain, and troubleshoot electrical wiring, equipment, and systems in buildings and other workplaces.",
    work: "Electricians interpret drawings, install wiring and equipment, test systems, and troubleshoot faults. The work calls for careful planning, code awareness, safe work practices, and attention to detail. Work settings vary by specialization and employer.",
    union: "IBEW apprenticeship information",
    unionUrl: "https://joinibew.ca/apprenticeships/",
    jobSearch: "electrician apprentice",
    tools: ["Insulated screwdrivers", "Wire strippers and side-cutting pliers", "Digital multimeter (training and task appropriate)", "Tape measure and level", "Fish tape or cable-pulling tools", "Electrical-rated PPE as required"],
    icon: "<svg viewBox=\"0 0 64 64\" fill=\"none\" aria-hidden=\"true\"><path d=\"M35 5 15 35h15l-2 24 22-33H35z\" fill=\"currentColor\"/></svg>"
  }
];

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
  const matches = trades.filter((trade) =>
    `${trade.name} ${trade.category} ${trade.summary}`.toLowerCase().includes(query)
  );
  resultCount.textContent = `${matches.length} ${matches.length === 1 ? "guide" : "guides"}`;

  if (!matches.length) {
    tradeGrid.innerHTML = '<div class="empty-state">No pilot guide matches that search. More trade guides are on the way.</div>';
    return;
  }

  tradeGrid.innerHTML = matches.map((trade) => `
    <a class="trade-card" href="#trade/${trade.id}" aria-label="Open the ${trade.name} guide">
      <span class="card-top"><span class="trade-art">${trade.icon}</span><span class="available-tag">Pilot guide</span></span>
      <h3>${trade.name}</h3>
      <p>${trade.summary}</p>
      <span class="card-link"><span>${trade.category}</span><span aria-hidden="true">→</span></span>
    </a>
  `).join("");
}

function renderDetail(trade) {
  const province = provinceSelect.value;
  const tools = trade.tools.map((tool) => `<li>${tool}</li>`).join("");
  const jobQuery = encodeURIComponent(`${trade.jobSearch} ${province}`);
  const resources = [
    externalLink(nationalResources.provinces, `Official apprenticeship authority for ${province}`, "Confirm local registration, training levels, hours, and certification requirements."),
    externalLink(trade.unionUrl, trade.union, "Explore union training and apprenticeship information. Availability and entry steps vary by local."),
    externalLink(nationalResources.buildingTrades, "Canada's Building Trades Unions", "Explore trades, apprenticeship pathways, and union / signatory-employer connections."),
    externalLink(nationalResources.apprenticeship, "Federal supports and funding", "Check current grants, loans, and supports. Eligibility and programs can change."),
    externalLink(`${nationalResources.jobBank}${jobQuery}`, `Search Job Bank in ${province}`, `Look for ${trade.jobSearch} opportunities in your area.`),
    externalLink(nationalResources.redSeal, "Red Seal Program", "Learn how Red Seal certification works and which trades are designated.")
  ].join("");

  detailContent.innerHTML = `
    <div class="detail-hero">
      <div>
        <p class="eyebrow">Pilot trade guide · ${trade.category}</p>
        <h1 id="detail-title" tabindex="-1">${trade.name}</h1>
        <p>${trade.summary}</p>
      </div>
      <div class="detail-art">${trade.icon}</div>
    </div>
    <div class="detail-region"><span>Selected location: <strong>${province}</strong>. Training length, entry requirements, grants, and certification can vary by province or territory.</span><a href="${nationalResources.provinces}" target="_blank" rel="noopener noreferrer">Verify local details ↗</a></div>
    <div class="facts-grid" aria-label="Apprenticeship overview">
      <div class="fact"><div class="fact-label">How training works</div><strong>Paid workplace learning plus technical instruction</strong></div>
      <div class="fact"><div class="fact-label">How long it takes</div><strong>Set by your province, trade program, and prior experience</strong></div>
      <div class="fact"><div class="fact-label">Certification</div><strong>Ask your local authority about completion and Red Seal options</strong></div>
    </div>
    <div class="detail-columns">
      <div>
        <section class="content-block"><h2>What the work is like</h2><p>${trade.work}</p></section>
        <section class="content-block"><h2>Starter tool list</h2><ul class="tools-list">${tools}</ul><p class="tool-note">This is a research checklist, not a required purchase list. Ask your employer or training provider what is required, supplied, or approved before buying anything.</p></section>
        <section class="content-block"><h2>Tools and affiliate links</h2><p>There are no affiliate links in this pilot. Tool recommendations are informational only; any future affiliate links will be clearly labelled.</p></section>
      </div>
      <div>
        <section class="content-block"><h2>Useful places to start</h2><div class="resource-list">${resources}</div><p class="fine-print">External resources are maintained by their respective organizations. Confirm current details directly with them.</p></section>
        <section class="content-block"><h2>Community and media</h2><p>Trade forums, photo guides, and video or audio resources are planned next. This first version has no accounts, user uploads, or discussion boards.</p></section>
      </div>
    </div>
  `;

  document.title = `ApprenticeHub - ${trade.name}`;
}

function showCurrentRoute() {
  const match = window.location.hash.match(/^#trade\/([a-z-]+)$/);
  const trade = match && trades.find((item) => item.id === match[1]);

  if (trade) {
    homeView.hidden = true;
    detailView.hidden = false;
    renderDetail(trade);
    window.scrollTo(0, 0);
    document.getElementById("detail-title").focus({ preventScroll: true });
  } else {
    homeView.hidden = false;
    detailView.hidden = true;
    document.title = "ApprenticeHub - Find your trade";
  }
}

searchInput.addEventListener("input", renderTrades);
provinceSelect.addEventListener("change", () => {
  locationNote.textContent = `Showing Canada-wide resources. For ${provinceSelect.value}, confirm local apprenticeship rules, training, and funding with the official authority.`;
  const match = window.location.hash.match(/^#trade\/([a-z-]+)$/);
  const trade = match && trades.find((item) => item.id === match[1]);
  if (trade) renderDetail(trade);
});
window.addEventListener("hashchange", showCurrentRoute);

renderTrades();
locationNote.textContent = "Showing Canada-wide resources. Choose a province or territory to confirm local rules.";
showCurrentRoute();
