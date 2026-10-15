import { createFileRoute } from "@tanstack/react-router";
import HutchinsTX from "@/pages/HutchinsTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-hutchins-tx")({
  head: () => {
    const location = getLocationBySlug("hutchins-tx");
    return location ? pageHead("/dumpster-rental-hutchins-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: HutchinsTX,
});
