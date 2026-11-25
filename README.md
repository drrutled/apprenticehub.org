# ApprenticeHub.org

A Canada-wide skilled-trades resource directory, currently in its first pilot release.

## What is live

- A searchable directory of Red Seal trades, including pilot guides for Sheet Metal Worker, Plumbing (Plumber), and Electrician (Construction Electrician). Other Red Seal trades are marked as coming soon and link to the [official trade list](https://red-seal.ca/eng/welcome.shtml).
- Province and territory selector with links to official apprenticeship information.
- Starter tool checklists, trade overviews, union resources, Job Bank searches, and federal funding links.
- Responsive layout with no framework or third-party runtime dependencies.

Apprenticeship requirements, training length, funding, and certification can vary by jurisdiction. The guides link to official sources and avoid presenting one national duration as universal. Tool lists are informational, not purchase requirements. There are no affiliate links or media uploads. The Sheet Metal guide adds a buying-tools guide, video/audio search links, practice tests, and an optional community forum with buy/sell board.

## Updating the site

- `index.html` contains the page structure.
- `styles.css` contains the design and responsive layout.
- `app.js` contains the trade guide content, search/filter behavior, and resource links.
- `favicon.svg` is the ApprenticeHub logo used for the browser bookmark icon.

Add a trade entry to the `trades` array in `app.js` and remove its title from `upcomingTrades` to create another guide. Verify new resource links and jurisdiction-specific details with official sources before publishing.

## Publish

GitHub Pages publishes the `main` branch from the repository root. The custom domain is configured as `apprenticehub.org`; domain DNS is managed through Namecheap.

## Community forum setup (Supabase)

1. Create a free project at supabase.com.
2. Run `supabase/schema.sql` in the SQL editor.
3. Put the project URL and anon key in `forum-config.js` (the anon key is public by design; row level security protects data).
4. Enable email sign-in in Authentication settings, and add `https://apprenticehub.org` as a site URL.
5. After signing up on the site, add your user id to the `admins` table to moderate (see the end of the schema file).
