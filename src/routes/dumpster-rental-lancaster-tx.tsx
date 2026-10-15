import { createFileRoute } from "@tanstack/react-router";
import LancasterTX from "@/pages/LancasterTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-lancaster-tx")({
  head: () => {
    const location = getLocationBySlug("lancaster-tx");
    return location ? pageHead("/dumpster-rental-lancaster-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: LancasterTX,
});
