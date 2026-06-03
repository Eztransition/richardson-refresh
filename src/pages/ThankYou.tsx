import { CheckCircle2, Mail, MessageSquare, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    document.title = "Thank You | Dallas Dumpster Rentals";
    const desc = "Thanks for booking your dumpster rental with Dallas Dumpster. Check your email or text messages for follow-up instructions.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, nofollow");
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gradient-to-br from-background via-background to-primary/5">
        <section className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary/20 border-4 border-secondary">
              <CheckCircle2 className="h-14 w-14 text-secondary-foreground" strokeWidth={2.5} />
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark">
                Thank You!
              </h1>
              <p className="text-xl md:text-2xl font-heading font-semibold text-primary">
                Your dumpster rental is booked.
              </p>
              <p className="text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed">
                Thanks for scheduling your dumpster rental with Dallas Dumpster.
                Please check your <span className="font-semibold text-brand-dark">email</span> or{" "}
                <span className="font-semibold text-brand-dark">text messages</span> for follow-up instructions.
              </p>
            </div>

            {/* What's Next */}
            <div className="bg-white rounded-2xl shadow-lg border border-border p-8 text-left mt-12">
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-6 text-center">
                What Happens Next?
              </h2>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-brand-dark">Confirmation</h3>
                    <p className="text-brand-gray">
                      You'll receive an email and text confirming your booking details.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-brand-dark">Delivery</h3>
                    <p className="text-brand-gray">
                      Your dumpster will be delivered on your scheduled date — fast and on time.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-brand-dark">Pickup</h3>
                    <p className="text-brand-gray">
                      Fill it up, then we'll pick it up at the end of your 7-day rental period.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact card */}
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <a
                href="tel:9726456731"
                className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl border border-border hover:border-primary hover:shadow-md transition-all"
              >
                <Phone className="h-6 w-6 text-primary" />
                <p className="text-xs text-brand-gray uppercase tracking-wide">Call Us</p>
                <p className="font-heading font-semibold text-brand-dark">(972) 645-6731</p>
              </a>
              <a
                href="mailto:Info@dallas-dumpster.com"
                className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl border border-border hover:border-primary hover:shadow-md transition-all"
              >
                <Mail className="h-6 w-6 text-primary" />
                <p className="text-xs text-brand-gray uppercase tracking-wide">Email</p>
                <p className="font-heading font-semibold text-brand-dark text-sm break-all">
                  Info@dallas-dumpster.com
                </p>
              </a>
              <div className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl border border-border">
                <Clock className="h-6 w-6 text-primary" />
                <p className="text-xs text-brand-gray uppercase tracking-wide">Hours</p>
                <p className="font-heading font-semibold text-brand-dark text-sm text-center leading-tight">
                  Mon-Fri 8AM-7PM<br />Sat 9AM-1PM
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold text-lg px-10 h-14"
              >
                <a href="/">Back to Home</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 font-heading font-semibold text-lg px-10 h-14"
              >
                <a href="tel:9726456731">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (972) 645-6731
                </a>
              </Button>
            </div>

            <p className="text-sm text-brand-gray flex items-center justify-center gap-2 pt-4">
              <MessageSquare className="h-4 w-4" />
              Didn't get a confirmation? Check your spam folder or give us a call.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
