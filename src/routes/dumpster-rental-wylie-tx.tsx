import { createFileRoute } from "@tanstack/react-router";
import WylieTX from "@/pages/WylieTX";

export const Route = createFileRoute("/dumpster-rental-wylie-tx")({
  component: WylieTX,
});
