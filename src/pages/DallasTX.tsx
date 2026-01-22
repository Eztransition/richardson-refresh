import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const DallasTX = () => {
  const location = getLocationBySlug("dallas-tx")!;
  return <LocalServicePage location={location} />;
};

export default DallasTX;
