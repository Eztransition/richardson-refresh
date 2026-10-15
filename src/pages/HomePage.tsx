import { Link } from "@tanstack/react-router";
import { CalendarCheck, Check, MessageSquareText, Truck, ShieldCheck, Wallet, CalendarRange, MapPin, Star, BadgeCheck } from "lucide-react";
import { GoogleMark } from "@/components/site/GoogleMark";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import heroImage from "@/assets/richardson-hero.jpg";
import { bookButtonClass } from "@/components/sizes/SizePageParts";
import { BOOKING_URL, dumpsterSizePages } from "@/config/dumpster-sizes";
import { ReviewsWidget } from "@/components/site/ReviewsWidget";
import { homePage as hp } from "@/config/home-page";
import { wpImage } from "@/lib/wp-images";
import { locations } from "@/config/locations";

const h2 = "text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground";
const featureIcons = [CalendarCheck, Truck, MessageSquareText];
const whyIcons = [ShieldCheck, Wallet, CalendarRange, CalendarCheck];
const eyebrow = "text-sm font-heading font-semibold text-primary uppercase mb-3 text-center";
const sub = "text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-10 leading-relaxed";

const normalize = (n: string) =>
  n.toLowerCase().replace("rock wall", "rockwall").replace(/\b\w/g, (c) => c.toUpperCase());

