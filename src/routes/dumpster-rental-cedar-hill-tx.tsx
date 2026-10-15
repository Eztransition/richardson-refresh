import { createFileRoute } from "@tanstack/react-router";
import CedarHillTX from "@/pages/CedarHillTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-cedar-hill-tx")({
  head: () => {
    const location = getLocationBySlug("cedar-hill-tx");
    return location ? pageHead("/dumpster-rental-cedar-hill-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: CedarHillTX,
});
