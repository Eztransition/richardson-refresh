import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://link.eztransition.com/booking/dallas-dumpster-rentals-mj6zf8sxcb";

const MobileStickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-brand-dark/95 backdrop-blur-xs border-t border-brand-gray/30 p-3 safe-area-pb">
      <div className="flex gap-3">
        <Button
          asChild
          className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold text-lg py-4 h-14 shadow-lg"
        >
          <a href={BOOKING_URL}>Book Now</a>
        </Button>
        <Button
          asChild
          className="flex-1 bg-white hover:bg-white/90 text-secondary-foreground font-heading font-semibold text-lg py-4 h-14 shadow-lg"
        >
          <a href="tel:9726456731">
            <Phone className="mr-2 h-6 w-6" />
            Call Now
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MobileStickyCTA;