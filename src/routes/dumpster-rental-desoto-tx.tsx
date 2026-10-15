import { createFileRoute } from "@tanstack/react-router";
import DeSotoTX from "@/pages/DeSotoTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-desoto-tx")({
  head: () => {
    const location = getLocationBySlug("desoto-tx");
    return location ? pageHead("/dumpster-rental-desoto-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: DeSotoTX,
});
