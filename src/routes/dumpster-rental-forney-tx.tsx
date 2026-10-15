import { createFileRoute } from "@tanstack/react-router";
import ForneyTX from "@/pages/ForneyTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-forney-tx")({
  head: () => {
    const location = getLocationBySlug("forney-tx");
    return location ? pageHead("/dumpster-rental-forney-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: ForneyTX,
});
