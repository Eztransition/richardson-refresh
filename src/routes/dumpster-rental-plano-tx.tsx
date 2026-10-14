import { createFileRoute } from "@tanstack/react-router";
import PlanoTX from "@/pages/PlanoTX";

export const Route = createFileRoute("/dumpster-rental-plano-tx")({
  component: PlanoTX,
});
