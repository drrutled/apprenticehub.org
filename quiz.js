const quizTagLabels = {
  outdoor: "outdoor work",
  indoor: "indoor shop or workplace",
  heights: "working at height",
  heavy: "physical work",
  machines: "big machines",
  vehicles: "vehicles",
  electrical: "electrical systems",
  pipes: "pipes, heating and cooling",
  metal: "metal and welding",
  precise: "precision work",
  design: "design and finishing",
  people: "working with people",
  food: "food",
  plants: "plants and land",
  building: "building construction"
};

const quizQuestions = [
  { id: "day", prompt: "What does a good workday look like?", options: [
    { label: "Outside, moving around a job site", tags: ["outdoor", "building"] },
    { label: "Inside a shop or workshop", tags: ["indoor", "precise"] },
    { label: "Working with people and making them look or feel good", tags: ["people", "design"] },
    { label: "In a kitchen or bakery", tags: ["food", "indoor"] },
    { label: "Outdoors with plants and land", tags: ["plants", "outdoor"] }
  ] },
  { id: "materials", weight: 2, prompt: "What would you rather work with?", options: [
    { label: "Cars, trucks, motorcycles, or RVs", tags: ["vehicles", "machines"] },
    { label: "Big machines like excavators, cranes, or dozers", tags: ["machines", "heavy"] },
    { label: "Pipes, water, gas, heating, or cooling", tags: ["pipes", "building"] },
    { label: "Wires, power, or electronics", tags: ["electrical", "precise"] },
    { label: "Metal, steel, or welding", tags: ["metal", "heavy"] },
    { label: "Wood, tile, paint, or walls", tags: ["building", "design"] }
  ] },
  { id: "heights", prompt: "How do you feel about working at height?", options: [
    { label: "I'm comfortable up high with training and gear", tags: ["heights"] },
    { label: "I'd rather stay on the ground", avoid: ["heights"] }
  ] },
  { id: "pace", prompt: "How physical do you want the work to be?", options: [
    { label: "Very physical, with lots of lifting and moving", tags: ["heavy"] },
    { label: "Steady and hands-on, with some detail work", tags: ["precise"] },
    { label: "Mostly planning and detail, with less lifting", tags: ["precise", "design"], avoid: ["heavy"] }
  ] }
];

const quizTradeTags = {
  "sheet-metal": ["metal", "building", "precise"],
  plumbing: ["pipes", "building", "outdoor"],
  electrician: ["electrical", "building", "heights"],
  carpenter: ["building", "design", "heavy"],
  cabinetmaker: ["indoor", "design", "precise"],
  "construction-craft-worker": ["outdoor", "heavy", "building"],
  "concrete-finisher": ["outdoor", "heavy", "building"],
  bricklayer: ["outdoor", "heavy", "building", "heights"],
  tilesetter: ["building", "design", "precise", "indoor"],
  roofer: ["heights", "outdoor", "heavy", "building"],
  glazier: ["building", "heights", "precise", "outdoor"],
  "drywall-finisher-plasterer": ["indoor", "building", "design"],
  "lather-interior-systems": ["indoor", "building", "heavy", "heights"],
  "painter-decorator": ["design", "heights", "indoor"],
  "floorcovering-installer": ["indoor", "building", "design", "precise"],
  "insulator-heat-frost": ["pipes", "building", "heights", "heavy"],
  "sprinkler-fitter": ["pipes", "building", "heights"],
  "gasfitter-a": ["pipes", "building"],
  "gasfitter-b": ["pipes", "building"],
  "oil-heat-technician": ["pipes", "electrical", "building"],
  "refrigeration-mechanic": ["pipes", "electrical", "indoor", "precise"],
  "steamfitter-pipefitter": ["pipes", "metal", "heavy", "indoor"],
  "industrial-electrician": ["electrical", "indoor", "precise"],
  "instrumentation-technician": ["electrical", "indoor", "precise"],
  "powerline-technician": ["electrical", "outdoor", "heights", "heavy"],
  millwright: ["metal", "machines", "indoor", "heavy"],
  boilermaker: ["metal", "heavy", "heights", "outdoor"],
  welder: ["metal", "precise"],
  "metal-fabricator": ["metal", "indoor", "precise"],
  machinist: ["metal", "machines", "indoor", "precise"],
  "tool-and-die-maker": ["metal", "precise", "indoor", "machines"],
  "ironworker-generalist": ["metal", "heights", "heavy", "outdoor"],
  "ironworker-reinforcing": ["metal", "heights", "heavy", "outdoor", "building"],
  "ironworker-structural": ["metal", "heights", "heavy", "outdoor"],
  "automotive-service-technician": ["vehicles", "indoor", "precise", "electrical"],
  "auto-body-collision": ["vehicles", "indoor", "metal", "design"],
  "automotive-refinishing": ["vehicles", "indoor", "design", "precise"],
  "motorcycle-technician": ["vehicles", "indoor", "precise"],
  "truck-transport-mechanic": ["vehicles", "machines", "heavy", "indoor"],
  "heavy-duty-technician": ["vehicles", "machines", "heavy", "indoor"],
  "agricultural-equipment-technician": ["vehicles", "machines", "outdoor", "plants"],
  "transport-trailer-technician": ["vehicles", "machines", "heavy", "indoor"],
  "rv-service-technician": ["vehicles", "indoor", "precise"],
  "parts-technician": ["vehicles", "indoor", "people"],
  "appliance-service-technician": ["electrical", "indoor", "people"],
  "heo-dozer": ["machines", "outdoor", "heavy"],
  "heo-excavator": ["machines", "outdoor", "heavy"],
  "heo-backhoe": ["machines", "outdoor", "heavy"],
  "mobile-crane-operator": ["machines", "outdoor", "heights", "heavy"],
  "tower-crane-operator": ["machines", "outdoor", "heights"],
  baker: ["food", "indoor", "design", "precise"],
  cook: ["food", "indoor", "people"],
  hairstylist: ["people", "design", "indoor", "precise"],
  "landscape-horticulturist": ["plants", "outdoor", "heavy"]
};

