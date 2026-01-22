import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const GarlandTX = () => {
  const location = getLocationBySlug("garland-tx")!;
  return <LocalServicePage location={location} />;
};

export default GarlandTX;
