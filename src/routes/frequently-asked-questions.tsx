import { createFileRoute } from "@tanstack/react-router";
import { FaqPage } from "@/pages/SitePages";
import { faqPage as P, pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/frequently-asked-questions")({
  component: FaqPage,
  head: () => pageHead("/frequently-asked-questions", P.seo.title, P.seo.description),
});
