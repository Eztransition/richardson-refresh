import { createFileRoute } from "@tanstack/react-router";
import RichardsonTX from "@/pages/RichardsonTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-richardson-tx")({
  head: () => {
    const location = getLocationBySlug("richardson-tx");
    return location ? pageHead("/dumpster-rental-richardson-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: RichardsonTX,
});
