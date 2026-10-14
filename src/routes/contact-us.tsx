import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/SitePages";
import { contactPage as P, pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/contact-us")({
  component: ContactPage,
  head: () => pageHead("/contact-us", P.seo.title, P.seo.description),
});
