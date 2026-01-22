import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const SachseTX = () => {
  const location = getLocationBySlug("sachse-tx")!;
  return <LocalServicePage location={location} />;
};

export default SachseTX;
