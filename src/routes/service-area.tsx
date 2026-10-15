import { createFileRoute } from "@tanstack/react-router";
import ServiceArea from "@/pages/ServiceArea";

import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/service-area")({
  head: () => pageHead("/service-area", "Dumpster Rental Service Areas | Dallas-Fort Worth", "Dallas Dumpster Rentals serves 23 communities across the Dallas-Fort Worth metroplex. Find dumpster rental services near you. Call (972) 645-6731."),
  component: ServiceArea,
});
