import { createFileRoute } from "@tanstack/react-router";
import DumpsterSizeDetail from "@/pages/DumpsterSizeDetail";
import { getDumpsterSizePage } from "@/config/dumpster-sizes";

function Page10() {
  return <DumpsterSizeDetail slug="10-yard-dumpster-rentals" />;
}

const SEO = getDumpsterSizePage("10-yard-dumpster-rentals").seo;
const URL = "https://dallas-dumpster.com/dumpster-size";

export const Route = createFileRoute("/10-yard-dumpster-rentals")({
  component: Page10,
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
