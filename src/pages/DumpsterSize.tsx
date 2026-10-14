import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import PricingCards from "@/components/sections/PricingCards";
import FinalCTA from "@/components/sections/FinalCTA";
import GoogleMap from "@/components/sections/GoogleMap";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Clock, Truck, Phone } from "lucide-react";
import { useEffect } from "react";
import { applyPageSeo } from "@/lib/seo";

const BOOKING_URL = "https://link.eztransition.com/booking/dallas-dumpster-rentals-mj6zf8sxcb";

const steps = [
  {
    icon: CalendarCheck,
    title: "Choose & Reserve",
    text: "Choose the perfect dumpster size for your project and reserve it easily online or with a quick call. We streamline the process, ensuring you get the right container exactly when you need it, so your project runs smoothly.",
  },
  {
    icon: Clock,
    title: "Fill at Your Pace",
    text: "Take your time loading the dumpster as your project progresses. Whether it's a quick cleanout or a lengthy renovation, you have the flexibility to fill the container at a pace that suits your schedule, without any pressure.",
  },
  {
    icon: Truck,
    title: "Swift Pickup & Disposal",
    text: "Once your dumpster is full, simply let us know, and we'll handle the rest. Our team will quickly pick up the dumpster and take care of all the disposal, ensuring your waste is managed responsibly and efficiently.",
  },
];

const DumpsterSize = () => {
  useEffect(() => {
    applyPageSeo({
      title: "Dumpster Sizes | Dallas Dumpster Rentals",
      description:
        "Compare 10, 15, and 20-yard roll-off dumpster sizes, dimensions, rental periods, and pricing. Book online or call (972) 645-6731.",
      path: "/dumpster-size",
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <LocalBusinessSchema location="Dallas" state="TX" />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/90 to-cyan-600 text-white">
          <div className="container mx-auto text-center">
            <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
                Dumpsters Sizes
              </h1>
              <p className="text-lg text-white/90">
                10, 15, and 20-yard roll-off dumpsters for residential and commercial projects in Dallas, TX and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold text-lg px-12 py-4 h-14 shadow-lg hover:shadow-xl transition-all"
                >
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book Now
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 text-white bg-white/20 hover:bg-white hover:text-primary font-heading font-semibold text-lg px-10 py-4 h-14 transition-all"
                >
                  <a href="tel:9726456731">
                    <Phone className="mr-2 h-6 w-6" />
                    Call (972) 645-6731
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services - Pricing */}
        <PricingCards location="Dallas" />

        {/* Guide */}
        <section className="py-16 lg:py-24 bg-brand-surface">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Affordable Dumpster Rentals in Dallas - Your Ultimate Guide
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dallas dumpster rentals provides 10, 15 and 20 yard roll off dumpsters to residential and commercial customers in Dallas,TX and surrounding areas. Whether it's a garage or basement cleanout, yard clean up, home remodel, new built home we have a dumpster to fit your needs. Our dumpster rentals are designed to make your project easy and affordable. We have the solution for any project you can imagine. We know that the most important thing to our customers is meeting their project deadlines, and we are here to help you. We pride ourselves on outstanding customer service and will do what it takes to help our customers be successful. Give us a call today so we can help you with your next project.
              </p>
            </div>
          </div>
        </section>

        {/* 3 Easy Steps */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                How to Rent Our Dumpsters In 3 Easy Steps
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="text-center p-6 animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map */}
        <GoogleMap location="Dallas" />

        {/* Final CTA */}
        <FinalCTA location="Dallas" state="TX" />
      </main>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default DumpsterSize;
