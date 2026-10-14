import { createFileRoute } from "@tanstack/react-router";
import AllenTX from "@/pages/AllenTX";

export const Route = createFileRoute("/dumpster-rental-allen-tx")({
  component: AllenTX,
});
