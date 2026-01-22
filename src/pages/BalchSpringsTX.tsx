import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const BalchSpringsTX = () => {
  const location = getLocationBySlug("balch-springs-tx")!;
  return <LocalServicePage location={location} />;
};

export default BalchSpringsTX;
