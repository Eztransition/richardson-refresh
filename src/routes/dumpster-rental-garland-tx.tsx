import { createFileRoute } from "@tanstack/react-router";
import GarlandTX from "@/pages/GarlandTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-garland-tx")({
  head: () => {
    const location = getLocationBySlug("garland-tx");
    return location ? pageHead("/dumpster-rental-garland-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: GarlandTX,
});
