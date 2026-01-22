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

const RichardsonTX = () => {
  useEffect(() => {
    // Update page title and meta for SEO
    document.title = "Dumpster Rental Richardson TX | Dallas Dumpster Rentals";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Book 10, 15, or 20-yard roll-off dumpsters in Richardson, TX. Fast delivery, easy online booking, transparent pricing. Call 972-645-6731.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pb-16 lg:pb-0">
        <Hero />
        <PricingCards />
        <Services />
        <WhyChooseUs />
        <ServiceArea />
        <ProhibitedItems />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default RichardsonTX;