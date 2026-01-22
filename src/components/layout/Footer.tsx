import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = [
  { label: "Home", href: "https://dallas-dumpster.com/" },
  { label: "About", href: "https://dallas-dumpster.com/about-us/" },
  { label: "Service Area", href: "https://dallas-dumpster.com/service-area/" },
  { label: "FAQS", href: "https://dallas-dumpster.com/faqs/" },
  { label: "Gallery", href: "https://dallas-dumpster.com/gallery/" },
  { label: "Contact", href: "https://dallas-dumpster.com/contact-us/" },
  { label: "Privacy Policy", href: "https://dallas-dumpster.com/privacy-policy/" },
];

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-primary-foreground">
      <div className="container mx-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Address */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-heading font-semibold text-lg text-primary-foreground">
                  707 Opal Lane Mesquite, TX 75149
                </h3>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-4">
            <a href="tel:9726456731" className="flex items-start gap-3 hover:opacity-90 transition-opacity">
              <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-heading font-semibold text-lg text-primary-foreground">
                  972-645-6731
                </h3>
              </div>
            </a>
          </div>

          {/* Email */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-primary-foreground/80 mb-1">Email Us:</p>
              <a
                href="mailto:Info@dallas-dumpster.com"
                className="flex items-start gap-3 hover:opacity-90 transition-opacity"
              >
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="font-heading font-semibold text-lg text-primary-foreground">
                  Info@dallas-dumpster.com
                </span>
              </a>
            </div>
          </div>

          {/* Logo + Hours */}
          <div className="space-y-4">
            <img src={logo} alt="Dallas Dumpster Rentals" className="h-16 w-auto" />
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-primary-foreground/80 mb-1">Business Hours:</p>
                <p className="text-primary-foreground">Mon-Fri: 8:00 AM - 7:00 PM</p>
                <p className="text-primary-foreground">Sat: 09:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-10 pt-8 border-t border-brand-gray/30">
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-primary-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;