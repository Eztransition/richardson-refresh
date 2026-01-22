import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const RockwallTX = () => {
  const location = getLocationBySlug("rockwall-tx")!;
  return <LocalServicePage location={location} />;
};

export default RockwallTX;
