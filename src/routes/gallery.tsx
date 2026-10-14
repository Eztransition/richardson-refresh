import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/pages/SitePages";
import { galleryPage as P, pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => pageHead("/gallery", P.seo.title, P.seo.description),
});
