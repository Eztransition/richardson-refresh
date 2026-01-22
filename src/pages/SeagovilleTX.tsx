import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const SeagovilleTX = () => {
  const location = getLocationBySlug("seagoville-tx")!;
  return <LocalServicePage location={location} />;
};

export default SeagovilleTX;
