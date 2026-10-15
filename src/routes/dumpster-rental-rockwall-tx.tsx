import { createFileRoute } from "@tanstack/react-router";
import RockwallTX from "@/pages/RockwallTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-rockwall-tx")({
  head: () => {
    const location = getLocationBySlug("rockwall-tx");
    return location ? pageHead("/dumpster-rental-rockwall-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: RockwallTX,
});
