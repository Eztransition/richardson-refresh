import { createFileRoute } from "@tanstack/react-router";
import UniversityParkTX from "@/pages/UniversityParkTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-university-park-tx")({
  head: () => {
    const location = getLocationBySlug("university-park-tx");
    return location ? pageHead("/dumpster-rental-university-park-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: UniversityParkTX,
});
