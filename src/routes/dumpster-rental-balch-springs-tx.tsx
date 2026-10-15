import { createFileRoute } from "@tanstack/react-router";
import BalchSpringsTX from "@/pages/BalchSpringsTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-balch-springs-tx")({
  head: () => {
    const location = getLocationBySlug("balch-springs-tx");
    return location ? pageHead("/dumpster-rental-balch-springs-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: BalchSpringsTX,
});
