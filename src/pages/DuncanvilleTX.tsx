import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const DuncanvilleTX = () => {
  const location = getLocationBySlug("duncanville-tx")!;
  return <LocalServicePage location={location} />;
};

export default DuncanvilleTX;
