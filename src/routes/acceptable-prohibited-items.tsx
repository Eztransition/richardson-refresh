import { createFileRoute } from "@tanstack/react-router";
import { ItemsPage } from "@/pages/SitePages";
import { itemsPage as P, pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/acceptable-prohibited-items")({
  component: ItemsPage,
  head: () => pageHead("/acceptable-prohibited-items", P.seo.title, P.seo.description),
});
