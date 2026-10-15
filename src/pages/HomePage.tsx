import { Link } from "@tanstack/react-router";
import { CalendarCheck, Check, MessageSquareText, Truck, ShieldCheck, Wallet, CalendarRange, MapPin } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import GoogleMap from "@/components/sections/GoogleMap";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { FaqAccordion } from "@/components/site/PageShell";
import { SizeHero, bookButtonClass } from "@/components/sizes/SizePageParts";
import { BOOKING_URL, dumpsterSizePages } from "@/config/dumpster-sizes";
import { ReviewsWidget } from "@/components/site/ReviewsWidget";
import { galleryPage } from "@/config/site-pages";
import { homePage as hp, homeFaqs } from "@/config/home-page";
import { locations } from "@/config/locations";

const h2 = "text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground";
const featureIcons = [CalendarCheck, MessageSquareText, Truck];
const whyIcons = [ShieldCheck, Wallet, CalendarRange];

const normalize = (n: string) =>
  n.toLowerCase().replace("rock wall", "rockwall").replace(/\b\w/g, (c) => c.toUpperCase());

const HomePage = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <SizeHero eyebrow={hp.subHeading} title={hp.heading} variant="book" />

      {/* Feature bar */}
      <section className="relative z-10 -mt-10">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-3 gap-4 bg-background rounded-2xl shadow-card border border-border p-6">
            {hp.features.map((f, i) => {
              const Icon = featureIcons[i] ?? Check;
              return (
                <div key={f.title} className="flex items-center gap-4 justify-center sm:justify-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto">
          <h2 className={`${h2} text-center mb-12`}>{hp.servicesHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {dumpsterSizePages.map((d) => (
              <Card key={d.slug} className="overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all flex flex-col">
                <div className="aspect-[719/393] bg-muted overflow-hidden">
                  <img src={d.image} alt={d.imageAlt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <CardHeader className="pb-4">
                  <h3 className="text-xl font-heading font-bold text-foreground">{d.title}</h3>
                  <span className="pt-2 text-4xl lg:text-5xl font-heading font-bold text-primary">{d.overview.price}</span>
                </CardHeader>
                <CardContent className="space-y-3 flex-1 text-sm">
                  {[
                    ["Dimensions", d.overview.dimensions],
                    ["Rental Time", d.overview.rentalTime],
                    [d.overview.includedHeading, d.overview.includedText],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground"><span className="font-semibold">{k}:</span> {v}</span>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-border space-y-1 text-muted-foreground">
                    <p><strong>Additional Days:</strong> {d.overview.additionalDays}</p>
                    <p><strong>Extra Weight:</strong> {d.overview.extraWeight}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 pt-4">
                  <Button asChild className={`w-full ${bookButtonClass}`}>
                    <a href={BOOKING_URL}>Book Now</a>
                  </Button>
                  <Button asChild variant="ghost" className="w-full text-muted-foreground hover:text-foreground text-base h-12">
                    <Link to={`/${d.slug}` as const}>More Info →</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24 bg-brand-surface">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className={`${h2} mb-6 capitalize`}>{hp.introHeading}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{hp.intro}</p>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto">
          <h2 className={`${h2} text-center mb-12`}>{hp.whyHeading}</h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {hp.why.map((w, i) => {
              const Icon = whyIcons[i] ?? ShieldCheck;
              return (
                <div key={w.title} className="bg-background rounded-xl p-8 border border-border shadow-card">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">{w.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{w.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 lg:py-24 bg-brand-surface">
        <div className="container mx-auto">
          <h2 className={`${h2} text-center mb-3`}>{hp.reviewsHeading}</h2>
          <p className="text-center text-muted-foreground mb-12">{hp.reviewsSub}</p>
          <ReviewsWidget />
        </div>
      </section>

      {/* Order band */}
      <section className="py-12 bg-gradient-to-br from-primary via-primary/90 to-primary/70">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">{hp.orderHeading}</h2>
          <Button asChild size="lg" className={bookButtonClass}>
            <a href={BOOKING_URL}>Book Now</a>
          </Button>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto">
          <h2 className={`${h2} text-center mb-3`}>{hp.areaHeading}</h2>
          <p className="text-center text-muted-foreground mb-10">{hp.areaSub}</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {hp.areas.map((a) => {
              const loc = locations.find((l) => l.name.toLowerCase() === normalize(a).toLowerCase());
              const inner = (
                <>
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span>{a}</span>
                </>
              );
              const cls = "flex items-center gap-2 rounded-lg border border-border bg-brand-surface px-4 py-3 text-foreground font-medium";
              return (
                <li key={a}>
                  {loc ? (
                    <a href={`/dumpster-rental-${loc.slug}`} className={`${cls} hover:border-primary/40 hover:text-primary transition-colors`}>{inner}</a>
                  ) : (
                    <span className={cls}>{inner}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-brand-surface">
        <div className="container mx-auto max-w-3xl">
          <h2 className={`${h2} text-center mb-10`}>{hp.faqHeading}</h2>
          <FaqAccordion items={homeFaqs} />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto">
          <h2 className={`${h2} text-center mb-10`}>{hp.galleryHeading}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPage.images.slice(0, 8).map((img) => (
              <div key={img.src} className="overflow-hidden rounded-xl shadow-card">
                <img src={img.src} alt={img.alt} loading="lazy" className="aspect-square w-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoogleMap location="Dallas" />
    </main>
    <Footer />
    <MobileStickyCTA />
  </div>
);

export default HomePage;