const HomePage = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <section className="relative flex items-center bg-brand-dark text-primary-foreground">
        <img src={heroImage} alt="Dallas Dumpster Rentals roll-off dumpster on a residential driveway" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-brand-dark/75" />
        <div className="container relative z-10 py-10 md:py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 text-sm font-heading font-semibold">{hp.subHeading}</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 md:mb-6 leading-tight">{hp.heading}</h1>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6 md:mb-8">{hp.description}</p>
            <div className="mt-6 flex flex-col items-center gap-4 md:mt-8 md:gap-6">
              <div className="order-2 flex w-full flex-col items-stretch justify-center gap-3 sm:order-1 sm:w-auto sm:flex-row sm:items-center md:gap-4">
                <Button asChild size="lg" className={bookButtonClass}><a href={BOOKING_URL}>Book a Dumpster</a></Button>
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 font-heading font-semibold text-lg px-10 h-14 shadow-lg"><Link to="/dumpster-size">View Sizes</Link></Button>
              </div>
              <div className="order-1 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2.5 backdrop-blur-md sm:order-2 md:gap-x-5 md:px-6 md:py-3">
                <span className="flex items-center gap-2 md:gap-2.5">
                  <GoogleMark className="h-5 w-5 shrink-0 md:h-6 md:w-6" />
                  <span className="font-heading text-sm font-semibold md:text-lg">{hp.reviewsLine}</span>
                </span>
                <span className="flex items-center gap-0.5 md:gap-1" role="img" aria-label="Rated 5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} aria-hidden="true" className="h-4 w-4 fill-secondary text-secondary md:h-5 md:w-5" />
                  ))}
                </span>
                <span className="flex items-center gap-1 font-heading text-xs font-semibold md:gap-1.5 md:text-base">
                  <BadgeCheck aria-hidden="true" className="h-4 w-4 text-primary md:h-5 md:w-5" />
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature bar */}
      <section className="relative z-10 pt-12">
        <div className="container mx-auto">
          <h2 className={`${h2} text-center mb-8`}>{hp.howHeading}</h2>
          <div className="grid sm:grid-cols-3 gap-6 bg-background rounded-2xl shadow-card border border-border p-6">
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
          <p className={eyebrow}>{hp.servicesEyebrow}</p>
          <h2 className={`${h2} text-center mb-4`}>{hp.servicesHeading}</h2>
          <p className={sub}>{hp.servicesSub}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {dumpsterSizePages.map((d) => (
              <Card key={d.slug} className="overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all flex flex-col">
                <div className="aspect-[719/393] bg-muted overflow-hidden">
                  <img src={d.image} alt={d.imageAlt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <CardHeader className="pb-4">
                  <h3 className="text-xl font-heading font-bold text-foreground">{d.title.replace("Rentals", "Rental")}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{hp.sizeDescriptions[d.slug]}</p>
                  <span className="pt-2 text-4xl lg:text-5xl font-heading font-bold text-primary">{d.overview.price.replace(".00", "")}</span>
                </CardHeader>
                <CardContent className="space-y-3 flex-1 text-sm">
                  {[
                    ["Dimensions", d.overview.dimensions.replaceAll("’", "'").replaceAll(" x ", " × ")],
                    ["Rental Period", d.overview.rentalTime.replace(/1-(\d) Day Rental/, "1–$1 Days")],
                    ["Included Weight", d.overview.includedText.replace("Ibs. included", "lbs")],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground"><span className="font-semibold">{k}:</span> {v}</span>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-border space-y-1 text-muted-foreground">
                    <p><strong>Additional Days:</strong> {d.overview.additionalDays}</p>
                    <p><strong>Extra Weight:</strong> {d.overview.extraWeight.replace("/1000", "/1,000")}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 pt-4">
                  <Button asChild className={`w-full ${bookButtonClass}`}>
                    <a href={BOOKING_URL}>Book Now</a>
                  </Button>
                  <Button asChild variant="ghost" className="w-full text-muted-foreground hover:text-foreground text-base h-12">
                    <Link to={`/${d.slug}` as const}>More Details</Link>
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
          <p className={eyebrow}>{hp.introEyebrow}</p>
          <h2 className={`${h2} mb-6`}>{hp.introHeading}</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">{hp.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          <Button asChild className={`mt-8 ${bookButtonClass}`}><Link to="/about-us">More About Us</Link></Button>
        </div>
      </section>

      {/* Why */}
      <section aria-labelledby="home-why-heading" className="relative isolate overflow-hidden bg-brand-dark py-16 lg:py-24">
        <img
          src={wpImage("about-why-background.jpg")}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-brand-dark/75" />
        <div className="container mx-auto">
          <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
            <span aria-hidden="true" className="mx-auto mb-6 block h-1 w-12 rounded-full bg-secondary" />
            <p className="mb-4 font-heading text-xs font-bold uppercase tracking-normal text-secondary sm:text-sm">{hp.whyEyebrow}</p>
            <h2 id="home-why-heading" className="font-heading text-3xl font-bold leading-tight tracking-normal text-primary-foreground md:text-4xl">{hp.whyHeading}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
            {hp.why.map((w, i) => {
              const Icon = whyIcons[i] ?? ShieldCheck;
              return (
                <div key={w.title} className="relative overflow-hidden rounded-lg border border-primary-foreground/20 bg-card p-7 shadow-elevated lg:p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-primary/15 bg-primary/10">
                    <Icon aria-hidden="true" strokeWidth={1.75} className="h-7 w-7 text-brand-cyan-dark" />
                  </div>
                  <h3 className="mb-4 font-heading text-lg font-bold leading-snug tracking-normal text-card-foreground">{w.title}</h3>
                  <p className="text-base leading-7 text-muted-foreground">{w.text}</p>
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-secondary" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 lg:py-24 bg-brand-surface">
        <div className="container mx-auto">
          <p className={eyebrow}>{hp.reviewsEyebrow}</p>
          <h2 className={`${h2} text-center mb-10`}>{hp.reviewsHeading}</h2>
          <ReviewsWidget />
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto">
          <p className={eyebrow}>{hp.areaEyebrow}</p>
          <h2 className={`${h2} text-center mb-3`}>{hp.areaHeading}</h2>
          <p className={sub}>{hp.areaSub}</p>
          <h3 className="font-heading font-semibold text-center mb-6">Cities We Serve:</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {hp.areas.map((a) => {
              const loc = locations.find((l) => l.name.toLowerCase() === normalize(a).toLowerCase());
              const inner = (
                <>
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span>{a}</span>
                </>
              );
              const cls = "flex items-center gap-2 rounded-lg border border-border bg-brand-surface px-3 py-3 h-full text-foreground font-medium";
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
          <div className="mt-8 text-center"><Button asChild className={bookButtonClass}><Link to="/service-area">Explore All Service Areas</Link></Button></div>
        </div>
      </section>

    </main>
    <Footer />
    <MobileStickyCTA />
  </div>
);

export default HomePage;
