import { createFileRoute } from "@tanstack/react-router";
import DallasTX from "@/pages/DallasTX";

export const Route = createFileRoute("/dumpster-rental-dallas-tx")({
  component: DallasTX,
});
