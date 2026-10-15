import { createFileRoute } from "@tanstack/react-router";
import AddisonTX from "@/pages/AddisonTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-addison-tx")({
  head: () => {
    const location = getLocationBySlug("addison-tx");
    return location ? pageHead("/dumpster-rental-addison-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: AddisonTX,
});
