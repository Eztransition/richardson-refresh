import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const UniversityParkTX = () => {
  const location = getLocationBySlug("university-park-tx")!;
  return <LocalServicePage location={location} />;
};

export default UniversityParkTX;
