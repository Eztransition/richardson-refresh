import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import { Button } from "@/components/ui/button";
import { locations } from "@/config/locations";
import { Link } from "react-router-dom";
import { MapPin, Phone, Truck, Clock, CheckCircle } from "lucide-react";
import { useEffect } from "react";

const ServiceArea = () => {
  useEffect(() => {
    document.title = "Service Areas | Dumpster Rental Dallas-Fort Worth | Dallas Dumpster Rentals";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Dallas Dumpster Rentals serves 22 communities across the Dallas-Fort Worth metroplex. Find dumpster rental services near you. Call (972) 645-6731 for fast delivery."
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary to-cyan-600 py-16 md:py-24">
          <div className="absolute inset-0 bg-black/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Dumpster Rental Service Areas
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Proudly serving 22 communities across the Dallas-Fort Worth metroplex with fast, reliable roll-off dumpster delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold text-lg px-12 py-4 h-14 shadow-lg hover:shadow-xl transition-all"
                >
                  <a
                    href="https://link.eztransition.com/booking/dallas-dumpster-rentals-mj6zf8sxcb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/20 border-white/40 text-white hover:bg-white/30 font-bold h-14 px-10 text-lg"
                >
                  <a href="tel:9726456731">
                    <Phone className="mr-2 h-5 w-5" />
                    (972) 645-6731
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-brand-dark py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-lime-400">22</div>
                <div className="text-sm md:text-base opacity-80">Communities Served</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-lime-400">3</div>
                <div className="text-sm md:text-base opacity-80">Dumpster Sizes</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-lime-400">Same-Day</div>
                <div className="text-sm md:text-base opacity-80">Delivery Available</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-lime-400">7 Days</div>
                <div className="text-sm md:text-base opacity-80">Included Rental</div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Grid */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-brand-dark mb-4">
                Find Dumpster Rentals Near You
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Click on your city below to learn more about our services in your area and book your dumpster today.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  to={`/dumpster-rental-${location.slug}`}
                  className="group bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary text-center"
                >
                  <MapPin className="h-6 w-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-brand-dark group-hover:text-primary transition-colors">
                    {location.name}
                  </span>
                  <span className="block text-sm text-muted-foreground">TX</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-brand-dark mb-4">
                Why Dallas-Fort Worth Trusts Us
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Same-day and next-day delivery available across all service areas in the DFW metroplex.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                <p className="text-muted-foreground">
                  Flat-rate pricing with no hidden fees. Know exactly what you'll pay before you book.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Flexible Rentals</h3>
                <p className="text-muted-foreground">
                  7-day rental period included with every dumpster. Need more time? Just let us know.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Our Service Area
            </h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.7275343371466!2d-96.5901416!3d32.772963499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaeb7b4dd59c2b1cf%3A0xb4bcdbdb885d98ed!2sDallas%20Dumpster%20Rentals!5e0!3m2!1sen!2spt!4v1769174676876!5m2!1sen!2spt"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dallas Dumpster Rentals service area map"
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 lg:py-20 bg-gradient-to-br from-primary via-primary/90 to-cyan-600 text-white">
          <div className="container mx-auto text-center">
            <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                Ready to Book Your Dumpster?
              </h2>
              <p className="text-lg text-white/90">
                Fast delivery, transparent pricing, and easy online booking. Get your roll-off dumpster anywhere in the Dallas-Fort Worth area—reserve yours now.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold text-lg px-12 py-4 h-14 shadow-lg hover:shadow-xl transition-all"
                >
                  <a
                    href="https://link.eztransition.com/booking/dallas-dumpster-rentals-mj6zf8sxcb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
      </main>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default ServiceArea;
