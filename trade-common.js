// Shared helpers that let each trade be described as plain data (see trades/*.js).
// Practice questions in every trade are original study aids, not official Red Seal exam questions.

const defaultTradeIcon = "<svg viewBox=\"0 0 64 64\" fill=\"none\" aria-hidden=\"true\"><path d=\"M14 50 38 26M44 10a10 10 0 0 0-9 14L22 37l5 5 13-13a10 10 0 0 0 14-9l-7 5-5-5z\" stroke=\"currentColor\" stroke-width=\"4\" stroke-linejoin=\"round\" stroke-linecap=\"round\"/></svg>";

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
    duration: def.duration, union: def.union, unionUrl: def.unionUrl, jobSearch: def.jobSearch,
    tools: def.tools, insight: def.insight, aliases: def.aliases || "", icon: def.icon || defaultTradeIcon
  });
}
