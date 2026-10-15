import { createFileRoute } from "@tanstack/react-router";
import PlanoTX from "@/pages/PlanoTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-plano-tx")({
  head: () => {
    const location = getLocationBySlug("plano-tx");
    return location ? pageHead("/dumpster-rental-plano-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: PlanoTX,
});
