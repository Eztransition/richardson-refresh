import { createFileRoute } from "@tanstack/react-router";
import HowToDisposeOfCouchDallas from "@/pages/HowToDisposeOfCouchDallas";

import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/resources/how-to-dispose-of-a-couch-in-dallas")({
  head: () => pageHead("/resources/how-to-dispose-of-a-couch-in-dallas", "How to Dispose of a Couch in Dallas, TX | Couch Removal Guide", "Complete guide to couch removal & disposal in Dallas-Fort Worth. Donation centers, bulk trash pickup schedules by city, and dumpster rental options for full cleanouts."),
  component: HowToDisposeOfCouchDallas,
});
