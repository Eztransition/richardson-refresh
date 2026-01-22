import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const LancasterTX = () => {
  const location = getLocationBySlug("lancaster-tx")!;
  return <LocalServicePage location={location} />;
};

export default LancasterTX;
