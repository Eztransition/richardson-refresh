import { createFileRoute } from "@tanstack/react-router";
import DallasTX from "@/pages/DallasTX";

import { getLocationBySlug } from "@/config/locations";
import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/dumpster-rental-dallas-tx")({
  head: () => {
    const location = getLocationBySlug("dallas-tx");
    return location ? pageHead("/dumpster-rental-dallas-tx", location.metaTitle, location.metaDescription) : {};
  },
  component: DallasTX,
});
