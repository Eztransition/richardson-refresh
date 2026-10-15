import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const RoyseCityTX = () => {
  const location = getLocationBySlug("royse-city-tx")!;
  return <LocalServicePage location={location} />;
};

export default RoyseCityTX;
