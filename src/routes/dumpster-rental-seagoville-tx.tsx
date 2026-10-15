import { createFileRoute } from "@tanstack/react-router";
import SeagovilleTX from "@/pages/SeagovilleTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-seagoville-tx")({
  head: () => {
    const location = getLocationBySlug("seagoville-tx");
    return location ? pageHead("/dumpster-rental-seagoville-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: SeagovilleTX,
});
