import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const DeSotoTX = () => {
  const location = getLocationBySlug("desoto-tx")!;
  return <LocalServicePage location={location} />;
};

export default DeSotoTX;
