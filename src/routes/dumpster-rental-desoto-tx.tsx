import { createFileRoute } from "@tanstack/react-router";
import DeSotoTX from "@/pages/DeSotoTX";

export const Route = createFileRoute("/dumpster-rental-desoto-tx")({
  component: DeSotoTX,
});
