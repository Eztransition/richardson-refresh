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
import GoogleMap from "@/components/sections/GoogleMap";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { useEffect } from "react";
import { LocationConfig } from "@/config/locations";
import { applyPageSeo, setJsonLd, removeJsonLd } from "@/lib/seo";
import { getLocationFaqs } from "@/lib/faqs";

interface LocalServicePageProps {
  location: LocationConfig;
}

const LocalServicePage = ({ location }: LocalServicePageProps) => {
  useEffect(() => {
    applyPageSeo({
      title: location.metaTitle,
      description: location.metaDescription,
      path: `/dumpster-rental-${location.slug}`,
    });

    const faqs = getLocationFaqs(location.name);
    setJsonLd("faq-jsonld", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });

    return () => removeJsonLd("faq-jsonld");
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <LocalBusinessSchema location={location.name} state={location.state} />
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
        <GoogleMap location={location.name} />
        <FinalCTA location={location.name} state={location.state} />
      </main>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default LocalServicePage;
