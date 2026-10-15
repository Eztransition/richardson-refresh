import { createFileRoute } from "@tanstack/react-router";
import WylieTX from "@/pages/WylieTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-wylie-tx")({
  head: () => {
    const location = getLocationBySlug("wylie-tx");
    return location ? pageHead("/dumpster-rental-wylie-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: WylieTX,
});
