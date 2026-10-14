import { createFileRoute } from "@tanstack/react-router";
import DumpsterSize from "@/pages/DumpsterSize";

export const Route = createFileRoute("/dumpster-size")({
  component: DumpsterSize,
});
