import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import RichardsonTX from "./pages/RichardsonTX";
import DallasTX from "./pages/DallasTX";
import ForneyTX from "./pages/ForneyTX";
import RowlettTX from "./pages/RowlettTX";
import PlanoTX from "./pages/PlanoTX";
import RockwallTX from "./pages/RockwallTX";
import AllenTX from "./pages/AllenTX";
import CedarHillTX from "./pages/CedarHillTX";
import BalchSpringsTX from "./pages/BalchSpringsTX";
import SunnyvaleTX from "./pages/SunnyvaleTX";
import WylieTX from "./pages/WylieTX";
import SeagovilleTX from "./pages/SeagovilleTX";
import HutchinsTX from "./pages/HutchinsTX";
import MurphyTX from "./pages/MurphyTX";
import LancasterTX from "./pages/LancasterTX";
import SachseTX from "./pages/SachseTX";
import AddisonTX from "./pages/AddisonTX";
import GarlandTX from "./pages/GarlandTX";
import HighlandParkTX from "./pages/HighlandParkTX";
import UniversityParkTX from "./pages/UniversityParkTX";
import DeSotoTX from "./pages/DeSotoTX";
import DuncanvilleTX from "./pages/DuncanvilleTX";
import ServiceArea from "./pages/ServiceArea";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<ServiceArea />} />
          <Route path="/dumpster-rental-richardson-tx" element={<RichardsonTX />} />
          <Route path="/dumpster-rental-dallas-tx" element={<DallasTX />} />
          <Route path="/dumpster-rental-forney-tx" element={<ForneyTX />} />
          <Route path="/dumpster-rental-rowlett-tx" element={<RowlettTX />} />
          <Route path="/dumpster-rental-plano-tx" element={<PlanoTX />} />
          <Route path="/dumpster-rental-rockwall-tx" element={<RockwallTX />} />
          <Route path="/dumpster-rental-allen-tx" element={<AllenTX />} />
          <Route path="/dumpster-rental-cedar-hill-tx" element={<CedarHillTX />} />
          <Route path="/dumpster-rental-balch-springs-tx" element={<BalchSpringsTX />} />
          <Route path="/dumpster-rental-sunnyvale-tx" element={<SunnyvaleTX />} />
          <Route path="/dumpster-rental-wylie-tx" element={<WylieTX />} />
          <Route path="/dumpster-rental-seagoville-tx" element={<SeagovilleTX />} />
          <Route path="/dumpster-rental-hutchins-tx" element={<HutchinsTX />} />
          <Route path="/dumpster-rental-murphy-tx" element={<MurphyTX />} />
          <Route path="/dumpster-rental-lancaster-tx" element={<LancasterTX />} />
          <Route path="/dumpster-rental-sachse-tx" element={<SachseTX />} />
          <Route path="/dumpster-rental-addison-tx" element={<AddisonTX />} />
          <Route path="/dumpster-rental-garland-tx" element={<GarlandTX />} />
          <Route path="/dumpster-rental-highland-park-tx" element={<HighlandParkTX />} />
          <Route path="/dumpster-rental-university-park-tx" element={<UniversityParkTX />} />
          <Route path="/dumpster-rental-desoto-tx" element={<DeSotoTX />} />
          <Route path="/dumpster-rental-duncanville-tx" element={<DuncanvilleTX />} />
          <Route path="/service-area" element={<ServiceArea />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
