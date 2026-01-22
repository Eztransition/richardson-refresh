import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const AddisonTX = () => {
  const location = getLocationBySlug("addison-tx")!;
  return <LocalServicePage location={location} />;
};

export default AddisonTX;
