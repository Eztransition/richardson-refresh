import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const ForneyTX = () => {
  const location = getLocationBySlug("forney-tx")!;
  return <LocalServicePage location={location} />;
};

export default ForneyTX;
