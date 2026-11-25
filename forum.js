// Community forum and buy/sell board backed by Supabase (see supabase/schema.sql).

const forumTopics = ["Starting out", "Layout and fabrication", "Install and field work", "Red Seal and exam prep", "Tools and gear", "Province and jurisdiction"];
const listingCategories = ["Hand tools", "Power tools", "PPE and clothing", "Books and study material", "Shop equipment", "Other"];
const FORUM_TRADE = "sheet-metal";
const listingConditions = ["New", "Like new", "Good", "Fair", "For parts"];

function photoUrl(path) {
  return path ? `${window.FORUM_CONFIG.url}/storage/v1/object/public/listing-photos/${encodeURI(path)}` : "";
}

// Shrinks a chosen photo to a JPEG of at most 1200px so uploads stay small.
function resizePhoto(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, 1200 / Math.max(img.width, img.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(img.src);
      canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("Could not process that photo."))), "image/jpeg", 0.82);
    };
    img.onerror = () => reject(new Error("That file isn't a supported image."));
    img.src = URL.createObjectURL(file);
  });
}

let forumClient = null;

function forumConfigured() {
  const c = window.FORUM_CONFIG || {};
  return Boolean(c.url && c.anonKey);
}

function loadSupabase() {
  if (window.supabase) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
    script.onload = resolve;
    script.onerror = () => reject(new Error("Could not load the forum library."));
    document.head.appendChild(script);
  });
}

function fEsc(text) {
  return String(text ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function fDate(iso) {
  return new Date(iso).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });
}

function forumShell() {
  return `
    <section class="content-block"><h2>Community forum</h2>
      <p>Discussions, questions, and a buy and sell board for sheet metal apprentices and journeypersons. Read without an account; sign in to post.</p>
      <div id="forum-auth" class="forum-auth"></div>
    </section>
    <div class="sub-nav" role="tablist" aria-label="Forum views">
      <a href="#" data-forum-tab="discussion" role="tab">Discussions</a>
      <a href="#" data-forum-tab="listing" role="tab">Community buy &amp; sell</a>
    </div>
    <div id="forum-body"></div>`;
}

function renderSheetMetalForum() {
  if (!forumConfigured()) {
    return `<section class="content-block"><h2>Community forum</h2>
      <p>The forum is built but not switched on yet. The site owner needs to create a Supabase project, run <code>supabase/schema.sql</code>, and add the project URL and anon key to <code>forum-config.js</code>.</p></section>`;
  }
  return `<div id="forum-root">${forumShell()}</div>`;
}

