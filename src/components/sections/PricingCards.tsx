import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";

import dumpster10Yard from "@/assets/dumpster-10-yard.jpg";
import dumpster15Yard from "@/assets/dumpster-15-yard.jpg";
import dumpster20Yard from "@/assets/dumpster-20-yard.jpg";

const BOOKING_URL = "https://link.eztransition.com/booking/dallas-dumpster-rentals-mj6zf8sxcb";
const moreInfoPath = (size: string) =>
  `/${size.toLowerCase()}-dumpster-rentals` as "/10-yard-dumpster-rentals" | "/15-yard-dumpster-rentals" | "/20-yard-dumpster-rentals";

interface DumpsterOption {
  size: string;
  price: string;
  dimensions: string;
  rentalTime: string;
  includedWeight: string;
  additionalDays: string;
  extraWeight: string;
  bestFor: string;
  popular?: boolean;
}

const dumpsters: DumpsterOption[] = [
  {
    size: "10-Yard",
    price: "$355.00",
    dimensions: "14'L x 7'W x 4'H",
    rentalTime: "1–3 Day Rental",
    includedWeight: "2,000 lbs included",
    additionalDays: "$20/day",
    extraWeight: "$45 per 1,000 lbs",
    bestFor: "Perfect for small cleanouts & yard debris",
  },
  {
    size: "15-Yard",
    price: "$365.00",
    dimensions: "14'L x 7'W x 4'H",
    rentalTime: "1–4 Day Rental",
    includedWeight: "2,000 lbs included",
    additionalDays: "$20/day",
    extraWeight: "$45 per 1,000 lbs",
    bestFor: "Ideal for medium cleanouts & light remodels",
  },
  {
    size: "20-Yard",
    price: "$435.00",
    dimensions: "14'L x 7'W x 5'H",
    rentalTime: "1–5 Day Rental",
    includedWeight: "4,000 lbs included",
    additionalDays: "$20/day",
    extraWeight: "$45 per 1,000 lbs",
    bestFor: "Great for renovations, roofing & construction",
    popular: true,
  },
];

const sizeGuide = [
  { size: "10-yard", use: "Small cleanouts, yard debris, minor garage decluttering", image: dumpster10Yard },
  { size: "15-yard", use: "Medium cleanouts, light remodel waste, small roofing jobs", image: dumpster15Yard },
  { size: "20-yard", use: "Major renovations, roofing, construction debris removal", image: dumpster20Yard },
];

interface PricingCardsProps {
  location?: string;
}

const PricingCards = ({ location = "Richardson" }: PricingCardsProps) => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Right Size, Right Price
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect roll-off dumpster for your {location} project. All prices include delivery, pickup, and disposal.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {dumpsters.map((dumpster, index) => (
            <Card
              key={dumpster.size}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-card-hover animate-fade-in ${
                dumpster.popular
                  ? "border-2 border-secondary shadow-lg ring-2 ring-secondary/20"
                  : "border border-border shadow-card hover:border-primary/30"
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {dumpster.popular && (
                <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground font-semibold">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Most Popular
                </Badge>
              )}

              <CardHeader className="pb-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    {dumpster.size} Dumpster
                  </h3>
                  <p className="text-sm text-muted-foreground">{dumpster.bestFor}</p>
                </div>
                <div className="pt-4">
                  <span className="text-4xl lg:text-5xl font-heading font-bold text-primary">
                    {dumpster.price}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-foreground">Dimensions: {dumpster.dimensions}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{dumpster.rentalTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{dumpster.includedWeight}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border space-y-1 text-sm text-muted-foreground">
                  <p>Additional Days: {dumpster.additionalDays}</p>
                  <p>Extra Weight: {dumpster.extraWeight}</p>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-3 pt-4">
                <Button
                  asChild
                  className={`w-full font-heading font-semibold text-lg py-4 h-14 ${
                    dumpster.popular
                      ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                >
                  <a href={BOOKING_URL}>Book Now</a>
                </Button>
                <Button asChild variant="ghost" className="w-full text-muted-foreground hover:text-foreground text-base py-3 h-12">
                  <Link to={moreInfoPath(dumpster.size)}>More Info →</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Size Helper Module */}
        <div className="bg-brand-surface rounded-xl p-6 lg:p-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-xl font-heading font-bold text-foreground mb-4">
            Quick Size Guide for {location} Projects
          </h3>
          <p className="text-muted-foreground mb-6">
            Not sure which size fits your {location} home project? Here's a quick breakdown based on typical jobs in the area—from garage decluttering to full home renovations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sizeGuide.map((guide) => (
              <div
                key={guide.size}
                className="bg-background rounded-lg p-4 border border-border"
              >
                <img 
                  src={guide.image} 
                  alt={`${guide.size} dumpster dimensions`}
                  className="w-full h-auto mb-3"
                />
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-heading font-semibold text-sm rounded-full mb-2">
                  {guide.size}
                </span>
                <p className="text-sm text-muted-foreground">{guide.use}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
