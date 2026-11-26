Trade guide data format (trades/<id>.js)

Each file calls registerTrade({...}) from trade-common.js. Add a matching <script> tag to index.html
(after trade-common.js) and an entry in tradeGroupOf in app.js. Every trade must follow the same
structure as the Sheet Metal Worker master guide. Do not copy content between trades.

Required keys
  id, store            URL id and localStorage key prefix (lowercase, hyphens)
  title, name, short   Red Seal title, display name, lower-case word used in headings
  category, summary, work, duration
  profileUrl           Official Red Seal page for this trade (optional; falls back to the Red Seal home page)
  durationUrl          Job Bank requirements page for the occupation (optional; same fallback)
  union, unionUrl      Union or association training page
  jobSearch, journeySearch, aliases
  tools                6 short items for the overview checklist
  insight              { skills, hazards, settings } lists
  toolGroups           4 groups: [{ title, note, items: [{ name, why, search }] }]
  mediaGroups          5 groups: official resources, video searches, and 3 audio levels
  introVideo           optional { id, title }: YouTube video ID and accessible title, shown first in Videos & audio
  practiceBank         { 1: [], 2: [], 3: [], 4: [] } question rows: { q, options[4], answer, explain }
  roadmapSteps         6 year-by-year steps
  glossary             [[term, definition], ...]
  cards                flashcards
  jobsIntro, tips      jobs tab text
  forumTopics          6 forum topic names
  reference            [{ title, intro?, list?, table?: { head, rows }, note? }]

Practice questions are original study aids, not official Red Seal exam questions. Have a journeyperson
review questions and reference figures. Links should be organization home pages or search links that
have been checked.
