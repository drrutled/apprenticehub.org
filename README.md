# ApprenticeHub.org

A Canada-wide skilled-trades resource directory, currently in its first pilot release.

## What is live

- Searchable guides for Sheet Metal Worker, Plumbing, and Electrician.
- Province and territory selector with links to official apprenticeship information.
- Starter tool checklists, trade overviews, union resources, Job Bank searches, and federal funding links.
- Responsive layout with no framework or third-party runtime dependencies.

Apprenticeship requirements, training length, funding, and certification can vary by jurisdiction. The guides link to official sources and avoid presenting one national duration as universal. Tool lists are informational, not purchase requirements. There are no affiliate links, user accounts, forums, or media uploads in this first release.

## Updating the site

- `index.html` contains the page structure.
- `styles.css` contains the design and responsive layout.
- `app.js` contains the trade guide content, search/filter behavior, and resource links.
- `favicon.svg` is the ApprenticeHub logo used for the browser bookmark icon.

Add a trade entry to the `trades` array in `app.js` to create another guide. Verify new resource links and jurisdiction-specific details with official sources before publishing.

## Publish

GitHub Pages publishes the `main` branch from the repository root. The custom domain is configured as `apprenticehub.org`; domain DNS is managed through Namecheap.
