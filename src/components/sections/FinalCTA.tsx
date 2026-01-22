import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://link.eztransition.com/booking/dallas-dumpster-rentals-mj6zf8sxcb";

const FinalCTA = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-primary via-primary/90 to-cyan-600 text-white">
      <div className="container mx-auto text-center">
        <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            Book Your Richardson Dumpster Rental Today
          </h2>
          <p className="text-lg text-white/90">
            Fast delivery, transparent pricing, and easy online booking. Get your roll-off dumpster in Richardson, TX—reserve yours now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold text-base px-10 shadow-lg hover:shadow-xl transition-all"
            >
              <a href={BOOKING_URL}>Book Now</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white/20 text-white bg-white/20 hover:bg-white hover:text-primary font-heading font-semibold text-base px-8 transition-all"
            >
              <a href="tel:9726456731">
                <Phone className="mr-2 h-5 w-5" />
                Call (972) 645-6731
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;