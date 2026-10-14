import { useEffect } from "react";
import { Check } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SizeHero, RentalSteps, bookButtonClass } from "@/components/sizes/SizePageParts";
import { BOOKING_URL, getDumpsterSizePage, type DumpsterSizePage } from "@/config/dumpster-sizes";
import { applyPageSeo } from "@/lib/seo";

interface Props {
  slug: DumpsterSizePage["slug"];
}

const DumpsterSizeDetail = ({ slug }: Props) => {
  const page = getDumpsterSizePage(slug);

  useEffect(() => {
    applyPageSeo({ title: page.seo.title, description: page.seo.description, path: `/${page.slug}/` });
  }, [page]);

  const specs = [
    { label: "Size", value: page.size },
    { label: "Days", value: page.days },
    { label: "Rent Time Extension", value: page.extension },
    { label: "Ton(s)", value: page.tons },
    { label: "Extra Weight", value: page.extraWeight },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SizeHero eyebrow="Dumpsters Size" title={page.title} variant="call" />

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="rounded-xl overflow-hidden border border-border shadow-card bg-background animate-fade-in">
                <img src={page.image} alt={page.imageAlt} className="w-full h-auto" />
              </div>

              <Card className="border-2 border-secondary shadow-lg ring-2 ring-secondary/20 animate-fade-in">
                <CardContent className="p-6 lg:p-8 space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground">
                    Price : <span className="text-primary">{page.price}</span>
                  </h2>
                  <ul className="space-y-3">
                    {specs.map((s) => (
                      <li key={s.label} className="flex items-start gap-3 text-base">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">
                          <span className="font-semibold">{s.label}:</span> {s.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className={`w-full ${bookButtonClass}`}>
                    <a href={BOOKING_URL}>Book Now</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Description</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{page.description}</p>
            </div>
          </div>
        </section>

        <RentalSteps />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default DumpsterSizeDetail;
