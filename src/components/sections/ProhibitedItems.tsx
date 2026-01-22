import { AlertTriangle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const prohibitedItems = [
  "Chemicals",
  "Paints & solvents",
  "Propane tanks",
  "Oils & lubricants",
  "Batteries",
  "Tires",
  "Asbestos",
  "All liquids",
];

interface ProhibitedItemsProps {
  location?: string;
  state?: string;
}

const ProhibitedItems = ({ location = "Richardson", state = "TX" }: ProhibitedItemsProps) => {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-surface border border-border rounded-xl p-6 lg:p-8 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="h-7 w-7 text-destructive" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {location} Dumpster Rental: Acceptable & Prohibited Items
                </h3>
                <p className="text-muted-foreground mb-4">
                  For safety and environmental compliance in {location}, {state}, certain items cannot be placed in our dumpsters. Hazardous materials and liquids are strictly prohibited.
                </p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-foreground mb-3">Common prohibited items include:</p>
                  <div className="flex flex-wrap gap-2">
                    {prohibitedItems.map((item) => (
                      <span
                        key={item}
                        className="inline-block bg-destructive/5 text-destructive/80 px-3 py-1 rounded-md text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <Button asChild variant="outline" className="text-foreground hover:text-primary">
                  <a
                    href="https://dallas-dumpster.com/acceptable-prohibited-items/"
                    className="inline-flex items-center gap-2"
                  >
                    View Full List
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProhibitedItems;
