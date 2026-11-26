// Shared helpers that let each trade be described as plain data (see trades/*.js).
// Practice questions in every trade are original study aids, not official Red Seal exam questions.

const defaultTradeIcon = "<svg viewBox=\"0 0 64 64\" fill=\"none\" aria-hidden=\"true\"><path d=\"M14 50 38 26M44 10a10 10 0 0 0-9 14L22 37l5 5 13-13a10 10 0 0 0 14-9l-7 5-5-5z\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></svg>";

const toolIcon = (body) => `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><g stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${body}</g></svg>`;

// Each trade's most-used tool, drawn in the same 64x64 style as the default icon.
const tradeIcons = {
  "agricultural-equipment-technician": toolIcon('<circle cx="20" cy="42" r="10"/><circle cx="48" cy="48" r="5"/><path d="M6 32h26V20H6zM32 22h10l6 10v4H32M14 20v-8h6v8"/>'),
  "appliance-service-technician": toolIcon('<rect x="22" y="6" width="20" height="20" rx="8"/><path d="M32 26v28M30 54h4"/>'),
  "auto-body-collision": toolIcon('<path d="M20 8h24M32 8v44"/><rect x="24" y="24" width="16" height="10" rx="3"/><path d="M26 54h12"/>'),
  "automotive-refinishing": toolIcon('<path d="M8 26h34v10H8zM42 26h10M20 26v-10h14v10"/><path d="M28 36l-3 16h10l-2-16"/>'),
  "automotive-service-technician": toolIcon('<circle cx="22" cy="32" r="12"/><circle cx="22" cy="32" r="4"/><path d="M34 32h20M54 26v12"/>'),
  "baker": toolIcon('<rect x="18" y="24" width="28" height="16" rx="3"/><path d="M18 32H6M46 32h12"/>'),
  "boilermaker": toolIcon('<path d="M10 46V26a22 22 0 0 1 44 0v20z"/><rect x="22" y="24" width="20" height="10" rx="2"/><path d="M6 46h52"/>'),
  "bricklayer": toolIcon('<path d="M8 46 44 22v24z"/><rect x="48" y="28" width="8" height="12" rx="3"/>'),
  "cabinetmaker": toolIcon('<path d="M6 42h40v8H6z"/><path d="M46 42V32h10v10M14 36h8"/>'),
  "carpenter": toolIcon('<path d="M12 14h38v8H12zM12 14 4 20l8 2"/><path d="M32 22v32"/>'),
  "concrete-finisher": toolIcon('<rect x="8" y="42" width="48" height="8" rx="2"/><path d="M32 42 54 8"/>'),
  "construction-craft-worker": toolIcon('<path d="M22 30h20l-2 14c-1 6-15 6-16 0z"/><path d="M32 30V8M26 8h12"/>'),
  "cook": toolIcon('<path d="M10 38 42 12c4-2 10 0 8 6L28 48z"/><path d="M10 38l-4 8 6 6 8-4"/>'),
  "drywall-finisher-plasterer": toolIcon('<path d="M6 44h52v6H6z"/><path d="M22 44v-8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v8"/>'),
  "floorcovering-installer": toolIcon('<rect x="8" y="26" width="42" height="12" rx="3"/><path d="M50 26l8 6-8 6"/>'),
  "gasfitter-a": toolIcon('<path d="M14 10v34a10 10 0 0 0 20 0V10"/><path d="M34 22h12M34 36h12"/>'),
  "gasfitter-b": toolIcon('<rect x="10" y="12" width="26" height="36" rx="3"/><rect x="16" y="18" width="14" height="8"/><path d="M36 42h10a4 4 0 0 0 4-4V24a4 4 0 0 0-4-4h-6"/>'),
  "glazier": toolIcon('<path d="M12 52 46 18"/><circle cx="50" cy="14" r="6"/><path d="M14 46l6 6"/>'),
  "hairstylist": toolIcon('<circle cx="18" cy="46" r="8"/><circle cx="46" cy="46" r="8"/><path d="M24 40 50 10M40 40 14 10"/>'),
  "heavy-duty-technician": toolIcon('<path d="M6 32h36"/><rect x="42" y="22" width="16" height="20" rx="4"/><path d="M46 32h8"/>'),
  "heo-backhoe": toolIcon('<path d="M10 22h44l-6 30H16z"/><path d="M16 52l-2 6M26 52v6M36 52v6M46 52l2 6"/>'),
  "heo-dozer": toolIcon('<path d="M8 24h48l-6 22H14z"/><path d="M18 24l-6-12M46 24l6-12"/>'),
  "heo-excavator": toolIcon('<rect x="4" y="50" width="20" height="8" rx="3"/><path d="M14 50 28 34 44 14"/><path d="M40 10h14l-4 12H44z"/>'),
  "industrial-electrician": toolIcon('<rect x="16" y="6" width="32" height="52" rx="4"/><path d="M24 16h16"/><circle cx="32" cy="36" r="6"/>'),
  "instrumentation-technician": toolIcon('<circle cx="32" cy="32" r="22"/><path d="M32 32 42 22M32 10v4M10 32h4M54 32h-4M32 54v4"/>'),
  "insulator-heat-frost": toolIcon('<rect x="8" y="26" width="40" height="12" rx="3"/><path d="M48 32h8M20 38v8a3 3 0 0 0 3 3h6"/>'),
  "ironworker-generalist": toolIcon('<path d="M10 40a22 22 0 0 1 44 0z"/><path d="M6 40h52M32 18v-6"/>'),
  "ironworker-reinforcing": toolIcon('<path d="M10 22h44M10 42h44"/><path d="M24 22 40 42M40 22 24 42"/>'),
  "ironworker-structural": toolIcon('<path d="M10 54 32 32"/><circle cx="44" cy="20" r="8"/><circle cx="44" cy="20" r="3"/>'),
  "landscape-horticulturist": toolIcon('<path d="M14 10 40 40M50 10 24 40"/><path d="M28 40v14M36 40v14"/>'),
  "lather-interior-systems": toolIcon('<path d="M14 54 36 26"/><path d="M30 14h18l6 8-6 6H30z"/>'),
  "machinist": toolIcon('<rect x="6" y="28" width="52" height="8" rx="2"/><path d="M14 20v24M26 20v24M46 20v24"/>'),
  "metal-fabricator": toolIcon('<ellipse cx="18" cy="44" rx="12" ry="4"/><path d="M28 40 42 24h10l6 6-4 4"/>'),
  "millwright": toolIcon('<path d="M10 50 44 16"/><path d="M44 16l10-4"/><path d="M10 50l-4 4 2 4 8-2"/>'),
  "mobile-crane-operator": toolIcon('<path d="M10 10h44M32 10v30"/><path d="M24 40a8 8 0 0 0 16 0"/><path d="M32 40v8"/>'),
  "motorcycle-technician": toolIcon('<circle cx="16" cy="40" r="10"/><circle cx="48" cy="40" r="10"/><path d="M16 40l12-16h14l6 16M28 24l-4-8h-6"/>'),
  "oil-heat-technician": toolIcon('<rect x="12" y="28" width="28" height="24" rx="4"/><path d="M40 40h8l10-14M18 28V20h16v8"/>'),
  "painter-decorator": toolIcon('<rect x="8" y="12" width="38" height="14" rx="4"/><path d="M22 26v8h20v-8M32 34v20"/>'),
  "parts-technician": toolIcon('<circle cx="32" cy="32" r="20" stroke-dasharray="6 6"/><circle cx="32" cy="32" r="12"/><circle cx="32" cy="32" r="4"/>'),
  "powerline-technician": toolIcon('<path d="M10 54 46 18"/><path d="M46 18l6-8h6"/>'),
  "refrigeration-mechanic": toolIcon('<circle cx="22" cy="20" r="9"/><circle cx="42" cy="20" r="9"/><rect x="12" y="32" width="40" height="10" rx="3"/><path d="M22 42v12h-6M42 42v12h6"/>'),
  "roofer": toolIcon('<path d="M10 22h30v8H10z"/><path d="M40 22l14-10 2 6-10 8"/><path d="M24 30v24"/>'),
  "rv-service-technician": toolIcon('<path d="M6 46V24h36l12 12v10z"/><circle cx="18" cy="48" r="5"/><circle cx="46" cy="48" r="5"/>'),
  "sprinkler-fitter": toolIcon('<path d="M32 8v16"/><path d="M22 24h20"/><path d="M14 46l-4 8M24 50l-2 6M32 50v6M40 50l2 6M50 46l4 8"/>'),
  "steamfitter-pipefitter": toolIcon('<path d="M10 54 32 32"/><path d="M40 10a10 10 0 1 0 14 14l-6-2-6 6-6-6 6-6z"/>'),
  "tilesetter": toolIcon('<path d="M10 26h44v8H10z"/><path d="M16 34v8M24 34v8M32 34v8M40 34v8M48 34v8"/><path d="M28 26V12h8v14"/>'),
  "tool-and-die-maker": toolIcon('<path d="M26 6h12v22H26z"/><path d="M26 28 32 52 38 28"/>'),
  "tower-crane-operator": toolIcon('<path d="M32 6v50M16 56h32"/><path d="M8 16h48M46 16v10M8 16l24 10"/>'),
  "transport-trailer-technician": toolIcon('<rect x="6" y="20" width="44" height="22" rx="2"/><path d="M50 30h8l-2 12h-6"/><circle cx="18" cy="48" r="5"/><circle cx="40" cy="48" r="5"/>'),
  "truck-transport-mechanic": toolIcon('<path d="M6 40V20h30v20M36 28h12l8 8v4H36"/><circle cx="16" cy="44" r="5"/><circle cx="46" cy="44" r="5"/>'),
  "welder": toolIcon('<path d="M10 52 34 28"/><path d="M34 28h18l6-6"/><path d="M52 22c-4-6 4-10 0-14"/>')
};

