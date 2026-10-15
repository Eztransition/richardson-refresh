import { createFileRoute } from "@tanstack/react-router";
import MurphyTX from "@/pages/MurphyTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-murphy-tx")({
  head: () => {
    const location = getLocationBySlug("murphy-tx");
    return location ? pageHead("/dumpster-rental-murphy-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: MurphyTX,
});
