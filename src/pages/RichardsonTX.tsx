import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const RichardsonTX = () => {
  const location = getLocationBySlug("richardson-tx")!;
  return <LocalServicePage location={location} />;
};

export default RichardsonTX;
