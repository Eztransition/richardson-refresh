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
    <footer className="bg-brand-gray text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
          {/* Left - Contact Info */}
          <div className="space-y-2">
            <p className="text-white/90">707 Opal Lane Mesquite, TX 75149</p>
            <a 
              href="tel:9726456731" 
              className="block text-2xl font-heading font-bold text-white hover:text-white/80 transition-colors"
            >
              972-645-6731
            </a>
            <div className="pt-2">
              <p className="text-white/80">Email Us:</p>
              <a
                href="mailto:Info@dallas-dumpster.com"
                className="text-xl font-heading font-semibold text-white hover:text-white/80 transition-colors"
              >
                Info@dallas-dumpster.com
              </a>
            </div>
          </div>

          {/* Center - Logo */}
          <div className="flex justify-center">
            <img src={logo} alt="Dallas Dumpster Rentals" className="h-28 w-auto" />
          </div>

          {/* Right - Business Hours */}
          <div className="space-y-2">
            <p className="text-white font-heading font-semibold text-lg">Business Hours:</p>
            <p className="text-white font-medium">Mon-Fri: 8:00 AM - 7:00 PM</p>
            <p className="text-white font-medium">Sat: 09:00 AM - 1:00 PM</p>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-white/20">
        <div className="container mx-auto py-6">
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/90 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
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