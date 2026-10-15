import { createFileRoute } from "@tanstack/react-router";
import SunnyvaleTX from "@/pages/SunnyvaleTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-sunnyvale-tx")({
  head: () => {
    const location = getLocationBySlug("sunnyvale-tx");
    return location ? pageHead("/dumpster-rental-sunnyvale-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: SunnyvaleTX,
});
