import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const AllenTX = () => {
  const location = getLocationBySlug("allen-tx")!;
  return <LocalServicePage location={location} />;
};

export default AllenTX;
