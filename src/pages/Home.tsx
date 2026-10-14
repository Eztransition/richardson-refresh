import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import Hero from "@/components/sections/Hero";
import PricingCards from "@/components/sections/PricingCards";
import ServiceArea from "@/components/sections/ServiceArea";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import GoogleMap from "@/components/sections/GoogleMap";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Button } from "@/components/ui/button";
import { CalendarCheck, Truck, MessageSquareText, Star, Phone, ShieldCheck, DollarSign, Clock } from "lucide-react";
import { useEffect } from "react";
import { applyPageSeo } from "@/lib/seo";

const BOOKING_URL = "https://link.eztransition.com/booking/dallas-dumpster-rentals-mj6zf8sxcb";

const features = [
  { icon: CalendarCheck, title: "Book Online", text: "Easy Online Order" },
  { icon: MessageSquareText, title: "Text Us When Finished", text: "And We'll Pick It Up" },
  { icon: Truck, title: "Same Day Delivery", text: "Always On Time" },
];

const whyChoose = [
  {
    icon: ShieldCheck,
    title: "Reliable Rental Service",
    text: "Dallas Dumpster rental have dumpster rentals of all sizes to handle your projects no matter how big or small. request quote or call today to get started.",
  },
  {
    icon: DollarSign,
    title: "Affordable Rental Rates",
    text: "We strive to make renting a dumpster cost-effective and offer competitive rental rates. With complete pick up and drop off charges, we make cleaning up your projects simpler than ever.",
  },
  {
    icon: Clock,
    title: "Flexible Rental Periods",
    text: "Dallas Dumpster rental offer variable rental periods, making it easier than ever to rent a dumpster without worrying about running out of time.",
  },
];

const reviews = [
  { name: "Simon Hawkins", date: "Oct 12, 2026", text: "Excellent service. No drama. Just got the job done. Will definitely use again." },
  { name: "Amber Hentz", date: "Sep 23, 2026", text: "I had an awesome experience with Dallas Dumpster Rentals! They made the whole process easy, and I'm so glad I chose them. I'd definitely recommend them to anyone who needs a dumpster rental." },
  { name: "Francisco Alderete", date: "Sep 21, 2026", text: "Great dumpster and driver" },
  { name: "tina wang", date: "Sep 03, 2026", text: "Quick responses, cover most of the Dallas areas. Recommend!!" },
  { name: "Alberto Medina", date: "Aug 31, 2026", text: "Excellent service! Everything was perfect, especially the timing. Fast, reliable, and professional. I'm very satisfied and would definitely recommend their service!" },
  { name: "Bill Lewis", date: "Aug 20, 2026", text: "Great experience with Dallas Dumpster. Professional and attentive to customer needs. Highly recommend." },
  { name: "Brenita McBride", date: "Aug 09, 2026", text: "Excellent service, delivered the same day, the size was exactly what we needed. Was prompt on arrival to take the full dumpster away. Dumpster was clean, no problem in loading it. Would highly recommend this company and owner!" },
  { name: "Lisa Santulli", date: "Aug 07, 2026", text: "Super clean new dumpster, fast reliable service. I highly recommend." },
  { name: "David Cashion", date: "Jul 21, 2026", text: "Absolutely the best experience ever. I could only hope and wish that ALL companies were as honest, upfront, informative and professional. You will never find better service and the price is unbeatable. I look forward to using them again." },
];

const Home = () => {
  useEffect(() => {
    applyPageSeo({
      title: "Dumpster Rental Dallas-Fort Worth | Dallas Dumpster Rentals",
      description:
        "Book 10, 15, or 20-yard roll-off dumpsters across the Dallas-Fort Worth metroplex. Fast delivery, easy online booking, transparent pricing. Call (972) 645-6731.",
      path: "/",
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <LocalBusinessSchema location="Dallas" state="TX" />
      <Header />

      <main className="flex-1">
        <Hero
          location="Dallas"
          state="TX"
          description="Serving Dallas, TX and Surrounding Areas. Fast, reliable roll-off dumpster delivery for home cleanouts, remodeling projects, and construction sites. Book online in minutes."
        />

        {/* Feature Highlights */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-4 bg-brand-surface rounded-xl p-6 shadow-card animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services - Pricing */}
        <PricingCards location="Dallas" />

        {/* Welcome / About */}
        <section className="py-16 lg:py-24 bg-brand-surface">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Dallas Dumpster Rentals
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to Dallas Dumpster Rentals, your premier choice for comprehensive dumpster rental solutions in Dallas, TX and surrounding areas. Our team is dedicated to providing timely and efficient service, ensuring your project, big or small, progresses smoothly with the support of our top-quality dumpsters. Trust us to meet your needs with professionalism and expert care. We are dedicated to providing the best rolloff dumpster rental in DFW areas. We offer professional and reliable dumpster rental services. Our aim is to offer a five-star, best-in-class customer service experience, whether this is your first dumpster rental or you rent dumpsters every week! We are committed to making the process of renting a dumpster easy, affordable, hassle-free.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Why Choose Dallas Dumpster Rentals
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {whyChoose.map((item, index) => (
                <div
                  key={item.title}
                  className="text-center p-6 animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 lg:py-24 bg-brand-surface">
          <div className="container mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                What Customers Are Saying
              </h2>
              <p className="text-lg text-muted-foreground">
                Customer Reviews for Dallas Dumpster Rentals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {reviews.map((review, index) => (
                <div
                  key={review.name}
                  className="bg-background rounded-xl p-6 shadow-card animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-secondary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-semibold text-foreground">{review.name}</span>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Easy Online Ordering CTA */}
        <section className="py-12 lg:py-20 bg-gradient-to-br from-primary via-primary/90 to-cyan-600 text-white">
          <div className="container mx-auto text-center">
            <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                Easy Online Ordering 24/7
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold text-lg px-12 py-4 h-14 shadow-lg hover:shadow-xl transition-all"
                >
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book Now
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 text-white bg-white/20 hover:bg-white hover:text-primary font-heading font-semibold text-lg px-10 py-4 h-14 transition-all"
                >
                  <a href="tel:9726456731">
                    <Phone className="mr-2 h-6 w-6" />
                    Call (972) 645-6731
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <ServiceArea location="Dallas" />

        {/* Map */}
        <GoogleMap location="Dallas" />

        {/* FAQs */}
        <FAQSection location="Dallas" />

        {/* Final CTA */}
        <FinalCTA location="Dallas" state="TX" />
      </main>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default Home;
