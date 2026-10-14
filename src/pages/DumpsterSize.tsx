import { useEffect } from "react";
import { Check } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { SizeHero, RentalSteps, bookButtonClass } from "@/components/sizes/SizePageParts";
import { BOOKING_URL, dumpsterSizeOverview as ov, dumpsterSizePages } from "@/config/dumpster-sizes";
import { applyPageSeo } from "@/lib/seo";

const DumpsterSize = () => {
  useEffect(() => {
    applyPageSeo({ title: ov.seo.title, description: ov.seo.description, path: "/dumpster-size/" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SizeHero title={ov.heading} variant="book" />

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground text-center mb-12">
              {ov.servicesHeading}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {dumpsterSizePages.map((d, index) => (
                <Card
                  key={d.slug}
                  className="relative overflow-hidden border border-border shadow-card hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 animate-fade-in flex flex-col"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="aspect-[719/393] bg-muted overflow-hidden">
                    <img src={d.image} alt={d.imageAlt} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <CardHeader className="pb-4">
                    <h3 className="text-xl font-heading font-bold text-foreground">{d.title}</h3>
                    <span className="pt-2 text-4xl lg:text-5xl font-heading font-bold text-primary">
                      {d.overview.price}
                    </span>
                  </CardHeader>
                  <CardContent className="space-y-3 flex-1">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><span className="font-semibold">Dimensions:</span> {d.overview.dimensions}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><span className="font-semibold">Rental Time:</span> {d.overview.rentalTime}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground"><span className="font-semibold">{d.overview.includedHeading}:</span> {d.overview.includedText}</span>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-border space-y-1 text-sm text-muted-foreground">
                      <p><strong>Additional Days:</strong> {d.overview.additionalDays}</p>
                      <p><strong>Extra Weight:</strong> {d.overview.extraWeight}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-3 pt-4">
                    <Button asChild className={`w-full ${bookButtonClass}`}>
                      <a href={BOOKING_URL}>Book Now</a>
                    </Button>
                    <Button asChild variant="ghost" className="w-full text-muted-foreground hover:text-foreground text-base py-3 h-12">
                      <Link to={`/${d.slug}`}>More Info →</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-brand-surface">
          <div className="container mx-auto max-w-4xl space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{ov.guideHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{ov.guideText}</p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 capitalize">{ov.howToHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{ov.howToText}</p>
            </div>
          </div>
        </section>

        <div className="bg-background"><RentalSteps /></div>
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default DumpsterSize;
