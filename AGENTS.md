# AGENTS.md

- The app runs on TanStack Start (SSR) with file-based routes in `src/routes/`; each city page route is a thin file that renders its component from `src/pages/` — keeps page code independent of the router.
- Existing components import routing APIs from `@/lib/router-compat` (react-router-style shim over TanStack Router) — avoids rewriting every call site; new code may use `@tanstack/react-router` directly.
- Theme tokens live in `src/styles.css` (Tailwind v4 `@theme inline`, HSL channel variables wrapped in `hsl()`) — there is no tailwind.config file.
- Site-wide head tags (title, description, social tags, favicon) live in `src/routes/__root.tsx` `head()`; per-page SEO is applied client-side via `src/lib/seo.ts`.
- Dumpster size pages (`/dumpster-size`, `/{10,15,20}-yard-dumpster-rentals`) take all wording, prices and SEO text from `src/config/dumpster-sizes.ts`, copied verbatim from dallas-dumpster.com — one place to sync with the source site.
- General pages (About, Contact, FAQs, Gallery, Acceptable & Prohibited Items, Privacy Policy) take their verbatim text and page-specific image references from `src/config/site-pages.ts` and share `PageShell`, with an optional hero image passed through to `SizeHero` — keeps individual page images from changing other pages; all header/footer links are internal routes.
- Third-party contact form embeds live in a dedicated component with their script loaded after mount — keeps browser side effects outside SSR.
- Home page copy and FAQ answers live in `src/config/home-page.ts`, while displayed rental prices and terms come from shared dumpster size data — keeps homepage text independent without duplicating authoritative pricing.
