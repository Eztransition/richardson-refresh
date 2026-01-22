import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const RowlettTX = () => {
  const location = getLocationBySlug("rowlett-tx")!;
  return <LocalServicePage location={location} />;
};

export default RowlettTX;
