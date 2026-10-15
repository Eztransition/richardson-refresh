import { createFileRoute } from "@tanstack/react-router";
import RowlettTX from "@/pages/RowlettTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-rowlett-tx")({
  head: () => {
    const location = getLocationBySlug("rowlett-tx");
    return location ? pageHead("/dumpster-rental-rowlett-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: RowlettTX,
});
