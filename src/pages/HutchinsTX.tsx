import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const HutchinsTX = () => {
  const location = getLocationBySlug("hutchins-tx")!;
  return <LocalServicePage location={location} />;
};

export default HutchinsTX;
