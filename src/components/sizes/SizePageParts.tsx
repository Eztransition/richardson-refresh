import { Phone, CalendarCheck, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/richardson-hero.jpg";
import { BOOKING_URL, rentalSteps } from "@/config/dumpster-sizes";

export const bookButtonClass =
  "bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold text-lg px-12 py-4 h-14 shadow-lg hover:shadow-xl transition-all";

interface SizeHeroProps {
  eyebrow?: string;
  title: string;
  backgroundImage?: string | undefined;
  /** Show "Book Now" (overview page) or "Call Us Now" (detail pages), matching the source page. */
  variant: "book" | "call";
}

export const SizeHero = ({ eyebrow, title, variant, backgroundImage = heroImage }: SizeHeroProps) => (
  <section className="relative min-h-[380px] md:min-h-[460px] flex items-center">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
    <div className="container mx-auto px-4 relative z-10 py-16 md:py-20">
      <div className="max-w-3xl mx-auto text-center text-white">
        {eyebrow && (
          <p className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-heading font-semibold uppercase tracking-wide animate-fade-in">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 animate-fade-in">
          {title}
        </h1>
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {variant === "book" ? (
            <Button asChild size="lg" className={bookButtonClass}>
              <a href={BOOKING_URL}>Book Now</a>
            </Button>
          ) : (
            <Button
              asChild
              size="lg"
              className="bg-white text-secondary-foreground hover:bg-white/90 font-heading font-semibold text-lg px-10 py-4 h-14 shadow-lg transition-all"
            >
              <a href="tel:9726456731">
                <Phone className="mr-2 h-6 w-6" />
                Call Us Now: 972-645-6731
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  </section>
);

const stepIcons = [CalendarCheck, Package, Truck];

export const RentalSteps = ({ tinted = true }: { tinted?: boolean }) => (
  <section className={`py-16 lg:py-24 ${tinted ? "bg-brand-surface" : "bg-background"}`}>
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
        {rentalSteps.heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {rentalSteps.steps.map((step, i) => {
          const Icon = stepIcons[i] ?? Truck;
          return (
            <div
              key={step.title}
              className="relative bg-background rounded-xl p-6 lg:p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <span className="text-sm font-heading font-semibold text-muted-foreground">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
