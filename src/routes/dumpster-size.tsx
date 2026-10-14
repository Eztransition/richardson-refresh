import { createFileRoute } from "@tanstack/react-router";
import DumpsterSize from "@/pages/DumpsterSize";
import { dumpsterSizeOverview } from "@/config/dumpster-sizes";

const SEO = dumpsterSizeOverview.seo;
const URL = "https://richardson-revamp-joy.lovable.app/dumpster-size";

export const Route = createFileRoute("/dumpster-size")({
  component: DumpsterSize,
  head: () => ({
    meta: [
      { title: SEO.title },
      { name: "description", content: SEO.description },
      { property: "og:title", content: SEO.title },
      { property: "og:description", content: SEO.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SEO.title },
      { name: "twitter:description", content: SEO.description },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
});
