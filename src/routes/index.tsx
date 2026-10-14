import { createFileRoute } from "@tanstack/react-router";
import ServiceArea from "@/pages/ServiceArea";

export const Route = createFileRoute("/")({
  component: ServiceArea,
});
