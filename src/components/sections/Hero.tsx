import { Phone, Calendar, DollarSign, Clock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/richardson-hero.jpg";

const trustItems = [
  { icon: Calendar, label: "Online booking" },
  { icon: DollarSign, label: "Transparent pricing" },
  { icon: Clock, label: "Flexible rental days" },
  { icon: Truck, label: "Fast pickup on request" },
];

const BOOKING_URL = "https://link.eztransition.com/booking/dallas-dumpster-rentals-mj6zf8sxcb";

const Hero = () => {
  return (
    <section className="relative bg-brand-surface overflow-hidden">
      <div className="container mx-auto py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
              Dumpster Rental in{" "}
              <span className="text-primary">Richardson, TX</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Fast, reliable roll-off dumpster delivery for your Richardson home cleanouts, remodeling projects, and construction sites. Book online in minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold text-lg px-12 py-4 h-14 shadow-lg hover:shadow-xl transition-all"
              >
                <a href={BOOKING_URL}>Book Now</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-semibold text-lg px-10 py-4 h-14 transition-all"
              >
                <a href="tel:9726456731">
                  <Phone className="mr-2 h-6 w-6" />
                  Call (972) 645-6731
                </a>
              </Button>
            </div>

            {/* Trust Bar */}
            <div className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {trustItems.map((item, index) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Dumpster delivery in Richardson, TX"
                className="w-full h-auto object-cover aspect-[16/10]"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;