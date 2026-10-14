import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/pages/SitePages";
import { privacyPage as P, pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPage,
  head: () => pageHead("/privacy-policy", P.seo.title, P.seo.description),
});