// referenceBlocks: [{ title, intro?, list?: [html], table?: { head: [], rows: [[]] }, note? }]
function tradeReference(pack, referenceBlocks) {
  const blocks = referenceBlocks.map((b) => `
    <section class="content-block"><h2>${b.title}</h2>
      ${b.intro ? `<p>${b.intro}</p>` : ""}
      ${b.list ? `<ul class="check-list plain">${b.list.map((i) => `<li>${i}</li>`).join("")}</ul>` : ""}
      ${b.table ? `<table class="ref-table"><thead><tr>${b.table.head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${b.table.rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>` : ""}
      ${b.note ? `<p class="fine-print">${b.note}</p>` : ""}
    </section>`).join("");
  return `
    <section class="content-block"><h2>Reference sheet</h2><p>Quick study aids. Always confirm values against your drawings, specifications, manufacturer data, and local codes.</p></section>
    ${blocks}
    <section class="content-block"><h2>Glossary</h2>
      <dl class="glossary">${pack.glossary.map(([t, d]) => `<dt>${t}</dt><dd>${d}</dd>`).join("")}</dl></section>`;
}

// Registers a trade guide from one data object. Required keys are documented in trades/README-FORMAT.txt.
function watchFirstBlock(video, name) {
  return `<section class="content-block"><h2>Watch first</h2>
    <p class="fine-print">See the real job before you read on.</p>
    <div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/${video.id}" title="Watch first: ${name}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
  </section>`;
}

function registerTrade(def) {
  const jobLinks = (province, q) => [
    [`Job Bank: ${def.jobSearch}`, `Search openings in ${province}.`, `${nationalResources.jobBank}${q(def.jobSearch + " " + province)}`],
    [`Job Bank: ${def.journeySearch}`, `Search journeyperson openings in ${province}.`, `${nationalResources.jobBank}${q(def.journeySearch + " " + province)}`],
    [`Indeed Canada: ${def.jobSearch}`, "Search a large job board.", `https://ca.indeed.com/jobs?q=${q(def.jobSearch)}&l=${q(province)}`],
    ...(def.unionUrl ? [[def.union, "Union or association training and how to apply.", def.unionUrl]] : []),
    ["Canada's Building Trades Unions", "Find unions and apprenticeship paths.", nationalResources.buildingTrades],
    ["Find your local apprenticeship authority", "Confirm registration and find approved employers.", nationalResources.provinces]
  ];
  const pack = {
    id: def.id, store: def.store, name: def.name, short: def.short,
    sections: plumbingSections.map((s) => ({ ...s })),
    toolGroups: def.toolGroups,
    mediaGroups: def.mediaGroups,
    introVideo: def.introVideo,
    practiceBank: def.practiceBank,
    roadmapSteps: def.roadmapSteps,
    glossary: def.glossary,
    cards: def.cards,
    jobsIntro: def.jobsIntro,
    tips: def.tips,
    jobLinks,
    forumTopics: def.forumTopics
  };
  pack.reference = () => tradeReference(pack, def.reference);
  tradePacks[def.id] = pack;
  tradeCatalog.push({
    id: def.id, title: def.title, name: def.name, category: def.category, summary: def.summary, work: def.work,
    duration: def.duration, profileUrl: def.profileUrl, durationUrl: def.durationUrl, union: def.union, unionUrl: def.unionUrl, jobSearch: def.jobSearch,
    tools: def.tools, insight: def.insight, aliases: def.aliases || "", icon: def.icon || tradeIcons[def.id] || defaultTradeIcon
  });
}
