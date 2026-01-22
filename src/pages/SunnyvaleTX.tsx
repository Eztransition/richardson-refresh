import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const SunnyvaleTX = () => {
  const location = getLocationBySlug("sunnyvale-tx")!;
  return <LocalServicePage location={location} />;
};

export default SunnyvaleTX;
