import { createFileRoute } from "@tanstack/react-router";
import HighlandParkTX from "@/pages/HighlandParkTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-highland-park-tx")({
  head: () => {
    const location = getLocationBySlug("highland-park-tx");
    return location ? pageHead("/dumpster-rental-highland-park-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: HighlandParkTX,
});
