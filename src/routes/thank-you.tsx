import { createFileRoute } from "@tanstack/react-router";
import ThankYou from "@/pages/ThankYou";

import { pageHead } from "@/config/site-pages";

export const Route = createFileRoute("/thank-you")({
  head: () => {
    const head = pageHead("/thank-you", "Thank You | Dallas Dumpster Rentals", "Thanks for booking your dumpster rental with Dallas Dumpster. Check your email or text messages for follow-up instructions.");
    return { ...head, meta: [...head.meta, { name: "robots", content: "noindex, nofollow" }] };
  },
  component: ThankYou,
});
