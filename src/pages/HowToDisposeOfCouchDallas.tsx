import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Sofa, Truck, Heart, Trash2, MapPin, CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BOOKING_URL = "https://link.eztransition.com/booking/dallas-dumpster-rentals-mj6zf8sxcb";

const HowToDisposeOfCouchDallas = () => {
  useEffect(() => {
    const title = "How to Dispose of a Couch in Dallas, TX | Couch Removal Guide";
    const description =
      "Complete guide to couch removal & disposal in Dallas-Fort Worth. Donation centers, bulk trash pickup schedules by city, and dumpster rental options for full cleanouts.";

    document.title = title;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "article", "property");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "/resources/how-to-dispose-of-a-couch-in-dallas";

    // JSON-LD Article schema
    const ldId = "couch-disposal-jsonld";
    document.getElementById(ldId)?.remove();
    const ld = document.createElement("script");
    ld.id = ldId;
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Dispose of a Couch in Dallas, TX",
      description,
      step: [
        { "@type": "HowToStep", name: "Decide: donate, trash, or dumpster", text: "Assess the couch's condition to choose the right disposal route." },
        { "@type": "HowToStep", name: "Donate if usable", text: "Contact local charities like Goodwill, Salvation Army, or Family Gateway for free pickup." },
        { "@type": "HowToStep", name: "Schedule bulk trash pickup", text: "Use your city's bulky-item pickup schedule for single-couch disposal." },
        { "@type": "HowToStep", name: "Rent a dumpster for cleanouts", text: "For multiple items or full cleanouts, a roll-off dumpster is the fastest option." },
      ],
    });
    document.head.appendChild(ld);

    return () => {
      document.getElementById(ldId)?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-br from-brand-dark via-brand-dark to-primary/20 text-white py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-5 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 rounded-full px-4 py-1.5 text-sm font-heading font-semibold text-secondary">
                <Sofa className="h-4 w-4" />
                Dallas–Fort Worth Disposal Guide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                How to Dispose of a Couch in Dallas, TX
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                A practical guide to couch removal in DFW — from free donation pickups and bulk trash
                schedules to renting a roll-off dumpster for bigger cleanouts.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold text-lg h-14 px-10">
                  <a href={BOOKING_URL}>Book a Dumpster</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white bg-white/10 hover:bg-white hover:text-primary font-heading font-semibold text-lg h-14 px-10">
                  <a href="tel:9726456731">
                    <Phone className="mr-2 h-5 w-5" />
                    (972) 645-6731
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <article className="container mx-auto px-4 py-12 lg:py-20">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Intro */}
            <section className="space-y-4">
              <p className="text-lg text-brand-dark leading-relaxed">
                Getting rid of an old couch in Dallas–Fort Worth doesn't have to be complicated. Whether
                you're upgrading furniture, moving, or clearing out an estate, you have three good options:
                donate it, schedule city bulk pickup, or roll a dumpster onto your driveway and toss it
                yourself. This guide walks through each so you can pick the right one — fast.
              </p>
            </section>

            {/* Quick Choice */}
            <section className="bg-muted/40 border border-border rounded-2xl p-6 lg:p-8">
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-4">Quick Pick: Which Option Is Right for You?</h2>
              <ul className="space-y-3 text-brand-dark">
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Couch is clean &amp; usable?</strong> Donate it — free pickup from several DFW charities.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Just one couch, not in a hurry?</strong> Schedule your city's bulk trash pickup.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Whole-house cleanout or remodel debris?</strong> Rent a roll-off dumpster.</span>
                </li>
              </ul>
            </section>

            {/* Option 1: Donate */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-brand-dark">Option 1: Donate Your Couch</h2>
              </div>
              <p className="text-brand-dark leading-relaxed">
                If your couch is structurally sound, free of stains, tears, pet damage, and odors, a
                charity will likely take it — and most offer free pickup in the DFW area.
              </p>
              <h3 className="text-xl font-heading font-semibold text-brand-dark pt-2">Local DFW Donation Centers</h3>
              <ul className="space-y-3">
                <li className="bg-white border border-border rounded-xl p-4">
                  <p className="font-heading font-semibold text-brand-dark">Goodwill Dallas</p>
                  <p className="text-sm text-brand-gray">Drop-off at any North Texas location or schedule a pickup online.</p>
                </li>
                <li className="bg-white border border-border rounded-xl p-4">
                  <p className="font-heading font-semibold text-brand-dark">The Salvation Army DFW</p>
                  <p className="text-sm text-brand-gray">Free home pickup for gently-used furniture — schedule via satruck.org.</p>
                </li>
                <li className="bg-white border border-border rounded-xl p-4">
                  <p className="font-heading font-semibold text-brand-dark">Family Gateway / Genesis Women's Shelter</p>
                  <p className="text-sm text-brand-gray">Furniture goes directly to local families transitioning out of crisis.</p>
                </li>
                <li className="bg-white border border-border rounded-xl p-4">
                  <p className="font-heading font-semibold text-brand-dark">Habitat for Humanity ReStore</p>
                  <p className="text-sm text-brand-gray">Multiple DFW locations accept furniture donations and offer pickups for qualifying items.</p>
                </li>
              </ul>
              <p className="text-sm text-brand-gray italic">
                Tip: Snap a few photos before calling. Most charities will ask you to send pictures so they
                can confirm the couch meets their condition standards before scheduling a truck.
              </p>
            </section>

            {/* Option 2: Bulk Trash */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Trash2 className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-brand-dark">Option 2: City Bulk Trash Pickup</h2>
              </div>
              <p className="text-brand-dark leading-relaxed">
                Every major DFW city offers some form of bulky-item pickup for residents. Schedules vary —
                here's a quick reference for the most common service areas:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white border border-border rounded-xl overflow-hidden">
                  <thead className="bg-brand-dark text-white">
                    <tr>
                      <th className="text-left p-4 font-heading text-sm uppercase tracking-wide">City</th>
                      <th className="text-left p-4 font-heading text-sm uppercase tracking-wide">Bulk Pickup</th>
                      <th className="text-left p-4 font-heading text-sm uppercase tracking-wide">How to Schedule</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-t border-border">
                      <td className="p-4 font-semibold">Dallas</td>
                      <td className="p-4">Once per month on your brush/bulky week</td>
                      <td className="p-4">Auto-scheduled by route — check dallascityhall.com</td>
                    </tr>
                    <tr className="border-t border-border bg-muted/30">
                      <td className="p-4 font-semibold">Plano</td>
                      <td className="p-4">Weekly with regular trash (up to 4 cubic yards)</td>
                      <td className="p-4">Set out the night before pickup day</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-semibold">Richardson</td>
                      <td className="p-4">Weekly with brush &amp; bulky service</td>
                      <td className="p-4">Set out by 7 AM on your collection day</td>
                    </tr>
                    <tr className="border-t border-border bg-muted/30">
                      <td className="p-4 font-semibold">Garland</td>
                      <td className="p-4">Once per month on scheduled bulky week</td>
                      <td className="p-4">Check your address on garlandtx.gov</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-semibold">Rowlett</td>
                      <td className="p-4">Weekly bulky pickup with trash service</td>
                      <td className="p-4">Place curbside by 7 AM</td>
                    </tr>
                    <tr className="border-t border-border bg-muted/30">
                      <td className="p-4 font-semibold">Rockwall</td>
                      <td className="p-4">Bi-weekly bulk collection</td>
                      <td className="p-4">Schedule per Republic Services calendar</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-brand-gray">
                Rules vary: most cities require items to be at the curb (not in the alley) and placed out
                no earlier than 24 hours before pickup. Confirm directly with your city's sanitation
                department before setting out a couch.
              </p>
            </section>

            {/* Option 3: Dumpster */}
            <section className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Truck className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-brand-dark">Option 3: Rent a Roll-Off Dumpster</h2>
              </div>
              <p className="text-brand-dark leading-relaxed">
                A donation pickup or city bulk run works for one couch. But if you've got a sectional plus
                a recliner plus the kids' old mattresses — or you're doing a full move-out, estate cleanout,
                or remodel — renting a dumpster is faster, cheaper per item, and lets you work on your own
                schedule.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white border border-border rounded-xl p-5">
                  <p className="font-heading font-bold text-brand-dark mb-1">10 Yard Dumpster</p>
                  <p className="text-sm text-brand-gray">Perfect for 1–2 large furniture items plus boxes. Fits in a single driveway space.</p>
                </div>
                <div className="bg-white border border-border rounded-xl p-5">
                  <p className="font-heading font-bold text-brand-dark mb-1">15 Yard Dumpster</p>
                  <p className="text-sm text-brand-gray">Single-room or garage cleanout — couch, chairs, shelving, and debris.</p>
                </div>
                <div className="bg-white border border-border rounded-xl p-5 sm:col-span-2">
                  <p className="font-heading font-bold text-brand-dark mb-1">20 Yard Dumpster</p>
                  <p className="text-sm text-brand-gray">Multi-room or whole-house cleanout, estate clearouts, and remodels.</p>
                </div>
              </div>
              <div className="bg-primary/10 border-l-4 border-primary rounded-r-xl p-5">
                <p className="text-brand-dark">
                  <strong>Why it wins for bigger jobs:</strong> Flat rate, 7-day rental, no per-item fees,
                  and you load on your timeline — no waiting on a city pickup window or charity truck.
                </p>
              </div>
            </section>

            {/* What NOT to do */}
            <section className="space-y-4">
              <h2 className="text-3xl font-heading font-bold text-brand-dark">What NOT to Do</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-brand-dark">
                  <span className="text-destructive font-bold">✕</span>
                  <span>Don't dump a couch on a vacant lot, alley, or roadside — illegal dumping fines in
                  Dallas County start around $500 and can reach $4,000.</span>
                </li>
                <li className="flex gap-3 text-brand-dark">
                  <span className="text-destructive font-bold">✕</span>
                  <span>Don't push it next to a dumpster you don't own — apartment and retail dumpsters are
                  monitored and you can be billed for overage.</span>
                </li>
                <li className="flex gap-3 text-brand-dark">
                  <span className="text-destructive font-bold">✕</span>
                  <span>Don't burn it. Open burning of furniture is prohibited in nearly every DFW
                  municipality.</span>
                </li>
              </ul>
            </section>

            {/* Local note */}
            <section className="bg-brand-dark text-white rounded-2xl p-8 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-secondary" />
                <h2 className="text-2xl font-heading font-bold">Serving the Entire DFW Metroplex</h2>
              </div>
              <p className="text-white/90">
                We deliver roll-off dumpsters across Dallas, Plano, Richardson, Garland, Rowlett, Rockwall,
                Allen, Wylie, Forney, Sachse, Murphy, Addison, Highland Park, University Park, DeSoto,
                Duncanville, Cedar Hill, Lancaster, Hutchins, Balch Springs, Seagoville, and Sunnyvale.
              </p>
              <Link
                to="/service-area"
                className="inline-flex items-center gap-2 font-heading font-semibold text-secondary hover:underline"
              >
                See all service areas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </section>

            {/* Final CTA */}
            <section className="text-center bg-gradient-to-br from-primary to-cyan-600 text-white rounded-2xl p-10 space-y-5">
              <h2 className="text-3xl font-heading font-bold">Ready to Get That Couch Out of Your House?</h2>
              <p className="text-white/90 text-lg">
                Book a dumpster online in under 2 minutes, or call us and we'll handle the details.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold text-lg h-14 px-10">
                  <a href={BOOKING_URL}>Book Online Now</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white/30 text-white bg-white/10 hover:bg-white hover:text-primary font-heading font-semibold text-lg h-14 px-10">
                  <a href="tel:9726456731">
                    <Phone className="mr-2 h-5 w-5" />
                    (972) 645-6731
                  </a>
                </Button>
              </div>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default HowToDisposeOfCouchDallas;
