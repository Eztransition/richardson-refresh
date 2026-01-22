import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const CedarHillTX = () => {
  const location = getLocationBySlug("cedar-hill-tx")!;
  return <LocalServicePage location={location} />;
};

export default CedarHillTX;
