import { Link } from "@tanstack/react-router";
import { Clock, Mail, Phone, ShieldCheck, Wallet, CalendarRange } from "lucide-react";
import { Button } from "@/components/ui/button";
import GoogleMap from "@/components/sections/GoogleMap";
import { ContactForm } from "@/components/site/ContactForm";
import { PageShell, FaqAccordion, ItemList } from "@/components/site/PageShell";
import { RentalSteps, bookButtonClass } from "@/components/sizes/SizePageParts";
import { BOOKING_URL } from "@/config/dumpster-sizes";
import {
  aboutPage as ab,
  aboutFaqs,
  faqPage,
  faqs,
  itemsPage,
  galleryPage as gp,
  contactPage as cp,
  privacyPage,
} from "@/config/site-pages";

const h2 = "text-3xl md:text-4xl font-heading font-bold text-foreground";

export const AboutPage = () => {
  const icons = [ShieldCheck, Wallet, CalendarRange];
  return (
    <PageShell title={ab.heading} heroImage={ab.heroImage} heroDescription={ab.heroDescription}>
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto">
          <h2 className={`${h2} text-center mb-10`}>{ab.storyHeading}</h2>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              {ab.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <img
              src={ab.image}
              alt="Dallas Dumpster Rentals roll-off dumpster"
              loading="lazy"
              className="w-full max-w-md mx-auto rounded-2xl shadow-card object-cover"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="about-why-heading" className="relative isolate overflow-hidden bg-brand-dark py-16 lg:py-24">
        <img
          src={ab.whyBackgroundImage}
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-brand-dark/75" />
        <div className="container mx-auto">
          <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
            <span aria-hidden="true" className="mx-auto mb-6 block h-1 w-12 rounded-full bg-secondary" />
            <p className="mb-4 font-heading text-xs font-bold uppercase tracking-normal text-secondary sm:text-sm">
              {ab.eyebrow}
            </p>
            <h2 id="about-why-heading" className="font-heading text-3xl font-bold leading-tight tracking-normal text-primary-foreground md:text-4xl lg:text-5xl">{ab.whyHeading}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
            {ab.why.map((w, i) => {
              const Icon = icons[i] ?? ShieldCheck;
              return (
                <div key={w.title} className="relative overflow-hidden rounded-lg border border-primary-foreground/20 bg-card p-7 shadow-elevated lg:p-9">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-lg border border-primary/15 bg-primary/10">
                    <Icon aria-hidden="true" strokeWidth={1.75} className="h-7 w-7 text-brand-cyan-dark" />
                  </div>
                  <h3 className="mb-4 font-heading text-xl font-bold leading-snug tracking-normal text-card-foreground">{w.title}</h3>
                  <p className="text-base leading-7 text-muted-foreground">{w.text}</p>
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-secondary" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto max-w-3xl">
          <h2 className={`${h2} text-center mb-10`}>Frequently Asked Questions</h2>
          <FaqAccordion items={aboutFaqs} />
        </div>
      </section>
    </PageShell>
  );
};

export const FaqPage = () => (
  <PageShell title={faqPage.heading}>
    <section className="py-16 lg:py-24 bg-brand-surface">
      <div className="container mx-auto max-w-3xl">
        <h2 className={`${h2} text-center mb-10`}>{faqPage.sectionHeading}</h2>
        <FaqAccordion items={faqs} />
      </div>
    </section>
    <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-cyan-600 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">{faqPage.ctaHeading}</h2>
        <Button asChild size="lg" className={bookButtonClass}>
          <a href={BOOKING_URL}>Book Now</a>
        </Button>
      </div>
    </section>
  </PageShell>
);

export const ItemsPage = () => (
  <PageShell title={itemsPage.heading}>
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className={`${h2} mb-6`}>{itemsPage.sectionHeading}</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
          {itemsPage.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
    <section className="pb-16 lg:pb-24 bg-background">
      <div className="container mx-auto grid lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="rounded-2xl border border-border bg-brand-surface p-8 shadow-card">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6 capitalize">acceptable materials</h3>
          <ItemList items={itemsPage.acceptable} ok />
        </div>
        <div className="rounded-2xl border border-border bg-destructive/5 p-8 shadow-card">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6 capitalize">prohibited materials</h3>
          <ItemList items={itemsPage.prohibited} ok={false} />
        </div>
      </div>
    </section>
  </PageShell>
);

export const GalleryPage = () => (
  <PageShell title={gp.heading}>
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto">
        <h2 className={`${h2} text-center mb-10`}>Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {gp.images.map((img) => (
            <a key={img.src} href={img.src} target="_blank" rel="noopener" className="block overflow-hidden rounded-xl shadow-card">
              <img src={img.src} alt={img.alt} loading="lazy" className="aspect-square w-full object-cover hover:scale-105 transition-transform duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 lg:py-24 bg-brand-surface">
      <div className="container mx-auto max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
        <div>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{gp.subHeading}</h3>
          <p>{gp.intro}</p>
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-foreground mb-3">{gp.needHeading}</h3>
          <p className="mb-3">{gp.needText}</p>
          <ul className="list-disc pl-6 space-y-1">
            {gp.sizes.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-foreground mb-3">{gp.checklistHeading}</h3>
          <ul className="list-disc pl-6 space-y-1">
            {gp.checklist.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold text-foreground mb-3">{gp.areaHeading}</h3>
          <p>
            {gp.areaText} <Link to="/" className="text-primary font-semibold hover:underline">View all service areas</Link>
          </p>
        </div>
      </div>
    </section>
    <RentalSteps />
  </PageShell>
);

export const ContactPage = () => {
  const cards = [
    { Icon: Phone, title: "(972) 645-6731", sub: "Call or Text Anytime", href: "tel:9726456731" },
    { Icon: Mail, title: "Info@dallas-dumpster.com", sub: "Email Us", href: "mailto:Info@dallas-dumpster.com" },
    { Icon: Clock, title: "Mon-Fri: 8:00 AM - 7:00 PM   Sat: 09:00 AM - 1:00 PM", sub: "Business Hours" },
  ];
  return (
    <PageShell title={cp.heading} variant="call">
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto">
          <h2 className={`${h2} text-center mb-10`}>{cp.infoHeading}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {cards.map(({ Icon, title, sub, href }) => {
              const inner = (
                <>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <p className="font-heading font-bold text-foreground break-words">{title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{sub}</p>
                </>
              );
              const cls = "block text-center bg-brand-surface rounded-xl p-8 border border-border shadow-card";
              return href ? <a key={sub} href={href} className={cls}>{inner}</a> : <div key={sub} className={cls}>{inner}</div>;
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-brand-surface">
        <div className="container mx-auto grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="lg:order-2">
            <h2 className="mb-6 text-2xl font-heading font-bold text-foreground md:text-3xl">{cp.formHeading}</h2>
            <ContactForm />
          </div>
          <div className="lg:order-1">
            <GoogleMap location="Dallas" variant="panel" heading={cp.mapHeading} height={796} />
          </div>
        </div>
      </section>


    </PageShell>
  );
};

export const PrivacyPage = () => (
  <PageShell title={privacyPage.heading} variant="call">
    <section className="py-16 lg:py-24 bg-background">
      <article className="container mx-auto max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
        {privacyPage.blocks.map((b, i) =>
          typeof b === "string" ? (
            <p key={i}>{b}</p>
          ) : "h" in b ? (
            <h2 key={i} className="text-xl font-heading font-bold text-foreground pt-4">{b.h}</h2>
          ) : (
            <ul key={i} className="list-disc pl-6 space-y-1">
              {b.list.map((l) => <li key={l}>{l}</li>)}
            </ul>
          ),
        )}
      </article>
    </section>
  </PageShell>
);