async function initForum(root) {
  const state = { user: null, profile: null, isAdmin: false, tab: "discussion", filter: "", search: "" };
  const body = root.querySelector("#forum-body");
  const authBox = root.querySelector("#forum-auth");

  try {
    await loadSupabase();
  } catch (err) {
    body.innerHTML = `<div class="empty-state">${fEsc(err.message)}</div>`;
    return;
  }
  forumClient ??= window.supabase.createClient(window.FORUM_CONFIG.url, window.FORUM_CONFIG.anonKey);
  const db = forumClient;

  async function refreshUser() {
    const { data } = await db.auth.getUser();
    state.user = data?.user || null;
    state.profile = null;
    state.isAdmin = false;
    if (state.user) {
      const [{ data: profile }, { data: admin }] = await Promise.all([
        db.from("profiles").select("*").eq("id", state.user.id).maybeSingle(),
        db.from("admins").select("user_id").eq("user_id", state.user.id).maybeSingle()
      ]);
      state.profile = profile;
      state.isAdmin = Boolean(admin);
    }
    renderAuth();
  }

  function renderAuth() {
    if (!state.user) {
      authBox.innerHTML = `
        <form id="auth-form" class="forum-form">
          <label>Email<input type="email" name="email" required autocomplete="email"></label>
          <label>Password (8+ characters)<input type="password" name="password" required minlength="8" autocomplete="current-password"></label>
          <div class="forum-actions"><button class="quiz-submit" data-mode="in" type="submit">Sign in</button><button class="quiz-start" data-mode="up" type="submit">Create account</button></div>
          <p class="forum-msg" role="status"></p>
        </form>`;
      const form = authBox.querySelector("#auth-form");
      let mode = "in";
      form.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => { mode = b.dataset.mode; }));
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const msg = form.querySelector(".forum-msg");
        const { email, password } = Object.fromEntries(new FormData(form));
        const result = mode === "up" ? await db.auth.signUp({ email, password }) : await db.auth.signInWithPassword({ email, password });
        if (result.error) { msg.textContent = result.error.message; return; }
        if (mode === "up" && !result.data.session) { msg.textContent = "Check your email to confirm your account, then sign in."; return; }
        await refreshUser();
        showTab();
      });
    } else if (!state.profile) {
      authBox.innerHTML = `
        <form id="profile-form" class="forum-form">
          <label>Choose a display name (2–30 characters). Do not use your real name if you prefer privacy.<input name="display_name" required minlength="2" maxlength="30"></label>
          <div class="forum-actions"><button class="quiz-submit" type="submit">Save name</button></div>
          <p class="forum-msg" role="status"></p>
        </form>`;
      authBox.querySelector("#profile-form").addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = new FormData(e.target).get("display_name").trim();
        const { error } = await db.from("profiles").insert({ id: state.user.id, display_name: name });
        if (error) { e.target.querySelector(".forum-msg").textContent = error.message; return; }
        await refreshUser();
        showTab();
      });
    } else {
      authBox.innerHTML = `<p>Signed in as <strong>${fEsc(state.profile.display_name)}</strong>${state.isAdmin ? " (moderator)" : ""}. <button class="link-button" id="sign-out" type="button">Sign out</button></p>`;
      authBox.querySelector("#sign-out").addEventListener("click", async () => { await db.auth.signOut(); await refreshUser(); showTab(); });
    }
  }

  const canPost = () => Boolean(state.user && state.profile);

  async function showTab() {
    root.querySelectorAll("[data-forum-tab]").forEach((a) => a.setAttribute("aria-current", a.dataset.forumTab === state.tab ? "page" : "false"));
    body.innerHTML = '<p class="fine-print">Loading…</p>';
    const isListing = state.tab === "listing";
    const categories = isListing ? listingCategories : forumTopics;
    const baseCols = "id,title,category,price,location,condition,image_path,status,created_at,profiles(display_name)";
    const build = (cols, pinned) => {
      let q = db.from("posts").select(cols).eq("trade", FORUM_TRADE).eq("kind", state.tab).neq("status", "removed");
      if (pinned) q = q.order("pinned", { ascending: false });
      return q.order("created_at", { ascending: false }).limit(50);
    };
    const run = (cols, pinned) => {
      let query = build(cols, pinned);
      if (state.filter) query = query.eq("category", state.filter);
      if (state.search) query = query.ilike("title", `%${state.search.replace(/[%_\\]/g, "")}%`);
      return query;
    };
    let { data, error } = await run(baseCols + ",pinned", true);
    if (error && /pinned/.test(error.message)) ({ data, error } = await run(baseCols, false));
    if (error) { body.innerHTML = `<div class="empty-state">${fEsc(error.message)}</div>`; return; }

    const options = categories.map((c) => `<option value="${fEsc(c)}"${c === state.filter ? " selected" : ""}>${fEsc(c)}</option>`).join("");
    const grid = data.length ? `<div class="market-grid">${data.map((p) => `
      <button class="market-card" type="button" data-post="${p.id}">
        <span class="market-photo">${p.image_path ? `<img src="${fEsc(photoUrl(p.image_path))}" alt="" loading="lazy">` : '<span aria-hidden="true">No photo</span>'}${p.status === "sold" ? '<span class="sold-tag">SOLD</span>' : ""}</span>
        <strong>${p.price == null ? "Free / trade" : "$" + Number(p.price).toFixed(0)}</strong>
        <span>${p.pinned ? '<span class="pin-tag">PINNED</span>' : ""}${fEsc(p.title)}</span>
        <small>${fEsc(p.location || "")}${p.condition ? " · " + fEsc(p.condition) : ""}</small>
      </button>`).join("")}</div>` : `<div class="empty-state">No listings found.</div>`;
    const list = !isListing && data.length ? data.map((p) => `
      <button class="resource-link forum-row" type="button" data-post="${p.id}">
        <span><strong>${p.pinned ? '<span class="pin-tag">PINNED</span>' : ""}${fEsc(p.title)}</strong>
        <small>${fEsc(p.category)} · ${fEsc(p.profiles?.display_name || "member")} · ${fDate(p.created_at)}${isListing ? ` · ${p.price == null ? "No price" : "$" + Number(p.price).toFixed(2)}${p.location ? " · " + fEsc(p.location) : ""}${p.status === "sold" ? " · SOLD" : ""}` : ""}</small></span>
        <span aria-hidden="true">→</span>
      </button>`).join("") : `<div class="empty-state">Nothing here yet. Be the first to post.</div>`;

    body.innerHTML = `
      <section class="content-block">
        <div class="forum-toolbar">
          <label>Search<input id="forum-search" type="search" value="${fEsc(state.search)}" placeholder="Search titles"></label>
          <label>Category<select id="forum-filter"><option value="">All</option>${options}</select></label>
          ${canPost() ? `<button class="quiz-submit" id="new-post" type="button">${isListing ? "New listing" : "New discussion"}</button>` : `<span class="fine-print">Sign in and choose a display name to post.</span>`}
        </div>
        ${isListing ? grid : `<div class="resource-list">${list}</div>`}
        ${isListing ? `<p class="fine-print">Local meet-ups for members selling personal items. Payment happens in person between you and the other member, not through this site. Meet in a public place, bring a friend if you can, and inspect items before paying. Don't send money in advance. ApprenticeHub doesn't handle payments or guarantee any sale. Don't list stolen, counterfeit, or recalled tools.</p>` : ""}
      </section>`;
    body.querySelector("#forum-filter").addEventListener("change", (e) => { state.filter = e.target.value; showTab(); });
    body.querySelector("#forum-search").addEventListener("keydown", (e) => { if (e.key === "Enter") { state.search = e.target.value.trim(); showTab(); } });
    body.querySelector("#new-post")?.addEventListener("click", showNewPost);
    body.querySelectorAll("[data-post]").forEach((b) => b.addEventListener("click", () => showPost(Number(b.dataset.post))));
  }

  function showNewPost() {
    const isListing = state.tab === "listing";
    const categories = (isListing ? listingCategories : forumTopics).map((c) => `<option>${fEsc(c)}</option>`).join("");
    body.innerHTML = `
      <section class="content-block"><h2>${isListing ? "New listing" : "New discussion"}</h2>
        <form id="post-form" class="forum-form">
          <label>Category<select name="category">${categories}</select></label>
          <label>Title<input name="title" required minlength="4" maxlength="120"></label>
          ${isListing ? `<label>Condition<select name="condition">${listingConditions.map((c) => `<option>${c}</option>`).join("")}</select></label>
          <label>Photo (optional, JPEG/PNG/WebP)<input name="photo" type="file" accept="image/jpeg,image/png,image/webp"></label>
          <label>Price (CAD, leave blank if free or trade)<input name="price" type="number" min="0" step="0.01"></label>
          <label>Meet-up area (city or region only)<input name="location" maxlength="80"></label>` : ""}
          <label>${isListing ? "Description, condition, and preferred meet-up spot (public place)" : "Message"}<textarea name="body" required maxlength="5000" rows="6"></textarea></label>
          <p class="fine-print">Posts are public. Do not share your home address, phone number, or employer-confidential information.</p>
          <div class="forum-actions"><button class="quiz-submit" type="submit">Post</button><button class="quiz-start" id="cancel-post" type="button">Cancel</button></div>
          <p class="forum-msg" role="status"></p>
        </form>
      </section>`;
    body.querySelector("#cancel-post").addEventListener("click", showTab);
    body.querySelector("#post-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const f = Object.fromEntries(new FormData(e.target));
      let imagePath = null;
      const msg = e.target.querySelector(".forum-msg");
      if (isListing && f.photo && f.photo.size) {
        try {
          const blob = await resizePhoto(f.photo);
          imagePath = `${state.user.id}/${Date.now()}.jpg`;
          const { error: upErr } = await db.storage.from("listing-photos").upload(imagePath, blob, { contentType: "image/jpeg" });
          if (upErr) throw upErr;
        } catch (err) { msg.textContent = err.message; return; }
      }
      const row = {
        user_id: state.user.id, trade: FORUM_TRADE, kind: state.tab, category: f.category,
        title: f.title.trim(), body: f.body.trim(),
        price: isListing && f.price !== "" ? Number(f.price) : null,
        location: isListing ? (f.location || "").trim() || null : null,
        condition: isListing ? f.condition : null,
        image_path: imagePath
      };
      const { data, error } = await db.from("posts").insert(row).select("id").single();
      if (error) { msg.textContent = error.message; return; }
      showPost(data.id);
    });
  }

  async function showPost(id) {
    body.innerHTML = '<p class="fine-print">Loading…</p>';
    const [{ data: post, error }, { data: replies }] = await Promise.all([
      db.from("posts").select("*,profiles(display_name)").eq("id", id).maybeSingle(),
      db.from("replies").select("id,body,user_id,created_at,profiles(display_name)").eq("post_id", id).order("created_at")
    ]);
    if (error || !post) { body.innerHTML = '<div class="empty-state">That post is not available.</div>'; return; }
    const mine = state.user && post.user_id === state.user.id;
    const isListing = post.kind === "listing";
    const replyHtml = (replies || []).map((r) => `
      <div class="forum-reply"><small>${fEsc(r.profiles?.display_name || "member")} · ${fDate(r.created_at)}${state.user && (r.user_id === state.user.id || state.isAdmin) ? ` · <button class="link-button" data-del-reply="${r.id}" type="button">Delete</button>` : ""}</small>
      <p>${fEsc(r.body)}</p></div>`).join("") || '<p class="fine-print">No replies yet.</p>';

    body.innerHTML = `
      <section class="content-block">
        <button class="link-button" id="back-list" type="button">← Back</button>
        <h2>${fEsc(post.title)}</h2>
        <p class="fine-print">${fEsc(post.category)} · ${fEsc(post.profiles?.display_name || "member")} · ${fDate(post.created_at)}</p>
        ${post.image_path ? `<img class="listing-photo" src="${fEsc(photoUrl(post.image_path))}" alt="Photo of ${fEsc(post.title)}">` : ""}
        ${isListing ? `<p><strong>${post.price == null ? "No price listed" : "$" + Number(post.price).toFixed(2) + " CAD"}</strong>${post.location ? " · " + fEsc(post.location) : ""}${post.condition ? " · " + fEsc(post.condition) : ""}${post.status === "sold" ? " · <strong>SOLD</strong>" : ""}</p>` : ""}
        <p class="forum-text">${fEsc(post.body)}</p>
        <div class="forum-actions">
          ${mine && isListing && post.status === "open" ? '<button class="quiz-start" id="mark-sold" type="button">Mark as sold</button>' : ""}
          ${mine || state.isAdmin ? '<button class="quiz-start" id="delete-post" type="button">Delete</button>' : ""}
          ${state.isAdmin && !mine ? '<button class="quiz-start" id="remove-post" type="button">Remove (moderator)</button>' : ""}
          ${state.isAdmin && "pinned" in post ? `<button class="quiz-start" id="pin-post" type="button">${post.pinned ? "Unpin" : "Pin to top"}</button>` : ""}
          ${state.user ? '<button class="quiz-start" id="report-post" type="button">Report</button>' : ""}
        </div>
      </section>
      <section class="content-block"><h2>${isListing ? "Questions and replies" : "Replies"}</h2>${replyHtml}
        ${canPost() ? `<form id="reply-form" class="forum-form"><label>Your reply<textarea name="body" required maxlength="3000" rows="4"></textarea></label>
          <div class="forum-actions"><button class="quiz-submit" type="submit">Reply</button></div><p class="forum-msg" role="status"></p></form>` : '<p class="fine-print">Sign in to reply.</p>'}
      </section>`;

    body.querySelector("#back-list").addEventListener("click", showTab);
    body.querySelector("#mark-sold")?.addEventListener("click", async () => { await db.from("posts").update({ status: "sold" }).eq("id", id); showPost(id); });
    body.querySelector("#delete-post")?.addEventListener("click", async () => {
      if (confirm("Delete this post?")) { if (post.image_path) await db.storage.from("listing-photos").remove([post.image_path]);
        await db.from("posts").delete().eq("id", id); showTab(); }
    });
    body.querySelector("#pin-post")?.addEventListener("click", async () => { await db.from("posts").update({ pinned: !post.pinned }).eq("id", id); showPost(id); });
    body.querySelector("#remove-post")?.addEventListener("click", async () => { await db.from("posts").update({ status: "removed" }).eq("id", id); showTab(); });
    body.querySelector("#report-post")?.addEventListener("click", async () => {
      const reason = prompt("Why are you reporting this post?");
      if (reason && reason.trim()) {
        const { error: err } = await db.from("reports").insert({ post_id: id, user_id: state.user.id, reason: reason.trim().slice(0, 500) });
        alert(err ? err.message : "Thanks. A moderator will review it.");
      }
    });
    body.querySelectorAll("[data-del-reply]").forEach((b) => b.addEventListener("click", async () => {
      await db.from("replies").delete().eq("id", Number(b.dataset.delReply));
      showPost(id);
    }));
    body.querySelector("#reply-form")?.addEventListener("submit", async (e) => {
      e.preventDefault();
      const text = new FormData(e.target).get("body").trim();
      const { error: err } = await db.from("replies").insert({ post_id: id, user_id: state.user.id, body: text });
      if (err) { e.target.querySelector(".forum-msg").textContent = err.message; return; }
      showPost(id);
    });
  }

  root.querySelectorAll("[data-forum-tab]").forEach((a) => a.addEventListener("click", (e) => {
    e.preventDefault();
    state.tab = a.dataset.forumTab;
    state.filter = "";
    showTab();
  }));

  await refreshUser();
  showTab();
}
