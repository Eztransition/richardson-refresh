import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Phone, Clock, Calendar } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "https://dallas-dumpster.com/", paths: ["/"] },
  { label: "Dumpster Size", href: "https://dallas-dumpster.com/dumpster-size/", paths: [] },
  { label: "Service Area", href: "https://dallas-dumpster.com/service-area/", paths: ["/richardson-tx"] },
  { label: "FAQs", href: "https://dallas-dumpster.com/faqs/", paths: [] },
  { label: "Acceptable & Prohibited Items", href: "https://dallas-dumpster.com/acceptable-prohibited-items/", paths: [] },
  { label: "Gallery", href: "https://dallas-dumpster.com/gallery/", paths: [] },
  { label: "Contact Us", href: "https://dallas-dumpster.com/contact-us/", paths: [] },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (paths: string[]) => {
    return paths.some(path => location.pathname === path);
  };

  return (
    <header className="w-full">
      {/* Top Bar - Desktop */}
      <div className="bg-white">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          {/* Logo */}
          <a href="https://dallas-dumpster.com/" className="flex-shrink-0">
            <img src={logo} alt="Dallas Dumpster Rentals" className="h-16 w-auto" />
          </a>

          {/* Mobile Phone + Menu */}
          <div className="flex items-center gap-4 lg:hidden">
            <a href="tel:9726456731" className="flex items-center gap-2 text-primary">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">972-645-6731</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-primary p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Info Bar */}
          <div className="hidden lg:flex items-center gap-8">
            {/* View Dumpsters */}
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" />
              <div>
                <p className="font-heading font-semibold text-sm text-brand-dark">View Dumpsters</p>
                <p className="text-xs text-brand-gray">& Book Online</p>
              </div>
            </div>

            {/* Phone */}
            <a href="tel:9726456731" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <p className="font-heading font-semibold text-sm text-brand-dark">(972) 645-6731</p>
                <p className="text-xs text-brand-gray">Call</p>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" />
              <div>
                <p className="font-heading font-semibold text-sm leading-tight text-brand-dark">
                  Mon-Fri: 08:00am - 7:00pm<br />
                  Sat: 09:00 am-1:00 pm
                </p>
                <p className="text-xs text-brand-gray">Book Today!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Desktop */}
      <nav className="bg-brand-dark hidden lg:block border-t border-brand-gray/20">
        <div className="container mx-auto">
          <ul className="flex items-center justify-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`block px-4 py-4 text-sm font-heading font-medium uppercase tracking-wide transition-colors ${
                    isActive(link.paths)
                      ? "bg-secondary text-secondary-foreground"
                      : "text-primary-foreground hover:bg-primary/10"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-brand-gray/20">
          <nav className="container mx-auto py-4">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`block px-4 py-3 text-sm font-heading font-medium uppercase tracking-wide transition-colors ${
                      isActive(link.paths)
                        ? "bg-secondary text-secondary-foreground"
                        : "text-primary-foreground hover:bg-primary/10"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;