function renderQuiz() {
  const view = document.getElementById("quiz-view");
  const questions = quizQuestions.map((q) => `
    <fieldset class="quiz-question">
      <legend>${q.prompt}</legend>
      ${q.options.map((o, i) => `<label class="quiz-option"><input type="radio" name="${q.id}" value="${i}" required> <span>${o.label}</span></label>`).join("")}
    </fieldset>`).join("");

  view.innerHTML = `
    <a class="back-link" href="#browse"><span aria-hidden="true">←</span> All trade guides</a>
    <p class="eyebrow">Find your trade</p>
    <h1 id="quiz-title" tabindex="-1">Which trade might fit you?</h1>
    <p>Answer four quick questions. This is a starting point, not a test. Open each guide to see the real work, then decide.</p>
    <form id="quiz-form" class="quiz-form">
      ${questions}
      <button type="submit" class="quiz-submit">Show my matches</button>
    </form>
    <div id="quiz-results" class="quiz-results" aria-live="polite"></div>`;

  document.getElementById("quiz-form").addEventListener("submit", (event) => {
    event.preventDefault();
    showQuizResults(new FormData(event.target));
  });
}

function showQuizResults(formData) {
  const weights = {};
  const avoid = new Set();
  quizQuestions.forEach((q) => {
    const choice = formData.get(q.id);
    if (choice === null) return;
    const option = q.options[Number(choice)];
    (option.tags || []).forEach((tag) => { weights[tag] = (weights[tag] || 0) + (q.weight || 1); });
    (option.avoid || []).forEach((tag) => avoid.add(tag));
  });

  const scored = trades
    .map((trade) => {
      const tags = quizTradeTags[trade.id] || [];
      const matched = tags.filter((tag) => weights[tag]);
      const score = matched.reduce((sum, tag) => sum + weights[tag], 0) - tags.filter((tag) => avoid.has(tag)).length * 2;
      return { trade, matched, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.trade.name.localeCompare(b.trade.name))
    .slice(0, 3);

  const results = document.getElementById("quiz-results");
  if (!scored.length) {
    results.innerHTML = '<p class="fine-print">Pick an answer for each question to see your matches.</p>';
    return;
  }

  results.innerHTML = `
    <h2>Your best matches</h2>
    <div class="trade-grid">${scored.map(({ trade, matched }) => `
      <a class="trade-card" href="#trade/${trade.id}" aria-label="Open the ${trade.name} guide">
        <span class="card-top"><span class="trade-art">${trade.icon}</span></span>
        <h3>${trade.name}</h3>
        <p>${trade.summary}</p>
        <p class="fine-print">Fits: ${matched.map((tag) => quizTagLabels[tag]).join(", ")}</p>
        <span class="card-link"><span>Read the guide</span><span aria-hidden="true">→</span></span>
      </a>`).join("")}
    </div>
    <p class="fine-print">Matches are based on the work's general nature. Check the guide and talk to people in the trade before you choose.</p>`;
}
