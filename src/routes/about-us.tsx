import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/pages/SitePages";
import { aboutPage as P, pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/about-us")({
  component: AboutPage,
  head: () => pageHead("/about-us", P.seo.title, P.seo.description),
});
