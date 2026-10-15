import { createFileRoute } from "@tanstack/react-router";
import SachseTX from "@/pages/SachseTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-sachse-tx")({
  head: () => {
    const location = getLocationBySlug("sachse-tx");
    return location ? pageHead("/dumpster-rental-sachse-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: SachseTX,
});
