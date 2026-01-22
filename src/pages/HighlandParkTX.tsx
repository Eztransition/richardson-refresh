import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const HighlandParkTX = () => {
  const location = getLocationBySlug("highland-park-tx")!;
  return <LocalServicePage location={location} />;
};

export default HighlandParkTX;
