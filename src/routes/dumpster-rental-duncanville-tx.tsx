import { createFileRoute } from "@tanstack/react-router";
import DuncanvilleTX from "@/pages/DuncanvilleTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-duncanville-tx")({
  head: () => {
    const location = getLocationBySlug("duncanville-tx");
    return location ? pageHead("/dumpster-rental-duncanville-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: DuncanvilleTX,
});
