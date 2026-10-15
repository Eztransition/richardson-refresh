import { Phone, CalendarCheck, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/richardson-hero.jpg";
import { BOOKING_URL, rentalSteps } from "@/config/dumpster-sizes";
import { wpImage } from "@/lib/wp-images";

export const bookButtonClass =
  "bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold text-lg px-12 py-4 h-14 shadow-lg hover:shadow-xl transition-all";

interface SizeHeroProps {
  eyebrow?: string;
  title: string;
  /** Short line shown under the H1, above the CTA. */
  description?: string | undefined;
  backgroundImage?: string | undefined;
  /** Show "Book Now" (overview page) or "Call Us Now" (detail pages), matching the source page. */
  variant: "book" | "call";
}

export const SizeHero = ({ eyebrow, title, description, variant, backgroundImage = heroImage }: SizeHeroProps) => (
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
        <h1
          className={`text-3xl md:text-5xl lg:text-6xl font-heading font-bold animate-fade-in ${
            description ? "mb-5" : "mb-8"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/85 animate-fade-in md:text-lg">
            {description}
          </p>
        )}
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

interface RentalStepsProps {
  /** Photo behind the section; defaults to the same image as the About "Why Choose" band. */
  backgroundImage?: string;
}

export const RentalSteps = ({ backgroundImage = wpImage("about-why-background.jpg") }: RentalStepsProps) => (
  <section
    aria-labelledby="rental-steps-heading"
    className="relative isolate overflow-hidden bg-brand-dark py-16 lg:py-24"
  >
    <img
      src={backgroundImage}
      alt=""
      loading="lazy"
      className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
    />
    <div className="absolute inset-0 -z-10 bg-brand-dark/75" />
    <div className="container mx-auto">
      <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
        <span aria-hidden="true" className="mx-auto mb-6 block h-1 w-12 rounded-full bg-secondary" />
        <h2
          id="rental-steps-heading"
          className="font-heading text-3xl font-bold leading-tight tracking-normal text-primary-foreground md:text-4xl lg:text-5xl"
        >
          {rentalSteps.heading}
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
        {rentalSteps.steps.map((step, i) => {
          const Icon = stepIcons[i] ?? Truck;
          return (
            <div
              key={step.title}
              className="relative overflow-hidden rounded-lg border border-primary-foreground/20 bg-card p-7 shadow-elevated lg:p-9"
            >
              <div className="mb-7 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-primary/15 bg-primary/10">
                  <Icon aria-hidden="true" strokeWidth={1.75} className="h-7 w-7 text-brand-cyan-dark" />
                </div>
                <span className="font-heading text-sm font-bold uppercase tracking-normal text-muted-foreground">
                  Step {i + 1}
                </span>
              </div>
              <h3 className="mb-4 font-heading text-xl font-bold leading-snug tracking-normal text-card-foreground">
                {step.title}
              </h3>
              <p className="text-base leading-7 text-muted-foreground">{step.text}</p>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-secondary" />
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
