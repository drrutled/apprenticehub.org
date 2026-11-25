# ApprenticeHub.org

A trades-inspired, responsive “coming soon” landing page for ApprenticeHub.org.

## Publish with GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)`.
3. GitHub Pages will pick up the custom domain from the `CNAME` file. Wait for the site to finish publishing before enabling **Enforce HTTPS**.

## Point the Namecheap domain to GitHub Pages

In Namecheap, open **Domain List → Manage → Advanced DNS** for `apprenticehub.org`. Add these records (remove conflicting records for `@` or `www` first):

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| A Record | `@` | `185.199.108.153` | Automatic |
| A Record | `@` | `185.199.109.153` | Automatic |
| A Record | `@` | `185.199.110.153` | Automatic |
| A Record | `@` | `185.199.111.153` | Automatic |
| CNAME Record | `www` | `drrutled.github.io` | Automatic |

DNS changes can take time to propagate. GitHub Pages may be unavailable for private repositories depending on the account plan; if Pages cannot be enabled, make the repository public or use a hosting plan that supports Pages for private repositories.
