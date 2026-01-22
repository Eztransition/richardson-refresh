import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import Hero from "@/components/sections/Hero";
import PricingCards from "@/components/sections/PricingCards";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServiceArea from "@/components/sections/ServiceArea";
import ProhibitedItems from "@/components/sections/ProhibitedItems";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { useEffect } from "react";
import { LocationConfig } from "@/config/locations";

interface LocalServicePageProps {
  location: LocationConfig;
}

const LocalServicePage = ({ location }: LocalServicePageProps) => {
  useEffect(() => {
    // Update page title and meta for SEO
    document.title = location.metaTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", location.metaDescription);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero 
          location={location.name} 
          state={location.state} 
          description={location.heroDescription} 
        />
        <PricingCards location={location.name} />
        <Services location={location.name} state={location.state} />
        <WhyChooseUs location={location.name} />
        <ServiceArea 
          location={location.name} 
          description={location.serviceAreaDescription} 
        />
        <ProhibitedItems location={location.name} state={location.state} />
        <FAQSection location={location.name} />
        <FinalCTA location={location.name} state={location.state} />
      </main>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default LocalServicePage;
