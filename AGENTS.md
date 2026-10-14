# AGENTS.md

- The app runs on TanStack Start (SSR) with file-based routes in `src/routes/`; each city page route is a thin file that renders its component from `src/pages/` — keeps page code independent of the router.
- Existing components import routing APIs from `@/lib/router-compat` (react-router-style shim over TanStack Router) — avoids rewriting every call site; new code may use `@tanstack/react-router` directly.
- Theme tokens live in `src/styles.css` (Tailwind v4 `@theme inline`, HSL channel variables wrapped in `hsl()`) — there is no tailwind.config file.
- Site-wide head tags (title, description, social tags, favicon) live in `src/routes/__root.tsx` `head()`; per-page SEO is applied client-side via `src/lib/seo.ts`.
