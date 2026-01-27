import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

interface FooterLink {
  label: string;
  href: string;
  isInternal?: boolean;
}

const footerLinks: FooterLink[] = [
  { label: "Home", href: "https://dallas-dumpster.com/" },
  { label: "About", href: "https://dallas-dumpster.com/about-us/" },
  { label: "Service Area", href: "https://local.dallas-dumpster.com/" },
  { label: "FAQS", href: "https://dallas-dumpster.com/frequently-asked-questions/" },
  { label: "Gallery", href: "https://dallas-dumpster.com/gallery/" },
  { label: "Blog", href: "https://blog.dallas-dumpster.com/" },
  { label: "Contact", href: "https://dallas-dumpster.com/contact-us/" },
  { label: "Privacy Policy", href: "https://dallas-dumpster.com/privacy-policy/" },
];

const Footer = () => {
  return (
    <footer className="bg-brand-gray text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
          {/* Left - Contact Info */}
          <div className="space-y-2">
            <p className="text-white/90 text-sm">707 Opal Lane Mesquite, TX 75149</p>
            <a 
              href="tel:9726456731" 
              className="block text-lg font-heading font-bold text-white hover:text-white/80 transition-colors"
            >
              (972) 645-6731
            </a>
            <div className="pt-2">
              <p className="text-white/80 text-sm">Email Us:</p>
              <a
                href="mailto:Info@dallas-dumpster.com"
                className="text-lg font-heading font-semibold text-white hover:text-white/80 transition-colors"
              >
                Info@dallas-dumpster.com
              </a>
            </div>
          </div>

          {/* Center - Logo */}
          <div className="flex justify-center">
            <img src={logo} alt="Dallas Dumpster Rentals" className="h-36 w-auto" />
          </div>

          {/* Right - Business Hours */}
          <div className="space-y-2">
            <p className="text-white font-heading font-bold text-lg">Business Hours:</p>
            <p className="text-white text-sm">Mon-Fri: 8:00 AM - 7:00 PM</p>
            <p className="text-white text-sm">Sat: 09:00 AM - 1:00 PM</p>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-white/20">
        <div className="container mx-auto py-6">
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {footerLinks.map((link) => (
              link.isInternal ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-white/90 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/90 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-brand-dark py-4">
        <div className="container mx-auto">
          <p className="text-center text-sm text-white/80">
            © {new Date().getFullYear()} Dallas Dumpster Rentals All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;