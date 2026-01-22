import LocalServicePage from "@/components/LocalServicePage";
import { getLocationBySlug } from "@/config/locations";

const PlanoTX = () => {
  const location = getLocationBySlug("plano-tx")!;
  return <LocalServicePage location={location} />;
};

export default PlanoTX;
