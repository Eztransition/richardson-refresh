import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/pages/HomePage";
import { homePage } from "@/config/home-page";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => pageHead("/", homePage.seo.title, homePage.seo.description),
});
