import { createFileRoute } from "@tanstack/react-router";
import AllenTX from "@/pages/AllenTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-allen-tx")({
  head: () => {
    const location = getLocationBySlug("allen-tx");
    return location ? pageHead("/dumpster-rental-allen-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: AllenTX,
});
