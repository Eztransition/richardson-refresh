import { createFileRoute } from "@tanstack/react-router";
import RoyseCityTX from "@/pages/RoyseCityTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-royse-city-tx")({
  head: () => {
    const location = getLocationBySlug("royse-city-tx");
    return location ? pageHead("/dumpster-rental-royse-city-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: RoyseCityTX,
});
