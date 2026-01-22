import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const WylieTX = () => {
  const location = getLocationBySlug("wylie-tx")!;
  return <LocalServicePage location={location} />;
};

export default WylieTX;
