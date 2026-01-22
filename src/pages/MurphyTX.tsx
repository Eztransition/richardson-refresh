import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const MurphyTX = () => {
  const location = getLocationBySlug("murphy-tx")!;
  return <LocalServicePage location={location} />;
};

export default MurphyTX;
